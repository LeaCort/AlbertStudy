# 6. Designing a process from scratch

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 24-25*

Version of 13 September 2026 Module page
6. Designing a process from scratch


## 6.1. From a promise to a flow


Everything so far has been analysis — a way of seeing. Now we design. A business model makes
a promise (“fresh meal kits delivered next-day”); a process is the concrete chain of steps that keeps
that promise, every time, at volume. Designing one from scratch means drawing the flow that carries
a single customer request from “I want this” to “I have it,” and then asking the course’s two questions
of every link: can it be delivered, and where does it break first?


## 6.2. Mapping the value delivery flow


Start by mapping the path of one unit of customer value — one order — across the whole system,
ignoring the org chart. The org chart tells you who reports to whom; the flow tells you how value
actually moves, and value rarely respects departmental boundaries.
Definition 11 (process map). A process map is a directed diagram of the steps a unit passes
through from request to delivery. Boxes are activities (they add value or transform the unit);
arrows are flow; diamonds are decision points where the path branches on a condition; and
the points where the unit passes from one owner to another are handoffs. A good map also
marks where units wait — the queues between steps, which Chapter 4 and Chapter 5 told us
are where the time actually goes.
Order Validate In yes Pick &
Ship
received payment stock? pack
no
Backorder
to supplier
Figure 5: A process map for order fulfilment. Boxes are activities, the diamond is a decision point
that branches the flow, and each arrow that crosses an ownership boundary is a handoff — the spots
where work waits and information is lost.


## 6.3. Decision points and handoffs: where designs leak


Two features of a map deserve a designer’s paranoia.
Decision points are where the flow branches. Each one is a place to ask: who decides, on what
information, how fast, and what happens to the “no” branch? An unstaffed or ambiguous decision
point is where units silently pool into an invisible queue.
Handoffs are where a unit passes between people, teams, or systems. Every handoff is a risk:
information is dropped, responsibility blurs, and a queue forms at the boundary while the receiver
finishes something else. The empirical rule is blunt: most delay and most defects are born at
handoffs, not inside activities. Therefore a core design move is to minimise handoffs — fewer
boundaries crossed, less leakage.
24

Version of 13 September 2026 Module page
Pitfall. A seductive error is to design the happy path only — the clean sequence when every-
thing is in stock, payment clears, and the customer behaves. Real volume is made of exceptions.
A process that has no explicit branch for “payment failed,” “out of stock,” or “customer changed
the address after shipping” does not lack those cases; it just handles them by improvisation,
which does not scale and is exactly where the design breaks first.


## 6.4. Designing for clarity


The aim is not a baroque diagram that captures every contingency; it is a process a tired human can
execute correctly at 2 a.m. under load. Designing for clarity means: each step has one owner; each
decision has an explicit rule; the default path is obvious; and the exceptions have named, owned
routes rather than “someone will figure it out.” Clarity is itself a form of capacity — an ambiguous
process burns time on coordination (the subject of Chapter 8) that a clear one spends on throughput.
Example — Designing, not documenting. A subscription-box startup mapped its fulfilment
and found eleven handoffs between order and dispatch, three of them crossing into a separate
“exceptions team” whose queue was invisible. Redesigning so that one fulfilment owner carried
an order end-to-end — with explicit rules for the two genuinely hard exceptions — cut handoffs
to four. Cycle time fell by half, with no new hardware and no faster work: the time had been living
in the gaps between steps, exactly where Little’s Law said to look.
Exercises
6.1. Map, as boxes/arrows/diamonds, the process of a customer returning a defective product
for a refund. Mark every handoff and every decision point.
6.2. For your map, identify the single handoff most likely to lose information, and propose a
redesign that removes or de-risks it.
6.3. Take a “happy path” process you know and add the three most likely exception branches.
Which one, if unhandled, breaks the design at the lowest volume?
Answers. (1) A solid map runs: request return → decision within return window? (no → reject with reason) →
print label / ship back (handoff: customer → carrier) → receive & inspect (handoff: carrier → warehouse) →
decision defective? (no → restock or return to sender) → issue refund (handoff: warehouse → finance) → notify
customer. Every arrow crossing an owner is a handoff; the two diamonds are the decision points. (2) Usually the
carrier → warehouse handoff (the returned item arrives with no link to the original order) or warehouse → finance
(inspection result doesn’t reach whoever refunds). De-risk by carrying a single return ID end-to-end so each owner
passes it on with the item. (3) Depends on the process, but the branch that breaks first is the exception that occurs
most frequently at low volume — commonly “payment failed” or “item out of stock,” because those happen from
day one, whereas rarer exceptions only bite at higher volume.
25
