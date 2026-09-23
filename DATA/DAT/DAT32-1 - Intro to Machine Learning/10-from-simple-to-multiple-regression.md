# 10. From simple to multiple regression

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 30-32*

Version of 13 September 2026 Module page
10. From simple to multiple regression
Surface alone ignores rooms and balcony, which clearly matter too. Multiple regression uses them
all at once.
Definition 21. Multiple linear regression predicts from several features:
𝑦̂= 𝛽 +𝛽 𝑥 +𝛽 𝑥 +…+𝛽 𝑥 .
0 1 1 2 2 𝑝 𝑝
Each coefficient 𝛽 is the predicted change in the target for a one-unit increase in feature 𝑥 with
𝑗 𝑗
all other features held fixed — the “all else equal” clause is what makes multiple regression
more than several simple ones stacked together.
Fitting all three features at once recovers coefficients in the ballpark of the rule we built the data
with (€9.5 per m², €55 per room, €110 for a balcony) — as close as 120 noisy examples allow:
model = LinearRegression().fit(X_tr, y_tr) # surface, rooms, balcony
print(model.coef_.round(2), round(model.intercept_, 1))
[ 10.44 41.59 117.35] 218.6
Compare surface’s coefficient here, €10.44, with the €12.0 we got from surface alone in Chapter 3.
The simple-regression slope was inflated because it silently carried the effect of rooms (bigger flats
have more rooms); once rooms is in the model explicitly, surface’s “all else equal” effect drops toward
its true €9.5. That shift is the whole point of the clause.
That “all else equal” interpretation runs into trouble when features move together.
Example — when two features carry the same information. Add a second feature, surface
in ft2. In principle it is just surface in m2 times 10.7639, but a real dataset never lines up that
perfectly — a second survey rounds to the nearest square foot — so the two columns are near-
duplicates, carrying essentially the same information twice. Fit the model on three bootstrap
resamples of the data and the two surface coefficients change wildly, even flipping sign, because
the model cannot decide how to divide one real effect between two near-identical features. Their
sum (and the prediction) stays stable throughout.
Definition 22. Multicollinearity is strong correlation among features. It makes individual
coefficients unstable and uninterpretable — small changes in the data swing them widely —
because the data cannot separate the effect of one correlated feature from another. The model’s
predictions can stay accurate even as its coefficients become meaningless.
A first diagnosis inspects the correlation matrix of the features — a pair correlating near 1.00 is the
red flag — and watches for coefficients that are implausibly large, unstable across resamples, or carry
the wrong sign. The correlation matrix is printed here as a four-by-four grid, in the column order
surface, surface-in-ft2, rooms, balcony:
30

Version of 13 September 2026 Module page
rng = np.random.default_rng(3)
surface_ft2 = (surface * 10.7639 + rng.normal(0, 3, 200)).round() # a near-duplicate
Xdup = np.column_stack([surface, surface_ft2, rooms, balcony])
print(np.corrcoef(Xdup, rowvar=False).round(2))
boot = np.random.default_rng(0)
for t in range(3):
idx = boot.integers(0, 200, 200) # a bootstrap resample
m = LinearRegression().fit(Xdup[idx], rent[idx])
print(t, round(m.coef_[0], 1), round(m.coef_[1], 1))
[[1. 1. 0.92 0.04]
[1. 1. 0.92 0.04]
[0.92 0.92 1. 0.02]
[0.04 0.04 0.02 1. ]]
0 15.3 -0.5
1 -19.1 2.8
2 -20.7 2.9
The correlation of 1.00 between the two surface columns is the diagnostic; the bootstrap coefficients
confirm it. The first column’s coefficient reads €15.3, then −€19.1, then −€20.7 across the three
resamples — swinging widely and flipping sign — while the two columns’ combined per-m2 effect
stays near €10 and the predictions barely move.
The correlation matrix has one blind spot: it compares features only two at a time. A feature can be
a near-perfect combination of several others — and so ruin the coefficients just as badly — while
correlating only weakly with each of them individually. The standard tool that catches this general
case gives one number per feature.
Definition 23. The variance inflation factor (VIF) of a feature 𝑥 measures how much
𝑗
collinearity inflates the variance of its coefficient. Regress 𝑥 on all the other features and let
𝑗
𝑅2 be that regression’s 𝑅2; then
𝑗
1
VIF = .
𝑗 1−𝑅2
𝑗
A VIF of 1 means 𝑥 is uncorrelated with the rest. As a rule of thumb, a VIF above about 5 to
𝑗
10 signals problematic multicollinearity. Because 𝑅2 comes from regressing 𝑥 on every other
𝑗 𝑗
feature at once, VIF flags a feature collinear with a combination of others even when no single
pairwise correlation is large — exactly what the correlation matrix misses.
def vif(X):
vifs = []
for j in range(X.shape[1]):
others = np.delete(X, j, axis=1) # every feature except j
r2 = LinearRegression().fit(others, X[:, j]).score(others, X[:, j])
vifs.append(1 / (1 - r2)) # VIF_j = 1 / (1 - R^2_j)
return np.array(vifs)
31

Version of 13 September 2026 Module page
for name, v in zip(["surface", "surface_ft2", "rooms", "balcony"], vif(Xdup)):
print(f"{name:12} {v:8.1f}")
surface 9460.1
surface_ft2 9454.4
rooms 6.6
balcony 1.0
The two surface columns score in the thousands — collinearity so severe the variance formula all but
blows up — while balcony (1.0) is clean and rooms (6.6) sits just past the rule-of-thumb line, picking
up its genuine 0.92 correlation with surface that the matrix already showed.
The remedy is usually to drop or combine the redundant features — or to use ridge regularization,
which stabilises exactly this situation.
Exercises
10.1. Fit multiple regression on all three features and read off the three coefficients, interpreting
each “all else equal” in the units of the problem. Check: the coefficients are roughly €10 per m²,
€42 per room, and €117 for a balcony.
10.2. Building on the previous exercise, note how surface’s coefficient changed from its simple-
regression value. Then add surface-in-ft2 as a near-duplicate feature, exhibit the resulting
coefficient instability across resamples, and diagnose the multicollinearity from both the corre-
lation matrix and the variance inflation factor. Check: the duplicated pair correlates at 1.00, its
coefficients swing wildly across resamples, and its VIF runs into the thousands while balcony’s stays
near 1.
32
