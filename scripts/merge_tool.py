"""The merge tool: squash-merges the open PRs that are ready, then cleans up after PRs that are MERGED.

    python3 scripts/merge_tool.py [--dry-run] [--clean-only]

A PR is ready when its base is main, it is not a draft, GitHub reports it MERGEABLE and every check has passed. A
repo with no .github/workflows gets no checks, so none are waited for. The tool doesn't wait: a PR with pending checks is skipped and a later run catches it. Each PR gets one line, merged or
skipped with the reason.

Then, for every local branch whose PR is MERGED it removes the branch's worktree, its local branch and its remote branch,
then fast-forwards the main checkout's `main`. A branch with no PR is cleaned the same way when every commit on it has
landed: its tip is in main (an empty branch) or in a MERGED PR's head (one step of a stack merged as a single PR). It
A research/ or prototype/ branch with no PR whose last commit is over 3 days old loses its worktree and local branch, but
its remote branch stays, since that is where its commits live on. It prints one line per branch that has a PR, has
landed or is one of those: cleaned, or skipped with the reason. The other branches with no PR get one count line.
--clean-only skips the merging and starts here. --dry-run prints the same plan and changes nothing. See "Merge and clean up" in docs/agents/issue-tracker.md.
"""

import argparse
import json
import subprocess
import sys
import time
from pathlib import Path

# Branches with no PR whose commits are kept on origin rather than landed: cleaned locally once their last commit is
# this old.
PARKED_PREFIXES = ("research/", "prototype/")
PARKED_DAYS = 3

EXIT_INSTRUCTION = (
    "skipped (this is your worktree: ExitWorktree with action remove and discard_changes true, then run the merge tool again)"
)


class ToolError(Exception):
    """A git or gh call failed. One branch's line reports it; the run goes on."""


