// InvoiceUploadModal — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function InvoiceUploadModal({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ position: "fixed", inset: "0", zIndex: "60", background: "rgba(10,10,10,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onClick={v.bu?.close}>
        <div style={{ width: "100%", maxWidth: "560px", maxHeight: "min(740px, calc(100vh - 48px))", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 64px rgba(10,10,10,0.25)", display: "flex", flexDirection: "column", overflow: "hidden" }} onClick={v.bu?.stop}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px 18px", borderBottom: "1px solid #eeeff0", flex: "0 0 auto" }}>
            <span style={{ width: "26px", height: "26px", flex: "0 0 26px", borderRadius: "7px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M12 16V4M7 9l5-5 5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <div style={{ minWidth: "0" }}>
              <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>Upload invoice</div>
              {" "}
              <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>
                Prime checks every line against the site contract and the EDC.
              </div>
            </div>
            <button style={{ marginLeft: "auto", border: "none", background: "transparent", color: "#85888c", font: "500 15px 'IBM Plex Sans'", cursor: "pointer", padding: "4px 6px", borderRadius: "6px" }} onClick={v.bu?.close} className="dc-hover-7">
              ✕
            </button>
          </div>
          <div style={{ flex: "1 1 auto", overflowY: "auto", padding: "18px", display: "flex", flexDirection: "column", gap: "14px", background: "#fcfcfd" }}>
            {v.bu?.isPick ? (
              <>
                {v.bu?.noFile ? (
                  <>
                    <label style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "30px 20px", border: `1.5px dashed ${v.bu?.dropBd ?? ""}`, background: v.bu?.dropBg, borderRadius: "12px", cursor: "pointer", textAlign: "center" }} onDragOver={v.bu?.onDragOver} onDragLeave={v.bu?.onDragLeave} onDrop={v.bu?.onDrop}>
                      <input style={{ display: "none" }} type="file" accept=".pdf,.csv,.xls,.xlsx,.png,.jpg,.jpeg" onChange={v.bu?.onFile} />
                      <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "4px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 16V4M7 9l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span style={{ font: "500 13.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>
                        Drop an invoice here or{" "}
                        <span style={{ color: "#004677", textDecoration: "underline" }}>browse</span>
                      </span>
                      <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>
                        PDF, Excel, CSV or a scan | one invoice per file
                      </span>
                    </label>
                    <button style={{ alignSelf: "flex-start", border: "none", background: "transparent", color: "#003358", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", padding: "0", textDecoration: "underline" }} onClick={v.bu?.useSample}>
                      Or try a sample invoice from Hamburg Liver Institute
                    </button>
                  </>
                ) : null}
                {v.bu?.hasFile ? (
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid #ecedee", borderRadius: "10px", padding: "10px 12px", background: "#fff" }}>
                      <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "7px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {T(v.bu?.fileName)}
                        </div>
                        {" "}
                        <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bu?.fileSize)}</div>
                      </div>
                      <button style={{ border: "none", background: "transparent", color: "#85888c", font: "500 12px 'IBM Plex Sans'", cursor: "pointer", padding: "4px 6px" }} onClick={v.bu?.removeFile}>
                        Remove
                      </button>
                    </div>
                  </>
                ) : null}
                <div>
                  <div style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40", marginBottom: "6px" }}>Site</div>
                  {" "}
                  <select style={{ width: "100%", border: "1px solid #e2e3e5", borderRadius: "8px", padding: "8px 10px", font: "400 13px 'IBM Plex Sans'", color: "#0a0a0a", background: "#fff", outline: "none" }} value={v.bu?.site ?? ""} onChange={v.bu?.onSite}>
                    {L(v.bu?.siteOpts).map((o, $index) => (
                      <option key={$index} value={o?.v ?? ""}>{T(o?.l)}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : null}
            {v.bu?.isChecking ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid #ecedee", borderRadius: "10px", padding: "10px 12px", background: "#fff" }}>
                  <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "7px", background: "#e5ecf2", color: "#004677", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div style={{ font: "500 13px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {T(v.bu?.fileName)}
                    </div>
                    {" "}
                    <div style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bu?.fileSize)}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "4px 2px" }}>
                  {L(v.bu?.steps).map((p, $index) => (
                    <div key={$index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "22px", height: "22px", flex: "0 0 22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px 'IBM Plex Sans'", color: p?.iconFg, background: p?.iconBg }}>
                        {T(p?.icon)}
                      </span>
                      <span style={{ font: "400 13px 'IBM Plex Sans'", color: p?.fg }}>{T(p?.label)}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            {v.bu?.isResult ? (
              <>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "13px 15px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                    <div style={{ minWidth: "0" }}>
                      <div style={{ font: "600 14px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.bu?.rId)}</div>
                      {" "}
                      <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c", marginTop: "1px" }}>
                        {T(v.bu?.rSite)}{" | submitted today"}
                      </div>
                    </div>
                    <span style={{ font: "600 17px 'IBM Plex Mono'", color: "#0a0a0a" }}>{T(v.bu?.rTotal)}</span>
                  </div>
                  {" "}
                  <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", marginTop: "10px", textWrap: "pretty" }}>
                    {T(v.bu?.rSummary)}
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #ecedee", borderRadius: "10px", padding: "11px 15px" }}>
                  <div style={{ font: "600 10px 'IBM Plex Mono'", letterSpacing: "0.05em", color: "#85888c", marginBottom: "2px" }}>
                    INVOICE LINES
                  </div>
                  {" "}
                  {L(v.bu?.rLines).map((l, $index) => (
                    <div key={$index} style={{ display: "grid", gridTemplateColumns: "20px minmax(0,1fr) auto", gap: "3px 10px", alignItems: "center", padding: "10px 0", borderTop: l?.border }}>
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px 'IBM Plex Sans'", color: l?.iconFg, background: l?.iconBg }}>
                        {T(l?.icon)}
                      </span>
                      <div style={{ minWidth: "0" }}>
                        <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>{T(l?.d)}</span>
                        <span style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{" "}{"| "}{T(l?.qty)}</span>
                      </div>
                      <span style={{ font: "500 12.5px 'IBM Plex Mono'", color: "#0a0a0a", textAlign: "right" }}>{T(l?.amt)}</span>
                      <span style={{ gridColumn: "2/-1", font: "400 12px/1.45 'IBM Plex Sans'", color: l?.noteFg, textWrap: "pretty" }}>
                        {T(l?.note)}
                      </span>
                    </div>
                  ))}
                </div>
                {v.bu?.hasAgeNote ? (
                  <>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#fdf8ee", border: "1px solid #f3e3c3", borderRadius: "10px", padding: "11px 14px" }}>
                      <span style={{ width: "20px", height: "20px", flex: "0 0 20px", borderRadius: "50%", background: "#fdf3e0", color: "#b0730a", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px 'IBM Plex Sans'" }}>
                        !
                      </span>
                      <div style={{ font: "400 12.5px/1.5 'IBM Plex Sans'", color: "#1c1d1f", textWrap: "pretty" }}>{T(v.bu?.ageNote)}</div>
                    </div>
                  </>
                ) : null}
              </>
            ) : null}
          </div>
          <div style={{ flex: "0 0 auto", borderTop: "1px solid #eeeff0", padding: "12px 18px 14px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ font: "400 11.5px 'IBM Plex Sans'", color: "#85888c" }}>{T(v.bu?.footHint)}</span>
            <button style={{ marginLeft: "auto", border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "8px", padding: "7px 13px", font: "500 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap" }} onClick={v.bu?.close}>
              Cancel
            </button>
            <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "8px", padding: "7px 14px", font: "600 12.5px 'IBM Plex Sans'", cursor: "pointer", whiteSpace: "nowrap", opacity: v.bu?.btnOpacity }} onClick={v.bu?.primary}>
              {T(v.bu?.primaryLabel)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
