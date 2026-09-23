# 10. The end-to-end classification pipeline

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 33-34*

Version of 13 September 2026 Module page
10. The end-to-end classification pipeline
Everything in this book assembles into one reproducible workflow — the scikit-learn pipeline of
Intro to Machine Learning, now carrying a classifier and the classification evaluation toolkit. The
shape of a complete classification project:
Frame as Split & Encode, scale, Fit logistic Pick metric Evaluate &
classification seal test engineer (+ regularize) & threshold report
retune on validation
Figure 4: The end-to-end classification pipeline. Preprocessing (encode, scale, engineer) and the
model live inside one scikit-learn pipeline so every step is fitted on training data only and re-applied
identically under cross-validation and at test time. The metric and threshold are chosen on validation
from the business costs; the test set is opened once, at the end, for the report.
In code, the whole preprocessing-plus-model stack is one Pipeline, so cross-validation re-fits every
step — encoder, scaler, classifier — on each fold’s training part alone. This is the capstone template
the final exercise asks you to build:
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
pre = ColumnTransformer([
("num", StandardScaler(), numeric),
("cat", OneHotEncoder(handle_unknown="ignore"), categorical),
])
pipe = Pipeline([
("pre", pre),
("clf", LogisticRegression(penalty="l2", C=1.0, max_iter=1000)),
])
# honest CV estimate: each fold re-fits every step on its own training part
scores = cross_val_score(pipe, X_train, y_train, cv=5, scoring="f1")
print(f"cross-validated F1: {scores.mean():.3f} +/- {scores.std():.3f}")
pipe.fit(X_train, y_train) # then fit on all the training data
p_hat = pipe.predict_proba(X_test)[:, 1] # open the test set once, at the end
cross-validated F1: 0.561 +/- 0.039
The deliverable, though, is not that number but a business-oriented evaluation report: which
metric you chose and why (in terms of the cost of a false positive versus a false negative), the
confusion matrix translated into plain language, the operating threshold and what it buys, and an
honest statement of what the model gets wrong. Here is a short specimen, written for our churn
model from the numbers in this book — the genre the final exercise asks you to produce.
33

Version of 13 September 2026 Module page
Example — a specimen evaluation report. Model. Regularized logistic regression on sub-
scriber features, chosen for its interpretability (each feature carries a readable odds ratio) and low
operating cost; cross-validated F1 on the training data was 0.56.
Metric choice. We report on recall first. A missed churner costs the customer’s whole lifetime
value, while a false alarm costs one retention call — perhaps a hundred times less — so we care
most about how many real leavers we catch, and read precision alongside it to keep wasted calls
in view.
Results in plain language. On a held-out sample of 1200 subscribers, of every 100 customers who
really left, the model caught 48 and of every 100 customers it flagged for a call, 69 had genuinely
intended to leave. Put any real leaver next to a loyal customer and the model gives the leaver the
higher risk score 91 times out of 100, so its ranking is strong even where its yes/no calls at the
default cut are cautious.
Operating point. We run at a threshold of 0.5 for now. Lowering it to 0.3 would raise recall from
0.48 to 0.62 — catching more leavers — at the cost of dropping precision to 0.56 and roughly half
again as many calls. We recommend that trade once the retention team confirms the call budget.
What it gets wrong. At the current cut the model still misses just over half of all churners, and
one call in three lands on a customer who was not leaving. It should be retrained monthly and
never used to deny anyone service — only to prioritise who to contact.
That report — model plus justified evaluation plus clear communication — is the whole course in
one artefact.
Exercises
10.1. Build a complete scikit-learn pipeline (encode + scale + engineer + regularized logistic
regression), evaluate it under cross-validation with a justified metric and threshold, and produce
a one-page business-oriented evaluation report covering the confusion matrix in plain language,
the ROC/AUC as a ranking statement, the operating threshold and its trade-off, and what the
model gets wrong.
Answers. (1) Your report should name the metric and justify it by the cost of a false positive versus a false negative,
give the confusion matrix in plain language, state the AUC as a ranking chance and the ROC as a menu of operating
points, give the operating threshold and its trade-off, and admit what the model gets wrong; cross_val_score gives
the honest performance estimate.
One idea has run under everything here. Every tool in this book followed from a single change of
question — from regression’s “how much?” to “which?” and “yes or no?”. Make the target a category
and three things follow that do not follow in regression: the model must emit a probability rather
than a number, the two ways of being wrong stop being interchangeable, and the threshold that
turns the probability into a verdict becomes a business decision rather than a default. That is why
the model itself was the easy part — logistic regression is linear regression’s twin — and why the
weight of the course fell on evaluation: choosing, and defending to the people who act on it, how
you measure a classifier against the asymmetric costs of the decision it serves. Carry that instinct —
measure it against the decision — into every model you meet after this one.
34
