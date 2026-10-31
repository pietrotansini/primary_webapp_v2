// ConnectSystemModal — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { T, type Vals } from "../dc";

export function ConnectSystemModal({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ position: "fixed", inset: "0", background: "rgba(10,10,10,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: "50" }} onClick={v.cm?.close}>
        <div style={{ width: "100%", maxWidth: "420px", background: "#fff", borderRadius: "14px", boxShadow: "0 20px 50px rgba(10,10,10,0.22)", overflow: "hidden" }} onClick={v.cm?.stop}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "18px 20px 14px", borderBottom: "1px solid #f0f0f3" }}>
            <div style={{ width: "38px", height: "38px", flex: "0 0 38px", borderRadius: "9px", background: "#e5ecf2", color: "#003358", display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Mono'" }}>
              {T(v.cm?.mono)}
            </div>
            <div style={{ flex: "1", minWidth: "0" }}>
              <div style={{ font: "600 15px 'IBM Plex Sans'", color: "#0a0a0a" }}>{"Connect "}{T(v.cm?.name)}</div>
              {" "}
              <div style={{ font: "400 12px 'IBM Plex Sans'", color: "#85888c" }}>{"Sign in with your "}{T(v.cm?.vendor)}{" account"}</div>
            </div>
            <button style={{ border: "none", background: "transparent", cursor: "pointer", color: "#85888c", font: "500 18px 'IBM Plex Sans'", padding: "2px 6px", lineHeight: "1" }} onClick={v.cm?.close}>
              ×
            </button>
          </div>
          {" "}
          <div style={{ padding: "18px 20px 6px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40" }}>Username</span>
              <input style={{ height: "40px", border: "1px solid #dfe0e2", borderRadius: "9px", padding: "0 12px", font: "400 13.5px 'IBM Plex Sans'", color: "#0a0a0a", outline: "none" }} value={v.cm?.user ?? ""} onChange={v.cm?.onUser} onKeyDown={v.cm?.onKey} placeholder="name@company.com" autoComplete="username" className="dc-focus-34" />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40" }}>Password</span>
              <input style={{ height: "40px", border: "1px solid #dfe0e2", borderRadius: "9px", padding: "0 12px", font: "400 13.5px 'IBM Plex Sans'", color: "#0a0a0a", outline: "none" }} type="password" value={v.cm?.pass ?? ""} onChange={v.cm?.onPass} onKeyDown={v.cm?.onKey} placeholder="••••••••" autoComplete="current-password" className="dc-focus-34" />
            </label>
            {v.cm?.hasErr ? (
              <>
                <div style={{ font: "500 12px 'IBM Plex Sans'", color: "#bd3226" }}>{T(v.cm?.err)}</div>
              </>
            ) : null}
            <div style={{ font: "400 12px/1.5 'IBM Plex Sans'", color: "#66696e", background: "#f6f6f8", borderRadius: "9px", padding: "10px 12px", textWrap: "pretty" }}>
              {"Agents get read-only access. Any change in "}{T(v.cm?.name)}{" needs your approval. Credentials are encrypted and never shown to agents."}
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", padding: "14px 20px 18px" }}>
            <button style={{ border: "1px solid #e2e3e5", background: "#fff", color: "#3a3c40", borderRadius: "9px", padding: "9px 16px", font: "500 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.cm?.close}>
              Cancel
            </button>
            <button style={{ border: "none", background: "#004677", color: "#fff", borderRadius: "9px", padding: "9px 18px", font: "600 13px 'IBM Plex Sans'", cursor: "pointer" }} onClick={v.cm?.submit}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
