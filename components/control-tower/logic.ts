// @ts-nocheck — the prototype's behaviour, ported verbatim from the design export.
// Control Tower logic — generated from "project/Recruitment Control Tower v3.dc.html" by scripts/convert-design.mjs.
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
    body:'Hi Katrin,\n\nReferrals at Charité have dropped from 32 to 13 per week since the CRA departure on Jun 16, and there\'s no mitigation logged in CTMS.\n\nCould Medpace share a staffing plan by Jul 18 — interim coverage and a start date for the replacement CRA?\n\nThanks,\nAlbert',
    observed:'Referrals fell from 32/wk to 13/wk after the Jun 16 CRA departure. No CAPA in CTMS.',
    why:'The referral collapse tracks an unfilled CRA role; recovery needs a CRO commitment.',
    sources:['CTMS','Referral tool'], impact:'+6 referrals per week', days:18, conf:'Medium',
    followUp:'Sent to Medpace. If there\'s no plan by Jul 18, the agent will propose an escalation.' },
  { id:'nash', sites:['HAM','CHI'], study:'NASH-3301', pri:'P1', kind:'Email to sites', time:'6:04 AM', type:'email', verb:'Approve & send',
    title:'Send NASH-3301 differentiator points to the Hamburg and Chicago PIs', to:'Dr. L. Becker, PI | Hamburg Liver Institute; Dr. R. Hayes, PI | Chicago Liver Research',
    subject:'NASH-3301 | key points for patient conversations',
    body:'Dear Dr. Becker, Dear Dr. Hayes,\n\nOther NASH trials are now recruiting in your area. When your team talks to potential participants, these points may help explain what NASH-3301 offers them:\n\n• 9 clinic visits over 52 weeks\n• One biopsy at screening. Later fibrosis checks use FibroScan instead of a repeat biopsy\n• All participants can join the open-label extension after week 52\n• We reimburse travel, and home visits are available for weeks 12–40\n\nI\'m happy to set up a short call with your coordinators if that would help.\n\nAlbert Enrollstein\nHead of Clinical Operations',
    observed:'Two new NASH trials started recruiting at Hamburg and Chicago this month (ClinicalTrials.gov). They have similar F2–F3 inclusion criteria. Referrals at both sites fell 35% in 3 weeks.',
    why:'The competing studies draw on the same referral pool at these sites. Coordinators need clear reasons to recommend NASH-3301.',
    sources:['ClinicalTrials.gov','Referral tool'], impact:'Protect ~6 referrals per week', days:14, conf:'Medium',
    followUp:'Sent to both PIs. The agent will compare referral trends at Hamburg and Chicago over the next 3 weeks.' },
  { id:'houston', sites:['HOU'], study:'DIA-2043', pri:'P2', kind:'Meeting', time:'6:04 AM', type:'email', verb:'Approve & schedule', lowRisk:true,
    title:'Schedule a first-patient-in check-in with Houston Metro Research', to:'S. Patel (coordinator), D. Moore (CRA)',
    subject:'DIA-2043 | first-patient-in check-in (30 min)',
    body:'Hi both,\n\nHouston Metro has been active since May 20 without a first screen. I\'d like 30 minutes to walk through what\'s blocking first-patient-in.\n\nProposed: Tue Jul 15, 10:00 CT  |  Wed Jul 16, 14:00 CT\n\nAlbert',
    observed:'Activated May 20, zero screened. Comparable sites enroll a first patient within 18 days.',
    why:'The activation-to-first-patient handoff has stalled; early intervention prevents a dead site.',
    sources:['Site activation','CTMS'], impact:'+4 enrolled over 8 weeks', days:7, conf:'Medium',
    followUp:'Invite sent to the site. Responses will appear in the Audit Trail.' },
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
    body:'Hi Jordan,\n\nSites on RA-2209 have had no invoice payments for 3 months. Several coordinators have asked about this, and unpaid sites tend to slow screening.\n\nCould Finance confirm the cause and clear the backlog this month? A list of the outstanding invoices is attached.\n\nThanks,\nAlbert',
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
    body:'Hi Maria,\n\nInvoice INV-BAL-0318 bills 4 Week 12 investigator visits at 1 hour each. The site contract sets this visit at 30 minutes ($310 per visit), and the EDC visit records show 25–35 minutes.\n\nCould you re-issue these 4 lines at the contracted rate? The rest of the invoice is verified and is included in this week\'s payment release.\n\nIf a visit ran longer for a clinical reason, send a short note and we will review it.\n\nThanks,\nAlbert',
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
  { id:'card', study:'CARD-0552', pri:'P2', kind:'Email to CRO', time:'Jul 3', type:'email', seed:'closed',
    title:'Nudge the EU CRO on 3 pending site activations', to:'EU Activation Lead | IQVIA',
    subject:'CARD-0552 | pending EU activations', body:'Hi team,\n\nThree EU sites are 3+ weeks past planned activation. Could you share blockers and revised dates by Jul 8?\n\nAlbert',
    observed:'Site activation pace 3 weeks behind plan across the EU cluster.', why:'Contract turnaround at the CRO is the bottleneck.',
    sources:['CTMS'], impact:'+3 active sites', days:10, conf:'Medium',
    followUp:'Resolved Jul 9 — 2 of 3 sites activated; the third is in IRB review.' },
];
const STUDIES = [
  { id:'NASH-3301', name:'NASH Metabolic', phase:'Phase 2', enrolled:22, target:120, base:'2027-06-30', dot:'#c6390f', note:'ClinicalTrials.gov shows 2 new NASH studies recruiting the same F2–F3 patients at 2 of our sites, Hamburg and Chicago. Referrals at both sites are down 35% in 3 weeks.' },
  { id:'DIA-2043', name:'Type 2 Diabetes', phase:'Phase 2', enrolled:96, target:180, base:'2027-02-18', dot:'#c6390f', note:'Most of the gap comes from budget spent on low-converting sites, the CRA vacancy at Charité, a stalled first patient in Houston and consent drop-off in Barcelona.' },
  { id:'CARD-0552', name:'Heart Failure', phase:'Phase 2b', enrolled:58, target:150, base:'2027-05-12', dot:'#b0730a', note:'EU activation pace recovering after the CRO nudge; watching the last site.' },
  { id:'RA-2209', name:'Rheumatoid Arthritis', phase:'Phase 3', enrolled:300, target:320, base:'2026-08-04', dot:'#197a48', note:'Site invoices appear unpaid for 3 months — enrolment may slow if sites aren\'t paid this month.' },
  { id:'ONC-1187', name:'NSCLC', phase:'Phase 3', enrolled:210, target:240, base:'2026-09-02', dot:'#197a48', note:'One site slowing on referrals; within tolerance.' },
];
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
  'CARD-0552': { plan:72, names:[['Cleveland Heart Institute','Cleveland, US','CLE'],['Leipzig Heart Center','Leipzig, DE','LEI'],['Royal Brompton','London, UK','LON'],['Duke Cardiology','Durham, US','DUK'],['Karolinska Heart','Stockholm, SE','STO'],['Gemelli Cardiology','Rome, IT','ROM'],['Warsaw Heart Institute','Warsaw, PL','WAW'],['Mayo Heart Failure','Rochester, US','MAY'],['Lyon Cardiologie','Lyon, FR','LYC'],['Utrecht UMC Heart','Utrecht, NL','UTR']] },
  'RA-2209': { plan:290, names:[['Hopkins Arthritis Center','Baltimore, US','BAL'],['Leeds Rheumatology','Leeds, UK','LDS'],['Charité Rheuma','Berlin, DE','BER'],['UCSF Rheumatology','San Francisco, US','SFO'],['Karolinska Rheuma','Stockholm, SE','KAR'],['Vall d’Hebron','Barcelona, ES','VHB'],['Mount Sinai Immunology','New York, US','NYC'],['Leiden Rheumatology','Leiden, NL','LDN']] },
  'ONC-1187': { plan:205, names:[['MD Anderson Thoracic','Houston, US','MDA'],['Gustave Roussy','Villejuif, FR','GRO'],['Royal Marsden','London, UK','RMH'],['Dana-Farber Lung','Boston, US','DFC'],['Heidelberg Thorax','Heidelberg, DE','HEI'],['Princess Margaret','Toronto, CA','PMH'],['Vall d’Hebron Oncology','Barcelona, ES','VHO'],['Moffitt Lung Program','Tampa, US','MOF']] },
};
const DIAG = { Referral:'Referral volume well below plan; the referral pool looks thinner than modeled.', Screening:'Screen-fail rate above benchmark on key inclusion criteria.', Consent:'Eligible patients dropping at consent.', Activation:'Activated but slow to first patient.', None:'On plan, healthy funnel.' };
const statusOf = (en, ex) => { const r = ex > 0 ? en / ex : 1; return r > 0.9 ? 'On track' : r >= 0.6 ? 'Watch' : 'At risk'; };
const OUTC = { 'NASH-3301':[0.03,0.06], 'DIA-2043':[0.08,0.07], 'CARD-0552':[0.05,0.09], 'RA-2209':[0.38,0.06], 'ONC-1187':[0.31,0.08] };
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
  { id:'EDC', name:'EDC', vendor:'Medidata', mono:'MD', on:true, sync:'6:02 AM', access:'Read', desc:'Visits, CRFs, queries and data entry timestamps.', used:'Used by 1 saved action' },
  { id:'CTMS', name:'CTMS', vendor:'Veeva Vault', mono:'VV', on:true, sync:'6:01 AM', access:'Read', desc:'Site status, enrollment, monitoring visits, contracts and payments.', used:'Used by 2 saved actions' },
  { id:'eTMF', name:'eTMF', vendor:'Florence', mono:'FL', on:true, sync:'5:58 AM', access:'Read | write with your approval', desc:'Essential documents and TMF filing.', used:'Used by 1 saved action' },
  { id:'eIRB', name:'eIRB', vendor:'Advarra', mono:'AD', on:true, sync:'5:55 AM', access:'Read', desc:'IRB submissions, approvals and expiry dates.', used:'Used by 1 saved action' },
  { id:'Payments', name:'Site payments', vendor:'SAP Ariba', mono:'SA', on:true, sync:'6:00 AM', access:'Read | write with your approval', desc:'Site invoices, approvals and payment runs.', used:'Used by the Budget agent' },
  { id:'CRM', name:'CRM', vendor:'Salesforce', mono:'SF', on:false, access:'—', desc:'Referral sources, patient outreach and site relationships.' },
  { id:'Reimbursements', name:'Reimbursements', vendor:'Greenphire', mono:'GP', on:false, access:'—', desc:'Participant stipends and travel reimbursements.' },
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
  { code:'MDA', name:'MD Anderson Thoracic', short:'MD Anderson', loc:'Houston, US', study:'ONC-1187', paid:212600, age:29,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-MDA-0517','Sep 3',21700,0,'',0]] },
  { code:'PHX', name:'Site 12 | Phoenix Clinical', short:'Phoenix', loc:'Phoenix, US', study:'DIA-2043', paid:61800, age:27,
    note:'3 HbA1c tests have no results in the EDC yet. This site usually uploads within 10 days, so Prime will check again in 7 days.',
    inv:[['INV-PHX-0088','Sep 5',9470,570,'3 HbA1c tests billed | no results in the EDC yet',3]] },
  { code:'NWU', name:'Northwestern Endocrine', short:'Northwestern', loc:'Chicago, US', study:'DIA-2043', paid:72300, age:22,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-NWU-0230','Sep 10',14100,0,'',0]] },
  { code:'ROT', name:'Rotterdam Liver Center', short:'Rotterdam', loc:'Rotterdam, NL', study:'NASH-3301', paid:29700, age:18,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-ROT-0049','Sep 14',6200,0,'',0]] },
  { code:'CLE', name:'Cleveland Heart Institute', short:'Cleveland', loc:'Cleveland, US', study:'CARD-0552', paid:47300, age:12,
    note:'1 verified invoice in the normal approval cycle.', inv:[['INV-CLE-0133','Sep 20',4800,0,'',0]] },
  { code:'ATL', name:'Site 07 | Atlanta Clinical', short:'Atlanta', loc:'Atlanta, US', study:'DIA-2043', paid:81600, age:0,
    note:'All invoices paid. Fastest invoice turnaround in DIA-2043.', inv:[] },
];
const BUD_FINDINGS = [
  { site:'Hopkins Arthritis Center', study:'RA-2209', amt:'$1,240', text:'billed 4 Week 12 visits at 1 hour. The contract says 30 minutes, and the EDC shows 25–35 minutes.' },
  { site:'Leeds Rheumatology', study:'RA-2209', amt:'$2,880', text:'billed 6 lab panels (CRP, ESR) for Week 8. No results are in the EDC yet.' },
  { site:'Charité Diabetes Ctr', study:'DIA-2043', amt:'$4,300', text:'sent INV-CHA-0107 for the same 5 screening visits, dates and amount as INV-CHA-0102.' },
  { site:'Site 12 | Phoenix Clinical', study:'DIA-2043', amt:'$570', text:'billed 3 HbA1c tests with no results in the EDC. This site usually uploads within 10 days, so Prime checks again in 7 days.' },
];
const UP_LAB = { 'RA-2209':'Lab panel (CRP, ESR)', 'NASH-3301':'Liver panel (ALT, AST)', 'DIA-2043':'HbA1c test', 'ONC-1187':'Blood count (CBC)', 'CARD-0552':'Lipid panel' };
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
  { name:'Albert Enrollstein', role:'Head of Clinical Operations' },
  { name:'K. Braun', role:'CRA | EU sites' },
  { name:'M. Ortiz', role:'Study Manager' },
  { name:'S. Patel', role:'CRA | US sites' },
  { name:'J. Liu', role:'Clinical Finance' }];
class Component extends DCLogic {
  state = { budUp:null, budUploads:{}, budDrag:false, budView:'invoices', budInstr:BUD_INSTR, budEditing:false, budDraft:'', budRulesOff:{}, budForgot:{}, budScanning:false, budLastScan:'6:00 AM', budScanNote:'', budFilter:'all', budOpenSite:null, budBriefOpen:true, enrollView:'studies', agentInstr:AGENT_INSTR, agentEditing:false, agentDraft:'', rulesOff:{}, forgot:{}, scanning:false, lastScan:'6:04 AM', scanNote:'', primeThread:null, followText:'', primeView:'saved', archQ:'', archive:ARCHIVE_SEED, openStudy:null, connectFor:null, connUser:'', connPass:'', connErr:'', conn:Object.fromEntries(INTEGRATIONS.map(s => [s.id, s.on ? 'on' : 'off'])), syncAt:{}, primeQuery:'', primeSel:null, primeCustom:null, primePhase:'plan', primeStep:-1, sitesStudy:'DIA-2043', siteFilter:'all', openSite:null, tab:'prime', filter:'open', study:null, selectedId:null, status:{}, reasons:{}, edits:{}, editingId:null, rejectOpenId:null,
    ctxInput:{}, contexts:{}, revisions:{}, revising:{}, whyOpen:{},
    log:[
      { time:'6:04 AM', text:'Scanned 88 sites across 5 studies — raised 5 new proposals', study:'All', kind:'agent' },
      { time:'6:00 AM', text:'Budget agent matched 214 invoice lines from 13 sites — raised 4 proposals', study:'All', kind:'agent' },
      { time:'Yesterday', text:'Charité referrals below threshold for a 3rd week — raised to P1', study:'DIA-2043', kind:'agent' },
      { time:'Jul 10', text:'You approved: visit-window memo to Lyon Diabète', study:'DIA-2043', kind:'you' },
      { time:'Jul 9', text:'Closed: EU activation nudge — 2 of 3 sites live', study:'CARD-0552', kind:'agent' },
    ],
    askText:'', askQ:'', askAnswer:'', askLoading:false, askShown:false };

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
    const sents = body.split('\n').filter(x => x.trim() && !/^(hi|dear|thanks|best|albert)/i.test(x.trim()) && !/^[•\-–]/.test(x.trim())).join(' ').split(/(?<=[.?!])\s+/).filter(x => x.length > 20);
    const asks = (bl.length ? bl : sents.slice(0, 3)).slice(0, 4);
    const c = costOf(it.study, it.days), stat = it.days ? '−' + it.days + ' days' : (it.moneyTxt || it.impact), statLabel = it.days ? 'earlier completion, ≈ ' + c.txt + ' saved' : it.impact;
    if (fmtK === 'slides') {
      const all = [
        { title:it.title, bullets:['For ' + aud.toLowerCase(), it.study + ' | ' + ((STUDIES.find(s => s.id === it.study) || {}).name || '')] },
        { title:'What we’re seeing', bullets:[it.observed] },
        { title:'What we’re asking', bullets:asks.length ? asks : [it.title] },
        { title:'Why it matters', bullets:[it.why] },
        { title:'Expected impact', bullets:[it.impact], stat, statLabel },
        { title:'Next steps', bullets:[it.followUp] },
        { title:'Questions?', bullets:['Albert Enrollstein, Head of Clinical Operations', 'Reply to this email or book a call with your CRA'] }];
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
      { w:0.8, headline:'Reply to Albert this week', voiceover:'Questions? Reply to the email and we’ll set up a call.' }];
    if (len <= 15) return { title:it.subject || it.title, scenes:[
      { headline:words(it.title, 9), voiceover:'A quick update on ' + it.study + ' for ' + aud.toLowerCase() + '.', secs:4 },
      { headline:words(asks[0] || it.observed, 9), voiceover:asks[0] || it.observed, secs:6 },
      { headline:stat + ' to completion', voiceover:'Reply to Albert this week with any questions.', secs:5 }] };
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
      const raw = await complete({ messages:[{ role:'user', content:'You are Prime, an AI agent for clinical-trial operations. Create a ' + (fmtK === 'video' ? len + '-second explainer video script' : len + (len === 1 ? '-slide summary' : '-slide deck')) + ' to send with this email, for ' + aud + '. Use plain, factual language; no hype; do not invent figures beyond those given.' + (aud === 'Patients' ? ' Write for patients: no jargon, warm and clear, no efficacy claims.' : '') + '\n\nStudy: ' + it.study + '\nTo: ' + it.to + '\nSubject: ' + it.subject + '\nEmail:\n' + it.body + '\n\nSignal: ' + it.observed + '\nWhy: ' + it.why + '\nExpected impact: ' + it.impact + ', ' + it.days + ' days earlier completion, about ' + costOf(it.study, it.days).txt + ' saved.' + (S.stNotes ? '\nEmphasise: ' + S.stNotes : '') + '\n\nReply with JSON only: ' + spec }] });
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
    const alias = { 'NASH-3301':['nash','liver'], 'DIA-2043':['dia-','diabetes'], 'CARD-0552':['card','heart'], 'RA-2209':['ra-2209','rheum','arthritis'], 'ONC-1187':['onc','nsclc','lung'] };
    const study = STUDIES.map(s => s.id).find(id => low.includes(id.toLowerCase()) || alias[id].some(w => low.includes(w)));
    if (all.split(/\s+/).filter(Boolean).length < 5) return { clarify:{ question:'What should happen, and who is it for? For example, the site or team to contact and what you need from them.', options:[] } };
    if (!study) return { clarify:{ question:'Which study is this action for?', options:STUDIES.map(s => s.id) } };
    const first = thread.find(m => m.role === 'user').text.trim(), title = first.charAt(0).toUpperCase() + first.slice(1, 88);
    return { action:{ study, pri:'P2', kind:'Email to sites', type:'email', title, to:'Study team | ' + study, subject:study + ' | ' + title,
      body:'Hi team,\n\n' + all + '\n\nCould you confirm by the end of the week?\n\nThanks,\nAlbert', observed:'Added by you from a prompt.', why:'You asked for this directly. Prime hasn’t checked it against site data yet.',
      impact:'To be confirmed', days:3, conf:'Low', verb:'Approve & send', followUp:'Sent. Prime will track replies and log them in the Audit Trail.' } };
  }
  submitNew = async (override) => {
    const text = String(override ?? this.state.naText ?? '').trim(); if (!text || this.state.naLoading) return;
    const thread = (this.state.naThread || []).concat([{ role:'user', text }]);
    const pend = this.state.naPending;
    if (pend) {
      const c = ['High','Medium','Low'].find(x => text.toLowerCase().includes(x.toLowerCase()));
      if (!c) { this.setState({ naThread:thread.concat([{ role:'prime', text:'Please pick a confidence level: High, Medium or Low.' }]), naText:'', naOptions:['High','Medium','Low'] }); return; }
      return this.finalizeNew(Object.assign({}, pend, { conf:c }));
    }
    this.setState({ naThread:thread, naText:'', naLoading:true, naOptions:[] });
    let r;
    try {
      const ctx = STUDIES.map(s => s.id + ' (' + s.name + ', ' + s.phase + '): ' + s.enrolled + '/' + s.target + ' enrolled. ' + s.note).join('\n');
      const convo = thread.map(m => (m.role === 'user' ? 'User: ' : 'Prime: ') + m.text).join('\n');
      const raw = await complete({ messages:[{ role:'user', content:'You are Prime, the enrollment agent in a clinical-trial recruitment control tower. The sponsor (Albert Enrollstein, Head of Clinical Operations) wants to add an action to the Actions queue.\nStudies:\n' + ctx + '\n\nConversation so far:\n' + convo + '\n\nDecide whether the request is clear and actionable. It is NOT actionable if you cannot tell which study it is for, who it is aimed at (a recipient, site, vendor or system) or what concretely should happen, or if it is unrelated to trial operations. If not actionable, ask ONE short, specific question in plain language and offer 2-4 short answer options. If actionable, draft the action.\nReply with JSON only, one of:\n{"clarify":{"question":"...","options":["...","..."]}}\n{"action":{"study":"<study id>","pri":"P1|P2|P3","kind":"Email to CRO|Email to sites|Email to finance|Meeting|Site request|Campaign change","type":"email|changes","title":"imperative, under 90 chars","to":"recipient name and role (email) or the record being changed (changes)","subject":"<study id> | ... (email only)","body":"short email body signed Albert (email only)","changes":[{"label":"...","from":"...","to":"..."}],"observed":"1 sentence: the signal behind it","why":"1 sentence: why this helps enrolment","impact":"short, e.g. +4 enrolled over 6 weeks","days":<integer days earlier completion, 1-45>,"conf":"High|Medium|Low","verb":"Approve & send|Approve & schedule|Approve & request|Approve & publish","followUp":"1 sentence on what Prime will do after approval"}}' }] });
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
    const suggest = ['High','Medium','Low'].includes(a.conf) ? a.conf : null;
    this.setState(s => ({ naLoading:false, naPending:item, naOptions:['High','Medium','Low'],
      naThread:s.naThread.concat([{ role:'prime', text:'Draft ready: “' + item.title + '” (' + item.study + ', ' + item.impact + ').\n\nHow confident are you that this will help enrolment?' + (suggest ? ' My estimate is ' + suggest + '.' : '') }]) }));
  }
  finalizeNew(item) {
    ITEMS.unshift(item);
    this.setState({ naOpen:false, naThread:[], naOptions:[], naLoading:false, naText:'', naPending:null, tab:'inbox', filter:'open', study:null, selectedId:item.id, stickyId:null });
    this.addLog([{ time:'Just now', text:'You asked Prime to draft: ' + item.title + ' (' + item.conf + ' confidence)', study:item.study, kind:'you' }]);
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
    items.forEach(i => { if (!S.study || i.study === S.study) counts[this.group(i.st)]++; });
    const openAll = items.filter(i => i.st === 'open');
    const list = items.filter(i => (this.group(i.st) === S.filter || i.id === S.stickyId) && (!S.study || i.study === S.study));
    const selRaw = list.find(i => i.id === S.selectedId) || list[0];

    const listV = list.map(i => {
      const on = selRaw && i.id === selRaw.id;
      const line = i.st === 'sending' ? 'Working on it…' : i.st === 'auto' ? 'Auto-approved | low-risk rule' : i.st === 'rejected' ? 'Dismissed | ' + (S.reasons[i.id] || '') : i.st === 'open' ? '' : i.followUp;
      return { id:i.id, pri:i.pri, priFg:PRI[i.pri][0], priBg:PRI[i.pri][1], study:i.study, kind:i.kind, time:i.time, title:i.title, conf:i.conf, confDot:CONF[i.conf],
        daysShort: i.moneyTxt || '−' + i.days + ' days | ≈ ' + costOf(i.study, i.days).txt, hasDays:i.days > 0, daysOnly:'−' + i.days + ' days', saveOnly: i.moneyTxt || '≈ ' + costOf(i.study, i.days).txt + ' saved', statusLine:line, hasStatusLine:!!line,
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
        team:TEAM.map(m => ({ name:m.name, label:m.name })), assignee:(S.assignees || {})[id] || TEAM[0].name,
        assigneeRole:(TEAM.find(m => m.name === ((S.assignees || {})[id] || TEAM[0].name)) || TEAM[0]).role,
        onAssign:e => { const v = e.target.value; this.setState(s => ({ assignees:Object.assign({}, s.assignees, { [id]:v }) })); this.addLog([{ time:'Just now', text:'You assigned "' + i.title + '" to ' + v, study:i.study, kind:'you' }]); },
        fcNow:fmt(now), fcAfter:fmt(after), fcNote, moneyInfoOpen:S.moneyInfoId === id, toggleMoneyInfo:() => this.setState(s => ({ moneyInfoId: s.moneyInfoId === id ? null : id })), money: i.moneyTxt || '≈ ' + costOf(i.study, i.days).txt + ' saved', showRates:!i.moneyTxt, moneyNote: i.moneyTxt ? i.moneyNote : i.days + ' days earlier × $' + costOf(i.study, i.days).rate.toLocaleString('en-US') + '/day (' + costOf(i.study, i.days).ph.replace('Phase ', 'Phase ').replace(/ 1$/, ' I').replace(/ 2$/, ' II').replace(/ 3$/, ' III') + ' avg)',
        attachments:((S.attachments || {})[id] || []).map(a => ({ tag:a.tag, title:a.title, meta:a.meta, remove:() => this.setState(s => ({ attachments:Object.assign({}, s.attachments, { [id]:((s.attachments || {})[id] || []).filter(x => x.key !== a.key) }) })) })),
        studioLabel:((S.attachments || {})[id] || []).length ? 'Add another in AI Studio' : 'Add video or slides', openStudio:() => this.setState({ tab:'studio', stDraftId:id, stOut:null, stT:0, stPlay:false }),
        isEmail:i.type === 'email', isChanges:i.type === 'changes', to:i.to, subject:i.subject || '', changes:i.changes || [],
        body:S.edits[id] ?? i.body ?? '', editing, notEditing:!editing, canEdit:i.type === 'email' && st === 'open', editLabel: editing ? 'Done editing' : 'Edit draft',
        toggleEdit:() => this.setState({ editingId: editing ? null : id }),
        onBody:e => { const v = e.target.value; this.setState(s => ({ edits:Object.assign({}, s.edits, { [id]:v }) })); },
        observed:i.observed, why:i.why, sources:i.sources, contexts:S.contexts[id] || [],
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
      bg: S.filter === k ? '#fff' : 'transparent', fg: S.filter === k ? '#0a0a0a' : '#66696e', shadow: S.filter === k ? '0 1px 2px rgba(0,0,0,0.06)' : 'none' }));
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
      return Object.assign({}, s, { pct:Math.round(s.enrolled / s.target * 100) + '%', fc:fmt(fcD), fcColor:s.dot,
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
    const barsV = allSites.map(x => ({ code:x.code, dot:STC[x.status][0], codeFg: S.openSite === x.code ? '#003358' : '#8a8d92',
      expectedPx:px(x.expected), enrolledPx:px(x.enrolled), consentedPx:px(Math.max(0, x.consented - x.enrolled)), failPx:px(x.screenFailed),
      tip: x.name + ' — enrolled ' + x.enrolled + ', consented ' + x.consented + ', screen-failed ' + x.screenFailed + ', expected ' + x.expected,
      toggle: () => this.setState({ openSite: S.openSite === x.code ? null : x.code, siteFilter:'all' }) }));
    const OUT = { 'NASH-3301':[0.03,0.06], 'DIA-2043':[0.08,0.07], 'CARD-0552':[0.05,0.09], 'RA-2209':[0.38,0.06], 'ONC-1187':[0.31,0.08] }[sStudy.id] || [0.05,0.07];
    const tEn = allSites.reduce((a, x) => a + x.enrolled, 0), tSf = allSites.reduce((a, x) => a + x.screenFailed, 0);
    const tScr = allSites.reduce((a, x) => a + Math.max(x.consented, x.enrolled + x.screenFailed), 0);
    const tPre = Math.round(tScr * 1.85), tRef = Math.round(tPre * 1.6);
    const tComp = Math.round(tEn * OUT[0]), tDrop = Math.round(tEn * OUT[1]), tAct = tEn - tComp - tDrop;
    const pc = (a, b) => b ? Math.round(a / b * 100) + '%' : '0%';
    const bar = v => Math.max(2, Math.round(v / tRef * 100)) + '%';
    const funnel = [
      { label:'Referred', value:tRef, sub:'All sources', color:'#8baac5', bar:'100%' },
      { label:'Prescreened', value:tPre, sub:pc(tPre, tRef) + ' of referred', color:'#567fa1', bar:bar(tPre) },
      { label:'Enrolled / Screen failed', value:tEn, value2:tSf, hasSecond:true, sub:pc(tEn, tEn + tSf) + ' screen success', color:'#004677', bar:bar(tEn) },
      { label:'Active', value:tAct, sub:pc(tAct, tEn) + ' of enrolled', color:'#004677', bar:pc(tAct, tEn) },
      { label:'Completed', value:tComp, sub:pc(tComp, tEn) + ' of enrolled', color:'#27a763', bar:pc(tComp, tEn) },
      { label:'Drop-outs', value:tDrop, sub:pc(tDrop, tEn) + ' of enrolled', color:'#eca49e', bar:pc(tDrop, tEn) },
    ].map((c, k) => Object.assign({ hasSecond:false, value2:'' }, c, { divider: k ? '1px solid #f0f0f3' : 'none' }));
    const sv = { id:sStudy.id, sites:barsV, rows:rowsV, funnel, funnelNote:'Across ' + allSites.length + ' sites | target ' + sStudy.target + ' participants',
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
    const prime = { views:[Object.assign({ label:'Saved actions', count:PRIME.length, onClick:() => this.setState({ primeView:'saved' }) }, pv('saved')), Object.assign({ label:'Archive', count:S.archive.length, onClick:() => this.setState({ primeView:'archive' }) }, pv('archive'))],
      isSaved:S.primeView === 'saved', isArchive:S.primeView === 'archive', archive, archEmpty:archive.length === 0, archQ:S.archQ, onArchQ:e => this.setState({ archQ:e.target.value }),
      query:S.primeQuery, onQuery:e => this.setState({ primeQuery:e.target.value }), onKey:e => { if (e.key === 'Enter') this.primeSubmit(); }, submit:this.primeSubmit, back:this.primeBack,
      showList:!pa, showRun:!!pa, cards:primeCards, noMatch:primeCards.length === 0,
      countText: PRIME.length + ' saved actions',
      noMatchText:'No saved action matches. Press Enter and the agent will draft a plan for “' + pq + '”.' };
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
    const cs = INTEGRATIONS.find(s => s.id === S.connectFor);
    const cmSubmit = () => {
      if (!S.connUser.trim() || !S.connPass) return this.setState({ connErr:'Enter both username and password.' });
      this.setState({ connectFor:null, connPass:'', connErr:'' }); this.connectSys(cs)();
    };
    const cm = { open:!!cs, name:cs ? cs.name : '', vendor:cs ? cs.vendor : '', mono:cs ? cs.mono : '',
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
        briefOpen: S.budBriefOpen !== false, chev: S.budBriefOpen !== false ? 'rotate(90deg)' : 'rotate(0deg)', toggleBrief:() => this.setState(s => ({ budBriefOpen:s.budBriefOpen === false })),
        when:'Today, ' + (S.budLastScan || '6:00 AM'),
        headline:'Prime checked ' + checked + ' invoice lines from ' + rows.length + ' sites. ' + holdLines + ' don’t match the contract or the EDC (' + k$(tHold) + ' on hold). ' + (n90 ? n90 + ' RA-2209 sites have waited 90+ days, which puts enrolment at risk.' : 'No site has waited more than 3 months.'),
        linesLabel: holdLines + ' OF ' + checked + ' LINES DON’T MATCH',
        findings: upAll.reverse().map(({ r, v }) => ({ site:r.b.name, text:'sent ' + v[0] + ' today. 3 visits are billed at 45 min where the contract says 30, and 1 lab test has no result in the EDC.', amt:k$(v[3]), dot:'#e5a11a' })).concat(BUD_FINDINGS.map(f => Object.assign({}, f, { dot:'#e5a11a' }))),
        actions: BUD_IDS.map(id => items.find(i => i.raw.id === id)).filter(Boolean).map((i, j) => { const d = done[i.st] || ['Done ✓','#197a48'], p = pc[i.raw.pri] || pc.P3;
          return { pri:i.raw.pri, priBg:p[0], priFg:p[1], title:i.title, study:i.raw.study, impact: i.raw.days ? i.raw.impact + ' | ≈ ' + costOf(i.raw.study, i.raw.days).txt + ' saved' : i.raw.impact, border: j ? '1px solid #eeeff0' : 'none',
            isOpen:i.st === 'open', isDone:i.st !== 'open', doneLabel:d[0], doneFg:d[1], open:() => goItem(i.raw.id, i.st) }; }),
        riskOpen: n90 > 0, riskDone: released,
        riskText: n90 ? n90 + ' RA-2209 sites (' + names(r90.map(r => r.b.short)) + ') have waited ' + Math.min(...ages) + '–' + Math.max(...ages) + ' days for ' + k$(t90) + '. Sites unpaid past 3 months often pause screening, and Leeds screening is already down 30% since August. Releasing the verified lines protects about 21 days of the RA-2209 timeline (≈ ' + relCost + ').' : '',
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
      cm, enr, bud, bu, isBudget:S.tab === 'budget', navBudget:nav('budget'), goBudget:() => this.setState({ tab:'budget' }),
      isPrime:S.tab === 'prime', notPrime:S.tab !== 'prime', navPrime:nav('prime'), goPrime:() => this.setState({ tab:'prime' }), systemsList:INTEGRATIONS.filter(s => S.conn[s.id] === 'on').map(s => s.name), prime, run,
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
            sFooter:'Prepared by Prime for Albert Enrollstein | Draft', sPage:(k + 1) + ' / ' + n,
            prev:() => this.setState({ stSlide:Math.max(0, k - 1) }), next:() => this.setState({ stSlide:Math.min(n - 1, k + 1) }),
            thumbs:o.slides.map((s, i) => ({ n:String(i + 1).padStart(2, '0'), title:s.title, bd: i === k ? '#004677' : '#e2e3e5', pick:() => this.setState({ stSlide:i }) })) });
        }
        return base; })(),
      isStudio:S.tab === 'studio', navStudio:nav('studio'), goStudio:() => this.setState({ tab:'studio' }),
      na:(() => { const th = S.naThread || [], started = th.length > 0, txt = S.naText || '';
        return { open:!!S.naOpen, text:txt, loading:!!S.naLoading, spin:spinner(12,'#55585d'), loadingLabel: started && th.length > 1 ? 'Prime is updating the draft…' : 'Prime is reading your request…',
          thread:th.map(m => m.role === 'user' ? { who:'YOU', text:m.text, align:'flex-end', bg:'#e5ecf2', fg:'#0a0a0a', bd:'#cddae5' } : { who:'PRIME', text:m.text, align:'flex-start', bg:'#fff', fg:'#0a0a0a', bd:'#e2e3e5' }),
          hasOptions:!S.naLoading && (S.naOptions || []).length > 0, options:(S.naOptions || []).map(l => ({ label:l, pick:() => this.submitNew(l) })),
          placeholder: S.naPending ? 'Pick High, Medium or Low above, or type it…' : started ? 'Reply to Prime…' : 'Describe the action, e.g. “Ask Barcelona to add Saturday screening slots for DIA-2043”',
          submitLabel: started ? 'Reply' : 'Draft with Prime', btnOpacity: txt.trim() && !S.naLoading ? 1 : 0.5,
          onText:e => this.setState({ naText:e.target.value }), onKey:e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.submitNew(); } },
          empty:!started, stop:e => e.stopPropagation(), threadRef:el => { if (el) el.scrollTop = el.scrollHeight; },
          submit:() => this.submitNew(), toggle:() => this.setState(s => ({ naOpen:!s.naOpen, tab:'inbox' })), close:() => this.setState({ naOpen:false, naThread:[], naOptions:[], naText:'', naLoading:false, naPending:null }) }; })(),
      brief:(() => {
        const order = ['budget','charite','nash','rapay','houston'];
        const done = { approved:['Approved ✓','#197a48'], auto:['Auto-applied ✓','#197a48'], sending:['Sending…','#55585d'], rejected:['Rejected','#85888c'], closed:['Closed','#85888c'] };
        const pc = { P1:['#fcecea','#bd3226'], P2:['#fdf3e0','#8a5a06'], P3:['#f2f2f4','#55585d'] };
        const acts = order.map(id => items.find(i => i.raw.id === id)).filter(Boolean);
        const left = acts.filter(i => i.st === 'open').length;
        return { open:S.briefOpen !== false, chev:S.briefOpen !== false ? 'rotate(90deg)' : 'rotate(0deg)', when:'Today, ' + S.lastScan,
          toggle:() => this.setState(s => ({ briefOpen:s.briefOpen === false })),
          headline: left ? 'DIA-2043 and NASH-3301 are furthest behind plan. ' + left + ' of ' + acts.length + ' recommended actions still need your approval.' : 'All recommended actions are handled. Prime will report the effect on enrolment in tomorrow’s brief.',
          insights:[
            { study:'DIA-2043', dot:'#c6390f', text:'is 96 of 180 enrolled. Referral budget is concentrated on Phoenix (9% referral-to-enrolment, vs 22% at San Diego and Atlanta), Charité has no CRA, and Houston has no first patient yet.' },
            { study:'NASH-3301', dot:'#c6390f', text:'is 22 of 120. ClinicalTrials.gov shows 2 new trials recruiting the same F2–F3 patients at Hamburg and Chicago, and referrals there are down 35% in 3 weeks.' },
            { study:'RA-2209', dot:'#b0730a', text:'is close to target (300 of 320), but site invoices have gone unpaid for 3 months. That could slow screening this month.' },
            { study:'CARD-0552', dot:'#197a48', text:'EU activations are recovering after the CRO nudge. ONC-1187 is within tolerance.' }],
          actions:acts.map((i, j) => { const d = done[i.st] || ['Done ✓','#197a48'], p = pc[i.raw.pri] || pc.P3;
            return { pri:i.raw.pri, priBg:p[0], priFg:p[1], title:i.raw.title, study:i.raw.study, impact:i.raw.impact + ' | ≈ ' + costOf(i.raw.study, i.raw.days).txt + ' saved', border: j ? '1px solid #eeeff0' : 'none',
              isOpen:i.st === 'open', isDone:i.st !== 'open', doneLabel:d[0], doneFg:d[1],
              open:() => this.setState({ tab:'inbox', filter:this.group(i.st), study:null, selectedId:i.raw.id, stickyId:null }) }; }) }; })(),
      chat:(() => { const added = S.chatAdded || {}, n = Object.keys(added).length;
        const apps = [{ id:'teams', name:'Microsoft Teams', mono:'T', tile:'#5b5fc7' }, { id:'slack', name:'Slack', mono:'S', tile:'#4a154b' }];
        return { open:!!S.chatOpen, label: n ? 'Prime in ' + apps.filter(a => added[a.id]).map(a => a.id === 'teams' ? 'Teams' : 'Slack').join(' & ') : 'Add to Teams / Slack',
          toggle:() => this.setState(s => ({ chatOpen:!s.chatOpen })),
          apps:apps.map(a => ({ isTeams:a.id === 'teams', isSlack:a.id === 'slack', name:a.name, logo:'/assets/' + a.id + '.png', label: added[a.id] ? 'Added ✓' : 'Add', fg: added[a.id] ? '#197a48' : '#004677',
            add:() => { if (added[a.id]) return; this.setState(s => ({ chatAdded:Object.assign({}, s.chatAdded, { [a.id]:true }), chatOpen:false })); this.addLog([{ time:'Just now', text:'You added Prime to ' + a.name, study:'All', kind:'you' }]); } })) }; })(),
      isSystems:S.tab === 'systems', navSystems:nav('systems'), goSystems:() => this.setState({ tab:'systems' }),
      sysCount:INTEGRATIONS.filter(s => S.conn[s.id] === 'on').length + '/' + INTEGRATIONS.length,
      sysSub:INTEGRATIONS.filter(s => S.conn[s.id] === 'on').length + ' of ' + INTEGRATIONS.length + ' connected | agents get read-only access; any write needs your approval',
      systems:INTEGRATIONS.map(s => { const c = S.conn[s.id], on = c === 'on';
        return Object.assign({}, s, { isOn:on, isOff:c === 'off', isConnecting:c === 'connecting',
          status: on ? 'Connected' : c === 'connecting' ? 'Connecting' : 'Not connected',
          stFg: on ? '#197a48' : '#55585d', stBg: on ? '#e7f6ee' : '#f2f2f4', dot: on ? '#27a763' : c === 'connecting' ? '#e5a11a' : '#b3b5b8',
          tileBg: on ? '#e5ecf2' : '#f2f2f4', tileFg: on ? '#003358' : '#66696e',
          access: on ? (s.on ? s.access : 'Read') : '—', sync: on ? (S.syncAt[s.id] || s.sync || 'Just now') : '—',
          used: s.used || 'Available to Prime', spin:spinner(13,'#004677'),
          connect:() => this.setState({ connectFor:s.id, connUser:'', connPass:'', connErr:'' }), disconnect:this.disconnectSys(s) }); }),
      isInbox:S.tab === 'inbox', isStudies:S.tab === 'studies', isSites:S.tab === 'sites', siteFilters, sv, isActivity:S.tab === 'activity',
      navInbox:nav('inbox'), navStudies: S.tab === 'sites' ? nav('sites') : nav('studies'), navActivity:nav('activity'),
      goInbox:() => this.setState({ tab:'inbox' }), goStudies:() => this.setState({ tab:'studies' }), goActivity:() => this.setState({ tab:'activity' }),
      openCount:openAll.length,
      inboxSub, tabs, list:listV, listEmpty:listV.length === 0, emptyText,
      hasStudyFilter:!!S.study, studyFilter:S.study || '', clearStudy:() => this.setState({ study:null, selectedId:null }),
      hasSel, sel, studies, log,
      askText:S.askText, onAskText:e => this.setState({ askText:e.target.value }), onAskKey:e => { if (e.key === 'Enter') this.submitAsk(); },
      submitAsk:this.submitAsk, askShown:S.askShown, askQ:S.askQ, askAnswer:S.askAnswer, askLoading:S.askLoading, spinner:spinner(13,'#004677'),
      closeAsk:() => this.setState({ askShown:false }),
    };
  }
}

export default Component;
