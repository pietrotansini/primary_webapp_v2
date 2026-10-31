// StudioView — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function StudioView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", overflowY: "auto", padding: "26px 28px 40px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>
            Turn an email draft into a short video or a few slides to send with it. Prime writes them from the draft and the data behind it.
          </div>
          {" "}
          <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 18px", alignItems: "flex-end" }}>
              <div style={{ flex: "1 1 320px", minWidth: "0" }}>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "8px" }}>
                  EMAIL DRAFT
                </div>
                {" "}
                <select style={{ width: "100%", boxSizing: "border-box", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none" }} value={v.st?.draftId ?? ""} onChange={v.st?.onDraft}>
                  {L(v.st?.drafts).map((d, $index) => (
                    <option key={$index} value={d?.id ?? ""}>{T(d?.label)}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: "2 1 420px", minWidth: "0", display: "flex", alignItems: "center", gap: "12px", background: "#fafafa", border: "1px solid #f0f0f3", borderRadius: "8px", padding: "9px 12px" }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>{"To "}{T(v.st?.to)}</div>
                  <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(v.st?.subject)}</div>
                </div>
                <button style={{ flex: "0 0 auto", border: "1px solid #e2e3e5", background: "#fff", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.st?.toggleEmail} className="dc-hover-3">
                  {T(v.st?.emailToggleLabel)}
                </button>
              </div>
            </div>
            {v.st?.showEmail ? (
              <>
                <div style={{ maxHeight: "320px", overflowY: "auto", border: "1px solid #f0f0f3", borderRadius: "8px", padding: "12px 14px", font: "400 12.5px/1.6 'IBM Plex Sans'", color: "#1c1d1f", whiteSpace: "pre-wrap", background: "#fcfcfd" }}>
                  {T(v.st?.body)}
                </div>
              </>
            ) : null}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginTop: "14px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 300px", maxWidth: "400px", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "18px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "8px" }}>FORMAT</div>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {L(v.st?.formats).map((f, $index) => (
                    <button key={$index} style={{ textAlign: "left", border: `1px solid ${f?.bd ?? ""}`, background: f?.bg, boxShadow: f?.shadow, borderRadius: "10px", padding: "11px 12px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "4px" }} onClick={f?.pick}>
                      <span style={{ font: "600 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(f?.label)}</span>
                      <span style={{ font: "400 11.5px/1.4 'IBM Plex Sans'", color: "#66696e" }}>{T(f?.desc)}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "8px" }}>AUDIENCE</div>
                {" "}
                <select style={{ width: "100%", boxSizing: "border-box", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "7px 10px", font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none" }} value={v.st?.aud ?? ""} onChange={v.st?.onAud}>
                  {L(v.st?.audienceOpts).map((a, $index) => (
                    <option key={$index} value={a?.label ?? ""}>{T(a?.label)}</option>
                  ))}
                </select>
              </div>
              <div>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "8px" }}>LENGTH</div>
                {" "}
                <div style={{ display: "flex", gap: "4px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
                  {L(v.st?.lengths).map((l, $index) => (
                    <button key={$index} style={{ flex: "1", border: "none", borderRadius: "7px", padding: "6px 4px", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", background: l?.bg, color: l?.fg, boxShadow: l?.shadow }} onClick={l?.pick}>
                      {T(l?.label)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "8px" }}>
                  ANYTHING TO EMPHASISE? (OPTIONAL)
                </div>
                {" "}
                <textarea style={{ width: "100%", boxSizing: "border-box", resize: "vertical", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none" }} value={v.st?.notes ?? ""} onChange={v.st?.onNotes} rows={2} placeholder="e.g. Lead with the reduced visit schedule" className="dc-focus-9" />
              </div>
              <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 14px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", opacity: v.st?.genOpacity }} onClick={v.st?.generate}>
                {T(v.st?.genSpin)}{T(v.st?.genLabel)}
              </button>
              <div style={{ font: "400 11px/1.45 'IBM Plex Sans'", color: "#85888c", textWrap: "pretty", marginTop: "-8px" }}>
                Beta. Check facts and figures before you send.
              </div>
            </div>
            <div style={{ flex: "999 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              {v.st?.empty ? (
                <>
                  <div style={{ aspectRatio: "16/9", border: "1.5px dashed #cfd1d4", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "#fff" }}>
                    <div style={{ maxWidth: "340px", textAlign: "center", font: "400 13px/1.5 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>
                      Pick a draft and a format, then click Generate. Your video or slides will appear here.
                    </div>
                  </div>
                </>
              ) : null}
              {v.st?.loading ? (
                <>
                  <div style={{ aspectRatio: "16/9", border: "1px solid #ecedee", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", background: "#fff" }}>
                    {T(v.st?.bigSpin)}
                    <div style={{ font: "500 13px 'IBM Plex Sans'", color: "#3a3c40" }}>{T(v.st?.loadingLabel)}</div>
                  </div>
                </>
              ) : null}
              {v.st?.isVideo ? (
                <>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.st?.outTitle)}</span>
                      <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.st?.outMeta)}</span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/9", background: "#0a0a0a", borderRadius: "10px", overflow: "hidden", containerType: "inline-size", cursor: "pointer" }} onClick={v.st?.play}>
                      <div style={{ position: "absolute", inset: "0", background: "radial-gradient(120% 90% at 85% 10%, rgba(0,70,119,0.55), rgba(0,0,0,0) 60%)" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "6cqw", top: "5.5cqw", font: "500 1.7cqw 'IBM Plex Mono'", letterSpacing: "0.08em", color: "#8baac5" }}>
                        {T(v.st?.vKicker)}
                      </div>
                      {" "}
                      <div style={{ position: "absolute", left: "6cqw", right: "14cqw", top: "50%", transform: "translateY(-58%)", font: "600 5.4cqw/1.12 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#fff", textWrap: "balance" }}>
                        {T(v.st?.vHeadline)}
                      </div>
                      {" "}
                      <div style={{ position: "absolute", left: "6cqw", right: "6cqw", bottom: "5cqw", display: "flex", justifyContent: "center" }}>
                        <span style={{ background: "rgba(0,0,0,0.6)", color: "#f5f5f7", borderRadius: "0.6cqw", padding: "0.8cqw 1.4cqw", font: "400 1.9cqw/1.4 'IBM Plex Sans'", textAlign: "center", textWrap: "pretty" }}>
                          {T(v.st?.vCaption)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ position: "absolute", right: "4cqw", top: "4.5cqw", font: "600 1.6cqw 'IBM Plex Sans'", color: "rgba(255,255,255,0.7)" }}>
                        Prime
                      </div>
                      {" "}
                      {v.st?.showPlayIcon ? (
                        <>
                          <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.25)" }}>
                            <span style={{ width: "9cqw", height: "9cqw", borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg style={{ width: "4cqw", height: "4cqw", marginLeft: "0.6cqw" }} viewBox="0 0 24 24">
                                <path d="M7 4.5v15l12-7.5L7 4.5Z" fill="#0a0a0a" />
                              </svg>
                            </span>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <button style={{ width: "32px", height: "32px", flex: "0 0 32px", borderRadius: "50%", border: "none", background: "#004677", color: "#fff", cursor: "pointer", font: "600 12px 'IBM Plex Sans'" }} onClick={v.st?.play}>
                        {T(v.st?.playGlyph)}
                      </button>
                      <div style={{ flex: "1", display: "flex", gap: "3px" }}>
                        {L(v.st?.segments).map((g, $index) => (
                          <div key={$index} style={{ flex: g?.flex, height: "5px", borderRadius: "3px", background: "#e2e3e5", overflow: "hidden", cursor: "pointer" }} onClick={g?.seek}>
                            <div style={{ height: "100%", width: g?.fill, background: "#004677" }} />
                          </div>
                        ))}
                      </div>
                      <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: "#55585d", whiteSpace: "nowrap" }}>{T(v.st?.timeLabel)}</span>
                    </div>
                    <div style={{ borderTop: "1px solid #f0f0f3", paddingTop: "4px", display: "flex", flexDirection: "column" }}>
                      <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c", marginBottom: "8px" }}>
                        STORYBOARD
                      </div>
                      {L(v.st?.scenes).map((c, $index) => (
                        <div key={$index} style={{ display: "grid", gridTemplateColumns: "54px minmax(0,1fr)", gap: "10px", padding: "9px 10px", borderRadius: "8px", cursor: "pointer", background: c?.bg }} onClick={c?.seek} className="dc-hover-0">
                          <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: c?.tcFg, paddingTop: "1px" }}>{T(c?.tc)}</span>
                          <div style={{ minWidth: "0" }}>
                            <div style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(c?.headline)}</div>
                            {" "}
                            <div style={{ font: "400 12px/1.45 'IBM Plex Sans'", color: "#55585d", textWrap: "pretty", marginTop: "2px" }}>
                              {T(c?.voiceover)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
              {v.st?.isSlides ? (
                <>
                  <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{ font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(v.st?.outTitle)}</span>
                      <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.st?.outMeta)}</span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/9", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", overflow: "hidden", containerType: "inline-size", boxShadow: "0 1px 3px rgba(10,10,10,0.06)" }}>
                      <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "1.1cqw", background: "#004677" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "6cqw", top: "6cqw", font: "500 1.6cqw 'IBM Plex Mono'", letterSpacing: "0.08em", color: "#567fa1" }}>
                        {T(v.st?.sKicker)}
                      </div>
                      {" "}
                      <div style={{ position: "absolute", left: "6cqw", right: "6cqw", top: "10cqw", bottom: "7cqw", display: "flex", gap: "5cqw" }}>
                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2.4cqw" }}>
                          <div style={{ font: "600 4cqw/1.15 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a", textWrap: "balance" }}>
                            {T(v.st?.sTitle)}
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "1.3cqw" }}>
                            {L(v.st?.sBullets).map((b, $index) => (
                              <div key={$index} style={{ display: "flex", gap: "1.4cqw", font: "400 2.05cqw/1.4 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>
                                <span style={{ width: "0.8cqw", height: "0.8cqw", flex: "0 0 0.8cqw", borderRadius: "50%", background: "#004677", marginTop: "1.1cqw" }} />
                                <span>{T(b?.text)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {v.st?.sHasStat ? (
                          <>
                            <div style={{ flex: "0 0 30%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1cqw", borderLeft: "1px solid #eeeff0", paddingLeft: "4cqw" }}>
                              <div style={{ font: "600 7cqw/1 'IBM Plex Sans'", letterSpacing: "-0.03em", color: "#004677" }}>
                                {T(v.st?.sStat)}
                              </div>
                              <div style={{ font: "400 1.8cqw/1.4 'IBM Plex Sans'", color: "#66696e", textWrap: "pretty" }}>
                                {T(v.st?.sStatLabel)}
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                      {" "}
                      <div style={{ position: "absolute", left: "6cqw", right: "6cqw", bottom: "3.2cqw", display: "flex", justifyContent: "space-between", font: "400 1.4cqw 'IBM Plex Sans'", color: "#95989c" }}>
                        <span>{T(v.st?.sFooter)}</span>
                        <span>{T(v.st?.sPage)}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "5px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.st?.prev}>
                        ← Prev
                      </button>
                      <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "5px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.st?.next}>
                        Next →
                      </button>
                      <span style={{ font: "500 11.5px 'IBM Plex Mono'", color: "#85888c", marginLeft: "4px" }}>{T(v.st?.sPage)}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(118px,1fr))", gap: "8px" }}>
                      {L(v.st?.thumbs).map((t, $index) => (
                        <div key={$index} style={{ aspectRatio: "16/9", border: `1.5px solid ${t?.bd ?? ""}`, borderRadius: "6px", background: "#fff", containerType: "inline-size", position: "relative", overflow: "hidden", cursor: "pointer" }} onClick={t?.pick}>
                          <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "2.5cqw", background: "#004677" }} />
                          {" "}
                          <div style={{ position: "absolute", left: "7cqw", top: "10cqw", font: "500 6cqw 'IBM Plex Mono'", color: "#85888c" }}>
                            {T(t?.n)}
                          </div>
                          {" "}
                          <div style={{ position: "absolute", left: "7cqw", right: "7cqw", top: "22cqw", font: "600 8.5cqw/1.2 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty", overflow: "hidden", maxHeight: "32cqw" }}>
                            {T(t?.title)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
              {v.st?.hasOut ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "8px 14px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.st?.generate}>
                      Regenerate
                    </button>
                    {v.st?.notAttached ? (
                      <>
                        <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "8px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.st?.attach}>
                          Attach to email
                        </button>
                      </>
                    ) : null}
                    {v.st?.attached ? (
                      <>
                        <span style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#197a48" }}>Attached to the draft ✓</span>
                        <button style={{ border: "none", background: "transparent", color: "#003358", padding: "8px 4px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.st?.openEmail}>
                          Open email →
                        </button>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
