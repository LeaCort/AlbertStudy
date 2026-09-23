# 7. Comparing a mean or a proportion

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 25-29*

Version of 13 September 2026 Module page
7. Comparing a mean or a proportion
Chapter 6 tested counts against a hypothesised law; this chapter tests a mean or a proportion —
against a fixed benchmark, or between two groups. The mechanics (z- and t-tests, significance levels,
Type I/II errors) you built earlier; here we apply them to proportions and two-group comparisons,
and add the design question those earlier courses left open: how large a sample do we need?


## 7.1. Testing against a benchmark, and between two groups


Definition 9 (z- and t-tests for a mean or proportion). To test whether a parameter differs
from a benchmark, form a test statistic — (estimate − benchmark) divided by its standard error
— and compare it against the distribution it follows under 𝐻 :
0
• One mean vs. a benchmark 𝜇 : 𝑡 = (𝑥−𝜇 )/(𝑠/√𝑛), compared to a Student-t distribution (use
0 0
𝑧, the normal, when 𝑛 is large or 𝜎 is known).
• One proportion vs. 𝑝 : 𝑧 = (𝑝̂−𝑝 )/√𝑝 (1−𝑝 )/𝑛, compared to the normal.
0 0 0 0
• Two means (two groups): 𝑡 = (𝑥 −𝑥 )/SE, with the standard error of the difference SE =
𝐵 𝐴
√𝑠2
𝐴
/𝑛
𝐴
+𝑠2
𝐵
/𝑛
𝐵
— each group’s own spread, added under the hood — compared to a Student-
t distribution.
• Two proportions (two groups): 𝑧 = (𝑝̂ −𝑝̂ )/SE with a pooled standard error, compared to the
𝐵 𝐴
normal.
A two-sided test at level 𝛼 rejects 𝐻 when the statistic exceeds in absolute value the table’s
0
critical value — for 𝛼 = 0.05, the normal cutoff is 1.96, and the Student-t cutoff is a little larger
and shrinks toward 1.96 as the degrees of freedom grow.
Example — four tests in practice. Four questions, one for each row of the definition above.
Does average session time differ from a 30-minute benchmark (one mean, 𝜎 unknown, so a t-test)?
Does a landing page’s click rate differ from a 20% target (one proportion, so a z-test)? Do two page
designs differ in average time on page (two means, so a two-sample t-test)? And do two checkout
variants convert at different rates (two proportions, so a z-test)?
# Three tests, each a statistic computed by hand and then compared to a critical
# value from a table (given): |t| or |z| against 1.96 for a two-sided test at
# level 0.05 (the t cutoff at 49 degrees of freedom is about 2.01).
# (a) One mean vs a benchmark. Is mean session time different from 30 minutes?
times = rd.normal(loc=32.5, scale=5.0, size=50) # 50 users, unknown truth
t1 = (np.mean(times) - 30.0) / (np.std(times, ddof=1) / np.sqrt(50))
print("one-sample t : t = {:.3f} (mean {:.2f}, n = 50)".format(
t1, np.mean(times)))
# (b) One proportion vs a benchmark. Does a landing page's click rate differ
# from a 20% target? The standard error uses the BENCHMARK p0 -- the value H0
# assumes -- not the observed p_hat.
clicks, visitors, p0 = 92, 400, 0.20
p_hat = clicks / visitors
se0 = np.sqrt(p0 * (1 - p0) / visitors)
25

