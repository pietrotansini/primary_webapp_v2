# Sites ordering by contribution

_Started 2026-07-20 18:32 UTC_

---

## User

in the Sites tab, ordering sites by Net Contribution and as secondary ordering by Enrolled

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Sites now sort by net contribution (worst gap first), then by enrolled count, both in the funnel chart and the table below.

_[tool: ready_for_verification]_

That clipping finding is unrelated to this change (pre-existing sidebar element). Sort is applied and working.

## User

remove the result of the enrolled / expected from the "enrolled vs expected" column, because it is then repeated in "net contribution"

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Removed the redundant gap indicator from the Enrolled vs Expected column. Same pre-existing sidebar clipping finding, unrelated to this edit.

## User

in Data Sources, replace Cenduit with Sudova as IRT

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Replaced Cenduit with Sudova as the IRT source in Data Sources.

## User

replace TrialSpark with TrialBee

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Replaced all three TrialSpark references with TrialBee.

