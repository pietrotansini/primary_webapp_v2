# Vendor data access options for the pilot

Research for issue #5. The question: for each class of source system, how can a sponsor-side, read-only third-party product get one sponsor's real multi-study data for an MVP pilot?

Researched 2026-10-31. Facts come from vendor developer docs, vendor help sites and CDISC wherever those exist. When a vendor publishes no developer docs (true of most RTSM, eCOA and payments vendors), the vendor's own marketing pages are the best available source, and the text says so. Statements marked **(inference)** are my judgement, not a sourced fact.

## TL;DR

- **The two big EDC/CTMS platforms have documented APIs and do not require a partner program.** The sponsor already owns the tenant. Its admin creates a read-only integration user for us, and we call the API as that user.
  - Medidata Rave: Rave Web Services (RWS), CDISC ODM over REST.
  - Veeva Vault: the Vault REST API, Direct Data API, and the EDC API with Study File Format.
  - Oracle Clinical One: REST API with ODM-XML extracts and SAS reports.
  - Partner programs (Medidata Developer Central, Veeva partner tiers) are only needed for a sandbox or for listing/certification. A pilot needs neither.
- **RTSM/IRT, eCOA, eConsent, site payments and CRO reports have no public developer docs.** Suvoda, Signant and 4G Clinical all say they have APIs and configurable scheduled data transfers, but the specs are only shared during a study engagement. **(inference)** The realistic pilot route is the transfer the sponsor already receives (CSV/SAS over SFTP or cloud storage, or a standard report), redirected or copied to us under the sponsor's existing contract.
- **Standards:** CDISC ODM (v1.3.2 is the common one; v2.0 was published 2023-08-23 and can be serialized as XML or JSON) is the native export of Rave and Clinical One. Veeva's EDC exports are CSV, SAS or XPT, with SDTM as an option. SDTM is an analysis/submission format, usually produced late and by the CRO. **(inference)** It is a poor fit for live recruitment tracking.
- **Fastest pilot route (inference):** use a **file-drop ingestion path first**:
  1. The sponsor uploads, or SFTP-pushes, the exports and reports it already produces (EDC subject/enrollment listings, the RTSM randomization report, CTMS site/enrollment metrics, CRO weekly trackers).
  2. Add **one API connector** for whichever EDC/CTMS the pilot sponsor uses, through a sponsor-provisioned read-only user.

  Files need no vendor change order, so the pilot can start in days. An API connector usually needs the sponsor's IT/QA approval, a vendor-side user and possibly a vendor services engagement, which takes weeks.

## Per system class

### EDC

#### Medidata Rave EDC

