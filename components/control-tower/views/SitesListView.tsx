// SitesListView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { Fragment } from "react";
import { L, T, type Vals } from "../dc";

export function SitesListView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "22px 28px 48px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px 18px", flexWrap: "wrap", minWidth: "0" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center", width: "260px", maxWidth: "100%" }}>
                <svg style={{ position: "absolute", left: "10px", pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="6.5" stroke="#85888c" strokeWidth="2" />
                  <path d="m16 16 4 4" stroke="#85888c" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input style={{ width: "100%", font: "400 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "7px 30px 7px 31px", outline: "none" }} type="text" value={v.bsl?.q ?? ""} onChange={v.bsl?.onQ} placeholder="Search sites, city or code" className="dc-focus-9" />
                {v.bsl?.hasQ ? (
                  <>
                    <button style={{ position: "absolute", right: "6px", width: "20px", height: "20px", border: "none", background: "transparent", borderRadius: "5px", color: "#85888c", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "0" }} onClick={v.bsl?.clearQ} title="Clear search" className="dc-hover-15">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                      </svg>
                    </button>
                  </>
                ) : null}
              </div>
            </div>
            <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
              {L(v.bsl?.filters).map((f, $index) => (
                <button key={$index} style={{ border: "none", borderRadius: "7px", padding: "5px 11px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12px 'IBM Plex Sans'", background: f?.bg, color: f?.fg, boxShadow: f?.shadow }} onClick={f?.onClick}>
                  {T(f?.label)}{" "}
                  <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(f?.count)}</span>
                </button>
              ))}
            </div>
          </div>
          {L(v.bsl?.groups).map((g, $index) => (
            <Fragment key={$index}>
              {g?.has ? (
                <>
                  <section style={{ display: "flex", flexDirection: "column", gap: "10px" }} data-screen-label={`Sites list | ${g?.id ?? ""}`}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px 16px", flexWrap: "wrap", padding: "0 2px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: g?.dot, alignSelf: "center" }} />
                        <span style={{ font: "600 15px 'IBM Plex Mono'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>{T(g?.id)}</span>
                        <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(g?.name)}</span>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(g?.phase)}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>
                        <span>{T(g?.summary)}</span>
                        {g?.hasRisk ? (
                          <>
                            <span style={{ fontWeight: "500", color: "#bd3226" }}>{T(g?.riskText)}</span>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div style={{ overflowX: "auto", margin: "0 -2px", padding: "0 2px 2px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,2.3fr) minmax(56px,0.6fr) minmax(100px,1.1fr) minmax(90px,0.9fr) minmax(84px,0.8fr) 12px", gap: "12px", padding: "2px 19px 2px" }}>
                          <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>SITE</span>
                          <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>ENROLLED</span>
                          <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>VS PLAN</span>
                          <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>BOTTLENECK</span>
                          <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>STATUS</span>
                          <span />
                        </div>
                        {L(g?.rows).map((r, $index) => (
                          <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(150px,2.3fr) minmax(56px,0.6fr) minmax(100px,1.1fr) minmax(90px,0.9fr) minmax(84px,0.8fr) 12px", gap: "12px", alignItems: "center", padding: "12px 18px", background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", cursor: "pointer" }} onClick={r?.open} title={r?.diag} className="dc-hover-16">
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
                              <span style={{ flex: "0 0 36px", width: "36px", height: "36px", borderRadius: "9px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'IBM Plex Mono'" }}>
                                {T(r?.code)}
                              </span>
                              <div style={{ minWidth: "0" }}>
                                <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {T(r?.name)}
                                </div>
                                {" "}
                                <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", marginTop: "1px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {T(r?.loc)}
                                </div>
                              </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                              <span style={{ font: "600 16px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>
                                {T(r?.enrolled)}
                              </span>
                              <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{"/ "}{T(r?.expected)}</span>
                            </div>
                            <div style={{ minWidth: "0" }}>
                              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", whiteSpace: "nowrap" }}>
                                <span style={{ font: "600 13px 'IBM Plex Sans'", color: r?.gapColor }}>{T(r?.pctText)}</span>
                                <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: r?.gapColor }}>{T(r?.gapText)}</span>
                              </div>
                              {" "}
                              <div style={{ height: "4px", width: "100%", maxWidth: "130px", background: "#eeeff0", borderRadius: "3px", overflow: "hidden", marginTop: "6px" }}>
                                <div style={{ height: "100%", borderRadius: "3px", background: r?.barColor, width: r?.bar }} />
                              </div>
                            </div>
                            <span>
                              <span style={{ font: "500 11.5px 'IBM Plex Sans'", color: r?.bnFg, background: r?.bnBg, borderRadius: "6px", padding: "3px 8px", whiteSpace: "nowrap" }}>
                                {T(r?.bottleneck)}
                              </span>
                            </span>
                            <span>
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Sans'", color: r?.stFg, background: r?.stBg, borderRadius: "6px", padding: "3px 8px", whiteSpace: "nowrap" }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: r?.dot }} />
                                {T(r?.status)}
                              </span>
                            </span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </>
              ) : null}
            </Fragment>
          ))}
          {v.bsl?.empty ? (
            <>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 20px", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>
                No sites match your search or filter.
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
