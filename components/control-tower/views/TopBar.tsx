// TopBar — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { T, type Vals } from "../dc";

export function TopBar({ v }: { v: Vals }) {
  return (
    <>
      <header style={{ height: "60px", flex: "0 0 60px", background: "#fff", borderBottom: "1px solid #eaebec", display: "flex", alignItems: "center", padding: "0 20px", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
          <h1 style={{ margin: "0", font: "600 18px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {T(v.pageTitle)}
          </h1>
          {v.pageBeta ? (
            <>
              <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.04em", color: "#003358", background: "#e5ecf2", border: "1px solid #cddae5", borderRadius: "20px", padding: "2px 8px" }}>
                BETA
              </span>
            </>
          ) : null}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#27a763" }} />
            <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap" }}>Last scan 6:04 AM</span>
          </div>
          {v.showAsk ? (
            <>
              <button style={{ display: "flex", alignItems: "center", gap: "7px", border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.headerAsk} className="dc-hover-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
                </svg>
                Ask Prime
              </button>
            </>
          ) : null}
        </div>
      </header>
    </>
  );
}
