// HomeView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function HomeView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", display: "flex", minHeight: "0" }}>
        <div style={{ flex: "1", minWidth: "0", overflowY: "auto", padding: "28px 28px 48px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ minWidth: "0" }}>
                <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#66696e" }}>{T(v.home?.date)}</div>
                {" "}
                <h1 style={{ margin: "4px 0 0", font: "600 28px 'IBM Plex Sans'", letterSpacing: "-0.025em", color: "#0a0a0a" }}>
                  {T(v.home?.greet)}
                </h1>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "9px 14px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.home?.goActivity} className="dc-hover-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="4.4" rx="1.3" stroke="currentColor" strokeWidth="1.9" />
                    <rect x="3" y="10.8" width="18" height="4.4" rx="1.3" stroke="currentColor" strokeWidth="1.9" />
                    <rect x="3" y="17.6" width="18" height="4.4" rx="1.3" stroke="currentColor" strokeWidth="1.9" />
                  </svg>
                  Audit Trail
                </button>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", display: "flex", flexWrap: "wrap", padding: "6px 0", boxShadow: "0 1px 3px rgba(10,10,10,.03)" }}>
              <div style={{ flex: v.home?.fStudy, minWidth: "0", padding: "18px 24px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", whiteSpace: "nowrap" }}>Enrollment by study</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap" }}>
                    <span style={{ width: "2px", height: "10px", background: "#3a3c40", borderRadius: "1px" }} />
                    Plan to date
                  </span>
                </div>
                {L(v.home?.studies).map((s, $index) => (
                  <div key={$index} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 10px", margin: "0 -10px", borderTop: s?.bt, borderRadius: "10px", cursor: "pointer" }} onClick={s?.open} className="dc-hover-4">
                    <div style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr) auto", gap: "10px", alignItems: "center", minWidth: "fit-content" }}>
                      <span style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#0a0a0a", whiteSpace: "nowrap" }}>{T(s?.id)}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", font: "500 11.5px 'IBM Plex Sans'", color: s?.stFg, background: s?.stBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: s?.stDot }} />
                        {T(s?.status)}
                      </span>
                      <span style={{ display: v.home?.gapDisp, font: "400 12px 'IBM Plex Sans'", color: "#66696e", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ fontWeight: "600", color: s?.gapFg }}>{T(s?.gap)}</span>
                        {" "}plan ({T(s?.plan)})
                      </span>
                      <span style={{ display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap", justifySelf: "end" }}>
                        <span style={{ font: "600 20px/1 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>{T(s?.en)}</span>
                        <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>{"/ "}{T(s?.tg)}</span>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ position: "relative", flex: "1 1 auto", minWidth: "0", height: "8px", background: "#eef1f4", borderRadius: "5px" }}>
                        <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: s?.pct, background: s?.bar, borderRadius: "5px" }} />
                        {" "}
                        <div style={{ position: "absolute", top: "-3px", bottom: "-3px", left: s?.planPct, width: "2px", background: "#3a3c40", borderRadius: "1px" }} />
                      </div>
                      <span style={{ flex: "0 0 auto", font: "400 12px 'IBM Plex Sans'", color: "#66696e", whiteSpace: "nowrap" }}>
                        {T(s?.end)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flex: v.home?.fSite, minWidth: "0", padding: "18px 24px 20px", borderLeft: "1px solid #f0f0f3", display: "flex", flexDirection: "column", gap: "6px", margin: "8px 0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", cursor: "help" }} title="Average participants enrolled per active site, DIA-2043 (CTMS, Oct 25)">
                  Enrollment per site
                </span>
                <span style={{ font: "600 32px/1.1 'IBM Plex Sans'", letterSpacing: "-0.025em", color: "#0a0a0a" }}>5.6</span>
                <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e" }}>
                  <span style={{ fontWeight: "600", color: "rgb(25, 122, 72)" }}>+1.4</span>
                  {" "}since June
                </span>
                <svg style={{ width: "100%", maxWidth: "200px", height: "54px", display: "block", marginTop: "6px" }} viewBox="0 0 160 54" preserveAspectRatio="none">
                  <polygon points="0,38 53,30 107,24 160,15 160,54 0,54" fill="#e5ecf2" />
                  <polyline points="0,38 53,30 107,24 160,15" fill="none" stroke="#004677" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <circle cx="157" cy="15" r="3" fill="#004677" />
                </svg>
                <button style={{ alignSelf: "flex-start", marginTop: "auto", border: "none", background: "transparent", padding: "6px 0 0", font: "600 12.5px 'IBM Plex Sans'", color: "#003358", cursor: "pointer", textAlign: "left" }} onClick={v.home?.goEng}>
                  {T(v.home?.engNext)}
                </button>
              </div>
              <div style={{ flex: v.home?.fAct, minWidth: "0", padding: "18px 24px 20px", borderLeft: "1px solid #f0f0f3", display: "flex", flexDirection: "column", gap: "6px", margin: "8px 0" }}>
                <div style={{ display: "flex", flexDirection: v.home?.actDir, gap: v.home?.actGap }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0", flex: "1 1 0" }}>
                    <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#66696e" }}>Actions waiting for you</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ font: "600 32px/1.1 'IBM Plex Sans'", letterSpacing: "-0.025em", color: "#0a0a0a" }}>
                        {T(v.home?.open)}
                      </span>
                      <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#bd3226" }}>{T(v.home?.p1)}{" high priority"}</span>
                    </span>
                  </div>
                  <div style={{ borderTop: v.home?.ciBt, borderLeft: v.home?.ciBl, padding: v.home?.ciPad, display: "flex", flexDirection: "column", gap: "4px", minWidth: "0", flex: "1 1 auto" }}>
                    <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#66696e" }}>Cost impact if approved</span>
                    <span style={{ font: "600 24px/1.15 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>{T(v.home?.ci)}</span>
                    <span style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c" }}>{T(v.home?.ciSub)}</span>
                  </div>
                </div>
                <button style={{ alignSelf: "flex-start", marginTop: "auto", border: "none", background: "transparent", padding: "6px 0 0", font: "600 12.5px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.home?.goInbox}>
                  Review actions →
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(380px,100%),1fr))", gap: "16px" }}>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>What Prime did in the last 7 days</span>
                  <button style={{ marginLeft: "auto", border: "none", background: "transparent", padding: "0", font: "500 13px 'IBM Plex Sans'", color: "#003358", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.home?.goActivity}>
                    See all 23
                  </button>
                </div>
                {" "}
                {L(v.home?.did).map((d, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "11px 8px", margin: "0 -8px", borderTop: d?.bt, borderRadius: "8px", cursor: "pointer" }} onClick={d?.open} className="dc-hover-4">
                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: d?.bg, color: d?.fg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {d?.isMail ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
                            <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : null}
                      {d?.isFlag ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M5 21V4M5 4h11l-2 4 2 4H5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : null}
                      {d?.isShield ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : null}
                    </span>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "500 13.5px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(d?.title)}
                      </div>
                      {" "}
                      <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: "1px" }}>
                        {T(d?.sub)}
                      </div>
                    </div>
                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#95989c", whiteSpace: "nowrap", alignSelf: "flex-start", marginTop: "2px" }}>
                      {T(d?.when)}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px 20px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="#0a0a0a" strokeWidth="1.8" />
                    <path d="M3.5 10h17M8 3v4M16 3v4" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Next site engagements</span>
                  <button style={{ marginLeft: "auto", border: "none", background: "transparent", padding: "0", font: "500 13px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.home?.goEngTab}>
                    Calendar
                  </button>
                </div>
                {" "}
                {L(v.home?.sends).map((n, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "40px 30px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "10px 10px", margin: "0 -10px", borderTop: n?.bt, borderRadius: "10px", background: n?.rowBg, cursor: "pointer" }} onClick={n?.open} className="dc-hover-5">
                    <div style={{ textAlign: "center", lineHeight: "1.05" }}>
                      <div style={{ font: "500 11px 'IBM Plex Sans'", color: "#66696e" }}>{T(n?.dow)}</div>
                      <div style={{ font: "600 19px 'IBM Plex Sans'", color: "#0a0a0a", letterSpacing: "-0.01em" }}>{T(n?.day)}</div>
                      <div style={{ font: "500 9.5px 'IBM Plex Mono'", letterSpacing: "0.04em", color: "#95989c" }}>{T(n?.mon)}</div>
                    </div>
                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
                        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(n?.title)}
                      </div>
                      {" "}
                      <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: "1px" }}>
                        {T(n?.sub)}
                      </div>
                    </div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", font: "500 12px 'IBM Plex Sans'", color: n?.fg, background: n?.bg, borderRadius: "20px", padding: "3px 10px", whiteSpace: "nowrap" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: n?.dot }} />
                      {T(n?.st)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {v.home?.panelOpen ? (
          <>
            <aside style={{ width: "clamp(300px,32vw,400px)", flex: "0 0 auto", minWidth: "0", background: "#fff", borderLeft: "1px solid #eaebec", overflowY: "auto", padding: "18px 18px 32px", boxShadow: "-8px 0 20px rgba(10,10,10,.03)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "9px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
                    </svg>
                  </span>
                  <div style={{ minWidth: "0", flex: "1", lineHeight: "1.2" }}>
                    <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Prime</div>
                    <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>Clinical Operations Agent</div>
                  </div>
                  <button style={{ width: "28px", height: "28px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#66696e" }} onClick={v.home?.togglePanel} title="Close" className="dc-hover-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                {" "}
                <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#66696e", marginTop: "10px", textWrap: "pretty" }}>
                  It can pull data from and act in your trial systems. Nothing runs until you approve the plan.
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #dfe0e2", borderRadius: "14px", padding: "0 8px 0 16px", height: "46px", marginTop: "14px", boxShadow: "0 1px 3px rgba(10,10,10,0.05)" }}>
                  <svg style={{ flex: "0 0 18px" }} width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                  </svg>
                  <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.prime?.query ?? ""} onChange={v.prime?.onQuery} onKeyDown={v.prime?.onKey} placeholder="Describe a task for Prime" />
                  <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "9px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.prime?.submit}>
                    Draft plan
                  </button>
                </div>
                {" "}
                {v.prime?.showList ? (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px" }}>
                      <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>SUGGESTED TASKS</div>
                      {L(v.prime?.sugg).map((g, $index) => (
                        <button key={$index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", textAlign: "left", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "12px", padding: "11px 14px", cursor: "pointer" }} onClick={g?.open} className="dc-hover-6">
                          <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(g?.title)}</span>
                          <span style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>{T(g?.desc)}</span>
                        </button>
                      ))}
                      {v.prime?.noMatch ? (
                        <>
                          <div style={{ border: "1px dashed #d7d8da", borderRadius: "12px", padding: "16px", textAlign: "center", font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#66696e" }}>
                            {T(v.prime?.noMatchText)}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
                {" "}
                {v.prime?.showRun ? (
                  <>
                    <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", cursor: "pointer", padding: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", margin: "18px 0 10px" }} onClick={v.prime?.back}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {T(v.run?.backLabel)}
                    </button>
                    {" "}
                    <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", overflow: "hidden" }}>
                      <div style={{ padding: "20px 22px 18px", borderBottom: "1px solid #f0f0f3" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                          {L(v.run?.systems).map((sy, $index) => (
                            <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                              {T(sy)}
                            </span>
                          ))}
                          <span style={{ font: "500 11px 'IBM Plex Sans'", color: v.run?.modeFg, background: v.run?.modeBg, borderRadius: "20px", padding: "2px 9px" }}>
                            {T(v.run?.mode)}
                          </span>
                        </div>
                        {" "}
                        <h2 style={{ margin: "10px 0 0", font: "600 20px/1.3 'IBM Plex Sans'", letterSpacing: "-0.015em", color: "#0a0a0a", textWrap: "pretty" }}>
                          {T(v.run?.title)}
                        </h2>
                        {" "}
                        <div style={{ font: "400 13px/1.5 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>
                          {T(v.run?.desc)}
                        </div>
                      </div>
                      {" "}
                      <div style={{ padding: "18px 22px 6px" }}>
                        <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", marginBottom: "6px" }}>
                          PLAN
                        </div>
                        {" "}
                        {v.run?.loading ? (
                          <>
                            <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "12px 0 16px", font: "400 13px 'IBM Plex Sans'", color: "#55585d" }}>
                              {T(v.run?.loadSpin)}Drafting a plan…
                            </div>
                          </>
                        ) : null}
                        {" "}
                        {L(v.run?.steps).map((st, $index) => (
                          <div key={$index} style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1fr) auto", gap: "12px", alignItems: "start", padding: "10px 0", borderTop: st?.border }}>
                            <div style={{ width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {st?.done ? (
                                <>
                                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#e7f6ee", color: "#197a48", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px 'IBM Plex Sans'" }}>
                                    ✓
                                  </span>
                                </>
                              ) : null}
                              {st?.running ? (
                                <>
                                  {T(st?.spin)}
                                </>
                              ) : null}
                              {st?.waiting ? (
                                <>
                                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#fdf3e0", border: "1.5px solid #e5a11a", boxSizing: "border-box" }} />
                                </>
                              ) : null}
                              {st?.pending ? (
                                <>
                                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", border: "1.5px solid #d7d8da", color: "#85888c", display: "flex", alignItems: "center", justifyContent: "center", font: "500 10px 'IBM Plex Mono'", boxSizing: "border-box" }}>
                                    {T(st?.n)}
                                  </span>
                                </>
                              ) : null}
                            </div>
                            <div style={{ minWidth: "0" }}>
                              <div style={{ font: "500 13.5px/1.4 'IBM Plex Sans'", color: st?.fg }}>{T(st?.l)}</div>
                              {" "}
                              <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#85888c", marginTop: "1px" }}>{T(st?.d)}</div>
                            </div>
                            {st?.write ? (
                              <>
                                <span style={{ font: "600 9.5px 'IBM Plex Mono'", letterSpacing: "0.05em", color: st?.badgeFg, background: st?.badgeBg, borderRadius: "20px", padding: "2px 8px", marginTop: "2px", whiteSpace: "nowrap" }}>
                                  {T(st?.badge)}
                                </span>
                              </>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      {" "}
                      {v.run?.hasPreview ? (
                        <>
                          <div style={{ padding: "6px 22px 4px" }}>
                            <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", margin: "8px 0 8px" }}>
                              {T(v.run?.out?.label)}
                            </div>
                            {" "}
                            <div style={{ font: "500 13.5px/1.5 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>
                              {T(v.run?.out?.summary)}
                            </div>
                            {" "}
                            {v.run?.out?.hasChart ? (
                              <>
                                <div style={{ border: "1px solid #ecedee", borderRadius: "10px", padding: "14px 16px 12px", marginTop: "12px" }}>
                                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px", flexWrap: "wrap", marginBottom: "12px" }}>
                                    <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.run?.out?.chart?.title)}</span>
                                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.run?.out?.chart?.unit)}</span>
                                  </div>
                                  {" "}
                                  {v.run?.out?.chart?.isBar ? (
                                    <>
                                      <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "190px", borderBottom: "1px solid #e2e3e5" }}>
                                        {L(v.run?.out?.chart?.bars).map((b, $index) => (
                                          <div key={$index} style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px" }}>
                                            <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#3a3c40" }}>{T(b?.value)}</span>
                                            <div style={{ width: "100%", maxWidth: "48px", height: b?.h, background: b?.color, borderRadius: "4px 4px 0 0" }} />
                                          </div>
                                        ))}
                                      </div>
                                      {" "}
                                      <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                                        {L(v.run?.out?.chart?.bars).map((b, $index) => (
                                          <span key={$index} style={{ flex: "1", minWidth: "0", textAlign: "center", font: "400 11px/1.3 'IBM Plex Sans'", color: "#66696e", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                            {T(b?.label)}
                                          </span>
                                        ))}
                                      </div>
                                    </>
                                  ) : null}
                                  {" "}
                                  {v.run?.out?.chart?.isLine ? (
                                    <>
                                      <svg style={{ width: "100%", height: "160px", display: "block", borderBottom: "1px solid #e2e3e5" }} viewBox="0 0 600 150" preserveAspectRatio="none">
                                        <polygon points={v.run?.out?.chart?.areaPts} fill="#e5ecf2" />
                                        <polyline points={v.run?.out?.chart?.linePts} fill="none" stroke="#004677" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                      </svg>
                                      {" "}
                                      <div style={{ display: "flex", justifyContent: "space-between", gap: "6px", marginTop: "6px" }}>
                                        {L(v.run?.out?.chart?.labels).map((lb, $index) => (
                                          <div key={$index} style={{ minWidth: "0", textAlign: "center" }}>
                                            <div style={{ font: "500 11px 'IBM Plex Mono'", color: "#3a3c40" }}>{T(lb?.v)}</div>
                                            {" "}
                                            <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#66696e", whiteSpace: "nowrap" }}>
                                              {T(lb?.l)}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </>
                                  ) : null}
                                </div>
                              </>
                            ) : null}
                            {" "}
                            {v.run?.out?.hasRows ? (
                              <>
                                <div style={{ border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden", marginTop: "10px" }}>
                                  <div style={{ display: "grid", gridTemplateColumns: v.run?.out?.gridCols, gap: "12px", padding: "8px 14px", background: "#fafafa", borderBottom: "1px solid #ecedee" }}>
                                    {L(v.run?.out?.cols).map((h, $index) => (
                                      <span key={$index} style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                                        {T(h)}
                                      </span>
                                    ))}
                                  </div>
                                  {" "}
                                  {L(v.run?.out?.rows).map((r, $index) => (
                                    <div key={$index} style={{ display: "grid", gridTemplateColumns: v.run?.out?.gridCols, gap: "12px", padding: "10px 14px", borderTop: r?.border, alignItems: "baseline" }}>
                                      {L(r?.cells).map((cl, $index) => (
                                        <span key={$index} style={{ font: "400 12.5px/1.4 'IBM Plex Sans'", fontWeight: cl?.fw, color: cl?.fg, minWidth: "0", overflowWrap: "anywhere" }}>
                                          {T(cl?.t)}
                                        </span>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : null}
                            {" "}
                            {v.run?.out?.hasBriefs ? (
                              <>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px" }}>
                                  {L(v.run?.out?.briefs).map((b, $index) => (
                                    <div key={$index} style={{ border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
                                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", padding: "9px 14px", background: "#fafafa", borderBottom: "1px solid #ecedee" }}>
                                        <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(b?.site)}</span>
                                        <span style={{ marginLeft: "auto", font: "500 10.5px 'IBM Plex Mono'", color: "#55585d" }}>
                                          {T(b?.path)}
                                        </span>
                                      </div>
                                      {" "}
                                      <div style={{ padding: "12px 14px", font: "400 12.5px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap" }}>
                                        {T(b?.text)}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : null}
                          </div>
                        </>
                      ) : null}
                      {" "}
                      <div style={{ padding: "16px 22px 18px", marginTop: "10px", borderTop: "1px solid #f0f0f3", background: "#fafafa" }}>
                        {v.run?.isPlan ? (
                          <>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                              <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.run?.approve}>
                                {"Approve & run"}
                              </button>
                              <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "10px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.prime?.back}>
                                Cancel
                              </button>
                              <span style={{ marginLeft: "auto", font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(v.run?.note)}</span>
                            </div>
                          </>
                        ) : null}
                        {" "}
                        {v.run?.isRunning ? (
                          <>
                            <div style={{ display: "flex", alignItems: "center", gap: "9px", font: "500 13px 'IBM Plex Sans'", color: "#3a3c40" }}>
                              {T(v.run?.runSpin)}{T(v.run?.runText)}
                            </div>
                          </>
                        ) : null}
                        {" "}
                        {v.run?.isConfirm ? (
                          <>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                              <span style={{ flex: "1 1 260px", font: "500 13px/1.45 'IBM Plex Sans'", color: "#8a5a06" }}>
                                {T(v.run?.confirmText)}
                              </span>
                              <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.run?.approveWrite}>
                                {T(v.run?.writeVerb)}
                              </button>
                              <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "10px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.prime?.back}>
                                Cancel
                              </button>
                            </div>
                          </>
                        ) : null}
                        {" "}
                        {v.run?.isDone ? (
                          <>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                              <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#e7f6ee", color: "#197a48", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px 'IBM Plex Sans'" }}>
                                ✓
                              </span>
                              <span style={{ flex: "1", font: "500 13px 'IBM Plex Sans'", color: "#197a48" }}>{T(v.run?.doneText)}</span>
                              {v.run?.isArchived ? (
                                <>
                                  <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.run?.rerun}>
                                    Run again
                                  </button>
                                </>
                              ) : null}
                              {v.run?.notArchived ? (
                                <>
                                  <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.goActivity}>
                                    View Audit Trail
                                  </button>
                                </>
                              ) : null}
                              <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.prime?.back}>
                                New task
                              </button>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                    {" "}
                    {v.run?.hasThread ? (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "16px" }}>
                          {L(v.run?.turns).map((t, $index) => (
                            <div key={$index} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div style={{ maxWidth: "80%", background: "#004677", color: "#fff", borderRadius: "12px 12px 4px 12px", padding: "9px 13px", font: "400 13.5px/1.45 'IBM Plex Sans'", textWrap: "pretty" }}>
                                  {T(t?.q)}
                                </div>
                              </div>
                              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "14px 16px" }}>
                                {t?.loading ? (
                                  <>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 13px 'IBM Plex Sans'", color: "#55585d" }}>
                                      {T(t?.spin)}Working on it…
                                    </div>
                                  </>
                                ) : null}
                                {" "}
                                {t?.hasLabel ? (
                                  <>
                                    <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", marginBottom: "6px" }}>
                                      {T(t?.label)}
                                    </div>
                                  </>
                                ) : null}
                                {" "}
                                <div style={{ font: "500 13.5px/1.5 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty", whiteSpace: "pre-wrap" }}>
                                  {T(t?.summary)}
                                </div>
                                {" "}
                                {t?.hasRows ? (
                                  <>
                                    <div style={{ border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden", marginTop: "10px" }}>
                                      <div style={{ display: "grid", gridTemplateColumns: t?.gridCols, gap: "12px", padding: "8px 14px", background: "#fafafa", borderBottom: "1px solid #ecedee" }}>
                                        {L(t?.cols).map((hd, $index) => (
                                          <span key={$index} style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                                            {T(hd)}
                                          </span>
                                        ))}
                                      </div>
                                      {" "}
                                      {L(t?.rows).map((r, $index) => (
                                        <div key={$index} style={{ display: "grid", gridTemplateColumns: t?.gridCols, gap: "12px", padding: "10px 14px", borderTop: r?.border, alignItems: "baseline" }}>
                                          {L(r?.cells).map((cl, $index) => (
                                            <span key={$index} style={{ font: "400 12.5px/1.4 'IBM Plex Sans'", fontWeight: cl?.fw, color: cl?.fg, minWidth: "0", overflowWrap: "anywhere" }}>
                                              {T(cl?.t)}
                                            </span>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </>
                                ) : null}
                                {" "}
                                {t?.hasBriefs ? (
                                  <>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px" }}>
                                      {L(t?.briefs).map((b, $index) => (
                                        <div key={$index} style={{ border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
                                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", padding: "9px 14px", background: "#fafafa", borderBottom: "1px solid #ecedee" }}>
                                            <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(b?.site)}</span>
                                            <span style={{ marginLeft: "auto", font: "500 10.5px 'IBM Plex Mono'", color: "#55585d" }}>
                                              {T(b?.path)}
                                            </span>
                                          </div>
                                          {" "}
                                          <div style={{ padding: "12px 14px", font: "400 12.5px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap" }}>
                                            {T(b?.text)}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </>
                                ) : null}
                                {" "}
                                {t?.needsApproval ? (
                                  <>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "14px", paddingTop: "12px", borderTop: "1px solid #f0f0f3" }}>
                                      <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "9px 16px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={t?.approve}>
                                        {"Approve & save to CTMS"}
                                      </button>
                                      <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "9px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={t?.discard}>
                                        Discard
                                      </button>
                                      <span style={{ marginLeft: "auto", font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>
                                        Nothing is stored until you approve
                                      </span>
                                    </div>
                                  </>
                                ) : null}
                                {" "}
                                {t?.hasStatus ? (
                                  <>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #f0f0f3", font: "500 12.5px 'IBM Plex Sans'", color: t?.statusFg }}>
                                      {T(t?.statusIcon)}{T(t?.statusText)}
                                    </div>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : null}
                    {" "}
                    {v.run?.canFollow ? (
                      <>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px", background: "#fff", border: "1px solid #dfe0e2", borderRadius: "12px", padding: "6px 6px 6px 14px", boxShadow: "0 1px 3px rgba(10,10,10,0.04)" }}>
                          <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.run?.followText ?? ""} onChange={v.run?.onFollow} onKeyDown={v.run?.onFollowKey} placeholder="Continue the conversation — ask a follow-up or refine the result" />
                          <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.run?.sendFollow}>
                            Send
                          </button>
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}
              </div>
            </aside>
          </>
        ) : null}
      </div>
    </>
  );
}
