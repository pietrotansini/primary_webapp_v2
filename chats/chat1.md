# Recruitment Control Tower

_Started 2026-07-01 11:13 UTC_

---

## User

Design a clean, modern web app for biotech Clinical Operations teams called a **Recruitment Control Tower**.

The platform helps users monitor, evaluate, and improve patient recruitment across clinical trial sites. It unifies data from IRT/RTSM, EDC, CTMS, site activation systems, recruitment/referral tools, patient engagement platforms, eSource/eReg/eISF, and CRO reports into one simple operational interface.

The app should feel like an **AI-powered command center**, not a complex analytics dashboard. The main purpose is to help non-technical ClinOps users answer three questions quickly:

1. Are we on track with recruitment?
2. Which sites are underperforming, and why?
3. What actions should we take this week to recover enrollment?

The homepage should show a study-level overview with key recruitment metrics: target vs actual enrollment, forecasted enrollment completion date, activated vs recruiting sites, screening funnel, site risk scores, campaign efficiency, and CRO responsiveness.

The central component should be a prioritized **site performance table** with columns such as:

Site, Status, Actual Enrolled, Expected Enrolled, Funnel Bottleneck, AI Diagnosis, Recommended Action, Owner, Due Date.

Each site should have a detailed page showing recruitment funnel performance, enrollment velocity, screen failure patterns, referral quality, patient drop-off points, recent activity, and AI-generated interpretation.

Include a dedicated **Actions** tab where the AI generates prioritized corrective actions. Each action should include the reason, supporting evidence, expected impact, confidence level, owner, due date, and a one-click draft message to send to the CRO, site, or internal team.

The AI features should be embedded into the workflow, including:

* Daily recruitment brief
* Root-cause analysis for underperforming sites
* Enrollment forecast and scenario simulations
* CRO performance monitoring
* Site coaching recommendations
* Campaign optimization suggestions
* Meeting prep summaries before CRO or site calls

The design should emphasize exceptions and action, not data exploration. Users should immediately see what changed, what matters, which sites are at risk, and what needs to happen next.

Recommended navigation:

Overview
Sites
Actions
Forecast
Campaigns
CRO Control
Data Sources

Visual style should be minimal, professional, and trustworthy. Use a white background, strong typography, spacious layouts, subtle clinical colors, and clear risk indicators such as green, amber, and red. The interface should feel closer to Linear, Retool, or a modern operations platform than a traditional BI dashboard.

The MVP should focus on one study with three main panels:

Enrollment Forecast
At-Risk Sites
Recommended Actions

The product promise should be clear:

“Know which sites are slowing enrollment, why they are underperforming, and what action to take this week to recover patients.”

## Assistant

This is a meaty, well-specified product. Since you've got the Wireframe approach in play, I want to lock a few decisions before I start sketching — it'll keep the exploration pointed.

_[tool: questions_v2]_

## User

Questions answered:
- fidelity: Mid-fi — real layout & hierarchy, light color, placeholder data
- first_screens: Overview (study-level command center), Sites — the prioritized performance table, Actions tab, Forecast + scenario simulation, CRO Control
- layout_variations: 3 — a good spread
- ai_prominence: AI is a co-pilot — embedded diagnoses & actions inline, but data-first
- overview_focus: The three MVP panels: Forecast, At-Risk Sites, Recommended Actions
- nav_style: Left sidebar (Overview / Sites / Actions / Forecast / Campaigns / CRO / Data)
- table_density: Spacious rows, generous whitespace (Linear-like)
- risk_style: 1
- study_context: Diabetes, Phase 2, 17 sites, 180 target enrolled patients, USA and Europe
- persona: Head of Clinical Operations (portfolio view)

## Assistant

Locked. Building this as one cohesive, navigable mid-fi app (Head-of-ClinOps portfolio view, AI co-pilot, spacious Linear-style table, dot risk indicators). I'll start with the shell + Overview, then append Sites, Actions, Forecast, and CRO Control.

Design system I'm committing to: white/#f6f7f7 canvas, IBM Plex Sans + IBM Plex Mono (console/clinical trust, mono for all metrics), single clinical-teal accent (#0e8f8f), green/amber/red dot risk. No gradients, no left-accent-bar cards, no emoji.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: screenshot]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Overview looks strong. Now appending the remaining views — Sites, Actions, Forecast, CRO Control — replacing the `<!--VIEWS-->` marker each time.

_[tool: dc_html_str_replace]_

Now the sites data in the logic class:

_[tool: dc_js_str_replace]_

Now the Actions view — the full prioritized action list with evidence, impact, confidence, and draft-message flow:

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

Now the Forecast view with scenario simulation:

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now CRO Control — performance monitoring with an AI meeting-prep summary:

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: save_screenshot]_

Sites table is crushed at this viewport width — the site name truncates to "N..". I'll make it a horizontal-scroll ops table with proper min-width so columns keep their proportions.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: save_screenshot]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

This eval webview is stale. Let me force a reload and re-verify.

_[tool: show_html]_

_[tool: eval_js]_

Now it's applied (1120px rows, 220px name column). Fresh screenshot:

