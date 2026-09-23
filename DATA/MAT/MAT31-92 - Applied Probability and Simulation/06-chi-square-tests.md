# 6. Chi-square tests

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 22-24*

Version of 13 September 2026 Module page
6. Chi-square tests
The remaining chapters ask the course’s defining question directly: could chance alone have produced
what we see? The chi-square family answers it for counts. This chapter covers its two uses: a goodness-
of-fit test — does a sample of counts match a hypothesised law? — and a test of independence — are
two categorical variables associated? Both compare observed counts to the counts expected under a
null hypothesis, through one statistic.


## 6.1. The chi-square statistic


Definition 7 (Chi-square statistic). For observed counts 𝑂 ,…,𝑂 in 𝑘 categories and the
1 𝑘
counts 𝐸 ,…,𝐸 expected under a null hypothesis 𝐻 ,
1 𝑘 0
𝑘 (𝑂 −𝐸) 2
𝜒2 = ∑ 𝑖 𝑖 .
𝐸
𝑖=1 𝑖
Each term measures a category’s squared discrepancy, scaled by how many were expected, so a large
𝜒2 signals observed counts far from what 𝐻 predicts. Under 𝐻 the statistic follows, approximately,
0 0
a chi-square distribution whose single degrees-of-freedom parameter is set by the design; we reject 𝐻
0
when 𝜒2 exceeds the critical value that distribution’s table gives for the chosen significance level 𝛼.
The two tests below differ only in how the expected counts and the degrees of freedom are formed.


## 6.2. Goodness of fit


Example — is the die fair?. Roll a die 600 times. Under “the die is fair”, each face is expected
𝐸 = 100 times. The observed counts differ from 100; the question is whether they differ by more
𝑖
than chance allows.
# Goodness-of-fit: is a die fair? 600 rolls, expected 100 per face under H0.
# The statistic is computed by hand; the DECISION compares it to a critical
# value read from a chi-square table (given), not to a SciPy p-value.
observed = np.array([89, 110, 96, 113, 92, 100])
expected = np.full(6, np.sum(observed) / 6)
chi2 = np.sum((observed - expected) ** 2 / expected) # df = 6 - 1 = 5
print("observed = {}".format(observed.tolist()))
print("expected = {}".format(expected.tolist()))
print("chi-square statistic = {:.3f} (df = 5)".format(chi2))
observed = [89, 110, 96, 113, 92, 100]
expected = [100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
chi-square statistic = 4.700 (df = 5)
The degrees of freedom are 𝑘−1 = 5: once five category counts are fixed, the sixth is determined by
the fixed total, so only five vary freely. The chi-square table gives, at 5 degrees of freedom and 𝛼 =
22

Version of 13 September 2026 Module page
0.05, the critical value 11.07. The statistic 4.70 is far below it — counts this uneven arise easily from
a fair die — so we do not reject fairness.
Figure 8: Observed roll counts (blue) against the counts expected from a fair die (purple outline, 100
each). The bars deviate, but the 𝜒2 statistic of 4.70 on 5 degrees of freedom stays well below the 5%
critical value 11.07: deviations this size are unremarkable under fairness, so the data give no reason
to call the die loaded.
Method 4 (Chi-square goodness-of-fit test).
1. State 𝐻 : the law generating the counts (e.g. “each face equally likely”).
0
2. Compute the expected counts 𝐸 = 𝑛×ℙ (category𝑖).
𝑖 𝐻0
3. Form 𝜒2 = ∑ (𝑂 −𝐸) 2/𝐸 with df = 𝑘−1−(estimated parameters).
𝑖 𝑖 𝑖 𝑖
4. Reject 𝐻 if 𝜒2 exceeds the table’s critical value at that df and level 𝛼.
0


## 6.3. Independence of two variables


The same statistic tests whether two categorical variables are associated, using a contingency table of
joint counts.
Definition 8 (Chi-square test of independence). For an 𝑟×𝑐 table of observed counts, the
expected count under independence is
row total×col total
𝑖 𝑗
𝐸 = ,
𝑖𝑗 grand total
the count if the row and column variables were unrelated. The statistic is
2
(𝑂 −𝐸 )
𝜒2 = ∑ 𝑖𝑗 𝑖𝑗 with df = (𝑟−1)(𝑐−1).
𝐸
𝑖,𝑗 𝑖𝑗
A 𝜒2 above the table’s critical value at that df is evidence the two variables are associated, not
independent.
23

Version of 13 September 2026 Module page
Example — does device predict purchase?. Cross-tabulate purchase (yes/no) against device
(mobile/desktop). If the two are independent, the purchase rate is the same on both devices; a large
𝜒2 says it is not.
# Independence: is purchase (yes/no) associated with device (mobile/desktop)?
# The 2x2 contingency table holds observed counts. Expected counts under
# independence are (row total * col total) / grand total; the statistic is the
# same sum (O - E)^2 / E, again decided by hand against a table value.
table = np.array([[90, 60], # mobile: bought, not
[40, 110]]) # desktop: bought, not
row = table.sum(axis=1, keepdims=True)
col = table.sum(axis=0, keepdims=True)
expected = row * col / table.sum()
chi2 = np.sum((table - expected) ** 2 / expected) # df = (2-1)(2-1) = 1
print("expected counts under independence:")
print(np.round(expected, 1))
print("chi-square statistic = {:.3f} (df = 1)".format(chi2))
expected counts under independence:
[[65. 85.]
[65. 85.]]
chi-square statistic = 33.937 (df = 1)
2
The code forms the expected counts by the 𝐸 formula above and then sums (𝑂 −𝐸 ) /𝐸 over
𝑖𝑗 𝑖𝑗 𝑖𝑗 𝑖𝑗
the four cells. Here df = (2−1)(2−1) = 1, and the chi-square table gives the critical value 3.84
at level 0.05. The statistic 33.94 is far above it, so the observed table is wildly incompatible with
independence: purchase and device are associated (mobile buys far more than the independence
model predicts).
Pitfall (The approximation needs enough expected count, and shows only association).
The chi-square distribution is only an approximation to the true distribution of the statistic,
and it degrades when expected counts are small — the usual rule is every 𝐸 ≥ 5. With sparse
𝑖
categories, merge them or use an exact test. And note: a significant 𝜒2 of independence shows
association, not causation — the same warning that governs any observational cross-tabulation.
24
