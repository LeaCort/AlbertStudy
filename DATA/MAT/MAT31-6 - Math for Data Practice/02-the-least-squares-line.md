# 2. The least-squares line

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 10-14*

Version of 13 September 2026 Module page
2. The least-squares line
Correlation says how tightly the points follow a line; it does not say which line. To predict the sales
of a market we have not yet seen, we need the line itself — a slope and an intercept. This chapter
derives them, from the ground up, as the one line that makes a natural measure of error as small as
possible.


## 2.1. The line and the error to make small


We look for a straight line, written 𝑦 = 𝑎𝑥+𝑏, with slope 𝑎 and intercept 𝑏, that passes as close as
possible to the cloud of points. For a candidate line and a market 𝑖, the vertical gap between the
observed sales 𝑦 and the height 𝑎𝑥 +𝑏 of the line above 𝑥 measures how far the line misses that
𝑖 𝑖 𝑖
point. We want every such gap small at once. Squaring each gap — so that misses above and below the
line cannot cancel, and large misses count for more — and adding gives one number to make small.
Definition 6 (Residual sum of squares). For paired data (𝑥 ,𝑦 ),…,(𝑥 ,𝑦 ), the residual
1 1 𝑛 𝑛
sum of squares of the candidate line 𝑦 = 𝑎𝑥+𝑏 is the value at (𝑎,𝑏) of
RSS : ℝ2 ⟶ ℝ
(𝑎,𝑏) ⟼ ∑ 𝑛 (𝑦 −𝑎𝑥 −𝑏) 2
𝑖=1 𝑖 𝑖
Definition 7 (Least-squares line). The least-squares line is the line 𝑦 = 𝑎𝑥̂ +𝑏 ̂whose slope
𝑎 ̂and intercept 𝑏 ̂make RSS(𝑎,𝑏) as small as possible.
Pitfall. The gaps we square are vertical gaps in 𝑦, not the shortest distances from the points to
the line. Regression treats 𝑥 as known and predicts 𝑦, so the error that matters is the error in 𝑦.
This is also why the line predicting 𝑦 from 𝑥 differs from the line predicting 𝑥 from 𝑦: the two
make gaps small in different directions.


## 2.2. Deriving the slope and the intercept


The function RSS is a smooth function of the two variables 𝑎 and 𝑏. By the method you know for such
functions, any lowest point sits where both partial derivatives are zero. Solving those two equations
pins down a single candidate line.
Theorem 1 (Least-squares estimates). The function RSS(𝑎,𝑏) has exactly one point where
both partial derivatives vanish, and at that point
𝑆 𝑠
𝑎̂= 𝑥𝑦 = 𝑟 𝑦 , 𝑏̂= 𝑦−𝑎̂𝑥.
𝑆 𝑠
𝑥𝑥 𝑥
Proof. We work in four steps.
10

