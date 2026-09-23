# 9. Hyperparameters

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 28-29*

Version of 13 September 2026 Module page
9. Hyperparameters
We have quietly introduced several knobs that are not learned from the data by fitting: the polyno-
mial degree 𝑑, the regularization strength 𝜆, the learning rate 𝛼. These are different in kind from the
coefficients.
Definition 20. A parameter is learned from the data during training (the coefficients 𝛽). A
hyperparameter is a setting fixed before training that controls how training happens or how
complex the model may be (𝜆, 𝑑, 𝛼). Parameters are learned; hyperparameters are chosen.
You choose a hyperparameter by trying candidate values, training a model for each, and comparing
them — but comparing them by cross-validation (or on the validation set), never on the test set.
A degree-12 polynomial is flexible enough to overfit the curved sample wildly, even more than the
degree-10 fit of Figure 6; regularization can rescue even that flexible a model, if we pick the right 𝜆.
We reuse cx, cy from the overfitting chapter:
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
for lam in [0.00001, 0.001, 0.01, 1, 100]:
model = make_pipeline(PolynomialFeatures(12), StandardScaler(), Ridge(alpha=lam))
cv = -cross_val_score(model, cx.reshape(-1, 1), cy, cv=kf,
scoring="neg_root_mean_squared_error").mean()
print(lam, round(cv, 1))
1e-05 76.9
0.001 42.8
0.01 44.5
1 56.4
100 173.8
The cross-validated error is high with almost no penalty (the polynomial overfits), bottoms out
around 𝜆 = 0.001, and climbs again once the penalty is so strong the model can no longer bend —
the same U-shape as the validation curve, now traced by the hyperparameter. You keep 𝜆 = 0.001,
and only then, with it fixed, unseal the test set for one final measurement.
Pitfall. Choosing a hyperparameter by its test-set score leaks the test set into the model: the
test set has now influenced a modelling decision, so its score is no longer an honest estimate
of performance on truly unseen data — it is optimistically biased. The validation set (or cross-
validation) exists precisely so the test set can stay sealed. Tune on validation; report on test, once.
Exercises
9.1. List every hyperparameter met so far — the polynomial degree 𝑑, the regularization strength
𝜆, the learning rate 𝛼 — and, for each, say whether it is learned or chosen and what it controls.
Check: all three are chosen before training, not learned from the data by fitting.
28

Version of 13 September 2026 Module page
9.2. Tune the regularization strength 𝜆 by cross-validation. Then evaluate once on the test set.
Explain precisely why tuning 𝜆 on the test set would invalidate the final number. Check: cross-
validated error is a U-shape in 𝜆 — high at very small 𝜆, lowest at an interior value, high again
when 𝜆 is very large.
29
