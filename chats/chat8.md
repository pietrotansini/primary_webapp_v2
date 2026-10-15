# Platform capabilities overview

_Started 2026-07-13 16:55 UTC_

---

## User

Describe what the platform can do and how the user can use it

## Assistant

_[tool: read_file]_

_[tool: grep]_

Recruitment Control Tower is a clinical-trial enrollment management dashboard for sponsor/ClinOps teams, organized around one study-switcher (Portfolio → individual study) and a left-nav workflow:

- **Portfolio**: all active studies at a glance — enrollment totals, at-risk counts, active sites, weekly flags, and a sortable list of studies by enrollment risk.
- **Enrollment Strategy**: per-study planning view for recruitment approach/targets.
- **Overview**: the default study-level dashboard — enrollment status, key metrics, trend.
- **Sites**: site-by-site performance (activation, enrollment pace, geography).
- **Forecast**: projected enrollment trajectory vs. target date.
- **Insights & Actions**: surfaced risks/recommendations needing attention (badge shows 7 open).
- **Campaigns**: recruitment marketing campaign tracking.
- **AI Content Studio**: generate recruitment content/materials (marked "NEW").
- **CRO Control**: oversight of CRO-run activities/vendors.
- **Data Sources**: connected data feeds and sync status.

Every metric card carries provenance (source, set date, last reviewed, definition) via hover/detail, and an "Ask AI" button in the header lets users query the data directly in natural language. Users navigate by clicking nav items or the study switcher in the header; sync status and freshness show live in the top bar.

## User

rewrite "wks" as "weeks" in +7 wks over in the forecast completion panel

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Done — pre-existing overflow finding is unrelated to this text edit.

