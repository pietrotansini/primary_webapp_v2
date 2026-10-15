// AuditTrailView — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function AuditTrailView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h1 style={{ margin: "0", font: "600 21px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>Audit Trail</h1>
          {" "}
          <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e", marginTop: "4px" }}>
            Every action taken, here and on other systems
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "18px" }}>
            {L(v.log).map((l, $index) => (
              <div key={$index} style={{ display: "grid", gridTemplateColumns: "78px 20px minmax(0,1fr) auto", gap: "10px", alignItems: "start", padding: "13px 18px", borderTop: l?.border }}>
                <span style={{ font: "400 11.5px 'IBM Plex Mono'", color: "#85888c", paddingTop: "1px" }}>{T(l?.time)}</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", marginTop: "5px", background: l?.dot }} />
                <span style={{ font: "400 13px/1.45 'IBM Plex Sans'", color: "#1c1d1f" }}>{T(l?.text)}</span>
                <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#85888c" }}>{T(l?.study)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
