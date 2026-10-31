// BudgetView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function BudgetView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px", width: "fit-content" }}>
            {L(v.bud?.tabs).map((t, $index) => (
              <button key={$index} style={{ display: "flex", alignItems: "center", gap: "7px", border: "none", borderRadius: "7px", padding: "6px 14px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12.5px 'IBM Plex Sans'", background: t?.bg, color: t?.fg, boxShadow: t?.shadow }} onClick={t?.onClick}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t?.dot }} />
                {T(t?.label)}
              </button>
            ))}
          </div>
          {" "}
          {v.bud?.isInvoices ? (
            <>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", marginTop: "16px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 20px", cursor: "pointer", flexWrap: "wrap" }} onClick={v.bud?.toggleBrief} className="dc-hover-14">
                  <span style={{ width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="m9 11.5 2 2 4-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>Invoice Reconciliation Brief</span>
                      <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#85888c", whiteSpace: "nowrap" }}>
                        {"from Prime | "}{T(v.bud?.when)}
                      </span>
                    </div>
                    {" "}
                    <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#3a3c40", marginTop: "2px", textWrap: "pretty" }}>
                      {T(v.bud?.headline)}
                    </div>
                  </div>
                  <svg style={{ transform: v.bud?.chev, transition: "transform 0.15s" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {" "}
                {v.bud?.briefOpen ? (
                  <>
                    <div style={{ borderTop: "1px solid #f0f0f3", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
                      <div style={{ padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                          {"KEY FINDINGS | "}{T(v.bud?.linesLabel)}
                        </div>
                        {L(v.bud?.findings).map((f, $index) => (
                          <div key={$index} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                            <span style={{ width: "7px", height: "7px", flex: "0 0 7px", borderRadius: "50%", background: f?.dot, marginTop: "6px" }} />
                            <div style={{ minWidth: "0", font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>
                              <span style={{ fontWeight: "600", color: "#0a0a0a" }}>{T(f?.site)}</span>
                              {" "}{T(f?.text)}{" "}
                              <span style={{ fontWeight: "600", color: "#8a5a06", whiteSpace: "nowrap" }}>{T(f?.amt)}{" on hold"}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid #f0f0f3", background: "#fbfbfc" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "6px" }}>
                          RECOMMENDED ACTIONS TO GET SITES PAID
                        </div>
                        {L(v.bud?.actions).map((a, $index) => (
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
                                <button style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto" }} onClick={a?.open}>
                                  Review →
                                </button>
                              </>
                            ) : null}
                            {a?.isDone ? (
                              <>
                                <button style={{ border: "none", background: "transparent", color: a?.doneFg, padding: "5px 2px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto" }} onClick={a?.open}>
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
                {" "}
                {v.bud?.riskOpen ? (
                  <>
                    <div style={{ borderTop: "1px solid #f5d9d5", background: "#fdf6f5", padding: "14px 20px", display: "flex", gap: "12px", alignItems: "flex-start", flexWrap: "wrap" }}>
                      <span style={{ width: "22px", height: "22px", flex: "0 0 22px", borderRadius: "50%", background: "#fcecea", color: "#bd3226", display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px 'IBM Plex Sans'", marginTop: "1px" }}>
                        !
                      </span>
                      <div style={{ flex: "1 1 380px", minWidth: "0" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#bd3226" }}>RISK TO ENROLMENT</div>
                        {" "}
                        <div style={{ font: "400 12.5px/1.55 'IBM Plex Sans'", color: "#1c1d1f", marginTop: "3px", textWrap: "pretty" }}>
                          {T(v.bud?.riskText)}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignSelf: "center" }}>
                        <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bud?.viewRiskSites}>
                          View RA-2209 sites
                        </button>
                        <button style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bud?.openRelease}>
                          {T(v.bud?.releaseLabel)}
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
                {" "}
                {v.bud?.riskDone ? (
                  <>
                    <div style={{ borderTop: "1px solid #d7ede1", background: "#f3faf6", padding: "14px 20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ width: "22px", height: "22px", flex: "0 0 22px", borderRadius: "50%", background: "#e7f6ee", color: "#197a48", display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px 'IBM Plex Sans'", marginTop: "1px" }}>
                        ✓
                      </span>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#197a48" }}>
                          ENROLMENT RISK CLEARED
                        </div>
                        {" "}
                        <div style={{ font: "400 12.5px/1.55 'IBM Plex Sans'", color: "#1c1d1f", marginTop: "3px", textWrap: "pretty" }}>
                          {T(v.bud?.doneText)}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px 16px", flexWrap: "wrap", marginTop: "24px" }}>
                <div style={{ minWidth: "0" }}>
                  <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Invoice status by site</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                    {L(v.bud?.filters).map((fl, $index) => (
                      <button key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", borderRadius: "7px", padding: "5px 12px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12px 'IBM Plex Sans'", background: fl?.bg, color: fl?.fg, boxShadow: fl?.shadow }} onClick={fl?.onClick}>
                        {T(fl?.label)}
                        <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#85888c" }}>{T(fl?.count)}</span>
                      </button>
                    ))}
                  </div>
                  <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bu?.openUp} className="dc-hover-3">
                    + Upload invoice
                  </button>
                </div>
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "10px", marginTop: "12px" }}>
                {L(v.bud?.totals).map((k, $index) => (
                  <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "11px 14px" }}>
                    <div style={{ font: "600 17px 'IBM Plex Mono'", color: k?.fg }}>{T(k?.v)}</div>
                    {" "}
                    <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#3a3c40", marginTop: "3px" }}>{T(k?.l)}</div>
                    {" "}
                    <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "1px" }}>{T(k?.sub)}</div>
                  </div>
                ))}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                {L(v.bud?.sites).map((s, $index) => (
                  <div key={$index} style={{ background: "#fff", border: `1px solid ${s?.cardBorder ?? ""}`, borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1.6fr) 112px 14px", gap: "18px", alignItems: "center", cursor: "pointer" }} onClick={s?.toggle} className="dc-hover-14">
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", flex: "0 0 9px", background: s?.dot }} />
                        <div style={{ minWidth: "0" }}>
                          <div style={{ font: "600 13.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(s?.name)}</div>
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px 6px", marginTop: "1px" }}>
                            <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(s?.loc)}</span>
                            {s?.hasNew ? (
                              <>
                                <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "20px", padding: "1px 7px", whiteSpace: "nowrap" }}>
                                  New invoice
                                </span>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2px 12px", font: "400 11.5px 'IBM Plex Sans'", color: "#66696e", marginBottom: "5px" }}>
                          <span>{T(s?.dueText)}</span>
                          <span>
                            {T(s?.ageLabel)}{" "}
                            <span style={{ fontFamily: "'IBM Plex Mono'", color: s?.ageFg }}>{T(s?.age)}</span>
                          </span>
                        </div>
                        {" "}
                        <div style={{ position: "relative", height: "6px", background: "#eeeff0", borderRadius: "4px" }}>
                          <div style={{ height: "100%", borderRadius: "4px", background: s?.barC, width: s?.barPct }} />
                          {" "}
                          <span style={{ position: "absolute", left: "75%", top: "-3px", width: "2px", height: "12px", borderRadius: "1px", background: "#a7a9ac" }} title="90-day limit" />
                        </div>
                      </div>
                      {s?.hasReview ? (
                        <>
                          <button style={{ justifySelf: "end", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={s?.review}>
                            {T(s?.reviewLabel)}
                          </button>
                        </>
                      ) : null}
                      {s?.noReview ? (
                        <>
                          <span style={{ justifySelf: "end", textAlign: "right", font: "500 12px/1.35 'IBM Plex Sans'", color: s?.stFg }}>
                            {T(s?.status)}
                          </span>
                        </>
                      ) : null}
                      <svg style={{ transform: s?.chev, transition: "transform 0.15s" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {" "}
                    {s?.open ? (
                      <>
                        <div style={{ borderTop: "1px solid #f0f0f3", background: "#fbfbfc", padding: "16px 20px 18px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "12px", alignItems: "start" }}>
                          <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "4px" }}>
                              <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                                {"OPEN INVOICES | "}{T(s?.invCount)}
                              </span>
                              <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(s?.paidLabel)}</span>
                            </div>
                            {" "}
                            {L(s?.inv).map((v, $index) => (
                              <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "3px 12px", padding: "9px 0", borderTop: v?.border }}>
                                <div style={{ minWidth: "0" }}>
                                  <span style={{ font: "500 12px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v?.id)}</span>
                                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>
                                    {" "}{"| submitted "}{T(v?.date)}
                                  </span>
                                </div>
                                <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a", textAlign: "right" }}>{T(v?.amt)}</span>
                                <span style={{ gridColumn: "1/-1", font: "500 11.5px 'IBM Plex Sans'", color: v?.fg }}>{T(v?.status)}</span>
                                {v?.hasNote ? (
                                  <>
                                    <span style={{ gridColumn: "1/-1", font: "400 11.5px/1.45 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>
                                      {T(v?.note)}
                                    </span>
                                  </>
                                ) : null}
                              </div>
                            ))}
                            {" "}
                            {s?.noInv ? (
                              <>
                                <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", padding: "8px 0" }}>
                                  All invoices are paid.
                                </div>
                              </>
                            ) : null}
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px" }}>
                              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "6px" }}>
                                ENROLMENT AT THIS SITE
                              </div>
                              {" "}
                              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                                <span style={{ font: "600 18px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(s?.enrolled)}</span>
                                <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>
                                  {"of "}{T(s?.expected)}{" expected to date"}
                                </span>
                                <span style={{ font: "500 11px 'IBM Plex Sans'", color: s?.enrFg, background: s?.enrBg, borderRadius: "20px", padding: "1px 8px" }}>
                                  {T(s?.enrSt)}
                                </span>
                              </div>
                              {" "}
                              <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: s?.linkFg, marginTop: "6px", textWrap: "pretty" }}>
                                {T(s?.linkText)}
                              </div>
                              {" "}
                              <button style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "6px", border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={s?.viewEnroll}>
                                View in Enrollment
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </button>
                            </div>
                            <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "11px 14px" }}>
                              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "4px" }}>
                                AGENT'S READ
                              </div>
                              {" "}
                              <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(s?.note)}</div>
                            </div>
                            {s?.hasProps ? (
                              <>
                                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "11px 14px" }}>
                                  <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "2px" }}>
                                    PROPOSALS
                                  </div>
                                  {" "}
                                  {L(s?.props).map((p, $index) => (
                                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "2px 14px", alignItems: "center", padding: "8px 0", borderTop: p?.border, cursor: "pointer" }} onClick={p?.open}>
                                      <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                                        <span style={{ font: "500 12.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>
                                          {T(p?.title)}
                                        </span>
                                        <span style={{ font: "500 11px 'IBM Plex Sans'", color: p?.stFg }}>{T(p?.status)}</span>
                                      </div>
                                      <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#003358", whiteSpace: "nowrap" }}>Open →</span>
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                ))}
                {v.bud?.sitesEmpty ? (
                  <>
                    <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 20px", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>
                      No sites match this filter.
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
          {" "}
          {v.bud?.isAgent ? (
            <>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "18px 20px", marginTop: "14px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ width: "42px", height: "42px", flex: "0 0 42px", borderRadius: "11px", background: "#e5ecf2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" stroke="#004677" strokeWidth="1.9" strokeLinejoin="round" />
                    <path d="m9 11.5 2 2 4-4.5" stroke="#004677" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Budget agent</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "500 11px 'IBM Plex Sans'", color: "#197a48", background: "#e7f6ee", borderRadius: "20px", padding: "2px 9px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                      Active
                    </span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#55585d", marginTop: "3px", textWrap: "pretty" }}>
                    Reconciles site invoices against contracts and the EDC, and flags payment delays that could slow enrolment. Nothing is paid, held or sent without your approval.
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", gap: "4px 22px" }}>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>LAST RUN</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>NEXT RUN</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>OPEN PROPOSALS</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.bud?.lastScan)}</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>6:00 AM daily</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.bud?.openProps)}</span>
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bud?.scan}>
                  {T(v.bud?.scanSpin)}{T(v.bud?.scanLabel)}
                </button>
                {v.bud?.hasScanNote ? (
                  <>
                    <div style={{ flex: "1 1 100%", font: "400 12px 'IBM Plex Sans'", color: "#197a48", background: "#f3faf6", borderRadius: "8px", padding: "8px 12px" }}>
                      {T(v.bud?.scanNote)}
                    </div>
                  </>
                ) : null}
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "12px", marginTop: "12px", alignItems: "start" }}>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>INSTRUCTIONS</span>
                    <button style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#003358", padding: "2px 4px" }} onClick={v.bud?.toggleEdit}>
                      {T(v.bud?.editLabel)}
                    </button>
                  </div>
                  {" "}
                  {v.bud?.notEditing ? (
                    <>
                      <div style={{ font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty" }}>
                        {T(v.bud?.instr)}
                      </div>
                    </>
                  ) : null}
                  {" "}
                  {v.bud?.editing ? (
                    <>
                      <textarea style={{ display: "block", width: "100%", border: "1px solid #dfe0e2", borderRadius: "9px", outline: "none", resize: "vertical", padding: "10px 12px", font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", background: "#fcfcfd" }} value={v.bud?.draft ?? ""} onChange={v.bud?.onDraft} rows={8} />
                      {" "}
                      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "8px" }}>
                        <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.bud?.cancelEdit}>
                          Cancel
                        </button>
                        <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "6px 14px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.bud?.saveEdit}>
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
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", marginBottom: "6px" }}>
                    {"Studies | "}{T(v.bud?.siteCount)}{" sites with invoices"}
                  </div>
                  {" "}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {L(v.bud?.studies).map((st, $index) => (
                      <span key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#f2f2f4", borderRadius: "6px", padding: "3px 8px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: st?.dot }} />
                        {T(st?.id)}
                      </span>
                    ))}
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", margin: "14px 0 2px" }}>Data sources</div>
                  {" "}
                  {L(v.bud?.sources).map((d, $index) => (
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
                          <button style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "7px", padding: "4px 10px", font: "500 11.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.goSystems}>
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
                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bud?.rulesOn)}</span>
                  </div>
                  {" "}
                  {L(v.bud?.rules).map((r, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "10px 0", borderTop: r?.border }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px/1.4 'IBM Plex Sans'", color: r?.fg }}>{T(r?.when)}</div>
                        {" "}
                        <div style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c" }}>{"→ "}{T(r?.then)}</div>
                      </div>
                      <button style={{ width: "34px", height: "20px", flex: "0 0 34px", borderRadius: "20px", border: "none", padding: "2px", cursor: "pointer", display: "flex", justifyContent: r?.justify, background: r?.track }} onClick={r?.toggle}>
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
                  {L(v.bud?.perms).map((p, $index) => (
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
                  {L(v.bud?.memory).map((m, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "10px 0", borderTop: m?.border }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "400 13px/1.45 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(m?.text)}</div>
                        {" "}
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", marginTop: "1px" }}>{T(m?.source)}</div>
                      </div>
                      <button style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#85888c", padding: "4px 6px" }} onClick={m?.forget}>
                        Forget
                      </button>
                    </div>
                  ))}
                  {" "}
                  {v.bud?.memEmpty ? (
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
