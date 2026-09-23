# 7. Service design

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 26-27*

Version of 13 September 2026 Module page
7. Service design


## 7.1. The operation the customer actually feels


A process map (Chapter 6) shows how work flows. But when the “product” is a service — a haircut,
a clinic visit, an onboarding flow, a food delivery — the customer is inside the operation while it
runs. They experience the queue, the handoffs, the failures, in real time. Service design is process
design seen from the customer’s seat: it asks not only “does the work get done?” but “what is it like
to be the unit moving through this system?”


## 7.2. Touchpoints and the line of visibility


Definition 12 (touchpoint, frontstage, backstage). A touchpoint is any moment the
customer interacts with the service — a webpage, a confirmation text, a driver at the door, a
support chat. Frontstage actions are the ones the customer sees; backstage actions are the
work that enables them but stays hidden, separated by a conceptual line of visibility. A service
blueprint maps customer actions, frontstage, and backstage together, so each visible touchpoint
is traced to the hidden work that must succeed for it to land.
Customer Open app Place order Receive food
Show menu Driver
Frontstage
& price hands over
line of
visibility
Kitchen Dispatch &
Backstage
prepares routing
Figure 6: A service blueprint for food delivery. Above the dashed line of visibility are the customer’s
actions and the frontstage touchpoints they see; below it is the backstage work that must succeed
for each touchpoint to land. Every frontstage promise has a backstage dependency — and every
dependency is a potential failure point.


## 7.3. Failure points and recovery paths


The reason to draw the blueprint is to find where it can fail before the customer does.
Definition 13 (failure point and recovery path). A failure point is a touchpoint or back-
stage step that can go wrong from the customer’s perspective: the driver is late, the dish is wrong,
the payment is declined, the page errors. A recovery path (service recovery) is the designed
response that returns a failed interaction to an acceptable outcome — a proactive apology and
refund, a fast re-send, a human escalation.
A foundational result of service research, the service-recovery paradox, is that a failure handled
excellently can leave a customer more loyal than one who never hit a problem at all — whereas a
26

Version of 13 September 2026 Module page
failure handled badly loses them for good. The implication for design is sharp: recovery is not an
afterthought, it is part of the service. A blueprint without recovery paths is a design that works
only when nothing goes wrong, which at volume is never.
Pitfall. Designers lavish attention on the happy-path touchpoints — the slick onboarding,
the beautiful confirmation screen — and leave failure handling to improvised customer-service
heroics. But customers judge a service disproportionately by how it behaves when it breaks.
An un-designed recovery path is the most common reason a technically-functional operation
still bleeds customers.
Example — Designing the failure, not just the feature. A telehealth startup blueprinted a
consultation and listed failure points: patient can’t find the video link, doctor runs late, connection
drops mid-call, prescription doesn’t reach the pharmacy. For each they designed a recovery: an
SMS link fallback, a live “your doctor is 6 min away” status, a one-tap phone-call fallback, and
automated pharmacy confirmation with a human chaser. None of these are the “product” —
and they are exactly what made patients trust it enough to return. The competition designed the
consultation; this team designed the consultation and its failure modes.
Exercises
7.1. Blueprint a hotel check-in: list at least four customer actions, the frontstage touchpoints,
and one backstage step behind each. Draw the line of visibility.
7.2. For that blueprint, identify the three most likely failure points and design a recovery path
for each.
7.3. Explain the service-recovery paradox to a founder who wants to cut the support budget
because “the product just works.”
Answers. (1) Customer actions: arrive, queue at desk, give name/ID, receive key, go to room. Frontstage: receptionist
greeting, booking lookup on screen, key handover, directions. One backstage step behind each: booking synced from
the reservation system; room marked clean by housekeeping; key card encoded; room actually vacated and serviced.
The line of visibility sits between the receptionist’s screen (frontstage) and the housekeeping and PMS systems
(backstage). (2) Likely failure points and recoveries: reservation not found → search by email/card and honour the
rate on the spot; room not ready → proactive apology, store luggage, offer a drink, text when ready; key card fails
→ staff escort and re-encode immediately. (3) A good explanation: customers who never hit a problem feel neutral;
a customer whose problem is fixed fast and graciously often ends up more loyal than one who sailed through — so
support is not a cost to cut but the part of the service that earns the most loyalty per euro, precisely when things break.
27
