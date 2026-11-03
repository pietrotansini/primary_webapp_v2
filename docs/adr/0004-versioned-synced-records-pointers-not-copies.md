# Synced records are versioned; runs and Evidence hold pointers, not copies

Every synced entity (from the EDC, the CTMS, ClinicalTrials.gov and per-study files) keeps one row per version, with valid-from and valid-to dates and the sync run that wrote it (which names the Recipe version replayed). Evidence, Agent runs and Prime conversations refer to what they read by pointer (record type, ID, version), never by copying it. A retention purge deletes every version of a record. The pointers stay and show "purged on <date>". We chose this so every Agent claim can be traced to the exact version it read, OP6 can diff two syncs, and Subject data lives in exactly one place, so purging it and auditing its reads stay simple. Decided in "High-level data model" (#9).

## Considered Options

- **Overwrite on sync (latest only):** less storage and simpler queries, but Evidence would silently point at changed data and "what changed since the last sync" is lost.
- **Version EDC and CTMS only:** CT.gov trials and referral counts overwritten. Cheaper, but Evidence citing a competing trial or a referral count can't be replayed, and there would be two storage patterns instead of one.
- **Runs store full tool payloads:** each run is self-contained for debugging and inspection, but Subject data gets copied into the Engagement class and escapes the Subjects retention period.
- **Purge exempts records cited by Evidence:** Evidence stays replayable, but retention stops being a simple rule the Sponsor can reason about.

## Consequences

- Old versions age out on their class's retention period, counted from their valid-to date.
- An Action whose Evidence was purged still shows what was cited and when, but not the content.
- Audit events keep pseudonymized Subject IDs after a purge. The audit trail has no rolling period: it is deleted only at end of contract, after the end-of-contract export.
