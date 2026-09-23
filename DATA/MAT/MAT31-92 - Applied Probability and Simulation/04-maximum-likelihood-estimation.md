# 4. Maximum-likelihood estimation

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 17-19*

Version of 13 September 2026 Module page
4. Maximum-likelihood estimation
We now turn from simulating known laws to estimating unknown parameters. You met the maximum-
likelihood estimator (MLE) before; here we make its central technique precise — maximising the
log-likelihood — and carry it out in closed form for the three laws whose estimators you will use most:
the Bernoulli, the Poisson and the exponential.


## 4.1. Likelihood and log-likelihood


Definition 4 (Likelihood and log-likelihood). Let 𝑥 ,…,𝑥 be independent data from a law
1 𝑛
whose density (or pmf) 𝑓(⋅;𝜃) depends on an unknown parameter 𝜃 ranging over a set Θ. The
likelihood is the function giving the probability (or density) of exactly that data,
𝐿 : Θ ⟶ ℝ
+
𝑛
𝜃 ⟼ ∏ 𝑓(𝑥 ;𝜃)
𝑖=1 𝑖
and the log-likelihood is its logarithm ℓ = ln∘𝐿, which turns the product into a sum,
𝑛
ℓ(𝜃) = ∑ln𝑓(𝑥 ;𝜃).
𝑖
𝑖=1
Because ln is increasing, 𝐿 and ℓ are maximised at the same 𝜃.
Definition 5 (Maximum-likelihood estimator). The maximum-likelihood estimator 𝜃 ̂is the
parameter value that makes the observed data most probable:
𝜃̂= argmaxℓ(𝜃).
𝜃∈Θ
For a smooth one-parameter model the maximum is found by calculus, and we always work with ℓ,
never 𝐿: the sum is easier to differentiate than the product, and it avoids the numerical underflow of
multiplying thousands of small probabilities. Setting ℓ′(𝜃) = 0 and checking ℓ″(𝜃) < 0 (a maximum,
not a minimum) is the whole recipe.
Method 2 (Deriving a closed-form MLE).
1. Write the likelihood and take its logarithm, ℓ(𝜃) = ∑ ln𝑓(𝑥 ;𝜃).
𝑖 𝑖
2. Solve the first-order condition ℓ′(𝜃) = 0 for 𝜃 — this candidate is 𝜃.̂
3. Confirm it is a maximum with the second derivative, ℓ″(𝜃)̂ < 0.


## 4.2. The three closed-form estimators


Example — Bernoulli — the MLE is the sample proportion. Data 𝑥 ,…,𝑥 ∈ {0,1} from
1 𝑛
Bernoulli(𝑝), with 𝑘 = ∑ 𝑥 successes. The likelihood is 𝐿(𝑝) = 𝑝𝑘(1−𝑝) 𝑛−𝑘, so ℓ(𝑝) = 𝑘ln𝑝+
𝑖 𝑖
17

