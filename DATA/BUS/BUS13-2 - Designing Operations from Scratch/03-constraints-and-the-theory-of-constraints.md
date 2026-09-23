# 3. Constraints and the Theory of Constraints

*Source: BUS13-2 - Designing Operations from Scratch - Textbook.pdf, pages 13-15*

Version of 13 September 2026 Module page
3. Constraints and the Theory of
Constraints


## 3.1. One stage sets the pace


Picture a small cold-press juice line with four stages: washing, pressing, pasteurising, bottling.
Their hourly capacities are 200, 80, 150, and 130 litres. How much juice can leave the line per hour?
Not 200, not the average — 80. Pressing is the slowest stage, so it sets the pace for the entire line.
Washing can sprint all it likes; it merely builds a pile of fruit in front of the press. Every system that
transforms inputs into outputs has one stage like this, and recognising it changes everything.
Definition 6 (constraint / bottleneck). The constraint (or bottleneck) of a system is the
single resource or policy that most limits the system’s throughput toward its goal. By definition
there is normally one binding constraint at a time: the stage whose capacity is lowest relative to
demand. Everything else has, by comparison, slack.
This is the operational payoff of Chapter 2. Suboptimization happens because we improve non-
constraints. Speeding up washing from 200 to 260 litres/hour costs money and produces zero extra
juice, because pressing still caps the line at 80. An hour gained at the constraint, however, is an hour
gained for the whole system.
Principle 1 (the leverage of the constraint). An improvement at a non-constraint yields
no increase in system throughput. An improvement at the constraint flows through to the
whole system, one-for-one, until the constraint moves elsewhere. Therefore the constraint is
the highest-leverage point in the system, and the only place where local efficiency and global
throughput coincide.


## 3.2. The Five Focusing Steps


The Theory of Constraints (TOC), due to Eliyahu Goldratt, turns that insight into a repeatable
procedure. It is the backbone of operational diagnosis in this course.
Method 1 (The Five Focusing Steps).
1. Identify the system’s constraint. Where does work pile up in front of, and starve behind?
That stage is your bottleneck.
2. Exploit the constraint. Wring every drop from it without spending money: stop it idling at
lunch, stop feeding it defective work, make sure it never waits.
3. Subordinate everything else to the constraint. Every other resource runs at the constraint’s
pace, not its own — even though that makes them look “underutilised”. This is the deliberate,
healthy opposite of suboptimization.
4. Elevate the constraint. Now spend money: add a second press, hire, automate — raise the
constraint’s capacity.
13

Version of 13 September 2026 Module page
5. Repeat. Once elevated, the constraint moves. Go back to step 1. Do not let inertia become
the new constraint — the policy that “pressing is always our bottleneck” will blind you
once it no longer is.
Pitfall. Steps 2 and 3 come before step 4 for a reason students routinely get wrong. The reflex
is to buy capacity (elevate) the moment a bottleneck appears. But exploiting and subordinating
are free and often recover 20–30% of constraint capacity that was being wasted on idling, rework,
and mis-feeding. Spending money to elevate a constraint you have not yet exploited is paying to
enlarge a leak.


## 3.3. Physical, policy, and organizational constraints


Identifying the constraint is harder than the juice line suggests, because not every constraint is a
machine.
Definition 7 (constraint types). A physical constraint is a tangible capacity limit: a machine,
a person, floor space, cash. A policy constraint is a rule, metric, or habit that limits throughput:
“we batch all shipping to Fridays,” “every refund needs VP sign-off,” “utilisation must stay above
90%.” An organizational constraint is structural: handoffs between siloed teams, an approval
chain, a misaligned incentive that no individual can override.
The crucial empirical fact: most binding constraints in real businesses are policy or organiza-
tional, not physical. The juice line’s true bottleneck might not be the press but the policy of pressing
only one recipe per day (losing an hour to cleaning between switches), or the org structure that makes
sales promise delivery dates production never agreed to. Policy constraints are simultaneously the
most common and the cheapest to fix — you change a rule, not a machine — which is exactly why
hunting for them is so valuable.
Example — Finding a policy constraint. An online lender complained its physical constraint
was underwriter capacity: loans piled up awaiting human review. Before hiring (elevating), they
ran the Five Steps. Identify: yes, work pools before underwriting. Exploit: underwriters spent
40% of their time chasing missing documents — a self-inflicted starvation. The real constraint was
a policy: the application form did not require the documents up front. Fixing the form recovered
nearly half the apparent shortage for free. Had they jumped to “hire more underwriters,” they
would have paid to scale a broken process.
Exercises
3.1. A claims-processing line has stages with capacities 50, 30, 45, 60 files/day. Which is the
constraint? If you could add 10 files/day of capacity to exactly one stage, which gives the largest
throughput gain, and what is it?
3.2. For the same line, give one exploit action and one subordinate action that cost no money.
3.3. Classify each as physical, policy, or organizational: (a) a single MRI scanner; (b) a rule that no
order ships without manager approval; (c) sales and operations using different demand forecasts.
For each, sketch the cheapest plausible fix.
14

Version of 13 September 2026 Module page
Answers. (1) System throughput is the smallest stage capacity, so the constraint is the 30 files/day stage. Add the 10
there: it rises to 40, and the new system throughput is min(50,40,45,60)=40 — a gain of +10 files/day. Adding the
10 to any other stage leaves the 30-stage binding, so throughput stays 30 and the gain is zero. Improve the constraint,
nothing else. (2) Exploit (free): make sure the 30-stage is never starved or idle — stagger breaks so it always has work,
and stop sending it files that will be rejected downstream. Subordinate (free): pace stages 1, 3, and 4 to 30/day so they
neither pile WIP in front of the constraint nor starve it. (3) (a) physical — elevate by adding hours/a second scanner,
or exploit by triaging urgent scans first; (b) policy — raise the approval threshold or delegate sign-off, a free rule
change; (c) organizational — adopt a single shared forecast (one S&OP process) so the two functions plan against
the same numbers.
15