def run(directory: Path, *command: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(command, cwd=directory, capture_output=True, text=True)


def short(message: str) -> str:
    """The last non-empty line of a stderr: git puts its `fatal:` or `error:` there."""
    lines = [line.strip() for line in message.splitlines() if line.strip()]
    return lines[-1] if lines else "no message"


def git(directory: Path, *args: str) -> str:
    done = run(directory, "git", *args)
    if done.returncode != 0:
        raise ToolError(f"git {' '.join(args)} failed: {short(done.stderr)}")
    return done.stdout.strip()


def worktrees(directory: Path) -> list[dict[str, str]]:
    """Every worktree, the main checkout first, as {"worktree": path, "branch": "refs/heads/..."}."""
    entries = []
    for block in git(directory, "worktree", "list", "--porcelain").split("\n\n"):
        entry = {key: value for key, _, value in (line.partition(" ") for line in block.splitlines())}
        if entry:
            entries.append(entry)
    return entries


def pull_requests(directory: Path, branch: str) -> list[dict]:
    """The PRs from `branch`, read from their JSON. A PR's state is never inferred from an exit code."""
    done = run(directory, "gh", "pr", "list", "--head", branch, "--state", "all", "--json", "number,state,headRefOid")
    if done.returncode != 0:
        raise ToolError(f"gh pr list for {branch} failed: {short(done.stderr)}")
    return json.loads(done.stdout or "[]")


FAILED = {"FAILURE", "ERROR", "CANCELLED", "TIMED_OUT", "ACTION_REQUIRED", "STARTUP_FAILURE"}
PASSED = {"SUCCESS", "NEUTRAL", "SKIPPED"}


def check_outcome(check: dict) -> str:
    """One entry of a PR's statusCheckRollup as "passed", "failed" or "pending". A CheckRun has status and conclusion; a
    StatusContext has only state."""
    result = check.get("conclusion") if check.get("__typename") == "CheckRun" else check.get("state")
    if result in FAILED:
        return "failed"
    if check.get("__typename") == "CheckRun" and check.get("status") != "COMPLETED":
        return "pending"
    return "passed" if result in PASSED else "pending"


def not_ready(pr: dict, has_ci: bool) -> str | None:
    """Why a PR can't be merged now, or None when it is ready. Anything that is not a clear yes is a skip. `has_ci` is
    whether the repo defines workflows: without them a PR never gets checks, so none are waited for."""
    if pr["baseRefName"] != "main":
        return f"stacked on {pr['baseRefName']}"
    if pr["isDraft"]:
        return "draft"
    if pr["mergeable"] == "CONFLICTING":
        return "conflicts"
    if pr["mergeable"] != "MERGEABLE":
        return "mergeability not known yet"
    outcomes = {check_outcome(check) for check in pr["statusCheckRollup"]}
    if "failed" in outcomes:
        return "failed checks"
    # With CI, no checks at all means CI hasn't registered yet (just after a push), not that every check passed.
    if "pending" in outcomes or (has_ci and not outcomes):
        return "pending checks"
    return None


def open_pull_requests(directory: Path) -> list[dict]:
    done = run(
        directory,
        "gh",
        "pr",
        "list",
        "--state",
        "open",
        "--limit",
        "200",
        "--json",
        "number,headRefName,baseRefName,isDraft,mergeable,statusCheckRollup",
    )
    if done.returncode != 0:
        raise ToolError(f"gh pr list failed: {short(done.stderr)}")
    return json.loads(done.stdout or "[]")


def merge_ready(main: Path, dry_run: bool) -> set[str]:
    """Squash-merges every ready open PR, prints a line for each, and returns the branches of those merged (or, on a dry
    run, those that would be). The merge never deletes the branch: cleaning up does that, under its own rules."""
    merged = set()
    has_ci = (main / ".github" / "workflows").is_dir()
    for pr in open_pull_requests(main):
        label = f"PR #{pr['number']} ({pr['headRefName']})"
        reason = not_ready(pr, has_ci)
        if reason:
            print(f"{label}: skipped ({reason})")
            continue
        if not dry_run:
            done = run(main, "gh", "pr", "merge", str(pr["number"]), "--squash")
            if done.returncode != 0:
                print(f"{label}: skipped (error: gh pr merge {pr['number']} failed: {short(done.stderr)})")
                continue
        merged.add(pr["headRefName"])
        print(f"{label}: {'would merge' if dry_run else 'merged'}")
    return merged


def remote_tip(directory: Path, branch: str) -> str | None:
    out = git(directory, "ls-remote", "--heads", "origin", branch)
    return out.split()[0] if out else None


def merged_heads(directory: Path) -> list[str]:
    done = run(directory, "gh", "pr", "list", "--state", "merged", "--limit", "1000", "--json", "headRefOid")
    if done.returncode != 0:
        raise ToolError(f"gh pr list --state merged failed: {short(done.stderr)}")
    return [pr["headRefOid"] for pr in json.loads(done.stdout or "[]")]


def landed_branches(directory: Path) -> set[str]:
    """The local branches whose tip is in main or in a MERGED PR's head, so every commit on them has landed. A head
    this clone doesn't have is left out: a branch it would cover stays, which is the safe side."""
    heads = merged_heads(directory)
    done = subprocess.run(
        ["git", "cat-file", "--batch-check=%(objectname) %(objecttype)"],
        cwd=directory,
        input="\n".join(heads) + "\n",
        capture_output=True,
        text=True,
    )
    if done.returncode != 0:
        raise ToolError(f"git cat-file failed: {short(done.stderr)}")
    present = [line.split()[0] for line in done.stdout.splitlines() if line.endswith(" commit")]
    # Several --merged filters list the refs reachable from any one of them.
    filters = [arg for commit in ["main", *present] for arg in ("--merged", commit)]
    return set(git(directory, "for-each-ref", "--format=%(refname:short)", *filters, "refs/heads").split()) - {"main"}


def clean(main: Path, here: Path, branch: str, checkouts: dict[str, Path], landed: set[str], dry_run: bool) -> str | None:
    """Cleans one branch and returns its line, or None for a branch with no PR that hasn't landed and isn't parked
    (counted, not listed)."""
    prs = pull_requests(main, branch)
    head = git(main, "rev-parse", f"refs/heads/{branch}")
    checkout = checkouts.get(branch)
    keep_remote = False
    if prs:
        merged = [pr for pr in prs if pr["state"] == "MERGED"]
        if not merged:
            return f"skipped (its PR is {prs[0]['state']}, not MERGED)"
        if any(pr["state"] == "OPEN" for pr in prs):
            # Deleting the branch would close that PR.
            return "skipped (a PR for it is still OPEN)"
        if head not in {pr["headRefOid"] for pr in merged}:
            return "skipped (local tip is not the merged head)"
        expected = "the merged head"
    elif branch in landed:
        if checkout is not None and checkout.exists() and head == git(main, "rev-parse", "refs/heads/main"):
            return "skipped (no commits yet: its worktree may be a session just starting)"
        expected = "the local tip"
    elif branch.startswith(PARKED_PREFIXES) and time.time() - int(git(main, "log", "-1", "--format=%ct", head)) > PARKED_DAYS * 86400:
        # Its commits aren't on main: the remote branch is the copy that keeps them, so it stays.
        keep_remote = True
        expected = "the local tip"
    else:
        return None
    remote = remote_tip(main, branch)
    if keep_remote and remote is None:
        return "skipped (not on origin, so this is the only copy of its commits)"
    if remote is not None and remote != head:
        return f"skipped (remote tip is not {expected})"
    if checkout == main:
        return "skipped (checked out in the main checkout)"
    gone = checkout is not None and not checkout.exists()
    if checkout is not None and not gone:
        if here == checkout:
            return EXIT_INSTRUCTION
        if git(checkout, "status", "--porcelain"):
            return "skipped (its worktree has uncommitted or untracked changes)"
    if dry_run:
        return "would clean locally (kept on origin)" if keep_remote else "would clean"
    if gone:
        # A prunable worktree: its directory is already gone, so only git's record is left.
        git(main, "worktree", "prune")
    elif checkout is not None:
        # Twice, because a lock alone doesn't block removal: Claude Code leaves stale ones.
        git(main, "worktree", "remove", "--force", "--force", str(checkout))
    git(main, "branch", "-D", branch)
    if keep_remote:
        return "cleaned locally (kept on origin)"
    if remote is not None:
        git(main, "push", "origin", "--delete", branch)
    return "cleaned"


def fast_forward(main: Path, dry_run: bool) -> str:
    current = git(main, "branch", "--show-current")
    if current != "main":
        return f"not fast-forwarded (main checkout on {current or 'a detached HEAD'}, not main)"
    if git(main, "status", "--porcelain"):
        return "not fast-forwarded (main checkout has uncommitted changes)"
    if dry_run:
        return "would fast-forward"
    before = git(main, "rev-parse", "HEAD")
    try:
        git(main, "pull", "--ff-only")
    except ToolError as error:
        return f"not fast-forwarded (error: {error})"
    return "already up to date" if git(main, "rev-parse", "HEAD") == before else "fast-forwarded"


def main() -> int:
    parser = argparse.ArgumentParser(description="Clean up after PRs that are already MERGED.")
    parser.add_argument("--dry-run", action="store_true", help="print the plan and change nothing")
    parser.add_argument("--clean-only", action="store_true", help="merge nothing: only clean up after PRs that are already MERGED")
    args = parser.parse_args()
    dry_run = args.dry_run

    try:
        here = Path(git(Path.cwd(), "rev-parse", "--show-toplevel")).resolve()
        entries = worktrees(here)
        main_checkout = Path(entries[0]["worktree"]).resolve()
        checkouts = {
            entry["branch"].removeprefix("refs/heads/"): Path(entry["worktree"]).resolve() for entry in entries if "branch" in entry
        }
        branches = git(main_checkout, "for-each-ref", "--format=%(refname:short)", "refs/heads").split()
    except ToolError as error:
        sys.exit(str(error))
    would_merge: set[str] = set()
    if not args.clean_only:
        try:
            would_merge = merge_ready(main_checkout, dry_run)
        except ToolError as error:
            print(f"merge: skipped (error: {error})")
    # After merging, so a PR this run merged counts.
    try:
        landed = landed_branches(main_checkout)
    except ToolError as error:
        landed = set()
        print(f"branches without a PR: left alone (error: {error})")
    without_pr = 0
    for branch in branches:
        if branch != "main":
            try:
                if dry_run and branch in would_merge:
                    line = "would clean once merged"
                else:
                    line = clean(main_checkout, here, branch, checkouts, landed, dry_run)
            except ToolError as error:
                line = f"skipped (error: {error})"
            if line is None:
                without_pr += 1
            else:
                print(f"{branch}: {line}")
    if without_pr:
        print(f"{without_pr} {'branch' if without_pr == 1 else 'branches'} without a PR left alone")
    try:
        line = fast_forward(main_checkout, dry_run)
    except ToolError as error:
        line = f"not fast-forwarded (error: {error})"
    print(f"main: {line}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
