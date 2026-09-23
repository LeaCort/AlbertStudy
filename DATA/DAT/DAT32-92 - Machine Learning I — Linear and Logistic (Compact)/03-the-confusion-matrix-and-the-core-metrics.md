# 3. The confusion matrix and the core metrics

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 12-15*

Version of 13 September 2026 Module page
3. The confusion matrix and the core
metrics
We have probabilities and, after thresholding, predicted classes. Now: is the classifier any good?
“What fraction did it get right?” is the first instinct and the first trap. Every classification metric is
built from one small table, so we build it first.


## 3.1. The confusion matrix


Definition 6. For binary classification with a chosen threshold, the confusion matrix cross-
tabulates predicted class against actual class into four counts:
• True Positive (TP): predicted positive, actually positive.
• False Positive (FP): predicted positive, actually negative — a false alarm.
• False Negative (FN): predicted negative, actually positive — a miss.
• True Negative (TN): predicted negative, actually negative.
By convention the positive class is the event of interest (here, “churn”).
Pred: churn Pred: stay
Actual: TP FN
churn correct catch missed churner
Actual: FP TN
stay false alarm correct pass
Figure 2: The confusion matrix for churn prediction — actual class on the rows, predicted on the
columns, the same axes scikit-learn uses. We list the positive class (churn) first so the true-positive
cell sits top-left; scikit-learn instead orders classes numerically (0 = stay first), so its printed matrix
leads with “stay” (see the code below). The green diagonal is correct decisions; the red off-diagonal
is the two kinds of error: a false negative (FN) is a churner you failed to call, a false positive (FP) a
loyal customer you called for nothing. Almost every metric below is a ratio of these four cells.


## 3.2. Accuracy and why it lies


The first instinct is to ask what fraction of predictions the model got right — and a single example is
enough to see why that instinct is dangerous.
Example — the 97%-accurate model that is worthless. Imagine an even more imbalanced
case than ours: only 3% of subscribers churn in a given month. A “model” that predicts stay for
everyone is right on all 97% who stay — 97% correct. Yet it catches zero churners, so the retention
team gets an empty call list. That fraction-correct score is an artefact of the class imbalance, not
evidence of skill.
That “fraction correct” is accuracy, and the example is the warning that comes with it.
12

Version of 13 September 2026 Module page
Definition 7. Accuracy is the fraction of correct predictions:
TP+TN
Accuracy = .
TP+TN+FP+FN
Accuracy is intuitive and, on imbalanced problems, often useless: it rewards the model for the easy
majority and stays silent about the rare class you actually care about.


## 3.3. Precision and recall


The fix is to stop scoring the easy majority and ask two sharper questions about the positive class —
and which one you care about depends entirely on which error hurts.
Example — which one the business needs. A cancer screening test must not miss a real
tumour: a missed case (FN) can be fatal, while a false alarm (FP) costs only a follow-up scan. So it
is tuned to catch every real case, accepting more false alarms. A spam filter faces the opposite:
sending one real, important email to the junk folder (FP) is far worse than letting one spam reach
the inbox (FN), so it is tuned to make each flag count, accepting more misses. The same model,
the same maths — opposite priorities, set by the cost of each error.
Those two priorities have names: recall for “catch every real case,” precision for “make each flag
count.”
Definition 8. Precision answers “of those we flagged positive, how many truly were?”:
TP
Precision = .
TP+FP
Recall (sensitivity, true-positive rate) answers “of all true positives, how many did we catch?”:
TP
Recall = .
TP+FN
So precision is the metric to watch when acting on a positive is expensive (the spam filter,
guarding against false alarms) and recall the one to watch when missing a positive is expensive
(the cancer screen, guarding against misses).
Pitfall. Precision and recall trade off against each other and you can trivially max out either
alone. Flag everyone as positive and recall is a perfect 100% (you missed no one) while precision
collapses. Flag only your single most certain case and precision may be 100% while recall is near
zero. A number quoted without its partner is meaningless — always report precision and recall
together.


