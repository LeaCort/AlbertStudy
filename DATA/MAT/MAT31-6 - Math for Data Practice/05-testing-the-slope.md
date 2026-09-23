# 5. Testing the slope

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 23-25*

Version of 13 September 2026 Module page
5. Testing the slope
Our estimate is 𝑎̂= 1.85. But a slope computed from thirty noisy markets is itself a random quantity:
a different thirty markets would give a different number. Could the true slope 𝑎 of the model be zero
— no linear link between spend and sales — with 𝑎̂= 1.85 arising from noise alone? That question
is a hypothesis test, and it is the question a regression summary exists to answer. The test is about the
model’s true slope 𝑎, not about the estimate 𝑎:̂ we ask whether the data are consistent with 𝑎 = 0.


## 5.1. The sampling distribution of the slope


Under the model of Chapter 4 the estimate 𝑎 ̂is a random variable, and we can pin down its mean
and variance exactly.
Proposition 5 (Mean and variance of the slope). Under the model 𝑦 = 𝑎𝑥 +𝑏+𝜀 , with
𝑖 𝑖 𝑖
the 𝜀 independent of mean zero and variance 𝜎2 and the 𝑥 treated as fixed,
𝑖 𝑖
𝜎2
𝔼(𝑎)̂ = 𝑎, 𝕍(𝑎)̂ = .
𝑆
𝑥𝑥
The estimate is unbiased, and its spread shrinks as the 𝑥-values spread out (larger 𝑆 ) or the
𝑥𝑥
noise shrinks (smaller 𝜎2).
Proof. Write the slope as a weighted sum of the responses. Since ∑ (𝑥 −𝑥) = 0, the 𝑦 term drops
𝑖 𝑖
out of the numerator, giving
𝑎̂= 𝑆 𝑥𝑦 = ∑ 𝑖 (𝑥 𝑖 −𝑥)(𝑦 𝑖 −𝑦) = ∑ 𝑛 𝑐 𝑦 , 𝑐 = 𝑥 𝑖 −𝑥 .
𝑆 𝑆 𝑖 𝑖 𝑖 𝑆
𝑥𝑥 𝑥𝑥 𝑖=1 𝑥𝑥
The weights satisfy ∑ 𝑐 = 0 and ∑ 𝑐 𝑥 = 1. Hence, by linearity of expectation,
𝑖 𝑖 𝑖 𝑖 𝑖
𝔼(𝑎)̂ = ∑𝑐 (𝑎𝑥 +𝑏) = 𝑎∑𝑐 𝑥 +𝑏∑𝑐 = 𝑎,
𝑖 𝑖 𝑖 𝑖 𝑖
𝑖 𝑖 𝑖
and, since the 𝑦 are independent with variance 𝜎2,
𝑖
2
𝕍(𝑎)̂ = ∑𝑐2𝕍(𝑦 ) = 𝜎2∑𝑐2 = 𝜎2
∑
𝑖
(𝑥
𝑖
−𝑥)
=
𝜎2
.
𝑖 𝑖 𝑖 𝑆2 𝑆
𝑖 𝑖 𝑥𝑥 𝑥𝑥
□
We do not know 𝜎2, so we estimate it from the residuals. Here the divisor is 𝑛−2, not 𝑛 or 𝑛−1: the
residuals are gaps from the fitted line, and that line already spent two parameters — the slope 𝑎 ̂and
the intercept 𝑏 ̂— both estimated from the same data. Two of the 𝑛 residuals are therefore determined
by the other 𝑛−2 (that is what the two residual identities of Chapter 2 say), so only 𝑛−2 of them
are free. Dividing by the number of free residuals makes the estimate unbiased.
RSS 𝑠
𝑠2 = , SE(𝑎)̂ = .
𝑛−2 √𝑆
𝑥𝑥
23

