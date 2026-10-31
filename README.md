# Recruitment Control Tower

A Next.js app built from the Claude Design prototype `project/Primary v3.dc.html`.
It covers Ask Prime, the Homepage, Sites, Engagements, Actions, the Enrollment, Budget and
Regulatory agents, Analytics (Patients, Engagements, Actions), the Prime chat panel, AI Studio (beta),
Audit Trail and Connectors.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: add ANTHROPIC_API_KEY for Prime's live AI features
npm run dev                  # http://localhost:3000
```

## Deploy to Vercel

1. Push this repository to GitHub and import it in Vercel. The framework is detected as Next.js automatically.
2. Optional: under **Settings → Environment Variables**, add `ANTHROPIC_API_KEY` (and `ANTHROPIC_MODEL`
   to override the default `claude-opus-5-5`).

Or from the CLI: `npx vercel` (preview) / `npx vercel --prod`.

Without `ANTHROPIC_API_KEY`, everything still works. The features that call Prime (the Ask bar,
custom Prime tasks and follow-ups, New action drafting, revising an action with added context,
AI Studio generation) use the design's offline fallbacks instead.

## How it is built

| Path | What it is |
| --- | --- |
| `components/control-tower/views/*.tsx` | One component per screen or panel, generated from the design's template |
| `components/control-tower/logic.ts` | The prototype's state and behaviour (sample data, handlers, `renderVals()`), ported unchanged |
| `components/control-tower/ControlTower.tsx` | Client component that holds the logic's state and renders the views |
| `components/control-tower/dc.ts` | Binding helpers and the `DCLogic` base class |
| `app/api/complete/route.ts` | Server route that calls the Claude API. It replaces the design tool's `window.claude.complete` |
| `app/design-pseudo.css` | `:hover` / `:focus` styles from the design |
| `scripts/convert-design.mjs` | Regenerates the views, logic and pseudo CSS from the design export |
| `project/`, `chats/`, `DESIGN_HANDOFF.md` | The original Claude Design handoff bundle |

To pick up a new export of the design, replace `project/Primary v3.dc.html` and run
`npm run convert-design`. That overwrites the generated files. If the export adds a new top-level
screen, the script stops and asks for a component name in `SECTION_NAMES`.

All study, site, invoice and action data is sample data from the prototype. Connecting systems,
sign-in, invoice reading and approvals are simulated in the browser, and changes are lost
on reload.
