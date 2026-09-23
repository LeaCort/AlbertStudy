# 9. When simple models win

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 32*

Version of 13 September 2026 Module page
9. When simple models win
You could reach for a gradient-boosted forest or a neural network for churn, and sometimes you
should. But this course argues, deliberately, that logistic regression is often the right model — not
merely the easy one — and naming why is part of the judgment this course asks of you.
Interpretability. A logistic regression hands you a coefficient per feature: “each support ticket raises
the odds of churn several-fold.” When the retention team, a regulator, or a sceptical executive asks
why a customer was flagged, you can answer in a sentence. A deep model’s answer is “the weights say
so.” In regulated domains (credit, insurance, hiring) this is not a nicety — an unexplainable decision
can be illegal.
Data efficiency. With a few thousand rows, a simple model with few parameters generalises better
than a flexible one starved of data. Complex models need large data to earn their flexibility; below
that, they overfit and a logistic regression wins outright.
Inference speed and operational cost. A logistic regression scores a customer with one dot
product and one sigmoid — microseconds, trivial to deploy, easy to monitor, cheap to retrain. A large
model can cost orders of magnitude more to serve at scale and is far harder to debug when it drifts.
Example — when the simpler model is the better choice. A boosted forest scores AUC 0.93
against logistic regression’s 0.91. The forest has the higher score. But the logistic model can be
explained to the compliance team, retrained nightly on a laptop, and its flagged reasons given to
the retention team as concrete talking points. On a two-point AUC gap, the simpler model that the
whole organisation can understand, audit and operate is frequently the better business decision.
“Best model” is not “highest score” — it is best given accuracy, interpretability, data and cost
together.
Pitfall. The converse error is real too: never reach for complexity by reflex. The right order
is to make the simple model work, evaluate it honestly with the toolkit above, and adopt a
complex model only when the measured gain justifies the cost in interpretability and operations.
Complexity is a cost you pay, not a virtue you earn.
Exercises
9.1. You must choose between a logistic regression (AUC 0.86, one coefficient per feature) and
a gradient-boosted forest (AUC 0.90, opaque) for a churn model that must be explained to a
regulator, retrained nightly, and whose flagged reasons are given to the retention team. Argue
which model you would deploy, weighing the AUC gap against interpretability, data efficiency
and operational cost — and state what would change your choice.
Answers. (1) Deploy the logistic regression: a 4-point AUC gap rarely outweighs a model the regulator can be shown,
the team can retrain cheaply, and whose per-feature reasons become talking points; what would flip the choice is a
materially larger, well-validated performance gap, or a setting where interpretability and operational cost do not bind.
“Best model” weighs accuracy, interpretability, data and cost together.
32
