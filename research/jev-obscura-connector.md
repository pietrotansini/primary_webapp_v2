# Fast decision models and the Obscura browser for the connector agent

Research for issue #27 (part of #2), following on from #14. The question: can **Jev** (TypeSafe AI's fast "System One" decision model) drive the connector agent's browser work, and can **Obscura** (a Rust headless browser that speaks CDP and MCP) replace Chromium under Playwright, both for learning and for replaying Recipes?

Researched 2026-11-02. Facts come from TypeSafe's own site and docs, the Obscura source code and issue tracker at `main`, the `browser-use/jev-ultrafast` repository, and `--help` and `strings` runs on the two local Obscura binaries. No binary was pointed at a real platform or given credentials. Statements marked **(inference)** are my judgement, not a sourced fact. Statements marked **(secondary)** come from third-party write-ups and are unverified.

Context: a **Recipe** is the crystallized form of a connector. It has fetch steps with role+name locators and post-conditions, a field mapping per feed, and checks. It is replayed without AI, and an agent only proposes new versions (`GLOSSARY.md`). The Castor connector in `clinical-platform-connector-pietro` uses `chromium.launchPersistentContext` with a visible browser for MFA, `storage-state.json` saved with `indexedDB: true`, `getByRole` locators and Playwright `download` events (`src/browser/session.ts`, `src/browser/download.ts`, `src/connectors/castor/export-navigation.ts`).

## TL;DR

- **Jev fits per-step element choice and checks, not learning or repair on its own.** TypeSafe says Jev "does not generate text, write code, or hold a conversation" and is "for building AI-powered software, not agents". It takes a text state plus typed questions (Choice with up to 255 options, Score, Noul) and returns probabilities and a confidence. Use it to pick the element for a broken step from the page's accessible controls, and to check post-conditions. A reasoning model (Claude) still has to plan a new Recipe, write locators and post-conditions, and handle anything Jev is unsure about.
- **Jev's cost is negligible, but its data terms need work before Subject data goes near it.** Jev costs $0.042 per million input tokens, and output is free. Self-serve API keys come from the console. The service is "hosted in the United States". A DPA exists, with EU SCCs and the UK addendum. Zero data retention is for enterprise customers only, and the subprocessor list and SOC 2 report sit behind the Trust Center. TypeSafe publishes no element-selection benchmark and no comparison with Claude computer use. The only public browser evidence is Browser Use's demo: 3/3 runs of one Google Flights task.
- **Obscura cannot run the Castor connector today.** It has no visible (headed) mode, so MFA hand-off is impossible; the maintainer's answer to "any headful promises?" was "not planned yet". `Browser.setDownloadBehavior` is a no-op and there is no download event, so Playwright's `download` flow will not fire **(inference from source)**. Playwright `storageState` save and restore is documented as "limited", and IndexedDB is not persisted. The project is at v0.2.x (first release May 2026) with 221 open issues, several of them Playwright interaction hangs. The licence (Apache-2.0) is fine.
- **Obscura always says it is Google Chrome, and no flag turns that off.** Even without `--stealth`, it sends a Chrome user agent and `sec-ch-ua` client hints naming "Google Chrome". `--user-agent` changes the User-Agent string, but the client hints still claim Google Chrome. Honest identification would need a fork patch. On loopback, CDP and MCP accept unauthenticated connections by default. An optional bearer token (`OBSCURA_CDP_TOKEN`, `OBSCURA_MCP_TOKEN`) is enforced only when you bind off loopback.
- **Recommended loop (inference):** keep Playwright and Chromium for learning and replay. Learn with Claude. Repair in tiers: first deterministic fallbacks, then a Jev Choice over the page's accessible controls gated on confidence and on the step's own post-condition, then Claude, then a human. Every repair is still only a proposed new Recipe version. One repair costs roughly **$0.001–0.01 when Jev settles it** and **$0.10–1.50 when Claude is needed**. Reviewer time costs more than either.

## 1. Jev (TypeSafe AI)

### What it is

