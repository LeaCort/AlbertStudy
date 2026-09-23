# 2. Continuous random variables

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 8-10*

Version of 13 September 2026 Module page
2. Continuous random variables
A discrete variable places lumps of probability on isolated points. A continuous variable smears
probability over an interval, so that any single value has probability zero and only ranges carry
weight. The lump-heights 𝑝 (𝑥) are replaced by a density 𝑓 (𝑥), and every sum ∑ becomes an
𝑋 𝑋 𝑥
integral ∫d𝑥. This one substitution carries almost all of the discrete theory across.


## 2.1. Density and cumulative distribution function


Example — a random point on a stick. Snap a 1-metre stick at a uniformly random point and
let 𝑋 be the distance of the break from the left end. Then 𝑋 lands anywhere in [0,1] with no
preference. What is ℙ(𝑋 = 0.5) — exactly the midpoint? Zero: there are infinitely many points and
no single one can carry positive probability. But ℙ(0.4 ≤ 𝑋 ≤ 0.6) = 0.2, the length of the sub-
interval. Probability has become length, and more generally area under a curve.
Definition 2 (probability density function). A continuous random variable 𝑋 is
described by a probability density function (PDF) 𝑓 (𝑥) ≥ 0 such that probabilities are areas:
𝑋
𝑏
ℙ(𝑎 ≤ 𝑋 ≤ 𝑏) = ∫ 𝑓 (𝑥)d𝑥,
𝑋
𝑎
and the total area is one,
∫∞
𝑓 (𝑥)d𝑥 = 1.
−∞ 𝑋
The density is not a probability — it can exceed 1 (a sharp spike over a short interval). Only
its integral over a range is a probability. The correct infinitesimal reading is ℙ(𝑥 ≤ 𝑋 ≤ 𝑥+d𝑥) ≈
𝑓 (𝑥)d𝑥: the density times a tiny width gives the probability in that sliver.
𝑋
Pitfall. Because single points have probability zero, the endpoints never matter for a continuous
variable: ℙ(𝑎 ≤ 𝑋 ≤ 𝑏) = ℙ(𝑎 < 𝑋 < 𝑏). Strict and non-strict inequalities give the same answer
— a relief after the fussy off-by-one bookkeeping of discrete sums. (This fails completely for
discrete variables, where ℙ(𝑋 ≤ 3) and ℙ(𝑋 < 3) can differ by 𝑝 (3).)
𝑋
As in the discrete case, the cumulative distribution function accumulates probability from the
left — but now by integrating, not summing.
Definition 3 (cumulative distribution function). The CDF of 𝑋 is 𝐹 (𝑥) = ℙ(𝑋 ≤ 𝑥) =
𝑋
∫𝑥
𝑓 (𝑡)d𝑡. It is non-decreasing, runs from 𝐹 (−∞) = 0 to 𝐹 (+∞) = 1, and — by the Funda-
−∞ 𝑋 𝑋 𝑋
mental Theorem of Calculus — recovers the density by differentiation:
(𝐹 ) ′ (𝑥) = 𝑓 (𝑥).
𝑋 𝑋
This last identity is the through-line of the whole chapter: density and CDF are a derivative–
integral pair, exactly the Fundamental Theorem of Calculus you already know. To get probabilities
from a density, integrate; to get the density from a CDF, differentiate; and ℙ(𝑎 ≤ 𝑋 ≤ 𝑏) = 𝐹 (𝑏)−
𝑋
𝐹 (𝑎).
𝑋
8

Version of 13 September 2026 Module page
𝑓
𝑋
∫𝑏𝑓
𝑎 𝑋
𝑎 𝑏 𝑥
Figure 2: Probability as area. The shaded region under the density 𝑓 between 𝑎 and 𝑏 equals ℙ(𝑎 ≤
𝑋
𝑋 ≤ 𝑏). The whole region under the curve has area 1. Individual points, being slivers of zero width,
carry zero probability.


