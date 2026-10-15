# Budget agent design

_Started 2026-10-12 12:19 UTC_

---

## User

Continuing from "NASH-3301 enrollment anomaly".

## Assistant

We've been building a **clinical trial recruitment dashboard** (Recruitment Control Tower) that tracks enrolment across multiple studies, surfaces risks, and proposes actions to accelerate recruitment. The work has evolved from styling and data management to adding AI-powered features.

**Key decisions made:**
- Switched to the SpaceXAI colour palette (Deep Water Blue `#004677` for accents, cool greys, with darker tones for readability). Kept v3 as the primary version.
- Standardized formatting: replaced bullet dots (·) with pipes (|) throughout; action impact values (days and saving) now sit in separate light-green boxes on cards.
- Added a Daily Brief from Prime summarizing key insights and recommended actions, with expected cost savings calculated from phase-specific daily rates ($7,829 Phase I, $23,737 Phase II, $55,716 Phase III).
- Built a "+ New action" overlay that lets users describe actions in plain words; Prime asks clarifying questions if needed, then drafts the full action with impact and confidence level chosen by the user.
- Created AI Studio (Beta) tab to turn email drafts into short videos (15, 30 or 60 sec) or slides (1, 3 or 5 slides) for attachment to emails. The tab now has email draft at top (collapsible via "Show email ▾" button), format/audience/length controls on the left, and the generated preview on the right.

**Current state:**
All work is in `Recruitment Control Tower v3.dc.html`. The dashboard loads without errors. AI Studio's layout is: email picker and Show/Hide toggle at top; left column for format, audience (drop-down), length, notes and Generate button; right side shows video player or slides preview. Offline versions exist but lack AI features.

**Next steps:**
Generate or test the AI Studio outputs; refine the video storyboard and slide layouts if needed.

**Project files:**
- Recruitment Control Tower v3.dc.html (primary)
- Recruitment Control Tower v4.dc.html (dark version, not updated recently)
- Primary - Recruitment Control Tower v3.html (offline standalone)
- Swiss Hash Logo.dc.html (logo explorations, paused)

## User

add a Budget agent, similar simple structure of Enrollment tab, use cases should be:
- Brief on invoice reconciliation: eg doctor visit billed for 1h when contract says 30min, and billed for Lab tests that are not uploaded in the systems yet
- Below summary of invoices status per site
There is one situation that links to the enrollment: if invoices are not approved and cleared timely, and sites are not paid within 3 months, the enrollment may stop.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: ready_for_verification]_

_[tool: snip]_

I've added a **Budget** tab to the sidebar, just below Enrollment. Like Enrollment, it has two views: Invoices and Agent. The verifier is still checking it.

**Invoices view**
- **Invoice Reconciliation Brief:** Prime checked 214 invoice lines against site contracts and the EDC. 18 lines don't match, and $8,990 is on hold. It lists four problems:
  - Hopkins billed 4 visits at 1 hour each when the contract says 30 minutes ($1,240).
  - Leeds billed 6 lab tests with no results in the EDC yet ($2,880).
  - Charité Diabetes sent the same invoice twice ($4,300).
  - Phoenix billed 3 lab tests with no results yet ($570).
- **Recommended actions:** four proposals that open in Actions:
  - Release $96.4k to the 3 overdue sites.
  - Ask Hopkins to re-bill the 4 visits.
  - Hold the 6 Leeds lab lines.
  - Reject the duplicate Charité invoice.
- **Link to enrolment:** a red strip warns that 3 RA-2209 sites have waited 92–104 days for $96.4k, and Leeds screening is already down 30%. When you approve the release, the strip turns green and those sites show "Payment released."
- **Invoice status by site:** totals for paid, awaiting approval, unpaid 90+ days and on hold, with a bar showing the split. Below that are 13 site rows you can filter to All, Unpaid 90+ or Discrepancies. Expanding a row shows its invoices, enrolment at that site, the agent's notes and any related proposals, plus a link to the site in Enrollment.

**Agent view:** set up the same way as the Enrollment agent, with instructions you can edit, scope, six triggers you can switch on or off, permissions and what it has learned.

