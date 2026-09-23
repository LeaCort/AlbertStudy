# 1. Covariance and correlation

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 5-9*

Version of 13 September 2026 Module page
1. Covariance and correlation
Before any line is drawn, we need a single number for how strongly two quantities move together.
A retailer looking at thirty markets wants to know: where advertising spend is high, are sales high
too — and how tightly? That number is the correlation, and it is built from a more basic one, the
covariance.
Throughout the chapter the data are 𝑛 pairs (𝑥 ,𝑦 ),…,(𝑥 ,𝑦 ). The index 𝑖 runs over the markets,
1 1 𝑛 𝑛
from 1 to 𝑛; for market 𝑖, the first coordinate 𝑥 is the advertising spend and the second coordinate
𝑖
𝑦 is the sales, both measured in thousands of euros. We write 𝑥 and 𝑦 for the two means.
𝑖


## 1.1. From variance to covariance


For one variable, the variance measures spread: the average squared distance of each value from its
mean. With two variables we ask instead whether they stray from their means together. For each
market, multiply the two deviations 𝑥 −𝑥 and 𝑦 −𝑦: this product is positive when both coordinates
𝑖 𝑖
land on the same side of their means (both above, or both below) and negative when they land on
opposite sides. Adding these products and dividing gives the covariance.
Definition 1 (Sample covariance). For paired data (𝑥 ,𝑦 ),…,(𝑥 ,𝑦 ) with means 𝑥 and 𝑦,
1 1 𝑛 𝑛
the sample covariance of 𝑥 and 𝑦 is the number
𝑛
1
cov(𝑥,𝑦) = ∑(𝑥 −𝑥)(𝑦 −𝑦).
𝑛−1 𝑖 𝑖
𝑖=1
The covariance is positive when the two variables tend to rise together, negative when one tends to
rise as the other falls, and zero when they show no linear co-movement. Taking 𝑦 = 𝑥 recovers the
sample variance 𝑠2.
𝑥
The divisor is 𝑛−1, not 𝑛, for the same reason it is in the sample variance. The deviations are taken
about the sample means 𝑥 and 𝑦, which are themselves computed from the data; the 𝑛 deviations 𝑥 −
𝑖
𝑥 therefore already satisfy one constraint, namely that they sum to zero, so only 𝑛−1 of them can
be chosen freely. Dividing by that number of free deviations, rather than by 𝑛, corrects a systematic
underestimate: the population covariance measures deviation about the true, unknown means, and
deviation about the sample means is always a little smaller. With 𝑛−1 the estimate is unbiased. This
is the divisor NumPy uses when we pass ddof=1, and it is the population covariance, computed about
known means with a divisor 𝑛, that it does not use.
Example — the sign of the covariance. If larger apartments also tend to cost more, then area
and price have positive covariance. If busier roads tend to have cheaper houses, then traffic and
price have negative covariance. The sign reports the direction of the linear trend. The size, on its
own, is hard to read — which is the problem correlation solves.


## 1.2. The problem with covariance: units


Covariance has one flaw as a summary: its size depends on the units. Measure spend in euros instead
of thousands of euros and every deviation 𝑥 −𝑥 becomes a thousand times larger, so the covariance
𝑖
5