_[tool: save_screenshot]_

Clean now. Let me verify Actions, Forecast, and CRO views:

_[tool: save_screenshot]_

All five requested screens plus Campaigns and Data Sources render cleanly. Two small polish items: fix a duplicate legend label on Forecast, and add safe tweak props.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

The Recruitment Control Tower is built — one cohesive, navigable app with all seven nav destinations working.

_[tool: ready_for_verification]_

Delivered a working mid-fi **Recruitment Control Tower** for study DIA-2043 (Phase 2 T2D, 17 sites, 180-patient target).

**What's live and navigable:**
- **Overview** — behind-plan verdict, AI daily brief, metric strip, and the three MVP panels (Enrollment Forecast chart, At-Risk Sites, Recommended Actions).
- **Sites** — spacious risk-sorted table: Site, Enrolled/Expected, Bottleneck, AI Diagnosis, Recommended Action, Owner, Due (scrolls horizontally for full ops density).
- **Actions** — prioritized cards with Why / Evidence / Impact / Confidence / Owner / Due + one-click Draft message routed to CRO, Site, or Internal.
- **Forecast** — interactive scenario simulator (Base / Reallocation / Full rescue) that shifts the projected completion date and AI read.
- **CRO Control** — scorecards, SLA/query metrics, and an AI meeting-prep agenda. Plus working **Campaigns** and **Data Sources** so no nav dead-ends.

**System:** white/#f6f7f7 canvas, IBM Plex Sans + Mono (mono for all metrics), single clinical-teal accent, green/amber/red dot risk. AI shows up as a co-pilot inline, data-first. Two tweaks added: default landing view and default forecast scenario.

Next steps if you want them: a **site detail page** (funnel, velocity, screen-fail patterns, drop-off, activity) which the Sites rows can link into, and the **draft-message composer** modal. Want me to build either — or push any screen to hi-fi?

## User

add a button in data sources to connect a new source, which opens up a panel with list of all possible vendors and their logos. When clicking on the logos, it should open a login tab with username and password entries

## Assistant

I'll add a "Connect a source" button to Data Sources that opens a vendor-picker modal, and clicking a vendor opens a login panel. Let me wire the state and handlers first.

_[tool: read_file]_

Now update the Data Sources header with a connect button:

_[tool: dc_html_str_replace]_

Now the modal — appended before the root's closing `</div>`:

_[tool: dc_html_str_replace]_

Now the state, handlers, and vendor data in the logic class:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Likely a stale preview. Let me force reload and retry the full flow:

_[tool: show_html]_

_[tool: save_screenshot]_

All three states work: the "Connect a source" button, the vendor-picker grid with logo tiles, and the per-vendor login panel with username/password. Ship it.

_[tool: ready_for_verification]_

Added to **Data Sources**:
- A **Connect a source** button in the header.
- A vendor-picker modal with a searchable grid of 14 vendors (Medidata, Veeva, Oracle, IQVIA, Suvoda, Cenduit, Signant, Florence, Castor, Medable, Antidote, TrialSpark, Calyx, ObvioHealth) each with a branded logo tile and category.
- Clicking any vendor opens a **login panel** with username + password fields, an SSO option, and a Connect button, with a back-to-vendors link.

Note: the vendor tiles use clean representative logo marks (brand-colored initials), not the companies' exact trademarked logos — say the word if you'd like me to drop in real logo assets you provide.

## User

add last enrolled patient column, indicating "3 days ago" or similar, to the table of Sites

## Assistant

_[tool: str_replace_edit]_

Now add the data in the logic class:

_[tool: dc_js_str_replace]_

_[tool: save_screenshot]_

_[tool: eval_js]_

_[tool: show_html]_

_[tool: eval_js]_

The column is in place — header order is Site, Enrolled, Expected, **Last Enrolled**, Bottleneck… and the first row shows "12 days ago" (color-coded: red ≥10 days, amber ≥7, muted grey otherwise). The earlier screenshot was just a stale capture.

Added the **Last Enrolled** column to the Sites table, showing recency like "3 days ago" — stale sites (Charité 16 days, Northwestern 12) flag red, healthy sites (Atlanta 1 day) stay muted.

## User

add a window on the right side of the screen overlaying the tab when clicking on "Ask AI"

## Assistant

I'll add a right-side "Ask AI" slide-over panel. First wire the button and state:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

court

_[tool: save_screenshot]_

The Ask AI panel slides over from the right — grounded-data header, an AI greeting, suggested prompts, a sample grounded exchange with source chips, and a composer at the bottom. It overlays the current tab with a subtle scrim and closes via the X or by clicking the backdrop.

Added the right-side **Ask AI** slide-over. It works from the topbar button on any tab.

## User

enable answer in the chat with Ask AI

## Assistant

_[tool: read_skill_prompt]_

I'll make the chat functional using the built-in Claude helper. Let me read the current drawer body to replace it precisely.

_[tool: grep]_

_[tool: read_file]_

Now replace the static body with a dynamic message list, and wire the input:

_[tool: str_replace_edit]_

Now the chat logic — seeded messages, send handler calling `window.claude.complete`, and grounding system prompt:

