# Least-privilege access a Sponsor admin can set up per platform

Research for issue #28. The question: for Medidata Rave, Veeva Vault EDC, Veeva Vault CTMS, Oracle Clinical One and
Castor EDC, what can the Sponsor's IT admin provision so our connector reaches only the data its Recipe needs? Which
controls enforce the Recipe's field allowlist **at the source**, so ADR 0001's minimization does not rely only on
dropping fields when we parse?

Researched 2026-11-02 from vendor developer docs and help sites. Medidata's current help and Castor's helpdesk mostly
sit behind a login or block automated fetches; where that forced a weaker source (an archived copy of Medidata's own
RWS help, a search-engine extract of a Castor helpdesk page) the text says so. **(inference)** marks my judgement.
**(unconfirmed)** marks something to verify in the Sponsor's sandbox before relying on it.

What a Recipe needs (from `docs/data-model.md` and ADR 0001):

- **EDC feed:** Subject ID, Site, current status, screened / consented / randomized / discontinued (and completed)
  dates, screen-fail reason category.
- **CTMS feed:** Study (code, title, phase, status, NCT), Site (number, institution, address, country, status,
  activation dates), Site Contacts (name, role, email, phone, start and end dates), Study and Site plans; optionally
  monitoring visits and Site issues.

## TL;DR

- **Every platform supports a dedicated, read-only, Study- and Site-scoped integration account.** That part of least
  privilege is always available and should be required in every access request.
- **Field allowlist at the source:**
  - **Veeva Vault CTMS: yes.** Field-level security in a custom permission set hides each field the user lacks Read on,
    and VQL returns only "records and fields for which the authenticated user has Read or View permission". Do not
    ask for Direct Data API: it is all-or-nothing.
  - **Medidata Rave EDC: yes in principle, at study-build cost.** Rave has View Restrictions per role on forms and
    fields, and RWS "uses the Rave security model to determine what actions are permitted and what data can be
    accessed". Restrictions live in the Architect study build, so adding a role means a study-build change. Whether
    Clinical Views datasets honour them is unconfirmed. A Medidata-built Configurable Dataset is a second option.
  - **Oracle Clinical One: partly.** Only questions the study designer hid and classified (PII, Blinded, Sponsor…)
    can be withheld, by giving our role no View on those classifications and only "ODM … without Hidden Data". There
    is no form or item filter on the ODM extract, and the Subjects API returns `dob` and `gender`.
  - **Veeva Vault EDC: no field-level control.** The only data-level control is "Restricted Data Access" for
    restricted (blinded) forms. `View Casebook` exposes every other form. Minimization comes from endpoint choice:
    Retrieve Subjects returns the milestone dates without any form data.
  - **Castor EDC: partly.** Per-Site role permissions (view, export, …) and role-based hiding of parts of the eCRF
    (form blinding), which exports respect. An OAuth client has "the same access … as your username and password", so
    the role is the only boundary. The API's `field_ids` filter is our own request parameter, not an enforced allowlist.
  - **Medidata Rave CTMS:** no public API documentation found **(unconfirmed)**.
- **Recommendation (inference):** hand the admin one **access request per Recipe** (template below). Always ask for the
  baseline (dedicated account, read-only role, named Studies and Sites, no blinded or hidden data). Ask for the
  source-side allowlist where it is cheap (Vault CTMS field-level security), and offer it as optional where it means
  a study-build change (Rave restriction role, Clinical One classifications, Castor role blinding). Keep the
  parse-time drop in every case, with an alert when an unexpected field arrives, and say so in the request.

## Per-platform table