Version of 13 September 2026 Module page
becomes a thousand times larger — yet nothing about the relationship has changed. A number that
changes when you switch from metres to centimetres cannot, by itself, tell you whether a relationship
is strong.
The remedy is to divide by the spread of each variable, which cancels both sets of units. The result
is Pearson’s correlation coefficient.
Definition 2 (Pearson’s correlation coefficient 𝑟). For paired data with sample standard
deviations 𝑠 > 0 and 𝑠 > 0, Pearson’s correlation coefficient is
𝑥 𝑦
𝑛
𝑟 = cov(𝑥,𝑦) = ∑ 𝑖=1 (𝑥 𝑖 −𝑥)(𝑦 𝑖 −𝑦) .
𝑠 𝑠
𝑥 𝑦 √∑ 𝑛
𝑖=1
(𝑥
𝑖
−𝑥) 2 √∑ 𝑛
𝑖=1
(𝑦
𝑖
−𝑦) 2
Pearson’s 𝑟 is a pure number, free of units, and it always lies in the interval [−1,1], as the proposition
below proves. The two forms are the same number: in the second, the 𝑛−1 divisors of the covariance
and of the two variances cancel, leaving only raw sums of squares. It is convenient to name those
sums, as they return in every chapter that follows.
Definition 3 (Sums of squares and cross-products). For paired data, the three sums of
squares and cross-products are
𝑛 𝑛 𝑛
2 2
𝑆 = ∑(𝑥 −𝑥) , 𝑆 = ∑(𝑦 −𝑦) , 𝑆 = ∑(𝑥 −𝑥)(𝑦 −𝑦).
𝑥𝑥 𝑖 𝑦𝑦 𝑖 𝑥𝑦 𝑖 𝑖
𝑖=1 𝑖=1 𝑖=1
In this notation, 𝑟 = 𝑆 /√𝑆 𝑆 . The bound on 𝑟 is worth proving, because the proof also explains
𝑥𝑦 𝑥𝑥 𝑦𝑦
what 𝑟 means geometrically.
Proposition 1 (𝑟 lies between −1 and 1). For any paired data with 𝑠 > 0 and 𝑠 > 0, one has
𝑥 𝑦
−1 ≤ 𝑟 ≤ 1. The value 𝑟 = ±1 occurs exactly when the points lie on a straight line of nonzero
slope.
Proof. Collect the two lists of deviations into vectors of ℝ𝑛, namely 𝑢 = (𝑥 −𝑥) and 𝑣 =
𝑖
1≤𝑖≤𝑛
(𝑦 −𝑦) . Then 𝑆 = ⟨𝑢,𝑣⟩ is their inner product, 𝑆 = ‖𝑢‖2 and 𝑆 = ‖𝑣‖2, so
𝑖 𝑥𝑦 𝑥𝑥 𝑦𝑦
1≤𝑖≤𝑛
⟨𝑢,𝑣⟩
𝑟 =
‖𝑢‖‖𝑣‖
is the cosine of the angle between 𝑢 and 𝑣. The Cauchy–Schwarz inequality states that |⟨𝑢,𝑣⟩| ≤
‖𝑢‖‖𝑣‖, which gives |𝑟| ≤ 1. Cauchy–Schwarz is an equality exactly when 𝑢 and 𝑣 are collinear, that
is when 𝑦 −𝑦 is one fixed multiple of 𝑥 −𝑥 for every 𝑖; this is precisely the statement that the points
𝑖 𝑖
(𝑥 ,𝑦 ) lie on a straight line of nonzero slope. □
𝑖 𝑖
So 𝑟 is the cosine of the angle between the two centred data vectors: 𝑟 = 1 means they point the same
way, a perfectly rising line; 𝑟 = −1 means they point opposite ways, a perfectly falling line; and 𝑟 =
0 means they are perpendicular, with no linear alignment at all.
6

Version of 13 September 2026 Module page


## 1.3. Computing them on the markets


We load the thirty markets and compute both quantities. NumPy returns the covariance as one entry
of a small matrix, and the correlation the same way.
import numpy as np
# Thirty regional markets of an online retailer. For each market i the record is
# one week's advertising spend x_i and the sales y_i that followed, both in
# thousands of euros (k€). The spend is what the retailer sets; the sales are
# what it hopes the spend drives.
x = np.array([2.1, 2.9, 3.3, 3.3, 3.5, 3.6, 3.8, 4.2, 4.4, 6.9,
7.0, 7.3, 7.4, 7.9, 9.4, 10.1, 10.3, 10.4, 10.4, 11.4,
11.9, 13.0, 13.1, 13.5, 14.5, 14.6, 16.5, 16.6, 18.5, 19.8])
y = np.array([3.5, 10.0, 7.4, 11.4, 13.3, 10.7, 5.2, 13.3, 12.5, 19.0,
19.8, 24.4, 22.6, 16.5, 21.5, 26.9, 25.1, 21.2, 21.6, 21.5,
25.3, 27.3, 31.2, 25.4, 23.7, 28.7, 29.5, 39.7, 44.6, 40.2])
n = len(x)
print("number of markets:", n)
print("mean spend x-bar :", round(np.mean(x), 2), "k€")
print("mean sales y-bar :", round(np.mean(y), 2), "k€")
number of markets: 30
mean spend x-bar : 9.39 k€
mean sales y-bar : 21.43 k€
import numpy as np
# The covariance is the off-diagonal entry of the 2x2 covariance matrix; ddof=1
# selects the n-1 divisor. Pearson's r is the matching off-diagonal entry of the
# correlation matrix -- already unit-free and already inside [-1, 1].
cov_xy = np.cov(x, y, ddof=1)[0, 1]
r = np.corrcoef(x, y)[0, 1]
print("cov(x, y):", round(cov_xy, 2))
print("r :", round(r, 4))
cov(x, y): 47.71
r : 0.9342
The correlation is 𝑟 = 0.9342 — strong and positive. Spend and sales rise together tightly. That single
number is the summary the retailer asked for, and the starting point for everything that follows.


