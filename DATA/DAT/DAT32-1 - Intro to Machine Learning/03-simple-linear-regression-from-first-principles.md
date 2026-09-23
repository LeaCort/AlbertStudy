# 3. Simple linear regression from first principles

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 10-13*

Version of 13 September 2026 Module page
3. Simple linear regression from first
principles
Start with one feature. Plot rent against surface and the points fall almost on a straight line — bigger
flats cost more, at a roughly constant rate per square metre. A model that captures exactly this is the
simplest useful one.
Definition 7. Simple linear regression models the target as a linear function of one feature:
𝑦̂= 𝛽 +𝛽 𝑥,
0 1
where 𝛽 is the intercept and 𝛽 is the slope. The hat on 𝑦 ̂marks it as the model’s prediction,
0 1
distinct from the true label 𝑦.
For any choice of (𝛽 ,𝛽 ) the line misses each point by some vertical gap, the residual 𝑦(𝑖)−
0 1
𝑦(̂𝑖). Fitting the model means choosing the line that makes these gaps collectively smallest — but
“smallest” needs a precise meaning, and that is the job of a cost function.
rent 𝑦̂
𝑦̂=𝛽 +𝛽 𝑥
0 1
residual
surface 𝑥
Figure 3: Simple linear regression on the rent data. The blue line is the model; each red segment is
a residual, the vertical gap between a real rent (black dot) and the line’s prediction. Ordinary least
squares chooses the line that minimises the sum of the squared residual lengths.
Definition 8. The residual sum of squares (RSS) measures total miss as the sum of squared
residuals over the training set:
𝑛
2
RSS(𝛽 ,𝛽 ) = ∑(𝑦(𝑖)−𝛽 −𝛽 𝑥(𝑖)) .
0 1 0 1
𝑖=1
Why squared and not, say, absolute? Squaring makes the cost a smooth bowl with a single lowest
point, which can be minimised exactly by calculus, and it penalises large misses disproportionately.
Setting the two partial derivatives of the RSS to zero and solving gives a closed-form answer.
Definition 9. Ordinary least squares (OLS) chooses the coefficients that minimise the RSS.
For simple regression the minimiser is available analytically:
10

Version of 13 September 2026 Module page
∑ 𝑛 (𝑥(𝑖)−𝑥)̄ (𝑦(𝑖)−𝑦)̄
𝛽 = 𝑖=1 , 𝛽 = 𝑦̄−𝛽 𝑥,̄
1 𝑛 2 0 1
∑ (𝑥(𝑖)−𝑥)̄
𝑖=1
where 𝑥 ̄and 𝑦 ̄are the means of the feature and the label.
These two formulas are the algorithm — we can implement OLS in a few lines of numpy, with no
library fitting routine, and read off the coefficients.
def ols_simple(x, y):
x_bar, y_bar = x.mean(), y.mean()
beta1 = ((x - x_bar) * (y - y_bar)).sum() / ((x - x_bar) ** 2).sum()
beta0 = y_bar - beta1 * x_bar
return beta0, beta1
x_tr = X_tr[:, 0] # surface column of the training set
beta0, beta1 = ols_simple(x_tr, y_tr)
print(round(beta0, 2), round(beta1, 3))
264.61 12.0
Example — the slope is a familiar quantity. The numerator of 𝛽 is the sample covariance
1
of 𝑥 and 𝑦 (times 𝑛), and the denominator is the sample variance of 𝑥 (times 𝑛). So 𝛽 =
1
Cov(𝑥,𝑦)/Var(𝑥) — the slope is covariance normalised by the spread of the feature. The mean,
variance and covariance you met in statistics are exactly the ingredients of the least-squares line.
Interpreting the coefficients. The slope 𝛽 = 12.0 is the predicted change in rent for a one-square-
1
metre increase in surface: each extra square metre adds about €12 to the predicted monthly rent. (We
built the data with a €9.5/m² rule, so why 12? Because bigger flats also tend to have more rooms, and
with surface as the only feature its coefficient also absorbs that room effect — a point we return to in
Chapter 10.) The intercept 𝛽 = 264.61 is the predicted rent at surface zero — not literally meaningful
0
(no flat has zero area), but necessary to anchor the line’s height.
Pitfall. A regression coefficient is an association in this dataset, not a proven cause. “Each
square metre adds €12” describes the fitted line; it does not prove that enlarging a specific flat
will raise its rent by that amount, because surface is entangled with rooms, location, age and
everything else that varies alongside it.
OLS returns a line for any data. But if you want its coefficients to support trustworthy inference —
confidence intervals, significance tests — the data must satisfy modelling assumptions. Rather than
meet them as a list, watch them fail, one tier at a time, on the rent data.
Example — the assumptions, seen where they fail. Is the line centred right? We already
saw surface’s slope come out €12 where the rule we built in was €9.5. Rooms — left out of the one-
feature model — rises with surface, and its effect leaked into the surface coefficient. That leak is a
biased estimate, and it is exactly what the mean-independence assumption forbids: it asks that
whatever the model leaves out average to zero at every surface value, so nothing systematic is left
11