| Control | Medidata Rave EDC | Veeva Vault EDC | Veeva Vault CTMS | Oracle Clinical One | Castor EDC |
|---|---|---|---|---|---|
| Dedicated integration account | Yes, a dedicated Rave account; MAuth recommended [R1, R2] | Yes, a user with a Study Role that grants API Access [V1] | Yes, a Vault user with API Access [VC1] | Yes, an IAMS user with a study role [O3] | Yes, a Castor user with OAuth client credentials [C1] |
| Read-only by construction | Role with view permissions only; no Entry action **(inference)** [R1] | Template role "CDMS API Read Only" [V1] | Read-only User license type and security profile [VC2] | Copy of the "ODM Extract" template role, ODM Clinical Data "without Hidden Data" only [O1] | Role with `view` (+ `export`) only, no `edit`/`add`/`delete` [C2]; no read-only OAuth scope [C1] |
| Study scoping | Role assignments per Study [R1] | Study Role per Study [V1] | Record-level DAC sharing rules [VC4] (CTMS-specific setup **unconfirmed**) | Role per study and mode [O3] | User added per Study [C1] |
| Site scoping | Site assignment per user **(unconfirmed in a primary source)** | Study Country → Site hierarchy; Read Only role need not have All Sites [V1] | DAC on Study Site records [VC4] **(unconfirmed for CTMS)** | "Select all of the sites the user needs access to for each mode" [O3]; Subjects API returns only accessible Sites [O5] | Role assigned per Site (`site_id`, `role_name`) [C2] |
| Form-level hiding | Form View Restrictions per role [R3, R4] | Restricted forms only (meant for blinding) [V1, V2] | n/a (objects: object permissions) [VC3] | Only hidden, classified questions [O2] | Role blinding of eCRF parts; exports respect it [C3, C4] |
| **Field-level allowlist at source** | **Yes**: field View Restrictions per role; RWS applies Rave security [R1, R3, R4]. Clinical Views behaviour **unconfirmed** | **No** [V2] | **Yes**: field-level Read in a custom permission set; VQL respects it [VC3, VC5] | **Partial**: only designer-hidden, classified questions [O1, O2] | **Partial**: role blinding (field granularity **unconfirmed**) [C3, C4] |
| Saved, field-limited extract | Configurable (custom) dataset served by RWS, typically built from a customer-specific SQL script [R5] | Jobs (SDE, Core Listings) take a `forms` list and `sites` list, form-level only [V1] | Saved VQL is our query, not enforced; Direct Data API exports everything [VC6] | None in the ODM API (only time window, paging) [O4] | `field_ids` filter on data-points, ours, not enforced [C2] |
| Bulk export to avoid | Full study Clinical Views (all forms) | Study File Format, SDE with `all_forms=true` [V1] | Direct Data API (not configurable) [VC6] | ODM `unblinded` endpoint, Hidden Data permission [O1, O4] | `/export/data` exports all data points [C2] |
| Minimal-field endpoint | `StudySubjects` list; dataset per form (`/datasets/regular/{form-oid}`) [R5] | Retrieve Subjects returns Site, status and milestone dates only [V1] | VQL `SELECT` of listed fields [VC5] | None: Subjects API also returns `dob`, `gender`, comments [O5] | Participant list with `site` filter; `study_statistics` scope for aggregates [C2] |

## Per platform

### Medidata Rave EDC (and Rave CTMS)

