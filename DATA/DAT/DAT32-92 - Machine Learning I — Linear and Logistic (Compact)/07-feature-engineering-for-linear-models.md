# 7. Feature engineering for linear models

*Source: DAT32-92 - Machine Learning I — Linear and Logistic (Compact) - Textbook.pdf, pages 27-29*

Version of 13 September 2026 Module page
7. Feature engineering for linear models
A linear model can only draw straight boundaries in the features you give it. Its power therefore lives
largely in which features you build. Three constructions do most of the work.


## 7.1. Polynomial features


Definition 18. Polynomial features add powers of existing features (𝑥,𝑥2,𝑥3,…) so a linear
model can fit curved relationships. The model stays linear in its coefficients — it is still 𝛽 +
0
𝛽 𝑥+𝛽 𝑥2 — but now bends as a function of 𝑥.
1 2
This is exactly the polynomial regression of Intro to Machine Learning, reframed as a feature
construction: you are not changing the model, you are enriching its inputs. The same overfitting
risk applies — high-degree features fit noise — so they pair naturally with regularization and cross-
validated degree selection.
PolynomialFeatures builds them for you — and, usefully, degree=2 already emits the interaction
terms of the next section (the cross-products) alongside the squares:
from sklearn.preprocessing import PolynomialFeatures
# [tenure, watch_hours] -> squares AND the cross-term tenure*watch_hours
poly = PolynomialFeatures(degree=2, include_bias=False)
poly.fit(X_train[["tenure", "watch_hours"]])
print(list(poly.get_feature_names_out()))
['tenure', 'watch_hours', 'tenure^2', 'tenure watch_hours', 'watch_hours^2']


## 7.2. Interaction terms


Example — when two features only matter together. Among your subscribers, a high price
alone is tolerable and low watch hours alone is tolerable, but a customer paying a high price who
barely watches is a churn risk far beyond what either feature predicts on its own. A plain linear
model, adding the two effects separately, cannot express “high price and low usage.” The product
of the two features can.
Definition 19. An interaction term is a new feature formed by multiplying two features, 𝑥 ×
𝑖
𝑥 . It lets a linear model capture effects that depend on combinations of features — situations
𝑗
where the impact of one feature changes with the value of another.
The PolynomialFeatures of the previous section would manufacture every cross-product at once;
more often you want one specific, domain-chosen interaction. That is simply one column times
another — here the price-times-usage feature the example calls for:
27

Version of 13 September 2026 Module page
# One deliberately chosen interaction, motivated by the domain: does a high
# price bite harder when a subscriber barely watches? Build that single feature
# by multiplying the two raw columns, and add it alongside the originals.
X_ix = X_train[numeric].copy()
X_ix["price_x_watch"] = X_ix["monthly_price"] * X_ix["watch_hours"]
print(X_ix[["monthly_price", "watch_hours", "price_x_watch"]].head(4).round(1))
monthly_price watch_hours price_x_watch
2078 8.7 11.8 102.4
4844 8.8 135.6 1194.6
5163 9.2 56.7 521.1
5315 9.4 15.3 143.8
The new price_x_watch column now sits beside the originals as an ordinary feature, and the model
gives it its own coefficient — letting the effect of price on churn depend on how much the subscriber
watches, which separate price and watch-hours terms cannot express.


## 7.3. Encoding categorical variables


Linear models consume numbers, but features like subscription plan (Basic / Standard / Premium)
or country are categories. They must be encoded — and the naive encoding is a trap.
Definition 20. One-hot encoding turns a categorical feature with 𝐾 levels into 𝐾 binary (0/1)
indicator features, exactly one of which is 1 per row. Label (ordinal) encoding maps the levels
to integers 0,1,2,….
Pitfall. Do not label-encode an unordered category. Mapping Basic→0, Standard→1, Pre-
mium→2 tells the model Premium is “three Basics” and that Standard sits exactly between —
a false ordering it will dutifully exploit, fitting nonsense. Use one-hot encoding for unordered
categories; reserve integer/ordinal encoding for genuinely ordered ones (e.g. small < medium <
large). With many levels, one-hot can explode the feature count, which is itself a reason to lean
on L1 regularization next.
OneHotEncoder does the safe thing; a ColumnTransformer lets you one-hot the categorical columns
while leaving the numeric ones untouched, all in one object. On our table it turns two categorical
columns into their indicator columns and passes the numeric ones through:
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
# handle_unknown="ignore": an unseen category becomes all-zeros (no crash)
pre = ColumnTransformer([
("cat", OneHotEncoder(handle_unknown="ignore"), ["plan", "country"]),
("num", "passthrough", ["tenure", "watch_hours"]), # numeric columns untouched
])
encoded = pre.fit_transform(X_train)
28

Version of 13 September 2026 Module page
print("columns after encoding:", encoded.shape[1])
print(list(pre.get_feature_names_out()))
columns after encoding: 9
['cat__plan_Basic', 'cat__plan_Premium', 'cat__plan_Standard', 'cat__country_A',
'cat__country_B', 'cat__country_C', 'cat__country_D', 'num__tenure',
'num__watch_hours']
Remark. Full one-hot encoding gives a feature 𝐾 indicator columns that always sum to 1, so
together with the model’s intercept they are exactly collinear — the dummy-variable trap,
an instance of the multicollinearity you learned to diagnose in Intro to Machine Learning. It is
harmless under the regularized LogisticRegression used throughout this book, which is why
we keep all 𝐾 columns; but if you ever fit an unregularized model or read the raw coefficients,
drop one level per feature (OneHotEncoder(drop="first")) so the remaining columns are no
longer redundant.
Exercises
7.1. Engineer features for a linear model: add polynomial terms, an interaction term motivated
by the domain, and one-hot encode a categorical variable. Show a case where label-encoding an
unordered category produces a worse model, and explain why.
Answers. (1) Label-encoding an unordered category injects a false order and degrades the fit versus one-hot; a well-
motivated interaction term should improve it.
29
