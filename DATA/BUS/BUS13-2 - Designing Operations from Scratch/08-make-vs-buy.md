# 8. Make vs. buy

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 28-30*

Version of 13 September 2026 Module page
8. Make vs. buy


## 8.1. Build it or rent it?


Your meal-kit company needs a delivery capability. Do you hire drivers and buy vans (make), or
contract a courier (buy)? The answer is not “whichever is cheaper per delivery,” because the visible
price is the smallest part of the decision. Make-vs-buy is where unit economics, process design, and
the constraint all collide, and getting it wrong either starves your real constraint of cash or hands a
rival control of your customer experience.


## 8.2. The true cost of each option


Definition 14 (make vs. buy). Make means building and operating the capability internally.
Buy means sourcing it from an outside provider. The decision compares the total cost and risk
of each — not the sticker price — including the costs that do not appear on an invoice.
The reason naive make-vs-buy goes wrong is that each option hides a different cost:
Making hides coordination cost. Bringing a capability in-house adds headcount, management
overhead, hiring and training, idle capacity when demand dips, and the attention of leadership — a
scarce resource in a young company. These are real and largely fixed, and they are exactly the costs
spreadsheets omit.
Buying hides coordination cost of a different kind plus dependency risk. You now manage a
vendor relationship (contracts, SLAs, escalations — coordination across a company boundary, which
is harder than across a team boundary), you inherit the vendor’s quality and failure modes, and you
accept strategic dependency: if the capability is core to your promise, you have handed a supplier
leverage over your business.
total cost
buy
make
fixed
buy cheaper make cheaper
break-even volume
Figure 7: Make vs. buy as a cost crossover. Buy has no fixed cost but a high price per unit; make
carries a fixed cost but a low variable cost. Below the break-even volume, buying is cheaper; above it,
making is. The hidden costs — coordination on the make side, dependency and quality risk on the
buy side — shift both lines, which is why the sticker-price crossover is never the whole decision.
28

Version of 13 September 2026 Module page
Principle 4 (the make-vs-buy comparison). Choose make when total internal cost —
including coordination and management overhead — is below total external cost including
dependency and quality risk, or when the capability is strategically core and must not be
outsourced at any reasonable price. Choose buy when an outside provider has genuine scale or
specialisation you cannot match, the capability is non-core, and the dependency risk is bounded.
The error to avoid is comparing internal variable cost against external all-in price — comparing
two costs that do not cover the same things, which almost always flatters “make.”


## 8.3. Coordination cost and the core/non-core line


The deepest principle here is that every boundary you create has a coordination cost. Splitting
work across an internal team boundary or an external vendor boundary both require communication,
handoffs (Chapter 6), and reconciliation — and the cost rises with how tightly coupled and how
variable the work is. This is why some things are cheaper to make even when a vendor’s unit price
is lower: the coordination tax across the boundary exceeds the saving.
The second principle is the core vs. non-core distinction. Outsource what is generic (payroll, cloud
hosting, ground shipping for most firms) to specialists who do it at scale. Keep core what is your
edge — the part of the operation the customer is actually paying for and that differentiates you. A
premium-experience brand outsourcing its customer interaction to the cheapest call centre is “saving
money” by cutting away the very thing it sells.
Pitfall. “Buy, because it’s cheaper per unit today” ignores two things that bite later: the vendor
will re-price once you depend on them, and a capability you never built is one you never learned.
Outsourcing your constraint or your core trades a short-term cost saving for long-term loss of
control over precisely where your business lives or dies.
Example — Buy now, make later. An early fintech outsourced its KYC identity checks to a
SaaS vendor — clearly correct at launch: building it was months of work irrelevant to proving the
business. Two years on, KYC was 30% of cost-per-customer, the vendor raised prices, and identity
verification had become core to the firm’s risk edge. They brought it in-house. Both decisions were
right for their moment. Make-vs-buy is not a one-time verdict; it is re-decided as volume, cost
structure, and what counts as “core” all evolve.
Exercises
8.1. A startup can hire a 2-person support team for €8k/month (handling up to 1,000 tickets)
or outsource at €6/ticket. At what monthly volume does make become cheaper on direct cost?
Name two costs this break-even ignores on each side.
8.2. For a business you know, name one capability that should clearly be bought and one that
should clearly be made. Justify each via core/non-core and dependency risk.
8.3. Explain how outsourcing the constraint of a system can reduce reported cost while
increasing real operational risk.
Answers. (1) Set the direct costs equal: 8000=6𝑉, so 𝑉 ≈1333 tickets/month — below that, buying is cheaper;
above it, making is. But note the in-house team caps at 1,000 tickets, and 1333>1000, so within one team’s capacity
buying is always cheaper on direct cost (€6,000 vs €8,000 at 1,000); making only wins once you add a second team.
29

Version of 13 September 2026 Module page
Ignored costs — make: coordination/management overhead, hiring and training, idle capacity at low volume; buy:
vendor management and SLAs, quality risk, dependency. (2) A good answer buys something generic and non-core
with a bounded, replaceable vendor (payroll, cloud hosting) and makes something core and differentiating whose
dependency risk would be unacceptable (the recipe, the recommendation engine, the core customer interaction). (3)
Outsourcing the constraint can lower the invoice per unit, but the constraint sets the whole system’s throughput;
handing it to a vendor means your growth ceiling, quality, and pricing at the one place that governs the system are
now controlled by someone else — cheaper on paper, far riskier in reality.
30