- **Security model.** "RWS uses the Rave security model to determine what actions are permitted and what data can be
  accessed. The Rave user account used by the external system calling RWS must have an associated role which includes
  relevant permissions." Visible studies and subjects "relate to the security access granted to them by their role
  associations in Rave." Medidata "strongly recommend[s] creating a dedicated user account" for RWS. [R1]
  (Source: Medidata's RWS 2014.2.0 help, read from an archived copy because the live S3 help now returns 403.)
- **Field- and form-level restrictions.** Architect fields carry "View Restrictions" and "Entry Restrictions" [R3];
  the ODM study metadata carries `mdsol:ViewRestriction` on both FormDef and ItemDef, each naming the role it applies
  to [R4]. RWS's own guidance is that the RWS role "should also be set up with form and field restrictions for the
  relevant studies" [R1].
  - **(inference)** A Sponsor can create a "Primary integration" EDC role and view-restrict every form and field
    outside the Recipe for it. This is the strongest source-side allowlist of the EDCs reviewed. Its cost is that
    restrictions are part of the study build: changes "will not be reflected in EDC until a draft is published into
    a version and pushed" [R3], which in most Sponsors goes through the study-build change process.
  - **(unconfirmed)** Whether Clinical Views datasets (served by RWS `/datasets/…`) apply per-role view restrictions.
    Clinical Views are database views per form [R5]; test with a restricted role in the Sponsor's UAT.
- **Saved, field-limited extract.** RWS serves "Configurable Datasets", "customer-specific datasets created by
  executing a SQL script against the [Rave] database" [R5]. **(inference)** A dataset with exactly the Recipe's
  columns is a source-side allowlist, but it is usually built by Medidata services, so expect a change order.
- **Minimal call.** Clinical view datasets can be requested per form (`/studies/{study}/datasets/regular/{form-oid}`)
  and incrementally (`?start=`) [R5]. **(inference)** Rave has no fixed subject milestone fields: screened, consented,
  randomized and discontinued dates sit on study-specific forms (enrollment, randomization, disposition), so the
  Recipe names those form OIDs per study.
- **Rave CTMS.** No public CTMS API reference found; Medidata points integrators to Developer Central (login) [R6].
  **(unconfirmed)** Ask the Sponsor whether Rave CTMS data is reachable through RWS or a report export.

### Veeva Vault EDC (CDMS)

- **Read-only role.** "Clinical Data has two template or standard roles for API users: CDMS API Read Write and CDMS
  API Read Only." Read Write must have All Sites access; "this is not the case for users using the lesser role CDMS
  API Read Only." To narrow further, "a custom role is necessary" [V1].
- **Study and Site scoping.** Access is granted through a Study Role per Study, and "Access within a Study follows the
  Study Country -> Site hierarchy, i.e. which Sites a user can see" [V1].
- **No field- or form-level allowlist.** Role permissions are organized by tab and application function; Veeva's
  role management help describes no form- or item-level access control [V2]. The one data-level control is
  `Restricted Data Access`: "Ability to view restricted (blinded) Forms and Studies that contain restricted data" [V1].
  **(inference)** Marking extra forms "restricted" to hide them from us would also hide them from every blinded
  Sponsor user, so it is not a usable allowlist.
- **Minimization by endpoint.** Retrieve Subjects (`GET /api/{v}/app/cdm/subjects`, permissions API Access + View
  Casebook) returns Site, status and `initial_consent_date`, `screened_date`, `screen_failed_date`, `enrolled_date`,
  `randomized_date`, `withdrawn_date`, `end_study_date` and similar, with no form data [V1]. The screen-fail reason
  needs one form read (Retrieve Form Data takes `form_name`). Jobs such as SDE and Core Listings take
  `all_forms=false` + `forms: [...]` and `all_sites=false` + `sites: [...]` [V1]. These are request parameters we
  choose, not limits the admin enforces.
- **Avoid.** Study File Format and SDE with all forms deliver the whole casebook.

### Veeva Vault CTMS (Clinical Operations)

- **Account.** "A Vault user account with API access"; the API Access permission comes from the security profile or
  permission set [VC1]. The Read-only User license type cannot "edit … object records" [VC2]. License type and
  permission sets are two levels and "both must grant access" [VC2].
- **Field-level security.** In a custom permission set, each object field gets Read and Edit; without Read "the user
  cannot see or use the field in any way". It needs object-level permission and custom security profiles, and some
  protected objects and fields cannot be restricted ("Contact your Veeva representative for a full, current list") [VC3].
- **Enforced in the API.** "The results returned by a query are restricted based on the permissions of the
  authenticated user. The results include records and fields for which the authenticated user has Read or View
  permission." [VC5] So the Recipe's field allowlist can be the permission set itself.
- **Record-level (Study, Site).** Dynamic Access Control "provides object record-level security" through sharing
  rules and "does not override security profiles and permission sets" [VC4]. **(unconfirmed)** How a given Sponsor's
  CTMS secures Study, Study Site and Metrics records varies with its configuration; ask the admin.
- **Avoid Direct Data API.** "Direct Data API is not configurable, and all of the above data is always made available"
  [VC6].

### Oracle Clinical One

- **Role.** The "ODM Extract" template role holds four ODM permissions, including both "Execute ODM Clinical Data API
  with Hidden Data [Unblind]" and "… without Hidden Data", plus "Run the Site Dataset". Oracle says to copy the
  template and customize it [O1]. Oracle's ODM guide: "only select one between … with Hidden Data or … without Hidden
  Data" [O6]. **(inference)** For us: the copy keeps only "without Hidden Data" (plus Metadata/Administrative if the
  Recipe needs them) and no View on any data classification.