Version of 13 September 2026 Module page
The quantity SE(𝑎)̂ is the standard error of the slope: the estimated standard deviation of 𝑎.̂
5.2. The 𝑡-statistic and the 𝑝-value
To test 𝐻 : 𝑎 = 0 against 𝐻 : 𝑎 ≠ 0, measure how many standard errors the estimate sits away from
0 1
zero.
Framework 1 (The slope 𝑡-test). For the simple linear regression model, under 𝐻 : 𝑎 = 0 the
0
statistic
𝑎̂ 𝑎√̂ 𝑆
𝑥𝑥
𝑡 = = follows the Student law 𝑡 .
SE(𝑎)̂ 𝑠 𝑛−2
The two-sided 𝑝-value is ℙ(|𝑇| ≥ |𝑡|) for 𝑇 ∼ 𝑡 : the probability, if the true slope were zero, of
𝑛−2
a slope estimate at least this many standard errors from zero. Reject 𝐻 at level 𝛼 (usually 0.05)
0
when |𝑡| exceeds the critical value 𝑡1−𝛼/2 read from the 𝑡-table, equivalently when 𝑝 < 𝛼.
𝑛−2
Why the Student law 𝑡 , and not the normal? Because we replaced the unknown 𝜎 by the estimate
𝑛−2
𝑠; the extra uncertainty in that estimate fattens the tails into a Student law, and its degrees of freedom
are the 𝑛−2 free residuals that 𝑠 is built from — the same 𝑛−2 that appeared in its divisor. We
assemble the test from the residual sum of squares, and compare the statistic by hand with the
tabulated critical value.
import numpy as np
# Could a slope this steep come from noise alone? Test H0: a = 0 against
# H1: a != 0. Estimate the noise level, form the standard error of the slope,
# read off the t statistic -- then compare it BY HAND to the t-table value.
a, b = np.polyfit(x, y, 1)
y_hat = a * x + b
e = y - y_hat
RSS = np.sum(e ** 2)
se = np.sqrt(RSS / (n - 2)) # residual standard error
Sxx = np.sum((x - np.mean(x)) ** 2)
se_a = se / np.sqrt(Sxx) # standard error of the slope
t = a / se_a
print("slope a :", round(a, 4))
print("std error se_a :", round(se_a, 4))
print("t = a / se_a :", round(t, 2), " (df = n - 2 =", n - 2, ")")
print("t-table 5% value :", 2.048)
slope a : 1.8502
std error se_a : 0.1336
t = a / se_a : 13.85 (df = n - 2 = 28 )
t-table 5% value : 2.048
The slope sits 𝑡 = 13.85 standard errors from zero, on 𝑛−2 = 28 degrees of freedom. The two-sided
5% critical value from the 𝑡-table is 𝑡0.975 = 2.048; our |𝑡| = 13.85 is far larger than it, so we reject 𝐻
28 0
24

Version of 13 September 2026 Module page
decisively. Figure 7 shows how extreme this is: the whole 𝑡 distribution lives between about ±3, so
28
a value near 14 falls far outside the range the plot can show.
null distribution of 𝑡 under 𝐻 :𝑎=0
0
observed 𝑡=13.85 →
−2.048 0 2.048
Figure 7: The null distribution 𝑡 . If the true slope were zero, the 𝑡-statistic would scatter within
28
about ±3; the shaded tails beyond the 5% critical values ±2.048 are the rejection region. Our observed
𝑡 = 13.85 lies far to the right of everything shown, so the 𝑝-value is minute.
A regression package would print exactly the numbers we assembled, together with the 𝑝-value it
computes from the same 𝑡 law. Table 2 shows that software summary for our fit; reading such a
28
table — slope, standard error, 𝑡-statistic, 𝑝-value — is the everyday form of this test.
Quantity Value
Slope 𝑎̂ 1.8502
Standard error SE(𝑎)̂ 0.1336
𝑡-statistic = 𝑎/̂ SE(𝑎)̂ 13.85
𝑝-value (two-sided, 𝑡 ) 4.7e-14
28
𝑅2 0.8726
Table 2: The regression summary a package prints for the thirty-market fit. The 𝑝-value 4.7e-14 is
the chance, were the true slope zero, of a 𝑡-statistic as extreme as 13.85 it is far below the usual 0.05
threshold, so the slope is statistically significant — unlikely to be an accident of noise.
Pitfall. A 𝑝-value is not the probability that 𝐻 is true, and statistical significance is not practical
0
importance. With enough data a tiny slope becomes significant; with few data a large one may
not. Significance says only that the sign and the existence of the effect are unlikely to be noise.
Whether the effect is large enough to act on is a separate question, read from the size of 𝑎 ̂itself
in its business units.
25
