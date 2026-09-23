# 2. Aggregate functions

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 12-14*

Version of 15 September 2026 Module page
2. Aggregate functions


## 2.1. One number from many rows


An aggregate function takes a whole column of values and returns a single summary value. On its
own it summarises the entire table; with GROUP BY it summarises each group. Five of them do most
of the work, and the quickest way to meet all five is to see them side by side, profiling the orders
table at a glance:
Example — Profiling a column at a glance.
SELECT
COUNT(*) AS n_orders,
SUM(amount) AS total,
AVG(amount) AS mean,
MIN(amount) AS smallest,
MAX(amount) AS largest
FROM orders;
┌──────────┬───────┬───────┬──────────┬─────────┐
│ n_orders │ total │ mean │ smallest │ largest │
├──────────┼───────┼───────┼──────────┼─────────┤
│ 12 │ 4020 │ 335.0 │ 90 │ 700 │
└──────────┴───────┴───────┴──────────┴─────────┘
One row comes back, summarising the whole orders table: how many orders, their total, their
typical size, and the extremes. This is the SQL equivalent of pandas’ df["amount"].describe().
Each name says what it does; the skill to build is not just using them but knowing which one a
question calls for.
Definition 3 (The five core aggregates).
• COUNT — how many rows. COUNT(*) counts all rows; COUNT(col) counts rows where col is
not NULL; COUNT(DISTINCT col) counts distinct non-NULL values.
• SUM — the total of a numeric column.
• AVG — the mean (average) of a numeric column.
• MIN — the smallest value.
• MAX — the largest value.
SUM and AVG require numbers; COUNT, MIN, and MAX work on any type (MIN of a text column is the
alphabetically first value, MIN of a date the earliest).
COUNT(DISTINCT …) answers “how many different values” — for instance, how many distinct
countries the customers span:
12

Version of 15 September 2026 Module page
SELECT COUNT(*) AS n_customers,
COUNT(DISTINCT country) AS n_countries
FROM customers;
┌─────────────┬─────────────┐
│ n_customers │ n_countries │
├─────────────┼─────────────┤
│ 6 │ 4 │
└─────────────┴─────────────┘


## 2.2. Choosing the right aggregate


Each aggregate answers a different shape of business question. Matching the question to the function
is the real skill:
The question asks for… Use
how many customers / orders / distinct countries COUNT (with DISTINCT for “distinct”)
total revenue, total units sold SUM
typical order value, average rating AVG
cheapest product, earliest signup MIN
biggest order, most recent login MAX
Pitfall. Three classic aggregate traps:
• COUNT(*) vs COUNT(col). COUNT(*) counts rows; COUNT(col) ignores rows where col is NULL.
To count customers who have recorded a country, use COUNT(country), not COUNT(*) —
you will see the two disagree on a messy table in Chapter 8.
• AVG silently skips NULLs. AVG(amount) averages only the non-NULL amounts — it does not
treat a missing value as zero. If a NULL should count as 0, write AVG(COALESCE(amount, 0)).
The two can differ a lot.
• Don’t average an average. The average of per-day averages is not the overall average unless
every day has the same number of rows. To get a true overall mean, AVG the raw rows, or
compute SUM(...) / COUNT(...) yourself.
Exercises
2.1. In a single query, compute COUNT(*), SUM, AVG, MIN, and MAX of orders.amount, and confirm
each number by hand against the twelve rows.
2.2. For each of the five aggregates, write one business question it answers about the shop,
phrased in plain language.
2.3. Explain, with a concrete example, a situation in which COUNT(*) and COUNT(col) return
different numbers.
Answers. (1) The query is the profiling example above; the twelve amounts sum to 4020, and 4020 / 12 = 335, matching
total and mean. (2) e.g. COUNT → “how many orders did we take?”; SUM → “what was total revenue?”; AVG → “what is
13

Version of 15 September 2026 Module page
a typical order worth?”; MIN → “what was our smallest order?”; MAX → “what was our biggest?”. (3) When the counted
column contains NULLs: on a table of 6 leads where one has no country, COUNT(*) = 6 but COUNT(country) = 5.
14
