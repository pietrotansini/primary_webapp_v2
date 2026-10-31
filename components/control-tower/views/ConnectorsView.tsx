// ConnectorsView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { Fragment } from "react";
import { L, T, type Vals } from "../dc";

export function ConnectorsView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
            <div style={{ minWidth: "0", flex: "1 1 320px" }}>
              <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>
                {T(v.sysSub)}
              </div>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "9px 15px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.sysAdd?.openPicker} className="dc-hover-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              Add system
            </button>
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", marginTop: "18px", overflow: "hidden" }}>
            {L(v.systems).map((s, $index) => (
              <div key={$index} style={{ display: "grid", gridTemplateColumns: "38px minmax(0,1.5fr) minmax(0,1fr) auto", gap: "16px", alignItems: "center", padding: "14px 18px", borderTop: s?.bt }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "9px", background: s?.tileBg, color: s?.tileFg, display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Mono'" }}>
                  {T(s?.mono)}
                </div>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(s?.vendor)}</span>
                    <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                      {T(s?.name)}
                    </span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#55585d", marginTop: "3px", textWrap: "pretty" }}>
                    {T(s?.desc)}
                  </div>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px", font: "500 11.5px 'IBM Plex Sans'", color: s?.stFg }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: s?.dot }} />
                    {T(s?.status)}
                  </div>
                </div>
                <div style={{ minWidth: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "3px 10px", font: "400 12px/1.4 'IBM Plex Sans'" }}>
                  <span style={{ color: "#85888c" }}>Access</span>
                  <span style={{ color: "#1c1d1f", textWrap: "pretty" }}>{T(s?.access)}</span>
                  <span style={{ color: "#85888c" }}>Last sync</span>
                  <span style={{ color: "#1c1d1f" }}>{T(s?.sync)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", minWidth: "96px" }}>
                  {s?.isOff ? (
                    <>
                      <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "7px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={s?.connect}>
                        Connect
                      </button>
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
                      <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={s?.disconnect} className="dc-hover-33">
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
      {" "}
      {v.sysAdd?.open ? (
        <>
          <div style={{ position: "fixed", inset: "0", background: "rgba(10,10,10,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: "50" }} onClick={v.sysAdd?.close}>
            <div style={{ width: "100%", maxWidth: "560px", maxHeight: "min(680px, calc(100vh - 40px))", background: "#fff", borderRadius: "14px", boxShadow: "0 20px 50px rgba(10,10,10,0.22)", display: "flex", flexDirection: "column", overflow: "hidden" }} onClick={v.sysAdd?.stop}>
              <div style={{ padding: "18px 20px 12px", display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid #f0f0f3" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Add a system</div>
                    <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.sysAdd?.countLine)}</div>
                  </div>
                  <button style={{ width: "28px", height: "28px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#66696e" }} onClick={v.sysAdd?.close} className="dc-hover-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #e2e3e5", borderRadius: "9px", padding: "0 10px", height: "36px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="6.5" stroke="#85888c" strokeWidth="2" />
                    <path d="m16 16 4 4" stroke="#85888c" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.sysAdd?.q ?? ""} onChange={v.sysAdd?.onQ} placeholder="Search by vendor, product or type, e.g. RTSM" />
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {L(v.sysAdd?.cats).map((c, $index) => (
                    <button key={$index} style={{ border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, borderRadius: "20px", padding: "3px 10px", font: "500 11.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={c?.pick}>
                      {T(c?.label)}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ overflowY: "auto", padding: "4px 20px 14px" }}>
                {L(v.sysAdd?.groups).map((g, $index) => (
                  <Fragment key={$index}>
                    <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", padding: "14px 0 4px" }}>
                      {T(g?.label)}
                    </div>
                    {" "}
                    {L(g?.items).map((i, $index) => (
                      <div key={$index} style={{ display: "grid", gridTemplateColumns: "32px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "8px 0", borderTop: i?.bt }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f2f2f4", color: "#55585d", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'IBM Plex Mono'" }}>
                          {T(i?.mono)}
                        </div>
                        <div style={{ minWidth: "0" }}>
                          <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(i?.vendor)}</div>
                          <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {T(i?.desc)}
                          </div>
                        </div>
                        {i?.canAdd ? (
                          <>
                            <button style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "5px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={i?.add} className="dc-hover-3">
                              Add
                            </button>
                          </>
                        ) : null}
                        {i?.added ? (
                          <>
                            <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#197a48", whiteSpace: "nowrap" }}>Added ✓</span>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </Fragment>
                ))}
                {" "}
                {v.sysAdd?.empty ? (
                  <>
                    <div style={{ padding: "18px 0", font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>
                      No system matches “{T(v.sysAdd?.q)}”. Ask your admin to request a custom connector.
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
