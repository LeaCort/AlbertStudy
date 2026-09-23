# 4. Groupby and Aggregation

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 17-19*

Version of 13 September 2026 Module page
4. Groupby and Aggregation
So far every operation has returned rows. The real step up in analysis is summarising: turning many
rows into one number per category, such as average revenue per region or total revenue per month.
Pandas does this with groupby, and the pattern behind it is worth naming, because you will use it
constantly.
Definition 8 (Split–apply–combine). groupby follows three steps. Split the rows into groups
by the value of one or more columns. Apply an aggregation (mean, sum, count, and so on) to
a chosen column within each group, reducing it to one value. Combine those per-group values
into a new, smaller table indexed by the group.
Example — Average revenue per region.
df.groupby("region")["revenue"].mean()
Read from left to right, this says: split the rows by region, take the revenue column of each group,
and average it. The result is one number per region:
region
East 916.666667
North 1045.000000
South 1133.333333
West 1190.000000
Name: revenue, dtype: float64
Fourteen rows became four, and the four answer the question “where do we earn the most on
average?” Turning rows into a short answer like this is what groupby is for.
source split by region mean -> combine
North 1200 North 1200
North 1000
South 1600 North 800
North 800
South 1600
South 1400 South 1500
South 1400
Figure 3: Split–apply–combine on a small example: rows are split into groups by region, the mean
of revenue is applied within each group, and the per-group results are combined into one row per
region.


## 4.1. Aggregating several ways at once


agg lets one call compute different aggregations on different columns, or several on one column:
df.groupby("region").agg({"revenue": "sum", "rating": "mean"}) # sum revenue, mean
rating
df.groupby("region")["revenue"].agg(["sum", "mean", "count"]) # three at once
17

Version of 13 September 2026 Module page
The second call gives, per region, the total revenue, the average revenue, and the number of shops:
sum mean count
region
East 2750 916.666667 3
North 4180 1045.000000 4
South 3400 1133.333333 3
West 3570 1190.000000 3


## 4.2. Grouping by several dimensions


Pass a list of columns to summarise along more than one dimension at once:
df.groupby(["region", "category"])["revenue"].sum()
region category
East Books 1700
Food -50
Toys 1100
North Books 2800
Food 480
Toys 900
South Books 1500
Food 600
Toys 1300
West Books 2000
Food 820
Toys 750
Name: revenue, dtype: int64
This gives one total per (region, category) pair, the table answer to “how does revenue split across
categories within each region?” Notice the result’s left edge: it now has two levels. The outer level
(East, North, …) is printed once and the inner level (Books, Food, Toys) is listed beneath it, like an
indented outline. This is a MultiIndex: each value is labelled not by one key but by the pair (region,
category). Reading down the first block, East’s shops made 1700 on Books, lost 50 on Food, and
made 1100 on Toys.
Pitfall. By default groupby returns a table indexed by the grouping columns — here
the two-level (region, category) index above — not ordinary columns you can select with
df["region"]. To get a flat DataFrame back, which most later steps expect, add .reset_index(),
which turns each index level into a normal column:
df.groupby(["region", "category"])["revenue"].sum().reset_index()
region category revenue
0 East Books 1700
1 East Food -50
18

Version of 13 September 2026 Module page
2 East Toys 1100
3 North Books 2800
4 North Food 480
5 North Toys 900
6 South Books 1500
7 South Food 600
8 South Toys 1300
9 West Books 2000
10 West Food 820
11 West Toys 750
The same twelve totals are now three plain columns — region, category, revenue — with a fresh
0…11 index you can filter and merge like any other table.
Remark. groupby skips NaN group keys completely: the shop whose region is missing simply
disappears from a groupby("region") summary. If those rows matter, handle the missing values
(Chapter 3) before you group, or they will be dropped from your totals without warning.
Exercises
4.1. Group the shops by region and compute the sum, mean, and count of revenue in one call.
Then group by region and category together, and describe what a single row of the result
represents.
Answers. (1) df.groupby("region")["revenue"].agg(["sum", "mean", "count"]) gives one row per region.
df.groupby(["region", "category"])["revenue"].sum() gives one row per (region, category) pair; a single row
is the total revenue of one category within one region, for example Books in North.
19