**Other changes**
- I added a "Site payments" system (SAP Ariba) to Connect systems.
- Proposals with no time saving (Hopkins, Leeds, Charité) now show the money amount instead of "−0 days."
- The existing RA-2209 "escalate unpaid invoices to Finance" action overlaps with the new payment release. If you approve both, the RA-2209 completion date moves earlier twice for the same problem. I can merge them or remove the Finance one.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I fixed the two layout problems the check found in the Budget tab, plus one number that didn't fit the story. It's being re-checked now.

- **Site table:** it now fits the narrow preview width. Before, the right edge was cut off, hiding the arrow and sometimes the status label.
- **Discrepancy list:** each site name and study now sits on its own line under the tag and amount, so names aren't cut short.
- **Leeds enrolment:** the expanded row showed 50 of 44 expected and "On track", which contradicted the warning that Leeds screening is down 30%. It now shows 29 of 44 and "Watch" in the expanded row.

The Enrollment tab still shows the old Leeds figure, because I only changed it in Budget.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Leeds now shows the same figures in the Budget tab and in Enrollment → Sites: 29 of 44 enrolled, status "Watch", and screening named as the problem. This fix is being checked again.

- **Leeds:** its site note in Enrollment now mentions the 104 days of unpaid invoices and the 30% drop in screening since August.
- **RA-2209 total:** I moved the 21 enrolments taken from Leeds onto another RA-2209 site, so the study still adds up to 300.
- **Hopkins and Charité Rheuma:** both still enrol at plan, but their notes in Enrollment now warn about invoices unpaid for 90+ days. They no longer say "On plan, healthy funnel".
- **Brief header:** "from Prime | Today, 6:00 AM" now stays on one line.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I fixed the two RA-2209 site numbers that didn't match each other; the check is running again.

- **Leeds' lost enrolments:** the 21 enrolments taken off Leeds no longer all land on UCSF. They're now shared across the other RA-2209 sites, about +3 each, based on each site's plan. UCSF no longer shows 67 of 41.
- **Charité Rheuma note:** it no longer says "enrolling at plan". It now reads "Invoices unpaid for 92 days. Screening may slow if payment slips further", which fits whatever status the site shows.

## User

the font and style of budget tab is less clear than the one of enrollment

also, allow the upload of a new invoice

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: ready_for_verification]_

I restyled the Budget tab to match Enrollment and added invoice upload. A check of the page is still running, and I haven't looked at it myself yet.

**Matching Enrollment's style**
- **Brief:** findings now look like Enrollment's key insights: a dot, the site name in bold, one plain sentence, and the amount on hold.
- **Totals:** shown as four small number cards, like the study KPI cards. I removed the stacked colour bar.
- **Sites:** each site is now its own card instead of a row in a dense table. Each card shows:
  - the name, study and location
  - how much is awaiting approval or on hold
  - how long the oldest invoice has been unpaid, with a bar marked at the 90-day limit
  - a status, or an "N to review" button when the site has proposals waiting.

**Uploading an invoice**
- **Opening it:** "+ Upload invoice" sits next to the filters. Drop a PDF, Excel, CSV or scanned file, or try the Hamburg sample.
- **Site:** you pick the site from a list, or Prime takes it from the invoice number in the file name.
- **Checking:** Prime shows three steps (reading the invoice, checking it against the contract, checking the EDC), then lists every line as matching or not.
- **Adding it:** "Add to [site] invoices" puts the invoice on that site's card with a "New invoice" tag and opens the card. It also adds a finding to the brief and an entry to Activity.

The upload doesn't actually read the file. Every invoice comes back with the same five sample lines: two don't match and $945 is put on hold, whatever file you choose. Reading real invoice files would need a document-reading service connected.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I fixed the two layout problems the check found on the Budget site cards, and the page is being checked again.

- **Site names:** names now wrap onto a second line instead of being cut off. The name column is also wider. The "New invoice" tag sits next to the study and location instead of squeezing the name.
- **Bars line up:** the status/button column is now the same width on every card, so the bars and the 90-day marker sit in the same place on each row and can be compared at a glance.

