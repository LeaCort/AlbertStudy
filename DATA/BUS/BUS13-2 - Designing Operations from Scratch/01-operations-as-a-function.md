# 1. Operations as a function

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 6-9*

Version of 13 September 2026 Module page
1. Operations as a function


## 1.1. The function that keeps the promise


Every business makes a promise to a customer: a meal delivered hot, a software tool that is up when-
ever you open it, a pair of running shoes in your size on the shelf. Marketing makes the promise
heard; finance funds and prices it; strategy chooses which promise to make, and to whom. But none
of them keep it. Turning a customer’s request into the thing they actually receive — repeatedly, at
volume, and at a cost the business can bear — is the work of operations. It is the least glamorous
function and the one that decides, more than any other, whether a venture survives contact with real
demand.
Definition 1 (operations). Operations is the function that designs and runs the process by
which a business turns inputs into the goods and services its customers receive. Where the other
functions decide what to offer, to whom, and at what price, operations answers how it is
actually delivered: the flow of work from a customer’s request to a fulfilled order, and the
people, steps, resources, and handoffs along the way.
A quick test of whether a question belongs to operations: does answering it change how a unit
of customer value physically moves through the business? “Which segment do we target?”
is strategy. “What do we charge?” is finance and marketing. “Who unpacks, checks, and ships the
order, in what order, and what happens when an item is missing?” is operations. The other functions
decide the promise; operations is where the promise meets reality.


## 1.2. How operations differs from its neighbours


The functions are easiest to separate by the question each one owns.
Function The question it owns
Strategy Which promise do we make, to whom, and why will we win?
Marketing How do we make the promise heard and wanted?
Finance How do we fund and price it, and does it make money?
Operations How is it actually delivered, every time, at volume and at cost?
Table 1: The business functions, separated by the question each owns. Operations is the only one
accountable for whether the promise is physically kept — which is why a venture with brilliant
strategy, marketing, and finance still dies if its operation cannot deliver at the volume the plan
assumes.
These functions are not a hierarchy; they constrain one another. Finance’s margin caps what opera-
tions may spend per order (Chapter 9); operations’ real capacity caps what marketing may promise. A
recurring failure of young ventures is a marketing department selling a delivery speed the operation
was never built to hold — a promise made in one function and broken in another.
6

Version of 13 September 2026 Module page


## 1.3. The operating model


Definition 2 (operating model). A venture’s operating model is the concrete arrangement of
people, process, and technology through which it delivers its product — who does what, in what
order, with which systems and suppliers. The org chart shows reporting lines; the operating
model shows how value flows. The two rarely match, and when a design goes wrong it is almost
always the flow, not the chart, that reveals why.
Throughout this course you will design operating models, not org charts. The distinction matters
immediately: the next chapter shows how looking at the reporting structure instead of the flow is
the single most common way an operation optimises itself into failure.


## 1.4. Company shapes: the structure that pre-decides the operation


Before any design choice, one fact shapes the operation more than any other: the venture’s company
shape — the structural kind of business it is. Four shapes recur across almost every venture you will
meet, and each pre-decides what the operation must be good at.
Framework 1 (the four company shapes).
• Marketplace — matches independent buyers and sellers it does not own (a resale app such
as Vinted, a ride or delivery platform). The product is liquidity: enough of both sides that a
match happens fast. Operations is mostly matching, trust, and dispute handling — the
platform rarely touches the goods it sells.
• SaaS (software as a service) — sells ongoing access to software (a doctor-booking tool such
as Doctolib, a CRM). The marginal cost of one more user is almost nothing; the operation is
uptime, onboarding, and support, and the business lives or dies on reliability and retention,
not on physical logistics.
• DTC (direct-to-consumer) — makes or sources a physical product and sells it straight to
consumers, skipping the retailer (a challenger food brand such as Oatly). The operation is
supply, inventory, fulfilment, and returns: real atoms, real warehouses, real breakage.
• Physical services / retail — delivers a service or sells goods through physical presence and
staff (a sports-goods chain such as Decathlon, a clinic). The operation is capacity, location,
staffing, and the in-person experience, all bounded by physical space and opening hours.
The word “delivery” means something different in each shape, and that difference is the operational
challenge. Reading the shape tells you where the operation will strain first.
7

Version of 13 September 2026 Module page
Shape What “flows” The binding operational Where it breaks first
question
Marketplace matches Can we make supply and de- thin liquidity; fraud and dis-
mand meet fast and safely? putes at scale
SaaS sessions Is it up, and do users get value downtime; onboarding that
before they churn? loses new users
DTC physical units Can we source, hold, ship, stockouts, breakage, and the
and take back goods at mar- cost of returns
gin?
Physical served customers Do we have capacity in the queues at peak; idle, costly ca-
services right place at the right time? pacity off-peak
Table 2: How each company shape pre-decides the operation. The shape fixes what moves through
the business, the question the operation must answer, and the failure that arrives first — long before
any specific design choice is made.
Pitfall. The beginner treats “company shape” as a label for a pitch deck. It is not decoration;
it is a prediction of where the operation will strain. A marketplace that pours its effort
into warehousing (a DTC concern) has misread its own shape and starved the matching-and-
trust problem that actually decides its survival. Name the shape first, and let it tell you which
operational question is life-or-death — before you design anything.
Example — One venture, two shapes, two operations. A meal company can be built as DTC
— cook and ship kits from a central kitchen — or as a marketplace connecting home cooks
to nearby diners. Same food, same customer hunger, opposite operations. The DTC version lives
on kitchen capacity, cold-chain logistics, and inventory spoilage. The marketplace version never
touches a pan: it lives on having enough cooks near enough hungry diners, and on trust when a
meal disappoints. Choosing the shape is choosing which operation you must become world-class
at — and that choice is made before a single process is drawn.
Exercises
1.1. For each of the four company shapes, name one real business you use and state, in a
sentence, the single operational question that most decides whether it survives.
1.2. Take one business idea of your own and describe how it would differ, operationally, if built
as a marketplace versus as a DTC brand. Which operational capability does each version have to
master?
1.3. A founder says “we’re a platform” but the company buys inventory, warehouses it, and ships
it to consumers. Which shape is it really, and why does the mislabel put the operation at risk?
1.4. Classify each question as strategy, marketing, finance, or operations: (a) “should we enter
Germany?”; (b) “what do we charge per box?”; (c) “who repacks an order when one item is out
of stock?”; (d) “how do we get the launch trending?”
Answers. (1) A good answer pairs each shape with its life-or-death question: marketplace — is there enough liquidity
that matches happen fast? SaaS — is it reliable and does a new user reach value before churning? DTC — can we
source, hold, and ship physical units at margin without stocking out? physical services / retail — is there capacity
in the right place at the right time? (2) The two versions must master different capabilities: a marketplace masters
matching, trust, and dispute handling and touches no goods; a DTC brand masters supply, inventory, fulfilment, and
8

Version of 13 September 2026 Module page
returns. (3) It is a DTC operation: buying, warehousing, and shipping physical units is DTC work, not marketplace
matching. The “platform” label hides the real binding constraints (inventory, breakage, returns), so they go unman-
aged. (4) (a) strategy; (b) finance / marketing; (c) operations; (d) marketing.
9
