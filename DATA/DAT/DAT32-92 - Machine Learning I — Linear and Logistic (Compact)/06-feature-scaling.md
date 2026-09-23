# 6. Feature scaling

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 23-26*

Version of 13 September 2026 Module page
6. Feature scaling
We now turn from evaluation to the preprocessing judgment this course closes on, starting with
scaling. Logistic regression sums 𝛽 𝑥 , and the regularization penalty (next section) sums 𝛽2 or | |𝛽 | |.
𝑗 𝑗 𝑗 𝑗
Both are distorted when features live on wildly different numeric scales.
Example — when scale quietly skews a penalised model. Our four numeric features live
on different scales: support tickets run 0–5, monthly price about 5–23, tenure 1–60 months, and
watch hours 0–136 — the widest feature spans more than twenty times the narrowest. That gap
alone makes the raw coefficients hard to read: a feature measured in large numbers needs only a
small coefficient to exert its effect, while a small-range feature needs a large one, so coefficient size
reflects units as much as importance. L2 regularization, which penalises ∑𝛽2, then takes those
𝑗
coefficients at face value — leaning hard on a small-range feature’s naturally large coefficient and
barely touching a large-range feature’s naturally small one, constraining features by their units
rather than their importance. Standardizing first puts every feature on one footing, so the penalty
is fair.
Definition 16. Standardization rescales a feature to zero mean and unit variance:
𝑥−𝜇
𝑥′ = ,
𝜎
using the feature’s training-set mean 𝜇 and standard deviation 𝜎. Values become “number of
standard deviations from the mean,” unbounded but centred.
Definition 17. Normalization (min–max scaling) rescales a feature to a fixed range, usually
[0,1]:
𝑥−𝑥
𝑥′ = min .
𝑥 −𝑥
max min
Values are bounded but sensitive to outliers, since a single extreme 𝑥 compresses everyone
max
else.
We can watch this on our own features — comparing the coefficients, the fit under a strong penalty,
and the predictions with no penalty at all:
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.metrics import roc_auc_score
Xr, Xr_test = X_train[numeric].to_numpy(), X_test[numeric].to_numpy()
scaler = StandardScaler().fit(Xr) # mean, std from the training set
only
Xs, Xs_test = scaler.transform(Xr), scaler.transform(Xr_test)
# (1) Coefficients. On raw features their sizes reflect units, not importance;
23

