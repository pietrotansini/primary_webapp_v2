# Scenarios: Recruitment Control Tower

The Scenarios the product should meet, used to decide which features the MVP builds first. Charted on the
wayfinder map [Wayfinder: Recruitment Control Tower MVP backlog](https://github.com/pietrotansini/primary_webapp_v2/issues/2)
in "Catalogue the Scenarios from the demos". The ranked, sortable view is the
[Control Tower MVP Backlog](https://claude.ai/artifact/72GRvezZz11h4AF5hBQ4vH) page; this file is the source it
mirrors. Terms follow `GLOSSARY.md`.

**Status: v0 (provisional), ranked.** Value, Size and Data availability are first drafts; "Pick the pilot's first
Scenarios" ([#18](https://github.com/pietrotansini/primary_webapp_v2/issues/18)) ranked the rows and kept them as they
are. The rank and the pilot cut line are set on the page; once reviewed, they are exported from it ("Export rank")
and committed as `docs/scenario-rank.md`, which "Import rank" loads back.

## Where they come from

- The web prototype's hard-coded examples in `components/control-tower/logic.ts`: proactive proposals (`ITEMS`,
  `ENG_INS`), Ask Prime runs (`PRIME`, `PRIME_MORE`, `ARCHIVE_SEED`), suggested chat tasks (`PAGE_CHAT`,
  `ENG_CHAT`, `siteChat`).
- The journeys in the first version of the page's ranking list (Site replies, rejection with a reason, Campaign
  performance and so on).
- The TMF demo in the sibling `primary_teams` repo (`data/demo/README.md`, `config/scripts/`).

## Rules for a row

