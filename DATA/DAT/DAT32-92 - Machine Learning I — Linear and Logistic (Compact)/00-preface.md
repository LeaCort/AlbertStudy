# Preface

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 4*

Version of 13 September 2026 Module page
Preface
In Intro to Machine Learning you walked the complete machine-learning cycle once, on linear
regression: you defined a target, split the data, beat a baseline, fitted with ordinary least squares
and with gradient descent, diagnosed overfitting from learning curves, controlled it with L1 and L2
regularization, estimated performance honestly with k-fold cross-validation, tuned hyperparameters
on a validation set, extended to multiple features, and packaged everything in a reproducible scikit-
learn pipeline. That same cycle underlies this course. We do not re-teach it; we assume you own it.
What changes here is the question. Regression predicts a number — a rent, a demand, a revenue.
But most decisions a business actually makes are not “how much?” they are “which one?” and “yes
or no?”: will this customer churn, is this transaction fraud, should this email reach the inbox, will this
loan default. That is classification, and it is the task type that dominates applied machine learning.
The model we anchor on is logistic regression. The name is misleading — it is a classification
model, not a regression one — but it is also a promise: it is linear regression’s twin. It is a weighted
sum of features, exactly as before; we simply pass that sum through one function that turns it into
a probability. Everything you know about coefficients, gradient descent and regularization transfers
almost unchanged.
The genuinely new material is evaluation. In regression, “how wrong?” had a clean answer in
the units of the target. In classification a single error rate hides distinctions that can be critical: a
cancer screen that misses a tumour and one that raises a false alarm are both “wrong,” but they
are not equally wrong, and no business treats them as such. The bulk of this book is therefore the
classification evaluation toolkit — the confusion matrix, precision and recall, the F1 score, the ROC
curve and AUC, and the decision threshold — because choosing and defending the right metric is
what decides whether a classifier is useful.
By the end you will be able to do what you cannot do today with regression alone: build a logistic-
regression classifier and read its output as a probability and its coefficients as odds; choose and
defend an evaluation metric from the cost of a false alarm against the cost of a miss; tune the decision
threshold to that cost; carry all of this from two classes to many; scale and engineer features for a
linear model and regularize it; judge when this simple model is the right one; and write the whole
verdict up as a business-oriented evaluation report a non-technical decision maker can act on.
We close where the course’s judgment lives: feature scaling, feature engineering for linear models,
regularization for logistic regression, and the case for keeping a model simple. A running example
carries the whole book — predicting which subscribers to a streaming service will cancel next
month (customer churn) — so that every new tool refers to a decision you can picture.
Every idea is worked in Python with scikit-learn — the same toolkit you built pipelines with there —
so each concept arrives with the few lines that put it to work, and every printed result on these pages
is the actual output of the code beside it. Throughout, X_train/X_test hold the feature tables and
y_train/y_test the 0/1 churn labels (1 = churned), exactly the split discipline you already practised.
4
