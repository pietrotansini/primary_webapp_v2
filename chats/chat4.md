# Uncertainty toggle on Forecast tab

_Started 2026-07-10 22:47 UTC_

---

## User

Change: uncertainty toggle on the Forecast tab
Add a small two-state toggle in the Forecast chart header, next to the projected completion date: Point estimate (default) / With uncertainty. Style it like the existing Base / +2 sites / Rescue plan pill group.
When off: everything renders exactly as today.
When on:

Draw a shaded fan band around the projection line (same hue as the line at ~12% opacity, like the existing enrollment area fill). The band starts at zero width at the TODAY marker and widens toward the horizon — but its overall width scales with remaining enrollment, so a study at 53% enrolled shows a wide fan and a study at 90% shows a narrow one. Approximation is fine for the prototype: band half-width at the endpoint ≈ ±(weeks remaining × 0.15) weeks, mapped to the x-axis.
The headline completion date becomes a range: Feb 18 '27 stays big, with a sub-line likely window Jan 28 – Mar 20 '27.
Each scenario card in the simulator shows its date range instead of a single date (e.g. "Dec 22 '26 · Dec 8 – Jan 12"). The comparison point: the rescue plan's worst case still beats the base case's best case — make sure the numbers chosen preserve that.
Add one line to the AI READ box when the toggle is on, noting the band narrows as enrollment data accumulates.

Check: toggling must not shift the chart layout or axes; the band must taper to a point at TODAY; base-case band must be visibly wider than the rescue-plan band (more unresolved risk = more variance).

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: dc_js_str_replace]_

Now the template edits: pill toggle, band polygon, headline range sub-line, and scenario card date swaps.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added the toggle to the Forecast tab: pill group next to the projected-completion date, shaded fan band that tapers to zero at TODAY and scales with weeks remaining (base widest, rescue narrowest), range sub-line under the headline date, per-scenario date ranges on the simulator cards, and an extra AI READ line when uncertainty is on.

## User

move point estimate / with uncertainty below the chart because when clicking either the estimate completion date moves outside of the chart

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Moved the toggle to the legend row below the chart.

## User

in the scenario simulator, move the date ranges below the point date like in the main chart

## Assistant

_[tool: grep]_

_[tool: dc_js_str_replace]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Ranges now stack under each scenario's date, matching the main chart's layout.

## User

make sure the uncertainty area never go down, because the line is a cumulative metric

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed — the band's lower (worst-case) edge is now clamped monotonic, so it never ticks back toward a lower-enrollment value as it widens.

## User

Change: standardized benchmark treatment on every metric
Introduce one repeatable micro-pattern for all metric cards (Overview strip, Portfolio KPIs, CRO Control, Campaigns):

Benchmark sub-line, always visible. Under every big number, a small line in the existing gray mono style: vs 22% expected / vs ≤3.0 d SLA / vs plan: 112. Several cards already do this inconsistently ("Target ≤ 3 days", "/ 180") — unify the wording to vs {value} {label} everywhere.
Delta pill derives from the benchmark. The existing colored pill states the gap in benchmark terms (+19 pts over, −16 vs plan), never a bare trend. Color = position vs. benchmark, not vs. last week.
"i" icon, top-right of each card. 14px circle-i in the label row, #b6bcc0, no border. On hover/tap, a small tooltip card (white, 1px #eceded border, 8px radius, shadow like the Assign dropdown) showing benchmark provenance:

Source: Protocol assumption v3.2 / Feasibility model, Mar 2026 / MSA SLA, §4.2 / Sponsor-set, J. Bell
Set date + last reviewed date
A one-line definition of how the metric is computed


No benchmark = say so. If a metric has no agreed benchmark, the sub-line reads no benchmark set in amber, and the tooltip offers a "Set benchmark" affordance (non-functional button is fine for the prototype). This makes missing benchmarks a visible gap rather than silent.

Check: every numeric card on Overview, Portfolio, and CRO Control shows a vs … sub-line; tooltip opens on hover and on tap; at least one card demonstrates the no benchmark set state.

## Assistant

_[tool: update_todos]_

_[tool: read_file]_

_[tool: grep]_

Let me read Overview (470-650), Portfolio (123-184), CRO Control (920-997), Campaigns (997-1031) in full.

_[tool: read_file]_

_[tool: read_file]_

Now CRO Control and Campaigns metric sections.

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: dc_write]_

Now update the sd builder to add new benchmark fields for Overview cards.

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the return object to expose new fields, and add screenFail delta text/tone.

_[tool: str_replace_edit]_

Now add `planCompletionDate` and `forecastDeltaShort` to each of the 5 study calls.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the Overview metric strip template to use MetricCard.

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

Now let's check the preview to catch errors before moving to Portfolio/CRO/Campaigns.

_[tool: show_html]_

_[tool: get_webview_logs]_

Now Portfolio KPIs.

_[tool: str_replace_edit]_

Now CRO Control top strip.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now Campaigns cards.

_[tool: str_replace_edit]_

Now let's verify.

_[tool: ready_for_verification]_

_[tool: update_todos]_

Built a shared MetricCard component (label row + info icon + hover/tap tooltip + value + `vs {value} {label}` sub-line + derived delta pill) and applied it to all 16 metric cards across Overview, Portfolio, CRO Control, and Campaigns. Three cards (Overview/Site Activation, Portfolio/Flagged This Week, Campaigns/Active Referrals) demonstrate the "no benchmark set" state with a Set-benchmark tooltip CTA. Awaiting verifier check.

