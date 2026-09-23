# 6. Underfitting and overfitting

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 19-22*

Version of 13 September 2026 Module page
6. Underfitting and overfitting
Linear regression assumes a straight-line relationship. But rent per square metre tends to fall for
larger flats — the rent-versus-surface curve bends. To see this clearly we zoom in on a small, delib-
erately curved slice of the rental market: fourteen apartments whose rent rises steeply for small flats
then flattens off. We can give a linear model the power to bend by feeding it powers of the feature,
𝑥,𝑥2,…,𝑥𝑑 — polynomial regression of degree 𝑑. That single knob, the degree, lets us watch the
central tension of all machine learning play out.
Example — three fits to the same curved, noisy data. Fit degree 1 (a line) and it is too rigid to
follow the bend — it misses in a systematic way (underfitting). Fit degree 10 and the curve threads
through every point, weaving between them and rising steeply near the edges (overfitting). Fit
degree 3 and it follows the real bend while ignoring the jitter. Only the middle fit will predict new
apartments well.
Underfit (deg 1) Good fit (deg 3) Overfit (deg 10)
Figure 6: The same fourteen curved, noisy points, three model complexities. Left: too rigid, missing
the bend (high error everywhere). Right: so flexible it interpolates the noise — it wiggles between
points and swings sharply at the edge (perfect on these points, useless on new ones). Centre: captures
the signal, ignores the noise.
Definition 15. A model underfits when it is too simple to capture the structure in the data: it
has high error on both the training set and unseen data. A model overfits when it is so flexible
it fits the noise in the training set: low training error but high error on unseen data. The gap
between training and unseen error is the fingerprint of overfitting.


## 6.1. The validation curve: which complexity?


The fourteen curved apartments are their own reproducible sample; we hold out four of them as a
validation set:
rng = np.random.default_rng(11)
cx = np.sort(rng.uniform(20, 120, 14)) # surface, m2
cy = (300 + 1100*np.sin(cx/75) + rng.normal(0, 45, 14)).round() # rent
val = [2, 6, 9, 12] # 4 held-out indices
tr = [i for i in range(14) if i not in val] # 10 training indices
19

Version of 13 September 2026 Module page
You diagnose which regime you are in by fitting each degree, then measuring error on the training
points and on the held-out validation points (columns: degree, training RMSE, validation RMSE):
for deg in range(1, 9):
coef = np.polyfit(cx[tr], cy[tr], deg) # fit on the training points
rmse = lambda xx, yy: ((yy - np.polyval(coef, xx)) ** 2).mean() ** 0.5
print(deg, round(rmse(cx[tr], cy[tr])), round(rmse(cx[val], cy[val])))
1 66 51
2 28 30
3 27 31
4 27 34
5 26 35
6 22 141
7 22 101
8 12 5442
Training error keeps falling as the degree rises, but validation error falls, bottoms out around degree
2–3, then climbs steeply — underfitting at degree 1 (both errors high), the sweet spot at degree 2–
3, and by degree 6–8 the validation error explodes while training error stays tiny (the signature of
overfitting). This plot, of training and validation error against model complexity, is useful enough to
have a name.
Definition 16. A validation curve plots training and validation error against model com-
plexity (here, the polynomial degree). Underfitting sits at low complexity (both errors high
and close); overfitting at high complexity (a widening gap — low training error, high validation
error); and the best complexity is where the validation error is lowest.
error
underfit overfit
validation
training
sweet spot model complexity
Figure 7: The validation curve, the shape traced by the numbers above. Training error (blue) always
falls as the model grows more flexible. Validation error (red) falls, bottoms out, then rises as the
model starts fitting noise. Choose the complexity at the bottom of the validation curve.


## 6.2. The learning curve: does more data help?


The validation curve answers which complexity to choose. A second, equally useful plot answers
a different question — would collecting more data help? — by fixing the model and varying the
amount of training data instead.
20

