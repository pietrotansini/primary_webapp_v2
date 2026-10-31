// EngagementsView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function EngagementsView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "22px 28px 48px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {v.eng?.nw?.open ? (
            <>
              <div style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(10,10,10,.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onClick={v.eng?.nw?.close}>
                <div style={{ width: "100%", maxWidth: "760px", maxHeight: "88vh", overflowY: "auto", background: "#fff", borderRadius: "16px", boxShadow: "0 20px 60px rgba(10,10,10,.22)", display: "flex", flexDirection: "column" }} onClick={v.eng?.nw?.stop}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "18px 22px 14px", borderBottom: "1px solid #f0f0f3", position: "sticky", top: "0", background: "#fff", zIndex: "1" }}>
                    {v.eng?.nw?.isEdit ? (
                      <>
                        <button style={{ border: "none", background: "transparent", padding: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", cursor: "pointer" }} onClick={v.eng?.nw?.back}>
                          ← Templates
                        </button>
                      </>
                    ) : null}
                    <span style={{ font: "600 16px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>New engagement</span>
                    <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                      {T(v.eng?.nw?.study)}
                    </span>
                    <button style={{ marginLeft: "auto", border: "none", background: "transparent", font: "400 20px 'IBM Plex Sans'", color: "#85888c", cursor: "pointer", lineHeight: "1" }} onClick={v.eng?.nw?.close}>
                      ×
                    </button>
                  </div>
                  {v.eng?.nw?.isPick ? (
                    <>
                      <div style={{ padding: "16px 22px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <span style={{ font: "400 13px 'IBM Plex Sans'", color: "#55585d" }}>
                          Start from a template. You can change, reorder and add sections next.
                        </span>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "10px" }}>
                          {L(v.eng?.nw?.tpls).map((t, $index) => (
                            <button key={$index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px", textAlign: "left", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "12px", padding: "13px 14px", cursor: "pointer", minWidth: "0" }} onClick={t?.pick} className="dc-hover-27">
                              <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(t?.name)}</span>
                              <span style={{ font: "400 12px/1.4 'IBM Plex Sans'", color: "#66696e" }}>{T(t?.desc)}</span>
                              <span style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "2px" }}>
                                {L(t?.chips).map((c, $index) => (
                                  <span key={$index} style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#55585d", background: "#f2f2f4", borderRadius: "5px", padding: "2px 6px" }}>
                                    {T(c?.l)}
                                  </span>
                                ))}
                              </span>
                              <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#85888c", marginTop: "2px" }}>{T(t?.count)}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}
                  {v.eng?.nw?.isEdit ? (
                    <>
                      <div style={{ padding: "16px 22px 18px", display: "flex", flexDirection: "column", gap: "14px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                          <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#3a3c40" }}>Month</span>
                          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                            {L(v.eng?.nw?.months).map((m, $index) => (
                              <button key={$index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px", minWidth: "120px", border: `1px solid ${m?.bd ?? ""}`, background: m?.bg, borderRadius: "9px", padding: "7px 12px", cursor: "pointer", textAlign: "left" }} onClick={m?.pick} className="dc-hover-3">
                                <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(m?.label)}</span>
                                <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(m?.sub)}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 170px", gap: "10px" }}>
                          <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#3a3c40" }}>Name</span>
                            <input style={{ border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a", outline: "none" }} value={v.eng?.nw?.name ?? ""} onChange={v.eng?.nw?.onName} placeholder="e.g. November recruitment push" />
                          </label>
                          <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#3a3c40" }}>Send date</span>
                            <input style={{ border: "1px solid #e2e3e5", borderRadius: "8px", padding: "7px 10px", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a", outline: "none" }} type="date" value={v.eng?.nw?.date ?? ""} min={v.eng?.nw?.dMin} max={v.eng?.nw?.dMax} onChange={v.eng?.nw?.onDate} />
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                          <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>
                            Sections{" "}
                            <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{"| "}{T(v.eng?.nw?.tplName)}</span>
                          </span>
                          <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>Drag to reorder | click to edit</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          {L(v.eng?.nw?.secs).map((s, $index) => (
                            <div key={$index} style={{ border: `1px solid ${s?.bd ?? ""}`, background: s?.bg, borderRadius: "10px" }} draggable="true" onDragStart={s?.dragStart} onDragOver={s?.dragOver} onDrop={s?.drop}>
                              <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "9px 10px 9px 8px", cursor: "pointer" }} onClick={s?.toggle}>
                                <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#b3b5b8", cursor: "grab", padding: "0 2px" }}>⋮⋮</span>
                                <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(s?.n)}</span>
                                <span style={{ flex: "1", minWidth: "0", font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {T(s?.label)}
                                </span>
                                <span style={{ font: "500 10.5px 'IBM Plex Sans'", color: s?.tagFg, background: s?.tagBg, borderRadius: "5px", padding: "1px 7px" }}>
                                  {T(s?.tag)}
                                </span>
                                <button style={{ border: "1px solid #e2e3e5", background: "#fff", borderRadius: "6px", width: "26px", height: "24px", font: "500 12px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer", opacity: s?.upOp }} onClick={s?.up} title="Move up">
                                  ↑
                                </button>
                                <button style={{ border: "1px solid #e2e3e5", background: "#fff", borderRadius: "6px", width: "26px", height: "24px", font: "500 12px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer", opacity: s?.downOp }} onClick={s?.down} title="Move down">
                                  ↓
                                </button>
                                <button style={{ border: "none", background: "transparent", padding: "0 4px", font: "400 16px 'IBM Plex Sans'", color: "#85888c", cursor: "pointer", lineHeight: "1" }} onClick={s?.remove} title="Remove">
                                  ×
                                </button>
                              </div>
                              {" "}
                              {s?.editing ? (
                                <>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "0 12px 12px 36px" }}>
                                    <input style={{ border: "1px solid #e2e3e5", borderRadius: "8px", padding: "7px 10px", font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a", outline: "none", background: "#fff" }} value={s?.label ?? ""} onChange={s?.onLabel} />
                                    <textarea style={{ border: "1px solid #cddae5", borderRadius: "8px", padding: "8px 10px", font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#0a0a0a", resize: "vertical", outline: "none", background: "#fff" }} value={s?.body ?? ""} onChange={s?.onBody} rows={3} />
                                  </div>
                                </>
                              ) : null}
                              {" "}
                              {s?.notEditing ? (
                                <>
                                  <div style={{ padding: "0 12px 10px 36px", font: "400 12px/1.45 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>
                                    {T(s?.body)}
                                  </div>
                                </>
                              ) : null}
                            </div>
                          ))}
                          {v.eng?.nw?.noSecs ? (
                            <>
                              <div style={{ border: "1px dashed #d7d8da", borderRadius: "10px", padding: "14px", textAlign: "center", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>
                                No sections yet. Add a block to start.
                              </div>
                            </>
                          ) : null}
                          <button style={{ border: "1px dashed #c9cbce", background: "#fff", borderRadius: "10px", padding: "9px", font: "600 12.5px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.eng?.nw?.toggleAdd} className="dc-hover-3">
                            + Add block
                          </button>
                          {v.eng?.nw?.addOpen ? (
                            <>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: "6px", background: "#f7f8f9", borderRadius: "10px", padding: "8px" }}>
                                {L(v.eng?.nw?.addOpts).map((o, $index) => (
                                  <button key={$index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "3px", textAlign: "left", border: "1px solid #ecedee", background: "#fff", borderRadius: "8px", padding: "8px 10px", cursor: "pointer" }} onClick={o?.add} className="dc-hover-3">
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px", width: "100%" }}>
                                      <span style={{ flex: "1", font: "600 12px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(o?.label)}</span>
                                      <span style={{ font: "500 10px 'IBM Plex Sans'", color: o?.tagFg, background: o?.tagBg, borderRadius: "5px", padding: "1px 6px" }}>
                                        {T(o?.tag)}
                                      </span>
                                    </span>
                                    <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(o?.desc)}</span>
                                  </button>
                                ))}
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 22px", borderTop: "1px solid #f0f0f3", position: "sticky", bottom: "0", background: "#fff" }}>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e", flex: "1", minWidth: "0" }}>
                          {T(v.eng?.nw?.secCount)}{" | Prime drafts the content, nothing is sent until you approve"}
                        </span>
                        <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.eng?.nw?.close}>
                          Cancel
                        </button>
                        <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "8px 16px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", opacity: v.eng?.nw?.createOp }} onClick={v.eng?.nw?.create}>
                          Add to calendar
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
          {" "}
          {v.eng?.isDashAny ? (
            <>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px 16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                    {L(v.eng?.studyTabs).map((t, $index) => (
                      <button key={$index} style={{ display: "flex", alignItems: "center", gap: "7px", border: "none", borderRadius: "7px", padding: "6px 12px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12px 'IBM Plex Mono'", background: t?.bg, color: t?.fg, boxShadow: t?.shadow }} onClick={t?.onClick}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t?.dot }} />
                        {T(t?.id)}
                      </button>
                    ))}
                  </div>
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.eng?.openNew}>
                  + New engagement
                </button>
              </div>
              {" "}
              <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>
                Prime automatically create your engagements calendar, from monthly newsletters to tailored site follow ups. Nothing is sent until you approve.
              </div>
            </>
          ) : null}
          {" "}
          {v.eng?.isDashOther ? (
            <>
              <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "28px 24px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
                  </svg>
                </span>
                <div style={{ font: "600 17px 'IBM Plex Sans'", color: "#0a0a0a" }}>{"No campaigns for "}{T(v.eng?.otherId)}{" yet"}</div>
                <div style={{ font: "400 13px/1.5 'IBM Plex Sans'", color: "#55585d", maxWidth: "560px", textWrap: "pretty" }}>
                  {T(v.eng?.otherLine)}
                </div>
                <button style={{ marginTop: "6px", border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "9px 16px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.eng?.enableOther}>
                  {T(v.eng?.otherCta)}
                </button>
              </div>
            </>
          ) : null}
          {" "}
          {v.eng?.isDash ? (
            <>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", marginTop: "14px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 12px" }}>
                  <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>Calendar</span>
                </div>
                {" "}
                <div style={{ overflowX: "auto", borderTop: "1px solid #f0f0f3" }} ref={v.eng?.calRef}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(136px,1fr))", minWidth: "952px" }}>
                    {L(v.eng?.cal).map((m, $index) => (
                      <div key={$index} style={{ minWidth: "0", borderLeft: m?.bl, background: m?.bg, padding: "10px 10px 14px", display: "flex", flexDirection: "column", gap: "8px", minHeight: "150px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                          <span style={{ font: "600 12px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(m?.label)}</span>
                          {m?.now ? (
                            <>
                              <span style={{ font: "600 11px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "20px", padding: "1px 8px" }}>
                                Now
                              </span>
                            </>
                          ) : null}
                        </div>
                        {L(m?.items).map((c, $index) => (
                          <div key={$index} style={{ border: `1px ${c?.bs ?? ""} ${c?.bd ?? ""}`, background: c?.bg, borderRadius: "8px", padding: "8px 9px", cursor: c?.cursor, display: "flex", flexDirection: "column", gap: "3px" }} onClick={c?.open} className="dc-hover-28">
                            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: c?.dot, flex: "0 0 6px" }} />
                              <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#75787d", whiteSpace: "nowrap" }}>{T(c?.date)}</span>
                            </span>
                            <span style={{ font: "600 12px/1.3 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(c?.title)}</span>
                            <span style={{ font: "400 11px/1.35 'IBM Plex Sans'", color: "#66696e" }}>{T(c?.meta)}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {" "}
              <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", display: "flex", flexWrap: "wrap", gap: "22px 32px", padding: "20px 22px" }}>
                <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>Upcoming campaign</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Sans'", color: v.eng?.camp?.stFg, background: v.eng?.camp?.stBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: v.eng?.camp?.stDot }} />
                      {T(v.eng?.camp?.status)}
                    </span>
                  </div>
                  <h2 style={{ margin: "0", font: "600 22px/1.3 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>
                    November 2026 | Monthly Site Newsletter
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "7px 18px", font: "400 12.5px/1.4 'IBM Plex Sans'" }}>
                    <span style={{ color: "#85888c" }}>Audience</span>
                    <span style={{ color: "#1c1d1f" }}>17 sites | 52 investigators and coordinators</span>
                    <span style={{ color: "#85888c" }}>Send</span>
                    <span style={{ color: "#1c1d1f" }}>{T(v.eng?.camp?.send)}</span>
                  </div>
                </div>
                <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>What Prime found</span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "10px" }}>
                    {L(v.eng?.tiles).map((t, $index) => (
                      <button key={$index} style={{ textAlign: "left", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "14px 16px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "4px" }} onClick={t?.open} className="dc-hover-29">
                        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: t?.dot }} />
                          <span style={{ font: "600 30px/1.1 'IBM Plex Sans'", letterSpacing: "-0.025em", color: "#0a0a0a" }}>{T(t?.n)}</span>
                        </span>
                        <span style={{ font: "400 12px/1.35 'IBM Plex Sans'", color: "#3a3c40" }}>{T(t?.label)}</span>
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "auto" }}>
                    <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "9px 16px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.eng?.openBuilder}>
                      {T(v.eng?.camp?.cta)}
                    </button>
                    <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.eng?.openPreview} className="dc-hover-3">
                      Preview a site’s version
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", marginTop: "14px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 12px" }}>
                  <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>
                    AI-detected opportunities
                  </span>
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>
                    Every insight links to its source. Where a site is behind, Prime asks the site instead of guessing why.
                  </span>
                </div>
                {" "}
                {L(v.eng?.opps).map((o, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr) auto 14px", gap: "12px", alignItems: "center", padding: "11px 18px", borderTop: "1px solid #f0f0f3", cursor: "pointer" }} onClick={o?.open} className="dc-hover-4">
                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: o?.typeBg, color: o?.typeFg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {o?.isFlag ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M5 21V4M5 4h11l-2 4 2 4H5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : null}
                      {o?.isQ ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M5 5h14v10H9l-4 4V5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : null}
                      {o?.isStar ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.3L12 16l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : null}
                    </span>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "600 13px/1.4 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>
                        {T(o?.site)}{" "}
                        <span style={{ fontWeight: "400", color: "#3a3c40" }}>{"| "}{T(o?.title)}</span>
                      </div>
                      {" "}
                      <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {T(o?.source)}
                      </div>
                    </div>
                    <span style={{ font: "500 12px 'IBM Plex Mono'", color: "#0a0a0a", whiteSpace: "nowrap" }}>{T(o?.metric)}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
                {" "}
                <button style={{ display: "block", width: "100%", border: "none", borderTop: "1px solid #f0f0f3", background: "#fafafa", padding: "10px 18px", textAlign: "left", font: "500 12.5px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.eng?.openBuilder}>
                  See all 12 insights in the campaign builder →
                </button>
              </div>
            </>
          ) : null}
          {" "}
          {v.eng?.isFlow ? (
            <>
              <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", cursor: "pointer", padding: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", marginBottom: "12px" }} onClick={v.eng?.goDash}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Campaigns
              </button>
              {" "}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <h1 style={{ margin: "0", font: "600 28px 'IBM Plex Sans'", letterSpacing: "-0.025em", color: "#0a0a0a" }}>
                      November 2026 newsletter
                    </h1>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Sans'", color: v.eng?.camp?.stFg, background: v.eng?.camp?.stBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: v.eng?.camp?.stDot }} />
                      {T(v.eng?.camp?.status)}
                    </span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e", marginTop: "4px" }}>
                    {"DIA-2043 | 17 sites | 52 contacts | "}{T(v.eng?.camp?.send)}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                  {L(v.eng?.steps).map((s, $index) => (
                    <button key={$index} style={{ display: "flex", alignItems: "center", gap: "7px", border: "none", borderRadius: "7px", padding: "6px 12px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12.5px 'IBM Plex Sans'", background: s?.bg, color: s?.fg, boxShadow: s?.shadow }} onClick={s?.onClick}>
                      <span style={{ font: "600 10.5px 'IBM Plex Mono'", color: s?.nFg }}>{T(s?.n)}</span>
                      {T(s?.label)}
                    </button>
                  ))}
                </div>
              </div>
              {" "}
              {v.eng?.approved ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "14px", background: "#e7f6ee", border: "1px solid #c5e8d4", borderRadius: "10px", padding: "10px 14px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#197a48", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "700 10px 'IBM Plex Sans'", flex: "0 0 18px" }}>
                      ✓
                    </span>
                    <span style={{ flex: "1", minWidth: "0", font: "500 12.5px/1.45 'IBM Plex Sans'", color: "#14532d" }}>
                      {T(v.eng?.camp?.drafted)}. Each site receives its own version on Nov 26 at 09:00 site local time. Editing is locked.
                    </span>
                    <button style={{ border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#14532d", cursor: "pointer", textDecoration: "underline" }} onClick={v.eng?.goAudit}>
                      View in Audit Trail
                    </button>
                  </div>
                </>
              ) : null}
            </>
          ) : null}
          {" "}
          {v.eng?.isBuild ? (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start", marginTop: "18px" }}>
                <div style={{ flex: "1 1 600px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", overflow: "hidden" }}>
                    <div style={{ background: "#004677", padding: "12px 16px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ font: "600 9.5px 'IBM Plex Mono'", letterSpacing: "0.08em", color: "#c2d2e1" }}>
                          MONTHLY SITE NEWSLETTER | DIA-2043
                        </div>
                        {" "}
                        <div style={{ font: "600 14px 'IBM Plex Sans'", color: "#fff", marginTop: "3px" }}>
                          November 2026 | one email per site
                        </div>
                      </div>
                      <button style={{ marginLeft: "auto", border: "1px solid rgba(255,255,255,.35)", background: "transparent", color: "#fff", borderRadius: "8px", padding: "5px 11px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.eng?.goPreview} className="dc-hover-30">
                        Preview a site's email →
                      </button>
                    </div>
                    {" "}
                    <div style={{ padding: "10px 12px 12px", background: "#f7f8f9" }}>
                      <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e", marginBottom: "8px" }}>{T(v.eng?.tplNote)}</div>
                      {" "}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: "6px" }}>
                        {L(v.eng?.tpl).map((b, $index) => (
                          <button key={$index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "5px", minWidth: "0", textAlign: "left", border: `1px solid ${b?.bd ?? ""}`, background: b?.bg, borderRadius: "8px", padding: "7px 9px", cursor: "pointer", opacity: b?.op }} onClick={b?.pick} className="dc-hover-3">
                            <span style={{ display: "flex", alignItems: "center", gap: "6px", width: "100%", minWidth: "0" }}>
                              <span style={{ font: "500 10px 'IBM Plex Mono'", color: "#85888c" }}>{T(b?.n)}</span>
                              <span style={{ flex: "1", minWidth: "0", font: "600 12px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {T(b?.label)}
                              </span>
                            </span>
                            <span style={{ font: "500 10px 'IBM Plex Sans'", color: b?.tagFg, background: b?.tagBg, borderRadius: "5px", padding: "1px 6px" }}>
                              {T(b?.tag)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {v.eng?.isMonthly ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                          {L(v.eng?.bTabs).map((v, $index) => (
                            <button key={$index} style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", borderRadius: "7px", padding: "6px 12px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12.5px 'IBM Plex Sans'", background: v?.bg, color: v?.fg, boxShadow: v?.shadow }} onClick={v?.onClick}>
                              {T(v?.label)}
                              <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(v?.count)}</span>
                            </button>
                          ))}
                        </div>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.eng?.bNote)}</span>
                      </div>
                    </>
                  ) : null}
                  {v.eng?.isPersonal ? (
                    <>
                      {L(v.eng?.groups).map((g, $index) => (
                        <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", overflow: "hidden" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", padding: "14px 18px 12px", background: "#fff", borderBottom: "1px solid #f0f0f3" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: g?.dot }} />
                            <span style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(g?.label)}</span>
                            <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#85888c" }}>{T(g?.count)}</span>
                            <span style={{ marginLeft: "auto", font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(g?.hint)}</span>
                          </div>
                          {" "}
                          {L(g?.items).map((i, $index) => (
                            <div key={$index} style={{ borderTop: i?.border, background: i?.rowBg }}>
                              <div style={{ display: "grid", gridTemplateColumns: "12px minmax(0,1fr) auto auto", gap: "12px", alignItems: "center", padding: "12px 18px", cursor: "pointer" }} onClick={i?.toggle}>
                                <svg style={{ transform: i?.chev }} width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div style={{ minWidth: "0" }}>
                                  <div style={{ font: "600 13px/1.4 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>
                                    {T(i?.siteLabel)}{" "}
                                    <span style={{ fontWeight: "400", color: "#3a3c40" }}>{"| "}{T(i?.title)}</span>
                                  </div>
                                  {" "}
                                  <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {T(i?.sub)}
                                  </div>
                                </div>
                                <span style={{ font: "500 12px 'IBM Plex Mono'", color: "#0a0a0a", whiteSpace: "nowrap" }}>{T(i?.metric)}</span>
                                <span style={{ font: "500 11px 'IBM Plex Sans'", color: i?.decFg, background: i?.decBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                                  {T(i?.decLabel)}
                                </span>
                              </div>
                              {" "}
                              {i?.open ? (
                                <>
                                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px", padding: "2px 18px 18px 42px" }}>
                                    <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                                      <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>
                                        What Prime found
                                      </span>
                                      <div style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>
                                        {T(i?.evidence)}
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        {L(i?.sources).map((src, $index) => (
                                          <div key={$index} style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                                            <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                                              {T(src?.sys)}
                                            </span>
                                            <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#55585d", minWidth: "0" }}>
                                              {T(src?.ref)}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                      {i?.hasGuard ? (
                                        <>
                                          <div style={{ display: "flex", gap: "8px", background: "#f6f6f8", borderRadius: "8px", padding: "9px 11px" }}>
                                            <svg style={{ flex: "0 0 14px", marginTop: "1px" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                                              <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z" stroke="#55585d" strokeWidth="1.8" strokeLinejoin="round" />
                                            </svg>
                                            <span style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>
                                              {T(i?.guard)}
                                            </span>
                                          </div>
                                        </>
                                      ) : null}
                                      <button style={{ alignSelf: "flex-start", border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={i?.toggleInspect}>
                                        {T(i?.inspectLabel)}
                                      </button>
                                      {i?.inspectOpen ? (
                                        <>
                                          <div style={{ border: "1px solid #ecedee", borderRadius: "10px", padding: "12px 14px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                                              <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(i?.data?.title)}</span>
                                              <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(i?.data?.unit)}</span>
                                            </div>
                                            {" "}
                                            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "92px", marginTop: "10px", borderBottom: "1px solid #e2e3e5" }}>
                                              {L(i?.data?.bars).map((b, $index) => (
                                                <div key={$index} style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "3px", height: "100%" }}>
                                                  <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", whiteSpace: "nowrap" }}>
                                                    {T(b?.v)}
                                                  </span>
                                                  <div style={{ width: "100%", maxWidth: "34px", height: b?.h, background: b?.c, borderRadius: "3px 3px 0 0" }} />
                                                </div>
                                              ))}
                                            </div>
                                            {" "}
                                            <div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
                                              {L(i?.data?.bars).map((b, $index) => (
                                                <span key={$index} style={{ flex: "1", minWidth: "0", textAlign: "center", font: "400 10.5px 'IBM Plex Sans'", color: "#66696e" }}>
                                                  {T(b?.l)}
                                                </span>
                                              ))}
                                            </div>
                                            {" "}
                                            <div style={{ marginTop: "10px" }}>
                                              {L(i?.data?.rows).map((r, $index) => (
                                                <div key={$index} style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr) minmax(0,1fr)", gap: "4px 10px", alignItems: "baseline", padding: "6px 0", borderTop: "1px solid #f0f0f3" }}>
                                                  <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                                                    {T(r?.a)}
                                                  </span>
                                                  <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#55585d" }}>{T(r?.b)}</span>
                                                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(r?.c)}</span>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </>
                                      ) : null}
                                    </div>
                                    <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                                        <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>
                                          {T(i?.rightLabel)}
                                        </span>
                                        <span style={{ font: "500 11px 'IBM Plex Sans'", color: i?.revFg, background: i?.revBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                                          {T(i?.review)}
                                        </span>
                                      </div>
                                      <div style={{ background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px", opacity: i?.op }}>
                                        <div style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(i?.secTitle)}</div>
                                        {i?.notEditing ? (
                                          <>
                                            <div style={{ font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty", textDecoration: i?.strike }}>
                                              {T(i?.body)}
                                            </div>
                                          </>
                                        ) : null}
                                        {i?.hasCta ? (
                                          <>
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                              <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>Call to action</span>
                                              <span style={{ font: "600 11.5px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "6px", padding: "3px 9px" }}>
                                                {T(i?.cta)}
                                              </span>
                                            </div>
                                          </>
                                        ) : null}
                                      </div>
                                      {i?.editing ? (
                                        <>
                                          <textarea style={{ width: "100%", boxSizing: "border-box", border: "1px solid #cddae5", borderRadius: "8px", padding: "9px 11px", font: "400 13px/1.55 'IBM Plex Sans'", color: "#0a0a0a", resize: "vertical", outline: "none" }} value={i?.body ?? ""} onChange={i?.onBody} rows={8} />
                                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#f6f6f8", border: "1px solid #e8e9eb", borderRadius: "10px", padding: "10px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "0 5px 0 10px", height: "34px" }}>
                                              <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                                                <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                                              </svg>
                                              <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.eng?.aiText ?? ""} onChange={v.eng?.onAiText} onKeyDown={i?.aiKey} placeholder="Ask Prime to rewrite, e.g. “make the ask more direct”" />
                                              <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "6px", padding: "5px 10px", font: "600 11.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={i?.aiRun}>
                                                {T(i?.aiLabel)}
                                              </button>
                                            </div>
                                            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                              {L(i?.chips).map((c, $index) => (
                                                <button key={$index} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "20px", padding: "3px 10px", font: "500 11.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={c?.run} className="dc-hover-1">
                                                  {T(c?.label)}
                                                </button>
                                              ))}
                                            </div>
                                            {i?.aiLoading ? (
                                              <>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 12px 'IBM Plex Sans'", color: "#55585d" }}>
                                                  {T(i?.aiSpin)}Prime is rewriting. Numbers, dates and quotes stay as they are.
                                                </div>
                                              </>
                                            ) : null}
                                          </div>
                                        </>
                                      ) : null}
                                      {i?.hasAiNote ? (
                                        <>
                                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", font: "400 12px 'IBM Plex Sans'", color: "#003358" }}>
                                            <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                                              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                                            </svg>
                                            <span>Rewritten by Prime: “{T(i?.aiNote)}”</span>
                                            <button style={{ border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer", textDecoration: "underline" }} onClick={i?.undo}>
                                              Undo
                                            </button>
                                          </div>
                                        </>
                                      ) : null}
                                      {i?.canAct ? (
                                        <>
                                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                                            {i?.showAccept ? (
                                              <>
                                                <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "9px 16px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={i?.accept}>
                                                  Accept
                                                </button>
                                              </>
                                            ) : null}
                                            <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }} onClick={i?.toggleEdit} className="dc-hover-3">
                                              <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                                                <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                                              </svg>
                                              {T(i?.editLabel)}
                                            </button>
                                            {i?.showRemove ? (
                                              <>
                                                <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#bd3226", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={i?.remove} className="dc-hover-31">
                                                  Remove from newsletter
                                                </button>
                                              </>
                                            ) : null}
                                            {i?.showRestore ? (
                                              <>
                                                <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={i?.restore} className="dc-hover-3">
                                                  Restore
                                                </button>
                                              </>
                                            ) : null}
                                          </div>
                                        </>
                                      ) : null}
                                      {i?.hasLockNote ? (
                                        <>
                                          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", font: "400 12px/1.45 'IBM Plex Sans'", color: "#66696e" }}>
                                            <span>{T(i?.lockNote)}</span>
                                            {i?.hasShareLink ? (
                                              <>
                                                <button style={{ border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={i?.viewShared}>
                                                  Open shared content →
                                                </button>
                                              </>
                                            ) : null}
                                          </div>
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                </>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))}
                    </>
                  ) : null}
                  {v.eng?.isShared ? (
                    <>
                      {L(v.eng?.shared).map((i, $index) => (
                        <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "15px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                            <span style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(i?.title)}</span>
                            {L(i?.sources).map((src, $index) => (
                              <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                                {T(src?.sys)}
                              </span>
                            ))}
                            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#55585d" }}>{T(i?.onLabel)}</span>
                              <button style={{ position: "relative", width: "32px", height: "18px", flex: "0 0 32px", border: "none", borderRadius: "20px", padding: "0", cursor: "pointer", background: i?.swBg }} onClick={i?.toggleOn}>
                                <span style={{ position: "absolute", top: "2px", left: i?.knob, width: "14px", height: "14px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }} />
                              </button>
                            </span>
                          </div>
                          <div style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c" }}>{T(i?.sourceLine)}</div>
                          {i?.notEditing ? (
                            <>
                              <div style={{ font: "400 13px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty", opacity: i?.op }}>
                                {T(i?.body)}
                              </div>
                            </>
                          ) : null}
                          {i?.editing ? (
                            <>
                              <textarea style={{ width: "100%", boxSizing: "border-box", border: "1px solid #cddae5", borderRadius: "8px", padding: "9px 11px", font: "400 13px/1.55 'IBM Plex Sans'", color: "#0a0a0a", resize: "vertical", outline: "none" }} value={i?.body ?? ""} onChange={i?.onBody} rows={8} />
                              <div style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#f6f6f8", border: "1px solid #e8e9eb", borderRadius: "10px", padding: "10px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "0 5px 0 10px", height: "34px" }}>
                                  <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                                  </svg>
                                  <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.eng?.aiText ?? ""} onChange={v.eng?.onAiText} onKeyDown={i?.aiKey} placeholder="Ask Prime to rewrite, e.g. “make the ask more direct”" />
                                  <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "6px", padding: "5px 10px", font: "600 11.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={i?.aiRun}>
                                    {T(i?.aiLabel)}
                                  </button>
                                </div>
                                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                  {L(i?.chips).map((c, $index) => (
                                    <button key={$index} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "20px", padding: "3px 10px", font: "500 11.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={c?.run} className="dc-hover-1">
                                      {T(c?.label)}
                                    </button>
                                  ))}
                                </div>
                                {i?.aiLoading ? (
                                  <>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 12px 'IBM Plex Sans'", color: "#55585d" }}>
                                      {T(i?.aiSpin)}Prime is rewriting. Numbers, dates and quotes stay as they are.
                                    </div>
                                  </>
                                ) : null}
                              </div>
                            </>
                          ) : null}
                          {i?.hasAiNote ? (
                            <>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", font: "400 12px 'IBM Plex Sans'", color: "#003358" }}>
                                <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                                  <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                                </svg>
                                <span>Rewritten by Prime: “{T(i?.aiNote)}”</span>
                                <button style={{ border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer", textDecoration: "underline" }} onClick={i?.undo}>
                                  Undo
                                </button>
                              </div>
                            </>
                          ) : null}
                          {i?.canEdit ? (
                            <>
                              <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                                <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }} onClick={i?.toggleEdit} className="dc-hover-3">
                                  <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                                  </svg>
                                  {T(i?.editLabel)}
                                </button>
                              </div>
                            </>
                          ) : null}
                        </div>
                      ))}
                    </>
                  ) : null}
                </div>
                <div style={{ flex: "0 1 300px", minWidth: "260px", display: "flex", flexDirection: "column", gap: "12px", position: "sticky", top: "0" }}>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "15px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>Draft summary</span>
                    {L(v.eng?.sum).map((r, $index) => (
                      <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "2px 10px", paddingTop: "8px", borderTop: "1px solid #f0f0f3" }}>
                        <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#1c1d1f" }}>{T(r?.l)}</span>
                        <span style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(r?.v)}</span>
                        <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", gridColumn: "1 / -1" }}>{T(r?.s)}</span>
                      </div>
                    ))}
                    {v.eng?.canAcceptRest ? (
                      <>
                        <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.eng?.acceptRest} className="dc-hover-3">
                          {T(v.eng?.acceptRestLabel)}
                        </button>
                      </>
                    ) : null}
                    <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "9px 14px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.eng?.goPreview}>
                      {"Preview & approve →"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {" "}
          {v.eng?.isPreview ? (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start", marginTop: "18px" }}>
                <div style={{ flex: "1 1 560px", minWidth: "0", background: "#f2f4f6", border: "1px solid #ecedee", borderRadius: "14px", padding: "18px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "100%", maxWidth: "640px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", padding: "11px 16px", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "4px 14px", font: "400 12.5px/1.45 'IBM Plex Sans'" }}>
                    <span style={{ color: "#85888c" }}>From</span>
                    <span style={{ color: "#1c1d1f" }}>{"DIA-2043 Study Team <dia2043-sites@primary-trials.com>"}</span>
                    <span style={{ color: "#85888c" }}>To</span>
                    <span style={{ color: "#1c1d1f" }}>{T(v.eng?.mail?.to)}</span>
                    <span style={{ color: "#85888c" }}>Subject</span>
                    <span style={{ color: "#0a0a0a", fontWeight: "600" }}>{T(v.eng?.mail?.subject)}</span>
                  </div>
                  <div style={{ width: "100%", maxWidth: "640px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 10px rgba(10,10,10,.05)" }}>
                    <div style={{ background: "#004677", padding: "22px 30px 22px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ font: "600 11px 'IBM Plex Mono'", letterSpacing: "0.08em", color: "#c2d2e1" }}>
                          DIA-2043 | SITE NEWSLETTER
                        </span>
                        <span style={{ font: "500 11px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#c2d2e1" }}>NOVEMBER 2026</span>
                      </div>
                      {" "}
                      <div style={{ font: "600 23px/1.25 'IBM Plex Sans'", letterSpacing: "-0.015em", color: "#fff", marginTop: "16px", textWrap: "pretty" }}>
                        {T(v.eng?.mail?.headline)}
                      </div>
                      {" "}
                      <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#c2d2e1", marginTop: "6px" }}>
                        {"Type 2 Diabetes | Phase 2 | "}{T(v.eng?.mail?.loc)}
                      </div>
                    </div>
                    {" "}
                    <div style={{ padding: "26px 30px 10px", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", font: "400 14px/1.6 'IBM Plex Sans'", color: "#1c1d1f" }}>
                        <span>{T(v.eng?.mail?.greeting)}</span>
                        <span style={{ textWrap: "pretty" }}>{T(v.eng?.mail?.intro)}</span>
                      </div>
                      {v.eng?.mail?.hasProgress ? (
                        <>
                          <div>
                            <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#004677" }}>STUDY PROGRESS</div>
                            {" "}
                            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                              <span style={{ font: "600 30px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>96</span>
                              <span style={{ font: "400 14px 'IBM Plex Sans'", color: "#55585d" }}>of 180 participants randomized</span>
                              <span style={{ marginLeft: "auto", font: "600 13px 'IBM Plex Mono'", color: "#004677" }}>53%</span>
                            </div>
                            {" "}
                            <div style={{ height: "8px", background: "#e5ecf2", borderRadius: "4px", overflow: "hidden", marginTop: "8px" }}>
                              <div style={{ width: "53%", height: "100%", background: "#004677", borderRadius: "4px" }} />
                            </div>
                            {" "}
                            <div style={{ font: "400 13.5px/1.6 'IBM Plex Sans'", color: "#3a3c40", whiteSpace: "pre-wrap", textWrap: "pretty", marginTop: "12px" }}>
                              {T(v.eng?.mail?.progressBody)}
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div>
                        <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#004677" }}>
                          {T(v.eng?.mail?.glanceLabel)}
                        </div>
                        {" "}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", background: "#ecedee", border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden", marginTop: "8px" }}>
                          {L(v.eng?.mail?.glance).map((g, $index) => (
                            <div key={$index} style={{ background: "#fafafa", padding: "12px 14px", minWidth: "0" }}>
                              <div style={{ font: "600 20px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>{T(g?.v)}</div>
                              <div style={{ font: "400 11.5px/1.35 'IBM Plex Sans'", color: "#66696e", marginTop: "2px" }}>{T(g?.l)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {L(v.eng?.mail?.personal).map((p, $index) => (
                        <div key={$index} style={{ position: "relative", border: `1.5px dashed ${v.eng?.mail?.hlBd ?? ""}`, background: v.eng?.mail?.hlBg, borderRadius: "10px", padding: "14px 16px", margin: "0 -16px" }}>
                          {v.eng?.mail?.hl ? (
                            <>
                              <span style={{ position: "absolute", top: "-8px", right: "12px", background: "#fff", borderRadius: "4px", padding: "0 6px", font: "600 9.5px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#004677" }}>
                                {"PERSONALIZED | "}{T(p?.src)}
                              </span>
                            </>
                          ) : null}
                          {" "}
                          <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: p?.kFg }}>{T(p?.kicker)}</div>
                          {" "}
                          <div style={{ font: "600 17px/1.35 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a", marginTop: "6px" }}>
                            {T(p?.title)}
                          </div>
                          {" "}
                          <div style={{ font: "400 14px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", textWrap: "pretty", marginTop: "6px" }}>
                            {T(p?.body)}
                          </div>
                          {" "}
                          {p?.hasCta ? (
                            <>
                              <div style={{ marginTop: "14px" }}>
                                <span style={{ display: "inline-block", background: "#004677", color: "#fff", borderRadius: "8px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'" }}>
                                  {T(p?.cta)}
                                </span>
                              </div>
                            </>
                          ) : null}
                        </div>
                      ))}
                      {L(v.eng?.mail?.shared).map((sh, $index) => (
                        <div key={$index} style={{ borderTop: "1px solid #ecedee", paddingTop: "18px" }}>
                          <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(sh?.title)}</div>
                          {" "}
                          {sh?.isList ? (
                            <>
                              <div style={{ marginTop: "8px" }}>
                                {L(sh?.items).map((it, $index) => (
                                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "64px minmax(0,1fr)", gap: "10px", padding: "7px 0", borderTop: it?.bt }}>
                                    <span style={{ font: "600 12px 'IBM Plex Mono'", color: "#004677" }}>{T(it?.d)}</span>
                                    <span style={{ font: "400 13.5px/1.45 'IBM Plex Sans'", color: "#1c1d1f" }}>{T(it?.t)}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : null}
                          {" "}
                          {sh?.isText ? (
                            <>
                              <div style={{ font: "400 13.5px/1.6 'IBM Plex Sans'", color: "#3a3c40", whiteSpace: "pre-wrap", textWrap: "pretty", marginTop: "6px" }}>
                                {T(sh?.body)}
                              </div>
                            </>
                          ) : null}
                        </div>
                      ))}
                      <div style={{ border: "1px solid #e2e3e5", borderRadius: "10px", padding: "14px 16px", display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", background: "#fafbfc" }}>
                        <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                          <div style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>Please confirm you’ve read this update</div>
                          <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "2px" }}>
                            One click. It tells the study team your site has seen this month’s information.
                          </div>
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", border: "1.5px solid #004677", color: "#004677", borderRadius: "8px", padding: "8px 16px", font: "600 13px 'IBM Plex Sans'", whiteSpace: "nowrap" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Acknowledge
                        </span>
                      </div>
                      <div style={{ font: "400 14px/1.6 'IBM Plex Sans'", color: "#1c1d1f", borderTop: "1px solid #ecedee", paddingTop: "18px", display: "flex", flexDirection: "column" }}>
                        <span>Thank you for your work on DIA-2043.</span>
                        <span style={{ marginTop: "8px", fontWeight: "600" }}>Marie Curious</span>
                        <span style={{ color: "#66696e", fontSize: "13px" }}>Clinical Operations, for the DIA-2043 study team</span>
                      </div>
                    </div>
                    {" "}
                    <div style={{ background: "#f6f6f8", padding: "16px 30px", marginTop: "16px", font: "400 11px/1.55 'IBM Plex Sans'", color: "#75787d", textWrap: "pretty" }}>
                      This update summarizes operational data from CTMS and EDC as of Oct 25, 2026. It does not change the protocol or any study procedure. For protocol or medical questions, contact your CRA or the study medical monitor.
                    </div>
                  </div>
                </div>
                <div style={{ flex: "0 1 300px", minWidth: "260px", display: "flex", flexDirection: "column", gap: "12px", position: "sticky", top: "0" }}>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "15px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>Preview as</span>
                    <select style={{ width: "100%", boxSizing: "border-box", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none", cursor: "pointer" }} value={v.eng?.site ?? ""} onChange={v.eng?.onSite}>
                      {L(v.eng?.siteOpts).map((o, $index) => (
                        <option key={$index} value={o?.code ?? ""}>{T(o?.label)}</option>
                      ))}
                    </select>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #f0f0f3", paddingTop: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                        <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#3a3c40" }}>{T(v.eng?.apCount)}</span>
                        <span style={{ font: "600 12px 'IBM Plex Sans'", color: v.eng?.apLeftFg }}>{T(v.eng?.apLeft)}</span>
                      </div>
                      <div style={{ height: "4px", background: "#eeeff0", borderRadius: "3px", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "#004677", borderRadius: "3px", width: v.eng?.apBar, transition: "width .3s" }} />
                      </div>
                      <span style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c" }}>{T(v.eng?.apStatus)}</span>
                    </div>
                    {v.eng?.notApproved ? (
                      <>
                        <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "10px 14px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.eng?.apClick}>
                          {T(v.eng?.apLabel)}
                        </button>
                      </>
                    ) : null}
                    {v.eng?.approved ? (
                      <>
                        <div style={{ background: "#e7f6ee", borderRadius: "8px", padding: "9px 11px", font: "600 12.5px 'IBM Plex Sans'", color: "#197a48" }}>
                          Approved ✓ | scheduled Nov 26
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {" "}
          {v.eng?.isPerf ? (
            <>
              <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", cursor: "pointer", padding: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", marginBottom: "12px" }} onClick={v.eng?.goDash}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Campaigns
              </button>
              {" "}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <h1 style={{ margin: "0", font: "600 28px 'IBM Plex Sans'", letterSpacing: "-0.025em", color: "#0a0a0a" }}>
                      {T(v.eng?.perf?.label)}{" results"}
                    </h1>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", font: "500 11.5px 'IBM Plex Sans'", color: "#197a48", background: "#e7f6ee", borderRadius: "20px", padding: "2px 9px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27a763" }} />
                      Sent
                    </span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#66696e", marginTop: "4px" }}>{T(v.eng?.perf?.sent)}</div>
                </div>
                <select style={{ minWidth: "220px", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none", cursor: "pointer" }} value={v.eng?.perf?.pid ?? ""} onChange={v.eng?.perf?.onPick}>
                  {L(v.eng?.perf?.opts).map((o, $index) => (
                    <option key={$index} value={o?.k ?? ""}>{T(o?.label)}</option>
                  ))}
                </select>
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "10px", marginTop: "18px" }}>
                {L(v.eng?.perf?.kpis).map((k, $index) => (
                  <div key={$index} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "13px 16px", minWidth: "0" }}>
                    <div style={{ font: "500 11.5px 'IBM Plex Sans'", color: "#66696e" }}>{T(k?.l)}</div>
                    {" "}
                    <div style={{ font: "600 22px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a", marginTop: "4px" }}>
                      {T(k?.v)}
                    </div>
                    {" "}
                    {k?.hasBar ? (
                      <>
                        <div style={{ height: "4px", background: "#eeeff0", borderRadius: "3px", overflow: "hidden", marginTop: "8px" }}>
                          <div style={{ height: "100%", background: "#004677", borderRadius: "3px", width: k?.bar }} />
                        </div>
                      </>
                    ) : null}
                    {" "}
                    <div style={{ font: "400 11px/1.35 'IBM Plex Sans'", color: "#85888c", marginTop: "6px" }}>{T(k?.s)}</div>
                  </div>
                ))}
              </div>
              {" "}
              {v.eng?.perf?.hasDetail ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))", gap: "14px", marginTop: "14px", alignItems: "start" }}>
                    <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>
                        What Prime learned | used in the November draft
                      </span>
                      {L(v.eng?.perf?.learned).map((t, $index) => (
                        <div key={$index} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <svg style={{ flex: "0 0 13px" }} width="13" height="13" viewBox="0 0 24 24" fill="none">
                            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
                          </svg>
                          <span style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(t?.t)}</span>
                        </div>
                      ))}
                      <button style={{ alignSelf: "flex-start", border: "none", background: "transparent", padding: "0", marginTop: "2px", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.eng?.openBuilder}>
                        Open the November draft →
                      </button>
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", overflow: "hidden" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "14px 18px 12px" }}>
                        <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>Actions requested</span>
                        <span style={{ font: "600 12px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.eng?.perf?.actSum)}</span>
                      </div>
                      {" "}
                      {L(v.eng?.perf?.actions).map((a, $index) => (
                        <button key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "3px 12px", alignItems: "center", padding: "10px 18px", border: "none", borderTop: "1px solid #f0f0f3", background: "#fff", width: "100%", textAlign: "left", cursor: "pointer" }} onClick={a?.go} className="dc-hover-32">
                          <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a", minWidth: "0" }}>{T(a?.site)}</span>
                          <span style={{ font: "500 11px 'IBM Plex Sans'", color: a?.fg, background: a?.bg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap", justifySelf: "end" }}>
                            {T(a?.st)}
                          </span>
                          <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#55585d", minWidth: "0" }}>{T(a?.text)}</span>
                          <span style={{ font: "400 11px 'IBM Plex Mono'", color: "#85888c", whiteSpace: "nowrap", justifySelf: "end" }}>
                            {T(a?.when)}
                          </span>
                        </button>
                      ))}
                      {" "}
                      <div style={{ padding: "10px 18px", borderTop: "1px solid #f0f0f3" }}>
                        <button style={{ border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.eng?.goActions}>
                          View in Actions →
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", marginTop: "14px", overflow: "hidden" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 12px" }}>
                      <span style={{ font: "600 14px 'IBM Plex Sans'", letterSpacing: "-0.005em", color: "#0a0a0a" }}>
                        Site metrics before and after
                      </span>
                      <span style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c", maxWidth: "560px", textWrap: "pretty" }}>
                        4 weeks before (Oct 1–28) and after (Oct 29–Nov 25) sending. Shown side by side for context; Prime doesn’t credit these changes to the newsletter.
                      </span>
                    </div>
                    {" "}
                    <div style={{ overflowX: "auto" }}>
                      <div style={{ minWidth: "680px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(100px,1fr) minmax(150px,1.4fr) 90px 90px minmax(170px,1.6fr)", gap: "12px", padding: "8px 18px", background: "#fafafa", borderTop: "1px solid #f0f0f3", borderBottom: "1px solid #ecedee" }}>
                          <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Site</span>
                          <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Metric</span>
                          <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Before</span>
                          <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>After</span>
                          <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>Also in this period</span>
                        </div>
                        {" "}
                        {L(v.eng?.perf?.change).map((c, $index) => (
                          <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(100px,1fr) minmax(150px,1.4fr) 90px 90px minmax(170px,1.6fr)", gap: "12px", padding: "10px 18px", borderTop: c?.border, alignItems: "baseline" }}>
                            <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(c?.site)}</span>
                            <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#3a3c40" }}>{T(c?.metric)}</span>
                            <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#55585d" }}>{T(c?.before)}</span>
                            <span style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(c?.after)}</span>
                            <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(c?.other)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {" "}
              {v.eng?.perf?.noDetail ? (
                <>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "14px", padding: "16px 18px", marginTop: "14px", font: "400 13px/1.5 'IBM Plex Sans'", color: "#55585d" }}>
                    All follow-ups from this campaign are closed.
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
      {" "}
      {v.eng?.confirmOpen ? (
        <>
          <div style={{ position: "fixed", inset: "0", background: "rgba(10,10,10,.32)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "60", padding: "20px" }} onClick={v.eng?.cancelApprove}>
            <div style={{ width: "100%", maxWidth: "440px", background: "#fff", borderRadius: "14px", padding: "20px 22px", boxShadow: "0 16px 40px rgba(10,10,10,.18)", display: "flex", flexDirection: "column", gap: "12px" }} onClick={v.eng?.stop}>
              <div style={{ font: "600 16px 'IBM Plex Sans'", color: "#0a0a0a" }}>Approve the November newsletter?</div>
              <div style={{ font: "400 13px/1.5 'IBM Plex Sans'", color: "#55585d", textWrap: "pretty" }}>
                Each of the 17 sites receives its own version on Nov 26 at 09:00 site local time, sent to 52 contacts from CTMS.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", background: "#ecedee", border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden" }}>
                {L(v.eng?.confirmStats).map((c, $index) => (
                  <div key={$index} style={{ background: "#fafafa", padding: "10px 12px" }}>
                    <div style={{ font: "600 18px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(c?.v)}</div>
                    <div style={{ font: "400 11px/1.3 'IBM Plex Sans'", color: "#66696e" }}>{T(c?.l)}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "4px" }}>
                <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "10px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.eng?.cancelApprove}>
                  Cancel
                </button>
                <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "10px", padding: "9px 16px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,70,119,.18)" }} onClick={v.eng?.confirmApprove}>
                  {"Approve & schedule"}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