Version of 13 September 2026 Module page
Step 1 — the partial derivative in the intercept. Differentiating in 𝑏 and setting the result to zero,
𝑛
𝜕RSS
= −2∑(𝑦 −𝑎𝑥 −𝑏) = 0.
𝜕𝑏 𝑖 𝑖
𝑖=1
Dividing by −2𝑛 gives 𝑦−𝑎𝑥−𝑏 = 0, that is 𝑏 = 𝑦−𝑎𝑥: the line passes through the point of
averages (𝑥,𝑦).
Step 2 — the partial derivative in the slope. Differentiating in 𝑎 and setting the result to zero,
𝑛 𝑛
𝜕RSS
= −2∑𝑥 (𝑦 −𝑎𝑥 −𝑏) = 0, so ∑𝑥 (𝑦 −𝑎𝑥 −𝑏) = 0.
𝜕𝑎 𝑖 𝑖 𝑖 𝑖 𝑖 𝑖
𝑖=1 𝑖=1
Step 3 — substitute the first equation into the second. Replacing 𝑏 by 𝑦−𝑎𝑥 from Step 1,
𝑛
∑𝑥 ((𝑦 −𝑦)−𝑎(𝑥 −𝑥)) = 0.
𝑖 𝑖 𝑖
𝑖=1
Step 4 — recognise the sums. Because the deviations 𝑦 −𝑦 and 𝑥 −𝑥 each sum to zero, subtracting
𝑖 𝑖
𝑥 from every factor 𝑥 changes nothing in the last sum: ∑ 𝑥((𝑦 −𝑦)−𝑎(𝑥 −𝑥)) = 0. Replacing 𝑥
𝑖 𝑖 𝑖 𝑖 𝑖
by 𝑥 −𝑥 therefore gives
𝑖
𝑛 𝑛
2
∑(𝑥 −𝑥)(𝑦 −𝑦)−𝑎∑(𝑥 −𝑥) = 𝑆 −𝑎𝑆 = 0,
𝑖 𝑖 𝑖 𝑥𝑦 𝑥𝑥
𝑖=1 𝑖=1
hence 𝑎̂= 𝑆 /𝑆 , and then 𝑏̂= 𝑦−𝑎̂𝑥 from Step 1. This candidate is unique, since each step
𝑥𝑦 𝑥𝑥
forced its value. Dividing numerator and denominator of 𝑎 ̂ by 𝑛−1 rewrites it as cov(𝑥,𝑦)/𝑠2 =
𝑥
𝑟𝑠 /𝑠 . □
𝑦 𝑥
The four-step derivation finds the only candidate. It remains to confirm that the candidate really is
the lowest point of RSS, and not some other kind of flat spot. This we prove separately, without the
two-variable second-derivative test, by making the error small one variable at a time.
Proposition 2 (The estimates give the global minimum). For data whose 𝑥 are not all
𝑖
equal, RSS(𝑎,𝑏) ≥ RSS(𝑎,̂ 𝑏)̂ for every 𝑎 and 𝑏: the least-squares line has slope 𝑎 ̂and intercept 𝑏.̂
Proof. We work in two steps.
Step 1 — make the error small in the intercept, at a fixed slope. Fix any slope 𝑎. As a function of 𝑏 alone,
RSS(𝑎,𝑏) = ∑ ((𝑦 −𝑎𝑥 )−𝑏) 2 is the sum of squared deviations of the numbers 𝑦 −𝑎𝑥 about 𝑏.
𝑖 𝑖 𝑖 𝑖 𝑖
That sum is smallest when 𝑏 is their mean, 𝑦−𝑎𝑥. Substituting this best intercept, the smallest error
attainable at slope 𝑎 is the value at 𝑎 of the function
𝑔 : ℝ ⟶ ℝ
𝑛 2
𝑎 ⟼ ∑ ((𝑦 −𝑦)−𝑎(𝑥 −𝑥))
𝑖=1 𝑖 𝑖
Step 2 — make the resulting one-variable function small in the slope. Expanding,
𝑔(𝑎) = 𝑆 −2𝑎𝑆 +𝑎2𝑆 .
𝑦𝑦 𝑥𝑦 𝑥𝑥
11

Version of 13 September 2026 Module page
Since the 𝑥 are not all equal, 𝑆 > 0, so 𝑔 is an upward parabola in 𝑎; it has one lowest point, where
𝑖 𝑥𝑥
𝑔′(𝑎) = −2𝑆 +2𝑎𝑆 = 0, that is at 𝑎 = 𝑆 /𝑆 = 𝑎.̂ The best intercept there is 𝑦−𝑎̂𝑥 = 𝑏.̂ For
𝑥𝑦 𝑥𝑥 𝑥𝑦 𝑥𝑥
any (𝑎,𝑏) we have RSS(𝑎,𝑏) ≥ 𝑔(𝑎) ≥ 𝑔(𝑎)̂ = RSS(𝑎,̂ 𝑏)̂ , so (𝑎,̂ 𝑏)̂ is the global minimum. □
The slope has two readings. As 𝑆 /𝑆 it is the covariance over the variance of 𝑥; as 𝑟𝑠 /𝑠 it is
𝑥𝑦 𝑥𝑥 𝑦 𝑥
the correlation rescaled by how many 𝑦-units go with one 𝑥-unit. Both use only the five summary
numbers 𝑥, 𝑦, 𝑠 , 𝑠 and 𝑟 — no matrices, no iteration.
𝑥 𝑦
Example — a line by hand. Take five markets with spend 𝑥 = (1,2,3,4,5) and sales 𝑦 =
(1,3,4,5,7). Then 𝑥 = 3 and 𝑦 = 4, and
𝑆 = (−2)(−3)+(−1)(−1)+0+(1)(1)+(2)(3) = 14, 𝑆 = 4+1+0+1+4 = 10.
𝑥𝑦 𝑥𝑥
So 𝑎̂= 14/10 = 1.4 and 𝑏̂= 4−1.4×3 = −0.2: the line is 𝑦̂= 1.4𝑥−0.2. It predicts
(1.2,2.6,4.0,5.4,6.8), whose gaps from the observed 𝑦 are (−0.2,0.4,0,−0.4,0.2) and sum to zero
— as the next section proves they always must.
On the thirty markets, NumPy fits the line in one call, and the two readings of the slope agree to the
last digit:
import numpy as np
# The least-squares line, straight from a one-line fit: polyfit of degree 1
# returns the slope first, then the intercept -- no matrices, no iteration.
a, b = np.polyfit(x, y, 1)
print("slope a :", round(a, 4), "k€ sales per extra k€ spend")
print("intercept b:", round(b, 4), "k€")
# The same slope, read off r and the two standard deviations: a = r * sy / sx.
r = np.corrcoef(x, y)[0, 1]
print("r * sy / sx:", round(r * np.std(y, ddof=1) / np.std(x, ddof=1), 4))
slope a : 1.8502 k€ sales per extra k€ spend
intercept b: 4.0662 k€
r * sy / sx: 1.8502
Figure 2 draws the fitted line through the cloud. The slope 𝑎̂= 1.85 is the number a manager reads
first.
12

