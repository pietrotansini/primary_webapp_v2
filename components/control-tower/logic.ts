// @ts-nocheck — the prototype's behaviour, ported verbatim from the design export.
// Control Tower logic — generated from "project/Primary v3.dc.html" by scripts/convert-design.mjs.
// Edit the design export and re-run `npm run convert-design`, or edit this file directly.
import React from "react";
import { DCLogic } from "./dc";
import { complete } from "@/lib/claude";

const ITEMS = [
  { id:'budget', sites:['PHX','SAN','ATL'], study:'DIA-2043', pri:'P1', kind:'Budget change', time:'6:04 AM', type:'changes', verb:'Approve & apply',
    title:'Shift 20% of paid-referral budget from Site 12 to Sites 3 & 7', to:'Campaign budget | Q3 referral spend',
    changes:[{label:'Site 12 | Phoenix Clinical',from:'$42,000',to:'$33,600'},{label:'Site 03 | San Diego Research',from:'$18,000',to:'$22,200'},{label:'Site 07 | Atlanta Clinical',from:'$18,000',to:'$22,200'}],
    observed:'Site 12 costs $4.1k per enrolled patient vs $2.5k at Sites 3 & 7. Referral-to-enrollment is 9% vs 22%.',
    why:'Spend is concentrated on the lowest-converting site while two better sites have open screening capacity.',
    sources:['Campaign tool','EDC'], impact:'+8 enrolled over 6 weeks', days:24, conf:'High',
    followUp:'Applied in the campaign tool. The agent will report conversion weekly and propose changes if Sites 3 & 7 saturate.' },
  { id:'charite', sites:['CHA'], study:'DIA-2043', pri:'P1', kind:'Email to CRO', time:'6:04 AM', type:'email', verb:'Approve & send',
    title:'Request a CRA staffing plan from Medpace for Charité', to:'K. Wagner, Study Lead | Medpace',
    subject:'DIA-2043 | Charité CRA coverage',
    body:'Hi Katrin,\n\nReferrals at Charité have dropped from 32 to 13 per week since the CRA departure on Jun 16, and there\'s no mitigation logged in CTMS.\n\nCould Medpace share a staffing plan by Jul 18 — interim coverage and a start date for the replacement CRA?\n\nThanks,\nMarie',
    observed:'Referrals fell from 32/wk to 13/wk after the Jun 16 CRA departure. No CAPA in CTMS.',
    why:'The referral collapse tracks an unfilled CRA role; recovery needs a CRO commitment.',
    sources:['CTMS','Referral tool'], impact:'+6 referrals per week', days:18, conf:'Medium',
    followUp:'Sent to Medpace. If there\'s no plan by Jul 18, the agent will propose an escalation.' },
  { id:'nash', sites:['HAM','CHI'], study:'NASH-3301', pri:'P1', kind:'Email to sites', time:'6:04 AM', type:'email', verb:'Approve & send',
    title:'Send NASH-3301 differentiator points to the Hamburg and Chicago PIs', to:'Dr. L. Becker, PI | Hamburg Liver Institute; Dr. R. Hayes, PI | Chicago Liver Research',
    subject:'NASH-3301 | key points for patient conversations',
    body:'Dear Dr. Becker, Dear Dr. Hayes,\n\nOther NASH trials are now recruiting in your area. When your team talks to potential participants, these points may help explain what NASH-3301 offers them:\n\n• 9 clinic visits over 52 weeks\n• One biopsy at screening. Later fibrosis checks use FibroScan instead of a repeat biopsy\n• All participants can join the open-label extension after week 52\n• We reimburse travel, and home visits are available for weeks 12–40\n\nI\'m happy to set up a short call with your coordinators if that would help.\n\nMarie Curious\nClinical Operations',
    observed:'Two new NASH trials started recruiting at Hamburg and Chicago this month (ClinicalTrials.gov). They have similar F2–F3 inclusion criteria. Referrals at both sites fell 35% in 3 weeks.',
    why:'The competing studies draw on the same referral pool at these sites. Coordinators need clear reasons to recommend NASH-3301.',
    sources:['ClinicalTrials.gov','Referral tool'], impact:'Protect ~6 referrals per week', days:14, conf:'Medium',
    followUp:'Sent to both PIs. The agent will compare referral trends at Hamburg and Chicago over the next 3 weeks.' },
  { id:'houston', sites:['HOU'], study:'DIA-2043', pri:'P2', kind:'Meeting', time:'6:04 AM', type:'email', verb:'Approve & schedule', lowRisk:true,
    title:'Schedule a first-patient-in check-in with Houston Metro Research', to:'S. Patel (coordinator), D. Moore (CRA)',
    subject:'DIA-2043 | first-patient-in check-in (30 min)',
    body:'Hi both,\n\nHouston Metro has been active since May 20 without a first screen. I\'d like 30 minutes to walk through what\'s blocking first-patient-in.\n\nProposed: Tue Jul 15, 10:00 CT  |  Wed Jul 16, 14:00 CT\n\nMarie',
    observed:'Activated May 20, zero screened. Comparable sites enroll a first patient within 18 days.',
    why:'The activation-to-first-patient handoff has stalled; early intervention prevents a dead site.',
    sources:['Site activation','CTMS'], impact:'+4 enrolled over 8 weeks', days:7, conf:'Medium',
    followUp:'Invite sent to the site. Responses will appear in the Audit Trail.' },
  { id:'nwu', sites:['NWU'], study:'DIA-2043', pri:'P2', kind:'Email to site', time:'6:04 AM', type:'email', verb:'Approve & send', lowRisk:true,
    title:'Send Northwestern an HbA1c sample-timing checklist before the Nov 5 monitoring visit', to:'Jenna Walsh (coordinator), Dr. Amara Okafor (PI)',
    subject:'DIA-2043 | HbA1c screening samples',
    body:'Hi Jenna, hi Dr. Okafor,\n\n6 of the 9 screen failures since July were on the HbA1c inclusion range. The lab turnaround is 5 to 7 days, so samples drawn late in the screening window can come back after it closes.\n\nAttached is a one-page checklist for drawing the HbA1c sample at the first screening contact. Could we go through it at the Nov 5 monitoring visit?\n\nMarie',
    observed:'6 of 9 screen failures at Northwestern since July were on the HbA1c inclusion range. The lab turnaround is 5 to 7 days.',
    why:'Sample timing looks like the main cause. Drawing the sample earlier keeps eligible candidates inside the screening window.',
    sources:['EDC','Site emails'], impact:'+3 enrolled over 8 weeks', days:5, conf:'Medium',
    followUp:'Sent to the site. Prime will compare HbA1c screen failures before and after Nov 5.' },
  { id:'nwu-lab', seed:'closed', closedOn:'Oct 3', sites:['NWU'], study:'DIA-2043', pri:'P2', kind:'Email to site', time:'Sep 30', type:'email', verb:'Approve & send',
    title:'Ask Northwestern to confirm the HbA1c lab turnaround', to:'Jenna Walsh (coordinator)',
    subject:'DIA-2043 | HbA1c lab turnaround',
    body:'Hi Jenna,\n\nCould you confirm how many days your local lab takes to return HbA1c results? We want to make sure screening samples come back inside the 28-day window.\n\nThanks,\nMarie',
    observed:'4 of 6 HbA1c screen failures since July had results dated in the last 3 days of the screening window.', why:'If results arrive late, eligible candidates fail screening on timing alone.',
    sources:['EDC'], impact:'Confirms the screen-fail cause', days:0, conf:'High',
    followUp:'Jenna Walsh confirmed a 5 to 7 day turnaround. Prime used it to draft the sample-timing checklist.' },
  { id:'nwu-tab', seed:'closed', closedOn:'Oct 16', sites:['NWU'], study:'DIA-2043', pri:'P3', kind:'Supply request', time:'Oct 8', type:'changes', verb:'Approve & request',
    title:'Send two more eCOA tablets to Northwestern before the November visits', to:'eCOA vendor | device logistics',
    changes:[{label:'eCOA tablets on site',from:'2',to:'4'}],
    observed:'Northwestern has 9 participant visits in the next 4 weeks and 2 eCOA tablets. Visits on the same morning overlap.', why:'Participants waiting for a tablet leave questionnaires incomplete.',
    sources:['EDC','Site emails'], impact:'Fewer missing eCOA entries', days:0, conf:'Medium',
    followUp:'Tablets delivered on Oct 16 and activated by the site.' },
  { id:'nwu-ctms', seed:'closed', closedOn:'Sep 18', sites:['NWU'], study:'DIA-2043', pri:'P3', kind:'CTMS update', time:'Sep 15', type:'changes', verb:'Approve & apply', lowRisk:true,
    title:'Add the new Northwestern sub-investigator to CTMS and the newsletter list', to:'CTMS | site contacts',
    changes:[{label:'Sub-investigator',from:'—',to:'Dr. Ben Adler'},{label:'Newsletter contacts',from:'3',to:'4'}],
    observed:'The delegation log signed on Sep 12 lists Dr. Ben Adler. CTMS still shows 3 contacts.', why:'Site contacts in CTMS drive newsletter distribution and monitoring visit invites.',
    sources:['eTMF','CTMS'], impact:'Keeps site contacts current', days:0, conf:'High',
    followUp:'CTMS updated. Dr. Adler received the September newsletter.' },
  { id:'barcelona', sites:['BCN'], study:'DIA-2043', pri:'P2', kind:'Site request', time:'Yesterday', type:'changes', verb:'Approve & request',
    title:'Fund a part-time patient navigator at Barcelona Metabolic', to:'Site budget amendment | Barcelona Metabolic',
    changes:[{label:'Patient navigator | 0.5 FTE',from:'—',to:'$3,200 / mo'},{label:'Duration',from:'—',to:'12 weeks'}],
    observed:'28% of eligible patients drop at consent vs 11% average. Exit reasons cite visit burden.',
    why:'Consent-stage friction; a navigator addresses scheduling and comprehension.',
    sources:['eConsent','Patient engagement'], impact:'+3 enrolled over 8 weeks', days:6, conf:'Medium',
    followUp:'Amendment request sent to the site. Consent drop-off will be tracked for 4 weeks.' },
  { id:'campaign', study:'DIA-2043', pri:'P3', kind:'Campaign change', time:'Yesterday', type:'changes', verb:'Approve & publish', lowRisk:true,
    title:'Add two pre-screen questions to the EU referral campaign', to:'EU digital referral form',
    changes:[{label:'Type 2 diabetes diagnosis > 6 months?',from:'—',to:'Required'},{label:'Currently on metformin?',from:'—',to:'Required'}],
    observed:'EU referral eligible-rate is 22% vs 41% in the US.',
    why:'EU pre-qualification is too loose and dilutes screening capacity.',
    sources:['Referral tool','EDC'], impact:'+4% referral quality', days:4, conf:'Low',
    followUp:'Published to the EU form. Eligible-rate will be compared after 200 new referrals.' },
  { id:'rapay', study:'RA-2209', pri:'P1', kind:'Email to finance', time:'6:04 AM', type:'email', verb:'Approve & send',
    title:'Escalate 3 months of unpaid site invoices for RA-2209', to:'J. Okafor, Clinical Finance Lead',
    subject:'RA-2209 | site invoices overdue for 3 months',
    body:'Hi Jordan,\n\nSites on RA-2209 have had no invoice payments for 3 months. Several coordinators have asked about this, and unpaid sites tend to slow screening.\n\nCould Finance confirm the cause and clear the backlog this month? A list of the outstanding invoices is attached.\n\nThanks,\nMarie',
    observed:'No site invoices paid for 3 months across RA-2209. Coordinators have raised it on monitoring calls.',
    why:'If sites aren\'t paid, they give the study lower priority, and screening slows within weeks.',
    sources:['CTMS','Site payments'], impact:'Protect current enrolment pace', days:30, conf:'Medium',
    followUp:'Sent to Finance. If payments haven\'t gone out by month-end, the agent will propose an escalation.' },
  { id:'inv-pay', sites:['LDS','BAL','BER'], study:'RA-2209', pri:'P1', kind:'Payment release', time:'6:00 AM', type:'changes', verb:'Approve & release', budget:true,
    title:'Release $96.4k in verified invoices to 3 RA-2209 sites unpaid for 90+ days', to:'Site payments | next payment run',
    changes:[{label:'Leeds Rheumatology | 3 invoices',from:'Unpaid 104 days',to:'$31,800'},{label:'Hopkins Arthritis Center | 3 invoices',from:'Unpaid 96 days',to:'$38,600'},{label:'Charité Rheuma | 3 invoices',from:'Unpaid 92 days',to:'$26,000'}],
    observed:'9 invoices at 3 sites have waited 92–104 days for approval. Every line in this release matches the contract and the EDC. The 10 disputed lines ($4,120) stay on hold.',
    why:'Sites unpaid for more than 3 months often pause screening. Leeds screening is already down 30% since August.',
    sources:['CTMS','EDC','Site payments'], impact:'Keeps screening open at 3 sites', days:21, conf:'High',
    followUp:'Released in the next payment run. Prime will confirm receipt with each site and watch screening for 4 weeks.' },
  { id:'inv-hop', sites:['BAL'], study:'RA-2209', pri:'P2', kind:'Email to site', time:'6:00 AM', type:'email', verb:'Approve & send', budget:true,
    title:'Ask Hopkins Arthritis Center to re-bill 4 visits at the contracted 30 minutes', to:'M. Ruiz, Site Finance | Hopkins Arthritis Center',
    subject:'RA-2209 | invoice INV-BAL-0318: investigator visit time',
    body:'Hi Maria,\n\nInvoice INV-BAL-0318 bills 4 Week 12 investigator visits at 1 hour each. The site contract sets this visit at 30 minutes ($310 per visit), and the EDC visit records show 25–35 minutes.\n\nCould you re-issue these 4 lines at the contracted rate? The rest of the invoice is verified and is included in this week\'s payment release.\n\nIf a visit ran longer for a clinical reason, send a short note and we will review it.\n\nThanks,\nMarie',
    observed:'4 Week 12 visits billed at 1 h ($620 each). The contract sets 30 min ($310). EDC visit records show 25–35 min.',
    why:'The invoice does not match the contract or the EDC. A re-issue fixes it without holding the rest of the invoice.',
    sources:['CTMS','EDC'], impact:'Corrects $1,240 over-billing', days:0, moneyTxt:'$1,240 corrected', moneyNote:'4 visits × ($620 billed − $310 contracted)', conf:'High',
    followUp:'Sent to Hopkins. Prime will match the re-issued invoice against the contract when it arrives.' },
  { id:'inv-lab', sites:['LDS'], study:'RA-2209', pri:'P2', kind:'Invoice hold', time:'6:00 AM', type:'changes', verb:'Approve & apply', budget:true,
    title:'Hold 6 lab lines at Leeds until results are in the EDC', to:'Invoice INV-LDS-0291 | Leeds Rheumatology',
    changes:[{label:'6 lab panels (CRP, ESR) | Week 8',from:'Pending',to:'On hold | $2,880'},{label:'11 other lines',from:'Pending',to:'Approved | $8,800'}],
    observed:'6 lab panels are billed for Week 8. The EDC has no results for those participants yet. The other 11 lines match.',
    why:'Labs are paid once results are in the EDC. Holding only these lines lets the rest of the invoice go out with the payment release.',
    sources:['EDC','Site payments'], impact:'$2,880 held until verified', days:0, moneyTxt:'$2,880 held', moneyNote:'6 lab panels × $480 contracted rate. Paid once results are uploaded.', conf:'High',
    followUp:'Lines held. Prime will release them once results appear in the EDC.' },
  { id:'inv-dup', sites:['CHA'], study:'DIA-2043', pri:'P3', kind:'Invoice rejection', time:'6:00 AM', type:'changes', verb:'Approve & reject', budget:true,
    title:'Reject duplicate invoice INV-CHA-0107 from Charité Diabetes Ctr', to:'Site payments | Charité Diabetes Ctr',
    changes:[{label:'INV-CHA-0107 | 5 screening visits',from:'Pending',to:'Rejected as duplicate'},{label:'INV-CHA-0102 | same 5 visits',from:'Pending',to:'Approved | $4,300'}],
    observed:'INV-CHA-0107 bills the same 5 screening visits, dates and amount as INV-CHA-0102. Both were submitted on Aug 15.',
    why:'The same visits are billed twice, likely a resubmission. Paying one and rejecting the other avoids an overpayment.',
    sources:['Site payments','EDC'], impact:'Avoids $4,300 overpayment', days:0, moneyTxt:'$4,300 avoided', moneyNote:'Full amount of the duplicate invoice', conf:'High',
    followUp:'Duplicate rejected and the site notified. INV-CHA-0102 is in the next payment run.' },
];
const STUDIES = [
  { id:'NASH-3301', name:'NASH Metabolic', phase:'Phase 2', enrolled:22, target:120, start:'2025-09-15', plan:'2027-02-26', base:'2027-06-30', dot:'#c6390f', note:'ClinicalTrials.gov shows 2 new NASH studies recruiting the same F2–F3 patients at 2 of our sites, Hamburg and Chicago. Referrals at both sites are down 35% in 3 weeks.' },
  { id:'DIA-2043', name:'Type 2 Diabetes', phase:'Phase 2', enrolled:96, target:180, start:'2024-02-20', plan:'2026-11-17', base:'2027-02-18', dot:'#c6390f', note:'Most of the gap comes from budget spent on low-converting sites, the CRA vacancy at Charité, a stalled first patient in Houston and consent drop-off in Barcelona.' },
  { id:'RA-2209', name:'Rheumatoid Arthritis', phase:'Phase 3', enrolled:300, target:320, start:'2024-05-20', plan:'2026-08-04', base:'2026-08-04', dot:'#197a48', note:'Site invoices appear unpaid for 3 months — enrolment may slow if sites aren\'t paid this month.' },
];
const PROTO_COST = {
  'DIA-2043':{ proto:'DIA-2043 protocol v4.0', design:[['Design','Randomized, double-blind, placebo-controlled | Phase 2'],['Treatment','52 weeks | 14 on-site visits per participant'],['Sites','17 active | monitoring visit every 6 weeks'],['Enrollment','180 participants | baseline last participant in Feb 18, 2027']],
    rows:[['CRO project management',6900,'Medpace work order | staffed to the 52-week treatment period'],['Site monitoring',5200,'Monitoring plan v3 | 17 sites, on-site visit every 6 weeks'],['Site maintenance fees',1560,'Clinical trial agreements | 17 sites × $2,800 a month'],['Central lab and CGM data services',2300,'Vendor contract | fixed monthly portion only'],['IP supply, depot and placebo storage',2100,'Supply plan | 2 depots, 52-week dosing'],['EDC, IRT and eCOA licences',1640,'Vendor contracts | monthly licences'],['Sponsor study team',1700,'Internal FTE plan | 3.2 FTE']] },
  'NASH-3301':{ proto:'NASH-3301 protocol v2.1', design:[['Design','Randomized, placebo-controlled | Phase 2'],['Treatment','72 weeks | liver biopsy at screening and Week 72, MRI-PDFF every 24 weeks'],['Sites','9 active | monitoring visit every 4 weeks'],['Enrollment','120 participants | baseline last participant in Jun 30, 2027']],
    rows:[['CRO project management',7800,'CRO work order | 72-week treatment period'],['Site monitoring',4600,'Monitoring plan v2 | 9 sites, on-site visit every 4 weeks'],['Site maintenance fees',1020,'Clinical trial agreements | 9 sites × $3,400 a month'],['Central imaging and histopathology',5900,'Vendor retainers | MRI-PDFF reads and biopsy panel'],['IP supply and depot',2700,'Supply plan | 72-week dosing'],['EDC, IRT and eCOA licences',2300,'Vendor contracts | monthly licences'],['Sponsor study team',2580,'Internal FTE plan | 4 FTE']] },
  'RA-2209':{ proto:'RA-2209 protocol v3.0', design:[['Design','Randomized, active-comparator | Phase 3'],['Treatment','104 weeks | 18 on-site visits, X-ray scoring at Weeks 0, 52 and 104'],['Sites','8 active | monitoring visit every 4 weeks'],['Enrollment','320 participants | baseline last participant in Aug 4, 2026']],
    rows:[['CRO project management',14600,'CRO work order | 104-week treatment period'],['Site monitoring',9800,'Monitoring plan v4 | 8 sites, on-site visit every 4 weeks'],['Site maintenance fees',1090,'Clinical trial agreements | 8 sites × $4,100 a month'],['Central lab and radiographic scoring',7400,'Vendor contracts | fixed monthly portion only'],['IP and active comparator supply',8900,'Supply plan | 104-week dosing, comparator sourcing'],['EDC, IRT and eCOA licences',3210,'Vendor contracts | monthly licences'],['Sponsor study team',3200,'Internal FTE plan | 5 FTE']] },
};
const ACT_DIRECT = { budget:[0,'Reallocated within the Q3 referral budget'], charite:[0,'CRA cover is already in the Medpace contract'], nash:[0,'No new spend'], houston:[0,'CRA time within the monitoring budget'], barcelona:[9600,'Patient navigator, 0.5 FTE for 8 weeks (site quote)'], campaign:[0,'No new spend'], rapay:[0,'Payments are already owed to sites'], 'inv-pay':[0,'Payments are already owed to sites'] };
function costImpactOf(it) { if (!it.days) return 0; const pc = PROTO_COST[it.study] || PROTO_COST['DIA-2043'], rate = pc.rows.reduce((a, r) => a + r[1], 0), dd = ACT_DIRECT[it.id] || [0]; return it.days * rate - dd[0]; }
const MONEY_BASIS = { 'inv-hop':'Protocol v3.0 §8.2 sets the Week 12 visit at 30 minutes. The Hopkins agreement (Schedule B) pays $310 for that visit.', 'inv-lab':'Protocol v3.0 §9.1 requires a CRP and ESR panel at Week 8. The Leeds agreement pays $480 per panel once results are in the EDC.', 'inv-dup':'Protocol v4.0 §7.1 defines one screening visit per participant. INV-CHA-0102 already bills these 5 visits.' };
const DAY_COST = { 'Phase 1':7829, 'Phase 2':23737, 'Phase 3':55716 };
function costOf(studyId, days) { const s = STUDIES.find(x => x.id === studyId); const ph = s ? s.phase.replace(/^(Phase \d).*/, '$1') : 'Phase 2'; const v = (DAY_COST[ph] || 0) * days; return { v, ph, rate:DAY_COST[ph] || 0, txt: v >= 1e6 ? '$' + (v / 1e6).toFixed(v >= 1e7 ? 1 : 2).replace(/\.?0+$/, '') + 'M' : '$' + Math.round(v / 1e3) + 'k' }; }
const BN = { Screening:['#bd3226','#fcecea'], Referral:['#bd3226','#fcecea'], Consent:['#b0730a','#fdf3e0'], Activation:['#b0730a','#fdf3e0'], Retention:['#b0730a','#fdf3e0'], None:['#197a48','#e7f6ee'] };
const STC = { 'On track':['#27a763','#197a48','#e7f6ee'], 'Watch':['#e5a11a','#b0730a','#fdf3e0'], 'At risk':['#d9483f','#bd3226','#fcecea'] };
const DIA_SITES = [
  ['Northwestern Endocrine','Chicago, US','NWU',4,14,'Screening','41% screen-fail on HbA1c inclusion — likely lab timing.',13,9,22,12],
  ['Charité Diabetes Ctr','Berlin, DE','CHA',3,12,'Referral','Referrals down 60% since the CRA vacancy on Jun 16.',4,1,2,16],
  ['Barcelona Metabolic','Barcelona, ES','BCN',6,11,'Consent','28% drop-off at consent — visit burden is the top exit reason.',9,2,5,6],
  ['Houston Metro Research','Houston, US','HOU',0,6,'Activation','Activated May 20 with zero screened. Comparable sites enroll a first patient within 18 days.',0,0,8,null],
  ['Lyon Diabète Clinique','Lyon, FR','LYO',7,10,'Retention','2 early withdrawals — visit scheduling friction.',8,1,6,5],
  ['Site 12 | Phoenix Clinical','Phoenix, US','PHX',8,10,'Screening','Highest cost per enrolled patient; referral conversion 9%.',10,2,9,4],
  ['Milan Metabolic Inst.','Milan, IT','MIL',6,8,'Referral','Referral quality low — 22% eligible.',7,1,4,7],
  ['Boston Endocrine Assoc.','Boston, US','BOS',6,6,'None','Converting at plan, stable velocity.',6,0,10,2],
  ['Site 07 | Atlanta Clinical','Atlanta, US','ATL',11,9,'None','2.4× referral conversion — top performer with open capacity.',11,0,12,1],
  ['Site 03 | San Diego Research','San Diego, US','SAN',10,9,'None','Low cost per enrolled, high referral quality.',10,0,8,2],
  ['Amsterdam UMC Diabetes','Amsterdam, NL','AMS',5,5,'None','On plan, healthy funnel.',5,0,7,3],
  ['Dallas Metro Health','Dallas, US','DAL',5,5,'None','Steady enrollment, no flags.',5,0,5,4],
  ['Seattle Diabetes Group','Seattle, US','SEA',5,5,'None','On plan, no flags.',5,0,6,3],
  ['Vienna General Hospital','Vienna, AT','VIE',6,5,'None','Ahead of plan, strong referral base.',6,0,9,1],
  ['Toronto Endocrine Center','Toronto, CA','TOR',5,5,'None','On plan, healthy funnel.',5,0,5,4],
  ['Manchester Metabolic Clinic','Manchester, UK','MAN',4,4,'None','On plan, no flags.',4,0,4,6],
  ['Madrid Diabetes Institute','Madrid, ES','MAD',5,5,'None','On plan, healthy funnel.',5,0,7,2],
];
const GEN_SITES = {
  'NASH-3301': { plan:65, names:[['Rotterdam Liver Center','Rotterdam, NL','ROT'],['Leuven Hepatology','Leuven, BE','LEU'],['Hamburg Liver Institute','Hamburg, DE','HAM'],['Hôpital Beaujon','Paris, FR','PAR'],['Madrid Hepatic Unit','Madrid, ES','MDH'],['Chicago Liver Research','Chicago, US','CHI'],['San Antonio NASH Center','San Antonio, US','SAT'],['Toronto Liver Clinic','Toronto, CA','TLC'],['Milan Hepatology','Milan, IT','MLH']] },
  'RA-2209': { plan:290, names:[['Hopkins Arthritis Center','Baltimore, US','BAL'],['Leeds Rheumatology','Leeds, UK','LDS'],['Charité Rheuma','Berlin, DE','BER'],['UCSF Rheumatology','San Francisco, US','SFO'],['Karolinska Rheuma','Stockholm, SE','KAR'],['Vall d’Hebron','Barcelona, ES','VHB'],['Mount Sinai Immunology','New York, US','NYC'],['Leiden Rheumatology','Leiden, NL','LDN']] },
};
const DIAG = { Referral:'Referral volume well below plan; the referral pool looks thinner than modeled.', Screening:'Screen-fail rate above benchmark on key inclusion criteria.', Consent:'Eligible patients dropping at consent.', Activation:'Activated but slow to first patient.', None:'On plan, healthy funnel.' };
const statusOf = (en, ex) => { const r = ex > 0 ? en / ex : 1; return r > 0.9 ? 'On track' : r >= 0.6 ? 'Watch' : 'At risk'; };
const OUTC = { 'NASH-3301':[0.03,0.06], 'DIA-2043':[0.08,0.07], 'RA-2209':[0.38,0.06] };
function funnelOf(study, sites) {
  const o = OUTC[study.id] || [0.05,0.07];
  const en = sites.reduce((a, x) => a + x.enrolled, 0), sf = sites.reduce((a, x) => a + x.screenFailed, 0);
  const scr = sites.reduce((a, x) => a + Math.max(x.consented, x.enrolled + x.screenFailed), 0);
  const pre = Math.round(scr * 1.85), ref = Math.round(pre * 1.6), comp = Math.round(en * o[0]), drop = Math.round(en * o[1]);
  return { en, sf, scr, pre, ref, comp, drop, act:en - comp - drop, planNow:sites.reduce((a, x) => a + x.expected, 0) };
}
const SITE_OVERRIDES = {
  'RA-2209': {
    LDS:{ enrolled:29, expected:44, bottleneck:'Screening', diag:'Invoices unpaid for 104 days and screening down 30% since August. The site is giving the study lower priority.', last:9 },
    BAL:{ diag:'Enrolling at plan, but invoices are unpaid for 96 days and the coordinator raised it on the last monitoring call. Screening may slow.' },
    BER:{ diag:'Invoices unpaid for 92 days. Screening may slow if payment slips further.' },
  },
};
function siteData(study) {
  let rows;
  if (study.id === 'DIA-2043') {
    rows = DIA_SITES.map(r => ({ name:r[0], loc:r[1], code:r[2], enrolled:r[3], expected:r[4], bottleneck:r[5], diag:r[6], consented:r[7], screenFailed:r[8], backlog:r[9], last:r[10] }));
  } else {
    const g = GEN_SITES[study.id], n = g.names.length, risky = study.enrolled / g.plan < 0.8;
    const rnd = i => { const x = Math.sin((i + 1) * 12.9898 + study.id.length * 78.233) * 43758.5453; return x - Math.floor(x); };
    const w = g.names.map((_, i) => 0.7 + rnd(i) * 0.6), ws = w.reduce((a, b) => a + b, 0);
    const exp = w.map(x => Math.max(1, Math.round(g.plan * x / ws)));
    const ratio = study.enrolled / g.plan;
    const raw = exp.map((e, i) => e * Math.max(0.1, ratio * (risky ? 0.45 + rnd(i + 7) * 1.1 : 0.85 + rnd(i + 7) * 0.3)));
    const rs = raw.reduce((a, b) => a + b, 0);
    const en = raw.map(v => Math.round(v / rs * study.enrolled));
    en[0] += study.enrolled - en.reduce((a, b) => a + b, 0);
    const bns = ['Referral','Screening','Consent','Activation'];
    rows = g.names.map((nm, i) => {
      const st = statusOf(en[i], exp[i]);
      const bottleneck = st === 'On track' ? 'None' : bns[i % 4];
      const fails = bottleneck === 'Screening' ? Math.round(en[i] * 0.6) + 2 : Math.round(rnd(i + 3) * 2);
      return { name:nm[0], loc:nm[1], code:nm[2], enrolled:Math.max(0, en[i]), expected:exp[i], bottleneck, diag:DIAG[bottleneck],
        consented:Math.max(0, en[i]) + fails + Math.round(rnd(i + 5) * 3), screenFailed:fails, backlog:Math.round(3 + rnd(i + 9) * 12), last: st === 'At risk' ? 10 + Math.round(rnd(i) * 8) : 1 + Math.round(rnd(i) * 5) };
    });
  }
  const ov = SITE_OVERRIDES[study.id];
  if (ov) {
    let diff = 0;
    rows.forEach(r => { const o = ov[r.code]; if (!o) return; if (o.enrolled != null) { diff += r.enrolled - o.enrolled; r.consented += o.enrolled - r.enrolled; } Object.assign(r, o); });
    const pool = rows.filter(r => !(ov[r.code] && ov[r.code].enrolled != null)), W = pool.reduce((a, r) => a + r.expected, 0);
    let left = diff;
    pool.forEach((r, i) => { const add = i === pool.length - 1 ? left : Math.round(diff * r.expected / W); left -= add; r.enrolled += add; r.consented += add; });
  }
  rows.forEach(r => { r.status = statusOf(r.enrolled, r.expected); r.curve = r.bottleneck === 'Activation' ? 2.4 : r.status === 'At risk' ? 0.6 : 1; });
  return rows.sort((a, b) => (a.enrolled - a.expected) - (b.enrolled - b.expected) || b.enrolled - a.enrolled);
}
const INTEGRATIONS = [
  { id:'EDC', name:'EDC', vendor:'Medidata', mono:'MD', on:true, sync:'6:02 AM', access:'Read', desc:'Visits, CRFs, queries and data entry timestamps.', },
  { id:'CTMS', name:'CTMS', vendor:'Veeva Vault', mono:'VV', on:true, sync:'6:01 AM', access:'Read', desc:'Site status, enrollment, monitoring visits, contracts and payments.' },
  { id:'eTMF', name:'eTMF', vendor:'Florence', mono:'FL', on:true, sync:'5:58 AM', access:'Read | write with your approval', desc:'Essential documents and TMF filing.' },
  { id:'eIRB', name:'eIRB', vendor:'Advarra', mono:'AD', on:true, sync:'5:55 AM', access:'Read', desc:'IRB submissions, approvals and expiry dates.' },
  { id:'Payments', name:'Site payments', vendor:'SAP Ariba', mono:'SA', on:true, sync:'6:00 AM', access:'Read | write with your approval', desc:'Site invoices, approvals and payment runs.' },
  { id:'CRM', name:'CRM', vendor:'Salesforce', mono:'SF', on:false, access:'—', desc:'Referral sources, patient outreach and site relationships.' },
  { id:'Reimbursements', name:'Reimbursements', vendor:'Greenphire', mono:'GP', on:false, access:'—', desc:'Participant stipends and travel reimbursements.' },
];
const SYS_CATALOG = [
  ['EDC','Electronic data capture',[['Oracle InForm','OI'],['Oracle Clinical One','OC'],['Veeva Vault CDMS','VV'],['Medidata Rave EDC','MD'],['IBM Clinical Development','IB'],['Castor EDC','CA'],['OpenClinica','OP'],['REDCap','RC'],['Viedoc','VD'],['Medrio','MR'],['Clinion EDC','CL'],['TrialKit','TK']]],
  ['CTMS','Clinical trial management',[['Oracle Siebel CTMS','OS'],['Medidata Rave CTMS','MD'],['Advarra OnCore','AO'],['RealTime CTMS','RT'],['Clario CTMS','CL'],['Veeva Vault CTMS','VV'],['Florence SiteLink','FL']]],
  ['eTMF','Trial master file',[['Veeva Vault eTMF','VV'],['TransPerfect Trial Interactive','TP'],['Montrium eTMF','MO'],['Phlexglobal PhlexEview','PX'],['Egnyte for Life Sciences','EG']]],
  ['RTSM / IRT','Randomization and drug supply',[['Suvoda IRT','SU'],['Signant SmartSignals RTSM','SG'],['4G Clinical Prancer','4G'],['Medidata Rave RTSM','MD'],['Almac IXRS 3','AL'],['Calyx IRT','CX'],['Endpoint PULSE','EP']]],
  ['eCOA / ePRO','Patient-reported outcomes',[['Signant TrialMax','SG'],['Clario eCOA','CL'],['Medidata Rave eCOA','MD'],['YPrime eCOA','YP'],['Castor eCOA','CA'],['Medable','ME']]],
  ['eConsent','Electronic informed consent',[['Medidata eConsent','MD'],['Signant eConsent','SG'],['Veeva SiteVault eConsent','VV'],['Florence eConsent','FL'],['Advarra eConsent','AD']]],
  ['Safety','Pharmacovigilance',[['Oracle Argus Safety','OA'],['ArisGlobal LifeSphere Safety','AG'],['Veeva Vault Safety','VV']]],
  ['IRB','Ethics review',[['WCG IRB Connexus','WC'],['Advarra CIRBI','AD'],['Huron IRB','HU'],['IRBManager','IM']]],
  ['Central lab and imaging','Lab results and image reads',[['Labcorp Central Laboratory','LC'],['Q² Solutions','Q2'],['Clario Medical Imaging','CL'],['Calyx Medical Imaging','CX'],['ICON Central Labs','IC']]],
  ['Devices and wearables','Sensor and device data',[['Dexcom CGM data','DX'],['ActiGraph CentrePoint','AC'],['Medidata Sensor Cloud','MD'],['Withings Remote Patient Monitoring','WI']]],
  ['Recruitment','Patient finding and pre-screening',[['TriNetX','TX'],['Deep 6 AI','D6'],['BEKhealth','BK'],['Antidote Match','AN'],['Citeline SiteTrove','CI'],['StudyKIK','SK']]],
  ['Payments','Site and participant payments',[['Greenphire eClinicalGPS','GP'],['Veeva Vault Payments','VV'],['Oracle Site Payments','OP'],['Clincierge travel','CC']]],
  ['CRM','Site and patient relationships',[['Veeva CRM','VV'],['Salesforce Health Cloud','SF'],['Microsoft Dynamics 365','MS']]],
  ['Regulatory','Submissions and RIM',[['Veeva Vault RIM','VV'],['IQVIA RIM Smart','IQ'],['Extedo eCTDmanager','EX']]],
];

const BS_POOL = { pi:['Dr. Anna Visser','Dr. Luc Peeters','Prof. Jan Krüger','Dr. Hélène Martin','Dr. Javier Ortiz','Dr. Rachel Stein','Dr. Luis Herrera','Dr. Emily Tran','Dr. Paolo Conti'], crc:['Femke de Boer','Lotte Janssens','Mia Schulz','Camille Roux','Lucía Navarro','Tyler Brooks','Ana Flores','Sarah Lin','Chiara Galli'] };
const BS_CRAS = ['Tom Becker','Sofia Marin','Daniel Kim','Laura Rossi','Ines Duarte'];
const BS_PERPT = { 'DIA-2043':14200, 'NASH-3301':31500, 'RA-2209':18900 };
const BS_PROTO = { 'DIA-2043':['v4.0','Approved Jul 8, 2026',true,'Nov 30'], 'NASH-3301':['v2.1','Approved Mar 3, 2026',false], 'RA-2209':['v3.0','Approved Jan 15, 2026',false] };
const BS_VISITS = { 'DIA-2043':[['Week 12','OGTT, CGM sensor replacement'],['Week 4','Safety labs, HbA1c'],['Week 24','HbA1c, eCOA questionnaires'],['Week 36','Safety labs, CGM download'],['Week 8','Vitals, eCOA']],
  'NASH-3301':[['Week 24','MRI-PDFF, liver labs'],['Week 12','Liver labs, eCOA'],['Week 36','FibroScan, labs'],['Week 48','MRI-PDFF, safety labs']],
  'RA-2209':[['Week 12','DAS28, CRP and ESR panel'],['Week 24','DAS28, safety labs'],['Week 52','Hand and foot X-ray, DAS28'],['Week 8','CRP and ESR panel']] };
const BS_HRS = { 'DIA-2043':2.5, 'NASH-3301':3.5, 'RA-2209':2 };
const BS_MSG = ['Asked for two more eCOA tablets before the November visits.','Confirmed the holiday closure dates, Dec 23 to Jan 2.','Said the visit reminder texts are working well for participants.','Asked when the v3 central lab kits will arrive.'];
const BS_PILL = { done:['Completed','#197a48','#e7f6ee'], progress:['In progress','#003358','#e5ecf2'], open:['Open','#8a5a06','#fdf3e0'], late:['Overdue','#bd3226','#fcecea'], ok:['Current','#197a48','#e7f6ee'], warn:['Expiring soon','#8a5a06','#fdf3e0'], miss:['Missing','#bd3226','#fcecea'], trained:['Trained','#197a48','#e7f6ee'], untrained:['Not trained','#bd3226','#fcecea'], review:['In review','#55585d','#f2f2f4'], approved:['Approved','#003358','#e5ecf2'], held:['Held','#8a5a06','#fdf3e0'], recruiting:['Recruiting','#bd3226','#fcecea'] };
const BS_COMP = { 'NASH-3301':{ HAM:[['Resmetirom and GLP-1 combination, Phase 3','NCT06598231','Madrigal | 4 km']], CHI:[['FGF21 analogue, Phase 2b','NCT06631187','Akero | 9 km']] },
  'DIA-2043':{ NWU:[['Once-weekly oral GLP-1, Phase 3','NCT06612874','Lilly | 5 km']], CHA:[['Oral GLP-1 agonist, Phase 3','NCT06544120','Novo Nordisk | 6 km']], BOS:[['Weekly basal insulin, Phase 3','NCT06570013','Lilly | 3 km']] }, 'RA-2209':{ LDS:[['Oral JAK1 inhibitor, Phase 3','NCT06512284','AbbVie | 2 km']] } };
const BS_X = {
  NWU:{ cra:'Daniel Kim', activated:'Mar 12, 2024', skip:['sf'], hl:[['anomaly','Screen-fail rate rose since July','6 of 9 screen failures since July were on the HbA1c inclusion range. The pass rate fell from 50% in July to 20% in September.',[['EDC','Screen-fail reasons | 9 records'],['EDC','Screening log | Jul 1 – Oct 24']],'iss']],
    issues:[['HbA1c screen failures above benchmark','Opened Sep 12 | owner Daniel Kim','open'],['HbA1c retesting question with the medical monitor','Sent Oct 24 | Dr. Ravi Patel','progress']],
    comms:[['Oct 24','Email','Question routed to medical review','Coordinator asked whether a borderline HbA1c can be retested within the screening window. Sent to the medical monitor.'],['Oct 3','Feedback','HbA1c lab turnaround confirmed','Jenna Walsh confirmed local lab results take 5 to 7 days.'],['Sep 29','Newsletter','September site newsletter','Read and confirmed by Dr. Amara Okafor and Jenna Walsh.']],
    commits:[['Share screening barriers before the Nov 5 monitoring visit','Dr. Amara Okafor | due Nov 5','open'],['Confirm HbA1c lab turnaround','Jenna Walsh | Oct 3','done']],
    actions:[['Confirm HbA1c lab turnaround','Jenna Walsh | Oct 3','done','5 to 7 days confirmed'],['Ask the site about screening barriers','Prime, in the November newsletter | Nov 26','progress',''],['Monitoring visit','Daniel Kim | Nov 5','open','']] },
  CHA:{ cra:'Tom Becker', link:'charite', skip:['gap'], hl:[['risk','No screening visit in 26 days','The site averaged 2.5 screenings a month from April to September. A capacity question sent on Sep 29 has no reply.',[['EDC','Screening log | last visit Sep 30'],['Site emails','Sep 29 | no reply']],'rec']],
    issues:[['CRA role vacant since Jun 16','Escalated to Medpace | Oct 26','late'],['Capacity question unanswered','Sent Sep 29 | 27 days','late'],['Duplicate invoice INV-CHA-0107','Held by Finance | Oct 21','progress']],
    factors:[['Partner practice referrals paused','Two referring practices stopped sending referrals in August.','Site emails | Aug 21']],
    actions:[['Escalate the CRA vacancy to Medpace','Marie Curious | Oct 30','open','Proposed by Prime'],['Confirm screening capacity','Prof. Lena Hoffmann | Oct 6','late','No reply after 27 days']] },
  HOU:{ activated:'May 20, 2026', link:'houston', siteStatus:'Active | not yet recruiting', skip:['plan'], upEmpty:'No participant visits scheduled yet. 3 pre-screening calls are booked this week.',
    hl:[['risk','No participant screened 159 days after activation','7 referrals are logged in CTMS and none has a screening visit booked. Comparable sites screen a first participant within 18 days.',[['CTMS','Activation | May 20'],['CTMS','Referral log | 7 referrals']],'rec']],
    issues:[['No screening visit since activation','Opened Jun 30 | owner Sofia Marin','late'],['Referral source update unanswered','Sent Sep 29 | 27 days','late']] },
  ATL:{ qOpen:0, link:'budget', hl:[['ok','Top performer with open capacity','11 randomized against 9 planned. 24% of referrals reach randomization, the study’s highest (median 10%).',[['CTMS','Enrollment vs plan | Oct 25'],['EDC','Randomization log']],'rec']],
    actions:[['Share the pre-screening call approach','Tanya Reyes | Sep 30','done','Featured in the November newsletter'],['Present the referral approach at the investigator call','Dr. Marcus Bell | Dec 10','open',''],['Shift $18k of referral budget to Atlanta and San Diego','Marie Curious | Nov 1','open','Proposed by Prime']] },
  BCN:{ link:'barcelona', hl:[['anomaly','5 of 14 candidates declined at consent','3 of them gave the number of study visits as the reason.',[['EDC','Consent outcome reasons | 5 records']],'iss']],
    commits:[['Send a visit-schedule handout in Spanish','Marie Curious | due Nov 8','open'],['Review consent visit materials','Marta Soler | due Oct 31','progress']] },
  PHX:{ hl:[['risk','Highest cost per randomized participant','$4.1k per randomized participant, against $2.5k at Sites 3 and 7. 9% of referrals reach screening (study median 22%).',[['Finance','Cost per randomized | Q3'],['CTMS','Referral log | 104 referrals']],'fin']] },
};
const PRIME_MORE = [
  { title:'List IRB approvals expiring in the next 60 days', desc:'Check every site’s approval dates and flag renewals before they lapse.', systems:['eIRB','CTMS'], mode:'Read-only' },
  { title:'Find sites with overdue monitoring visit reports', desc:'Compare visit dates in CTMS with report sign-off and list anything past 10 business days.', systems:['CTMS'], mode:'Read-only' },
  { title:'Draft re-consent reminders for protocol v4.0', desc:'One email per site with participants still to re-consent, sent after your approval.', systems:['EDC','CTMS'], mode:'Sends email' },
  { title:'Summarize open data queries by site', desc:'Group EDC queries by site and age, and highlight anything older than 30 days.', systems:['EDC'], mode:'Read-only' },
  { title:'Check IP expiry at site depots', desc:'Flag kits that expire within 45 days and propose a resupply.', systems:['IRT','CTMS'], mode:'Read-only' },
];
const PRIME = [
  { id:'ctms', title:'Pull data from CTMS', desc:'Site status, enrollment counts and monitoring visits for DIA-2043, compared with the last snapshot.', systems:['CTMS'], mode:'Read-only', note:'Read-only — nothing changes in CTMS', study:'DIA-2043', doneLog:'Pulled 17 site records from CTMS — 3 changes since Sep 23',
    steps:[{l:'Connect to CTMS',d:'Veeva Vault CTMS | read scope'},{l:'Query DIA-2043 site records',d:'17 sites | status, enrollment, last monitoring visit'},{l:'Compare with last snapshot',d:'Snapshot from Sep 23'}],
    result:{summary:'Pulled 17 site records for DIA-2043. 3 changes since the Sep 23 snapshot.', cols:['SITE','CHANGE','SOURCE'], rows:[['Charité Diabetes Ctr','CRA assigned: vacant → K. Braun','CTMS | Site staff'],['Houston Metro Research','Status: Activated → Enrolling','CTMS | Site status'],['Northwestern Endocrine','Monitoring visit logged Sep 26','CTMS | Visits']]} },
  { id:'edc', title:'Check last data entry in the EDC', desc:'Find sites whose data entry is lagging behind patient visits.', systems:['EDC'], mode:'Read-only', note:'Read-only — nothing changes in the EDC', study:'DIA-2043', doneLog:'Checked EDC entry lag — 2 sites past the 5-day window',
    steps:[{l:'Connect to EDC',d:'Medidata Rave | read scope'},{l:'Read last entry per site',d:'DIA-2043 | 17 sites | visit and CRF timestamps'},{l:'Flag entry lag over 5 days',d:'Per data management plan §4.3'}],
    result:{summary:'2 of 17 sites are past the 5-day data entry window.', cols:['SITE','LAST ENTRY','LAG'], rows:[['Charité Diabetes Ctr','Sep 18 | Visit 4 CRF','12 days',true],['Lyon Diabète Clinique','Sep 22 | AE form','8 days',true],['Northwestern Endocrine','Sep 29 | Visit 2 CRF','1 day']]} },
  { id:'invoice', title:'Reconcile invoice against last purchase order', desc:'Match the latest CRO invoice line by line to the PO and verify units against CTMS.', systems:['CTMS'], mode:'Read-only', note:'Read-only — no payment or dispute is sent', study:'DIA-2043', doneLog:'Reconciled INV-4471 against PO-2208 — 2 variances, $7,540',
    steps:[{l:'Fetch invoice INV-4471',d:'Veeva Vault CTMS | payments | Medpace Q3 2026 | $184,650'},{l:'Fetch purchase order PO-2208',d:'Veeva Vault CTMS | contracts | change order 2'},{l:'Match 14 line items',d:'Units, quantities and rates'},{l:'Verify units against CTMS',d:'Monitoring visits completed in Q3'}],
    result:{summary:'12 of 14 lines match. 2 variances totalling $7,540.', cols:['LINE ITEM','VARIANCE','EVIDENCE'], rows:[['CRA monitoring visits','18 invoiced vs 15 on PO | +$6,300','CTMS shows 15 visits',true],['Lab pass-through fees','+$1,240 over PO cap','PO cap $12,000',true],['Project management','Matches | $22,500','—']]} },
  { id:'irb', title:'Archive last IRB approval in the eTMF', desc:'File the latest IRB approval to the correct TMF artifact after checking it against ICH GCP (E6).', systems:['eIRB','eTMF'], mode:'Writes to eTMF', note:'Pauses for your approval before filing', study:'DIA-2043', doneLog:'Filed IRB approval (Protocol v4.0, NWU) to eTMF as DOC-0098213', writeVerb:'Approve & file', confirmText:'Checks passed. Approve to file this document to the eTMF.',
    steps:[{l:'Locate latest IRB approval',d:'Advarra eIRB | Northwestern Endocrine | approved Sep 25'},{l:'Extract document metadata',d:'Site, protocol version, approval and expiry dates'},{l:'Classify per TMF Reference Model',d:'Zone 04 | IRB/IEC | 04.01.02 IRB/IEC approval'},{l:'Check ICH GCP (E6) completeness',d:'Signature, date, protocol version, approved documents list'},{l:'File to eTMF',d:'Florence eTMF | DIA-2043 / Site NWU',write:true}],
    preview:{summary:'Ready to file. All ICH GCP (E6) completeness checks passed.', cols:['FIELD','VALUE','CHECK'], rows:[['Document','IRB approval | Protocol v4.0','Signed & dated ✓'],['Site','Northwestern Endocrine (NWU)','Matches CTMS ✓'],['Approval / expiry','Sep 25 2026 / Sep 24 2027','Valid ✓'],['TMF artifact','04.01.02 IRB/IEC approval','Classified ✓']]},
    result:{summary:'Filed to eTMF as DOC-0098213 | status Final. Previous approval (v3.1) marked superseded.'} },
];
const BRIEF_TOPICS = {
  Screening:[['Recent screen failures against the HbA1c inclusion criterion','Lab draw timing relative to the screening visit'],'Schedule HbA1c draws within 14 days of screening'],
  Referral:[['Referral volume vs plan since the staffing change','Interim CRA coverage and handover'],'Confirm a referral recovery plan and date'],
  Consent:[['Drop-off at consent and the exit reasons given','Visit burden and scheduling support for participants'],'Agree on patient navigator support'],
  Activation:[['Blockers to first patient in','Pre-screening pipeline and referral sources'],'Set a first-patient-in target date'],
  Retention:[['Recent withdrawals and their reasons','Use of the protocol visit windows (±3 days, Visits 3–6)'],'Apply visit-window flexibility where it helps participants stay in'],
  None:[['Maintain the current enrollment pace','What is working that peer sites could adopt'],'Confirm capacity for additional referrals'],
};
const fmtLong = d => d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
function makeBriefs(q, when) {
  const ql = (q || '').toLowerCase(), d = when || new Date(), due = new Date(d.getTime() + 7 * 864e5);
  const rows = DIA_SITES.map(r => ({ name:r[0], loc:r[1], code:r[2], enrolled:r[3], expected:r[4], bottleneck:r[5], diag:r[6], backlog:r[9], last:r[10] }));
  let pick = rows.filter(r => ql.includes(r.name.replace(/^Site \d+ \| /, '').split(' ')[0].toLowerCase()) || new RegExp('\\b' + r.code.toLowerCase() + '\\b').test(ql));
  if (!pick.length) pick = rows.filter(r => r.enrolled < r.expected * 0.9).sort((a, b) => (a.enrolled - a.expected) - (b.enrolled - b.expected)).slice(0, 5);
  return pick.map(r => { const t = BRIEF_TOPICS[r.bottleneck] || BRIEF_TOPICS.None, gap = r.enrolled - r.expected;
    return { site:r.name, code:r.code, path:'Veeva Vault CTMS › DIA-2043 › ' + r.code + ' › Site notes',
      text:'DIA-2043 | Site meeting brief\n' + r.name + ' (' + r.code + ') | ' + r.loc + '\nPrepared ' + fmtLong(d) + ' by Prime for the CRA–site call\n\n'
        + 'STATUS\n' + r.enrolled + ' of ' + r.expected + ' expected participants enrolled (' + (gap >= 0 ? '+' + gap : '−' + Math.abs(gap)) + ' vs plan). Last enrollment: ' + (r.last == null ? 'none yet' : r.last + ' days ago') + '. Referral backlog: ' + r.backlog + '.\n\n'
        + 'KEY ISSUE\n' + r.diag + '\n\n'
        + 'DISCUSSION TOPICS\n1. ' + t[0][0] + '\n2. ' + t[0][1] + '\n\n'
        + 'ASK OF THE SITE\n' + t[1] + '\n\n'
        + 'FOLLOW-UP\nCRA to confirm agreed actions in CTMS by ' + fmtLong(due) + '.' }; });
}
function briefPlan(q, briefs) {
  const n = briefs.length, s = n === 1 ? '' : 's';
  return { title:q.charAt(0).toUpperCase() + q.slice(1), desc:'Plan drafted by the agent from: “' + q + '”', systems:['CTMS','EDC'], mode:'Writes to CTMS', note:'Pauses for your approval before saving to CTMS', study:'DIA-2043',
    steps:[{ l:'Pull site status and enrollment', d:'CTMS | ' + n + ' site' + s }, { l:'Pull screen-fail and query data', d:'EDC | DIA-2043' }, { l:'Draft meeting brief' + s, d:'One brief per site' }, { l:'Save brief' + s + ' to CTMS', d:'Veeva Vault CTMS | Site notes', write:true }],
    preview:{ label:'TEXT TO BE STORED IN CTMS', summary:n + ' brief' + s + ' drafted. This text will be stored in CTMS as a site note once you approve.', briefs },
    result:{ label:'STORED IN CTMS', summary:'Stored ' + n + ' brief' + s + ' in CTMS as site notes.', briefs },
    confirmText:'Review the text below. Approve to store it in CTMS.', writeVerb:'Approve & save to CTMS', doneLog:'Stored ' + n + ' meeting brief' + s + ' in CTMS' };
}
const ARCHIVE_SEED = [
  { id:'h4', time:'Sep 29 | 4:12 PM', title:'Enrollment by site report for DIA-2043', desc:'Plan drafted by the agent from: “Show me a report of enrollment by site for DIA-2043”', systems:['CTMS','EDC'], mode:'Read-only', note:'Read-only',
    steps:[{l:'Query site enrollment',d:'CTMS | 17 sites'},{l:'Cross-check randomizations',d:'EDC | randomization log'},{l:'Build report',d:'Top 8 sites by enrolled'}],
    result:{ summary:'96 participants enrolled across 17 sites. The top 3 sites account for 32% of enrollment.',
      chart:{ type:'bar', title:'Enrolled participants by site', unit:'participants', labels:['ATL','SAN','PHX','LYO','BCN','MIL','BOS','VIE'], values:[11,10,8,7,6,6,6,6] },
      cols:['SITE','ENROLLED','VS EXPECTED'], rows:[['Site 07 | Atlanta Clinical','11','+2'],['Site 03 | San Diego Research','10','+1'],['Northwestern Endocrine','4','−10',true]] } },
  { id:'h3', time:'Sep 26 | 10:05 AM', title:'List sites with open queries older than 30 days', desc:'Plan drafted by the agent from: “List sites with open queries older than 30 days”', systems:['EDC'], mode:'Read-only', note:'Read-only',
    steps:[{l:'Read open queries',d:'EDC | DIA-2043 | 214 open'},{l:'Filter by age > 30 days',d:'Per data management plan'},{l:'Group by site',d:'Sorted by count'}],
    result:{ summary:'4 sites have 23 queries open for more than 30 days.', cols:['SITE','QUERIES > 30 DAYS','OLDEST'], rows:[['Charité Diabetes Ctr','9','52 days',true],['Lyon Diabète Clinique','6','41 days',true],['Barcelona Metabolic','5','36 days'],['Houston Metro Research','3','31 days']] } },
  { id:'h2', time:'Sep 24 | 2:30 PM', title:'Reconcile invoice against last purchase order', desc:'Match the latest CRO invoice line by line to the PO and verify units against CTMS.', systems:['CTMS'], mode:'Read-only', note:'Read-only',
    steps:[{l:'Fetch invoice INV-4402',d:'Medpace | Q2 2026 | $171,900'},{l:'Fetch purchase order PO-2208',d:'Change order 1'},{l:'Match 13 line items',d:'Units, quantities and rates'}],
    result:{ summary:'All 13 lines match the purchase order. No variances.', cols:['LINE ITEM','VARIANCE','EVIDENCE'], rows:[['CRA monitoring visits','Matches | 14 visits','CTMS shows 14 visits'],['Lab pass-through fees','Matches | $10,880','Under PO cap'],['Project management','Matches | $22,500','—']] } },
  Object.assign({ id:'h1', time:'Sep 22 | 9:18 AM' }, briefPlan('Prepare meeting brief for each site', makeBriefs('', new Date('2026-09-22T09:18:00')))),
];
const AGENT_INSTR = 'Keep every study on track for its baseline last-participant-in date.\n\nEach morning, scan site enrollment, screening and referral data. When a site or study drifts from plan, diagnose the bottleneck and propose the smallest action likely to recover it.\n\nPrefer site-level fixes before adding sites. Draft every email and change for my approval — never send or apply on your own.';
const AGENT_RULES = [
  { id:'r1', when:'Site below 60% of expected enrollment', then:'Flag at risk and diagnose the bottleneck' },
  { id:'r2', when:'Screen-fail rate above 30% (benchmark 22%)', then:'Check eligibility criteria and lab timing' },
  { id:'r3', when:'No enrollment at a site for 10+ days', then:'Propose a site check-in' },
  { id:'r4', when:'Referrals down 40% week over week', then:'Check CRA staffing and campaigns' },
  { id:'r5', when:'Consent drop-off above 20%', then:'Propose participant support' },
  { id:'r6', when:'Forecast slips past the baseline LPI date', then:'Propose recovery levers, including backup sites' },
];
const AGENT_SOURCES = [
  { id:'CTMS', reads:'Site status, activation and CRA staffing' },
  { id:'EDC', reads:'Screening, screen-fails and randomizations' },
  { id:'CRM', reads:'Referral sources and outreach' },
  { id:'eIRB', reads:'Approvals that affect site start-up' },
];
const AGENT_MEMORY = [
  { id:'m1', text:'Escalate CRO staffing issues through the governance call before emailing the CRO.', source:'From context you added | Jul 2' },
  { id:'m2', text:'Cap budget shifts between sites at 20% per quarter.', source:'From a dismissal (“Too costly”) | Jun 18' },
  { id:'m3', text:'At Northwestern, contact the study coordinator before the PI.', source:'From context you added | Jun 9' },
];
const PRI = { P1:['#bd3226','#fcecea'], P2:['#b0730a','#fdf3e0'], P3:['#55585d','#f2f2f4'] };
const CONF = { High:'#27a763', Medium:'#e5a11a', Low:'#d9483f' };
const fmt = d => d.toLocaleDateString('en-US',{month:'short',day:'numeric'}) + " '" + String(d.getFullYear()).slice(2);
const shift = (iso, days) => { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() - days); return d; };

const BUD_SITES = [
  { code:'LDS', name:'Leeds Rheumatology', short:'Leeds', loc:'Leeds, UK', study:'RA-2209', paid:118400, age:104, risk:'Screening here is already down 30% since August.',
    note:'3 invoices waiting since Jun 20. Every line matches the contract except 6 lab panels with no results in the EDC.', relNote:'Verified lines released. The 6 lab lines stay on hold until results are uploaded.',
    inv:[['INV-LDS-0277','Jun 20',12600,0,'',0],['INV-LDS-0284','Jul 18',10400,0,'',0],['INV-LDS-0291','Aug 21',11680,2880,'6 lab panels (CRP, ESR) billed for Week 8 | no results in the EDC yet',6]] },
  { code:'BAL', name:'Hopkins Arthritis Center', short:'Hopkins', loc:'Baltimore, US', study:'RA-2209', paid:142900, age:96, risk:'The coordinator raised late payments on the last monitoring call.',
    note:'3 invoices waiting since Jun 28. 4 Week 12 visits are billed at 1 hour; the contract says 30 minutes.', relNote:'Verified lines released. The 4 over-billed visits wait for a re-issued invoice.',
    inv:[['INV-BAL-0309','Jun 28',13900,0,'',0],['INV-BAL-0318','Jul 30',15240,1240,'4 investigator visits billed at 1 h | contract says 30 min',4],['INV-BAL-0325','Aug 27',10700,0,'',0]] },
  { code:'BER', name:'Charité Rheuma', short:'Charité Rheuma', loc:'Berlin, DE', study:'RA-2209', paid:96300, age:92, risk:'',
    note:'3 invoices waiting since Jul 2. All lines match the contract and the EDC; they are only waiting for approval.', relNote:'All 3 invoices released. Nothing left to reconcile.',
    inv:[['INV-BER-0144','Jul 2',9800,0,'',0],['INV-BER-0151','Aug 4',8600,0,'',0],['INV-BER-0158','Sep 3',7600,0,'',0]] },
  { code:'SFO', name:'UCSF Rheumatology', short:'UCSF', loc:'San Francisco, US', study:'RA-2209', paid:88100, age:70,
    note:'2 verified invoices waiting for approval. The oldest reaches 3 months in 20 days.',
    inv:[['INV-SFO-0210','Jul 24',9700,0,'',0],['INV-SFO-0216','Aug 26',8700,0,'',0]] },
  { code:'HAM', name:'Hamburg Liver Institute', short:'Hamburg', loc:'Hamburg, DE', study:'NASH-3301', paid:38900, age:63,
    note:'2 verified invoices waiting for approval. Referrals here are already down 35%, so a payment delay would add pressure.',
    inv:[['INV-HAM-0061','Jul 31',6400,0,'',0],['INV-HAM-0066','Aug 29',5200,0,'',0]] },
  { code:'CHA', name:'Charité Diabetes Ctr', short:'Charité', loc:'Berlin, DE', study:'DIA-2043', paid:54200, age:48,
    note:'INV-CHA-0107 repeats INV-CHA-0102 line for line. The other invoices match.',
    inv:[['INV-CHA-0102','Aug 15',4300,0,'',0],['INV-CHA-0107','Aug 15',4300,4300,'Same 5 screening visits as INV-CHA-0102 | likely a duplicate',5],['INV-CHA-0113','Sep 12',8000,0,'',0]] },
  { code:'NYC', name:'Mount Sinai Immunology', short:'Mount Sinai', loc:'New York, US', study:'RA-2209', paid:104500, age:34,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-NYC-0402','Aug 29',9200,0,'',0]] },
  { code:'PHX', name:'Site 12 | Phoenix Clinical', short:'Phoenix', loc:'Phoenix, US', study:'DIA-2043', paid:61800, age:27,
    note:'3 HbA1c tests have no results in the EDC yet. This site usually uploads within 10 days, so Prime will check again in 7 days.',
    inv:[['INV-PHX-0088','Sep 5',9470,570,'3 HbA1c tests billed | no results in the EDC yet',3]] },
  { code:'NWU', name:'Northwestern Endocrine', short:'Northwestern', loc:'Chicago, US', study:'DIA-2043', paid:72300, age:22,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-NWU-0230','Sep 10',14100,0,'',0]] },
  { code:'ROT', name:'Rotterdam Liver Center', short:'Rotterdam', loc:'Rotterdam, NL', study:'NASH-3301', paid:29700, age:18,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-ROT-0049','Sep 14',6200,0,'',0]] },
  { code:'ATL', name:'Site 07 | Atlanta Clinical', short:'Atlanta', loc:'Atlanta, US', study:'DIA-2043', paid:81600, age:0,
    note:'All invoices paid. Fastest invoice turnaround in DIA-2043.', inv:[] },
];
const BUD_FINDINGS = [
  { site:'Hopkins Arthritis Center', study:'RA-2209', amt:'$1,240', text:'billed 4 Week 12 visits at 1 hour. The contract says 30 minutes, and the EDC shows 25–35 minutes.' },
  { site:'Leeds Rheumatology', study:'RA-2209', amt:'$2,880', text:'billed 6 lab panels (CRP, ESR) for Week 8. No results are in the EDC yet.' },
  { site:'Charité Diabetes Ctr', study:'DIA-2043', amt:'$4,300', text:'sent INV-CHA-0107 for the same 5 screening visits, dates and amount as INV-CHA-0102.' },
  { site:'Site 12 | Phoenix Clinical', study:'DIA-2043', amt:'$570', text:'billed 3 HbA1c tests with no results in the EDC. This site usually uploads within 10 days, so Prime checks again in 7 days.' },
];
const UP_LAB = { 'RA-2209':'Lab panel (CRP, ESR)', 'NASH-3301':'Liver panel (ALT, AST)', 'DIA-2043':'HbA1c test' };
const BUD_IDS = ['inv-pay','inv-hop','inv-lab','inv-dup'];
const BUD_CHECKED = 214;
const BUD_INSTR = 'Make sure sites are paid correctly and on time.\n\nEach morning, match every new invoice line against the site contract (visit rates and durations) and the EDC (completed visits and lab results). Hold only the lines that don\'t match, so the rest can move to payment.\n\nWatch how long each site has waited. Sites unpaid for more than 3 months may pause enrolment, so flag them to the Enrollment agent and propose releasing their verified lines first.';
const BUD_RULES = [
  { id:'b1', when:'Billed visit time is longer than the contract allows', then:'Hold the difference and draft a re-bill request' },
  { id:'b2', when:'Lab test or procedure billed with no result in the EDC', then:'Hold the line until the result is uploaded' },
  { id:'b3', when:'Billed visits don\'t match completed visits in the EDC', then:'Flag the invoice for review' },
  { id:'b4', when:'Same visits or amount billed twice', then:'Propose rejecting the duplicate' },
  { id:'b5', when:'Site unpaid for 60+ days', then:'Propose releasing the verified lines' },
  { id:'b6', when:'Site unpaid for 90+ days', then:'Flag enrolment risk and alert the Enrollment agent' },
];
const BUD_SOURCES = [
  { id:'CTMS', reads:'Site contracts, visit rates and visit durations' },
  { id:'EDC', reads:'Completed visits, visit times and lab results' },
  { id:'Payments', reads:'Invoices, approvals and payment runs' },
  { id:'Reimbursements', reads:'Participant stipends and travel claims' },
];
const BUD_MEMORY = [
  { id:'bm1', text:'Leeds uploads lab results every 2 weeks. Wait 14 days before holding lab lines there.', source:'From context you added | Aug 28' },
  { id:'bm2', text:'Don\'t flag visit-time differences under 10 minutes.', source:'From a dismissal (“Not worth chasing”) | Jul 14' },
  { id:'bm3', text:'Send re-bill requests to site finance, with the coordinator in copy.', source:'From context you added | Jun 30' },
];

const TEAM = [
  { name:'Marie Curious', role:'Clinical Operations' },
  { name:'K. Braun', role:'CRA | EU sites' },
  { name:'M. Ortiz', role:'Study Manager' },
  { name:'S. Patel', role:'CRA | US sites' },
  { name:'J. Liu', role:'Clinical Finance' }];
const REG_INSTR = 'Keep my studies compliant as regulations change.\n\nEach morning, check the monitored regulator and IRB websites for new or updated guidance, notices and rules. When something could affect a study, explain in plain words what it changes, which studies and sites it touches, and what we may need to do.\n\nQuote the source. Don’t interpret eligibility or safety requirements; route those to medical and regulatory review.';
const REG_RULES = [
  { id:'g1', when:'New final guidance from FDA, EMA, ICH or MHRA', then:'Raise an alert with a plain-language summary' },
  { id:'g2', when:'Draft guidance opened for public comment', then:'Raise a low-impact alert with the comment deadline' },
  { id:'g3', when:'Change touches consent, eligibility or safety reporting', then:'Mark high impact and route to regulatory review' },
  { id:'g4', when:'IRB notice for one of your sites', then:'Propose an action for the site’s CRA' },
  { id:'g5', when:'Guidance mentions a technology the studies use (eCOA, CGM, DCT)', then:'Link the affected study systems' },
];
const REG_MEMORY = [
  { id:'gm1', text:'MHRA alerts only matter for Manchester and Leeds. Don’t tag the US-only studies.', source:'From an alert you marked reviewed | Sep 18' },
  { id:'gm2', text:'Send decentralized-trial guidance to the DIA-2043 study lead as well as to you.', source:'From context you added | Aug 30' },
  { id:'gm3', text:'Skip FDA guidances on devices unless a study uses the device.', source:'From an alert you dismissed | Jul 22' },
];
const REG_ALERTS = [
  { id:'r1', source:'FDA', type:'Final guidance', date:'Oct 14', impact:'Medium', studies:['NASH-3301','DIA-2043'], isNew:true,
    title:'Conducting clinical trials with decentralized elements',
    summary:'Sets expectations for remote visits, local healthcare providers and direct-to-participant shipping of investigational product. Decentralized elements must be described in the protocol and covered by the delegation log.',
    prime:'NASH-3301 home visits (weeks 12–40) fall under this guidance. Confirm the Hamburg and Chicago delegation logs list the home-visit nurses.' },
  { id:'r2', source:'ICH', type:'GCP guideline', date:'Oct 9', impact:'High', studies:['DIA-2043','RA-2209'], isNew:true,
    title:'ICH E6(R3) Good Clinical Practice: risk-proportionate quality management',
    summary:'Expects sponsors to identify critical-to-quality factors up front and scale monitoring to risk. Oversight of service providers such as CROs must be documented.',
    prime:'The DIA-2043 monitoring plan predates E6(R3). CRO oversight of Medpace (Charité) should be documented at the next plan review.' },
  { id:'r3', source:'MHRA', type:'Regulation', date:'Oct 2', impact:'Medium', studies:['RA-2209'], isNew:true,
    title:'UK clinical trials regulations: transparency requirements now apply',
    summary:'Trials at UK sites must be registered on a public registry and publish summary results within 12 months of the end of the trial.',
    prime:'Leeds Rheumatology is the only UK site (RA-2209). Add the 12-month results deadline to the close-out plan.' },
  { id:'r4', source:'FDA', type:'Draft guidance', date:'Sep 26', impact:'Medium', studies:['NASH-3301','DIA-2043','RA-2209'],
    title:'Using AI to support regulatory decision-making for drugs and biologics',
    summary:'Proposes a risk-based credibility framework for AI models whose outputs inform regulatory decisions, including documentation of model context of use.',
    prime:'Prime proposals are approved by a person before anything is sent, and every approval is in the Audit Trail. Document this review step in the study SOPs.' },
  { id:'r5', source:'EMA', type:'Regulation', date:'Sep 18', impact:'Low', studies:['DIA-2043'],
    title:'EU Clinical Trials Regulation: all trials must run through CTIS',
    summary:'The transition period has ended. Substantial modifications and notifications for EU sites go through the Clinical Trials Information System only.',
    prime:'All EU sites for DIA-2043 are already in CTIS. No change needed; the Barcelona navigator amendment must be filed there.' },
  { id:'r6', source:'FDA', type:'Final guidance', date:'Sep 11', impact:'Low', studies:['DIA-2043'],
    title:'Electronic systems, records and signatures in clinical investigations',
    summary:'Clarifies Part 11 expectations for EDC, eConsent and other systems, including vendor oversight and audit trails.',
    prime:'Medidata EDC and the eConsent vendor are validated. Keep vendor qualification records current in the eTMF.' }
];
const DEF_ASG = { 'inv-pay':'J. Liu', 'inv-hop':'J. Liu', 'inv-lab':'J. Liu', 'inv-dup':'J. Liu', houston:'S. Patel', barcelona:'K. Braun', campaign:'M. Ortiz' };
const TEAM_TASKS = [
  ['K. Braun','P1','DIA-2043','Confirm interim CRA cover for Charité with Medpace',3],
  ['K. Braun','P2','DIA-2043','Re-train Barcelona coordinators on the eConsent flow',7],
  ['K. Braun','P1','NASH-3301','Brief Hamburg coordinators on differentiator points',null,3,'Waiting on site'],
  ['M. Ortiz','P1','DIA-2043','Approve revised Phoenix referral budget',1],
  ['M. Ortiz','P2','NASH-3301','Update recruitment forecast after competitor launch',5],
  ['M. Ortiz','P2','RA-2209','Align finance and sites on the payment schedule',4],
  ['M. Ortiz','P2','DIA-2043','Draft protocol clarification for the HbA1c window',null,2,'In progress'],
  ['S. Patel','P2','DIA-2043','Schedule initiation follow-up at Houston Metro',6],
  ['S. Patel','P3','DIA-2043','Confirm Atlanta screening capacity',9],
  ['S. Patel','P1','DIA-2043','Verify Site 03 referral uplift after the budget shift',null,1,'In progress'],
  ['J. Liu','P1','RA-2209','Release Q2 invoices for Leeds Rheumatology',6],
  ['J. Liu','P2','RA-2209','Reconcile Hopkins visit billing against the contract',9],
  ['J. Liu','P2','DIA-2043','Approve Barcelona navigator amendment',5],
  ['J. Liu','P3','DIA-2043','Close duplicate invoice INV-CHA-0098',3],
  ['J. Liu','P1','RA-2209','Clear 90-day unpaid invoices at Charité Rheuma',null,5,'Waiting on Finance'],
  ['Marie Curious','P1','NASH-3301','Sign off the competitor response plan',1],
  ['Marie Curious','P3','DIA-2043','Review Q3 referral spend',12]
].map(r => ({ who:r[0], pri:r[1], study:r[2], title:r[3], res:r[4], age:r[5] || 0, wait:r[6] }));

const ENG_PEOPLE = {
  NWU:['Dr. Amara Okafor','Jenna Walsh',4,'Northwestern'], CHA:['Prof. Lena Hoffmann','Jonas Weber',3,'Charité'], BCN:['Dr. Núria Puig','Marta Soler',3,'Barcelona'], HOU:['Dr. Kevin Hart','Alicia Gómez',3,'Houston'],
  LYO:['Dr. Claire Moreau','Hugo Lefèvre',3,'Lyon'], PHX:['Dr. Sam Whitaker','Lori Chen',3,'Phoenix'], MIL:['Dr. Giulia Ferri','Marco Riva',3,'Milan'], BOS:['Dr. Ellen Shaw','Ryan O’Neil',3,'Boston'],
  ATL:['Dr. Marcus Bell','Tanya Reyes',3,'Atlanta'], SAN:['Dr. Priya Raman','Josh Lee',3,'San Diego'], AMS:['Dr. Pieter de Vries','Sanne Bakker',3,'Amsterdam'], DAL:['Dr. Omar Haddad','Kelly Price',3,'Dallas'],
  SEA:['Dr. Hannah Lund','Ben Ortiz',3,'Seattle'], VIE:['Prof. Martin Gruber','Eva Huber',3,'Vienna'], TOR:['Dr. Nadia Singh','Liam Roy',3,'Toronto'], MAN:['Dr. Owen Hughes','Grace Patel',3,'Manchester'], MAD:['Dr. Carmen Ruiz','Pablo Ortega',3,'Madrid'],
};
const ENG_INS = [
  { id:'nwu', type:'bottleneck', sites:['NWU'], metric:'50% → 20%', title:'Screening conversion has declined', kicker:'FOR YOUR TEAM',
    evidence:'The share of screened participants who passed screening fell from 50% in July to 20% in September (study median 61%). 6 of the 9 screen failures since July were recorded against the HbA1c inclusion range.',
    sources:[['EDC','Screening log | Jul 1 – Oct 24'],['EDC','Screen-fail reasons | 9 records'],['CTMS','Next monitoring visit | Nov 5']],
    secTitle:'Your screening results this quarter',
    body:'At your site, the share of screened participants who passed screening moved from 50% in July to 20% in September. Of the 9 screen failures since July, 6 were recorded against the HbA1c inclusion range.\n\nBefore your monitoring visit on November 5, we would value your view: is anything making it harder to identify or screen eligible participants right now?',
    cta:'Share your screening barriers', action:'Ask for the site’s view on screening barriers before the Nov 5 visit',
    guard:'Prime didn’t suggest a cause. The EDC shows which criterion failed, not why the trend changed, so the newsletter asks the site.',
    subject:'Your screening results, and the November DIA-2043 update',
    data:{ title:'Screened participants who passed screening', unit:'% by month', series:[['Jul',50,'2 of 4'],['Aug',25,'1 of 4'],['Sep',20,'1 of 5']], rows:[['EDC','Screened since Jul 1','13'],['EDC','Screen failures','9 (6 HbA1c, 2 eGFR, 1 withdrew)'],['EDC','Randomized since Jul 1','4'],['EDC','Study median pass rate','61%']] } },
  { id:'cha', type:'bottleneck', sites:['CHA'], metric:'26 days', title:'No new screenings in over 3 weeks', kicker:'FOR YOUR TEAM',
    evidence:'No screening visit has been recorded since September 30. From April to September the site averaged 2.5 screening visits a month. A capacity question sent on Sep 29 has no reply yet.',
    sources:[['EDC','Screening log | last visit Sep 30'],['CTMS','Site status | Active, recruiting'],['Site emails','Capacity question | Sep 29, no reply']],
    secTitle:'A quick check-in on screening',
    body:'We haven’t recorded a new screening visit at your site since September 30. Before that, your team averaged two to three screenings a month.\n\nCould you share a short update on your current capacity, and whether referrals from your partner practices are still coming through? If something has changed, we would like to help plan around it.',
    cta:'Send a capacity update', action:'Request an update on site capacity and referral pathways',
    guard:'CTMS shows the CRA role for this site vacant since Jun 16. Prime left it out: it is internal staffing information, not a confirmed cause.',
    subject:'A quick check-in on screening at Charité',
    data:{ title:'Screening visits', unit:'per month', series:[['Apr',3],['May',2],['Jun',3],['Jul',2],['Aug',2],['Sep',3],['Oct',0]], rows:[['EDC','Last screening visit','Sep 30, 2026'],['EDC','Average Apr–Sep','2.5 a month'],['CTMS','Site status','Active, recruiting'],['Site emails','Sep 29 capacity question','No reply after 27 days']] } },
  { id:'hou', type:'bottleneck', sites:['HOU'], metric:'0 screened', title:'No participant screened since activation', kicker:'FOR YOUR TEAM',
    evidence:'The site was activated on May 20 and has screened no participants in 159 days. 7 referrals are logged in CTMS; none has a screening visit booked.',
    sources:[['CTMS','Activation | May 20'],['CTMS','Referral log | 7 referrals'],['EDC','Screening log | 0 records']],
    secTitle:'Getting your first participant started',
    body:'Your site was activated on May 20, and we haven’t yet seen a screening visit. We know first-participant timing depends on many local factors.\n\nCould you tell us where things stand: which referral sources you are working with, and whether there is anything you need from the study team to book the first screening?',
    cta:'Tell us what you need', action:'Request the status of referral sources and support needs',
    guard:'Prime kept the comparison with other sites (median 18 days to first participant) in your view only. The newsletter doesn’t rank the site.',
    subject:'Getting started at Houston Metro: how can we help?',
    data:{ title:'Referrals logged', unit:'per month', series:[['Jun',0],['Jul',2],['Aug',1],['Sep',3],['Oct',1]], rows:[['CTMS','Activated','May 20, 2026'],['CTMS','Referrals logged','7'],['EDC','Screening visits','0'],['CTMS','Median days to first participant','18 (all sites)']] } },
  { id:'bcn', type:'bottleneck', sites:['BCN'], metric:'5 of 14', title:'Candidates declining at consent', kicker:'FOR YOUR TEAM',
    evidence:'Since July, 5 of 14 candidates who reached the consent discussion decided not to take part. For 3 of them the site recorded “number of study visits” as the reason.',
    sources:[['EDC','Pre-screening log | Jul 1 – Oct 24'],['EDC','Consent outcome reasons | 5 records']],
    secTitle:'What candidates ask at consent',
    body:'Since July, 5 of the 14 candidates who reached the consent discussion at your site decided not to take part, and 3 of them mentioned the number of study visits.\n\nWe would like to understand this better. Which questions come up most often at consent, and is there material that would help your team answer them?',
    cta:'Share what candidates ask', action:'Ask for consent-visit feedback and material needs',
    subject:'Your consent conversations, and the November DIA-2043 update',
    data:{ title:'Declined at consent', unit:'candidates per month', series:[['Jul',1],['Aug',2],['Sep',1],['Oct',1]], rows:[['EDC','Reached consent discussion','14'],['EDC','Declined','5 (3 visit number, 1 travel, 1 not recorded)'],['EDC','Consented','9']] } },
  { id:'phx', type:'bottleneck', sites:['PHX'], metric:'9%', title:'Few referrals reach screening', kicker:'FOR YOUR TEAM',
    evidence:'Of 104 referrals logged since June, 9 reached a screening visit (9%; study median 22%).',
    sources:[['CTMS','Referral log | 104 since Jun 1'],['EDC','Screening log | 9 visits']],
    secTitle:'How referrals reach your site',
    body:'Your team has logged 104 referrals since June, and 9 of them reached a screening visit.\n\nWe would like to understand how referrals arrive at your site today, and whether the pre-screening questions on the referral form work for you. Would a 20-minute call with your CRA in November suit your team?',
    cta:'Book a 20-minute call', action:'Invite the site to a referral process review with its CRA',
    subject:'Your referrals, and the November DIA-2043 update',
    data:{ title:'Referrals that reached screening', unit:'% by month', series:[['Jun',8,'8%'],['Jul',7,'7%'],['Aug',11,'11%'],['Sep',10,'10%']], rows:[['CTMS','Referrals since Jun 1','104'],['EDC','Screening visits','9'],['CTMS','Study median','22%']] } },
  { id:'mil', type:'bottleneck', sites:['MIL'], metric:'22% eligible', title:'Few referred candidates are eligible', kicker:'FOR YOUR TEAM',
    evidence:'7 of 32 candidates referred since July were eligible at pre-screening (study median 41%). The most common reason was HbA1c outside the inclusion range.',
    sources:[['EDC','Pre-screening log | 32 candidates'],['Site emails','Referral checklist request | Oct 3']],
    secTitle:'A referral checklist for your referring physicians',
    body:'Since July, 7 of the 32 candidates referred to your site were eligible at pre-screening. Several sites share the approved one-page referral checklist (v1.2) with their referring physicians.\n\nWould it help if we sent you a copy?',
    cta:'Request the referral checklist', action:'Offer the approved referral checklist',
    data:{ title:'Referred candidates eligible at pre-screening', unit:'% by month', series:[['Jul',20,'20%'],['Aug',18,'18%'],['Sep',26,'26%']], rows:[['EDC','Referred since Jul 1','32'],['EDC','Eligible at pre-screening','7'],['EDC','Study median','41%']] } },
  { id:'lyo', type:'bottleneck', sites:['LYO'], metric:'2 withdrawals', title:'Early withdrawals before Week 12', kicker:'FOR YOUR TEAM',
    evidence:'2 participants withdrew before Week 12 (Aug 19 and Sep 30). The site recorded “scheduling conflicts” as the reason for both.',
    sources:[['EDC','Disposition | 2 early withdrawals'],['EDC','Withdrawal reasons']],
    secTitle:'Keeping visits manageable for participants',
    body:'Two participants at your site withdrew before Week 12 since August, and both recorded scheduling conflicts as the reason.\n\nAre there visit times, reminders or support that would make the schedule easier for your participants? We would like to hear what you are seeing.',
    cta:'Share retention feedback', action:'Ask for retention feedback',
    subject:'Week 12 visits at Lyon, and the November DIA-2043 update',
    data:{ title:'Early withdrawals', unit:'per month', series:[['Jul',0],['Aug',1],['Sep',1],['Oct',0]], rows:[['EDC','Randomized to date','7'],['EDC','Withdrawn before Week 12','2'],['EDC','Recorded reason','Scheduling conflicts (both)']] } },
  { id:'q1', type:'question', sites:['LYO','MIL'], metric:'5 questions', title:'Repeated questions about Week 12 visit procedures', kicker:'CLARIFICATION',
    evidence:'Since August, Lyon asked 4 times and Milan once how long participants must fast before the Week 12 OGTT, and when to replace the CGM sensor.',
    sources:[['Site questions','Q-1187, Q-1203, Q-1219, Q-1242, Q-1250'],['SRM v2.1','Section 6.3 | approved Jul 8']],
    secTitle:'Clarification: the Week 12 visit',
    body:'Several recent questions from your team were about the Week 12 visit. The approved Study Reference Manual (v2.1, section 6.3) states:\n\n“Participants must fast for at least 8 hours before the Week 12 OGTT. Water is permitted. Replace the CGM sensor after the OGTT is complete, before the participant leaves the clinic.”\n\nFor anything this doesn’t cover, please contact your CRA or the medical monitor.',
    cta:'Open SRM section 6.3', action:'Answer with the approved SRM text',
    guard:'The answer is quoted word for word from SRM v2.1 §6.3. Prime added no new instructions, so clinical operations approval is enough.',
    data:{ title:'Questions about the Week 12 visit', unit:'per month', series:[['Jul',0],['Aug',1],['Sep',2],['Oct',2]], rows:[['Q-1187','Lyon | Aug 22','Fasting before OGTT'],['Q-1203','Lyon | Sep 9','CGM replacement'],['Q-1219','Lyon | Sep 24','Fasting before OGTT'],['Q-1242','Lyon | Oct 8','CGM replacement'],['Q-1250','Milan | Oct 15','Fasting before OGTT']] } },
  { id:'q2', type:'question', sites:['NWU','PHX'], metric:'3 questions', held:true, title:'Questions about retesting HbA1c at screening', kicker:'CLARIFICATION',
    evidence:'Northwestern (2) and Phoenix (1) asked whether a participant with a borderline HbA1c can be retested within the screening window.',
    sources:[['Site questions','Q-1211, Q-1236, Q-1244'],['SRM v2.1','No section covers retesting']],
    secTitle:'HbA1c retesting at screening',
    body:'Sent to Dr. Ravi Patel (Medical Monitor) on Oct 24:\n“Can a participant whose screening HbA1c is just outside the inclusion range be retested within the 28-day screening window?”\n\nThis stays out of the newsletter until the medical monitor answers.',
    guard:'Approved guidance doesn’t cover retesting, and answering would interpret an eligibility criterion. Prime routed it to medical review instead of drafting an answer.',
    data:{ title:'Questions about HbA1c retesting', unit:'per month', series:[['Aug',0],['Sep',1],['Oct',2]], rows:[['Q-1211','Northwestern | Sep 18','Retest window'],['Q-1236','Phoenix | Oct 6','Retest window'],['Q-1244','Northwestern | Oct 13','Retest window']] } },
  { id:'q3', type:'question', sites:['BCN','MAD'], metric:'3 questions', shared:'faq', title:'Questions about the Week 4 visit window', kicker:'CLARIFICATION',
    evidence:'Barcelona (2) and Madrid (1) asked how many days the Week 4 visit can move. The answer applies to every site, so Prime added it to the shared content.',
    sources:[['Site questions','Q-1195, Q-1228, Q-1239'],['SRM v2.1','Section 5.2 | approved Jul 8']],
    secTitle:'Frequently asked: the Week 4 visit window',
    body:'The approved Study Reference Manual (v2.1, section 5.2) states: “The Week 4 visit may take place within ±3 days of its target date.”',
    data:{ title:'Questions about the Week 4 window', unit:'per month', series:[['Aug',1],['Sep',1],['Oct',1]], rows:[['Q-1195','Barcelona | Aug 30','Visit window'],['Q-1228','Madrid | Sep 29','Visit window'],['Q-1239','Barcelona | Oct 10','Visit window']] } },
  { id:'atl', type:'recognition', sites:['ATL'], metric:'11 of 9', title:'Recruitment ahead of target', kicker:'RECOGNITION',
    evidence:'11 randomized against 9 planned to date (122%). 24% of referrals reached randomization, the highest in the study (median 10%).',
    sources:[['CTMS','Enrollment vs plan | Oct 25'],['CTMS','Referral log'],['EDC','Randomization log']],
    secTitle:'Thank you, Atlanta',
    body:'Your team has randomized 11 participants against 9 planned to date, the strongest enrollment in DIA-2043. Thank you.\n\nOther sites have asked how you work with referring physicians. Would you be willing to share your approach for five minutes at the investigator call on December 10?',
    cta:'Yes, we’ll share our approach', action:'Invite the team to share referral strategies on Dec 10',
    subject:'Atlanta is leading DIA-2043 enrollment. Thank you',
    data:{ title:'Randomized, cumulative', unit:'vs 9 planned to date', series:[['Jun',6],['Jul',7],['Aug',8],['Sep',10],['Oct',11]], rows:[['CTMS','Randomized / planned','11 / 9'],['CTMS','Referral to randomization','24% (median 10%)'],['EDC','Open data queries','0']] } },
  { id:'grp', type:'recognition', sites:['SAN','VIE','BOS','AMS'], metric:'4 sites', title:'On or ahead of plan with no open issues', kicker:'RECOGNITION',
    evidence:'San Diego (10 of 9), Vienna (6 of 5), Boston (6 of 6) and Amsterdam (5 of 5) are at or above their enrollment plan with no open data queries.',
    sources:[['CTMS','Enrollment vs plan | Oct 25'],['EDC','Open queries | 0']],
    secTitle:'Thank you for staying on plan',
    body:'Your site has randomized {en} participants against {ex} planned to date, with no open data queries. Thank you to the whole team for the steady work.',
    action:'Thank each site with its own numbers',
    data:{ title:'Randomized vs planned to date', unit:'by site', series:[['SAN',10],['VIE',6],['BOS',6],['AMS',5]], rows:[['CTMS','San Diego','10 / 9'],['CTMS','Vienna','6 / 5'],['CTMS','Boston','6 / 6'],['CTMS','Amsterdam','5 / 5']] } },
];
const ENG_SHARED = [
  { id:'progress', title:'Study progress', kind:'progress', sources:[['CTMS','Enrollment | Oct 25'],['EDC','Randomization log']],
    body:'September was the study’s strongest month since March, with 11 randomizations across 9 sites.\n\nTo complete enrollment by February 2027, the study needs about 21 randomizations a month from here.' },
  { id:'miles', title:'Coming up', kind:'list', sources:[['CTMS','Study milestones']],
    body:'Nov 30 | Re-consent to protocol v4.0 complete at all sites\nDec 10 | Investigator call (virtual), 16:00 CET\nDec 15 | Data cut for the interim safety review' },
  { id:'best', title:'What’s working at other sites', sources:[['EDC','Screen-fail reasons | 17 sites'],['Site emails','Atlanta | Sep 30']],
    body:'Six sites now hold a short pre-screening call to check a candidate’s recent HbA1c before booking the screening visit. Since July, those sites recorded a 21% screen-fail rate, compared with 38% at the other sites. This is an observation across sites, not a controlled comparison, but several teams have found the call useful.' },
  { id:'faq', title:'Frequently asked: the Week 4 visit window', sources:[['Site questions','3 questions | Barcelona, Madrid'],['SRM v2.1','Section 5.2 | approved']],
    body:'The approved Study Reference Manual (v2.1, section 5.2) states: “The Week 4 visit may take place within ±3 days of its target date.”' },
  { id:'ops', title:'Operational updates', sources:[['Issue log','VND-221, VND-224']],
    body:'Central lab kits v3 ship from November 3. Please use remaining v2 kits before they expire on December 31.\n\nThe EDC will be unavailable on Saturday, November 8, from 02:00 to 06:00 UTC for scheduled maintenance.' },
];
const ENG_READ = [['CTMS','Site status, enrollment vs plan, referrals, contacts'],['EDC','Screening log, screen-fail reasons, randomizations'],['Site emails','214 messages since the October newsletter'],['Site questions','31 questions and issue-log tickets'],['SRM v2.1','Approved guidance, used for clarifications'],['Past campaigns','4 newsletters, replies and completed actions']];
const ENG_AI_CHIPS = ['Shorter','Warmer tone','Add a reply-by date','More direct ask'];
const ENG_CAL = [
  ['Jul 2026',[['jun','July newsletter','Jul 30','sent','76% confirmed | 11 replies']]],
  ['Aug 2026',[['p4','Protocol v4.0 notice','Aug 14','sent','98% confirmed | medical review ✓'],['jul','August newsletter','Aug 28','sent','79% confirmed | 14 replies']]],
  ['Sep 2026',[['aug','September newsletter','Sep 29','sent','81% confirmed | 15 replies']]],
  ['Oct 2026',[['sep','October newsletter','Oct 29','sent','84% confirmed | 19 replies']]],
  ['Nov 2026',[['oct','November newsletter','Nov 26','draft','']]],
  ['Dec 2026',[['','Investigator call recap','Dec 12','planned','Prime drafts it after the call'],['','December newsletter','Dec 17','planned','Draft ready Dec 14']]],
  ['Jan 2027',[['','January newsletter','Jan 21','planned','Draft ready Jan 18']]],
];
const ENG_CHAT = [
  { id:'quiet', kw:/quiet|silent|inactive|re-?engage|no repl/i, ask:'Re-engage sites with no activity', sub:'Sites with no screening or reply since September',
    read:'Read 214 site emails and CTMS activity since Sep 1',
    msg:'Charité, Houston and 4 other sites have gone quiet since September. I drafted a check-in for their 14 coordinators.',
    follow:'Include the PIs too',
    p1:{ title:'Check-in | 6 quiet sites', date:'Nov 3', rows:[['Audience','14 coordinators at 6 sites'],['Channel','Email + CRA follow-up call'],['Sends','Tue Nov 3, 09:00 site time'],['Expected','3 to 5 sites back to screening']] },
    p2:{ title:'Check-in | 6 quiet sites + PIs', date:'Nov 3', rows:[['Audience','14 coordinators + 6 PIs'],['Channel','Email + CRA follow-up call'],['Sends','Tue Nov 3, 09:00 site time'],['Expected','4 to 6 sites back to screening']] } },
  { id:'thanks', kw:/thank|top|best|recogni|high/i, ask:'Thank the top-recruiting sites', sub:'And share what works with the rest of the study',
    read:'Read EDC randomizations for 17 sites',
    msg:'Atlanta, San Diego and Phoenix are ahead of plan. I drafted a thank-you that asks each site to share one thing that works.',
    follow:'Add a short video from the Atlanta PI',
    p1:{ title:'Recognition | top 3 sites', date:'Nov 5', rows:[['Audience','9 contacts at 3 sites'],['Channel','Email'],['Sends','Thu Nov 5, 10:00 site time'],['Expected','Tips for the December newsletter']] },
    p2:{ title:'Recognition | top 3 sites + video', date:'Nov 5', rows:[['Audience','9 contacts at 3 sites'],['Channel','Email + 60-second PI video'],['Sends','Thu Nov 5, 10:00 site time'],['Expected','Tips for the December newsletter']] } },
  { id:'reconsent', kw:/consent|protocol|v4|remind/i, ask:'Remind sites to finish re-consent to v4.0', sub:'Due Nov 30 at all sites',
    read:'Read eConsent status for 17 sites',
    msg:'5 sites still have participants to re-consent to protocol v4.0 before Nov 30. I drafted a reminder for their coordinators.',
    follow:'Send a second reminder a week later',
    p1:{ title:'Reminder | re-consent to v4.0', date:'Nov 2', rows:[['Audience','11 coordinators at 5 sites'],['Channel','Email'],['Sends','Mon Nov 2, 09:00 site time'],['Expected','23 re-consents by Nov 30']] },
    p2:{ title:'Reminder | re-consent to v4.0 + follow-up', date:'Nov 2', rows:[['Audience','11 coordinators at 5 sites'],['Channel','Email'],['Sends','Mon Nov 2 and Mon Nov 9, 09:00'],['Expected','23 re-consents by Nov 30']] } },
];
function siteChat(c) {
  const n = c.name, iss = c.issues.length ? c.issues : [['Screening capacity not confirmed for Q4','Opened Oct 12 | owner ' + c.cra,'open'],['Referral log not updated since September','Opened Oct 18 | owner ' + c.crc,'open']];
  const pct = c.expected ? Math.round(c.enrolled / c.expected * 100) : 100, sfp = c.screened ? Math.round(c.sf / c.screened * 100) : 0, sfHi = sfp >= 25;
  const fu = iss.map(i => i[0]).concat(['Confirm screening capacity through the holidays','Review the referral log with ' + c.crc]).slice(0, 3);
  return [
  { id:'brief', out:'brief', ask:'Prepare a brief for the next site meeting', sub:'Consolidates enrollment, data quality, outstanding issues, previous communications, and recommended discussion points',
    read:'Read CTMS, EDC, site emails and ' + iss.length + ' open issues for ' + n,
    msg:n + ' is at ' + c.enrolled + ' of ' + c.expected + ' planned, with ' + c.qOpen + ' open data queries and ' + iss.length + ' open issues. I drafted a brief for your next meeting with ' + c.pi + '.',
    follow:'Add nearby competing trials', head:'Create meeting brief', link:'View in Overview', done:'Brief saved to the site overview and as a CTMS note',
    p1:{ title:'Meeting brief | ' + n, rows:[['Meeting', c.pi + ' | Nov 5'],['Covers','Enrollment, data quality, ' + iss.length + ' issues, emails'],['Discussion','3 recommended points'],['Saved to','Site overview + CTMS note']] },
    p2:{ title:'Meeting brief | ' + n + ' + competition', rows:[['Meeting', c.pi + ' | Nov 5'],['Covers','Enrollment, data quality, ' + iss.length + ' issues, emails, competing trials'],['Discussion','4 recommended points'],['Saved to','Site overview + CTMS note']] },
    make:r => ({ meet:'Next site meeting with ' + c.pi + ' | Nov 5', rows:[
      ['Enrollment', c.enrolled + ' randomized against ' + c.expected + ' planned to date (' + pct + '%). ' + c.screened + ' screened, ' + c.sf + ' screen-failed.'],
      ['Data quality', c.qOpen ? c.qOpen + ' open data queries, the oldest ' + c.qAge + ' days old. Owner: ' + c.crc + '.' : 'No open data queries. Last monitoring visit closed with no findings.'],
      ['Outstanding issues', iss.map(i => i[0] + ' (' + i[1] + ')').join('\n')],
      ['Previous communications', 'September newsletter acknowledged by ' + c.crc + '. Last reply from the site on Oct 3.'],
      ['Discussion points', '1. ' + iss[0][0] + ': agree an owner and a date\n2. Screening capacity from Dec 20 to Jan 6\n3. ' + (sfHi ? 'A lab pre-check to cut screen failures (' + sfp + '% today)' : 'Which referral sources convert best at this site') + (r ? '\n4. How to position the study against competing trials' : '')]
    ].concat(r ? [['Competing trials', c.comp || 'No competing trials recruiting nearby']] : []) }) },
  { id:'blockers', out:'blockers', ask:'Identify recruitment blockers at this site', sub:'Finds where candidates drop out between referral and randomization, and why',
    read:'Read the EDC screening log and CTMS referral log for ' + n,
    msg:'I found 3 blockers at ' + n + '. The largest: ' + (sfHi ? sfp + '% of screened candidates fail screening, mostly on lab values.' : 'referrals wait a median 12 days for first contact (study median 5).'),
    follow:'Compare with the top-recruiting site', head:'Add to Recruitment', link:'View in Recruitment', done:'3 blockers added to the Recruitment section',
    p1:{ title:'Recruitment blockers | ' + n, rows:[['Found','3 blockers | 1 high impact'],['Largest', sfHi ? 'Screen failures (' + sfp + '%)' : 'Slow first contact'],['Evidence','EDC screen-fail reasons, CTMS referrals'],['Adds to','Recruitment section']] },
    p2:{ title:'Recruitment blockers | ' + n + ' vs Atlanta', rows:[['Found','3 blockers | 1 high impact'],['Largest', sfHi ? 'Screen failures (' + sfp + '%)' : 'Slow first contact'],['Evidence','EDC, CTMS + Atlanta benchmark'],['Adds to','Recruitment section']] },
    make:r => { const b = [
      ['High', sfHi ? 'Screen failures on lab eligibility' : 'Slow first contact with referrals', (sfHi ? c.sf + ' of ' + c.screened + ' screened candidates failed, most on lab values a pre-check could catch.' : 'Median 12 days from referral to first contact (study median 5).') + (r ? (sfHi ? ' Atlanta: 18%, with a lab pre-check at the first call.' : ' Atlanta: 3 days, with a call within 48 hours.') : ''), sfHi ? 'EDC' : 'CTMS'],
      ['Medium', sfHi ? 'Slow first contact with referrals' : 'Screen failures on lab eligibility', (sfHi ? 'Median 12 days from referral to first contact (study median 5).' : c.sf + ' of ' + c.screened + ' screened candidates failed screening.') + (r ? ' Atlanta: 3 days.' : ''), sfHi ? 'CTMS' : 'EDC'],
      ['Medium', 'One coordinator runs all screening visits', c.crc + ' runs every screening visit, which caps the site at about 3 a week.' + (r ? ' Atlanta splits visits across 2 coordinators.' : ''), 'Site emails'] ]; return b; } },
  { id:'cra', out:'actions', ask:'Prepare CRA follow-ups for open site issues', sub:'Converts outstanding issues into prioritized actions, owners, and deadlines',
    read:'Read ' + iss.length + ' open issues and the last CRA visit report for ' + n,
    msg:iss.length + ' issues are open at ' + n + '. I turned them into 3 follow-ups, ordered by impact on enrollment.',
    follow:'Bring the deadlines forward a week', head:'Add to Actions', link:'Open Actions', done:'3 follow-ups added to Actions',
    p1:{ title:'CRA follow-ups | ' + n, rows:[['Actions','3 follow-ups | P1, P2, P2'],['Owners', c.cra + ' (CRA), ' + c.crc],['Deadlines','Nov 6 to Nov 13'],['Adds to','Actions tab']] },
    p2:{ title:'CRA follow-ups | ' + n, rows:[['Actions','3 follow-ups | P1, P2, P2'],['Owners', c.cra + ' (CRA), ' + c.crc],['Deadlines','Oct 30 to Nov 6'],['Adds to','Actions tab']] },
    make:r => { const dl = r ? ['Oct 30','Nov 3','Nov 6'] : ['Nov 6','Nov 10','Nov 13'], tm = new Date().toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
      return fu.map((t, k) => { const own = k === 1 ? c.crc : c.cra;
        return { id:'cra' + Date.now() + k, sites:[c.code], study:c.study, pri:k ? 'P2' : 'P1', kind:'CRA follow-up', time:tm, type:'email', verb:'Approve & send',
          title:t + ' | ' + n, to:own + (k === 1 ? ' | site coordinator' : ' | CRA'), subject:c.study + ' | ' + n + ' | ' + t,
          body:'Hi ' + own.split(' ')[0] + ',\n\nPlease follow up with ' + n + ' on: ' + t.charAt(0).toLowerCase() + t.slice(1) + '.\n\nDeadline: ' + dl[k] + '. Log the outcome in CTMS so I can close the issue.\n\nThanks,\nMarie',
          observed:'Open issue at ' + n + '.', why:'Prime ordered the open issues by their impact on enrollment. This one ranks ' + (k + 1) + ' of 3.', sources:['CTMS','Site emails'],
          impact:k ? 'Protect screening pace' : 'Unblock screening', days:k ? 3 : 6, conf:'Medium', followUp:'Sent to ' + own + '. Prime will check CTMS for the outcome on ' + dl[k] + '.' }; }); } },
  { id:'comm', out:'cal', ask:'Draft a communication to this site', sub:'Translates findings into actionable instructions, including protocol reminders and recruitment recommendations',
    read:'Read site findings, protocol ' + c.pv + ' and recruitment data for ' + n,
    msg:'I drafted an email to ' + c.pi + ' and ' + c.crc + ' with 2 protocol reminders and 3 recruitment recommendations.',
    follow:'Make it shorter', head:'Add to your calendar', link:'View calendar',
    p1:{ title:'Site update | ' + n, date:'Nov 3', rows:[['Audience', c.pi + ' (PI), ' + c.crc],['Channel','Email'],['Sends','Tue Nov 3, 09:00 site time'],['Covers','2 protocol reminders, 3 recommendations']] },
    p2:{ title:'Site update | ' + n + ' (short)', date:'Nov 3', rows:[['Audience', c.pi + ' (PI), ' + c.crc],['Channel','Email | short version'],['Sends','Tue Nov 3, 09:00 site time'],['Covers','2 protocol reminders, 1 recommendation']] } }
  ];
}
function pgTask(id, ask, sub, read, msg, title, rows, follow, rows2, head, done, link, to) { return { id, ask, sub, read, msg, follow, head, done, link, to, out:'nav', p1:{ title, rows }, p2:{ title:title + ' | revised', rows:rows2 } }; }
const PAGE_CHAT = {
  prime:{ label:'Homepage', introT:'What should Prime do for you today?', ph:'Ask Prime about your studies…', tasks:[
    pgTask('today', 'Summarize what needs my attention', 'Across sites, engagements, actions, etc', 'Read Actions, CTMS, EDC and Finance for 3 studies',
      'Four things need you today. The largest is 3 P1 actions waiting for approval, two of them on DIA-2043.', 'Today | 4 priorities',
      [['P1 actions','3 waiting for approval'],['Newsletter','November draft | sends Nov 26'],['Payments','RA-2209 invoices unpaid 90+ days'],['Enrollment','DIA-2043 and NASH-3301 behind plan']],
      'Only DIA-2043', [['P1 actions','2 waiting for approval'],['Newsletter','November draft | sends Nov 26'],['Enrollment','96 of 180 | behind plan'],['Sites','Charité and Houston need follow-up']],
      'Pin to Homepage', 'Pinned to your Homepage', 'Open Actions', { tab:'inbox', filter:'open', study:null, selectedId:null }),
    pgTask('atrisk', 'Find sites at risk across all studies', 'Sites more than 40% behind their enrollment plan', 'Read CTMS enrollment and plan for 34 sites',
      'Several sites are more than 40% behind plan. Most are on DIA-2043 and NASH-3301, with referral and screening as the main bottlenecks.', 'Sites at risk | all studies',
      [['Scope','3 studies | 34 sites'],['Rule','Below 60% of plan to date'],['Main bottlenecks','Referral, screening'],['Opens','Sites List, At risk filter']],
      'Run it every Monday', [['Scope','3 studies | 34 sites'],['Rule','Below 60% of plan to date'],['Schedule','Every Monday, 06:00'],['Opens','Sites List, At risk filter']],
      'Save this check', 'Saved. Prime will run it every Monday at 06:00', 'Open Sites List', { tab:'bySite', bsView:'list', bslFilter:'At risk' }),
    pgTask('weekly', 'Draft my weekly update for study leadership', 'Enrollment, risks and decisions taken this week', 'Read the Audit Trail and CTMS for the last 7 days',
      'I drafted a one-page update with enrollment by study, the 3 largest risks and the actions you approved this week.', 'Weekly update | Oct 26 to Oct 30',
      [['Audience','Study leadership | 6 people'],['Covers','Enrollment, risks, approved actions'],['Length','1 page'],['Sends','Fri Oct 30, 16:00']],
      'Make it shorter', [['Audience','Study leadership | 6 people'],['Covers','Enrollment and top risk only'],['Length','5 bullet points'],['Sends','Fri Oct 30, 16:00']],
      'Approve & schedule', 'Scheduled for Fri Oct 30, 16:00', 'View in Audit Trail', { tab:'activity' }) ] },
  inbox:{ label:'Actions', introT:'What should Prime do with your actions?', ph:'Ask Prime about these actions…', tasks:[
    pgTask('triage', 'Rank open actions by impact on enrollment', 'Uses expected days saved and confidence', 'Read every open action and its evidence',
      'Ranked by days saved. The budget shift and the Charité escalation account for most of the expected gain.', 'Open actions | ranked',
      [['First','Shift 20% of referral budget | +24 days'],['Second','Charité CRA staffing plan | +18 days'],['Third','NASH differentiator points | +14 days'],['Method','Days saved × confidence']],
      'Put P1 first, then impact', [['First','P1 actions by days saved'],['Then','P2 and P3 by days saved'],['Top','Shift 20% of referral budget'],['Method','Priority, then days saved']],
      'Apply this order', 'Order applied to Actions', 'View Actions', { tab:'inbox', filter:'open', study:null, selectedId:null }),
    pgTask('owners', 'Assign actions that have no owner', 'Matches each action to the right person on your team', 'Read the team list and open actions',
      'Most open actions are still with you. I matched site emails to CRAs and invoice actions to Finance.', 'Owners | open actions',
      [['CRA actions','K. Braun, S. Patel'],['Finance actions','J. Liu'],['Stays with you','Budget changes'],['Notifies','Each new owner by email']],
      'Keep P1 actions with me', [['CRA actions','P2 and P3 only'],['Finance actions','J. Liu'],['Stays with you','All P1 actions'],['Notifies','Each new owner by email']],
      'Assign', 'Owners assigned and notified', 'View Actions', { tab:'inbox', filter:'open', study:null, selectedId:null }) ] },
  studies:{ label:'Enrollment', introT:'What should Prime look into?', ph:'Ask Prime about enrollment…', tasks:[
    pgTask('why', 'Explain why DIA-2043 is behind plan', 'Breaks the gap down by site and funnel stage', 'Read CTMS enrollment, EDC screening and referral logs',
      'Most of the gap comes from 4 sites: budget spent at low-converting sites, the Charité CRA vacancy, a stalled first patient in Houston and consent drop-off in Barcelona.', 'DIA-2043 | gap to plan',
      [['Gap','84 participants to target'],['Largest causes','4 sites, 3 funnel stages'],['Biggest single cause','Charité referrals down 60%'],['Saves to','Study notes']],
      'Add what it costs per month', [['Gap','84 participants to target'],['Largest causes','4 sites, 3 funnel stages'],['Cost of delay','About $730k a month'],['Saves to','Study notes']],
      'Save as a note', 'Saved to the DIA-2043 study notes', 'Open Patients Recruitment', { tab:'sites', sitesStudy:'DIA-2043', siteFilter:'all', openSite:null }),
    pgTask('capacity', 'Find sites that can take more patients', 'Sites ahead of plan with open screening slots', 'Read CTMS visit capacity and EDC screening for 34 sites',
      'Atlanta, San Diego and Vienna are ahead of plan and have open screening slots in November.', 'Sites with capacity',
      [['Sites','Atlanta, San Diego, Vienna'],['Open slots','About 14 in November'],['Study','DIA-2043'],['Next step','Shift referral budget']],
      'Include all studies', [['Sites','Atlanta, San Diego, Vienna, Leiden'],['Open slots','About 19 in November'],['Studies','DIA-2043, RA-2209'],['Next step','Shift referral budget']],
      'Save as a note', 'Saved to the study notes', 'Open Sites List', { tab:'bySite', bsView:'list', bslFilter:'On track' }) ] },
  budget:{ label:'Budget', introT:'What should Prime check in the budget?', ph:'Ask Prime about budget and payments…', tasks:[
    pgTask('mismatch', 'Find invoice lines that don\'t match the contract', 'Compares each line with the agreement and the EDC', 'Read pending invoices, site agreements and EDC visits',
      'I found lines billed above the contracted rate or before results were in the EDC. Holding them keeps the rest of each invoice moving.', 'Invoice checks | pending',
      [['Over-billed','4 visits at Hopkins'],['Not yet verified','6 lab lines at Leeds'],['Duplicates','1 invoice at Charité'],['Held amount','$4,120']],
      'Only RA-2209', [['Over-billed','4 visits at Hopkins'],['Not yet verified','6 lab lines at Leeds'],['Study','RA-2209'],['Held amount','$4,120 less the Charité duplicate']],
      'Hold these lines', 'Lines held until verified', 'Open Budget', { tab:'budget' }),
    pgTask('paystatus', 'Tell sites when they will be paid', 'One short email per site with open invoices', 'Read Finance payment runs and open invoices',
      'I drafted a payment update for each site with open invoices, with the amount and the next payment run date.', 'Payment update | sites with open invoices',
      [['Audience','Site finance contacts'],['Covers','Amount, invoice IDs, payment date'],['Channel','Email'],['Sends','After the Nov 2 payment run']],
      'Send it today instead', [['Audience','Site finance contacts'],['Covers','Amount, invoice IDs, payment date'],['Channel','Email'],['Sends','Today, 16:00']],
      'Approve & schedule', 'Scheduled to sites', 'View in Audit Trail', { tab:'activity' }) ] },
  reg:{ label:'Regulatory', introT:'What should Prime check for you?', ph:'Ask Prime about regulatory updates…', tasks:[
    pgTask('impact', 'Summarize new guidance that affects my studies', 'From regulator and IRB websites this month', 'Read monitored regulator and IRB websites',
      'Two new notices this month may affect your studies. Neither needs a protocol change, but one changes how eConsent records are kept.', 'New guidance | October',
      [['Notices','2 relevant this month'],['Affects','DIA-2043, NASH-3301'],['Protocol change','None needed'],['Saves to','Regulatory notes']],
      'Add what sites need to do', [['Notices','2 relevant this month'],['Affects','DIA-2043, NASH-3301'],['Site tasks','Update eConsent record keeping'],['Saves to','Regulatory notes']],
      'Save as a note', 'Saved to Regulatory notes', 'Open Regulatory', { tab:'reg' }),
    pgTask('irb', 'List sites with IRB approvals expiring soon', 'Approvals ending in the next 60 days', 'Read eIRB approval dates for 34 sites',
      'A few sites have IRB approvals ending in the next 60 days. I drafted a renewal reminder for each.', 'IRB renewals | next 60 days',
      [['Window','Next 60 days'],['Reminder','To each PI and coordinator'],['Channel','Email'],['Sends','Mon Nov 2, 09:00']],
      'Copy the CRAs', [['Window','Next 60 days'],['Reminder','PI, coordinator and CRA'],['Channel','Email'],['Sends','Mon Nov 2, 09:00']],
      'Approve & schedule', 'Reminders scheduled', 'View in Audit Trail', { tab:'activity' }) ] },
  sites:{ label:'Patients Recruitment', introT:'What should Prime look into for this study?', ph:'Ask Prime about recruitment…', tasks:[
    pgTask('median', 'Compare each site with the study median', 'Referral, screening and consent conversion', 'Read CTMS referrals and EDC screening for every site in the study',
      'Most of the gap comes from a few sites with low screening conversion. I listed them with their largest drop-off stage.', 'Sites vs study median',
      [['Measures','Referral, screening, consent'],['Below median','Mostly screening'],['Output','Table by site'],['Saves to','Study notes']],
      'Only sites at risk', [['Measures','Referral, screening, consent'],['Scope','At-risk sites only'],['Output','Table by site'],['Saves to','Study notes']],
      'Save as a note', 'Saved to the study notes', 'Open Sites List', { tab:'bySite', bsView:'list', bslFilter:'At risk' }),
    pgTask('plan', 'Draft a recovery plan for at-risk sites', 'One or two actions per site', 'Read site bottlenecks, issues and recent emails',
      'I proposed one action per at-risk site, based on its main bottleneck. Each one goes to Actions for approval.', 'Recovery plan | at-risk sites',
      [['Sites','All at-risk sites'],['Actions','1 per site'],['Owners','Assigned CRA'],['Adds to','Actions']],
      'Two actions per site', [['Sites','All at-risk sites'],['Actions','2 per site'],['Owners','Assigned CRA'],['Adds to','Actions']],
      'Add to Actions', 'Added to Actions', 'Open Actions', { tab:'inbox', filter:'open', study:null, selectedId:null }) ] },
  bySiteList:{ label:'Sites List', introT:'What should Prime do across your sites?', ph:'Ask Prime about your sites…', tasks:[
    pgTask('visits', 'Find sites that need a monitoring visit this month', 'Based on open queries, enrollment and last visit date', 'Read CTMS monitoring visits and EDC queries for 34 sites',
      'A handful of sites have many open queries or no visit in over 6 weeks. I drafted visit requests for their CRAs.', 'Monitoring visits | November',
      [['Rule','Over 6 weeks since last visit, or 5+ queries'],['Owners','Assigned CRAs'],['Channel','Email to CRA'],['Adds to','Actions']],
      'Only DIA-2043', [['Rule','Over 6 weeks since last visit, or 5+ queries'],['Study','DIA-2043'],['Owners','Assigned CRAs'],['Adds to','Actions']],
      'Add to Actions', 'Visit requests added to Actions', 'Open Actions', { tab:'inbox', filter:'open', study:null, selectedId:null }),
    pgTask('rank', 'Rank sites by enrollment gap', 'Who is furthest behind plan, in each study', 'Read CTMS enrollment and plan for 34 sites',
      'Ranked by participants behind plan. Northwestern, Charité and Houston are furthest behind on DIA-2043.', 'Sites ranked by gap',
      [['Scope','3 studies | 34 sites'],['Measure','Participants behind plan to date'],['Top 3','Northwestern, Charité, Houston'],['Opens','Sites List, At risk']],
      'Show percent behind instead', [['Scope','3 studies | 34 sites'],['Measure','Percent behind plan to date'],['Top 3','Houston, Charité, Northwestern'],['Opens','Sites List, At risk']],
      'Save this view', 'View saved to Sites List', 'Open Sites List', { tab:'bySite', bsView:'list', bslFilter:'At risk' }) ] },
  engPerf:{ label:'Engagements Performance', introT:'What should Prime analyze?', ph:'Ask Prime about campaign results…', tasks:[
    pgTask('drove', 'Which campaigns led to new randomizations?', 'Randomizations in the 30 days after each send', 'Read campaign results and EDC randomizations since July',
      'October performed best: replies came from 13 sites and randomizations rose in the following 30 days. This is a correlation, not proof of cause.', 'Campaign impact | since July',
      [['Best','October newsletter'],['Measure','Randomizations within 30 days'],['Caveat','Correlation only'],['Saves to','Engagement notes']],
      'Split by site', [['Best','October newsletter'],['Measure','Randomizations within 30 days, by site'],['Caveat','Correlation only'],['Saves to','Engagement notes']],
      'Save as a note', 'Saved to engagement notes', 'Open Site Engagements', { tab:'eng', engView:'dash' }) ] },
  studio:{ label:'AI Studio', introT:'What should Prime automate?', ph:'Describe an automation…', tasks:[
    pgTask('auto', 'Draft an automation for weekly site check-ins', 'Runs every Monday and asks for your approval', 'Read your connected systems and past check-ins',
      'I drafted an automation that finds quiet sites every Monday and prepares a check-in for you to approve.', 'Automation | weekly site check-in',
      [['Trigger','Every Monday, 06:00'],['Finds','Sites with no screening in 14 days'],['Drafts','Check-in email'],['Needs','Your approval to send']],
      'Run it twice a week', [['Trigger','Mondays and Thursdays, 06:00'],['Finds','Sites with no screening in 14 days'],['Drafts','Check-in email'],['Needs','Your approval to send']],
      'Save automation', 'Automation saved in AI Studio', 'Open AI Studio', { tab:'studio' }) ] },
  activity:{ label:'Audit Trail', introT:'What should Prime pull from the Audit Trail?', ph:'Ask Prime about past activity…', tasks:[
    pgTask('week', 'Summarize what Prime did this week', 'Approvals, sends and changes in other systems', 'Read the Audit Trail for the last 7 days',
      'This week Prime drafted the November newsletter, proposed new actions and held invoice lines. You approved several of them.', 'Prime activity | this week',
      [['Drafted','November newsletter, actions'],['Held','$4,120 of invoice lines'],['Approved by you','See list'],['Format','1-page summary']],
      'Only what was sent externally', [['Sent externally','Emails to sites and CROs'],['Changed','Budget and campaign settings'],['Approved by you','See list'],['Format','1-page summary']],
      'Save summary', 'Summary saved', 'View Audit Trail', { tab:'activity' }),
    pgTask('inspect', 'Export approvals for an inspection', 'Every approval with who, when and the evidence used', 'Read the Audit Trail since study start',
      'I prepared an export of every approval, with the approver, time and the records Prime used.', 'Inspection export',
      [['Range','Since study start'],['Includes','Approver, time, evidence'],['Format','PDF and CSV'],['Saves to','eTMF']],
      'Only DIA-2043', [['Range','DIA-2043 since study start'],['Includes','Approver, time, evidence'],['Format','PDF and CSV'],['Saves to','eTMF']],
      'Export to eTMF', 'Exported to the eTMF', 'View Audit Trail', { tab:'activity' }) ] },
  systems:{ label:'Connectors', introT:'What should Prime check in your systems?', ph:'Ask Prime about your connected systems…', tasks:[
    pgTask('health', 'Check which connections need attention', 'Expired tokens, failed syncs and missing permissions', 'Read sync logs for every connected system',
      'All core systems synced this morning. One connection needs a permission renewed before it expires.', 'Connection health',
      [['Synced today','All core systems'],['Needs attention','1 permission renewal'],['Owner','Your IT admin'],['Next check','Tomorrow, 06:00']],
      'Notify my IT admin', [['Synced today','All core systems'],['Needs attention','1 permission renewal'],['Notifies','Your IT admin by email'],['Next check','Tomorrow, 06:00']],
      'Save check', 'Check saved', 'Open Connectors', { tab:'systems' }) ] },
};
const ENG_CAMPS = [
  ['sep','October newsletter','Newsletter','Oct 29, 2026','17 sites | 51','50 / 51',92,84,19,9,11,true],
  ['aug','September newsletter','Newsletter','Sep 29, 2026','17 sites | 51','51 / 51',88,81,15,11,8],
  ['jul','August newsletter','Newsletter','Aug 28, 2026','17 sites | 50','50 / 50',86,79,14,8,6],
  ['p4','Protocol v4.0 notice','Protocol notice','Aug 14, 2026','17 sites | 50','50 / 50',100,98,9,null,null],
  ['jun','July newsletter','Newsletter','Jul 30, 2026','17 sites | 50','49 / 50',84,76,11,6,5],
];
const ENG_TPLS = [
  { id:'monthly', name:'Monthly site newsletter', desc:'Study progress, site numbers, points for the team', get secs() {
    const fl = t => (t || '').split('\n')[0];
    return [['Greeting','personal','Hi {coordinator}, here is this month’s update for your site.'], [ENG_SHARED[0].title,'shared',fl(ENG_SHARED[0].body)],
      ['Your site at a glance','personal','Prime fills this per site: screened, randomized and open queries against target.'],
      ['For your team','personal','One or two practical points for this site, from its open actions and recent emails.']].concat(ENG_SHARED.slice(1).map(x => [x.title,'shared',fl(x.body)])); } },
  { id:'recruit', name:'Recruitment push', desc:'Screening funnel and one ask per site', secs:[
    ['Greeting','personal','Hi {coordinator}, thanks for everything your team did in November.'],
    ['Where enrollment stands','shared','DIA-2043 has randomized 212 of 340 participants. We need 18 a month across all sites to finish by June.'],
    ['Your screening funnel','personal','Prime fills this per site: pre-screened, screened, screen-failed and randomized this month, against your target.'],
    ['What works at other sites','shared','Atlanta now calls every referral within 48 hours. Their screen-to-randomization rate rose from 31% to 44%.'],
    ['One ask for your team','personal','Prime picks one ask per site from its open actions, e.g. returning the referral source log.'],
    ['Contacts','shared','Questions: Marie Laurent, Study Manager | marie.laurent@sponsor.com']] },
  { id:'spotlight', name:'Site spotlight', desc:'Thanks a site with its own results', secs:[
    ['Greeting','personal','Hi {coordinator},'],
    ['Thank you','personal','Prime drafts a short thank-you based on what this site did this month.'],
    ['Your numbers','personal','Randomized, retention and data entry timeliness for this site, compared with the study median.'],
    ['What other sites can learn','shared','One practice from the spotlight site, written so other teams can try it.'],
    ['Contacts','shared','Questions: Marie Laurent, Study Manager | marie.laurent@sponsor.com']] },
  { id:'notice', name:'Protocol notice', desc:'Change summary, site impact, training', secs:[
    ['Summary of change','shared','Protocol v4.1 changes the HbA1c retesting window from 14 to 21 days. Effective Nov 15.'],
    ['What changes at your site','personal','Prime lists which screened participants at this site fall into the new window.'],
    ['Re-consent status','personal','Participants at this site who still need to re-consent, from eConsent.'],
    ['Training required','shared','All coordinators complete the 20-minute v4.1 module in the LMS before Nov 15.'],
    ['Questions','shared','Medical questions go to the medical monitor. Everything else to Marie Laurent.']] },
  { id:'blank', name:'Blank', desc:'Build your own from blocks', secs:[] }
];
const ENG_BLOCKS = [
  ['Text','shared','Write a message for all sites.','Free text for every site'],
  ['Site metrics','personal','Prime fills this per site from EDC and CTMS.','Numbers for each site'],
  ['Call to action','personal','One clear ask for each site, with a due date.','One ask per site'],
  ['Key dates','shared','Upcoming milestones and deadlines for the study.','Milestones and deadlines'],
  ['Contacts','shared','Questions: Marie Laurent, Study Manager | marie.laurent@sponsor.com','Who to reach']
];
const ENG_PERF = {
  sep:{ label:'October 2026', sent:'Sent Oct 29 | 17 sites | 51 contacts',
    kpis:[['Delivered','50 / 51','1 bounced; address fixed in CTMS',98],['Read and confirmed','42','84% clicked Acknowledge',84],['Responses','19','from 13 sites',null],['Questions raised','7','5 answered | 2 with medical review',null],['Actions completed','9 / 12','3 still open',75]],
    actions:[['Atlanta','Share the pre-screening call approach','done','Sep 30'],['Northwestern','Confirm HbA1c lab turnaround','done','Oct 3'],['Milan','Return the referral source survey','done','Oct 2'],['Phoenix','Return the referral source survey','done','Oct 7'],['Lyon','Confirm Week 12 visit staffing','done','Oct 6'],['Seattle, Dallas, Toronto, Manchester','Confirm the site contact list','done','Oct 1–9'],['Barcelona','Review the consent visit materials','progress','Due Oct 31'],['Charité','Confirm screening capacity','none','27 days'],['Houston','Update on referral sources','none','27 days']],
    open:[['Charité','Capacity question unanswered for 27 days','Asked again in the November draft, as one short question'],['Houston','Referral sources update unanswered for 27 days','Asked again in November | a CRA call is suggested'],['Northwestern, Phoenix','HbA1c retesting question','With the medical monitor since Oct 24'],['Barcelona','Asked for a visit-schedule handout in Spanish','Open | owner: Marie Curious']],
    change:[['Atlanta','Referrals logged','21','24','No other change recorded'],['Milan','Referred candidates eligible','18%','26%','Referral survey returned Oct 2'],['Lyon','Questions about Week 12','2','1','New coordinator started Sep 15'],['Northwestern','Passed screening','1 of 5','1 of 3','Lab turnaround confirmed at 5–7 days'],['Charité','Screening visits','3','1','CRA role vacant since Jun 16']],
    learned:['Lyon kept asking about the Week 12 visit, so November quotes the approved SRM section instead of a summary.','Charité and Houston didn’t reply in October. November asks again with a single, shorter question.','Atlanta shared its pre-screening call approach, so November features it under “What’s working”.','Northwestern and Phoenix asked about HbA1c retesting. Prime sent it to medical review rather than answering.'] },
  aug:{ label:'September 2026', sent:'Sent Sep 29 | 17 sites | 51 contacts', kpis:[['Delivered','51 / 51','No bounces',100],['Read and confirmed','41','81% clicked Acknowledge',81],['Responses','15','from 11 sites',null],['Questions raised','5','all answered',null],['Actions completed','10 / 10','all closed',100]] },
  p4:{ label:'Protocol v4.0 notice', sent:'Sent Aug 14 | 17 sites | 50 contacts | medical review ✓', kpis:[['Delivered','50 / 50','No bounces',100],['Read and confirmed','49','98% clicked Acknowledge',98],['Responses','9','from 9 sites',null],['Questions raised','4','all answered',null],['Re-consent started','17 / 17','sites',100]] },
  jul:{ label:'August 2026', sent:'Sent Aug 28 | 17 sites | 50 contacts', kpis:[['Delivered','50 / 50','No bounces',100],['Read and confirmed','40','79% clicked Acknowledge',79],['Responses','14','from 10 sites',null],['Questions raised','6','all answered',null],['Actions completed','8 / 9','1 closed by the CRA',89]] },
  jun:{ label:'July 2026', sent:'Sent Jul 30 | 17 sites | 50 contacts', kpis:[['Delivered','49 / 50','1 bounced',98],['Read and confirmed','37','76% clicked Acknowledge',76],['Responses','11','from 9 sites',null],['Questions raised','4','all answered',null],['Actions completed','7 / 8','1 closed by the CRA',88]] },
};
const ENG_ACT_IDS = {};
(() => { const code = n => (DIA_SITES.find(r => r[0].replace(/^Site \d+ \| /, '').indexOf(n) === 0) || [])[2], lc = t => t.charAt(0).toLowerCase() + t.slice(1);
  Object.keys(ENG_PERF).forEach(pk => (ENG_PERF[pk].actions || []).forEach((x, j) => {
    if (pk === 'sep' && x[0] === 'Northwestern') { ENG_ACT_IDS[pk + '|' + j] = 'nwu-lab'; return; }
    const id = 'eng-' + pk + '-' + j, done = x[2] === 'done', prog = x[2] === 'progress', when = x[3].replace(/^(\w+) \d+–(\d+)$/, '$1 $2');
    ENG_ACT_IDS[pk + '|' + j] = id;
    ITEMS.push({ id, seed: done ? 'closed' : prog ? 'approved' : undefined, closedOn: done ? when : undefined, sites:x[0].split(', ').map(code).filter(Boolean), study:'DIA-2043',
      pri: x[2] === 'none' ? 'P2' : 'P3', kind:'Site follow-up', time:'Oct 29', type:'email', verb:'Approve & send', lowRisk:true,
      title: x[2] === 'none' ? 'Remind ' + x[0] + ' to ' + lc(x[1]) : 'Ask ' + x[0] + ' to ' + lc(x[1]), to:x[0] + ' | study coordinator' + (x[0].indexOf(',') > 0 ? 's' : ''),
      subject:'DIA-2043 | ' + x[1],
      body: x[2] === 'none' ? 'Hi,\n\nIn the October update we asked your team to ' + lc(x[1]) + '. We haven’t heard back yet. Could you reply by Nov 4?\n\nThanks,\nMarie' : 'Hi,\n\nAs mentioned in the October update, could your team ' + lc(x[1]) + '?\n\nThanks,\nMarie',
      observed: done ? 'Requested in the October newsletter on Oct 29. Completed ' + x[3] + '.' : prog ? 'Requested in the October newsletter on Oct 29. The site has started; ' + lc(x[3]) + '.' : 'Requested in the October newsletter on Oct 29. No reply after ' + x[3] + '.',
      why: x[2] === 'none' ? 'An unanswered request can hide a capacity or staffing problem at the site.' : 'Requested as part of the October site engagement campaign.',
      sources:['Site emails','CTMS'], impact:'Closes an October newsletter request', days:0, conf:'High',
      followUp: done ? 'Completed ' + x[3] + '. Logged in the October campaign results.' : prog ? 'The site is working on it. Prime will check again on Oct 31.' : 'Reminder sent. Prime will check for a reply in 5 days.' }); })); })();
class Component extends DCLogic {
  bslVals() {
    const S = this.state, f = S.bslFilter || 'all', ORD = { 'At risk':0, 'Watch':1, 'On track':2 }, r = x => x.expected ? x.enrolled / x.expected : 1;
    const norm = v => String(v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''), q = S.bslQ || '', qn = norm(q.trim());
    const all = STUDIES.map(st => ({ st, sites:siteData(st) })), cnt = { all:0, 'At risk':0, 'Watch':0, 'On track':0 };
    all.forEach(g => g.sites.forEach(x => { cnt.all++; cnt[x.status]++; }));
    const filters = [['all','All'],['At risk','At risk'],['Watch','Watch'],['On track','On track']].map(([k, l]) => { const on = f === k;
      return { label:l, count:cnt[k], onClick:() => this.setState({ bslFilter:k }), bg: on ? '#fff' : 'transparent', fg: on ? '#0a0a0a' : '#66696e', shadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' }; });
    const groups = all.map(({ st, sites }) => {
      const rows = sites.filter(x => (f === 'all' || x.status === f) && (!qn || [x.name, x.loc, x.code, st.id, st.name].some(v => norm(v).indexOf(qn) >= 0))).sort((a, b) => ORD[a.status] - ORD[b.status] || r(a) - r(b)).map(x => {
        const gap = x.enrolled - x.expected, pct = Math.round(r(x) * 100), sc = STC[x.status] || STC['On track'], none = x.bottleneck === 'None', bn = BN[x.bottleneck] || BN.None;
        return { name:x.name.replace(/^Site \d+ \| /, ''), loc:x.loc, code:x.code, enrolled:x.enrolled, expected:x.expected, diag:x.diag,
          pctText:pct + '%', gapText:(gap > 0 ? '+' : gap < 0 ? '−' : '±') + Math.abs(gap), gapColor: gap < 0 ? '#bd3226' : gap > 0 ? '#197a48' : '#66696e', bar:Math.min(100, pct) + '%', barColor:sc[0],
          bottleneck:x.bottleneck, bnFg: none ? '#85888c' : bn[0], bnBg: none ? '#f2f2f4' : bn[1], status:x.status, dot:sc[0], stFg:sc[1], stBg:sc[2],
          open:() => this.setState({ bsView:'site', bsStudy:st.id, bsSite:x.code, bsSec:'ov' }) };
      });
      const en = sites.reduce((a, x) => a + x.enrolled, 0), risk = sites.filter(x => x.status === 'At risk').length;
      return { id:st.id, name:st.name, phase:st.phase, dot:st.dot, rows, has:rows.length > 0, summary:sites.length + ' sites | ' + en + ' of ' + st.target + ' enrolled', hasRisk:risk > 0, riskText:risk + ' at risk' };
    });
    return { filters, groups, empty:!groups.some(g => g.has), q, hasQ:!!q, onQ:e => this.setState({ bslQ:e.target.value }), clearQ:() => this.setState({ bslQ:'' }), sub:STUDIES.length + ' studies | ' + cnt.all + ' sites | ' + cnt['At risk'] + ' at risk, ' + cnt['Watch'] + ' watch' };
  }
  bsVals() {
    const S = this.state, study = STUDIES.find(x => x.id === (S.bsStudy || 'DIA-2043')) || STUDIES[0], sites = siteData(study);
    const code = sites.some(x => x.code === S.bsSite) ? S.bsSite : (study.id === 'DIA-2043' ? 'NWU' : sites[0].code);
    const idx = sites.findIndex(x => x.code === code), s = sites[idx], isDia = study.id === 'DIA-2043', X = (isDia && BS_X[code]) || {};
    const rnd = k => { const x = Math.sin((idx + 1) * 12.9898 + k * 78.233 + study.id.length * 3.1) * 43758.5453; return x - Math.floor(x); };
    const P = isDia ? ENG_PEOPLE[code] : null, pi = P ? P[0] : BS_POOL.pi[idx % 9], crc = P ? P[1] : BS_POOL.crc[idx % 9], crc2 = BS_POOL.crc[(idx + 4) % 9];
    const cra = X.cra || BS_CRAS[idx % BS_CRAS.length], skip = X.skip || [];
    const pill = k => { const p = BS_PILL[k] || BS_PILL.open; return { label:p[0], fg:p[1], bg:p[2] }; };
    const bt = j => j ? '1px solid #f0f0f3' : 'none';
    const day = n => { const d = new Date('2026-10-27T12:00:00'); d.setDate(d.getDate() + n); return d; };
    const fmtD = (d, y) => d.toLocaleDateString('en-US', y ? { month:'short', day:'numeric', year:'numeric' } : { month:'short', day:'numeric' });
    const $ = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(2) + 'M' : v >= 1e4 ? '$' + Math.round(v / 1e3) + 'k' : '$' + Math.round(v).toLocaleString('en-US');
    const planSum = sites.reduce((a, x) => a + x.expected, 0), total = Math.max(s.expected, Math.round(s.expected * study.target / Math.max(1, planSum)));
    const sf = s.screenFailed || 0, screened = Math.max(s.consented || 0, s.enrolled + sf), pre = Math.round(screened * 1.7) + (s.backlog || 0), ref = Math.round(pre * 1.45) + 2;
    const conv = screened ? Math.round(s.enrolled / screened * 100) : 0, ratio = s.expected ? s.enrolled / s.expected : 1, st = statusOf(s.enrolled, s.expected), stc = STC[st] || STC['On track'];
    const fc = Math.min(total + 2, Math.round(total * Math.min(1.1, ratio * 0.9 + 0.08))), endTxt = new Date(study.base + 'T12:00:00').toLocaleDateString('en-US', { month:'short', year:'numeric' });
    const perPt = BS_PERPT[study.id] || 15000, budget = total * perPt + 38000, paid = Math.round(s.enrolled * perPt * 0.55 + 24000);
    const dm = (s.diag || '').match(/unpaid for (\d+) days/), delay = X.delay || (dm ? +dm[1] : Math.round(18 + rnd(5) * 26));
    const invN = 1 + Math.floor(rnd(3) * 3), DESC = ['Participant visit fees | September','Screening procedures | September','Lab shipping pass-through'];
    const invs = Array.from({ length:invN }, (_, k) => { const amt = Math.round((1800 + rnd(10 + k) * 5200) / 10) * 10, age = Math.max(4, Math.round(delay - k * 17 - rnd(20 + k) * 6));
      return { id:'INV-' + code + '-' + String(140 + k * 3 + idx).padStart(4, '0'), d:DESC[k], amtN:amt, amt:'$' + amt.toLocaleString('en-US'), age:age + ' days', p:pill(age > 60 ? 'late' : k === invN - 1 ? 'review' : 'approved'), bt:bt(k) }; });
    const pend = invs.reduce((a, i) => a + i.amtN, 0);
    const PV = BS_PROTO[study.id] || ['v1.0','',false], active = Math.max(0, s.enrolled - (rnd(9) > 0.7 ? 1 : 0)), rcDone = PV[2] ? Math.min(active, Math.round(active * (0.45 + rnd(11) * 0.55))) : active;
    const irbDays = X.irbDays || Math.round(45 + rnd(12) * 280), staff = 3 + (idx % 3), trained = X.trained != null ? X.trained : staff - (rnd(13) > 0.65 ? 1 : 0);
    const qOpen = X.qOpen != null ? X.qOpen : s.bottleneck === 'None' ? Math.floor(rnd(15) * 2) : 2 + Math.floor(rnd(15) * 4);
    const comp = ((BS_COMP[study.id] || {})[code] || []);
    const lastD = s.last == null ? null : day(-s.last);
    const hl = [];
    if (s.expected && ratio < 0.8) hl.push(['risk','Enrollment behind plan', s.enrolled + ' / ' + s.expected + ' (' + Math.round(ratio * 100) + '%)', 'CTMS', 'rec']);
    if (s.last != null && s.last >= 14) hl.push([s.last >= 30 ? 'risk' : 'anomaly','No randomization', s.last + ' days', 'EDC', 'rec']);
    if (screened >= 5 && sf / screened >= 0.35) hl.push(['anomaly','High screen-fail rate', Math.round(sf / screened * 100) + '% (' + sf + ' of ' + screened + ')', 'EDC', 'rec']);
    if (s.qOpen >= 5) hl.push(['anomaly','Open data queries', String(s.qOpen), 'EDC', null]);
    if (delay > 60) hl.push(['risk','Invoices overdue', delay + ' days | ' + $(pend), 'Finance', 'fin']);
    if (irbDays <= 60) hl.push(['anomaly','IRB approval expires', 'in ' + irbDays + ' days', 'eIRB', 'doc']);
    if (trained < staff) hl.push(['anomaly','Staff not trained on ' + PV[0], (staff - trained) + ' of ' + staff, 'LMS', 'doc']);
    if (s.expected && ratio >= 1.1) hl.push(['ok','Ahead of plan', s.enrolled + ' / ' + s.expected + ' (' + Math.round(ratio * 100) + '%)', 'CTMS', 'rec']);
    const ORD = { risk:0, anomaly:1, ok:2 }, HI = { risk:['!','#bd3226','#fcecea'], anomaly:['!','#8a5a06','#fdf3e0'], ok:['✓','#197a48','#e7f6ee'] }, SECL = { rec:'Recruitment', iss:'Issues', fin:'Financial', doc:'Documents', ext:'External', up:'Upcoming' };
    const hlS = hl.sort((a, b) => ORD[a[0]] - ORD[b[0]]).slice(0, 5);
    if (!hlS.length) hlS.push(['ok','All metrics within range', 'Enrollment, screening, payments, documents', 'CTMS | EDC', null]);
    const sec = S.bsSec && S.bsSec !== 'all' ? S.bsSec : 'ov';
    const nV = s.enrolled ? Math.min(5, s.enrolled, Math.max(2, Math.round(s.enrolled * 0.9 + rnd(8) * 3))) : 0, VIS = BS_VISITS[study.id] || BS_VISITS['DIA-2043'];
    const visits = Array.from({ length:Math.min(5, nV, s.enrolled || 0) }, (_, k) => { const d = day(1 + k * 3 + Math.floor(rnd(30 + k) * 3)), v = VIS[(k + idx) % VIS.length];
      return { dt:d, dow:d.toLocaleDateString('en-US', { weekday:'short' }), date:fmtD(d), pid:code + '-' + String(101 + ((k + idx) % Math.max(1, s.enrolled))).padStart(3, '0'), visit:v[0], proc:v[1], bt:bt(k) }; });
    const req = study.id === 'NASH-3301' ? [Math.ceil(nV / 3) + ' MRI-PDFF scans to book with central imaging', 'Liver lab kits from the central lab'] : study.id === 'RA-2209' ? [Math.ceil(nV / 4) + ' X-rays for central scoring', 'CRP and ESR results into the EDC within 5 days'] : [Math.ceil(nV / 3) + ' fasting OGTT slots before 10:00', Math.ceil(nV / 2) + ' CGM sensors (site stock: ' + (4 + idx % 5) + ')', 'Central lab kits v3 from Nov 3'];
    const comms = (X.comms || [[isDia ? 'Oct 29' : 'Oct 1', isDia ? 'Newsletter' : 'Investigator call', isDia ? 'October site newsletter' : 'Monthly investigator call', isDia ? 'Read and confirmed by ' + crc + '.' : pi + ' attended. No site questions raised.'],
      ['Oct 14','Meeting','Monitoring visit summary', cra.split(' | ')[0] + ' reviewed ' + Math.max(1, s.enrolled) + ' participant files. ' + (rnd(14) > 0.5 ? '2 queries raised, both closed.' : 'No findings.')],
      ['Oct 20','Email','Message from ' + crc.split(' ')[0], BS_MSG[idx % BS_MSG.length]]]).map(c => c);
    comms.sort((a, b) => new Date(b[0] + ' 2026') - new Date(a[0] + ' 2026'));
    const CT = { Newsletter:['#003358','#e5ecf2'], 'Investigator call':['#003358','#e5ecf2'], Meeting:['#3a3c40','#eeeff0'], Email:['#3a3c40','#eeeff0'], Feedback:['#197a48','#e7f6ee'] };
    const commits = X.commits || [['Close open data queries', crc + ' | due Nov 6', qOpen ? 'progress' : 'done'], ['Confirm Q4 visit capacity', pi + ' | due Nov 15', 'open']];
    const issues = X.issues || (s.bottleneck !== 'None' ? [[s.bottleneck + ' bottleneck flagged by Prime', 'Opened Oct ' + (5 + idx % 15) + ' | owner ' + cra, 'open']] : []).concat(qOpen ? [[qOpen + ' open data queries', 'Oldest ' + (8 + idx % 20) + ' days | owner ' + crc, qOpen > 3 ? 'late' : 'open']] : []);
    const acts = X.actions || [['Confirm the site contact list', crc + ' | Oct 9', 'done', 'Contacts updated in CTMS'], ['Close ' + (qOpen || 'all') + ' open data queries', crc + ' | due Nov 6', qOpen ? 'progress' : 'done', ''], PV[2] ? ['Re-consent remaining participants to protocol ' + PV[0], pi + ' | due ' + PV[3], active > rcDone ? 'open' : 'done', rcDone + ' of ' + active + ' re-consented'] : ['Confirm Q4 visit capacity', pi + ' | due Nov 15', 'open', '']];
    const factors = (X.factors || []).concat([['Holiday season, Dec 20 to Jan 6', 'Visits at this site fell 35% in the same period last year. Prime will plan visit windows around it.', 'CTMS visit history']]);
    const qAge = 8 + idx % 20, missPg = X.missPg != null ? X.missPg : s.bottleneck === 'None' ? Math.floor(rnd(17) * 3) : 2 + Math.floor(rnd(17) * 5), lag = X.lag || Math.round(2 + rnd(18) * (s.bottleneck === 'None' ? 3 : 7));
    const DQ = { 'NASH-3301':[['Imaging','MRI-PDFF read not uploaded'],['Labs','ALT unit does not match the central lab report'],['Biopsy','Biopsy date differs from the visit date'],['Adverse events','AE end date missing']], 'RA-2209':[['DAS28','Swollen joint count incomplete'],['Labs','CRP result missing'],['Imaging','X-ray date differs from the visit date'],['Adverse events','AE severity not recorded']] }[study.id] || [['Labs','HbA1c units do not match the central lab report'],['Week 12','OGTT sample time missing'],['CGM','Sensor download date differs from the visit date'],['Con meds','Metformin end date missing'],['eCOA','Questionnaire not signed by the participant']];
    const pidOf = k => code + '-' + String(101 + ((k * 5 + idx * 3) % Math.max(1, s.enrolled || 1))).padStart(3, '0');
    const dt = { tiles:[['Open queries', String(qOpen), qOpen ? 'oldest ' + qAge + ' days' : 'none open', qOpen >= 5], ['Missing CRF pages', String(missPg), 'visits not yet entered', missPg >= 5], ['Entry lag', lag + ' days', 'visit to EDC | target 5', lag > 5]].map(x => ({ l:x[0], v:x[1], s:x[2], fg: x[3] ? '#bd3226' : '#0a0a0a' })),
      queries:Array.from({ length:Math.min(qOpen, 4) }, (_, k) => { const q = DQ[(k + idx) % DQ.length], age = k ? Math.max(1, qAge - k * 4 - Math.floor(rnd(40 + k) * 3)) : qAge; return { t:q[1], m:pidOf(k) + ' | ' + q[0] + ' | open ' + age + (age === 1 ? ' day' : ' days'), p:pill(age > 14 ? 'late' : 'open'), bt:bt(k) }; }),
      pages:Array.from({ length:Math.min(missPg, 3) }, (_, k) => { const v = VIS[(k + idx + 1) % VIS.length], ago = 3 + k * 4 + Math.floor(rnd(50 + k) * 4); return { t:v[0] + ' visit', m:pidOf(k + 2) + ' | visit on ' + fmtD(day(-ago)) + ' | ' + ago + ' days ago', p:pill(ago > 5 ? 'late' : 'open'), bt:bt(k) }; }),
      noQ:!qOpen, noP:!missPg };
    const show = {}; ['rec','up','eng','notes','contacts','data','iss','fin','com','doc','ext','act'].forEach(k => show[k] = sec === k);
    const BNP = { None:['None','#197a48','#e7f6ee'] }, bnp = BNP[s.bottleneck] || [s.bottleneck, (BN[s.bottleneck] || ['#bd3226'])[0], (BN[s.bottleneck] || [0, '#fcecea'])[1]];
    const SECS = [['ov','Overview'],['up','Activity'],['act','Actions', ITEMS.filter(i => i.study === study.id && (i.sites || []).indexOf(code) >= 0 && this.group(this.eff(i, false)) !== 'closed').length],['rec','Enrollment'],['data','Data'],['fin','Payments'],['doc','Documents']];
    const go = k => this.setState({ bsSec:k });
    const ckey = study.id + '|' + code, brf = (S.siteBriefs || {})[ckey], blk = (S.siteBlockers || {})[ckey];
    const chatCtx = { key:ckey, code, study:study.id, name:s.name.replace(/^Site \d+ \| /, ''), pi, crc, cra, issues, enrolled:s.enrolled, expected:s.expected, sf, screened, qOpen, qAge:8 + idx % 20, pv:PV[0],
      comp: comp.length ? comp[0][0] + ', ' + (comp[0][2].split(' | ')[1] || '') + ' from the site' : '' };
    const EN = (() => { const on = study.id === 'DIA-2043', ppl = (ENG_PEOPLE[code] || [])[2] || 3, ins = ENG_INS.filter(i => !i.held && (i.sites || []).indexOf(code) >= 0).map(i => i.title);
        const SC = { sent:['Sent','#197a48','#e7f6ee','#27a763'], draft:['Draft','#8a5a06','#fdf3e0','#e5a11a'], scheduled:['Scheduled','#003358','#e5ecf2','#004677'], planned:['Planned','#55585d','#f2f2f4','#b3b5b8'] }, all = [];
        if (on) ENG_CAL.forEach(([mo, its]) => (mo === 'Nov 2026' ? (S.engChatAdded || []).concat(its) : its).forEach(([id, t, d, s0, meta]) => {
          const dt = new Date(d + ', ' + mo.split(' ')[1] + ' 12:00'), isOct = id === 'oct', sv = isOct ? (S.engApproved ? 'scheduled' : 'draft') : s0;
          const link = isOct ? { tab:'eng', engStudy:'DIA-2043', engView:'build' } : ENG_PERF[id] ? { tab:'eng', engStudy:'DIA-2043', engView:'perf', engPerf:id } : null;
          all.push({ dt, t, sv, isOct, link, m: sv === 'sent' ? 'Sent to ' + ppl + ' contacts at this site' + (meta ? ' | study-wide: ' + meta : '') : isOct ? (S.engApproved ? 'Approved | sends Nov 26 at 09:00 site time' : 'Awaiting your approval | personalized version for this site') : (meta || '') }); }));
        const row = (x, j) => { const c = SC[x.sv] || SC.planned, hasIns = x.isOct && ins.length > 0; return { dt:x.dt, dow:x.dt.toLocaleDateString('en-US', { weekday:'short' }), date:fmtD(x.dt), t:x.t, m:x.m, st:c[0], fg:c[1], bg:c[2], dot:c[3], ins: hasIns ? ins : [], hasIns,
          open:() => { if (x.link) this.setState(x.link); }, cur: x.link ? 'pointer' : 'default', hov: x.link ? '#f7f8f9' : 'transparent', chev: x.link ? 'visible' : 'hidden', bt:bt(j) }; };
        return { on, off:!on, up:all.filter(x => x.sv !== 'sent').sort((a, b) => a.dt - b.dt).map(row), past:all.filter(x => x.sv === 'sent').sort((a, b) => b.dt - a.dt).map(row), go:() => this.setState({ tab:'eng', engStudy:study.id, engView:'dash' }) }; })();
    const ACTV = (() => { const CT2 = Object.assign({ Visit:['#003358','#e5ecf2'], Action:['#197a48','#e7f6ee'], Notice:['#3a3c40','#eeeff0'] }, CT), now = day(0);
      const tOf = t => /newsletter/i.test(t) ? 'Newsletter' : /notice/i.test(t) ? 'Notice' : /call/i.test(t) ? 'Investigator call' : 'Email';
      const base = { st:'', fg:'', bg:'', dot:'', stVis:'hidden', ins:[], hasIns:false, open:() => {}, cur:'default', hov:'transparent', chev:'hidden' };
      const ty = (type, o) => { const c = CT2[type] || CT2.Email; return Object.assign({}, base, o, { type, tFg:c[0], tBg:c[1] }); };
      const ev = (dt, type, t, sub) => ty(type, { dt, dow:dt.toLocaleDateString('en-US', { weekday:'short' }), date:fmtD(dt), t, s:sub });
      const fromEng = r => ty(tOf(r.t), { dt:r.dt, dow:r.dow, date:r.date, t:r.t, s:r.m, st:r.st, fg:r.fg, bg:r.bg, dot:r.dot, stVis: r.st === 'Sent' ? 'hidden' : 'visible', ins:r.ins, hasIns:r.hasIns, open:r.open, cur:r.cur, hov:r.hov, chev:r.chev });
      const up = visits.map(v => ev(v.dt, 'Visit', v.visit + ' visit', v.pid + ' | ' + v.proc)).concat(EN.up.map(fromEng)).sort((a, b) => a.dt - b.dt);
      const wk = x => +(String(x).match(/\d+/) || [0])[0], ord = VIS.slice().sort((a, b) => wk(a[0]) - wk(b[0]));
      const pvs = visits.slice(0, 2).map(v => { const i = ord.findIndex(o => o[0] === v.visit); if (i <= 0) return null; const p = ord[i - 1];
        return ev(new Date(v.dt.getTime() - (wk(v.visit) - wk(p[0])) * 7 * 864e5), 'Visit', p[0] + ' visit', v.pid + ' | completed | ' + p[1]); }).filter(Boolean);
      const past = comms.filter(c => !(EN.on && c[1] === 'Newsletter')).map(c => ev(new Date(c[0] + ', 2026 12:00'), c[1], c[2], c[3]))
        .concat(acts.filter(a => a[2] === 'done' && !comms.some(c => c[0] === (a[1].split(' | ')[1] || '').replace(/^due /, ''))).map(a => { const p = a[1].split(' | '); return ev(new Date((p[1] || '').replace(/^due /, '') + ', 2026 12:00'), 'Action', a[0], (a[3] ? a[3] + ' | ' : '') + p[0]); }))
        .concat(pvs).filter(x => !isNaN(x.dt) && x.dt <= now).concat(EN.past.map(fromEng)).sort((a, b) => b.dt - a.dt).slice(0, 8);
      const fin = l => l.map((x, j) => Object.assign(x, { bt:bt(j) }));
      return { up:fin(up), past:fin(past), noUp:!up.length, noPast:!past.length }; })();
    const ASTL = { open:'Awaiting approval', approved:'Approved', auto:'Auto-applied', sending:'Sending', rejected:'Dismissed', closed:'Completed' };
    const ALINK = ITEMS.filter(i => i.study === study.id && (i.sites || []).indexOf(code) >= 0).map(i => { const st = this.eff(i, false), g = this.group(st), v = this.itemView(i), closed = g === 'closed', ok = closed && st !== 'rejected';
      const dOf = t => { const d = /AM|PM/.test(t || '') ? day(0) : t === 'Yesterday' ? day(-1) : new Date((t || '') + ', 2026 12:00'); return isNaN(d) ? day(0) : d; }, dt = dOf(closed && i.closedOn ? i.closedOn : i.time), kc = i.type === 'email' ? ['#003358','#e5ecf2'] : ['#3a3c40','#eeeff0'];
      return { g, dt, dow:dt.toLocaleDateString('en-US', { weekday:'short' }), date:fmtD(dt), kind:i.kind || 'Action', tFg:kc[0], tBg:kc[1], t:v.title, m:this.who(i.id) + ' | ' + i.pri + (closed ? ' | completed' : ' | proposed by Prime'), p:Object.assign(pill(st === 'open' ? 'open' : closed ? 'done' : 'progress'), { label:ASTL[st] || 'In progress' }),
        out: ok ? i.followUp : '', hasOut: ok && !!i.followUp, go:() => this.setState({ tab:'inbox', filter:g, study:null, afSite:null, afOwner:null, afKind:null, afPri:null, afAdded:[], selectedId:i.id, stickyId:null }), cur:'pointer', chev:'visible', hov:'#f7f8f9', tip:'Open in Actions' }; });
    const aRows = l => l.map((x, j) => Object.assign({}, x, { bt:bt(j) }));
    const NT = (() => { const craN = cra.indexOf('cover: ') >= 0 ? cra.split('cover: ')[1] : cra, NK = { Note:['#3a3c40','#eeeff0'], 'Visit note':['#003358','#e5ecf2'], 'Meeting brief':['#004677','#e5ecf2'] };
      const seed = [{ id:'s0', d:'Oct 14', who:craN + ' (CRA)', kind:'Visit note', t:crc.split(' ')[0] + ' prefers email to phone calls and is easiest to reach Tuesday to Thursday mornings.' }, { id:'s1', d:'Sep 22', who:'Marie Curious', kind:'Note', t:pi + ' asked to be copied on all screen-failure queries.' }];
      const list = (S.siteNotes || {})[ckey] || seed, text = (S.noteDraft || {})[ckey] || '', ok = !!text.trim();
      const all = (brf ? [{ id:'brief', d:'Today', who:'Marie Curious', kind:'Meeting brief', t:'For ' + brf.meet + '\n' + brf.rows.slice(0, 3).map(r => r[0] + ': ' + r[1]).join('\n') }] : []).concat(list);
      return { text, n:all.length, addBg: ok ? '#004677' : '#b3b5b8', onText:e => { const v = e.target.value; this.setState(st => ({ noteDraft:Object.assign({}, st.noteDraft, { [ckey]:v }) })); },
        add:() => { if (!ok) return; this.setState(st => ({ siteNotes:Object.assign({}, st.siteNotes, { [ckey]:[{ id:'u' + Date.now(), d:'Today', who:'Marie Curious', kind:'Note', t:text.trim() }].concat(list) }), noteDraft:Object.assign({}, st.noteDraft, { [ckey]:'' }) })); },
        items:all.map((x, j) => { const c = NK[x.kind] || NK.Note, k = ckey + '|' + (x.id || 'n' + j), E = S.noteEdits || {}, ed = !!S.noteEd && S.noteEd.k === k, t = E[k] != null ? E[k] : x.t;
          return { d:x.d + (E[k] != null ? ' | edited' : ''), who:x.who, kind:x.kind || 'Note', tFg:c[0], tBg:c[1], t, editing:ed, notEditing:!ed, editText: ed ? S.noteEd.v : '',
            onEdit:() => this.setState({ noteEd:{ k, v:t } }), onEditText:e => { const v = e.target.value; this.setState({ noteEd:{ k, v } }); }, onCancel:() => this.setState({ noteEd:null }),
            onSave:() => { const v = ((this.state.noteEd || {}).v || '').trim(); if (v) this.setState(st => ({ noteEdits:Object.assign({}, st.noteEdits, { [k]:v }), noteEd:null })); }, bt:bt(j) }; }) }; })();
    SECS.splice(SECS.findIndex(x => x[0] === 'act') + 1, 0, ['notes','Notes', NT.n]);
    const CONT = (() => { const nm = s.name.replace(/^Site \d+ \| /, ''), dom = nm.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-(ctr|inst|assoc)$/, '').replace(/^-|-$/g, '') + '.org';
      const em = (n, d) => n.replace(/^(Dr\.|Prof\.)\s+/, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').split(' ').join('.') + '@' + d;
      const cc = { US:'+1', CA:'+1', DE:'+49', ES:'+34', FR:'+33', IT:'+39', NL:'+31', AT:'+43', UK:'+44', BE:'+32', SE:'+46' }[(s.loc.split(', ')[1] || '').trim()] || '+1';
      const ph = k => { const d = n => String(Math.floor(rnd(80 + k * 3 + n) * 900) + 100); return cc + ' ' + d(0) + ' ' + d(1) + ' ' + d(2).slice(0, 2) + d(2).slice(-2); };
      const craN = cra.indexOf('cover: ') >= 0 ? cra.split('cover: ')[1] : cra, sub = code === 'NWU' ? 'Dr. Ben Adler' : BS_POOL.pi[(idx + 3) % BS_POOL.pi.length];
      const site = [[pi, 'Principal investigator', dom, 'Email | copied on screen-failure queries', true], [sub, 'Sub-investigator', dom, 'Email'], [crc, 'Site coordinator', dom, 'Email | Tue to Thu mornings', true], [crc2, 'Site coordinator', dom, 'Email or phone'],
        [BS_POOL.crc[(idx + 6) % BS_POOL.crc.length], 'Pharmacy | IP manager', dom, 'Phone for shipments'], [BS_POOL.crc[(idx + 2) % BS_POOL.crc.length], 'Site finance', dom, 'Email | invoices and payments']];
      const study = [[craN, 'CRA | Medpace', 'medpace.com', 'Monitoring visit every 6 weeks', true], ['Dr. Ravi Patel', 'Medical monitor', 'medpace.com', 'Eligibility and safety questions'], ['Marie Curious', 'Clinical Operations | study manager', 'primary-trials.com', 'Sponsor contact for the site']];
      const row = (x, j, k) => { const e = em(x[0], x[2]), copied = S.bsCopied === e; return { name:x[0], role:x[1], email:e, phone:ph(k + j), pref:x[3], primary:!!x[4], ini:x[0].replace(/^(Dr\.|Prof\.)\s+/, '').split(' ').map(w => w[0]).slice(0, 2).join(''), bt:bt(j),
        copyLabel: copied ? 'Copied' : 'Copy email', copyFg: copied ? '#197a48' : '#003358', copyBg: copied ? '#e7f6ee' : '#fff', copyBd: copied ? '#bfe3cf' : '#cddae5',
        copy:() => { const done = () => { this.setState({ bsCopied:e }); clearTimeout(this.bsCopyT); this.bsCopyT = setTimeout(() => this.setState({ bsCopied:null }), 1600); };
          const fb = () => { const t = document.createElement('textarea'); t.value = e; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (z) {} document.body.removeChild(t); done(); };
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(e).then(done, fb); else fb(); } }; };
      return { site:site.map((x, j) => row(x, j, 0)), study:study.map((x, j) => row(x, j, 10)), siteN:site.length + ' people at ' + nm }; })();
    SECS.splice(SECS.findIndex(x => x[0] === 'notes') + 1, 0, ['contacts','Contacts']);
    const openDoc = id => this.setState({ bsDoc:{ k:ckey, id } });
    const DDV = (() => { const sel = S.bsDoc && S.bsDoc.k === ckey ? S.bsDoc.id : null; if (!sel) return { open:false };
      const PLAT = { eTMF:['Florence eTMF','Florence','FL','#e5ecf2','#004677','https://app.florencehc.com/etmf/','5:58 AM'], eIRB:['Advarra CIRBI','Advarra','AD','#e7f6ee','#197a48','https://cirbi.advarra.com/study/','5:55 AM'], LMS:['Veeva Vault Training','Vault Training','VT','#fdf3e0','#8a5a06','https://training.veevavault.com/','5:50 AM'] };
      const ago = (d, n) => new Date(d.getTime() - n * 864e5), Y = d => fmtD(d, true), nm = s.name.replace(/^Site \d+ \| /, '');
      const PH = { 'DIA-2043':[['v4.0','Jul 8, 2026','Visit schedule simplified. HbA1c screening window set to 28 days.'],['v3.0','Nov 20, 2025','CGM sensor replacement added at Week 12.'],['v2.0','Jun 3, 2024','eCOA questionnaires added.'],['v1.0','Jan 12, 2024','Initial approved protocol.']],
        'NASH-3301':[['v2.1','Mar 3, 2026','MRI-PDFF timing window clarified.'],['v2.0','Oct 14, 2025','Week 72 biopsy optional after early withdrawal.'],['v1.0','Jul 1, 2025','Initial approved protocol.']],
        'RA-2209':[['v3.0','Jan 15, 2026','X-ray scoring added at Week 104.'],['v2.0','Jun 9, 2025','Active comparator dosing updated.'],['v1.0','Mar 18, 2024','Initial approved protocol.']] }[study.id] || [[PV[0], PV[1], 'Current approved protocol.']];
      const irbE = day(irbDays), dl = day(-((12 + idx * 3) % 90)), sub = code === 'NWU' ? 'Dr. Ben Adler' : BS_POOL.pi[(idx + 3) % BS_POOL.pi.length], labE = day(60 + Math.round(rnd(16) * 200));
      const trainH = (who, mod, done) => [[done ? 'Protocol ' + PV[0] : 'Protocol ' + PV[0] + ' | assigned', done ? Y(ago(day(0), 40 + idx * 3 % 30)) : 'Due ' + (PV[3] || 'Nov 30'), done ? mod + ' | completed, 45 min module' : mod + ' | not started', done ? 'Current' : 'Due'],
        ['GCP refresher', Y(ago(day(0), 220 + idx * 7 % 60)), 'ICH E6(R3) | completed', 'Completed'], [(PH[1] || PH[0])[0] ? 'Protocol ' + (PH[1] || PH[0])[0] : 'Previous protocol', (PH[1] || PH[0])[1], mod + ' | completed', 'Superseded']];
      const D = {
        proto:['Protocol ' + PV[0], 'eTMF', 'protocol', PH.map((x, j) => [x[0], x[1], x[2], j ? 'Superseded' : 'Current'])],
        doc0:['IRB approval', 'eIRB', 'approval', [['Continuing review', Y(ago(irbE, 365)), 'Approved | valid until ' + Y(irbE), 'Current'], ['Continuing review', Y(ago(irbE, 730)), 'Approved | valid for 12 months', 'Superseded'], ['Protocol ' + PV[0] + ' amendment', PV[1].replace(/^Approved /, ''), 'Amendment approved by the IRB'], ['Initial approval', Y(ago(irbE, 1000)), 'Site approved to enroll']].sort((a, b) => new Date(b[1]) - new Date(a[1])).map((x, j) => [x[0], x[1], x[2], j ? 'Superseded' : 'Current'])],
        doc1:['Delegation of authority log', 'eTMF', 'delegation-log', [['v4', Y(dl), code === 'NWU' ? 'Added Dr. Ben Adler as sub-investigator' : 'Added a site coordinator', 'Current'], ['v3', Y(ago(dl, 120)), 'Removed a departing coordinator', 'Superseded'], ['v2', Y(ago(dl, 260)), 'Pharmacy IP manager added', 'Superseded'], ['v1', Y(ago(dl, 420)), 'Initial log at site activation', 'Superseded']]],
        doc2:['Investigator CVs and licences', 'eTMF', 'cvs', [['Set ' + staff, Y(ago(dl, 30)), sub + ' CV and medical licence added', 'Current'], ['Set ' + (staff - 1), Y(ago(dl, 200)), pi + ' licence renewed', 'Superseded'], ['Set 1', Y(ago(dl, 420)), 'PI and coordinator CVs at activation', 'Superseded']]],
        doc3:['Lab normal ranges', 'eTMF', 'lab-ranges', [['v3', Y(ago(labE, 365)), 'Local lab ranges for HbA1c and lipids | expire ' + Y(labE), 'Current'], ['v2', Y(ago(labE, 730)), 'Annual update from the local lab', 'Superseded'], ['v1', Y(ago(labE, 1000)), 'Initial ranges at activation', 'Superseded']]],
        tr0:[pi + ' | training', 'LMS', 'training/pi', trainH(pi, 'Protocol and GCP', true)],
        tr1:[crc + ' | training', 'LMS', 'training/crc', trainH(crc, 'Protocol, EDC and eCOA', true)],
        tr2:[crc2 + ' | training', 'LMS', 'training/crc2', trainH(crc2, 'Protocol, EDC and eCOA', trained >= staff)] }[sel];
      if (!D) return { open:false };
      const P = PLAT[D[1]], TG = { Current:['#197a48','#e7f6ee'], Completed:['#003358','#e5ecf2'], Superseded:['#55585d','#f2f2f4'], Due:['#8a5a06','#fdf3e0'] };
      return { open:true, title:D[0], sub:nm + ' | ' + study.id, platName:P[0], platShort:P[1], mono:P[2], monoBg:P[3], monoFg:P[4], url:P[5] + study.id.toLowerCase() + '/' + code.toLowerCase() + '/' + D[2], synced:'Synced today, ' + P[6], n:D[3].length + ' versions',
        hist:D[3].map((x, j, a) => { const tg = TG[x[3] || 'Superseded']; return { v:x[0], d:x[1], note:x[2], tag:x[3] || 'Superseded', tFg:tg[0], tBg:tg[1], dotBg: j ? '#fff' : '#004677', dotBd: j ? '#c4c6c9' : '#004677', line: j < a.length - 1 ? 'visible' : 'hidden' }; }),
        close:() => this.setState({ bsDoc:null }) }; })();
    const IMP = { High:['#bd3226','#fcecea'], Medium:['#8a5a06','#fdf3e0'] };
    return { chatCtx, dd:DDV, ct:CONT, actv:ACTV, hasBrief:!!brf && !brf.archived, archiveBrief:() => { this.setState(st => ({ siteBriefs:Object.assign({}, st.siteBriefs, { [ckey]:Object.assign({}, brf, { archived:true }) }) })); this.addLog([{ time:'Just now', text:'You archived the meeting brief for ' + chatCtx.name, study:study.id, kind:'you' }]); }, brief:brf ? { meet:brf.meet, rows:brf.rows.map((r, j) => ({ k:r[0], v:r[1], bt:bt(j) })) } : { meet:'', rows:[] },
      hasBlk:!!blk, blk:(blk || []).map((b, j) => ({ imp:b[0], title:b[1], detail:b[2], src:b[3], bt:bt(j), fg:IMP[b[0]][0], bg:IMP[b[0]][1] })),
      studyId:study.id, studies:STUDIES.map(x => ({ id:x.id })), studyTabs:STUDIES.map(x => { const on = x.id === study.id; return { id:x.id, dot:x.dot, bg: on ? '#fff' : 'transparent', fg: on ? '#0a0a0a' : '#66696e', shadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none', onClick:() => this.setState({ bsStudy:x.id, bsSite:null, bsSec:'ov' }) }; }), onStudy:e => this.setState({ bsStudy:e.target.value, bsSite:null, bsSec:'all' }),
      code, pickVal:study.id + '|' + code, headSub:study.id + ' ' + study.name + ' | site ' + (idx + 1) + ' of ' + sites.length, groups:STUDIES.map(stu => ({ label:stu.id + ' | ' + stu.name, sites:siteData(stu).map(x => ({ val:stu.id + '|' + x.code, label:x.name.replace(/^Site \d+ \| /, '') + ' (' + x.code + ')' })) })),
      onPick:e => { const p = e.target.value.split('|'); this.setState({ bsStudy:p[0], bsSite:p[1], bsSec:'ov' }); },
      prev:() => this.setState({ bsSite:sites[(idx - 1 + sites.length) % sites.length].code }), next:() => this.setState({ bsSite:sites[(idx + 1) % sites.length].code }),
      name:s.name.replace(/^Site \d+ \| /, ''), siteStatus:X.siteStatus || 'Active | recruiting',
      subLine:s.loc + ' | activated ' + (X.activated || fmtD(new Date(new Date(study.start + 'T12:00:00').getTime() + (idx * 11 + 20) * 864e5), true)),
      people:(() => { const dom = s.name.replace(/^Site \d+ \| /, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-(ctr|inst|assoc)$/, '').replace(/^-|-$/g, '') + '.org';
        const em = (n, d) => n.replace(/^(Dr\.|Prof\.)\s+/, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').split(' ').join('.') + '@' + d;
        const craName = cra.indexOf('cover: ') >= 0 ? cra.split('cover: ')[1] : cra;
        const per = (n, d, prim) => { const e = em(n, d), open = S.bsMail === e; return { name:n, email:e, href:'mailto:' + e, isPrimary:!!prim, open, bd: open ? '#004677' : '#cddae5', bg: open ? '#e5ecf2' : '#f7fafc', toggle:() => this.setState(st => ({ bsMail: st.bsMail === e ? null : e, bsCopied:null })), close:() => this.setState({ bsMail:null, bsCopied:null }),
            copyLabel: S.bsCopied === e ? 'Copied' : 'Copy', copyBg: S.bsCopied === e ? '#e7f6ee' : '#004677', copyFg: S.bsCopied === e ? '#197a48' : '#fff',
            copy:() => { const done = () => { this.setState({ bsCopied:e }); clearTimeout(this.bsCopyT); this.bsCopyT = setTimeout(() => this.setState({ bsCopied:null }), 1600); };
              const fb = () => { const t = document.createElement('textarea'); t.value = e; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (x) {} document.body.removeChild(t); done(); };
              if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(e).then(done, fb); else fb(); } }; };
        return [{ role:'Principal investigator', persons:[per(pi, dom)] }, { role:'Site coordinator', persons:[per(crc, dom)] }, { role:'CRA', persons:[Object.assign(per(craName, 'medpace.com'), cra !== craName ? { name:cra } : {})] }]; })(),
      kpis:[['Randomized', s.enrolled + ' / ' + s.expected, 'vs plan to date', '#0a0a0a'], ['Screen conversion', screened ? conv + '%' : '—', screened + ' screened', '#0a0a0a'], ['Last randomization', lastD ? fmtD(lastD) : 'None yet', lastD ? s.last + ' days ago' : 'since activation', '#0a0a0a'], ['Performance', st, s.bottleneck === 'None' ? 'No bottleneck' : s.bottleneck + ' bottleneck', stc[1]]].map((k, j) => ({ l:k[0], v:k[1], s:k[2], fg:k[3], bl: j ? '1px solid #f0f0f3' : 'none' })),
      pa:(() => { const PC = { P1:['#bd3226','#fcecea'], P2:['#8a5a06','#fdf3e0'], P3:['#55585d','#f2f2f4'] };
        const L = ITEMS.filter(i => i.study === study.id && (i.sites || []).indexOf(code) >= 0).map(i => ({ i, st:this.eff(i, false) })).filter(x => this.group(x.st) !== 'closed');
        const items = L.map((x, j) => { const v = this.itemView(x.i), pc = PC[x.i.pri] || PC.P3; return { t:v.title, m:(x.i.kind || 'Action') + ' | ' + (this.who(x.i.id) || 'Unassigned'), pri:x.i.pri, pFg:pc[0], pBg:pc[1],
          p: x.st === 'open' ? { label:'Awaiting approval', fg:'#8a5a06', bg:'#fdf3e0' } : pill('progress'), go:() => this.setState({ tab:'inbox', filter:this.group(x.st), study:null, afSite:null, afOwner:null, afKind:null, afPri:null, afAdded:[], selectedId:x.i.id, stickyId:null }), bt:bt(j) }; });
        return { items, n:items.length, has:items.length > 0, none:!items.length }; })(),
      past:(() => { const CT2 = Object.assign({ Visit:['#003358','#e5ecf2'], Action:['#197a48','#e7f6ee'] }, CT), now = day(0);
        const pvs = Array.from({ length:s.enrolled ? 2 : 0 }, (_, k) => { const v = VIS[(k + idx + 2) % VIS.length]; return [day(-(2 + k * 5 + Math.floor(rnd(60 + k) * 3))), 'Visit', v[0] + ' visit | ' + pidOf(k + 1), 'Completed. ' + v[1] + '.']; });
        const evs = comms.map(c => [new Date(c[0] + ', 2026 12:00'), c[1], c[2], c[3]])
          .concat(acts.filter(a => a[2] === 'done').map(a => { const p = a[1].split(' | '); return [new Date((p[1] || '').replace(/^due /, '') + ', 2026 12:00'), 'Action', a[0], (a[3] ? a[3] + ' | ' : '') + p[0]]; }))
          .concat(pvs).filter(x => !isNaN(x[0]) && x[0] <= now).sort((a, b) => b[0] - a[0]).slice(0, 6);
        return evs.map((x, j) => { const c = CT2[x[1]] || CT2.Email; return { dow:x[0].toLocaleDateString('en-US', { weekday:'short' }), date:fmtD(x[0]), type:x[1], fg:c[0], bg:c[1], t:x[2], s:x[3], bt:bt(j) }; }); })(),
      en:EN,
      nt:NT,
      news:(() => { const IND = { 'DIA-2043':'type 2 diabetes', 'NASH-3301':'NASH', 'RA-2209':'rheumatoid arthritis' }[study.id] || study.name.toLowerCase(), city = s.loc.split(',')[0], eu = /(DE|FR|ES|IT|NL|BE|AT|SE)$/.test(s.loc.trim()), reg = 'ClinicalTrials.gov';
        const NI = { comp:['!','#8a5a06','#fdf3e0'], ok:['✓','#197a48','#e7f6ee'], info:['i','#003358','#e5ecf2'], up:['↑','#003358','#e5ecf2'], down:['↓','#55585d','#f2f2f4'] }, rows = [];
        comp.forEach((c, k) => rows.push(['comp', 'New competing trial', c[0] + ' | ' + c[2].replace(' | ', ', '), c[1] + ' | started recruiting ' + fmtD(day(-(9 + k * 6 + Math.floor(rnd(70 + k) * 12)))), reg]));
        if (!comp.length) rows.push(['ok', 'No new competing trials', 'Within 50 km of the site in the last 30 days', '', eu ? 'CTIS | ClinicalTrials.gov' : 'ClinicalTrials.gov']);
        const ctg = 4 + Math.floor(rnd(71) * 9) + comp.length, ctis = eu ? 2 + Math.floor(rnd(72) * 5) : 0, tot = ctg + ctis + 1 + Math.floor(rnd(73) * 3), dl = comp.length || Math.floor(rnd(74) * 2);
        rows.push(['info', tot + ' trials recruiting for ' + IND + ' near ' + city, 'Within 50 km | ' + (dl ? '+' + dl + ' since September' : 'no change since September'), 'ClinicalTrials.gov ' + ctg + (eu ? ' | CTIS ' + ctis : '') + ' | Citeline ' + tot, 'Citeline']);
        const tr = Math.round((rnd(75) - 0.3) * 40);
        rows.push([tr >= 0 ? 'up' : 'down', 'Searches for “' + IND + ' clinical trial” ' + (tr >= 0 ? 'up ' : 'down ') + Math.abs(tr) + '%', city + ' area | last 90 days vs the previous 90', '', 'Google Trends']);
        return rows.map((x, j) => { const c = NI[x[0]]; return { icon:c[0], fg:c[1], bg:c[2], title:x[1], detail:x[2], sub:x[3], hasSub:!!x[3], src:x[4], bt:bt(j) }; }); })(),
      loc:s.loc, studyName:study.name, perf:st, perfDot:stc[0], perfFg:stc[1], perfBg:stc[2], dt,
      hl:(() => { const HI2 = Object.assign({ info:['i','#003358','#e5ecf2'] }, HI), lvl = (bad, warn) => bad ? 'risk' : warn ? 'anomaly' : 'ok', hrs = Math.round(nV * (BS_HRS[study.id] || 2.5));
        const docIss = []; if (irbDays <= 60) docIss.push('IRB approval expires in ' + irbDays + ' days'); if (trained < staff) docIss.push((staff - trained) + ' of ' + staff + ' staff not trained on ' + PV[0]); if (PV[2] && active > rcDone) docIss.push('re-consent ' + rcDone + ' of ' + active + ' done, due ' + PV[3]);
        const enSub = [s.last == null ? 'no randomization yet' : s.last >= 14 ? 'no randomization in ' + s.last + ' days' : '', screened >= 5 && sf / screened >= 0.35 ? Math.round(sf / screened * 100) + '% screen-fail rate' : ''].filter(Boolean).join(' | ') || (s.bottleneck !== 'None' ? s.bottleneck + ' bottleneck' : '');
        return [['rec','Enrollment vs plan', lvl(ratio < 0.6, ratio < 0.9), s.enrolled + ' of ' + s.expected + ' planned to date (' + Math.round(ratio * 100) + '%)', enSub, 'Enrollment'],
          ['up','Upcoming visits', 'info', nV ? nV + ' visits in the next 4 weeks' : 'No visits in the next 4 weeks', nV ? 'about ' + hrs + ' coordinator hours' : '', 'Activity'],
          ['data','Missing data', lvl(qOpen >= 5 || missPg >= 5, qOpen + missPg > 0), qOpen + missPg ? qOpen + ' open ' + (qOpen === 1 ? 'query' : 'queries') + ' | ' + missPg + ' missing CRF ' + (missPg === 1 ? 'page' : 'pages') : 'No open queries or missing pages', qOpen ? 'oldest query ' + qAge + ' days' : '', 'Data'],
          ['fin','Open invoices', lvl(delay > 60, delay > 45), $(pend) + ' pending | ' + invN + ' invoice' + (invN > 1 ? 's' : ''), 'average payment delay ' + delay + ' days, terms 45', 'Payments'],
          ['doc','Pending documents', lvl(irbDays <= 30, docIss.length > 0), docIss.length ? docIss[0] : 'All documents current', docIss.slice(1).join(' | '), 'Documents']]
          .map((x, j) => { const c = HI2[x[2]]; return { icon:c[0], fg:c[1], bg:c[2], dFg: x[2] === 'risk' || x[2] === 'anomaly' ? c[1] : '#1c1d1f', title:x[1], detail:x[3], sub:x[4], goLabel:x[5], go:() => go(x[0]), bt:bt(j) }; }); })(),
      secs:SECS.map(([k, l, n]) => ({ label:l, hasN:!!n, n:n || 0, pick:() => go(k), line: sec === k ? '#004677' : 'transparent', fg: sec === k ? '#0a0a0a' : '#66696e', fw: sec === k ? 600 : 500, nBg: k === 'iss' ? '#d9483f' : '#85888c' })), isOv: sec === 'ov',
      glance:(() => { const openA = acts.filter(a => a[2] !== 'done').length, G = (fg, bg) => ({ fg, bg }), N = G('#55585d','#f2f2f4'), R = G('#bd3226','#fcecea'), A = G('#8a5a06','#fdf3e0'), OK = G('#197a48','#e7f6ee');
        return [['up','Upcoming activities', nV ? nV + ' visits in the next 4 weeks' : 'No visits scheduled', nV ? '~' + Math.round(nV * (BS_HRS[study.id] || 2.5)) + ' h' : '—', N],
          ['fin','Financial operations', $(pend) + ' pending', delay + ' days delay', delay > 45 ? R : N],
          ['doc','Documents', 'Protocol ' + PV[0] + (PV[2] && active > rcDone ? ' | re-consent ' + rcDone + ' of ' + active : ''), irbDays <= 60 || trained < staff ? 'Needs attention' : 'Current', irbDays <= 60 || trained < staff ? A : OK],
          ['act','Actions', openA ? openA + ' open, ' + (acts.length - openA) + ' completed' : 'All completed', openA ? openA + ' open' : 'Done', openA ? A : OK]]
          .map((x, j) => ({ l:x[1], v:x[2], m:x[3], fg:x[4].fg, bg:x[4].bg, go:() => go(x[0]), bt: j ? '1px solid #f0f0f3' : 'none' })); })(),
      show, src:{ rec:['CTMS','EDC'], up:['EDC','CTMS'], data:['EDC'], iss:['EDC','CTMS','Site emails'], fin:['Finance','CTA'], com:['Site emails','CTMS'], doc:['eTMF','eIRB','LMS'], ext:['ClinicalTrials.gov'], act:['Primary'] },
      r:{ en:s.enrolled, exp:s.expected, total, note:s.diag, ...(() => { const pn = Math.max(1, s.expected), bh = s.enrolled < pn * 0.9, mx = Math.max(pn, s.enrolled, 1), gp = s.enrolled - s.expected;
          const pl = [0,1,2,3,4,5].map(k => pn * (0.55 + 0.45 * k / 5)), a0r = pn * 0.55 * (bh ? 0.92 : 1), a0 = a0r <= s.enrolled * 0.75 ? a0r : s.enrolled * 0.6, ac = [0,1,2,3,4,5].map(k => a0 + (s.enrolled - a0) * Math.pow(k / 5, bh ? 1.25 : 1));
          const pts = arr => arr.map((v, k) => (10 + k * 76).toFixed(1) + ',' + (102 - v / mx * 92).toFixed(1)).join(' ');
          return { vsText:(gp >= 0 ? '+' : '') + gp + ' vs plan', vsColor: gp < 0 ? '#bd3226' : '#197a48', planPts:pts(pl), actualPts:pts(ac),
            kpis:[{ l:'Referred', v:ref.toLocaleString() }, { l:'Prescreened', v:pre.toLocaleString() }, { l:'Enrolled / Screen failed', v:s.enrolled, v2:sf, hasV2:true }, { l:'Drop-outs', v:s.dropped != null ? s.dropped : Math.round(s.enrolled * 0.07) }].map(k => Object.assign({ hasV2:false, v2:'' }, k)) }; })(), pct:Math.min(100, Math.round(s.enrolled / total * 100)) + '%', planPct:Math.min(100, Math.round(s.expected / total * 100)) + '%',
        funnel:[['Referred', ref], ['Prescreened', pre], ['Screened', screened], ['Consented', s.consented || 0], ['Randomized', s.enrolled]].map((x, j) => ({ l:x[0], v:x[1], w:Math.max(2, Math.round(x[1] / Math.max(1, ref) * 100)) + '%', c: j === 4 ? '#004677' : '#8baac5' })),
        stats:[['Screen conversion', screened ? conv + '%' : '—', 'randomized of screened'], ['Awaiting screening', String(s.backlog || 0), 'prescreened candidates'], ['Forecast', fc + ' / ' + total, 'by ' + endTxt]].map(x => ({ l:x[0], v:x[1], s:x[2] })) },
      u:{ cap: nV ? nV + ' participant visits in the next 4 weeks | about ' + Math.round(nV * (BS_HRS[study.id] || 2.5)) + ' coordinator hours' : 'No participant visits in the next 4 weeks', req: nV ? req : ['Screening visit slots: 2 a week requested'], visits, empty:!visits.length, emptyText:X.upEmpty || 'No participant visits scheduled.' },
      i:{ bn:{ label:bnp[0], fg:bnp[1], bg:bnp[2] }, cause:s.diag, open:issues.map((x, j) => ({ t:x[0], m:x[1], p:pill(x[2]), bt:bt(j) })), none:!issues.length },
      fi:{ tiles:[['Site budget', $(budget), 'contracted'], ['Paid to date', $(paid), Math.round(paid / budget * 100) + '% of budget'], ['Pending', $(pend), invN + ' invoice' + (invN > 1 ? 's' : '')], ['Avg payment delay', delay + ' days', 'terms: 45 days']].map(x => ({ l:x[0], v:x[1], s:x[2], fg: x[0] === 'Avg payment delay' && delay > 45 ? '#bd3226' : '#0a0a0a' })), invs },
      c:{ items:comms.map((x, j) => ({ d:x[0], type:x[1], t:x[2], s:x[3], fg:(CT[x[1]] || CT.Email)[0], bg:(CT[x[1]] || CT.Email)[1], bt:bt(j) })), commits:commits.map((x, j) => ({ t:x[0], m:x[1], p:pill(x[2]), bt:bt(j) })) },
      d:{ openProto:() => openDoc('proto'), pv:PV[0], pvSub:PV[1], hasRc:!!PV[2] && active > 0, rcPct:(active ? Math.round(rcDone / active * 100) : 0) + '%', rcLine:rcDone + ' of ' + active + ' active participants re-consented | due ' + PV[3],
        docs:[['IRB approval', 'Valid until ' + fmtD(day(irbDays), true), irbDays <= 60 ? 'warn' : 'ok'], ['Delegation of authority log', 'Updated ' + fmtD(day(-(12 + idx * 3) % 90)), 'ok'], ['Investigator CVs and licences', staff + ' of ' + staff + ' on file', 'ok'], ['Lab normal ranges', 'Expire ' + fmtD(day(60 + Math.round(rnd(16) * 200)), true), 'ok']].map((x, j) => ({ t:x[0], m:x[1], p:pill(x[2]), bt:bt(j), open:() => openDoc('doc' + j) })),
        train:[[pi, 'Protocol ' + PV[0] + ' and GCP', 'trained'], [crc, 'Protocol ' + PV[0] + ', EDC and eCOA', 'trained'], [crc2, 'Protocol ' + PV[0] + ', EDC and eCOA', trained < staff ? 'untrained' : 'trained']].map((x, j) => ({ t:x[0], m:x[1], p:pill(x[2]), bt:bt(j), open:() => openDoc('tr' + j) })) },
      e:{ comp:comp.map((x, j) => ({ t:x[0], nct:x[1], m:x[2], p:pill('recruiting'), bt:bt(j) })), noComp:!comp.length, factors:factors.map((x, j) => ({ t:x[0], s:x[1], src:x[2], bt:bt(j) })) },
      a:{ cur:aRows(ALINK.filter(x => x.g !== 'closed').sort((p, q) => q.dt - p.dt)), past:aRows(ALINK.filter(x => x.g === 'closed').sort((p, q) => q.dt - p.dt)), noCur:!ALINK.some(x => x.g !== 'closed'), noPast:!ALINK.some(x => x.g === 'closed'), items:(() => { const STL = { open:'Awaiting approval', approved:'Approved', auto:'Auto-applied', sending:'Sending', rejected:'Dismissed', closed:'Closed' };
          const linked = ITEMS.filter(i => i.study === study.id && (i.sites || []).indexOf(code) >= 0).map(i => { const st = this.eff(i, false), v = this.itemView(i);
            return { t:v.title, m:(i.kind || 'Action') + ' | ' + (this.who(i.id) || 'Unassigned') + ' | ' + i.pri, p:Object.assign(pill(st === 'open' ? 'open' : this.group(st) === 'closed' ? 'done' : 'progress'), { label:STL[st] || 'In progress' }), stLabel:STL[st] || 'In progress', out:'', hasOut:false,
              go:() => this.setState({ tab:'inbox', filter:this.group(st), study:null, afSite:null, afOwner:null, afKind:null, afPri:null, afAdded:[], selectedId:i.id, stickyId:null }) }; });
          const hist = acts.filter(x => !linked.some(l => l.t.toLowerCase().indexOf(x[0].toLowerCase()) >= 0)).map(x => ({ t:x[0], m:x[1], p:pill(x[2]), stLabel:'', out:x[3], hasOut:!!x[3], go:null, cur:'default', chev:'hidden', hov:'transparent', tip:'' }));
          return linked.map(x => Object.assign(x, { cur:'pointer', chev:'visible', hov:'#f7f8f9', tip:'Open in Actions' })).map((x, j) => Object.assign(x, { bt:bt(j) })); })(),
        hasLinked:ITEMS.some(i => i.study === study.id && (i.sites || []).indexOf(code) >= 0), noLinked:!ITEMS.some(i => i.study === study.id && (i.sites || []).indexOf(code) >= 0),
        goAll:() => this.setState({ tab:'inbox', filter:'open', study:study.id, afSite:code, afOwner:null, afKind:null, afPri:null, selectedId:null }), hasLink:!!X.link, openLink:() => this.setState({ tab:'inbox', filter:'open', study:null, selectedId:X.link }) } };
  }

  async engAi(id, instr) {
    if (!instr || this.state.engAiLoading || this.state.engApproved) return;
    const it = ENG_INS.concat(ENG_SHARED).find(x => x.id === id); if (!it) return;
    const cur = (this.state.engEdits || {})[id] != null ? this.state.engEdits[id] : it.body;
    this.setState(s => ({ engAiLoading:id, engAiPrev:Object.assign({}, s.engAiPrev, { [id]:cur }) }));
    let out = '';
    try {
      const raw = await complete({ messages:[{ role:'user', content:'You edit one section of a monthly sponsor-to-site newsletter for clinical trial DIA-2043 (Type 2 Diabetes, Phase 2). Rewrite the section following this instruction: "' + instr + '".\nRules: keep every number, date, name and document reference exactly as written. Do not add explanations or causes for site performance. Do not add protocol instructions, medical advice or anything that is not in the original. Keep any text inside quotation marks word for word. Keep tokens like {en} and {ex} unchanged. Plain text, no markdown, at most 110 words, paragraphs separated by one blank line. Return only the rewritten section.\n\nSECTION:\n' + cur }] });
      out = (raw || '').trim();
      if (!out) throw new Error('empty');
    } catch (e) { out = this.engLocal(cur, instr); }
    this.setState(s => ({ engAiLoading:null, engAiText:'', engEdits:Object.assign({}, s.engEdits, { [id]:out }), engAiDone:Object.assign({}, s.engAiDone, { [id]:instr }) }));
  }
  engLocal(t, instr) {
    const l = instr.toLowerCase(), paras = t.split('\n\n');
    if (/short|concise|brief|trim/.test(l)) return paras.filter((p, k) => k < 2 || /^[“"]/.test(p)).map(p => /^[“"]/.test(p) ? p : ((p.match(/[^.?!]+[.?!]+/g) || [p]).slice(-1)[0].trim())).join('\n\n');
    if (/warm|friend/.test(l)) return 'Thank you for everything your team is doing on DIA-2043.\n\n' + t;
    if (/date|deadline|reply/.test(l)) return t + '\n\nA short reply by November 7 would let us include your input in the next update.';
    if (/direct|specific|clear/.test(l)) { const k = t.lastIndexOf('?'); return k > 0 ? t.slice(0, k + 1) + ' A one-line reply to this email is enough.' + t.slice(k + 1) : t; }
    return t;
  }
  engVals(spinner) {
    const S = this.state, tplId = 'monthly', view = S.engView || 'dash', dec = S.engDec || {}, edits = S.engEdits || {}, off = S.engSecOff || {}, approved = !!S.engApproved;
    const aiDone = S.engAiDone || {}, openM = S.engOpen || {}, inspM = S.engInsp || {}, editId = approved ? null : S.engEditId, aiL = S.engAiLoading, bt = S.engBTab || 'shared';
    const P = c => ENG_PEOPLE[c] || ['', '', 3, c];
    const site = c => { const r = DIA_SITES.find(x => x[2] === c) || []; return { code:c, name:(r[0] || c).replace(/^Site \d+ \| /, ''), loc:r[1] || '', en:r[3], ex:r[4], cons:r[7], last:r[10] }; };
    const uniq = a => a.filter((v, k) => a.indexOf(v) === k);
    const bodyOf = it => edits[it.id] != null ? edits[it.id] : it.body;
    const decOf = it => it.held ? 'held' : it.shared ? 'shared' : (dec[it.id] || 'proposed');
    const inc = it => { const d = decOf(it); return d === 'proposed' || d === 'accepted'; };
    const DEC = { proposed:['Not reviewed','#55585d','#f2f2f4'], accepted:['Accepted ✓','#197a48','#e7f6ee'], removed:['Removed','#85888c','#f2f2f4'], held:['Held for medical review','#8a5a06','#fdf3e0'], shared:['In shared content','#003358','#e5ecf2'] };
    const TY = { bottleneck:['Recruitment bottleneck','#bd3226','#fcecea','#d9483f'], question:['Protocol question','#003358','#e5ecf2','#004677'], recognition:['High performer','#197a48','#e7f6ee','#27a763'] };
    const seg = on => ({ bg: on ? '#fff' : 'transparent', fg: on ? '#0a0a0a' : '#66696e', shadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' });
    const setDec = (id, v) => this.setState(s => ({ engDec:Object.assign({}, s.engDec, { [id]:v }) }));
    const go = (v, extra) => this.setState(Object.assign({ engView:v }, extra || {}));
    const openIns = id => go('build', { engBTab:'personal', engOpen:Object.assign({}, openM, { [id]:true }) });
    const reviewable = ENG_INS.filter(i => !i.held && !i.shared), reviewed = reviewable.filter(i => dec[i.id]).length, notRev = reviewable.length - reviewed;
    const stt = approved ? ['Approved | scheduled for Nov 26','#197a48','#e7f6ee','#27a763'] : ['AI-generated draft | awaiting your approval','#8a5a06','#fdf3e0','#e5a11a'];
    const camp = { status:stt[0], stFg:stt[1], stBg:stt[2], stDot:stt[3], send:'Thu, Nov 26 | 09:00 site local time', cta: approved ? 'View approved campaign' : 'Review AI-generated campaign',
      drafted: approved ? 'Approved by Marie Curious today at ' + (S.engApprovedAt || '') : 'By Prime, Oct 25 at 6:04 AM' };
    const editProps = (it, isIns) => {
      const editing = editId === it.id, run = instr => this.engAi(it.id, instr);
      return { editing, notEditing:!editing, editLabel: editing ? 'Done editing' : 'Edit with AI',
        toggleEdit:() => { if (approved) return; if (editing) { this.setState({ engEditId:null, engAiText:'' }); if (isIns && !(this.state.engDec || {})[it.id]) setDec(it.id, 'accepted'); } else this.setState({ engEditId:it.id, engAiText:'' }); },
        onBody:e => { const v = e.target.value; this.setState(s => ({ engEdits:Object.assign({}, s.engEdits, { [it.id]:v }) })); },
        chips:ENG_AI_CHIPS.map(l => ({ label:l, run:() => run(l) })),
        aiRun:() => run((this.state.engAiText || '').trim()), aiKey:e => { if (e.key === 'Enter') run((this.state.engAiText || '').trim()); },
        aiLoading:aiL === it.id, aiSpin:spinner(12, '#004677'), aiLabel: aiL === it.id ? 'Rewriting…' : 'Rewrite',
        hasAiNote:!!aiDone[it.id], aiNote:aiDone[it.id] || '',
        undo:() => this.setState(s => { const e2 = Object.assign({}, s.engEdits), pv = (s.engAiPrev || {})[it.id], d2 = Object.assign({}, s.engAiDone); e2[it.id] = pv != null ? pv : it.body; delete d2[it.id]; return { engEdits:e2, engAiDone:d2 }; }) };
    };
    const insView = (it, j) => {
      const d = decOf(it), dl = DEC[d], open = !!openM[it.id], insp = !!inspM[it.id], mx = Math.max(1, ...it.data.series.map(x => x[1]));
      const rev = it.held ? ['Needs medical review','#8a5a06','#fdf3e0'] : it.type === 'question' ? ['Quotes approved guidance','#003358','#e5ecf2'] : ['Clinical ops approval','#55585d','#f2f2f4'];
      return Object.assign({ id:it.id, siteLabel:it.sites.map(c => P(c)[3]).join(it.sites.length > 2 ? ', ' : ' & '), title:it.title, metric:it.metric,
        sub: it.held ? 'Routed to the medical monitor | not in this send' : it.shared ? 'Applies to every site | added to the shared FAQ' : 'Suggested action: ' + it.action,
        decLabel:dl[0], decFg:dl[1], decBg:dl[2], border: j ? '1px solid #f0f0f3' : 'none', rowBg: open ? '#fcfcfd' : '#fff', open, chev: open ? 'rotate(90deg)' : 'none',
        toggle:() => this.setState(s => ({ engOpen:Object.assign({}, s.engOpen, { [it.id]:!(s.engOpen || {})[it.id] }) })),
        evidence:it.evidence, sources:it.sources.map(s => ({ sys:s[0], ref:s[1] })), hasGuard:!!it.guard, guard:it.guard || '',
        inspectOpen:insp, inspectLabel: insp ? 'Hide supporting data' : 'Inspect supporting data →',
        toggleInspect:() => this.setState(s => ({ engInsp:Object.assign({}, s.engInsp, { [it.id]:!(s.engInsp || {})[it.id] }) })),
        data:{ title:it.data.title, unit:it.data.unit, bars:it.data.series.map((x, k, a) => ({ l:x[0], v:x[2] || String(x[1]), h:Math.max(2, Math.round(x[1] / mx * 60)) + 'px', c: k === a.length - 1 ? '#004677' : '#8baac5' })), rows:it.data.rows.map(r => ({ a:r[0], b:r[1], c:r[2] })) },
        rightLabel: it.held ? 'Held from this newsletter' : it.shared ? 'Added to shared content' : 'Proposed newsletter section', review:rev[0], revFg:rev[1], revBg:rev[2],
        secTitle:it.secTitle, body:bodyOf(it), strike: d === 'removed' ? 'line-through' : 'none', op: d === 'removed' ? 0.55 : 1, hasCta:!!it.cta && !it.held, cta:it.cta || '',
        canAct:!approved && !it.held && !it.shared, showAccept: d === 'proposed', showRemove: d !== 'removed', showRestore: d === 'removed',
        accept:() => setDec(it.id, 'accepted'), remove:() => { setDec(it.id, 'removed'); if (this.state.engEditId === it.id) this.setState({ engEditId:null }); }, restore:() => setDec(it.id, 'accepted'),
        hasLockNote:!!(it.held || it.shared || approved), hasShareLink:!!it.shared, viewShared:() => this.setState({ engBTab:'shared' }),
        lockNote: it.held ? 'Prime will add the medical monitor’s answer to a later newsletter once it is approved.' : it.shared ? 'Edit or remove it with the shared sections.' : 'Approved. Editing is locked.' }, editProps(it, true));
    };
    const groups = [['bottleneck','Recruitment bottlenecks','7 sites','Prime asks the site; it doesn’t diagnose'],['question','Recurring protocol questions','3 questions','Answers only from approved guidance'],['recognition','High-performing sites','5 sites','Thanks each site with its own numbers']]
      .map(([k, l, c, h]) => ({ label:l, count:c, hint:h, dot:TY[k][3], items:ENG_INS.filter(i => i.type === k).map(insView) }));
    const sharedV = ENG_SHARED.map(sh => { const on = !off[sh.id];
      return Object.assign({ id:sh.id, title:sh.title, sources:sh.sources.map(s => ({ sys:s[0] })), sourceLine:sh.sources.map(s => s[0] + ': ' + s[1]).join('   |   '), body:bodyOf(sh), op: on ? 1 : 0.5,
        onLabel: on ? 'Included' : 'Removed', swBg: on ? '#004677' : '#d7d8da', knob: on ? '16px' : '2px', canEdit:!approved,
        toggleOn:() => { if (approved) return; this.setState(s => ({ engSecOff:Object.assign({}, s.engSecOff, { [sh.id]:on }) })); },
        hint: sh.kind === 'list' ? 'One line per item: date | text' : sh.kind === 'progress' ? 'Shown under the live progress bar (96 of 180)' : '' }, editProps(sh, false)); });
    const incIns = reviewable.filter(inc), reach = uniq([].concat(...incIns.map(i => i.sites)));
    const sum = [['Shared sections', ENG_SHARED.filter(s => !off[s.id]).length + ' of ' + ENG_SHARED.length, 'Sent to all 17 sites'],['Personalized sections', String(incIns.length), 'Across ' + reach.length + ' sites'],['Reviewed by you', reviewed + ' of ' + reviewable.length, notRev ? 'The rest go out as Prime drafted them' : 'All reviewed']].map(r => ({ l:r[0], v:r[1], s:r[2] }));

    const sc = S.engSite || 'NWU', st = site(sc), pp = P(sc), more = pp[2] - 2;
    const mine = ENG_INS.filter(i => !i.shared && i.sites.indexOf(sc) >= 0);
    const ord = { recognition:0, bottleneck:1, question:2 };
    const shown = mine.filter(i => !i.held && inc(i)).sort((a, b) => ord[a.type] - ord[b.type]);
    const fill = t => t.replace(/\{en\}/g, st.en).replace(/\{ex\}/g, st.ex);
    const sal = n => { const p = n.split(' '); return p[0] + ' ' + p.slice(2).join(' '); };
    const lastD = st.last == null ? 'None yet' : (() => { const d = new Date('2026-10-26T12:00:00'); d.setDate(d.getDate() - st.last); return d.toLocaleDateString('en-US', { month:'short', day:'numeric' }); })();
    const hl = S.engHl !== false;
    const mail = { to:pp[0] + ', ' + pp[1] + (more > 0 ? ' and ' + more + ' more' : ''), subject:(shown.find(i => i.subject) || {}).subject || 'Your November DIA-2043 update',
      headline:'November update for ' + st.name, loc:st.loc, greeting:'Dear ' + sal(pp[0]) + ', ' + pp[1].split(' ')[0] + ' and the ' + pp[3] + ' team,',
      intro:'Here is this month’s DIA-2043 update: where the study stands, how things look at your site' + (shown.length ? ', and ' + (shown.length === 1 ? 'one point' : shown.length + ' points') + ' for your team.' : ', and what’s coming up.'),
      hasProgress:!off.progress, progressBody:bodyOf(ENG_SHARED[0]), glanceLabel:st.name.toUpperCase() + ' AT A GLANCE',
      glance:[{ v:String(st.en), l:'Randomized | ' + st.ex + ' planned to date' },{ v:String(st.cons), l:'Consented to date' },{ v:lastD, l:'Last randomization' }],
      personal:shown.map(i => ({ kicker:i.kicker, kFg: i.type === 'recognition' ? '#197a48' : '#004677', title:i.secTitle, body:fill(bodyOf(i)), hasCta:!!i.cta, cta:i.cta || '', src:uniq(i.sources.map(s => s[0])).join(' + ').toUpperCase() })),
      shared:ENG_SHARED.slice(1).filter(s => !off[s.id]).map(s => { const b = bodyOf(s), isList = s.kind === 'list';
        return { title:s.title, isList, isText:!isList, body:b, items: isList ? b.split('\n').filter(x => x.trim()).map((x, k) => { const p = x.split('|'); return { d:(p[0] || '').trim(), t:p.slice(1).join('|').trim(), bt: k ? '1px solid #f0f0f3' : 'none' }; }) : [] }; }),
      hl, hlBd: hl ? '#8baac5' : 'transparent', hlBg: hl ? '#f7fafc' : 'transparent',
      recipLine:pp[0] + ' (PI), ' + pp[1] + ' (Study coordinator)' + (more > 0 ? ' and ' + more + ' more from CTMS' : '') };
    const railItems = mine.map((i, j) => { const on = inc(i), lock = i.held || approved;
      return { title:i.secTitle, meta: i.held ? 'Held for medical review | not in this send' : TY[i.type][0] + ' | ' + uniq(i.sources.map(s => s[0])).join(', '), swBg: on ? '#004677' : '#d7d8da', knob: on ? '16px' : '2px', swOp: lock ? 0.45 : 1, border: j ? '1px solid #f0f0f3' : 'none',
        toggle:() => { if (!lock) setDec(i.id, on ? 'removed' : 'accepted'); },
        inspect:() => this.setState(s => ({ engView:'build', engBTab:'personal', engOpen:Object.assign({}, s.engOpen, { [i.id]:true }), engInsp:Object.assign({}, s.engInsp, { [i.id]:true }) })) }; });
    const ok = ['✓','#197a48','#e7f6ee'];
    const checks = [ notRev ? ['!','#8a5a06','#fdf3e0', notRev + ' personalized sections not reviewed yet. They go out as Prime drafted them.'] : ok.concat(['All ' + reviewable.length + ' personalized sections reviewed.']),
      ok.concat(['Every personalized statement links to a CTMS, EDC or site-communication record.']), ok.concat(['No protocol changes or new instructions. Clarifications quote approved SRM v2.1.']),
      ['i','#003358','#e5ecf2','1 section is held for medical review and won’t be sent.'], ok.concat(['52 contacts at 17 sites, from CTMS site contacts (Oct 25).']) ].map(c => ({ icon:c[0], fg:c[1], bg:c[2], text:c[3] }));

    const pid = ENG_PERF[S.engPerf] ? S.engPerf : 'sep', pf = ENG_PERF[pid];
    const STA = { done:['Completed','#197a48','#e7f6ee'], progress:['In progress','#003358','#e5ecf2'], none:['No reply','#bd3226','#fcecea'] };
    const perf = { label:pf.label, sent:pf.sent, hasDetail:!!pf.actions, noDetail:!pf.actions, actSum:'9 of 12 completed',
      pid, onPick:e => this.setState({ engPerf:e.target.value }),
      opts:['sep','aug','jul','p4','jun'].map(k => ({ k, label:ENG_PERF[k].label + ' | ' + ENG_PERF[k].sent.split(' | ')[0].replace('Sent ', '') })),
      kpis:pf.kpis.map(k => ({ l:k[0], v:k[1], s:k[2], hasBar:k[3] != null, bar:(k[3] || 0) + '%' })),
      actions:(pf.actions || []).map((a, j) => { const id = ENG_ACT_IDS[pid + '|' + j], it = ITEMS.find(i => i.id === id);
        return { site:a[0], text:a[1], st:STA[a[2]][0], fg:STA[a[2]][1], bg:STA[a[2]][2], when:a[3], go:() => this.setState({ tab:'inbox', filter: it ? this.group(this.eff(it, false)) : 'open', study:null, afSite:null, afOwner:null, afKind:null, afPri:null, afAdded:[], selectedId:id || null, stickyId:null }) }; }),
      open:(pf.open || []).map(o => ({ site:o[0], text:o[1], next:o[2] })), learned:(pf.learned || []).map(t => ({ t })),
      change:(pf.change || []).map((c, j) => ({ site:c[0], metric:c[1], before:c[2], after:c[3], other:c[4], border: j ? '1px solid #f0f0f3' : 'none' })) };

    const est = S.engStudy || 'DIA-2043', isDia = est === 'DIA-2043', so = STUDIES.find(x => x.id === est) || {}, enabledO = (S.engEnabled || {})[est];
    const studyX = { isDashAny: view === 'dash', isDashOther: view === 'dash' && !isDia,
      studyTabs:STUDIES.map(s => Object.assign({ id:s.id, dot:s.dot, onClick:() => this.setState({ engStudy:s.id }) }, seg(est === s.id))),
      otherId:est, otherCta: enabledO ? 'Campaigns enabled ✓' : 'Enable campaigns for ' + est,
      otherLine: enabledO ? 'Prime will draft the first monthly newsletter for ' + est + ' sites on Nov 23 and send it to you for approval.' : 'Turn on site engagement for ' + est + ' (' + (so.name || '') + '). Prime will build a campaign calendar from CTMS, EDC and site communications. Nothing is sent until you approve.',
      enableOther:() => { if (enabledO) return; this.setState(s => ({ engEnabled:Object.assign({}, s.engEnabled, { [est]:true }) })); this.addLog([{ time:'Just now', text:'You enabled site engagement campaigns for ' + est, study:est, kind:'you' }]); } };
    return { ...studyX, isDash: view === 'dash' && isDia, isBuild: view === 'build', isPreview: view === 'preview', isPerf: view === 'perf', isFlow: view === 'build' || view === 'preview',
      camp, approved, notApproved:!approved, goDash:() => go('dash'), openBuilder:() => go('build'), openPreview:() => go('preview'), goPreview:() => go('preview', { engEditId:null }),
      goAudit:() => this.setState({ tab:'activity' }),
      goActions:() => this.setState({ tab:'inbox', filter:'open', study:null, afSite:null, afOwner:null, afKind:['Site follow-up'], afPri:null, afAdded:['afKind'], selectedId:null, stickyId:null }),
      tiles:[['7','Recruitment bottlenecks','#d9483f','nwu'],['3','Recurring protocol questions','#004677','q1'],['5','High-performing sites','#27a763','atl']].map(([n, l, dot, id]) => ({ n, label:l, dot, open:() => openIns(id) })),
      calRef:el => { if (!el || el.dataset.centered) return; el.dataset.centered = '1';
        requestAnimationFrame(() => { const n = ENG_CAL.length, k = ENG_CAL.findIndex(x => x[0] === 'Oct 2026'), w = el.scrollWidth / n; el.scrollLeft = Math.max(0, w * (k + 0.5) - el.clientWidth / 2); }); },
      cal:ENG_CAL.map(([m, items], j) => { const now = m === 'Oct 2026';
        return { label:m, now, bg: now ? '#f7fafc' : '#fff', bl: j ? '1px solid #f0f0f3' : 'none',
          items:(m === 'Nov 2026' ? (this.state.engChatAdded || []) : []).concat((this.state.engNewAdded || []).filter(x => x.mo === m).map(x => x.row)).concat(items).map(([id, t, d, s0, meta]) => { const isOct = id === 'oct', sv = isOct ? (approved ? 'scheduled' : 'draft') : s0;
            const C = { sent:['#27a763','#ecedee','#fff','solid'], draft:['#e5a11a','#8baac5','#f2f6f9','solid'], scheduled:['#004677','#8baac5','#f2f6f9','solid'], planned:['#b3b5b8','#d7d8da','transparent','dashed'] }[sv];
            return { title:t, date:d + ' | ' + { sent:'Sent', draft:'Draft', scheduled:'Scheduled', planned:'Planned' }[sv], meta: isOct ? (approved ? 'Approved | 17 site versions' : 'Awaiting your approval') : meta,
              dot:C[0], bd:C[1], bg:C[2], bs:C[3], cursor: id ? 'pointer' : 'default', open:() => { if (isOct) go('build'); else if (ENG_PERF[id]) go('perf', { engPerf:id }); } }; }) }; }),
      opps:['nwu','cha','q1','atl','hou','q2'].map(id => { const it = ENG_INS.find(i => i.id === id), ty = TY[it.type];
        return { isFlag:it.type === 'bottleneck', isQ:it.type === 'question', isStar:it.type === 'recognition', type:ty[0], typeFg:ty[1], typeBg:ty[2], site:it.sites.map(c => P(c)[3]).join(' & '), title:it.title, metric:it.metric,
          source:ty[0] + '   |   ' + it.sources.slice(0, 2).map(s => s[0] + ' ' + s[1]).join('   |   ') + (it.held ? '   |   held for medical review' : ''), open:() => openIns(id) }; }),
      steps:[['build','1','Review content'],['preview','2','Preview & approve']].map(([k, n, l]) => Object.assign({ n, label:l, nFg: view === k ? '#004677' : '#95989c', onClick:() => go(k, { engEditId:null }) }, seg(view === k))),
      bTabs:[['shared','Shared with all sites', ENG_SHARED.length],['personal','Personalized by site', ENG_INS.length]].map(([k, l, n]) => Object.assign({ label:l, count:n, onClick:() => this.setState({ engBTab:k }) }, seg(bt === k))),
      isPersonal: bt === 'personal' && tplId === 'monthly', isShared: bt === 'shared' && tplId === 'monthly',
      nw:(() => { const N = S.engNew; if (!N) return { open:false };
        const T = ENG_TPLS.find(x => x.id === N.tpl), upd = f => this.setState(s => ({ engNew:Object.assign({}, s.engNew, f(s.engNew)) }));
        const setSecs = f => upd(n => ({ secs:f(n.secs.slice()) })), mv = (f, k) => setSecs(a => { if (k < 0 || k >= a.length || f === k) return a; const [x] = a.splice(f, 1); a.splice(k, 0, x); return a; });
        const stop = fn => e => { e.stopPropagation(); fn(); };
        const tg = k => k === 'shared' ? { tag:'Shared', tagFg:'#003358', tagBg:'#e5ecf2' } : { tag:'Per site', tagFg:'#8a5a06', tagBg:'#fdf3e0' };
        const secs = N.secs || [], dt = new Date((N.date || '2026-11-12') + 'T12:00');
        return { open:true, isPick:N.step === 'pick', isEdit:N.step === 'edit', study:est, close:() => this.setState({ engNew:null }), stop:e => e.stopPropagation(),
          back:() => upd(() => ({ step:'pick' })),
          tpls:ENG_TPLS.map(t => ({ name:t.name, desc:t.desc, count: t.secs.length ? t.secs.length + ' sections' : 'Start empty', chips:t.secs.map(r => ({ l:r[0] })),
            pick:() => upd(() => ({ step:'edit', tpl:t.id, secs:t.secs.map((r, j) => ({ uid:t.id + j, label:r[0], kind:r[1], body:r[2] })), name: t.id === 'blank' ? '' : t.name + ' | ' + dt.toLocaleDateString('en-US', { month:'long' }), date:N.date || '2026-11-12', edit:null, add:false })) })),
          tplName: T ? T.name : '', name:N.name || '', date:N.date || '2026-11-12',
          ...(() => { const MO = [['2026-10','October 2026','Current month','2026-10-29','2026-10-31'],['2026-11','November 2026','Next month','2026-11-01','2026-11-30'],['2026-12','December 2026','In 2 months','2026-12-01','2026-12-31']];
            const cur = MO.find(m => (N.date || '2026-11-12').indexOf(m[0]) === 0) || MO[1], cnt = mk => { const lbl = new Date(mk + '-15T12:00').toLocaleDateString('en-US', { month:'short' }) + ' 2026', row = ENG_CAL.find(r => r[0] === lbl); return (row ? row[1].length : 0) + (S.engNewAdded || []).filter(x => x.mo === lbl).length; };
            return { dMin:cur[3], dMax:cur[4], months:MO.map(m => { const on = m === cur, n = cnt(m[0]); return { label:m[1], sub:m[2] + ' | ' + n + ' planned', bd: on ? '#004677' : '#e2e3e5', bg: on ? '#f2f6f9' : '#fff',
              pick:() => upd(() => ({ date: m[0] === '2026-10' ? '2026-10-29' : m[0] + '-12' })) }; }) }; })(),
          onName:e => { const v = e.target.value; upd(() => ({ name:v })); }, onDate:e => { const v = e.target.value; if (v && v >= '2026-10-29' && v <= '2026-12-31') upd(() => ({ date:v })); },
          secs:secs.map((x, j) => { const ed = N.edit === x.uid;
            return Object.assign({ n:String(j + 1).padStart(2, '0'), label:x.label, body:x.body || '', editing:ed, notEditing:!ed, bd: ed ? '#004677' : '#e2e3e5', bg: ed ? '#f7fafc' : '#fff',
              toggle:() => upd(n => ({ edit: n.edit === x.uid ? null : x.uid })),
              onLabel:e => { const v = e.target.value; setSecs(a => a.map(y => y.uid === x.uid ? Object.assign({}, y, { label:v }) : y)); },
              onBody:e => { const v = e.target.value; setSecs(a => a.map(y => y.uid === x.uid ? Object.assign({}, y, { body:v }) : y)); },
              up:stop(() => mv(j, j - 1)), down:stop(() => mv(j, j + 1)), remove:stop(() => setSecs(a => a.filter(y => y.uid !== x.uid))), upOp: j ? 1 : 0.3, downOp: j < secs.length - 1 ? 1 : 0.3,
              dragStart:e => { this._secDrag = j; e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', String(j)); } catch (_) {} },
              dragOver:e => e.preventDefault(), drop:e => { e.preventDefault(); if (this._secDrag != null) mv(this._secDrag, j); this._secDrag = null; } }, tg(x.kind)); }),
          noSecs:!secs.length, secCount:secs.length + (secs.length === 1 ? ' section' : ' sections'),
          addOpen:!!N.add, toggleAdd:() => upd(n => ({ add:!n.add })),
          addOpts:ENG_BLOCKS.map(b => Object.assign({ label:b[0], desc:b[3], add:() => { const uid = 'c' + Date.now(); upd(n => ({ secs:n.secs.concat([{ uid, label:b[0], kind:b[1], body:b[2] }]), add:false, edit:uid })); } }, tg(b[1]))),
          canCreate:!!(N.name || '').trim() && secs.length > 0, createOp: (N.name || '').trim() && secs.length ? 1 : 0.45,
          create:() => { if (!(N.name || '').trim() || !secs.length) return;
            const mo = dt.toLocaleDateString('en-US', { month:'short' }) + ' ' + dt.getFullYear(), d = dt.toLocaleDateString('en-US', { month:'short', day:'numeric' });
            this.setState(s => ({ engNew:null, engNewAdded:(s.engNewAdded || []).concat([{ mo, row:['', N.name.trim(), d, 'planned', T.name + ' | ' + secs.length + ' sections | Prime drafts it for your approval'] }]) }));
            this.addLog([{ time:'Just now', text:'You created a new engagement: ' + N.name.trim() + ' (' + T.name + ', ' + d + ')', study:est, kind:'you' }]); } }; })(),
      openNew:() => this.setState({ engNew:{ step:'pick' } }),
      tpl:(() => { const blk = (label, kind, id) => { const on = kind === bt, sh = kind === 'shared'; return { label, tag: sh ? 'Shared' : 'Per site', tagFg: sh ? '#003358' : '#8a5a06', tagBg: sh ? '#e5ecf2' : '#fdf3e0',
          bd: on ? '#004677' : '#e2e3e5', bg: on ? '#f2f6f9' : '#fff', op: id && off[id] ? 0.45 : 1, pick:() => this.setState({ engBTab:kind }) }; };
        const alt = (ENG_TPLS.find(t => t.id === tplId) || {}).secs;
        return (alt ? alt.map(([l, k]) => blk(l, k)) : [blk('Greeting', 'personal'), blk(ENG_SHARED[0].title, 'shared', ENG_SHARED[0].id), blk('Your site at a glance', 'personal'), blk('For your team', 'personal')].concat(ENG_SHARED.slice(1).map(x => blk(x.title, 'shared', x.id)))).map((x, j) => Object.assign(x, { n:String(j + 1).padStart(2, '0') })); })(),
      tplName:(ENG_TPLS.find(t => t.id === tplId) || ENG_TPLS[0]).name.toUpperCase() + ' | DIA-2043',
      tplNote:'Sections in send order. Click one to edit it below.',
      tplOpts:ENG_TPLS.map(t => { const on = t.id === tplId; return { name:t.name, desc:t.desc, bd: on ? '#004677' : '#e2e3e5', bg: on ? '#f2f6f9' : '#fff', ring: on ? '#004677' : '#c9cbce', dot: on ? '#004677' : '#fff',
        pick:() => { if (!approved) this.setState({ engTpl:t.id }); } }; }),
      bNote: bt === 'personal' ? 'Each card shows what Prime found, its source and the section it wrote' : 'These sections go to every site',
      groups, shared:sharedV, sum, read:ENG_READ.map(r => ({ sys:r[0], text:r[1] })),
      canAcceptRest: !approved && notRev > 0, acceptRestLabel:'Accept the remaining ' + notRev,
      acceptRest:() => this.setState(s => { const d2 = Object.assign({}, s.engDec); reviewable.forEach(i => { if (!d2[i.id]) d2[i.id] = 'accepted'; }); return { engDec:d2 }; }),
      aiText:S.engAiText || '', onAiText:e => this.setState({ engAiText:e.target.value }),
      ...(() => { const need = DIA_SITES.map(r => r[2]).filter(c => ENG_INS.some(i => !i.shared && !i.held && i.sites.indexOf(c) >= 0)), ok = S.engSiteOk || {};
        const done = need.filter(c => ok[c]).length, left = need.length - done, curNeed = need.indexOf(sc) >= 0, curOk = !!ok[sc];
        const nextOf = (from, okM) => { const k = need.indexOf(from); for (let j = 1; j <= need.length; j++) { const c = need[(Math.max(k, -1) + j + need.length) % need.length]; if (!okM[c]) return c; } return null; };
        const nx = nextOf(sc, ok), nm = c => P(c)[3];
        let apLabel, apClick;
        if (curNeed && !curOk) { apLabel = left > 1 ? 'Approve and go to next' : 'Approve personalization';
          apClick = () => this.setState(s => { const o2 = Object.assign({}, s.engSiteOk, { [sc]:true }), n2 = nextOf(sc, o2), d2 = Object.assign({}, s.engDec);
            ENG_INS.forEach(i => { if (!i.shared && !i.held && i.sites.indexOf(sc) >= 0 && !d2[i.id]) d2[i.id] = 'accepted'; });
            return { engSiteOk:o2, engSite:n2 || sc, engDec:d2 }; }); }
        else if (left === 0) { apLabel = 'Approve for distribution'; apClick = () => this.setState({ engConfirm:true, engEditId:null }); }
        else { apLabel = 'Next to approve: ' + nm(nx) + ' →'; apClick = () => this.setState({ engSite:nx }); }
        return { apCount:done + ' of ' + need.length + ' personalizations approved', apLeft: left ? left + ' left' : 'All done', apLeftFg: left ? '#8a5a06' : '#197a48',
          apBar:(need.length ? Math.round(done / need.length * 100) : 100) + '%', apLabel, apClick,
          apStatus: !curNeed ? 'This site gets the shared content only.' : curOk ? 'This site’s version is approved.' : left === 0 ? '' : 'Review this site’s version, then approve.' }; })(),
      site:sc, onSite:e => this.setState({ engSite:e.target.value }),
      siteOpts:DIA_SITES.map(r => { const n = ENG_INS.filter(i => !i.shared && !i.held && i.sites.indexOf(r[2]) >= 0).length; return { code:r[2], label:r[0].replace(/^Site \d+ \| /, '') + (n ? '  (' + n + ' personalized)' : '') }; }),
      quick:['NWU','ATL','LYO','CHA'].map(c => ({ label:P(c)[3], pick:() => this.setState({ engSite:c }), bd: sc === c ? '#004677' : '#e2e3e5', bg: sc === c ? '#004677' : '#fff', fg: sc === c ? '#fff' : '#3a3c40' })),
      mail, railItems, railEmpty:railItems.length === 0, checks,
      hlSw: hl ? '#004677' : '#d7d8da', hlKnob: hl ? '16px' : '2px', toggleHl:() => this.setState({ engHl:!hl }),
      confirmOpen:!!S.engConfirm, askApprove:() => this.setState({ engConfirm:true, engEditId:null }), cancelApprove:() => this.setState({ engConfirm:false }), stop:e => e.stopPropagation(),
      confirmStats:[{ v:'17', l:'Site versions' },{ v:String(incIns.length), l:'Personalized sections' },{ v:'1', l:'Held for medical review' }],
      confirmApprove:() => { const t = new Date().toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        this.setState({ engApproved:true, engApprovedAt:t, engConfirm:false, engEditId:null });
        this.addLog([{ time:'Just now', text:'You approved the November 2026 site newsletter: 17 personalized versions to 52 contacts, scheduled Nov 26 at 09:00 site local time', study:'DIA-2043', kind:'you' }]); },
      perf, perfOpen:!!this.state.engPerfOpen, perfChev:this.state.engPerfOpen ? 'rotate(90deg)' : 'none', perfHint:this.state.engPerfOpen ? 'Click a campaign for its results' : '5 campaigns since July | avg 84% accepted, +8 pts',
      togglePerf:() => this.setState(s => ({ engPerfOpen:!s.engPerfOpen })),
      ...this.engFilt(),
      campKpis:this.engFilt().kpis,
      campaigns:this.engFilt().campRows.map((c, j) => { const d = c[9] == null ? null : c[9] - c[10], nl = c[2] === 'Newsletter';
        return { title:c[1], type:c[2], tFg: nl ? '#003358' : '#55585d', tBg: nl ? '#e5ecf2' : '#f2f2f4', sent:c[3], aud:c[4], del:c[5],
          openR:c[6] + '%', openRC:'#8baac5', accR:c[7] + '%', accRC:'#004677', rep:String(c[8]),
          np: c[9] == null ? '—' : String(c[9]), npD: d == null ? '' : (d > 0 ? '+' : d < 0 ? '−' : '±') + Math.abs(d), npFg: d == null ? '#85888c' : d > 0 ? '#197a48' : d < 0 ? '#bd3226' : '#66696e',
          npS: c[9] == null ? 'Not a recruitment campaign' : (c[11] ? 'So far, day 28 of 30 | ' : '') + c[10] + ' in the 30 days before',
          bt: j ? '1px solid #f0f0f3' : 'none', go:() => go('perf', { engPerf:c[0] }) }; }) };
  }

  state = { ec:{ open:true }, budUp:null, budUploads:{}, budDrag:false, budView:'invoices', budInstr:BUD_INSTR, budEditing:false, budDraft:'', budRulesOff:{}, budForgot:{}, budScanning:false, budLastScan:'6:00 AM', budScanNote:'', budFilter:'all', budOpenSite:null, budBriefOpen:false, enrollView:'studies', agentInstr:AGENT_INSTR, agentEditing:false, agentDraft:'', rulesOff:{}, forgot:{}, scanning:false, lastScan:'6:04 AM', scanNote:'', primeThread:null, followText:'', primeView:'saved', archQ:'', archive:ARCHIVE_SEED, openStudy:null, connectFor:null, connUser:'', connPass:'', connErr:'', conn:Object.fromEntries(INTEGRATIONS.map(s => [s.id, s.on ? 'on' : 'off'])), syncAt:{}, primeQuery:'', primeSel:null, primeCustom:null, primePhase:'plan', primeStep:-1, sitesStudy:'DIA-2043', siteFilter:'all', openSite:null, tab:'prime', filter:'open', study:null, selectedId:null, status:{}, reasons:{}, edits:{}, editingId:null, rejectOpenId:null,
    ctxInput:{}, contexts:{}, revisions:{}, revising:{}, whyOpen:{},
    log:[
      { time:'6:04 AM', text:'Scanned 70 sites across 3 studies — raised 5 new proposals', study:'All', kind:'agent' },
      { time:'6:00 AM', text:'Budget agent matched 214 invoice lines from 13 sites — raised 4 proposals', study:'All', kind:'agent' },
      { time:'Yesterday', text:'Charité referrals below threshold for a 3rd week — raised to P1', study:'DIA-2043', kind:'agent' },
      { time:'Jul 10', text:'You approved: visit-window memo to Lyon Diabète', study:'DIA-2043', kind:'you' },
    ],
    askText:'', askQ:'', askAnswer:'', askLoading:false, askShown:false };

  who(id){ return (this.state.assignees || {})[id] || DEF_ASG[id] || TEAM[0].name; }
  engFilt(){ const S = this.state; const eStudy = S.sitesStudy || 'DIA-2043';
        const ago = c => Math.round((new Date('2026-10-27T12:00:00') - new Date(c[3])) / 864e5), per = c => ago(c) <= 30 ? 'd30' : ago(c) <= 90 ? 'd90' : 'old';
        const efl = [
          this.msF('ef', 'type', 'Type', [['Newsletter', 'Newsletter'], ['Protocol notice', 'Protocol notice']].map(x => ({ v:x[0], l:x[1] }))),
          this.msF('ef', 'per', 'Sent', [['d30', 'Last 30 days'], ['d90', '1–3 months ago'], ['old', 'Older']].map(x => ({ v:x[0], l:x[1] }))),
          this.msF('ef', 'rec', 'Purpose', [['rec', 'Recruitment'], ['info', 'Information only']].map(x => ({ v:x[0], l:x[1] }))),
        ];
        const fT = efl[0].sel, fP = efl[1].sel, fR = efl[2].sel, eAny = !!(fT.length || fP.length || fR.length);
        const rows = ENG_CAMPS.filter(c => eStudy === 'DIA-2043' && (!fT.length || fT.includes(c[2])) && (!fP.length || fP.includes(per(c))) && (!fR.length || fR.includes(c[9] == null ? 'info' : 'rec')));
        const avg = k => rows.length ? Math.round(rows.reduce((a, c) => a + c[k], 0) / rows.length) + '%' : '—';
        const rec = rows.filter(c => c[9] != null);
        const mk = c => { const d = new Date(c[3]); return d.getFullYear() * 12 + d.getMonth(); }, last = rows.length ? Math.max(...rows.map(mk)) : 0;
        const cur = rows.filter(c => mk(c) === last), prv = rows.filter(c => mk(c) === last - 1);
        const av = (l, k) => l.length ? l.reduce((a, c) => a + c[k], 0) / l.length : null, sm = l => l.filter(c => c[9] != null).reduce((a, c) => a + c[9], 0);
        const chg = (d, u) => d == null ? ['No campaigns last month', '#85888c'] : [(d > 0 ? '+' : d < 0 ? '−' : '±') + Math.abs(Math.round(d)) + u + ' vs last month', d > 0 ? '#197a48' : d < 0 ? '#bd3226' : '#66696e'];
        const hasP = prv.length > 0, pct = v => v == null ? '—' : Math.round(v) + '%';
        const kpis = [
          ['Campaigns sent', String(rows.length), chg(hasP ? cur.length - prv.length : null, '')],
          ['Open rate', pct(av(rows, 6)), chg(hasP ? av(cur, 6) - av(prv, 6) : null, ' pts')],
          ['Acknowledged rate', pct(av(rows, 7)), chg(hasP ? av(cur, 7) - av(prv, 7) : null, ' pts')],
          ['New patients at 30 days', rec.length ? String(sm(rows)) : '—', chg(hasP && cur.some(c => c[9] != null) && prv.some(c => c[9] != null) ? sm(cur) - sm(prv) : null, '')],
        ].map((k, j) => ({ l:k[0], v:k[1], s:rows.length ? k[2][0] : 'No campaigns match', sFg:k[2][1], bl: j ? '1px solid #f0f0f3' : 'none' }));
        const npAvg = rec.length ? (Math.round(rec.reduce((a, c) => a + c[9], 0) / rec.length * 10) / 10).toString() : '—';
        const npSub = rec.length ? 'Average of ' + rec.length + ' recruitment campaign' + (rec.length > 1 ? 's' : '') : 'No recruitment campaigns in filter';
        const kp = !eAny && eStudy === 'DIA-2043' ? null : [['Campaigns sent', String(rows.length), '', rows.length ? 'Matching filters' : 'None match'], ['Avg open rate', avg(6), '', ''], ['Avg accepted', avg(7), '', ''], ['Avg new patients at 30 days', npAvg, '', npSub]];
        return { efl, eadd:this.addF('ef', efl), efAny:eAny || (S.efAdd || []).length > 0, efClear:() => this.setState({ ef:{}, efAdd:[], pfOpen:null }), campRows:rows, campKp:kp, npAvg, npSub, kpis, campEmpty:!rows.length,
          campNote: rows.length ? rows.length + ' campaign' + (rows.length > 1 ? 's' : '') + (eAny ? ' match' : ' sent since July') + ' | click one for its results' : (eStudy === 'DIA-2043' ? 'No campaigns match these filters' : 'No campaigns sent for ' + eStudy + ' yet') }; }
  addF(store, list){ const S = this.state, ak = store + 'Add', added = S[ak] || [], chips = list.filter(f => added.includes(f.key) || f.sel.length);
    const addOpts = list.filter(f => !chips.includes(f)).map(f => ({ label:f.name, pick:() => this.setState(s => ({ [ak]:(s[ak] || []).concat(f.key), pfOpen:store + ':' + f.key })) }));
    return { chips, addOpts, canAdd:addOpts.length > 0, addOpen:S.pfOpen === store + ':+', toggleAdd:() => this.setState({ pfOpen: S.pfOpen === store + ':+' ? null : store + ':+' }), closeAdd:() => this.setState({ pfOpen:null }), anyAdded:added.length > 0 }; }
  msF(store, key, label, opts){ const S = this.state, sel = (S[store] || {})[key] || [], on = sel.length > 0, ok = store + ':' + key, open = S.pfOpen === ok, one = sel.length === 1 ? (opts.find(o => o.v === sel[0]) || {}).l : null;
    const set = v => this.setState(s => ({ [store]:Object.assign({}, s[store] || {}, { [key]:v }) }));
    return { key, name:label, label:label + ': ' + (!on ? 'Any' : one || sel.length + ' selected'), sel, open, toggle:() => this.setState({ pfOpen: open ? null : ok }), close:() => this.setState({ pfOpen:null }),
      remove:() => this.setState(s => ({ [store]:Object.assign({}, s[store] || {}, { [key]:[] }), [store + 'Add']:(s[store + 'Add'] || []).filter(k => k !== key), pfOpen:null })),
      bg: on ? '#e5ecf2' : '#fff', bd: on ? '#cddae5' : '#e2e3e5', fg: on ? '#003358' : '#3a3c40',
      all:() => set([]), allBg: on ? '#fff' : '#004677', allBd: on ? '#c9cbce' : '#004677', allCk: on ? 'transparent' : '#fff',
      items:opts.map(o => { const c = sel.includes(o.v); return { name:o.l, code:o.c || '', bg: c ? '#004677' : '#fff', bd: c ? '#004677' : '#c9cbce', ck: c ? '#fff' : 'transparent', toggle:() => set(c ? sel.filter(x => x !== o.v) : sel.concat(o.v)) }; }) }; }
  teamView(items){
    const S = this.state, TGT = { P1:2, P2:5, P3:10 }, asg = S.assignees || {}, sort = S.tvSort || 'delay', opn = S.tvOpen || {};
    const live = items.filter(i => this.group(i.st) === 'progress').map(i => ({ who:this.who(i.id), pri:i.raw.pri, study:i.raw.study, title:i.title, res:null, age:0, wait:'In progress', live:i }));
    const tvSt = S.tvStudy ?? 'DIA-2043';
    const stOf = t => t.res != null ? 'done' : t.age > TGT[t.pri] ? 'over' : 'open';
    const tfl = [
      this.msF('tf', 'who', 'Assignee', TEAM.map(m => ({ v:m.name, l:m.name }))),
      this.msF('tf', 'pri', 'Priority', ['P1', 'P2', 'P3'].map(v => ({ v, l:v }))),
      this.msF('tf', 'st', 'Status', [['open', 'Open'], ['over', 'Overdue'], ['done', 'Resolved']].map(x => ({ v:x[0], l:x[1] }))),
    ];
    const fWho = tfl[0].sel, fPri = tfl[1].sel, fSt = tfl[2].sel;
    const all = TEAM_TASKS.concat(live).filter(t => (!tvSt || t.study === tvSt) && (!fPri.length || fPri.includes(t.pri)) && (!fSt.length || fSt.includes(stOf(t))));
    const d = v => { const r = Math.round(v * 10) / 10; return r + (r === 1 ? ' day' : ' days'); };
    const dl = v => v == null ? ['—','#85888c','transparent'] : Math.abs(v) < 0.25 ? ['On target','#55585d','#f2f2f4'] : v > 0 ? ['+' + d(v) + ' late','#bd3226','#fcecea'] : [d(-v) + ' early','#197a48','#e7f6ee'];
    const calc = ts => { const done = ts.filter(t => t.res != null), op = ts.filter(t => t.res == null), n = done.length;
      const avgRes = n ? done.reduce((a, t) => a + t.res, 0) / n : null, avgDel = n ? done.reduce((a, t) => a + t.res - TGT[t.pri], 0) / n : null;
      const onT = n ? Math.round(done.filter(t => t.res <= TGT[t.pri]).length / n * 100) : null, over = op.filter(t => t.age > TGT[t.pri]).length, x = dl(avgDel);
      return { done, op, avgRes, avgDel, onT, nOpen:op.length, nOver:over, overFg: over ? '#bd3226' : '#a7a9ac', nDone:n, res: avgRes == null ? '—' : d(avgRes), delay:x[0], delFg:x[1], delBg:x[2],
        onTime: onT == null ? '—' : onT + '%', onW:(onT || 0) + '%', onC: onT >= 80 ? '#197a48' : onT >= 60 ? '#b0730a' : '#bd3226' }; };
    const tk = t => { const tg = TGT[t.pri], done = t.res != null, v = done ? t.res - tg : t.age - tg;
      const x = done ? dl(v) : v > 0 ? [d(v) + ' overdue','#bd3226','#fcecea'] : v === 0 ? ['Due today','#b0730a','#fdf3e0'] : [d(-v) + ' left','#003358','#e5ecf2'];
      return { pri:t.pri, priFg:PRI[t.pri][0], priBg:PRI[t.pri][1], study:t.study, title:t.title, status: done ? 'Done' : t.wait, stFg: done ? '#197a48' : t.wait.indexOf('Waiting') === 0 ? '#b0730a' : '#003358',
        time: done ? 'Resolved in ' + d(t.res) : 'Open ' + d(t.age), target:'Target ' + d(tg), delay:x[0], delFg:x[1], delBg:x[2], cursor: t.live ? 'pointer' : 'default',
        go: t.live ? () => this.setState({ scope:'all', filter:'progress', study:null, selectedId:t.live.id, stickyId:null }) : undefined }; };
    const key = { delay:s => s.avgDel == null ? -99 : s.avgDel, res:s => s.avgRes == null ? -99 : s.avgRes, open:s => s.nOpen };
    const stats = TEAM.filter(m => !fWho.length || fWho.includes(m.name)).map(m => Object.assign({ m }, calc(all.filter(t => t.who === m.name))));
    stats.sort((a, b) => sort === 'name' ? a.m.name.localeCompare(b.m.name) : key[sort](b) - key[sort](a));
    const sc = S.scope || 'all', vw = (k, l) => ({ label:l, onClick:() => this.setState({ scope:k, selectedId:null, stickyId:null }), bg: sc === k ? '#eeeff0' : 'transparent', fg: sc === k ? '#0a0a0a' : '#66696e' });
    return { views:[vw('mine', 'Mine'), vw('all', 'Everyone')], isList:sc !== 'overview', isTeam:sc === 'overview',
      sort, onSort:e => this.setState({ tvSort:e.target.value }), sorts:[{ k:'delay', l:'Most delayed' }, { k:'res', l:'Slowest resolution' }, { k:'open', l:'Most open tasks' }, { k:'name', l:'Name' }],
      imp:(() => { const k = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(1) + 'M' : '$' + Math.round(v / 1e3) + 'k';
        const its = items.filter(i => (!tvSt || i.study === tvSt) && (!fPri.length || fPri.includes(i.raw.pri)) && (!fWho.length || fWho.includes(this.who(i.id))));
        const pend = its.filter(i => i.st === 'open'), prog = its.filter(i => i.st === 'approved' || i.st === 'auto' || i.st === 'sending');
        const sum = l => l.reduce((a, i) => a + (i.days > 0 ? costImpactOf(i) : 0), 0);
        const byStudy = l => { const m = {}; l.forEach(i => { if (i.days > 0) m[i.study] = (m[i.study] || 0) + i.days; }); return Object.keys(m).sort((a, b) => m[b] - m[a]).map(s => [s, m[s]]); };
        const ps = byStudy(pend), gs = byStudy(prog), pl = n => n + (n === 1 ? ' action' : ' actions');
        return { tiles:[
          ['Cost impact estimate', pend.some(i => i.days > 0) ? '≈ ' + k(sum(pend)) : '—', 'Based on protocol design'],
          ['Timeline impact estimate', ps.length ? '−' + ps[0][1] + ' days' : '—', ps.length ? ps.map(x => x[0] + ' −' + x[1] + 'd').join(' | ') : 'No change to completion dates'],
        ].map((t, j) => ({ l:t[0], v:t[1], s:t[2], bl: j ? '1px solid #f0f0f3' : 'none' })),
          note:'Earlier last-patient-in per study | protocol-based estimates' }; })(),
      tot:calc(all), tfl, tadd:this.addF('tf', tfl), tfAny: !!(fWho.length || fPri.length || fSt.length || (S.tfAdd || []).length), tfClear:() => this.setState({ tf:{}, tfAdd:[], pfOpen:null }),
      studyId:tvSt, studyOpts:[{ id:'', label:'All studies' }].concat(STUDIES.map(s => ({ id:s.id, label:s.id + ' | ' + s.name }))), onStudy:e => this.setState({ tvStudy:e.target.value }),
      rows:stats.map((s, j) => Object.assign({}, s, { name:s.m.name, role:s.m.role, ini:s.m.name.replace(/\./g, '').split(' ').map(w => w[0]).join('').slice(0, 2),
        open:!!opn[s.m.name], chev: opn[s.m.name] ? 'rotate(90deg)' : 'none', border: j ? '1px solid #f0f0f3' : 'none',
        toggle:() => this.setState(st => ({ tvOpen:Object.assign({}, st.tvOpen, { [s.m.name]:!(st.tvOpen || {})[s.m.name] }) })),
        tasks:s.op.sort((a, b) => (b.age - TGT[b.pri]) - (a.age - TGT[a.pri])).concat(s.done).map(tk) })) };
  }
  eff(it, auto){ const s = this.state.status[it.id]; if (s) return s; if (it.seed) return it.seed; if (auto && it.lowRisk) return 'auto'; return 'open'; }
  group(st){ return st === 'open' ? 'open' : (st === 'rejected' || st === 'closed') ? 'closed' : 'progress'; }
  addLog(entries){ this.setState(s => ({ log: entries.concat(s.log) })); }
  setStatus(id, v){ this.setState(s => ({ status: Object.assign({}, s.status, { [id]: v }) })); }
  itemView(it){ const r = this.state.revisions[it.id]; return r ? Object.assign({}, it, { title:r.title || it.title, why:r.why || it.why, conf:r.confidence || it.conf, revNote:r.note, revised:true }) : it; }

  approve(it){ return () => {
    this.setState(s => ({ status:Object.assign({}, s.status, { [it.id]:'sending' }), stickyId:it.id, selectedId:it.id }));
    setTimeout(() => {
      this.setStatus(it.id, 'approved');
      this.addLog([{ time:'Just now', text:it.followUp, study:it.study, kind:'agent' }, { time:'Just now', text:'You approved: ' + this.itemView(it).title, study:it.study, kind:'you' }]);
    }, 1100);
  }; }
  reject(it, reason){ return () => {
    this.setState(s => ({ status:Object.assign({}, s.status, { [it.id]:'rejected' }), reasons:Object.assign({}, s.reasons, { [it.id]:reason }), rejectOpenId:null, stickyId:it.id, selectedId:it.id }));
    this.addLog([{ time:'Just now', text:'You dismissed: ' + this.itemView(it).title + ' (' + reason.toLowerCase() + ')', study:it.study, kind:'you' }]);
  }; }
  sendCtx(it){ return async () => {
    const text = (this.state.ctxInput[it.id] || '').trim();
    if (!text || this.state.revising[it.id]) return;
    const v = this.itemView(it);
    this.setState(s => ({ revising:Object.assign({}, s.revising, { [it.id]:true }), ctxInput:Object.assign({}, s.ctxInput, { [it.id]:'' }), contexts:Object.assign({}, s.contexts, { [it.id]:(s.contexts[it.id] || []).concat(text) }), whyOpen:Object.assign({}, s.whyOpen, { [it.id]:true }) }));
    let rev;
    try {
      const prompt = 'You are a clinical-trial enrollment agent. You proposed: "' + v.title + '". Observation: ' + it.observed + ' Diagnosis: ' + v.why + ' The sponsor just added context you could not see: "' + text + '". Revise the proposal. Reply with STRICT JSON only: {"title":"revised proposed action, imperative, under 90 chars","why":"revised one-sentence diagnosis","confidence":"High|Medium|Low","note":"one short sentence on what changed"}';
      const raw = await complete({ messages:[{ role:'user', content:prompt }] });
      rev = JSON.parse((raw || '').trim().replace(/^```json|```$/g, ''));
      if (!rev.title) throw new Error('shape');
    } catch (e) {
      rev = { title:v.title, why:'Noted: "' + text + '". The plan is unchanged; review it with this in mind before approving.', confidence:'Low', note:'Couldn\'t reach the reasoning model — plan kept, confidence lowered.' };
    }
    this.setState(s => ({ revisions:Object.assign({}, s.revisions, { [it.id]:rev }), revising:Object.assign({}, s.revising, { [it.id]:false }) }));
    this.addLog([{ time:'Just now', text:'Revised "' + rev.title + '" with your context', study:it.study, kind:'agent' }]);
  }; }
  setConn(id, v){ this.setState(s => ({ conn:Object.assign({}, s.conn, { [id]:v }) })); }
  connectSys(s){ return () => {
    this.setConn(s.id, 'connecting');
    setTimeout(() => {
      this.setState(st => ({ conn:Object.assign({}, st.conn, { [s.id]:'on' }), syncAt:Object.assign({}, st.syncAt, { [s.id]:'Just now' }) }));
      this.addLog([{ time:'Just now', text:'You connected ' + s.name + ' (' + s.vendor + ') — read-only access', study:'All', kind:'you' }]);
    }, 1300);
  }; }
  disconnectSys(s){ return () => {
    this.setConn(s.id, 'off');
    this.addLog([{ time:'Just now', text:'You disconnected ' + s.name + ' (' + s.vendor + ')', study:'All', kind:'you' }]);
  }; }
  primeAction(){ const sel = this.state.primeSel; if (sel === 'custom') return this.state.primeCustom; if (sel && sel.indexOf('hist:') === 0) return this.state.archive.find(a => 'hist:' + a.id === sel); return PRIME.find(a => a.id === sel); }
  primeFilter(){ const q = this.state.primeQuery.trim().toLowerCase(); return q ? PRIME.filter(a => (a.title + ' ' + a.desc + ' ' + a.systems.join(' ')).toLowerCase().includes(q)) : PRIME; }
  primeBack = () => { clearTimeout(this.primeTimer); this.setState({ primeSel:null, primePhase:'plan', primeStep:-1, primeCustom:null, primeThread:null, followText:'' }); };
  patchTurn(tid, idx, patch){ this.setState(s => ({ archive:s.archive.map(a => a.id !== tid ? a : Object.assign({}, a, { turns:(a.turns || []).map((t, j) => j === idx ? Object.assign({}, t, patch) : t) })) })); }
  sendFollow = async () => {
    const text = this.state.followText.trim(), tid = this.state.primeThread;
    const entry = this.state.archive.find(a => a.id === tid);
    if (!text || !entry) return;
    const idx = (entry.turns || []).length;
    this.setState(s => ({ followText:'', archive:s.archive.map(a => a.id !== tid ? a : Object.assign({}, a, { turns:(a.turns || []).concat({ q:text, loading:true }) })) }));
    if (/brief/i.test(text)) {
      const briefs = makeBriefs(text), n = briefs.length;
      setTimeout(() => this.patchTurn(tid, idx, { loading:false, label:'TEXT TO BE STORED IN CTMS', summary:n + ' brief' + (n === 1 ? '' : 's') + ' drafted. This text will be stored in CTMS as a site note once you approve.', briefs, needsApproval:true }), 900);
      return;
    }
    let p;
    try {
      const r = entry.result || {};
      const prev = (entry.turns || []).map(t => 'User: ' + t.q + '\nAgent: ' + (t.summary || '')).join('\n');
      const raw = await complete({ messages:[{ role:'user', content:'You are Prime, an AI agent in a clinical trial operations platform (CTMS, EDC, eTMF, eIRB) for study DIA-2043 (Type 2 diabetes, 17 sites incl. Northwestern Endocrine, Charité Diabetes Ctr, Barcelona Metabolic, Houston Metro Research, Lyon Diabète Clinique). Earlier task: "' + entry.title + '". Result: ' + (r.summary || '') + (r.rows && r.rows.length ? ' Table: ' + JSON.stringify(r.rows.slice(0, 12)) : '') + (prev ? '\nConversation so far:\n' + prev : '') + '\nFollow-up from the user: "' + text + '". Reply with STRICT JSON only: {"summary":"2-3 plain sentences answering the follow-up","table":null or {"cols":["3-4 SHORT UPPERCASE HEADERS"],"rows":[["cell","cell","cell"]]}}. Include a table only when listing items.' }] });
      p = JSON.parse((raw || '').trim().replace(/^```json|```$/g, ''));
      if (!p.summary) throw new Error('shape');
    } catch (e) { p = { summary:'Couldn\'t reach the reasoning model just now. Try again in a moment.' }; }
    this.patchTurn(tid, idx, { loading:false, summary:p.summary, cols:(p.table && p.table.cols) || [], rows:((p.table && p.table.rows) || []).map(r => r.map(c => c == null ? '' : String(c))) });
  };
  approveTurn(tid, idx, t){ return () => {
    this.patchTurn(tid, idx, { needsApproval:false, saving:true });
    setTimeout(() => { this.patchTurn(tid, idx, { saving:false, saved:true, label:'STORED IN CTMS' });
      this.addLog([{ time:'Just now', text:'Prime: stored ' + t.briefs.length + ' meeting brief' + (t.briefs.length === 1 ? '' : 's') + ' in CTMS', study:'DIA-2043', kind:'agent' }, { time:'Just now', text:'You approved: save briefs to CTMS', study:'DIA-2043', kind:'you' }]); }, 1000);
  }; }
  engChatVals(spinner){
    const S = this.state, c = S.ec || {}, site = S.tab === 'bySite' && S.bsView === 'site', pk = S.tab === 'bySite' ? 'bySiteList' : S.tab, PG = !site && S.tab !== 'eng' ? (PAGE_CHAT[pk] || PAGE_CHAT.prime) : null;
    const ctx = site ? this.bsVals().chatCtx : null, TASKS = site ? siteChat(ctx).filter(t => t.id !== 'blockers') : PG ? PG.tasks : ENG_CHAT, ckey = ctx ? ctx.key : PG ? 'pg:' + pk : 'eng';
    const T = c.key === ckey ? TASKS.find(t => t.id === c.task) : null;
    const set = p => this.setState(s => ({ ec:Object.assign({}, s.ec || {}, p) }));
    const start = (id, q) => { clearTimeout(this.ecT); const t = TASKS.find(x => x.id === id);
      this.setState({ ec:{ open:true, key:ckey, task:id, ask:q || t.ask, stage:'read' }, ecText:'' });
      this.ecT = setTimeout(() => set({ stage:'plan' }), 1000); };
    const refine = q => { if (!T || c.stage !== 'plan' || c.refine || c.done) return; clearTimeout(this.ecT);
      set({ refine:q || T.follow, stage:'refining' }); this.setState({ ecText:'' }); this.ecT = setTimeout(() => set({ stage:'refined' }), 1000); };
    const send = () => { const q = (S.ecText || '').trim(); if (!q) return; if (!T) start((TASKS.find(t => t.kw ? t.kw.test(q) : q.toLowerCase().indexOf(t.id) >= 0) || TASKS[0]).id, q); else refine(q); };
    const P = T ? (c.stage === 'refined' ? T.p2 : T.p1) : null;
    const planned = !!T && ['plan','refining','refined'].indexOf(c.stage) >= 0;
    const out = T ? T.out || 'cal' : 'cal', refd = c.stage === 'refined', stu = ctx ? ctx.study : 'DIA-2043';
    const approve = () => { if (!T || c.done) return; set({ done:'approved' });
      if (out === 'cal') this.setState(s => ({ engChatAdded:(s.engChatAdded || []).concat([['', P.title, P.date, 'scheduled', 'Approved in chat with Prime']]) }));
      if (out === 'brief') this.setState(s => ({ siteBriefs:Object.assign({}, s.siteBriefs, { [ckey]:T.make(refd) }) }));
      if (out === 'blockers') this.setState(s => ({ siteBlockers:Object.assign({}, s.siteBlockers, { [ckey]:T.make(refd) }) }));
      if (out === 'actions') { T.make(refd).reverse().forEach(it => ITEMS.unshift(it)); this.forceUpdate(); }
      this.addLog([{ time:'Just now', text:'You approved via Prime: ' + P.title, study:stu, kind:'you' }]); };
    const goResult = () => { if (out === 'nav') { this.setState(s => Object.assign({}, T.to, { ec:Object.assign({}, s.ec, { open:false }) })); return; } if (out === 'brief') this.setState({ bsSec:'ov' }); else if (out === 'blockers') this.setState({ bsSec:'rec' });
      else if (out === 'actions') this.setState(s => ({ tab:'inbox', filter:'open', study:null, selectedId:null, ec:Object.assign({}, s.ec, { open:false }) }));
      else this.setState(s => ({ tab:'eng', engView:'dash', ec:Object.assign({}, s.ec, { open:false }) })); };
    return { open:!!c.open && S.tab !== 'primeTab', toggle:() => set({ open:!c.open }), close:() => set({ open:false }),
      newChat:() => { clearTimeout(this.ecT); this.setState({ ec:{ open:true }, ecText:'' }); },
      isEmpty:!T, hasTask:!!T, introT:site ? 'What should Prime do for ' + ctx.name + '?' : PG ? PG.introT : 'What should Prime send to your sites?', introS:site ? 'Prime reads CTMS, EDC, site emails and open issues for this site, then drafts the output for you to approve.' : 'Prime reads CTMS, EDC and site emails, then drafts a campaign for you to approve. Nothing sends until you approve.', ctxLabel:site ? 'Prime | ' + ctx.name : PG ? 'Prime | ' + PG.label : 'Prime | Site engagement', planner:site ? 'Site planner' : PG ? 'Plan' : 'Campaign planner', sugg:TASKS.map(t => ({ label:t.ask, sub:t.sub, pick:() => start(t.id) })),
      ask:c.ask || '', reading:c.stage === 'read', readDone:!!T && c.stage !== 'read', spin:spinner(12,'#004677'), read:T ? T.read : '',
      planned, msg:T ? T.msg : '', hasRefine:!!c.refine, refineText:c.refine || '', refining:c.stage === 'refining', refined:c.stage === 'refined',
      showCard:planned && c.stage !== 'refining', cardTitle:P ? P.title : '', rows:P ? P.rows.map((r, j) => ({ k:r[0], v:r[1], bg: j % 2 ? 'transparent' : '#f5f6f7' })) : [],
      pending:!c.done, approved:c.done === 'approved', cancelled:c.done === 'cancelled', approve, cancel:() => set({ done:'cancelled' }),
      approvedText:P ? (T.done || 'Added to the calendar for ' + P.date) + ' | logged to the Audit Trail' : '', cardHead:T ? T.head || 'Add to your calendar' : '', resultLink:T ? (T.link || 'View calendar') + ' →' : '', goResult, note: out === 'cal' || out === 'actions' ? 'Nothing sends until you approve.' : 'Nothing is saved until you approve.',
      hasChip:planned && c.stage === 'plan' && !c.refine && !c.done, chip:T ? T.follow : '', useChip:() => refine(),
      text:S.ecText || '', onText:e => this.setState({ ecText:e.target.value }), onKey:e => { if (e.key === 'Enter') send(); }, send,
      placeholder:T ? 'Refine the plan with Prime…' : site ? 'Ask Prime about this site…' : PG ? PG.ph : 'Ask Prime about site engagement…' };
  }
  primeOpen(id){ clearTimeout(this.primeTimer); this.setState({ primeSel:id, primePhase:'plan', primeStep:-1, primeThread:null }); }
  primeRunFrom(i){
    this.setState({ primePhase:'running', primeStep:i });
    this.primeTimer = setTimeout(() => {
      const a = this.primeAction(); if (!a) return;
      if (i + 1 >= a.steps.length) {
        const now = new Date(), tm = now.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        const entry = { id:'r' + now.getTime(), time:'Today | ' + tm, title:a.title, desc:a.desc, systems:a.systems, mode:a.mode, note:a.note, steps:a.steps, preview:a.preview,
          confirmText:a.confirmText, writeVerb:a.writeVerb, doneLog:a.doneLog, study:a.study,
          result:Object.assign({}, a.result || {}, { rows:(a.result && a.result.rows) || (a.preview && a.preview.rows) || [], cols:(a.result && a.result.cols) || (a.preview && a.preview.cols) || [] }) };
        this.setState(s => ({ primePhase:'done', primeStep:a.steps.length, primeThread:entry.id, archive:[entry].concat(s.archive) }));
        this.addLog([{ time:'Just now', text:'Prime: ' + (a.doneLog || a.title), study:a.study || 'All', kind:'agent' }, { time:'Just now', text:'You approved: ' + a.title, study:a.study || 'All', kind:'you' }]);
      } else if (a.steps[i + 1].write) this.setState({ primePhase:'confirm', primeStep:i + 1 });
      else this.primeRunFrom(i + 1);
    }, 850);
  }
  primeSubmit = async () => {
    const q = this.state.primeQuery.trim(); if (!q) return;
    if (/brief/i.test(q)) { this.setState({ primeQuery:'', primeSel:'custom', primeCustom:briefPlan(q, makeBriefs(q)), primePhase:'plan', primeStep:-1, primeThread:null }); return; }
    const wantsChart = /report|chart|graph|trend|breakdown|over time|by month|by week|compare/i.test(q);
    const wantsTable = wantsChart || /\b(list|show|which|table|all)\b|by site/i.test(q);
    const base = { title:q, desc:'Plan drafted by the agent from your request.', systems:[], mode:'Read-only', steps:[], loading:true };
    this.setState({ primeSel:'custom', primeCustom:base, primePhase:'plan', primeStep:-1 });
    let p;
    try {
      const raw = await complete({ messages:[{ role:'user', content:'You are an AI agent in a clinical trial operations platform connected to CTMS, EDC, eTMF, Finance and Email for study DIA-2043 (Type 2 diabetes, 17 sites). The user asked: "' + q + '". Draft an execution plan. Reply with STRICT JSON only: {"title":"imperative task title under 70 chars","systems":["CTMS"],"steps":[{"l":"short step label","d":"short concrete detail","write":false}],"summary":"one sentence stating the concrete result, with plausible specific numbers","note":"under 8 words on what will not be changed"' + (wantsChart ? ',"chart":{"type":"bar or line (line only for a time series)","title":"short chart title","unit":"unit label e.g. participants","labels":["4-8 short category or period labels"],"values":[numbers, same length as labels]}' : '') + (wantsTable ? ',"table":{"cols":["3-4 short UPPERCASE column headers"],"rows":[["cell","cell","cell"]]}' : '') + '}. 3-5 steps. Mark write:true only for a step that changes data in a system, and put it last.' + (wantsChart ? ' The user asked for a report: the chart is required.' : '') + (wantsTable ? ' A table is required: one row per item listed (up to 12 rows, use realistic DIA-2043 site names such as Northwestern Endocrine, Charité Diabetes Ctr, Barcelona Metabolic, Houston Metro Research, Lyon Diabète Clinique), consistent with the summary.' : '') }] });
      p = JSON.parse((raw || '').trim().replace(/^```json|```$/g, ''));
      if (!Array.isArray(p.steps) || !p.steps.length) throw new Error('shape');
    } catch (e) {
      p = { title:q, systems:['CTMS','EDC'], steps:[{ l:'Interpret request', d:'Map the task to connected systems' }, { l:'Query connected systems', d:'CTMS and EDC | read scope' }, { l:'Compile results', d:'Summarize findings for review' }], summary:'Couldn\'t reach the reasoning model — no data was retrieved. Try again in a moment.', note:'Read-only' };
    }
    const hasWrite = p.steps.some(s => s.write);
    this.setState({ primeCustom:{ title:p.title || q, desc:'Plan drafted by the agent from: “' + q + '”', systems:p.systems || [], mode: hasWrite ? 'Writes data' : 'Read-only', note:p.note || 'Read-only', steps:p.steps, doneLog:p.title || q,
      writeVerb:'Approve & apply', confirmText:'Ready for the final step. Approve to apply the change.', result:{ summary:p.summary, chart:(p.chart && Array.isArray(p.chart.values) && p.chart.values.length) ? p.chart : null, cols:(p.table && p.table.cols) || [], rows:((p.table && p.table.rows) || []).map(r => r.map(c => c == null ? '' : String(c))) } } });
  };
  studioLocal(it, fmtK, aud, len) {
    const words = (s, n) => { const w = String(s || '').replace(/\s+/g, ' ').trim().split(' '); return w.length > n ? w.slice(0, n).join(' ') + '…' : w.join(' '); };
    const body = String(it.body || ''), bl = body.split('\n').map(x => x.trim()).filter(x => /^[•\-–]/.test(x)).map(x => x.replace(/^[•\-–]\s*/, ''));
    const sents = body.split('\n').filter(x => x.trim() && !/^(hi|dear|thanks|best|albert|marie)/i.test(x.trim()) && !/^[•\-–]/.test(x.trim())).join(' ').split(/(?<=[.?!])\s+/).filter(x => x.length > 20);
    const asks = (bl.length ? bl : sents.slice(0, 3)).slice(0, 4);
    const c = costOf(it.study, it.days), stat = it.days ? '−' + it.days + ' days' : (it.moneyTxt || it.impact), statLabel = it.days ? 'earlier completion' : it.impact;
    if (fmtK === 'slides') {
      const all = [
        { title:it.title, bullets:['For ' + aud.toLowerCase(), it.study + ' | ' + ((STUDIES.find(s => s.id === it.study) || {}).name || '')] },
        { title:'What we’re seeing', bullets:[it.observed] },
        { title:'What we’re asking', bullets:asks.length ? asks : [it.title] },
        { title:'Why it matters', bullets:[it.why] },
        { title:'Expected impact', bullets:[it.impact], stat, statLabel },
        { title:'Next steps', bullets:[it.followUp] },
        { title:'Questions?', bullets:['Marie Curious, Clinical Operations', 'Reply to this email or book a call with your CRA'] }];
      if (len <= 1) return { title:it.subject || it.title, slides:[{ title:it.title, bullets:(asks.length ? asks : [it.observed]).slice(0, 3), stat, statLabel }] };
      const pick = len <= 3 ? [0, 2, 4] : len <= 5 ? [0, 1, 2, 3, 4] : [0, 1, 2, 3, 4, 5, 6];
      return { title:it.subject || it.title, slides:pick.map(i => all[i]) };
    }
    const raw = [
      { w:1, headline:words(it.title, 9), voiceover:'A quick update on ' + it.study + ' for ' + aud.toLowerCase() + '.' },
      { w:1.4, headline:words(it.observed, 9), voiceover:it.observed },
      ...asks.slice(0, 3).map(a => ({ w:1.2, headline:words(a, 8), voiceover:a })),
      { w:1.2, headline:words(it.why, 9), voiceover:it.why },
      { w:1, headline: it.days ? stat + ' to completion' : stat, voiceover: it.days ? 'If we act now, we expect ' + it.impact.toLowerCase() + ', about ' + it.days + ' days sooner.' : 'If we act now: ' + it.impact.toLowerCase() + '.' },
      { w:0.8, headline:'Reply to Marie this week', voiceover:'Questions? Reply to the email and we’ll set up a call.' }];
    if (len <= 15) return { title:it.subject || it.title, scenes:[
      { headline:words(it.title, 9), voiceover:'A quick update on ' + it.study + ' for ' + aud.toLowerCase() + '.', secs:4 },
      { headline:words(asks[0] || it.observed, 9), voiceover:asks[0] || it.observed, secs:6 },
      { headline:stat + ' to completion', voiceover:'Reply to Marie this week with any questions.', secs:5 }] };
    const tw = raw.reduce((a, s) => a + s.w, 0);
    let scenes = raw.map(s => ({ headline:s.headline, voiceover:s.voiceover, secs:Math.max(3, Math.round(s.w / tw * len)) }));
    const diff = len - scenes.reduce((a, s) => a + s.secs, 0); scenes[1].secs = Math.max(3, scenes[1].secs + diff);
    return { title:it.subject || it.title, scenes };
  }
  studioGenerate = async () => {
    const S = this.state; if (S.stLoading) return;
    clearInterval(this._stTimer);
    const it = ITEMS.find(i => i.id === S.stDraftId) || ITEMS.find(i => i.type === 'email'); if (!it) return;
    const fmtK = S.stFormat || 'video', aud = S.stAud || 'Site coordinators', len = S.stLen || (fmtK === 'video' ? 30 : 5);
    this.setState({ stLoading:true, stOut:null, stPlay:false, stT:0, stSlide:0 });
    let out;
    try {
      const spec = fmtK === 'video'
        ? '{"title":"...","scenes":[{"secs":<integer>,"headline":"on-screen text, max 9 words","voiceover":"1-2 short spoken sentences"}]} with ' + (len <= 15 ? '3' : '5-7') + ' scenes whose secs sum to ' + len
        : '{"title":"...","slides":[{"title":"max 8 words","bullets":["max 16 words each, 1-4 bullets"],"stat":"optional short figure e.g. −14 days","statLabel":"optional, what the figure means"}]} with exactly ' + len + (len === 1 ? ' slide: a single one-page summary with the key ask and the impact figure as stat' : ' slides; the first is a title slide');
      const raw = await complete({ messages:[{ role:'user', content:'You are Prime, an AI agent for clinical-trial operations. Create a ' + (fmtK === 'video' ? len + '-second explainer video script' : len + (len === 1 ? '-slide summary' : '-slide deck')) + ' to send with this email, for ' + aud + '. Use plain, factual language; no hype; do not invent figures beyond those given.' + (aud === 'Patients' ? ' Write for patients: no jargon, warm and clear, no efficacy claims.' : '') + '\n\nStudy: ' + it.study + '\nTo: ' + it.to + '\nSubject: ' + it.subject + '\nEmail:\n' + it.body + '\n\nSignal: ' + it.observed + '\nWhy: ' + it.why + '\nExpected impact: ' + it.impact + ', ' + it.days + ' days earlier completion.' + (S.stNotes ? '\nEmphasise: ' + S.stNotes : '') + '\n\nReply with JSON only: ' + spec }] });
      out = JSON.parse((raw || '').trim().replace(/^\`\`\`(json)?/, '').replace(/\`\`\`$/, '').trim());
      if (fmtK === 'video' ? !(Array.isArray(out.scenes) && out.scenes.length) : !(Array.isArray(out.slides) && out.slides.length)) throw new Error('shape');
      if (fmtK === 'video') out.scenes = out.scenes.map(s => ({ headline:String(s.headline || ''), voiceover:String(s.voiceover || ''), secs:Math.max(2, Math.round(+s.secs) || 6) }));
      else out.slides = out.slides.map(s => ({ title:String(s.title || ''), bullets:(Array.isArray(s.bullets) ? s.bullets : []).map(String).slice(0, 4), stat:s.stat ? String(s.stat) : '', statLabel:s.statLabel ? String(s.statLabel) : '' }));
    } catch (e) { out = this.studioLocal(it, fmtK, aud, len); }
    this.setState({ stLoading:false, stOut:Object.assign({ key:'g' + Date.now(), kind:fmtK, draftId:it.id, aud, len, study:it.study }, out) });
  }
  studioTotal() { const o = this.state.stOut; return o && o.scenes ? o.scenes.reduce((a, s) => a + s.secs, 0) : 0; }
  studioPlay = () => {
    if (this.state.stPlay) { clearInterval(this._stTimer); this.setState({ stPlay:false }); return; }
    const total = this.studioTotal(); if (!total) return;
    this.setState(s => ({ stPlay:true, stT:s.stT >= total ? 0 : s.stT }));
    clearInterval(this._stTimer);
    this._stTimer = setInterval(() => this.setState(s => { const nt = (s.stT || 0) + 0.25; if (nt >= total) { clearInterval(this._stTimer); return { stT:total, stPlay:false }; } return { stT:nt }; }), 250);
  }
  componentWillUnmount() { clearInterval(this._stTimer); }
  localDraft(thread) {
    const all = thread.filter(m => m.role === 'user').map(m => m.text).join(' '), low = all.toLowerCase();
    const alias = { 'NASH-3301':['nash','liver'], 'DIA-2043':['dia-','diabetes'], 'RA-2209':['ra-2209','rheum','arthritis'] };
    const study = STUDIES.map(s => s.id).find(id => low.includes(id.toLowerCase()) || alias[id].some(w => low.includes(w)));
    if (all.split(/\s+/).filter(Boolean).length < 5) return { clarify:{ question:'What should happen, and who is it for? For example, the site or team to contact and what you need from them.', options:[] } };
    if (!study) return { clarify:{ question:'Which study is this action for?', options:STUDIES.map(s => s.id) } };
    const first = thread.find(m => m.role === 'user').text.trim(), title = first.charAt(0).toUpperCase() + first.slice(1, 88);
    return { action:{ study, pri:'P2', kind:'Email to sites', type:'email', title, to:'Study team | ' + study, subject:study + ' | ' + title,
      body:'Hi team,\n\n' + all + '\n\nCould you confirm by the end of the week?\n\nThanks,\nMarie', observed:'Added by you from a prompt.', why:'You asked for this directly. Prime hasn’t checked it against site data yet.',
      impact:'To be confirmed', days:3, conf:'Low', verb:'Approve & send', followUp:'Sent. Prime will track replies and log them in the Audit Trail.' } };
  }
  submitNew = async (override) => {
    const text = String(override ?? this.state.naText ?? '').trim(); if (!text || this.state.naLoading) return;
    const thread = (this.state.naThread || []).concat([{ role:'user', text }]);
    const pend = this.state.naPending;
    if (pend) {
      const t = text.toLowerCase(), PM = { high:'P1', p1:'P1', medium:'P2', p2:'P2', low:'P3', p3:'P3' };
      const k = Object.keys(PM).find(x => new RegExp('\\b' + x + '\\b').test(t));
      if (!k) { this.setState({ naThread:thread.concat([{ role:'prime', text:'Please pick a priority: High, Medium or Low.' }]), naText:'', naOptions:['High','Medium','Low'] }); return; }
      return this.finalizeNew(Object.assign({}, pend, { pri:PM[k] }));
    }
    this.setState({ naThread:thread, naText:'', naLoading:true, naOptions:[] });
    let r;
    try {
      const ctx = STUDIES.map(s => s.id + ' (' + s.name + ', ' + s.phase + '): ' + s.enrolled + '/' + s.target + ' enrolled. ' + s.note).join('\n');
      const convo = thread.map(m => (m.role === 'user' ? 'User: ' : 'Prime: ') + m.text).join('\n');
      const raw = await complete({ messages:[{ role:'user', content:'You are Prime, the enrollment agent in a clinical-trial recruitment control tower. The sponsor (Marie Curious, Clinical Operations) wants to add an action to the Actions queue.\nStudies:\n' + ctx + '\n\nConversation so far:\n' + convo + '\n\nDecide whether the request is clear and actionable. It is NOT actionable if you cannot tell which study it is for, who it is aimed at (a recipient, site, vendor or system) or what concretely should happen, or if it is unrelated to trial operations. If not actionable, ask ONE short, specific question in plain language and offer 2-4 short answer options. If actionable, draft the action.\nReply with JSON only, one of:\n{"clarify":{"question":"...","options":["...","..."]}}\n{"action":{"study":"<study id>","pri":"P1|P2|P3","kind":"Email to CRO|Email to sites|Email to finance|Meeting|Site request|Campaign change","type":"email|changes","title":"imperative, under 90 chars","to":"recipient name and role (email) or the record being changed (changes)","subject":"<study id> | ... (email only)","body":"short email body signed Marie (email only)","changes":[{"label":"...","from":"...","to":"..."}],"observed":"1 sentence: the signal behind it","why":"1 sentence: why this helps enrolment","impact":"short, e.g. +4 enrolled over 6 weeks","days":<integer days earlier completion, 1-45>,"conf":"High|Medium|Low","verb":"Approve & send|Approve & schedule|Approve & request|Approve & publish","followUp":"1 sentence on what Prime will do after approval"}}' }] });
      r = JSON.parse((raw || '').trim().replace(/^```(json)?/, '').replace(/```$/, '').trim());
    } catch (e) { r = this.localDraft(thread); }
    if (r && r.clarify && r.clarify.question) {
      this.setState(s => ({ naLoading:false, naThread:s.naThread.concat([{ role:'prime', text:r.clarify.question }]), naOptions:(r.clarify.options || []).slice(0, 4) }));
      return;
    }
    const a = r && r.action;
    if (!a || !a.title) { this.setState(s => ({ naLoading:false, naThread:s.naThread.concat([{ role:'prime', text:'I couldn’t turn that into an action. What should happen, and for which study?' }]), naOptions:[] })); return; }
    const now = new Date(), tm = now.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
    const item = { id:'u' + now.getTime(), study:STUDIES.some(s => s.id === a.study) ? a.study : STUDIES[0].id, pri:['P1','P2','P3'].includes(a.pri) ? a.pri : 'P2',
      kind:a.kind || 'Email', time:tm, type:a.type === 'changes' && Array.isArray(a.changes) && a.changes.length ? 'changes' : 'email', verb:a.verb || 'Approve & send',
      title:a.title, to:a.to || 'Study team', subject:a.subject || '', body:a.body || '', changes:a.changes || [],
      observed:a.observed || 'Added by you from a prompt.', why:a.why || '', sources:['Your prompt'], impact:a.impact || 'To be confirmed',
      days:Math.max(1, Math.min(45, Math.round(+a.days) || 3)), conf:['High','Medium','Low'].includes(a.conf) ? a.conf : 'Medium',
      followUp:a.followUp || 'Prime will follow up and log the outcome in the Audit Trail.', userCreated:true };
    const suggest = { P1:'High', P2:'Medium', P3:'Low' }[item.pri];
    this.setState(s => ({ naLoading:false, naPending:item, naOptions:['High','Medium','Low'],
      naThread:s.naThread.concat([{ role:'prime', text:'Draft ready: “' + item.title + '” (' + item.study + ', ' + item.impact + ').\n\nWhat priority should it have in your Actions queue? I’d suggest ' + suggest + '.' }]) }));
  }
  finalizeNew(item) {
    ITEMS.unshift(item);
    const ra = this.state.regPendingAct, al = ra && REG_ALERTS.find(x => x.id === ra);
    if (al) { this.setState(s => ({ regPendingAct:null, regActed:Object.assign({}, s.regActed, { [ra]:true }), regRev:Object.assign({}, s.regRev, { [ra]:true }) })); this.addLog([{ time:'Just now', text:'You created an action from the ' + al.source + ' alert "' + al.title + '"', study:al.studies.length > 2 ? 'All' : al.studies[0], kind:'you' }]); }
    this.setState({ naOpen:false, naThread:[], naOptions:[], naLoading:false, naText:'', naPending:null, tab:'inbox', filter:'open', study:null, selectedId:item.id, stickyId:null });
    this.addLog([{ time:'Just now', text:'You asked Prime to draft: ' + item.title + ' (' + ({ P1:'high', P2:'medium', P3:'low' }[item.pri] || 'medium') + ' priority)', study:item.study, kind:'you' }]);
  }
  submitAsk = async () => {
    const q = this.state.askText.trim(); if (!q || this.state.askLoading) return;
    this.setState({ askQ:q, askText:'', askAnswer:'', askLoading:true, askShown:true });
    let ans;
    try {
      const ctx = ITEMS.map(i => '- [' + i.pri + ' ' + i.study + '] ' + i.title + ' — ' + i.observed + ' ' + i.why).join('\n');
      ans = await complete({ messages:[{ role:'user', content:'You are the enrollment agent inside a clinical-trial recruitment control tower for a sponsor. Current proposals:\n' + ctx + '\n\nAnswer the sponsor in 2-4 short sentences, plain text, no markdown:\n' + q }] });
    } catch (e) { ans = 'I couldn\'t reach the reasoning model just now. Try again in a moment.'; }
    this.setState({ askAnswer:ans, askLoading:false });
  };

  upDraft(code, fileName) {
    const b = BUD_SITES.find(x => x.code === code), n = ((this.state.budUploads || {})[code] || []).length;
    const m = /INV-([A-Z]{3})-\d{4}/i.exec(fileName || '');
    const id = m && !n && m[1].toUpperCase() === code ? m[0].toUpperCase() : 'INV-' + code + '-' + String(171 + n).padStart(4, '0');
    const lines = [
      { d:'Screening visit', q:2, rate:860, ok:true, note:'Matches the contract rate and 2 completed visits in the EDC.' },
      { d:'Week 4 investigator visit', q:3, rate:465, hold:465, note:'Billed at 45 min. The contract says 30 min ($310), and the EDC shows 28–34 min.' },
      { d:UP_LAB[b.study] || 'Lab panel', q:4, rate:480, hold:480, note:'1 of 4 results is not in the EDC yet.' },
      { d:'Participant travel reimbursement', q:3, rate:85, ok:true, note:'Matches 3 approved claims.' },
      { d:'Pharmacy dispensing fee', q:1, rate:1200, ok:true, note:'Matches the contract.' },
    ];
    return { id, b, lines, total:lines.reduce((a, l) => a + l.q * l.rate, 0), hold:lines.reduce((a, l) => a + (l.hold || 0), 0) };
  }
  renderVals() {
    const S = this.state;
    const auto = false;
    const whyDefault = this.props.showReasoning ?? true;
    const spinner = (size, color) => React.createElement('span', { style:{ width:size, height:size, flex:'0 0 ' + size + 'px', borderRadius:'50%', border:'2px solid ' + color, borderTopColor:'transparent', display:'inline-block', animation:'spin 0.8s linear infinite' } });
    const items = ITEMS.map(it => Object.assign(this.itemView(it), { st:this.eff(it, auto), raw:it }));
    const saved = {};
    items.forEach(i => { if (i.st === 'approved' || i.st === 'auto' || i.st === 'sending') saved[i.study] = (saved[i.study] || 0) + i.days; });
    const base = {}; STUDIES.forEach(s => base[s.id] = s.base);
    const counts = { open:0, progress:0, closed:0 };
    const mineOk = i => S.scope !== 'mine' || this.who(i.id) === TEAM[0].name;
    const AF_SN = { LDS:'Leeds', BAL:'Hopkins', BER:'Charité Rheuma', HAM:'Hamburg', CHI:'Chicago' };
    const sName = c => (ENG_PEOPLE[c] && ENG_PEOPLE[c][3]) || AF_SN[c] || c;
    const arr = v => v == null || v === '' ? [] : Array.isArray(v) ? v : [v];
    const fS = arr(S.afSite), fO = arr(S.afOwner), fK = arr(S.afKind), fPr = arr(S.afPri);
    const afOk = i => { const ss = i.raw.sites || [];
      return (!fS.length || fS.some(v => v === '_all' ? !ss.length : ss.indexOf(v) >= 0)) && (!fO.length || fO.includes(this.who(i.id))) && (!fK.length || fK.includes(i.raw.kind)) && (!fPr.length || fPr.includes(i.raw.pri)); };
    items.forEach(i => { if ((!S.study || i.study === S.study) && mineOk(i) && afOk(i)) counts[this.group(i.st)]++; });
    const openAll = items.filter(i => i.st === 'open');
    const list = items.filter(i => (!S.study || i.study === S.study) && mineOk(i) && afOk(i));
    const uniq = a => Array.from(new Set(a));
    const afSel = (key, label, cur, opts) => ({ label, value:cur || '', on:!!cur, bg: cur ? '#e5ecf2' : '#fff', bd: cur ? '#cddae5' : '#e2e3e5', fg: cur ? '#003358' : '#3a3c40',
      opts:[{ v:'', l:label + ': All' }].concat(opts), onChange:e => this.setState({ [key]:e.target.value || null, selectedId:null }) });
    const afSites = uniq(ITEMS.filter(i => !S.study || i.study === S.study).reduce((a, i) => a.concat(i.sites || []), [])).map(c => ({ v:c, l:sName(c) })).sort((a, b) => a.l.localeCompare(b.l));
    fS.forEach(c => { if (c !== '_all' && !afSites.some(o => o.v === c)) afSites.unshift({ v:c, l:sName(c) }); });
    const AFD = [
      ['afSite', 'Site', afSites.concat(ITEMS.some(i => !(i.sites || []).length) ? [{ v:'_all', l:'Study-wide' }] : [])],
      ['afOwner', 'Owner', uniq(ITEMS.map(i => this.who(i.id))).sort().map(w => ({ v:w, l:w }))],
      ['afKind', 'Category', uniq(ITEMS.map(i => i.kind).filter(Boolean)).sort().map(k => ({ v:k, l:k }))],
      ['afPri', 'Priority', ['P1', 'P2', 'P3'].map(v => ({ v, l:v }))],
    ];
    const added = S.afAdded || [];
    const shownF = AFD.filter(d => added.includes(d[0]) || arr(S[d[0]]).length);
    const chips = shownF.map(([key, label, opts]) => { const sel = arr(S[key]), on = sel.length > 0, ok = 'af:' + key, open = S.pfOpen === ok;
      const one = sel.length === 1 ? (opts.find(o => o.v === sel[0]) || {}).l : null;
      const set = v => this.setState({ [key]:v, selectedId:null });
      return { label:label + ': ' + (!on ? 'Any' : one || sel.length + ' selected'), open, toggle:() => this.setState({ pfOpen: open ? null : ok }), close:() => this.setState({ pfOpen:null }),
        bg: on ? '#e5ecf2' : '#fff', bd: on ? '#cddae5' : '#e2e3e5', fg: on ? '#003358' : '#3a3c40',
        remove:() => this.setState(s => ({ [key]:null, afAdded:(s.afAdded || []).filter(k => k !== key), pfOpen:null, selectedId:null })),
        items:opts.map(o => { const c = sel.includes(o.v); return { name:o.l, bg: c ? '#004677' : '#fff', bd: c ? '#004677' : '#c9cbce', ck: c ? '#fff' : 'transparent', toggle:() => set(c ? sel.filter(x => x !== o.v) : sel.concat(o.v)) }; }) }; });
    const addOpts = AFD.filter(d => !shownF.includes(d)).map(([key, label]) => ({ label, pick:() => this.setState(s => ({ afAdded:(s.afAdded || []).concat(key), pfOpen:'af:' + key })) }));
    const af = { selects:[afSel('study', 'Study', S.study, uniq(ITEMS.map(i => i.study)).sort().map(s => ({ v:s, l:s })))],
      chips, addOpts, canAdd:addOpts.length > 0, addOpen:S.pfOpen === 'af:+', toggleAdd:() => this.setState({ pfOpen: S.pfOpen === 'af:+' ? null : 'af:+' }), closeAdd:() => this.setState({ pfOpen:null }),
      any: !!(S.study || fS.length || fO.length || fK.length || fPr.length || added.length),
      clear:() => this.setState({ study:null, afSite:null, afOwner:null, afKind:null, afPri:null, afAdded:[], afPri:null, afAdded:[], pfOpen:null, selectedId:null }) };
    const selRaw = list.find(i => i.id === S.selectedId);

    const listV = list.map(i => {
      const on = selRaw && i.id === selRaw.id;
      const line = i.st === 'sending' ? 'Working on it…' : i.st === 'auto' ? 'Auto-approved | low-risk rule' : i.st === 'rejected' ? 'Dismissed | ' + (S.reasons[i.id] || '') : i.st === 'open' ? '' : i.followUp;
      return { id:i.id, who:this.who(i.id), grp:this.group(i.st),
        onDragStart:e => { e.dataTransfer.setData('text/plain', i.id); e.dataTransfer.effectAllowed = 'move'; this.dragId = i.id; },
        onDragEnd:() => { this.dragId = null; if (this.state.dragOver) this.setState({ dragOver:null }); }, pri:i.pri, priFg:PRI[i.pri][0], priBg:PRI[i.pri][1], study:i.study, kind:i.kind, time:i.time, title:i.title, conf:i.conf, confDot:CONF[i.conf],
        hasCost: i.days > 0 || !!i.moneyTxt, costChip: i.days > 0 ? (v => '≈ ' + (v >= 1e6 ? '$' + (v / 1e6).toFixed(1) + 'M' : '$' + Math.round(v / 1e3) + 'k'))(costImpactOf(i)) : (i.moneyTxt || '').replace(/ .*/, ''),
        daysShort: i.moneyTxt || '−' + i.days + ' days', hasDays:i.days > 0, daysOnly:'−' + i.days + ' days', saveOnly: i.moneyTxt || '', statusLine:line, hasStatusLine:!!line,
        border: on ? '#004677' : '#ecedee', shadow: on ? '0 0 0 3px rgba(0,70,119,0.10)' : 'none',
        select:() => this.setState(s => ({ selectedId:i.id, rejectOpenId:null, stickyId: s.stickyId === i.id ? s.stickyId : null })) };
    });

    let sel = {}, hasSel = false;
    if (selRaw) {
      hasSel = true;
      const i = selRaw, st = i.st, id = i.id;
      const now = shift(base[i.study], saved[i.study] || 0);
      const counted = st === 'approved' || st === 'auto' || st === 'sending';
      const after = counted ? now : shift(base[i.study], (saved[i.study] || 0) + i.days);
      const fcNote = counted ? 'Already reflected in the forecast' : (!i.days ? 'No change to the forecast' : st === 'open' ? 'If approved (' + i.days + ' days earlier)' : 'Not reflected in the forecast');
      const editing = S.editingId === id;
      const whyOpen = S.whyOpen[id] ?? whyDefault;
      const stMap = {
        sending:['#f2f2f4','#3a3c40','Working on it…', spinner(14,'#55585d')],
        approved:['#e7f6ee','#197a48','Approved | ' + i.followUp, '✓'],
        auto:['#e5ecf2','#003358','Auto-approved under your low-risk rule. ' + i.followUp, '↻'],
        progress:['#e5ecf2','#003358', i.followUp, '↻'],
        rejected:['#f2f2f4','#55585d','Dismissed | ' + (S.reasons[id] || '') + '. The agent will only re-propose if the signal worsens.', '–'],
        closed:['#e7f6ee','#197a48', i.followUp, '✓'],
      };
      const sm = stMap[st] || stMap.progress;
      sel = { pri:i.pri, priFg:PRI[i.pri][0], priBg:PRI[i.pri][1], study:i.study, kind:i.kind, time:i.time === 'Yesterday' || i.time.indexOf('Jul') === 0 ? i.time.toLowerCase() === 'yesterday' ? 'yesterday' : 'on ' + i.time : 'at ' + i.time,
        title:i.title, revised:!!i.revised, revNote:i.revNote || '', impact:i.impact, conf:i.conf, confDot:CONF[i.conf],
        team:TEAM.map(m => ({ name:m.name, label:m.name })), assignee:this.who(id),
        assigneeRole:(TEAM.find(m => m.name === this.who(id)) || TEAM[0]).role,
        onAssign:e => { const v = e.target.value; this.setState(s => ({ assignees:Object.assign({}, s.assignees, { [id]:v }) })); this.addLog([{ time:'Just now', text:'You assigned "' + i.title + '" to ' + v, study:i.study, kind:'you' }]); },
        ...(() => { const pc = PROTO_COST[i.study] || PROTO_COST['DIA-2043'], rate = pc.rows.reduce((a, r) => a + r[1], 0), dd = ACT_DIRECT[i.id] || [0, 'No new spend identified'];
          const $ = v => '$' + Math.round(v).toLocaleString('en-US'), k = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(2).replace(/0$/, '') + 'M' : v >= 1e4 ? '$' + Math.round(v / 1e3) + 'k' : $(v);
          const net = i.days * rate - dd[0], open = S.costInfoId === id, money = !i.days && !!i.moneyTxt;
          const row = (l, v, note, strong) => ({ l, v, note:note || '', hasNote:!!note, fw: strong ? 600 : 400, bg: strong ? '#fafafa' : '#fff' });
          const calc = (money ? [row('Calculation', i.moneyTxt, i.moneyNote), row('Protocol and contract basis', '', MONEY_BASIS[id] || ''), row('Estimated cost impact', i.moneyTxt.replace(/ .*/, ''), '', true)]
            : [row('Earlier completion', i.days + ' days', 'From the forecast if this action is approved and works as expected'), row('Time-driven run-rate', $(rate) + ' / day', 'Costs that continue every day the study runs, from the ' + pc.proto + ' design'), row('Gross', $(i.days * rate)), row('Direct cost of this action', dd[0] ? '−' + $(dd[0]) : '$0', dd[1]), row('Estimated cost impact', '≈ ' + k(net), '', true)])
            .map((c, j) => Object.assign(c, { bt: j ? '1px solid #f0f0f3' : 'none' }));
          return { costVal: money ? i.moneyTxt.replace(/ .*/, '') : i.days ? '≈ ' + k(net) : '—', costOpen:open, costInfoBg: open ? '#e5ecf2' : '#fff', costInfoBd: open ? '#8baac5' : '#cfd1d4',
            toggleCost:() => this.setState(s => ({ costInfoId: s.costInfoId === id ? null : id })),
            cost:{ proto:pc.proto, design:pc.design.map(d => ({ l:d[0], v:d[1] })), calc, hasRate:!money && i.days > 0, rate:$(rate), rows:pc.rows.map(r => ({ l:r[0], v:$(r[1]), src:r[1 + 1] })),
              caveat: money ? 'Cost impact, not a saving. Estimated from the contract rate for this protocol procedure. Finance confirms the final amount before anything is paid or held.'
                : 'Cost impact, not a cost saving. This is an estimate from the ' + i.study + ' protocol design and current contracts. It only happens if completion actually moves ' + i.days + ' days earlier, and it leaves out per-participant costs (visit fees, per-visit labs, IP), which don’t change with timing. Finance must review it before it is used in any budget or forecast.' } }; })(),
        fcNow:fmt(now), fcAfter:fmt(after), fcNote, moneyInfoOpen:S.moneyInfoId === id, toggleMoneyInfo:() => this.setState(s => ({ moneyInfoId: s.moneyInfoId === id ? null : id })), money: i.moneyTxt || '', showRates:false, moneyNote: i.moneyTxt ? i.moneyNote : '',
        attachments:((S.attachments || {})[id] || []).map(a => ({ tag:a.tag, title:a.title, meta:a.meta, remove:() => this.setState(s => ({ attachments:Object.assign({}, s.attachments, { [id]:((s.attachments || {})[id] || []).filter(x => x.key !== a.key) }) })) })),
        studioLabel:((S.attachments || {})[id] || []).length ? 'Add another in AI Studio' : 'Add video or slides', openStudio:() => this.setState({ tab:'studio', stDraftId:id, stOut:null, stT:0, stPlay:false }),
        isEmail:i.type === 'email', isChanges:i.type === 'changes', to:i.to, subject:i.subject || '', changes:i.changes || [],
        body:S.edits[id] ?? i.body ?? '', editing, notEditing:!editing, canEdit:i.type === 'email' && st === 'open', editLabel: editing ? 'Done editing' : 'Edit draft',
        toggleEdit:() => this.setState({ editingId: editing ? null : id }),
        onBody:e => { const v = e.target.value; this.setState(s => ({ edits:Object.assign({}, s.edits, { [id]:v }) })); },
        observed:i.observed, why:i.why, sources:i.sources, contexts:S.contexts[id] || [],
        srcLinks:(() => { const r = i.raw, ss = r.sites || [], L = [], loc = r.study + (ss.length ? ' | ' + ss.map(sName).join(', ') : '');
          const go = st => () => this.setState(Object.assign({ selectedId:null, stickyId:null }, st));
          if (r.kind === 'Site follow-up' || r.id === 'nwu-lab') L.push({ tag:'Primary', label:'October campaign results', sub:'Site Engagements | DIA-2043', cta:'Open →', int:true, go:go({ tab:'eng', engStudy:'DIA-2043', engView:'perf', engPerf:'sep' }) });
          if (/invoice|budget|payment/i.test(r.kind + ' ' + r.title)) L.push({ tag:'Primary', label:'Budget and invoices', sub:r.study, cta:'Open →', int:true, go:go({ tab:'budget' }) });
          ss.slice(0, 3).forEach(c => L.push({ tag:'Primary', label:'Site overview | ' + sName(c), sub:r.study, cta:'Open →', int:true, go:go({ tab:'bySite', bsView:'site', bsStudy:r.study, bsSite:c, bsSec:'ov' }) }));
          const REC = { CTMS:'Site record and monitoring log', EDC:'Screening and visit data', eTMF:'Site essential documents', eConsent:'Consent status by participant', 'Site emails':'Correspondence with the site', 'Referral tool':'Referral log', 'Campaign tool':'Campaign spend and conversion', 'ClinicalTrials.gov':'Nearby recruiting trials', 'Site activation':'Activation milestones', 'Site payments':'Invoices and payment runs', 'Patient engagement':'Participant feedback', 'Your prompt':'Added by you' };
          (r.sources || []).forEach(src => L.push({ tag:src, label:REC[src] || src, sub:loc, cta: src === 'Your prompt' ? '' : 'Open in ' + src + ' ↗', int:false, go:() => {} }));
          const fi = L.find(l => l.int), fe = L.find(l => !l.int && l.cta);
          return [fi && Object.assign(fi, { cta:fi.label + ' →' }), fe].filter(Boolean); })(),
        whyOpen, whyToggleLabel: whyOpen ? 'Hide' : 'Show',
        toggleWhy:() => this.setState(s => ({ whyOpen:Object.assign({}, s.whyOpen, { [id]:!whyOpen }) })),
        ctxInput:S.ctxInput[id] || '',
        onCtx:e => { const v = e.target.value; this.setState(s => ({ ctxInput:Object.assign({}, s.ctxInput, { [id]:v }) })); },
        onCtxKey:e => { if (e.key === 'Enter') this.sendCtx(i.raw)(); },
        sendCtx:this.sendCtx(i.raw), ctxBtn: S.revising[id] ? 'Revising…' : 'Send to agent', ctxSpinner: S.revising[id] ? spinner(11,'#55585d') : null,
        isOpen:st === 'open', notOpen:st !== 'open', verb:i.verb || 'Approve',
        afterNote:'Nothing is sent until you approve',
        approve:this.approve(i.raw),
        rejectOpen:S.rejectOpenId === id, rejectClosed:S.rejectOpenId !== id,
        openReject:() => this.setState({ rejectOpenId:id }), cancelReject:() => this.setState({ rejectOpenId:null }),
        reasons:['Not now','Wrong diagnosis','Already handled','Too costly'].map(l => ({ label:l, pick:this.reject(i.raw, l) })),
        stBg:sm[0], stFg:sm[1], statusText:sm[2], stIcon: typeof sm[3] === 'string' ? React.createElement('span', { style:{ font:"600 14px 'IBM Plex Sans'", color:sm[1], width:16, textAlign:'center' } }, sm[3]) : sm[3],
        canUndo:st === 'auto' || st === 'approved' || st === 'rejected',
        undo:() => this.setStatus(id, 'open') };
    }

    const tabDef = [['open','New'],['progress','In progress'],['closed','Closed']];
    const tabs = tabDef.map(([k, l]) => ({ label:l, count:counts[k], onClick:() => this.setState({ filter:k, selectedId:null, rejectOpenId:null, stickyId:null }),
      bg: S.filter === k ? '#eeeff0' : 'transparent', fg: S.filter === k ? '#0a0a0a' : '#66696e', shadow: S.filter === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' }));
    const STV = { open:'open', progress:'approved', closed:'closed' };
    const board = tabDef.map(([k, l]) => { const its = listV.filter(x => x.grp === k), over = S.dragOver === k;
      return { label:l, count:its.length, items:its, empty:its.length === 0, emptyText: k === 'open' ? 'No new proposals' : k === 'progress' ? 'Drag an action here to start it' : 'Drag an action here to close it',
        bg: over ? '#e5ecf2' : '#f2f3f4', bd: over ? '#004677' : 'transparent',
        onOver:e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; if (this.state.dragOver !== k) this.setState({ dragOver:k }); },
        onLeave:e => { if (!e.currentTarget.contains(e.relatedTarget) && this.state.dragOver === k) this.setState({ dragOver:null }); },
        onDrop:e => { e.preventDefault(); const id = e.dataTransfer.getData('text/plain') || this.dragId, it = items.find(x => x.id === id); this.dragId = null; this.setState({ dragOver:null });
          if (!it || this.group(it.st) === k) return; this.setStatus(id, STV[k]); this.addLog([{ time:'Just now', text:'You moved "' + it.title + '" to ' + l, study:it.study, kind:'you' }]); } }; });
    const nStudies = new Set(openAll.map(i => i.study)).size;
    const inboxSub = openAll.length ? openAll.length + ' proposals waiting across ' + nStudies + (nStudies === 1 ? ' study' : ' studies') + ' | each shows its effect on the completion date' : 'All caught up. The agent will surface anything new after the 7:00 AM scan.';
    const emptyText = S.filter === 'open' ? 'Nothing waiting on you.' : S.filter === 'progress' ? 'Nothing in progress. Approved proposals appear here while the agent follows up.' : 'Nothing closed yet.';

    const nav = k => ({ bg: S.tab === k ? '#e5ecf2' : 'transparent', fg: S.tab === k ? '#003358' : '#3a3c40' });
    const studies = STUDIES.map(s => {
      const waiting = items.filter(i => i.study === s.id && i.st === 'open').length;
      const fcD = shift(s.base, saved[s.id] || 0);
      const expanded = S.openStudy === s.id;
      const sites = siteData(s), f = funnelOf(s, sites), gap = s.enrolled - f.planNow;
      const mx = Math.max(f.planNow, s.enrolled, 1), behind = s.enrolled < f.planNow * 0.9;
      const plan = [0,1,2,3,4,5].map(k => f.planNow * (0.55 + 0.45 * k / 5));
      const a0raw = f.planNow * 0.55 * (behind ? 0.92 : 1), a0 = a0raw <= s.enrolled * 0.75 ? a0raw : s.enrolled * 0.6;
      const act = [0,1,2,3,4,5].map(k => a0 + (s.enrolled - a0) * Math.pow(k / 5, behind ? 1.25 : 1));
      const pts = (arr, m) => arr.map((v, k) => (10 + k * 76).toFixed(1) + ',' + (102 - v / m * 92).toFixed(1)).join(' ');
      const acts = items.filter(i => i.study === s.id && this.group(i.st) !== 'closed').map((i, j) => ({ pri:i.pri, priFg:PRI[i.pri][0], priBg:PRI[i.pri][1], title:i.title,
        summary:i.impact + ' | ' + i.why, status: i.st === 'open' ? 'Awaiting approval' : 'In progress', stFg: i.st === 'open' ? '#b0730a' : '#003358', border: j ? '1px solid #f0f0f3' : 'none',
        open:e => { e.stopPropagation(); this.setState({ tab:'inbox', filter:this.group(i.st), study:null, selectedId:i.id, stickyId:null }); } }));
      const durMo = Math.round((fcD - new Date(s.start + 'T12:00:00')) / (864e5 * 30.44)), slipMo = Math.round((saved[s.id] || 0) / 30.44);
      return Object.assign({}, s, { pct:Math.round(s.enrolled / s.target * 100) + '%', fc:fmt(fcD), fcColor:s.dot, trialLabel:'Trial ' + s.id.split('-')[0], dur:durMo,
        ...(() => { const baseD = new Date((s.plan || s.base) + 'T12:00:00'), dm = Math.round((fcD - baseD) / (864e5 * 30.44)); return { delay: dm > 0 ? '+' + dm : dm < 0 ? String(dm) : '0', delayUnit: Math.abs(dm) === 1 ? 'month' : 'months', delayColor: dm > 0 ? '#bd3226' : '#197a48', delayNote:'plan ' + fmt(baseD) }; })(), durStart:'from ' + fmt(new Date(s.start + 'T12:00:00')),
        hasWaiting:waiting > 0, noWaiting:waiting === 0, waitingLabel:waiting + ' waiting →',
        open:e => { e.stopPropagation(); this.setState({ tab:'inbox', filter:'open', study:s.id, selectedId:null }); },
        viewSites:e => { if (e) e.stopPropagation(); this.setState({ tab:'sites', sitesStudy:s.id, siteFilter:'all', openSite:null }); },
        toggle:() => this.setState({ openStudy: S.openStudy === s.id ? null : s.id }),
        expanded, chev: expanded ? 'rotate(90deg)' : 'none', border: expanded ? '#cddae5' : '#ecedee',
        planNow:f.planNow, vsText:(gap >= 0 ? '+' : '') + gap + ' vs plan', vsColor: gap < 0 ? '#bd3226' : '#197a48',
        planPts:pts(plan, mx), actualPts:pts(act, mx), siteCount:sites.length, note:s.note,
        kpis:[{ l:'Referred', v:f.ref.toLocaleString() }, { l:'Prescreened', v:f.pre.toLocaleString() }, { l:'Enrolled / Screen failed', v:f.en, v2:f.sf, hasV2:true }, { l:'Drop-outs', v:f.drop }].map(k => Object.assign({ hasV2:false, v2:'' }, k)),
        actions:acts, noActions:acts.length === 0, actCount: acts.length ? acts.length + (acts.length === 1 ? ' item' : ' items') : '' });
    });
    const sStudy = STUDIES.find(s => s.id === S.sitesStudy) || STUDIES[1];
    const allSites = siteData(sStudy);
    const stCounts = { 'At risk':0, 'Watch':0, 'On track':0 };
    allSites.forEach(x => stCounts[x.status]++);
    const maxU = Math.max(...allSites.map(x => Math.max(x.expected, x.consented + x.screenFailed))) || 1;
    const px = v => Math.round(v / maxU * 132) + 'px';
    const totalGap = allSites.reduce((a, x) => a + Math.max(0, x.expected - x.enrolled), 0) || 1;
    const sWaiting = items.filter(i => i.study === sStudy.id && i.st === 'open').length;
    const shown = allSites.filter(x => S.siteFilter === 'all' || (S.siteFilter === 'risk' ? x.status === 'At risk' : x.status === 'Watch'));
    const toPts = (arr, mx) => arr.map((v, k) => (10 + k * 76).toFixed(1) + ',' + (102 - v / mx * 92).toFixed(1)).join(' ');
    const rowsV = shown.map(x => {
      const open = S.openSite === x.code;
      const gap = x.enrolled - x.expected;
      const prop = items.find(i => (i.sites || []).includes(x.code) && i.study === sStudy.id && this.group(i.st) !== 'closed');
      const mx = Math.max(x.expected, x.enrolled, 1);
      const plan = [0,1,2,3,4,5].map(k => x.expected * k / 5);
      const act = [0,1,2,3,4,5].map(k => x.enrolled * Math.pow(k / 5, x.curve));
      const sc = STC[x.status], bn = BN[x.bottleneck] || BN.None;
      return Object.assign({}, x, { open, rowBg: open ? '#fbfbfc' : '#fff', chev: open ? 'rotate(90deg)' : 'none',
        gapText: (gap >= 0 ? '+' : '') + gap + (gap < 0 ? ' | ' + Math.round(-gap / totalGap * 100) + '% of gap' : ''), gapColor: gap < 0 ? '#bd3226' : gap > 0 ? '#197a48' : '#85888c',
        dot:sc[0], stFg:sc[1], stBg:sc[2], bnFg:bn[0], bnBg:bn[1],
        lastText: x.last == null ? 'none yet' : x.last === 1 ? '1 day ago' : x.last + ' days ago', lastColor: x.last == null || x.last >= 10 ? '#c6390f' : x.last >= 7 ? '#b0730a' : '#85888c',
        inScreening: Math.max(0, x.consented - x.enrolled - x.screenFailed), failRate: x.consented ? Math.round(x.screenFailed / x.consented * 100) + '%' : '0%',
        planPts: toPts(plan, mx), actualPts: toPts(act, mx),
        hasProposal: !!prop, proposalTitle: prop ? prop.title : '', proposalCta: prop ? (prop.st === 'open' ? 'Review →' : 'In progress →') : '',
        openProposal: () => prop && this.setState({ tab:'inbox', filter: this.group(prop.st), study:null, selectedId:prop.id, stickyId:null }),
        toggle: () => this.setState({ openSite: open ? null : x.code }) });
    });
    const barsVAll = allSites.map(x => ({ code:x.code, dot:STC[x.status][0], codeFg: S.openSite === x.code ? '#003358' : '#8a8d92',
      expectedPx:px(x.expected), enrolledPx:px(x.enrolled), consentedPx:px(Math.max(0, x.consented - x.enrolled)), failPx:px(x.screenFailed),
      tip: x.name + ' — enrolled ' + x.enrolled + ', consented ' + x.consented + ', screen-failed ' + x.screenFailed + ', expected ' + x.expected,
      toggle: () => this.setState({ openSite: S.openSite === x.code ? null : x.code, siteFilter:'all' }) }));
    const OUT = { 'NASH-3301':[0.03,0.06], 'DIA-2043':[0.08,0.07], 'RA-2209':[0.38,0.06] }[sStudy.id] || [0.05,0.07];
    const pfS = S.pf && S.pf.study === sStudy.id ? S.pf : { study:sStudy.id };
    const pg = k => pfS[k] || [];
    const pfSet = (k, v) => this.setState(s => ({ pf:Object.assign({}, s.pf && s.pf.study === sStudy.id ? s.pf : { study:sStudy.id }, { [k]:v }) }));
    const CTY = { US:'United States', UK:'United Kingdom', DE:'Germany', NL:'Netherlands', AT:'Austria', CA:'Canada', ES:'Spain', FR:'France', IT:'Italy', BE:'Belgium', CH:'Switzerland', PL:'Poland', DK:'Denmark', SE:'Sweden' };
    const ctry = x => (x.loc || '').split(',').pop().trim();
    const fSite = pg('site'), fCty = pg('cty'), fSst = pg('sst'), fPst = pg('pst'), fCoh = pg('coh'), fNv = pg('nv');
    const fSL = allSites.filter(x => (!fSite.length || fSite.includes(x.code)) && (!fCty.length || fCty.includes(ctry(x))) && (!fSst.length || fSst.includes(x.status)));
    const barsV = barsVAll.filter(b => fSL.some(x => x.code === b.code));
    const siteAny = !!(fSite.length || fCty.length || fSst.length);
    const siteLabel = siteAny ? fSL.length + ' of ' + allSites.length + ' sites' : 'All sites';
    const tEn = fSL.reduce((a, x) => a + x.enrolled, 0), tSf = fSL.reduce((a, x) => a + x.screenFailed, 0);
    const shh = (s, k) => { let n = k * 31; for (const ch of s) n = n * 7 + ch.charCodeAt(0); const v = Math.sin(n) * 10000; return v - Math.floor(v); };
    const siteM = fSL.map(x => { const scr = Math.max(x.consented, x.enrolled + x.screenFailed), pre = Math.round(scr * (1.55 + shh(x.code, 1) * 0.6)), ref = Math.round(pre * (1.35 + shh(x.code, 2) * 0.5)), drop = Math.round(x.enrolled * OUT[1] * (0.4 + shh(x.code, 3) * 1.2));
      return { x, v:[ref, pre, scr, x.enrolled, x.enrolled - drop], drop }; });
    const tScr = siteM.reduce((a, m) => a + m.v[2], 0);
    const tPre = siteM.reduce((a, m) => a + m.v[1], 0), tRef = siteM.reduce((a, m) => a + m.v[0], 0);
    const tComp = Math.round(tEn * OUT[0]), tDrop = siteM.reduce((a, m) => a + m.drop, 0), tAct = tEn - tComp - tDrop;
    const pc = (a, b) => b ? Math.round(a / b * 100) + '%' : '0%';
    const FH = 200, tRet = tEn - tDrop;
    const COHD = { 'NASH-3301':[['Cohort A','40 mg'],['Cohort B','80 mg'],['Placebo','Matched control']], 'DIA-2043':[['Cohort 1','5 mg'],['Cohort 2','10 mg'],['Placebo','Matched control']], 'RA-2209':[['Arm A','Every 2 weeks'],['Arm B','Every 4 weeks'],['Placebo','Matched control']] }[sStudy.id] || [['Cohort A','Low dose'],['Cohort B','High dose'],['Placebo','Matched control']];
    const COH = COHD.map(c => c[0] === 'Placebo' ? 'Placebo' : c.join(' | '));
    const hs = n => { const x = Math.sin(n * 12.9898 + sStudy.id.length * 78.233) * 43758.5453; return x - Math.floor(x); };
    const cohIx = i => Math.floor(hs(i + 11) * COH.length);
    const cohT = Math.round(sStudy.target / COH.length);
    const dt = n => { const d = new Date('2026-10-27T12:00:00'); d.setDate(d.getDate() + n); return d.toLocaleDateString('en-US', { month:'short', day:'numeric' }); };
    const info = i => { const coh = COH[cohIx(i)];
      if (i < tComp) return ['Completed', coh, '—', null];
      if (i < tEn - tDrop) { const d = 1 + Math.floor(hs(i + 5) * 28); return ['Active', coh, dt(d), d]; }
      if (i < tEn) return ['Dropped out', coh, '—', null];
      if (i < tEn + tSf) return ['Screen failed', '—', '—', null];
      if (i < tScr) { const d = 1 + Math.floor(hs(i + 5) * 14); return ['In screening', 'Not assigned', dt(d), d]; }
      if (i < tPre) { if (hs(i + 9) < 0.55) { const d = 3 + Math.floor(hs(i + 5) * 18); return ['Awaiting screening', 'Not assigned', dt(d), d]; } return ['Awaiting screening', 'Not assigned', 'Not scheduled', null]; }
      return [hs(i + 9) < 0.45 ? 'Not eligible' : 'Awaiting prescreen', '—', '—', null]; };
    const nvB = d => d == null ? 'none' : d <= 7 ? 'w1' : 'later';
    const pAny = !!(fPst.length || fCoh.length || fNv.length);
    const pOk = i => { if (!pAny) return true; const f = info(i); return (!fPst.length || fPst.includes(f[0])) && (!fCoh.length || fCoh.includes(f[1] === '—' ? 'Not assigned' : f[1])) && (!fNv.length || fNv.includes(nvB(f[3]))); };
    const stg = i => i < tEn - tDrop ? 4 : i < tEn ? 3 : i < tScr ? 2 : i < tPre ? 1 : 0;
    let cnt = [tRef, tPre, tScr, tEn, tRet], nSf = tSf, nDrop = tDrop, nComp = tComp;
    if (pAny) { cnt = [0, 0, 0, 0, 0]; nSf = 0; nDrop = 0; nComp = 0;
      for (let i = 0; i < tRef; i++) { if (!pOk(i)) continue; const g = stg(i); for (let k = 0; k <= g; k++) cnt[k]++; const st = info(i)[0]; if (st === 'Screen failed') nSf++; else if (st === 'Dropped out') nDrop++; else if (st === 'Completed') nComp++; } }
    const mkF = (key, label, opts) => { const sel = pg(key), on = sel.length > 0, open = S.pfOpen === key, one = sel.length === 1 ? (opts.find(o => o.v === sel[0]) || {}).l : null;
      return { key, name:label, label:label + ': ' + (!on ? 'Any' : one || sel.length + ' selected'), open, toggle:() => this.setState({ pfOpen: open ? null : key }), close:() => this.setState({ pfOpen:null }),
        remove:() => this.setState(s => ({ pf:Object.assign({}, s.pf && s.pf.study === sStudy.id ? s.pf : { study:sStudy.id }, { [key]:[] }), pfAdded:(s.pfAdded || []).filter(k => k !== key), pfOpen:null })),
        bg: on ? '#e5ecf2' : '#fff', bd: on ? '#cddae5' : '#e2e3e5', fg: on ? '#003358' : '#3a3c40',
        all:() => pfSet(key, []), allBg: on ? '#fff' : '#004677', allBd: on ? '#c9cbce' : '#004677', allCk: on ? 'transparent' : '#fff',
        items:opts.map(o => { const c = sel.includes(o.v); return { name:o.l, code:o.c || '', bg: c ? '#004677' : '#fff', bd: c ? '#004677' : '#c9cbce', ck: c ? '#fff' : 'transparent', toggle:() => pfSet(key, c ? sel.filter(x => x !== o.v) : sel.concat(o.v)) }; }) }; };
    const pfl = [
      mkF('site', 'Site', allSites.map(x => ({ v:x.code, l:x.name, c:x.code }))),
      mkF('sst', 'Site status', ['On track', 'Watch', 'At risk'].map(v => ({ v, l:v }))),
      mkF('pst', 'Patient status', ['Active', 'Completed', 'Dropped out', 'Screen failed', 'In screening', 'Awaiting screening', 'Awaiting prescreen', 'Not eligible'].map(v => ({ v, l:v }))),
      mkF('coh', 'Cohort', COH.concat('Not assigned').map(v => ({ v, l:v }))),
    ];
    const pAdded = S.pfAdded || [];
    const pChips = pfl.filter(f => pAdded.includes(f.key) || pg(f.key).length);
    const pAddOpts = pfl.filter(f => !pChips.includes(f)).map(f => ({ label:f.name, pick:() => this.setState(s => ({ pfAdded:(s.pfAdded || []).concat(f.key), pfOpen:f.key })) }));
    const pfAny = siteAny || pAny || pAdded.length > 0, pfClear = () => this.setState({ pf:{ study:sStudy.id }, pfAdded:[], pfOpen:null });
    const fSteps = [
      ['Referred', cnt[0], 'All sources'],
      ['Prescreened', cnt[1], (cnt[0] - cnt[1]).toLocaleString() + ' not progressed'],
      ['Screened', cnt[2], (cnt[1] - cnt[2]).toLocaleString() + ' not progressed'],
      ['Enrolled', cnt[3], nSf + ' screen failed'],
      ['Retained', cnt[4], nDrop + ' dropped out | ' + nComp + ' completed'],
    ];
    const funnel = fSteps.map((x, k) => {
      const prev = k ? fSteps[k - 1][1] : 0, sp = cnt[0] ? Math.max(1.5, x[1] / cnt[0] * 100) : 0, solidPx = sp / 100 * FH;
      return { step:k + 1, label:x[0], sub:x[2], count:x[1].toLocaleString(),
        pct: k ? (prev ? (x[1] / prev * 100).toFixed(1) : '0.0') + '%' : (cnt[0] ? '100%' : '0%'),
        solidH: sp.toFixed(1) + '%', ghostH: k && cnt[0] ? (prev / cnt[0] * 100).toFixed(1) + '%' : '0%',
        chipB: Math.max(4, Math.round(solidPx - 17)) + 'px', open:() => this.setState({ fStep:{ study:sStudy.id, step:k } }) };
    });
    const cohA = COHD.map(() => ({ n:0, act:0, comp:0, drop:0 }));
    for (let i = 0; i < tEn; i++) { if (!pOk(i)) continue; const c = cohA[cohIx(i)]; c.n++; if (i < tComp) c.comp++; else if (i < tEn - tDrop) c.act++; else c.drop++; }
    const pw = (a, b) => (b ? a / b * 100 : 0).toFixed(1) + '%';
    const cohPick = fCoh.some(c => COH.includes(c));
    const coh = { note:'Randomized 1:' + Array(COH.length - 1).fill(1).join(':') + ' | target ' + cohT + ' per cohort | ' + siteLabel,
      rows:COHD.map((d, j) => { const c = cohA[j]; return { j, name:d[0], arm:d[1], n:c.n, target:cohT, pct:pw(Math.min(c.n, cohT), cohT), act:c.act, comp:c.comp, drop:c.drop,
        dropPct:c.n ? Math.round(c.drop / c.n * 100) + '%' : '0%', actW:pw(c.act, c.n), compW:pw(c.comp, c.n), dropW:pw(c.drop, c.n),
        open:() => this.setState({ fStep:{ study:sStudy.id, step:3, cohort:j } }) }; }).filter(r => !cohPick || fCoh.includes(COH[r.j])) };
    const fStep = S.fStep && S.fStep.study === sStudy.id ? S.fStep.step : null;
    const fp = (() => { if (fStep == null || !fSteps[fStep]) return { open:false };
      const close = () => this.setState({ fStep:null });
      const siteFor = i => { if (i < tEn) { let c = 0; for (const x of fSL) { c += x.enrolled; if (i < c) return x; } } return fSL[Math.floor(hs(i + 7) * fSL.length)] || fSL[0] || allSites[0]; };
      const PS = { 'Active':['#004677','#e5ecf2'], 'Completed':['#197a48','#e7f6ee'], 'Dropped out':['#bd3226','#fcecea'], 'Screen failed':['#bd3226','#fcecea'], 'In screening':['#b0730a','#fdf3e0'], 'Awaiting screening':['#55585c','#f1f2f3'], 'Awaiting prescreen':['#55585c','#f1f2f3'], 'Not eligible':['#85888c','#f6f6f7'] };
      const sm = S.fStep.site ? siteM.find(m => m.x.code === S.fStep.site) : null;
      if (sm) { const sd = shh(sm.x.code, 5) * 1000, [sRef, sPre, sScr, sEn, sRet] = sm.v, sSf = Math.max(0, Math.min(sm.x.screenFailed, sScr - sEn)), sCo = Math.min(Math.round(sEn * OUT[0]), sRet);
        const infoS = i => { const coh = COH[Math.floor(hs(i + sd + 11) * COH.length)];
          if (i < sCo) return ['Completed', coh, '—'];
          if (i < sRet) return ['Active', coh, dt(1 + Math.floor(hs(i + sd + 5) * 28))];
          if (i < sEn) return ['Dropped out', coh, '—'];
          if (i < sEn + sSf) return ['Screen failed', '—', '—'];
          if (i < sScr) return ['In screening', 'Not assigned', dt(1 + Math.floor(hs(i + sd + 5) * 14))];
          if (i < sPre) return ['Awaiting screening', 'Not assigned', hs(i + sd + 9) < 0.55 ? dt(3 + Math.floor(hs(i + sd + 5) * 18)) : 'Not scheduled'];
          return [hs(i + sd + 9) < 0.45 ? 'Not eligible' : 'Awaiting prescreen', '—', '—']; };
        const sIdx = Array.from({ length:sm.v[fStep] }, (_, i) => i).sort((a, b) => hs(a + sd + 3) - hs(b + sd + 3));
        const pre = sStudy.id.split('-')[0], pid = i => pre + '-' + sm.x.code + '-' + String(i + 1).padStart(4, '0');
        const rows = sIdx.slice(0, 100).map((i, j) => { const f = infoS(i), c = PS[f[0]];
          return { id:pid(i), site:sm.x.name, status:f[0], sFg:c[0], sBg:c[1], cohort:f[1], next:f[2], bt: j ? '1px solid #f0f0f3' : 'none' }; });
        const download = () => { const esc = v => '"' + String(v === '—' ? '' : v).replace(/"/g, '""') + '"';
          const all = sIdx.map(i => { const f = infoS(i); return [pid(i), sm.x.name, f[0], f[1], f[2]]; });
          const csv = [['Patient','Site','Status','Cohort','Next visit']].concat(all).map(r => r.map(esc).join(',')).join('\n');
          const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type:'text/csv;charset=utf-8' }));
          a.download = sStudy.id + '-' + sm.x.code + '-' + fSteps[fStep][0].toLowerCase() + '-patients.csv'; document.body.appendChild(a); a.click(); a.remove(); };
        return { open:true, close, download, stop:e => e.stopPropagation(), step:'STEP ' + (fStep + 1) + ' OF ' + fSteps.length + ' | ' + sm.x.code, title:fSteps[fStep][0] + ' | ' + sm.x.name,
          sub:sIdx.length.toLocaleString() + ' patients | ' + sStudy.id + ' | ' + sm.x.name, rows, more: sIdx.length > rows.length, moreNote:'Showing ' + rows.length + ' of ' + sIdx.length.toLocaleString() + ' patients | download CSV for full list' }; }
      const cSel = S.fStep.cohort;
      const idx = (cSel != null ? Array.from({ length:tEn }, (_, i) => i).filter(i => cohIx(i) === cSel) : Array.from({ length:[tRef, tPre, tScr, tEn, tRet][fStep] }, (_, i) => i)).filter(i => S.fStep.cmpAll || pOk(i)).sort((a, b) => hs(a + 3) - hs(b + 3));
      const lim = idx.length, shown = idx.slice(0, 100), ttl = cSel != null ? COH[cSel] : fSteps[fStep][0];
      const pre = sStudy.id.split('-')[0];
      const rows = shown.map((i, j) => { const st = siteFor(i), f = info(i), c = PS[f[0]];
        return { id:pre + '-' + st.code + '-' + String(i + 1).padStart(4, '0'), site:st.name, status:f[0], sFg:c[0], sBg:c[1], cohort:f[1], next:f[2], bt: j ? '1px solid #f0f0f3' : 'none' }; });
      const download = () => { const esc = v => '"' + String(v === '—' ? '' : v).replace(/"/g, '""') + '"';
        const all = idx.map(i => { const st = siteFor(i), f = info(i); return [pre + '-' + st.code + '-' + String(i + 1).padStart(4, '0'), st.name, f[0], f[1], f[2]]; });
        const csv = [['Patient','Site','Status','Cohort','Next visit']].concat(all).map(r => r.map(esc).join(',')).join('\n');
        const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type:'text/csv;charset=utf-8' }));
        a.download = sStudy.id + '-' + ttl.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-patients.csv'; document.body.appendChild(a); a.click(); a.remove(); };
      return { open:true, close, download, stop:e => e.stopPropagation(), step: cSel != null ? 'TRIAL COHORT' : 'STEP ' + (fStep + 1) + ' OF ' + fSteps.length, title:ttl,
        sub:lim.toLocaleString() + ' patients | ' + sStudy.id + ' | ' + siteLabel + (pAny ? ' | patient filters on' : ''), rows, more: lim > shown.length, moreNote:'Showing ' + shown.length + ' of ' + lim.toLocaleString() + ' patients' };
    })();
    const cmp = (() => { const sk = S.cmpSort || { k:-1, d:1 }, cols = ['Referrals','Prescreened','Screened','Enrolled','Retained'];
      const sorted = siteM.slice().sort((a, b) => sk.k < 0 ? (a.x.name < b.x.name ? -sk.d : a.x.name > b.x.name ? sk.d : 0) : (a.v[sk.k] - b.v[sk.k]) * sk.d);
      const tot = [0,1,2,3,4].map(k => siteM.reduce((a, m) => a + m.v[k], 0)), n = siteM.length || 1;
      const head = (k, label) => { const on = sk.k === k; return { label, arrow: on ? (sk.d > 0 ? '↑' : '↓') : '', fg: on ? '#0a0a0a' : '#85888c', sort:() => this.setState({ cmpSort:{ k, d: on ? -sk.d : (k < 0 ? 1 : -1) } }) }; };
      return { siteH:head(-1, 'SITE'), heads:cols.map((c, k) => head(k, c.toUpperCase())), note:siteM.length + ' sites' + (siteAny ? ' | site filters on' : '') + (pAny ? ' | patient filters not applied' : ''),
        rows:sorted.map((m, j) => ({ code:m.x.code, name:m.x.name, dot:STC[m.x.status][0], bt: j ? '1px solid #f0f0f3' : 'none', vals:m.v.map((v, k) => ({ v:v.toLocaleString(), r: k ? pc(v, m.v[k - 1]) : '', cur:'pointer', hov:'#e5ecf2', tip:'View patients', open:() => this.setState({ fStep:{ study:sStudy.id, step:k, site:m.x.code } }) })) })),
        total:tot.map((v, k) => ({ v:v.toLocaleString(), r: k ? pc(v, tot[k - 1]) : '', cur:'pointer', hov:'#e5ecf2', tip:'View patients', open:() => this.setState({ fStep:{ study:sStudy.id, step:k, cmpAll:true } }) })),
        avg:tot.map(v => ({ v:(v / n).toLocaleString('en-US', { maximumFractionDigits:1 }), r:'', cur:'default', hov:'transparent', tip:'', open:() => {} })) }; })();
    const funnelOverall = cnt[0] ? (cnt[4] / cnt[0] * 100).toFixed(2) + '%' : '0%';
    const sv = { id:sStudy.id, studyTabs:STUDIES.map(s => { const on = s.id === sStudy.id; return { id:s.id, dot:s.dot, bg: on ? '#fff' : 'transparent', fg: on ? '#0a0a0a' : '#66696e', shadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none', onClick:() => this.setState({ sitesStudy:s.id, openSite:null, siteFilter:'all' }) }; }), studies:STUDIES.map(s => ({ id:s.id, label:s.id + ' | ' + s.name })), onStudy:e => this.setState({ sitesStudy:e.target.value, openSite:null, siteFilter:'all' }), sites:barsV, rows:rowsV, funnel, funnelOverall, fp, pChips, pAddOpts, pCanAdd:pAddOpts.length > 0, pAddOpen:S.pfOpen === 'pf:+', pToggleAdd:() => this.setState({ pfOpen: S.pfOpen === 'pf:+' ? null : 'pf:+' }), pCloseAdd:() => this.setState({ pfOpen:null }), pfAny, pfClear, coh, cmp, funnelNote:(siteAny ? siteLabel : 'Across ' + allSites.length + ' sites') + ' | target ' + sStudy.target + ' participants',
      sub: allSites.length + ' sites | ' + sStudy.enrolled + ' / ' + sStudy.target + ' enrolled | ' + stCounts['At risk'] + ' at risk, ' + stCounts['Watch'] + ' watch, ' + stCounts['On track'] + ' on track',
      hasWaiting: sWaiting > 0, waitingLabel: sWaiting + (sWaiting === 1 ? ' proposal' : ' proposals') + ' waiting →',
      openInbox: () => this.setState({ tab:'inbox', filter:'open', study:sStudy.id, selectedId:null }) };
    const siteFilters = [['all','All',allSites.length],['risk','At risk',stCounts['At risk']],['watch','Watch',stCounts['Watch']]].map(([k,l,c]) => ({ label:l, count:c,
      onClick: () => this.setState({ siteFilter:k }), bg: S.siteFilter === k ? '#fff' : 'transparent', fg: S.siteFilter === k ? '#0a0a0a' : '#66696e', shadow: S.siteFilter === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' }));
    const log = S.log.map((l, idx) => Object.assign({}, l, { border: idx ? '1px solid #f0f0f3' : 'none', dot: l.kind === 'you' ? '#3a3c40' : '#004677' }));

    const pa = this.primeAction();
    const primeCards = PRIME.map(a => ({ title:a.title, desc:a.desc, systems:a.systems, mode:a.mode, modeFg: a.mode === 'Read-only' ? '#55585d' : '#b0730a', modeBg: a.mode === 'Read-only' ? '#f2f2f4' : '#fdf3e0', open:() => this.primeOpen(a.id) }));
    const pq = S.primeQuery.trim();
    const aq = S.archQ.trim().toLowerCase();
    const archList = S.archive.filter(a => !aq || (a.title + ' ' + ((a.result && a.result.summary) || '') + ' ' + a.systems.join(' ')).toLowerCase().includes(aq));
    const archive = archList.map((a, j) => { const r = a.result || {}; const outs = [];
      if (r.chart) outs.push('Chart'); if (r.rows && r.rows.length) outs.push('Table |' + ' ' + r.rows.length + ' rows'); if (r.briefs && r.briefs.length) outs.push('CTMS note | ' + r.briefs.length); if (a.turns && a.turns.length) outs.push(a.turns.length + ' follow-up' + (a.turns.length === 1 ? '' : 's'));
      return { time:a.time, title:a.title, summary:r.summary || '', systems:a.systems, outputs:outs, border: j ? '1px solid #f0f0f3' : 'none',
        open:() => { clearTimeout(this.primeTimer); this.setState({ primeSel:'hist:' + a.id, primePhase:'done', primeStep:a.steps.length, primeThread:a.id, followText:'' }); } }; });
    const pv = k => ({ bg: S.primeView === k ? '#fff' : 'transparent', fg: S.primeView === k ? '#0a0a0a' : '#66696e', shadow: S.primeView === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' });
    const prime = { views:[Object.assign({ label:'Saved Automations', count:PRIME.length + PRIME_MORE.length, onClick:() => this.setState({ primeView:'saved' }) }, pv('saved')), Object.assign({ label:'Archive', count:S.archive.length, onClick:() => this.setState({ primeView:'archive' }) }, pv('archive'))],
      isSaved:S.primeView === 'saved', isArchive:S.primeView === 'archive', archive, archEmpty:archive.length === 0, archQ:S.archQ, onArchQ:e => this.setState({ archQ:e.target.value }),
      query:S.primeQuery, onQuery:e => this.setState({ primeQuery:e.target.value }), onKey:e => { if (e.key === 'Enter') this.primeSubmit(); }, submit:this.primeSubmit, back:this.primeBack,
      showList:!pa, showRun:!!pa, cards:primeCards, sugg:primeCards.slice(0, 5), noMatch:primeCards.length === 0, ...(() => { const q = !S.primeQuery.trim(), open = !!S.primeMore, mv = PRIME_MORE.map(m => Object.assign({}, m, { modeFg: m.mode === 'Read-only' ? '#55585d' : '#b0730a', modeBg: m.mode === 'Read-only' ? '#f2f2f4' : '#fdf3e0' }));
        return { hasMore: q && primeCards.length > 0 && !open, showMoreList: q && open, showLess: q && open, more:mv, peek:mv.slice(0, 1),
          moreLabel:'See ' + PRIME_MORE.length + ' more saved automations', seeMore:() => this.setState({ primeMore:true }), seeLess:() => this.setState({ primeMore:false }) }; })(),
      countText: (PRIME.length + PRIME_MORE.length) + ' saved automations',
      noMatchText:'No saved automation matches. Press Enter and the agent will draft a plan for “' + pq + '”.' };
    let run = { systems:[], steps:[], out:{ cols:[], rows:[] } };
    if (pa) {
      const ph = S.primePhase, k = S.primeStep;
      const out = (ph === 'done' && pa.result) ? Object.assign({ label:'RESULT' }, pa.result, { rows:(pa.result.rows || (pa.preview && pa.preview.rows) || []), cols:(pa.result.cols || (pa.preview && pa.preview.cols) || []) })
        : (ph === 'confirm' && pa.preview) ? Object.assign({ label:'READY TO FILE', rows:[], cols:[] }, pa.preview) : null;
      const ch = out && out.chart;
      let chartV = { bars:[], labels:[] };
      if (ch) {
        const vals = ch.values.map(v => +v || 0), labs = (ch.labels || []).slice(0, vals.length);
        const mx = Math.max(...vals, 1), isLine = /line/i.test(ch.type || '');
        const n = vals.length, W = 600, H = 150;
        const xy = vals.map((v, j) => [n === 1 ? W / 2 : 16 + j * (W - 32) / (n - 1), H - 8 - v / mx * (H - 24)]);
        chartV = { title:ch.title || 'Report', unit:ch.unit || '', isLine, isBar:!isLine, max:Math.round(mx).toLocaleString(),
          bars: vals.map((v, j) => ({ label:labs[j] || '', value:v.toLocaleString(), h:Math.max(3, Math.round(v / mx * 140)) + 'px', color: v === mx ? '#004677' : '#8baac5' })),
          linePts: xy.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' '),
          areaPts: '16,' + (H - 8) + ' ' + xy.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ') + ' ' + (W - 16) + ',' + (H - 8),
          labels: labs.map((l, j) => ({ l, v:vals[j].toLocaleString() })) };
      }
      const nCols = out ? Math.max(3, (out.cols || []).length) : 3;
      const gridCols = nCols === 3 ? 'minmax(0,1.1fr) minmax(0,1.5fr) minmax(0,1fr)' : 'minmax(0,1.4fr) repeat(' + (nCols - 1) + ',minmax(0,1fr))';
      const outV = out ? { label:out.label, summary:out.summary, cols:out.cols, gridCols, hasBriefs:!!(out.briefs && out.briefs.length), briefs:out.briefs || [], hasChart:!!ch, chart:chartV, hasRows:out.rows.length > 0, rows:out.rows.map((r, j) => { const flag = r.length > nCols && r[nCols] === true; return { cells: r.slice(0, nCols).map((c, ci) => ({ t: c === true ? '' : c, fw: ci ? '400' : '500', fg: ci === 0 ? '#0a0a0a' : (flag && ci === 1) ? '#bd3226' : ci === nCols - 1 && nCols === 3 ? '#85888c' : '#1c1d1f' })), border: j ? '1px solid #f0f0f3' : 'none' }; }) } : { cols:[], rows:[] };
      const curStep = pa.steps[k];
      const thread = S.archive.find(a => a.id === S.primeThread);
      const turnsV = ((thread && thread.turns) || []).map((t, ti) => { const rows = t.rows || [], nc = Math.max(3, (t.cols || []).length);
        return { q:t.q, loading:!!t.loading, spin:spinner(13,'#004677'), summary:t.summary || '', label:t.label || '', hasLabel:!!t.label,
          hasRows:rows.length > 0, cols:t.cols || [], gridCols: nc === 3 ? 'minmax(0,1.1fr) minmax(0,1.5fr) minmax(0,1fr)' : 'minmax(0,1.4fr) repeat(' + (nc - 1) + ',minmax(0,1fr))',
          rows:rows.map((r, j) => ({ border: j ? '1px solid #f0f0f3' : 'none', cells:r.slice(0, nc).map((c, ci) => ({ t:c, fw: ci ? '400' : '500', fg: ci ? '#1c1d1f' : '#0a0a0a' })) })),
          hasBriefs:!!(t.briefs && t.briefs.length), briefs:t.briefs || [], needsApproval:!!t.needsApproval,
          approve:this.approveTurn(thread.id, ti, t), discard:() => this.patchTurn(thread.id, ti, { needsApproval:false, discarded:true }),
          hasStatus:!!(t.saving || t.saved || t.discarded), statusFg: t.saved ? '#197a48' : '#55585d',
          statusIcon: t.saving ? spinner(13,'#55585d') : t.saved ? '✓' : '–',
          statusText: t.saving ? 'Saving to CTMS…' : t.saved ? 'Stored in CTMS | logged to the Audit Trail' : 'Discarded | nothing was stored' }; });
      run = { title:pa.title, desc:pa.desc, systems:pa.systems, mode:pa.mode, modeFg: pa.mode === 'Read-only' ? '#55585d' : '#b0730a', modeBg: pa.mode === 'Read-only' ? '#f2f2f4' : '#fdf3e0',
        loading:!!pa.loading, loadSpin:spinner(14,'#004677'), note:pa.note,
        steps:pa.steps.map((s, j) => { const done = ph === 'done' || j < k, running = ph === 'running' && j === k, waiting = ph === 'confirm' && j === k;
          return { l:s.l, d:s.d, write:!!s.write, n:j + 1, done, running, waiting,
            badge: done ? 'APPROVED' : 'NEEDS APPROVAL', badgeFg: done ? '#197a48' : '#b0730a', badgeBg: done ? '#e7f6ee' : '#fdf3e0', pending:!done && !running && !waiting, spin: running ? spinner(16,'#004677') : null, fg: done || running || waiting ? '#0a0a0a' : '#55585d', border: j ? '1px solid #f0f0f3' : 'none' }; }),
        isArchived: !!(S.primeSel && S.primeSel.indexOf('hist:') === 0), notArchived: !(S.primeSel && S.primeSel.indexOf('hist:') === 0),
        backLabel: (S.primeSel && S.primeSel.indexOf('hist:') === 0) ? 'Archive' : 'All actions',
        doneText: (S.primeSel && S.primeSel.indexOf('hist:') === 0) ? 'Completed ' + pa.time + ' | retrieved from archive' : 'Completed | saved to archive and logged to the Audit Trail',
        rerun:() => { clearTimeout(this.primeTimer); const c = (pa.preview && pa.preview.briefs) ? briefPlan(pa.title, makeBriefs(pa.title)) : Object.assign({}, pa, { turns:[] }); this.setState({ primeSel:'custom', primeCustom:Object.assign(c, { loading:false }), primePhase:'plan', primeStep:-1, primeThread:null }); },
        isPlan: ph === 'plan' && !pa.loading,
        hasThread:turnsV.length > 0, turns:turnsV, canFollow: ph === 'done' && !!thread,
        followText:S.followText, onFollow:e => this.setState({ followText:e.target.value }), onFollowKey:e => { if (e.key === 'Enter') this.sendFollow(); }, sendFollow:this.sendFollow, isRunning: ph === 'running', isConfirm: ph === 'confirm', isDone: ph === 'done',
        runSpin:spinner(14,'#55585d'), runText: curStep ? curStep.l + '…' : 'Working…',
        confirmText:pa.confirmText || 'Approve to continue.', writeVerb:pa.writeVerb || 'Approve',
        approve:() => this.primeRunFrom(0), approveWrite:() => this.primeRunFrom(k),
        hasPreview:!!out, out:outV };
    }
    const ALLSYS = INTEGRATIONS.concat(S.sysCustom || []);
    const cs = ALLSYS.find(s => s.id === S.connectFor);
    const cmSubmit = () => {
      if (!S.connUser.trim() || !S.connPass) return this.setState({ connErr:'Enter both username and password.' });
      this.setState({ connectFor:null, connPass:'', connErr:'' }); this.connectSys(cs)();
    };
    const cm = { open:!!cs, name:cs ? cs.vendor + ' ' + cs.name : '', vendor:cs ? cs.vendor : '', mono:cs ? cs.mono : '',
      user:S.connUser, pass:S.connPass, err:S.connErr, hasErr:!!S.connErr,
      onUser:e => this.setState({ connUser:e.target.value, connErr:'' }), onPass:e => this.setState({ connPass:e.target.value, connErr:'' }),
      onKey:e => { if (e.key === 'Enter') cmSubmit(); if (e.key === 'Escape') this.setState({ connectFor:null }); },
      submit:cmSubmit, close:() => this.setState({ connectFor:null, connPass:'', connErr:'' }), stop:e => e.stopPropagation() };
    const ev = k => ({ bg: S.enrollView === k ? '#fff' : 'transparent', fg: S.enrollView === k ? '#0a0a0a' : '#66696e', shadow: S.enrollView === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' });
    const memDyn = [];
    ITEMS.forEach(i => { if (i.budget) return; if (S.status[i.id] === 'rejected') memDyn.push({ id:'d-' + i.id, text:'Hold off on: ' + this.itemView(i).title + '. Re-propose only if the signal worsens.', source:'From your dismissal (“' + (S.reasons[i.id] || '') + '”) | ' + i.study });
      (S.contexts[i.id] || []).forEach((c, ci) => memDyn.push({ id:'c-' + i.id + '-' + ci, text:'“' + c + '”', source:'From context you added | ' + i.study })); });
    const mem = memDyn.reverse().concat(AGENT_MEMORY).filter(m => !S.forgot[m.id]);
    const rulesOnN = AGENT_RULES.filter(r => !S.rulesOff[r.id]).length;
    const enr = {
      tabs:[Object.assign({ label:'Studies', dot:'#85888c', onClick:() => this.setState({ enrollView:'studies' }) }, ev('studies')), Object.assign({ label:'Agent', dot:'#27a763', onClick:() => this.setState({ enrollView:'agent' }) }, ev('agent'))],
      isStudies:S.enrollView !== 'agent', isAgent:S.enrollView === 'agent',
      open:() => this.setState({ tab:'studies', enrollView:'agent' }),
      lastScan:S.lastScan, scanLabel: S.scanning ? 'Scanning…' : 'Run scan now', scanSpin: S.scanning ? spinner(12,'#55585d') : null,
      scan:() => { if (S.scanning) return; this.setState({ scanning:true, scanNote:'' }); setTimeout(() => { this.setState({ scanning:false, lastScan:'Just now', scanNote:'Scan complete | 88 sites checked | no new signals since 6:04 AM.' }); this.addLog([{ time:'Just now', text:'Manual scan: 88 sites checked, no new signals', study:'All', kind:'agent' }]); }, 1600); },
      hasScanNote:!!S.scanNote, scanNote:S.scanNote,
      instr:S.agentInstr, editing:S.agentEditing, notEditing:!S.agentEditing, draft:S.agentDraft, editLabel: S.agentEditing ? '' : 'Edit',
      toggleEdit:() => { if (!S.agentEditing) this.setState({ agentEditing:true, agentDraft:S.agentInstr }); },
      onDraft:e => this.setState({ agentDraft:e.target.value }),
      cancelEdit:() => this.setState({ agentEditing:false }),
      saveEdit:() => { this.setState({ agentEditing:false, agentInstr:S.agentDraft }); this.addLog([{ time:'Just now', text:'You updated the Enrollment agent’s instructions', study:'All', kind:'you' }]); },
      studies:STUDIES.map(s => ({ id:s.id, dot:s.dot })),
      sources:AGENT_SOURCES.map((d, j) => { const it = INTEGRATIONS.find(x => x.id === d.id) || {}; const on = S.conn[d.id] === 'on';
        return { name:it.name || d.id, vendor:it.vendor || '', reads:d.reads, on, off:!on, border: j ? '1px solid #f0f0f3' : 'none' }; }),
      rulesOn: rulesOnN + ' of ' + AGENT_RULES.length + ' on',
      rules:AGENT_RULES.map((r, j) => { const on = !S.rulesOff[r.id];
        return { when:r.when, then:r.then, fg: on ? '#0a0a0a' : '#85888c', track: on ? '#004677' : '#d7d8da', justify: on ? 'flex-end' : 'flex-start', border: j ? '1px solid #f0f0f3' : 'none',
          toggle:() => { this.setState(s => ({ rulesOff:Object.assign({}, s.rulesOff, { [r.id]:on }) })); this.addLog([{ time:'Just now', text:'You turned ' + (on ? 'off' : 'on') + ' trigger: ' + r.when, study:'All', kind:'you' }]); } }; }),
      perms:[
        { icon:'✓', fg:'#197a48', bg:'#e7f6ee', label:'Read', detail:'Connected systems, read-only. No access to participant identities.' },
        { icon:'✎', fg:'#003358', bg:'#e5ecf2', label:'Draft', detail:'Emails to sites and CROs, budget and campaign changes, site activations and requests.' },
        { icon:'!', fg:'#b0730a', bg:'#fdf3e0', label:'Needs your approval', detail:'Anything that is sent, changed or filed in another system.' },
        { icon:'✕', fg:'#bd3226', bg:'#fcecea', label:'Never', detail:'Contact participants directly or change clinical data in the EDC.' },
      ].map((p, j) => Object.assign(p, { border: j ? '1px solid #f0f0f3' : 'none' })),
      memory:mem.map((m, j) => ({ text:m.text, source:m.source, border: j ? '1px solid #f0f0f3' : 'none', forget:() => this.setState(s => ({ forgot:Object.assign({}, s.forgot, { [m.id]:true }) })) })),
      memEmpty:mem.length === 0,
    };
    const bud = (() => {
      const stOf = id => (items.find(i => i.raw.id === id) || {}).st || 'open';
      const released = stOf('inv-pay') === 'approved';
      const k$ = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(2) + 'M' : v >= 1e4 ? '$' + (v / 1e3).toFixed(1) + 'k' : '$' + v.toLocaleString('en-US');
      const seg = (cur, k) => ({ bg: cur === k ? '#fff' : 'transparent', fg: cur === k ? '#0a0a0a' : '#66696e', shadow: cur === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' });
      const view = S.budView || 'invoices', flt = S.budFilter || 'all';
      const sd = {}; const enrOf = (study, code) => { if (!sd[study]) { const so = STUDIES.find(x => x.id === study); sd[study] = so ? siteData(so) : []; } return sd[study].find(y => y.code === code) || {}; };
      const STB = { u90:['Unpaid 90+ days','#bd3226','#fcecea'], disc:['Discrepancy','#b0730a','#fdf3e0'], u60:['Unpaid 60+ days','#b0730a','#fdf3e0'], review:['Awaiting approval','#003358','#e5ecf2'], paid:['Paid up','#197a48','#e7f6ee'], released:['Payment released','#197a48','#e7f6ee'] };
      const UPS = S.budUploads || {};
      const rows = BUD_SITES.map(b => {
        const up = UPS[b.code] || [], inv = b.inv.concat(up);
        const hold = inv.reduce((a, v) => a + v[3], 0), due0 = b.inv.reduce((a, v) => a + v[2] - v[3], 0), dueUp = up.reduce((a, v) => a + v[2] - v[3], 0), lines = inv.reduce((a, v) => a + v[5], 0);
        const rel = released && b.study === 'RA-2209' && b.age >= 90, due = (rel ? 0 : due0) + dueUp, age = !rel && due0 > 0 ? b.age : 0;
        const k = rel ? 'released' : !inv.length ? 'paid' : age >= 90 ? 'u90' : hold ? 'disc' : age >= 60 ? 'u60' : 'review';
        return { b, inv, up, hold, due, due0, lines, rel, age, k, paid:b.paid + (rel ? due0 : 0) };
      }).sort((x, y) => y.age - x.age || y.hold - x.hold);
      const r90 = rows.filter(r => r.k === 'u90'), n90 = r90.length;
      const cnt = { all:rows.length, u90:n90, disc:rows.filter(r => r.hold > 0).length };
      const shown = rows.filter(r => flt === 'all' || (flt === 'u90' ? r.k === 'u90' : r.hold > 0));
      const tPaid = rows.reduce((a, r) => a + r.paid, 0), tHold = rows.reduce((a, r) => a + r.hold, 0), t90 = r90.reduce((a, r) => a + r.due, 0);
      const tDue = rows.filter(r => r.k !== 'u90').reduce((a, r) => a + r.due, 0), nInv = rows.filter(r => r.k !== 'u90' && r.due).reduce((a, r) => a + r.inv.filter(v => v[2] > v[3]).length, 0);
      const upAll = []; rows.forEach(r => r.up.forEach(v => upAll.push({ r, v })));
      const checked = BUD_CHECKED + upAll.length * 13;
      const holdLines = rows.reduce((a, r) => a + r.lines, 0);
      const names = l => l.length > 1 ? l.slice(0, -1).join(', ') + ' and ' + l[l.length - 1] : l.join('');
      const ages = r90.map(r => r.age), relCost = costOf('RA-2209', 21).txt;
      const done = { approved:['Approved ✓','#197a48'], auto:['Auto-applied ✓','#197a48'], sending:['Sending…','#55585d'], rejected:['Rejected','#85888c'], closed:['Closed','#85888c'] };
      const pc = { P1:['#fcecea','#bd3226'], P2:['#fdf3e0','#8a5a06'], P3:['#f2f2f4','#55585d'] };
      const goItem = (id, st) => this.setState({ tab:'inbox', filter:this.group(st), study:null, selectedId:id, stickyId:null });
      const memB = [];
      ITEMS.forEach(i => { if (!i.budget) return; if (S.status[i.id] === 'rejected') memB.push({ id:'d-' + i.id, text:'Hold off on: ' + this.itemView(i).title + '. Re-propose only if the amount grows.', source:'From your dismissal (“' + (S.reasons[i.id] || '') + '”) | ' + i.study });
        (S.contexts[i.id] || []).forEach((c, ci) => memB.push({ id:'c-' + i.id + '-' + ci, text:'“' + c + '”', source:'From context you added | ' + i.study })); });
      const bmem = memB.reverse().concat(BUD_MEMORY).filter(m => !(S.budForgot || {})[m.id]);
      const offR = S.budRulesOff || {};
      return {
        navCount: rows.filter(r => r.k === 'u90' || r.hold > 0).length,
        tabs:[Object.assign({ label:'Invoices', dot:'#85888c', onClick:() => this.setState({ budView:'invoices' }) }, seg(view, 'invoices')), Object.assign({ label:'Agent', dot:'#27a763', onClick:() => this.setState({ budView:'agent' }) }, seg(view, 'agent'))],
        isInvoices: view !== 'agent', isAgent: view === 'agent',
        briefOpen: S.budBriefOpen === true, chev: S.budBriefOpen === true ? 'rotate(90deg)' : 'rotate(0deg)', toggleBrief:() => this.setState(s => ({ budBriefOpen:s.budBriefOpen !== true })),
        when:'Today, ' + (S.budLastScan || '6:00 AM'),
        headline:k$(tDue + t90 + tHold) + ' in site invoices is pending payment. ' + holdLines + ' of ' + checked + ' invoice lines don’t match the contract or the EDC (' + k$(tHold) + ' on hold).',
        linesLabel: holdLines + ' OF ' + checked + ' LINES DON’T MATCH',
        findings: upAll.reverse().map(({ r, v }) => ({ site:r.b.name, text:'sent ' + v[0] + ' today. 3 visits are billed at 45 min where the contract says 30, and 1 lab test has no result in the EDC.', amt:k$(v[3]), dot:'#e5a11a' })).concat(BUD_FINDINGS.map(f => Object.assign({}, f, { dot:'#e5a11a' }))),
        actions: BUD_IDS.map(id => items.find(i => i.raw.id === id)).filter(Boolean).map((i, j) => { const d = done[i.st] || ['Done ✓','#197a48'], p = pc[i.raw.pri] || pc.P3;
          return { pri:i.raw.pri, priBg:p[0], priFg:p[1], title:i.title, study:i.raw.study, impact: i.raw.days ? i.raw.impact : i.raw.impact, border: j ? '1px solid #eeeff0' : 'none',
            isOpen:i.st === 'open', isDone:i.st !== 'open', doneLabel:d[0], doneFg:d[1], open:() => goItem(i.raw.id, i.st) }; }),
        riskOpen: S.budBriefOpen === true && n90 > 0, riskDone: S.budBriefOpen === true && released,
        riskText: n90 ? n90 + ' RA-2209 sites unpaid ' + Math.min(...ages) + '+ days (' + k$(t90) + '). Leeds screening is down 30%. Releasing payment protects ~21 days.' : '',
        doneText:'Payment released to Leeds, Hopkins and Charité Rheuma. Prime will confirm receipt and watch screening at these sites for 4 weeks.',
        releaseLabel: stOf('inv-pay') === 'open' ? 'Review release →' : stOf('inv-pay') === 'sending' ? 'Releasing…' : 'View release →',
        openRelease:() => goItem('inv-pay', stOf('inv-pay')),
        viewRiskSites:() => this.setState({ tab:'sites', sitesStudy:'RA-2209', siteFilter:'all', openSite:(r90[0] || {}).b ? r90[0].b.code : null }),
        listSub: rows.length + ' sites | sorted by oldest unpaid | the bar shows days unpaid against the 90-day limit',
        filters:[['all','All'],['u90','Unpaid 90+'],['disc','Discrepancies']].map(([k, l]) => Object.assign({ label:l, count:cnt[k], onClick:() => this.setState({ budFilter:k, budOpenSite:null }) }, seg(flt, k))),
        totals:[
          { l:'Paid to date', v:k$(tPaid), sub:'This year | ' + rows.length + ' sites', sw:'#004677', fg:'#0a0a0a' },
          { l:'Awaiting approval', v:k$(tDue), sub:'Under 90 days | ' + nInv + ' invoices', sw:'#8fb0cc', fg:'#0a0a0a' },
          { l:'Unpaid 90+ days', v: t90 ? k$(t90) : '$0', sub: n90 ? n90 + ' sites | enrolment at risk' : 'No site past 3 months', sw:'#d9483f', fg: t90 ? '#bd3226' : '#0a0a0a' },
          { l:'On hold', v:k$(tHold), sub:holdLines + ' lines that don’t match', sw:'#e5a11a', fg:'#0a0a0a' }],
        bar:[[tPaid,'#004677'],[tDue,'#8fb0cc'],[t90,'#d9483f'],[tHold,'#e5a11a']].filter(x => x[0] > 0).map(x => ({ f:x[0], c:x[1] })),
        sites: shown.map((r, j) => { const b = r.b, c = STB[r.k], open = S.budOpenSite === b.code, e = enrOf(b.study, b.code), ec = STC[e.status] || STC['On track'];
          const props = ITEMS.filter(i => i.budget && (i.sites || []).includes(b.code)).map((i, pj) => { const st = stOf(i.id);
            return { title:this.itemView(i).title, status: st === 'open' ? 'Awaiting your approval' : st === 'rejected' ? 'Dismissed' : st === 'sending' ? 'Working on it…' : 'Approved ✓', stFg: st === 'open' ? '#b0730a' : st === 'rejected' ? '#85888c' : '#197a48',
              border: pj ? '1px solid #f0f0f3' : 'none', isOpen: st === 'open', go:() => goItem(i.id, st), open:ev2 => { ev2.stopPropagation(); goItem(i.id, st); } }; });
          const openP = props.filter(p => p.isOpen), lastUp = r.up[r.up.length - 1];
          return { name:b.name, loc:b.loc, study:b.study, dot:c[1], status:c[0], stFg:c[1], stBg:c[2],
            cardBorder: r.up.length ? '#cddae5' : '#ecedee', hasNew: r.up.length > 0,
            dueText: r.rel ? k$(r.due0) + ' released' : !r.inv.length ? 'All invoices paid' : (r.due ? k$(r.due) + ' awaiting approval' : 'Nothing awaiting approval') + (r.hold ? ' | ' + k$(r.hold) + ' on hold' : ''),
            ageLabel: r.age ? 'Oldest unpaid' : r.up.length ? 'Submitted' : r.rel ? 'Released' : '', 
            barPct: Math.min(r.age / 120, 1) * 100 + '%', barC: r.age >= 90 ? '#d9483f' : r.age >= 60 ? '#e5a11a' : '#8fb0cc',
            hasReview: openP.length > 0, noReview: openP.length === 0, reviewLabel: openP.length + ' to review', review: ev2 => { ev2.stopPropagation(); if (openP[0]) openP[0].go(); },
            due: r.due ? k$(r.due) : '—', hold: r.hold ? k$(r.hold) : '—', holdFg: r.hold ? '#8a5a06' : '#a7a9ac', age: r.age ? r.age + ' days' : (r.up.length || r.rel) ? 'today' : '', ageFg: r.age >= 90 ? '#bd3226' : r.age >= 60 ? '#b0730a' : r.age ? '#3a3c40' : '#a7a9ac',
            border: j ? '1px solid #f0f0f3' : 'none', open, chev: open ? 'rotate(90deg)' : 'none', toggle:() => this.setState({ budOpenSite: open ? null : b.code }),
            invCount: r.inv.length + (r.inv.length === 1 ? ' invoice' : ' invoices'), noInv: !r.inv.length, paidLabel:'Paid to date ' + k$(r.paid),
            inv: r.inv.map((v, vi) => { const s = r.rel && !v[6] ? (v[3] ? ['Released ' + k$(v[2] - v[3]) + ' | ' + k$(v[3]) + ' on hold', '#197a48'] : ['Released', '#197a48']) : v[3] >= v[2] ? ['On hold', '#b0730a'] : v[3] ? ['Partly on hold | ' + k$(v[3]), '#b0730a'] : ['Verified | awaiting approval', '#003358'];
              return { id:v[0], date:v[1], amt:k$(v[2]), status:s[0], fg:s[1], note:v[4], hasNote:!!v[4], border: vi ? '1px solid #f0f0f3' : 'none' }; }),
            enrolled: e.enrolled ?? '—', expected: e.expected ?? '—', enrSt: e.status || '—', enrFg:ec[1], enrBg:ec[2],
            linkText: r.k === 'u90' ? 'Unpaid for ' + r.age + ' days. Sites unpaid past 3 months often pause screening.' + (b.risk ? ' ' + b.risk : '') : r.rel ? 'Payment released. Prime will watch screening here for 4 weeks.' : r.age >= 60 ? 'Unpaid for ' + r.age + ' days. Reaches 3 months in ' + (90 - r.age) + ' days.' : 'Payments are current. No effect on enrolment expected.',
            linkFg: r.k === 'u90' ? '#bd3226' : r.age >= 60 ? '#8a5a06' : '#3a3c40',
            viewEnroll:ev2 => { if (ev2) ev2.stopPropagation(); this.setState({ tab:'sites', sitesStudy:b.study, siteFilter:'all', openSite:b.code }); },
            note: (lastUp ? 'New invoice ' + lastUp[0] + ' uploaded today: 2 lines don’t match (' + k$(lastUp[3]) + ' on hold). ' : '') + (r.rel && b.relNote ? b.relNote : b.note), props, hasProps: props.length > 0 }; }),
        sitesEmpty: shown.length === 0,
        lastScan:S.budLastScan || '6:00 AM', openProps: BUD_IDS.filter(id => stOf(id) === 'open').length, siteCount: rows.length,
        scanLabel: S.budScanning ? 'Reconciling…' : 'Run reconciliation now', scanSpin: S.budScanning ? spinner(12,'#55585d') : null,
        scan:() => { if (S.budScanning) return; this.setState({ budScanning:true, budScanNote:'' }); setTimeout(() => { this.setState({ budScanning:false, budLastScan:'Just now', budScanNote:'Reconciliation complete | ' + BUD_CHECKED + ' lines checked | no new discrepancies since 6:00 AM.' }); this.addLog([{ time:'Just now', text:'Manual reconciliation: ' + BUD_CHECKED + ' invoice lines checked, no new discrepancies', study:'All', kind:'agent' }]); }, 1600); },
        hasScanNote:!!S.budScanNote, scanNote:S.budScanNote || '',
        instr:S.budInstr ?? BUD_INSTR, editing:!!S.budEditing, notEditing:!S.budEditing, draft:S.budDraft || '', editLabel: S.budEditing ? '' : 'Edit',
        toggleEdit:() => { if (!S.budEditing) this.setState({ budEditing:true, budDraft:S.budInstr ?? BUD_INSTR }); },
        onDraft:e => this.setState({ budDraft:e.target.value }),
        cancelEdit:() => this.setState({ budEditing:false }),
        saveEdit:() => { this.setState({ budEditing:false, budInstr:S.budDraft }); this.addLog([{ time:'Just now', text:'You updated the Budget agent’s instructions', study:'All', kind:'you' }]); },
        studies:STUDIES.map(s => ({ id:s.id, dot:s.dot })),
        sources:BUD_SOURCES.map((d, j) => { const it = INTEGRATIONS.find(x => x.id === d.id) || {}; const on = S.conn[d.id] === 'on';
          return { name:it.name || d.id, vendor:it.vendor || '', reads:d.reads, on, off:!on, border: j ? '1px solid #f0f0f3' : 'none' }; }),
        rulesOn: BUD_RULES.filter(r => !offR[r.id]).length + ' of ' + BUD_RULES.length + ' on',
        rules:BUD_RULES.map((r, j) => { const on = !offR[r.id];
          return { when:r.when, then:r.then, fg: on ? '#0a0a0a' : '#85888c', track: on ? '#004677' : '#d7d8da', justify: on ? 'flex-end' : 'flex-start', border: j ? '1px solid #f0f0f3' : 'none',
            toggle:() => { this.setState(s => ({ budRulesOff:Object.assign({}, s.budRulesOff, { [r.id]:on }) })); this.addLog([{ time:'Just now', text:'You turned ' + (on ? 'off' : 'on') + ' budget trigger: ' + r.when, study:'All', kind:'you' }]); } }; }),
        perms:[
          { icon:'✓', fg:'#197a48', bg:'#e7f6ee', label:'Read', detail:'Site contracts, invoices, payment runs and EDC visit records. No access to participant identities.' },
          { icon:'✎', fg:'#003358', bg:'#e5ecf2', label:'Draft', detail:'Re-bill requests to sites, line holds, duplicate rejections and payment releases.' },
          { icon:'!', fg:'#b0730a', bg:'#fdf3e0', label:'Needs your approval', detail:'Any payment, hold, rejection or message to a site.' },
          { icon:'✕', fg:'#bd3226', bg:'#fcecea', label:'Never', detail:'Change contract rates or pay an invoice without approval.' },
        ].map((p, j) => Object.assign(p, { border: j ? '1px solid #f0f0f3' : 'none' })),
        memory:bmem.map((m, j) => ({ text:m.text, source:m.source, border: j ? '1px solid #f0f0f3' : 'none', forget:() => this.setState(s => ({ budForgot:Object.assign({}, s.budForgot, { [m.id]:true }) })) })),
        memEmpty: bmem.length === 0,
      };
    })();
    const bu = (() => {
      const U = S.budUp || {}, open = !!S.budUp;
      const setU = p => this.setState(s => s.budUp ? { budUp:Object.assign({}, s.budUp, p) } : null);
      const close = () => { (this._upT || []).forEach(clearTimeout); this._upT = []; this.setState({ budUp:null, budDrag:false }); };
      const pickFile = f => { if (!f) return; const kb = f.size / 1024; setU({ file:{ name:f.name, size: kb > 1024 ? (kb / 1024).toFixed(1) + ' MB' : Math.max(1, Math.round(kb)) + ' KB' } }); };
      const siteFor = () => { if (U.site && U.site !== 'auto') return U.site; const m = /INV-([A-Z]{3})-/i.exec((U.file || {}).name || ''); const c = m && m[1].toUpperCase(); return BUD_SITES.some(x => x.code === c) ? c : 'HAM'; };
      const start = () => { if (!U.file) return; const code = siteFor(), fname = U.file.name; setU({ step:'checking', phase:0 });
        this._upT = [700, 1400, 2200].map((ms, i) => setTimeout(() => setU(i < 2 ? { phase:i + 1 } : { step:'result', draft:this.upDraft(code, fname) }), ms)); };
      const D = U.draft, b = D && D.b, $ = v => '$' + v.toLocaleString('en-US');
      const add = () => { if (!D) return; const row = [D.id, 'Oct 15', D.total, D.hold, '3 visits billed at 45 min (contract says 30) | 1 lab result not in the EDC yet', 4, true];
        this.setState(s => ({ budUploads:Object.assign({}, s.budUploads, { [b.code]:((s.budUploads || {})[b.code] || []).concat([row]) }), budUp:null, budFilter:'all', budOpenSite:b.code, budView:'invoices' }));
        this.addLog([{ time:'Just now', text:'You uploaded ' + D.id + ' (' + b.short + '). Prime held 2 lines (' + $(D.hold) + ') that don’t match', study:b.study, kind:'you' }]); };
      const step = U.step, ph = U.phase || 0;
      return {
        open, close, stop:e => e.stopPropagation(), openUp:() => this.setState({ budUp:{ step:'pick', file:null, site:'auto' }, budDrag:false }),
        isPick:step === 'pick', isChecking:step === 'checking', isResult:step === 'result',
        hasFile:!!U.file, noFile:!U.file, fileName:(U.file || {}).name || '', fileSize:(U.file || {}).size || '', removeFile:() => setU({ file:null }),
        onFile:e => { pickFile(e.target.files && e.target.files[0]); e.target.value = ''; },
        onDragOver:e => { e.preventDefault(); if (!S.budDrag) this.setState({ budDrag:true }); }, onDragLeave:() => this.setState({ budDrag:false }),
        onDrop:e => { e.preventDefault(); this.setState({ budDrag:false }); pickFile(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]); },
        dropBd: S.budDrag ? '#004677' : '#cfd1d4', dropBg: S.budDrag ? '#f2f6f9' : '#fff',
        useSample:() => setU({ file:{ name:'INV-HAM-0071.pdf', size:'184 KB' }, site:'HAM' }),
        site:U.site || 'auto', onSite:e => setU({ site:e.target.value }),
        siteOpts:[{ v:'auto', l:'Detect from invoice' }].concat(BUD_SITES.map(x => ({ v:x.code, l:x.name + ' | ' + x.study }))),
        steps:['Reading the invoice', 'Matching rates and visit times to the site contract', 'Checking visits and lab results in the EDC'].map((l, i) => { const done = i < ph, cur = i === ph;
          return { label:l, icon: done ? '✓' : cur ? spinner(12,'#004677') : '', fg: done || cur ? '#0a0a0a' : '#a7a9ac', iconFg: done ? '#197a48' : '#004677', iconBg: done ? '#e7f6ee' : cur ? '#e5ecf2' : '#f2f2f4' }; }),
        rId:D ? D.id : '', rSite:b ? b.name + ' | ' + b.study : '', rTotal:D ? $(D.total) : '',
        rSummary:D ? D.lines.filter(l => l.ok).length + ' of ' + D.lines.length + ' lines match. 2 lines don’t match, so ' + $(D.hold) + ' is held until they are fixed. The other ' + $(D.total - D.hold) + ' goes to approval.' : '',
        rLines:D ? D.lines.map((l, j) => ({ d:l.d, qty:l.q + ' × ' + $(l.rate), amt:$(l.q * l.rate), note:l.note, icon: l.ok ? '✓' : '!', iconFg: l.ok ? '#197a48' : '#b0730a', iconBg: l.ok ? '#e7f6ee' : '#fdf3e0', noteFg: l.ok ? '#85888c' : '#8a5a06', border: j ? '1px solid #f0f0f3' : 'none' })) : [],
        hasAgeNote:!!(b && b.age >= 60), ageNote: b && b.age >= 60 ? b.short + ' has waited ' + b.age + ' days on earlier invoices. Approving the verified lines soon keeps the site away from the 3-month mark, when enrolment can stall.' : '',
        footHint: step === 'result' ? 'Nothing is paid until you approve.' : step === 'checking' ? 'This takes a few seconds.' : 'Prime reads the invoice and checks every line.',
        primaryLabel: step === 'result' ? 'Add to ' + (b ? b.short : 'site') + ' invoices' : step === 'checking' ? 'Checking…' : 'Check invoice',
        primary: step === 'result' ? add : step === 'pick' ? start : () => {},
        btnOpacity: (step === 'pick' && !U.file) || step === 'checking' ? 0.45 : 1,
      };
    })();
    return {
      tv:this.teamView(items), cm, enr, bud, bu, isBudget:S.tab === 'budget', navBudget:nav('budget'), goBudget:() => this.setState({ tab:'budget' }),
      isPrimeTab:S.tab === 'primeTab', navPrimeTab:S.tab === 'primeTab' ? nav('primeTab') : { bg:'#f2f6f9', fg:'#003358' }, goPrimeTab:() => this.setState({ tab:'primeTab' }),
      isPrime:S.tab === 'prime', notPrime:S.tab !== 'prime', navPrime:nav('prime'), goPrime:() => this.setState({ tab:'prime', homeView:'home' }), systemsList:INTEGRATIONS.filter(s => S.conn[s.id] === 'on').map(s => s.name), prime, run,
      st:(() => {
        const drafts = ITEMS.filter(i => i.type === 'email' && (this.eff(i, false) === 'open' || this.eff(i, false) === 'sending'));
        const draftId = drafts.some(d => d.id === S.stDraftId) ? S.stDraftId : (drafts[0] || {}).id;
        const it = ITEMS.find(i => i.id === draftId) || {};
        const fmtK = S.stFormat || 'video', aud = S.stAud || 'Site coordinators', len = S.stLen || (fmtK === 'video' ? 30 : 5);
        const o = S.stOut, has = !!o && !S.stLoading;
        const seg = (on) => ({ bg: on ? '#fff' : 'transparent', fg: on ? '#0a0a0a' : '#66696e', shadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' });
        const base = { draftId, drafts:drafts.map(d => ({ id:d.id, label:d.study + ' | ' + d.title })), to:it.to || '', subject:it.subject || '', body:(S.edits || {})[draftId] ?? it.body ?? '', aud, onAud:e => this.setState({ stAud:e.target.value }), showEmail:!!S.stShowEmail, emailToggleLabel: S.stShowEmail ? 'Hide email ▴' : 'Show email ▾', toggleEmail:() => this.setState(s => ({ stShowEmail:!s.stShowEmail })), audienceOpts:['Site coordinators','Principal investigators','CRO team','Patients'].map(l => ({ label:l })),
          onDraft:e => this.setState({ stDraftId:e.target.value }),
          formats:[['video','Short video','15–60 s explainer with captions'],['slides','Slides','1–5 slides to attach or present']].map(([k, l, d]) => ({ label:l, desc:d,
            bd: fmtK === k ? '#004677' : '#e2e3e5', bg: fmtK === k ? '#e5ecf2' : '#fff', shadow: fmtK === k ? '0 0 0 3px rgba(0,70,119,0.08)' : 'none',
            pick:() => this.setState({ stFormat:k, stLen: k === 'video' ? 30 : 5 }) })),
          audiences:['Site coordinators','Principal investigators','CRO team','Patients'].map(l => ({ label:l, bd: aud === l ? '#004677' : '#e2e3e5', bg: aud === l ? '#004677' : '#fff', fg: aud === l ? '#fff' : '#3a3c40', pick:() => this.setState({ stAud:l }) })),
          lengths:(fmtK === 'video' ? [[15,'15 s'],[30,'30 s'],[60,'60 s']] : [[1,'1 slide'],[3,'3 slides'],[5,'5 slides']]).map(([v, l]) => Object.assign({ label:l, pick:() => this.setState({ stLen:v }) }, seg(len === v))),
          notes:S.stNotes || '', onNotes:e => this.setState({ stNotes:e.target.value }),
          generate:() => { if (!S.stDraftId && draftId) this.setState({ stDraftId:draftId }, this.studioGenerate); else this.studioGenerate(); },
          genLabel: S.stLoading ? 'Generating…' : has ? 'Generate again' : 'Generate ' + (fmtK === 'video' ? 'video' : 'slides'), genSpin: S.stLoading ? spinner(13,'#fff') : null, genOpacity: S.stLoading || !draftId ? 0.6 : 1,
          empty:!o && !S.stLoading, loading:!!S.stLoading, bigSpin:spinner(22,'#004677'), loadingLabel: fmtK === 'video' ? 'Prime is writing the script and storyboard…' : 'Prime is building the slides…',
          isVideo: has && o.kind === 'video', isSlides: has && o.kind === 'slides', hasOut:has };
        if (!has) return base;
        const atts = (S.attachments || {})[o.draftId] || [], attached = atts.some(a => a.key === o.key);
        Object.assign(base, { outTitle:o.title,
          attached, notAttached:!attached,
          attach:() => { const a = { key:o.key, tag: o.kind === 'video' ? 'VIDEO' : 'SLIDES', title:o.title, meta: o.kind === 'video' ? this.studioTotal() + ' s | ' + o.scenes.length + ' scenes' : o.slides.length + ' slides' };
            this.setState(s => ({ attachments:Object.assign({}, s.attachments, { [o.draftId]:((s.attachments || {})[o.draftId] || []).concat([a]) }) }));
            this.addLog([{ time:'Just now', text:'You attached AI Studio ' + (o.kind === 'video' ? 'video' : 'slides') + ' to “' + (ITEMS.find(i => i.id === o.draftId) || {}).subject + '”', study:o.study, kind:'you' }]); },
          openEmail:() => this.setState({ tab:'inbox', filter:'open', study:null, selectedId:o.draftId, stickyId:null }) });
        if (o.kind === 'video') {
          const total = o.scenes.reduce((a, s) => a + s.secs, 0), t = Math.min(S.stT || 0, total);
          let acc = 0, cur = 0; o.scenes.forEach((s, i) => { if (t >= acc) cur = i; acc += s.secs; }); if (t >= total) cur = o.scenes.length - 1;
          const starts = []; acc = 0; o.scenes.forEach(s => { starts.push(acc); acc += s.secs; });
          const mmss = x => Math.floor(x / 60) + ':' + String(Math.floor(x % 60)).padStart(2, '0');
          const seek = i => () => { clearInterval(this._stTimer); this.setState({ stT:starts[i], stPlay:false }); };
          const sc = o.scenes[cur];
          Object.assign(base, { outMeta:mmss(total) + ' | ' + o.scenes.length + ' scenes | for ' + o.aud.toLowerCase(),
            vKicker:o.study + ' | ' + (cur + 1) + '/' + o.scenes.length, vHeadline:sc.headline, vCaption:sc.voiceover,
            showPlayIcon:!S.stPlay, playGlyph: S.stPlay ? '❚❚' : '▶', play:this.studioPlay, timeLabel:mmss(t) + ' / ' + mmss(total),
            segments:o.scenes.map((s, i) => ({ flex:s.secs, fill: Math.max(0, Math.min(100, (t - starts[i]) / s.secs * 100)) + '%', seek:seek(i) })),
            scenes:o.scenes.map((s, i) => ({ tc:mmss(starts[i]), headline:s.headline, voiceover:s.voiceover, seek:seek(i), bg: i === cur ? '#e5ecf2' : 'transparent', tcFg: i === cur ? '#003358' : '#85888c' })) });
        } else {
          const n = o.slides.length, k = Math.min(S.stSlide || 0, n - 1), sl = o.slides[k];
          Object.assign(base, { outMeta:n + ' slides | for ' + o.aud.toLowerCase(),
            sKicker:o.study + ' | ' + o.aud.toUpperCase(), sTitle:sl.title, sBullets:(sl.bullets || []).map(t => ({ text:t })), sHasStat:!!sl.stat, sStat:sl.stat || '', sStatLabel:sl.statLabel || '',
            sFooter:'Prepared by Prime for Marie Curious | Draft', sPage:(k + 1) + ' / ' + n,
            prev:() => this.setState({ stSlide:Math.max(0, k - 1) }), next:() => this.setState({ stSlide:Math.min(n - 1, k + 1) }),
            thumbs:o.slides.map((s, i) => ({ n:String(i + 1).padStart(2, '0'), title:s.title, bd: i === k ? '#004677' : '#e2e3e5', pick:() => this.setState({ stSlide:i }) })) });
        }
        return base; })(),
      isStudio:S.tab === 'studio', navStudio:nav('studio'),
      pageTitle:({ prime:'Homepage', primeTab:'Ask Prime', bySite: S.bsView === 'site' ? 'Site' : 'Sites List', eng:'Site Engagements', inbox: S.scope === 'overview' ? 'Actions Overview' : 'Actions', studies:'Enrollment', budget:'Budget', reg:'Regulatory', sites:'Patients Recruitment', engPerf:'Engagements Performance', studio:'AI Studio', activity:'Audit Trail', systems:'Connectors' })[S.tab] || '',
      pageBeta:S.tab === 'studio', showAsk:S.tab !== 'primeTab', ecW: (S.ec || {}).open && S.tab !== 'primeTab' ? 'clamp(340px, 25vw, 440px)' : '0px',
      headerAsk:() => this.setState(s => ({ primePanel:false, ec:Object.assign({}, s.ec || {}, { open:!(s.ec || {}).open }) })), goStudio:() => this.setState({ tab:'studio' }),
      analyticsOpen:S.anOpen === true || (S.anOpen !== false && (S.tab === 'sites' || S.tab === 'engPerf' || (S.tab === 'inbox' && S.scope === 'overview'))), analyticsChev:(S.anOpen === true || (S.anOpen !== false && (S.tab === 'sites' || S.tab === 'engPerf' || (S.tab === 'inbox' && S.scope === 'overview')))) ? 'rotate(90deg)' : 'none',
      toggleAnalytics:() => this.setState(s => ({ anOpen:!(s.anOpen === true || (s.anOpen !== false && (s.tab === 'sites' || s.tab === 'engPerf' || (s.tab === 'inbox' && s.scope === 'overview')))) })),
      navStudyRec:nav('sites'), navEngPerf:nav('engPerf'), isEngPerfTab:S.tab === 'engPerf',
      goStudyRec:() => this.setState({ tab:'sites', openSite:null }), goEngPerf:() => this.setState({ tab:'engPerf' }),
      agentsOpen:S.agentsOpen === true, agentsChev:S.agentsOpen === true ? 'rotate(90deg)' : 'none', toggleAgents:() => this.setState(s => ({ agentsOpen:s.agentsOpen !== true })),
      isHome:S.tab === 'prime',
      home:(() => {
        const h = new Date().getHours(), open = items.filter(i => i.st === 'open'), withDays = open.filter(i => i.days > 0), ci = withDays.reduce((a, i) => a + costImpactOf(i), 0);
        const k = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(1) + 'M' : '$' + Math.round(v / 1e3) + 'k';
        const en = STUDIES.reduce((a, s) => a + s.enrolled, 0), tg = STUDIES.reduce((a, s) => a + s.target, 0), plan = 484, appr = !!S.engApproved;
        const go = st => () => this.setState(st);
        const IC = { mail:['#e5ecf2','#004677'], flag:['#fcecea','#bd3226'], hold:['#fdf3e0','#8a5a06'], review:['#e5ecf2','#004677'] };
        const did = [['mail','Drafted the November site newsletter','17 site versions from 12 insights | ' + (appr ? 'approved' : 'awaiting your approval'),'2 days ago, 06:04',{ tab:'eng', engView:'dash' }],
          ['flag','Proposed ' + open.filter(i => !i.budget).length + ' enrollment actions','Budget shift, CRO escalation, Houston kickoff and more','Today, 06:04',{ tab:'inbox', filter:'open', study:null, selectedId:null }],
          ['hold','Held $4,120 of invoice lines','Lines that don’t match the contract or the EDC','Today, 06:00',{ tab:'budget' }],
          ['review','Sent an HbA1c question to medical review','From Northwestern and Phoenix | kept out of the newsletter','3 days ago, 16:10',{ tab:'eng', engView:'build', engBTab:'personal', engOpen:{ q2:true } }],
          ['flag','Spotted 2 competing NASH trials','Recruiting at Hamburg and Chicago | ClinicalTrials.gov','4 days ago, 06:02',{ tab:'inbox', filter:'open', study:'NASH-3301', selectedId:null }]]
          .map((d, j) => ({ isMail:d[0] === 'mail', isFlag:d[0] === 'flag', isShield:d[0] === 'hold' || d[0] === 'review', bg:IC[d[0]][0], fg:IC[d[0]][1], title:d[1], sub:d[2], when:d[3], bt: j ? '1px solid #f0f0f3' : 'none', open:go(d[4]) }));
        const PL = ['Planned','#55585d','#f2f2f4','#b3b5b8'];
        const sends = [['Thu','26','NOV','November newsletter','17 sites | 52 contacts | 09:00 site local time', appr ? ['Scheduled','#003358','#e5ecf2','#004677'] : ['Needs approval','#8a5a06','#fdf3e0','#e5a11a'], true],
          ['Sat','12','DEC','Investigator call recap','17 sites | drafted after the Dec 10 call', PL],
          ['Thu','17','DEC','December newsletter','17 sites | draft ready Dec 14', PL],
          ['Thu','21','JAN','January newsletter','17 sites | draft ready Jan 18', PL]]
          .map((n, j) => ({ dow:n[0], day:n[1], mon:n[2], title:n[3], sub:n[4], st:n[5][0], fg:n[5][1], bg:n[5][2], dot:n[5][3], rowBg: n[6] ? '#f7fafc' : 'transparent', bt: j ? '1px solid #f0f0f3' : 'none', open:go({ tab:'eng', engView: n[6] ? 'build' : 'dash' }) }));
        return { date:new Date().toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long' }).replace(',', ''), greet:(h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening') + ', Marie',
          en, tg, pct:Math.round(en / tg * 100) + '%', planPct:Math.round(plan / tg * 100) + '%', behind:plan - en,
          studies:STUDIES.map((s, j) => { const pl = siteData(s).reduce((a, x) => a + x.expected, 0), stt = statusOf(s.enrolled, pl), c = STC[stt], d = s.enrolled - pl, done = s.enrolled >= s.target;
            const endD = new Date(s.base + 'T12:00:00').toLocaleDateString('en-US', { month:'short', year:'numeric' });
            return { id:s.id, name:s.name, en:s.enrolled, tg:s.target, plan:pl, status:stt, stDot:c[0], stFg:c[1], stBg:c[2], bar: stt === 'At risk' ? '#d9483f' : stt === 'Watch' ? '#e5a11a' : '#004677',
              pct:Math.min(100, Math.round(s.enrolled / s.target * 100)) + '%', planPct:Math.min(100, Math.round(pl / s.target * 100)) + '%',
              gap: d >= 0 ? d + ' ahead of' : -d + ' behind', gapFg: d >= 0 ? '#197a48' : c[1], end:(done ? 'Closed ' : 'LPI ') + endD,
              bt: j ? '1px solid #f0f0f3' : 'none', open:go({ tab:'sites', sitesStudy:s.id, siteFilter:'all', openSite:null }) }; }),
          open:open.length, p1:open.filter(i => i.pri === 'P1').length, ci:'≈ ' + k(ci), ciSub:'Protocol-based estimates',
          engNext:'See enrollment by site →',
          did, sends, goEng:go({ tab:'bySite', bsView:'list', bsStudy:'DIA-2043' }), goEngTab:go({ tab:'eng', engView:'dash' }), goInbox:go({ tab:'inbox', filter:'open', study:null }), goActivity:go({ tab:'activity' }),
          panelOpen:S.primePanel === true, ...((S.ec || {}).open && S.tab !== 'primeTab' ? { gapDisp:'none', fStudy:'1.6 1 280px', fSite:'1 1 150px', fAct:'1 1 170px' } : { gapDisp:'block', fStudy:'2.4 1 360px', fSite:'1 1 220px', fAct:'1 1 240px' }), ...(S.primePanel !== true ? { actDir:'column', actGap:'12px', ciBt:'1px solid #f0f0f3', ciBl:'none', ciPad:'12px 0 0' } : { actDir:'row', actGap:'20px', ciBt:'none', ciBl:'1px solid #f0f0f3', ciPad:'0 0 0 20px' }), panelLabel: S.primePanel === true ? 'Hide Prime' : 'Ask Prime', togglePanel:() => this.setState(s => ({ primePanel:s.primePanel !== true })) }; })(),
      isEng:S.tab === 'eng', navEng:nav('eng'), goEng:() => this.setState({ tab:'eng', engView:'dash' }), engBadge:!S.engApproved, eng:this.engVals(spinner), ec:this.engChatVals(spinner),
      na:(() => { const th = S.naThread || [], started = th.length > 0, txt = S.naText || '';
        return { open:!!S.naOpen, text:txt, loading:!!S.naLoading, spin:spinner(12,'#55585d'), loadingLabel: started && th.length > 1 ? 'Prime is updating the draft…' : 'Prime is reading your request…',
          thread:th.map(m => m.role === 'user' ? { who:'YOU', text:m.text, align:'flex-end', bg:'#e5ecf2', fg:'#0a0a0a', bd:'#cddae5' } : { who:'PRIME', text:m.text, align:'flex-start', bg:'#fff', fg:'#0a0a0a', bd:'#e2e3e5' }),
          hasOptions:!S.naLoading && (S.naOptions || []).length > 0, options:(S.naOptions || []).map(l => ({ label:l, pick:() => this.submitNew(l) })),
          placeholder: S.naPending ? 'Pick a priority above: High, Medium or Low…' : started ? 'Reply to Prime…' : 'Describe the action, e.g. “Ask Barcelona to add Saturday screening slots for DIA-2043”',
          submitLabel: started ? 'Reply' : 'Draft with Prime', btnOpacity: txt.trim() && !S.naLoading ? 1 : 0.5,
          onText:e => this.setState({ naText:e.target.value }), onKey:e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.submitNew(); } },
          empty:!started, stop:e => e.stopPropagation(), threadRef:el => { if (el) el.scrollTop = el.scrollHeight; },
          submit:() => this.submitNew(), toggle:() => this.setState(s => ({ naOpen:!s.naOpen, tab:'inbox' })), close:() => this.setState({ regPendingAct:null, naOpen:false, naThread:[], naOptions:[], naText:'', naLoading:false, naPending:null }) }; })(),
      brief:(() => {
        const order = ['budget','charite','nash','rapay','houston'];
        const done = { approved:['Approved ✓','#197a48'], auto:['Auto-applied ✓','#197a48'], sending:['Sending…','#55585d'], rejected:['Rejected','#85888c'], closed:['Closed','#85888c'] };
        const pc = { P1:['#fcecea','#bd3226'], P2:['#fdf3e0','#8a5a06'], P3:['#f2f2f4','#55585d'] };
        const acts = order.map(id => items.find(i => i.raw.id === id)).filter(Boolean);
        const left = acts.filter(i => i.st === 'open').length;
        return { open:S.briefOpen === true, chev:S.briefOpen === true ? 'rotate(90deg)' : 'rotate(0deg)', when:'Today, ' + S.lastScan,
          toggle:() => this.setState(s => ({ briefOpen:s.briefOpen !== true })),
          headline: left ? 'Enrollment is slowing down for Trial NASH and Trial DIA. ' + left + ' of ' + acts.length + ' recommended actions still need your approval.' : 'All recommended actions are handled. Prime will report the effect on enrolment in tomorrow’s brief.',
          insights:[
            { study:'DIA-2043', dot:'#c6390f', text:'is 96 of 180 enrolled. Referral budget is concentrated on Phoenix (9% referral-to-enrolment, vs 22% at San Diego and Atlanta), Charité has no CRA, and Houston has no first patient yet.' },
            { study:'NASH-3301', dot:'#c6390f', text:'is 22 of 120. ClinicalTrials.gov shows 2 new trials recruiting the same F2–F3 patients at Hamburg and Chicago, and referrals there are down 35% in 3 weeks.' },
            { study:'RA-2209', dot:'#b0730a', text:'is close to target (300 of 320), but site invoices have gone unpaid for 3 months. That could slow screening this month.' }],
          actions:acts.map((i, j) => { const d = done[i.st] || ['Done ✓','#197a48'], p = pc[i.raw.pri] || pc.P3;
            return { pri:i.raw.pri, priBg:p[0], priFg:p[1], title:i.raw.title, study:i.raw.study, impact:i.raw.impact, border: j ? '1px solid #eeeff0' : 'none',
              isOpen:i.st === 'open', isDone:i.st !== 'open', doneLabel:d[0], doneFg:d[1],
              open:() => this.setState({ tab:'inbox', filter:this.group(i.st), study:null, selectedId:i.raw.id, stickyId:null }) }; }) }; })(),
      chat:(() => { const added = S.chatAdded || {}, n = Object.keys(added).length;
        const apps = [{ id:'teams', name:'Microsoft Teams', mono:'T', tile:'#5b5fc7' }, { id:'slack', name:'Slack', mono:'S', tile:'#4a154b' }];
        return { open:!!S.chatOpen, label: n ? 'Prime in ' + apps.filter(a => added[a.id]).map(a => a.id === 'teams' ? 'Teams' : 'Slack').join(' & ') : 'Add to Teams / Slack',
          toggle:() => this.setState(s => ({ chatOpen:!s.chatOpen })),
          apps:apps.map(a => ({ isTeams:a.id === 'teams', isSlack:a.id === 'slack', name:a.name, logo:'/assets/' + a.id + '.png', label: added[a.id] ? 'Added ✓' : 'Add', fg: added[a.id] ? '#197a48' : '#004677',
            add:() => { if (added[a.id]) return; this.setState(s => ({ chatAdded:Object.assign({}, s.chatAdded, { [a.id]:true }), chatOpen:false })); this.addLog([{ time:'Just now', text:'You added Prime to ' + a.name, study:'All', kind:'you' }]); } })) }; })(),
      isSystems:S.tab === 'systems', navSystems:nav('systems'), goSystems:() => this.setState({ tab:'systems' }),
      sysCount:ALLSYS.filter(s => S.conn[s.id] === 'on').length + '/' + ALLSYS.length,
      sysSub:ALLSYS.filter(s => S.conn[s.id] === 'on').length + ' of ' + ALLSYS.length + ' connected | agents get read-only access; any write needs your approval',
      systems:ALLSYS.map((s, j) => { const c = S.conn[s.id], on = c === 'on';
        return Object.assign({}, s, { isOn:on, isOff:c === 'off', isConnecting:c === 'connecting',
          status: on ? 'Connected' : c === 'connecting' ? 'Connecting' : 'Not connected',
          stFg: on ? '#197a48' : '#55585d', stBg: on ? '#e7f6ee' : '#f2f2f4', dot: on ? '#27a763' : c === 'connecting' ? '#e5a11a' : '#b3b5b8',
          tileBg: on ? '#e5ecf2' : '#f2f2f4', tileFg: on ? '#003358' : '#66696e',
          access: on ? (s.on ? s.access : 'Read') : '—', sync: on ? (S.syncAt[s.id] || s.sync || 'Just now') : '—',
          bt: j ? '1px solid #f0f0f3' : 'none', spin:spinner(13,'#004677'),
          connect:() => this.setState({ connectFor:s.id, connUser:'', connPass:'', connErr:'' }), disconnect:this.disconnectSys(s) }); }),
      sysAdd:(() => { const q = (S.sysQ || '').trim().toLowerCase(), cat = S.sysCat || 'All', have = ALLSYS.map(s => [s.vendor.toLowerCase(), s.name.toLowerCase()]);
        const isHave = (v, t) => { v = v.toLowerCase(); t = t.toLowerCase(); return have.some(h => (v.indexOf(h[0]) === 0 || h[0].indexOf(v) === 0) && (h[1] === t || h[1].indexOf(t) >= 0 || t.indexOf(h[1]) >= 0)); };
        const total = SYS_CATALOG.reduce((n, g) => n + g[2].length, 0);
        const groups = SYS_CATALOG.filter(g => cat === 'All' || g[0] === cat).map(g => ({ label:g[0].toUpperCase() + ' | ' + g[1].toUpperCase(),
          items:g[2].filter(p => !q || (p[0] + ' ' + g[0] + ' ' + g[1]).toLowerCase().indexOf(q) >= 0).map((p, k) => { const added = isHave(p[0], g[0]);
            return { vendor:p[0], mono:p[1], desc:g[0] + ' | ' + g[1], bt: k ? '1px solid #f0f0f3' : 'none', canAdd:!added, added,
              add:() => { const id = 'sys-' + p[0].toLowerCase().replace(/[^a-z0-9]+/g, '-');
                this.setState(s => ({ sysCustom:(s.sysCustom || []).concat([{ id, name:g[0], vendor:p[0], mono:p[1], access:'Read', desc:g[1] + '. Added by you.', custom:true }]), conn:Object.assign({}, s.conn, { [id]:'off' }), sysPicker:false, sysQ:'', connectFor:id, connUser:'', connPass:'', connErr:'' }));
                this.addLog([{ time:'Just now', text:'You added ' + p[0] + ' (' + g[0] + ') to Connect systems', study:'All', kind:'you' }]); } }; }) })).filter(g => g.items.length);
        return { open:!!S.sysPicker, q:S.sysQ || '', onQ:e => this.setState({ sysQ:e.target.value }), openPicker:() => this.setState({ sysPicker:true, sysQ:'', sysCat:'All' }), close:() => this.setState({ sysPicker:false }), stop:e => e.stopPropagation(),
          countLine:total + ' clinical trial systems | read-only by default, writes need your approval',
          cats:['All'].concat(SYS_CATALOG.map(g => g[0])).map(l => ({ label:l, pick:() => this.setState({ sysCat:l }), bd: cat === l ? '#004677' : '#e2e3e5', bg: cat === l ? '#004677' : '#fff', fg: cat === l ? '#fff' : '#3a3c40' })),
          groups, empty:groups.length === 0 }; })(),
      isInbox:S.tab === 'inbox', isStudies:S.tab === 'studies', isSites:S.tab === 'sites', siteFilters, sv, isActivity:S.tab === 'activity',
      navInbox:S.scope === 'overview' ? nav('__none') : nav('inbox'), navStudies:nav('studies'), navSites:nav('sites'), navBySite:nav('bySite'), isBySite:S.tab === 'bySite' && S.bsView === 'site', isBySiteList:S.tab === 'bySite' && S.bsView !== 'site', bs:S.tab === 'bySite' && S.bsView === 'site' ? this.bsVals() : {}, bsl:S.tab === 'bySite' && S.bsView !== 'site' ? this.bslVals() : {}, goBySite:() => this.setState({ tab:'bySite', bsView:'list' }), bsBack:() => this.setState({ bsView:'list' }),
      siOpen:S.siOpen !== false, siChev:S.siOpen !== false ? 'rotate(90deg)' : 'none', toggleSI:() => this.setState(s => ({ siOpen:s.siOpen === false })), goSites:() => this.setState({ tab:'sites', openSite:null }),
      isReg:S.tab === 'reg', navReg:nav('reg'), goReg:() => this.setState({ tab:'reg' }),
      reg:(() => { const rev = S.regRev || {}, acted = S.regActed || {}, src = S.regSrc || 'All', isNew = a => a.isNew && !rev[a.id];
        const nNew = REG_ALERTS.filter(isNew).length, imp = { High:['#bd3226','#fcecea'], Medium:['#8a5a06','#fdf3e0'], Low:['#55585d','#f2f2f4'] };
        const WATCH = [['FDA','fda.gov'],['EMA','ema.europa.eu'],['ICH','ich.org'],['MHRA','gov.uk/mhra'],['Advarra IRB','advarra.com']];
        const cust = S.regCustom || [], err = S.regErr || '';
        const add = () => { const url = (S.regUrl || '').trim(), name = (S.regName || '').trim(); let dom = '';
          try { dom = new URL(/^https?:\/\//.test(url) ? url : 'https://' + url).hostname.replace(/^www\./, ''); } catch (e) {}
          if (!url || !dom || dom.indexOf('.') < 0) { this.setState({ regErr:'Enter a valid web address, e.g. https://www.canada.ca/en/health-canada.html' }); return; }
          if (cust.some(c => c.domain === dom) || WATCH.some(w => w[1] === dom)) { this.setState({ regErr:dom + ' is already monitored.' }); return; }
          const n = name || dom;
          this.setState(s => ({ regCustom:(s.regCustom || []).concat([{ name:n, domain:dom }]), regAdding:false, regName:'', regUrl:'', regErr:'' }));
          this.addLog([{ time:'Just now', text:'You added ' + n + ' (' + dom + ') to regulatory monitoring', study:'All', kind:'you' }]); };
        const reg0 = { adding:!!S.regAdding, name:S.regName || '', url:S.regUrl || '', hasErr:!!err, err,
          toggleAdd:() => this.setState(s => ({ regAdding:!s.regAdding, regErr:'' })), onName:e => this.setState({ regName:e.target.value }), onUrl:e => this.setState({ regUrl:e.target.value, regErr:'' }),
          onKey:e => { if (e.key === 'Enter') add(); }, add,
          watch:WATCH.map(w => ({ name:w[0], domain:w[1], custom:false, fixed:true })).concat(cust.map((c, j) => ({ name:c.name, domain:c.domain, custom:true, fixed:false,
            remove:() => this.setState(s => ({ regCustom:(s.regCustom || []).filter((x, k) => k !== j) })) }))) };
        const rv = S.regView || 'alerts', rOff = S.regRulesOff || {}, rForgot = S.regForgot || {};
        const segR = k => ({ bg: rv === k ? '#fff' : 'transparent', fg: rv === k ? '#0a0a0a' : '#66696e', shadow: rv === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' });
        const READS = { 'fda.gov':'Guidances, Federal Register notices, warning letters', 'ema.europa.eu':'Scientific guidelines, CTR and CTIS updates', 'ich.org':'Harmonised guidelines and step changes', 'gov.uk/mhra':'Clinical trial regulations and safety notices', 'advarra.com':'IRB policy updates for your US sites' };
        const memR = REG_MEMORY.filter(m => !rForgot[m.id]);
        const agentV = { tabs:[Object.assign({ label:'Alerts', dot:'#85888c', hasCount:nNew > 0, count:nNew, onClick:() => this.setState({ regView:'alerts' }) }, segR('alerts')), Object.assign({ label:'Agent', dot:'#27a763', hasCount:false, count:0, onClick:() => this.setState({ regView:'agent' }) }, segR('agent'))],
          isAlerts: rv !== 'agent', isAgent: rv === 'agent',
          lastScan:S.regLastScan || '5:30 AM', scanLabel: S.regScanning ? 'Scanning…' : 'Run scan now', scanSpin: S.regScanning ? spinner(12, '#55585d') : null,
          hasScanNote:!!S.regScanNote, scanNote:S.regScanNote || '',
          scan:() => { if (S.regScanning) return; this.setState({ regScanning:true, regScanNote:'' }); setTimeout(() => { const t = new Date().toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' }); const n = 5 + (S.regCustom || []).length; this.setState({ regScanning:false, regLastScan:t, regScanNote:'Checked ' + n + ' websites. No new guidance since 5:30 AM.' }); this.addLog([{ time:'Just now', text:'Regulatory agent ran a manual scan of ' + n + ' websites. Nothing new found', study:'All', kind:'agent' }]); }, 1600); },
          instr:S.regInstr || REG_INSTR, editing:!!S.regEditing, notEditing:!S.regEditing, editLabel: S.regEditing ? '' : 'Edit', draft:S.regDraft || '',
          toggleEdit:() => { if (!S.regEditing) this.setState({ regEditing:true, regDraft:S.regInstr || REG_INSTR }); }, onDraft:e => this.setState({ regDraft:e.target.value }),
          cancelEdit:() => this.setState({ regEditing:false }), saveEdit:() => { this.setState(s => ({ regInstr:s.regDraft, regEditing:false })); this.addLog([{ time:'Just now', text:'You updated the Regulatory agent instructions', study:'All', kind:'you' }]); },
          studies:STUDIES.map(s => ({ id:s.id, dot:s.dot })),
          rulesOn:REG_RULES.filter(r => !rOff[r.id]).length + ' of ' + REG_RULES.length + ' on',
          rules:REG_RULES.map((r, j) => { const on = !rOff[r.id]; return { when:r.when, then:r.then, fg: on ? '#0a0a0a' : '#85888c', track: on ? '#004677' : '#d7d8da', justify: on ? 'flex-end' : 'flex-start', border: j ? '1px solid #f0f0f3' : 'none',
            toggle:() => { this.setState(s => ({ regRulesOff:Object.assign({}, s.regRulesOff, { [r.id]:on }) })); this.addLog([{ time:'Just now', text:'You turned ' + (on ? 'off' : 'on') + ' regulatory trigger: ' + r.when, study:'All', kind:'you' }]); } }; }),
          perms:[['✓','#197a48','#e7f6ee','Read','Public regulator and IRB websites, plus your study protocols and site list. No access to participant data.'],['✎','#003358','#e5ecf2','Draft','Alert summaries, impact notes and proposed actions for CRAs and the study team.'],['!','#8a5a06','#fdf3e0','Needs your approval','Creating an action, or sending anything to a site, CRO or IRB.'],['✕','#bd3226','#fcecea','Never','Changing a protocol, consent form or any site document.']]
            .map((p, j) => ({ icon:p[0], fg:p[1], bg:p[2], label:p[3], detail:p[4], border: j ? '1px solid #f0f0f3' : 'none' })),
          memory:memR.map((m, j) => ({ text:m.text, source:m.source, border: j ? '1px solid #f0f0f3' : 'none', forget:() => this.setState(s => ({ regForgot:Object.assign({}, s.regForgot, { [m.id]:true }) })) })), memEmpty:memR.length === 0 };
        reg0.watch = reg0.watch.map((w, j) => Object.assign(w, { border: j ? '1px solid #f0f0f3' : 'none', reads: READS[w.domain] || 'Added by you | new pages and notices' }));
        return { ...reg0, ...agentV, hasNew:nNew > 0, newCount:nNew,
          sub:'Prime checks FDA, EMA, ICH, MHRA and IRB notices daily and flags what affects your 3 studies | ' + (nNew ? nNew + ' new since your last review' : 'all reviewed'),
          sources:['All','FDA','EMA','ICH','MHRA'].map(k => ({ label:k, count: k === 'All' ? REG_ALERTS.length : REG_ALERTS.filter(a => a.source === k).length, onClick:() => this.setState({ regSrc:k }), bg: src === k ? '#eeeff0' : 'transparent', fg: src === k ? '#0a0a0a' : '#66696e' })),
          items:REG_ALERTS.filter(a => src === 'All' || a.source === src).map(a => ({ source:a.source, type:a.type, date:a.date, impact:a.impact, impFg:imp[a.impact][0], impBg:imp[a.impact][1],
            title:a.title, summary:a.summary, prime:a.prime, studies:a.studies.map(id => ({ id })), isNew:isNew(a), border: isNew(a) ? '#cddae5' : '#ecedee',
            canAct:!acted[a.id], acted:!!acted[a.id], revLabel: rev[a.id] ? 'Reviewed ✓' : 'Mark reviewed',
            toggleRev:() => this.setState(s => ({ regRev:Object.assign({}, s.regRev, { [a.id]:!(s.regRev || {})[a.id] }) })),
            act:() => this.setState({ naOpen:true, naThread:[], naOptions:[], naLoading:false, naPending:null, regPendingAct:a.id,
              naText:'Following the ' + a.source + ' ' + a.type.toLowerCase() + ' “' + a.title + '” (' + a.date + '), draft an action for ' + a.studies.join(' and ') + ': ' + a.prime }) })) }; })(), navActivity:nav('activity'),
      goInbox:() => this.setState(s => ({ tab:'inbox', scope: s.scope === 'overview' ? 'all' : s.scope })), goActOv:() => this.setState({ tab:'inbox', scope:'overview', selectedId:null, stickyId:null }),
      navActOv:S.scope === 'overview' ? nav('inbox') : nav('__none'), goStudies:() => this.setState({ tab:'studies' }), goActivity:() => this.setState({ tab:'activity' }),
      openCount:openAll.length,
      inboxSub, tabs, board, list:listV, listEmpty:listV.length === 0, emptyText,
      af, hasStudyFilter:!!S.study, studyFilter:S.study || '', clearStudy:() => this.setState({ study:null, selectedId:null }),
      hasSel, sel, studies, log, boardW: hasSel ? 'max(calc((100% - 68px) / 3 + 27px), 287px)' : '100%', gridCols: hasSel ? 'minmax(0,1fr) minmax(380px,44%)' : 'minmax(0,1fr)', closeSel:() => this.setState({ selectedId:null, stickyId:null, rejectOpenId:null }),
      askText:S.askText, onAskText:e => this.setState({ askText:e.target.value }), onAskKey:e => { if (e.key === 'Enter') this.submitAsk(); },
      submitAsk:this.submitAsk, askShown:S.askShown, askQ:S.askQ, askAnswer:S.askAnswer, askLoading:S.askLoading, spinner:spinner(13,'#004677'),
      closeAsk:() => this.setState({ askShown:false }),
    };
  }
}

export default Component;
