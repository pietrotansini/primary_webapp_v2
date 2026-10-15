# Enrollment Forecast navigation link

_Started 2026-07-10 23:09 UTC_

---

## User

add an "Open Forcasts →" to the Enrollment Forecast chart that opens the Forecast tab similar to the "Open Actions →" button

## Assistant

_[tool: grep]_

_[tool: read_file]_

Adding the button next to the legend/footer line of that chart.

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added an "Open Forecast →" button to the Enrollment Forecast chart's footer row, wired to the same `go.forecast` handler as the sidebar link.

## User

it should be on the top right

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Moved to the top-right of the chart header, next to the scenario tags.