Version of 13 September 2026 Module page
Definition 17. A learning curve plots training and validation error against the training-set
size. An underfitting model’s two curves meet at a high error and stay there: more data does
not help, because the model is too simple to do better. An overfitting model shows a large gap
— low training error, high validation error — that narrows as the training set grows: here more
data does help, because more examples are harder to memorise than few.
Building one uses the same two measurements as before — training error and validation error —
recorded as the training set grows. A learning curve varies the amount of data, so we need more of
it than the fourteen-point sample above; we draw three hundred apartments from the same bending
rule. For each training-set size we fit on that many points and score one fixed validation set, averaging
over several random draws so that a single unlucky subset does not dominate (columns: degree,
training-set size, training RMSE, validation RMSE):
rng = np.random.default_rng(7)
gx = np.sort(rng.uniform(20, 120, 300)) # surface, m2
gy = (300 + 1100*np.sin(gx/75) + rng.normal(0, 60, 300)).round() # rent
perm = np.random.default_rng(0).permutation(300)
val_i, pool = perm[:100], perm[100:] # a fixed validation set; the rest a pool
def learning_curve(deg, sizes, repeats=30, seed=1):
r = np.random.default_rng(seed)
for m in sizes:
tr, va = [], []
for _ in range(repeats): # average over random
subsets of size m
s = pool[r.choice(len(pool), m, replace=False)]
mu, sd = gx[s].mean(), gx[s].std() # standardise, as for
gradient descent
coef = np.polyfit((gx[s] - mu) / sd, gy[s], deg)
pred = lambda xx: np.polyval(coef, (xx - mu) / sd)
rmse = lambda xx, yy: ((yy - pred(xx)) ** 2).mean() ** 0.5
tr.append(rmse(gx[s], gy[s])); va.append(rmse(gx[val_i], gy[val_i]))
print(deg, m, round(np.mean(tr)), round(np.mean(va)))
for deg in (1, 5):
learning_curve(deg, [15, 30, 60, 120, 200])
1 15 64 83
1 30 70 78
1 60 72 77
1 120 73 76
1 200 72 76
5 15 40 189
5 30 50 64
5 60 52 59
5 120 53 57
5 200 53 57
The two curves tell opposite stories. The degree-1 model is too rigid for the bend, so its two errors
converge together and high — around €74 — and no amount of extra data pulls that floor down: this
21

Version of 13 September 2026 Module page
is the mark of underfitting, and the cure is a more flexible model, not more data. The degree-5 model
starts with a wide gap — it fits fifteen points almost perfectly (training error €40) while predicting
the validation set poorly (€189) — but the gap shrinks steadily as data grows, until at 200 points the
two errors nearly meet at a lower value (about €57) than the rigid model ever reaches: this is the
mark of overfitting, and here more data genuinely helps.
Underfit model (degree 1) Overfit model (degree 5)
error error
≈189
validation
training validation
training
meet high — gap closes —
more data won’t help more data helps
training-set size training-set size
Figure 8: Two learning curves, drawn on the same scale. Left, an underfitting (degree-1) model:
training and validation error meet at a high floor, and more data cannot lower it. Right, an overfitting
(degree-5) model: a wide gap between low training error and high validation error narrows as the
training set grows, converging to a lower error than the rigid model reaches. Two curves meeting
high is the mark of underfitting; a gap that closes as data grows is the mark of overfitting.
Exercises
6.1. On the fourteen-point curved sample, fit a degree-1 and a degree-8 polynomial and compute
each one’s training and validation RMSE. Say which underfits and which overfits, and how the
two errors tell you so. Check: degree 1′s two errors are both high and comparable; degree 8′s training
error is tiny while its validation error explodes into the thousands.
6.2. Fit polynomials of degree 1 through 12 to a small, curved sample and plot a validation curve
(training and validation error against degree); identify the underfitting and overfitting regimes
and pick the degree where validation error is lowest. Then, on a larger curved sample, plot a
learning curve (training and validation error against training-set size) for a degree-1 model and a
degree-5 model, and read the regime off the shape of each. Check: on the validation curve, training
error falls monotonically while validation error bottoms out around degree 2–3 then climbs; on
the learning curves, the degree-1 model’s two errors meet high (around €75) whereas the degree-5
model’s wide gap closes toward a lower error (around €57) as the training set grows.
22