Version of 13 September 2026 Module page
# after scaling each is an effect per one standard deviation, so comparable.
raw = LogisticRegression().fit(Xr, y_train)
scaled = LogisticRegression().fit(Xs, y_train)
print("raw coefficients:", raw.coef_[0].round(3))
print("scaled coefficients:", scaled.coef_[0].round(3))
# (2) Under a strong penalty the accident of units skews the fit: on raw features
# the L2 penalty constrains each feature by its numbers, not its importance.
raw_p = LogisticRegression(C=0.001, max_iter=5000).fit(Xr, y_train)
scaled_p = LogisticRegression(C=0.001, max_iter=5000).fit(Xs, y_train)
scale_auc_raw = roc_auc_score(y_test, raw_p.predict_proba(Xr_test)[:, 1])
scale_auc_scaled = roc_auc_score(y_test, scaled_p.predict_proba(Xs_test)[:, 1])
print(f"strong penalty AUC raw: {scale_auc_raw:.3f} scaled:
{scale_auc_scaled:.3f}")
# (3) With no penalty at all, scaling is a pure reparametrization: same predictions.
opt = dict(C=np.inf, max_iter=100000, tol=1e-10)
raw_u = LogisticRegression(**opt).fit(Xr, y_train)
scaled_u = LogisticRegression(**opt).fit(Xs, y_train)
agree = np.mean(raw_u.predict(Xr_test) == scaled_u.predict(Xs_test))
print(f"un-regularized: raw and scaled agree on {agree:.0%} of test rows")
# (4) Normalization (min-max) is the other standard scaler: same scikit-learn API,
# but it maps each feature into [0, 1] rather than centring it. It, too, is a
# linear rescale, so the un-regularized model's predictions are unchanged.
mm = MinMaxScaler().fit(Xr)
Xm, Xm_test = mm.transform(Xr), mm.transform(Xr_test)
print("min-max ranges: min", Xm.min(0).round(2), " max", Xm.max(0).round(2))
minmax_u = LogisticRegression(**opt).fit(Xm, y_train)
agree_mm = np.mean(raw_u.predict(Xr_test) == minmax_u.predict(Xm_test))
print(f"un-regularized: raw and min-max agree on {agree_mm:.0%} of test rows")
raw coefficients: [-0.11 -0.048 0.059 1.827]
scaled coefficients: [-1.876 -1.005 0.261 1.608]
strong penalty AUC raw: 0.864 scaled: 0.901
un-regularized: raw and scaled agree on 100% of test rows
min-max ranges: min [0. 0. 0. 0.] max [1. 1. 1. 1.]
un-regularized: raw and min-max agree on 100% of test rows
Three things to read off the run. The raw coefficients mislead: support tickets’ 1.83 towers over
tenure’s −0.11 only because tickets span a range of five and tenure a range of sixty; standardized,
tenure (−1.88) is in fact the largest of the four effects, not the smallest. The penalty is unfair on
raw features: under a strong L2 penalty the raw-feature model scores AUC 0.86 against the scaled
model’s 0.90, because the penalty falls on whichever feature carries big numbers rather than on
whichever matters. With no penalty the difference vanishes: the un-regularized model predicts
identically either way, because there scaling is a pure reparametrization. Scaling matters exactly
when a penalty — or a distance, or gradient descent — makes the model care about the raw size of
the coefficients.
The run’s last two lines apply normalization to the same features for contrast: MinMaxScaler shares
StandardScaler’s API but maps each feature into [0,1] instead of centring it — the four printed
ranges all collapse to a clean 0-to-1. Being another linear rescale, it too leaves the un-regularized
24

Version of 13 September 2026 Module page
model’s predictions identical; standardization and normalization differ in the numbers they hand a
penalty, not in this invariance.
When does it matter? Standardization is the safe default for linear and logistic models, especially
with regularization, and is more robust to outliers than min–max. Normalization suits features you
want bounded (e.g. for certain neural nets or when a feature is already a bounded proportion). And
crucially — when does it not matter?
Example — when scaling changes nothing — and when it still helps. A plain, un-regular-
ized logistic regression is invariant to feature scaling at its optimum, as the run above shows:
rescale a feature by a constant and the fitted coefficient simply rescales to compensate, leaving
predictions unchanged. But reaching that optimum is another matter — the gradient descent of
Section 2.3 crawls when features span wildly different magnitudes (the loss surface becomes a
long, thin valley), so scaling still speeds and steadies the fit even with no penalty. That is why the
un-regularized fit in the run sets a very tight tol — the solver’s convergence tolerance, the step
size below which it stops — alongside a high max_iter: on badly-scaled features the solver would
otherwise halt short of the optimum, and the scale-invariance holds only at the optimum, not
before it. Decision trees and random forests are the genuinely scale-free case: they split one feature
at a time on a threshold, and a monotone rescaling never changes the order. So scaling matters for
penalised linear/logistic models, for gradient-descent fitting, and for distance-based methods;
it is truly wasted effort only for trees. Knowing when not to scale is as much a part of the judgment
as knowing when to.
Pitfall. Fit the scaler on the training data only, then apply its stored 𝜇,𝜎 (or 𝑥 ,𝑥 ) to
min max
validation and test data. Computing the mean and standard deviation over the whole dataset
leaks information from the held-out sets into training and inflates your scores — exactly the leak
that scikit-learn pipelines, from Intro to Machine Learning, exist to prevent. Put the scaler inside
the pipeline.
The pipeline is what makes “fit on training only” automatic: StandardScaler learns its 𝜇,𝜎 on each
fold’s training part and re-applies them, no leak possible.
from sklearn.preprocessing import StandardScaler # or MinMaxScaler for [0, 1]
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression
model = make_pipeline(StandardScaler(), LogisticRegression())
model.fit(X_train[numeric], y_train) # scaler fitted on X_train only, inside the
pipeline
Exercises
6.1. Apply standardization and min–max normalization to features on different scales. Show
that an L2-regularized logistic regression’s coefficients change with scaling, and that an un-
regularized one’s (C=np.inf) predictions do not. To see the invariance you must let the solver
actually reach the optimum: on badly-scaled features it stops early, so raise max_iter and tighten
tol until the scaled and unscaled predictions agree — and note that needing to do so is the
scaling lesson. State when scaling is necessary and when it is irrelevant.
25

Version of 13 September 2026 Module page
Answers. (1) The L2-regularized coefficients change under scaling; the un-regularized model’s predictions do not —
provided the solver converges, so tighten tol/raise max_iter if the scaled and unscaled fits disagree, since badly-
scaled features stop the optimiser short. Scaling is necessary for penalised or distance-based models and for fast,
reliable convergence; it is irrelevant to the predictions of a converged un-penalised linear/logistic model and to trees.
26
