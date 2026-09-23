# 8. Resampling methods

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 30-31*

Version of 13 September 2026 Module page
8. Resampling methods
Every technique so far needed either a formula for a statistic’s variability or a known law to simulate
from. Two ideas dispense with both, drawing the variability from the data itself by reusing the sample
in a different way each time. They are the bootstrap and the permutation test. This chapter is a
conceptual tour: what each does, and when each applies.


## 8.1. The bootstrap: resample with replacement


Principle 3 (The bootstrap idea). When you cannot draw fresh samples from the true popu-
lation, draw them from the best stand-in you have — the observed dataset. Sampling 𝑛 values
with replacement from the data, over and over, produces many alternative datasets the world
might have given you; computing the statistic on each shows how much it varies. The spread of
those values estimates the standard error of the statistic, and their percentiles give a confidence
interval.
Sampling with replacement is the whole point: each resample repeats some observed values and omits
others, a plausible alternative sample, rather than merely reordering the same values. The bootstrap’s
reach is that it never inspects which statistic it is handed — a median, a 90th percentile, a correlation
— so it supplies a standard error and an interval even where no textbook formula exists.
Pitfall (What the bootstrap cannot do). A resample can only contain values the original
sample already holds, so the bootstrap cannot manufacture diversity the data lack. It underes-
timates variability when 𝑛 is small, mis-states it for heavy-tailed data whose tail the sample
under-represents, and fails outright for the sample maximum, whose resampled version can
never exceed the observed maximum.


## 8.2. The permutation test: reshuffle without replacement


Principle 4 (The permutation idea). Under the null hypothesis that two groups are drawn
from the same distribution, the group labels are exchangeable: which observations were labelled
“A” and which “B” was arbitrary. So to see what chance alone produces, pool the data and
reshuffle the labels — reassign them at random, without replacement, to the same pooled values
— and recompute the difference between the groups. Repeating this builds the null distribution
of the difference directly from the data; the observed difference is significant when it sits far out
in that distribution’s tail.
Reshuffling without replacement is what makes this a test rather than a measure of uncertainty:
it keeps the pooled values fixed and only relabels them, exactly what the null hypothesis says is
arbitrary. Its one requirement is exchangeability under the null — the pooled observations must be
interchangeable if 𝐻 is true. This holds for a randomised two-group comparison but breaks when
0
the groups differ in some structured way the shuffle destroys (paired data, for instance, are permuted
within pairs, not across).
30

Version of 13 September 2026 Module page


## 8.3. Which to reach for


Framework 1 (Bootstrap vs. permutation).
• The bootstrap resamples with replacement, each resample the same size as the data. It estimates
the variability of an estimator — a standard error or confidence interval. It answers how
uncertain is my estimate?
• The permutation test reshuffles labels without replacement, keeping the pooled values fixed.
It builds the null distribution of a test statistic. It answers could chance alone explain this
difference?
Both are Monte Carlo on the data itself, and both express the course’s guiding habit — before
a decision rests on a number, build the distribution of what chance alone produces and hold the
observation up against it. The bootstrap builds it for an estimate the permutation test builds it for a
difference.
31
