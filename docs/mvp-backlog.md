# MVP feature backlog: Recruitment Control Tower

Living backlog for the pilot-ready MVP. Charted on the wayfinder map
[Wayfinder: Recruitment Control Tower MVP backlog](https://github.com/pietrotansini/primary_webapp_v2/issues/2).
Every ticket resolution on that map updates this file.

**Status: v0 (provisional).** Priorities and sizes from "Draft MVP backlog v0"
([#10](https://github.com/pietrotansini/primary_webapp_v2/issues/10)), on top of the candidate list from
[Inventory the prototype's features and their backend needs](https://github.com/pietrotansini/primary_webapp_v2/issues/3).
Everything below is provisional until "Finalize MVP feature backlog". Terms follow `GLOSSARY.md`.

## Product framing (v0)

The MVP is a **site-engagement CRM for biotech Sponsors**. The pilot proves, in this order:

1. **Engagement out:** Prime drafts Actions and Newsletters, the team schedules them as Campaigns on a calendar,
   approves (in bulk for a Campaign) and the platform sends them.
2. **Insights back:** Site Responses (acknowledgements, short forms) and free-text Site Messages are classified,
   asks become Actions, and each Site gets an engagement score; Campaign performance rolls it up.
3. **Enrollment per Site:** measured from connector data only, with the Enrollment agent proposing Actions.

The pilot user is the Sponsor's clinical operations team. Prime is **one agent**, the existing
`primary_teams` agent, reached from Ask Prime, the chat panel, Teams and Slack. TMF / eTMF filing
(also in `primary_teams`) is a separate product, not part of this backlog.

## Milestones

Decided in [Compliance and security bar for the pilot](https://github.com/pietrotansini/primary_webapp_v2/issues/4):

- **M1, functional demo:** sample or anonymized data only; no compliance items are required.
- **M2, real-data pilot:** the first real Sponsor data. Its entry gate is the compliance bar below (A7, A8 and the
  M2 parts of A1, A5); everything tagged M1 must also be in place.

The Milestone column is provisional until "Finalize MVP feature backlog".

## Compliance bar for M2 (decided)

- **GDPR role:** the Sponsor is controller, we are processor. A DPA and a subprocessor list (with regions) are signed
  before real data arrives.
- **Residency:** EU by default wherever it costs nothing extra (Supabase EU, Vercel fra1, an EU email provider);
  not a go-live gate. Anthropic stays as a disclosed subprocessor (SCCs, zero data retention).
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
  nothing is purged. At contract end, data is exported to the Sponsor and deleted.
- **Sign-in:** email magic link; SSO optional.
- **Security review pack:** filled standard questionnaire (CAIQ-lite / SIG Lite), data-flow and architecture
  note, DPA, subprocessor list; encryption in transit and at rest. SOC 2 / ISO 27001 and a pen test are deferred.

## Priorities and sizes (v0, provisional)

| # | Feature | MoSCoW | FE | BE | Milestone | Most likely moved by |
|---|---|---|---|---|---|---|
| C4 | Campaigns and Newsletters | Must | L | L | M1 | Pilot form of the prototype's write-back flows; data model |
| C6 | Site Responses and Site Messages | Must | M | L | M1 | How Prime generates insights |
| C7 | Site engagement score | Must | S | M | M1 | How Prime generates insights |
| C5 | Campaign performance | Must | M | M | M1 | How Prime generates insights |
| C1 | Actions workspace | Must | M | M | M1 | Pilot form of the write-back flows |
| A6 | Outbound and inbound email | Must | S | L | M1 | Backend architecture and stack (provider choice) |
| A3 | Agentic connectors and data sync | Must | S | XL | M1 | Agentic platform connectors prototype; ingestion approach |
| A2 | Study, Site and Site Contact master data (from CTMS) | Must | S | M | M1 | Agentic platform connectors prototype |
| A4 | Prime (the shared agent) | Must | S | L | M1 | Backend architecture and stack |
| A1 | Sign-in (magic link) and Sponsor team | Must | S | M | M1 | Roles and permissions fog |
| A5 | Audit Trail (Part 11-shaped) | Must | S | M | M1 (M2: Subject-read audit) |  |
| A7 | Retention and purge | Must | S | S | M2 | |
| A8 | M2 compliance pack (DPA, subprocessors, review pack) | Must | | | M2 | Non-feature gate: documents, no code |
| B1 | Homepage | Must | M | S | M1 | |
| B2 | Enrollment per Site | Must | M | M | M1 | Ingestion approach; enrollment forecasting fog |
| B3 | Site page (lite) | Must | M | M | M1 | Data model |
| B4 | Enrollment agent | Must | M | L | M1 | How Prime generates insights |
| D1 | Ask Prime (Q&A, no writes) | Must | M | M | M1 | Backend architecture and stack |
| D2 | Prime chat panel | Must | M | S | M1 | |
| D4 | Teams (Must), Slack (Should) | Must / Should | S | M / S | M1 | Backend architecture and stack |
| D3 | AI Studio | Could | M | S | later | |
| D5 | Competing trials | Could | S | M | later | |
| C2 | Budget agent | Won't | | |  | |
| C3 | Regulatory agent | Won't | | |  | |

Assumptions the sizes rest on:

- **A3** is XL because connectors are agent-driven (an agent learns to work a platform's UI or API) and then
  crystallized into replayable pipelines; no pilot Sponsor, EDC or CTMS is picked yet, so it stays generic.
  Builds on `clinical-platform-connector` (Playwright recordings) and `castor_api_connector`.
- **A4 / D1 / D2 / D4** reuse the `primary_teams` agent (LangGraph, Knowledge Base, Teams and Slack Surfaces
  already working); the web app becomes one more Surface. The work is grounding it on our DB instead of mock
  Study Data, plus new tools. Where it is deployed and how many agents run (not limited to Vercel, Supabase or
  Next.js) is open in "Backend architecture and stack".
- **A6** sends from a platform domain through an email provider and receives Site Messages at an inbound
  address; no mailbox access. Requests (acknowledge, short form) are links to pages we host.
- **B2** uses connector data only: site-reported form figures never count as enrollment data.
- **C1** escalation in the pilot is only an overdue flag; the assignee approving an email Action is what
  completes it, with no second approver.

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
- **Backend:** reads users, roles and study membership; writes sessions and team assignments.
  No AI. External: an email provider for magic links; an IdP only if a Sponsor asks for SSO. Simulated: everything.
- **Source:** `views/Sidebar.tsx`, `TEAM`, `DEF_ASG`, `who()` in `logic.ts`.

### A2. Study and site master data

- **v0:** Must · FE S · BE M. Sites and Site Contacts are synced read-only from the CTMS; the CTMS owns them.
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

- **v0:** Must · FE S · BE XL. Agentic connectors crystallized into ingestion pipelines (to prototype); EDC and CTMS first.
- **Frontend:** Connectors page lists connected systems (EDC, CTMS, eTMF, eIRB, Site payments, CRM,
  Reimbursements) with vendor, last sync, access mode ("Read" / "Read | write with your approval") and
  connect/disconnect. "Add a system" opens a catalog of ~14 categories × ~70 vendors; picking one opens a
  username/password modal. TopBar shows "Last scan 6:04 AM". Once real: only the connectors we actually build
  are listed; the rest become "request this connector"; sync status and errors are real.
- **Backend:** reads from each source system on a schedule (or ingests files/exports); writes raw and normalized
  records, sync runs, sync health. Stores credentials securely. No AI. External: whichever vendors the pilot
  sponsor uses (see "Vendor data access options for the pilot"). Simulated: `INTEGRATIONS`, `SYS_CATALOG`,
  `connectSys()` / `disconnectSys()` just flip a flag.
- **Source:** `views/ConnectorsView.tsx`, `views/ConnectSystemModal.tsx`, `views/TopBar.tsx`.

### A4. Prime AI service

- **v0:** Must · FE S · BE L. Prime is the existing `primary_teams` agent, grounded on our DB.
- **Frontend:** no screen of its own; powers Ask Prime, the Prime chat panel, New action drafting, revising an
  action with context, newsletter section rewrites and AI Studio. Each call has an offline fallback.
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
  including Prime's tool reads. No eTMF export.
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
  External: an email provider, and probably the sponsor's mail domain. Simulated: sending is a state change.
- **Source:** `approve()` in `logic.ts`; Actions and Engagements.

### A7. Retention and purge (new, from the compliance bar)

- **v0:** Must · FE S · BE S · M2.
- **Frontend:** a settings page where the Sponsor sets a retention period per data class (Site Messages and
  Site Responses, Subject records, Sponsor users and Site Contacts); no defaults.
- **Backend:** a scheduled purge job applying the Sponsor's periods; nothing is purged for a class with no period
  set; the audit trail records each purge. End-of-contract export and delete.

### A8. M2 compliance pack (new, from the compliance bar)

- **v0:** Must · no code · M2 gate. DPA template (processor, SCCs), subprocessor list with regions, filled standard
  security questionnaire (CAIQ-lite / SIG Lite), data-flow and architecture note. EU regions chosen by default
  where they cost nothing extra. SOC 2 / ISO 27001 and a pen test are deferred.

---

## B. Recruitment monitoring

### B1. Homepage

- **v0:** Must · FE M · BE S. Actions waiting, next Campaigns, enrollment by Study.
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

- **v0:** Must (lite) · FE M · BE M. Contacts, engagement timeline (Actions, Campaigns, Site Responses, Site Messages), enrollment vs plan, engagement score. EDC queries, invoices, documents, training: Won't.
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

- **v0:** Must · FE M · BE L. Measures enrollment per Site and proposes Actions.
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

- **v0:** Must · FE M · BE M. An Action is a task for one Sponsor-side person with a deadline; started by Prime or by a Site Message; overdue is only flagged; the assignee approving an email Action sends and completes it.
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

- **v0:** Must · FE L · BE L. The core. Newsletters bundle Reports, Requests (acknowledge, short form) and reminders per Site; a Campaign is a scheduled set of Actions on the calendar, bulk-approved with per-Site overrides.
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
- **Frontend:** a score per Site on the Sites list and Site page, trend over time, ranked with enrollment.
- **Backend:** computed from Site Responses, Site Messages and Action outcomes (formula still open).
  Writes score snapshots. No external system.

---

## D. Ask and automate

### D1. Ask Prime (task runner)

- **v0:** Must · FE M · BE M. Q&A over our data; no write tasks (see "Pilot form of the prototype's write-back flows").
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
- **Frontend:** "Add to Teams / Slack" in the sidebar; once added, "Prime in Teams & Slack". Nothing else is designed.
- **Backend:** a Slack app / Teams bot that relays questions to Prime and posts approvals or alerts.
  External: Slack and Microsoft Teams APIs. Simulated: a flag.
- **Source:** `views/Sidebar.tsx`, `logic.ts` ~line 2438.

### D5. External signals: competing trials

- **v0:** Could · FE S · BE M.
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
  Each needs a pilot form (store in our DB, email someone, or drop).
- **Inbound email.** Engagements, engagement performance and some actions read "site emails" and replies.
  That is a data source the connector list doesn't name. *v0: now C6, through the platform's inbound address.*
- **Hard-coded AI context.** Every prompt embeds DIA-2043 facts; grounding Prime in real data is a backend
  capability on its own (A4), and every AI feature depends on it.
- **Derived numbers.** Funnel top (referred, pre-screened), expected per-site pace, forecast completion and
  cost-of-delay are computed from fixed ratios or constants today; real values need source data or a model.
- **Agents share one pattern.** Enrollment, Budget and Regulatory agents all have instructions, triggers,
  data sources, memory, last/next run and proposals into Actions. A shared "agent" capability may be cheaper
  than three bespoke ones.
