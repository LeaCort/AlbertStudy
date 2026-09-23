# 7. Regularization

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 23-25*

Version of 13 September 2026 Module page
7. Regularization
The overfitting cure need not be a coarser model. Overfit linear models reveal themselves through
large, opposing coefficients that let the curve swing wildly. Regularization tames this by adding
the size of the coefficients to the loss, so the optimiser must trade fit against simplicity.
Definition 18. Regularization adds a penalty on coefficient size to the loss. L2 regularization
(ridge) penalises the sum of squared coefficients; L1 regularization (lasso) penalises the sum
of absolute coefficients:
𝑝 𝑝
𝐿 = RSS+𝜆∑𝛽2, 𝐿 = RSS+𝜆∑| |𝛽 | |.
ridge 𝑗 lasso 𝑗
𝑗=1 𝑗=1
The strength 𝜆 ≥ 0 controls the trade-off: 𝜆 = 0 recovers plain OLS, and larger 𝜆 shrinks coeffi-
cients harder.
The two penalties differ in a consequential way: L2 shrinks the coefficient vector smoothly and
rarely sends any coefficient to exactly zero, while L1 drives some coefficients exactly to zero,
switching those features off entirely — it performs automatic feature selection.
The reason is geometric, and seeing it takes one bridge from the penalty above. Adding a penalty 𝜆⋅
(size) to the loss has an equivalent constrained form: minimise the RSS while keeping the coeffi-
cients inside a fixed budget — ∑ 𝛽2 ≤ 𝑡 for ridge, ∑ | |𝛽 | | ≤ 𝑡 for lasso — where a larger 𝜆 matches a
𝑗 𝑗 𝑗 𝑗
tighter budget 𝑡. That budget is a region in coefficient space: a circle for ridge, a diamond for lasso.
The fitted coefficients sit where the RSS contours, growing outward from the unconstrained OLS
point, first touch that region. L1′s diamond has sharp corners on the axes, so the first touch tends
to land at a corner — where one coordinate is exactly zero; L2′s smooth circle has no corners, so its
touch point almost always keeps every coordinate nonzero.
𝛽 𝛽
2 2
𝛽 𝛽
1 1
L2 (ridge): round region L1 (lasso): diamond region
touch point off the axes — both 𝛽 nonzero touch at a corner — 𝛽 =0, feature dropped
1
Figure 9: Why L1 selects features and L2 does not. The grey ellipses are loss contours; the coloured
shape is the region the penalty allows. The fit is the first contour to touch that region. L2′s circle is
touched off the axes (both coefficients survive); L1′s diamond is usually touched at a corner, forcing
a coefficient to exactly zero.
We can watch this happen. Add three pure-noise features to our data, standardise so the penalty
treats every coefficient on the same footing, and compare plain OLS, ridge and lasso:
23

Version of 13 September 2026 Module page
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import StandardScaler
rng = np.random.default_rng(1)
noise_feats = rng.normal(0, 1, (200, 3)) # 3 irrelevant columns
Xreg = np.column_stack([surface, rooms, balcony, noise_feats])
Xr_tr, Xr_te, yr_tr, yr_te = train_test_split(Xreg, rent, test_size=0.3,
random_state=0)
scaler = StandardScaler().fit(Xr_tr) # fit on TRAIN only
Xr_tr = scaler.transform(Xr_tr)
# feature order: surface rooms balcony noise1 noise2 noise3
coefs = {}
for name, model in [("OLS ", LinearRegression()),
("Ridge", Ridge(alpha=10)),
("Lasso", Lasso(alpha=20, max_iter=10000))]:
model.fit(Xr_tr, yr_tr)
coefs[name.strip()] = model.coef_
print(name, model.coef_.round(1))
OLS [301.6 43.3 56. 0.4 10.4 -9.3]
Ridge [233.8 98.1 53.8 4.8 13.4 -7.7]
Lasso [296.3 29. 36.7 0. 0. -0. ]
The six coefficients are, in order, surface, rooms, balcony, then the three pure-noise features.
Lasso set all three noise coefficients to exactly zero, keeping only the genuine features — automatic
feature selection. Ridge kept every coefficient nonzero and pulled the overall coefficient vector in:
its length falls from 310.1 (OLS) to 259.7. But shrinking the vector is not the same as shrinking each
coefficient. Surface and rooms are correlated here — bigger flats have more rooms, as we saw in
Chapter 3 — and ridge shifted weight off surface (301.6 → 233.8) onto the collinear rooms (43.3 →
98.1), whose coefficient more than doubled. Ridge redistributes weight across correlated features
rather than driving every coefficient down one by one — the very behaviour that makes it the steadier
choice when features move together. (Because the features are standardised, these coefficients are on
a common “per standard deviation” scale, which is what makes the penalty fair and the magnitudes
comparable.)
So: prefer L1 (lasso) when you suspect many features are irrelevant and want a sparse, interpretable
model that names the few that matter; prefer L2 (ridge) when you believe most features contribute
a little and you only want to keep their magnitudes under control — especially when features are
correlated, where ridge is the steadier choice.
Exercises
7.1. Standardise the six features and fit lasso (L1) once. List which coefficients it sets to exactly
zero and which it keeps. Check: the three noise-feature coefficients are exactly 0; the three genuine
features stay nonzero.
7.2. Apply L1 (lasso) and L2 (ridge) regularization to the standardised multi-feature data (with
a few added noise features). Report which coefficients each drives toward or exactly to zero,
and give a situation where each penalty is the better choice. Check: lasso sets the noise-feature
24

Version of 13 September 2026 Module page
coefficients to exactly 0; ridge keeps every coefficient nonzero, shrinking the vector overall rather than
each coefficient one by one.
25
