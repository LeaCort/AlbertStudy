# 8. Confidence intervals

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 33-35*

Version of 13 September 2026 Module page
8. Confidence intervals
A hypothesis test answers a yes/no question; a confidence interval answers the more useful
quantitative one: what range of parameter values is plausible given the data? Built from the
same CLT, it carries its own precise — and famously misread — interpretation.


## 8.1. Construction from the CLT


Example — estimating average height. We measure 𝑛 = 100 people and find sample mean 𝑥 =
171 cm, with known population SD 𝜎 = 8 cm. By the CLT 𝑋 ≈ 𝒩︀(𝜇,82/100), so the standard error
is 8/√100 = 0.8 cm. With 95% probability 𝑋 lands within 1.96 standard errors of 𝜇 — and we can
turn that around into a statement about 𝜇.
Definition 15 (confidence interval for a mean). From a sample mean 𝑥 with standard error
𝜎/√𝑛, a 95% confidence interval for 𝜇 is
𝜎
𝑥±1.96⋅ .
√𝑛
The half-width 𝐸 = 1.96𝜎/√𝑛 is the margin of error. For a general confidence level 1−𝛼,
replace 1.96 by the critical value 𝑧 with Φ(𝑧 ) = 1−𝛼/2.
𝛼/2 𝛼/2
For the heights: 171±1.96(0.8) = 171±1.57, i.e. [169.4,172.6] cm.
8.1.1. When 𝜎 is unknown: the 𝑡-interval
The construction above assumed a known population SD 𝜎. In practice we almost never know it and
must estimate it from the sample itself as the sample SD 𝑠. For a small sample that estimate is itself
uncertain, so we widen the interval by replacing the normal critical value with the slightly larger
Student-𝑡 value 𝑡 of Chapter 3, carrying 𝑛−1 degrees of freedom:
𝛼/2,𝑛−1
𝑠
𝑥±𝑡 ⋅ .
𝛼/2,𝑛−1
√𝑛
The critical value 𝑡 is read from the 𝑡-table of Chapter 7; a two-sided 95% interval uses its .025
𝛼/2,𝑛−1
column (𝛼/2 = 0.025). That column shows the penalty fading as data accumulate: 𝑡 = 2.571 at 5
0.025
degrees of freedom, 2.228 at 10, 2.086 at 20 and 2.042 at 30, closing on the normal’s exact 1.960 at ∞
— with enough data, not knowing 𝜎 costs nothing.
Example — a 𝑡-interval for a small sample. Ten measurements of a part give 𝑥 = 20.3 mm with
sample SD 𝑠 = 1.8 mm. With 𝑛−1 = 9 degrees of freedom the critical value is 𝑡 = 2.262, so
0.025,9
the 95% interval is
1.8
20.3±2.262⋅ = 20.3±1.29 = [19.0,21.6].
√10
The normal value 1.96 would give the narrower ±1.12 — overstating our precision by ignoring that
𝜎 was itself only estimated.
33

Version of 13 September 2026 Module page
8.2. What “95% confident” actually means
Pitfall. The interval [169.4,172.6] does not mean “there is a 95% probability that 𝜇 lies in it”.
Once computed, the interval either contains the fixed (but unknown) 𝜇 or it does not — there is
no probability left. The 95% is a property of the procedure: if we repeated the whole sampling-
and-computing process many times, about 95% of the intervals produced would capture 𝜇.
Confidence is in the method, not in any single interval. Saying “ℙ(𝜇 ∈ [169.4,172.6]) =
0.95” treats the fixed parameter as random — precisely the error this caveat exists to prevent.
true 𝜇
𝑥7
𝑥6
𝑥5
𝑥4
𝑥3
𝑥2
𝑥1
Figure 10: Seven samples, seven confidence intervals. Each brackets its own sample mean; the true 𝜇
(dashed line) is fixed. Most intervals capture 𝜇, but one (red) misses entirely. Over many repetitions
about 95% would capture it — that frequency is the confidence level. Any single interval simply does
or does not.


## 8.3. Margin of error and sample size


The margin of error 𝐸 = 𝑧 𝜎/√𝑛 exposes the three levers of precision. A narrower interval
𝛼/2
demands a larger 𝑛 (cost grows as 𝐸−2), a smaller 𝜎 (less variable data), or a lower confidence level
(accepting more misses). Inverting for 𝑛 recovers the sample-size formula of Chapter 5:
𝜎 2
𝑛 ≥ (𝑧 ) .
𝛼/2 𝐸


## 8.4. Duality with hypothesis tests


Confidence intervals and two-sided tests are two views of one computation.
Proposition 4 (CI–test duality). A two-sided test of 𝐻 : 𝜇 = 𝜇 at level 𝛼 rejects 𝐻 if and
0 0 0
only if 𝜇 lies outside the (1−𝛼) confidence interval.
0
The interval is exactly the set of null values that the data would not reject — the “plausible”
parameter values. This is often the better way to report a result: rather than a bare “reject / fail to
reject”, the interval shows which values remain tenable and how precisely the parameter has been
34

Version of 13 September 2026 Module page
pinned down. A test says whether 𝜇 is plausible; the interval shows the whole range of plausible 𝜇
0
at once.
Example — reading the duality. For the heights, the 95% interval is [169.4,172.6]. A claim “𝐻 :
0
𝜇 = 170” would not be rejected at 𝛼 = 0.05, since 170 lies inside. A claim “𝐻 : 𝜇 = 168” would be
0
rejected, since 168 lies outside. We never recomputed a test — the interval already encodes every
two-sided test at once.
35