- **API:** Rave Web Services (RWS) is a REST API. It exchanges data in CDISC ODM, and authenticates with either Basic auth using a *Rave* (not iMedidata) account or Medidata's MAuth (an app UUID plus a private key). "Requests are performed in the context of this user's rights and permissions." Accounts linked to MAuth have no password expiry, so MAuth is the better choice for long-running integrations. URL pattern: `https://{tenant}.mdsol.com/RaveWebServices`. ([rwslib getting started](https://rwslib.readthedocs.io/en/stable/_sources/getting_started.rst.txt), [Medidata tech blog](https://techblog.mdsol.com/2014/11/21/rwslib-a-rave-web-service-library.html))
- **Read endpoints:**
  - `ClinicalStudiesRequest`, which only lists the studies the user is assigned to.
  - `StudySubjectsRequest`.
  - Clinical Views datasets (study, subject or version level, optionally filtered by form), returned as ODM.
  - Biostats Gateway (metadata, form data, comments, protocol deviations).
  - ODM Adapter (audit records, sites metadata, users).

  ([rwslib docs](https://rwslib.readthedocs.io/), [Medidata.RWS.NET core resources](https://medidatarwsnetstandard.readthedocs.io/en/stable/core_resources.html))
- **Access:** the sponsor's Rave admin creates a dedicated Rave account with web-service rights on the pilot studies. The client libraries recommend "a dedicated RAVE account you intend to use for web service activities". ([Medidata.RWS.NET getting started](https://medidatarwsnetstandard.readthedocs.io/en/stable/getting_started.html))
- **Sandbox/partner:** Medidata Developer Central is "100% free to join" and gives "a test environment of Rave". Membership is not partner certification. ([Developer Central](https://www.medidata.com/en/clinical-trial-services/developer-central)) Medidata states that Rave eCOA, eConsent and RTSM data flow into Rave EDC on one platform. **(inference)** For a Rave sponsor, RWS may therefore also cover Medidata eCOA and RTSM data. ([Medidata EDC systems page](https://www.medidata.com/en/data-experience/edc-systems/))
- **Exports without the API:** Clinical Views can be configured, scheduled and extracted, and the training materials mention a scheduler and SAS on Demand. Reporter data listings download as CSV. I found no primary source confirming SFTP push. ([Clinical Views eLearning outline](https://www.medidata.com/wp-content/uploads/2019/01/eLearning-Outline-Rave-Clinical-Views-Overview.pdf))

#### Veeva Vault EDC (Clinical Data / CDMS)

- **API:** the EDC REST API (JSON) has a separate developer portal from the core Vault API. ([developer-cdms.veevavault.com](https://developer-cdms.veevavault.com/), [API v26.2](https://developer-cdms.veevavault.com/api/26.2/))
  - **Read endpoints:** Retrieve Studies, Study Countries, Sites, Subjects, Events/Forms, Forms/Item Data and Queries.
  - **Study jobs:** Study Data Extract (SDE), progress listings, Query Detail Listing, Core Listings, audit trail, Data Change Report and Casebook Design Export.
  - **Auth:** `POST /api/{v}/auth` returns a session ID, sent as a Bearer token. OAuth 2.0/OIDC is also supported.
  - **Limits:** pages hold at most 1000 records. Job status can be polled at most once per 10 seconds.
- **Access:** calls fail with `INSUFFICIENT_ACCESS` unless the user has the API Access permission. The template role **"CDMS API Read Only"** exists. View Casebook is needed to see subjects. Restricted Data Access is needed for restricted forms. ([API v26.2](https://developer-cdms.veevavault.com/api/26.2/))
- **Bulk export, Study File Format (SFF):** a ZIP of CSVs (one file per form definition) plus a `manifest.json` schema.
  - It is pulled through the API, with no job to start. Incremental packages are published every 15 min and full packages every 24 h.
  - It covers EDC, CDB and non-Veeva EDC data, and has no customizations.
  - It requires the *Study File Format Access* permission.
  - SDE, by contrast, supports CSV, SAS and XPT and can be delivered to FTP(S) or AWS S3.

  ([Comparing Export Methods](https://clinicaldata.veevavault.help/en/lr/monitors/cdb/export-methods/), [Exporting Data](https://cdmshelp.veeva.com/gr/clinical-reporting/exports/))
- Clinical Reporting exports offer None, Raw and **SDTM** export types, as CSV or sas7bdat. ([Exporting Data](https://cdmshelp.veeva.com/gr/clinical-reporting/exports/))

#### Oracle Clinical One

- **API:** REST API with ODM-XML extracts (clinical data blinded or unblinded, metadata, admin data). It needs a token, which lasts 10 minutes, and a study role with the ODM permissions, for example "Execute ODM Clinical Data API without Hidden Data". ([ODM extracts overview](https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/ODM_Overview.html))
- Standard reports, such as the Subject Data Extract in SAS format, can be listed, generated and downloaded through the API. ([Download a standard report](https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/CR_Overview.html), [use cases](https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/use-cases.html))

### CTMS and eTMF

#### Veeva Vault CTMS and eTMF (Clinical Operations)

- **API:** the core Vault REST API, with VQL for queries. It needs "a Vault user account with API access", and the API Access permission is set in the security profile or permission set by the sponsor's Vault admin. ([Vault API prerequisites](https://general.veevavault.dev/vault-api/getting-started/prerequisites/), [Vault API reference](https://developer.veevavault.com/api/25.2/))
- **Recruitment-relevant objects:**
  - **Metrics:** "planned, forecast, and actual enrollment and performance metrics" for the study, country and site.
  - **Subjects:** status and status dates, usually filled "through integration or regular file load from a data capture or randomization system".
  - Monitoring events.
  - A Veeva-native connection syncs Subjects and Visits from EDC to CTMS.

  ([CTMS overview](https://clinical.veevavault.help/en/gr/40009/index.md), [Subject & Enrollment Metrics jobs](https://clinical.veevavault.help/en/gr/63782/))
- **Bulk: Direct Data API.** This read-only bulk extract is "not designed for real-time application integration".
  - Full file every 24 h, incremental every 15 min, plus daily audit logs.
  - Covers all standard and custom objects, document metadata, picklists and workflows, with a `metadata.csv` schema.
  - Off by default. An admin enables it under Admin > Settings > General Settings.
  - Veeva EDC uses SFF instead.
  - The page does not state the cost.

  ([Direct Data API overview](https://general.veevavault.dev/direct-data-api/overview.md))
- **Partner program:** Veeva partner tiers give a development sandbox ([Base partner overview](https://pantheon.veeva.com/wp-content/uploads/2015/03/Partner%20Level%20Overview%20Documents_Base.pdf), [AI Partner Program](https://www.veeva.com/resources/veeva-launches-ai-partner-program/)). They are not needed to call a sponsor's own Vault with a user the sponsor provisions. **(inference)** Expect the sponsor to apply its standard Veeva integration-user licensing and security review.

#### Medidata Rave CTMS

- Rave CTMS tracks planned and actual enrollment at study, country and site level, and is unified with Rave EDC. ([Rave CTMS fact sheet](https://www.medidata.com/wp-content/uploads/2023/10/Rave-CTMS-Fact-Sheet-Oct-23.pdf))
- I found no public CTMS-specific API reference. RWS is Medidata's documented integration surface, and developer inquiries go to webservices@mdsol.com. ([Medidata RWS press release](https://www.medidata.com/en/press-releases/medidata-solutions-advances-interoperability-clinical-systems-medidata-rave-web-services-api))

#### Advarra OnCore

- OnCore is a *site/institution-side* CTMS, used by academic medical centers. ([UW OnCore overview](https://kb.wisc.edu/smph/informatics/12774)) I found no public API docs.
- **(inference)** A biotech sponsor will not normally hold an OnCore tenant. Its data reaches the sponsor through site reports. Out of scope for the pilot.

### RTSM / IRT

- **Suvoda:** offers "standard and custom APIs, flat file transfer, cloud storage, and event subscriptions". Transfers are scheduled "at regular intervals—from minutes to months", with the data points, file format and method tailored per trial. Data warehouses are listed as an integration target. There are no public API docs. ([Suvoda integrations](https://www.suvoda.com/irt-integrations?hsLang=en))
- **Signant:** RTSM "reporting APIs" emit events such as randomizations and dispensations in chronological order, and "the typical consumer ... is a data warehouse solution or analytics platform". There are no public API docs. ([Signant blog on RTSM APIs](https://signanthealth.com/resources/blog/clinical-supplies/application-programming-interfaces-apis-in-randomization-and-trial-supply-management-rtsm))
- **4G Clinical (Prancer):** integrations run as a separate microservice. Once one is built, it becomes "simple configuration" for other clients. There are no public API docs. ([4G Clinical integrations & reporting](https://www.4gclinical.com/clinical-data-integrations-reporting))
- **Almac:** no developer documentation found.
- **Oracle Clinical One:** randomization is part of the same platform and API. ([use cases](https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/use-cases.html))
- **(inference)** For every RTSM vendor, a new data feed is a per-study specification and usually a change order under the sponsor's contract. The quickest pilot input is the standard subject/randomization status report that sponsor users can already download from the IRT portal. It must stay **blinded**: the treatment-arm assignment must not be ingested.

### eCOA/ePRO and eConsent

- **Medidata:** eCOA shares "Same Back-end ... Same Extracts, Same Audit Trail" with Rave EDC ([Rave eCOA fact sheet](https://www.medidata.com/wp-content/uploads/2022/03/Medidata-eCOA-Fact-sheet-0322.pdf)). eConsent "onboards patients directly into Rave" per Medidata, and Rave aggregates "eConsent, eCOA, RTSM, and Imaging" data ([Medidata EDC systems page](https://www.medidata.com/en/data-experience/edc-systems/)). **(inference)** For a Medidata sponsor, these data arrive through the Rave route.
- **Veeva:** eCOA and eConsent data that land in Vault EDC or CDB are covered by the EDC API and SFF route above.
- **Standalone vendors (Signant, YPrime, etc.):** no public API docs found. **(inference)** The route is the same as RTSM: scheduled vendor data transfers (CSV/SAS) under the sponsor's data transfer agreement, or portal compliance reports.

### Site payments

- **Greenphire:** Greenphire's site payments product integrates with "EDC, CTMS, ERP, and data warehouse" sources. No public API docs were found. ([Greenphire site payments](https://greenphire.com/site-payments)) Greenphire news is now published on suvoda.com, which suggests the two companies are combined. ([example](https://www.suvoda.com/insights/all-news/news/latest-innovation-in-site-payments))
- **(inference)** Payment data is only marginally useful for recruitment and is commercially sensitive. Skip it in the pilot, or take a CSV report.

### CRO operational reports

- There is no standard or API. **(inference)** CROs deliver weekly or monthly enrollment trackers as Excel/CSV through email, a portal or SFTP, under the contract's reporting deliverables. Ingesting these files is unavoidable for any sponsor that outsources. It is also the most "control-tower-specific" value: reconciling CRO-reported numbers against EDC/IRT truth.

## Standards summary

| Standard | What it is | Where it shows up |
|---|---|---|
| CDISC ODM v1.3.2 / v2.0 | Vendor-neutral exchange of clinical data plus metadata, admin, reference and audit info. v2.0 was published 2023-08-23, breaks backward compatibility, and can be serialized as XML or JSON. ([CDISC ODM v2.0](https://www.cdisc.org/standards/data-exchange/odm-xml/odm-v2-0)) | Native in Rave RWS and Clinical One extracts |
| CDISC Dataset-JSON | Derived from ODM. ([CDISC ODM v2.0 page](https://www.cdisc.org/standards/data-exchange/odm-xml/odm-v2-0)) | Emerging submission transport |
| SDTM (DM, DS domains) | Tabulation format. DS records disposition milestones such as informed consent, enrollment and randomization. ([SDTMIG](https://www.cdisc.org/standards/foundational/sdtmig)) | Veeva Clinical Reporting SDTM export; CRO-produced. **(inference)** Lags live data, so not suited to daily recruitment tracking. |
| CSV / SAS / XPT extracts | Proprietary layouts | Veeva SFF/SDE, Oracle reports, RTSM/eCOA transfers, CRO trackers |

## Recommended pilot route (inference)

1. **Week 0–1, files only.** The sponsor's ClinOps uploads, or SFTP-pushes, the exports it already has: an EDC subject/status listing (Rave Clinical Views CSV, Veeva SFF/SDE CSV), the IRT screening/randomization report (blinded), CTMS site and enrollment metrics, and the CRO tracker. This needs no vendor involvement, change order or partner program, only the sponsor's data-sharing/DPA paperwork.
2. **Weeks 2–6, one API connector** for the sponsor's EDC platform, as a sponsor-provisioned read-only user:
   - Rave: a dedicated RWS account with MAuth.
   - Veeva: a "CDMS API Read Only" user for SFF, plus a Vault API Access user for CTMS.
   - Oracle: a study role with ODM extract permissions.

   This is the route most likely to be approved without the vendor's services team, because the docs describe it as a configuration the customer controls.
3. **Later:** replace the RTSM and CRO files with vendor-scheduled transfers (SFTP/S3) once the pilot proves value and the sponsor is willing to raise change orders.

Open questions for the pilot sponsor:
- Which EDC, CTMS and IRT vendors does it use?
- Does it already have a data warehouse receiving vendor transfers? If so, we could read from there instead.
- What does its IT/QA require before granting an integration user?

Cost and lead times for vendor-side data transfer changes are not public for any vendor reviewed.