## 3.4. The F1 score


Precision and recall can each be maxed out alone (the pitfall above), so a single honest summary
must combine them in a way neither extreme can fool — and the obvious average is not it.
13

Version of 13 September 2026 Module page
Example — why harmonic, not arithmetic. The “flag everyone” model has recall 1.0 and
precision, say, 0.03. Their arithmetic mean is a misleadingly respectable 0.515 — yet the model
is useless, so a fair summary should sit near zero. The harmonic mean does: 2(0.03⋅1.0)/(0.03+
1.0) ≈ 0.058, because it is pulled close to the smaller of the two numbers.
That harmonic mean of precision and recall is the F1 score.
Definition 9. The F1 score is the harmonic mean of precision and recall:
Precision⋅Recall
F1 = 2⋅ .
Precision+Recall
The harmonic mean is close to the smaller of the two, so F1 is high only when both precision
and recall are high. A model that scores 1.0 on one and 0.0 on the other gets F1 = 0, not 0.5.
The four metrics are not four measurements — they are four ratios of the same four counts. Watch
them all fall out of our model’s test-set matrix.
Example — one matrix, every metric. Our churn model is scored on the sealed test set of 1200
subscribers, of whom 128 truly churn. At the default threshold it produces this confusion matrix:
Pred. churn Pred. stay
Actual churn TP = 62 FN = 66
Actual stay FP = 28 TN = 1044
Every metric now reads off these four numbers:
62+1044 62
Accuracy = = 0.92, Precision = = 0.69,
1200 62+28
62 0.69⋅0.48
Recall = = 0.48, F1 = 2⋅ = 0.57.
62+66 0.69+0.48
Read the outcome from the numbers: 92% accuracy looks fine, yet the model catches only 48 of
every 100 real churners (recall) and 69 of every 100 it flags are genuine (precision). Accuracy
concealed both facts; precision and recall reveal them; F1 combines the two into one honest 0.57.
scikit-learn computes all of this for you. Its confusion_matrix uses the same axes as Figure 2 (actual
on the rows, predicted on the columns) but orders the classes by label value — 0 = stay before 1 =
churn — so the printout leads with the stay row and TN lands in the top-left, mirror-imaged from the
teaching layout:
from sklearn.metrics import confusion_matrix, classification_report
print(confusion_matrix(y_test, y_pred))
# rows = actual (0 = stay, 1 = churn), columns = predicted, scikit-learn's order
print(classification_report(y_test, y_pred, target_names=["stay", "churn"], digits=2))
14

Version of 13 September 2026 Module page
[[1044 28]
[ 66 62]]
precision recall f1-score support
stay 0.94 0.97 0.96 1072
churn 0.69 0.48 0.57 128
accuracy 0.92 1200
macro avg 0.81 0.73 0.76 1200
weighted avg 0.91 0.92 0.92 1200
F1 is the default single-number metric for imbalanced binary problems, but it bakes in an assumption
that precision and recall matter equally. When they do not — when a miss costs 150 times a
false alarm — F1 is the wrong summary and you should go back to reporting precision and recall
separately, or weight them deliberately.
Exercises
3.1. On an imbalanced dataset, build the confusion matrix and compute accuracy, precision,
recall and F1. Exhibit a trivial majority-class predictor with high accuracy but zero recall, and
explain why accuracy is the wrong metric here.
3.2. For two contrasting problems (one where misses are costly, one where false alarms are
costly), select and justify precision, recall or F1, and state which class is positive.
Answers. (1) A “predict the majority” model has recall 0 on the rare positive class while its accuracy equals the
majority’s share; your four counts must reproduce accuracy, precision, recall and F1 through the chapter’s formulas.
(2) Misses costly (disease, fraud) → optimise recall; false alarms costly (marking real email as spam, expensive
interventions) → precision; comparable costs → F1.
15
