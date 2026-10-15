// SystemsView — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function SystemsView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h1 style={{ margin: "0", font: "600 21px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>Connect systems</h1>
          {" "}
          <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>{T(v.sysSub)}</div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "12px", marginTop: "18px" }}>
            {L(v.systems).map((s, $index) => (
              <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", flex: "0 0 38px", borderRadius: "9px", background: s?.tileBg, color: s?.tileFg, display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Mono'" }}>
                    {T(s?.mono)}
                  </div>
                  <div style={{ minWidth: "0", flex: "1" }}>
                    <div style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(s?.name)}</div>
                    {" "}
                    <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(s?.vendor)}</div>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Sans'", color: s?.stFg, background: s?.stBg, borderRadius: "20px", padding: "3px 9px", whiteSpace: "nowrap" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: s?.dot }} />
                    {T(s?.status)}
                  </span>
                </div>
                <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#55585d", textWrap: "pretty" }}>{T(s?.desc)}</div>
                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "4px 12px", font: "400 12px 'IBM Plex Sans'" }}>
                  <span style={{ color: "#85888c" }}>Access</span>
                  <span style={{ color: "#1c1d1f" }}>{T(s?.access)}</span>
                  <span style={{ color: "#85888c" }}>Last sync</span>
                  <span style={{ color: "#1c1d1f" }}>{T(s?.sync)}</span>
                </div>
                <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid #f0f0f3", display: "flex", alignItems: "center", gap: "10px" }}>
                  {s?.isOff ? (
                    <>
                      <button onClick={s?.connect} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "7px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
                        Connect
                      </button>
                      <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>Read-only by default</span>
                    </>
                  ) : null}
                  {s?.isConnecting ? (
                    <>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40" }}>
                        {T(s?.spin)}Connecting…
                      </span>
                    </>
                  ) : null}
                  {s?.isOn ? (
                    <>
                      <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(s?.used)}</span>
                      <button onClick={s?.disconnect} style={{ marginLeft: "auto", border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }}>
                        Disconnect
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
