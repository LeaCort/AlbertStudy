# 6. Monte Carlo methods

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 25-27*

Version of 13 September 2026 Module page
6. Monte Carlo methods
The CLT does more than describe sampling — it powers a computational method. When a prob-
ability or an expectation is too hard to compute analytically (no closed-form integral, a complicated
multidimensional region), we simulate: draw many random samples, average, and let the LLN and
CLT do the rest. This is the Monte Carlo method, a mainstay of modern quantitative science.


## 6.1. Estimating an expectation by simulation


Example — estimating 𝜋 by throwing darts. Throw darts uniformly at the unit square [0,1] 2.
A dart lands inside the quarter-circle 𝑥2+𝑦2 ≤ 1 with probability equal to that region’s area, 𝜋/4.
So if a fraction 𝑝 ̂of 𝑁 darts land inside, then 4𝑝 ̂estimates 𝜋 — no geometry, just counting. We
implement exactly this in Section 6.4.
Definition 10 (Monte Carlo estimator). To estimate 𝜃 = 𝔼(𝑔(𝑋)), draw independent samples
𝑋 ,…,𝑋 from the distribution of 𝑋 and average:
1 𝑁
𝑁
1
𝜃̂ = ∑𝑔(𝑋 ).
𝑁 𝑁 𝑖
𝑖=1
By the LLN 𝜃̂ → 𝜃, and by the CLT its error is approximately normal with standard error
𝑁
𝜎 /√𝑁, where 𝜎2 = 𝕍(𝑔(𝑋)).
𝑔 𝑔
The estimator is unbiased (𝔼(𝜃̂ ) = 𝜃 by linearity) and its 1/√𝑁 error rate is the same √𝑁 law as
𝑁
before: a Monte Carlo answer with one more digit of accuracy costs 100 times the computation. The
method is general — it estimates any expectation, hence any probability (take 𝑔 an indicator) and
any integral (write it as an expectation).


## 6.2. The inverse transform method


To simulate, we must first generate samples from the target distribution. A computer supplies only
𝑈 ∼ Unif(0,1). How do we turn uniform noise into, say, an exponential variable? The key is the CDF.
Theorem 10 (Inverse transform method). Let 𝐹 be a continuous, strictly increasing CDF. If
𝑈 ∼ Unif(0,1), then
𝑋 = 𝐹−1(𝑈)
has CDF 𝐹. Conversely, 𝐹(𝑋) ∼ Unif(0,1) for any continuous 𝑋.
Proof. ℙ(𝑋 ≤ 𝑥) = ℙ(𝐹−1(𝑈) ≤ 𝑥) = ℙ(𝑈 ≤ 𝐹(𝑥)) = 𝐹(𝑥), using that 𝐹 is increasing (so we may
apply it to both sides) and that ℙ(𝑈 ≤ 𝑢) = 𝑢 for a standard uniform. □
The picture: feeding a uniform height 𝑢 on the vertical axis through the inverse CDF reads off the 𝑥
whose accumulated probability is 𝑢. Regions where 𝐹 rises steeply (high density) catch more of the
uniform input, so they receive more samples — exactly as they should.
25

Version of 13 September 2026 Module page
Example — simulating an exponential. The exponential CDF is 𝐹(𝑥) = 1−𝑒−𝜆𝑥. Solve 𝑢 = 1−
𝑒−𝜆𝑥 for 𝑥: 𝑥 = −ln(1−𝑢)/𝜆. So if 𝑈 ∼ Unif(0,1) then 𝑋 = −ln(1−𝑈)/𝜆 is Exp(𝜆). (Since 1−𝑈
is also uniform, −ln(𝑈)/𝜆 works just as well.) One logarithm turns a uniform into an exponential.
𝐹(𝑥)
1
𝑢
𝑥=𝐹−1(𝑢) 𝑥
Figure 8: The inverse transform method. A uniform input 𝑢 ∈ (0,1) on the vertical axis is mapped
horizontally to the curve, then down to 𝑥 = 𝐹−1(𝑢). Steep parts of 𝐹 (where the density is high) span
more vertical room and so capture more uniform inputs — producing samples with the right density.


## 6.3. Confidence intervals for a Monte Carlo estimate


A simulation is worthless without an error bar. The CLT supplies one directly. Since 𝜃̂ ≈
𝑁
𝒩︀(𝜃,𝜎2/𝑁), and we estimate 𝜎 by the sample standard deviation 𝑠 of the values 𝑔(𝑋 ), a 95% confi-
𝑔 𝑔 𝑖
dence interval for 𝜃 is
𝑠
𝜃̂ ±1.96⋅ .
𝑁
√𝑁
The half-width 1.96𝑠/√𝑁 is the standard error band: it shrinks like 1/√𝑁, so reporting it tells the
reader exactly how much to trust the simulation. A Monte Carlo result without this band is
incomplete.


## 6.4. The method in code


The recipe is short enough to write out in full. A single function estimates 𝜃 = 𝔼(𝑔(𝑋)) from 𝑁
independent draws and returns three things at once: the estimate 𝜃̂ , its standard error 𝑠/√𝑁, and
𝑁
the 95% confidence interval 𝜃̂ ±1.96𝑠/√𝑁. Everything in this chapter fits in a dozen lines of Python
𝑁
— sample is a function that returns one draw of 𝑋, and g is the function whose expectation we want.
import random, math
def monte_carlo(sample, g, N):
"""Estimate theta = E[g(X)] from N draws: returns the estimate,
its standard error, and a 95% confidence interval."""
vals = [g(sample()) for _ in range(N)]
mean = sum(vals) / N
var = sum((v - mean) ** 2 for v in vals) / (N - 1) # sample variance
se = math.sqrt(var / N) # standard error
return mean, se, (mean - 1.96 * se, mean + 1.96 * se)
To estimate 𝜋, take 𝑔 to be the indicator “the dart lands in the quarter-circle”: its expectation is exactly
𝜋/4, so multiplying the estimate by 4 estimates 𝜋 — and the confidence interval scales by 4 with it.
26

Version of 13 September 2026 Module page
random.seed(1)
def dart(): # one uniform dart in the unit square
return (random.random(), random.random())
def inside(point): # 1 if inside the quarter-circle, else 0
x, y = point
return 1.0 if x * x + y * y <= 1.0 else 0.0
p_hat, se, ci = monte_carlo(dart, inside, 100_000)
print(round(4 * p_hat, 4), (round(4 * ci[0], 4), round(4 * ci[1], 4)))
3.1378 (3.1276, 3.148)
The inverse transform supplies the sampler for any distribution. For the exponential, 𝐹−1(𝑢) =
−ln(1−𝑢)/𝜆, so one line turns random() into an Exp(𝜆) draw; estimating 𝔼(𝑋) with 𝑔(𝑥) = 𝑥 should
recover 1/𝜆.
lam = 0.5
def exp_sample(): # inverse transform: Unif(0,1) -> Exp(lambda)
u = random.random()
return -math.log(1 - u) / lam
mean, se, ci = monte_carlo(exp_sample, lambda x: x, 100_000)
print(round(mean, 4), (round(ci[0], 4), round(ci[1], 4)))
1.9951 (1.9828, 2.0075)
Both confidence intervals straddle the truth — 𝜋 = 3.14159… and 1/𝜆 = 2 — and both have half-
width ≈ 0.01 at 𝑁 = 105, exactly the 1/√𝑁 law in action. Shrinking that half-width to 0.001 would
demand 𝑁 = 107 draws: a further digit of accuracy costs a hundredfold more computation.
27