Version of 13 September 2026 Module page
for the coefficient to absorb. When an omitted variable is entangled with a feature, the estimate is
biased — and no quantity of extra data repairs it.
Is the reported precision right? Suppose instead that the rents of large flats scattered far more
widely, in euros, than those of small flats — the residual band fanning open as surface grows
(Figure 4, right). The line would still sit in the right place, but the “±” it reports on the slope would
be wrong: this is non-constant variance. Errors that carried information about one another —
whole buildings mispriced together, say — would spoil that reported precision the same way.
Can we read a 𝑝-value off it? Even with the line centred and its precision right, turning that
precision into an exact confidence interval or significance test from a small sample needs the errors
to be roughly normal. With many flats the central limit theorem makes that reading approximately
valid regardless.
Each question isolates one tier; the box below states all three in general.
Constant variance Non-constant variance
residual
surface surface
Figure 4: Residuals plotted against the feature. Left: a constant-width band — the spread of the misses
does not depend on surface (homoscedasticity), the condition OLS’s standard-error formula assumes.
Right: a band that fans open as surface grows (heteroscedasticity) — the line is still centred on zero,
but the precision OLS reports for its coefficients can no longer be trusted.
Definition 10. For OLS, the estimated coefficients are unbiased (correct on average) when
the relationship is linear in the coefficients and the errors are mean-independent of the
features — for every value of the features their average is zero, 𝔼[𝜀|𝑥] = 0, the condition
called strict exogeneity. This is stronger than the errors being merely uncorrelated with the
features: errors that are uncorrelated but not mean-independent still leave OLS correct only as
the sample grows large (consistency), not unbiased in every finite sample. Two further assump-
tions make the usual standard-error formula correct and the estimator the most precise of its
kind (the Gauss–Markov result): the errors have constant variance (homoscedasticity) and are
uncorrelated with one another (no autocorrelation). For the t- and F-based inference built
on those standard errors — confidence intervals, significance tests — to be exactly valid in a
finite sample, one assumption more is required: the errors are normally distributed. Without
normality that inference is only approximate, justified in large samples by the central limit
theorem.
The three tiers are worth keeping apart. Heteroscedastic or autocorrelated errors do not bias the
line, but they make the reported standard errors — and therefore any claim of “significance” —
untrustworthy. Constant variance and no autocorrelation repair the standard errors; normality (or a
large sample) is what finally licenses reading a 𝑝-value or a confidence interval off a 𝑡-distribution.
12

Version of 13 September 2026 Module page
Exercises
3.1. Implement OLS from the analytical formulas (no library fitting) and read off 𝛽 and 𝛽 for
0 1
rent on surface over the training set. Confirm that the slope equals Cov(𝑥,𝑦)/Var(𝑥). Check:
𝛽 ≈ 264.6, 𝛽 ≈ 12.0, and the slope matches the covariance-over-variance value.
0 1
3.2. Interpret the slope and intercept from the previous exercise in the units of the problem,
and state which assumptions buy unbiasedness and which buy valid inference. Check: the slope
is euros of rent per square metre; unbiasedness needs mean-independent errors, while valid 𝑡/𝐹
inference additionally needs constant variance, no autocorrelation, and — in a small sample —
normality.
13
