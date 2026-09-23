# 2. Systems thinking as an operational lens

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 10-12*

Version of 13 September 2026 Module page
2. Systems thinking as an operational lens


## 2.1. A warehouse that optimised itself into failure


A fulfilment startup gave each of its three teams a clean, measurable target. Receiving was paid on
pallets unloaded per hour. Storage was rated on how densely the shelves were packed. Picking was
rated on orders shipped per shift. Every team beat its target. Every manager got a bonus. And the
company missed its delivery promises so badly it nearly lost its biggest customer.
What happened? Receiving, racing to unload pallets, dumped goods at the dock without sorting
them. Storage, maximising density, buried fast-moving items behind slow ones because that packed
the cubes more tightly. Picking then walked miles per order and waited on mis-shelved stock. Each
team optimised its own number; the system — the flow of a customer order from dock to doorstep
— got slower. This is the single most important phenomenon in operations, and the rest of the course
is, in a sense, a set of tools for not being this company.


## 2.2. Stocks and flows


The first move of systems thinking is to stop seeing an operation as an org chart and start seeing it
as stocks connected by flows.
Definition 3 (stock and flow). A stock is anything that accumulates: inventory in a ware-
house, orders waiting in a queue, cash in the bank, unresolved support tickets. It is a quantity
measured at an instant. A flow is a rate that changes a stock over time: units arriving per hour,
orders shipped per day, cash burned per month. A flow is measured over an interval.
The defining relationship — the one idea underneath all of inventory, queueing, and cash manage-
ment — is simply that a stock is the running total of its flows. Measured over any period,
stock at the end = stock at the start+total inflow−total outflow,
where the two totals are everything that arrived and everything that left during the period. In the
plainest terms: today’s backlog equals yesterday’s backlog, plus what arrived, minus what
you cleared. If inflow exceeds outflow, the stock grows — without limit, until something gives. This
is why a support queue that receives 110 tickets a day and resolves 100 does not “run a little behind”;
it accumulates an unbounded backlog, ten tickets deeper every single day.
inflow outflow
Stock
backlog, inventory, cash
Figure 1: The fundamental unit of systems thinking: a stock fed by an inflow and drained by an
outflow. When inflow exceeds outflow the stock rises without bound. The bow-tie “valves” are the
rates you can actually control.
10

Version of 13 September 2026 Module page


## 2.3. Feedback, delay, and emergent behaviour


Stocks and flows rarely sit still, because flows depend on stocks. When the support backlog grows,
customers escalate and call again — raising the inflow. That is a feedback loop: an output of the
system loops back to become an input.
Definition 4 (feedback loop). A feedback loop is a path by which a change in a stock
loops back, through some flow, to change that same stock again. A balancing (negative) loop
counteracts change and pushes a stock toward a target; a reinforcing (positive) loop amplifies
change, feeding growth on growth. Real systems are webs of both, and almost always contain
delays between a change and the response it triggers.
A thermostat is the everyday balancing loop: too cold, so the heating comes on, which warms the
room back toward the target. Hiring when the backlog grows is another. The support backlog above
shows the reinforcing kind — backlog breeds re-contacts that breed more backlog. And the delays
are everywhere: a new hire takes six weeks to become productive, so the correction arrives long after
the problem was first observed.
When loops and delays combine, the system exhibits emergent behaviour — patterns that belong
to the whole and cannot be read off any single part. Oscillation is the classic example: order too late,
over-order to catch up, then sit on excess, then under-order… The famous bullwhip effect, where
small swings in retail demand produce violent swings in factory orders upstream, is pure emergence
from delay plus feedback. No single actor is irrational; the structure produces the swing.
Pitfall. The beginner’s instinct, when a system misbehaves, is to look for the bad actor or the
broken part. Systems thinking insists you look first at structure — the loops, the delays, the
stocks. Most chronic operational pain is structural, which is good news: structure is something
you can redesign, whereas blame just relocates the symptom.


## 2.4. Suboptimization: the central warning


We can now name the warehouse’s disease precisely.
Definition 5 (suboptimization). Suboptimization is the degradation of the whole system’s
performance caused by each part optimising its own local metric. It is not a failure of effort or
competence — it is the predictable result of measuring and rewarding the parts as if the system
were the sum of independent pieces. It is not.
The deep reason suboptimization is so common is that local metrics are easy to measure and
assign, while system throughput is diffuse and shared. “Pallets unloaded” has an obvious owner;
“did the customer get their order on time and cheaply” is everyone’s job and therefore no one’s. The
systems-thinking corrective, which the Theory of Constraints in Chapter 3 makes operational, is to
subordinate every local metric to a single global one — and to accept that some parts of the system
should look “inefficient” so the whole can run fast.
11

Version of 13 September 2026 Module page
Example — Reading a system before touching it. Before changing anything, sketch it as stocks
and flows. For a meal-kit company: a stock of raw ingredients, a flow of boxes assembled per
hour, a stock of finished boxes awaiting pickup, an outflow of courier collections. Immedi-
ately you can ask the right questions: which stock is growing? Which flow is the slowest? Where
does a delay hide a problem until it is expensive? You have not yet computed anything, but you are
already seeing the operation as a system — and you will never again be fooled by a team that is
hitting its number while the company misses its promise.
Drawn out, that meal-kit company looks like Figure 2. Notice that it has two stocks, not one, chained
by the flow between them — a real operation is almost always a chain of stocks like this, and mapping
it is the first move of Chapter 2. When you draw your own, follow the same recipe: a rectangle for
each thing that accumulates, a valved arrow for each rate that fills or drains it, and a cloud wherever
the flow crosses the boundary of the part you are studying.
deliveries boxes assembled / hour collections
Finished
Raw
supplier boxes customer
ingredients
awaiting pickup
Figure 2: The meal-kit company as a stock-and-flow map. Two stocks — raw ingredients and
finished boxes awaiting pickup — are chained by the assembly flow, filled by supplier deliveries
and drained by courier collections. The map alone already poses the operational questions: which
stock is growing, which flow is the slowest, and where does a delay hide a problem until it is
expensive?
Exercises
2.1. Draw the stock-and-flow diagram for a coffee shop during the morning rush. Identify at least
two stocks, two flows, and one feedback loop.
2.2. A SaaS support desk receives 90 tickets/day and closes 80/day, starting from a backlog of 50.
Write the backlog as a function of day 𝑛. On what day does it reach 200? What does this tell you
about “we’ll catch up next week”?
2.3. Give a concrete example, from any business you know, of a local metric that, when
maximised, degrades the system. Name the global metric it should be subordinated to.
Answers. (1) Stocks: customers in line, orders taken but not yet served, cups awaiting pickup. Flows: arrivals/min,
orders taken/min, drinks made/min, pickups/min. A balancing feedback loop: a long visible line makes some arrivals
balk (leave), which lowers the inflow — the queue partly regulates itself. (2) Inflow exceeds outflow by 10/day, so
backlog(𝑛)=50+10𝑛. It reaches 200 when 10𝑛=150, i.e. day 𝑛=15. Because outflow is below inflow, there is no
“catching up”: the backlog grows 10 every day without bound. “We’ll catch up next week” is false unless outflow is
raised above inflow. (3) Any local metric works if you also name the global metric it should serve — e.g. maximising
server utilization in a kitchen (local) at the cost of order lead time (global); the fix is to subordinate utilization to
on-time delivery.
12
