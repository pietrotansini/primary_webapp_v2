// AskPanel — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { T, type Vals } from "../dc";

export function AskPanel({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ background: "#fff", borderBottom: "1px solid #eaebec", padding: "14px 20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <div style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#e5ecf2", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 24px" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
          </svg>
        </div>
        <div style={{ flex: "1", minWidth: "0", maxWidth: "820px" }}>
          <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#85888c", marginBottom: "4px" }}>{T(v.askQ)}</div>
          {" "}
          {v.askLoading ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 13px 'IBM Plex Sans'", color: "#55585d" }}>
                {T(v.spinner)}Thinking…
              </div>
            </>
          ) : null}
          {" "}
          <div style={{ font: "400 13.5px/1.55 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty" }}>
            {T(v.askAnswer)}
          </div>
        </div>
        <button onClick={v.closeAsk} style={{ border: "none", background: "transparent", cursor: "pointer", padding: "4px", color: "#85888c", font: "500 12px 'IBM Plex Sans'" }}>
          Close
        </button>
      </div>
    </>
  );
}