## 1.4. What correlation does not capture


Here is the trap. Pearson’s 𝑟 measures linear alignment only. A relationship can be exact and still have
𝑟 close to zero, if its shape is curved. Figure 1 shows three clouds: a strong rising trend, a strong falling
trend, and a clean parabola whose 𝑟 is essentially zero even though 𝑦 is almost perfectly determined
by 𝑥.
7

Version of 13 September 2026 Module page
strong positive curved, not linear strong negative
𝑟=0.92 𝑟=−0.01 𝑟=−0.87
Figure 1: Pearson’s 𝑟 measures only the linear part of a relationship. Left: a strong rising trend, with
𝑟 near 0.9. Middle: a parabola, where 𝑦 is almost fully determined by 𝑥, yet 𝑟 is near 0, because there
is no straight-line alignment. Right: a strong falling trend, with 𝑟 near −0.9. A correlation near zero
rules out a straight line, not a relationship.
Pitfall. Reading 𝑟 near 0 as “𝑥 and 𝑦 are unrelated” is the most common correlation error. It
means only that no straight line fits. Always look at the scatter plot: a U-shape, a cycle, or a
plateau can hide behind a small 𝑟. In the other direction, a large 𝑟 does not prove that a line is
the right model, only that one is not obviously wrong.
A second fragility: because every deviation is squared in 𝑆 and 𝑆 , a single point far from the trend
𝑥𝑥 𝑦𝑦
can dominate the whole coefficient. Such a point has a name.
Definition 4 (Outlier). In a scatter plot, an outlier is an observation that lies far from the
pattern set by the rest of the data — far from the straight-line trend the other points follow, or
far from the bulk of the values in 𝑥 or in 𝑦.
The value of 𝑟 falls sharply when just one of ten well-behaved points is mis-recorded as an outlier.
import numpy as np
# r is not robust: a single wild point can dominate it. Ten markets sit almost
# perfectly on a line; then one sales figure is mis-recorded far below the rest.
xc = np.array([1., 2., 3., 4., 5., 6., 7., 8., 9., 10.])
yc = np.array([1.2, 2.1, 2.9, 4.2, 5.1, 5.8, 7.2, 7.9, 9.1, 9.8])
print("r, clean cloud :", round(np.corrcoef(xc, yc)[0, 1], 3))
yc[9] = -6.0 # the tenth market's sales are mis-recorded far below the trend
print("r, one bad point:", round(np.corrcoef(xc, yc)[0, 1], 3))
r, clean cloud : 0.999
r, one bad point: 0.08
One corrupted observation pulls 𝑟 down from 0.999 to 0.08: the ten points no longer look linear at
all, because of a single bad entry. Correlation is not robust — one outlier can create it or destroy it.
8

Version of 13 September 2026 Module page


## 1.5. Correlation is not causation


A last, older warning. A strong 𝑟 between two variables can arise because one drives the other,
because both are driven by a third variable, or by pure coincidence in a small sample. The second
case has a name, and it is the subject of Chapter 6.
Definition 5 (Confounding variable). A confounding variable (or confounder) for the
pair (𝑥,𝑦) is a third variable that influences both 𝑥 and 𝑦. When a confounder is present but left
out of the analysis, part of its effect on 𝑦 is wrongly attributed to 𝑥, so the observed association
between 𝑥 and 𝑦 need not reflect any direct link between them.
A correlation, however strong, cannot on its own tell these three cases apart. Establishing that 𝑥
causes 𝑦 needs more than the data of a single observational sample; Chapter 6 shows how badly the
confounding case in particular can mislead.
9
