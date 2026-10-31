// EngagementPerformanceView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function EngagementPerformanceView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <select style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "6px 9px", cursor: "pointer" }} value={v.sv?.id ?? ""} onChange={v.sv?.onStudy} className="dc-hover-3">
              {L(v.sv?.studies).map((o, $index) => (
                <option key={$index} value={o?.id ?? ""}>{T(o?.label)}</option>
              ))}
            </select>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
              <svg style={{ color: "#85888c", marginRight: "2px" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 5h16l-6 7.5V19l-4 1.5v-8L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              {L(v.eng?.eadd?.chips).map((c, $index) => (
                <div key={$index} style={{ position: "relative", display: "flex", flex: "0 0 auto" }}>
                  <button style={{ display: "flex", alignItems: "center", gap: "7px", maxWidth: "230px", minWidth: "0", border: `1px solid ${c?.bd ?? ""}`, borderRight: "none", background: c?.bg, color: c?.fg, borderRadius: "8px 0 0 8px", padding: "5px 8px 5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={c?.toggle}>
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{T(c?.label)}</span>
                    <svg style={{ flex: "0 0 10px", color: "#66696e" }} width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button style={{ flex: "0 0 24px", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, borderRadius: "0 8px 8px 0", cursor: "pointer" }} onClick={c?.remove} title="Remove filter" className="dc-hover-10">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  {c?.open ? (
                    <>
                      <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={c?.close} />
                      <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "240px", maxHeight: "320px", overflowY: "auto", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
                        {L(c?.items).map((s, $index) => (
                          <button key={$index} style={{ display: "flex", alignItems: "center", gap: "9px", width: "100%", border: "none", background: "transparent", padding: "7px 12px", textAlign: "left", cursor: "pointer" }} onClick={s?.toggle} className="dc-hover-11">
                            <span style={{ width: "15px", height: "15px", flex: "0 0 15px", boxSizing: "border-box", borderRadius: "4px", border: `1.5px solid ${s?.bd ?? ""}`, background: s?.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                                <path d="m5 12 5 5 9-10" stroke={s?.ck} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span style={{ flex: "1", minWidth: "0", font: "400 12.5px 'IBM Plex Sans'", color: "#2b2d31", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {T(s?.name)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
              {v.eng?.eadd?.canAdd ? (
                <>
                  <div style={{ position: "relative", flex: "0 0 auto" }}>
                    <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px dashed #c9cbce", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.eng?.eadd?.toggleAdd} className="dc-hover-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                      </svg>
                      <span>Add filter</span>
                    </button>
                    {" "}
                    {v.eng?.eadd?.addOpen ? (
                      <>
                        <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={v.eng?.eadd?.closeAdd} />
                        {" "}
                        <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "180px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
                          <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", padding: "8px 12px 4px" }}>
                            FILTER BY
                          </div>
                          {" "}
                          {L(v.eng?.eadd?.addOpts).map((o, $index) => (
                            <button key={$index} style={{ display: "flex", width: "100%", border: "none", background: "transparent", padding: "7px 12px", textAlign: "left", cursor: "pointer", font: "500 12.5px 'IBM Plex Sans'", color: "#2b2d31" }} onClick={o?.pick} className="dc-hover-11">
                              {T(o?.label)}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
              {v.eng?.efAny ? (
                <>
                  <button style={{ border: "none", background: "transparent", color: "#003358", padding: "5px 6px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.eng?.efClear} className="dc-hover-12">
                    Clear filters
                  </button>
                </>
              ) : null}
            </div>
          </div>
          {" "}
          <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px" }}>
            How site campaigns land: delivery, acknowledgement, replies and enrollment in the 30 days after sending.
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", marginTop: "14px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "16px 18px 12px" }}>
              <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>Campaigns</span>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", borderTop: "1px solid #f0f0f3", background: "#fafbfc" }}>
              {L(v.eng?.campKpis).map((k, $index) => (
                <div key={$index} style={{ padding: "12px 18px", borderLeft: k?.bl, minWidth: "0" }}>
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {T(k?.l)}
                  </div>
                  {" "}
                  <div style={{ font: "600 22px/1.25 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a", marginTop: "3px" }}>
                    {T(k?.v)}
                  </div>
                  {" "}
                  <div style={{ font: "500 11.5px 'IBM Plex Sans'", color: k?.sFg, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {T(k?.s)}
                  </div>
                </div>
              ))}
            </div>
            {" "}
            <div style={{ overflowX: "auto", borderTop: "1px solid #f0f0f3" }}>
              <div style={{ minWidth: "880px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(210px,2.2fr) 104px 88px minmax(120px,1fr) minmax(120px,1fr) 64px minmax(150px,1.3fr)", gap: "14px", padding: "9px 18px", borderBottom: "1px solid #ecedee" }}>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Campaign</span>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Audience</span>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Delivered</span>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", cursor: "help" }} title="Tracked opens. Email apps can overstate this.">
                    Open rate
                  </span>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", cursor: "help" }} title="Clicked Acknowledge in the email">
                    Accepted
                  </span>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Replies</span>
                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>New patients at 30 days</span>
                </div>
                {" "}
                {L(v.eng?.campaigns).map((c, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(210px,2.2fr) 104px 88px minmax(120px,1fr) minmax(120px,1fr) 64px minmax(150px,1.3fr)", gap: "14px", alignItems: "center", padding: "12px 18px", borderTop: c?.bt, cursor: "pointer" }} onClick={c?.go} className="dc-hover-4">
                    <div style={{ minWidth: "0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(c?.title)}</span>
                        <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: c?.tFg, background: c?.tBg, borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                          {T(c?.type)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>{"Sent "}{T(c?.sent)}</div>
                    </div>
                    <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#3a3c40" }}>{T(c?.aud)}</span>
                    <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.del)}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                      <span style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#0a0a0a", width: "40px" }}>{T(c?.openR)}</span>
                      <span style={{ flex: "1", maxWidth: "84px", height: "5px", background: "#eef1f4", borderRadius: "3px", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", width: c?.openR, background: c?.openRC, borderRadius: "3px" }} />
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                      <span style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#0a0a0a", width: "40px" }}>{T(c?.accR)}</span>
                      <span style={{ flex: "1", maxWidth: "84px", height: "5px", background: "#eef1f4", borderRadius: "3px", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", width: c?.accR, background: c?.accRC, borderRadius: "3px" }} />
                      </span>
                    </div>
                    <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.rep)}</span>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "7px" }}>
                        <span style={{ font: "600 16px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>{T(c?.np)}</span>
                        <span style={{ font: "600 11.5px 'IBM Plex Sans'", color: c?.npFg }}>{T(c?.npD)}</span>
                      </div>
                      {" "}
                      <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(c?.npS)}</div>
                    </div>
                  </div>
                ))}
                {" "}
                {v.eng?.campEmpty ? (
                  <>
                    <div style={{ padding: "28px 18px", textAlign: "center", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>
                      {T(v.eng?.campNote)}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            {" "}
            <div style={{ padding: "10px 18px", borderTop: "1px solid #f0f0f3", font: "400 11.5px/1.45 'IBM Plex Sans'", color: "#85888c", textWrap: "pretty" }}>
              New patients at 30 days: participants randomized at the campaign’s 17 sites in the 30 days after sending, compared with the 30 days before. Shown for context; Prime doesn’t credit them to the campaign.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
