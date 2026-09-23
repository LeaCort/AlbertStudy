# 4. The decision threshold and the ROC curve

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 16-19*

Version of 13 September 2026 Module page
4. The decision threshold and the ROC
curve
So far we thresholded at 0.5 by reflex. But the threshold is an adjustable setting, and moving it is
the cheapest, most powerful lever in classification — no retraining required.


## 4.1. Threshold as a business lever


Definition 10. The decision threshold 𝑡 converts a probability into a class: predict positive
when 𝑝̂≥ 𝑡. Lowering 𝑡 flags more cases; raising 𝑡 flags fewer.
The two metrics do not respond to that move in the same way. Lowering 𝑡 can only turn negatives
into positives, so it can only add true positives: recall rises (or holds) as 𝑡 falls and falls as 𝑡 rises —
a strict, guaranteed law. Precision usually moves the opposite way — fewer, more confident flags
tend to be purer — but this is only a tendency, not a law. Whether each newly flagged case is a true
or a false positive decides whether precision ticks up or down, so a precision curve swept across 𝑡 is
typically jagged, not smoothly monotone; you may even see precision dip as you raise 𝑡. Recall you
can promise; precision you can only expect.
Moving the threshold in code is just re-thresholding the stored probabilities — no fit in sight:
from sklearn.metrics import precision_score, recall_score
print(" t flagged precision recall")
for t in [0.3, 0.5, 0.8]:
y_t = (p_hat >= t).astype(int) # same p_hat, different cut
print(f"{t:.1f} {y_t.sum():7d} {precision_score(y_test, y_t):9.2f} "
f"{recall_score(y_test, y_t):6.2f}")
t flagged precision recall
0.3 140 0.56 0.62
0.5 90 0.69 0.48
0.8 28 0.86 0.19
Example — adjusting the threshold for the retention team. Read the table straight off the
run. At 𝑡 = 0.5 the model flags 62 + 28 = 90 subscribers at 0.69 precision and 0.48 recall. If the
team has budget for far fewer calls and wants each to land on a real churner, raise 𝑡 to 0.8: now it
flags only 28 high-certainty cases at 0.86 precision — many fewer wasted calls — but recall falls
to 0.19, so most churners slip through. If instead a lost churner is very costly and calls are cheap,
lower 𝑡 to 0.3 to catch more (140 flagged, recall 0.62) at the price of more false alarms (precision
0.56). Same model, same coefficients — the threshold alone re-balances the two errors to fit the
budget and the costs.
16

Version of 13 September 2026 Module page
Pitfall. The default 0.5 threshold is a convention, not a law, and it is rarely optimal on an
imbalanced or cost-asymmetric problem. Choosing the threshold is a business decision driven
by the relative cost of a false positive versus a false negative — not a setting to leave at its default.
And like any tuning choice, pick it on validation data, never on the test set.
Remark. The threshold is this course’s lever on imbalance, but not the only one
you will meet. Two others are worth knowing by name: class weighting (scikit-learn’s
class_weight="balanced" makes each rare-class error count for more during fitting) and
resampling (over- or under-sampling to even the classes before training). Both are standard
practice; both are beyond this course, which stays on metric choice and thresholding. If a
problem stays hard after tuning the threshold, these are where to look next.


## 4.2. The ROC curve


A model that has to commit to one threshold hides how it would behave at every other. The ROC
curve shows them all at once, which lets you compare models independently of any single threshold.
Definition 11. The ROC curve (Receiver Operating Characteristic) plots the true-positive
rate (recall, TP/(TP+FN)) against the false-positive rate (FP/(FP+TN)) as the threshold
sweeps from 1 down to 0. Each point is the model at one threshold; the diagonal is a random
classifier.
Both the curve and its area come straight from the stored probabilities:
from sklearn.metrics import roc_curve, roc_auc_score
import matplotlib.pyplot as plt
fpr, tpr, thresholds = roc_curve(y_test, p_hat) # one (fpr, tpr) point per threshold
auc = roc_auc_score(y_test, p_hat) # ranking quality, one number
plt.plot(fpr, tpr, label=f"AUC = {auc:.2f}")
plt.plot([0, 1], [0, 1], "--") # the random-classifier diagonal
plt.xlabel("false-positive rate"); plt.ylabel("true-positive rate"); plt.legend()
print(f"AUC = {auc:.2f}")
17

