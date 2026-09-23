# Preface

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 4*

Version of 13 September 2026 Module page
Preface
You arrive here already able to handle data. You can load, clean, filter, group and reshape tabular
data with pandas, and reason about the cost of an operation. You can turn a business question into
a SQL query and read its answer. You can make code reproducible and testable with Git, virtual
environments, classes and pytest. From mathematics you bring the mean and variance, the idea of
a probability distribution, the derivative of a function, and matrix multiplication. This book assumes
all of that and builds on it; it does not re-teach it.
What you do not yet have is a model — a thing that takes data it has never seen and predicts a
number. That is what machine learning adds, and this course teaches it in an unusual way: through
one model, linear regression, followed all the way from a raw table to a tuned, validated, reproducible
pipeline. Every core idea in machine learning — loss functions, optimisation, overfitting, baselines,
evaluation metrics, regularization, cross-validation, hyperparameters — is introduced at the moment
it first becomes necessary in that single workflow, not as an entry in a glossary.
This is deliberate. Spend all of your study on one model understood completely and you do not learn
“linear regression”; you learn the shape of every machine-learning project. When you later meet
logistic regression, decision trees or neural networks, you will not be learning a new paradigm —
you will be substituting a new model into a cycle you already own.
A word on method. Every idea arrives as a concrete example first and the general statement second,
and every technique is implemented, not just described — this is a course where you write the code.
We keep one running problem throughout — predicting the monthly rent of an apartment from
its characteristics — mostly on a single dataset of two hundred apartments that we generate in
code so that every number in this book is one you can reproduce exactly on your own machine. Two
ideas — the curvature that produces overfitting, and the effect of dataset size — need data shaped
differently from that main sample, so where they arise we generate small purpose-built rent samples
the same way, each introduced where it is used. Run the snippets as you read; the printed outputs
are what you should see. We use numpy for the from-scratch work and scikit-learn once the ideas
are in place.
4