- Jev is TypeSafe's "first System One model". It was announced on 2026-09-15 as "available today in early access". It uses a "new model architecture", a "parallel sampler" that "generates all outputs in a single query", and a training method called "Reinforcement Learning for Calibrated Decisions (RLCD)". ([Introducing System One models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev))
- **Input:** a `state` (text or JSON) plus a map of `questions`. Each question is evaluated "in parallel and in isolation against the same state in one request". ([Introduction](https://docs.typesafe.ai/introduction))
- **Question types** ([Primitives](https://docs.typesafe.ai/primitives.md)):
  - **Choice** returns `choice`, `probabilities` and `confidence`. "A Choice question accepts up to 255 options." ([Choice](https://docs.typesafe.ai/primitives/choice.md))
  - **Score** rates the state against a rubric.
  - **Noul** returns the probability (0–1) that a statement is true.
  - **Box** (image bounding box) exists, but only behind an experimental header (see Images below).
- **Current models:** `jev-1.14.0` (from 2026-10-14) and `jev-1.13.0`. The context limit is 64k tokens per request and 32k per question, or 262k with the `TypeSafe-Danger-Zone-Long-Context` header, which TypeSafe says is "slower and less accurate". The input column says "Text". Aliases (`jev-latest`) move between versions, so TypeSafe advises pinning a version ID when you have tuned thresholds. ([Models](https://docs.typesafe.ai/models.md))
- **Images:** images are "Dreamer-ready" and "aren't yet up to our standards to call ready for production". They need the `TypeSafe-Danger-Zone-Images: true` header. ([Images](https://docs.typesafe.ai/images.md)) A screenshot-driven Jev is therefore experimental. A Jev that reads text (an accessibility tree or an element table) is the supported path.

### Access and pricing

- **Access:** the homepage says "early access" and links to the console and docs. ([typesafe.ai](https://typesafe.ai)) The quickstart says to "Get an API key from the TypeSafe console". The endpoint is `POST https://api.typesafe.ai/v1/systemone` with `Authorization: Bearer`, and there are Python and JavaScript SDKs. ([Quick start](https://docs.typesafe.ai/introduction/quickstart.md), [Models](https://docs.typesafe.ai/models.md)) Some write-ups say early access was waitlisted at launch **(secondary)**. I did not create an account, so I have not confirmed whether signup is gated today.
- **Price:** $42 per billion input tokens ($0.042 per million). "Output tokens are free." Images are billed as input tokens at the same rate. ([Models](https://docs.typesafe.ai/models.md), [Images § Image tokens](https://docs.typesafe.ai/images.md)) The launch post admits "We can't prove it isn't subsidized." ([launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev))
- **Rate limits** are set per organization in the console. Higher limits come with custom and enterprise plans. ([Models § Rate limits](https://docs.typesafe.ai/models.md))
- **Deprecation:** the Jev 1.14 post gives 60 days' notice for 1.13.0 and 30 days for 1.14.0. ([Jev 1.14](https://typesafe.ai/blog/jev-1-14))

### Data processing and DPA

- **Location:** the privacy policy says "The Services are hosted in the United States". EEA and UK users are told they are "transferring your personal data outside of those regions to the U.S." ([Privacy Policy](https://typesafe.ai/legal/privacy-policy)) I found no EU hosting option. The Enterprise page lists "Where is our data processed?" and "Can we run Jev in our own VPC or on-premises?" as FAQ questions with no visible answers. ([Enterprise](https://typesafe.ai/enterprise))
- **DPA:** a Data Processing Addendum is published. It "forms part of the Agreement" between the customer and TypeSafe AI, Inc. ([DPA](https://typesafe.ai/legal/data-processing))
  - Transfers use the EU SCCs (2021/914, Module 2 and Module 3 where applicable) and the UK IDTA addendum B1.0.
  - Security incidents are notified "within 72 hours".
  - Subprocessors are listed at `trust.typesafe.ai/subprocessors`. The page did not render without a session, so I could not read the list.
  - Retention: personal data is kept "for as long as necessary".
- **Retention and training:** "Jev is not trained on customer requests or responses." Zero data retention (ZDR) is available "for enterprise customers" on request. ([Models § Data handling](https://docs.typesafe.ai/models.md), [Legal](https://docs.typesafe.ai/legal.md)) A SOC 2 Type II report is available on request through the Trust Center. ([Enterprise](https://typesafe.ai/enterprise))
- **What this means here (inference):**
  - ADR 0001 stores pseudonymized Subject records. Under GDPR, pseudonymized data is still personal data, so any Jev state that could contain a Subject ID or Subject values is a US transfer under the SCCs.
  - It would need TypeSafe as a listed subprocessor, a transfer impact assessment, and ideally ZDR, which means an enterprise contract.
  - The cheaper route is to keep Subject data out of Jev entirely. Send only the roles and names of interactive controls, and redact or hash any text that matches Subject-ID patterns before the request. Navigation decisions rarely need cell values.

### How it pairs with a reasoning model

- TypeSafe positions Jev as a component inside software, not as an agent: "System One is TypeSafe's model for building AI-powered software, not agents. It does not generate code or choose its own next action." ([How to build with TypeSafe](https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md))
- TypeSafe also says Jev "is not a drop-in replacement for the LLM behind Claude Code". ([Jev with coding agents](https://docs.typesafe.ai/introduction/coding-agents.md))
- The documented cascade pattern lets a cheap model act, has TypeSafe check, and escalates "to a reasoning model only when a check fires". ([SDE cascade](https://docs.typesafe.ai/cookbooks/sde_cascade.md), [Confidence-gated routing](https://docs.typesafe.ai/patterns/confidence-routing.md))
- **Browser use:** the concrete pairing is Browser Use's **Jev Ultrafast** (MIT, created 2026-09-16). ([repo README](https://github.com/browser-use/jev-ultrafast))
  - Each observation produces an indexed element table (role, name, value).
  - One Jev request returns an operation (`CLICK`, `TYPE_TEXT`, `SELECT`, `SCROLL_*`, `WAIT`, `DONE`, `BLOCKED`) plus speculative target heads.
  - A small LLM is called only to write text for `TYPE_TEXT`.
  - "Model output never becomes selectors, coordinates, shell commands, or executable JavaScript". Every target resolves to an observed DOM node and is rechecked for freshness and occlusion.
  - The stated limits are that shadow roots, frames, canvas, uploads, pop-up tabs, nested scrolling and arbitrary keyboard widgets are "outside this MVP", and that "A `DONE` choice still requires independent outcome verification".

### Reported reliability

- **TypeSafe:** no element-selection or computer-use benchmark is published.
  - The launch post's evals are four internal workflows scored against "the average of GPT-6 Astra and Fable 5.1", with no published numbers.
  - The "0% structured output error rate" is a schema guarantee, not measured accuracy.
  - The authors say "some bias could exist". ([launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev))
  - The Jev 1.14 post gives no figures. ([Jev 1.14](https://typesafe.ai/blog/jev-1-14))
- **Known weaknesses** (from TypeSafe's own "jaggedness" page): literal reading, numbers and dates, indirection, accuracy that drops as irrelevant state grows, adversarial content that "can move the answer", and a lean towards the first Choice option. ([Jev 1.13 jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)) For us, two of these matter most:
  - Send only a filtered candidate list, not the whole page.
  - Shuffle option order and check the answer stays the same.
- **Browser Use:**
  - Both versions of their agent passed **3/3** runs of one Google Flights task. The optimized one had a median of 7.1 s, 17 Jev requests and a median Jev latency of 178 ms.
  - The same agent also completed one Wikipedia task (2.8 s) and one local hotel-search task (1.9 s).
  - They say this is "three repeats of one task on one browser profile, not a general reliability benchmark".
  - The recorded run used 90,558 Jev input tokens, which is about $0.004. ([performance.md](https://github.com/browser-use/jev-ultrafast/blob/main/docs/performance.md))
- **Compared with Claude computer use:** there is no primary-source head-to-head. Third-party posts and an arXiv preprint on Jev as a decision layer for pentest agents exist; I did not verify either **(secondary)**.

### Fit: learn, repair, per-step element choice

| Step | Fit | Why |
|---|---|---|
| **Learn a Recipe** | Poor as the driver; fine as a helper | Learning means writing locators, post-conditions, a field mapping and checks. That is generation, which TypeSafe says Jev doesn't do ("If you really need to generate text... there are other models for that"). Claude should drive. Jev can check Claude's proposed post-conditions or rank candidate controls cheaply. |
| **Repair a broken step** | Good for the common case | Most UI drift is a renamed or moved control. Given the step's intent (old role, old name, a one-line description) and the current page's accessible controls as Choice options plus `none`, Jev picks the replacement with a confidence. Code then checks the step's post-condition. When confidence is low or the answer is `none`, the repair escalates to Claude. |
| **Per-step element choice at replay** | Not needed | Replay is deterministic by design (#14). Running a model on every step would make replay non-deterministic and add a US data flow on every sync. Use Jev only when a step fails. |

## 2. Obscura

### What it is, maturity and licence

- Obscura is "a headless browser engine written in Rust… supports the Chrome DevTools Protocol, and acts as a drop-in replacement for headless Chrome with Puppeteer and Playwright". It is Apache-2.0, and the README promises "No feature gating, ever". ([README](https://github.com/h4ckf0r0day/obscura))
- **Maturity:**
  - The repository was created on 2026-04-13. Releases run from v0.1.4 (2026-05-13) to v0.2.6 (2026-10-31), roughly every two weeks.
  - It has about 30k stars, 30 contributors and 221 open issues (GitHub API, 2026-11-02).
  - The local binaries are v0.2.4 (`obscura --version`). `obscura-worker` is the per-connection worker process and has no CLI of its own.
- The local `--help` lists the subcommands `serve` (CDP, default `127.0.0.1:9222`), `mcp` (stdio, or `--http` on `127.0.0.1:3000`), `fetch` and `scrape`. Flags include `--stealth`, `--user-agent`, `--storage-dir`, `--allow-private-network` and `--allow-file-access`. There is no headed or visible flag.

### Playwright compatibility for what the Castor connector uses

| Castor need | Obscura status | Source |
|---|---|---|
| Connect from Playwright | `chromium.connectOverCDP()` only. `launchPersistentContext` cannot launch Obscura, so session setup has to be rewritten. | [Use with Playwright](https://github.com/h4ckf0r0day/obscura/blob/main/docs/Use-with-Playwright.md) |
| `getByRole` locators | Documented as working. Playwright computes roles and accessible names in its injected script, so they depend on Obscura's DOM, CSS and visibility fidelity. Open issues show interaction gaps: [#807](https://github.com/h4ckf0r0day/obscura/issues/807) (`fill`/`click`/`selectOption` hang; root cause traced to a missing `Input.insertText`), [#1001](https://github.com/h4ckf0r0day/obscura/issues/1001) (HTML element interfaces are aliases of `Element`), [#1295](https://github.com/h4ckf0r0day/obscura/issues/1295) (missing CSS selectors such as `:focus-within`). `Accessibility.getFullAXTree` exists, but every other Accessibility method returns `{}`. | [Use with Playwright](https://github.com/h4ckf0r0day/obscura/blob/main/docs/Use-with-Playwright.md), `crates/obscura-cdp/src/domains/accessibility.rs` |
| Downloads (`page.on('download')`) | **Not supported (inference from source).** `Browser.setDownloadBehavior` and `Page.setDownloadBehavior` return `{}`, and a code search finds no `downloadWillBegin` event. Large bodies can be streamed with `Fetch.takeResponseBodyAsStream`, which means rewriting the export capture as network interception. | `crates/obscura-cdp/src/domains/browser.rs`, `domains/page.rs`, [README § CDP](https://github.com/h4ckf0r0day/obscura) |
| Persistent profile, `storage-state.json` with IndexedDB | Partial. The Playwright doc says "Storage-state save and restore is limited. Use `--storage-dir` for persistence". `--storage-dir` restores `cookies.json` and `localStorage/*.json`, not IndexedDB. The Playwright `storageState` request ([#630](https://github.com/h4ckf0r0day/obscura/issues/630)) was folded into [#629](https://github.com/h4ckf0r0day/obscura/issues/629), which is still open. | `crates/obscura-browser/src/context.rs`, [Use with Playwright](https://github.com/h4ckf0r0day/obscura/blob/main/docs/Use-with-Playwright.md) |
| MFA hand-off in a visible browser | **Not possible.** Obscura is headless only. A user asked about a headed version and the maintainer answered "Hey, not planned yet." Workaround: log in once in real Chromium, then copy cookies into Obscura through `Storage.setCookies` or `cookies.json`. That breaks if the platform binds the session to the device or TLS fingerprint. | [#142](https://github.com/h4ckf0r0day/obscura/issues/142) |

Other open gaps that could hit an EDC single-page app: native form POSTs produce no CDP navigation or network events ([#886](https://github.com/h4ckf0r0day/obscura/issues/886)), CDP replies stall after load ([#1242](https://github.com/h4ckf0r0day/obscura/issues/1242)), and one V8 isolate is shared across pages ([Use with Playwright](https://github.com/h4ckf0r0day/obscura/blob/main/docs/Use-with-Playwright.md)).

### Security

- **CDP:**
  - `serve` binds `127.0.0.1` by default.
  - On `main`, a bearer token (`OBSCURA_CDP_TOKEN`, at least 32 bytes) is checked if set. The server refuses to start on a non-loopback address without one ("refusing to expose CDP without authentication").
  - On loopback with no token, any local process can drive the browser and read its cookies (`crates/obscura-cdp/src/server.rs`).
  - The local v0.2.4 binary contains both the `OBSCURA_CDP_TOKEN` string and the refusal message (`strings`), so this protection is present there too.
- **MCP:** `OBSCURA_MCP_TOKEN` is optional on loopback and required off loopback. An Origin allowlist refuses browser callers by default, which "stops a malicious local web page from driving the loopback MCP port" (`crates/obscura-mcp/src/http.rs`). `obscura mcp` doesn't support `--storage-dir` yet ([#629](https://github.com/h4ckf0r0day/obscura/issues/629)).
- **Process model:** Obscura runs untrusted page JavaScript in process. SECURITY.md says its hardening is "not a substitute for operating system isolation" and recommends a container or VM. `file://` navigation and private-network fetches are off by default. ([SECURITY.md](https://github.com/h4ckf0r0day/obscura/blob/main/SECURITY.md))
- **What this means here (inference):** if Obscura is ever used, always set both tokens. Run it in a per-tenant container with no other processes, and never expose the port. Any process that can reach the port holds the Sponsor session.

### Fingerprint and user-agent spoofing

- **Default (no `--stealth`):**
  - The browser context takes `PROFILES[0]` unless `OBSCURA_PROFILE` or `OBSCURA_ROTATE_PROFILE` is set. On `main` that profile is a Windows Chrome 143 user agent (`crates/obscura-browser/src/profiles.rs`, `context.rs`).
  - `Browser.getVersion` reports `"product": "Chrome/145.0.0.0"` with a Linux Chrome UA (`domains/browser.rs`).
  - The local v0.2.4 binary has the same Chrome 145 strings, including the fallback `"Google Chrome";v="145"` client hint.
- **Client hints:** every navigation sends `sec-ch-ua`. Its value is derived from the UA's `Chrome/NN` token and always lists the brands "Chromium" and "Google Chrome". If the UA has no Chrome token, the major version falls back to 145 (`crates/obscura-net/src/client.rs`, `chrome_client_hints`).
- **`--stealth`** is opt-in. It adds randomized GPU, canvas, audio and screen values, `navigator.webdriver = false`, events marked as trusted, masked native functions and tracker blocking. ([README](https://github.com/h4ckf0r0day/obscura)) SECURITY.md calls presenting "a normal, consistent browser fingerprint" the "intended, privacy-first design".
- **Can it be switched off?**
  - You can avoid `--stealth`, and `--user-agent` sets an honest UA string, for example `PrimaryConnector/0.1 (+contact)`.
  - **You cannot stop the `sec-ch-ua` header from claiming Google Chrome, or `Browser.getVersion` from reporting Chrome, without patching the source.** Apache-2.0 allows a fork.
  - Whether `navigator.userAgentData` follows `--user-agent` without stealth is unverified.
- **Recommendation (inference):** even with Sponsor-sanctioned access, the connector should identify honestly. It should not pretend to be a stock Chrome on Windows, and stealth or anti-detection features are inappropriate on a regulated Sponsor tenant. Playwright with real Chromium already identifies truthfully as Chromium or HeadlessChrome, and we can append a product token. That is one more reason to stay on Chromium.

## 3. Learn-and-repair loop

**(inference)** This builds on #14's design and the prototype on branch `prototype/connector-crystallization`.

```
LEARN (once per platform/tenant/Study, human present)
  Playwright + Chromium (headed; human does MFA) ──► Claude (Opus/Sonnet, tool use over
  Playwright actions + a11y snapshots) drives to the export / listing
    ├─ each action recorded as {intent, role, name, post-condition}
    ├─ Claude drafts field mapping + checks from a sample (pseudonymized)
    └─ optional: Jev Nouls check each post-condition against the snapshot (cheap 2nd opinion)
  ──► Recipe v1 proposed ──► Primary approves (Sponsor admin may review)

REPLAY (scheduled, no AI)
  for step in recipe: locate(role,name) → act → assert post-condition
  on failure at step N ──► REPAIR

REPAIR (tiered, cheapest first)
  T0 deterministic: retry, wait, exact=false, known synonyms, same role nearby
  T1 Jev: state = {step intent, old role+name, filtered list of current
         interactive controls (role, name, region), Subject IDs redacted}
         Choice(target ∈ controls ∪ {none}), Noul(page is the expected page)
         - ask twice with shuffled options; accept only if both agree and
           confidence ≥ threshold (tuned on recorded failures)
         - execute in a dry-run session, assert the step's post-condition
  T2 Claude: snapshot + screenshot + step history; proposes new step(s)/locators;
         same post-condition gate
  T3 human: visible browser, records the step
  any T1–T3 success ──► Recipe v(n+1) PROPOSED (diff of steps), not auto-applied
  (policy option: auto-apply T1 renames when every check passes, flag for review)
```

Design notes:

- **The post-condition is the judge, not the model.** Jev's confidence and Claude's answer only nominate a candidate. The existing post-condition (URL, heading, a visible table, a download that starts) decides whether the repair worked. This follows Browser Use's rule that "`DONE` still requires independent outcome verification".
- **Jev's output stays a closed set.** As in Jev Ultrafast, the Choice options are indexes into controls we observed, so model output never becomes a selector or code. That also limits what page-text injection can achieve.
- **A Recipe step stores role and name, not an index.** After a Jev pick, code reads the chosen node's role and accessible name from the snapshot and writes those into the new step.
- **Data:** T1 sends control labels only, never table cells. T2 (Claude) may see screenshots that contain pseudonymized Subject data, so it needs Anthropic in the subprocessor list. Claude API inference geography options are `global` or `us`; for EU-region inference, use Claude through a cloud provider's EU region.

### Rough cost per repair

These are estimates **(inference)**: the token counts are assumptions, and the prices are list prices on 2026-11-02.

| Tier | Assumed tokens | Model cost |
|---|---|---|
| T1 Jev | 2–6 requests × ~5k input tokens (Jev Ultrafast averaged ~5.3k per request). Output is free. | ≈ **$0.0005–0.002**. With retries and a second shuffled ask, under **$0.01**. |
| T2 Claude Sonnet 5.5 ($2 / $10 per Mtok) | 5–10 turns × ~20k input (snapshot plus a screenshot) and ~1.5k output, with partial caching | ≈ **$0.10–0.50** |
| T2 Claude Opus 5.5 ($4 / $20 per Mtok) | Same as Sonnet | ≈ **$0.25–1.50** |
| Learn (Claude, once per Recipe) | 30–80 turns | ≈ **$2–15**, plus a human for MFA and review |

The browser runtime is negligible either way. The dominant cost is human review of the proposed Recipe version, about 5–15 minutes per repair. Jev saves money only when it removes Claude calls (T1 versus T2), and each saving is cents to about a dollar. The case for Jev is **latency and reducing how often a step escalates**, not the bill. If repairs are rare (a few per platform per month), Claude-only repair costs a few dollars a month and avoids a new vendor, a US transfer and an extra DPA. **Recommendation:** start Claude-only for T2 with the post-condition gate, log every repair with its snapshots, and add Jev T1 once there is a set of recorded failures to tune its threshold on, and its terms (subprocessor, ZDR) are agreed.

## Open risks

- **Jev:**
  - There is no published browser element-selection accuracy. We would have to measure it on our own recorded failures.
  - Early-access status, alias drift and 30–60 day deprecations mean the model version must be pinned and thresholds re-tuned on upgrade.
  - The service is US-hosted, ZDR is enterprise only, and I could not read the subprocessor list.
- **Obscura:**
  - It has no headed mode, no download events, partial storage state and no IndexedDB persistence.
  - It is pre-1.0 with a fast-moving codebase.
  - It identifies as Google Chrome with no off switch.
  - CDP is unauthenticated on loopback unless a token is set.
  - Re-evaluate at 1.0. Its likely niche is cheap headless reads of non-MFA HTML pages, not Castor.
- **Loop:**
  - Auto-applying repairs, even "obvious" renames, conflicts with "agent only proposes new versions" in the glossary. That is a policy decision for #2.
  - Screens can carry pseudonymized Subject data into T2 and T3 prompts.
  - Platform terms of use may restrict automated access even when the Sponsor sanctions it. That is a separate question from fingerprinting.
