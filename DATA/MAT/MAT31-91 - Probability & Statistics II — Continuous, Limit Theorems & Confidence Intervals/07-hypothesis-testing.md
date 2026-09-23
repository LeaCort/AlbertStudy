# 7. Hypothesis testing

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 28-32*

Version of 13 September 2026 Module page
7. Hypothesis testing
We can now do confirmatory statistics: not merely estimate a quantity, but test a claim about it
and quantify the evidence. Hypothesis testing is the disciplined procedure for deciding whether data
are surprising enough under a default assumption to warrant rejecting it. The normal distribution,
finally in hand, is what makes the arithmetic possible.
7.1. The logic: 𝐻 , 𝐻 , and a test statistic
0 1
Example — is the coin fair?. A coin is flipped 100 times and lands heads 62 times. Is it biased, or
is 62 just luck? We adopt a sceptical default — “the coin is fair, 𝑝 = 0.5” — and ask: if that were
true, how surprising is an outcome as extreme as 62? Under fairness 𝑋 ∼ Bin(100,0.5) ≈
𝒩︀(50,25). Because we are approximating a discrete count by the normal, we apply the continuity
correction of Chapter 5: an outcome “as extreme as 62” starts at the lower edge 61.5 of the bar for
62, so the 𝑧-score is (61.5−50)/5 = 2.3. A result 2.3 standard errors out is rare — strong reason to
doubt the default.
Definition 11 (null and alternative hypotheses). The null hypothesis 𝐻 is the default,
0
no-effect claim we try to disprove (here 𝑝 = 0.5). The alternative hypothesis 𝐻 is what we
1
entertain if 𝐻 fails (here 𝑝 ≠ 0.5). A test statistic is a number computed from the data whose
0
distribution under 𝐻 is known; we reject 𝐻 when the statistic falls in a rejection region of
0 0
values too extreme to attribute to chance.
The asymmetry is deliberate and important: we never prove 𝐻 , we only fail to reject it. The burden
0
of proof lies on the alternative, exactly as a court presumes innocence until evidence is strong enough
to overturn it.
7.2. Significance level and the 𝑝-value
Definition 12 (significance level and rejection region). The significance level 𝛼 (com-
monly 0.05) is the probability of rejecting 𝐻 when it is actually true — the false-alarm rate
0
we are willing to tolerate. The rejection region is the set of test-statistic values whose total
probability under 𝐻 equals 𝛼. For a two-sided 𝑧-test at 𝛼 = 0.05 it is |𝑧| > 1.96.
0
Definition 13 (𝑝-value). The 𝑝-value is the probability, computed assuming 𝐻 is true, of
0
obtaining a result at least as extreme as the one observed. We reject 𝐻 exactly when 𝑝 ≤ 𝛼.
0
For the coin, the two-sided 𝑝-value is ℙ(|𝑍| ≥ 2.3) = 2(1−Φ(2.3)) ≈ 2(0.0107) = 0.0214 — reassur-
ingly close to the exact binomial value 0.021. Since 0.0214 < 0.05, we reject fairness at the 5% level:
an outcome this extreme would happen only about 2% of the time with a fair coin.
Pitfall. The 𝑝-value is the probability of data this extreme given 𝐻 — written ℙ(data|𝐻 ).
0 0
It is not the probability that 𝐻 is true, ℙ(𝐻 |data). These are the two sides of Bayes’ theorem,
0 0
28

Version of 13 September 2026 Module page
and confusing them is the most damaging error in applied statistics. “𝑝 = 0.02” does not mean
“there is a 2% chance the coin is fair”; it means “if the coin were fair, data this extreme would
arise 2% of the time”. A small 𝑝-value casts doubt on 𝐻 ; it does not measure 𝐻 ’s probability.
0 0
fail to reject 𝐻
reject 0 reject
−1.96 1.96
Figure 9: A two-sided 𝑧-test at 𝛼 = 0.05. Under 𝐻 the test statistic is standard normal; the two
0
red tails beyond ±1.96 together hold 5% of the mass. A statistic landing there is “too extreme to be
chance”, so 𝐻 is rejected. The 𝑝-value is the area beyond the observed statistic.
0


## 7.3. One- and two-sided alternatives


