// PrimeChatPanel — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function PrimeChatPanel({ v }: { v: Vals }) {
  return (
    <>
      <aside style={{ position: "fixed", top: "0", right: "0", bottom: "0", width: "clamp(340px, 25vw, 440px)", zIndex: "40", background: "#fff", borderLeft: "1px solid #eaebec", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: "6px", padding: "14px 14px 10px 18px" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "transparent", padding: "4px 0", font: "600 14px 'IBM Plex Sans'", color: "#004677", cursor: "pointer" }} onClick={v.ec?.newChat}>
            New chat
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button style={{ marginLeft: "auto", width: "30px", height: "30px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#3a3c40" }} onClick={v.ec?.newChat} title="New chat" className="dc-hover-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="m17.5 3.5 3 3L12 15l-4 1 1-4 8.5-8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </button>
          <button style={{ width: "30px", height: "30px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#3a3c40" }} onClick={v.ec?.close} title="Close" className="dc-hover-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "6px 18px 18px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {v.ec?.isEmpty ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "8px" }}>
                <span style={{ flex: "0 0 32px", width: "32px", height: "32px", borderRadius: "9px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
                  </svg>
                </span>
                <div style={{ font: "600 17px/1.3 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>{T(v.ec?.introT)}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.06em", color: "#85888c" }}>SUGGESTED TASKS</div>
                {L(v.ec?.sugg).map((g, $index) => (
                  <button key={$index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", textAlign: "left", border: "1px solid #e2e3e5", background: "#fff", borderRadius: "12px", padding: "11px 14px", cursor: "pointer" }} onClick={g?.pick} className="dc-hover-6">
                    <span style={{ font: "600 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(g?.label)}</span>
                    <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#66696e" }}>{T(g?.sub)}</span>
                  </button>
                ))}
              </div>
            </>
          ) : null}
          {v.ec?.hasTask ? (
            <>
              <div style={{ alignSelf: "flex-end", maxWidth: "85%", background: "#f0f1f2", borderRadius: "16px", padding: "9px 14px", font: "400 14px/1.4 'IBM Plex Sans'", color: "#0a0a0a" }}>
                {T(v.ec?.ask)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 13px 'IBM Plex Sans'", color: "#66696e" }}>
                {v.ec?.reading ? (
                  <>
                    {T(v.ec?.spin)}
                  </>
                ) : null}
                {v.ec?.readDone ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12.5 4.5 4.5L19 7" stroke="#197a48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                ) : null}
                <span>{T(v.ec?.read)}</span>
              </div>
              {v.ec?.planned ? (
                <>
                  <div style={{ font: "400 15px/1.5 'IBM Plex Sans'", color: "#0a0a0a", textWrap: "pretty" }}>{T(v.ec?.msg)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 13px 'IBM Plex Sans'", color: "#66696e" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12.5 4.5 4.5L19 7" stroke="#197a48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {T(v.ec?.planner)}
                  </div>
                </>
              ) : null}
              {v.ec?.hasRefine ? (
                <>
                  <div style={{ alignSelf: "flex-end", maxWidth: "85%", background: "#f0f1f2", borderRadius: "16px", padding: "9px 14px", font: "400 14px/1.4 'IBM Plex Sans'", color: "#0a0a0a" }}>
                    {T(v.ec?.refineText)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 13px 'IBM Plex Sans'", color: "#66696e" }}>
                    {v.ec?.refining ? (
                      <>
                        {T(v.ec?.spin)}
                        <span>{T(v.ec?.planner)}{" | updating…"}</span>
                      </>
                    ) : null}
                    {v.ec?.refined ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="m5 12.5 4.5 4.5L19 7" stroke="#197a48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{T(v.ec?.planner)}{" | updated"}</span>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
              {v.ec?.showCard ? (
                <>
                  <div style={{ border: "1px solid #e2e3e5", borderRadius: "14px", padding: "16px 16px 14px", display: "flex", flexDirection: "column", gap: "3px", boxShadow: "0 1px 3px rgba(10,10,10,.04)" }}>
                    <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#003358" }}>{T(v.ec?.cardHead)}</div>
                    <div style={{ font: "500 13.5px 'IBM Plex Sans'", color: "#0a0a0a", marginBottom: "8px" }}>{T(v.ec?.cardTitle)}</div>
                    {L(v.ec?.rows).map((r, $index) => (
                      <div key={$index} style={{ display: "grid", gridTemplateColumns: "84px minmax(0,1fr)", gap: "10px", padding: "5px 8px", borderRadius: "6px", background: r?.bg }}>
                        <span style={{ font: "400 13px 'IBM Plex Sans'", color: "#66696e" }}>{T(r?.k)}</span>
                        <span style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(r?.v)}</span>
                      </div>
                    ))}
                    {v.ec?.pending ? (
                      <>
                        <div style={{ font: "400 12.5px 'IBM Plex Sans'", color: "#85888c", marginTop: "8px" }}>{T(v.ec?.note)}</div>
                        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                          <button style={{ border: "1px solid #d7d8da", background: "#fff", color: "#0a0a0a", borderRadius: "9px", padding: "8px 16px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.ec?.cancel} className="dc-hover-19">
                            Cancel
                          </button>
                          <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "8px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer", boxShadow: "0 2px 6px rgba(0,70,119,.2)" }} onClick={v.ec?.approve} className="dc-hover-2">
                            Approve
                          </button>
                        </div>
                      </>
                    ) : null}
                    {v.ec?.approved ? (
                      <>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "10px", font: "500 12.5px/1.4 'IBM Plex Sans'", color: "#197a48" }}>
                          <svg style={{ flex: "0 0 14px" }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {T(v.ec?.approvedText)}
                        </div>
                        <button style={{ alignSelf: "flex-start", marginTop: "6px", border: "none", background: "transparent", padding: "0", font: "600 12.5px 'IBM Plex Sans'", color: "#003358", cursor: "pointer" }} onClick={v.ec?.goResult} className="dc-hover-12">
                          {T(v.ec?.resultLink)}
                        </button>
                      </>
                    ) : null}
                    {v.ec?.cancelled ? (
                      <>
                        <div style={{ marginTop: "10px", font: "400 12.5px 'IBM Plex Sans'", color: "#85888c" }}>
                          Cancelled. Nothing was sent.
                        </div>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </div>
        <div style={{ flex: "0 0 auto", padding: "10px 14px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {v.ec?.hasChip ? (
            <>
              <button style={{ alignSelf: "flex-start", border: "1px solid #cddae5", background: "#e5ecf2", color: "#003358", borderRadius: "20px", padding: "5px 12px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.ec?.useChip} className="dc-hover-3">
                {T(v.ec?.chip)}
              </button>
            </>
          ) : null}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f4f5f6", borderRadius: "10px 10px 0 0", padding: "7px 12px 14px", marginBottom: "-12px", font: "500 12px 'IBM Plex Sans'", color: "#55585d" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="#004677" />
            </svg>
            {T(v.ec?.ctxLabel)}
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1.5px solid #8baac5", borderRadius: "14px", padding: "0 6px 0 14px", height: "52px" }}>
            <input style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", font: "400 14px 'IBM Plex Sans'", color: "#0a0a0a" }} value={v.ec?.text ?? ""} onChange={v.ec?.onText} onKeyDown={v.ec?.onKey} placeholder={v.ec?.placeholder} />
            <button style={{ width: "36px", height: "36px", flex: "0 0 36px", borderRadius: "50%", border: "1px solid #d7d8da", background: "#fff", color: "#55585d", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={v.ec?.send} title="Send" className="dc-hover-20">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
