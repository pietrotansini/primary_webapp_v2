// ActionsView — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function ActionsView({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(300px,34%) minmax(0,1fr)" }}>
        <div style={{ borderRight: "1px solid #eaebec", display: "flex", flexDirection: "column", minHeight: "0", overflowY: "auto", background: "#fafafa" }}>
          <div style={{ padding: "22px 20px 12px", flex: "0 0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h1 style={{ margin: "0", font: "600 21px 'IBM Plex Sans'", letterSpacing: "-0.02em", color: "#0a0a0a" }}>Actions</h1>
              <button onClick={v.na?.toggle} style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} className="dc-hover-7">
                + New action
              </button>
            </div>
            {" "}
            <div style={{ font: "400 12.5px/1.45 'IBM Plex Sans'", color: "#66696e", marginTop: "4px", textWrap: "pretty" }}>
              {T(v.inboxSub)}
            </div>
            {" "}
            <div style={{ display: "flex", gap: "4px", marginTop: "14px", background: "#eeeff0", borderRadius: "9px", padding: "3px" }}>
              {L(v.tabs).map((t, $index) => (
                <button key={$index} onClick={t?.onClick} style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", border: "none", borderRadius: "7px", padding: "6px 4px", cursor: "pointer", whiteSpace: "nowrap", font: "500 11.5px 'IBM Plex Sans'", background: t?.bg, color: t?.fg, boxShadow: t?.shadow }}>
                  {T(t?.label)}
                  <span style={{ font: "500 10.5px 'IBM Plex Mono'", color: "#85888c" }}>{T(t?.count)}</span>
                </button>
              ))}
            </div>
            {" "}
            {v.hasStudyFilter ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
                  <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>Filtered to</span>
                  <button onClick={v.clearStudy} style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "20px", padding: "3px 9px", font: "500 11.5px 'IBM Plex Mono'", cursor: "pointer" }}>
                    {T(v.studyFilter)}{" ✕"}
                  </button>
                </div>
              </>
            ) : null}
          </div>
          <div style={{ flex: "1 0 auto", padding: "4px 12px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {L(v.list).map((it, $index) => (
              <div key={$index} onClick={it?.select} style={{ background: "#fff", border: `1px solid ${it?.border ?? ""}`, boxShadow: it?.shadow, borderRadius: "12px", padding: "13px 14px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px 7px", marginBottom: "7px" }}>
                  <span style={{ font: "600 10.5px 'IBM Plex Mono'", color: it?.priFg, background: it?.priBg, borderRadius: "5px", padding: "1px 6px" }}>
                    {T(it?.pri)}
                  </span>
                  <span style={{ font: "500 11px 'IBM Plex Mono'", color: "#55585d", whiteSpace: "nowrap" }}>{T(it?.study)}</span>
                  <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c", whiteSpace: "nowrap" }}>{"| "}{T(it?.kind)}</span>
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
            {v.listEmpty ? (
              <>
                <div style={{ padding: "28px 12px", textAlign: "center", font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#85888c" }}>
                  {T(v.emptyText)}
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div style={{ overflowY: "auto", minWidth: "0" }}>
          {v.hasSel ? (
            <>
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
                    <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>ASSIGNED TO</div>
                    {" "}
                    <select value={v.sel?.assignee ?? ""} onChange={v.sel?.onAssign} style={{ marginTop: "4px", width: "100%", maxWidth: "220px", font: "600 14px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "5px 8px", cursor: "pointer" }} className="dc-hover-7">
                      {L(v.sel?.team).map((m, $index) => (
                        <option key={$index} value={m?.name ?? ""}>{T(m?.label)}</option>
                      ))}
                    </select>
                    {" "}
                    <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c", marginTop: "4px" }}>{T(v.sel?.assigneeRole)}</div>
                  </div>
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "26px 0 10px" }}>
                  <div style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>PROPOSED ACTION</div>
                  {v.sel?.canEdit ? (
                    <>
                      <button onClick={v.sel?.toggleEdit} style={{ border: "none", background: "transparent", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", color: "#003358", padding: "2px 4px" }}>
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
                          <textarea value={v.sel?.body ?? ""} onChange={v.sel?.onBody} rows={11} style={{ display: "block", width: "100%", border: "none", outline: "none", resize: "vertical", padding: "16px 18px", font: "400 13.5px/1.6 'IBM Plex Sans'", color: "#1c1d1f", background: "#fcfcfd" }} />
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
                            <button onClick={at?.remove} style={{ border: "none", background: "transparent", color: "#95989c", cursor: "pointer", font: "500 12px 'IBM Plex Sans'", padding: "0 3px" }}>
                              ✕
                            </button>
                          </span>
                        ))}
                        <button onClick={v.sel?.openStudio} style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "8px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} className="dc-hover-7">
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
                <button onClick={v.sel?.toggleWhy} style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", border: "none", background: "transparent", cursor: "pointer", padding: "0", margin: "26px 0 10px", textAlign: "left" }}>
                  <span style={{ font: "600 10.5px 'IBM Plex Mono'", letterSpacing: "0.07em", color: "#85888c" }}>RATIONALE</span>
                  <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#a7a9ac" }}>{T(v.sel?.whyToggleLabel)}</span>
                </button>
                {" "}
                {v.sel?.whyOpen ? (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px", background: "#fff", border: "1px solid #ecedee", borderRadius: "12px", padding: "16px 18px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: "12px" }}>
                        <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", paddingTop: "3px" }}>
                          OBSERVED
                        </span>
                        <span style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>
                          {T(v.sel?.observed)}
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: "12px" }}>
                        <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", paddingTop: "3px" }}>
                          DIAGNOSIS
                        </span>
                        <span style={{ font: "400 13px/1.55 'IBM Plex Sans'", color: "#3a3c40", textWrap: "pretty" }}>{T(v.sel?.why)}</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: "12px", alignItems: "center" }}>
                        <span style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c" }}>SOURCES</span>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          {L(v.sel?.sources).map((s, $index) => (
                            <span key={$index} style={{ font: "500 11px 'IBM Plex Mono'", color: "#55585d", background: "#f2f2f4", borderRadius: "5px", padding: "2px 7px" }}>
                              {T(s)}
                            </span>
                          ))}
                        </div>
                      </div>
                      {L(v.sel?.contexts).map((cx, $index) => (
                        <div key={$index} style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: "12px" }}>
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
                      <input value={v.sel?.ctxInput ?? ""} onChange={v.sel?.onCtx} onKeyDown={v.sel?.onCtxKey} placeholder="Add context the agent can't see — it will revise the proposal" style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a" }} />
                      <button onClick={v.sel?.sendCtx} style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #e2e3e5", background: "#f7f7f9", borderRadius: "7px", padding: "6px 11px", font: "500 12px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer", whiteSpace: "nowrap" }}>
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
                            <button onClick={v.sel?.approve} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "10px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer" }}>
                              {T(v.sel?.verb)}
                            </button>
                            <button onClick={v.sel?.openReject} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "10px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }}>
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
                              <button key={$index} onClick={r?.pick} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#0a0a0a", borderRadius: "20px", padding: "7px 13px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
                                {T(r?.label)}
                              </button>
                            ))}
                            <button onClick={v.sel?.cancelReject} style={{ border: "none", background: "transparent", color: "#85888c", padding: "7px 8px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }}>
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
                        <span style={{ font: "500 13px/1.45 'IBM Plex Sans'", color: v.sel?.stFg, flex: "1" }}>{T(v.sel?.statusText)}</span>
                        {v.sel?.canUndo ? (
                          <>
                            <button onClick={v.sel?.undo} style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "6px 12px", font: "500 12px 'IBM Plex Sans'", cursor: "pointer" }}>
                              Undo
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
      </div>
    </>
  );
}
