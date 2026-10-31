// RegulatoryView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function RegulatoryView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginTop: "14px" }}>
            <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px", width: "fit-content" }}>
              {L(v.reg?.tabs).map((t, $index) => (
                <button key={$index} style={{ display: "flex", alignItems: "center", gap: "7px", border: "none", borderRadius: "7px", padding: "6px 14px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12.5px 'IBM Plex Sans'", background: t?.bg, color: t?.fg, boxShadow: t?.shadow }} onClick={t?.onClick}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t?.dot }} />
                  {T(t?.label)}
                  {t?.hasCount ? (
                    <>
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(t?.count)}</span>
                    </>
                  ) : null}
                </button>
              ))}
            </div>
            {v.reg?.isAlerts ? (
              <>
                <div style={{ display: "flex", gap: "2px", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "10px", padding: "3px" }}>
                  {L(v.reg?.sources).map((f, $index) => (
                    <button key={$index} style={{ display: "flex", alignItems: "center", gap: "5px", border: "none", borderRadius: "7px", padding: "5px 11px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12px 'IBM Plex Sans'", background: f?.bg, color: f?.fg }} onClick={f?.onClick}>
                      {T(f?.label)}
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(f?.count)}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>
          {" "}
          {v.reg?.isAlerts ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginTop: "14px" }}>
                <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginRight: "2px" }}>Monitoring</span>
                {L(v.reg?.watch).map((w, $index) => (
                  <span key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "20px", padding: "3px 6px 3px 10px", font: "500 11.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>
                    {T(w?.name)}
                    <span style={{ font: "400 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(w?.domain)}</span>
                    {w?.custom ? (
                      <>
                        <button style={{ border: "none", background: "transparent", color: "#95989c", cursor: "pointer", font: "500 11px 'IBM Plex Sans'", padding: "0 3px" }} onClick={w?.remove}>
                          ✕
                        </button>
                      </>
                    ) : null}
                    {w?.fixed ? (
                      <>
                        <span style={{ width: "4px" }} />
                      </>
                    ) : null}
                  </span>
                ))}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
                {L(v.reg?.items).map((a, $index) => (
                  <div key={$index} style={{ background: "#fff", border: `1px solid ${a?.border ?? ""}`, borderRadius: "12px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ font: "600 10.5px 'IBM Plex Mono'", color: "#003358", background: "#e5ecf2", borderRadius: "5px", padding: "2px 7px" }}>
                        {T(a?.source)}
                      </span>
                      <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(a?.type)}{" | flagged "}{T(a?.date)}</span>
                      {a?.isNew ? (
                        <>
                          <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.04em", color: "#003358", background: "#e5ecf2", borderRadius: "20px", padding: "2px 8px" }}>
                            NEW
                          </span>
                        </>
                      ) : null}
                      <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Sans'", color: a?.impFg, background: a?.impBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                        {T(a?.impact)}{" impact"}
                      </span>
                    </div>
                    <div style={{ font: "600 15px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(a?.title)}</div>
                    <div style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>{T(a?.summary)}</div>
                    <div style={{ background: "#f6f7f8", borderRadius: "9px", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                        WHAT IT MEANS FOR YOUR STUDIES
                      </span>
                      <span style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(a?.prime)}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>Affects</span>
                      {L(a?.studies).map((s, $index) => (
                        <span key={$index} style={{ font: "500 11px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                          {T(s?.id)}
                        </span>
                      ))}
                      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                        {a?.canAct ? (
                          <>
                            <button style={{ border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={a?.act} className="dc-hover-3">
                              Create action
                            </button>
                          </>
                        ) : null}
                        {a?.acted ? (
                          <>
                            <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#197a48" }}>Action created ✓</span>
                          </>
                        ) : null}
                        <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={a?.toggleRev} className="dc-hover-3">
                          {T(a?.revLabel)}
                        </button>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
          {" "}
          {v.reg?.isAgent ? (
            <>
              {v.reg?.adding ? (
                <>
                  <div style={{ marginTop: "16px", background: "#fff", border: "1px solid #cddae5", borderRadius: "12px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>ADD A WEBSITE TO MONITOR</div>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <input style={{ flex: "1 1 200px", minWidth: "0", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "7px 10px", font: "400 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none" }} value={v.reg?.name ?? ""} onChange={v.reg?.onName} placeholder="Name, e.g. Health Canada" />
                      <input style={{ flex: "1 1 200px", minWidth: "0", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "7px 10px", font: "400 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none", flexBasis: "280px", fontFamily: "'IBM Plex Mono'" }} value={v.reg?.url ?? ""} onChange={v.reg?.onUrl} onKeyDown={v.reg?.onKey} placeholder="https://" />
                      <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "7px 13px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.reg?.add}>
                        Start monitoring
                      </button>
                      <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "7px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.reg?.toggleAdd}>
                        Cancel
                      </button>
                    </div>
                    {v.reg?.hasErr ? (
                      <>
                        <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#bd3226" }}>{T(v.reg?.err)}</div>
                      </>
                    ) : null}
                    <div style={{ font: "400 11.5px/1.45 'IBM Plex Sans'", color: "#85888c" }}>
                      Prime checks the page daily and raises an alert when a new guidance, notice or rule could affect your studies.
                    </div>
                  </div>
                </>
              ) : null}
              {" "}
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "18px 20px", marginTop: "14px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ width: "42px", height: "42px", flex: "0 0 42px", borderRadius: "11px", background: "#e5ecf2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z" stroke="#004677" strokeWidth="1.9" strokeLinejoin="round" />
                    <path d="M12 8v4.5M12 15.6v.1" stroke="#004677" strokeWidth="2.1" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Regulatory agent</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "500 11px 'IBM Plex Sans'", color: "#197a48", background: "#e7f6ee", borderRadius: "20px", padding: "2px 9px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                      Active
                    </span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#55585d", marginTop: "3px", textWrap: "pretty" }}>
                    Watches regulator and IRB websites, and explains what each new guidance or notice means for your studies. It never changes a protocol or a site document. Every action needs your approval.
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", gap: "4px 22px" }}>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>LAST RUN</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>NEXT RUN</span>
                  <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>NEW ALERTS</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.reg?.lastScan)}</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>5:30 AM daily</span>
                  <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.reg?.newCount)}</span>
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.reg?.scan}>
                  {T(v.reg?.scanSpin)}{T(v.reg?.scanLabel)}
                </button>
                {v.reg?.hasScanNote ? (
                  <>
                    <div style={{ flex: "1 1 100%", font: "400 12px 'IBM Plex Sans'", color: "#197a48", background: "#f3faf6", borderRadius: "8px", padding: "8px 12px" }}>
                      {T(v.reg?.scanNote)}
                    </div>
                  </>
                ) : null}
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "12px", marginTop: "12px", alignItems: "start" }}>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>INSTRUCTIONS</span>
                    <button style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#003358", padding: "2px 4px" }} onClick={v.reg?.toggleEdit}>
                      {T(v.reg?.editLabel)}
                    </button>
                  </div>
                  {" "}
                  {v.reg?.notEditing ? (
                    <>
                      <div style={{ font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty" }}>
                        {T(v.reg?.instr)}
                      </div>
                    </>
                  ) : null}
                  {" "}
                  {v.reg?.editing ? (
                    <>
                      <textarea style={{ display: "block", width: "100%", boxSizing: "border-box", border: "1px solid #dfe0e2", borderRadius: "9px", outline: "none", resize: "vertical", padding: "10px 12px", font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", background: "#fcfcfd" }} value={v.reg?.draft ?? ""} onChange={v.reg?.onDraft} rows={8} />
                      {" "}
                      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "8px" }}>
                        <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.reg?.cancelEdit}>
                          Cancel
                        </button>
                        <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "6px 14px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.reg?.saveEdit}>
                          Save
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>SCOPE</span>
                    <button style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#003358", padding: "2px 4px" }} onClick={v.reg?.toggleAdd}>
                      + Add website
                    </button>
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", marginBottom: "6px" }}>Studies</div>
                  {" "}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {L(v.reg?.studies).map((st, $index) => (
                      <span key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#f2f2f4", borderRadius: "6px", padding: "3px 8px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: st?.dot }} />
                        {T(st?.id)}
                      </span>
                    ))}
                  </div>
                  {" "}
                  <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e", margin: "14px 0 2px" }}>Websites monitored</div>
                  {" "}
                  {L(v.reg?.watch).map((w, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", alignItems: "center", padding: "8px 0", borderTop: w?.border }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>
                          {T(w?.name)}{" "}
                          <span style={{ fontWeight: "400", fontFamily: "'IBM Plex Mono'", fontSize: "11.5px", color: "#85888c" }}>
                            {"| "}{T(w?.domain)}
                          </span>
                        </div>
                        {" "}
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e" }}>{T(w?.reads)}</div>
                      </div>
                      {w?.fixed ? (
                        <>
                          <span style={{ display: "flex", alignItems: "center", gap: "5px", font: "500 11px 'IBM Plex Sans'", color: "#197a48" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                            Checked daily
                          </span>
                        </>
                      ) : null}
                      {w?.custom ? (
                        <>
                          <button style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#85888c", padding: "4px 6px" }} onClick={w?.remove}>
                            Remove
                          </button>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>TRIGGERS</span>
                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.reg?.rulesOn)}</span>
                  </div>
                  {" "}
                  {L(v.reg?.rules).map((r, $index) => (
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
                  {L(v.reg?.perms).map((p, $index) => (
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>
                      LEARNED FROM YOUR DECISIONS
                    </span>
                    <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>
                      Updated when you mark an alert reviewed or create an action
                    </span>
                  </div>
                  {" "}
                  {L(v.reg?.memory).map((m, $index) => (
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
                  {v.reg?.memEmpty ? (
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
