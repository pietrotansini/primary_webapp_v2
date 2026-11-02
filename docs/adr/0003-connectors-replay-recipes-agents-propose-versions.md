# Connectors replay Recipes; agents only propose Recipe versions

Every connector is a versioned Recipe per platform, tenant and Study: fetch steps (vendor API first, then a scheduled export file, then UI steps with role-and-name locators and a post-condition each), a field-mapping allowlist per feed, and checks every sync must pass. A scheduled sync replays the Recipe with no LLM. An agent learns the first Recipe and repairs a broken step, but its only output is a new Recipe version, which goes through a dry-run before it can go live; it never writes synced data. Primary approves Recipes, the Sponsor admin can review them, and every run, repair, dry-run and promotion is an audit event. We chose this so a sync is reproducible and testable, what we take from a Sponsor's system is a reviewable allowlist, and AI cost and risk only arise when a platform changes. Decided in "Agentic platform connectors that crystallize into ingestion pipelines" (#14).

## Considered Options

- **The agent runs every sync:** adapts to UI changes for free, but each sync is non-deterministic, costs LLM calls, and puts Subject data in front of a model every time.
- **Recorded codegen scripts, fixed by developers:** deterministic, but brittle, they hold credentials typed during recording, and every platform change waits on a developer.

## Consequences

- Failures are classified, not retried blindly: a failed UI step goes to the agent's repair; a missing mapped field gets an agent proposal that a person decides on; data that breaks a check is quarantined (nothing committed, the store shows it is stale) and is not repaired by the agent; an expired session or revoked credentials needs a person.
- A repaired Recipe can go live without a person only through defined gates ("Gates for putting a repaired Recipe live without a person", #29).
- The API path protects against UI changes, not study-design changes: field names are per Study in some EDCs, so mapping drift hits API Recipes too.
- The allowlist is the parse-time half of ADR 0001's minimization; source-side scoping by the Sponsor's admin is investigated in "Least-privilege access a Sponsor admin can set up per platform" (#28).
