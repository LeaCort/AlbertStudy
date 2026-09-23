# 5. Sales-Pipeline Economics and Funnel Hygiene

*Source: BUS23-1 - Sales, Negotiation & Client Relations - Textbook.pdf, pages 28-33*

Version of 15 September 2026 Module page
5. Sales-Pipeline Economics and Funnel
Hygiene


## 5.1. Selling is a system, not a series of heroics


One salesperson’s brilliant close is a story; a pipeline is a system you can diagnose and improve.
Once a company runs many deals, performance stops being about individual charisma and becomes
about the economics of the funnel: how opportunities flow through defined stages, where they
leak, and which one or two fixes would most raise the end-to-end conversion rate.


## 5.2. Stages and stage definitions


Ask two reps what “Qualified” means and you get two answers: one counts a friendly reply, the
other a signed-off budget. Until the stages mean the same thing to everyone, the pipeline’s numbers
describe nobody’s reality.
Definition 18 (Pipeline and stage definitions). A sales pipeline is the ordered sequence
of stages an opportunity passes through from first lead to closed deal (e.g. Lead → Qualified
→ Demo → Proposal → Negotiation → Closed). Stage definitions are the explicit, objective
criteria that mark entry into each stage — what must be true for a deal to count as “Qualified,”
not merely how the rep feels about it.
Pitfall. Vague stage definitions are the root cause of an unreliable pipeline. If “Qualified” means
“the rep is optimistic,” the forecast is fiction and leakage cannot be located. Every stage needs a
verifiable entry criterion (e.g. “Qualified = passes BANT, confirmed in writing”). This discipline
of accurate, well-defined stages and clean data is funnel hygiene.
In practice each opportunity lives as a record holding exactly the facts a clean funnel needs: which
stage it is in, the qualification behind that stage, its current status, and the next action. Figure 8
shows one.
Meridian Retail — logistics platform €60,000 / yr
Stage Proposal
Qualification (BANT) Budget approved · Authority: VP Ops (economic buyer) · Need: cut ware-
house errors · Timeline: sign by Q3
Pipeline status Proposal sent 12 Sep · awaiting buyer response
Next follow-up Call the internal champion, 19 Sep
Figure 8: One opportunity as a CRM record: the stage, the qualification behind it, the pipeline status,
and the next follow-up. The same fields are the backbone of tools like HubSpot and Salesforce; here
the record only shows what a clean pipeline stage tracks — operating those tools is a separate, out-
of-scope skill.
28

Version of 15 September 2026 Module page


## 5.3. Conversion, benchmarks, and leakage


Definition 19 (Conversion, benchmark, leakage). Conversion (or stage-to-stage conver-
sion) is the fraction of opportunities that advance from one stage to the next. A benchmark is a
reference conversion rate — historical, peer, or category — to compare against. Leakage is the
loss of opportunities between stages; the end-to-end conversion is the product of all the stage-
to-stage rates.
Example — Reading a funnel. A pipeline runs Lead → Qualified → Demo → Proposal → Won
with these counts and conversion rates:
• Lead → Qualified: 1000 → 400 (40%)
• Qualified → Demo: 400 → 300 (75%)
• Demo → Proposal: 300 → 90 (30%)
• Proposal → Won: 90 → 45 (50%)
End-to-end: 0.40×0.75×0.30×0.50 = 4.5% — 45 wins from 1000 leads. The worst leak by far is
Demo → Proposal at 30%: two of every three demos die without even producing a proposal. The
next-worst is Lead → Qualified at 40%.
Lead (1000)
↓ 40%
Qualified (400)
↓ 75%
Demo (300)
↓ 30% (worst leak)
Proposal (90)
↓ 50%
Won (45)
Figure 9: The funnel from the worked example. Each bar’s width is proportional to the number of
deals at that stage; each arrow shows the stage-to-stage conversion. The Demo → Proposal step (30%)
loses the largest share, making it the first lever to investigate.


## 5.4. Finding the two highest-leverage levers


Diagnosing a pipeline is not “improve everything.” It is finding the two stage-transitions where a
realistic improvement would most raise the end-to-end rate. Here the arithmetic is decisive. Because
end-to-end conversion is the product of the stage rates, lifting one stage from a current rate 𝑟 to 𝑟+
Δ multiplies the whole product by (𝑟+Δ)/𝑟 = 1+Δ/𝑟. For a given gain Δ, that multiplier is largest
where the current rate 𝑟 is smallest. So a fixed percentage-point gain is worth most at the lowest-
converting stage — and the raw number of deals sitting at a stage does not enter the end-to-end
rate at all.
29