_[tool: dc_js_str_replace]_

Now expose the chat values and handlers in `renderVals`:

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: sleep]_

_[tool: save_screenshot]_

The chat is live and answering — it pulled the real diagnosis (41% HbA1c screen-fail, lab timing, ~5 patients recoverable) grounded in the study data, with the user bubble and a proper AI response. Suggestions collapse once you send, a typing indicator shows while it thinks, and it auto-scrolls.

The **Ask AI** chat now answers for real. It's grounded in DIA-2043's live data (enrollment gap, at-risk sites, CRO metrics, forecast scenarios, recommended actions), so questions like "Why is Northwestern behind?", "What if we activate 2 backup sites?", or "Draft a board update" return specific, numbers-backed responses. Free-text input works with Enter-to-send, plus the four suggested starters. Note it's rate-limited (~15 messages/min) and answers scope to the prototype's study data.

## User

Save as standalone HTML: Recruitment Control Tower.dc.html

## Assistant

I'll prepare a standalone copy. One heads-up first: the **Ask AI chat answers via a hosted model, which won't work in a fully offline file** — the chat will show a graceful "couldn't reach the model" message, but everything else (all tabs, tables, forecast simulator, connect-source modal) works completely offline. I'll proceed with the export.

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

The bundled file renders identically with fonts inlined and no console errors. Delivering it.

_[tool: present_fs_item_for_download]_

Standalone file is ready — download it from the card above. It's a single 407 KB HTML file with fonts inlined; works fully offline.

One caveat: the **Ask AI chat** needs a hosted model, so in the offline file it'll show a "couldn't reach the model" message. Everything else — all tabs, the Sites table, forecast scenario simulator, connect-source modal — works with no internet.

## User

remove the metrics from the "Behind Plan" panel in the Overview tab, which are already showed in the metrics panels below

## Assistant

_[tool: str_replace_edit]_

_[tool: show_html]_

## Assistant

_[tool: save_screenshot]_

Done — removed the duplicated metric row from the "Behind Plan" panel. The verdict now reads as a clean headline + context, and those numbers live only in the metric strip below (and the AI brief remains full-height alongside it).

## User

Save as standalone HTML: Recruitment Control Tower.dc.html

## Assistant

I'll refresh the offline source with the latest changes and re-bundle. No JS-referenced assets to lift (fonts load via a link tag; logos are CSS/text), so I just need to re-copy and re-add the thumbnail.

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Clean bundle, no errors. Delivering.

_[tool: present_fs_item_for_download]_

Updated standalone file is ready above (406 KB, works offline). Same caveat as before: the Ask AI chat needs a hosted model, so it won't answer in the offline file — everything else works with no internet.

## User

enable filters of the Sites table based on the top right toggle "All", "At risk", "Watch"

## Assistant

_[tool: str_replace_edit]_

## User

revert the last change

## Assistant

_[tool: str_replace_edit]_

Reverted — the Sites toggle is back to its original static state (the incomplete filter change is undone). The file is back to its last working version. Let me know if you'd like me to properly implement the filters or the Bottleneck→Status rename as fresh changes.

## User

edit the column name in the Sites table from "Bottleneck" to "Status". The status should be 
- "On track" for all sites with "Enrolled" > 90% of "Expected", 
- "Watch" for all sites with "Enrolled" between 60% and 90% of "Expected", 
- "At risk" for all sites with "Enrolled" below 60% of "Expected"

## Assistant



## User

Enable filter of table in Sites tab based on "All" "At Risk" or "Watch"

## Assistant

Now I'll do it properly as fresh changes — rename the column to **Status**, compute status from the enrolled/expected ratio, and wire the filter toggle. First, the state flag:

_[tool: dc_js_str_replace]_

Now the status computation and the filter logic in `renderVals`:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now the template — toggle buttons, column header, status pill, and subtitle:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

Both changes work: the **Status** column now shows a computed dot+label (At risk / Watch / On track from the enrolled÷expected ratio — bottleneck moved into the site subtitle), and the **At risk** filter narrows the table to the 4 at-risk sites. "All" and "Watch" work the same way, with the active toggle highlighted.

Done:
- **Bottleneck → Status** column, driven by the ratio rule (>90% On track, 60–90% Watch, <60% At risk).
- **Filter toggle** (All / At risk / Watch) now filters the table live.

Note: your live app is updated. The standalone `Recruitment Control Tower.html` still reflects the earlier version — say the word and I'll re-export it.

## User

add the Bottleneck as a column rather than label below the name

## Assistant

_[tool: update_todos]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

## User

Save as standalone HTML: Recruitment Control Tower.dc.html

## Assistant

Re-exporting with the latest changes (Bottleneck column + Status column + filters).

_[tool: copy_files]_

## User

Save as standalone HTML: Recruitment Control Tower.dc.html

## Assistant

The offline-src copy already exists with the current content. I just need to re-add the thumbnail template (it doesn't persist across copies) and re-bundle.

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: present_fs_item_for_download]_

Updated standalone file is ready above — includes the Bottleneck column, Status column, and filters. Same offline caveat: Ask AI needs a live connection to answer.

