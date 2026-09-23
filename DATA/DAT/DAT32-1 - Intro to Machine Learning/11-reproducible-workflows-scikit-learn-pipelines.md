# 11. Reproducible workflows: scikit-learn pipelines

*Source: DAT32-1 - Intro to Machine Learning - Textbook.pdf, pages 33-34*

Version of 13 September 2026 Module page
11. Reproducible workflows: scikit-learn
pipelines
Everything so far — split, preprocess, fit, tune, evaluate — must be applied in the same order and
fitted on the training data only, every time. Do it by hand across notebook cells and a subtle
leak creeps in: you scale using statistics computed from the whole dataset, including validation
and test, and your scores quietly inflate. The software-engineering discipline you already have —
reproducibility, clear contracts — has a direct instrument here.
Definition 24. A scikit-learn pipeline chains preprocessing steps and a model into one object.
Calling fit runs each step’s fit in order on the training data; calling predict applies each fitted
transformation and then the model. Because every transformer is fitted only on the training
portion, a pipeline prevents data leakage from validation or test data into preprocessing.
The pipeline is one object you can fit, cross-validate, and predict with — the scaler and the model
travel together, so they can never be applied out of order or fitted on the wrong data:
from sklearn.pipeline import Pipeline
pipe = Pipeline([
("scaler", StandardScaler()),
("model", Ridge(alpha=10)),
])
# Inside cross-validation, the scaler is re-fitted on each fold's TRAINING part
# only, then applied to that fold's validation part — automatically, no leakage.
cv = -cross_val_score(pipe, X_tr, y_tr, cv=kf,
scoring="neg_root_mean_squared_error").mean()
print(round(cv, 1))
pipe.fit(X_tr, y_tr) # fit the whole chain on training data
print({k: round(v, 2) for k, v in scores(y_te, pipe.predict(X_te)).items()})
77.3
{'MAE': 61.45, 'MSE': 6152.75, 'RMSE': 78.44, 'R2': 0.95}
The cross-validated RMSE is 77.3, and the single final measurement on the sealed test set agrees with
it (RMSE 78.44).
Searching for the best hyperparameter fits naturally on top: GridSearchCV wraps the pipeline, tries
each 𝜆 by cross-validation, and refits the winner — the tuning of the previous chapter, in one object.
from sklearn.model_selection import GridSearchCV
grid = GridSearchCV(pipe, {"model__alpha": [0.1, 1, 10, 100]},
cv=kf, scoring="neg_root_mean_squared_error")
grid.fit(X_tr, y_tr)
print(grid.best_params_) # the lambda cross-validation preferred
33

Version of 13 September 2026 Module page
{'model__alpha': 0.1}
A pipeline is the reproducible form of the entire course: the identical chain of steps runs during
cross-validation, during hyperparameter search, and at final test time, so the number you report is
the number a colleague re-running your code will get. That is where the ML project cycle and the
engineering discipline meet — and where this course ends and every later model begins.
Exercises
11.1. Build a two-step pipeline (StandardScaler then Ridge) and fit it on the training data in a
single fit call. Check: one call scales and fits the model together, and the fitted pipeline can predict
on the test set directly.
11.2. Build a scikit-learn pipeline chaining a StandardScaler and a regularized regression, run it
under cross-validation, and explain how the pipeline prevents preprocessing from leaking infor-
mation out of the training folds. Then wrap it in GridSearchCV to tune 𝜆. Check: cross_val_score
on the pipeline runs without ever fitting the scaler on validation data.
34
