# 5. Checking an estimator by simulation

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 20-21*

Version of 13 September 2026 Module page
5. Checking an estimator by simulation
A closed-form estimator is a formula; whether it is any good is a separate question. An estimator is a
random quantity — feed it a different sample and it returns a different number — so its quality is a
property of its sampling distribution. This chapter uses simulation to examine three such properties
for the exponential MLE 𝜆̂= 1/𝑥: consistency, variance decay, and asymptotic normality. The method
is general: it validates any estimator whose sampling distribution has no simple formula.


## 5.1. The repeated-sampling experiment


The idea is to simulate the estimator’s own randomness. Fix a true parameter, draw many independent
samples of size 𝑛, compute the estimator on each, and study the resulting cloud of estimates — its
centre, its spread, and its shape.
Method 3 (Studying an estimator by repeated sampling).
1. Fix a true parameter value 𝜃 and a sample size 𝑛.
2. Draw 𝑅 independent samples of size 𝑛; compute 𝜃 ̂on each, giving estimates 𝜃(̂1),…,𝜃(̂𝑅).
3. Their average reveals bias (is it centred on 𝜃?); their standard deviation is the estimator’s
standard error; their histogram reveals the shape.
4. Repeat across growing 𝑛 to see how each property behaves as data accumulate.
# Repeated-sampling study of the exponential MLE lam_hat = 1/mean(x), true
# lambda = 1.5. For each sample size we draw 5000 independent samples, compute
# the estimator on each, and summarise the 5000 estimates.
true_lam = 1.5
reps = 5000
head = "{:>6}{:>16}{:>14}{:>14}{:>12}"
row = "{:>6}{:>16.3f}{:>14.3f}{:>14.3f}{:>12.3f}"
print(head.format("n", "mean(lam_hat)", "sd(lam_hat)", "sd * sqrt(n)", "skew(std)"))
mean_by_n, sd_by_n = {}, {}
for n in [10, 40, 160, 640]:
data = rd.exponential(scale=1 / true_lam, size=(reps, n))
est = 1 / np.mean(data, axis=1) # one lam_hat per sample
std = (est - np.mean(est)) / np.std(est, ddof=1) # standardise the estimates
skew = np.mean(std ** 3) # 0 for a symmetric (normal)
shape
mean_by_n[n] = np.mean(est)
sd_by_n[n] = np.std(est, ddof=1)
print(row.format(n, np.mean(est), np.std(est, ddof=1),
np.std(est, ddof=1) * np.sqrt(n), skew))
n mean(lam_hat) sd(lam_hat) sd * sqrt(n) skew(std)
10 1.673 0.593 1.876 1.481
40 1.537 0.247 1.563 0.624
160 1.511 0.122 1.538 0.328
640 1.502 0.060 1.515 0.104
Every column tells part of one of the three stories.
20

Version of 13 September 2026 Module page
Definition 6 (Three large-sample properties).
• Consistency: 𝜃̂→ 𝜃 as 𝑛 → ∞ — the estimate homes in on the truth. Here mean(lam_hat)
marches toward 1.5.
• Variance decay: the standard error falls like 1/√𝑛, so quadrupling 𝑛 halves it. Here
sd(lam_hat) roughly halves at each 4× step, and sd * sqrt(n) stays nearly constant — the
signature of the 1/√𝑛 rate.
• Asymptotic normality: for large 𝑛, the standardised estimator (𝜃̂−𝜃)/SE is approximately
standard normal — the Central Limit Theorem, now applied to the estimator itself. Here
skew(std), the skew of the standardised estimates, falls toward 0 — the symmetry a normal
shape demands.
Reading the table: quadrupling 𝑛 from 10 to 40 shrank the spread by a factor of about 2.40 —
somewhat above the 2 the 1/√𝑛 law predicts, an excess left by the small-sample bias that fades as 𝑛
grows, so that from 160 to 640 the factor is already near 2. The skew(std) column falls the same way,
from strongly skewed at 𝑛 = 10 to nearly symmetric by 𝑛 = 640: the estimator’s own distribution
turning normal.
Figure 7: The three properties of the exponential MLE, by simulation (true 𝜆 = 1.5, 5000 samples
per size). Left — consistency: the sampling distribution of 𝜆 ̂narrows around 1.5 (red dashed) as 𝑛
grows. Middle — variance decay: on log–log axes, sd(𝜆)̂ versus 𝑛 runs parallel to the reference 𝜆/√𝑛
— a straight line of slope −1/2. Right — asymptotic normality: at 𝑛 = 160 the standardised estimator
matches the standard normal (purple).
Pitfall. At small 𝑛 the exponential MLE is visibly biased upward — read the table’s first
row, where mean(lam_hat) is 1.673, not 1.5. Consistency is a large-sample promise; it does not
guarantee unbiasedness at every 𝑛. When your sample is small, neither the point estimate nor a
normal-based interval around it should be trusted without this caveat.
21
