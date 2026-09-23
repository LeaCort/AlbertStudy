# 6. Simpson's paradox and confounding

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 26-28*

Version of 13 September 2026 Module page
6. Simpson’s paradox and confounding
Every slope so far has been read as a quantity to act on: raise 𝑥, expect 𝑎 ̂more units of 𝑦. This chapter
shows how that reading can be not merely imprecise but backwards — the fitted slope pointing the
opposite way to the real, within-group relationship — when a confounding variable is left out. This is
Simpson’s paradox, the sharpest form of “correlation is not causation”. Recall from Chapter 1 that
a confounder is a third variable influencing both 𝑥 and 𝑦.


## 6.1. A regression slope that changes sign


Consider a firm selling products across three quality tiers — budget, mid, premium. For each product
we record its price and its weekly quantity sold. Economic sense says that, holding quality fixed,
a higher price should mean a lower quantity: a negative price–quantity slope. Fit the pooled data,
ignoring the tier, and the slope comes out positive.
import numpy as np
# Fifteen products across three quality tiers. Within every tier, a higher price
# goes with a lower quantity sold. Watch the POOLED slope once the tier -- the
# confounder -- is ignored and all fifteen products are fitted together.
price = np.array([10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28])
qty = np.array([64, 62, 63, 60, 61, 92, 90, 91, 88, 89, 120, 118, 119, 116, 117])
tier = np.array(["budget"] * 5 + ["mid"] * 5 + ["premium"] * 5)
a_all, b_all = np.polyfit(price, qty, 1)
print("pooled slope, all 15 products:", round(a_all, 2))
for name in ["budget", "mid", "premium"]:
m = (tier == name)
a_g, b_g = np.polyfit(price[m], qty[m], 1)
print("slope within " + name + " tier:", round(a_g, 2))
pooled slope, all 15 products: 3.7
slope within budget tier: -0.8
slope within mid tier: -0.8
slope within premium tier: -0.8
Within every tier the slope is −0.8, yet the pooled slope is +3.7. Figure 8 shows why.
26

Version of 13 September 2026 Module page
quantity sold
120
premium
100
mid
80
pooled slope >0
budget
60
10 15 20 25
price
Figure 8: Simpson’s paradox in a regression slope. Within each quality tier the price–quantity slope
is negative (three coloured lines): dearer items sell less. But premium tiers sit up and to the right —
higher price and higher quantity, because quality lifts both — so the single pooled line (red) slopes
upward. The confounder is quality; omit it and the slope reverses.
The pooled slope blends two different comparisons: the within-tier effect (move along one coloured
line) and the between-tier effect (step from one tier’s cloud to the next). Quality raises price and raises
quantity at the same time, so the between-tier steps rise from left to right, a steep positive trend. Stack
the tiers into one undifferentiated cloud and that between-tier climb dominates the gentle within-
tier declines, so the fitted line takes its sign. Quality is confounded with price: it moves with price
and it moves quantity, so its effect is silently attributed to price.


## 6.2. The same reversal in a table of rates


The paradox is not special to regression slopes; it appears wherever groups are pooled. A classic case
compares two treatments for kidney stones by their success rates. Table 3 records, for each treatment,
the successes out of the patients treated, split by whether the stone was small or large.
Small stones Large stones Both, pooled
Treatment A 81/87 = 93% 192/263 = 73% 273/350 = 78%
Treatment B 234/270 = 87% 55/80 = 69% 289/350 = 83%
Table 3: Success rates of two kidney-stone treatments, from Charig and colleagues (1986). Treatment
A does better on small stones (93% against 87%) and better on large stones (73% against 69%), yet
worse overall (78% against 83%). The confounder is stone size: the harder large stones were given to
Treatment A far more often, dragging its pooled rate down.
Read across the first two columns and Treatment A wins in both: 93% against 87% on small
stones, and 73% against 69% on large stones. Read the pooled column and Treatment A loses: 78%
against 83%. The reversal comes from the same mechanism as the regression slope. Stone size is a
confounder: large stones are both harder to treat successfully and were assigned to Treatment A far
more often (263 of its 350 cases, against 80 of Treatment B’s). Treatment A’s pooled rate is pulled
down by the hard cases it was handed, not by any weakness of the treatment. This is the same paradox
as the price example, now on counts and rates rather than on a fitted line.
27

Version of 13 September 2026 Module page


## 6.3. Why more data does not help, and what does


Pitfall. The paradox is not cured by “collecting more data”. Every tier, or every stone size, could
hold thousands of cases and the reversal would stand. It is cured only by conditioning on the
confounder: analyse within each group — as the code does by tier, and as the table does by stone
size — or bring the confounder into the model so that its effect is estimated rather than charged
to 𝑥. The remedy is a better model, not a bigger sample.
Remark. Which slope is “right” depends on the question. To advise a manager how a single
product’s sales respond to its own price, the within-tier slope is the quantity to use. The pooled
positive slope answers a different, descriptive question — “do more expensive products sell
more?” — and yes, they do, because the expensive ones are of higher quality. The mistake is to
read the second number as an answer to the first.
28