## 2.2. Expectation, variance, and moments


Every definition from the discrete theory transfers by turning ∑ 𝑥𝑝 (𝑥) into ∫𝑥𝑓 (𝑥)d𝑥. The
𝑥 𝑋 𝑋
interpretation is identical — expectation is the balance point of the density, variance its spread
— only the computation changes from summing to integrating.
Definition 4 (expectation and variance). For a continuous variable 𝑋 with density 𝑓 ,
𝑋
∞
𝔼(𝑋) = ∫ 𝑥𝑓 (𝑥)d𝑥, 𝕍(𝑋) = 𝔼((𝑋 −𝜇) 2 ),
𝑋
−∞
where 𝜇 = 𝔼(𝑋), provided the integrals converge absolutely. The 𝑘-th moment is 𝔼(𝑋𝑘) =
∫𝑥𝑘𝑓 (𝑥)d𝑥.
𝑋
Expanding the square gives the König–Huygens formula, the shortcut you will actually compute
with — it trades the awkward 𝔼((𝑋 −𝜇) 2 ) for the two plain moments 𝔼(𝑋2) and 𝔼(𝑋).
Proposition 2 (König–Huygens formula).
𝕍(𝑋) = 𝔼(𝑋2)−(𝔼(𝑋)) 2.
Proof. Start from the variance as an expected squared deviation, write 𝜇 = 𝔼(𝑋), expand the square,
and use linearity of expectation (which the integral inherits from the sum):
𝕍(𝑋) = 𝔼((𝑋 −𝜇) 2 )
= 𝔼(𝑋2−2𝜇𝑋 +𝜇2)
= 𝔼(𝑋2)−2𝜇𝔼(𝑋)+𝜇2.
Now replace 𝔼(𝑋) by the mean 𝜇 it names: the last two terms collapse to −2𝜇2+𝜇2 = −𝜇2. Substi-
tuting back leaves 𝕍(𝑋) = 𝔼(𝑋2)−𝜇2. The identity is purely algebraic — it holds for discrete and
continuous variables alike, because both expectations are linear. □
The transfer theorem (the “law of the unconscious statistician”) also survives verbatim, and it is
what lets us compute 𝔼(𝑋2) for the variance without first finding the distribution of 𝑋2.
9

Version of 13 September 2026 Module page
Theorem 1 (Transfer theorem). For any (measurable) function 𝑔,
∞
𝔼(𝑔(𝑋)) = ∫ 𝑔(𝑥)𝑓 (𝑥)d𝑥.
𝑋
−∞
Linearity of expectation, 𝕍(𝑎𝑋 +𝑏) = 𝑎2𝕍(𝑋), and variance-additivity for independent variables all
hold word-for-word as in the discrete case — their proofs used only linearity of the sum, which is
shared by the integral.
Example — mean and variance of a point on the stick. For the uniform break point, the
density is 𝑓 (𝑥) = 1 on [0,1] and 0 elsewhere (it must integrate to 1 over a unit interval). Then
𝑋
1 𝑥2 1 1 1 1
𝔼(𝑋) = ∫ 𝑥⋅1d𝑥 = [ ] = , 𝔼(𝑋2) = ∫ 𝑥2d𝑥 = ,
2 2 3
0 0 0
so 𝕍(𝑋) = 1/3−(1/2) 2 = 1/12. The mean sits at the centre, as symmetry demands, and the stan-
dard deviation 𝜎 = 1/√12 ≈ 0.29 measures the typical distance from it.
Pitfall. A continuous variable can have no mean. If the tails of 𝑓 are too heavy the defining
𝑋
integral diverges — the Cauchy density 𝑓(𝑥) = 1/(𝜋(1+𝑥2)) is the classic example, with
∫𝑥𝑓(𝑥)d𝑥 divergent. “Expectation exists” is a genuine condition, not a formality, exactly as
absolute convergence was for discrete sums.
10