Whether we look at one tail or two is decided by the alternative 𝐻 , which must be fixed before the
1
data arrive. A two-sided alternative 𝐻 : 𝜇 ≠ 𝜇 asks “is the parameter different?”, and its 𝑝-value
1 0
gathers both tails. A one-sided alternative 𝐻 : 𝜇 > 𝜇 (or 𝜇 < 𝜇 ) asks a directional question and
1 0 0
gathers only the one tail in that direction.
Example — one tail or two?. A coaching course claims to raise scores above the national mean
𝜇 = 100 (known 𝜎 = 15). A class of 𝑛 = 50 averages 𝑥 = 104, so the standard error is 15/√50 =
0
2.12 and 𝑧 = (104−100)/2.12 = 1.89. For the directional claim “coaching helps”, 𝐻 : 𝜇 > 100,
1
the one-sided 𝑝-value is ℙ(𝑍 ≥ 1.89) = 1−Φ(1.89) = 0.0294 < 0.05 — significant. But the neutral
question “does coaching change scores?”, 𝐻 : 𝜇 ≠ 100, doubles it to 2(0.0294) = 0.0588 > 0.05 —
1
not significant. Same data, opposite verdicts.
Pitfall. The direction of a one-sided test must come from the science, chosen before the data.
Picking the side after seeing which tail the data fell in, then halving the 𝑝-value, secretly doubles
the false-alarm rate — a form of 𝑝-hacking. When in doubt use the two-sided test: it is the honest
default and never rewards peeking.
7.4. Choosing the statistic: 𝑧-test or 𝑡-test
Every test so far assumed a known population 𝜎, which made the standardized statistic a standard
normal — a 𝑧-test. In practice 𝜎 is almost always unknown and estimated from the sample as the
sample SD 𝑠. Replacing 𝜎 by 𝑠 injects a second source of uncertainty, and the statistic
𝑥−𝜇
𝑡 = 0
𝑠/√𝑛
then follows not the normal law but the Student-𝑡 law of Chapter 3, with 𝑛−1 degrees of freedom.
The choice is simple.
29

Version of 13 September 2026 Module page
Framework 1 (𝑧 or 𝑡?).
• 𝜎 known (or 𝑛 large, so 𝑠 ≈ 𝜎): use the 𝑧-test, with critical values from the standard normal
table of Chapter 3.
• 𝜎 unknown and 𝑛 small: use the 𝑡-test with 𝑛−1 degrees of freedom, critical values from
the 𝑡-table below.
As 𝑛 → ∞ the two agree — 𝑡 tends to the normal — so for large samples the distinction makes
no practical difference.
The standard normal table of Chapter 3 serves the 𝑧-test; the 𝑡-test needs its own table of critical
values, one row per number of degrees of freedom. The table below lists 𝑡 — the value a Student-
𝛼,𝑘
𝑡 with 𝑘 degrees of freedom exceeds with probability 𝛼, i.e. its upper-tail critical value. Read it by
the tail you need:
• a one-sided test at level 𝛼 uses the column headed 𝛼;
• a two-sided test at level 𝛼, and a confidence interval at level 1−𝛼 (Chapter 8), use the column
headed 𝛼/2 — half the rejected mass in each tail.
So a two-sided test at 𝛼 = 0.05 on 9 degrees of freedom reads row 9, column .025, giving 𝑡 =
0.025,9
2.262; the same column at 𝑘 = ∞ returns the normal value 1.960, because 𝑡 → 𝒩︀(0,1) as the sample
grows.
d.f. 𝑘 upper-tail probability 𝛼
.10 .05 .025 .01 .005
1 3.078 6.314 12.706 31.821 63.657
2 1.886 2.920 4.303 6.965 9.925
3 1.638 2.353 3.182 4.541 5.841
4 1.533 2.132 2.776 3.747 4.604
5 1.476 2.015 2.571 3.365 4.032
6 1.440 1.943 2.447 3.143 3.707
7 1.415 1.895 2.365 2.998 3.499
8 1.397 1.860 2.306 2.896 3.355
9 1.383 1.833 2.262 2.821 3.250
10 1.372 1.812 2.228 2.764 3.169
11 1.363 1.796 2.201 2.718 3.106
12 1.356 1.782 2.179 2.681 3.055
13 1.350 1.771 2.160 2.650 3.012
14 1.345 1.761 2.145 2.624 2.977
15 1.341 1.753 2.131 2.602 2.947
16 1.337 1.746 2.120 2.583 2.921
17 1.333 1.740 2.110 2.567 2.898
18 1.330 1.734 2.101 2.552 2.878
19 1.328 1.729 2.093 2.539 2.861
20 1.325 1.725 2.086 2.528 2.845
21 1.323 1.721 2.080 2.518 2.831
22 1.321 1.717 2.074 2.508 2.819
23 1.319 1.714 2.069 2.500 2.807
24 1.318 1.711 2.064 2.492 2.797
25 1.316 1.708 2.060 2.485 2.787
26 1.315 1.706 2.056 2.479 2.779
27 1.314 1.703 2.052 2.473 2.771
28 1.313 1.701 2.048 2.467 2.763
29 1.311 1.699 2.045 2.462 2.756
30 1.310 1.697 2.042 2.457 2.750
40 1.303 1.684 2.021 2.423 2.704
60 1.296 1.671 2.000 2.390 2.660
30

