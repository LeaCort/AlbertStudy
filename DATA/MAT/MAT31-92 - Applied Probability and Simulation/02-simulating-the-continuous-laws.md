# 2. Simulating the continuous laws

*Source: MAT31-92 - Applied Probability and Simulation - Textbook.pdf, pages 8-12*

Version of 13 September 2026 Module page
2. Simulating the continuous laws
The continuous laws are simulated exactly as the discrete ones were — one rd call per law — but the
check against theory changes shape. A continuous law has no pmf to match value by value; instead
its sample is summarised by a histogram, whose outline should trace the law’s density. This chapter
draws the classic continuous laws — uniform, exponential, normal and Pareto — compares each
histogram to the density it should match, and ends with the single construction every sampler in the
book rests on.


## 2.1. From samples to a density


# The continuous laws are sampled the same way, one call on rd per law.
n = 100000
uniform = rd.uniform(low=0, high=1, size=n) # Uniform(0, 1)
exponential = rd.exponential(scale=1 / 1.5, size=n) # Exponential(rate = 1.5)
normal = rd.normal(loc=2.0, scale=0.8, size=n) # Normal(mu = 2, sigma = 0.8)
pareto = 1 + rd.pareto(2.5, size=n) # Pareto(x_min = 1, a = 2.5);
# rd.pareto starts at 0, the
# 1 + shifts the minimum to 1
line = "{:<15} sample mean {:7.3f} theory {:7.3f}"
print(line.format("Uniform(0,1)", np.mean(uniform), 0.5))
print(line.format("Exponential", np.mean(exponential), 1 / 1.5))
print(line.format("Normal(2,0.8)", np.mean(normal), 2.0))
print(line.format("Pareto(1,2.5)", np.mean(pareto), 2.5 / (2.5 - 1)))
Uniform(0,1) sample mean 0.500 theory 0.500
Exponential sample mean 0.665 theory 0.667
Normal(2,0.8) sample mean 1.999 theory 2.000
Pareto(1,2.5) sample mean 1.667 theory 1.667
The sample means land on their theoretical values, but a mean is a shape-blind summary: it fixes
the centre and says nothing about the spread or the tail. For a continuous law the sharpest check is
visual — overlay the sample’s density histogram on the theoretical density it should match.
Definition 1 (Density histogram). A density histogram of a sample divides the range into bins
and draws, over each bin, a bar whose area equals the fraction of the sample falling in it. The
total area is 1, so the bars are directly comparable to a theoretical density 𝑓: for a faithful sample,
the bar heights trace the curve 𝑓(𝑥).
Turning a histogram into a density one is a single argument, density=True; the theoretical curve is
then the law’s density formula, written out by hand. For the exponential:
import matplotlib.pyplot as plt
# A density histogram has bar AREAS summing to 1, so it is directly comparable
8