Version of 13 September 2026 Module page
Figure 3: The ROC curve of our churn model on the test set. Sweeping the threshold traces the curve
from the top-right (threshold 0: flag everything) to the origin (threshold 1: flag nothing). Because the
curve bows hard toward the top-left corner — high recall reached while the false-alarm rate is still
low — the model ranks churners well above stayers; the dashed diagonal is the no-skill line a coin-
flip would trace. The area under the curve, 0.91 here, summarises the whole picture in one number.
Definition 12. The AUC-ROC (Area Under the ROC Curve) summarises the curve as a single
number in [0,1]. It equals the probability that the model scores a random positive example
higher than a random negative one. AUC = 1 is perfect ranking, AUC = 0.5 is random, and
AUC is threshold-independent — it measures how well the model ranks cases, separate from
where you eventually cut.
Example — AUC compares models, the threshold tunes one. You compare two churn models
and model A has AUC 0.88 versus model B’s 0.81 — on average across all thresholds, A ranks a
random churner above a random stayer more often, so as a single summary of ranking quality it is
the better model and the one to pick first. Read that as an average, not a guarantee at each cut: two
ROC curves can cross, so the lower-AUC model may still win at one particular threshold. Having
picked A on its AUC, you then choose A’s operating threshold from the business costs. AUC is for
choosing the model; the threshold is for operating it. Do not confuse the two decisions.
Pitfall. AUC can look reassuringly high on a severely imbalanced problem even when precision
at your chosen threshold is poor, because the false-positive rate has a huge negative denominator
that hides a lot of false alarms. When positives are rare and precision is what matters, do not stop
at AUC: report precision and recall at the threshold you will actually deploy. (Practitioners
also plot precision directly against recall as the threshold sweeps — the precision–recall curve
— which, unlike the ROC, is not flattered by a large easy-negative class.)
18

Version of 13 September 2026 Module page


## 4.3. Communicating results in plain language


A confusion matrix and a ROC curve are inputs to a decision made by people who do not know
what recall is. Translate every one of them.
For the confusion matrix and its metrics, replace the ratios with counts of people. Instead of
“recall is 0.48,” say “of every 100 customers who will actually leave, today’s model catches 48 and
misses 52.” Instead of “precision is 0.69,” say “of every 100 customers we call, 69 really were about
to leave and 31 were a wasted call.” Then connect the threshold to money: “lowering the cut would
catch more leavers but add many more wasted calls — worth it only if a saved customer is worth
more than those calls.”
For the ROC curve and AUC, do not say “AUC” at all. The AUC is a ranking score, so translate it
as ranking: “if you put one real leaver and one loyal customer side by side, the model gives the leaver
the higher risk score 91 times out of 100.” And read the curve as a menu of operating points, not
a piece of geometry: “each point on this curve is one possible call list; moving up the curve catches
more leavers but wastes more calls, and we get to pick the point that matches the budget.” A manager
needs the trade-off the curve offers and the confidence the AUC expresses — never the words “true-
positive rate” or “area under the curve.” That translated sentence, not the metric, is the deliverable.
Exercises
4.1. Sweep the decision threshold from 0 to 1 and plot precision and recall against it. Pick a
threshold for a stated budget/cost scenario and justify it. Explain why the threshold must be
chosen on validation, not test, data.
4.2. Plot a ROC curve for a fitted model and compute its AUC. Compare two models by AUC,
then explain why AUC chooses the model while the threshold operates it.
4.3. Take the confusion matrix and the ROC curve of a fitted model and write a two-paragraph
plain-language report for a non-technical manager. Translate recall and precision into “of 100
real leavers we catch X” and “of 100 we call, Y were right”; translate the AUC as a ranking chance
(“shown one leaver and one stayer, the model ranks the leaver higher Z times in 100”); read the
ROC curve as a menu of call lists; and state what each error costs and what moving the threshold
would do. Use no technical terms — no “recall,” “precision,” “true-positive rate” or “AUC.”
Answers. (1) As 𝑡 rises, recall falls for certain while precision tends to rise — expect a jagged precision curve, not a
monotone one, so do not be surprised by a dip. Justify your pick by where extra catches stop being worth the extra
false alarms for the stated budget — and choose it on validation, never test. (2) The higher-AUC model ranks better
at every threshold, so pick it first, then set the threshold from costs on validation. (3) No jargon: translate recall and
precision into “of 100 real leavers we catch X” and “of 100 we call, Y were right,” translate AUC as a ranking chance
out of 100, describe the ROC as a set of possible call lists to choose among, state the cost of each error, and say what
moving 𝑡 would buy.
19
