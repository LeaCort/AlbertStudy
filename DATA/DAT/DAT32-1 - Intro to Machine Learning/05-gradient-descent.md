# 5. Gradient descent

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 16-18*

Version of 13 September 2026 Module page
5. Gradient descent
OLS handed us the optimum in one formula. That is a luxury of linear regression with squared error;
most models have no closed form, and even linear regression on millions of rows may be cheaper
to solve iteratively. The general-purpose optimiser that underlies almost all of modern machine
learning is gradient descent, and it is worth implementing here, on a problem where we can check
it against the exact answer.
The idea is physical. The loss 𝐿(𝛽) is a landscape over the coefficients; training means walking
downhill to its lowest point. At any position the gradient ∇𝐿 points in the direction of steepest
increase, so stepping in the opposite direction goes downhill fastest.
Definition 13. Gradient descent minimises a loss 𝐿(𝛽) by repeatedly stepping against the
gradient:
𝛽 ← 𝛽−𝛼∇𝐿(𝛽),
where 𝛼 > 0 is the learning rate. The steps repeat until the loss stops decreasing meaningfully
— convergence.
The loss we descend on here is the mean squared error — the RSS of Chapter 3 divided by the
number of training rows 𝑛. Dividing a cost by the positive constant 𝑛 cannot move where it bottoms
out, so MSE and RSS share exactly the same minimiser: gradient descent on the MSE must land on
the very OLS line, which is precisely what lets us check its answer against the closed form. (Carrying
the 1/𝑛 also keeps the gradient’s size from growing merely because we summed over more rows.) For
that MSE loss the two partial derivatives are
𝑛 𝑛
𝜕𝐿 2 𝜕𝐿 2
= − ∑(𝑦(𝑖)−𝑦(̂𝑖)), = − ∑(𝑦(𝑖)−𝑦(̂𝑖))𝑥(𝑖),
𝜕𝛽 𝑛 𝜕𝛽 𝑛
0 𝑖=1 1 𝑖=1
which is all you need to code the loop: predict, compute these two numbers, nudge 𝛽 and 𝛽 , repeat.
0 1
loss 𝐿
minimum
coefficient 𝛽
Figure 5: Gradient descent on a loss bowl. From a starting guess (left) each step moves against the
gradient, downhill toward the minimum. Steps shrink as the slope flattens near the bottom — the
algorithm naturally slows as it converges.
One practical point before we code: gradient descent behaves far better when features are on compa-
rable scales, so we standardise surface (subtract its mean, divide by its standard deviation) before
descending, then convert the coefficients back to the original euros-per-m² units at the end.
16

Version of 13 September 2026 Module page
mu, sd = x_tr.mean(), x_tr.std()
xs = (x_tr - mu) / sd # standardised feature
def gradient_descent(xs, y, alpha, n_iters):
w0, w1 = 0.0, 0.0 # start at the origin
n = len(y)
history = []
for _ in range(n_iters):
y_hat = w0 + w1 * xs
err = y_hat - y
g0 = (2 / n) * err.sum()
g1 = (2 / n) * (err * xs).sum()
w0 -= alpha * g0 # step against the gradient
w1 -= alpha * g1
history.append((err ** 2).mean()) # record the loss
return w0, w1, history
w0, w1, hist = gradient_descent(xs, y_tr, alpha=0.1, n_iters=200)
beta1_gd = w1 / sd # undo the standardisation
beta0_gd = w0 - w1 * mu / sd
print(round(beta0_gd, 2), round(beta1_gd, 3))
print("loss, first 6 iters:", [round(h) for h in hist[:6]])
print("loss at convergence:", round(hist[-1]))
264.61 12.0
loss, first 6 iters: [1357893, 872019, 561060, 362046, 234677, 153161]
loss at convergence: 8244
Gradient descent lands on €264.61 and €12.0 — the same line OLS gave us in one step. The printed
loss history makes the mechanism concrete: it starts near 1.36 million, falls about ninefold over the
first six iterations, and keeps shrinking — slowing as it nears the bottom — until it flattens near 8244
after a couple of hundred iterations. The learning rate is what governs this descent.
Definition 14. The learning rate 𝛼 sets the step size and is the single setting that most often
makes or breaks training. Too small, and convergence crawls, taking thousands of steps. Too
large, and the steps overshoot the minimum, bounce up the far wall, and the loss diverges —
growing each iteration instead of shrinking.
You can see all three regimes by rerunning the loop with different 𝛼 (loss after 50 iterations):
for a in [0.001, 0.1, 1.05]:
_, _, h = gradient_descent(xs, y_tr, alpha=a, n_iters=50)
print(a, round(h[-1]))
0.001 1117454
0.1 8244
1.05 15371077849
17

Version of 13 September 2026 Module page
The three rows are the three regimes. At 𝛼 = 0.001 the loss has barely moved from its starting value
after 50 steps — far too small. At 𝛼 = 0.1 it has settled at 8244 — a good rate. At 𝛼 = 1.05 it has
exploded past 1010 — too large, the steps overshoot and grow without bound.
Pitfall. A loss that grows every iteration is the clear sign of a learning rate that is too large — not
a bug in your gradient. Before re-deriving the derivative, divide 𝛼 by ten and rerun. Conversely,
a loss that barely moves after many steps usually means 𝛼 is too small — or that you forgot to
scale the features.
Exercises
5.1. Standardise the surface feature (subtract its mean, divide by its standard deviation) and run
the gradient-descent loop once at 𝛼 = 0.1, printing the loss every few iterations. Check: the loss
decreases every iteration and flattens near 8244.
5.2. Implement gradient descent to fit the same regression on the standardised feature. Plot the
loss against iteration for three learning rates: one too small, one well chosen, and one large
enough to diverge. Relate each curve to the value of 𝛼. Check: a well-chosen rate recovers the OLS
line (𝛽 ≈ 12.0); the diverging rate’s loss grows every iteration.
1
18
