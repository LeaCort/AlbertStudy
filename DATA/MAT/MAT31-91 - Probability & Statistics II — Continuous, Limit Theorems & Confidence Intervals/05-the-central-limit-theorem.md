# 5. The Central Limit Theorem

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 23-24*

Version of 13 September 2026 Module page
5. The Central Limit Theorem
The LLN tells us the sample mean lands on 𝜇; the Central Limit Theorem tells us how it is
distributed around 𝜇 on the way there. Its answer is astonishing and universal: whatever the
shape of the original distribution, the sample mean is approximately normal. This is why
the bell curve is everywhere.


## 5.1. Statement


Example — building a bell from dice. A single die is uniform on 1,…,6 — flat, nothing like a
bell. Add a second die: the sum runs over 2,…,12 and its distribution is already triangular, peaked
at 7. Add more, and by ten dice the histogram of the sum is a smooth bell (Figure 7). The flat
shape of the individual die disappears; only its mean and variance carry into the shape of the
result. The sample average is this same sum divided by 𝑛, so it inherits the very same bell shape —
but centred on the fixed mean 3.5 and, as the standard error 𝜎/√𝑛 below makes precise, growing
ever narrower around it as 𝑛 grows. Summing — or averaging — many independent quantities
produces normality.
Theorem 9 (Central Limit Theorem). Let 𝑋 ,…,𝑋 be i.i.d. with mean 𝜇 and finite variance
1 𝑛
𝜎2. As 𝑛 → ∞, the standardized sample mean converges in distribution to a standard normal:
𝑋 −𝜇 ℒ︀
𝑛 ⟶ 𝒩︀(0,1).
𝜎/√𝑛
The label ℒ︀ on the arrow marks convergence in distribution — the mode the Central Limit
Theorem asserts — distinct from the convergence in probability of the weak law and the almost-
sure convergence of the strong law in Chapter 4. Equivalently, for large 𝑛, 𝑋 ≈ 𝒩︀(𝜇,𝜎2/𝑛) and
𝑛
the sum 𝑆 = ∑𝑋 ≈ 𝒩︀(𝑛𝜇,𝑛𝜎2).
𝑛 𝑖
The quantity 𝜎/√𝑛 — the standard deviation of the sample mean — is called the standard error.
The √𝑛 governs the whole of sampling: to halve the error you need four times the data. The LLN
said the error → 0; the CLT says it does so at rate 1/√𝑛 and with a normal shape, which is exactly
what makes confidence intervals computable.
𝑛=1 𝑛=2 𝑛=10
Figure 7: The Central Limit Theorem building a bell from a flat die. The distribution of the sum 𝑆
𝑛
of 𝑛 dice: flat for 𝑛 = 1, triangular for 𝑛 = 2, and visibly bell-shaped by 𝑛 = 10. The die’s flat shape
is irrelevant — only its mean and variance survive. The raw sum spreads without bound as 𝑛 grows;
it is the standardized sum (𝑆 −𝑛𝜇)/(𝜎√𝑛) that settles onto the fixed 𝒩︀(0,1) the theorem names.
𝑛
23

Version of 13 September 2026 Module page
5.2. Normal approximation of the binomial, with continuity
correction
The first and most useful application: a binomial 𝑋 ∼ Bin(𝑛,𝑝) is a sum of 𝑛 i.i.d. Bernoulli(𝑝)
variables, so by the CLT it is approximately normal for large 𝑛:
Bin(𝑛,𝑝) ≈ 𝒩︀(𝑛𝑝,𝑛𝑝(1−𝑝)).
This rescues us from summing dozens of binomial terms by hand. One subtlety: we are approximat-
ing a discrete variable (integer counts) by a continuous one, so we spread each integer 𝑘 across the
interval [𝑘−0.5,𝑘+0.5] — the continuity correction.
Example — at least 60 heads in 100 flips. Let 𝑋 ∼ Bin(100,0.5), so 𝑛𝑝 = 50 and √𝑛𝑝(1−𝑝) =
√25 = 5. For ℙ(𝑋 ≥ 60), the continuity correction replaces the cutoff 60 by 59.5:
59.5−50
ℙ(𝑋 ≥ 60) ≈ ℙ(𝑍 ≥ ) = ℙ(𝑍 ≥ 1.9) = 1−Φ(1.9) ≈ 0.0287.
5
Without the correction we would use 60, giving 𝑧 = 2.0 and 0.0228 — a 20% relative error in the
tail. The half-unit shift matters most precisely where we care most: in the tails.
Pitfall. The continuity correction direction depends on the inequality. For ℙ(𝑋 ≥ 𝑘) use 𝑘−0.5
(include the whole bar for 𝑘); for ℙ(𝑋 ≤ 𝑘) use 𝑘+0.5; for ℙ(𝑋 = 𝑘) use the band [𝑘−0.5,𝑘+
0.5]. Dropping the correction is acceptable only when 𝑛 is very large; for moderate 𝑛 it is a real
source of error. As a rule of thumb the approximation is trustworthy when 𝑛𝑝 ≥ 5 and 𝑛(1−
𝑝) ≥ 5.


## 5.3. Choosing a sample size


Because the standard error is 𝜎/√𝑛, the CLT lets us design a study in advance: solve for the 𝑛 that
delivers a target precision. If we want the sample mean within 𝜀 of 𝜇 with 95% confidence, we need
1.96𝜎/√𝑛 ≤ 𝜀, i.e.
𝜎 2
𝑛 ≥ (1.96 ) .
𝜀
This single inequality — precision improves with √𝑛, so cost grows with the square of the precision
demanded — governs the economics of every poll, survey and A/B test.
24
