// NewActionModal — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function NewActionModal({ v }: { v: Vals }) {
  return (
    <>
      <div onClick={v.na?.close} style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(10,10,10,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div onClick={v.na?.stop} style={{ width: "100%", maxWidth: "580px", maxHeight: "min(720px, calc(100vh - 48px))", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 64px rgba(10,10,10,0.25)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px 18px", borderBottom: "1px solid #eeeff0", flex: "0 0 auto" }}>
            <span style={{ width: "26px", height: "26px", flex: "0 0 26px", borderRadius: "7px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M6.3 17.7l2.5-2.5M15.2 8.8l2.5-2.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <div style={{ minWidth: "0" }}>
              <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>New action</div>
              {" "}
              <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>
                Prime drafts it for your approval. Nothing is sent until you approve.
              </div>
            </div>
            <button onClick={v.na?.close} style={{ marginLeft: "auto", border: "none", background: "transparent", color: "#85888c", font: "500 15px 'IBM Plex Sans'", cursor: "pointer", padding: "4px 6px", borderRadius: "6px" }} className="dc-hover-4">
              ✕
            </button>
          </div>
          <div ref={v.na?.threadRef} style={{ flex: "1 1 auto", minHeight: "120px", overflowY: "auto", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px", background: "#fcfcfd" }}>
            {v.na?.empty ? (
              <>
                <div style={{ font: "400 13px/1.5 'IBM Plex Sans'", color: "#55585d", textWrap: "pretty" }}>
                  Describe what you need in plain words: the study, who it's for and what should happen. If anything is unclear, Prime will ask before drafting.
                </div>
              </>
            ) : null}
            {L(v.na?.thread).map((m, $index) => (
              <div key={$index} style={{ alignSelf: m?.align, maxWidth: "88%", display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ font: "500 10px 'IBM Plex Mono'", letterSpacing: "0.04em", color: "#85888c", alignSelf: m?.align }}>
                  {T(m?.who)}
                </span>
                <div style={{ background: m?.bg, color: m?.fg, border: `1px solid ${m?.bd ?? ""}`, borderRadius: "10px", padding: "9px 12px", font: "400 13px/1.5 'IBM Plex Sans'", textWrap: "pretty", whiteSpace: "pre-wrap" }}>
                  {T(m?.text)}
                </div>
              </div>
            ))}
            {v.na?.hasOptions ? (
              <>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {L(v.na?.options).map((o, $index) => (
                    <button key={$index} onClick={o?.pick} style={{ border: "1px solid #cddae5", background: "#fff", color: "#003358", borderRadius: "20px", padding: "5px 11px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer" }} className="dc-hover-5">
                      {T(o?.label)}
                    </button>
                  ))}
                </div>
              </>
            ) : null}
            {v.na?.loading ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "400 12.5px 'IBM Plex Sans'", color: "#55585d" }}>
                  {T(v.na?.spin)}{T(v.na?.loadingLabel)}
                </div>
              </>
            ) : null}
          </div>
          <div style={{ flex: "0 0 auto", borderTop: "1px solid #eeeff0", padding: "12px 18px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <textarea value={v.na?.text ?? ""} onChange={v.na?.onText} onKeyDown={v.na?.onKey} placeholder={v.na?.placeholder} rows={3} style={{ width: "100%", boxSizing: "border-box", resize: "vertical", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "9px 11px", font: "400 13px/1.45 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none" }} className="dc-focus-6" />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>Enter to send | Shift+Enter for a new line</span>
              <button onClick={v.na?.close} style={{ marginLeft: "auto", border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "7px 13px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>
                Cancel
              </button>
              <button onClick={v.na?.submit} style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "7px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", opacity: v.na?.btnOpacity }}>
                {T(v.na?.submitLabel)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
