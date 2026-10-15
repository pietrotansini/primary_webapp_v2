// PrimeView — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function PrimeView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "44px 28px 48px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h1 style={{ margin: "0", textAlign: "center", font: "600 26px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>
            Prime is your Clinical Operations Agent
          </h1>
          {" "}
          <div style={{ textAlign: "center", font: "400 13px/1.5 'IBM Plex Sans'", color: "#66696e", marginTop: "6px", textWrap: "pretty" }}>
            It can pull data from and act in your trial systems. Nothing runs until you approve the plan.
          </div>
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #dfe0e2", borderRadius: "14px", padding: "0 8px 0 16px", height: "54px", marginTop: "22px", boxShadow: "0 1px 3px rgba(10,10,10,0.05)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flex: "0 0 18px" }}>
              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
            </svg>
            <input value={v.prime?.query ?? ""} onChange={v.prime?.onQuery} onKeyDown={v.prime?.onKey} placeholder="Describe a task — e.g. “Prepare meeting brief for each site”" style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 14.5px 'IBM Plex Sans'", color: "#0a0a0a" }} />
            <button onClick={v.prime?.submit} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "9px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
              Draft plan
            </button>
          </div>
          {" "}
          {v.prime?.showList ? (
            <>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", margin: "30px 0 12px" }}>
                <div style={{ display: "flex", gap: "3px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                  {L(v.prime?.views).map((v, $index) => (
                    <button key={$index} onClick={v?.onClick} style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", borderRadius: "7px", padding: "6px 12px", cursor: "pointer", whiteSpace: "nowrap", font: "500 12.5px 'IBM Plex Sans'", background: v?.bg, color: v?.fg, boxShadow: v?.shadow }}>
                      {T(v?.label)}
                      <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(v?.count)}</span>
                    </button>
                  ))}
                </div>
                {v.prime?.isArchive ? (
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "9px", padding: "0 10px", height: "34px", flex: "0 1 280px", minWidth: "180px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flex: "0 0 13px" }}>
                        <circle cx="11" cy="11" r="6.5" stroke="#85888c" strokeWidth="2" />
                        <path d="m16 16 4 4" stroke="#85888c" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <input value={v.prime?.archQ ?? ""} onChange={v.prime?.onArchQ} placeholder="Search archive" style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }} />
                    </div>
                  </>
                ) : null}
                {v.prime?.isSaved ? (
                  <>
                    <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.prime?.countText)}</div>
                  </>
                ) : null}
              </div>
              {" "}
              {v.prime?.isArchive ? (
                <>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", overflow: "hidden" }}>
                    {L(v.prime?.archive).map((a, $index) => (
                      <div key={$index} onClick={a?.open} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "6px 16px", alignItems: "center", padding: "13px 18px", borderTop: a?.border, cursor: "pointer" }} className="dc-hover-2">
                        <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                            <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap" }}>{T(a?.time)}</span>
                            {L(a?.systems).map((sy, $index) => (
                              <span key={$index} style={{ font: "500 10px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "4px", padding: "1px 6px" }}>
                                {T(sy)}
                              </span>
                            ))}
                            {L(a?.outputs).map((o, $index) => (
                              <span key={$index} style={{ font: "500 10.5px 'IBM Plex Sans'", color: "#003358", background: "#e5ecf2", borderRadius: "20px", padding: "1px 8px" }}>
                                {T(o)}
                              </span>
                            ))}
                          </div>
                          <div style={{ font: "600 13.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(a?.title)}</div>
                          <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>{T(a?.summary)}</div>
                        </div>
                        <span style={{ font: "500 12px 'IBM Plex Sans'", color: "#003358", whiteSpace: "nowrap" }}>Open →</span>
                      </div>
                    ))}
                    {" "}
                    {v.prime?.archEmpty ? (
                      <>
                        <div style={{ padding: "22px", textAlign: "center", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>
                          No archived tasks match.
                        </div>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
              {" "}
              {v.prime?.isSaved ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "12px" }}>
                    {L(v.prime?.cards).map((c, $index) => (
                      <div key={$index} onClick={c?.open} style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "8px" }} className="dc-hover-3">
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                          {L(c?.systems).map((sy, $index) => (
                            <span key={$index} style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#3a3c40", background: "#eeeff0", borderRadius: "5px", padding: "2px 7px" }}>
                              {T(sy)}
                            </span>
                          ))}
                          <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Sans'", color: c?.modeFg, background: c?.modeBg, borderRadius: "20px", padding: "2px 9px", whiteSpace: "nowrap" }}>
                            {T(c?.mode)}
                          </span>
                        </div>
                        <div style={{ font: "600 14.5px/1.35 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(c?.title)}</div>
                        <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>{T(c?.desc)}</div>
                        <div style={{ marginTop: "auto", paddingTop: "4px", font: "500 12px 'IBM Plex Sans'", color: "#003358" }}>
                          Review plan →
                        </div>
                      </div>
                    ))}
                  </div>
                  {" "}
                  {v.prime?.noMatch ? (
                    <>
                      <div style={{ background: "#fff", border: "1px dashed #d7d8da", borderRadius: "12px", padding: "22px", textAlign: "center", font: "400 13px/1.5 'IBM Plex Sans'", color: "#66696e" }}>
                        {T(v.prime?.noMatchText)}
                      </div>
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}
          {" "}
          {v.prime?.showRun ? (
            <>
              <button onClick={v.prime?.back} style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", cursor: "pointer", padding: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#66696e", margin: "28px 0 12px" }}>
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
                  <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c", marginBottom: "6px" }}>PLAN</div>
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
                                <svg viewBox="0 0 600 150" preserveAspectRatio="none" style={{ width: "100%", height: "160px", display: "block", borderBottom: "1px solid #e2e3e5" }}>
                                  <polygon points={v.run?.out?.chart?.areaPts} fill="#e5ecf2" />
                                  <polyline points={v.run?.out?.chart?.linePts} fill="none" stroke="#004677" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                </svg>
                                {" "}
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "6px", marginTop: "6px" }}>
                                  {L(v.run?.out?.chart?.labels).map((lb, $index) => (
                                    <div key={$index} style={{ minWidth: "0", textAlign: "center" }}>
                                      <div style={{ font: "500 11px 'IBM Plex Mono'", color: "#3a3c40" }}>{T(lb?.v)}</div>
                                      {" "}
                                      <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#66696e", whiteSpace: "nowrap" }}>{T(lb?.l)}</div>
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
                                  <span style={{ marginLeft: "auto", font: "500 10.5px 'IBM Plex Mono'", color: "#55585d" }}>{T(b?.path)}</span>
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
                        <button onClick={v.run?.approve} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer" }}>
                          {"Approve & run"}
                        </button>
                        <button onClick={v.prime?.back} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "10px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }}>
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
                        <button onClick={v.run?.approveWrite} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                          {T(v.run?.writeVerb)}
                        </button>
                        <button onClick={v.prime?.back} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "10px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }}>
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
                            <button onClick={v.run?.rerun} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
                              Run again
                            </button>
                          </>
                        ) : null}
                        {v.run?.notArchived ? (
                          <>
                            <button onClick={v.goActivity} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
                              View Audit Trail
                            </button>
                          </>
                        ) : null}
                        <button onClick={v.prime?.back} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
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
                                <button onClick={t?.approve} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "9px 16px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
                                  {"Approve & save to CTMS"}
                                </button>
                                <button onClick={t?.discard} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "9px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
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
                    <input value={v.run?.followText ?? ""} onChange={v.run?.onFollow} onKeyDown={v.run?.onFollowKey} placeholder="Continue the conversation — ask a follow-up or refine the result" style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }} />
                    <button onClick={v.run?.sendFollow} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                      Send
                    </button>
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
