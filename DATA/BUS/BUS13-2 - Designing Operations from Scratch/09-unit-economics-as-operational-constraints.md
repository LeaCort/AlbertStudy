# 9. Unit economics as operational constraints

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 31-33*

Version of 13 September 2026 Module page
9. Unit economics as operational
constraints


## 9.1. The margin that bounds the design


A grocery-delivery startup wants a delightful operation: hand-checked produce, a phone call for
every substitution, same-hour delivery. Wonderful — and impossible, because a €40 basket leaves
only about €6 of contribution once the groceries, standard picking, delivery, payment fees, and basic
support are paid for — and every one of those delightful touches has to come out of that same €6.
Unit economics are not the finance team’s concern to be handled “later”; they are a hard constraint
on what the operation is allowed to be. Every process choice in the previous chapters spends
money per unit, and the margin sets the budget.


## 9.2. The unit-economics toolkit


Definition 15 (unit economics). Unit economics describe the profit of a single unit of
business (an order, a customer, a ride). The core quantities:
• Contribution margin per unit = price−variable cost — what each sale contributes toward
fixed costs and profit.
• Fixed costs — costs that do not vary with volume (rent, salaried staff, software).
• Variable costs — costs that scale with each unit (materials, payment fees, per-order labour
and delivery).
fixed costs
• Break-even volume = — the number of units at which total contribu-
contribution margin per unit
tion covers fixed costs.
• CAC (customer-acquisition cost) — what it costs, on average, to win one customer. LTV
(lifetime value) — the total contribution a customer delivers before they leave, i.e. the baseline
contribution margin summed over every purchase they make. In this course both arrive as
given inputs — numbers handed to you rather than derived here.
Read operationally, LTV−CAC is the lifetime profit left per customer once acquisition is paid for
— the headroom that any extra per-customer investment, over and above the baseline operation
already priced into the contribution margin, must come out of; a healthy venture keeps LTV/CAC
comfortably above one.
The contribution margin is the per-unit budget every operational decision draws against. A “small”
design choice — a phone call per order, a premium courier, a second quality check — that costs €3
per unit is not small if the contribution margin is €6: it has spent half the budget. This is the discipline
the course demands: translate every operational ambition into its per-unit cost and check it against
the margin before committing to it. The same logic runs over a customer’s lifetime, with one caution:
the baseline cost of serving a customer is already inside the contribution that builds their LTV, so
what remains is profit, not a fresh serving budget. If acquiring a customer costs €30 (CAC) and their
lifetime value is €120, then €90 of lifetime profit is left — the headroom for any extra investment in
that customer, such as a concierge call, a loyalty perk, or proactive outreach, before the relationship
turns unprofitable.
31

Version of 13 September 2026 Module page


## 9.3. Fixed vs. variable: the shape of the cost structure


Whether a cost is fixed or variable changes the operational strategy, not just the arithmetic.
Principle 5 (cost structure bounds process design). A fixed-cost-heavy operation (owned
warehouse, salaried staff, owned fleet) has low variable cost per unit but high break-even volume:
it is punishing at low volume and extremely profitable once volume clears break-even, because
each extra unit is nearly all contribution. A variable-cost-heavy operation (outsourced, pay-
per-use) has a low break-even and survives easily at low volume, but its margin never improves
with scale — there is no operating leverage. The right structure depends on how certain and how
large your volume is, which ties directly back to the make-vs-buy decision of Chapter 8.
€
revenue
total cost
profit zone →
fixed
break-even volume
Figure 8: Break-even. Fixed costs lift the cost line to a positive intercept; the gap between the revenue
slope (price) and the variable-cost slope is the contribution margin per unit. The lines cross at the
break-even volume; beyond it, every unit’s full contribution falls to profit. Higher fixed costs raise
the intercept and push break-even to the right, but leave the profit zone’s slope untouched — that
slope is the contribution margin, set by price and variable cost alone. What widens the profit zone is
a lower variable cost per unit, not a higher fixed cost.
Pitfall. A frequent founder error is to design the operation for the margin they hope to have
at scale rather than the margin they have now. Slack capacity, premium service, and generous
handling all consume contribution that an early-stage, low-volume operation does not yet have.
Design to the current unit economics; earn the richer operation as volume and margin actually
arrive.
Example — Unit economics killing a feature. A same-day flower service wanted live SMS
updates with a human on standby for re-routes. Costed out: about €2.10 per order in staff time.
Contribution margin per order: €4.50. The feature would have consumed 47% of the budget that
also had to cover delivery failures, refunds, and overhead. They shipped automated SMS (€0.05)
and reserved the human for the ≈5% of orders that genuinely needed it. Same customer outcome
on the cases that mattered, at a fortieth of the cost. The unit economics did not inform the design
— they bounded it.
32

Version of 13 September 2026 Module page
Exercises
9.1. A meal kit sells for €35 with €24 of variable cost; fixed costs are €22k/month. What is the
contribution margin and the monthly break-even volume? How many kits must it sell to make
€10k profit?
9.2. The founder wants to add a hand-written note (€0.80) and premium packaging (€1.50) per
kit. By how much does break-even volume rise? Is it worth it — what would you need to know?
9.3. A customer costs €30 to acquire (CAC) with a lifetime value of €120. The team proposes a
concierge onboarding call costing €25 per customer. What does this do to the lifetime profit per
customer, and what would justify it?
9.4. Contrast a fixed-cost-heavy and a variable-cost-heavy version of the same delivery operation.
At what kind of volume does each win, and why?
Answers. (1) Contribution margin =35−24=€11. Break-even =22000/11=2000 kits/month. For €10k profit, cover
fixed + target: (22000+10000)/11=32000/11≈2910 kits. (2) The additions cost €2.30, cutting the margin to 11−
2.30=€8.70. New break-even =22000/8.70≈2529 kits — a rise of about 529 kits (≈26%). Worth it only if the note
and packaging lift price, retention, or referrals enough to cover roughly 530 extra kits of break-even; you’d need the
effect on repeat rate or word-of-mouth (i.e. on LTV). (3) Lifetime profit before the call is LTV−CAC=120−30=
€90; the €25 call is an extra touch on top of the baseline operation, so it spends more than a quarter of that profit,
leaving €65 of headroom for any other discretionary investment in the customer. It is justified only if the call raises LTV
by clearly more than €25 — e.g. by cutting early churn enough to add more than €25 of lifetime contribution. (4) The
fixed-cost-heavy version (owned fleet) wins at high, certain volume, where operating leverage makes each extra
delivery nearly all contribution; the variable-cost-heavy version (outsourced couriers) wins at low or uncertain
volume, where a low break-even survives the lean months — at the price of no margin improvement as it scales.
33