Version of 13 September 2026 Module page
d.f. 𝑘 upper-tail probability 𝛼
.10 .05 .025 .01 .005
120 1.289 1.658 1.980 2.358 2.617
∞ 1.282 1.645 1.960 2.326 2.576
Because the table is a grid of critical values, not a CDF, a 𝑡-test’s 𝑝-value is usually bracketed rather
than read off exactly: find where the observed |𝑡| falls between two columns of its row, and its one-
sided 𝑝-value lies between those two column headings 𝛼 (double them for a two-sided 𝑝-value). That
is enough to decide any test and to report the 𝑝-value to the precision a verdict needs.
Pitfall. The columns are one-tailed areas. For a two-sided test at 𝛼 = 0.05 do not read the .05
column — that is the one-sided 5% value — but the .025 column, so that each tail carries 2.5%
and the two together carry the 5% you are spending. Reading the wrong column is the 𝑡-table’s
exact analogue of the left-tail/right-tail slip warned about for Φ in Chapter 3.
Example — a 𝑡-test for a small sample. A production line’s batteries averaged 𝜇 = 44 hours.
0
A sample of 𝑛 = 11 from a new line gives 𝑥 = 41 hours with sample SD 𝑠 = 4; the population 𝜎 is
unknown. Testing 𝐻 : 𝜇 = 44 against 𝐻 : 𝜇 ≠ 44 at 𝛼 = 0.05,
0 1
41−44 3
𝑡 = = − = −2.49,
1.206
4/√11
on 𝑛−1 = 10 degrees of freedom. The two-sided critical value is 𝑡 = 2.228 (from the 𝑡-table
0.025,10
above). Since |−2.49| > 2.228, we reject 𝐻 : the new line’s mean lifetime differs from 44 hours. To
0
report a 𝑝-value, bracket |𝑡| = 2.49 in row 10: it sits between 𝑡 = 2.228 and 𝑡 = 2.764, so the
0.025 0.01
one-sided 𝑝 lies between 0.01 and 0.025 and the two-sided 𝑝 between 0.02 and 0.05 — consistent
with rejecting at 𝛼 = 0.05. Had we carelessly used the normal cutoff 1.96, we would have overstated
our confidence — the 𝑡-test’s wider cutoff is the honest price of not knowing 𝜎.


## 7.5. Comparing two groups


The commonest test in practice concerns not one mean but the difference between two — treatment
versus control, variant A versus variant B. The logic is unchanged: build a statistic measuring the
observed difference in standard-error units, then read its tail probability under 𝐻 : no difference.
0
Example — an A/B test on conversion. An online store trials two checkout designs. Of 𝑛 =
𝐴
1000 visitors to design A, 200 convert (𝑝̂ = 0.20); of 𝑛 = 1000 to design B, 250 convert (𝑝̂ =
𝐴 𝐵 𝐵
0.25). Is B genuinely better, or is the 5-point gap chance? Under 𝐻 : 𝑝 = 𝑝 we pool the samples
0 𝐴 𝐵
to estimate the common rate,
200+250
𝑝̂= = 0.225,
1000+1000
and the standard error of the difference is
1 1 1 1
SE = 𝑝(̂ 1−𝑝)̂ ( + ) = 0.225⋅0.775⋅( + ) = 0.0187.
√ 𝑛 𝐴 𝑛 𝐵 √ 1000 1000
31

Version of 13 September 2026 Module page
The test statistic is
𝑝̂ −𝑝̂ 0.05
𝑧 = 𝐵 𝐴 = = 2.68,
SE 0.0187
with two-sided 𝑝-value 2(1−Φ(2.68)) = 2(0.0037) = 0.0074 < 0.05. We reject 𝐻 : design B con-
0
verts at a genuinely higher rate. (For the directional launch question “is B better?”, the one-sided
𝑝 = 0.0037 tells the same story more sharply.)
The same two-sample pattern — with 𝑠-based standard errors and a 𝑡-distribution — compares two
means from small samples. What never changes is the shape of the reasoning: a difference, divided
by its standard error, judged against a known reference law.


## 7.6. Type I and Type II errors, and power


Every test can err in two opposite ways, and the trade-off between them is the core design problem
of testing.
Definition 14 (the two error types). A Type I error (false positive) is rejecting 𝐻 when it is
0
true; its probability is the significance level 𝛼. A Type II error (false negative) is failing to reject
𝐻 when 𝐻 is true; its probability is denoted 𝛽. The power of the test is 1−𝛽, the probability
0 1
of correctly detecting a true effect.
𝐻 true 𝐻 true
0 1
reject 𝐻 Type I error (𝛼) correct (power 1−𝛽)
0
fail to reject correct Type II error (𝛽)
The two errors pull against each other: lowering 𝛼 (demanding stronger evidence to reject) shrinks
false alarms but raises 𝛽, missing more real effects. The only way to reduce both at once is to gather
more data — a larger 𝑛 sharpens the sampling distributions and increases power at any fixed 𝛼. This
is why power calculations decide sample sizes before an experiment is run.
Pitfall. “Fail to reject 𝐻 ” is not “accept 𝐻 ” or “prove no effect”. A non-significant result may
0 0
simply mean the test lacked the power to detect a real but small effect — absence of evidence is
not evidence of absence. Reporting the power, or a confidence interval, is what distinguishes
“we showed there is no effect” from “our study was too small to tell”.
32
