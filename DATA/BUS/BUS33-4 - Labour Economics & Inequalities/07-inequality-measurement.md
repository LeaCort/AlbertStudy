# 7. Inequality measurement

*Source: BUS33-4 - Labour Economics & Inequalities - Textbook.pdf, pages 27-30*

Version of 13 September 2026 Module page
7. Inequality measurement
To study the distribution we first need to measure it. Two tools — one visual, one a single number
— do almost all the work, and both are built directly from a ranked list of incomes.


## 7.1. The Lorenz curve


Example — five households. Five households earn €10k, €20k, €30k, €40k, €100k — total €200k.
Rank them poorest-first and accumulate. The poorest 20% (one household) hold €10k = 5% of
income; the poorest 40% hold €30k = 15%; the poorest 60%, €60k = 30%; the poorest 80%, €100k
= 50%; and all 100% hold 100%. Plot those cumulative pairs (Figure 7) and you have drawn this
society’s Lorenz curve — and the sag below the diagonal is its inequality.
cum. income share
equality
.50
.30
.2 .4 .6 .8
cum. population share 𝑝
Figure 7: The Lorenz curve for the five households of the worked example, through the computed
points (0.2,0.05),(0.4,0.15),(0.6,0.30),(0.8,0.50) and (1,1). The shaded gap between the diagonal
and the curve is the raw material of the Gini coefficient computed opposite.
Definition 18. Rank the population poorest to richest. The Lorenz curve 𝐿(𝑝) plots the
cumulative share of total income held by the poorest fraction 𝑝. It runs from (0,0) to (1,1), lies
on or below the 45° line of perfect equality, and is convex. The farther it sags below the diagonal,
the greater the inequality.


## 7.2. The Gini coefficient


Definition 19. The Gini coefficient measures inequality as the area between the equality line
and the Lorenz curve. Write 𝐴 for the area between the diagonal and the curve and 𝐵 for the area
beneath the curve. Then
𝐴
𝐺 = .
𝐴+𝐵
27

Version of 13 September 2026 Module page
The whole triangle under the diagonal has area 𝐴+𝐵 = 1/2, so 𝐺 = 𝐴/(1/2) = 2𝐴: the Gini is
twice the gap between the curve and the diagonal. It ranges from 0 (perfect equality — the curve
lies on the diagonal, so 𝐴 = 0) to 1 (perfect inequality — one household holds everything). The
method below turns this area into a formula you can compute from grouped data.
Method 2 (the Gini from grouped data). With cumulative population shares 𝑝 = 0,…,𝑝 =
0 𝑛
1 and Lorenz ordinates 𝐿 = 0,…,𝐿 = 1, approximate the area under the curve by trapezoids:
0 𝑛
𝑛
𝐺 ≈ 1−∑(𝑝 −𝑝 )(𝐿 +𝐿 ).
𝑖 𝑖−1 𝑖 𝑖−1
𝑖=1
Example — the Gini for the five households. Use the five-household ordinates from the worked
example above. Each population step is 𝑝 −𝑝 = 0.2, so
𝑖 𝑖−1
𝐺 ≈ 1−0.2×[(0.05+0)+(0.15+0.05)+(0.30+0.15)+(0.50+0.30)+(1.00+0.50)]
= 1−0.2×[0.05+0.20+0.45+0.80+1.50] = 1−0.2×3.00 = 1−0.60 = 0.40.
This society’s Gini is 0.40 — squarely in the range of a fairly unequal advanced economy. The whole
chapter’s machinery now delivers a single number you can compare across countries and years.
Example — the same computation on real data — the United States. The method transfers
unchanged to an actual country. The World Bank reports US household income shares by quintile
for 2024 as 5.1%,10.0%,15.1%,22.6% and 47.1% (poorest fifth to richest). Accumulate them into
Lorenz ordinates
𝐿 = 0.051,0.151,0.302,0.528,1.000
and feed those to the very same trapezoidal formula (step 0.2 again):
𝐺 ≈ 1−0.2×[(0.051+0)+(0.151+0.051)+(0.302+0.151)+(0.528+0.302)+(1.000+0.528)]
= 1−0.2×3.064 = 1−0.613 = 0.39.
The World Bank’s own published Gini for the United States is 0.42. Our 0.39 falls a little short
for a reason worth seeing: five coarse groups force the Lorenz curve to be a straight line inside
each quintile, which erases the inequality within the top fifth — exactly the tail the Gini is least
sensitive to (the Pitfall below). Finer data — deciles, or percentiles at the very top — would close
most of the 0.03 gap. Real distributional data thus give both the number and a lesson in how
grouping biases it.
Remark. The trajectory since 1980. On real disposable-income (post-tax, post-transfer) data,
the Gini has risen in many advanced economies since around 1980 — most sharply in the
United States (from roughly 0.35 around 1980 to about 0.39– 0.41 today) and the United Kingdom
(to about 0.35), more mildly in France (around 0.29–0.32), and it remains lowest in the Nordic
economies (Denmark, Sweden around 0.25–0.28). The dispersion across countries facing the
same global forces (trade, technology) is itself evidence that institutions and redistribution
— not technology alone — shape the outcome.
28

