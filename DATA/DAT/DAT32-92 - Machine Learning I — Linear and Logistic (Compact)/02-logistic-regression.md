# 2. Logistic regression

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 7-11*

Version of 13 September 2026 Module page
2. Logistic regression
We keep linear regression’s engine — a weighted sum of the features — and add one component that
converts that sum into a probability. Start from the sum you already know,
𝑧 = 𝛽 +𝛽 𝑥 +𝛽 𝑥 +…+𝛽 𝑥 ,
0 1 1 2 2 𝑝 𝑝
where, for our subscriber, 𝑥 might be watch hours, 𝑥 tenure, and so on. This 𝑧 (the log-odds, as we
1 2
will see) ranges over all real numbers — exactly the problem. We need to squash it into (0,1).


## 2.1. The sigmoid function


Definition 2. The sigmoid (or logistic) function maps any real number to the open interval
(0,1):
1
𝜎(𝑧) = .
1+𝑒−𝑧
It is increasing, passes through 𝜎(0) = 0.5, and saturates toward 1 as 𝑧 → +∞ and toward 0 as
𝑧 → −∞.
𝜎(𝑧)
1
𝜎(0)=0.5
0.5
𝑧
Figure 1: The sigmoid function. It takes the unbounded linear score 𝑧 and returns a number in (0,1)
we can read as a probability. Large positive 𝑧 gives near-certainty of the positive class; large negative
𝑧, near-certainty of the negative class; 𝑧 = 0 is maximal uncertainty at 0.5.
In code the sigmoid is one line, and it works on a whole array of scores at once:
import numpy as np
def sigmoid(z):
return 1 / (1 + np.exp(-z))
Definition 3. Logistic regression models the probability of the positive class as the sigmoid
of the linear score:
𝑝̂= 𝑃(𝑦 = 1|𝑥) = 𝜎(𝛽 +𝛽 𝑥 +…+𝛽 𝑥 ).
0 1 1 𝑝 𝑝
The fitted 𝑝 ̂ is a probability; the predicted class is obtained by comparing 𝑝 ̂ to a decision
threshold (0.5 by default).
7

Version of 13 September 2026 Module page


## 2.2. Interpreting the output and the coefficients


The output 𝑝 ̂is read directly: 𝑝̂= 0.87 means the model assigns this subscriber an 87% chance of
churning. That probabilistic reading is one of logistic regression’s great virtues — a graded score a
business can rank and act on, not just a yes-or-no answer. Read it primarily as a ranking score (0.87
is riskier than 0.60); treat the exact number as an approximate probability, because a raw logistic
model is not automatically calibrated — regularization, class imbalance, and misspecification can
pull the absolute values off, so “0.87” need not mean that exactly 87% of such subscribers churn.
The coefficients need a little more care than in linear regression, because the sigmoid sits between 𝑧
and the probability. Rearranging the definition gives the clean interpretation:
𝑝̂ 𝑝̂
= 𝑒𝛽0+𝛽1𝑥1+…, so ln( ) = 𝛽 +𝛽 𝑥 +…
⏟1−𝑝̂ 1−𝑝̂ 0 1 1
odds
The linear score 𝑧 is the log-odds. So each coefficient 𝛽 is the change in log-odds per one-unit
𝑗
increase in 𝑥 , all else equal; equivalently, 𝑒𝛽 𝑗 multiplies the odds.
𝑗
To read coefficients as odds we fit on the raw (unscaled) features, so one unit is one natural unit —
one month, one ticket — and exponentiate:
import numpy as np
from sklearn.linear_model import LogisticRegression
# Fit on the raw (unscaled) numeric features so each coefficient is a change in
# log-odds per one natural unit of that feature.
odds_model = LogisticRegression(max_iter=1000).fit(X_train[numeric], y_train)
odds_ratios = np.exp(odds_model.coef_[0]) # e^{beta_j}: factor on the odds
for name, ratio in zip(numeric, odds_ratios):
print(f"{name:16s} {ratio:.3f}")
tenure 0.896
watch_hours 0.953
monthly_price 1.061
support_tickets 6.218
Example — reading a churn coefficient. The odds ratio on “support tickets last month” is 6.22:
each additional support ticket multiplies the odds of churn by about 6.22, all else equal — support
complaints are a strong churn signal. A feature whose odds ratio is 1 (coefficient 0) has no effect;
here tenure and watch hours sit just below 1, so more of either slightly lowers the odds of churn.
The quick read is the ratio’s side of 1: above 1 pushes toward churn, below 1 toward staying.
Pitfall. A logistic coefficient is a change in log-odds, not a change in probability. The same
one-ticket increase moves the probability a lot near 𝑝̂= 0.5 (the steep part of the sigmoid) and
almost not at all near 𝑝̂= 0.99 (the flat part). “An extra ticket adds 0.12 to the probability” is
wrong — the effect on probability depends on where you start.
8

Version of 13 September 2026 Module page


## 2.3. How it is fitted


