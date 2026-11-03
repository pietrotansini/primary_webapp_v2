# MVP feature backlog: Recruitment Control Tower

Living backlog for the pilot-ready MVP. Charted on the wayfinder map
[Wayfinder: Recruitment Control Tower MVP backlog](https://github.com/pietrotansini/primary_webapp_v2/issues/2).
Every ticket resolution on that map updates this file.

**Status: v0 (provisional).** Priorities and sizes from "Draft MVP backlog v0"
([#10](https://github.com/pietrotansini/primary_webapp_v2/issues/10)), on top of the candidate list from
[Inventory the prototype's features and their backend needs](https://github.com/pietrotansini/primary_webapp_v2/issues/3).
MoSCoW values were then re-cut by the pilot Scenario rank from "Pick the pilot's first Scenarios"
([#18](https://github.com/pietrotansini/primary_webapp_v2/issues/18)).
Everything below is provisional until "Finalize MVP feature backlog". Terms follow `GLOSSARY.md`.

## Product framing (v0)

The MVP is a **site-engagement CRM for biotech Sponsors**. The pilot proves, in this order:

1. **Engagement out:** Prime drafts Actions and Newsletters, the team schedules them as Campaigns on a calendar,
   approves (in bulk for a Campaign) and the platform sends them.
2. **Insights back:** Site Responses (acknowledgements, short forms) and free-text Site Messages are classified,
   asks become Actions, and each Site gets an engagement score; Campaign performance rolls it up.
3. **Enrollment per Site:** measured from connector data only, with the Enrollment agent proposing Actions.

The pilot user is the Sponsor's clinical operations team. Prime is the **front and orchestrator** of a
multi-agent system, built on the existing `primary_teams` agent and reached from Ask Prime, the chat panel, Teams and
Slack. Behind it, one Agent per Capability (see "How Prime produces insights" below). TMF / eTMF filing
(also in `primary_teams`) is a separate product, not part of this backlog.

The pilot Scenario rank (see "Scenarios drive the order") puts enrollment insight first: the first four Scenarios
are enrollment ones, then one-off communications, Newsletter Campaigns and Site meeting briefs. So the engagement
score (C7) and Campaign performance (C5) are now Should; the three proof points above stay the product's shape.

## Milestones

Decided in [Compliance and security bar for the pilot](https://github.com/pietrotansini/primary_webapp_v2/issues/4):

- **M1, functional demo:** sample or anonymized data only, coming in through Recipes on the pilot Sponsor's
  sandboxes (see "Data ingestion"); no compliance items are required.
- **M2, real-data pilot:** the first real Sponsor data. Its entry gate is the compliance bar below (A7, A8 and the
  M2 parts of A1, A5); everything tagged M1 must also be in place.

The Milestone column is provisional until "Finalize MVP feature backlog".

## Compliance bar for M2 (decided)

- **GDPR role:** the Sponsor is controller, we are processor. A DPA and a subprocessor list (with regions) are signed
  before real data arrives.
- **Residency:** each Sponsor's Stack runs in the region that Sponsor chooses, in its own AWS account; model calls go
  through Bedrock in the same geography, so AWS is the one infrastructure and AI subprocessor (revised by "Backend
  architecture and stack", #8; it was "EU by default, Anthropic as a disclosed subprocessor"). See "Deployment
  architecture (decided)".
- **Subject data:** pseudonymized Subject records only, with minimal fields: EDC subject ID, Site, status and status dates
  (screened, consented, randomized, discontinued/completed), screen-fail reason category, next visit date. All
  other fields are dropped at ingestion. See `docs/adr/0001-store-pseudonymized-subject-records.md`.
- **Site Messages:** stored as received; Prime flags messages that may contain patient information; no redaction.
- **Part 11-ready, not validated:** approvals record approver, time and signature meaning; the audit trail is
  append-only, timestamped, attributable, with before/after values and a readable export. No re-authentication
  at approval, no validation package, no CSV/CSA.
- **Audit coverage:** sign-ins, approvals/rejections, sends, AI drafts and classifications, syncs, settings and
  permission changes, exports, and every read of Subject-level data (by users and by Prime).
- **Prime** may read Subject-level records through its tools; each read is audited.
- **Retention:** rolling periods set by the Sponsor at onboarding (no built-in defaults); until a period is set,
  nothing is purged. At contract end, data is exported to the Sponsor and deleted. Six Retention classes
  ("High-level data model"): Subjects, Site mail, People, Study ops, Engagement, each with a Sponsor-set period, and
  Audit, which has no rolling period and goes only at contract end, after the export.
- **Sign-in:** email magic link; SSO optional.
- **Security review pack:** filled standard questionnaire (CAIQ-lite / SIG Lite), data-flow and architecture
  note, DPA, subprocessor list; encryption in transit and at rest. SOC 2 / ISO 27001 and a pen test are deferred.

## How Prime produces insights (decided)

Decided in [How Prime generates insights and recommended actions](https://github.com/pietrotansini/primary_webapp_v2/issues/6);
see `docs/adr/0002-rules-flag-agents-diagnose.md`.

- **Shape:** Prime is the front and orchestrator; behind it, **Agents** run in parallel, one per **Capability**,
  shown in the UI with their instructions, memory, runs and proposals. An Agent can be mostly deterministic.
- **MVP Agents:** Enrollment agent (Sites behind expected pace, B4), Triage agent (classify Site Messages and
  Site Responses, extract asks, C6), Newsletter agent (per-Site Reports and asks in a Campaign, C4; makes no
  proposals), Engagement agent (Sites going quiet, C7).
- **Hybrid pipeline:** deterministic metrics, then fixed rules (our config) raise flags with a severity, then the
  Agent diagnoses with read tools on our DB and drafts the Action and email. The LLM never decides alone
  which Sites are at risk.
- **When:** Enrollment and Engagement agents run after each successful sync; the Triage agent on each incoming
  Site Message or Site Response; the Newsletter agent when a Campaign is drafted and again at send time.
  Chat reads stored results and uses read tools; it does not trigger scans.
- **Proposed Action fields:** priority P1–P3 from the rule's severity; one-line expected impact; owner chosen by
  the Agent from the Study team, with a reason, and changeable by anyone; Evidence. No confidence score, days
  saved or cost impact.
- **Evidence:** references to the records and metric snapshots the Agent fetched in that run (source system,
  as-of sync time); the server rejects citations it did not fetch; the UI links each claim to its record.
- **Repeat flags:** one open proposal per Site and rule; later runs refresh its Evidence; after a rejection the
  flag is held back until the Site is a severity step worse or 14 days pass.
- **Memory:** rejection reasons stored per Study and Agent, fed into later runs, visible and deletable on the
  Agent's page. Users edit free-text instructions; rules and thresholds are our config.
- **Stored outputs:** each run stores a short run summary (feeds Homepage "What Prime did") and per-Site diagnosis
  lines (the Sites list shows the stored line, not a live call).
- **Crystallization:** a principle; in the MVP developers turn recurring diagnoses and rejection reasons into
  rules or metrics by hand.

## Actions and the write-back flows (decided)

Decided in [Pilot form of the prototype's write-back flows](https://github.com/pietrotansini/primary_webapp_v2/issues/12).
No write-back into EDC / CTMS / eTMF / payment systems, with no exceptions.

- **Three Action kinds:** an **Email Action** sends its drafted mail on approval (A6); a **Manual Action** is a
  step a person does outside the platform (a CTMS edit, a vendor order, a budget amendment) and closes with an
  outcome note; an **In-app Action** changes, on approval, only data the platform owns: the Newsletter recipient
  overlay, Campaign content and schedule, Sponsor-entered values (per-Site plans, targets). Synced records are
  never edited. A proposal's "from → to" list is its content, not something we apply.
- **Statuses:** open → approved → closed, or rejected (reason required, fed to Agent memory).
  An Email Action closes on send, unless its mail carries a Request: then it stays approved until the Site
  Response arrives or the owner closes it with an outcome. A Manual Action is approved when its owner accepts it
  and closed when they mark it done with an outcome note. An In-app Action is applied and closed on approval.
  An approved Action past its deadline gets the overdue flag.
- **Per prototype flow:**
  - Ask Prime "Archive last IRB approval in the eTMF": Out (TM9, TMF).
  - "Save brief to CTMS" (Ask Prime and the Site page, EG5): the brief is saved on our Site page with dated
    history, with Copy and Download; the CRA files it in CTMS by hand.
  - "Approve & request" changes (eCOA tablets OP7, patient navigator EN4.4): an Email Action to the named
    recipient when we hold an address, otherwise a Manual Action.
  - "Approve & apply" budget shift (EN7.1), pre-screen questions (EN7.2), CTMS contact update (OP10), Budget
    agent payment release and invoice rejection (BU1, BU3, BU4): stay Won't.
  - Newsletter recipients: a local overlay (add / remove) on the Site Contacts synced from the CTMS, each overlay
    entry flagged "not in CTMS"; the CTMS stays the source on every sync.
  - Audit Trail "Export to eTMF": a download (PDF / CSV, OP9.2) that the user files themselves.
  - Connectors: every connector is labelled "Read only"; the eTMF and Payments tiles stay, shown as "Not in pilot".
- **Later:** closing the loop on an Action's outcome (metric before and after against its expected impact) is
  B7, in the fog; the MVP keeps the expected impact and the outcome note so that data exists.

## Data inventory and data model (decided)

From [Data inventory per Scenario and a tentative data model](https://github.com/pietrotansini/primary_webapp_v2/issues/22);
details in `docs/data-model.md`, settled by "Data ingestion approach for the pilot" and
[High-level data model](https://github.com/pietrotansini/primary_webapp_v2/issues/9).

- **Sources for the pilot Scenarios:** EDC (Subjects and their milestone dates, screen-fail reasons), CTMS (Study,
  plans, Sites, Site Contacts, CRA assignments, monitoring visits, Site issues), our own platform (mail, Site
  Responses, Site Messages, Actions, Agent runs), ClinicalTrials.gov (EN6), Sponsor-entered settings (daily cost of
  delay, NCT number when the CTMS lacks it), Study documents uploaded for A10, and one per-study file: referral
  counts from the referral tool (B5).
- **Choice rule:** connected platform before file; for the same data in two platforms, the easier one (CTMS for Study
  and Site facts, EDC for Subjects; randomization from the EDC, not the RTSM).
- **Referral data stored as counts only** (per Site, week, stage and source): pre-screened candidates haven't
  consented and have no pseudonymized ID. The file may carry one row per candidate; it is cut down and counted in
  memory while parsing (see "Data ingestion" below).
- **No pilot Scenario widens ADR 0001.** Below the cut, EN4.7, EG3 and EN4.1 would add discontinuation reason,
  ICF version and screening lab dates.
- **Model shape:** transient landing (raw files deleted after parsing), versioned synced records (Evidence and OP6
  point at a version), derived snapshots, and records born on the platform; `sponsor_id` on every row.
- **Decided in "High-level data model" (ADR 0004):** **every** synced entity keeps one row per version, and each
  sync run names the Recipe version it replayed. Agent runs, Prime conversations and Evidence hold pointers
  (record, version), never copies, so Subject data lives only with Subjects. Recipes, Recipe versions and their
  approvals live in the database. A Site is one hospital in one Study; there is no Institution entity in the MVP.
  Site Contacts are per Site: an unsolicited Site Message from an address shared by several Sites gets a Site
  proposed by the Triage agent, and a person confirms it. ADR 0001 stays as it is. **Site mail** carries a Site's
  own counts at any size, peer figures only as a study median over at least 5 Sites, and never Subject IDs or CTMS
  issue text.
- **Sensitivity classes:** Public, Confidential, PII, Health (pseudonymized, read-audited), Free text (may hold
  patient information), Secret. Never ingested: patient identifiers, treatment arm and kit numbers.

## Data ingestion (decided)

Decided in [Data ingestion approach for the pilot](https://github.com/pietrotansini/primary_webapp_v2/issues/7):

- **M1 data comes through real Recipes**, run against the pilot Sponsor's own EDC and CTMS sandboxes; M1 is done
  only when it does. Until those sandboxes arrive, developers build on **dev-only fixtures** in the synced-record
  shape (today's `logic.ts` sample data moved into the DB), never shown as the demo. **Dependency:** the pilot
  Sponsor, its EDC and CTMS vendors and sandbox access are not known yet; they gate M1.
- **Build order: UI Recipes first** (they work on any vendor and are A3's novelty), then export-file Recipes, then
  API Recipes. Build order only: at runtime ADR 0003's per-platform preference (API, then export, then UI) holds,
  and an API Recipe replaces a UI one once it exists.
- **Files arrive by upload only**, on the Connectors page, by the Sponsor admin or Primary staff. No SFTP, no
  email attachments.
- **Landing:** a successful parse deletes the raw file (manifest and checksum stay on `sync.run`). A failed parse
  keeps the raw file 7 days, encrypted, readable only by Primary support with every access audited, then deletes
  it (sooner once fixed).
- **Referral files** may hold one row per candidate: the parser keeps only the allowlisted columns (Site, date,
  channel, stage, failing pre-screen question) in memory, counts them and writes only the counts. The raw file never
  touches disk; a failed parse quarantines only the cut-down file. Processing candidate data is named in the M2
  compliance pack (A8).
- **Per-Site plans:** from the CTMS when mapped; else the Sponsor admin uploads our per-Site plan template; until
  then a straight line from the Site target and activation date, labelled as derived.
- **NCT number:** prefilled from the CTMS, else from a ClinicalTrials.gov search by Study code, and confirmed once
  in Study setup; CT.gov reads (EN6) wait on the confirmation.
- **Site coordinates (EN6):** the geoPoint of the Site's location in the Study's ClinicalTrials.gov record; else
  OpenStreetMap Nominatim on the CTMS address; else a pin the Sponsor drops.
- **Sync cadence:** EDC and CTMS Recipes nightly, files on arrival, ClinicalTrials.gov weekly, "sync now" for the
  Sponsor admin. Agents run after each sync, as decided.
- **Connectors is admin-only:** the Sponsor admin and Primary staff see it; ClinOps only see freshness (last sync in
  the TopBar, stale markers on figures, sync time on Evidence). No vendor catalog, no credentials modal: access goes
  through the per-Recipe access request (#28).

## Deployment architecture (decided)

Decided in [Backend architecture and stack](https://github.com/pietrotansini/primary_webapp_v2/issues/8); the full
note is `docs/architecture.md`, the hard-to-reverse part `docs/adr/0005-a-stack-per-sponsor-in-its-own-aws-account.md`.

- **A Stack per Sponsor:** each Sponsor gets a staging Stack (its sandboxes, M1, releases first) and a prod Stack
  (real data, M2), each a whole copy of the platform in its own AWS account, in the Sponsor's region. Nothing
  holding Sponsor data is shared; Primary staff have accounts inside each Stack. Primary's Dev and Demo are Stacks
  too; the `primary_teams` Demo on Vercel runs until the new Demo replaces it.
- **Inside a Stack (all AWS):** ECS Fargate with `web` (Next.js), `api` (Prime chat, Teams and Slack endpoints, app
  API) and `worker` (syncs with headed Chromium, rules, Agent runs, mail), behind one load balancer; RDS Postgres
  with pgvector (prod Multi-AZ, 35-day PITR); a Postgres jobs table enqueued in the same transaction as its cause;
  NAT with a static IP; Secrets Manager; SES out and in on a per-Sponsor subdomain; app-owned magic links.
- **AI through Bedrock only**, on the geographic inference profile: Prime, Agents, the connector agent and
  embeddings. No Anthropic API, Voyage or Jev in Sponsor Stacks; Recipe repair is fallback locators, then Claude,
  then a person.
- **Prime hands Agent work to the worker** as a job and answers at once; results post back to the Surface.
- **Visible browser** for MFA and Recipe learning is the worker's own Chromium, live in the Connectors page.
- **Teams and Slack:** one app per Sponsor, pointing at its Stack.
- **Fleet:** Terraform / OpenTofu modules for the account and the Stack, built before the pilot; a Primary build
  account (images, state, deploy role, no Sponsor data) rolls releases to staging, then prod on approval; engineers
  get time-limited audited roles; logs stay in the account, only metrics go to on-call.
- **Code boundary:** all backend work in Python, grown from `primary_teams`; Next.js is UI plus thin reads and
  writes; Python owns the migrations. Monorepo or two repos is left to the build plan.

## Scenarios drive the order

The backlog is ordered by the Scenarios it serves: `docs/scenarios.md` lists every Scenario from the demos (In, Won't,
Out) with the data, analysis and features each needs, and the
[Control Tower MVP Backlog](https://claude.ai/artifact/72GRvezZz11h4AF5hBQ4vH) page ranks them with a pilot cut line.
A feature's priority follows the highest-ranked Scenario that needs it. Rows marked *candidate* were added because a
Scenario needs them; they have no priority or size yet.

### Pilot Scenarios (decided)

Ranked on the page and reviewed by the CEO on 2026-11-01 in "Pick the pilot's first Scenarios"
([#18](https://github.com/pietrotansini/primary_webapp_v2/issues/18)). The full rank is in `docs/scenario-rank.md`,
exported from the page; "Import rank" on the page loads it back. Above the pilot cut line, in order:

| Rank | Scenario | Features |
|---|---|---|
| 1 | EN0 Enrollment by Site report | B2, D1 |
| 2 | EN3 Recruitment blockers at one Site, from referral to randomization | B5, B9, C6, D1 |
| 3 | EN10 Forecast last-patient-in and the cost of delay | B11 |
| 4 | EN6 Competing trials near a Site, with talking points for the PIs | D5 |
| 5 | EG7 Draft a one-off communication to a Site | C1, A6, A10 |
| 6 | EG8 Plan the monthly Newsletter Campaign with per-Site Reports | C4 |
| 7 | EG9 Bulk-approve a Campaign, preview it as a Site | C4, A6 |
| 8 | EN2.1 Sites at risk against plan, across Studies | B2, B4, A9 |
| 9 | EG5 Brief for the next Site meeting | B3, D1 |

Below the cut only the order matters for now: the CEO ranked the top nine and left the rest in catalogue order.
Value, Size and Avail. in `docs/scenarios.md` are unchanged.

Applying the rule:

- **Promoted to Must:** A10, B5, B9, B11 (were candidates; sizes still open) and D5 (was Could).
- **Moved to Should:** C7, C5, B1, D2 and D4, needed only by Scenarios below the cut (first: EG1, EG12, OP1, none, none).
- **Must as prerequisites:** A1, A2, A3, A4, A5, A7 and A8 serve every Scenario (sign-in, data, Prime, audit, going live)
  and stay Must whatever the rank.
- **EN10 and EN6 pull in open fog:** B11 waits on "Enrollment forecasting" and D5 on "External signals", so both
  need a decision before they can be sized.

## Priorities and sizes (provisional)

Ordered by the first Scenario each feature serves in the pilot rank; prerequisites next, then everything below the cut.

| # | Feature | MoSCoW | FE | BE | Milestone | First Scenario | Most likely moved by |
|---|---|---|---|---|---|---|---|
| B2 | Enrollment per Site | Must | M | M | M1 | 1 EN0 | Enrollment forecasting fog; pilot Sponsor's EDC (dependency) |
| D1 | Ask Prime (Q&A, no writes) | Must | M | M | M1 | 1 EN0 | |
| C6 | Site Responses and Site Messages (Triage agent) | Must | M | L | M1 | 2 EN3 | |
| B5 | Referral and pre-screening data (funnel top) | Must (was *candidate*) | | | M1 | 2 EN3 | Uploaded file aggregated in memory to counts (decided in "Data ingestion"); which referral tool the Sponsor uses |
| B9 | Site benchmarks (study median, peer Sites) | Must (was *candidate*) | | | M1 | 2 EN3 | |
| B11 | Enrollment forecast and cost of delay | Must (was *candidate*) | | | M1 | 3 EN10 | Enrollment forecasting fog; cost of delay entered by the Sponsor (data inventory) |
| D5 | Competing trials | Must (was Could) | S | M | M1 (was later) | 4 EN6 | External signals fog |
| C1 | Actions workspace (Email, Manual and In-app Actions) | Must | M | M | M1 | 5 EG7 | |
| A6 | Outbound and inbound email | Must | S | L | M1 | 5 EG7 | SES production access per new account (AWS answers within 96 h); inbound works in eu-central-1 and us-east-1 |
| A10 | Study documents as a source Prime reads (protocol, Site reference manual) | Must (was *candidate*) | | | M1 | 5 EG7 | |
| C4 | Campaigns and Newsletters (with the recipient overlay) | Must | L | L | M1 | 6 EG8 | |
| B4 | Enrollment agent | Must | M | M | M1 | 8 EN2.1 | Enrollment forecasting fog |
| A9 | Agent runtime: rules, runs, memory, Evidence | Must | M | L | M1 | 8 EN2.1 | What polls the jobs table while the worker is at 0 tasks |
| B3 | Site page (lite), with saved meeting briefs | Must | M | M | M1 | 9 EG5 | |
| A1 | Sign-in (magic link) and Sponsor team | Must | S | M | M1 | prerequisite | Roles and permissions fog |
| A2 | Study, Site and Site Contact master data (from CTMS) | Must | S | M | M1 | prerequisite | |
| A3 | Agentic connectors and data sync (Recipes) | Must | M (was S) | XL | M1 | prerequisite | Pilot Sponsor's EDC and CTMS (dependency) |
| A4 | Prime (front and orchestrator) | Must | S | L | M1 | prerequisite | Move from Vercel and the Anthropic API to the Stack and Bedrock |
| A5 | Audit Trail (Part 11-shaped) | Must | S | M | M1 (M2: Subject-read audit) | prerequisite | |
| A7 | Retention and purge | Must | S | S | M2 | prerequisite | |
| A8 | M2 compliance pack (DPA, subprocessors, review pack) | Must | | | M2 | prerequisite | Non-feature gate: documents, no code |
| A11 | Sponsor Stack provisioning (Terraform / OpenTofu) | Must (new) | | L | M1 | prerequisite | |
| A12 | Release pipeline and fleet operations | Must (new) | | M | M1 (M2: prod access controls) | prerequisite | |
| C7 | Site engagement score (Engagement agent) | Should (was Must) | S | M | M1 | 26 EG1 | Engagement score fog |
| C5 | Campaign performance | Should (was Must) | M | M | M1 | 33 EG12 | |
| B1 | Homepage | Should (was Must) | M | S | M1 | 36 OP1 | |
| D2 | Prime chat panel | Should (was Must) | M | S | M1 | none | |
| D4 | Teams and Slack | Should (was Teams Must, Slack Should) | S | M / S | M1 | none | One app per Sponsor, registered by provisioning (A11) |
| D3 | AI Studio | Could | M | S | later | 35 EG14 | |
| B6 | eConsent status | *candidate* | | | | 12 EN2.3 | Also EN4.4, EG3 |
| B7 | Action outcome tracking (metric before and after) | *candidate* | | | | 25 EN9 | |
| C8 | Campaign attribution to randomizations | *candidate* | | | | 34 EG13 | |
| C9 | Leadership updates | *candidate* | | | | 37 OP2 | |
| B8 | Data-quality and monitoring metrics (queries, entry lag, visit reports) | *candidate* | | | | 42 OP4 | Also OP5.1 to OP5.3 |
| B10 | Visit load and Site resources | *candidate* | | | | 47 OP7 | |
| C2 | Budget agent | Won't | | | | | |
| C3 | Regulatory agent | Won't | | | | | |

Assumptions the sizes rest on:

- **A3** is XL because connectors are agent-driven (an agent learns to work a platform's UI or API) and then
  crystallized into Recipes replayed with no LLM, plus the repair loop, checks, quarantine and review history;
  no pilot Sponsor, EDC or CTMS is picked yet, so it stays generic. UI Recipes are built first, then file
  upload, then APIs. Builds on `clinical-platform-connector`
  (Playwright recordings), `clinical-platform-connector-pietro` (assisted and automatic Castor export, immutable
  snapshots with receipts) and `castor_api_connector` (Castor API export).
- **A4 / D1 / D2 / D4** reuse the `primary_teams` agent (LangGraph, Knowledge Base, Teams and Slack Surfaces
  already working); the web app becomes one more Surface. The work is grounding it on our DB instead of mock
  Study Data, plus new tools, and moving it from Vercel, Supabase, the Anthropic API and Voyage onto the Stack
  (Fargate `api`, RDS, Bedrock), decided in "Backend architecture and stack" (#8).
- **A11 / A12** are new from "Backend architecture and stack": one Stack per Sponsor (staging and prod) only works
  if creating and upgrading one is a script, so provisioning and the release pipeline are Musts before M1.
- **A9** is the shared machinery every Agent uses (rules over metrics, run scheduling on sync and events, Agent
  pages, memory, Evidence validation, dedupe); building it once is what lets **B4** drop from BE L to M and keeps
  C4, C6 and C7's Agents small.
- **A6** sends from a platform domain through an email provider and receives Site Messages at an inbound
  address; no mailbox access. Requests (acknowledge, short form) are links to pages we host.
- **B2** uses connector data only: site-reported form figures never count as enrollment data.
- **C1** escalation in the pilot is only an overdue flag; the assignee approving an Email Action is what
  sends it, with no second approver. Email, Manual and In-app Actions: see "Actions and the write-back flows".

Pilot constraints from the map (they shape the backend notes below):
one sponsor with several studies, the platform **sends the approved email itself**,
**no write-back** into EDC / CTMS / eTMF / payment systems, and action status lives in our DB.

## How to read an entry

- **Frontend:** what exists in the prototype, and what changes once data is real.
- **Backend:** data it reads, data it writes, AI calls, external systems, and what is simulated today.
- **Source:** where the prototype implements it (`components/control-tower/…`).

"Simulated" means sample data or browser-only state in `logic.ts`, lost on reload.

---

## A. Platform (cross-cutting)

### A1. Sign-in, users and study team

- **v0:** Must · FE S · BE M · M1. Sponsor ClinOps sign in with an email magic link (SSO optional, later);
  CRAs and the study team are assignees. We own session security and offboarding.
- **Frontend:** none. The user is hard-coded as "Marie Curious, Clinical Operations" (Sidebar). The study team
  (`TEAM`: ClinOps, CRAs, Study Manager, Clinical Finance) appears as assignees in Actions and the team view.
  Needs a sign-in page, a user menu, and real people in every assignee picker.
- **Sponsor admin:** one admin flag on the Sponsor team (Connectors, file uploads, Recipe approval), decided in
  "Data ingestion approach for the pilot" (#7); finer roles stay in the roles fog.
- **Backend:** reads users, roles and study membership; writes sessions and team assignments.
  No AI. External: SES for magic links (app-owned, users in our DB; decided in "Backend architecture and stack",
  #8); an IdP only if a Sponsor asks for SSO. Simulated: everything.
- **Source:** `views/Sidebar.tsx`, `TEAM`, `DEF_ASG`, `who()` in `logic.ts`.

### A2. Study and site master data

- **v0:** Must · FE S · BE M. Sites and Site Contacts are synced read-only from the CTMS; the CTMS owns them.
  Newsletter recipients are a local overlay on top (C4).
- **Decided ("High-level data model", #9):** every synced record is versioned (ADR 0004); one Site per Study with
  the institution as a text attribute; Site Contacts per Site, so a PI on two Studies is two Site Contacts with one
  email.
- **Frontend:** study picker, study cards (phase, enrolled/target, start, planned and baseline LPI dates),
  site rows (name, location, code), site contacts (PI, coordinator, CRA), protocol versions and visit schedules,
  contract rates. All read-only in the UI.
- **Backend:** reads studies, sites, site staff, protocol versions and visit schedule, site contracts and visit
  rates, CRO work orders / monthly cost lines (used for cost-of-delay). Writes our canonical copy on each sync.
  No AI. External: CTMS (studies, sites, staff, contracts), eTMF / protocol documents.
  Simulated: `STUDIES`, `DIA_SITES`, `GEN_SITES` (procedurally generated sites for two studies),
  `SITE_OVERRIDES`, `ENG_PEOPLE`, `BS_POOL`, `BS_PROTO`, `BS_VISITS`, `PROTO_COST`, `DAY_COST`.
- **Source:** top of `logic.ts`; used by every screen.

### A3. Connectors and data sync

- **v0:** Must · FE S · BE XL. Agentic connectors crystallized into ingestion pipelines; EDC and CTMS first.
  Every connector is read-only; eTMF and Payments tiles are shown as "Not in pilot".
- **Decided ("Agentic platform connectors that crystallize into ingestion pipelines", #14):** each connector is a
  versioned **Recipe** per platform, tenant and Study (fetch steps, a field-mapping allowlist per feed, checks),
  replayed on a schedule with no LLM. An agent learns the first Recipe and repairs a broken one; it only ever
  proposes a new Recipe version, never data. Fetch order: vendor API, then scheduled export file, then the UI.
  Failures are classified: UI step failed → agent repairs the step and proposes a new version (people approve
  it, #29); mapped field gone → agent proposes, a person decides; contract broken → quarantined, store marked stale;
  sign-in or MFA → a person. Every new version needs the Connector reviewer, then the Sponsor admin (#29). Every run, repair,
  dry-run and promotion is an audit event. See `docs/adr/0003-connectors-replay-recipes-agents-propose-versions.md`.
- **Decided ("Fast decision models and the Obscura browser for the connector agent", #27):** Playwright with
  Chromium (not Obscura: no visible mode for MFA hand-off, no downloads, always presents as Chrome). Claude
  learns Recipes. Repair runs in tiers: fallback locators, then a fast decision model (Jev) choosing among the
  page's controls with Subject IDs redacted, then Claude, then a person; the step's post-condition judges every
  tier. Pilot starts Claude-only. **Revised by "Backend architecture and stack" (#8):** Sponsor Stacks call
  models only through Bedrock, so Jev is out of the repair tiers there (fallback locators, then Claude, then a
  person); the live browser for MFA is the worker's own headed Chromium streamed into the Connectors page.
- **Decided ("Least-privilege access a Sponsor admin can set up per platform", #28):** for each Recipe and
  platform we send the Sponsor's admin one access request generated from the Recipe's approved mapping: a
  dedicated non-human account, read-only role, named Studies and Sites, no blinded or hidden data. Field hiding
  at the source is required where it is cheap (Vault CTMS field-level security) and optional where it needs a
  study-build change (Rave, Clinical One, Castor; Vault EDC has none, so we read Retrieve Subjects only). The
  parse-time drop (ADR 0001) stays on every platform, with an alert on an unexpected field.
- **Decided ("Gates for putting a repaired Recipe live without a person", #29):** in the pilot **no new Recipe
  version goes live without people**; auto-promotion of locator-only repairs is fog, revisited with recorded
  repairs. Fallback locators already in an approved Recipe run unattended (no new version), audited, and the
  reviewer is told. A proposal reaches review only if its dry-run passes the checks and matches the last good
  snapshot's shape with nothing lost (same feeds and fields, every Site and Subject still present, no monotonic
  value going back); otherwise the agent retries once. Approval in order: Primary's **Connector reviewer** (rota,
  1 business day), then the **Sponsor admin** (2 business days, reminder after 1); no timeout default, the feed
  stays stale meanwhile. If an approved version's first sync fails: revert to the previous version, commit
  nothing, mark stale, re-propose once, then a person. While stale, Agents run on the last good snapshot with
  its date shown and recency rules suppressed for that feed. Audit events: sync run (version, times, rows per
  feed, checks, snapshot id), failure class, repair attempt (tier, model and version, redacted input, proposed
  diff), dry-run (checks and snapshot comparison), each approval or rejection, revert; never synced values.
  FE S → M for the two-step approval with a readable diff for the Sponsor admin.
- **Decided ("Data ingestion approach for the pilot" (#7)):** build UI Recipes first (runtime preference unchanged); M1 runs Recipes
  against the pilot Sponsor's sandboxes, dev work uses fixtures until then. Files arrive by upload only. Raw files
  are deleted after a good parse and kept 7 days (encrypted, audited) after a failed one; referral files are cut
  down and counted in memory. Cadence: EDC and CTMS nightly, files on arrival, ClinicalTrials.gov weekly, "sync
  now" for the Sponsor admin. See "Data ingestion (decided)".
- **Frontend (pilot):** Connectors page, **admin-only** (Sponsor admin and Primary staff): each Recipe with source
  (API, export, UI), version, approver, last good sync, status (ok, stale, quarantined, needs a person, awaiting
  Primary approval, awaiting Sponsor approval) and its change history; a proposed version's diff in plain terms
  (which step or field changed, dry-run result) with approve and reject for the Sponsor admin; file upload per Study (CTMS export,
  referral file, per-Site plan template); "sync now"; sign-in hand-off for MFA on UI Recipes; "request a
  connector". No vendor catalog and no credentials modal. ClinOps see freshness only: last sync in the TopBar,
  stale markers on figures, sync time on Evidence.
- **Frontend:** Connectors page lists connected systems (EDC, CTMS, eTMF, eIRB, Site payments, CRM,
  Reimbursements) with vendor, last sync, access mode ("Read" / "Read | write with your approval") and
  connect/disconnect. "Add a system" opens a catalog of ~14 categories × ~70 vendors; picking one opens a
  username/password modal. TopBar shows "Last scan 6:04 AM". Once real: only the connectors we actually build
  are listed; the rest become "request this connector"; sync status and errors are real.
- **Backend:** reads from each source system on a schedule (or ingests files/exports); writes raw and normalized
  records, sync runs, sync health. Stores credentials securely. No AI in replay; the agent runs only to learn or
  repair a Recipe. External: whichever vendors the pilot
  sponsor uses (see "Vendor data access options for the pilot"). Simulated: `INTEGRATIONS`, `SYS_CATALOG`,
  `connectSys()` / `disconnectSys()` just flip a flag.
- **Source:** `views/ConnectorsView.tsx`, `views/ConnectSystemModal.tsx`, `views/TopBar.tsx`.

### A4. Prime AI service

- **v0:** Must · FE S · BE L. Prime is the existing `primary_teams` agent, grounded on our DB.
- **Frontend:** no screen of its own; powers Ask Prime, the Prime chat panel, New action drafting, revising an
  action with context, newsletter section rewrites and AI Studio. Each call has an offline fallback.
- **Decided ("Backend architecture and stack", #8):** Prime runs in the Stack's Fargate `api` service, calls Claude
  through Bedrock (geo profile), keeps checkpoints and the Knowledge Base in the Stack's RDS (embeddings from a
  Bedrock model), answers short questions inline and hands Agent work to the worker as a job whose result posts
  back to the Surface.
- **Backend:** one server route (`app/api/complete/route.ts`) relays raw prompts to the Claude API. Today every
  prompt is built in the browser with **hard-coded study context** (e.g. "study DIA-2043, 17 sites incl.
  Northwestern…"). Once real: prompts are assembled server-side from our DB (grounding), with tool use over our
  data, per-call logging for the Audit Trail, and guardrails on what goes to the model. Reads: everything the
  answer needs. Writes: AI call logs, generated drafts. External: Claude API.
- **Source:** `lib/claude.ts`, `app/api/complete/route.ts`; `complete(` calls in `logic.ts`
  (lines ~1124, 1462, 1502, 1573, 1629, 1672, 1705).

### A5. Audit Trail

- **v0:** Must · FE S · BE M · M1, Subject-read logging M2. Part 11-shaped, not validated: append-only,
  timestamped, attributable, before/after values, readable export; approvals carry signature meaning
  ("Approved for sending"), no re-authentication. Covers sign-ins, approvals/rejections, sends, AI drafts and
  classifications, syncs, settings and permission changes, exports, and every read of Subject-level data,
  including Prime's tool reads. Export is a download the user files in the eTMF; no eTMF export.
- **Frontend:** a reverse-chronological list "Every action taken, here and on other systems": time, dot, text,
  study. Prime chat on this page offers "Summarize what Prime did this week" and "Export approvals for an
  inspection" (export to eTMF). Once real: filters, paging, and an export file.
- **Backend:** reads the event log; writes an append-only event for every approval, rejection, send, AI
  generation, sync and settings change (who, when, what, before/after). Export (CSV/PDF) for inspection.
  AI: summarizing the log. External: none (eTMF export would be write-back). Simulated: `state.log`, `addLog()`.
- **Source:** `views/AuditTrailView.tsx`, `addLog()` in `logic.ts`.

### A6. Outbound email

- **v0:** Must · FE S · BE L. Platform domain + email provider out; inbound address for Site Messages; hosted Request pages.
- **Frontend:** "Approve & send" on email actions, "Approve & schedule" on site engagements; sender is the
  signed-in user ("Thanks, Marie").
- **Backend:** sends approved emails from a sponsor-recognised identity, schedules sends (site-local time),
  records delivery, bounces, opens/acknowledgement clicks and replies against the action or campaign.
  External: Amazon SES in the Stack's account, out and in, on a per-Sponsor subdomain (DKIM, SPF); inbound Site
  Messages land in S3 and become a worker job ("Backend architecture and stack", #8). Where the Stack's region has
  no SES receiving, inbound sits in the nearest supported region of the same geography; SES receives in 22 regions
  incl. eu-central-1 and us-east-1 (not Zurich, Spain, Hyderabad, Malaysia, Calgary, UAE, GovCloud), per the research ("Cost and Bedrock quotas per Sponsor Stack", #35; `research/stack-cost-bedrock-quotas.md` on branch `research/stack-cost-bedrock-quotas`).
  Every new account starts in the SES sandbox (verified recipients, 200 mails a day) until production access is
  granted, so A11 requests it before M1 mails Site Contacts. Simulated: sending is a state change.
- **Source:** `approve()` in `logic.ts`; Actions and Engagements.

### A7. Retention and purge (new, from the compliance bar)

- **v0:** Must · FE S · BE S · M2.
- **Frontend:** a settings page where the Sponsor sets a retention period per Retention class: Subjects, Site mail
  (Site Messages and Site Responses), People (Sponsor users and Site Contacts), Study ops, Engagement; no defaults.
  Audit has no period ("High-level data model", #9).
- **Backend:** a scheduled purge job applying the Sponsor's periods; nothing is purged for a class with no period
  set; the audit trail records each purge. A purge deletes every version of a record; old versions age out from
  their valid-to date; Evidence and audit events keep the pointer and show "purged on <date>" (ADR 0004).
  End-of-contract export and delete, the only time the audit trail is deleted.

### A8. M2 compliance pack (new, from the compliance bar)

- **v0:** Must · no code · M2 gate. DPA template (processor, SCCs), subprocessor list with regions, filled standard
  security questionnaire (CAIQ-lite / SIG Lite), data-flow and architecture note. EU regions chosen by default
  where they cost nothing extra. SOC 2 / ISO 27001 and a pen test are deferred. The architecture note is
  `docs/architecture.md`; the subprocessor list is AWS (infrastructure and Bedrock) plus Microsoft and Slack for
  the bots.

### A9. Agent runtime (new, from "How Prime generates insights")

- **v0:** Must · FE M · BE L · M1.
- **Frontend:** one page per Agent (instructions, memory with delete, last/next run, run summaries, open
  proposals), replacing the prototype's bespoke Enrollment/Budget/Regulatory pages; "proposed by <Agent>" and
  Evidence links on every Action.
- **Backend:** per-Site metric computation and rule evaluation after each sync; event triggers (Site Message,
  Campaign drafted/sent); runs an Agent per flag with read tools on our DB; validates Evidence against the run's
  tool reads; dedupes one open proposal per Site and rule with a rejection cool-down; stores run summaries,
  diagnosis lines and memory. Every run and AI call is audited (A5).
- **Decided ("Backend architecture and stack", #8):** Agent runs are jobs in the Stack's Postgres jobs table,
  enqueued in the same transaction as the sync commit or event that caused them and claimed by the Fargate worker
  (scales 0 to N on queue depth); schedules live in the DB. Parallelism per Stack is capped by its Bedrock quota.
- **Researched (#35):** Bedrock's documented default for Sonnet 5.5 is 6M tokens/min per account and region (no
  requests-per-minute quota; 700M tokens/day across models), but a new account's applied quota may be lower, so
  Agent concurrency is a setting read from the account's real quota, with `max_tokens` kept tight (input +
  `max_tokens` is reserved per call; cache reads don't count). About 3 runs in parallel at 200k tokens/min already
  covers a night of ~25 runs. Calls go through `bedrock-runtime` with the `eu.`/`us.` profile (`bedrock-mantle`
  has no geographic profile for Sonnet/Haiku 5.5). Expected AI spend for a pilot Sponsor's prod is ~$230/month
  ($66–1,120) with prompt caching, ~$515 without. **Open:** a worker at 0 tasks leaves nothing to poll the jobs
  table, fire schedules or publish queue depth; either `api` does it or one small worker stays on (+$62–83/month).

### A11. Sponsor Stack provisioning (new, from "Backend architecture and stack")

- **v0:** Must · BE L · M1.
- **Backend:** Terraform / OpenTofu modules: one creates an AWS account in Primary's Organization (KMS, IAM
  Identity Center roles, Bedrock quota requests), one creates a Stack in it (VPC, NAT with Elastic IP, ECS Fargate
  `web`, `api`, `worker`, load balancer, RDS, S3, Secrets Manager, SES domain and receiving, DNS), plus the Teams
  and Slack app registrations. Used first for Primary's Dev, then the pilot Sponsor's staging Stack.
- **Researched (#35):** provisioning also files the SES production-access request (AWS answers within 96 h) and
  Bedrock quota raises through a Service Quotas request template on the Organization (up to 10 per new account;
  AWS publishes no lead time, large raises may wait for real traffic). Infrastructure per Stack, expected:
  staging ~$198 EU / $174 US, prod ~$363 EU / $317 US a month (fixed floor ~$71 for NAT, IP and load balancer);
  Primary's build account + Dev + Demo ~$355 EU. One Sponsor (staging + prod + AI) ~$880/month EU, range
  $540–2,580. No free tier (shared once per Organization); Graviton Fargate ~20% cheaper; Dev and Demo can skip NAT.

### A12. Release pipeline and fleet operations (new, from "Backend architecture and stack")

- **v0:** Must · BE M · M1, prod access controls M2.
- **Backend:** a Primary build account (ECR, Terraform state, GitHub Actions deploy role, no Sponsor data); one image
  set per release, rolled to every staging Stack, then each prod on a manual approval; migrations that tolerate
  Stacks on different versions; metrics and alarms out to on-call, logs kept in each account; time-limited audited
  engineer access with a break-glass DB role.

---

## B. Recruitment monitoring

### B1. Homepage

- **v0:** Must · FE M · BE S. Actions waiting, next Campaigns, enrollment by Study.
- **Pilot rank:** Should. First needed by OP1 (rank 36), below the cut.
- **Frontend:** "Clinical Operations Agent" landing: Actions waiting for you (with cost impact if approved),
  Enrollment by study, Next site engagements, What Prime did in the last 7 days, suggested tasks
  ("Summarize what needs my attention", "Find sites at risk across all studies", "Draft my weekly update for
  study leadership"). Answers can be pinned to the Homepage.
- **Backend:** reads open actions, study enrollment rollups, scheduled campaigns, recent agent activity, pinned
  items; writes pins. AI: the suggested-task answers. Simulated: all sample data.
- **Source:** `views/HomeView.tsx`, `PAGE_CHAT.prime`.

### B2. Enrollment analytics (studies, sites list, patient funnel)

- **v0:** Must · FE M · BE M. Enrollment per Site from connector data only; fake funnel ratios dropped.
- **Frontend:** Enrollment page lists active trials (enrolled vs target, planned vs baseline LPI, status note).
  Sites List ranks sites by enrollment gap with status (On track / Watch / At risk), bottleneck
  (Referral / Screening / Consent / Activation / Retention) and a one-line diagnosis. Patients Recruitment
  (Analytics) shows the total funnel (referred → pre-screened → screened → consented → enrolled /
  randomized → completed / dropped out), funnel by site, site comparison, status mix, trial cohorts, a
  patient list with next visit, and CSV download. The patient list shows pseudonymized Subjects only (EDC
  subject ID, Site, status and dates, screen-fail reason, next visit); each view and export is audited (A5). Once real: numbers come from source data; the funnel is
  measured, not multiplied out.
- **Backend:** reads enrollment, screening, screen-fail reasons, randomizations, referrals, site activation dates,
  site plans (expected per site over time); writes computed metrics / snapshots. Computes status
  (`statusOf`: enrolled ÷ expected, >0.9 on track, ≥0.6 watch), bottleneck, expected pace and forecast
  completion. AI: the per-site diagnosis line. External: EDC, CTMS, IRT/RTSM, referral/recruitment tools.
  Simulated: `funnelOf()` derives referred and pre-screened counts from fixed ratios (×1.85, ×1.6) and
  outcomes from `OUTC`; per-site plans and diagnoses are hard-coded or seeded random.
- **Source:** `views/EnrollmentView.tsx` (studies list), `views/SitesListView.tsx`, `views/StudySitesView.tsx`,
  `siteData()`, `funnelOf()`, `statusOf()` in `logic.ts`.

### B3. Site detail

- **v0:** Must (lite) · FE M · BE M. Contacts, engagement timeline (Actions, Campaigns, Site Responses, Site Messages), enrollment vs plan, engagement score, meeting briefs (EG5) saved here with dated history, Copy and Download, never written to CTMS. EDC queries, invoices, documents, training: Won't.
- **Frontend:** one site's operational view: enrollment and funnel, recruitment blockers, Prime highlights and
  Prime news (e.g. competing trials), open EDC queries, missing CRF pages, pending invoices / payments,
  protocol version and re-consent status, required documents and their version history, training, site team
  and sponsor/CRO contacts, upcoming visits, and a **Meeting brief** generated by Prime and "Saved to CTMS".
- **Backend:** reads all of B2 for one site plus EDC queries and missing pages, invoice status (C2),
  protocol/re-consent status, essential documents (eTMF/eISF), training records, contacts; writes meeting
  briefs. AI: highlights, diagnosis, meeting brief. External: EDC, CTMS, eTMF/eISF, eConsent, ClinicalTrials.gov.
  Simulated: `bsVals()` / `bslVals()` build most of it from pools (`BS_*`). The "Saved to CTMS" step is a
  write-back (see tensions).
- **Source:** `views/SiteDetailView.tsx`, `bsVals()`, `makeBriefs()`, `briefPlan()`, `BS_COMP`.

### B4. Enrollment agent

- **v0:** Must · FE M · BE M (was L; the shared parts moved to A9). After each sync, rules over B2 metrics flag
  Sites behind expected pace; the Agent diagnoses with read tools and proposes Actions with Evidence, a rule-set
  priority and an owner it picks. Instructions editable, memory from rejections, rules are our config.
- **Frontend:** agent page with instructions (free text), triggers (when → then rules, e.g. "Site below 60% of
  expected enrollment → flag at risk and diagnose"), data sources it reads, memory ("learned" items, from
  dismissals or added context), last/next scan, Daily Brief, Key insights, Action items / open proposals.
  Instructions, rules and memory look editable.
- **Backend:** a scheduled scan (daily, "Each morning…") that evaluates rules over B2 metrics, diagnoses
  bottlenecks and **creates proposed actions** (C1) with evidence, sources, expected impact, confidence and a
  drafted email. Reads metrics, rules, instructions, memory; writes proposals, insights, daily brief, memory
  items (from rejections with a reason). AI: diagnosis, proposal and email drafting, brief. Simulated:
  `AGENT_INSTR`, `AGENT_RULES`, `AGENT_SOURCES`, `AGENT_MEMORY`, all `ITEMS` are pre-written.
- **Source:** `views/EnrollmentView.tsx`, `ITEMS`, `AGENT_*` in `logic.ts`.

---

## C. Act on it

### C1. Actions workspace

- **v0:** Must · FE M · BE M. An Action is a task for one Sponsor-side person with a deadline; started by an Agent or by a Site Message; the proposing Agent picks the owner, anyone can change it; fields are priority (from the rule), one-line impact and Evidence, no cost impact, confidence or days saved; overdue is only flagged; the assignee approving an Email Action sends it. Three kinds (Email, Manual, In-app) and their statuses: see "Actions and the write-back flows"; Manual Actions close with an outcome note.
- **Frontend:** inbox of proposed actions with priority (P1–P3), study, sites, kind, confidence, filters and
  status groups (open / approved / closed / rejected). Each action shows what was observed, why, sources,
  expected impact, days saved and **cost impact** (days × study daily cost), then either an email draft
  (to, subject, body) or a list of changes (from → to). Users can approve & send, reject with a reason, add
  context so Prime revises the draft, reassign, and create a **New action** that Prime drafts from free text.
  Team view shows workload per person (open, overdue, waiting on). Actions Overview (Analytics) shows
  resolved, on time, overdue, average resolution and delay vs target. Approved actions carry a follow-up note.
- **Backend:** reads proposals from all agents (B4, C2, C3, D1), team, cost basis; writes action status, edits,
  revisions, assignee, rejection reasons (fed to agent memory), audit events. Sends email via A6. AI: revise
  with context (`sendCtx`), draft new action (`localDraft`/`finalizeNew`), answer questions about the queue.
  External: none for email actions; "changes" actions (budget shifts, campaign changes, payment release) target
  external systems. Simulated: `ITEMS`, `PROTO_COST`, `ACT_DIRECT`, `TEAM_TASKS`, status in browser state.
- **Source:** `views/ActionsView.tsx`, `views/NewActionModal.tsx`, `approve()`, `reject()`, `sendCtx()`,
  `costImpactOf()`, `teamView()` in `logic.ts`.

### C2. Budget agent (site invoices and payments)

- **v0:** Won't.
- **Frontend:** agent page (instructions, triggers, data sources, memory, last/next run like B4), invoice status
  by site (paid to date, oldest unpaid age, enrollment risk, invoices with held lines and reasons), findings
  (over-billed visit time, lab billed with no EDC result, duplicate invoice), an Invoice Reconciliation Brief,
  open proposals ("release verified lines", "reject duplicate", "re-bill request"), and an **Upload invoice**
  modal that "reads" a PDF. Ask Prime has a "Reconcile invoice against last purchase order" task.
- **Backend:** reads invoices and payment status, site contracts (visit rates and durations), EDC completed
  visits, visit times and lab results; writes invoice lines, match results, holds, proposals. AI: extracting
  invoice lines from PDFs, explaining mismatches, drafting re-bill emails. External: payments system
  (e.g. SAP Ariba / Greenphire), CTMS contracts, EDC. Simulated: `BUD_SITES`, `BUD_FINDINGS`, `BUD_*`; upload
  returns canned lines (`upDraft()`). Releasing payment is a write-back (see tensions).
- **Source:** `views/BudgetView.tsx`, `views/InvoiceUploadModal.tsx`, `BUD_*`, `upDraft()` in `logic.ts`.

### C3. Regulatory agent

- **v0:** Won't.
- **Frontend:** agent page (instructions, triggers, memory), list of monitored websites with "Add a website to
  monitor", new alerts from FDA / EMA / ICH / MHRA / IRBs with type, date, impact (High/Medium/Low), affected
  studies, a plain-language summary and Prime's study-specific note; "draft an action" from an alert.
  Prime chat: "Summarize new guidance that affects my studies", "List sites with IRB approvals expiring soon".
- **Backend:** reads monitored regulator sites / feeds, study attributes (countries, technologies, systems),
  IRB approvals and expiry; writes alerts, relevance tags, proposals. AI: summarizing guidance, mapping it to
  studies, drafting actions. External: regulator websites, eIRB. Simulated: `REG_ALERTS`, `REG_*`.
- **Source:** `views/RegulatoryView.tsx`, `REG_*` in `logic.ts`.

### C4. Site engagements (newsletters and campaigns)

- **v0:** Must · FE L · BE L. The core. Newsletters bundle Reports, Requests (acknowledge, short form) and reminders per Site; a Campaign is a scheduled set of Actions on the calendar, bulk-approved with per-Site overrides. Recipients are the CTMS Site Contacts plus a local overlay (add / remove, flagged "not in CTMS").
- **Frontend:** dashboard with an upcoming campaign ("Approve the November newsletter?"), a calendar of sent,
  draft and planned campaigns, and a builder: templates (monthly newsletter, recruitment push, site spotlight,
  protocol notice, blank), drag-to-reorder blocks that are **shared** (same for all sites) or **personal**
  (Prime fills per site from EDC/CTMS: site metrics, one ask per site), "Preview as" a given site, AI rewrite
  chips (Shorter, Warmer tone, Add a reply-by date, More direct ask), audience, send date, a "please confirm
  you've read this" acknowledgement, and approve & schedule. Prime chat proposes campaigns (e.g. "Re-engage
  sites with no activity", reading site emails and CTMS activity).
- **Backend:** reads site contacts, per-site metrics, open actions per site, site emails and questions,
  milestones; writes campaigns, per-site rendered content, schedule, recipients. Sends via A6. Requests made in
  a campaign become follow-up actions in C1 (`ENG_ACT_IDS`). AI: per-site personalization, section rewrite,
  campaign proposals. External: CTMS, EDC, the site email inbox (read), email provider. Simulated: `ENG_*`.
- **Source:** `views/EngagementsView.tsx`, `engVals()`, `engLocal()`, `engChatVals()`, `ENG_*`.

### C5. Engagement performance

- **v0:** Must · FE M · BE M.
- **Pilot rank:** Should. First needed by EG12 (rank 33), below the cut.
- **Frontend:** per campaign (Analytics → Engagements): delivered, read and confirmed, responses, questions raised,
  actions requested and their status per site, site metric changes after the campaign, "what we learned", and
  "New patients at 30 days". Campaign list with filters.
- **Backend:** reads delivery and acknowledgement events, replies, follow-up action status, site metrics before
  and after; writes campaign results. AI: summarizing replies and lessons, "Which campaigns led to new
  randomizations?". External: email provider events, inbox. Simulated: `ENG_PERF`, `ENG_CAMPS`.
- **Source:** `views/EngagementPerformanceView.tsx`, `ENG_PERF`.

### C6. Site Responses and Site Messages (new in v0)

- **v0:** Must · FE M · BE L.
- **Frontend:** per Site and per Campaign: Site Responses to each Request (acknowledged, form answers) and an
  inbox of Site Messages (free-text mail, linked to the thread it answers or unsolicited), each with Prime's
  classification (question, commitment, blocker, acknowledgement, out of office) and a "turn into Action" link.
- **Backend:** receives Request clicks and form posts on hosted pages; receives Site Messages at the platform's
  inbound address and matches them to Site, Site Contact and thread; writes responses, messages and
  classifications. AI: classification, extracting asks into proposed Actions. External: email provider
  (inbound). Simulated today: site emails in `ENG_*` and `engChatVals()`. Site Messages are stored as received;
  Prime's classification also flags a message that may contain patient information (no redaction).

### C7. Site engagement score (new in v0)

- **v0:** Must · FE S · BE M.
- **Pilot rank:** Should. First needed by EG1 (rank 26), below the cut.
- **Frontend:** a score per Site on the Sites list and Site page, trend over time, ranked with enrollment.
- **Backend:** computed from Site Responses, Site Messages and Action outcomes (formula still open).
  Writes score snapshots. No external system.

---

## D. Ask and automate

### D1. Ask Prime (task runner)

- **v0:** Must · FE M · BE M. Q&A over our data; no write tasks; may draft Actions (see "Actions and the write-back flows").
- **Frontend:** a prompt bar plus suggested tasks (e.g. "Pull data from CTMS", "Check last data entry in the
  EDC", "Reconcile invoice against last purchase order", "Archive last IRB approval in the eTMF",
  "Prepare meeting brief for each site", and more in `PRIME_MORE`). Running a task shows the **plan** (steps
  with the system each touches and its mode: read-only / writes / sends email), live step progress, a preview
  that **pauses for approval** before any write, and a result (summary, table, chart). Free-text tasks get a
  plan drafted by the agent. A history of past runs is kept (archive) and runs can be followed up.
- **Backend:** reads whatever the task touches (in our DB once synced); writes run records, results, archive,
  audit events. AI: planning, executing, summarizing, follow-ups (tool use over our data). External: the source
  systems; several seeded tasks **write** to CTMS / eTMF (see tensions). Simulated: `PRIME`, `PRIME_MORE`,
  `ARCHIVE_SEED`, `primeRunFrom()` animates canned steps.
- **Source:** `views/AskPrimeView.tsx`, `views/AskPanel.tsx`, `PRIME*`, `ARCHIVE_SEED`, `primeRunFrom()`,
  `patchTurn()`, `approveTurn()`.

### D2. Prime chat panel (per page)

- **v0:** Must · FE M · BE S.
- **Pilot rank:** Should. No Scenario needs it; Ask Prime (D1) and Site page briefs cover the pilot Scenarios.
- **Frontend:** a side panel on every page with page-specific suggested tasks (`PAGE_CHAT`: Homepage, Actions,
  Enrollment, Budget, Regulatory, Patients Recruitment, Sites List, Engagements Performance, AI Studio,
  Audit Trail, Connectors), a free-text box, a structured answer card with a follow-up refinement, and a
  closing action (pin to Homepage, open Actions, approve & schedule, export).
- **Backend:** same as D1 but scoped to the page's data; writes pins, scheduled items, audit events.
  AI: answers. Simulated: every answer in `PAGE_CHAT` is pre-written.
- **Source:** `views/PrimeChatPanel.tsx`, `PAGE_CHAT`, `pgTask()`.

### D3. AI Studio (beta)

- **v0:** Could · FE M · BE S.
- **Frontend:** generate a slide summary or a short explainer-video script from study data for a chosen audience
  and length, with scenes and total duration; Prime chat offers "Draft an automation for weekly site check-ins".
- **Backend:** reads study and site data; writes generated outputs. AI: content generation.
  External: none (video rendering would be one). Simulated: `studioLocal()` fallback.
- **Source:** `views/StudioView.tsx`, `studioLocal()`.

### D4. Prime in Slack / Teams

- **v0:** Teams Must, Slack Should · FE S · BE M / S. Same agent as Ask Prime; already runs on both in `primary_teams`.
- **Pilot rank:** Should, Teams and Slack alike. No Scenario needs it; cheap to add since `primary_teams` already runs on both.
- **Frontend:** "Add to Teams / Slack" in the sidebar; once added, "Prime in Teams & Slack". Nothing else is designed.
- **Backend:** a Slack app / Teams bot that relays questions to Prime and posts approvals or alerts.
  External: Slack and Microsoft Teams APIs. Simulated: a flag.
- **Source:** `views/Sidebar.tsx`, `logic.ts` ~line 2438.

### D5. External signals: competing trials

- **v0:** Could · FE S · BE M.
- **Pilot rank:** Must, M1. Needed by EN6 (rank 4); waits on the "External signals" fog for sources and matching.
- **Frontend:** appears inside other features, not as its own page: the NASH-3301 study note and action about
  "2 new NASH studies recruiting the same F2–F3 patients" (ClinicalTrials.gov), and competing trials per site in
  Site detail (`BS_COMP`).
- **Backend:** reads ClinicalTrials.gov (by condition, location, eligibility), matches to our sites;
  writes signals that agents use. AI: overlap judgment. External: ClinicalTrials.gov API. Simulated: hard-coded.
- **Source:** `STUDIES[0].note`, `ITEMS` (`nash`), `BS_COMP`.

---

## Tensions surfaced by the inventory

Facts the later tickets will need to decide on; not decisions.

- **Write-back in the prototype vs. "no write-back" in the pilot.** These prototype flows write to external
  systems: Ask Prime "Archive last IRB approval in the eTMF" and "Save brief to CTMS"; site meeting briefs
  "Saved to CTMS"; "changes" actions like "Approve & apply" a budget shift in the campaign tool; Budget agent
  releasing payments; Audit Trail "Export to eTMF"; eTMF/Payments shown as "Read | write with your approval".
  Each needs a pilot form (store in our DB, email someone, or drop). *Decided: see "Actions and the write-back
  flows"; no write-back, with no exceptions.*
- **Inbound email.** Engagements, engagement performance and some actions read "site emails" and replies.
  That is a data source the connector list doesn't name. *v0: now C6, through the platform's inbound address.*
- **Hard-coded AI context.** Every prompt embeds DIA-2043 facts; grounding Prime in real data is a backend
  capability on its own (A4), and every AI feature depends on it.
- **Derived numbers.** Funnel top (referred, pre-screened), expected per-site pace, forecast completion and
  cost-of-delay are computed from fixed ratios or constants today; real values need source data or a model.
- **Agents share one pattern.** Enrollment, Budget and Regulatory agents all have instructions, triggers,
  data sources, memory, last/next run and proposals into Actions. *Decided: one shared Agent runtime (A9),
  one Agent per Capability.*