Version of 13 September 2026 Module page
z1 = (p_hat - p0) / se0
print("one-proportion z : z = {:.3f} (rate {:.3f} vs benchmark {:.2f})".format(
z1, p_hat, p0))
# (c) Two proportions, two groups. Do two checkout variants convert differently?
x_a, n_a = 210, 1000 # control conversions
x_b, n_b = 251, 1000 # treatment conversions
p_a, p_b = x_a / n_a, x_b / n_b
p_pool = (x_a + x_b) / (n_a + n_b)
se = np.sqrt(p_pool * (1 - p_pool) * (1 / n_a + 1 / n_b))
z2 = (p_b - p_a) / se
print("two-proportion z : z = {:.3f} (rates {:.3f} vs {:.3f})".format(
z2, p_a, p_b))
one-sample t : t = 5.628 (mean 33.78, n = 50)
one-proportion z : z = 1.500 (rate 0.230 vs benchmark 0.20)
two-proportion z : z = 2.177 (rates 0.210 vs 0.251)
The one-sample t-test returns 𝑡 = 5.628: with 49 degrees of freedom the 5% cutoff is about 2.01, and
5.628 far exceeds it, so mean session time is convincingly above 30 minutes. The one-proportion z-
test returns 𝑧 = 1.500: the landing page’s rate 0.230 (92 of 400) sits only 1.500 standard errors from
the 20% target — below the 1.96 cutoff, an ordinary distance under 𝐻 — so the data give no reason to
0
call the rate different from 20%. Note where its standard error comes from: it uses the benchmark 𝑝 =
0
0.20, the rate 𝐻 assumes, not the observed 𝑝 ̂— the one place this test departs from the two-group
0
form below. The two-proportion z-test returns 𝑧 = 2.177, above 1.96, so variant B’s higher conversion
(0.251 vs 0.210) is judged real at 𝛼 = 0.05.
That leaves the two-group mean comparison — the last of the four rows still unworked. Its standard
error is SE = √𝑠2
𝐴
/𝑛
𝐴
+𝑠2
𝐵
/𝑛
𝐵
; dividing the gap in means by it gives the statistic:
# (d) Two means, two groups: do two page designs differ in average time on page?
# The standard error of the difference combines each group's own variability,
# SE = sqrt(s_A^2 / n_A + s_B^2 / n_B); the statistic is (xbar_B - xbar_A) / SE.
group_a = rd.normal(loc=30.0, scale=6.0, size=45) # design A, seconds on page
group_b = rd.normal(loc=34.5, scale=6.0, size=45) # design B
se = np.sqrt(np.var(group_a, ddof=1) / len(group_a)
+ np.var(group_b, ddof=1) / len(group_b))
t2 = (np.mean(group_b) - np.mean(group_a)) / se
print("two-sample t : t = {:.3f} (means {:.2f} vs {:.2f})".format(
t2, np.mean(group_a), np.mean(group_b)))
print("SE of difference = {:.3f}".format(se))
two-sample t : t = 2.793 (means 31.17 vs 34.55)
SE of difference = 1.209
Here 𝑡 = 2.793, above the two-sided 5% cutoff (about 1.99 at these degrees of freedom), so the two
designs differ in mean time on page. The code forms the standard error of the difference by hand
and divides the gap by it — the whole test in three lines of NumPy.
26

Version of 13 September 2026 Module page


## 7.2. Where the two-proportion statistic comes from


The two-proportion statistic was quoted in the code, not derived. Its standard error is worth building
from scratch, because every piece is a rule you already have. The derivation is two steps and one
admitted fact.
Theorem 3 (The two-proportion z-statistic). Let 𝑝̂ ,𝑝̂ be independent sample proportions
𝐴 𝐵
from groups of sizes 𝑛 ,𝑛 . Under 𝐻 : 𝑝 = 𝑝 , writing 𝑝 for the pooled estimate of the
𝐴 𝐵 0 𝐴 𝐵
common rate, the statistic
𝑝̂ −𝑝̂
𝑍 = 𝐵 𝐴
𝑝(1−𝑝)(1/𝑛 +1/𝑛 )
√ 𝐴 𝐵
is approximately standard normal, 𝒩︀(0,1).
Proof. Step 1 — the variance of the difference is the sum of the variances. Each proportion 𝑝̂=
1 𝑛
∑ 𝐵 averages independent Bernoulli(𝑝) indicators, so 𝕍(𝑝)̂ = 𝑝(1−𝑝)/𝑛 — the single-draw
𝑛 𝑖=1 𝑖
variance 𝑝(1−𝑝) divided by 𝑛, once more the 𝜎2/𝑛 law of Chapter 3. Because the two groups are
independent, Cov(𝑝̂ ,𝑝̂ ) = 0, so the cross term drops and the variances add:
𝐴 𝐵
𝕍(𝑝̂ −𝑝̂ ) = 𝕍(𝑝̂ )+𝕍(𝑝̂ )
𝐵 𝐴 𝐴 𝐵
𝑝 (1−𝑝 ) 𝑝 (1−𝑝 )
= 𝐴 𝐴 + 𝐵 𝐵 .
𝑛 𝑛
𝐴 𝐵
Step 2 — a linear combination of independent Gaussians is Gaussian. By the Central Limit Theorem
each 𝑝 ̂is approximately normal; the difference of two independent normals is normal, so 𝑝̂ −𝑝̂
𝐵 𝐴
is approximately normal. Under 𝐻 its mean is 0; dividing it by its standard deviation standardises
0
it to 𝒩︀(0,1).
The admitted step. Under 𝐻 both rates equal a common value, estimated by pooling the two groups
0
into one proportion 𝑝. We admit — this is the single step we do not prove — that replacing the
unknown common rate by 𝑝 leaves the limiting 𝒩︀(0,1) distribution unchanged. This turns the
variance into 𝑝(1−𝑝)(1/𝑛 +1/𝑛 ) and yields the statistic 𝑍 above. □
𝐴 𝐵
This is exactly the p_pool, se and z2 of the code above — the derivation and the three lines of NumPy
are one and the same.


