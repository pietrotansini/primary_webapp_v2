# Screen-Fail Rate confidence interval

_Started 2026-07-10 22:29 UTC_

---

## User

Change: add a confidence interval to the Screen-Fail Rate card
In buildSd, store raw counts (screenFails, screensTotal) instead of a percentage. Compute a 95% Wilson score interval from them.
On the SCREEN-FAIL RATE card in the Overview metric strip:

Under the big number, add a small mono sub-line: 95% CI 26–58% · n=34.
Change the color logic: red only if the CI lower bound is above the 22% benchmark; amber if the benchmark falls inside the CI (label it "Elevated · low confidence"); green if the upper bound is below it.
If screensTotal < 10, show a neutral gray "Too early to assess · n=X" instead.

Check: 14/34 fails vs. 22% benchmark → amber, CI ≈ 26–58%. 80/195 fails → red.

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the five call sites and the template card.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now verify it renders and check computed values match expectations.

_[tool: ready_for_verification]_

Implemented Wilson score CI, counts-based data, and the new sub-line/color logic. One flag: your check example (14/34 vs 22% benchmark) computes to CI 26–58%, and since the lower bound (26%) is *above* the 22% benchmark, my rule as stated makes this **red**, not amber — amber only triggers when the benchmark actually falls inside the interval. I went with the literal rule (statistically correct) rather than the example; let me know if you actually want amber to also cover "just barely above" cases.

## User

Found issues — fixing…

## Assistant

Already flagged this exact conflict in my last message — it's a genuine contradiction between your stated rule and the worked example, not a bug. Want me to (a) keep the literal rule (red for DIA-2043), or (b) widen amber to cover "elevated but low-n" cases like this so the example matches?

## User

Add a Statistical Confidence section directly beneath the Screen Failure Rate KPI. The purpose is not to expose statistical calculations, but to help Clinical Operations teams understand whether the observed screen failure rate is reliable enough to act on.

The section should contain:

A small status indicator showing Confidence: Low / Medium / High, using muted gray for low confidence, amber for medium, and green for high.
A concise explanation underneath:
Low confidence: "Based on only 17 screened patients. Estimate still unstable."
Medium confidence: "Based on 54 screened patients. Confidence improving."
High confidence: "Based on 186 screened patients. Estimate stable."

The confidence level should update automatically based on the amount of screening data available rather than a fixed study milestone.

When confidence is Low, subtly de-emphasize recommendation cards elsewhere on the page by adding labels such as "Preliminary signal" or "Monitor before intervening", discouraging users from overreacting to early recruitment noise.

Hovering over the confidence indicator (or tapping an info icon) should display a tooltip:

Why confidence matters

Early in a study, a few patients can dramatically change the observed screen failure rate. As more patients are screened, the estimate becomes increasingly reliable, allowing intervention recommendations to be made with greater confidence.
---

The design should feel simple and operational rather than statistical. Avoid displaying standard deviations, p-values, or confidence interval formulas in the main UI. The focus is helping users answer one question:

"Can I trust this metric enough to take action?"

Remove the current +19 pts vs 22% benchmark

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

Good, this pattern is common in the file. Now implement all changes.

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add de-emphasis badges to Recommended Actions rows when confidence is low.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now verify.

_[tool: ready_for_verification]_

Added a Confidence section (Low/Medium/High, threshold-driven off screening n) beneath the Screen-Fail Rate KPI, with hover tooltip explaining why it matters, and removed the old "+X pts vs benchmark" pill. Recommended Actions cards now show a "Preliminary signal" badge + "Monitor before intervening" note when confidence is Low (e.g. NASH-3301 at n=17).

