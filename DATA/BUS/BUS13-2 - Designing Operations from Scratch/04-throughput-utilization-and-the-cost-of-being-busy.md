# 4. Throughput, utilization, and the cost of being busy

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 16-19*

Version of 13 September 2026 Module page
4. Throughput, utilization, and the cost of
being busy


## 4.1. Why the 95%-busy team is the slow one


Two support teams handle identical work. Team A runs at 70% utilization; team B, praised by
management for efficiency, runs at 95%. Tickets resolve in two days at Team A and in more than
two weeks at Team B. The “lazy” team is faster — dramatically. This is not an anomaly to explain
away; it is the most important quantitative law in operations, and it is the reason “keep everyone
busy” is one of the most expensive instincts in management. By the end of this chapter you will be
able to say, with a number, exactly why.


## 4.2. The three core measures


Definition 8 (throughput, capacity, utilization). Throughput (𝑋) is the rate at which the
system actually produces finished output (orders/day, litres/hour). Capacity is the maximum
possible throughput. Utilization (𝜌) is the fraction of capacity in use:
throughput
𝜌 = .
capacity
For the simplest case — a single server processing a queue in steady state — utilization is the same as
the arrival rate divided by the service rate, 𝜌 = 𝜆/𝜇, because capacity is then just one server’s service
rate. With several servers, capacity is their combined rate, and 𝜌 is throughput over that combined
capacity. This single-server form is the one we return to when a worked example needs a number.
Definition 9 (cycle time). Cycle time (or lead time) is the total time one unit spends in the
system, from entry to exit — including all the time it spends waiting, which is usually most of
it. It is what the customer actually experiences as “how long it took.”
A trap worth dispelling immediately: throughput is not the same as utilization. A system can be 100%
utilized and have terrible throughput toward the goal if it is busy producing the wrong thing, building
inventory no one ordered, or reworking defects. Busy is not the same as productive — utilization
measures busyness, throughput measures goal-attainment. TOC’s whole point is to subordinate
the first to the second.


## 4.3. The utilization–delay curve


Here is why Team B drowns — and the culprit is not simply that it is busier. The real cause is
variability. Work never arrives in a perfectly even trickle, and no two jobs take exactly the same
time: arrivals clump, and service times differ. Whenever two jobs happen to land close together, the
second must wait behind the first — and that momentary pile-up is the seed of every queue.
16

Version of 13 September 2026 Module page
To see that variability, not utilization, is what creates the wait, imagine removing it. Suppose
customers arrived perfectly regularly — one exactly every five minutes — and each took exactly four
minutes to serve. Then every arrival finds the server free, waits zero, and this stays true even at 99%
utilization: the system runs flat out and perfectly calm. With no variability there is no queue, at any
utilization below 100%. Now let arrivals and service times vary even slightly and a queue appears
at once — and the same variability that causes only a brief, self-correcting wait at 50% utilization
causes an unbounded one as utilization climbs toward 100%.
So the law has two parts, and their order is the whole point: variability creates the wait; utiliza-
tion only sets how violently it is amplified. At low utilization the server has idle gaps to absorb
a clump and recover before the next one arrives; at high utilization it never catches up, so the delay
from each clump piles onto the last. For a simple system with natural variability, the average time a
unit spends waiting in the queue — call it 𝑊 , to keep it distinct from the total time in the system
𝑞
— scales like
𝜌
𝑊 ∝ .
𝑞 1−𝜌
0.5
Look at what the 1−𝜌 in the denominator does. At 𝜌 = 0.5, the factor is = 1. At 𝜌 = 0.9 it is
0.5
0.9
= 9. At 𝜌 = 0.98 it is 49. Going from 90% to 98% busy — a mere eight points of “efficiency” —
0.1
multiplies waiting by more than five. The curve has a knee, and past it lies a cliff. But notice what
the factor does not contain: were the variability zero, the whole wait would be zero however close 𝜌
crept to 1. Utilization sits on the amplifier, never on the source.
This also settles the Team A versus Team B puzzle. Both teams handle the same variable work; what
differs is only how much idle slack each keeps to absorb it. The ratio of their waiting factors is
0.95/0.05 19
= ≈ 8.
0.70/0.30 2.33
So if Team A clears a ticket in about two days, Team B — eight times slower to wait — takes it past
two weeks. The extra 25 points of utilization — running at 95% instead of 70% — cost a factor of
eight in delay.
17