Version of 15 September 2026 Module page
Example — Which lever to pull. Apply the same +10-percentage-point gain to each stage of the
funnel above (baseline end-to-end 4.5%) and read off the new end-to-end rate:
• Demo → Proposal, 30% → 40%: 0.40×0.75×0.40×0.50 = 6.0%
• Lead → Qualified, 40% → 50%: 0.50×0.75×0.30×0.50 = 5.6%
• Proposal → Won, 50% → 60%: 0.40×0.75×0.30×0.60 = 5.4%
• Qualified → Demo, 75% → 85%: 0.40×0.85×0.30×0.50 = 5.1%
The ranking tracks the lowest starting rate exactly — not the volume of deals. The same gain is
worth most at Demo → Proposal (30%), then Lead → Qualified (40%). Those two lowest-converting
stages are the levers; lifting Demo → Proposal the whole way to 50% raises end-to-end conversion
to 0.40×0.75×0.50×0.50 = 7.5% — a two-thirds jump in wins from a single stage.
One refinement tempers the pure arithmetic: the achievable Δ differs by stage. A stage sitting
far below its benchmark has genuine headroom, while one already at its benchmark may be near
its ceiling — so weigh each low-rate stage by how far it lags its benchmark, not only by its rate.
What never re-enters the calculation is raw volume: the end-to-end rate is a product of the stage
percentages, and a stage is not a better lever merely for holding more deals.
Example — When a benchmark overrides the raw rate. The lever choice above assumed the
same +10 points were available at every stage. They rarely are — and a benchmark (the rate
comparable teams reach at that stage) is how you tell where the room actually is. Suppose the same
funnel carries category benchmarks:
• Lead → Qualified: 40% (benchmark 40%)
• Qualified → Demo: 75% (benchmark 78%)
• Demo → Proposal: 30% (benchmark 55%)
• Proposal → Won: 50% (benchmark 65%)
Raw lowest-rate ranking chose Demo → Proposal (30%) and then Lead → Qualified (40%). But
Lead → Qualified is already at its benchmark: comparable teams do no better, so its realistic
headroom is near zero and a +10-point gain there is a fantasy. Proposal → Won, at 50%, lags its
65% benchmark by 15 points — real, evidenced room. Lift each stage only as far as its benchmark
and recompute the end-to-end rate (baseline 4.5%):
• Demo → Proposal, 30% → 55%: 0.40×0.75×0.55×0.50 = 8.25%
• Proposal → Won, 50% → 65%: 0.40×0.75×0.30×0.65 = 5.85%
• Qualified → Demo, 75% → 78%: 0.40×0.78×0.30×0.50 = 4.68%
• Lead → Qualified, 40% → 40%: no headroom — stays 4.5%
The two levers are now Demo → Proposal and Proposal → Won — not Lead → Qualified. The
benchmark overrode the raw-rate answer: the second-lowest rate turned out to be the stage with
the least room to move. The rate tells you where conversion is low; the benchmark tells you where
a low rate is actually fixable.
Pitfall. Two seductive errors: (1) optimising the stage that is easiest to improve rather than the
one with the most leverage, and (2) “improving” conversion by redefining stages — quietly
moving the goalposts so more deals “qualify.” The second is hygiene failure disguised as progress:
it flatters the dashboard while the real economics get worse, because unqualified deals now clog
the later, more expensive stages.
30

Version of 15 September 2026 Module page
Remark. The whole funnel is the marketing-allocation logic of Marketing Fundamentals
turned operational: finite selling capacity must be allocated to the stage where a euro of effort
yields the most incremental revenue. Pipeline diagnosis is “How to Allocate” applied to a sales
team.


## 5.5. Running the funnel backwards: from a revenue target to leads


The same product of stage rates that diagnoses a funnel also plans one. Read forward, it turns
a number of leads into wins; read backwards, it turns a revenue target into the leads that target
demands. Where the forward pass multiplies by each rate, the backward pass divides by it, stage
by stage.
Example — From €900k to the leads it takes. You must land €900,000 of new business next
year, and your average deal is worth €20,000 — so you need 45 wins. Run the funnel of the worked
example backwards, dividing by each stage’s rate in turn:
• 45 wins ÷ 50% (Proposal → Won) = 90 proposals
• 90 ÷ 30% (Demo → Proposal) = 300 demos
• 300 ÷ 75% (Qualified → Demo) = 400 qualified opportunities
• 400 ÷ 40% (Lead → Qualified) = 1,000 leads
So the €900k goal requires 1,000 leads — exactly the funnel read forward earlier, now derived
from the target instead of the top. Forward and backward are one chain of rates run in opposite
directions.
Pitfall. Two backward-planning traps. First, round fractional counts up: if a stage rate
demanded 266.7 qualified opportunities you need 267, not 266 — you cannot half-qualify a deal,
and rounding down leaves you short of the target. Second, planning the lead number but not
the capacity to work it: 1,000 leads no one has time to call will convert far below the rates that
assumed each got proper attention.
Exercises
5.1. The situation. You have taken over sales operations at a SaaS firm. Last quarter the pipeline
ran Lead → Qualified → Demo → Proposal → Won with counts 800 → 280 → 210 → 84 → 42.
What you have. Only these counts; the reps insist “every stage is fine.”
Task. Compute each stage-to-stage conversion and the end-to-end rate, then identify the two
highest-leverage levers and justify the choice numerically.
Debrief. Why is the highest-volume stage not automatically the best lever?
5.2. The situation. The board sets next year’s new-business target at €1,200,000. Your average
deal is worth €30,000, and you may assume the stage rates of the worked example (40%, 75%,
30%, 50%).
What you have. The target, the deal size, and the rates — nothing downstream yet.
Task. Run the funnel backwards to the wins, proposals, demos, qualified opportunities, and
leads the target requires.
31

