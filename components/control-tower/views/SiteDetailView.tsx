// SiteDetailView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, S, T, type Vals } from "../dc";

export function SiteDetailView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "22px 28px 48px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "4px", border: "none", background: "transparent", color: "#66696e", padding: "0", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.bsBack} className="dc-hover-17">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All sites
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px 16px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px 12px", flexWrap: "wrap", minWidth: "0" }}>
                <h1 style={{ margin: "0", font: "600 24px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>{T(v.bs?.name)}</h1>
                <span style={{ font: "400 16px 'IBM Plex Sans'", color: "#c4c6c9" }}>|</span>
                <span style={{ font: "400 16px 'IBM Plex Sans'", color: "#66696e" }}>{T(v.bs?.loc)}</span>
              </div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 22px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "16px 24px" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", textTransform: "uppercase", color: "#85888c" }}>
                Study
              </div>
              {" "}
              <div style={{ font: "600 13.5px 'IBM Plex Mono'", color: "#0a0a0a", marginTop: "6px" }}>{T(v.bs?.studyId)}</div>
              {" "}
              <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>{T(v.bs?.studyName)}</div>
            </div>
            <div style={{ minWidth: "0" }}>
              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", textTransform: "uppercase", color: "#85888c" }}>
                Status
              </div>
              {" "}
              <div style={{ display: "flex", marginTop: "5px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 12px 'IBM Plex Sans'", color: v.bs?.perfFg, background: v.bs?.perfBg, borderRadius: "6px", padding: "2px 8px", whiteSpace: "nowrap" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: v.bs?.perfDot }} />
                  {T(v.bs?.perf)}
                </span>
              </div>
              {" "}
              <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginTop: "3px" }}>{T(v.bs?.siteStatus)}</div>
            </div>
            {L(v.bs?.people).map((pp, $index) => (
              <div key={$index} style={{ minWidth: "0" }}>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", textTransform: "uppercase", color: "#85888c" }}>
                  {T(pp?.role)}
                </div>
                {" "}
                {L(pp?.persons).map((pe, $index) => (
                  <div key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "5px", minWidth: "0" }}>
                    <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: "0" }}>
                      {T(pe?.name)}
                    </span>
                    {pe?.isPrimary ? (
                      <>
                        <span style={{ font: "400 13.5px 'IBM Plex Sans'", color: "#66696e", whiteSpace: "nowrap" }}>(Primary)</span>
                      </>
                    ) : null}
                    <span style={{ position: "relative", flex: "0 0 20px", display: "flex" }}>
                      <button style={{ width: "20px", height: "20px", border: `1px solid ${pe?.bd ?? ""}`, background: pe?.bg, borderRadius: "5px", color: "#004677", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "0" }} onClick={pe?.toggle} title="Show email" className="dc-hover-3">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
                          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {pe?.open ? (
                        <>
                          <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={pe?.close} />
                          <span style={{ position: "absolute", top: "26px", left: "-10px", zIndex: "41", display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", padding: "6px 6px 6px 12px", boxShadow: "0 8px 24px rgba(10,10,10,.14)", whiteSpace: "nowrap" }}>
                            <span style={{ font: "400 12px 'IBM Plex Mono'", color: "#0a0a0a", userSelect: "all" }}>{T(pe?.email)}</span>
                            <button style={{ display: "flex", alignItems: "center", gap: "5px", border: "none", background: pe?.copyBg, color: pe?.copyFg, borderRadius: "7px", padding: "5px 9px", font: "600 11.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={pe?.copy}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <rect x="8" y="8" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2" />
                              </svg>
                              {T(pe?.copyLabel)}
                            </button>
                          </span>
                        </>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 22px", borderBottom: "1px solid #e2e3e5", marginTop: "6px" }}>
            {L(v.bs?.secs).map((c, $index) => (
              <button key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", borderBottom: `2px solid ${c?.line ?? ""}`, background: "transparent", color: c?.fg, padding: "9px 0 8px", marginBottom: "-1px", font: `${c?.fw ?? ""} 13.5px 'IBM Plex Sans'`, cursor: "pointer", whiteSpace: "nowrap" }} onClick={c?.pick}>
                {T(c?.label)}
                {c?.hasN ? (
                  <>
                    <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#fff", background: c?.nBg, borderRadius: "20px", padding: "0 6px" }}>
                      {T(c?.n)}
                    </span>
                  </>
                ) : null}
              </button>
            ))}
          </div>
          {v.bs?.isOv ? (
            <>
              {v.bs?.hasBrief ? (
                <>
                  <div style={{ background: "#fff", border: "1px solid #cddae5", borderRadius: "14px", padding: "16px 20px 8px", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
                      <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                          <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Meeting brief</span>
                      <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(v.bs?.brief?.meet)}</span>
                      <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "20px", padding: "2px 9px" }}>
                        Prepared by Prime | saved to CTMS
                      </span>
                      <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "4px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bs?.archiveBrief} title="Archive this brief" className="dc-hover-1">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.9" />
                          <path d="M5 8.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5M10 12.5h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        </svg>
                        Archive
                      </button>
                    </div>
                    {" "}
                    {L(v.bs?.brief?.rows).map((r, $index) => (
                      <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(120px,170px) minmax(0,1fr)", gap: "4px 16px", padding: "10px 0", borderTop: r?.bt }}>
                        <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#3a3c40" }}>{T(r?.k)}</span>
                        <span style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "pre-line", textWrap: "pretty" }}>
                          {T(r?.v)}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "16px 20px 8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Prime highlights</span>
                </div>
                {" "}
                {L(v.bs?.hl).map((h, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "12px 10px", margin: "0 -10px", borderTop: h?.bt, borderRadius: "8px", cursor: "pointer" }} onClick={h?.go} className="dc-hover-4">
                    <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: h?.bg, color: h?.fg, display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px 'IBM Plex Sans'" }}>
                      {T(h?.icon)}
                    </span>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(h?.title)}</div>
                      {" "}
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "2px 10px", marginTop: "2px" }}>
                        <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: h?.dFg }}>{T(h?.detail)}</span>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(h?.sub)}</span>
                      </div>
                    </div>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "600 12px 'IBM Plex Sans'", color: "#003358", whiteSpace: "nowrap" }}>
                      {T(h?.goLabel)}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "16px 20px 8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5S9.6 5.9 12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Prime news</span>
                  <span style={{ marginLeft: "auto", font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>Checked today, 06:00</span>
                </div>
                {" "}
                {L(v.bs?.news).map((n, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "12px 0", borderTop: n?.bt }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: n?.bg, color: n?.fg, display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px 'IBM Plex Sans'" }}>
                      {T(n?.icon)}
                    </span>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(n?.title)}</div>
                      {" "}
                      <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#1c1d1f", marginTop: "2px" }}>{T(n?.detail)}</div>
                      {" "}
                      {n?.hasSub ? (
                        <>
                          <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginTop: "1px" }}>{T(n?.sub)}</div>
                        </>
                      ) : null}
                    </div>
                    <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                      {T(n?.src)}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : null}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {v.bs?.show?.rec ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Enrollment</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {L(v.bs?.src?.rec).map((sc, $index) => (
                        <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                          {T(sc)}
                        </span>
                      ))}
                    </span>
                  </div>
                  {" "}
                  {v.bs?.hasBlk ? (
                    <>
                      <div style={{ border: "1px solid #cddae5", background: "#fbfcfd", borderRadius: "12px", padding: "12px 16px 4px", marginBottom: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                          <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>Recruitment blockers</span>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>identified by Prime</span>
                        </div>
                        {" "}
                        {L(v.bs?.blk).map((b, $index) => (
                          <div key={$index} style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto", gap: "10px", alignItems: "start", padding: "10px 0", borderTop: b?.bt }}>
                            <span style={{ font: "600 10.5px 'IBM Plex Sans'", color: b?.fg, background: b?.bg, borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                              {T(b?.imp)}
                            </span>
                            <div style={{ minWidth: "0" }}>
                              <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(b?.title)}</div>
                              <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#55585d", marginTop: "2px", textWrap: "pretty" }}>
                                {T(b?.detail)}
                              </div>
                            </div>
                            <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                              {T(b?.src)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "12px" }}>
                    <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px" }}>
                      <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "6px" }}>
                        ENROLLMENT VS PLAN | LAST 6 MONTHS
                      </div>
                      {" "}
                      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ font: "600 18px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.bs?.r?.en)}</span>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{"of "}{T(v.bs?.r?.exp)}{" planned to date"}</span>
                        <span style={{ font: "500 12px 'IBM Plex Mono'", color: v.bs?.r?.vsColor }}>{T(v.bs?.r?.vsText)}</span>
                      </div>
                      {" "}
                      <svg style={{ width: "100%", height: "96px", display: "block", marginTop: "6px" }} viewBox="0 0 400 110">
                        <polyline points={v.bs?.r?.planPts} fill="none" stroke="#c4c6c9" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
                        <polyline points={v.bs?.r?.actualPts} fill="none" stroke="#004677" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {" "}
                      <div style={{ display: "flex", gap: "14px", marginTop: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "12px", height: "2px", background: "#004677" }} />
                          <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#66696e" }}>Actual</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "12px", height: "2px", background: "#c4c6c9" }} />
                          <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#66696e" }}>Plan</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
                        {L(v.bs?.r?.kpis).map((k, $index) => (
                          <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "10px 12px" }}>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                              <span style={{ font: "600 17px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(k?.v)}</span>
                              {k?.hasV2 ? (
                                <>
                                  <span style={{ font: "600 13px 'IBM Plex Mono'", color: "#bd3226" }}>{"/ "}{T(k?.v2)}</span>
                                </>
                              ) : null}
                            </div>
                            {" "}
                            <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>{T(k?.l)}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "11px 14px" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "4px" }}>
                          AGENT'S READ
                        </div>
                        {" "}
                        <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(v.bs?.r?.note)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {v.bs?.show?.up ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Upcoming</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {L(v.bs?.src?.up).map((sc, $index) => (
                        <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                          {T(sc)}
                        </span>
                      ))}
                    </span>
                  </div>
                  {" "}
                  <div style={{ background: "#f7fafc", border: "1px solid #e5ecf2", borderRadius: "10px", padding: "12px 14px" }}>
                    <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#003358" }}>{T(v.bs?.u?.cap)}</div>
                    {v.bs?.u?.empty ? (
                      <>
                        <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#3a3c40", marginTop: "4px" }}>
                          {T(v.bs?.u?.emptyText)}
                        </div>
                      </>
                    ) : null}
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "6px" }}>
                      {L(v.bs?.u?.req).map((q, $index) => (
                        <div key={$index} style={{ display: "flex", gap: "8px", alignItems: "baseline", font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#3a3c40" }}>
                          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8baac5", flex: "0 0 4px", transform: "translateY(-2px)" }} />
                          {T(q)}
                        </div>
                      ))}
                    </div>
                  </div>
                  {" "}
                  <div style={{ marginTop: "8px" }}>
                    {L(v.bs?.actv?.up).map((X, $index) => (
                      <div key={$index} style={S({ display: "grid", gridTemplateColumns: "52px minmax(0,1fr) auto 12px", gap: "12px", alignItems: "center", padding: "10px 8px", margin: "0 -8px", borderTop: X?.bt, borderRadius: "8px", cursor: X?.cur, "--dc-hover-18-0": X?.hov })} onClick={X?.open} className="dc-hover-18">
                        <div style={{ lineHeight: "1.15" }}>
                          <div style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.dow)}</div>
                          <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.date)}</div>
                        </div>
                        <div style={{ minWidth: "0" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                            <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: X?.tFg, background: X?.tBg, borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                              {T(X?.type)}
                            </span>
                            <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</span>
                          </div>
                          {" "}
                          <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#55585d", marginTop: "3px", textWrap: "pretty" }}>
                            {T(X?.s)}
                          </div>
                          {" "}
                          {X?.hasIns ? (
                            <>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                                {L(X?.ins).map((n, $index) => (
                                  <span key={$index} style={{ font: "500 11px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "5px", padding: "2px 8px" }}>
                                    {T(n)}
                                  </span>
                                ))}
                              </div>
                            </>
                          ) : null}
                        </div>
                        <span style={{ visibility: X?.stVis, display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11px 'IBM Plex Sans'", color: X?.fg, background: X?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: X?.dot }} />
                          {T(X?.st)}
                        </span>
                        <svg style={{ visibility: X?.chev }} width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a", marginBottom: "6px" }}>Past</div>
                  {" "}
                  {L(v.bs?.actv?.past).map((X, $index) => (
                    <div key={$index} style={S({ display: "grid", gridTemplateColumns: "52px minmax(0,1fr) auto 12px", gap: "12px", alignItems: "center", padding: "10px 8px", margin: "0 -8px", borderTop: X?.bt, borderRadius: "8px", cursor: X?.cur, "--dc-hover-18-0": X?.hov })} onClick={X?.open} className="dc-hover-18">
                      <div style={{ lineHeight: "1.15" }}>
                        <div style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.dow)}</div>
                        <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.date)}</div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                          <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: X?.tFg, background: X?.tBg, borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                            {T(X?.type)}
                          </span>
                          <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</span>
                        </div>
                        {" "}
                        <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#55585d", marginTop: "3px", textWrap: "pretty" }}>
                          {T(X?.s)}
                        </div>
                        {" "}
                        {X?.hasIns ? (
                          <>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                              {L(X?.ins).map((n, $index) => (
                                <span key={$index} style={{ font: "500 11px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "5px", padding: "2px 8px" }}>
                                  {T(n)}
                                </span>
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                      <span style={{ visibility: X?.stVis, display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11px 'IBM Plex Sans'", color: X?.fg, background: X?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: X?.dot }} />
                        {T(X?.st)}
                      </span>
                      <svg style={{ visibility: X?.chev }} width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            {v.bs?.show?.data ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Data</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {L(v.bs?.src?.data).map((sc, $index) => (
                        <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                          {T(sc)}
                        </span>
                      ))}
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: "1px", background: "#ecedee", border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden" }}>
                    {L(v.bs?.dt?.tiles).map((x, $index) => (
                      <div key={$index} style={{ background: "#fafbfc", padding: "10px 12px", minWidth: "0" }}>
                        <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(x?.l)}</div>
                        <div style={{ font: "600 17px 'IBM Plex Sans'", color: x?.fg, marginTop: "2px" }}>{T(x?.v)}</div>
                        <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(x?.s)}</div>
                      </div>
                    ))}
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", margin: "14px 0 2px" }}>Open queries</div>
                  {" "}
                  {L(v.bs?.dt?.queries).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", alignItems: "center", padding: "8px 0", borderTop: X?.bt }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</div>
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.m)}</div>
                      </div>
                      <span style={{ font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        {T(X?.p?.label)}
                      </span>
                    </div>
                  ))}
                  {" "}
                  {v.bs?.dt?.noQ ? (
                    <>
                      <div style={{ padding: "8px 0", font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>No open queries.</div>
                    </>
                  ) : null}
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", margin: "12px 0 2px" }}>Missing CRF pages</div>
                  {" "}
                  {L(v.bs?.dt?.pages).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", alignItems: "center", padding: "8px 0", borderTop: X?.bt }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</div>
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.m)}</div>
                      </div>
                      <span style={{ font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        {T(X?.p?.label)}
                      </span>
                    </div>
                  ))}
                  {" "}
                  {v.bs?.dt?.noP ? (
                    <>
                      <div style={{ padding: "8px 0", font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>All visit pages entered.</div>
                    </>
                  ) : null}
                </div>
              </>
            ) : null}
            {v.bs?.show?.fin ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Payments</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {L(v.bs?.src?.fin).map((sc, $index) => (
                        <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                          {T(sc)}
                        </span>
                      ))}
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: "1px", background: "#ecedee", border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden" }}>
                    {L(v.bs?.fi?.tiles).map((x, $index) => (
                      <div key={$index} style={{ background: "#fafbfc", padding: "10px 12px", minWidth: "0" }}>
                        <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(x?.l)}</div>
                        <div style={{ font: "600 17px 'IBM Plex Sans'", color: x?.fg, marginTop: "2px" }}>{T(x?.v)}</div>
                        <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(x?.s)}</div>
                      </div>
                    ))}
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", margin: "14px 0 2px" }}>Pending invoices</div>
                  {" "}
                  {L(v.bs?.fi?.invs).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto auto", gap: "12px", alignItems: "center", padding: "9px 0", borderTop: X?.bt }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 11.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(X?.id)}</div>
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.d)}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(X?.amt)}</div>
                        <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.age)}</div>
                      </div>
                      <span style={{ font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        {T(X?.p?.label)}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            {v.bs?.show?.doc ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Protocol</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                        eTMF
                      </span>
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto 12px", gap: "10px", alignItems: "center", padding: "9px 8px", margin: "0 -8px", borderRadius: "8px", cursor: "pointer" }} onClick={v.bs?.d?.openProto} title="Show version history" className="dc-hover-4">
                    <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{"Version "}{T(v.bs?.d?.pv)}</span>
                    <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bs?.d?.pvSub)}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {" "}
                  {v.bs?.d?.hasRc ? (
                    <>
                      <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", marginTop: "12px" }}>Re-consent</div>
                      {" "}
                      <div style={{ height: "6px", background: "#eef1f4", borderRadius: "4px", overflow: "hidden", marginTop: "6px" }}>
                        <div style={{ height: "100%", width: v.bs?.d?.rcPct, background: "#004677", borderRadius: "4px" }} />
                      </div>
                      {" "}
                      <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#55585d", marginTop: "5px" }}>{T(v.bs?.d?.rcLine)}</div>
                    </>
                  ) : null}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Required documents</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                        eTMF
                      </span>
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                        eIRB
                      </span>
                    </span>
                  </div>
                  {" "}
                  {L(v.bs?.d?.docs).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto 12px", gap: "10px", alignItems: "center", padding: "9px 8px", margin: "0 -8px", borderTop: X?.bt, borderRadius: "8px", cursor: "pointer" }} onClick={X?.open} title="Show version history" className="dc-hover-4">
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</div>
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.m)}</div>
                      </div>
                      <span style={{ font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        {T(X?.p?.label)}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Training</span>
                    <span style={{ marginLeft: "auto", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                        LMS
                      </span>
                    </span>
                  </div>
                  {" "}
                  {L(v.bs?.d?.train).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto 12px", gap: "10px", alignItems: "center", padding: "9px 8px", margin: "0 -8px", borderTop: X?.bt, borderRadius: "8px", cursor: "pointer" }} onClick={X?.open} title="Show version history" className="dc-hover-4">
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</div>
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.m)}</div>
                      </div>
                      <span style={{ font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        {T(X?.p?.label)}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
                {v.bs?.dd?.open ? (
                  <>
                    <div style={{ position: "fixed", inset: "0", zIndex: "44", background: "rgba(10,10,10,.12)" }} onClick={v.bs?.dd?.close} />
                    <aside style={{ position: "fixed", top: "0", right: "0", bottom: "0", width: "min(420px,100vw)", zIndex: "45", background: "#fff", borderLeft: "1px solid #eaebec", boxShadow: "-16px 0 40px rgba(10,10,10,.08)", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "18px 18px 14px", borderBottom: "1px solid #f0f0f3" }}>
                        <div style={{ flex: "1", minWidth: "0" }}>
                          <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>DOCUMENT</div>
                          {" "}
                          <div style={{ font: "600 17px/1.3 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a", marginTop: "4px", textWrap: "pretty" }}>
                            {T(v.bs?.dd?.title)}
                          </div>
                          {" "}
                          <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>{T(v.bs?.dd?.sub)}</div>
                        </div>
                        <button style={{ width: "30px", height: "30px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#3a3c40" }} onClick={v.bs?.dd?.close} title="Close" className="dc-hover-0">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                      <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "16px 18px 22px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #ecedee", borderRadius: "12px", padding: "12px 14px" }}>
                          <span style={{ width: "40px", height: "40px", flex: "0 0 40px", borderRadius: "10px", background: v.bs?.dd?.monoBg, color: v.bs?.dd?.monoFg, display: "flex", alignItems: "center", justifyContent: "center", font: "600 13px 'IBM Plex Mono'" }}>
                            {T(v.bs?.dd?.mono)}
                          </span>
                          <div style={{ minWidth: "0", flex: "1" }}>
                            <div style={{ font: "500 11.5px 'IBM Plex Sans'", color: "#85888c" }}>Stored in</div>
                            {" "}
                            <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.bs?.dd?.platName)}</div>
                            {" "}
                            <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bs?.dd?.synced)}</div>
                          </div>
                        </div>
                        <a style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", background: "#004677", color: "#fff", borderRadius: "9px", padding: "9px 14px", font: "600 12.5px 'IBM Plex Sans'", textDecoration: "none" }} href={v.bs?.dd?.url} target="_blank" rel="noopener noreferrer" className="dc-hover-2">
                          <span>{"Open original in "}{T(v.bs?.dd?.platShort)}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <div>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", marginBottom: "8px" }}>
                            <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>VERSION HISTORY</span>
                            <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bs?.dd?.n)}</span>
                          </div>
                          {" "}
                          {L(v.bs?.dd?.hist).map((v, $index) => (
                            <div key={$index} style={{ display: "grid", gridTemplateColumns: "14px minmax(0,1fr)", gap: "12px" }}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <span style={{ width: "10px", height: "10px", flex: "0 0 10px", borderRadius: "50%", background: v?.dotBg, border: `2px solid ${v?.dotBd ?? ""}`, boxSizing: "border-box", marginTop: "4px" }} />
                                <span style={{ flex: "1", width: "2px", background: "#ecedee", margin: "3px 0", visibility: v?.line }} />
                              </div>
                              <div style={{ minWidth: "0", paddingBottom: "14px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                  <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v?.v)}</span>
                                  <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: v?.tFg, background: v?.tBg, borderRadius: "5px", padding: "1px 6px" }}>
                                    {T(v?.tag)}
                                  </span>
                                  <span style={{ marginLeft: "auto", font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v?.d)}</span>
                                </div>
                                {" "}
                                <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#3a3c40", marginTop: "3px", textWrap: "pretty" }}>
                                  {T(v?.note)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </aside>
                  </>
                ) : null}
              </>
            ) : null}
            {v.bs?.show?.act ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Open</span>
                    <button style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px", border: "none", background: "transparent", padding: "2px 0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bs?.a?.goAll}>
                      Open in Actions
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  {" "}
                  {L(v.bs?.a?.cur).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "52px minmax(0,1fr) auto 12px", gap: "12px", alignItems: "center", padding: "10px 8px", margin: "0 -8px", borderTop: X?.bt, borderRadius: "8px", cursor: "pointer" }} onClick={X?.go} title="Open in Actions" className="dc-hover-4">
                      <div style={{ lineHeight: "1.15" }}>
                        <div style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.dow)}</div>
                        <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.date)}</div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                          <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: X?.tFg, background: X?.tBg, borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                            {T(X?.kind)}
                          </span>
                          <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</span>
                        </div>
                        {" "}
                        <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#55585d", marginTop: "3px" }}>{T(X?.m)}</div>
                        {" "}
                        {X?.hasOut ? (
                          <>
                            <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#3a3c40", marginTop: "3px", textWrap: "pretty" }}>
                              {"Outcome: "}{T(X?.out)}
                            </div>
                          </>
                        ) : null}
                      </div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: X?.p?.fg }} />
                        {T(X?.p?.label)}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                  {" "}
                  {v.bs?.a?.noCur ? (
                    <>
                      <div style={{ padding: "8px 0 2px", font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>
                        No open actions for this site.
                      </div>
                    </>
                  ) : null}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a", marginBottom: "6px" }}>Completed</div>
                  {" "}
                  {L(v.bs?.a?.past).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "52px minmax(0,1fr) auto 12px", gap: "12px", alignItems: "center", padding: "10px 8px", margin: "0 -8px", borderTop: X?.bt, borderRadius: "8px", cursor: "pointer" }} onClick={X?.go} title="Open in Actions" className="dc-hover-4">
                      <div style={{ lineHeight: "1.15" }}>
                        <div style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.dow)}</div>
                        <div style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.date)}</div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                          <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: X?.tFg, background: X?.tBg, borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                            {T(X?.kind)}
                          </span>
                          <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.t)}</span>
                        </div>
                        {" "}
                        <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#55585d", marginTop: "3px" }}>{T(X?.m)}</div>
                        {" "}
                        {X?.hasOut ? (
                          <>
                            <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#3a3c40", marginTop: "3px", textWrap: "pretty" }}>
                              {"Outcome: "}{T(X?.out)}
                            </div>
                          </>
                        ) : null}
                      </div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11px 'IBM Plex Sans'", color: X?.p?.fg, background: X?.p?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: X?.p?.fg }} />
                        {T(X?.p?.label)}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                  {" "}
                  {v.bs?.a?.noPast ? (
                    <>
                      <div style={{ padding: "8px 0 2px", font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>
                        No completed actions yet.
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            ) : null}
            {v.bs?.show?.notes ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Notes</span>
                    <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#fff", background: "#85888c", borderRadius: "20px", padding: "0 6px" }}>
                      {T(v.bs?.nt?.n)}
                    </span>
                    <span style={{ marginLeft: "auto", font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>Saved to CTMS</span>
                  </div>
                  {" "}
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
                    <textarea style={{ flex: "1", minWidth: "0", resize: "vertical", font: "400 13px/1.45 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", outline: "none" }} value={v.bs?.nt?.text ?? ""} onChange={v.bs?.nt?.onText} placeholder="Add a note about this site" rows={2} className="dc-focus-9" />
                    <button style={{ border: "none", background: v.bs?.nt?.addBg, color: "#fff", borderRadius: "8px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bs?.nt?.add}>
                      Add note
                    </button>
                  </div>
                </div>
                {L(v.bs?.nt?.items).map((X, $index) => (
                  <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "14px 18px", minWidth: "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: X?.tFg, background: X?.tBg, borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                        {T(X?.kind)}
                      </span>
                      <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.who)}</span>
                      <span style={{ marginLeft: "auto", font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.d)}</span>
                      {X?.notEditing ? (
                        <>
                          <button style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "7px", padding: "3px 9px", font: "500 11.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={X?.onEdit} title="Edit note" className="dc-hover-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="m15.5 4.5 4 4L9 19H5v-4L15.5 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                            Edit
                          </button>
                        </>
                      ) : null}
                    </div>
                    {" "}
                    {X?.notEditing ? (
                      <>
                        <div style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#1c1d1f", marginTop: "8px", whiteSpace: "pre-line", textWrap: "pretty" }}>
                          {T(X?.t)}
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {X?.editing ? (
                      <>
                        <textarea style={{ display: "block", width: "100%", boxSizing: "border-box", marginTop: "8px", resize: "vertical", font: "400 13px/1.55 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #004677", borderRadius: "8px", padding: "8px 10px", outline: "none" }} value={X?.editText ?? ""} onChange={X?.onEditText} rows={4} />
                        {" "}
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "8px" }}>
                          <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={X?.onCancel} className="dc-hover-19">
                            Cancel
                          </button>
                          <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "6px 14px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={X?.onSave} className="dc-hover-2">
                            Save
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                ))}
              </>
            ) : null}
            {v.bs?.show?.contacts ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Site team</span>
                    <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bs?.ct?.siteN)}</span>
                    <span style={{ marginLeft: "auto", font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                      CTMS
                    </span>
                  </div>
                  {" "}
                  {L(v.bs?.ct?.site).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "12px 0", borderTop: X?.bt }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Sans'" }}>
                        {T(X?.ini)}
                      </span>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "4px 8px", flexWrap: "wrap" }}>
                          <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.name)}</span>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(X?.role)}</span>
                          {X?.primary ? (
                            <>
                              <span style={{ font: "500 10px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "5px", padding: "1px 6px" }}>
                                Primary
                              </span>
                            </>
                          ) : null}
                        </div>
                        {" "}
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "2px 14px", marginTop: "3px" }}>
                          <span style={{ font: "400 12px 'IBM Plex Mono'", color: "#1c1d1f", userSelect: "all" }}>{T(X?.email)}</span>
                          <span style={{ font: "400 12px 'IBM Plex Mono'", color: "#1c1d1f", whiteSpace: "nowrap" }}>{T(X?.phone)}</span>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.pref)}</span>
                        </div>
                      </div>
                      <button style={{ display: "flex", alignItems: "center", gap: "5px", border: `1px solid ${X?.copyBd ?? ""}`, background: X?.copyBg, color: X?.copyFg, borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={X?.copy} className="dc-hover-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <rect x="8" y="8" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
                          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        {T(X?.copyLabel)}
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Study team</span>
                    <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>Sponsor and CRO contacts for this site</span>
                  </div>
                  {" "}
                  {L(v.bs?.ct?.study).map((X, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "12px 0", borderTop: X?.bt }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Sans'" }}>
                        {T(X?.ini)}
                      </span>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "4px 8px", flexWrap: "wrap" }}>
                          <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(X?.name)}</span>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(X?.role)}</span>
                          {X?.primary ? (
                            <>
                              <span style={{ font: "500 10px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "5px", padding: "1px 6px" }}>
                                Primary
                              </span>
                            </>
                          ) : null}
                        </div>
                        {" "}
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "2px 14px", marginTop: "3px" }}>
                          <span style={{ font: "400 12px 'IBM Plex Mono'", color: "#1c1d1f", userSelect: "all" }}>{T(X?.email)}</span>
                          <span style={{ font: "400 12px 'IBM Plex Mono'", color: "#1c1d1f", whiteSpace: "nowrap" }}>{T(X?.phone)}</span>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(X?.pref)}</span>
                        </div>
                      </div>
                      <button style={{ display: "flex", alignItems: "center", gap: "5px", border: `1px solid ${X?.copyBd ?? ""}`, background: X?.copyBg, color: X?.copyFg, borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={X?.copy} className="dc-hover-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <rect x="8" y="8" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
                          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        {T(X?.copyLabel)}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
