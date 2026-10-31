// StudySitesView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, S, T, type Vals } from "../dc";

export function StudySitesView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "22px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <div>
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
                  {L(v.sv?.pChips).map((c, $index) => (
                    <div key={$index} style={{ position: "relative", display: "flex" }}>
                      <button style={{ display: "flex", alignItems: "center", gap: "7px", maxWidth: "230px", border: `1px solid ${c?.bd ?? ""}`, borderRight: "none", background: c?.bg, color: c?.fg, borderRadius: "8px 0 0 8px", padding: "5px 8px 5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={c?.toggle}>
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{T(c?.label)}</span>
                        <svg style={{ flex: "0 0 10px", color: "#66696e" }} width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, borderRadius: "0 8px 8px 0", cursor: "pointer" }} onClick={c?.remove} title="Remove filter" className="dc-hover-10">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                        </svg>
                      </button>
                      {c?.open ? (
                        <>
                          <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={c?.close} />
                          <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "260px", maxHeight: "320px", overflowY: "auto", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
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
                                <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(s?.code)}</span>
                              </button>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </div>
                  ))}
                  {v.sv?.pCanAdd ? (
                    <>
                      <div style={{ position: "relative" }}>
                        <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px dashed #c9cbce", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.sv?.pToggleAdd} className="dc-hover-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                          </svg>
                          <span>Add filter</span>
                        </button>
                        {" "}
                        {v.sv?.pAddOpen ? (
                          <>
                            <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={v.sv?.pCloseAdd} />
                            {" "}
                            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "180px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
                              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", padding: "8px 12px 4px" }}>
                                FILTER BY
                              </div>
                              {" "}
                              {L(v.sv?.pAddOpts).map((o, $index) => (
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
                  {v.sv?.pfAny ? (
                    <>
                      <button style={{ border: "none", background: "transparent", color: "#003358", padding: "5px 6px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.sv?.pfClear} className="dc-hover-12">
                        Clear filters
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
              {" "}
              <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e", marginTop: "4px" }}>{T(v.sv?.sub)}</div>
            </div>
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "12px 18px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", minWidth: "0" }}>
                <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>TOTAL FUNNEL</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#004677" }} />
                  <span style={{ font: "500 11.5px 'IBM Plex Sans'", color: "#2b2d31" }}>{"Overall | "}{T(v.sv?.funnelOverall)}</span>
                </div>
                <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.sv?.funnelNote)}</div>
              </div>
            </div>
            {" "}
            <div style={{ borderTop: "1px solid #f0f0f3", padding: "30px 18px 16px", display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", columnGap: "10px" }}>
              <div style={{ position: "relative", height: "200px" }}>
                <div style={{ position: "absolute", right: "0", bottom: "100%", transform: "translateY(50%)", font: "400 10px 'IBM Plex Mono'", color: "#a3a6aa" }}>
                  100%
                </div>
                {" "}
                <div style={{ position: "absolute", right: "0", bottom: "75%", transform: "translateY(50%)", font: "400 10px 'IBM Plex Mono'", color: "#a3a6aa" }}>
                  75%
                </div>
                {" "}
                <div style={{ position: "absolute", right: "0", bottom: "50%", transform: "translateY(50%)", font: "400 10px 'IBM Plex Mono'", color: "#a3a6aa" }}>
                  50%
                </div>
                {" "}
                <div style={{ position: "absolute", right: "0", bottom: "25%", transform: "translateY(50%)", font: "400 10px 'IBM Plex Mono'", color: "#a3a6aa" }}>
                  25%
                </div>
                {" "}
                <div style={{ position: "absolute", right: "0", bottom: "0", transform: "translateY(50%)", font: "400 10px 'IBM Plex Mono'", color: "#a3a6aa" }}>
                  0%
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "12px" }}>
                {L(v.sv?.funnel).map((c, $index) => (
                  <div key={$index} style={{ minWidth: "0" }}>
                    <div style={{ position: "relative", height: "200px", borderBottom: "1px solid #e3e4e6", cursor: "pointer" }} onClick={c?.open} title="View patients" className="dc-hover-21">
                      <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: c?.ghostH, background: "#e4edf4", borderRadius: "3px 3px 0 0" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: c?.solidH, background: "#004677", borderRadius: "3px 3px 0 0" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "50%", bottom: c?.chipB, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px", background: "#fff", border: "1px solid #e3e4e6", borderRadius: "5px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", padding: "4px 8px", whiteSpace: "nowrap" }}>
                        <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.pct)}</span>
                        <span style={{ font: "400 10px 'IBM Plex Mono'", color: "#85888c" }}>{T(c?.count)}</span>
                      </div>
                    </div>
                    {" "}
                    <div style={{ font: "500 12.5px/1.3 'IBM Plex Sans'", color: "#0a0a0a", marginTop: "10px" }}>{T(c?.label)}</div>
                    {" "}
                    <div style={{ font: "400 11px/1.35 'IBM Plex Sans'", color: "#85888c", marginTop: "2px", textWrap: "pretty" }}>
                      {T(c?.sub)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {" "}
          {v.sv?.fp?.open ? (
            <>
              <div style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(10,10,10,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onClick={v.sv?.fp?.close}>
                <div style={{ width: "100%", maxWidth: "880px", maxHeight: "min(720px, calc(100vh - 48px))", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 64px rgba(10,10,10,0.25)", display: "flex", flexDirection: "column", overflow: "hidden" }} onClick={v.sv?.fp?.stop}>
                  <div style={{ flex: "0 0 auto", display: "flex", alignItems: "flex-start", gap: "10px", padding: "18px 18px 14px", borderBottom: "1px solid #f0f0f3" }}>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>{T(v.sv?.fp?.step)}</div>
                      {" "}
                      <div style={{ font: "600 17px/1.3 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a", marginTop: "4px" }}>
                        {T(v.sv?.fp?.title)}
                      </div>
                      {" "}
                      <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>{T(v.sv?.fp?.sub)}</div>
                    </div>
                    <button style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "8px", padding: "6px 11px", font: "500 12.5px 'IBM Plex Sans'", color: "#2b2d31", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.sv?.fp?.download} className="dc-hover-22">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Download CSV</span>
                    </button>
                    <button style={{ width: "30px", height: "30px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#3a3c40" }} onClick={v.sv?.fp?.close} title="Close" className="dc-hover-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <div style={{ flex: "1", minHeight: "0", overflow: "auto", padding: "0 18px 22px" }}>
                    <div style={{ minWidth: "620px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "124px minmax(0,1.5fr) 136px minmax(0,1fr) 92px", gap: "12px", padding: "12px 0 8px", borderBottom: "1px solid #ecedee", position: "sticky", top: "0", background: "#fff", font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>
                        <span>PATIENT</span>
                        <span>SITE</span>
                        <span>STATUS</span>
                        <span>COHORT</span>
                        <span>NEXT VISIT</span>
                      </div>
                      {" "}
                      {L(v.sv?.fp?.rows).map((p, $index) => (
                        <div key={$index} style={{ display: "grid", gridTemplateColumns: "124px minmax(0,1.5fr) 136px minmax(0,1fr) 92px", gap: "12px", alignItems: "center", padding: "9px 0", borderTop: p?.bt }}>
                          <span style={{ font: "500 12px 'IBM Plex Mono'", color: "#0a0a0a", whiteSpace: "nowrap" }}>{T(p?.id)}</span>
                          <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#2b2d31", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {T(p?.site)}
                          </span>
                          <span style={{ display: "flex" }}>
                            <span style={{ font: "500 11px 'IBM Plex Sans'", color: p?.sFg, background: p?.sBg, borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                              {T(p?.status)}
                            </span>
                          </span>
                          <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#2b2d31", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {T(p?.cohort)}
                          </span>
                          <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#2b2d31", whiteSpace: "nowrap" }}>{T(p?.next)}</span>
                        </div>
                      ))}
                      {" "}
                      {v.sv?.fp?.more ? (
                        <>
                          <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", padding: "12px 0 0", borderTop: "1px solid #f0f0f3" }}>
                            {T(v.sv?.fp?.moreNote)}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px 14px", marginTop: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
              <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>PATIENT FUNNEL BY SITE</div>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#004677" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Enrolled</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#8baac5" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Consented</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#eca49e" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Screen-failed</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", border: "1.5px solid #cfd1d4" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Expected</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
              {L(v.sv?.sites).map((b, $index) => (
                <div key={$index} style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }} onClick={b?.toggle} title={b?.tip}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: b?.dot, marginBottom: "6px" }} />
                  <div style={{ position: "relative", width: "100%", maxWidth: "26px", height: "132px" }}>
                    <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: b?.expectedPx, border: "1.5px solid #cfd1d4", borderRadius: "4px 4px 0 0" }} />
                    {" "}
                    <div style={{ position: "absolute", left: "2px", right: "2px", bottom: "0", display: "flex", flexDirection: "column-reverse", borderRadius: "3px 3px 0 0", overflow: "hidden" }}>
                      <div style={{ height: b?.enrolledPx, background: "#004677" }} />
                      <div style={{ height: b?.consentedPx, background: "#8baac5" }} />
                      <div style={{ height: b?.failPx, background: "#eca49e" }} />
                    </div>
                  </div>
                  <div style={{ marginTop: "6px", font: "500 9.5px 'IBM Plex Mono'", color: b?.codeFg }}>{T(b?.code)}</div>
                </div>
              ))}
            </div>
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "14px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 12px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", minWidth: "0" }}>
                <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>TRIAL COHORTS</div>
                <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.sv?.coh?.note)}</div>
              </div>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#004677" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Active</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#27a763" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Completed</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#eca49e" }} />
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>Dropped out</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: "660px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,1.5fr) minmax(110px,1fr) minmax(150px,1.6fr) 60px 82px 96px", gap: "14px", padding: "10px 18px", background: "#fafafa", borderTop: "1px solid #ecedee", borderBottom: "1px solid #ecedee" }}>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>COHORT</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>RANDOMIZED</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>STATUS MIX</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>ACTIVE</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>COMPLETED</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>DROPPED OUT</span>
                </div>
                {" "}
                {L(v.sv?.coh?.rows).map((c, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(150px,1.5fr) minmax(110px,1fr) minmax(150px,1.6fr) 60px 82px 96px", gap: "14px", alignItems: "center", padding: "13px 18px", borderBottom: "1px solid #f0f0f3", cursor: "pointer" }} onClick={c?.open} title="View patients" className="dc-hover-23">
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(c?.name)}
                      </div>
                      {" "}
                      <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(c?.arm)}
                      </div>
                    </div>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.n)}{" / "}{T(c?.target)}</div>
                      {" "}
                      <div style={{ height: "4px", background: "#eeeff0", borderRadius: "3px", overflow: "hidden", marginTop: "6px" }}>
                        <div style={{ height: "100%", borderRadius: "3px", background: "#004677", width: c?.pct }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", height: "8px", borderRadius: "4px", overflow: "hidden", background: "#eeeff0" }}>
                      <div style={{ width: c?.actW, background: "#004677" }} />
                      <div style={{ width: c?.compW, background: "#27a763" }} />
                      <div style={{ width: c?.dropW, background: "#eca49e" }} />
                    </div>
                    <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.act)}</span>
                    <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.comp)}</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "5px", whiteSpace: "nowrap" }}>
                      <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.drop)}</span>
                      <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(c?.dropPct)}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "14px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 12px" }}>
              <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>SITE COMPARISON</div>
              <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>
                {T(v.sv?.cmp?.note)}{" | % = conversion from previous step"}
              </div>
            </div>
            {" "}
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: "640px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(180px,1.8fr) repeat(5,minmax(84px,1fr))", gap: "12px", padding: "9px 18px", borderTop: "1px solid #f0f0f3", borderBottom: "1px solid #ecedee", background: "#fafafb" }}>
                  <button style={{ display: "flex", gap: "4px", border: "none", background: "transparent", padding: "0", cursor: "pointer", textAlign: "left", font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: v.sv?.cmp?.siteH?.fg }} onClick={v.sv?.cmp?.siteH?.sort}>
                    {T(v.sv?.cmp?.siteH?.label)}
                    <span>{T(v.sv?.cmp?.siteH?.arrow)}</span>
                  </button>
                  {L(v.sv?.cmp?.heads).map((hd, $index) => (
                    <button key={$index} style={{ display: "flex", justifyContent: "flex-end", gap: "4px", border: "none", background: "transparent", padding: "0", cursor: "pointer", font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: hd?.fg }} onClick={hd?.sort} className="dc-hover-24">
                      <span>{T(hd?.arrow)}</span>
                      {T(hd?.label)}
                    </button>
                  ))}
                </div>
                {" "}
                {L(v.sv?.cmp?.rows).map((r, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(180px,1.8fr) repeat(5,minmax(84px,1fr))", gap: "12px", alignItems: "center", padding: "8px 18px", borderTop: r?.bt }} className="dc-hover-13">
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                      <span style={{ width: "7px", height: "7px", flex: "0 0 7px", borderRadius: "50%", background: r?.dot }} />
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c", flex: "0 0 auto" }}>{T(r?.code)}</span>
                      <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#2b2d31", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(r?.name)}
                      </span>
                    </span>
                    {L(r?.vals).map((c, $index) => (
                      <span key={$index} style={S({ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px", margin: "-4px -6px", padding: "4px 6px", borderRadius: "6px", cursor: c?.cur, "--dc-hover-25-0": c?.hov })} onClick={c?.open} title={c?.tip} className="dc-hover-25">
                        <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.v)}</span>
                        <span style={{ font: "400 10.5px 'IBM Plex Mono'", color: "#a3a6aa", minHeight: "13px" }}>{T(c?.r)}</span>
                      </span>
                    ))}
                  </div>
                ))}
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "minmax(180px,1.8fr) repeat(5,minmax(84px,1fr))", gap: "12px", alignItems: "center", padding: "10px 18px", borderTop: "1px solid #dcdee0", background: "#fafafb" }}>
                  <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>Total</span>
                  {L(v.sv?.cmp?.total).map((c, $index) => (
                    <span key={$index} style={S({ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px", margin: "-4px -6px", padding: "4px 6px", borderRadius: "6px", cursor: c?.cur, "--dc-hover-25-0": c?.hov })} onClick={c?.open} title={c?.tip} className="dc-hover-25">
                      <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.v)}</span>
                      <span style={{ font: "400 10.5px 'IBM Plex Mono'", color: "#a3a6aa", minHeight: "13px" }}>{T(c?.r)}</span>
                    </span>
                  ))}
                </div>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "minmax(180px,1.8fr) repeat(5,minmax(84px,1fr))", gap: "12px", alignItems: "center", padding: "10px 18px", borderTop: "1px solid #f0f0f3", background: "#fafafb" }}>
                  <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>Average per site</span>
                  {L(v.sv?.cmp?.avg).map((c, $index) => (
                    <span key={$index} style={S({ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px", margin: "-4px -6px", padding: "4px 6px", borderRadius: "6px", cursor: c?.cur, "--dc-hover-25-0": c?.hov })} onClick={c?.open} title={c?.tip} className="dc-hover-25">
                      <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.v)}</span>
                      <span style={{ font: "400 10.5px 'IBM Plex Mono'", color: "#a3a6aa", minHeight: "13px" }}>{T(c?.r)}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
