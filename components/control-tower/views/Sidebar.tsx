// Sidebar — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { L, T, type Vals } from "../dc";

export function Sidebar({ v }: { v: Vals }) {
  return (
    <>
      <aside style={{ width: "216px", flex: "0 0 216px", background: "#fff", borderRight: "1px solid #eaebec", display: "flex", flexDirection: "column", padding: "16px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px 20px" }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#004677", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 30px" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h3l2-6 4 14 3-9 2 3h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ lineHeight: "1.1" }}>
            <div style={{ font: "600 13.5px 'IBM Plex Sans'", letterSpacing: "-0.01em", color: "#0a0a0a" }}>Primary</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <button onClick={v.goPrime} style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navPrime?.bg, color: v.navPrime?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" fill="currentColor" />
            </svg>
            Prime
          </button>
          <button onClick={v.goStudies} style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navStudies?.bg, color: v.navStudies?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="4.4" rx="1.3" stroke="currentColor" strokeWidth="1.8" />
              <rect x="3" y="10.8" width="18" height="4.4" rx="1.3" stroke="currentColor" strokeWidth="1.8" />
              <rect x="3" y="17.6" width="18" height="4.4" rx="1.3" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Enrollment
            <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#eeeff0", color: "#75787d", borderRadius: "20px", padding: "1px 7px" }}>
              5
            </span>
          </button>
          <button onClick={v.goBudget} style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navBudget?.bg, color: v.navBudget?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M9.5 8h5M9.5 12h5M9.5 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Budget
            <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#eeeff0", color: "#75787d", borderRadius: "20px", padding: "1px 7px" }}>
              {T(v.bud?.navCount)}
            </span>
          </button>
          <button onClick={v.goInbox} style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navInbox?.bg, color: v.navInbox?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 13h5l1.5 3h5L16 13h5M5 5h14l2 8v6H3v-6l2-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            Actions
            <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#004677", color: "#fff", borderRadius: "20px", padding: "1px 7px" }}>
              {T(v.openCount)}
            </span>
          </button>
          <button onClick={v.goStudio} style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navStudio?.bg, color: v.navStudio?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="m10 9.2 5 2.8-5 2.8V9.2Z" fill="currentColor" />
            </svg>
            AI Studio
            <span style={{ marginLeft: "auto", font: "600 9.5px 'IBM Plex Mono'", letterSpacing: "0.04em", background: "#e5ecf2", color: "#003358", borderRadius: "20px", padding: "2px 6px" }}>
              BETA
            </span>
          </button>
          <button onClick={v.goActivity} style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navActivity?.bg, color: v.navActivity?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Audit Trail
          </button>
        </div>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ position: "relative", marginBottom: "-8px" }}>
            {v.chat?.open ? (
              <>
                <div style={{ position: "absolute", left: "0", right: "0", bottom: "calc(100% + 6px)", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 8px 24px rgba(10,10,10,.12)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px", zIndex: "20" }}>
                  <div style={{ font: "500 10.5px 'IBM Plex Mono'", letterSpacing: ".04em", textTransform: "uppercase", color: "#85888c", padding: "6px 8px 4px" }}>
                    Chat with Prime in
                  </div>
                  {L(v.chat?.apps).map((a, $index) => (
                    <button key={$index} onClick={a?.add} style={{ display: "flex", alignItems: "center", gap: "9px", width: "100%", padding: "7px 8px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", textAlign: "left" }} className="dc-hover-0">
                      {a?.isTeams ? (
                        <>
                          <img src="/assets/teams.png" alt="" style={{ width: "20px", height: "20px", flex: "0 0 20px", objectFit: "contain" }} />
                        </>
                      ) : null}
                      {a?.isSlack ? (
                        <>
                          <img src="/assets/slack.png" alt="" style={{ width: "20px", height: "20px", flex: "0 0 20px", objectFit: "contain" }} />
                        </>
                      ) : null}
                      <span style={{ flex: "1", minWidth: "0", font: "500 12.5px 'IBM Plex Sans'", color: "#0a0a0a", whiteSpace: "nowrap" }}>
                        {T(a?.name)}
                      </span>
                      <span style={{ font: "600 11.5px 'IBM Plex Sans'", color: a?.fg }}>{T(a?.label)}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : null}
            {" "}
            <button onClick={v.chat?.toggle} style={{ display: "flex", alignItems: "center", gap: "9px", width: "100%", padding: "8px 10px", border: "1px dashed #cfd1d4", borderRadius: "8px", background: "#fff", font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer", textAlign: "left" }} className="dc-hover-1">
              <span style={{ display: "flex", alignItems: "center", gap: "3px", flex: "0 0 auto" }}>
                <img src="/assets/teams.png" alt="" style={{ width: "15px", height: "15px", objectFit: "contain" }} />
                <img src="/assets/slack.png" alt="" style={{ width: "14px", height: "14px", objectFit: "contain" }} />
              </span>
              <span style={{ whiteSpace: "nowrap" }}>{T(v.chat?.label)}</span>
            </button>
          </div>
          <button onClick={v.goSystems} style={{ marginBottom: "-6px", display: "flex", alignItems: "center", gap: "9px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navSystems?.bg, color: v.navSystems?.fg }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 3v4M15 3v4M6.5 7h11v4a5.5 5.5 0 0 1-11 0V7ZM12 16.5V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ whiteSpace: "nowrap" }}>Connect systems</span>
            <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#eeeff0", color: "#75787d", borderRadius: "20px", padding: "1px 7px" }}>
              {T(v.sysCount)}
            </span>
          </button>
          <div style={{ borderTop: "1px solid #eeeff0", paddingTop: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#e8edf2", color: "#384e65", display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Sans'", flex: "0 0 30px" }}>
              AE
            </div>
            <div style={{ lineHeight: "1.15", minWidth: "0" }}>
              <div style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>Albert Enrollstein</div>
              {" "}
              <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>Head of Clinical Operations</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
