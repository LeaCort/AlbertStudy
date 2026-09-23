# 5. Queues, flow, and Little's Law

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 20-23*

Version of 13 September 2026 Module page
5. Queues, flow, and Little’s Law


## 5.1. Counting a queue without a stopwatch


You walk into a clinic. Forty patients are in the waiting room, and you can see the desk admits about
ten patients per hour. Roughly how long will you wait? You do not need to time anyone: 40÷10 =
4 hours. You have just used the most useful equation in flow analysis, and it required nothing but a
stock and a flow you could observe by standing still.
5.2. Little’s Law
Theorem 1 (Little's Law). For any stable system — one whose backlog is not trending up or
down over the period of interest — the average work-in-progress equals the average throughput
times the average time in system:
𝐿 = 𝜆×𝑊,
where 𝐿 is the average number of items in the system (WIP), 𝜆 is the average throughput rate
(arrivals = departures, since the system is stable), and 𝑊 is the average time each item spends
in the system.
Its power is its generality: it assumes nothing about the order of service, the distribution of arrivals,
or the number of stages. It holds for patients in a clinic, orders in a factory, tickets in a queue, cars on
a motorway, and cash tied up as receivables. Rearranged, it answers the three questions a designer
actually asks:
𝐿 𝐿
𝑊 = (how long?) 𝐿 = 𝜆𝑊 (how much WIP?) 𝜆 = (what rate?)
𝜆 𝑊
arrivals 𝜆 System departures 𝜆
WIP =𝐿 items inside
each item spends time 𝑊 =𝐿/𝜆 inside
Figure 4: Little’s Law. In a stable system the inflow and outflow rates are equal (call it 𝜆); the number
of items inside (𝐿) and the time each spends inside (𝑊) are then locked together by 𝐿 = 𝜆𝑊. Fix any
two and the third is determined.
Pitfall. Little’s Law requires stability: averages taken over a period where the queue is not
systematically growing or shrinking. Apply it to a queue that is exploding (inflow > outflow,
Chapter 2) and the “average WIP” is meaningless — there is no average, the stock is running
away. Always check the queue is in steady state before you trust the number.
20

Version of 13 September 2026 Module page


## 5.3. One process, all three numbers


Utilization, cycle time, and Little’s Law describe the same process from three angles. It is worth
carrying one process through all of them once, end to end.
Example — The passport-photo desk. A single clerk photographs and prints passport photos.
Customers arrive at 𝜆 = 12 per hour; each takes on average 4 minutes, so the clerk’s service rate is
𝜇 = 15 per hour.
• Throughput. The queue is stable (𝜆 < 𝜇), so departures equal arrivals: throughput = 12 cus-
tomers/hour.
• Utilization. 𝜌 = 𝜆/𝜇 = 12/15 = 0.8 — the clerk is busy 80% of the time.
• Cycle time. For the simplest random single-server queue — one clerk, with arrivals and service
times that are individually unpredictable but steady on average — the average number in the
system works out to 𝐿 = 𝜌/(1−𝜌) = 0.8/0.2 = 4 customers. This is exactly the 𝜌/(1−𝜌) shape of
Chapter 4, now with the constant pinned down. By Little’s Law the time in system is 𝑊 = 𝐿/𝜆 =
4/12 h, that is 20 minutes, of which 4 are the photo itself and 16 are spent waiting. Those 16
minutes are the queue wait 𝑊 of Chapter 4; adding the 4-minute service gives the total time in
𝑞
system 𝑊. Two different letters for two different quantities, related by 𝑊 = 𝑊 +service time.
𝑞
Push the clerk to 𝜌 = 0.9 (arrivals rise to 13.5/hour) and 𝐿 jumps to 0.9/0.1 = 9, so 𝑊 = 9/13.5 h =
40 minutes — the wait doubles for a ten-point rise in utilization. Same clerk, same 4-minute photo;
the queue, not the work, is where the time lives.
This idealised constant assumes one particular, middling kind of randomness — the everyday,
unpredictable arrivals and service times of a typical single queue. A real system can be smoother
than that and wait less, or burstier and wait more: the constant is a mid-range baseline, not a floor.
(Recall Chapter 4: a perfectly regular system waits zero.) Use it to feel the shape, not to promise a
customer 20 minutes to the second.


## 5.4. Visible and invisible queues


Physical queues — people in a room, boxes on a floor — are visible: you feel the pressure to act. The
dangerous queues in modern operations are invisible: a backlog of 3,000 unprocessed emails, 800
open browser tabs of pending decisions, a six-week software backlog living in a database. They obey
Little’s Law exactly the same way — 3,000 emails cleared at 200/day is a 15-day wait — but because
no one sees a pile, no one feels urgency, and the queue grows unmanaged until it becomes a crisis.
Remark. A central discipline of good operational design is to make invisible queues visible: a
physical or digital board showing WIP, age of the oldest item, and inflow-vs-outflow. You cannot
manage a stock you cannot see, and Little’s Law only helps if you know 𝐿.


## 5.5. Batch size: the hidden delay multiplier


Why do invoices that “take five minutes to process” sit for three weeks? Because they are batched:
held until month-end, then run together. Batching feels efficient — one setup, one run — but it
injects delay directly into cycle time.
21

Version of 13 September 2026 Module page
Example — The cost of the batch. A team processes expense reports only on the last Friday of
each month. A report filed the day after a run waits about 26 days before anything happens —
the worst case. Averaged over all filing dates, a report waits about half the cycle, roughly 13 days.
Switch to processing daily — smaller batches — and that average wait collapses to under one day.
Nothing about the work changed; only the batch size. Large batches also amplify the bullwhip
effect from Chapter 2: lumpy batch releases look like demand spikes to whoever is downstream,
who then over-react.
Principle 3 (small batches reduce delay). Reducing batch size reduces average cycle time
and smooths flow, at the cost of more frequent setups. Where setup (or transaction) cost is low
— most digital work — the delay savings dominate, and the right default is the smallest batch
you can afford: ship one piece at a time. This is the operational core of “continuous flow” and of
agile delivery.


## 5.6. Rework: the hidden capacity tax


Batching lengthens the wait without touching the work. A rework loop is nastier: it quietly destroys
capacity that no one budgeted for. Whenever a step’s output is checked and some fraction is sent back
to be redone, that step is secretly doing more work than its headline capacity suggests.
Definition 10 (rework loop). A rework loop returns a fraction of a step’s output to be
processed again — a failed inspection, a bounced approval, a bug sent back to a developer. If a
fraction 𝑟 of each unit’s output must pass through the step a second time, then for every good
unit the step performs 1+𝑟 units of work, so its effective good-output capacity falls to roughly
𝐶/(1+𝑟), where 𝐶 is the raw capacity.
Example — A fifth of the work, looping back. A quality-check station can inspect 𝐶 = 120
units/hour. But 20% of what it passes is rejected downstream and comes back for one more pass,
so 𝑟 = 0.20. Its effective capacity for good units is
120/(1+0.20) = 100 units/hour.
A fifth of the work looping back once turned a 120/hour station into a 100/hour one — a sixth
of capacity gone, invisibly, with no one idle. Worse, the extra circulating units raise WIP, so by
Little’s Law cycle time climbs too. And if reworked units can fail again at the same rate, the loss
compounds toward 𝐶×(1−𝑟). Rework is thus a double penalty: less throughput and longer delay,
from a defect rate a dashboard rarely shows.
This connects back to feedback and delay from Chapter 2. Long queues are long delays, and delays
destabilise feedback loops — the correction always arrives too late. Short queues mean fast feedback,
which means the system can see and fix its own problems before they compound. Flow is not just
about speed; it is about a system’s ability to learn.
Exercises
22

Version of 13 September 2026 Module page
5.1. A kanban board shows 24 cards in “in progress” and the team finishes 6 cards/day. What
is the average time a card spends in progress? If the team wants that down to 2 days without
working faster, what must 𝐿 become, and how do you achieve it?
5.2. Receivables average €600k outstanding; the firm collects €40k/day. What is the average
collection period (days sales outstanding)? Interpret it via Little’s Law.
5.3. A quality step handles 90 units/hour of raw capacity, but 25% of its output is returned for
one more pass. What is its effective good-output capacity?
5.4. A report is generated weekly from data that arrives continuously. Estimate the average “data
age” in the report and explain how daily generation changes it.
Answers. (1) 𝑊 =𝐿/𝜆=24/6=4 days. To reach 𝑊 =2 days with the same throughput (𝜆=6/day), Little’s Law needs
𝐿=𝜆𝑊 =6×2=12: cut work-in-progress in half by limiting cards in progress to 12 — flow faster by starting less,
not by working harder. (2) Days sales outstanding =𝐿/𝜆=600/40=15 days: cash behaves like WIP, so €600k of
receivables “flowing out” at €40k/day spends 15 days in the system before it is collected. (3) With 𝑟=0.25, effective
capacity =90/(1+0.25)=72 good units/hour — an 18-unit loss no headcount would reveal. (4) Data collected
uniformly over a week is on average half a week (≈3.5 days) old when the weekly report runs; generating daily cuts
the average age to about half a day.
23
