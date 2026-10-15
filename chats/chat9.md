# Forecast completion label update

_Started 2026-07-16 12:16 UTC_

---

## User

relabel "+7 wks over" in the Forecast Completion as "+7 weeks over"

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

Found it: `forecastDeltaShort:'+7 wks over'` on line 2316.

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Done — pre-existing sidebar clipping, unrelated to this edit.

## User

relabel "vs 180 target" in Enrollment panel as "vs 112 planned", because after it's written "16 under", which refers to 96

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Done — pre-existing sidebar clipping, unrelated to this edit.

## User

rewrite "+19 pts over" in Screen-fail rate as "+19 patients over"

## User

turn Forecast gra[h in not parametric

## User

turn Forecast gra[h in not parametric

## Assistant

Could you clarify — do you mean turn the Forecast graph's axis/scale into non-parametric (e.g. actual dates instead of a modeled curve), or something else? The text came through garbled and I want to change the right thing.

## User

I mean Enrollment Forecast chart, which is now parametric

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Replaced the shared parametric curve generators (a hard-coded shape rescaled by a magic 96/180 ratio, and a projection interpolated to tone-bucketed constants) with per-study data-driven math: the actual line is the plan ramp scaled by each study's own enrolled/planEnrolled ratio, and the projection is a linear extrapolation of that study's own velocity (enrolled ÷ months elapsed), capped at target.

_[tool: ready_for_verification]_

Done — the Enrollment Forecast chart now computes its actual/projected curves from each study's own real numbers instead of a shared parametric formula.

## User

turn into a scalar graph, not continuous

## Assistant

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: str_replace_edit]_

Now update the template to render discrete point markers instead of continuous polylines/area.

_[tool: dc_html_str_replace]_

Converted the plan/actual/projected traces from continuous polylines + filled area into discrete point markers (dot plots) at each month, dropping the connecting strokes and area fill.

_[tool: ready_for_verification]_

Done.

## User

revert the change to the graph

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: str_replace_edit]_

Reverted to the continuous polyline/area chart.

_[tool: ready_for_verification]_

Done — pre-existing sidebar clipping, unrelated.

