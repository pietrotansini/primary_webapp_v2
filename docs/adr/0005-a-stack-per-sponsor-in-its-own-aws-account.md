# A Stack per Sponsor, in its own AWS account, with AI through Bedrock only

Each Sponsor gets two Stacks (staging and prod), each a complete copy of the platform (web, Prime, Agents, connectors, Postgres, mail) in its own AWS account under Primary's AWS Organization, in the region the Sponsor asks for. Every model call goes through Amazon Bedrock's geographic inference profile for that region, so Subject data never leaves the Sponsor's geography or AWS. Nothing holding Sponsor data is shared between Stacks; the only shared piece is a build account that pushes images and Terraform in. Long-running work runs in a Fargate worker that claims jobs from a Postgres table, not in serverless functions. We chose this so the isolation story in a Sponsor's security review is one sentence ("your own AWS account, in your region, one subprocessor"), a contract end is deleting an account, and connectors can run headed Chromium behind a static IP. Decided in "Backend architecture and stack" (#8).

## Considered Options

- **One shared multi-tenant stack:** cheapest to run with a small team, one deploy, but every Sponsor's data sits in one database and one region, and isolation rests on our row-level scoping.
- **Managed PaaS (Vercel, Supabase, a container host such as Fly.io):** what `primary_teams` runs on and the fastest start, but three vendors per Stack, Vercel's DPA allows processing in the US, Supabase has no static egress and its compliance reports need the Team plan, and Vercel functions can't run a headed browser or outlive their duration.
- **Anthropic API directly:** the newest models first, but only global or US processing; EU-only processing needs Bedrock or Vertex, and Bedrock sits in the same cloud as the rest of the Stack.

## Consequences

- Provisioning a Stack is Terraform from day one (account plus Stack modules), so the second Sponsor costs a run, not a week. Primary's own Dev and Demo are Stacks from the same module.
- Releases roll one image set to every staging Stack, then to each prod on approval; Stacks can run different versions for a while, and migrations must tolerate that.
- Jev, the Anthropic API and Voyage are not used in Sponsor Stacks: Recipe repair is fallback locators, then Claude, then a person, and embeddings move to a Bedrock model. This supersedes the "add Jev later" part of "Fast decision models and the Obscura browser for the connector agent" (#27) for Sponsor Stacks.
- Bedrock's per-account quotas cap how many Agent runs go in parallel per Stack; quotas are requested per account at provisioning.
- Logs stay in each account; Primary's on-call sees metrics and alarms only. Engineers reach a prod account through time-limited, audited IAM Identity Center roles.
- Teams and Slack get one app per Sponsor, pointing at that Sponsor's Stack; there is no shared router.
- Fixed cost per Stack (Multi-AZ RDS, NAT, load balancer) is paid twice per Sponsor; the cost model is still open.
