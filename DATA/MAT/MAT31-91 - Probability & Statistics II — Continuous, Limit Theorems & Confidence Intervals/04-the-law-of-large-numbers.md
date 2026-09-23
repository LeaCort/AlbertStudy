# 4. The Law of Large Numbers

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 19-22*

Version of 13 September 2026 Module page
4. The Law of Large Numbers
We now reach the theorems that justify the entire practice of statistics. The first answers the most
basic question one could ask of probability: if I repeat an experiment many times, does the
average outcome settle down to the expected value?


## 4.1. Two tail inequalities: Markov and Chebyshev


Before the theorem itself we need two inequalities that bound how much probability a variable can
place far from its mean — using only its mean and variance, whatever its distribution. They are the
engine of the proof, and useful in their own right whenever the exact distribution is unknown.
Theorem 5 (Markov's inequality). If 𝑋 ≥ 0 and 𝑎 > 0, then
𝑋
ℙ(𝑋 ≥ 𝑎) ≤ 𝔼 .
𝑎
Proof. Because 𝑋 ≥ 0, its expectation is the improper integral 𝔼(𝑋) =
∫∞
𝑥𝑓 (𝑥)d𝑥 of Chapter 1.
0 𝑋
Split the range at 𝑎 by Chasles’ relation, discard the first piece — non-negative, since its integrand
is — and on the second, where 𝑥 ≥ 𝑎, bound the integrand below by 𝑎𝑓 (𝑥):
𝑋
𝑎 ∞
𝔼(𝑋) = ∫ 𝑥𝑓 (𝑥)d𝑥+∫ 𝑥𝑓 (𝑥)d𝑥
𝑋 𝑋
0 𝑎
∞
≥ ∫ 𝑥𝑓 (𝑥)d𝑥
𝑋
𝑎
∞ ∞
≥ ∫ 𝑎𝑓 (𝑥)d𝑥 = 𝑎∫ 𝑓 (𝑥)d𝑥 = 𝑎ℙ(𝑋 ≥ 𝑎).
𝑋 𝑋
𝑎 𝑎
Dividing by 𝑎 > 0 gives the claim. □
Markov uses only the mean, so it is crude; feeding it the squared deviation (𝑋 −𝜇) 2 — a non-
negative variable whose mean is precisely the variance — sharpens it into the bound every later result
leans on.
Theorem 6 (Chebyshev's inequality). For any 𝑋 with mean 𝜇 and variance 𝜎2, and any 𝜀 > 0,
𝜎2
ℙ(|𝑋 −𝜇| ≥ 𝜀) ≤ .
𝜀2
Proof. Apply Markov’s inequality to the non-negative variable (𝑋 −𝜇) 2 with cutoff 𝑎 = 𝜀2. The event
|𝑋 −𝜇| ≥ 𝜀 is identical to (𝑋 −𝜇) 2 ≥ 𝜀2, and 𝔼((𝑋 −𝜇) 2 ) = 𝕍(𝑋) = 𝜎2, so
(𝑋 −𝜇) 2 𝜎2
ℙ(|𝑋 −𝜇| ≥ 𝜀) = ℙ((𝑋 −𝜇) 2 ≥ 𝜀2) ≤ 𝔼 = .
𝜀2 𝜀2
□
19

Version of 13 September 2026 Module page
Example — a distribution-free tail bound. A delivery time has mean 𝜇 = 100 minutes and
standard deviation 𝜎 = 15, but we know nothing about its shape. What can we say about being
more than 30 minutes off? With 𝜀 = 30 = 2𝜎,
152 1
ℙ(|𝑋 −100| ≥ 30) ≤ = ,
302 4
so at least 75% of deliveries land in [70,130] — for any distribution with this mean and variance.
If we knew 𝑋 were normal, the empirical rule would tighten this to about 95%; Chebyshev is the
price of assuming nothing.
Pitfall. Chebyshev’s bound is deliberately loose: it must hold for every distribution, so it is
far from tight for any particular one. Read “ℙ(|𝑋 −𝜇| ≥ 2𝜎) ≤ 1/4” as a guarantee, never an
estimate — the true probability is usually far smaller (about 0.05 for a normal). Its power is
exactly that it needs no distributional assumption.


## 4.2. Statement and interpretation


Example — the running average of coin flips. Flip a fair coin and record the running
proportion of heads after 1,2,3,… flips. Early on it jumps around — 0, then 0.5, then 0.33 —
but as flips accumulate it stops moving and settles near 0.5. Not because some force “corrects”
imbalances, but because each new flip changes an ever-larger total by an ever-smaller amount.
The average stabilises on its own.
Theorem 7 (Weak law of large numbers). Let 𝑋 ,𝑋 ,… be independent and identically
1 2
distributed with mean 𝜇 and finite variance. Their sample mean
𝑛
1
𝑋 = ∑𝑋
𝑛 𝑛 𝑖
𝑖=1
converges to 𝜇 as 𝑛 → ∞: for any tolerance 𝜀 > 0,
ℙ(| |𝑋
𝑛
−𝜇| | ≥ 𝜀) → 0.
Proof. Compute the two moments of the sample mean: by linearity 𝔼(𝑋 ) = 𝜇, and by variance-
𝑛
additivity for independent variables 𝕍(𝑋 ) = 𝜎2/𝑛. So 𝑋 is an unbiased estimator of 𝜇 whose spread
𝑛 𝑛
collapses as 𝑛 grows. Apply Chebyshev’s inequality to 𝑋 and let 𝑛 → ∞ in the bound:
𝑛
𝑋 𝜎2
0 ≤ ℙ(| |𝑋
𝑛
−𝜇| | ≥ 𝜀) ≤ 𝕍
𝜀2
𝑛 =
𝑛𝜀2
→ 0.
The probability is squeezed between 0 and a bound that vanishes, so it tends to 0 itself. That is the
whole theorem: the variance of an average falls like 1/𝑛, and Chebyshev turns that into convergence.
□
The proof reveals why it works and connects straight back to the discrete case: the variance of an
average of 𝑛 independent copies is 1/𝑛 of a single one’s, so spread shrinks like 1/𝑛 — the same 𝑝(1−
20

Version of 13 September 2026 Module page
𝑝)/𝑛 we found for the sample proportion. The LLN is the formal promise that more data means a
more reliable average.
𝑋
𝑛
𝜇=0.5
𝑛
Figure 6: The Law of Large Numbers in action: the running proportion of heads swings wildly at
first, then converges to 𝜇 = 0.5. The amplitude of the swings shrinks like 1/√𝑛 — the convergence
is real but gradual.
The theorem above is the weak law: for each fixed tolerance 𝜀, the chance of the sample mean being
off by more than 𝜀 tends to 0. A sharper statement, the strong law, is also true and worth knowing.
Theorem 8 (Strong law of large numbers). Under the same hypotheses (i.i.d. with mean 𝜇),
the sample mean converges to 𝜇 almost surely:
ℙ(lim 𝑋 = 𝜇) = 1.
𝑛
𝑛→∞
The two laws differ in their mode of convergence, and the distinction is the technical content here.
The weak law is convergence in probability: it pins down, at each single large 𝑛, the probability
of a gap — but leaves open that a rare excursion still surfaces now and then as 𝑛 marches on. The
strong law is almost-sure convergence: it speaks of the entire trajectory at once, promising that
with probability 1 the running average eventually settles onto 𝜇 and never leaves again — only finitely
many excursions ever occur. The strong law implies the weak, so it is the stronger guarantee; we
prove only the weak one, whose Chebyshev argument is elementary, and state the strong one without
proof. For everyday statistics both underwrite the same conclusion — more data means a more
trustworthy average — which is why the weak law’s simple, quotable bound 𝜎2/(𝑛𝜀2) is the one
we actually reach for.
4.3. The Gambler’s Fallacy
Pitfall. The LLN says the average converges; it does not say that nature keeps a running
account and pays back past deficits. After a run of 10 heads, the Gambler’s Fallacy insists tails is
now “due”. It is not: the coin has no memory, so the next flip is still 50/50. Convergence happens
by dilution, not compensation — the early excess of heads is not cancelled by future tails; it is
simply outweighed by the growing denominator 𝑛. In fact the absolute imbalance (heads minus
tails) can keep growing even as the proportion converges. Confusing “the proportion tends to
1/2” with “the counts must even out” is one of the most consequential errors in all of probability.


## 4.4. Implication for sampling


The LLN is the licence to estimate by sampling. The sample proportion of voters favouring a
candidate converges to the true proportion; the sample mean income converges to the population
21

Version of 13 September 2026 Module page
mean. It guarantees that the estimate is eventually right — but it is silent on how fast, and on how
wrong a finite sample might be. For that quantitative question we need the next theorem.
22
