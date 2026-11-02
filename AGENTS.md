# AGENTS.md

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues (pietrotansini/primary_webapp_v2) via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Backlog page

The [Control Tower MVP Backlog](https://claude.ai/artifact/72GRvezZz11h4AF5hBQ4vH) page: source in `docs/pages/mvp-backlog.html`; after editing `docs/scenarios.md` or `docs/mvp-backlog.md`, run `python3 scripts/build_backlog_page.py`, then publish the file to that URL; `.githooks/pre-commit` blocks a commit whose page is out of date (enable once per clone: `git config core.hooksPath .githooks`). A first publish in a session is refused as unread; its diff counts as the read, so publish the same file again.