Version of 15 September 2026 Module page
Debrief. If your team can realistically source only 800 leads, what has to change for the target
to survive?
5.3. The situation. Your CRM lets reps advance a deal to any stage by hand, and the forecast
keeps missing.
What you have. Free rein to rewrite the entry rules for “Qualified,” “Proposal,” and “Negoti-
ation.”
Task. Write an objective, verifiable entry definition for each of the three stages.
Debrief. Take one of your definitions, make it vague, and explain how that vagueness would
corrupt the funnel’s diagnosis.
5.4. The situation. A sales manager boasts that “qualification conversion” jumped from 40% to
70% in a single quarter and wants a bonus for it.
What you have. The dashboard number and access to the underlying deal data.
Task. Give two innocent explanations for the jump and one that should worry you, and say what
data would tell them apart.
Debrief. Which downstream metric is hardest to fake, and why does it settle the question?
5.5. The situation. Your funnel runs Lead → Qualified → Demo → Proposal → Won at stage
rates 30%, 45%, 70%, 50%. Your industry association publishes category benchmarks for the
four stages: 60%, 47%, 72%, 75%.
What you have. The four rates and the four benchmarks — nothing else.
Task. Rank the stages as improvement levers two ways: first by raw rate alone, then by how
far each rate lags its benchmark. Name the two highest-leverage levers on the benchmark-aware
view, and say which stage the raw-rate view would have chosen by mistake.
Debrief. Why is a low conversion rate at a stage already sitting at its benchmark a poor lever,
even though its rate is among the lowest?
Answers. (1) Rates: 280/800 = 35%, 210/280 = 75%, 84/210 = 40%, 42/84 = 50%; end-to-end 0.35×0.75×0.40×
0.50=5.25%. Add the same Δ (say +10 points) to each candidate and recompute: the largest new end-to-end appears
at the lowest rates, because the product scales by 1+Δ/𝑟. The two levers are Lead → Qualified (35%) and Demo
→ Proposal (40%), adjusted for how far each lags its benchmark. The highest-volume stage is not automatically best
because raw counts never enter the end-to-end product — only the percentages do. (2) €1,200,000 ÷ €30,000 = 40
wins; ÷ 50% = 80 proposals; ÷ 30% = 267 demos (266.7 rounded up); ÷ 75% = 356 qualified (267 ÷ 75%); ÷ 40%
= 890 leads (356 ÷ 40%). At only 800 leads the target cannot hold on volume alone — you must raise a stage rate
(e.g. improve the 30% Demo → Proposal step) or the deal size, or accept a lower target. (3) For example: Qualified =
passes BANT with budget and decision-maker confirmed in writing; Proposal = a written, priced proposal has been
sent and the buyer has acknowledged receipt; Negotiation = the buyer has responded and price or terms are under
active discussion. Vague “Qualified = the rep is hopeful” swells the Qualified count with unready deals, so Qualified
→ Demo looks falsely low and the real leak is hidden. (4) Innocent: better lead sources/targeting, or genuinely sharper
qualification. Worrying: the bar for “Qualified” was quietly lowered (goalpost-moving). Look downstream — wins
per lead is hardest to fake: if qualification truly improved it holds or rises, but if the goalposts moved, later-stage rates
fall while wins-per-lead stays flat or drops. (5) Raw-rate ranking picks the two lowest rates: Lead → Qualified (30%)
and Qualified → Demo (45%). But the benchmark lags are 30, 2, 2 and 25 points, so Qualified → Demo (45% against
a 47% benchmark) has almost no headroom, while Proposal → Won (50% against a 75% benchmark) lags by 25. Lift
each stage only to its benchmark and recompute end-to-end (baseline 0.30×0.45×0.70×0.50=4.73%): Lead →
Qualified reaches 0.60×0.45×0.70×0.50=9.45%, Proposal → Won reaches 0.30×0.45×0.70×0.75=7.09%, and
the other two stay under 5%. The two real levers are Lead → Qualified and Proposal → Won; the raw-rate view
would have chosen Qualified → Demo as the second lever by mistake. A low rate already at its benchmark is a poor
lever because the benchmark is evidence that comparable teams do no better there — the achievable Δ is near zero,
and since leverage is 1+Δ/𝑟, a Δ of zero buys nothing however small 𝑟 is.
32

Version of 15 September 2026 Module page
Chapter takeaways. A pipeline is a system of defined stages with verifiable entry criteria; keep-
ing those definitions and the data clean is funnel hygiene. Stage-to-stage conversion, compared
to benchmarks, locates leakage, and end-to-end conversion is the product of the stage rates.
Because it is a product, a fixed percentage-point gain is worth most at the lowest-converting
stage; diagnose by finding the two lowest-converting transitions (weighed by how far each lags its
benchmark) — not by chasing the highest-volume step. Run the chain backwards — dividing
by each rate — to turn a revenue target into the wins, proposals, qualified opportunities, and
leads it requires. And never “improve” conversion by redefining stages to flatter the numbers.
33
