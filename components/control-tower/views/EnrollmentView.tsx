// EnrollmentView — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function EnrollmentView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h1 style={{ margin: "0", font: "600 21px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>Enrollment</h1>
          {" "}
          <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px", marginTop: "14px", width: "fit-content" }}>
            {L(v.enr?.tabs).map((t, $index) => (
              <button key={$index} onClick={t?.onClick} style={{ display: "flex", alignItems: "center", gap: "7px", border: "none", borderRadius: "7px", padding: "6px 14px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12.5px 'IBM Plex Sans'", background: t?.bg, color: t?.fg, boxShadow: t?.shadow }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t?.dot }} />
                {T(t?.label)}
              </button>
            ))}
          </div>
          {" "}
          {v.enr?.isStudies ? (
            <>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "16px", overflow: "hidden" }}>
                <div onClick={v.brief?.toggle} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 20px", cursor: "pointer", flexWrap: "wrap" }} className="dc-hover-8">
                  <span style={{ width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M6.3 17.7l2.5-2.5M15.2 8.8l2.5-2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>Daily Brief</span>
                      <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#85888c" }}>{"from Prime | "}{T(v.brief?.when)}</span>
                    </div>
                    {" "}
                    <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#3a3c40", marginTop: "2px", textWrap: "pretty" }}>
                      {T(v.brief?.headline)}
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: v.brief?.chev, transition: "transform 0.15s" }}>
                    <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {" "}
                {v.brief?.open ? (
                  <>
                    <div style={{ borderTop: "1px solid #f0f0f3", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
                      <div style={{ padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>KEY INSIGHTS</div>
                        {L(v.brief?.insights).map((n, $index) => (
                          <div key={$index} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                            <span style={{ width: "7px", height: "7px", flex: "0 0 7px", borderRadius: "50%", background: n?.dot, marginTop: "6px" }} />
                            <div style={{ minWidth: "0", font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>
                              <span style={{ fontWeight: "600", color: "#0a0a0a" }}>{T(n?.study)}</span>
                              {" "}{T(n?.text)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid #f0f0f3", background: "#fbfbfc" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "6px" }}>
                          RECOMMENDED ACTIONS TO SPEED UP ENROLMENT
                        </div>
                        {L(v.brief?.actions).map((a, $index) => (
                          <div key={$index} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "7px 0", borderTop: a?.border }}>
                            <span style={{ font: "600 10.5px 'IBM Plex Mono'", borderRadius: "5px", padding: "2px 6px", flex: "0 0 auto", background: a?.priBg, color: a?.priFg }}>
                              {T(a?.pri)}
                            </span>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(a?.title)}</div>
                              {" "}
                              <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>{T(a?.study)}{" | "}{T(a?.impact)}</div>
                            </div>
                            {a?.isOpen ? (
                              <>
                                <button onClick={a?.open} style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto" }}>
                                  Review →
                                </button>
                              </>
                            ) : null}
                            {a?.isDone ? (
                              <>
                                <button onClick={a?.open} style={{ border: "none", background: "transparent", color: a?.doneFg, padding: "5px 2px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto" }}>
                                  {T(a?.doneLabel)}
                                </button>
                              </>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              {" "}
              <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e", marginTop: "18px" }}>
                5 active studies | sorted by enrollment risk | open a study for its summary
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px" }}>
                {L(v.studies).map((s, $index) => (
                  <div key={$index} style={{ background: "#fff", border: `1px solid ${s?.border ?? ""}`, borderRadius: "12px", overflow: "hidden" }}>
                    <div onClick={s?.toggle} style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "minmax(150px,1fr) minmax(0,2fr) auto 14px", gap: "20px", alignItems: "center", cursor: "pointer" }} className="dc-hover-8">
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", flex: "0 0 9px", background: s?.dot }} />
                        <div style={{ minWidth: "0" }}>
                          <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(s?.id)}</div>
                          {" "}
                          <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {T(s?.name)}{" | "}{T(s?.phase)}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2px 12px", font: "400 11.5px 'IBM Plex Sans'", color: "#66696e", marginBottom: "5px" }}>
                          <span>{T(s?.enrolled)}{" participants / "}{T(s?.target)}</span>
                          <span>
                            Estimated last participant{" "}
                            <span style={{ fontFamily: "'IBM Plex Mono'", color: s?.fcColor }}>{T(s?.fc)}</span>
                          </span>
                        </div>
                        {" "}
                        <div style={{ height: "6px", background: "#eeeff0", borderRadius: "4px", overflow: "hidden" }}>
                          <div style={{ height: "100%", borderRadius: "4px", background: s?.dot, width: s?.pct }} />
                        </div>
                      </div>
                      {s?.hasWaiting ? (
                        <>
                          <button onClick={s?.open} style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                            {T(s?.waitingLabel)}
                          </button>
                        </>
                      ) : null}
                      {s?.noWaiting ? (
                        <>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#a7a9ac", whiteSpace: "nowrap" }}>Nothing to review</span>
                        </>
                      ) : null}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: s?.chev, transition: "transform 0.15s" }}>
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {" "}
                    {s?.expanded ? (
                      <>
                        <div style={{ borderTop: "1px solid #f0f0f3", background: "#fbfbfc", padding: "16px 20px 18px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "12px" }}>
                            <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px" }}>
                              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "6px" }}>
                                ENROLLMENT VS PLAN | LAST 6 MONTHS
                              </div>
                              {" "}
                              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                                <span style={{ font: "600 18px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(s?.enrolled)}</span>
                                <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>
                                  {"of "}{T(s?.planNow)}{" planned to date"}
                                </span>
                                <span style={{ font: "500 12px 'IBM Plex Mono'", color: s?.vsColor }}>{T(s?.vsText)}</span>
                              </div>
                              {" "}
                              <svg viewBox="0 0 400 110" style={{ width: "100%", height: "96px", display: "block", marginTop: "6px" }}>
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
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
                                {L(s?.kpis).map((k, $index) => (
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
                                <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(s?.note)}</div>
                              </div>
                            </div>
                          </div>
                          {" "}
                          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px", display: "flex", flexDirection: "column", marginTop: "12px" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>ACTION ITEMS</span>
                              <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(s?.actCount)}</span>
                            </div>
                            {L(s?.actions).map((a, $index) => (
                              <div key={$index} onClick={a?.open} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "4px 16px", alignItems: "center", padding: "10px 0", borderTop: a?.border, cursor: "pointer" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <span style={{ font: "600 9.5px 'IBM Plex Mono'", color: a?.priFg, background: a?.priBg, borderRadius: "4px", padding: "1px 5px" }}>
                                      {T(a?.pri)}
                                    </span>
                                    <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: a?.stFg }}>{T(a?.status)}</span>
                                  </div>
                                  <span style={{ font: "500 12.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>
                                    {T(a?.title)}
                                  </span>
                                  <span style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>
                                    {T(a?.summary)}
                                  </span>
                                </div>
                                <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#003358", whiteSpace: "nowrap" }}>Open →</span>
                              </div>
                            ))}
                            {s?.noActions ? (
                              <>
                                <div style={{ font: "400 12px/1.5 'IBM Plex Sans'", color: "#85888c", padding: "8px 0" }}>
                                  No open actions. The agent will propose one if the trajectory slips.
                                </div>
                              </>
                            ) : null}
                          </div>
                          {" "}
                          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
                            <button onClick={s?.viewSites} style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "8px", padding: "7px 13px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
                              {"View "}{T(s?.siteCount)}{" sites"}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </>
          ) : null}
          {" "}
          {v.enr?.isAgent ? (
            <>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "18px 20px", marginTop: "14px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ width: "42px", height: "42px", flex: "0 0 42px", borderRadius: "11px", background: "#e5ecf2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                  </svg>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Enrollment agent</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "500 11px 'IBM Plex Sans'", color: "#197a48", background: "#e7f6ee", borderRadius: "20px", padding: "2px 9px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                      Active
                    </span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#55585d", marginTop: "3px", textWrap: "pretty" }}>
                    Proposes actions that speed up patient recruitment. Nothing is sent or changed without your approval.
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", gap: "4px 22px" }}>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>LAST SCAN</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>NEXT SCAN</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>OPEN PROPOSALS</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.enr?.lastScan)}</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>7:00 AM daily</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.openCount)}</span>
                </div>
                <button onClick={v.enr?.scan} style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {T(v.enr?.scanSpin)}{T(v.enr?.scanLabel)}
                </button>
                {v.enr?.hasScanNote ? (
                  <>
                    <div style={{ flex: "1 1 100%", font: "400 12px 'IBM Plex Sans'", color: "#197a48", background: "#f3faf6", borderRadius: "8px", padding: "8px 12px" }}>
                      {T(v.enr?.scanNote)}
                    </div>
                  </>
                ) : null}
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "12px", marginTop: "12px", alignItems: "start" }}>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>INSTRUCTIONS</span>
                    <button onClick={v.enr?.toggleEdit} style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#003358", padding: "2px 4px" }}>
                      {T(v.enr?.editLabel)}
                    </button>
                  </div>
                  {" "}
                  {v.enr?.notEditing ? (
                    <>
                      <div style={{ font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty" }}>
                        {T(v.enr?.instr)}
                      </div>
                    </>
                  ) : null}
                  {" "}
                  {v.enr?.editing ? (
                    <>
                      <textarea value={v.enr?.draft ?? ""} onChange={v.enr?.onDraft} rows={8} style={{ display: "block", width: "100%", border: "1px solid #dfe0e2", borderRadius: "9px", outline: "none", resize: "vertical", padding: "10px 12px", font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", background: "#fcfcfd" }} />
                      {" "}
                      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "8px" }}>
                        <button onClick={v.enr?.cancelEdit} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }}>
                          Cancel
                        </button>
                        <button onClick={v.enr?.saveEdit} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "6px 14px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }}>
                          Save
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", marginBottom: "10px" }}>
                    SCOPE
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", marginBottom: "6px" }}>Studies | 88 sites</div>
                  {" "}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {L(v.enr?.studies).map((st, $index) => (
                      <span key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#f2f2f4", borderRadius: "6px", padding: "3px 8px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: st?.dot }} />
                        {T(st?.id)}
                      </span>
                    ))}
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", margin: "14px 0 2px" }}>Data sources</div>
                  {" "}
                  {L(v.enr?.sources).map((d, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", alignItems: "center", padding: "8px 0", borderTop: d?.border }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>
                          {T(d?.name)}{" "}
                          <span style={{ fontWeight: "400", color: "#85888c" }}>{"| "}{T(d?.vendor)}</span>
                        </div>
                        {" "}
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>{T(d?.reads)}</div>
                      </div>
                      {d?.on ? (
                        <>
                          <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "500 11px 'IBM Plex Sans'", color: "#197a48" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                            Read-only
                          </span>
                        </>
                      ) : null}
                      {d?.off ? (
                        <>
                          <button onClick={v.goSystems} style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "7px", padding: "4px 10px", font: "500 11.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                            Connect
                          </button>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>TRIGGERS</span>
                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.enr?.rulesOn)}</span>
                  </div>
                  {" "}
                  {L(v.enr?.rules).map((r, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "10px 0", borderTop: r?.border }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px/1.4 'IBM Plex Sans'", color: r?.fg }}>{T(r?.when)}</div>
                        {" "}
                        <div style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c" }}>{"→ "}{T(r?.then)}</div>
                      </div>
                      <button onClick={r?.toggle} style={{ width: "34px", height: "20px", flex: "0 0 34px", borderRadius: "20px", border: "none", padding: "2px", cursor: "pointer", display: "flex", justifyContent: r?.justify, background: r?.track }}>
                        <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.2)" }} />
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", marginBottom: "4px" }}>
                    PERMISSIONS
                  </div>
                  {" "}
                  {L(v.enr?.perms).map((p, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "22px minmax(0,1fr)", gap: "10px", alignItems: "start", padding: "10px 0", borderTop: p?.border }}>
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px 'IBM Plex Sans'", color: p?.fg, background: p?.bg }}>
                        {T(p?.icon)}
                      </span>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(p?.label)}</div>
                        {" "}
                        <div style={{ font: "400 11.5px/1.45 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>{T(p?.detail)}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ gridColumn: "1/-1", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>
                      LEARNED FROM YOUR DECISIONS
                    </span>
                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>
                      Updated when you dismiss a proposal or add context
                    </span>
                  </div>
                  {" "}
                  {L(v.enr?.memory).map((m, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "10px 0", borderTop: m?.border }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "400 13px/1.45 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(m?.text)}</div>
                        {" "}
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", marginTop: "1px" }}>{T(m?.source)}</div>
                      </div>
                      <button onClick={m?.forget} style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#85888c", padding: "4px 6px" }}>
                        Forget
                      </button>
                    </div>
                  ))}
                  {" "}
                  {v.enr?.memEmpty ? (
                    <>
                      <div style={{ padding: "10px 0", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>Nothing learned yet.</div>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
