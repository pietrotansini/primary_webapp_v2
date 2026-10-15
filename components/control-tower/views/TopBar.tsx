// TopBar — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function TopBar({ v }: { v: Vals }) {
  return (
    <>
      <header style={{ height: "60px", flex: "0 0 60px", background: "#fff", borderBottom: "1px solid #eaebec", display: "flex", alignItems: "center", padding: "0 20px", gap: "14px" }}>
        {v.notPrime ? (
          <>
            <div style={{ flex: "1", maxWidth: "620px", display: "flex", alignItems: "center", gap: "9px", background: "#f6f6f8", border: "1px solid #e8e9eb", borderRadius: "10px", padding: "0 6px 0 12px", height: "38px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flex: "0 0 15px" }}>
                <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
              </svg>
              <input value={v.askText ?? ""} onChange={v.onAskText} onKeyDown={v.onAskKey} placeholder="Ask or instruct the agent" style={{ flex: "1", minWidth: "0", border: "none", background: "transparent", outline: "none", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a" }} />
              <button onClick={v.submitAsk} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "7px", padding: "5px 11px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }}>
                Ask
              </button>
            </div>
          </>
        ) : null}
        {v.isPrime ? (
          <>
            <div onClick={v.goSystems} style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer" }}>
              Connected systems
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {L(v.systemsList).map((sy, $index) => (
                  <span key={$index} style={{ display: "flex", alignItems: "center", gap: "5px", font: "500 11px 'IBM Plex Mono'", color: "#55585d", background: "#f2f2f4", borderRadius: "5px", padding: "2px 7px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                    {T(sy)}
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : null}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "7px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#27a763" }} />
          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>Last scan 6:04 AM</span>
        </div>
      </header>
    </>
  );
}