Version of 13 September 2026 Module page
(𝑛−𝑘)ln(1−𝑝). Differentiating, ℓ′(𝑝) = 𝑘/𝑝−(𝑛−𝑘)/(1−𝑝); setting this to zero gives 𝑘(1−
𝑝) = (𝑛−𝑘)𝑝, that is 𝑘 = 𝑛𝑝, so
𝑘
𝑝̂= = 𝑥.
𝑛
The estimator is just the observed proportion of successes — the intuitive answer, now derived. Here
ℓ″(𝑝) = −𝑘/𝑝2−(𝑛−𝑘)/(1−𝑝) 2 < 0, confirming a maximum.
Example — Poisson — the MLE is the sample mean. Data from Poisson(𝜆) have 𝑓(𝑥;𝜆) =
𝑒−𝜆𝜆𝑥/𝑥!, so
𝑛
ℓ(𝜆) = ∑(−𝜆+𝑥 ln𝜆−ln𝑥 !)
𝑖 𝑖
𝑖=1
= −𝑛𝜆+(∑𝑥 )ln𝜆−∑ln𝑥 !.
𝑖 𝑖
𝑖 𝑖
Then ℓ′(𝜆) = −𝑛+(∑ 𝑥 )/𝜆 = 0 gives
𝑖 𝑖
∑ 𝑥
𝜆̂= 𝑖 𝑖 = 𝑥,
𝑛
and ℓ″(𝜆) = −(∑ 𝑥 )/𝜆2 < 0 confirms the maximum.
𝑖 𝑖
Example — Exponential — the MLE is the reciprocal mean. Data from the exponential law
of rate 𝜆 have density 𝑓(𝑥;𝜆) = 𝜆𝑒−𝜆𝑥 on 𝑥 > 0, so 𝐿(𝜆) = 𝜆𝑛𝑒−𝜆∑𝑖 𝑥 𝑖 and
𝑛
ℓ(𝜆) = 𝑛ln𝜆−𝜆∑𝑥 .
𝑖
𝑖=1
Then ℓ′(𝜆) = 𝑛/𝜆−∑ 𝑥 = 0 gives
𝑖 𝑖
𝑛 1
𝜆̂= = ,
∑ 𝑥 𝑥
𝑖 𝑖
and ℓ″(𝜆) = −𝑛/𝜆2 < 0 confirms the maximum. Sensible: a fast rate (small mean) means a large 𝜆.̂
The same three steps — write ℓ and its derivative, solve ℓ′ = 0, confirm with ℓ″ — serve all three
laws; only the density changes.
Theorem 2 (Three closed-form MLEs). For a sample 𝑥 ,…,𝑥 with mean 𝑥:
1 𝑛
1
𝑝̂ = 𝑥, 𝜆̂ = 𝑥, 𝜆̂ = .
Bern Pois Exp
𝑥
We can confirm all three at once on simulated data, where the true parameter is known:
# The three closed-form MLEs, checked on simulated data. In every case the
# estimator is a simple sample statistic derived by maximising the
18

Version of 13 September 2026 Module page
# log-likelihood: Bernoulli p -> sample mean, Poisson lambda -> sample mean,
# Exponential rate lambda -> 1 / sample mean.
n = 2000
bern = rd.binomial(n=1, p=0.3, size=n)
print("Bernoulli: true p = 0.30, p_hat = mean(x) = {:.3f}".format(
np.mean(bern)))
pois = rd.poisson(4.0, size=n)
print("Poisson: true lam = 4.00, lam_hat = mean(x) = {:.3f}".format(
np.mean(pois)))
expo = rd.exponential(scale=1 / 1.5, size=n) # rate 1.5, so scale 1/1.5
print("Exponential: true lam = 1.50, lam_hat = 1/mean(x) = {:.3f}".format(
1 / np.mean(expo)))
Bernoulli: true p = 0.30, p_hat = mean(x) = 0.320
Poisson: true lam = 4.00, lam_hat = mean(x) = 3.878
Exponential: true lam = 1.50, lam_hat = 1/mean(x) = 1.495
Each estimate lands beside the truth. The picture behind the algebra is a hill: the log-likelihood rises
to a single peak at 𝜃.̂
Figure 6: The exponential log-likelihood ℓ(𝜆) = 𝑛ln𝜆−𝜆∑ 𝑥 for one simulated sample of 200
𝑖 𝑖
draws (data drawn at true rate 1.5). It rises to a single peak; the peak sits exactly at 𝜆̂= 1/𝑥 = 1.392
for this particular sample (purple dashed) — the MLE of a single finite sample, which need not equal
the truth. Setting ℓ′(𝜆) = 0 is finding the top of this hill.
Remark. Not every law gives a tidy formula. The normal law’s two parameters both have closed-
form MLEs (𝜇̂ = 𝑥, 𝜎̂2 = 1 ∑ (𝑥 −𝑥) 2 ), but many models — the Pareto’s tail index among them
𝑛 𝑖 𝑖
— require numerically maximising ℓ on a computer. The technique is identical; only the last step
changes from algebra to a numerical search.
19
