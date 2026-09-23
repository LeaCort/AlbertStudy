# 4. Baselines and evaluation metrics

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 14-15*

Version of 13 September 2026 Module page
4. Baselines and evaluation metrics
We have a fitted line. Is it any good? Two questions hide here — is it better than doing nothing?
and how wrong is it, in numbers I can act on? — and each needs its own tool.


## 4.1. The baseline: the minimum a model must beat


Definition 11. A baseline is the simplest defensible predictor, used as the minimum a model
must beat. For regression the standard baseline is the mean predictor, which ignores the
features and predicts the mean training label for every example. A model that does not beat the
baseline has no value.
Note training label: like any model, the baseline is fitted on the training set (here, one number —
its mean) and then judged on held-out data. It is a one-liner:
baseline = y_tr.mean() # the one number the baseline always predicts
print(round(baseline, 2))
1110.38


## 4.2. Metrics: how wrong, in what units


Definition 12. For predictions 𝑦(̂𝑖) against labels 𝑦(𝑖) over 𝑛 examples:
𝑛 𝑛
1 1 2
MAE = ∑| |𝑦(𝑖)−𝑦(̂𝑖) | |, MSE = ∑(𝑦(𝑖)−𝑦(̂𝑖)) , RMSE = √MSE.
𝑛 𝑛
𝑖=1 𝑖=1
∑ 𝑛 (𝑦(𝑖)−𝑦(̂𝑖)) 2
𝑅2 = 1− 𝑖=1 .
𝑛 2
∑ (𝑦(𝑖)−𝑦)̄
𝑖=1
Read these in plain words. MAE (mean absolute error) is the average miss in euros; robust and easy
to explain. MSE (mean squared error) squares each miss, so one €300 error counts far more than
three €100 errors; its units are euros-squared, hard to interpret. RMSE takes the square root to return
to euros while keeping that heavy penalty on large errors. 𝑅2 rescales the error against the variance of
the labels: it is the fraction of the target’s variance the model explains. 𝑅2 = 1 is a perfect fit; 𝑅2 = 0 is
exactly the score of a predictor that always outputs the evaluation set’s own mean; and a negative
𝑅2 means you did worse than that. Each is a few lines of numpy:
def scores(y, y_hat):
err = y - y_hat
mse = (err ** 2).mean()
return {
14

Version of 13 September 2026 Module page
"MAE": float(np.abs(err).mean()),
"MSE": float(mse),
"RMSE": float(mse ** 0.5),
"R2": float(1 - (err ** 2).sum() / ((y - y.mean()) ** 2).sum()),
}
x_te = X_te[:, 0]
model_pred = beta0 + beta1 * x_te # our fitted line
baseline_pred = np.full_like(y_te, baseline, dtype=float)
print("model: ", {k: round(v, 2) for k, v in scores(y_te, model_pred).items()})
print("baseline:", {k: round(v, 2) for k, v in scores(y_te, baseline_pred).items()})
model: {'MAE': 72.38, 'MSE': 7865.21, 'RMSE': 88.69, 'R2': 0.94}
baseline: {'MAE': 307.52, 'MSE': 126427.8, 'RMSE': 355.57, 'R2': -0.01}
The verdict is decisive: the model’s typical miss is about €89 against the baseline’s €356, and it explains
94% of the variance in rent while the baseline explains essentially none. (The baseline’s 𝑅2 is −0.01,
just below zero rather than exactly zero, because it predicts the training mean, not the test set’s own
mean; a constant that is not the evaluation set’s mean scores just under zero.) The line has learned
real signal from surface.
Example — letting the business choose the metric. A landlord who loses money in proportion
to each euro of misquoted rent cares about MAE — every euro counts the same. A pricing team
that can absorb small errors but is hurt badly by the occasional wildly wrong quote should optimise
RMSE, which punishes big misses hardest. The metric is a business decision, not a default.
Pitfall. Always report the metric on held-out data. Every score above is computed on y_te,
never on the training set. MAE or 𝑅2 measured on the training set flatters the model — it can
look excellent there and fail on new apartments.
Exercises
4.1. Compute the mean-predictor baseline — the single number it always predicts — and its
MAE on the test set. Check: the baseline predicts the training-label mean, about €1110, for every
flat.
4.2. Implement the mean-predictor baseline (fitted on the training set) and compare a fitted
model against it on the test set. Explain why a model that fails to beat the baseline has no value.
Check: the baseline’s test 𝑅2 is about 0, the fitted line’s about 0.94.
4.3. Compute MAE, MSE, RMSE and 𝑅2 for the simple model on the test set. Given two
contrasting business contexts, select and justify a different metric for each. Check: test RMSE ≈
€89, MAE ≈ €72.
15
