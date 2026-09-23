# 10. Operational MVP and failure-mode analysis

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 34-36*

Version of 13 September 2026 Module page
10. Operational MVP and failure-mode
analysis


## 10.1. Shipping the smallest operation that proves the promise


You have analysed and designed. The last discipline is restraint: do not build the whole beautiful
operation before you know it works. Just as a product gets a minimum viable product, an operation
gets a minimum viable operation — the smallest version that lets you actually deliver to real
customers and learn where it breaks, before you have sunk capital into automating something that
should not exist.


## 10.2. The operational MVP


Definition 16 (operational MVP). An operational MVP is the minimum operational capa-
bility that can deliver the core promise to real customers and generate real learning — the
smallest operation you genuinely run, not the whole intended operation in miniature.
Designing one means sorting every step of the intended operation into three buckets: build it now
(it is essential and must be real), simulate it now (deliver the outcome manually or with a stand-
in rather than the eventual automated system), or defer it (it is not yet needed at this volume). The
key move is simulation — often called “doing things that don’t scale.” Before building a €200k auto-
mated warehouse system, fulfil the first hundred orders by hand from a spare room. The customer
gets the same outcome; you spend almost nothing; and you learn what the real process needs from
observing it, rather than guessing at a whiteboard. You build the expensive, automated version only
for steps that simulation has proven are necessary and are about to become the constraint.
Principle 6 (the MVP scoping rule). Build only what is essential to the core promise and
cannot be faked. Simulate everything whose outcome can be delivered manually at current
volume, deferring its automation until volume makes the manual version the constraint. Defer
everything not yet needed. The justification for each placement is a volume: “we will build X
when we exceed Y orders/day, because that is when simulating it breaks.” Scoping without a
volume trigger is just opinion.
Pitfall. The twin errors are over-building and under-building. Over-building automates and
polishes operations for a scale you have not reached, burning the very cash (Chapter 9) your real
constraint needs — the most common way well-funded operations starve. Under- building fakes
a step that genuinely had to be real (safety, compliance, the core quality the customer is paying
for) and ships a broken promise. Correct scoping is honest about which steps are which, and
says so out loud.
34

Version of 13 September 2026 Module page


## 10.3. Early failure-mode analysis


An operational MVP is not a hope; it is a hypothesis you stress-test on paper before volume tests it
for you. This is the course’s second question made systematic: where will this break first, at what
volume, and what do we do about it?
Definition 17 (failure-mode analysis). A failure-mode analysis for an operational design
enumerates the ways it can break, estimates the volume or condition that triggers each, ranks
them by likelihood and impact, and proposes a mitigation for each. The disciplined output
names the first three failure points — the ones that trigger soonest as the operation scales.
The reason to estimate a triggering volume for each failure, rather than just listing risks, is that
it turns vague anxiety into a roadmap. “The packing table jams at ≈120 orders/day; the payment-
reconciliation spreadsheet breaks at ≈500 customers; the single support agent saturates at ≈40
tickets/day” tells you exactly what to fix and when — in the order the failures will actually arrive.
This is the Theory of Constraints applied forward in time: as you elevate one constraint, you are
naming the next one before it bites.
Example — A failure-mode analysis that set the roadmap. A craft-soda startup ran the
analysis on its hand-built operation. Failure 1: the single bottling line caps at ≈300 bottles/day —
hits at ≈25 orders/day (week 3). Mitigation: a second hand-line, €400. Failure 2: manual address
entry produces ≈2% mis-deliveries — tolerable now, intolerable past ≈50 orders/day. Mitigation:
address validation, deferred. Failure 3: the founder personally answers every support email —
saturates at ≈30/day. Mitigation: templates now, a hire at ≈60 orders/day. The analysis did not just
list risks; it sequenced the next three months of operational work by triggering volume.


## 10.4. Second-order effects: fixing one thing reveals the next