Version of 13 September 2026 Module page
sales (k€)
40
30
20
10
5 10 15 20
advertising spend (k€)
Figure 2: The thirty markets and their least-squares line 𝑦̂= 1.85𝑥+4.07. The slope says that each
extra thousand euros of weekly spend goes with about 1.85 k€ more sales; the vertical gaps from the
points to the line are the residuals, which the fit makes as small as possible in the squared-sum sense.


## 2.3. The slope as a business quantity


The slope is not only a number on a plot; it is the quantity a decision-maker acts on. Here 𝑎̂≈ 1.85
means: across these markets, each additional thousand euros of weekly advertising goes with about
1.85 thousand euros of additional sales. Its units — thousands of euros of sales per thousand euros of
spend — make it directly comparable with the cost of the spend it describes, which is why a manager
reads the slope first.
Pitfall. Read the slope as “goes with”, not “causes”. The slope is descriptive: it summarises how
sales have varied with spend across these markets. Reading it as “if we raise spend, sales will rise
by 1.85 per unit” assumes that no hidden third variable is at work and that a past pattern would
survive a deliberate change — assumptions the data alone cannot support. Chapter 6 shows a
slope whose very sign is the artefact of a left-out variable.


## 2.4. Two identities every residual satisfies


Once the line is fitted, the gaps it leaves have their own name and their own symbol. They are a
different object from the model error introduced in Chapter 4, and the difference matters, so we
define them carefully now.
Definition 8 (Residual). For the least-squares line, the fitted value at market 𝑖 is 𝑦̂ = 𝑎𝑥̂ +
𝑖 𝑖
𝑏,̂ and the residual there is
𝑒 = 𝑦 −𝑦̂.
𝑖 𝑖 𝑖
It is the vertical gap between the observed point and the fitted line, a quantity computed from
the data.
The two equations we set to zero in the derivation were not arbitrary: read at the fitted line, each says
something about the residuals.
13

Version of 13 September 2026 Module page
Proposition 3 (Residual identities). The residuals of the least-squares line satisfy
𝑛 𝑛
∑𝑒 = 0 and ∑𝑥 𝑒 = 0.
𝑖 𝑖 𝑖
𝑖=1 𝑖=1
Proof. Each identity is one of the two equations of the derivation, read at the fitted slope and
intercept.
The intercept equation. Step 1 of the derivation was ∑ (𝑦 −𝑎𝑥̂ −𝑏)̂ = 0; the summand is exactly 𝑒 ,
𝑖 𝑖 𝑖 𝑖
so ∑ 𝑒 = 0.
𝑖 𝑖
The slope equation. Step 2 was ∑ 𝑥 (𝑦 −𝑎𝑥̂ −𝑏)̂ = 0; the summand is exactly 𝑥 𝑒 , so ∑ 𝑥 𝑒 =
𝑖 𝑖 𝑖 𝑖 𝑖 𝑖 𝑖 𝑖 𝑖
0. □
Both identities can be read straight off a residual plot. That ∑ 𝑒 = 0 says the residuals are centred at
𝑖 𝑖
zero: their positive and negative parts exactly balance, so a plot of the residuals sits evenly above and
below the horizontal line at zero. That ∑ 𝑥 𝑒 = 0 says the residuals carry no leftover linear trend
𝑖 𝑖 𝑖
in 𝑥: plotted against 𝑥, they show no slope of their own, because any such slope has already been
absorbed into the fitted line.
We can watch both hold on the real fit; up to the tiny rounding error of floating-point arithmetic,
they are zero.
import numpy as np
# Two identities the least-squares residuals ALWAYS satisfy, by construction:
# they are exactly the two normal equations, so both hold to machine precision.
a, b = np.polyfit(x, y, 1)
y_hat = a * x + b
e = y - y_hat
print("sum of e_i :", np.sum(e))
print("sum of x_i * e_i :", np.sum(x * e))
sum of e_i : -2.0250467969162855e-13
sum of x_i * e_i : -1.9184653865522705e-12
Pitfall. That ∑ 𝑒 = 0 holds by construction — it is true for any data at all, even a cloud with
𝑖 𝑖
no real trend. So confirming it tells you only that the line was fitted correctly; it is not evidence
that the line is a good model. The genuine checks — how much variation the line explains, and
whether the residuals behave — come in the next two chapters.
14
