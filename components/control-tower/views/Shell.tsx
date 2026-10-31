// Shell — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { type Vals } from "../dc";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { AskPanel } from "./AskPanel";
import { HomeView } from "./HomeView";
import { NewActionModal } from "./NewActionModal";
import { ActionsView } from "./ActionsView";
import { EnrollmentView } from "./EnrollmentView";
import { InvoiceUploadModal } from "./InvoiceUploadModal";
import { BudgetView } from "./BudgetView";
import { SitesListView } from "./SitesListView";
import { SiteDetailView } from "./SiteDetailView";
import { PrimeChatPanel } from "./PrimeChatPanel";
import { StudySitesView } from "./StudySitesView";
import { AskPrimeView } from "./AskPrimeView";
import { EngagementsView } from "./EngagementsView";
import { EngagementPerformanceView } from "./EngagementPerformanceView";
import { ConnectorsView } from "./ConnectorsView";
import { StudioView } from "./StudioView";
import { RegulatoryView } from "./RegulatoryView";
import { AuditTrailView } from "./AuditTrailView";
import { ConnectSystemModal } from "./ConnectSystemModal";

export function Shell({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f6f6f8" }}>
        <Sidebar v={v} />
        <main style={{ flex: "1", display: "flex", flexDirection: "column", minWidth: "0", marginRight: v.ecW }}>
          <TopBar v={v} />
          {v.askShown ? <AskPanel v={v} /> : null}
          {v.isHome ? <HomeView v={v} /> : null}
          {v.na?.open ? <NewActionModal v={v} /> : null}
          {v.isInbox ? <ActionsView v={v} /> : null}
          {v.isStudies ? <EnrollmentView v={v} /> : null}
          {v.bu?.open ? <InvoiceUploadModal v={v} /> : null}
          {v.isBudget ? <BudgetView v={v} /> : null}
          {v.isBySiteList ? <SitesListView v={v} /> : null}
          {v.isBySite ? <SiteDetailView v={v} /> : null}
          {v.ec?.open ? <PrimeChatPanel v={v} /> : null}
          {v.isSites ? <StudySitesView v={v} /> : null}
          {v.isPrimeTab ? <AskPrimeView v={v} /> : null}
          {v.isEng ? <EngagementsView v={v} /> : null}
          {v.isEngPerfTab ? <EngagementPerformanceView v={v} /> : null}
          {v.isSystems ? <ConnectorsView v={v} /> : null}
          {v.isStudio ? <StudioView v={v} /> : null}
          {v.isReg ? <RegulatoryView v={v} /> : null}
          {v.isActivity ? <AuditTrailView v={v} /> : null}
        </main>
        {v.cm?.open ? <ConnectSystemModal v={v} /> : null}
      </div>
    </>
  );
}
