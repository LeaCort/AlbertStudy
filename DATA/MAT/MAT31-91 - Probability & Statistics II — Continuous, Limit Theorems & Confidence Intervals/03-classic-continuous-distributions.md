# 3. Classic continuous distributions

*Source: MAT31-91 - Probability & Statistics II — Continuous, Limit Theorems & Confidence Intervals - Textbook.pdf, pages 11-18*

Version of 13 September 2026 Module page
3. Classic continuous distributions
Just as four discrete families covered most discrete phenomena, a small catalogue of continuous
distributions covers most continuous ones. We derive each from its modelling assumption, exactly
the discipline of the discrete theory: the formula should feel inevitable, not memorised.


## 3.1. The uniform distribution


Definition 5 (uniform distribution). 𝑋 ∼ Unif(𝑎,𝑏) is “no preference within [𝑎,𝑏]”: its
density is constant,
1
𝑓 (𝑥) = for𝑎 ≤ 𝑥 ≤ 𝑏, 0otherwise.
𝑋 𝑏−𝑎
Then 𝔼(𝑋) = (𝑎+𝑏)/2 (the midpoint) and 𝕍(𝑋) = (𝑏−𝑎) 2/12.
The constant height 1/(𝑏−𝑎) is forced by total area 1. The uniform is the continuous analogue of
equiprobability, and — crucially for the last chapter — it is the output of a standard random-number
generator, the raw material from which every other distribution will be simulated.


## 3.2. The exponential distribution and memorylessness


Example — waiting for the next bus. Buses arrive “at random” at an average rate of 𝜆 per hour,
with no schedule — how long you have already waited tells you nothing about how long is left. Let
𝑇 be the time you wait. Slice the wait into tiny steps of length ℎ; in each step a bus either comes
or not, independently, with probability 𝜆ℎ (rate × duration). Waiting longer than 𝑡 then means no
bus in any of its 𝑛 = 𝑡/ℎ steps — a geometric waiting time — so
ℙ(𝑇 > 𝑡) = (1−𝜆ℎ) 𝑡/ℎ → 𝑒−𝜆𝑡 asℎ → 0,
using (1−𝜆ℎ) 1/ℎ → 𝑒−𝜆. Hence the survival function is ℙ(𝑇 > 𝑡) = 𝑒−𝜆𝑡, the CDF is 𝐹 (𝑡) = 1−
𝑇
𝑒−𝜆𝑡, and differentiating gives the density.
Definition 6 (exponential distribution). 𝑇 ∼ Exp(𝜆) models the waiting time for an event
that occurs at random with a constant average rate 𝜆 > 0:
𝑓 (𝑡) = 𝜆𝑒−𝜆𝑡, 𝐹 (𝑡) = 1−𝑒−𝜆𝑡 (𝑡 ≥ 0).
𝑇 𝑇
Its mean and standard deviation are both 1/𝜆: 𝔼(𝑇) = 1/𝜆 and 𝕍(𝑇) = 1/𝜆2.
The mean 1/𝜆 is intuitive: at rate 𝜆 events per hour you wait on average 1/𝜆 hours — the continuous
echo of the geometric mean 1/𝑝. Indeed the exponential is the continuous limit of the geometric,
and it inherits the geometric’s defining quirk.
11

