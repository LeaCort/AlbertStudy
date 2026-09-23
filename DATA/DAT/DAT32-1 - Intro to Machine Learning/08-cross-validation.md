# 8. Cross-validation

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 26-27*

Version of 13 September 2026 Module page
8. Cross-validation
The validation set we carved out has a weakness: its score depends on which apartments happened
to land in it. An unlucky split — all the expensive flats in validation — gives a pessimistic, noisy
estimate. With small datasets this randomness can dominate.
Example — the same model, five different scores. Score the identical simple-regression
model on five different validation folds and you get RMSE values of €85, €106, €89, €85 and €88.
Which is “the” performance? None alone; the honest answer is their average, €91, and the spread
(from €85 to €106) warns you how uncertain that average is — one unlucky fold reads €106. That
is precisely what cross-validation computes, and those are the real five numbers from the by-hand
code below.
Definition 19. k-fold cross-validation splits the data into 𝑘 equal folds. In turn, each fold is
held out as the validation set while the model is trained on the other 𝑘−1 folds; this yields 𝑘
scores, which are averaged. Every example is used for validation exactly once and for training
𝑘−1 times, so the estimate uses all the data and is far more stable than a single split.
the 5 folds of the data
Fold 1 val train train train train
Fold 2 train val train train train
Fold 3 train train val train train
Fold 4 train train train val train
Fold 5 train train train train val
Figure 10: 5-fold cross-validation. Each row is one round: a different fifth of the data (red) is held out
for validation while the rest (blue) trains the model. The five validation scores are averaged into one
robust estimate, and every example is validated exactly once.
The definition is the algorithm, so we can implement it by hand before reaching for a library. Shuffle
the row indices, cut them into 𝑘 blocks, and loop:
def kfold_rmse(X, y, k=5, seed=0):
idx = np.random.default_rng(seed).permutation(len(y))
folds = np.array_split(idx, k)
rmses = []
for i in range(k):
val_i = folds[i]
tr_i = np.concatenate([folds[j] for j in range(k) if j != i])
b0, b1 = ols_simple(X[tr_i], y[tr_i]) # train on k-1 folds
pred = b0 + b1 * X[val_i] # score the held-out fold
rmses.append(((y[val_i] - pred) ** 2).mean() ** 0.5)
return np.array(rmses)
r = kfold_rmse(surface, rent, k=5)
print(r.round(1), "mean", round(r.mean(), 1), "std", round(r.std(), 1))
26

Version of 13 September 2026 Module page
[ 84.7 105.6 88.7 85.4 88.4] mean 90.5 std 7.7
Once the mechanism is clear, scikit-learn does the same in one call — and this is what you use in
practice (it shuffles differently, so the folds differ, but the average agrees):
from sklearn.model_selection import KFold, cross_val_score
kf = KFold(n_splits=5, shuffle=True, random_state=0)
cv_scores = cross_val_score(LinearRegression(), surface.reshape(-1, 1), rent,
cv=kf, scoring="neg_root_mean_squared_error")
print((-cv_scores).round(1), "mean", round((-cv_scores).mean(), 1))
[83.8 95.9 88.9 96.8 88.1] mean 90.7
Cross-validation costs 𝑘 times the training, but on the small-to-medium datasets typical of an intro
course that cost is trivial and the gain in reliability is large. It is the default way to estimate perfor-
mance and, as we see next, to tune.
Exercises
8.1. Shuffle the row indices and cut them into 5 folds with np.array_split, then print each fold’s
size and confirm the folds together cover every row exactly once. Check: five folds whose sizes
sum to the number of rows, with no index repeated or missing.
8.2. Implement k-fold cross-validation by hand. Compare its averaged estimate, and the spread
of its per-fold scores, against the estimate from a single train/test split. Check: 5-fold RMSE for
the simple model averages about €91, with individual folds ranging from roughly €85 to €106.
27
