# Preface

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 4*

Version of 13 September 2026 Module page
Preface
Your previous probability course gave you the classic laws, the Law of Large Numbers, the Central
Limit Theorem, confidence intervals and hypothesis tests as results you computed by hand — an
integral, a table lookup, a formula. This course puts the computer in that place: it generates the
randomness and you read the answer off the sample. By the end you will be able to
• simulate each classic discrete law (uniform, Bernoulli, geometric, binomial, Poisson) and each
classic continuous law (uniform, exponential, normal, Pareto) in Python, and read a law’s behav-
iour back from its sample;
• watch the Law of Large Numbers and the Central Limit Theorem emerge from simulated samples,
and put a number on the sampling error the CLT governs;
• derive, by maximising the log-likelihood, the closed-form maximum-likelihood estimators of the
Bernoulli, Poisson and exponential parameters, and check an estimator’s consistency, variance
decay and asymptotic normality by simulation;
• run a chi-square test — for goodness of fit, or for the independence of two categorical variables —
and a z- or t-test comparing a mean or a proportion against a benchmark or between two groups,
and size an experiment before running it;
• prove the CDF Inversion Theorem, the one construction behind every sampler in the book;
• recognise the two resampling ideas, the bootstrap and the permutation test, and say when each
applies.
Two things this book leans on but never reteaches: fluency with short Python written in numpy and
matplotlib, and the probability your earlier course established — the classic laws, the Law of Large
Numbers and the Central Limit Theorem, confidence intervals and hypothesis tests. Bring both; every
chapter puts them to work, and none rebuilds them.
One discipline runs through all of it: an estimate is not an answer until it carries its uncertainty.
Producing that uncertainty alongside the estimate, by simulation, is the craft this course teaches.
4