We cannot use the residual sum of squares here — a 0/1 target with the sigmoid makes RSS a bumpy,
hard-to-optimise surface. Logistic regression is fitted by minimising a different loss, log loss (cross-
entropy), which rewards confident correct probabilities and punishes confident wrong ones.
Definition 4. The log loss (binary cross-entropy) for predictions 𝑝(̂𝑖) against labels 𝑦(𝑖) ∈ {0,1}
is
𝑛
1
𝐿(𝛽) = − ∑[𝑦(𝑖)ln𝑝(̂𝑖)+(1−𝑦(𝑖))ln(1−𝑝(̂𝑖))].
𝑛
𝑖=1
For a positive example (𝑦 = 1) only the first term survives, so the loss is −ln𝑝:̂ small when 𝑝 ̂is
near 1, exploding as 𝑝̂→ 0.
This loss is convex, so gradient descent — the very method you implemented earlier — slides down
to its single global minimum with no local-minimum trouble. And the gradient you descend is the
twin of the one you already wrote.
Definition 5. Collect the features (with a leading column of ones for the intercept) into a matrix
𝑋 and write 𝑝̂= 𝜎(𝑋𝛽) for the vector of predicted probabilities. The gradient of the log loss
is then
1
∇𝐿(𝛽) = 𝑋⊤(𝑝̂−𝑦).
𝑛
This is identical in form to the linear-regression gradient 1 𝑋⊤(𝑦̂−𝑦) you already know — the
𝑛
only change is that the prediction 𝑝 ̂is now the sigmoid of the linear score instead of the linear
score itself.
Because the gradient has the same shape, so does the training loop: start the coefficients at zero
and step downhill. That is the whole model — the sigmoid, this gradient, and the descent loop you
already own. On a labelled set the from-scratch coefficients land exactly where scikit-learn’s do —
here C=np.inf switches regularization off, so the library minimises the same bare log loss (Chapter 8
explains C):
import numpy as np
from sklearn.linear_model import LogisticRegression
def fit_logistic(X, y, lr=0.3, n_steps=2000):
Xb = np.column_stack([np.ones(len(X)), X]) # leading 1s column for the intercept
beta = np.zeros(Xb.shape[1])
for _ in range(n_steps):
p = sigmoid(Xb @ beta) # current predicted probabilities
grad = Xb.T @ (p - y) / len(y) # gradient of the log loss
beta -= lr * grad # one step downhill
return beta
# a small synthetic set from known coefficients, to check the fit
rng = np.random.default_rng(0)
9

Version of 13 September 2026 Module page
X = rng.normal(size=(400, 2))
z = -0.4 + 1.3 * X[:, 0] - 0.9 * X[:, 1] # true log-odds
y = (rng.uniform(size=400) < sigmoid(z)).astype(int)
print(fit_logistic(X, y).round(3)) # from-scratch coefficients
sk = LogisticRegression(C=np.inf).fit(X, y) # C=np.inf: no regularization
print(np.r_[sk.intercept_, sk.coef_[0]].round(3)) # scikit-learn's coefficients
[-0.32 1.1 -0.638]
[-0.32 1.1 -0.638]
In practice you let scikit-learn run this descent for you — with a faster solver and regularization built
in — but the machinery underneath is exactly that loop. Using it is the same three-line shape as
any scikit-learn model, with one classification-specific habit: ask for predict_proba, the probability,
and threshold it yourself rather than letting predict decide at 0.5 for you. Because our table mixes
numeric and categorical columns, we wrap the model in the standard preprocessing you will meet
in full in Chapter 6 and Chapter 7 — scaling the numbers, one-hot encoding the categories — so it
can consume the whole table; treat that wrapper as a black box until then.
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
# One pipeline: scale the numeric columns, one-hot the categorical ones, then fit
# logistic regression — every step fitted on the training data only.
pre = ColumnTransformer([
("num", StandardScaler(), numeric),
("cat", OneHotEncoder(handle_unknown="ignore"), categorical),
])
model = Pipeline([("pre", pre), ("clf", LogisticRegression(max_iter=1000))])
model.fit(X_train, y_train)
p_hat = model.predict_proba(X_test)[:, 1] # column 1 = P(churn)
y_pred = (p_hat >= 0.5).astype(int) # apply the default threshold
That fitted model, and the probabilities p_hat it assigns the sealed test set, are the running model for
the next three chapters: every metric, threshold and curve below is computed from those probabil-
ities, not from y_pred alone.
Exercises
2.1. Implement logistic regression from scratch: code the sigmoid, the log-loss gradient
1 𝑋⊤(𝑝̂−𝑦), and a gradient-descent loop. Fit it to a labelled binary dataset and confirm your
𝑛
coefficients match scikit-learn’s unregularized fit (C=np.inf) to a few decimals. Then interpret
three coefficients in terms of odds (𝑒𝛽 𝑗), and explain why the effect of a feature on the proba-
bility depends on the starting point.
2.2. Plot the sigmoid function and mark 𝜎(0). Explain, using the curve, why a one-unit change
in a feature moves the predicted probability more near 𝑝̂= 0.5 than near 𝑝̂= 0.99.
10

Version of 13 September 2026 Module page
Answers. (1) Once your descent loop has converged it should reproduce scikit-learn’s coefficients to a few decimals (the
matching-output check in Section 2.3); state your three interpretations as odds multipliers 𝑒𝛽𝑗 (positive coefficient →
𝑒𝛽𝑗 >1), never as a fixed change in probability — the probability effect is largest near 𝑝̂=0.5. (2) 𝜎(0)=0.5; the slope
𝜎′(𝑧)=𝜎(𝑧)(1−𝜎(𝑧)) peaks at 𝑧=0 (value 0.25) and vanishes in the tails, so a fixed step in 𝑧 moves the probability
most near 𝑝̂=0.5.
11