## 7.3. How large a sample?


The single most valuable discipline in comparative testing is fixing the sample size before collecting
data. Four quantities are locked together — pin three and the fourth follows.
Definition 10 (The four design quantities).
• the significance level 𝛼 — the tolerated false-positive (Type I) rate;
• the power 1−𝛽 — the chance of detecting a real effect of the size you care about;
• the minimum detectable effect 𝛿 — the smallest difference worth catching, a business choice,
not a statistical one;
27

Version of 13 September 2026 Module page
• the sample size 𝑛.
Theorem 4 (Sample size for comparing two proportions). To detect a difference 𝛿 between
two conversion rates, at level 𝛼 and power 1−𝛽, the required per-group sample size is approx-
imately
2𝑝(1−𝑝)
2
𝑛 ≈ (𝑧 +𝑧 ) ⋅ ,
1−𝛼/2 1−𝛽 𝛿2
where 𝑝 is the assumed baseline rate and 𝑧 , 𝑧 are read from the normal table. The
1−𝛼/2 1−𝛽
corresponding rule for a difference in means replaces 2𝑝(1−𝑝) with 2𝜎2.
# How many users per group to detect a lift from 0.20 to 0.22 at level 0.05
# with power 0.80? The two z-values are read from the normal table (given):
# z_{0.975} = 1.960 and z_{0.80} = 0.842.
z_alpha = 1.960 # z_{1 - alpha/2}, two-sided level 0.05
z_beta = 0.842 # z_{power}, power 0.80
p_bar, delta = 0.20, 0.02
n = (z_alpha + z_beta) ** 2 * 2 * p_bar * (1 - p_bar) / delta ** 2
print("required per-group n = {:.0f}".format(np.ceil(n)))
# Halving the effect we insist on catching quadruples the sample size:
n_half = (z_alpha + z_beta) ** 2 * 2 * p_bar * (1 - p_bar) / (delta / 2) ** 2
print("for delta = 0.01 n = {:.0f} (4x larger)".format(np.ceil(n_half)))
required per-group n = 6281
for delta = 0.01 n = 25124 (4x larger)
Pitfall (Small effects are dramatically expensive). Because 𝑛 ∝ 1/𝛿2, halving the effect you
insist on catching quadruples the sample you need — the run above jumps from about 6281 to
25124 per group. Read the dependence the other way too: a smaller 𝛼 or a higher power also
inflates 𝑛. Choosing 𝛿 — deciding how small an effect is even worth detecting — is the lever that
controls the entire cost of the experiment.
28

Version of 13 September 2026 Module page
Figure 9: Required per-group sample size against the minimum detectable effect 𝛿 (baseline rate 0.20,
𝛼 = 0.05, power 0.80). The curve is 𝑛 ∝ 1/𝛿2: it explodes as 𝛿 → 0. Insisting on catching an effect
half as large moves you four times up the curve — the practical reason experiments target the largest
effect that would still matter.
29
