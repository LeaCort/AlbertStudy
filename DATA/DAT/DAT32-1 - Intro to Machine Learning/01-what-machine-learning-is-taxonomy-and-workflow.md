# 1. What machine learning is: taxonomy and workflow

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 5-6*

Version of 13 September 2026 Module page
1. What machine learning is: taxonomy and
workflow
Suppose you manage a rental portfolio and want to predict the monthly rent of a flat before it goes
on the market. You could try to write the rule by hand — “start at €400, add €12 per square metre,
add €150 if it has a balcony…” — but you would be guessing the numbers. Machine learning instead
learns those numbers from past rentals: you show an algorithm many (apartment, rent) pairs and it
fits a model that reproduces them as closely as possible, then applies that model to new apartments.
Definition 1. Machine learning builds a model that maps inputs to an output by fitting it
to data, rather than by being programmed with explicit hand-written rules. The fitted model is
then used to predict the output for new, unseen inputs.
Before zooming in on our one model, here is the map of the territory — just enough to know where
regression sits. Start with three tasks a data team might be handed.
Example — three tasks, three shapes. “Predict tomorrow’s electricity demand in megawatts”:
each past day comes with the demand that actually occurred, and the answer to predict is a
number. “Will this customer churn next month, yes or no?”: each past customer comes with a
known outcome too, but now the answer is one of two categories. “Split our 50 000 customers into
marketing segments we have not defined in advance”: here no example comes with a right answer
at all — the task is to find structure no one labelled. Three tasks, and already three different shapes.
Those shapes are the whole map, and each has a name.
Definition 2. Supervised learning fits a model on data where every example carries a known
target value (the electricity demand, the churn outcome). Unsupervised learning works on
data with no target and instead discovers structure — groups, directions — in the inputs alone
(the customer segments).
Definition 3. Within supervised learning, regression predicts a continuous numeric target
(a rent, a temperature, a demand in megawatts) and classification predicts a discrete category
(churn yes / no, which of five products). Clustering is the archetypal unsupervised task: it
partitions examples into groups without any target.
The task type is decided by the target, not by the field or the difficulty. Ask: is there a target
to predict, and is it a number or a category? A number to predict is regression; a category is
classification; no target, “find the natural groups,” is clustering. Rent prediction is regression: the
target, euros per month, is continuous.
Whatever the model, a supervised-learning project follows the same cycle. The rest of this book is
this cycle, walked once on linear regression.
5

Version of 13 September 2026 Module page
Define the Assemble & Pick a Train a Evaluate on Diagnose &
target split data baseline model unseen data tune
diagnose → retrain
Figure 1: The supervised machine-learning workflow. It is model-independent: this course executes
every step on linear regression, but the same loop drives every model you will meet later. The orange
arrow is the part that matters most in practice — you rarely train once; you train, diagnose, and
retrain.
Exercises
Throughout the exercises, use the running rent dataset (make_rentals) with the same fixed splits
unless a problem says otherwise, so your numbers match those quoted here; each exercise ends
with a check you can run.
1.1. In one sentence each, say what distinguishes supervised from unsupervised learning, and
regression from classification. Then invent one task of your own for each of the three types.
Check: your regression task has a numeric target, your classification task a categorical one, and
your clustering task no target at all.
1.2. For five stated business problems, name each as regression, classification, or clustering,
and say whether it is supervised or unsupervised. Justify each by identifying the target (or its
absence). Check: every “no target” problem must be unsupervised, and every category target must
be classification.
6