A final, course-defining idea ties the whole sequence together. Operational improvements have
second-order effects: solving the visible problem changes the system, often revealing or even
worsening a problem elsewhere. This is not a reason to do nothing — it is a reason to anticipate.
Principle 7 (the moving constraint). Relieving a constraint does not “fix” the system; it
moves the constraint. Throughput rises until the next-tightest resource binds — which is often
hidden because it was never stressed before. Therefore every improvement should be paired with
the question: if this works, what becomes the new bottleneck, and are we ready for it?
Local efficiency gains, pursued without this question, can even degrade the whole — speeding a
feeder floods the next stage’s queue and, via the utilization–delay curve (Chapter 4), can lengthen
overall cycle time.
Example — The improvement that made things worse. A warehouse doubled picking speed
— its obvious bottleneck. Throughput barely moved, and packing now drowned: it had quietly
been the second constraint, and a flood of picked orders pushed it past the knee of its utilization
curve, so total cycle time rose. The fix to picking was correct in isolation and harmful in the system,
precisely because no one asked where the constraint would move. Always solve one constraint
while watching for the next.
35

Version of 13 September 2026 Module page


## 10.5. Presenting an operational design to a non-operations reader


An operational design is worthless if it cannot be defended to the people who fund and depend on
it — investors, co-founders, strategy leads — who do not speak in utilization curves and Little’s Law.
Translating system dynamics into business consequences is the last skill of the course, and it has a
reliable shape. Name four things, in the language of money and promises:
Method 2 (The four-part design justification).
1. The constraint — the one resource or policy that sets the pace, in plain terms.
2. The triggering volume — the specific level of demand at which it binds.
3. The business consequence — what the customer and the P&L feel when it does, quantified.
4. The mitigation and its cost — the concrete fix and what it takes to deploy it.
The difference this makes is the difference between a shrug and a decision. Compare “utilization will
hit 95%” — true, and meaningless to an investor — with the same fact dressed for its audience:
Example — The same fact, made fundable. “At our forecast growth we run out of responsive
capacity in March (the constraint: our single sorting line, binding at ≈900 orders/day — the
triggering volume). When it binds, deliveries slip from 2 days to 2 weeks and we lose the enter-
prise customers who are 40% of revenue (the business consequence). The fix is a second sorting
line at €18k, installed in six weeks — so we must commit by January (the mitigation and its
cost).” Every clause is a system fact translated into a decision the reader can actually make. That
translation — not the diagram — is what gets the operation funded.
This is the whole course in one motion: see the operation as a system, find where it breaks first, put a
volume on it, and say what that costs the business — so that the two questions you started with can
finally be answered out loud, in numbers, to the people who fund and depend on the answer.
Exercises
10.1. For a new juice-bar delivery business, sort eight operational steps into build / simulate /
defer, and give a volume trigger for each “build” and each “defer”.
10.2. Run a failure-mode analysis on that MVP: name the first three failure points, the volume
each triggers at, and a mitigation for each.
10.3. Pick one mitigation that relieves a constraint and predict the second-order effect: what
becomes the new constraint, and at what volume?
10.4. Write a three-sentence briefing of your design for a non-operations investor, using the four-
part shape: constraint, triggering volume, business consequence, and the fix.
Answers. (1) A good answer builds only the essential, un-fakeable steps (taking the order and payment, making
and delivering the drink safely) and gives each a volume trigger for when the manual version must be automated;
simulates what can be done by hand now (routing by phone, a spreadsheet “inventory”); and defers what current
volume does not need (a custom app, a second kitchen) — each deferral tagged with the volume that will call for it. (2)
The three failure points must each carry a triggering volume and a mitigation, ordered by which binds first — e.g.
the blender saturates at ≈40 drinks/hour, the single driver at ≈15 deliveries/hour, the manual payment reconciliation
at ≈200 orders/day. (3) A correct answer names a new constraint created by the fix and its volume — e.g. adding a
second driver relieves delivery but pushes the blender past its knee at ≈40 drinks/hour, which becomes the binding
constraint. (4) The briefing should hit all four parts in plain money-and-promises language, e.g.: “Our one blender
caps us at 40 drinks/hour; we hit that at ≈300 orders/day in about two months. Past it, wait times blow out and we start
refunding late orders — roughly €4k/month in lost contribution. A second blender at €900 buys us to ≈600 orders/
day, so we should order it now.”
36
