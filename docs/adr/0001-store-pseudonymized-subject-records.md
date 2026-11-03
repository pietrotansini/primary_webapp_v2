# Store pseudonymized Subject records, not aggregates only

For the real-data pilot (M2) we store a minimal pseudonymized record per Subject (EDC subject ID, Site, status and status dates, screen-fail reason category, next visit date) rather than only counts per Site and period. Every other field is dropped at ingestion. This keeps the patient list, the per-Site funnel drill-down and Subject-level questions to Prime. The cost is that we hold special-category health data under GDPR as the Sponsor's processor. Decided in "Compliance and security bar for the pilot" (#4).

## Considered Options

- **Aggregates only:** subject rows counted in memory and discarded. No health data stored and a simpler security review, but no patient list and Prime can't answer Subject-level questions.

## Consequences

- Every read of Subject-level data, by a user or by Prime's tools, is written to the audit trail.
- Subject data reaches a model through Prime only via Amazon Bedrock in the Sponsor's geography, inside the Sponsor's own Stack (amended by "Backend architecture and stack", #8, ADR 0005; it first went to the Anthropic API under zero data retention).
- A DPA, a subprocessor list and Sponsor-set retention periods are required before real data arrives.
