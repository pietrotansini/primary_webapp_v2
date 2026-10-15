# Site-Specific Drill-In Tab

_Started 2026-07-10 23:16 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Recruitment Control Tower"
What `list_files` on the project root returns right now (dotfiles, if any, are not shown here):
📁 screenshots
📁 uploads
📄 MetricCard.dc.html
📄 Recruitment Control Tower (offline-src).dc.html
📄 Recruitment Control Tower (standalone).html
📄 Recruitment Control Tower.dc.html
📄 Recruitment Control Tower.html
📄 support.js
User is viewing file: Recruitment Control Tower.dc.html
Current date is now July 11, 2026
</system-info>

<default aesthetic_system_instructions>
The user has not attached a design system. If they have ALSO not attached references or art direction, and the project is empty, you must ASK the user what visual aesthetic they want. Use the questions_v2 tool to ask about preferred vibe, audience, colors, type, mood, etc. Do NOT just pick your own visual aesthetic without getting the user's aesthetic input -- this is how you get slop!

Once answered, use this guidance when creating designs:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic_system_instructions>

<pasted_text name="Pasted text (16 lines)">
Change: restructure Sites view into three layers
Layer 1 — Funnel histogram (new, top of page).
A full-width card above the table: one vertical bar per site (17 bars), sorted by the same AI risk score as the table so the two layers share an ordering. Each bar is a stacked column of the patient funnel: enrolled (teal #0e8f8f), consented not yet enrolled (light teal), screen-failed (red-tinted #d9483f at reduced opacity), against a hollow outline showing expected enrollment for that site — so a bar visibly under-filling its outline reads as behind plan without a legend. Height ~160px, site codes below in 9px mono, status dot above each bar. Hovering a bar shows a mini-tooltip with the counts; clicking a bar scrolls to and highlights that site's row in Layer 2 (reuse the existing flashHighlight animation). Keep the At risk / Watch / All filter pills — they now filter both the histogram and the table together.
Layer 2 — Comparison table (existing, trimmed).
Keep the current table but cut it down: the histogram now carries the visual scan, so the table's job is precise comparison. Columns: Site, Enrolled vs Expected (single column: 4 / 14 with the delta colored), Net contribution (new: this site's share of the total study gap, e.g. −10 · 63% of gap — computed from enrolled − expected over the study total), Last enrolled, Bottleneck, Status. Move AI Diagnosis and Recommended Action out of the table — they migrate to Layer 3, which removes the two widest columns and the horizontal scroll. Row click opens Layer 3.
Layer 3 — Site drill-in (new, slide-over panel).
Right-side slide-over, same construction as the existing Ask AI drawer (420–480px, overlay, close button). Contents top to bottom:

Header: site name, location, status pill, owner, last enrolled date.
Enrollment rate over time: small sparkline-style SVG (reuse the Forecast chart idioms), site actuals vs. site plan, ~120px tall.
Referral funnel state: three inline stat blocks — referral backlog (pending pre-screen), in screening, and a split of the addressed pool: exhausted vs. pending shown as a single horizontal stacked bar with counts (this is the "is there anything left to work with?" answer).
AI diagnosis + recommended action (moved from the table), with the existing Draft message button.
Footer link: "Open in Actions →" filtered to this site.

Data model: extend each site object in renderVals with consented, screenFailed, referralBacklog, poolExhausted, poolPending, and a 6-point rateHistory array. Keep numbers internally consistent: consented ≥ enrolled, and the four at-risk sites' funnels should visibly explain their bottleneck tags (e.g. Northwestern shows a large screen-failed segment; Charité shows a thin backlog — referral starvation, not conversion failure).
Check: clicking histogram bar → table row highlights; clicking row → drill-in opens; filter pills affect both upper layers; no horizontal scroll in the table at 1280px; Charité's drill-in shows a near-empty backlog while Northwestern's shows a healthy backlog with high screen-fail — the two failure modes must look different at a glance.
</pasted_text>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

Good, the Ask AI drawer pattern (420px right slide-over, fixed inset, overlay) is what I'll reuse. Let me see the full Ask AI drawer markup and the forecast SVG chart for sparkline reuse.

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

Now implementing all edits: state/refs/methods, data model, and templates.

_[tool: str_replace_edit]_

Now the site data model — replace the `mk` function and site list with the extended version.

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now update the return object to expose drill-in data and other new keys.

_[tool: str_replace_edit]_

Now define `drillSite` before the return statement, near the `shown` computation.

_[tool: str_replace_edit]_

_[tool: grep]_

Now replace the whole isSites block (lines 643-694) with the new three-layer markup.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now retry the template replacement for the Sites view.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now add the Actions site-filter chip.

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Restructured the Sites view into three layers: a 17-bar funnel histogram (click→scroll+highlight row), a trimmed 6-column comparison table (row click→drill-in), and a right-side site drill-in panel with sparkline, referral funnel stats, and AI diagnosis/action. Extended site data model with consented/screenFailed/backlog/pool/rateHistory fields, keeping Charité's thin backlog vs Northwestern's high screen-fail visually distinct.

## User

add a tab below to drill into site specifics.

Drill-in per site: last patient enrolled, rate over time, referral backlog, exhausted vs. pending

This tab should be filterable by the site

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now compute `siteDetail` + options after `drillSite` and expose in return.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a "Site Detail" tab below the table on the Sites page, with a dropdown to filter by any of the 17 sites — shows last patient enrolled, enrollment rate sparkline (actual vs. plan), referral backlog, in-screening count, and exhausted-vs-pending pool split.