- **Hidden-data classifications.** Designers hide questions and label them Adjudication, Blinded, PII, Public or
  Sponsor; roles get view or edit per classification; Oracle's example hides a Social Security Number from all but
  site users and unblinded data managers [O2]. The unblinded ODM extract includes hidden data only if the user is
  allowed to see it [O4].
- **Site and mode scoping.** "Select all of the sites the user needs access to for each mode" [O3]. The Subjects API
  returns subjects for the Sites the user can access [O5].
- **No item allowlist on extracts.** The ODM clinical data endpoint accepts only `fileType`, `fromTimestamp`,
  `toTimestamp`, `includeCOExtensions`, `limit` and `offset`: no Site, form or item filter [O4].
- **Subjects API.** `GET /ec-dc-svc/rest/v6.0/studies/{studyId}/{mode}/subjects` returns `state`, `eventType`
  (Screened, Randomized, Screen_Failed, Withdrawn…), `screeningDate`, `screenFailureDate`, `informedConsentDate`,
  `withdrawalDate`, `siteId`, `screeningFailure`, `withdrawalReason`, **and also `dob`, `gender` and free-text
  comments** [O5]. **(inference)** This is the closest fit for the EDC Recipe, but date of birth and gender must be
  dropped at parse; they are outside ADR 0001.

### Castor EDC

- **Account and auth.** OAuth2 client credentials generated from the user's profile [C1]. The help center: the
  client ID and secret "will give you the same access to your account and studies as your username and password"
  [C5, via search extract]. OAuth scopes are `default` ("Grants access to everything"), `study_statistics` and
  `record`; there is no read-only scope [C1].
- **Per-Site roles.** A user's Study access is a set of `{site_id, role_name}` assignments, and a role holds booleans
  such as `view`, `add`, `edit`, `delete`, `export`, `randomization_read`, `encrypt`, `decrypt`, `email_addresses`
  [C2]. Some endpoints state the "Result is based on the site permissions of the API user" [C2].
  **(inference)** Ask for a role with `view` (and `export` if we use the export endpoint) only, assigned on the
  pilot Sites.
