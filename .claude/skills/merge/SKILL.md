---
name: merge
description: Merge the ready PRs and clean up after merged ones with the merge tool. Use when asked to merge, or to merge and clean up.
---

Run `python3 scripts/merge_tool.py` and relay its summary. Add `--clean-only` when the user asked only to clean up.

If a line says "this is your worktree", call `ExitWorktree` with `action: "remove"` and `discard_changes: true`, then run the same command again.