Version of 13 September 2026 Module page
Theorem 2 (Memorylessness of the exponential). The exponential distribution is memo-
ryless:
ℙ(𝑇 > 𝑠+𝑡|𝑇 > 𝑠) = ℙ(𝑇 > 𝑡) for all𝑠,𝑡 ≥ 0.
Proof. The survival function is 𝐺(𝑡) = ℙ(𝑇 > 𝑡) = 𝑒−𝜆𝑡, from the example above. By the definition of
conditional probability,
ℙ(𝑇 > 𝑠+𝑡and𝑇 > 𝑠)
ℙ(𝑇 > 𝑠+𝑡|𝑇 > 𝑠) = .
ℙ(𝑇 > 𝑠)
The event {𝑇 > 𝑠+𝑡} is contained in {𝑇 > 𝑠}, so their intersection is {𝑇 > 𝑠+𝑡} itself and the numer-
ator is simply ℙ(𝑇 > 𝑠+𝑡). Substituting the survival function and simplifying the exponentials,
ℙ(𝑇 > 𝑠+𝑡) 𝑒−𝜆(𝑠+𝑡)
ℙ(𝑇 > 𝑠+𝑡|𝑇 > 𝑠) = = = 𝑒−𝜆𝑡 = ℙ(𝑇 > 𝑡).
ℙ(𝑇 > 𝑠) 𝑒−𝜆𝑠
The exponential turns the sum 𝑠+𝑡 in the exponent into a product, which is exactly the factor the
conditioning divides away. □
Remark (and it is the only memoryless continuous law). The converse holds too, so
memorylessness characterizes the exponential. Write the survival function 𝐺(𝑡) = ℙ(𝑇 > 𝑡).
The memoryless condition is exactly the multiplicative equation
𝐺(𝑠+𝑡) = 𝐺(𝑠)𝐺(𝑡) for all𝑠,𝑡 ≥ 0,
and the only decreasing solutions with 𝐺(0) = 1 are the exponentials 𝐺(𝑡) = 𝑒−𝜆𝑡 (a sum in the
argument becoming a product in the value forces this form, exactly as 2𝑠+𝑡 = 2𝑠2𝑡). Hence any
memoryless continuous lifetime on [0,∞) must be Exp(𝜆). We use only the forward direction
above; the converse is what lets us say the exponential — and nothing else — models “no ageing”.
Remark (the exponential is the geometric's continuous limit). The derivation of the bus
example is exactly the geometric law refined to continuous time. The geometric is the discrete
memoryless law — waiting for the first success in independent trials, with ℙ(𝑁 > 𝑛) = (1−𝑝) 𝑛
— and shrinking the trial length ℎ turns its (1−𝑝) 𝑛 into the exponential’s 𝑒−𝜆𝑡: the same mem-
oryless mechanism, discrete trials refined into continuous time. This is why the exponential’s
mean 1/𝜆 mirrors the geometric mean 1/𝑝.
Pitfall. Memorylessness is deeply counter-intuitive and a common source of error. A lightbulb
with exponential lifetime that has already worked for 1000 hours has, probabilistically, the
same remaining life as a brand-new bulb: its future lifetime has the same distribution as a fresh
bulb’s. This is a property of the model, appropriate for things that fail by sudden random
shocks (radioactive decay, memoryless queues) but wrong for things that wear out (human
lifespans, mechanical fatigue), whose failure rate rises with age. Choosing the exponential
asserts “no ageing”.
12

Version of 13 September 2026 Module page
𝑓
𝑇
𝑓 (𝑡)=𝜆𝑒−𝜆𝑡
𝑇
1/𝜆 𝑡
Figure 3: The exponential density for 𝜆 = 1. It is highest at 𝑡 = 0 and decays at a constant relative
rate — the geometric signature of “no ageing”. The mean 1/𝜆 lies to the right of the peak because the
long right tail pulls the balance point outward.


## 3.3. The normal distribution


The normal (Gaussian) distribution is the centrepiece of the course. It will emerge inevitably from
the Central Limit Theorem in Chapter 5; here we meet its shape and learn to compute with it.
Example — the spread of adult heights. Record the heights of a large group of adults and
plot how they cluster. The histogram is a single smooth hump: symmetric about a central value,
with most people close to it and steadily fewer as you move out, falling away at the same rate
on each side — no second peak, no long tail on one side only. Countless quantities scatter this
way: repeated readings of one fixed length blurred by measurement error, or any total built from
many small independent effects. This recurring bell shape is the normal distribution, and the
definition below gives the exact curve that models it.
Definition 7 (normal distribution). 𝑋 ∼ 𝒩︀(𝜇,𝜎2) has the bell-shaped density
1 (𝑥−𝜇) 2
𝑓 (𝑥) = exp(− ), 𝑥 ∈ ℝ.
𝑋 2𝜎2
𝜎√2𝜋
Its parameters are exactly its mean and variance: 𝔼(𝑋) = 𝜇, 𝕍(𝑋) = 𝜎2. The curve is symmetric
about 𝜇, with inflection points at 𝜇±𝜎.
The two parameters do the obvious geometric jobs: 𝜇 locates the peak, 𝜎 sets the width. The pref-
actor 1/(𝜎√2𝜋) is the normalising constant that makes the total area 1 — and as noted in Chapter 1,
the integral ∫𝑒−𝑥2/2d𝑥 = √2𝜋 cannot be found by an elementary antiderivative. We meet it, and the
variations of it you will need to compute, in Section 3.3.3 below.


### 3.3.1. Standardization


Because no antiderivative exists, normal probabilities are read from a table (or a calculator). We
cannot tabulate every (𝜇,𝜎), so we reduce every normal to a single one by standardizing.
Theorem 3 (Standardization). If 𝑋 ∼ 𝒩︀(𝜇,𝜎2), then
𝑋 −𝜇
𝑍 = ∼ 𝒩︀(0,1),
𝜎
the standard normal. Consequently
13

Version of 13 September 2026 Module page
𝑥−𝜇 𝑥−𝜇
ℙ(𝑋 ≤ 𝑥) = ℙ(𝑍 ≤ ) = Φ( ),
𝜎 𝜎
where Φ is the standard normal CDF, the tabulated function.
Subtracting 𝜇 re-centres the variable at 0; dividing by 𝜎 rescales it to unit spread. The transformed
value 𝑧 = (𝑥−𝜇)/𝜎 — the 𝑧-score — answers “how many standard deviations above the mean is
𝑥?”, a unit-free question whose answer is the same for every normal.
Example — test scores. Exam marks are 𝒩︀(𝜇 = 500,𝜎2 = 1002). What fraction of candidates
score above 650? Standardize: 𝑧 = (650−500)/100 = 1.5. So ℙ(𝑋 > 650) = ℙ(𝑍 > 1.5) = 1−
Φ(1.5) ≈ 1−0.9332 = 0.0668 — about 6.7%. The raw mark 650 became the universal statement
“1.5 standard deviations above average”, and the table supplied the probability.
The following table gives Φ(𝑧) = ℙ(𝑍 ≤ 𝑧) for the standard normal. Read it by splitting 𝑧 into its first
two digits (the row) and its second decimal (the column): for example Φ(1.96) sits in row 1.9, column
.06, giving 0.9750.
𝑧 .00 .01 .02 .03 .04 .05 .06 .07 .08 .09
0.0 .5000 .5040 .5080 .5120 .5160 .5199 .5239 .5279 .5319 .5359
0.1 .5398 .5438 .5478 .5517 .5557 .5596 .5636 .5675 .5714 .5753
0.2 .5793 .5832 .5871 .5910 .5948 .5987 .6026 .6064 .6103 .6141
0.3 .6179 .6217 .6255 .6293 .6331 .6368 .6406 .6443 .6480 .6517
0.4 .6554 .6591 .6628 .6664 .6700 .6736 .6772 .6808 .6844 .6879
0.5 .6915 .6950 .6985 .7019 .7054 .7088 .7123 .7157 .7190 .7224
0.6 .7257 .7291 .7324 .7357 .7389 .7422 .7454 .7486 .7517 .7549
0.7 .7580 .7611 .7642 .7673 .7704 .7734 .7764 .7794 .7823 .7852
0.8 .7881 .7910 .7939 .7967 .7995 .8023 .8051 .8078 .8106 .8133
0.9 .8159 .8186 .8212 .8238 .8264 .8289 .8315 .8340 .8365 .8389
1.0 .8413 .8438 .8461 .8485 .8508 .8531 .8554 .8577 .8599 .8621
1.1 .8643 .8665 .8686 .8708 .8729 .8749 .8770 .8790 .8810 .8830
1.2 .8849 .8869 .8888 .8907 .8925 .8944 .8962 .8980 .8997 .9015
1.3 .9032 .9049 .9066 .9082 .9099 .9115 .9131 .9147 .9162 .9177
1.4 .9192 .9207 .9222 .9236 .9251 .9265 .9279 .9292 .9306 .9319
1.5 .9332 .9345 .9357 .9370 .9382 .9394 .9406 .9418 .9429 .9441
1.6 .9452 .9463 .9474 .9484 .9495 .9505 .9515 .9525 .9535 .9545
1.7 .9554 .9564 .9573 .9582 .9591 .9599 .9608 .9616 .9625 .9633
1.8 .9641 .9649 .9656 .9664 .9671 .9678 .9686 .9693 .9699 .9706
1.9 .9713 .9719 .9726 .9732 .9738 .9744 .9750 .9756 .9761 .9767
2.0 .9772 .9778 .9783 .9788 .9793 .9798 .9803 .9808 .9812 .9817
2.1 .9821 .9826 .9830 .9834 .9838 .9842 .9846 .9850 .9854 .9857
2.2 .9861 .9864 .9868 .9871 .9875 .9878 .9881 .9884 .9887 .9890
2.3 .9893 .9896 .9898 .9901 .9904 .9906 .9909 .9911 .9913 .9916
2.4 .9918 .9920 .9922 .9925 .9927 .9929 .9931 .9932 .9934 .9936
2.5 .9938 .9940 .9941 .9943 .9945 .9946 .9948 .9949 .9951 .9952
2.6 .9953 .9955 .9956 .9957 .9959 .9960 .9961 .9962 .9963 .9964
2.7 .9965 .9966 .9967 .9968 .9969 .9970 .9971 .9972 .9973 .9974
2.8 .9974 .9975 .9976 .9977 .9977 .9978 .9979 .9979 .9980 .9981
2.9 .9981 .9982 .9982 .9983 .9984 .9984 .9985 .9985 .9986 .9986
3.0 .9987 .9987 .9987 .9988 .9988 .9989 .9989 .9989 .9990 .9990
3.1 .9990 .9991 .9991 .9991 .9992 .9992 .9992 .9992 .9993 .9993
3.2 .9993 .9993 .9994 .9994 .9994 .9994 .9994 .9995 .9995 .9995
3.3 .9995 .9995 .9995 .9996 .9996 .9996 .9996 .9996 .9996 .9997
3.4 .9997 .9997 .9997 .9997 .9997 .9997 .9997 .9997 .9997 .9998
For negative 𝑧, symmetry gives Φ(−𝑧) = 1−Φ(𝑧), so the table need only list 𝑧 ≥ 0. Two values are
worth memorising because they recur in every confidence interval: Φ(1.645) ≈ 0.95 and Φ(1.96) ≈
0.975.
14

Version of 13 September 2026 Module page
Pitfall. The table gives Φ(𝑧) = ℙ(𝑍 ≤ 𝑧), the area to the left. For a right tail use ℙ(𝑍 > 𝑧) =
1−Φ(𝑧); for a two-sided range use ℙ(−𝑧 ≤ 𝑍 ≤ 𝑧) = 2Φ(𝑧)−1; and for negative arguments
use Φ(−𝑧) = 1−Φ(𝑧). Forgetting which tail you are in is the single most common error in this
chapter — always sketch the bell curve and shade the region you want before reaching for a
number.


### 3.3.2. The 68–95–99.7 rule


Proposition 3 (the empirical rule). For any normal variable,
ℙ(𝜇−𝜎 ≤ 𝑋 ≤ 𝜇+𝜎) ≈ 68%,
ℙ(𝜇−2𝜎 ≤ 𝑋 ≤ 𝜇+2𝜎) ≈ 95%,
ℙ(𝜇−3𝜎 ≤ 𝑋 ≤ 𝜇+3𝜎) ≈ 99.7%.
These follow directly from the table: 2Φ(1)−1 ≈ 0.68, 2Φ(2)−1 ≈ 0.954, 2Φ(3)−1 ≈ 0.997. The
rule is the fastest sanity-check in statistics: a normal value almost never strays beyond three standard
deviations, and a value two deviations out is already a one-in-twenty event.
−3𝜎 −2𝜎 −𝜎 𝜇 𝜎 2𝜎 3𝜎
68%
95%
99.7%
Figure 4: The 68–95–99.7 rule. The three brackets below the axis span one, two and three standard
deviations either side of the mean; the percentage on each is the total mass inside that span — about
68%, 95% and 99.7%. A value beyond 3𝜎 is genuinely rare.


### 3.3.3. The Gaussian integral and its variations


Because the bell curve has no elementary antiderivative, the very fact that it is a density — that it
integrates to 1 — rests on one remarkable definite integral.
Theorem 4 (the Gaussian integral).
∞
∫ 𝑒−𝑥2/2d𝑥 = √2𝜋.
−∞
With no antiderivative to evaluate, the usual method is unavailable. The trick is to compute the
square of the integral as a double integral and pass to polar coordinates — we sketch it as motivation
only; the details are not examinable. Writing 𝐼 for the integral and using a dummy variable 𝑦 for the
second copy,
15

Version of 13 September 2026 Module page
∞ ∞
𝐼2 = (∫ 𝑒−𝑥2/2d𝑥)(∫ 𝑒−𝑦2/2d𝑦) = ∬ 𝑒−(𝑥2+𝑦2)/2d𝑥d𝑦.
−∞ −∞ ℝ2
In polar coordinates 𝑥2+𝑦2 = 𝑟2 and the area element is d𝑥d𝑦 = 𝑟d𝑟d𝜃, so the integrand becomes
𝑒−𝑟2/2𝑟 — which does have an elementary antiderivative, −𝑒−𝑟2/2:
2𝜋 ∞ 2𝜋
𝐼2 = ∫ ∫ 𝑒−𝑟2/2𝑟d𝑟d𝜃 = ∫ 1d𝜃 = 2𝜋,
0 0 0
hence 𝐼 = √2𝜋. The extra factor 𝑟 from the area element is exactly what makes the radial integral
elementary — the whole trick in one line.
What you do need to compute fluently are variations of this integral, reached by two standard moves
that both reduce back to the value √2𝜋.
Method 1 (scaling). For a Gaussian with a width parameter, substitute 𝑥 = 𝜎𝑢 (so d𝑥 = 𝜎d𝑢):
∞ ∞
∫ 𝑒−𝑥2/(2𝜎2)d𝑥 = 𝜎∫ 𝑒−𝑢2/2d𝑢 = 𝜎√2𝜋.
−∞ −∞
This is exactly the calculation the normalising constant undoes: dividing by 𝜎√2𝜋 makes the
𝒩︀(𝜇,𝜎2) density integrate to 1. In the bare form ∫∞ 𝑒−𝑎𝑥2d𝑥 = √𝜋/𝑎 for any 𝑎 > 0 (the case 𝑎 =
−∞
1/(2𝜎2)).
Method 2 (completing the square). For a linear term in the exponent, complete the square.
For 𝑎 > 0,
𝑏 2 𝑏2
−𝑎𝑥2+𝑏𝑥 = −𝑎(𝑥− ) + ,
2𝑎 4𝑎
so, substituting 𝑢 = 𝑥−𝑏/(2𝑎) and using the scaling result,
∞ ∞
𝜋
∫ 𝑒−𝑎𝑥2+𝑏𝑥d𝑥 = 𝑒𝑏2/(4𝑎)∫ 𝑒−𝑎𝑢2d𝑢 = 𝑒𝑏2/(4𝑎).
√𝑎
−∞ −∞
Example — a shifted Gaussian. Compute ∫∞ 𝑒−𝑥2+4𝑥d𝑥. Here 𝑎 = 1 and 𝑏 = 4, so −𝑥2+4𝑥 =
−∞
−(𝑥−2) 2+4 and
∞ ∞
∫ 𝑒−𝑥2+4𝑥d𝑥 = 𝑒4∫ 𝑒−(𝑥−2)2d𝑥 = 𝑒4√𝜋 ≈ 96.8.
−∞ −∞
The shift 𝑥−2 relocates the peak but leaves the area unchanged; the factor 𝑒4 is the height the
completed square pulls outside the integral.
16

Version of 13 September 2026 Module page
3.4. Two distributions for inference: chi-squared and Student-𝑡
The last two families exist to support statistical inference — they describe how sample statistics
behave. We meet them briefly here; the Student-𝑡 returns in Chapter 8, where it replaces the normal
for confidence intervals built from a small sample.
Example — how a sample's spread behaves. Draw a handful of readings from a normal
population and measure how far they scatter, by adding up their squared distances from the centre.
Do it again on a fresh sample and this total comes out different every time: never negative, usually
moderate, now and then large. Its distribution is therefore bunched against zero with a long tail
to the right — nothing like a symmetric bell. That right-skewed shape, arising whenever we sum
squared normal deviations, is what the chi-squared family below describes.
Definition 8 (chi-squared distribution). If 𝑍 ,…,𝑍 are independent standard normals, then
1 𝑘
𝜒2 = 𝑍2+⋯+𝑍2
𝑘 1 𝑘
has the chi-squared distribution with 𝑘 degrees of freedom. It lives on [0,∞), has mean 𝑘
and variance 2𝑘, and is right-skewed.
Being a sum of squares, 𝜒2 is the natural distribution of sample variances and of goodness-of-fit
discrepancies — the basis of tests you will meet in later statistics courses. As 𝑘 grows it becomes
more symmetric, a foretaste of the Central Limit Theorem acting on the squared normals.
Example — locating a mean from a few readings. Suppose you have just eight measurements
and want to pin down their true mean, but you must estimate the spread from those same eight
numbers. Standardizing with the normal law would pretend the spread is known exactly; in reality
your estimate of it wobbles, and on so small a sample that wobble makes large standardized values
turn up more often than the normal predicts. The bell-shaped law with exactly these fatter tails —
the price of not knowing the spread — is the Student-𝑡 below.
Definition 9 (Student-𝑡 distribution). If 𝑍 ∼ 𝒩︀(0,1) and 𝜒2 are independent, then
𝑘
𝑍
𝑇 =
√𝜒
𝑘
2/𝑘
has the Student-𝑡 distribution with 𝑘 degrees of freedom. It is symmetric and bell-shaped
like the normal but with heavier tails; as 𝑘 → ∞ it converges to 𝒩︀(0,1).
The 𝑡-distribution is what we must use in place of the normal when the population variance is
unknown and estimated from a small sample: the extra uncertainty in estimating 𝜎 fattens the tails,
so 𝑡 produces slightly wider — more honest — confidence intervals. For large samples the difference
vanishes and the normal returns.
17

Version of 13 September 2026 Module page
𝒩︀(0,1)
𝑡
3
𝑥
Figure 5: Standard normal (blue) versus Student-𝑡 with 3 degrees of freedom (red). Both are symmet-
ric and bell-shaped, but 𝑡 has a lower peak and heavier tails: extreme values are more probable,
reflecting the extra uncertainty of a small sample. As the degrees of freedom grow, 𝑡 tightens onto
the normal.
18
