# 2. Core vocabulary, built by hand

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 7-9*

Version of 13 September 2026 Module page
2. Core vocabulary, built by hand
Rather than list definitions, we build the vocabulary by constructing the dataset our model will use.
So that every later number is reproducible, we generate the data with a fixed random seed. Run this
once; you now have the two hundred apartments this whole book uses.
import numpy as np
def make_rentals(n=200, seed=42):
rng = np.random.default_rng(seed)
surface = rng.uniform(20, 120, n).round() # square metres
rooms = np.clip(np.round(surface/28 + rng.normal(0, 0.4, n)), 1, 5)
balcony = rng.binomial(1, 0.4, n) # 0 or 1
rent = (250 + 9.5*surface + 55*rooms + 110*balcony
+ rng.normal(0, 70, n)).round() # euros / month
return surface, rooms, balcony, rent
surface, rooms, balcony, rent = make_rentals()
We built this table from a rule we chose (€9.5 per m², €55 per room, €110 for a balcony, plus random
noise) precisely so we can later check whether the model recovers it. Real data comes with no such
answer key — that is exactly why we must learn to estimate the rule and to measure how well we
did. Here are the first six apartments:
Surface (m2) Rooms Balcony Rent (€/month)
97 4 no 1504
64 2 yes 992
106 4 no 1494
90 3 no 1397
29 1 no 465
118 5 yes 1666
Each row is an example. The columns surface, rooms and balcony are the inputs we predict from;
the column rent is what we want to predict.
Definition 4. A feature is an input variable used to predict the target (surface, rooms, balcony).
A label is the known target value for a given example (the rent). A supervised dataset is a table
of examples, each row pairing a feature vector with its label.
We write one example as a feature vector 𝑥 = (𝑥 ,…,𝑥 ) with label 𝑦, and the whole dataset as 𝑛
1 𝑝
pairs (𝑥(𝑖),𝑦(𝑖)) for 𝑖 = 1,…,𝑛. Here 𝑛 = 200 and, with all three features, 𝑝 = 3.
Now the subtle part. If we judge the model on the very apartments it was fitted to, we measure
memorisation, not prediction. So we split the data into parts with distinct jobs.
Definition 5. The training set is the data the model is fitted on. The validation set is held out
from training and used to compare models and tune choices. The test set is used exactly once,
7

Version of 13 September 2026 Module page
at the very end, to estimate performance on unseen data. An example used to choose or tune the
model must never also be used to report its final performance.
Two more terms name how we hold data out, and they are worth telling apart from the sets above.
Definition 6. A holdout set is any set of examples kept aside and never shown to the model
during training, so that performance can be measured on data the model has not seen; the
holdout method is the strategy of estimating performance from a single such split (as opposed
to cross-validation, Chapter 8). The validation set and the test set are both holdout sets —
“holdout” names the general idea, while “validation” and “test” name the two specific jobs the
held-out data does.
the full dataset, shuffled then cut
Training set Validation Test
fit the model tune choices report once
Figure 2: The three-way split. A typical division is 60/20/20, but the exact proportions matter less
than the discipline: the test set is kept aside until the very end. Use it any earlier and its score can no
longer be trusted.
We use scikit-learn’s helper to shuffle and cut. Splitting once, with a fixed random_state, gives
everyone the same three sets:
from sklearn.model_selection import train_test_split
X = np.column_stack([surface, rooms, balcony]) # shape (200, 3)
X_tr, X_tmp, y_tr, y_tmp = train_test_split(X, rent, test_size=0.4, random_state=0)
X_val, X_te, y_val, y_te = train_test_split(X_tmp, y_tmp, test_size=0.5,
random_state=0)
print(len(y_tr), len(y_val), len(y_te))
120 40 40
Pitfall. The single most common mistake in machine learning is to let the test set influence the
model — even indirectly, by looking at its score while choosing a setting. A model evaluated on
data it has effectively already seen looks far better than it is. Split first, then forget the test set
exists until the final line of the project.
Exercises
2.1. From the six-apartment table shown earlier in this chapter, write out the feature vector 𝑥
and the label 𝑦 for the first apartment, and state which columns are features and which is the
label. Check: three features (surface, rooms, balcony) and one label (rent); the first apartment’s label
is €1504.
8

Version of 13 September 2026 Module page
2.2. Load the rent dataset, identify its features and label, and split it 60/20/20 into training,
validation and test sets. Explain in one sentence each what the three sets are for and why the
test set must stay sealed. Check: the split sizes are 120 / 40 / 40.
9
