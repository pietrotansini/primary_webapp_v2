// Sidebar — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
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
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navPrimeTab?.bg, color: v.navPrimeTab?.fg }} onClick={v.goPrimeTab}>
            <span style={{ width: "16px", height: "16px", flex: "0 0 16px", borderRadius: "5px", background: "#004677", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
              </svg>
            </span>
            <span style={{ whiteSpace: "nowrap" }}>Ask Prime</span>
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navPrime?.bg, color: v.navPrime?.fg }} onClick={v.goPrime}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" fill="currentColor" />
            </svg>
            Homepage
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navBySite?.bg, color: v.navBySite?.fg }} onClick={v.goBySite}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span style={{ whiteSpace: "nowrap" }}>Sites</span>
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navEng?.bg, color: v.navEng?.fg }} onClick={v.goEng}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <span style={{ whiteSpace: "nowrap" }}>Engagements</span>
            {v.engBadge ? (
              <>
                <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#004677", color: "#fff", borderRadius: "20px", padding: "1px 7px" }}>
                  1
                </span>
              </>
            ) : null}
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navInbox?.bg, color: v.navInbox?.fg }} onClick={v.goInbox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 13h5l1.5 3h5L16 13h5M5 5h14l2 8v6H3v-6l2-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            Actions
            <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#004677", color: "#fff", borderRadius: "20px", padding: "1px 7px" }}>
              {T(v.openCount)}
            </span>
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: "transparent", color: "#3a3c40" }} onClick={v.toggleAgents} className="dc-hover-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="4.5" y="7" width="15" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 7V4M9.5 12.5v.5M14.5 12.5v.5M2.5 12v3M21.5 12v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Agents
            <svg style={{ marginLeft: "auto", transform: v.agentsChev }} width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {v.agentsOpen ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "8px 10px 8px 28px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navStudies?.bg, color: v.navStudies?.fg }} onClick={v.goStudies}>
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
                <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "8px 10px 8px 28px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navBudget?.bg, color: v.navBudget?.fg }} onClick={v.goBudget}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9.5 8h5M9.5 12h5M9.5 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  Budget
                  <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#eeeff0", color: "#75787d", borderRadius: "20px", padding: "1px 7px" }}>
                    {T(v.bud?.navCount)}
                  </span>
                </button>
                <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "8px 10px 8px 28px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navReg?.bg, color: v.navReg?.fg }} onClick={v.goReg}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M12 8v4.5M12 15.6v.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span style={{ whiteSpace: "nowrap" }}>Regulatory</span>
                  {v.reg?.hasNew ? (
                    <>
                      <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#eeeff0", color: "#75787d", borderRadius: "20px", padding: "1px 7px" }}>
                        {T(v.reg?.newCount)}
                      </span>
                    </>
                  ) : null}
                </button>
              </div>
            </>
          ) : null}
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: "transparent", color: "#3a3c40" }} onClick={v.toggleAnalytics} className="dc-hover-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Analytics
            <svg style={{ marginLeft: "auto", transform: v.analyticsChev }} width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="m9 6 6 6-6 6" stroke="#95989c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {v.analyticsOpen ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "8px 10px 8px 28px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navStudyRec?.bg, color: v.navStudyRec?.fg }} onClick={v.goStudyRec}>
                  <svg style={{ flex: "0 0 16px" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 18l5-6 4 3 7-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ whiteSpace: "nowrap" }}>Patients</span>
                </button>
                <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "8px 10px 8px 28px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navEngPerf?.bg, color: v.navEngPerf?.fg }} onClick={v.goEngPerf}>
                  <svg style={{ flex: "0 0 16px" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M7 15l3-3 2.5 2L17 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ whiteSpace: "nowrap", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis" }}>Engagements</span>
                </button>
                <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "8px 10px 8px 28px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navActOv?.bg, color: v.navActOv?.fg }} onClick={v.goActOv}>
                  <svg style={{ flex: "0 0 16px" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 13h5l1.5 3h5L16 13h5M5 5h14l2 8v6H3v-6l2-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                  <span style={{ whiteSpace: "nowrap" }}>Actions</span>
                </button>
              </div>
            </>
          ) : null}
          <div style={{ display: "none", height: "1px", background: "#eeeff0", margin: "6px 10px" }} />
          <button style={{ display: "none", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navStudio?.bg, color: v.navStudio?.fg }} onClick={v.goStudio}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="m10 9.2 5 2.8-5 2.8V9.2Z" fill="currentColor" />
            </svg>
            AI Studio{" "}
            <span style={{ marginLeft: "auto", font: "600 9.5px 'IBM Plex Mono'", letterSpacing: "0.04em", background: "#e5ecf2", color: "#003358", borderRadius: "20px", padding: "2px 6px" }}>
              BETA
            </span>
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "11px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navActivity?.bg, color: v.navActivity?.fg }} onClick={v.goActivity}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Audit Trail
          </button>
        </div>
        <button style={{ marginBottom: "-6px", display: "flex", alignItems: "center", gap: "9px", width: "100%", padding: "9px 10px", border: "none", borderRadius: "8px", font: "500 13.5px 'IBM Plex Sans'", cursor: "pointer", textAlign: "left", background: v.navSystems?.bg, color: v.navSystems?.fg }} onClick={v.goSystems}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 3v4M15 3v4M6.5 7h11v4a5.5 5.5 0 0 1-11 0V7ZM12 16.5V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ whiteSpace: "nowrap" }}>Connectors</span>
          <span style={{ marginLeft: "auto", font: "500 11px 'IBM Plex Mono'", background: "#eeeff0", color: "#75787d", borderRadius: "20px", padding: "1px 7px" }}>
            {T(v.sysCount)}
          </span>
        </button>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ position: "relative", marginBottom: "-8px" }}>
            {v.chat?.open ? (
              <>
                <div style={{ position: "absolute", left: "0", right: "0", bottom: "calc(100% + 6px)", background: "#fff", border: "1px solid #e2e3e5", borderRadius: "10px", boxShadow: "0 8px 24px rgba(10,10,10,.12)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px", zIndex: "20" }}>
                  <div style={{ font: "500 10.5px 'IBM Plex Mono'", letterSpacing: ".04em", textTransform: "uppercase", color: "#85888c", padding: "6px 8px 4px" }}>
                    Chat with Prime in
                  </div>
                  {L(v.chat?.apps).map((a, $index) => (
                    <button key={$index} style={{ display: "flex", alignItems: "center", gap: "9px", width: "100%", padding: "7px 8px", border: "none", borderRadius: "7px", background: "transparent", cursor: "pointer", textAlign: "left" }} onClick={a?.add} className="dc-hover-0">
                      {a?.isTeams ? (
                        <>
                          <img style={{ width: "20px", height: "20px", flex: "0 0 20px", objectFit: "contain" }} src="/assets/teams.png" alt="" />
                        </>
                      ) : null}
                      {a?.isSlack ? (
                        <>
                          <img style={{ width: "20px", height: "20px", flex: "0 0 20px", objectFit: "contain" }} src="/assets/slack.png" alt="" />
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
            <button style={{ display: "flex", alignItems: "center", gap: "9px", width: "100%", padding: "8px 10px", border: "1px dashed #cfd1d4", borderRadius: "8px", background: "#fff", font: "500 12.5px 'IBM Plex Sans'", color: "#3a3c40", cursor: "pointer", textAlign: "left" }} onClick={v.chat?.toggle} className="dc-hover-1">
              <span style={{ display: "flex", alignItems: "center", gap: "3px", flex: "0 0 auto" }}>
                <img style={{ width: "15px", height: "15px", objectFit: "contain" }} src="/assets/teams.png" alt="" />
                <img style={{ width: "14px", height: "14px", objectFit: "contain" }} src="/assets/slack.png" alt="" />
              </span>
              <span style={{ whiteSpace: "nowrap" }}>{T(v.chat?.label)}</span>
            </button>
          </div>
          <div style={{ borderTop: "1px solid #eeeff0", paddingTop: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#e8edf2", color: "#384e65", display: "flex", alignItems: "center", justifyContent: "center", font: "600 12px 'IBM Plex Sans'", flex: "0 0 30px" }}>
              MC
            </div>
            <div style={{ lineHeight: "1.15", minWidth: "0" }}>
              <div style={{ font: "600 12.5px 'IBM Plex Sans'", color: "#0a0a0a" }}>Marie Curious</div>
              {" "}
              <div style={{ font: "400 11px 'IBM Plex Sans'", color: "#85888c" }}>Clinical Operations</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
