# 3. Missing Values

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 15-16*

Version of 13 September 2026 Module page
3. Missing Values
Real data has holes. A customer skipped a field, a sensor missed a reading, a join found no match.
Pandas marks every such hole with the special value NaN (“Not a Number”). A large part of profes-
sional data work is deciding, column by column, what to do about these holes. The decision is yours
to justify; pandas only gives you the tools.


## 3.1. Step 1 — Find them


You cannot handle what you cannot see, so find the gaps first.
df.isna() # a boolean DataFrame: True wherever a value is missing
df.isna().sum() # number missing per column (each True counts as 1)
df.isna().mean() # fraction missing per column
Example — Reading the missing-value profile. On the shops table, df.isna().sum() returns:
shop 0
region 1
category 0
revenue 0
orders 0
rating 2
dtype: int64
Now you know the shape of the problem before touching it. revenue, orders, shop, and category
are complete; region is missing for one shop; rating is missing for two. Different columns will
need different decisions, and this profile is what tells you so.


## 3.2. Step 2 — Decide: drop or impute


Once you have found a missing value, it meets one of two fates: the row (or column) is dropped, or
the gap is filled, which is called imputing.
df.dropna() # drop every row that has any NaN
df.dropna(subset=["region"]) # drop only rows missing a region
df.dropna(axis=1) # drop every column that has any NaN
df["rating"] = df["rating"].fillna(df["rating"].median()) # numeric -> median or mean
df["region"] = df["region"].fillna("Unknown") # text -> a constant or the
mode
Definition 7 (Choosing a strategy).
• Drop rows when the missing values are few and scattered, so that losing those rows does not
bias the result.
15

Version of 13 September 2026 Module page
• Drop a column when it is missing so often that it carries little information.
• Impute a numeric column with its mean when the values are spread roughly evenly around
the centre, or with its median when they are lopsided or contain outliers (the median is not
pulled around by extreme values).
• Impute a text column with a constant such as "Unknown", or with the mode (the most
frequent value) when you want a best guess.
Whichever you choose, state it and say why. The choice changes the result, so it must be one
you can defend.
Pitfall. Imputing is not free. Filling the one missing region with "Unknown" creates a new
category that will then appear in any groupby("region"); filling missing ratings with the mean
makes the ratings look less spread out than they really are, which lowers the standard deviation.
There is no neutral choice: dropping throws away real rows, and imputing invents values. Pick
the smaller distortion for the question you are answering, and write down what you did.
Pitfall. df.dropna() and df.fillna() return a new DataFrame and leave the original
unchanged. Writing df.dropna() on a line by itself does nothing lasting: you must reassign the
result, as in df = df.dropna(). Forgetting the assignment, then wondering why the NaN values
are still there, is a very common mistake.
Exercises
3.1. Count the missing values in each column. Then impute the rating column with its median
and the region column with the constant "Unknown", and write one sentence justifying each
choice.
Answers. (1) df.isna().sum() gives region 1 and rating 2, others 0. df["rating"] =
df["rating"].fillna(df["rating"].median()); df["region"] = df["region"].fillna("Unknown"). The median
suits rating because it is a numeric column and the median is not distorted by outliers; a constant suits region because
there is no meaningful average of a text label, and "Unknown" keeps the row while marking it as a gap.
16
