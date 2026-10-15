// SitesView — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function SitesView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "22px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <button onClick={v.goStudies} style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", cursor: "pointer", padding: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", marginBottom: "12px" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Enrollment
          </button>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <div>
              <h1 style={{ margin: "0", font: "600 21px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>
                {T(v.sv?.id)}{" | Sites"}
              </h1>
              {" "}
              <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e", marginTop: "4px" }}>{T(v.sv?.sub)}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {v.sv?.hasWaiting ? (
                <>
                  <button onClick={v.sv?.openInbox} style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "7px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                    {T(v.sv?.waitingLabel)}
                  </button>
                </>
              ) : null}
              <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                {L(v.siteFilters).map((f, $index) => (
                  <button key={$index} onClick={f?.onClick} style={{ border: "none", borderRadius: "7px", padding: "5px 11px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12px 'IBM Plex Sans'", background: f?.bg, color: f?.fg, boxShadow: f?.shadow }}>
                    {T(f?.label)}{" "}
                    <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(f?.count)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {" "}
          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "18px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 12px" }}>
              <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>TOTAL FUNNEL</div>
              <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.sv?.funnelNote)}</div>
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", background: "#f0f0f3", borderTop: "1px solid #f0f0f3" }}>
              {L(v.sv?.funnel).map((c, $index) => (
                <div key={$index} style={{ minWidth: "0", background: "#fff", padding: "12px 18px 14px" }}>
                  <div style={{ font: "500 11.5px/1.3 'IBM Plex Sans'", color: "#66696e" }}>{T(c?.label)}</div>
                  {" "}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "4px", whiteSpace: "nowrap" }}>
                    <span style={{ font: "600 20px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>{T(c?.value)}</span>
                    {c?.hasSecond ? (
                      <>
                        <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#bd3226" }}>{"/ "}{T(c?.value2)}</span>
                      </>
                    ) : null}
                  </div>
                  {" "}
                  <div style={{ height: "4px", background: "#eeeff0", borderRadius: "3px", overflow: "hidden", marginTop: "8px" }}>
                    <div style={{ height: "100%", borderRadius: "3px", background: c?.color, width: c?.bar }} />
                  </div>
                  {" "}
                  <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "6px", whiteSpace: "nowrap" }}>{T(c?.sub)}</div>
                </div>
              ))}
            </div>
          </div>
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
                <div key={$index} onClick={b?.toggle} title={b?.tip} style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,2fr) minmax(56px,0.7fr) minmax(128px,1.2fr) minmax(84px,0.9fr) minmax(76px,0.8fr)", gap: "12px", padding: "10px 18px", background: "#fafafa", borderBottom: "1px solid #ecedee" }}>
              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>SITE</span>
              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>ENROLLED</span>
              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>VS EXPECTED</span>
              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>BOTTLENECK</span>
              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>STATUS</span>
            </div>
            {" "}
            {L(v.sv?.rows).map((s, $index) => (
              <div key={$index} style={{ borderBottom: "1px solid #f0f0f3", background: s?.rowBg }}>
                <div onClick={s?.toggle} style={{ display: "grid", gridTemplateColumns: "minmax(150px,2fr) minmax(56px,0.7fr) minmax(128px,1.2fr) minmax(84px,0.9fr) minmax(76px,0.8fr)", gap: "12px", padding: "13px 18px", alignItems: "center", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flex: "0 0 12px", transform: s?.chev }}>
                      <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", minWidth: "0" }}>
                        <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {T(s?.name)}
                        </span>
                        {s?.hasProposal ? (
                          <>
                            <span style={{ flex: "0 0 auto", font: "600 9.5px 'IBM Plex Mono'", letterSpacing: "0.04em", color: "#003358", background: "#e5ecf2", borderRadius: "20px", padding: "1px 7px" }}>
                              PROPOSAL
                            </span>
                          </>
                        ) : null}
                      </div>
                      {" "}
                      <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(s?.loc)}{" | last enrolled"}{" "}
                        <span style={{ color: s?.lastColor }}>{T(s?.lastText)}</span>
                      </div>
                    </div>
                  </div>
                  <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(s?.enrolled)}{" / "}{T(s?.expected)}</span>
                  <span style={{ font: "500 12px 'IBM Plex Mono'", color: s?.gapColor, whiteSpace: "nowrap" }}>{T(s?.gapText)}</span>
                  <span>
                    <span style={{ font: "500 11.5px 'IBM Plex Sans'", color: s?.bnFg, background: s?.bnBg, borderRadius: "6px", padding: "3px 8px", whiteSpace: "nowrap" }}>
                      {T(s?.bottleneck)}
                    </span>
                  </span>
                  <span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Sans'", color: s?.stFg, background: s?.stBg, borderRadius: "6px", padding: "3px 8px", whiteSpace: "nowrap" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: s?.dot }} />
                      {T(s?.status)}
                    </span>
                  </span>
                </div>
                {" "}
                {s?.open ? (
                  <>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px", padding: "2px 18px 18px 40px" }}>
                      <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "6px" }}>
                          ENROLLMENT VS PLAN | LAST 6 MONTHS
                        </div>
                        {" "}
                        <svg viewBox="0 0 400 110" style={{ width: "100%", height: "100px", display: "block" }}>
                          <polyline points={s?.planPts} fill="none" stroke="#c4c6c9" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
                          <polyline points={s?.actualPts} fill="none" stroke="#004677" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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
                        <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "12px 15px" }}>
                          <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "4px" }}>
                            AGENT'S READ
                          </div>
                          {" "}
                          <div style={{ font: "400 13px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(s?.diag)}</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "10px" }}>
                          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "10px 12px" }}>
                            <div style={{ font: "600 17px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(s?.backlog)}</div>
                            <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>Referral backlog</div>
                          </div>
                          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "10px 12px" }}>
                            <div style={{ font: "600 17px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(s?.inScreening)}</div>
                            <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>In screening</div>
                          </div>
                          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "10px 12px" }}>
                            <div style={{ font: "600 17px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(s?.failRate)}</div>
                            <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>Screen-fail</div>
                          </div>
                        </div>
                        {s?.hasProposal ? (
                          <>
                            <button onClick={s?.openProposal} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", border: "1px solid #cddae5", background: "#e5ecf2", borderRadius: "10px", padding: "10px 14px", cursor: "pointer", textAlign: "left" }}>
                              <span style={{ font: "500 12.5px/1.4 'IBM Plex Sans'", color: "#003358" }}>{T(s?.proposalTitle)}</span>
                              <span style={{ font: "600 12px 'IBM Plex Sans'", color: "#003358", whiteSpace: "nowrap" }}>
                                {T(s?.proposalCta)}
                              </span>
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
