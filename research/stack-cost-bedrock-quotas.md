# Cost and Bedrock quotas per Sponsor Stack

Research note for "Cost and Bedrock quotas per Sponsor Stack" (#35), gathered 2026-11-03. It prices the Stack
described in `docs/architecture.md` and `docs/adr/0005-a-stack-per-sponsor-in-its-own-aws-account.md`, in
eu-central-1 (Frankfurt) and us-east-1 (N. Virginia). Terms follow `GLOSSARY.md`.

**Sources.** Unit prices come from the **AWS Price List API** (`https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/<offer>/current/<region>/index.json`,
read 2026-11-03), list price in USD, on-demand, before tax and credits. Quotas and behaviour come from the AWS docs
pages linked inline. Every number marked *assumption* is ours; change it and re-run the arithmetic shown.

---

## 1. Unit prices used

### Infrastructure

| Item | eu-central-1 | us-east-1 | Price List offer (publication date) |
|---|---|---|---|
| Fargate Linux/x86, per vCPU-hour | $0.04656 | $0.04048 | `AmazonECS` (2026-10-19) |
| Fargate Linux/x86, per GB-hour | $0.00511 | $0.004445 | same |
| Fargate Linux/ARM, per vCPU-hour / GB-hour | $0.03725 / $0.00409 | $0.03238 / $0.00356 | same |
| RDS PostgreSQL db.t4g.micro, Single-AZ / Multi-AZ, per hour | $0.019 / $0.037 | $0.016 / $0.032 | `AmazonRDS` |
| RDS PostgreSQL db.t4g.small | $0.037 / $0.074 | $0.032 / $0.065 | same |
| RDS PostgreSQL db.t4g.medium | $0.074 / $0.149 | $0.065 / $0.129 | same |
| RDS PostgreSQL db.m7g.large | $0.200 / $0.401 | $0.168 / $0.337 | same |
| RDS gp3 storage, per GB-month, Single-AZ / Multi-AZ | $0.137 / $0.274 | $0.115 / $0.23 | same |
| RDS backup storage beyond the free allowance, per GB-month | $0.103 | $0.095 | same |
| NAT gateway, per hour / per GB processed | $0.052 / $0.052 | $0.045 / $0.045 | `AmazonEC2` |
| Public IPv4 address (in use or idle; covers the Elastic IP), per hour | $0.005 | $0.005 | `AmazonVPC` (2026-11-03) |
| Interface VPC endpoint, per hour per AZ | $0.012 | $0.01 | same |
| Application Load Balancer, per hour / per LCU-hour | $0.027 / $0.008 | $0.0225 / $0.008 | `AWSELB` (2026-11-02) |
| S3 Standard, per GB-month (first 50 TB) | $0.0245 | $0.023 | `AmazonS3` (2026-10-15) |
| Secrets Manager, per secret-month / per 10k API calls | $0.40 / $0.05 | $0.40 / $0.05 | `AWSSecretsManager` |
| KMS customer-managed key, per month / per 10k requests | $1 / $0.03 | $1 / $0.03 | `awskms` (2026-10-26) |
| CloudWatch Logs ingestion (Standard), per GB / storage per GB-month | $0.63 / $0.03 | $0.50 / $0.03 | `AmazonCloudWatch` (2026-10-07) |
| CloudWatch custom metric / standard alarm, per month | $0.30 / $0.10 | $0.30 / $0.10 | same |
| SES outbound, per recipient | $0.0001 | $0.0001 | `AmazonSES` (2026-10-27) |
| SES inbound, per message + per 256 KB chunk | $0.0001 + $0.00009 | $0.0001 + $0.00009 | same |
| ECR storage, per GB-month | $0.10 | $0.10 | `AmazonECR` |

Free tiers are ignored. With consolidated billing in an AWS Organization the free tier is shared once across all
member accounts, so with one account per Stack it does not apply per Stack.

### Bedrock (AI)

Claude on Bedrock is a Marketplace product, priced in the `AmazonBedrockFoundationModels` offer (publication
2026-10-12). Each model has two price rows: `*_global_standard` (the `global.*` profile) and `*_standard` (the
geographic `eu.*` / `us.*` profiles). **The geographic rows cost 10% more than the global ones**, and they are
**the same in eu-central-1 and us-east-1**. Prices per 1M tokens, geographic profile, prompts ≤ the long-context
threshold:

| Model (Bedrock id) | Input | Output | Cache write 5 min | Cache write 1 h | Cache read |
|---|---|---|---|---|---|
| Claude Sonnet 5.5 (`eu.anthropic.claude-sonnet-5-5` / `us.…`) | $2.20 | $11.00 | $2.75 | $4.40 | $0.11 |
| Claude Haiku 5.5 (`eu.anthropic.claude-haiku-5-5` / `us.…`) | $0.11 | $0.55 | $0.1375 | $0.22 | $0.011 |
| Claude Opus 5.5 (`eu.anthropic.claude-opus-5-5` / `us.…`) | $4.40 | $22.00 | $5.50 | $8.80 | $0.22 |
| *(global profile, for comparison)* Sonnet 5.5 | $2.00 | $10.00 | $2.50 | $4.00 | $0.10 |

- The Sonnet 5.5 cache-read rate already includes the cut noted on the [Bedrock pricing page](https://aws.amazon.com/bedrock/pricing/):
  "Starting October 7, 2026, cache read pricing for Claude Sonnet 5.5 is reduced by 50% from the prior rate."
- Haiku 5.5 has a higher rate above 100k prompt tokens ([Haiku 5.5 model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-haiku-5-5.html), launched 2026-10-07). None of our calls get near that size.
- Embeddings, per 1M input tokens: **Titan Text Embeddings V2** is $0.20 in eu-central-1 and $0.02 in us-east-1 (`AmazonBedrock`
  offer; the EU rate is 10× the US one in the price list itself). **Cohere Embed v4** is $0.12 in both regions. At pilot volume either is
  under $5 a month.
- Model ids and launch dates: Sonnet 5.5 launched on Bedrock 2026-09-28 and Haiku 5.5 on 2026-10-07 (model cards).
  Both list `eu.` and `us.` geographic profiles on the `bedrock-runtime` endpoint. From eu-central-1 the `eu.` profile
  routes to Frankfurt, Stockholm, Milan, Spain, Ireland and Paris ([Sonnet 5.5 card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-sonnet-5-5.html)).

---

## 2. Infrastructure: monthly cost per Stack

### Sizing assumptions

| Piece | staging | prod | Why |
|---|---|---|---|
| `web` task | 1 × 0.5 vCPU / 1 GB, always on | 2 × | Next.js standalone; the architecture fixes the count |
| `api` task | 1 × 1 vCPU / 2 GB, always on | 2 × | Prime chat, LangGraph, bot endpoints |
| `worker` task | 2 vCPU / 4 GB, **180 task-hours a month** | same | Headed Chromium + Xvfb wants 2 vCPU / 4 GB. 180 h = a 2 h nightly sync window on 2 tasks (120 h) plus about 2 h a day for Site Messages, Agent runs, mail and live-browser sessions |
| RDS Postgres + pgvector | db.t4g.small, Single-AZ, 20 GB gp3 | db.t4g.medium, Multi-AZ, 50 GB gp3, plus 50 GB of 35-day PITR backup beyond the free allowance | A pilot database of a few Studies is a few GB |
| NAT | 1 gateway + 1 EIP, 30 GB processed | 1 gateway + 1 EIP, 50 GB | One static IP per Stack, as in the architecture. Traffic is ECR pulls, connector syncs and Bedrock calls; S3 goes through a free gateway endpoint |
| Public IPv4 | 3 (NAT EIP + 2 for the ALB across 2 AZs) | 3 | |
| ALB | 1, averaging 0.2 LCU | 1, 0.2 LCU | Under 10 users: a fraction of one LCU |
| S3 | 10 GB | 10 GB | Inbound mail, quarantined files |
| Secrets Manager / KMS | 10 secrets / 2 keys | same | Recipe credentials, bot secrets, magic-link key |
| CloudWatch | 3 GB logs, 10 metrics, 10 alarms | 5 GB, 15, 15 | Logs stay in the account |
| SES | 2,000 out, 500 in | 3,000 out, 1,000 in | Magic links, Email Actions, Newsletter Campaigns for 50–200 Sites |
| Route 53 | 1 hosted zone (Sponsor subdomain) | same | $0.50/zone |

Not priced, all small at pilot volume: data transfer out to users, CloudTrail beyond the free management trail,
GuardDuty / Security Hub / AWS Config, if the security review asks for them (typically tens of dollars per
account a month), and support plans.

### Monthly table (expected sizing, USD)

| Line | staging EU | staging US | prod EU | prod US |
|---|---|---|---|---|
| Fargate `web` | 20.72 | 18.02 | 41.45 | 36.04 |
| Fargate `api` | 41.45 | 36.04 | 82.90 | 72.08 |
| Fargate `worker` (180 task-h) | 20.44 | 17.77 | 20.44 | 17.77 |
| RDS instance | 27.01 | 23.36 | 108.77 | 94.17 |
| RDS storage + backup | 2.74 | 2.30 | 18.85 | 16.25 |
| NAT gateway + data | 39.52 | 34.20 | 40.56 | 35.10 |
| Public IPv4 × 3 | 10.95 | 10.95 | 10.95 | 10.95 |
| ALB | 20.88 | 17.59 | 20.88 | 17.59 |
| S3, Secrets Manager, KMS, Route 53 | 7.84 | 7.83 | 7.84 | 7.83 |
| CloudWatch | 6.16 | 5.77 | 9.60 | 8.95 |
| SES | 0.30 | 0.30 | 0.49 | 0.49 |
| **Total infrastructure** | **≈ $198** | **≈ $174** | **≈ $363** | **≈ $317** |
| Range (low – high) | 171 – 287 | 151 – 253 | 349 – 609 | 305 – 523 |

Range: low = worker 60 task-h (and t4g.micro on staging); high = one worker task always on (730 h) plus
db.t4g.medium on staging / db.m7g.large Multi-AZ on prod. On their own, a db.m7g.large Multi-AZ adds about $184 a
month to prod (EU), and an always-on worker adds about $62.

**Fixed floor.** NAT, its IP and the ALB cost about **$71 (EU) / $63 (US)** per Stack per month whatever the load.
With the always-on `web` and `api` tasks and the smallest database, an idle Stack costs about $160 (EU). A Sponsor
pays this floor twice (staging + prod).

**Per Sponsor (staging + prod, infrastructure only): about $560/month in EU, $490/month in US.**

---

## 3. AI spend per Sponsor (Bedrock)

### Usage assumptions (pilot Sponsor: 3 Studies, ~150 Sites)

All Agents run on Claude Sonnet 5.5 through the geographic profile, with automatic prompt caching (5-minute TTL).
Volumes follow `docs/mvp-backlog.md` and ADR 0002: rules flag Sites after each nightly sync, then an Agent
diagnoses each flag.

| Unit | Low | Expected | High | Tokens per unit (cache read / cache write / uncached input / output incl. thinking) |
|---|---|---|---|---|
| Enrollment + Engagement agent run, one per flagged Site per night | 8/night (240/mo) | 25/night (750/mo) | 70/night (2,100/mo) | 60k / 15k / 5k / 5k over ~6 calls |
| Triage agent run, one per Site Message or Site Response | 5/day (150/mo) | 20/day (600/mo) | 60/day (1,800/mo) | 12k / 3k / 1k / 1.5k over 2 calls |
| Newsletter agent per-Site Report, drafted and again at send time | 50 Sites × 2 (100/mo) | 150 × 2 (300/mo) | 200 × 4 (800/mo) | 20k / 5k / 2k / 3k over 3 calls |
| Prime chat turn: 10 users × turns/day × 21 workdays | 5 users × 5 (525/mo) | 10 × 10 (2,100/mo) | 10 × 25 (5,250/mo) | 40k / 8k / 2k / 2k over 3 calls |
| Connector agent: Recipe learning or repair | 5/mo | 10/mo | 30/mo | 150k / 40k / 10k / 15k over 15 calls |
| Embeddings (Knowledge Base) | 2M tokens | 5M | 20M | Titan Text Embeddings V2 |
| **Cache hit rate** (cache read ÷ all input) | ~75% (80% chat) | ~75% (80% chat) | ~38%: half the reads turn into writes (cold caches, the 5-min TTL expiring between chat turns) | |

Cost per unit at the expected cache rate: Agent diagnosis ≈ $0.114, Triage ≈ $0.028, Report ≈ $0.053,
chat turn ≈ $0.053, Recipe repair ≈ $0.31. Formula per unit:
`(cache_read × 0.11 + cache_write × 2.75 + input × 2.20 + output × 11.00) / 1e6`.

### Result (prod Stack, per month, USD; same in EU and US)

| | Low | Expected | High |
|---|---|---|---|
| Agent diagnoses (Enrollment + Engagement) | 27 | 85 | 405 |
| Triage agent | 4 | 17 | 79 |
| Newsletter agent | 5 | 16 | 64 |
| Prime chat | 28 | 111 | 554 |
| Connector agent | 2 | 3 | 15 |
| Embeddings (EU rate) | 0.4 | 1 | 4 |
| **Total AI** | **≈ $66** | **≈ $233** | **≈ $1,120** |

Sensitivities, expected case:

- **Without caching:** $515 a month (2.2×). Caching is worth building in from the first Agent.
- **Triage agent on Haiku 5.5:** −$16 a month.
- **All on Opus 5.5:** $465 a month (2×).
- **The `global.*` profile instead of `eu.*`:** −9%, but it gives up residency, so it is not an option for an EU
  Sponsor.

The staging Stack runs the same Agents against sandbox data during M1. *Assumption:* 25–50% of prod volume
(about $60–120 a month). Dev and Demo: *assumption* $50–200 and $20–50 a month.

---

## 4. Bedrock quotas

### Defaults (per account, per Region; [Bedrock service quotas](https://docs.aws.amazon.com/general/latest/gr/bedrock.html), read 2026-11-03)

| Quota | Default | Adjustable |
|---|---|---|
| Cross-region model inference tokens per minute, Claude Sonnet 5.5 (`eu.` / `us.` profile) | 6,000,000 | Yes |
| Global cross-region tokens per minute, Claude Sonnet 5.5 | 6,000,000 | Yes |
| Cross-region tokens per minute, Claude Haiku 5.5 | 10,000,000 | Yes |
| Cross-region tokens per minute, Claude Opus 5.5 | 30,000,000 | Yes |
| On-demand (in-Region) tokens per minute, Claude Opus 5.5 | 15,000,000 | No |
| Requests per minute, Claude 5.5 models | none listed (token quotas only) | — |
| Cross-Model Max Tokens Per Day (all models, per account) | 700,000,000 | No |
| Titan Text Embeddings V2, on-demand: requests / tokens per minute | 6,000 / 300,000 | No |
| Cohere Embed V4, cross-region: requests / tokens per minute | 2,000 (No) / 300,000 (Yes) | |

Important caveats from the [Bedrock quotas page](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html):

- "the quotas that apply to your account might be lower than the default values listed", depending on "regional
  factors, account age, usage history, payment history…". **Every Stack is a brand-new account**, so its
  *applied* value can be well below 6M. Read it after account creation
  (`aws service-quotas list-service-quotas --service-code bedrock --region <r>`); do not plan on the default.
- Quotas count `InputTokenCount + CacheWriteInputTokenCount + OutputTokenCount × burndown`. **Cache reads don't
  count.** At the start of a request, input + `max_tokens` is reserved
  ([token burndown](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-token-burndown.html)). The output
  burndown is 10× for Opus 5.5 / Sonnet 5 / Opus 5 and 15× for 4.8 models. **Sonnet 5.5 and Haiku 5.5 aren't named
  on that page**; we assume 10×.
- The `bedrock-mantle` endpoint has separate input and output TPM quotas. It has **no geographic profiles**, and
  Sonnet 5.5 and Haiku 5.5 are listed there only for us-gov-west-1 (model cards). **A Stack must call
  `bedrock-runtime` with the `eu.` / `us.` profile**, not the Mantle client.

### How many Agent runs in parallel

*Assumption:* one diagnosis run is about 6 calls in about 2 minutes, with `max_tokens` = 16k. That reserves about
58k quota tokens per minute per running Agent. With `max_tokens` = 8k it is about 35k. Cache reads are free
against the quota, which helps a lot.

| Applied cross-region TPM (Sonnet 5.5) | Parallel runs, `max_tokens` 16k | Parallel runs, `max_tokens` 8k |
|---|---|---|
| 200,000 (a cautious guess for a fresh account) | ~3 | ~5 |
| 1,000,000 | ~17 | ~28 |
| 6,000,000 (documented default) | ~100 | ~170 |

The expected night is 25 diagnosis runs plus, once a month, up to 300 Newsletter Reports. Even at ~3 in parallel,
the 25 runs finish in about 20 minutes. The Newsletter batch (about 300 runs of ~1 min each) takes under 2 hours
at 3 in parallel, or a few minutes at 17. Prime chat during the day shares the same quota. **The worker should cap
Agent concurrency from the applied quota and keep `max_tokens` tight.** The daily token cap (700M) is far above
our use.

### Raising a quota, and lead time

- Bedrock: request an increase of "Cross-Region … tokens per minute for <model>" in Service Quotas. Support then
  offers to raise on-demand TPM and tokens per day in the same case. "Quota increases aren't granted
  automatically", and "priority will be given to customers who generate traffic that consumes their existing quota
  allocation. Your request might be denied if you don't meet this condition"
  ([bedrock-runtime quotas](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-runtime.html)).
- Service Quotas in general: "Smaller increases are usually automatically approved while larger requests are
  submitted to Support. Larger increase requests take time to review…". Quota requests "don't receive priority
  support" ([request a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html)).
- **AWS publishes no lead time for Bedrock increases.** *Assumption for the plan:* minutes when auto-approved,
  otherwise days to a couple of weeks, and it may be refused on a fresh account with no traffic. So request it at
  provisioning, show real traffic from staging, and size concurrency to the applied value, not the requested one.
- **Quota request templates:** a template in Service Quotas, set up from Primary's AWS Organization, files up to
  **10** quota increases automatically for every new member account
  ([request templates](https://docs.aws.amazon.com/servicequotas/latest/userguide/organization-templates.html)).
  Put Bedrock Sonnet 5.5 / Haiku 5.5 cross-region TPM for each Sponsor region there. It needs Organizations with
  all features, and doesn't cover opt-in regions.
- **Model access per account:** the first call to a third-party model subscribes the account through AWS
  Marketplace. The calling role needs `aws-marketplace:Subscribe` / `Unsubscribe` / `ViewSubscriptions`.
  Anthropic's First Time Use form is filed once at the Organization's management account and inherited by member
  accounts ([model access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html)). Charges appear
  under the model provider, not "Amazon Bedrock", in Cost Explorer.

---

## 5. SES: where inbound mail works

From the [SES endpoints table](https://docs.aws.amazon.com/general/latest/gr/ses.html#ses_inbound_endpoints),
read 2026-11-03, **email receiving is supported in:** us-east-1, us-east-2, us-west-1, us-west-2, af-south-1,
ap-southeast-3, ap-south-1, ap-northeast-3, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-northeast-1,
ca-central-1, **eu-central-1 (Frankfurt)**, eu-west-1, eu-west-2, eu-south-1, eu-west-3, eu-north-1, il-central-1,
me-south-1, sa-east-1.

- **eu-central-1 supports inbound** (`inbound-smtp.eu-central-1.amazonaws.com`), and the price list has an
  "email received in EUC1" rate. us-east-1 supports it too.
- SES sends but does **not** receive in eu-central-2 (Zurich), eu-south-2 (Spain), ap-south-2, ap-southeast-5,
  ca-west-1, me-central-1 and GovCloud. Those are the regions where the architecture's fallback (receive in the
  nearest region of the same geography) is needed. For Zurich that means Frankfurt or Milan.
- Receipt-rule resources (SNS, KMS, Lambda) must be in the receiving region; the S3 bucket may be elsewhere
  ([SES regions](https://docs.aws.amazon.com/ses/latest/dg/regions.html)).
- **Sandbox:** every new account starts in the SES sandbox, *per region*. In the sandbox it can send only to
  verified addresses, at most 200 messages a day and 1 a second. Production access is requested per account and
  region; "AWS Support team provides an initial response to your request within 96 hours"
  ([production access](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html)).

---

## 6. Primary's own accounts

| Account | EU (eu-central-1) | US (us-east-1) | Notes |
|---|---|---|---|
| Build account | ≈ $5–10 | ≈ $5–10 | ECR ~30 GB of images ($3; Playwright images are large), Terraform state in S3, 1 KMS key, Route 53 zone. If Stacks run in more than one region, replicate ECR to each region, so pulls stay in-region and storage doubles |
| Dev Stack | ≈ $167 | ≈ $146 | Staging shape, db.t4g.micro, worker 60 task-h; plus AI $50–200 |
| Demo Stack | ≈ $179 | ≈ $157 | Staging shape, worker 60 task-h; plus AI $20–50 |
| **Fixed total (build + Dev + Demo, infra)** | **≈ $355/month** | **≈ $310/month** | |

Dev and Demo could each save about $35–40 a month by dropping the NAT gateway and giving tasks public IPs
($3.65/IP-month), since neither needs a static IP that a Sponsor allowlists. Stopping Dev outside working hours
saves roughly another third of its Fargate and RDS cost.

---

## 7. Summary per Sponsor (pilot, expected case, per month)

| | EU | US |
|---|---|---|
| staging infra | $198 | $174 |
| prod infra | $363 | $317 |
| AI (prod $233 + staging ~$90) | ~$320 | ~$320 |
| **Total per Sponsor** | **≈ $880** | **≈ $810** |
| Range (low: low infra + low AI, staging AI 25%; high: high infra + high AI, staging AI 50%) | ≈ $600 – $2,580 | ≈ $540 – $2,460 |

---

## 8. Findings that should change the architecture or the backlog

1. **SES inbound works in eu-central-1.** The architecture's "receive in a nearby region" fallback is not needed for
   Frankfurt; keep it only for Zurich, Spain and the other non-receiving regions listed above.
2. **SES sandbox per new account.** Each new Stack can mail only verified addresses (200 a day) until production
   access is granted, which takes up to 96 h or longer. Provisioning must request it for every staging and prod
   account. A staging Stack that mails sandbox Site Contacts needs it before M1.
3. **Bedrock quotas on a new account may be far below the 6M default**, and AWS may refuse increases until there is
   traffic. Add a Service Quotas request template to the AWS Organization, read the applied value at
   provisioning, and make the worker's Agent concurrency a setting derived from it.
4. **Use `bedrock-runtime`, not `bedrock-mantle`.** Mantle has no `eu.`/`us.` profiles for Sonnet 5.5 / Haiku 5.5,
   so the Anthropic SDK's Mantle client cannot keep EU residency. Use the `bedrock-runtime` Messages / Converse /
   Invoke APIs with the geo profile id.
5. **Residency costs 10%.** Geographic profiles are priced 10% above `global.*`. This is small (~$20 a month
   expected), but pricing should know about it.
6. **The fixed floor dominates at pilot scale.** About $160 per idle Stack (EU) × 2 per Sponsor; the AI is about a
   third of the bill. Cheap levers: Graviton (ARM) Fargate (−20% compute; Playwright ships Chromium for linux-arm64),
   a single NAT (already assumed), and t4g instances. A second NAT for AZ resilience in prod adds about $37–42 a
   month and a second egress IP that Sponsors must allowlist.
7. **"Worker scales 0 to N on queue depth" needs something running to read the queue.** With zero worker tasks,
   nobody polls the jobs table or fires the DB-held nightly schedule, and ECS needs a CloudWatch metric to scale
   on. Either `api` publishes queue depth and runs the scheduler, or a minimum of one small worker stays up
   (+$62–83 a month at 2 vCPU / 4 GB; much less for a 0.25 vCPU scheduler task).
8. **Free tiers don't multiply per account.** Under one Organization the free tier is applied once, so every Stack
   pays from the first GB of logs and the first metric.
