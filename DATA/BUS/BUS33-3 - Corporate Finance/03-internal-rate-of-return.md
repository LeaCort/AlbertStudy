# 3. Internal Rate of Return

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 10-12*

Version of 13 September 2026 Module page
3. Internal Rate of Return
NPV answers “how much value?” Managers often also want a single rate of return they can compare
against the cost of capital and quote without restating a discount rate. That number is the IRR.
Example — the rate at which Lumio's line breaks even. Lumio’s production line had an NPV
of +€8 m at an 8% cost of capital, but we saw a high enough discount rate would wipe that surplus
out. At exactly what rate does the value vanish? Somewhere between 10% and 12% — about 11.5%.
That break-even rate is a figure managers love: “the line returns 11.5%,” set against the 8% the
capital costs, needs no discount rate attached to be understood. It is the project’s internal rate of
return.
Definition 3 (Internal Rate of Return). The Internal Rate of Return of a project is the
discount rate that makes its NPV exactly zero:
𝑛
𝐶
∑ 𝑡 = 0.
(1+IRR) 𝑡
𝑡=0
It is the project’s own break-even rate — the return it earns on the capital it ties up, expressed as
a percentage.
Unlike NPV, the IRR has no closed-form formula for a general cash-flow stream: you find it numer-
ically, by searching for the rate that zeroes the NPV.
Method 1 (Computing the IRR by interpolation). Bracket the IRR with two rates and
interpolate between them:
1. Evaluate the NPV at two rates 𝑟 < 𝑟 , chosen so that NPV > 0 > NPV (one positive, one
1 2 1 2
negative — so the root lies between).
2. Estimate the crossing by linear interpolation:
NPV
IRR ≈ 𝑟 +(𝑟 −𝑟 ) 1 .
1 2 1 NPV −NPV
1 2
Narrow the bracket and repeat for more precision. A spreadsheet’s IRR function automates
exactly this search.
Example — the production line's IRR. For Lumio’s line, NPV at 10% is +€3.3 m and at 12% is
−€1.0 m, so the root lies between them:
3.3
IRR ≈ 10%+2%× ≈ 11.5%.
3.3+1.0
Read it against the 8% cost of capital: the project earns about 11.5% on its capital, comfortably
above the 8% that capital costs, so it creates value — the same verdict NPV gave. The two agree
because, for this project, NPV is positive exactly while the discount rate stays below 11.5%.
10

Version of 13 September 2026 Module page
Proposition 3 (When IRR and NPV agree). For a conventional project — one initial outflow
followed only by inflows, so the cash flows change sign exactly once — the IRR rule “accept if
IRR > 𝑟” gives the same accept/reject verdict as the NPV rule. This is because such a project’s
NPV falls steadily as the discount rate rises and crosses zero exactly once, at the IRR.
The agreement is only on the yes/no decision for a single conventional project. For ranking projects,
and for unconventional cash flows, IRR can mislead in three distinct ways.
Example — scale: the higher IRR, the lower value. Lumio weighs two mutually exclusive
projects at 𝑟 = 8%:
Project Outlay Inflow yr 1 IRR NPV at 8%
Small €10 m €13 m 30% €2.0 m
Large €100 m €118 m 18% €9.3 m
IRR prefers Small (30% > 18%); NPV prefers Large (€9.3 m > €2.0 m). IRR is a rate and is blind to
size — 30% of a small base is less money than 18% of a large one. If Lumio can take only one, it
should take Large: it adds more value. NPV ranks correctly; IRR does not.
The three ways the IRR rule breaks:
• Scale. As above, IRR ignores project size and can rank a small project above a larger, more valuable
one.
• Timing. Projects whose cash flows arrive on different schedules can rank differently under IRR
than under NPV, and the IRR ranking can even reverse as the cost of capital changes — the two
swap at a crossover rate where their NPV profiles intersect.
• Multiple or no IRR. A project whose cash flows change sign more than once (an outflow,
inflows, then a large clean-up outflow) can have several IRRs, or none — leaving “accept if IRR >
𝑟” undefined.
NPV
Large
crossover rate (≈16.7%)
Small IRR =30%
𝑆
IRR 𝐿 =18% discount rate 𝑟
Figure 3: NPV profiles of two mutually exclusive projects. Each curve crosses zero at its own IRR
— Small has the higher IRR (30%) but the lower intercept. The profiles cross at a crossover rate
of about 16.7%, just left of Large’s 18% zero. At any cost of capital below the crossover, Large has
the higher NPV — so the IRR ranking is wrong there. NPV reads off the correct project at the firm’s
actual 𝑟.
Example — multiple IRRs: when the rule breaks down. A project costs €100 m now, returns
€230 m in year 1, then needs a €132 m clean-up outflow in year 2: cash flows −100,+230,−132.
Setting 𝑥 = 1+IRR and solving −100+230/𝑥−132/𝑥2 = 0, i.e. 100𝑥2−230𝑥+132 = 0, gives
11