Version of 13 September 2026 Module page
Pitfall. The Gini compresses an entire distribution into one number, so very different distribu-
tions can share a Gini. It is relatively insensitive to the tails — two societies with the same Gini
can differ enormously in their top 1% share. For top-end concentration (the Piketty agenda of
Chapter 8) report top shares alongside the Gini; no single statistic is sufficient.


## 7.3. Percentile ratios and top shares


The Gini reads the whole curve into one number. Two simpler statistics read named ranks instead,
and they answer questions the Gini blurs.
Example — the gap between two ranks. Line everyone up by income. The person standing
at the 90th percentile earns €6 000 a month; the person at the 10th earns €1 200. The P90/P10
ratio is 6000/1200 = 5: the top of the middle earns five times the bottom. One number, from two
points on the distribution — and it says something the Gini cannot, namely how far apart these
two particular ranks stand.
Definition 20. A percentile ratio compares incomes at two ranks of the distribution. The P90/
P10 ratio divides the 90th-percentile income by the 10th; P50/P10 compares the median to the
bottom decile (lower-half inequality); P90/P50 the top to the median (upper-half inequality). A
percentile ratio is local — it uses only the two ranks named and ignores everything between and
beyond them — which is exactly why it is reported alongside the Gini, not instead of it: it pins
down where in the distribution the stretching happens.
Example — splitting inequality into halves. With monthly incomes P10 = €1200, P50 = €2400,
P90 = €6000:
6000 2400 6000
P90/P10 = = 5, P50/P10 = = 2, P90/P50 = = 2.5.
1200 1200 2400
Because P90/P50 = 2.5 > 2 = P50/P10, this distribution is stretched more at the top than at the
bottom — the gap above the median exceeds the gap below it. A single Gini would have hidden
which half was doing the work.
Definition 21. A top income share is the fraction of total income received by a top group —
the top 10%, top 1%, or top 0.1%. Because it targets precisely the tail the Gini is least sensitive to,
it is the natural second number to report beside the Gini.
Remark. Why fiscal data revolutionised top shares. Top shares were long estimated from
household surveys, which systematically under-catch the very top: the richest households
are few and hard to sample, and they tend to under-report capital income. Piketty, Saez and their
collaborators rebuilt the series from tax records instead — administrative data that cover the
whole population, top included — now assembled for many countries in the World Inequality
Database. The switch revealed top shares markedly higher, and rising faster since 1980, than
29

Version of 13 September 2026 Module page
surveys had shown: the United States top-1% pre-tax income share roughly doubled, from about
10% around 1980 to above 20% by the 2010s.
Exercises
7.1. Five households earn €15k, €25k, €35k, €45k, and €80k. (a) Construct the Lorenz ordinates.
(b) Compute the Gini coefficient using the trapezoidal formula. (c) Interpret the result and
explain why two distributions can share a Gini yet differ sharply in top-1% share. (d) For monthly
incomes P10 = €1500, P50 = €3000, P90 = €9000, compute P90/P10, P50/P10, and P90/P50,
and say which half of the distribution is more stretched. (e) Pick one country and, using this
chapter’s trajectory figures, describe how its Gini has moved since 1980; then give the leading
interpretation of why, and explain what the divergence between countries facing the same
global forces tells you about the role of institutions.
Answers. (1) Total €200k, so ordinates (𝑝,𝐿): (0.2,0.075),(0.4,0.20),(0.6,0.375),(0.8,0.60),(1,1). 𝐺≈1−0.2(0.075+
0.275+0.575+0.975+1.60)=1−0.2×3.50=1−0.70=0.30 — less unequal than the €10k–€100k spread of the
worked example (0.40), because the top household is nearer the rest. Two distributions share a 𝐺 yet differ in the
top-1% share because 𝐺 is tail-insensitive. (d) P90/P10=9000/1500=6.0, P50/P10=3000/1500=2.0, P90/P50=
9000/3000=3.0; since 3.0>2.0, the upper half is more stretched than the lower. (e) The United States, say: its
disposable-income Gini rose from roughly 0.35 around 1980 to about 0.39–0.41 today — a clear widening. The leading
reading is that skill-biased technology and globalisation pushed up top incomes across advanced economies, but
redistribution and labour-market institutions (unions, minimum wages, taxes and transfers) governed how much of
that pressure reached disposable incomes. France (≈0.29–0.32) and the Nordics (≈0.25–0.28) faced the same global
forces yet saw far smaller rises — the divergence is itself evidence that institutions, not technology alone, shape the
outcome.
30
