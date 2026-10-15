// Shell — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.

import { type Vals } from "../dc";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { AskPanel } from "./AskPanel";
import { PrimeView } from "./PrimeView";
import { NewActionModal } from "./NewActionModal";
import { ActionsView } from "./ActionsView";
import { EnrollmentView } from "./EnrollmentView";
import { InvoiceUploadModal } from "./InvoiceUploadModal";
import { BudgetView } from "./BudgetView";
import { SitesView } from "./SitesView";
import { SystemsView } from "./SystemsView";
import { StudioView } from "./StudioView";
import { AuditTrailView } from "./AuditTrailView";
import { ConnectSystemModal } from "./ConnectSystemModal";

export function Shell({ v }: { v: Vals }) {
  return (
    <>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f6f6f8" }}>
        <Sidebar v={v} />
        <main style={{ flex: "1", display: "flex", flexDirection: "column", minWidth: "0" }}>
          <TopBar v={v} />
          {v.askShown ? <AskPanel v={v} /> : null}
          {v.isPrime ? <PrimeView v={v} /> : null}
          {v.na?.open ? <NewActionModal v={v} /> : null}
          {v.isInbox ? <ActionsView v={v} /> : null}
          {v.isStudies ? <EnrollmentView v={v} /> : null}
          {v.bu?.open ? <InvoiceUploadModal v={v} /> : null}
          {v.isBudget ? <BudgetView v={v} /> : null}
          {v.isSites ? <SitesView v={v} /> : null}
          {v.isSystems ? <SystemsView v={v} /> : null}
          {v.isStudio ? <StudioView v={v} /> : null}
          {v.isActivity ? <AuditTrailView v={v} /> : null}
        </main>
        {v.cm?.open ? <ConnectSystemModal v={v} /> : null}
      </div>
    </>
  );
}
