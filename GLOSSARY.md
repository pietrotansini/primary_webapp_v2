# Recruitment Control Tower

A site-engagement CRM for biotech sponsors: it keeps a Sponsor's clinical operations team in steady, measured contact with the Sites recruiting for its Studies, and ties that contact to each Site's enrollment.

## Language

### Parties

**Sponsor**:
The biotech company that runs the Studies. Its clinical operations team are the people who sign in.
_Avoid_: customer, client, tenant

**Study**:
A clinical trial the Sponsor runs, identified by its study code, such as DIA-2043.
_Avoid_: trial, protocol, project

**Site**:
A hospital or clinic recruiting patients for a Study.
_Avoid_: center, account, investigator site

**Site Contact**:
A person at a Site the platform writes to, such as the PI or the study coordinator. Site Contacts come from the Sponsor's CTMS.
_Avoid_: contact, recipient, site user

**Subject**:
A patient taking part in a Study, known to the platform only by the pseudonymized subject ID the EDC assigns, never by name.
_Avoid_: patient record, participant, enrollee

### Engagement

**Action**:
A task assigned to one person on the Sponsor side, with a deadline and an escalation path, such as sending a Site a Newsletter or answering a Site's question. Prime proposes some Actions, and a Site's mail starts others.
_Avoid_: task, recommendation, to-do, engagement email

**Report**:
A set of information and insights about a Site or Study, such as screening against plan this month. It reaches a Site inside a mail.
_Avoid_: summary, dashboard, digest

**Newsletter**:
A periodic mail to one Site, sent as an Action, that bundles Reports with Requests and reminders.
_Avoid_: digest, bulletin, engagement email

**Campaign**:
A scheduled set of Actions on the calendar.
_Avoid_: blast, sequence, schedule

**Request**:
A call to act inside a mail the platform sends a Site, either an acknowledgement or a short form.
_Avoid_: call to action, CTA, button

**Site Response**:
A Site's answer to a Request in a mail we sent, such as an acknowledgement or a completed form.
_Avoid_: reply, answer, submission

**Site Message**:
Any free-text email a Site sends us, whether it replies to one of our mails or arrives unsolicited.
_Avoid_: reply, inbound mail, site email

### Platform

**Prime**:
The single AI agent behind the web app's Ask Prime and chat panel and the Teams and Slack bots, the same one wherever it is reached.
_Avoid_: assistant, copilot, bot
