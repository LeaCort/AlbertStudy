# 1. Simulating the discrete laws

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 5-7*

Version of 13 September 2026 Module page
1. Simulating the discrete laws
Every simulation in this book rests on one ability: turning a named distribution into a stream of
sample values. This chapter builds that ability for the classic discrete laws you already know analyt-
ically — the uniform, Bernoulli, geometric, binomial and Poisson — and shows how to read a law’s
behaviour back from its samples, checking the simulation against the theory you have already met.


## 1.1. The generator, and one line per law


All randomness in this course flows from NumPy’s numpy.random module, which we alias rd. We
seed it once, so the whole book is reproducible: run it again and every number returns identical.
import numpy as np
import numpy.random as rd
rd.seed(20260730)
From rd, each classic discrete law is a single call. The table below draws a large sample from each and
reports two summaries — the sample mean and sample variance — beside the theoretical mean and
variance you can compute from the law’s formula. The Law of Large Numbers (Chapter 3) guarantees
these must nearly agree once the sample is large.
# Each classic discrete law has a one-line sampler on rd. Draw a large sample
# from each, then read its behaviour back from the sample: the sample mean and
# variance should sit close to the law's theoretical mean and variance.
n = 100000
samples = {
"Uniform{1..6}": rd.randint(1, 7, size=n), # a fair die
"Bernoulli(0.3)": rd.binomial(n=1, p=0.3, size=n), # one trial
"Geometric(0.25)": rd.geometric(0.25, size=n), # trials to 1st success
"Binomial(10, 0.3)": rd.binomial(n=10, p=0.3, size=n), # successes in 10 trials
"Poisson(4)": rd.poisson(4, size=n), # events per interval
}
theory = { # (mean, variance)
"Uniform{1..6}": (3.5, 35 / 12),
"Bernoulli(0.3)": (0.3, 0.3 * 0.7),
"Geometric(0.25)": (1 / 0.25, (1 - 0.25) / 0.25 ** 2),
"Binomial(10, 0.3)": (10 * 0.3, 10 * 0.3 * 0.7),
"Poisson(4)": (4, 4),
}
head = "{:<18}{:>12}{:>12}{:>12}{:>12}"
row = "{:<18}{:>12.3f}{:>12.3f}{:>12.3f}{:>12.3f}"
print(head.format("law", "mean (sim)", "mean (thy)", "var (sim)", "var (thy)"))
for name in samples:
x = samples[name]
m_thy, v_thy = theory[name]
print(row.format(name, np.mean(x), m_thy, np.var(x, ddof=1), v_thy))
5

Version of 13 September 2026 Module page
law mean (sim) mean (thy) var (sim) var (thy)
Uniform{1..6} 3.498 3.500 2.922 2.917
Bernoulli(0.3) 0.299 0.300 0.210 0.210
Geometric(0.25) 3.983 4.000 11.967 12.000
Binomial(10, 0.3) 3.000 3.000 2.091 2.100
Poisson(4) 3.994 4.000 4.002 4.000
Every simulated mean and variance sits within a percent or two of its theoretical value: the samplers
are faithful. Reading the columns across is the skill this chapter trains — the sample is a window onto
the law, and its summaries recover the law’s parameters.
Method 1 (Simulating a discrete law and checking it).
1. Pick the rd sampler for the law and its parameters (e.g. rd.poisson(4, size=n)).
2. Draw a large sample of size 𝑛 (here 𝑛 = 100000).
3. Compute sample summaries — np.mean(x), np.var(x, ddof=1), or the fraction of draws
equal to each value — and compare them to the law’s theoretical mean, variance, or pmf.
4. Large gaps signal a wrong sampler, wrong parameters, or too small an 𝑛.
Remark. The samplers use conventions worth pinning down. rd.randint(1, 7, size=n)
draws integers from 1 to 6 (the upper end is excluded) — a fair die. rd.geometric(p, size=n)
counts the number of trials up to and including the first success, so its support starts at 1 and its
mean is 1/𝑝; a different convention (failures before the first success) would start at 0. Always
confirm which convention a function uses before trusting its output.
Remark. NumPy also offers a newer generator interface, whose rng.integers(low, high,
size) is this course’s rd.randint(low, high, size), both excluding the upper bound.


## 1.2. Reading the shape, not just the summaries


Mean and variance are two numbers; the whole law is its probability mass function, the height at each
possible value. Overlaying the empirical frequencies (the fraction of draws landing on each value) on
the theoretical pmf is the sharpest check of all.
6

Version of 13 September 2026 Module page
Figure 1: Each classic discrete law, simulated. Bars are the empirical frequencies from 100000 draws;
purple dots are the theoretical pmf. Left to right: the uniform die is flat; Bernoulli puts mass 0.3 on
1 and 0.7 on 0; the geometric law decays geometrically from its mode at 1; the binomial is a bump
centred near 𝑛𝑝 = 3; the Poisson is the right-skewed count law with mean 4. Bars track dots every-
where — the simulation reproduces each law’s shape.
The pictures make each law’s characteristic shape easy to read: the geometric law’s steady decay (each
extra trial is less likely than the last), the binomial’s symmetric-ish bump, the Poisson’s right skew.
These are exactly the shapes your earlier course described with formulas; here they are recovered
from samples alone.
Pitfall. A simulated frequency is itself random. With a small sample the bars jump around the
true pmf, and a law can look wrong when only the sample is small. Before concluding a sampler
is broken, enlarge 𝑛: genuine agreement should sharpen as the sample grows (the precise rate is
the subject of Chapter 3). Judging a law from a few hundred draws is the commonest beginner
error here.
7
