# 3. The Law of Large Numbers and the Central Limit Theorem

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 13-16*

Version of 13 September 2026 Module page
3. The Law of Large Numbers and the
Central Limit Theorem
You met both theorems earlier as statements. This chapter makes them visible — and, more impor-
tantly, quantitative — through simulation. The Law of Large Numbers explains why the sample
summaries of the previous chapters worked; the Central Limit Theorem tells us how large the leftover
error is and what shape it has, which is the foundation of every confidence interval and test that
follows.


## 3.1. The Law of Large Numbers, watched live


Example — a running average settling down. Flip a biased coin — Bernoulli(0.3) — over and
over, and after each flip record the running average of all flips so far. Early on the average swings
widely; as flips accumulate it settles onto 0.3.
# Law of Large Numbers: the running average of Bernoulli(0.3) draws settles on
# the mean p = 0.3. We track the running mean of one long sequence.
draws = rd.binomial(n=1, p=0.3, size=5000)
running = np.cumsum(draws) / np.arange(1, len(draws) + 1)
line = "after {:>4} draws: running mean = {:.3f}"
print(line.format(10, running[9]))
print(line.format(100, running[99]))
print(line.format(1000, running[999]))
print(line.format(5000, running[4999]))
after 10 draws: running mean = 0.600
after 100 draws: running mean = 0.350
after 1000 draws: running mean = 0.307
after 5000 draws: running mean = 0.306
Principle 1 (Law of Large Numbers). For independent draws 𝑋 ,𝑋 ,… with common mean
1 2
𝜇, the running average
𝑛
1
𝑋 = ∑𝑋
𝑛 𝑛 𝑖
𝑖=1
converges to 𝜇 as 𝑛 → ∞. In words: the sample mean is a consistent estimator of the expectation
— enough data pins it down.
13

Version of 13 September 2026 Module page
Figure 4: Five independent running averages of Bernoulli(0.3) draws, on a logarithmic 𝑛-axis. Each
starts erratic and wanders, but all funnel onto the true mean 𝑝 = 0.3 (red dashed) as 𝑛 grows. The
Law of Large Numbers is this funnelling: the spread of where the average can be shrinks steadily
toward zero.
Figure 4 also shows what the Law of Large Numbers does not promise: at any finite 𝑛 the average is
still off by some amount, and different runs are off by different amounts. Quantifying that leftover
error is the Central Limit Theorem’s job.


## 3.2. The Central Limit Theorem, and the size of the error


The Law of Large Numbers says the error 𝑋 −𝜇 vanishes; the Central Limit Theorem says how fast
𝑛
and in what shape. Its engine is the standard error.
Definition 3 (Standard error of the sample mean). If each of the independent draws
𝑋 ,…,𝑋 has standard deviation 𝜎, the sample mean 𝑋 has standard deviation
1 𝑛 𝑛
𝜎
SE = .
√𝑛
This standard error is the typical size of the sampling error 𝑋 −𝜇; it shrinks like 1/√𝑛, so halving
𝑛
the error takes four times the data.
Principle 2 (Central Limit Theorem). For independent draws 𝑋 ,…,𝑋 with common mean
1 𝑛
𝜇 and finite standard deviation 𝜎, the standardised sample mean
𝑋 −𝜇
𝑍 = 𝑛
𝑛
𝜎/√𝑛
converges in distribution to the standard normal 𝒩︀(0,1) as 𝑛 → ∞ — whatever the shape of the
original law. So for large 𝑛, 𝑋 is approximately normal with mean 𝜇 and standard deviation
𝑛
𝜎/√𝑛.
14

Version of 13 September 2026 Module page
The phrase whatever the shape is the miracle. We can start from a wildly skewed law and the average
still turns normal. Simulation shows it happening.
# Central Limit Theorem: the sample mean of n draws from a very skewed law
# (Exponential, rate 1) is itself approximately normal once n is moderate.
# We standardise it, (mean - mu)/(sigma/sqrt(n)), and it should look N(0, 1).
mu, sigma = 1.0, 1.0 # Exponential(1): mean 1, sd 1
line = "n = {:>2}: mean(z) = {:+.3f}, sd(z) = {:.3f}, skew = {:+.3f}"
for n in [1, 5, 30]:
means = np.mean(rd.exponential(scale=1.0, size=(20000, n)), axis=1)
z = (means - mu) / (sigma / np.sqrt(n))
zc = (z - np.mean(z)) / np.std(z, ddof=1) # standardise, then 3rd moment
skew = np.mean(zc ** 3)
print(line.format(n, np.mean(z), np.std(z, ddof=1), skew))
n = 1: mean(z) = +0.004, sd(z) = 1.019, skew = +2.126
n = 5: mean(z) = -0.007, sd(z) = 0.999, skew = +0.928
n = 30: mean(z) = -0.003, sd(z) = 0.999, skew = +0.347
Read the skew column: the base law (Exponential, at 𝑛 = 1) is strongly right-skewed (skew about 2);
by 𝑛 = 5 the skew has more than halved, and by 𝑛 = 30 the standardised average is close to symmetric
— the normal shape emerging. The sd(z) column stays near 1 throughout, confirming the 𝜎/√𝑛
scaling.
Figure 5: The Central Limit Theorem in action, starting from a strongly skewed law. Each panel is the
density histogram of the standardised sample mean of 𝑛 Exponential(1) draws, against the standard
normal (purple). At 𝑛 = 1 it inherits the exponential’s skew; by 𝑛 = 5 it is much closer; by 𝑛 = 30 the
bell fits well. Convergence is fast when the base law is mild, slower for heavy skew.
Example — putting a number on the error. Suppose each observation has 𝜎 = 1 (as for
Exponential(1)) and we average 𝑛 = 100 of them. The standard error is 𝜎/√𝑛 = 1/√100 = 0.100.
By the Central Limit Theorem the sample mean is approximately normal, so about 95% of the
time it lands within 1.96×0.100 ≈ 0.20 of the true mean — that interval is precisely a confidence
interval. The Central Limit Theorem is what licenses reading the error off a single sample.
Pitfall (The Law of Large Numbers is not the Gambler's Fallacy). “The average tends to 𝜇”
does not mean a run of high values must be balanced by low ones. Past draws do not push future
draws; the average approaches 𝜇 only because accumulating new independent draws dilutes early
15

Version of 13 September 2026 Module page
deviations, not because the process corrects them. Expecting a “due” outcome after a streak is
the Gambler’s Fallacy.
16
