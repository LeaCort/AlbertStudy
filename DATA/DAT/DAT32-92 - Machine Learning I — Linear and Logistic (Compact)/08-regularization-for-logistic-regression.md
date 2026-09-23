# 8. Regularization for logistic regression

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 30-31*

Version of 13 September 2026 Module page
8. Regularization for logistic regression
Regularization carries over from Intro to Machine Learning essentially unchanged — the same L1
and L2 penalties, added now to the log loss instead of the RSS — and the same intuition for which to
prefer. It matters more here because the feature engineering above can multiply your feature count
(polynomials, interactions, one-hot levels) and invite overfitting.
Definition 21. Regularized logistic regression adds a coefficient penalty to the log loss:
𝑝 𝑝
𝐿 = log loss+𝜆∑𝛽2, 𝐿 = log loss+𝜆∑| |𝛽 | |.
L2 𝑗 L1 𝑗
𝑗=1 𝑗=1
As in linear models, L1 (lasso) drives some coefficients exactly to zero — automatic feature
selection — while L2 (ridge) shrinks coefficients smoothly toward zero for stability, never
quite eliminating them.
The choice mirrors the one you already know. Prefer L1 when you suspect many of your engineered
features are useless and you want a sparse, interpretable model that names the few that matter —
invaluable after a one-hot or polynomial expansion has produced hundreds of candidate features.
Prefer L2 when you believe most features contribute a little and you mainly want to keep coefficients
stable, especially when features are correlated (as interaction and polynomial terms inevitably are
with their parents).
Pitfall. scikit-learn’s LogisticRegression is regularized by default (L2, strength set by C, where
1
C = — so smaller C means stronger regularization). This is easy to miss: the model you get
𝜆
“out of the box” is already penalised. Set C deliberately and tune it by cross-validation, as you
tuned 𝜆 for ridge. And — as everywhere — scale features before penalising them, or the penalty
falls unevenly.
You pick the penalty with penalty= (L1 needs the liblinear or saga solver) and let
LogisticRegressionCV search C for you, scoring each candidate by cross-validation on the metric you
chose. Here we hand it a deliberately wide, partly-redundant feature set (degree-2 polynomials of
the numeric columns plus the one-hot categories) and let L1 prune it:
from sklearn.linear_model import LogisticRegressionCV
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder, PolynomialFeatures
from sklearn.pipeline import make_pipeline
# A deliberately wide feature set: degree-2 polynomials of the numeric columns
# (squares + interactions) plus one-hot categories — many of them redundant.
engineer = ColumnTransformer([
("num", make_pipeline(StandardScaler(),
PolynomialFeatures(degree=2, include_bias=False)), numeric),
("cat", OneHotEncoder(handle_unknown="ignore"), categorical),
])
Z_train = engineer.fit_transform(X_train)
30

Version of 13 September 2026 Module page
model = LogisticRegressionCV(
Cs=10, cv=5, penalty="l1", solver="liblinear", scoring="f1",
).fit(Z_train, y_train)
print(f"features: {Z_train.shape[1]}")
print(f"C picked by CV: {model.C_[0]:.4f}")
print(f"coefficients L1 drove to zero: {(model.coef_[0] == 0).sum()}")
features: 21
C picked by CV: 2.7826
coefficients L1 drove to zero: 2
L1 drove two of the engineered coefficients to exactly zero — a small selection here, but on a
wider expansion (hundreds of polynomial and one-hot columns) this is how a model names the few
features that carry the signal.
Exercises
8.1. Apply L1 and L2 regularization to a logistic regression with many engineered features.
Report which coefficients L1 drives to zero, tune C by cross-validation, and give a situation where
each penalty is the better choice.
Answers. (1) L1 zeros out coefficients (report the count); L2 keeps them small but non-zero; tune C by cross-validation.
Prefer L1 to select from many possibly useless features, L2 for stability among correlated ones.
31