Version of 13 September 2026 Module page
avg. queue wait 𝑊
𝑞
the knee: past ≈85%, delay explodes
50% 85% 100%
utilization 𝜌
𝜌
Figure 3: The utilization–delay curve, 𝑊 ∝ , for a system with variability. Queue wait is mild and
𝑞
1−𝜌
nearly flat until roughly 85% utilization, then rises vertically toward the wall at 100%. A system with
no variability would sit flat on the axis at zero the whole way — the curve is the price of variability,
and utilization only sets where on it you sit.
Principle 2 (variability makes the queue; the 85% rule of thumb). Variability is what
creates waiting. A perfectly regular system — identical gaps between arrivals, identical service
times — never forms a queue, even at 99% utilization. Add variability and a queue appears;
utilization then decides only how far it grows. In any system with variability in arrivals or
service times, waiting time (and therefore cycle time) grows without bound as 𝜌 → 1 — gently
below roughly 85% utilization, catastrophically above it. Therefore a system you want to stay
responsive must be run with deliberate spare capacity; “fully utilized” and “responsive” are
mutually exclusive whenever the work varies at all.
Pitfall. The 85% figure is a rule of thumb, not a law of physics. The more variable the work
— spiky arrivals, wildly differing job sizes — the lower the knee, sometimes 70% or less. The
smoother and more predictable the work, the higher you can safely push. The durable lesson
is the shape of the curve, not the exact number: delay is convex in utilization, so the last few
points of “efficiency” are bought with disproportionate pain.


## 4.4. Slack as strategic capacity


This reframes idle capacity entirely. The 30% of “unused” time at Team A is not waste; it is slack —
the buffer that absorbs variability and keeps cycle time short. Slack is what lets the system respond
to a surge, recover from a disruption, and improve itself instead of forever firefighting. Eliminating
slack to look efficient saves a little money now and charges a large bill later — and that bill falls due
exactly when demand spikes and you can least afford it.
18

Version of 13 September 2026 Module page
Example — Pricing the last 10%. A logistics manager proposes pushing sorting-hub utilization
𝜌
from 82% to 92% to “defer buying a second line.” Using 𝑊 ∝ : at 82%, the factor is 4.6; at 92%,
𝑞
1−𝜌
it is 11.5 — average dwell time more than doubles. Packages that cleared the hub in 6 hours
now take 15. The saved capital is real; the cost is a service-level collapse that shows up as missed
delivery promises and, soon, lost customers. Naming the trade-off quantitatively is the operations
designer’s job; “just run it hotter” is not a plan.
Exercises
4.1. A call centre’s agents are 96% utilized and customers wait 8 minutes on average. Using 𝑊 ∝
𝑞
𝜌
, estimate the average wait if utilization were brought down to 80%. (Hint: take the ratio of
1−𝜌
𝜌
the two factors.)
1−𝜌
4.2. Explain to a CFO, in two sentences, why running the warehouse at 99% utilization during
peak season is a false economy. Use the shape of the curve, not jargon.
4.3. A process is 100% utilized but throughput toward the goal is falling. Give two distinct
operational explanations consistent with both facts.
Answers. (1) The factor at 96% is 0.96/0.04=24; at 80% it is 0.80/0.20=4. The wait scales with the factor, so the new
wait is about 8×(4/24)=8/6≈1.3 minutes — a sixfold drop for sixteen points of freed capacity. (2) A good answer
stays on the curve’s shape: near 100% the wait curve is almost vertical, so each extra package added at peak adds
hugely disproportionate delay; the “saved” capital of not adding a line is dwarfed by the missed-delivery costs when
dwell time explodes. (3) Two distinct causes: (a) the system is busy on the wrong output — building unsold inventory
or low-priority work, so utilization is high but goal-throughput is not; (b) a rising rework/defect rate is consuming
capacity on redoing work, so the machine is 100% busy but fewer good units come out.
19
