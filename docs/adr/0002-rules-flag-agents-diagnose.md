# Rules flag Sites; Agents diagnose and draft with validated Evidence

Agents never decide on their own which Sites need attention. Deterministic code computes per-Site metrics after each sync, and fixed rules (our config, with a severity that sets the Action's priority) raise flags. Only then does an Agent read our DB through tools to diagnose each flag and draft the proposed Action and email. The server rejects a draft whose Evidence cites a record the Agent did not fetch in that run. We chose this so flags are predictable and testable, every claim in an Action traces to a synced record, and the agentic parts can be crystallized into rules over time. Decided in "How Prime generates insights and recommended actions" (#6).

## Considered Options

- **Agent reasons freely over the Study data:** more flexible, but its flags can't be tested, they drift between runs, and they are hard to defend to a Sponsor or an auditor.
- **Rules plus fixed templates, LLM for wording only:** the most predictable option, but the diagnosis is shallow and leaves nothing to crystallize from.

## Consequences

- One open proposal per Site and rule. Later runs refresh its Evidence. After a rejection the flag stays quiet until the Site is a severity step worse or 14 days pass.
- No confidence score, days saved or cost impact on Actions: there is no source data behind them.
- Crystallization is manual in the MVP: developers turn recurring diagnoses and rejection reasons into new rules or metrics.