- **Role blinding.** Roles are used to hide parts of the eCRF ("choose which parts of the eCRF you want to hide for
  that role") [C3, via search extract]. "Form blinding permissions are taken into account while exporting data. In
  case the user is blinded, the related cells are empty in the export" [C4, via search extract], and the API's data
  export says "Blinding rules are taken into account" [C2]. **(unconfirmed)** Whether blinding goes down to single
  fields, and whether every data-points endpoint honours it (the spec documents a 403 "the repeating data is blinded"
  [C2]).
- **Client-side filters.** `GET /study/{id}/data-points/study?field_ids=...` and the participant list `?site=` are
  request parameters, not enforced limits [C2]. The `study_statistics` scope reaches only `/study/{id}/statistics`
  [C2]; **(unconfirmed)** whether its content covers per-Site enrollment counts.
- Encrypted fields appear as "*encrypted*" in exports for users without decrypt rights [C3, via search extract].

## Template: access request per Recipe

One request per Recipe and platform. We fill in everything except the admin's confirmations; the field list is
generated from the Recipe's approved field mapping.

```markdown
# Access request: <Recipe name> on <Platform> for <Sponsor>

Requested by: Primary (data processor under DPA <ref>)  ·  Date: <date>  ·  Recipe version: <id>
Purpose: <Scenario(s), e.g. EN0 Enrollment by Site, EN3 Recruitment blockers>

## 1. Account
- A dedicated, non-human integration account named `primary-integration-<env>`; not shared with any person.
- Auth: <MAuth app / Vault session or OAuth / Clinical One IAMS user / Castor client credentials>.
  Credentials are stored in our secret vault and rotated every <N> days. We will not log in through the UI.
- Environment: <UAT first, then Production>.

## 2. Role (read-only)
- Start from: <CDMS API Read Only | Read-only User + custom permission set | copy of "ODM Extract" |
  custom Rave role | custom Castor role>.
- Grant only: <list, e.g. API Access, View Casebook | ODM Clinical Data without Hidden Data | view>.
- Do NOT grant: any entry/edit/create/delete, user management, Restricted/Hidden/Unblinded data,
  data classifications <PII, Blinded, …>, decrypt, randomization read, bulk exports
  <Study File Format | Direct Data API | full-study export>.

## 3. Scope
- Studies: <study codes>.  Sites: <all Sites of those Studies | list>.  Mode: <production only>.

## 4. Data the Recipe reads (allowlist)
| Our field | Platform object/form | Platform field/item | Why (Scenario) |
|---|---|---|---|
| Subject ID | <e.g. subject / SubjectKey> | <name> | Patient list |
| Site | ... | ... | Per-Site funnel |
| Screened date | ... | ... | EN0, EN3 |
| ... | ... | ... | ... |

## 5. Source-side enforcement (please confirm which you can do)
- [ ] Field-level: hide every field not in section 4 from this role
      (<Vault CTMS permission set field Read | Rave View Restrictions | Clinical One hidden classifications |
      Castor role blinding>).
- [ ] Not possible / not now (we then rely on section 6 only).

## 6. What we do on our side regardless
- We request only the endpoints and forms in section 4, and drop any other field at ingestion
  before it is stored (ADR 0001).
- An unexpected field in a response raises an alert to <contact>; it is not stored.
- Every call is logged (endpoint, time, row count); logs are available to you on request.

## 7. Admin confirmation
Account created: <id>  ·  Role: <name>  ·  Scope applied: <studies/sites>  ·  Section 5: <done / not done>
Approved by: <name, role, date>
```

## Sources

Medidata Rave
- [R1] Medidata, *Introduction to Rave Web Services (RWS)*, RWS 2014.2.0 docs, archived copy:
  <http://web.archive.org/web/20171213131056/http://rws-webhelp.s3.amazonaws.com/WebHelp_ENG/introduction/index.html>
- [R2] rwslib (Medidata RWS client) getting started: <https://rwslib.readthedocs.io/en/stable/_sources/getting_started.rst.txt>
- [R3] Medidata Rave Architect WebHelp, *Form Designer* (live page now 403; content via search extract):
  <https://rave-webhelp.s3.amazonaws.com/Architect/WebHelp_ENG/Form_Designer.htm>
- [R4] rwslib, *Class Reference for Builders* (`MdsolViewRestriction`, `MdsolEntryRestriction`):
  <https://rwslib.readthedocs.io/en/latest/classes_builders.html>
- [R5] Medidata RWS docs, *Retrieve Clinical View Datasets as ODM* and *Retrieve custom datasets*, archived:
  <http://web.archive.org/web/2017/http://rws-webhelp.s3.amazonaws.com/WebHelp_ENG/features/10_get_clinical_view_clinical_data/01_retrieving_clinical_datasets_odm.html>,
  <http://web.archive.org/web/2017/http://rws-webhelp.s3.amazonaws.com/WebHelp_ENG/features/12_configurable_datasets/01_retrieving_custom_datasets.html>
- [R6] Medidata Developer Central: <https://www.medidata.com/en/clinical-trial-services/developer-central>

Veeva Vault EDC
- [V1] Veeva Clinical Data API v26.2 (sections *API Access and Roles*, *Retrieve Subjects*, *Jobs*):
  <https://developer-cdms.veevavault.com/api/26.2/>
- [V2] Veeva CDMS help, *Managing Study Roles*: <https://cdmshelp.veeva.com/gr/user-administrators/manage-study-roles/>

Veeva Vault CTMS
- [VC1] Vault API prerequisites: <https://general.veevavault.dev/vault-api/getting-started/prerequisites/>
- [VC2] *About License Types & Security Profiles*: <https://clinical.veevavault.help/en/gr/5721/>
- [VC3] *Configuring Field-Level Security on Objects*: <https://clinical.veevavault.help/en/gr/39108/index.md>
- [VC4] *About Dynamic Access Control for Objects*: <https://commercial.veevavault.help/en/gr/33946/index.md>
- [VC5] VQL *Access & Localization*: <https://general.veevavault.dev/vql/references/language-specifications/access-localization.md>
- [VC6] *Direct Data API overview*: <https://general.veevavault.dev/direct-data-api/overview.md>

Oracle Clinical One
- [O1] *ODM Extract* template study role:
  <https://docs.oracle.com/en/industries/life-sciences/clinical-one/user-provisioning/odm-extract-template.html>
- [O2] *Specify data classifications for a study role*:
  <https://docs.oracle.com/en/industries/life-sciences/clinical-one/user-provisioning/specify-data-classifications-study-role.html>
- [O3] *Add a user to a study*:
  <https://docs.oracle.com/en/industries/life-sciences/clinical-one/user-provisioning/add-user-study-oracle-clinical-one-platform.html>
- [O4] ODM clinical data extract, guide and blinded endpoint reference:
  <https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/ODM_02_Clinical.html>,
  <https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/op-ec-datahub-svc-rest-v11.0-studies-studyid-mode-odm-clinicaldata-blinded-get.html>
- [O5] Get subjects v6.0:
  <https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/op-ec-dc-svc-rest-v6.0-studies-studyid-mode-subjects-get.html>
- [O6] ODM extracts overview: <https://docs.oracle.com/en/industries/life-sciences/clinical-one/coapi/ODM_Overview.html>

Castor EDC
- [C1] Castor EDC API documentation (overview, OAuth2 scopes): <https://data.castoredc.com/api>
- [C2] Castor EDC OpenAPI spec 2026.1.7.1 (`Role`, `RoleAssignmentObject`, `/export/data`, `/data-points/study`,
  `/participant`, `/statistics`): <https://data.castoredc.com/api/swagger?format=json>
- [C3] Castor helpdesk, user roles and rights (blocks automated fetch; content via search extract):
  <https://helpdesk.castoredc.com/hc/en-us/articles/29389420437789-Castor-EDC-Permissions-Overview>,
  <https://helpdesk.castoredc.com/what-are-user-roles>
- [C4] Castor helpdesk, *Data standardization* (via search extract):
  <https://helpdesk.castoredc.com/hc/en-us/articles/27038000143517-Data-standardization>
- [C5] Castor helpdesk, *Where can I find my user/client credentials* (via search extract):
  <https://helpdesk.castoredc.com/hc/en-us/articles/27223650435229-Where-can-I-find-my-user-client-credentials-to-use-the-API-R-package-in-EDC-CDMS>

## Open questions (to test in the pilot Sponsor's UAT)

- Rave: do Clinical Views datasets served by RWS honour per-role View Restrictions?
- Vault CTMS: how does the Sponsor secure Study, Study Site, Study Person and Metrics records (DAC rules), and are any
  fields we must hide on Veeva's protected list?
- Clinical One: are `dob` and `gender` returned to a role with no PII classification (are they "hidden questions")?
- Castor: does role blinding work per field, and do all data-points endpoints honour it?
- Rave CTMS: is there an API or report export for Sites and Site Contacts?
