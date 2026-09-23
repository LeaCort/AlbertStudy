# 1. From regression to classification

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 5-6*

Version of 13 September 2026 Module page
1. From regression to classification
Your streaming company wants to know, for each subscriber, whether they will cancel (“churn”) in
the coming month, so the retention team can call the ones most at risk. You have last year’s data: for
every subscriber, their monthly watch hours, tenure, support tickets, plan price — and whether they
ultimately churned. This looks like a regression problem you could solve with the tools from Intro to
Machine Learning. It is not, and seeing exactly why motivates everything that follows.
Definition 1. Classification is supervised learning where the target is a discrete category
rather than a continuous number. Binary classification has two categories (churn / stay, fraud /
legitimate); multi-class classification has more than two (which of five plans a customer will
pick).
Three differences force new tools.
The output is discrete. The label is “churn” or “stay,” not a number on a continuous scale. If you
ran ordinary linear regression on a 0/1 target, the model would happily predict 1.4 or −0.3 — values
that mean nothing as a category and cannot be read as anything else either.
We want a probability, not just a verdict. The retention team has budget to call 200 people, not
50 000. They do not want a flat “will churn / won’t churn”; they want each subscriber ranked by how
likely they are to churn, so they can spend the budget on the riskiest. A good classifier outputs a
probability between 0 and 1, and the verdict is a second step.
Example — why a probability beats a verdict. Two subscribers are both flagged “will churn.”
One is at 0.96 probability, the other at 0.51. With 200 calls to make and 4 000 flags, you cannot treat
them alike — you call the 0.96 first. A model that only emits “yes” or “no” has thrown away the
information you most need. This is why classification models are built to emit probabilities and
the yes-or-no answer is recovered afterward by a threshold.
Errors are asymmetric. In rent prediction, being a little too high and a little too low were roughly
equally bad. In classification the two ways of being wrong usually cost very different amounts. Failing
to flag a churner who then leaves costs you that customer’s whole lifetime value; flagging a loyal
customer who was never going to leave costs you a single retention call — often a hundred times
cheaper. Treating these as “one error each” is a business mistake, and the evaluation toolkit exists
precisely to respect the difference.
Pitfall. Do not fit ordinary linear regression to a 0/1 label and threshold its output at 0.5. It
“works” often enough to be tempting, but its predictions are unbounded (values above 1 and
below 0 are not probabilities), it is badly distorted by extreme feature values, and its loss function
is the wrong shape for a yes-or-no target. Logistic regression fixes all three at once.


## 1.1. The data we will use


Every snippet in this book runs on one table of last year’s subscribers, churn.csv: four numeric
features (tenure in months, monthly watch hours, monthly price, support tickets), two categorical
5

Version of 13 September 2026 Module page
ones (plan, country), and the label churned. We load it and seal a test set immediately — the same
discipline as before.
import pandas as pd
from sklearn.model_selection import train_test_split
# churn.csv: one row per subscriber from last year — features plus whether
# they ultimately churned (1 = churned, 0 = stayed).
churn = pd.read_csv("churn.csv")
numeric = ["tenure", "watch_hours", "monthly_price", "support_tickets"]
categorical = ["plan", "country"]
X = churn[numeric + categorical]
y = churn["churned"]
# Seal a test set now; every score in this book is read from it once, at the end.
X_train, X_test, y_train, y_test = train_test_split(
X, y, test_size=0.2, random_state=0, stratify=y)
print(f"{len(X_train)} train rows, {len(X_test)} test rows")
print(f"churn rate: {y.mean():.3f}")
4800 train rows, 1200 test rows
churn rate: 0.106
About one subscriber in ten churned, so the classes are imbalanced — a fact that, as the next chapter
shows, wrecks the most obvious way of scoring a classifier.
Exercises
1.1. For five business problems, state whether each is a classification task and, if so, name the
positive class and which error (false positive or false negative) is more costly. Justify each from
the business context.
Answers. (1) A problem is classification when the target is a discrete category. Check that for each you named the
positive class and the costlier error: e.g. loan default — positive = “defaults,” a false negative (approving a defaulter)
usually dwarfs a false positive (declining a good customer); a house-price task is regression, not classification.
6
