# 1. Generalized integrals

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 5-7*

Version of 13 September 2026 Module page
1. Generalized integrals
A continuous random variable will spread its probability over an interval, and total probability must
equal 1. When that interval is the whole real line — as for the normal distribution — computing
“total probability” means integrating over an unbounded region. Ordinary definite integrals
∫𝑏
run
𝑎
between two finite numbers; we first need to make sense of integrals that run to infinity or whose
integrand grows without bound. These are generalized (or improper) integrals.
We treat them by intuition and a few standard reference cases, not by the full convergence theory.
One idea guides everything: an improper integral is a limit of ordinary ones.


## 1.1. Integrating to infinity


Example — the area under a decaying tail. Consider 𝑓(𝑥) = 1/𝑥2 for 𝑥 ≥ 1. Its graph comes
ever closer to the axis as 𝑥 grows, but never touches it — the region under it stretches infinitely far
to the right. Does it nonetheless enclose a finite area? Integrate up to a finite cutoff 𝑏 and observe:
𝑏 1 1 𝑏 1
∫ d𝑥 = [− ] = 1− .
𝑥2 𝑥 𝑏
1 1
As 𝑏 → ∞ the term 1/𝑏 vanishes, leaving area exactly 1. An infinitely long region can have finite
area.
Definition 1 (improper integral on an unbounded interval). If
∫𝑏
𝑓(𝑥)d𝑥 exists for every
𝑎
𝑏 > 𝑎, we define
∞ 𝑏
∫ 𝑓(𝑥)d𝑥 = lim ∫ 𝑓(𝑥)d𝑥.
𝑏→∞
𝑎 𝑎
When the limit exists and is finite, the integral converges; otherwise it diverges. Integrals to
−∞, and the doubly-infinite
∫∞
𝑓 =
∫𝑐 𝑓+∫∞
𝑓, are defined the same way.
−∞ −∞ 𝑐
𝑦
𝑦=1/𝑥2
area =1
1 𝑥
Figure 1: The improper integral ∫∞ 𝑥−2d𝑥. The region is unbounded to the right yet has finite area 1,
1
because the tail thins fast enough. We compute it as the limit of the finite areas 1−1/𝑏 as the cutoff
𝑏 → ∞.
The decisive question is how fast the tail decays. Compare 1/𝑥2 with 1/𝑥:
5

Version of 13 September 2026 Module page
𝑏
1
∫ d𝑥 = [ln𝑥] 𝑏 = ln𝑏 → ∞.
𝑥 1
1
The area under 1/𝑥 is infinite — the curve decays too slowly. This is the canonical reference family:
Proposition 1 (the 𝑝-integral at infinity).
∞
1 1
∫ d𝑥 converges ⟺ 𝑝 > 1, and then equals .
𝑥𝑝 𝑝−1
1
Proof. For 𝑝 ≠ 1, ∫𝑏 𝑥−𝑝d𝑥 = [𝑥1−𝑝/(1−𝑝)] 𝑏 = (𝑏1−𝑝−1)/(1−𝑝). If 𝑝 > 1 the exponent 1−𝑝 is
1 1
negative, so 𝑏1−𝑝 → 0 and the limit is 1/(𝑝−1). If 𝑝 < 1 the exponent is positive and 𝑏1−𝑝 → ∞. The
borderline 𝑝 = 1 gives ln𝑏 → ∞ as above. □
A second indispensable case is the exponential tail, which decays faster than any power and will
underlie the exponential and normal distributions:
∞ 1 ∞ 1
∫ 𝑒−𝜆𝑥d𝑥 = [− 𝑒−𝜆𝑥] = (𝜆 > 0).
𝜆 𝜆
0 0


## 1.2. Integrating an unbounded function


The other way an integral turns improper is when the integrand grows without bound at an
endpoint, even over a finite interval. The remedy is the same — stop short at a cutoff and take a limit.
Example — a spike at the origin. The function 1/√𝑥 is unbounded as 𝑥 → 0+. Yet
1 1
1 1
∫ d𝑥 = lim ∫ 𝑥−1/2d𝑥 = lim [2√𝑥] = lim (2−2√𝑎) = 2.
√𝑥 𝑎→0+ 𝑎→0+ 𝑎 𝑎→0+
0 𝑎
The spike is integrable: its area is finite. By contrast
∫1
(1/𝑥)d𝑥 = lim (−ln𝑎) = +∞ diverges.
0 𝑎→0+
Notice the mirror image of the tail case: near 0, 1/𝑥𝑝 converges exactly when 𝑝 < 1 — the opposite
inequality. The intuition: at infinity you need fast decay (𝑝 large); at a spike you need a mild
singularity (𝑝 small).
Pitfall. Do not evaluate an improper integral by blindly plugging in the limits as if they were
ordinary numbers. Writing “[−1/𝑥] ∞ = 0−(−1)” gives the right answer here only because the
1
limit happens to exist; with
∫∞
(1/𝑥)d𝑥 the same reflex hides a divergence. Always set up the
1
limit explicitly when an endpoint is ∞ or a point where 𝑓 is undefined.
Remark. A useful shortcut when you only need to know whether an integral converges, not its
value, is comparison: if 0 ≤ 𝑓(𝑥) ≤ 𝑔(𝑥) and ∫𝑔 converges, so does ∫𝑓. For instance ∫∞ 𝑒−𝑥2d𝑥
1
converges because 𝑒−𝑥2 ≤ 𝑒−𝑥 for 𝑥 ≥ 1 and the exponential integral converges — even though
6

Version of 13 September 2026 Module page
𝑒−𝑥2 has no elementary antiderivative. This is exactly why the normal distribution’s normalising
constant has to be found by a trick rather than by direct integration.
7