Version of 13 September 2026 Module page
# to a density curve. Here: the exponential sample against its density
# f(x) = 1.5 e^{-1.5 x}, written out by hand.
xs = np.linspace(0, 4, 200)
plt.hist(exponential, bins=60, density=True) # area-1 bars
plt.plot(xs, 1.5 * np.exp(-1.5 * xs)) # the Exponential(1.5) density
plt.show()
The recipe needs each law’s density in closed form. Three of the four you already carry: the uniform’s
is the flat height 1 on [0,1], the exponential’s is the 1.5𝑒−1.5𝑥 just written out, and the normal’s is the
bell 𝑓(𝑥) =
1 𝑒−(𝑥−𝜇)2/(2𝜎2)
of your earlier course. The fourth, the Pareto, is new to this course, so
𝜎√2𝜋
we state it in full.
Definition 2 (Pareto law with minimum 1). For a tail index 𝑎 > 0, the Pareto law with
minimum 1 is the continuous law supported on [1,∞) whose density is
𝑎𝑥−(𝑎+1) for 𝑥 ≥ 1
𝑓(𝑥) = { .
0 for 𝑥 < 1
Applied to all four laws at once, the recipe gives the comparison below.
Figure 2: Each classic continuous law, simulated. Bars are density histograms of 100000 draws; the
purple curve is the theoretical density. The uniform law is flat on [0,1]; the exponential falls off at a
constant proportional rate; the normal is the familiar symmetric bell; the Pareto has a sharp peak at
its minimum and a long right tail (shown truncated at 6 — the sample reaches far beyond). Every
histogram tracks its density.
Reading Figure 2 fluently is the skill this chapter trains: recognise the flat uniform, the memoryless
exponential decay, the symmetric normal bell, and the heavy-tailed Pareto. The last is the one to
internalise — a power-law tail that a normal-shaped intuition badly under-estimates. Change a
parameter or swap in a new law and the same loop redraws the comparison.
Pitfall (The bin count changes the picture). A histogram is not the data — it is a choice.
Too few bins hide structure (a bimodal sample can look flat); too many make every bar a spike
of noise. When a histogram looks surprising, redraw it with a different bin count before drawing
a conclusion. The density it should match is fixed; the histogram is only an estimate of it.
9

Version of 13 September 2026 Module page


## 2.2. Why the tail matters


The exponential and the Pareto both live on [0,∞) and both slope downward, but they behave very
differently. The exponential’s tail decays exponentially — extreme values are essentially impossible.
The Pareto’s tail decays only as a power of 𝑥, so very large values, while rare, appear far more often;
the largest of 100000 draws reaches tens of times above the mean, a spread no exponential sample
ever shows. This distinction drives whole fields (insurance, finance, network traffic).
What does such a tail do to our summaries? It is tempting to say “it makes the sample mean
unreliable” — but that is only half true, and simulation, the course’s own arbiter, says which half. For
the Pareto(1,2.5) used here the tail index 2.5 exceeds 2, so both the mean and the variance are finite
we can therefore check each by redrawing the same kind of sample many times over and watching
how much it moves:
one sample : mean = 1.66, median = 1.32
sample mean across 400 samples: spread 0.26%
sample variance across 400 samples: spread 92.24%
The sample mean barely stirs — a spread well under a percent across samples — because a finite
variance hands it the ordinary 1/√𝑛 standard error of Chapter 3. Here it is a perfectly stable estimator.
What genuinely swings is the sample variance: its own variability rests on the fourth moment, which
the Pareto owns only when the index exceeds 4, so at 2.5 it swings from sample to sample by tens of
percent.
The mean is still a poor typical value — but for a descriptive reason, not an instability one. The long
tail pulls it above the bulk of the data, so it sits above the median (1.32 versus a mean of 1.66 on
the sample above). To say where a heavy-tailed sample sits, report the median or read the histogram;
keep the mean for what it is — the balance point the tail drags rightward.
Remark. Push the tail index down and two thresholds matter, not one. Below index 2 the
variance becomes infinite: the 1/√𝑛 standard error no longer exists and the √𝑛-shaped Central
Limit Theorem fails. The sample mean still converges to the true mean — the Law of Large
Numbers asks only for a finite mean, which the Pareto keeps for every index above 1 — but it
does so more slowly and more erratically than the 1/√𝑛 rate. Only when the index drops to 1
or below does the mean itself become infinite and the sample mean stop settling altogether, a
genuinely inconsistent estimator. The pathology is real, but it arrives in two stages: an unreliable
√𝑛 error already at index ≤ 2, and a non-settling mean only at index ≤ 1.


## 2.3. Where the samples come from: inverting the CDF


Every rd call in this book hides one mechanism. NumPy knows how to make uniform numbers on
[0,1]; every other continuous law is built from those by a single trick — pass a uniform draw through
the inverse of the target law’s CDF.
Example — an exponential out of a uniform. The exponential law of rate 1.5 has CDF 𝐹(𝑥) =
1−𝑒−1.5𝑥. Solving 𝑢 = 𝐹(𝑥) for 𝑥 inverts it to 𝑥 = −ln(1−𝑢)/1.5. So draw 𝑈 ∼ Uniform(0,1) and
set 𝑋 = −ln(1−𝑈)/1.5: an exponential, with no exponential sampler called.
10

Version of 13 September 2026 Module page
# Exponential(rate 1.5) has CDF F(x) = 1 - e^{-1.5 x}, which inverts to
# F^{-1}(u) = -ln(1 - u) / 1.5. Feed the `uniform` sample from above through it:
# no exponential sampler is called, yet the result IS an Exponential(1.5).
inv_exp = -np.log(1 - uniform) / 1.5
print("via F^-1 of Uniform : mean {:.3f}, P(X>1) {:.3f}".format(
np.mean(inv_exp), np.mean(inv_exp > 1)))
print("via rd.exponential : mean {:.3f}, P(X>1) {:.3f}".format(
np.mean(exponential), np.mean(exponential > 1)))
print("theory : mean {:.3f}, P(X>1) {:.3f}".format(
1 / 1.5, np.exp(-1.5)))
via F^-1 of Uniform : mean 0.667, P(X>1) 0.222
via rd.exponential : mean 0.665, P(X>1) 0.223
theory : mean 0.667, P(X>1) 0.223
The sample built by inverting the CDF matches the one rd.exponential returns — same mean, same
tail probability ℙ(𝑋 > 1), same shape:
Figure 3: The inverse-transform sample −ln(1−𝑈)/1.5 (bars), reshaped from Uniform(0,1) draws
alone, against the Exponential(1.5) density (purple). They coincide — exactly the construction the
theorem below justifies.
Why must this work, for any law? The claim is a theorem, and its proof is three steps.
Theorem 1 (CDF inversion). Let 𝐹 be a continuous, strictly increasing CDF with inverse 𝐹−1,
and let 𝑈 ∼ Uniform(0,1). Then 𝑋 = 𝐹−1(𝑈) has CDF 𝐹:
ℙ(𝑋 ≤ 𝑡) = 𝐹(𝑡) for all 𝑡 ∈ ℝ.
Proof. Fix 𝑡 ∈ ℝ.
Write the event on 𝑋. By the definition of 𝑋, namely 𝑋 = 𝐹−1(𝑈), the event 𝑋 ≤ 𝑡 is the event
𝐹−1(𝑈) ≤ 𝑡.
11

Version of 13 September 2026 Module page
Turn it into an event on 𝑈. Because 𝐹 is strictly increasing it is order-preserving, and so is 𝐹−1;
applying 𝐹 to both sides of 𝐹−1(𝑈) ≤ 𝑡, and using 𝐹(𝐹−1(𝑈)) = 𝑈, turns it into 𝑈 ≤ 𝐹(𝑡). The two
events are therefore the same:
{𝑋 ≤ 𝑡} = {𝑈 ≤ 𝐹(𝑡)}.
Read its probability off the uniform CDF. For a Uniform(0,1) variable, ℙ(𝑈 ≤ 𝑎) = 𝑎 for every 𝑎 ∈
[0,1], and 𝐹(𝑡) ∈ [0,1] because 𝐹 is a CDF. Hence
ℙ(𝑋 ≤ 𝑡) = ℙ(𝑈 ≤ 𝐹(𝑡))
= 𝐹(𝑡),
which says exactly that 𝑋 has CDF 𝐹. □
Remark. This inverse-transform method is the engine under rd.exponential, rd.uniform and
the Pareto: a uniform stream, reshaped by an inverse CDF. It needs 𝐹−1 in closed form —
available for those laws, but not the normal, whose CDF has no elementary inverse (NumPy
reaches the normal by a different, faster construction).
12
