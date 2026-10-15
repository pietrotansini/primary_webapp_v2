# Read full brief tab

_Started 2026-07-16 12:36 UTC_

---

## User

add a tab with a little longer brief when clicking on "Read full brief" in the Overview tab

## Assistant

_[tool: grep]_

## User

add an interactions that shows a little longer brief when clicking on "Read full brief" in the Overview tab

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now add the modal markup and logic.

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now expose these in renderVals.

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Added a "full brief" modal — clicking "Read full brief →" opens an overlay with the intro, extended summary, all key signals, and top actions; closes via × or backdrop click.

## User

add a split between Lag due to site activation vs site performance under the Enrollment is 16 patients behind plan

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

Now add the split bar markup after headlineSub, sc-if gated so it only shows when the study is behind plan (has a lag split).

_[tool: str_replace_edit]_

Now add the data fields per study and computed percentages in the JS.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add lagActivation/lagPerformance values to each study's buildSd call (behind-plan studies get numbers, on-track/ahead ones omitted).

_[tool: str_replace_edit]_

Rendered — behind-plan studies (DIA-2043, NASH-3301, CARD-0552) now show a "Why we're behind" split bar between activation vs. performance lag under the headline; on-track/ahead studies show nothing there.

_[tool: ready_for_verification]_

Done.

## User

Save as standalone HTML: Recruitment Control Tower.dc.html

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: present_fs_item_for_download]_

Standalone offline export ready for download.