- **One row per Scenario.** A shared ID and title prefix only groups rows (EN4.1 to EN4.8 are all "Diagnose a
  lagging Site"); the group is not a Scenario itself.
- **Split when the data or the analysis differs**, because each split is a separate thing to build and train,
  usually on different data sources.
- **A cause class, not a demo instance:** the demo's Site is kept only as the example.
- **Won't and Out rows stay** in the list, so it maps everything that is needed later.
- **Prerequisites are not Scenarios.** Sign-in, connecting EDC/CTMS, approving and sending, and going live on real
  data are backlog features (A1, A3, C1/A6, A7/A8), pulled in by the Scenarios that need them.

## Columns

| Column | Values |
|---|---|
| **Status** | `In` (in scope to rank), `Won't` (MVP decision: Budget, Regulatory, write-back), `Out` (beyond this product: TMF) |
| **Trigger** | `Ask` (a user asks Prime), `Agent` (an Agent raises it unprompted), `Both`, `UI` (a user does it in the app), `Site` (a Site's mail or click starts it) |
| **Data** | Source systems and records read |
| **Avail.** | For a pilot, per "Vendor data access options for the pilot": `API/File` (EDC, CTMS: vendor API or the Sponsor's exports), `File` (per-study transfer: referral tool, eConsent, RTSM, eCOA, payments, CRO reports), `Ours` (our DB: mail, Actions, runs, audit), `Public` (public web or API), `Docs` (Study documents) |
| **Analysis** | `lookup`, `metric`, `rule`, `benchmark` (vs. study median or peers), `trend`, `forecast`, `attribution`, `LLM` (diagnose, classify, summarize, draft) |
| **Tech** | `Q&A` (Prime with read tools), `Agent run` (rules then Agent, after sync or on events), `send`, `schedule`, `inbound`, `report`, `export`, `write-back` (excluded from the pilot) |
| **Features** | Backlog IDs in `docs/mvp-backlog.md` |
| **Value** | Pilot value: H, M, L (provisional) |
| **Size** | Work specific to this Scenario once the features it needs exist: S, M, L, XL (provisional) |
| **Demo** | Where the prototype shows it |

## EN: Enrollment

| ID | Scenario | Status | Trigger | Data | Avail. | Analysis | Tech | Features | Value | Size | Demo |
|---|---|---|---|---|---|---|---|---|---|---|---|
| EN0 | Enrollment by Site report | In | Ask | CTMS, EDC randomizations | API/File | metric | Q&A, report | B2, D1 | M | S | `ARCHIVE_SEED` h4 |
| EN1 | Why a Study is behind plan, by Site and funnel stage | In | Ask | CTMS plan, EDC, referral log | API/File, File | metric, benchmark | Q&A | B2, B5, B9, D1 | H | M | `PAGE_CHAT` studies.why |
| EN2.1 | Sites at risk against plan, across Studies (can be saved as a weekly check) | In | Both | CTMS plan, EDC | API/File | metric, rule | Agent run, Q&A | B2, B4, A9 | H | S | `PAGE_CHAT` prime.atrisk |
| EN2.2 | Rank Sites by enrollment gap in each Study | In | Ask | CTMS plan, EDC | API/File | metric | Q&A | B2, D1 | M | S | `PAGE_CHAT` sites.rank |
| EN2.3 | Compare each Site with the study median: referral, screening, consent conversion | In | Ask | EDC, referral log, eConsent | API/File, File | benchmark | Q&A | B5, B6, B9 | M | M | `PAGE_CHAT` sites.median |
| EN3 | Recruitment blockers at one Site: where candidates drop out between referral and randomization, and why | In | Ask | EDC screening log, referral log, Site Messages | API/File, File, Ours | metric, benchmark, LLM | Q&A | B5, B9, C6, D1 | H | M | `siteChat` blockers |
| EN4.1 | Diagnose a lagging Site: screen fails on a lab inclusion criterion | In | Agent | EDC screen-fail reasons and lab result dates, Site Messages | API/File, Ours | rule, LLM | Agent run | B4, A9 | H | M | `ITEMS` nwu, nwu-lab; `ENG_INS` nwu |
| EN4.2 | Diagnose a lagging Site: staff turnover cut referrals (escalate to the CRO) | In | Agent | CTMS Site staff, referral log | API/File, File | trend, LLM | Agent run, send | B4, B5, A9 | M | M | `ITEMS` charite |
| EN4.3 | Diagnose a lagging Site: activated, no first patient | In | Agent | CTMS activation date, EDC | API/File | rule, benchmark | Agent run | B4, B9, A9 | H | S | `ITEMS` houston; `ENG_INS` hou |
| EN4.4 | Diagnose a lagging Site: candidates drop at consent | In | Agent | eConsent, EDC, participant feedback | File | rule, LLM | Agent run | B4, B6 | M | M | `ITEMS` barcelona; `ENG_INS` bcn |
| EN4.5 | Diagnose a lagging Site: few referrals reach screening | In | Agent | referral log, EDC | File, API/File | benchmark | Agent run | B4, B5, B9 | M | M | `ENG_INS` phx |
| EN4.6 | Diagnose a lagging Site: few referred candidates are eligible | In | Agent | referral pre-screen answers, EDC | File, API/File | benchmark | Agent run | B4, B5, B9 | M | M | `ENG_INS` mil |
| EN4.7 | Diagnose a lagging Site: early withdrawals | In | Agent | EDC discontinuations | API/File | rule | Agent run | B4 | M | S | `ENG_INS` lyo |
| EN4.8 | Diagnose a lagging Site: stopped screening for N weeks | In | Agent | EDC screening dates | API/File | rule | Agent run | B4 | H | S | `ENG_INS` cha |
| EN5 | Sites that can take more patients | In | Ask | CTMS plan, EDC, screening capacity from Site Responses | API/File, Ours | metric | Q&A | B2, B9, C6 | M | S | `PAGE_CHAT` studies.capacity |
| EN6 | Competing trials near a Site, with talking points for the PIs | In | Agent | ClinicalTrials.gov, referral log | Public, File | rule, LLM | Agent run, send | D5 | L | M | `ITEMS` nash; `BS_COMP` |
| EN7.1 | Shift paid-referral budget between Sites | Won't | Agent | campaign tool spend, EDC | File | metric | write-back | | | | `ITEMS` budget |
| EN7.2 | Tighten the pre-screen questions on a referral form | Won't | Agent | referral form, EDC | File | benchmark | write-back | | | | `ITEMS` campaign |
| EN8 | Draft a recovery plan for at-risk Sites | In | Ask | stored diagnoses | Ours | LLM | Q&A, Action drafts | B4, C1, D1 | M | S | `PAGE_CHAT` sites.plan |
| EN9 | Did an Action work? Compare the metric before and after | In | Agent | metric snapshots, Actions | Ours | trend | Agent run, schedule | B7, A9 | H | M | follow-ups on every `ITEMS` entry |
| EN10 | Forecast last-patient-in and the cost of delay | In | Both | CTMS plan, EDC, CRO cost lines | API/File, File | forecast | report | B11 | M | L | `STUDIES`, `costOf` |

## EG: Engagement

| ID | Scenario | Status | Trigger | Data | Avail. | Analysis | Tech | Features | Value | Size | Demo |
|---|---|---|---|---|---|---|---|---|---|---|---|
| EG1 | Re-engage quiet Sites | In | Both | Site Messages, Site Responses, EDC | Ours, API/File | metric, rule | Agent run, send | C7, C1, A6 | H | S | `ENG_CHAT` quiet |
| EG2 | Thank the top-recruiting Sites and share what works | In | Both | EDC randomizations, CTMS plan | API/File | rule | Agent run, send | B2, C4, A6 | M | S | `ENG_CHAT` thanks; `ENG_INS` atl, grp |
| EG3 | Protocol reminder with a deadline, such as re-consent to a new version | In | Both | eConsent, CTMS protocol versions | File, API/File | lookup | send, schedule | B6, C4, A6 | M | M | `ENG_CHAT` reconsent; `PRIME_MORE` |
| EG4 | Repeated Site questions turned into a clarification or FAQ | In | Agent | Site Messages, approved guidance (SRM, protocol) | Ours, Docs | LLM | Agent run (Triage), send | C6, A10 | H | M | `ENG_INS` q1, q2, q3 |
| EG5 | Brief for the next Site meeting | In | Ask | CTMS issues and visits, EDC, Site Messages, Actions | API/File, Ours | LLM | Q&A | B3, D1 | H | S | `siteChat` brief; `makeBriefs` |
| EG6 | Turn a Site's open issues into CRA follow-up Actions | In | Ask | CTMS issue log, last visit report | API/File | LLM | Q&A, Action drafts | C1, D1 | M | S | `siteChat` cra |
| EG7 | Draft a one-off communication to a Site | In | Ask | Site findings, protocol | Ours, Docs | LLM | Action draft, send | C1, A6, A10 | M | S | `siteChat` comm |
| EG8 | Plan the monthly Newsletter Campaign with per-Site Reports | In | Ask | EDC, CTMS, Site Responses | API/File, Ours | metric, LLM | Agent run (Newsletter), schedule | C4 | H | L | `ENG_CAMPS`, `ENG_BLOCKS` |
| EG9 | Bulk-approve a Campaign, preview it as a Site | In | UI | Campaign drafts | Ours | none | send, schedule | C4, A6 | H | M | Campaign calendar |
| EG10 | A Site acknowledges a Request or answers its form | In | Site | Request clicks and forms | Ours | lookup | inbound | C6 | H | M | Campaign performance |
| EG11 | A Site replies by email: classified, asks become Actions | In | Site | inbound Site Messages | Ours | LLM | inbound, Agent run (Triage) | C6, A6 | H | M | `ENG_READ` site emails |
| EG12 | Campaign performance | In | UI | sends, Site Responses, EDC | Ours, API/File | metric | report | C5 | M | M | `ENG_PERF` |
| EG13 | Which Campaigns led to new randomizations | In | Ask | sends, EDC randomizations | Ours, API/File | attribution | Q&A | C8 | M | L | `PAGE_CHAT` sites.drove |
| EG14 | Automate weekly Site check-ins | In | Ask | Agent instructions | Ours | LLM | schedule | D3 | L | M | `PAGE_CHAT` studio.auto |

## OP: Oversight

| ID | Scenario | Status | Trigger | Data | Avail. | Analysis | Tech | Features | Value | Size | Demo |
|---|---|---|---|---|---|---|---|---|---|---|---|
| OP1 | What needs my attention today | In | Both | Actions, Agent runs, Campaigns | Ours | lookup | Q&A, report | B1, D1 | H | S | `PAGE_CHAT` prime.today |
| OP2 | Weekly update for study leadership | In | Ask | Audit Trail, CTMS, EDC | Ours, API/File | LLM | Q&A, schedule, send | C9 | M | M | `PAGE_CHAT` prime.weekly |
| OP3.1 | Rank open Actions by priority and impact | In | Ask | Actions | Ours | lookup | Q&A | C1 | L | S | `PAGE_CHAT` inbox.triage |
| OP3.2 | Assign owners to unowned Actions | In | Ask | Actions, Study team | Ours | LLM | Q&A | C1, A1 | L | S | `PAGE_CHAT` inbox.owners |
| OP3.3 | Reassign and chase overdue Actions | In | UI | Actions | Ours | rule | report | C1 | M | S | page journey s14 |
| OP3.4 | Reject a proposal with a reason, so the Agent learns | In | UI | Actions, Agent memory | Ours | none | Agent run | A9, C1 | H | S | page journey s5 |
| OP4 | Sites that need a monitoring visit this month | In | Ask | CTMS visits, EDC queries, enrollment | API/File | rule | Q&A | B8 | M | M | `PAGE_CHAT` sites.visits |
| OP5.1 | Data queries open for more than 30 days, by Site | In | Ask | EDC queries | API/File | metric | Q&A | B8 | M | S | `ARCHIVE_SEED` h3; `PRIME_MORE` |
| OP5.2 | EDC data-entry lag against visits | In | Ask | EDC visit and CRF timestamps | API/File | metric | Q&A | B8 | L | M | `PRIME` edc |
| OP5.3 | Overdue monitoring visit reports | In | Ask | CTMS visit and report dates | API/File | rule | Q&A | B8 | L | S | `PRIME_MORE` |
| OP6 | What changed in CTMS since the last sync | In | Ask | CTMS snapshots | Ours | lookup | Q&A | A3, A2 | L | S | `PRIME` ctms |
| OP7 | Upcoming visit load against Site resources (devices, coordinator hours) | In | Agent | EDC next visit dates, Site Messages | API/File, Ours | rule | Agent run | B10 | L | M | `ITEMS` nwu-tab; Site page upcoming visits |
| OP8 | Tune an Agent: instructions, runs, memory | In | UI | Agent config and runs | Ours | none | none | A9 | M | M | Agent pages |
| OP9.1 | What Prime did this week | In | Ask | Audit Trail, Agent runs | Ours | LLM | Q&A | A5, A9, D1 | M | S | `PAGE_CHAT` activity.week |
| OP9.2 | Export approvals for an inspection | In | UI | Audit Trail | Ours | none | export | A5 | M | S | `PAGE_CHAT` activity.inspect |
| OP9.3 | Which connections need attention | In | Both | sync runs | Ours | rule | report | A3 | M | S | `PAGE_CHAT` systems.health |
| OP10 | Keep Site Contacts current from the delegation log | Won't | Agent | eTMF delegation log, CTMS contacts | Docs, API/File | LLM | write-back | | | | `ITEMS` nwu-ctms |

## BU: Budget (Won't)

| ID | Scenario | Status | Trigger | Data | Avail. | Analysis | Tech | Features | Value | Size | Demo |
|---|---|---|---|---|---|---|---|---|---|---|---|
| BU1 | Release verified invoices to Sites unpaid for 90+ days | Won't | Agent | invoices, Site contracts, EDC visits | File, API/File | rule | write-back | C2 | | | `ITEMS` inv-pay |
| BU2 | Ask a Site to re-bill visits that don't match the contract | Won't | Agent | invoices, contract rates, EDC visit durations | File, Docs, API/File | rule, LLM | send | C2 | | | `ITEMS` inv-hop |
| BU3 | Hold lab lines until their results are in the EDC | Won't | Agent | invoices, EDC lab results | File, API/File | rule | write-back | C2 | | | `ITEMS` inv-lab |
| BU4 | Reject a duplicate invoice | Won't | Agent | invoices | File | rule | write-back | C2 | | | `ITEMS` inv-dup |
| BU5 | Escalate months of unpaid Site invoices to Finance | Won't | Agent | payment runs, CTMS | File | rule | send | C2 | | | `ITEMS` rapay |
| BU6 | Reconcile a CRO invoice against its purchase order | Won't | Ask | CRO invoice, PO, CTMS visits | File, Docs | rule, LLM | Q&A | C2 | | | `PRIME` invoice |
| BU7 | Tell Sites when they will be paid | Won't | Ask | invoices, payment runs | File | lookup | send | C2 | | | `PAGE_CHAT` budget.paystatus |
| BU8 | Find invoice lines that don't match the contract or the EDC | Won't | Ask | invoices, contracts, EDC | File, Docs, API/File | rule | Q&A | C2 | | | `PAGE_CHAT` budget.mismatch |

## RG: Regulatory (Won't)

| ID | Scenario | Status | Trigger | Data | Avail. | Analysis | Tech | Features | Value | Size | Demo |
|---|---|---|---|---|---|---|---|---|---|---|---|
| RG1 | Summarize new regulator and IRB guidance that affects my Studies | Won't | Both | regulator and IRB websites | Public | LLM | Agent run | C3 | | | `PAGE_CHAT` reg.impact; `REG_ALERTS` |
| RG2 | IRB approvals expiring in the next 60 days | Won't | Ask | eIRB, CTMS | File, API/File | rule | Q&A | C3 | | | `PAGE_CHAT` reg.irb; `PRIME_MORE` |
| RG3 | Investigational product expiring at Site depots | Won't | Ask | RTSM/IRT, CTMS | File | rule | Q&A | | | | `PRIME_MORE` |

## TM: TMF (Out, built in `primary_teams`)

| ID | Scenario | Status | Trigger | Data | Avail. | Analysis | Tech | Features | Value | Size | Demo |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TM1 | Set up a Study's filing plan from its first Upload | Out | Ask | Upload, TMF Reference Model | Docs | LLM | write-back | | | | `primary_teams` S1 Setup |
| TM2 | Ingest a Sponsor's own TMF folder tree | Out | Ask | SharePoint TMF | Docs | LLM | write-back | | | | `primary_teams` S2 Ingest |
| TM3 | File a document that needs a new folder | Out | Ask | Upload, filing plan | Docs | LLM | write-back | | | | `primary_teams` S3 |
| TM4 | File an Upload that has no Study code | Out | Ask | Upload | Docs | LLM | write-back | | | | `primary_teams` S4 |
| TM5 | Correct a misfiled document | Out | Ask | filed document | Docs | LLM | write-back | | | | `primary_teams` S5 Change |
| TM6 | QC filed documents and track TMF Completeness | Out | UI | eTMF | Docs | rule | write-back | | | | `primary_teams` QC tab |
| TM7 | Where a Study's documents are, such as its monitoring visits | Out | Ask | eTMF, SharePoint TMF | Docs | lookup | Q&A | | | | `primary_teams` `visits` Script |
| TM8 | Answer from a filed document with citations, such as a protocol's eligibility criteria | Out | Ask | filed documents | Docs | LLM | Q&A | | | | `primary_teams` `protocol` Script |
| TM9 | File an IRB approval to the eTMF after a GCP completeness check | Out | Ask | eIRB, eTMF | Docs | rule, LLM | write-back | | | | `PRIME` irb |

## Notes on rows

- **EN4.1** needs lab result dates against the screening window. Those are outside the pseudonymized Subject fields
  set in `docs/adr/0001-store-pseudonymized-subject-records.md` (status dates and a screen-fail reason category
  only), so supporting it as shown means widening that list or diagnosing from reason counts alone.
- **EN10** waits on the "Enrollment forecasting" fog on the map; the demo's forecast and cost of delay are fixed numbers.
- **OP3.1** cannot rank by days saved or cost impact: "How Prime generates insights" dropped those fields. Ranking is
  by priority and expected impact text.
- **EG4, EG7** need Study documents (protocol, Site reference manual) as a source Prime can read: candidate A10.
- Rows with `write-back` in Tech conflict with the pilot's no-write-back rule. They are Won't or Out, unless
  "Pilot form of the prototype's write-back flows" turns them into a drafted email.
