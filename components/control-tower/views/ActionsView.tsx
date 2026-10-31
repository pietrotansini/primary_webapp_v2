// ActionsView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { Fragment } from "react";
import { L, T, type Vals } from "../dc";

export function ActionsView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", minHeight: "0", display: "flex", flexDirection: "column", background: "#fafafa" }}>
        {v.tv?.isList ? (
          <>
            <div style={{ flex: "0 0 auto", padding: "18px 28px 14px", borderBottom: "1px solid #eaebec" }}>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                {v.tv?.isList ? (
                  <>
                    <div style={{ display: "flex", gap: "2px", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "10px", padding: "3px" }}>
                      {L(v.tv?.views).map((v, $index) => (
                        <button key={$index} style={{ display: "flex", alignItems: "center", gap: "5px", border: "none", borderRadius: "7px", padding: "5px 11px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12px 'IBM Plex Sans'", background: v?.bg, color: v?.fg }} onClick={v?.onClick}>
                          {T(v?.label)}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <svg style={{ color: "#85888c", marginRight: "2px" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5h16l-6 7.5V19l-4 1.5v-8L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                  {L(v.af?.selects).map((f, $index) => (
                    <Fragment key={$index}>
                      <select style={{ appearance: "none", WebkitAppearance: "none", border: `1px solid ${f?.bd ?? ""}`, background: `${f?.bg ?? ""} url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6' fill='none' stroke='%2366696e' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 9px center`, color: f?.fg, borderRadius: "8px", padding: "5px 26px 5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", maxWidth: "200px" }} value={f?.value ?? ""} onChange={f?.onChange} aria-label={f?.label} className="dc-hover-3">
                        {L(f?.opts).map((o, $index) => (
                          <option key={$index} value={o?.v ?? ""}>{T(o?.l)}</option>
                        ))}
                      </select>
                    </Fragment>
                  ))}
                  {L(v.af?.chips).map((c, $index) => (
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
                          <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "250px", maxHeight: "320px", overflowY: "auto", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
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
                  {v.af?.canAdd ? (
                    <>
                      <div style={{ position: "relative" }}>
                        <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px dashed #c9cbce", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.af?.toggleAdd} className="dc-hover-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                          </svg>
                          <span>Add filter</span>
                        </button>
                        {" "}
                        {v.af?.addOpen ? (
                          <>
                            <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={v.af?.closeAdd} />
                            {" "}
                            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "180px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
                              <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", padding: "8px 12px 4px" }}>
                                FILTER BY
                              </div>
                              {" "}
                              {L(v.af?.addOpts).map((o, $index) => (
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
                  {v.af?.any ? (
                    <>
                      <button style={{ border: "none", background: "transparent", color: "#003358", padding: "5px 6px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.af?.clear} className="dc-hover-12">
                        Clear filters
                      </button>
                    </>
                  ) : null}
                </div>
                <button style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.na?.toggle} className="dc-hover-3">
                  + New action
                </button>
              </div>
              {" "}
              <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "10px", textWrap: "pretty" }}>
                {T(v.inboxSub)}
              </div>
            </div>
          </>
        ) : null}
        {v.tv?.isList ? (
          <>
            <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,1fr)", position: "relative", containerType: "inline-size" }}>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", overflow: "auto", minWidth: "0", width: v.boardW, scrollSnapType: "x proximity", scrollPaddingLeft: "20px" }}>
                <div style={{ flex: "1 0 auto", width: "100cqw", padding: "16px 20px 24px", display: "grid", gridTemplateColumns: "repeat(3,minmax(260px,1fr))", gap: "14px" }}>
                  {L(v.board).map((c, $index) => (
                    <div key={$index} style={{ scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "8px", background: c?.bg, border: `1.5px dashed ${c?.bd ?? ""}`, borderRadius: "12px", padding: "10px" }} onDragOver={c?.onOver} onDragLeave={c?.onLeave} onDrop={c?.onDrop}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "2px 4px 4px" }}>
                        <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(c?.label)}</span>
                        <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#55585d", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "20px", padding: "0 7px" }}>
                          {T(c?.count)}
                        </span>
                      </div>
                      {L(c?.items).map((it, $index) => (
                        <div key={$index} style={{ background: "#fff", border: `1px solid ${it?.border ?? ""}`, boxShadow: it?.shadow, borderRadius: "12px", padding: "13px 14px", cursor: "grab" }} draggable="true" onDragStart={it?.onDragStart} onDragEnd={it?.onDragEnd} onClick={it?.select}>
                          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px 7px", marginBottom: "7px" }}>
                            <span style={{ font: "600 10.5px 'IBM Plex Mono'", color: it?.priFg, background: it?.priBg, borderRadius: "5px", padding: "1px 6px" }}>
                              {T(it?.pri)}
                            </span>
                            <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#55585d", whiteSpace: "nowrap" }}>{T(it?.study)}</span>
                            <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap" }}>
                              {"| "}{T(it?.kind)}
                            </span>
                            <span style={{ marginLeft: "auto", font: "400 11px 'IBM Plex Sans'", color: "#a7a9ac", whiteSpace: "nowrap" }}>
                              {T(it?.time)}
                            </span>
                          </div>
                          {" "}
                          <div style={{ font: "600 13.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(it?.title)}</div>
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", flexWrap: "wrap" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                              {it?.hasDays ? (
                                <>
                                  <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: "#197a48", background: "#f3faf6", border: "1px solid #cfe9db", borderRadius: "6px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                                    {T(it?.daysOnly)}
                                  </span>
                                </>
                              ) : null}
                              {it?.hasCost ? (
                                <>
                                  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", font: "500 11.5px 'IBM Plex Mono'", color: "#003358", background: "#f2f6f9", border: "1px solid #cddae5", borderRadius: "6px", padding: "2px 7px", whiteSpace: "nowrap" }} title="Cost impact estimate based on the study protocol design. Needs Finance review.">
                                    <span style={{ font: "600 9.5px 'IBM Plex Sans'", letterSpacing: "0.02em", color: "#55585d" }}>
                                      COST IMPACT
                                    </span>
                                    {T(it?.costChip)}
                                  </span>
                                </>
                              ) : null}
                            </span>
                            <span style={{ marginLeft: "auto", font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap" }}>
                              {T(it?.who)}
                            </span>
                          </div>
                          {" "}
                          {it?.hasStatusLine ? (
                            <>
                              <div style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#55585d", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #f0f0f3" }}>
                                {T(it?.statusLine)}
                              </div>
                            </>
                          ) : null}
                        </div>
                      ))}
                      {c?.empty ? (
                        <>
                          <div style={{ padding: "18px 8px", textAlign: "center", font: "400 12px/1.5 'IBM Plex Sans'", color: "#85888c" }}>
                            {T(c?.emptyText)}
                          </div>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              {v.hasSel ? (
                <>
                  <div style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "max(calc((100% - 68px) / 3 + 27px), 287px)", zIndex: "5", overflowY: "auto", minWidth: "0", background: "#fff", borderLeft: "1px solid #eaebec", boxShadow: "-16px 0 32px rgba(10,10,10,0.08)" }}>
                    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "24px clamp(16px,3vw,32px) 40px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
                        <span style={{ font: "600 10.5px 'IBM Plex Mono'", color: v.sel?.priFg, background: v.sel?.priBg, borderRadius: "5px", padding: "2px 7px" }}>
                          {T(v.sel?.pri)}
                        </span>
                        <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                          {T(v.sel?.study)}
                        </span>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>
                          {T(v.sel?.kind)}{" | proposed by Prime "}{T(v.sel?.time)}
                        </span>
                        <button style={{ marginLeft: "auto", border: "1px solid #e2e3e5", background: "#fff", color: "#55585d", borderRadius: "8px", width: "28px", height: "28px", cursor: "pointer", font: "500 13px 'IBM Plex Sans'" }} onClick={v.closeSel} className="dc-hover-3">
                          ✕
                        </button>
                      </div>
                      {" "}
                      <h2 style={{ margin: "0", font: "600 23px/1.3 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a", textWrap: "pretty" }}>
                        {T(v.sel?.title)}
                      </h2>
                      {" "}
                      {v.sel?.revised ? (
                        <>
                          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "10px", font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#003358" }}>
                            <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.04em", background: "#e5ecf2", borderRadius: "20px", padding: "2px 8px" }}>
                              REVISED
                            </span>
                            {T(v.sel?.revNote)}
                          </div>
                        </>
                      ) : null}
                      {" "}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", background: "#ecedee", border: "1px solid #ecedee", borderRadius: "12px", overflow: "hidden", marginTop: "20px" }}>
                        <div style={{ flex: "1 1 150px", background: "#fff", padding: "13px 16px" }}>
                          <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>EXPECTED IMPACT</div>
                          {" "}
                          <div style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a", marginTop: "5px" }}>{T(v.sel?.impact)}</div>
                        </div>
                        <div style={{ flex: "1 1 150px", background: "#fff", padding: "13px 16px" }}>
                          <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>
                            {T(v.sel?.study)}{" COMPLETION"}
                          </div>
                          {" "}
                          <div style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a", marginTop: "5px", whiteSpace: "nowrap" }}>
                            {T(v.sel?.fcNow)}{" "}
                            <span style={{ color: "#85888c", fontWeight: "400" }}>→</span>
                            {" "}
                            <span style={{ color: "#197a48" }}>{T(v.sel?.fcAfter)}</span>
                          </div>
                          {" "}
                          <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>{T(v.sel?.fcNote)}</div>
                        </div>
                        <div style={{ flex: "1 1 150px", background: "#fff", padding: "13px 16px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>
                              COST IMPACT | ESTIMATE
                            </span>
                            <button style={{ width: "16px", height: "16px", flex: "0 0 16px", borderRadius: "50%", border: `1px solid ${v.sel?.costInfoBd ?? ""}`, background: v.sel?.costInfoBg, color: "#003358", font: "600 10px 'IBM Plex Sans'", cursor: "pointer", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={v.sel?.toggleCost} title="How Prime estimated this">
                              i
                            </button>
                          </div>
                          {" "}
                          <div style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a", marginTop: "5px", whiteSpace: "nowrap" }}>
                            {T(v.sel?.costVal)}
                          </div>
                          {" "}
                          <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "2px" }}>Needs Finance review</div>
                        </div>
                        <div style={{ flex: "1 1 150px", background: "#fff", padding: "13px 16px" }}>
                          <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>ASSIGNED TO</div>
                          {" "}
                          <select style={{ marginTop: "4px", width: "100%", maxWidth: "220px", font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "5px 8px", cursor: "pointer" }} value={v.sel?.assignee ?? ""} onChange={v.sel?.onAssign} className="dc-hover-3">
                            {L(v.sel?.team).map((m, $index) => (
                              <option key={$index} value={m?.name ?? ""}>{T(m?.label)}</option>
                            ))}
                          </select>
                          {" "}
                          <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "4px" }}>{T(v.sel?.assigneeRole)}</div>
                        </div>
                      </div>
                      {" "}
                      {v.sel?.costOpen ? (
                        <>
                          <div style={{ background: "#fff", border: "1px solid #cddae5", borderRadius: "12px", marginTop: "10px", overflow: "hidden" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", padding: "12px 16px", background: "#f7fafc", borderBottom: "1px solid #e5ecf2" }}>
                              <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#003358" }}>
                                HOW PRIME ESTIMATED THE COST IMPACT
                              </span>
                              <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                                {T(v.sel?.cost?.proto)}
                              </span>
                              <button style={{ marginLeft: "auto", border: "none", background: "transparent", cursor: "pointer", padding: "0", font: "500 12px 'IBM Plex Sans'", color: "#66696e" }} onClick={v.sel?.toggleCost}>
                                Close
                              </button>
                            </div>
                            {" "}
                            <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                              <div>
                                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "6px" }}>
                                  PROTOCOL DESIGN USED
                                </div>
                                {" "}
                                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "5px 16px", font: "400 12.5px/1.4 'IBM Plex Sans'" }}>
                                  {L(v.sel?.cost?.design).map((d, $index) => (
                                    <Fragment key={$index}>
                                      <span style={{ color: "#85888c", whiteSpace: "nowrap" }}>{T(d?.l)}</span>
                                      <span style={{ color: "#1c1d1f" }}>{T(d?.v)}</span>
                                    </Fragment>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "6px" }}>
                                  CALCULATION
                                </div>
                                {" "}
                                <div style={{ border: "1px solid #ecedee", borderRadius: "10px", overflow: "hidden" }}>
                                  {L(v.sel?.cost?.calc).map((c, $index) => (
                                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "2px 14px", padding: "8px 12px", borderTop: c?.bt, background: c?.bg }}>
                                      <span style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#3a3c40", fontWeight: c?.fw }}>{T(c?.l)}</span>
                                      <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a", fontWeight: c?.fw, textAlign: "right" }}>
                                        {T(c?.v)}
                                      </span>
                                      {c?.hasNote ? (
                                        <>
                                          <span style={{ gridColumn: "1 / -1", font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c" }}>
                                            {T(c?.note)}
                                          </span>
                                        </>
                                      ) : null}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {v.sel?.cost?.hasRate ? (
                                <>
                                  <div>
                                    <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "6px" }}>
                                      {"TIME-DRIVEN RUN-RATE | "}{T(v.sel?.cost?.rate)}{" PER DAY"}
                                    </div>
                                    {" "}
                                    {L(v.sel?.cost?.rows).map((r, $index) => (
                                      <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "1px 14px", padding: "6px 0", borderTop: "1px solid #f0f0f3" }}>
                                        <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#1c1d1f" }}>{T(r?.l)}</span>
                                        <span style={{ font: "500 12px 'IBM Plex Mono'", color: "#0a0a0a", textAlign: "right" }}>
                                          {T(r?.v)}
                                        </span>
                                        <span style={{ gridColumn: "1 / -1", font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>
                                          {T(r?.src)}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              ) : null}
                              <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", background: "#fdf3e0", borderRadius: "8px", padding: "10px 12px" }}>
                                <span style={{ width: "16px", height: "16px", flex: "0 0 16px", borderRadius: "50%", background: "#e5a11a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "700 10px 'IBM Plex Sans'", marginTop: "1px" }}>
                                  !
                                </span>
                                <span style={{ font: "400 12px/1.5 'IBM Plex Sans'", color: "#5c3d05", textWrap: "pretty" }}>
                                  {T(v.sel?.cost?.caveat)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "26px 0 10px" }}>
                        <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>PROPOSED ACTION</div>
                        {v.sel?.canEdit ? (
                          <>
                            <button style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#003358", padding: "2px 4px" }} onClick={v.sel?.toggleEdit}>
                              {T(v.sel?.editLabel)}
                            </button>
                          </>
                        ) : null}
                      </div>
                      {" "}
                      <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", overflow: "hidden" }}>
                        {v.sel?.isEmail ? (
                          <>
                            <div style={{ display: "grid", gridTemplateColumns: "70px minmax(0,1fr)", gap: "8px 12px", padding: "14px 18px", borderBottom: "1px solid #f0f0f3", font: "400 12.5px 'IBM Plex Sans'" }}>
                              <span style={{ color: "#85888c" }}>To</span>
                              <span style={{ color: "#0a0a0a" }}>{T(v.sel?.to)}</span>
                              <span style={{ color: "#85888c" }}>Subject</span>
                              <span style={{ color: "#0a0a0a", fontWeight: "500" }}>{T(v.sel?.subject)}</span>
                            </div>
                            {" "}
                            {v.sel?.notEditing ? (
                              <>
                                <div style={{ padding: "16px 18px", font: "400 13.5px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap" }}>
                                  {T(v.sel?.body)}
                                </div>
                              </>
                            ) : null}
                            {" "}
                            {v.sel?.editing ? (
                              <>
                                <textarea style={{ display: "block", width: "100%", border: "none", outline: "none", resize: "vertical", padding: "16px 18px", font: "400 13.5px/1.6 'IBM Plex Sans'", color: "#1c1d1f", background: "#fcfcfd" }} value={v.sel?.body ?? ""} onChange={v.sel?.onBody} rows={11} />
                              </>
                            ) : null}
                            {" "}
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", padding: "12px 18px", borderTop: "1px solid #f0f0f3", background: "#fcfcfd" }}>
                              {L(v.sel?.attachments).map((at, $index) => (
                                <span key={$index} style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "8px", padding: "5px 6px 5px 9px", font: "500 12px 'IBM Plex Sans'", color: "#0a0a0a" }}>
                                  <span style={{ font: "600 10px 'IBM Plex Mono'", color: "#003358", background: "#e5ecf2", borderRadius: "4px", padding: "1px 5px" }}>
                                    {T(at?.tag)}
                                  </span>
                                  {T(at?.title)}
                                  <span style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>{T(at?.meta)}</span>
                                  <button style={{ border: "none", background: "transparent", color: "#95989c", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", padding: "0 3px" }} onClick={at?.remove}>
                                    ✕
                                  </button>
                                </span>
                              ))}
                              <button style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.sel?.openStudio} className="dc-hover-3">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                                  <path d="m10 9.2 5 2.8-5 2.8V9.2Z" fill="currentColor" />
                                </svg>
                                {T(v.sel?.studioLabel)}
                              </button>
                            </div>
                          </>
                        ) : null}
                        {" "}
                        {v.sel?.isChanges ? (
                          <>
                            <div style={{ padding: "10px 18px 4px", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.sel?.to)}</div>
                            {" "}
                            {L(v.sel?.changes).map((c, $index) => (
                              <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto auto auto", alignItems: "center", gap: "12px", padding: "11px 18px", borderTop: "1px solid #f0f0f3" }}>
                                <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(c?.label)}</span>
                                <span style={{ font: "400 12.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(c?.from)}</span>
                                <span style={{ color: "#b3b5b8" }}>→</span>
                                <span style={{ font: "600 12.5px 'IBM Plex Mono'", color: "#003358" }}>{T(c?.to)}</span>
                              </div>
                            ))}
                          </>
                        ) : null}
                      </div>
                      {" "}
                      <button style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", border: "none", background: "transparent", cursor: "pointer", padding: "0", margin: "26px 0 10px", textAlign: "left" }} onClick={v.sel?.toggleWhy}>
                        <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>SOURCES</span>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#a7a9ac" }}>{T(v.sel?.whyToggleLabel)}</span>
                      </button>
                      {" "}
                      {v.sel?.whyOpen ? (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "14px 16px" }}>
                            <span style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>
                              {T(v.sel?.observed)}
                            </span>
                            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                              {L(v.sel?.srcLinks).map((l, $index) => (
                                <button key={$index} style={{ border: "none", background: "transparent", padding: "0", font: "600 12px 'IBM Plex Sans'", color: "#003358", cursor: "pointer", whiteSpace: "nowrap" }} onClick={l?.go} className="dc-hover-12">
                                  {T(l?.cta)}
                                </button>
                              ))}
                            </div>
                            {L(v.sel?.contexts).map((cx, $index) => (
                              <div key={$index} style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: "12px", paddingTop: "10px", borderTop: "1px solid #f0f0f3" }}>
                                <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", paddingTop: "3px" }}>
                                  YOU ADDED
                                </span>
                                <span style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#0a0a0a" }}>“{T(cx)}”</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {" "}
                      {v.sel?.isOpen ? (
                        <>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", padding: "5px 5px 5px 12px" }}>
                            <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.sel?.ctxInput ?? ""} onChange={v.sel?.onCtx} onKeyDown={v.sel?.onCtxKey} placeholder="Add context the agent can't see — it will revise the proposal" />
                            <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #e2e3e5", background: "#f7f7f9", borderRadius: "7px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.sel?.sendCtx}>
                              {T(v.sel?.ctxSpinner)}{T(v.sel?.ctxBtn)}
                            </button>
                          </div>
                        </>
                      ) : null}
                      {" "}
                      <div style={{ marginTop: "26px", paddingTop: "18px", borderTop: "1px solid #eaebec" }}>
                        {v.sel?.isOpen ? (
                          <>
                            {v.sel?.rejectClosed ? (
                              <>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                                  <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.sel?.approve}>
                                    {T(v.sel?.verb)}
                                  </button>
                                  <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "10px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.sel?.openReject}>
                                    Dismiss
                                  </button>
                                  <span style={{ marginLeft: "auto", font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>
                                    {T(v.sel?.afterNote)}
                                  </span>
                                </div>
                              </>
                            ) : null}
                            {" "}
                            {v.sel?.rejectOpen ? (
                              <>
                                <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40", marginBottom: "10px" }}>
                                  Why dismiss? The agent learns from this.
                                </div>
                                {" "}
                                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                  {L(v.sel?.reasons).map((r, $index) => (
                                    <button key={$index} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "20px", padding: "7px 13px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={r?.pick}>
                                      {T(r?.label)}
                                    </button>
                                  ))}
                                  <button style={{ border: "none", background: "transparent", color: "#85888c", padding: "7px 8px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.sel?.cancelReject}>
                                    Cancel
                                  </button>
                                </div>
                              </>
                            ) : null}
                          </>
                        ) : null}
                        {" "}
                        {v.sel?.notOpen ? (
                          <>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: v.sel?.stBg, borderRadius: "10px", padding: "12px 14px" }}>
                              {T(v.sel?.stIcon)}
                              <span style={{ font: "500 13px/1.45 'IBM Plex Sans'", color: v.sel?.stFg, flex: "1" }}>
                                {T(v.sel?.statusText)}
                              </span>
                              {v.sel?.canUndo ? (
                                <>
                                  <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.sel?.undo}>
                                    Undo
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        {v.tv?.isTeam ? (
          <>
            <div style={{ flex: "1", overflowY: "auto", padding: "18px 28px 40px" }}>
              <div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", minWidth: "0" }}>
                    <select style={{ flex: "0 1 auto", minWidth: "120px", maxWidth: "210px", font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "6px 9px", cursor: "pointer" }} value={v.tv?.studyId ?? ""} onChange={v.tv?.onStudy} className="dc-hover-3">
                      {L(v.tv?.studyOpts).map((o, $index) => (
                        <option key={$index} value={o?.id ?? ""}>{T(o?.label)}</option>
                      ))}
                    </select>
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px", minWidth: "0", flex: "0 1 auto" }}>
                      <svg style={{ color: "#85888c", marginRight: "2px" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M4 5h16l-6 7.5V19l-4 1.5v-8L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                      {L(v.tv?.tadd?.chips).map((c, $index) => (
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
                      {v.tv?.tadd?.canAdd ? (
                        <>
                          <div style={{ position: "relative", flex: "0 0 auto" }}>
                            <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px dashed #c9cbce", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "5px 10px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.tv?.tadd?.toggleAdd} className="dc-hover-1">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                              </svg>
                              <span>Add filter</span>
                            </button>
                            {" "}
                            {v.tv?.tadd?.addOpen ? (
                              <>
                                <span style={{ position: "fixed", inset: "0", zIndex: "40" }} onClick={v.tv?.tadd?.closeAdd} />
                                {" "}
                                <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", zIndex: "41", width: "180px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 12px 32px rgba(10,10,10,.12)", padding: "4px 0" }}>
                                  <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", padding: "8px 12px 4px" }}>
                                    FILTER BY
                                  </div>
                                  {" "}
                                  {L(v.tv?.tadd?.addOpts).map((o, $index) => (
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
                      {v.tv?.tfAny ? (
                        <>
                          <button style={{ border: "none", background: "transparent", color: "#003358", padding: "5px 6px", font: "600 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.tv?.tfClear} className="dc-hover-12">
                            Clear filters
                          </button>
                        </>
                      ) : null}
                    </div>
                    <label style={{ marginLeft: "auto", flex: "0 0 auto", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "8px", font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>
                      Sort by
                      <select style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "5px 8px", cursor: "pointer" }} value={v.tv?.sort ?? ""} onChange={v.tv?.onSort}>
                        {L(v.tv?.sorts).map((o, $index) => (
                          <option key={$index} value={o?.k ?? ""}>{T(o?.l)}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>
                    Resolution time runs from approval to done. Target delivery from approval: P1 2 days, P2 5 days, P3 10 days. Last 30 days.
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "14px 18px 10px" }}>
                    <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>IMPACT SUMMARY</span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", borderTop: "1px solid #f0f0f3", background: "#fafbfc" }}>
                    {L(v.tv?.imp?.tiles).map((k, $index) => (
                      <div key={$index} style={{ padding: "12px 18px 14px", borderLeft: k?.bl, minWidth: "0" }}>
                        <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(k?.l)}</div>
                        {" "}
                        <div style={{ font: "600 22px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a", marginTop: "3px" }}>
                          {T(k?.v)}
                        </div>
                        {" "}
                        <div style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#85888c", textWrap: "pretty" }}>{T(k?.s)}</div>
                      </div>
                    ))}
                  </div>
                  {" "}
                  <div style={{ font: "400 11px/1.45 'IBM Plex Sans'", color: "#85888c", padding: "9px 18px", borderTop: "1px solid #f0f0f3" }}>
                    Cost impact, not cost savings. It only lands if completion actually moves earlier. Finance confirms before anything is booked.
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "14px", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", overflowX: "auto" }}>
                  <div style={{ minWidth: "820px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "28px minmax(190px,1.9fr) repeat(6,minmax(84px,1fr))", alignItems: "center", gap: "12px", padding: "0 18px", paddingTop: "11px", paddingBottom: "11px", borderBottom: "1px solid #ecedee", font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                      <span />
                      <span>ASSIGNEE</span>
                      <span>OPEN</span>
                      <span>OVERDUE</span>
                      <span>RESOLVED</span>
                      <span>AVG RESOLUTION</span>
                      <span>AVG DELAY VS TARGET</span>
                      <span>ON TIME</span>
                    </div>
                    {" "}
                    {L(v.tv?.rows).map((r, $index) => (
                      <div key={$index} style={{ borderTop: r?.border }}>
                        <div style={{ display: "grid", gridTemplateColumns: "28px minmax(190px,1.9fr) repeat(6,minmax(84px,1fr))", alignItems: "center", gap: "12px", padding: "0 18px", paddingTop: "12px", paddingBottom: "12px", cursor: "pointer" }} onClick={r?.toggle} className="dc-hover-13">
                          <span style={{ color: "#a7a9ac", font: "500 11px 'IBM Plex Sans'", transform: r?.chev, display: "inline-block", width: "10px" }}>
                            ▶
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                            <span style={{ flex: "0 0 28px", height: "28px", borderRadius: "50%", background: "#e5ecf2", color: "#003358", font: "600 10.5px 'IBM Plex Mono'", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {T(r?.ini)}
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                              <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(r?.name)}</span>
                              <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(r?.role)}</span>
                            </span>
                          </span>
                          <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(r?.nOpen)}</span>
                          <span style={{ font: "500 13px 'IBM Plex Mono'", color: r?.overFg }}>{T(r?.nOver)}</span>
                          <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(r?.nDone)}</span>
                          <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(r?.res)}</span>
                          <span>
                            <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: r?.delFg, background: r?.delBg, borderRadius: "6px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                              {T(r?.delay)}
                            </span>
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ font: "500 13px 'IBM Plex Mono'", color: "#0a0a0a", minWidth: "34px" }}>{T(r?.onTime)}</span>
                            <span style={{ flex: "1", maxWidth: "56px", height: "5px", borderRadius: "3px", background: "#eeeff0", overflow: "hidden" }}>
                              <span style={{ display: "block", height: "100%", width: r?.onW, background: r?.onC }} />
                            </span>
                          </span>
                        </div>
                        {" "}
                        {r?.open ? (
                          <>
                            <div style={{ background: "#fbfbfc", borderTop: "1px solid #f0f0f3", padding: "4px 0 8px" }}>
                              <div style={{ display: "grid", gridTemplateColumns: "28px 30px 82px minmax(160px,1fr) 128px 120px 116px", alignItems: "center", gap: "12px", padding: "8px 18px", paddingTop: "8px", paddingBottom: "6px", font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>
                                <span />
                                <span>PRI</span>
                                <span>STUDY</span>
                                <span>TASK</span>
                                <span>STATUS</span>
                                <span>TIME</span>
                                <span>VS TARGET</span>
                              </div>
                              {" "}
                              {L(r?.tasks).map((t, $index) => (
                                <div key={$index} style={{ display: "grid", gridTemplateColumns: "28px 30px 82px minmax(160px,1fr) 128px 120px 116px", alignItems: "center", gap: "12px", padding: "8px 18px", cursor: t?.cursor }} onClick={t?.go}>
                                  <span />
                                  <span style={{ font: "600 10.5px 'IBM Plex Mono'", color: t?.priFg, background: t?.priBg, borderRadius: "5px", padding: "1px 5px", textAlign: "center" }}>
                                    {T(t?.pri)}
                                  </span>
                                  <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#55585d", whiteSpace: "nowrap" }}>
                                    {T(t?.study)}
                                  </span>
                                  <span style={{ font: "500 12.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>
                                    {T(t?.title)}
                                  </span>
                                  <span style={{ font: "500 12px 'IBM Plex Sans'", color: t?.stFg }}>{T(t?.status)}</span>
                                  <span style={{ display: "flex", flexDirection: "column", font: "400 12px 'IBM Plex Sans'", color: "#3a3c40" }}>
                                    {T(t?.time)}
                                    <span style={{ fontSize: "11px", color: "#85888c" }}>{T(t?.target)}</span>
                                  </span>
                                  <span>
                                    <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: t?.delFg, background: t?.delBg, borderRadius: "6px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                                      {T(t?.delay)}
                                    </span>
                                  </span>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    ))}
                    {" "}
                    <div style={{ display: "grid", gridTemplateColumns: "28px minmax(190px,1.9fr) repeat(6,minmax(84px,1fr))", alignItems: "center", gap: "12px", padding: "0 18px", paddingTop: "12px", paddingBottom: "12px", borderTop: "1px solid #ecedee", background: "#fafafa" }}>
                      <span />
                      <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>Team</span>
                      <span style={{ font: "600 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.tv?.tot?.nOpen)}</span>
                      <span style={{ font: "600 13px 'IBM Plex Mono'", color: v.tv?.tot?.overFg }}>{T(v.tv?.tot?.nOver)}</span>
                      <span style={{ font: "600 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.tv?.tot?.nDone)}</span>
                      <span style={{ font: "600 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.tv?.tot?.res)}</span>
                      <span>
                        <span style={{ font: "600 11.5px 'IBM Plex Mono'", color: v.tv?.tot?.delFg, background: v.tv?.tot?.delBg, borderRadius: "6px", padding: "2px 7px", whiteSpace: "nowrap" }}>
                          {T(v.tv?.tot?.delay)}
                        </span>
                      </span>
                      <span style={{ font: "600 13px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.tv?.tot?.onTime)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