Version of 13 September 2026 Module page
𝑥 = 1.10 and 𝑥 = 1.20 — an IRR of 10% and of 20%. The NPV profile is hump-shaped: negative
below 10%, (barely) positive between 10% and 20%, negative again above 20%. At an 8% cost of
capital, both roots exceed 8%, so a naïve “accept if IRR > 𝑟” says accept — yet the NPV at 8% is
about −€0.2 m, so the project should be rejected. With two break-even rates the IRR rule has no
single answer; NPV settles it directly.
Pitfall. Two persistent errors with IRR:
1. Treating the higher IRR as the better project. For mutually exclusive choices, rank by
NPV, not IRR — the scale and timing effects above make the IRR ranking unreliable.
2. Believing the IRR “reinvests interim cash flows at the IRR”. You will often read that
IRR — unlike NPV — silently assumes each cash flow is reinvested at the IRR itself. This is
a myth, not a property of the arithmetic. Both ∑𝐶 /(1+IRR) 𝑡 = 0 and NPV = ∑𝐶 /(1+𝑟) 𝑡
𝑡 𝑡
depend only on the project’s own cash flows and a single rate; neither contains any term for
what happens to a cash flow after it is received. A reinvestment rate enters only if you choose
to carry the interim flows forward to a terminal value — as the modified IRR (MIRR) does on
purpose — which is an added modelling assumption, not something the IRR already does.
The real reasons to prefer NPV are the scale and timing effects above, not a reinvestment story.
NPV is the superior rule: it measures value added directly, in currency, at the right cost of capital,
and never multiplies or vanishes. IRR survives as a communication device — a return figure that
can be compared against the cost of capital across projects without restating the discount rate — and
as an accept/reject test for a single conventional project. Know its failure modes and default to NPV
whenever they bite.
Exercises
3.1. A project has cash flows −60,+25,+25,+25 (€m). Estimate its IRR by linear interpolation,
using NPV evaluations at 10% and 15%.
3.2. Two mutually exclusive projects: Small has IRR 30% and NPV €2 m at the cost of capital;
Large has IRR 18% and NPV €9 m. Which does the IRR rule prefer, which does the NPV rule
prefer, and which should the firm take? Name the effect at work.
3.3. A project has cash flows −100,+230,−132 (€m). Show that it has two IRRs, and explain why
“accept if IRR > 𝑟” cannot be applied. How would you decide instead?
Answers. (1) NPV(10%)=−60+25×(1−1.10−3)/0.10≈+€2.17 m; NPV(15%)≈−€2.92 m. So IRR≈10%+5%×
2.17/(2.17+2.92)≈12.1% (exact ≈12.0%).
(2) IRR prefers Small; NPV prefers Large; the firm should take Large — it adds more value. The scale effect: IRR is
a rate and ignores the size of the investment.
(3) Solving −100+230/𝑥−132/𝑥2=0 with 𝑥=1+IRR gives 𝑥=1.10 and 𝑥=1.20, so IRR =10% and 20%. With
two break-even rates the rule is undefined; both exceed an 8% cost of capital, yet NPV at 8% is about −€0.2 m — reject.
Decide on NPV directly.
12
