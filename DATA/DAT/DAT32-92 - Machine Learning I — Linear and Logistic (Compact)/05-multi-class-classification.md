# 5. Multi-class classification

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 20-22*

Version of 13 September 2026 Module page
5. Multi-class classification
Churn is binary, but many problems are not: which of five subscription plans will a customer upgrade
to, which of a dozen support categories a ticket belongs to. Logistic regression extends to these in two
standard ways.


## 5.1. One-vs-rest


Definition 13. One-vs-rest (OvR, also one-vs-all) trains one binary classifier per class, each
distinguishing its class from all the others combined. To predict, run all 𝐾 classifiers and choose
the class whose classifier outputs the highest probability.
Example — five plans, five classifiers. For five plans, OvR trains “Basic vs not-Basic,” “Standard
vs not-Standard,” and so on — five logistic regressions. A new customer is scored by all five; if
the Standard classifier says 0.71 and every other says below 0.5, predict Standard. OvR is simple
and reuses the binary model you already have unchanged — in scikit-learn you get it explicitly by
wrapping the model in OneVsRestClassifier.


## 5.2. Softmax (multinomial logistic regression)


Definition 14. Softmax regression (multinomial logistic regression) generalises the sigmoid
to 𝐾 classes directly. It computes a linear score 𝑧 per class and converts the whole vector into
𝑘
probabilities that sum to 1:
𝑒𝑧
𝑘
𝑃(𝑦 = 𝑘|𝑥) = .
∑ 𝐾 𝑒𝑧 𝑗
𝑗=1
The predicted class is the one with the highest probability.
The practical difference: OvR trains 𝐾 independent models whose probabilities need not be jointly
coherent, while softmax fits one model whose 𝐾 probabilities are guaranteed to form a proper distri-
bution summing to 1. Softmax is usually the cleaner choice when the classes are mutually exclusive;
OvR is a robust, simple option when you want one tunable model per class. In scikit-learn, a plain
LogisticRegression already fits the softmax (multinomial) model for you; OvR is one wrapper away.
We fit both on plans.csv, whose five plans are genuinely imbalanced — a rare “Ultra” plan among
four common ones:
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.multiclass import OneVsRestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.metrics import f1_score, classification_report, confusion_matrix
20

Version of 13 September 2026 Module page
# plans.csv: which of five plans a customer upgraded to — a five-class target.
plans = pd.read_csv("plans.csv")
Xp = plans.drop(columns="plan")
yp = plans["plan"]
Xp_train, Xp_test, yp_train, yp_test = train_test_split(
Xp, yp, test_size=0.2, random_state=0, stratify=yp)
softmax = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))
ovr = make_pipeline(StandardScaler(),
OneVsRestClassifier(LogisticRegression(max_iter=1000)))
softmax.fit(Xp_train, yp_train)
ovr.fit(Xp_train, yp_train)
pred_softmax = softmax.predict(Xp_test)
pred_ovr = ovr.predict(Xp_test)
print("classes:", list(softmax.classes_))
print(f"softmax macro-F1: {f1_score(yp_test, pred_softmax, average='macro'):.2f}"
f" micro-F1: {f1_score(yp_test, pred_softmax, average='micro'):.2f}")
print(f"OvR macro-F1: {f1_score(yp_test, pred_ovr, average='macro'):.2f}"
f" micro-F1: {f1_score(yp_test, pred_ovr, average='micro'):.2f}")
# The K x K confusion matrix the per-class report is built from: rows are the
# actual plan, columns the predicted one, the diagonal correct.
cm = confusion_matrix(yp_test, pred_softmax, labels=softmax.classes_)
grid = pd.DataFrame(cm, index=softmax.classes_, columns=softmax.classes_)
grid.index.name = "actual\\pred"
print(grid)
print(classification_report(yp_test, pred_softmax, digits=2))
classes: ['Basic', 'Family', 'Premium', 'Standard', 'Ultra']
softmax macro-F1: 0.56 micro-F1: 0.73
OvR macro-F1: 0.53 micro-F1: 0.71
Basic Family Premium Standard Ultra
actual\pred
Basic 183 14 10 27 0
Family 28 61 6 26 0
Premium 15 6 69 13 0
Standard 30 14 10 268 0
Ultra 8 3 1 8 0
precision recall f1-score support
Basic 0.69 0.78 0.73 234
Family 0.62 0.50 0.56 121
Premium 0.72 0.67 0.69 103
Standard 0.78 0.83 0.81 322
Ultra 0.00 0.00 0.00 20
accuracy 0.73 800
macro avg 0.56 0.56 0.56 800
weighted avg 0.70 0.73 0.71 800
21

Version of 13 September 2026 Module page


## 5.3. Evaluating multi-class models


The confusion matrix generalises to a 𝐾 ×𝐾 grid — the five-by-five table in the run above. Rows are
the actual plan, columns the predicted one (the same axes as Figure 2), and the diagonal holds the
correct predictions. Read down the Ultra row: its 20 customers are scattered across the four common
plans’ columns and its diagonal cell is 0; in fact the whole Ultra column is zero — the model never
once predicts Ultra, so every real Ultra customer is misclassified. That empty diagonal cell is exactly
why Ultra’s per-class F1 is 0.00, and it is the fact the averages below turn on. Precision, recall and F1
are computed per class (treating that class as positive, the rest as negative) and then averaged —
and how you average matters.
Definition 15. Macro-averaging computes the metric for each class and takes the plain
mean, weighting every class equally. Micro-averaging pools all classes’ TP, FP, FN into one
calculation, weighting every example equally (so large classes dominate). Weighted averaging
averages per-class metrics weighted by class size.
The run shows the divergence directly: micro-F1 (0.73) sits well above macro-F1 (0.56). Micro-aver-
aging pools every example, so it is carried by the common plans the model serves well — Standard
(F1 0.81) and Basic (F1 0.73), the two largest classes in the per-class report. Macro-averaging weights
every class equally, so the rare Ultra plan — which the model never once predicts correctly (F1 0.00)
— counts as much as any common plan and drags the average down. Micro flatters; macro exposes.
Pitfall. On imbalanced multi-class data the averaging choice changes the story. Micro-average
is dominated by the big classes and can look excellent while a small but important class is
handled terribly; macro-average exposes that by giving the rare class equal say. Choose the
average to match what you care about — and always state which one you reported, because “F1
= 0.82” is ambiguous until you do.
Exercises
5.1. Train a multi-class classifier with one-vs-rest and with softmax on a genuinely multi-class
target (three or more classes). Compare their predictions, build the 𝐾 ×𝐾 confusion matrix, and
report macro- and micro-averaged F1, explaining which class drives the gap between the two
averages and why.
Answers. (1) Macro- and micro-F1 agree when classes are balanced and diverge under imbalance — micro tracks the
big classes, macro exposes a poorly served rare one; name the class whose weak per-class F1 opens the gap.
22
