# 9. From business question to SQL

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 35-36*

Version of 15 September 2026 Module page
9. From business question to SQL


## 9.1. The translation skill


The whole course converges here: turning a question asked in plain language into a query, running
it, and reporting the answer in business terms. This is a repeatable procedure, not a flash of insight.
Definition 11 (Question → query in five steps).
1. Identify the tables that hold the relevant facts (and how they join).
2. Filter the rows the question restricts to → WHERE.
3. Decide the grouping — is the answer one number, or one per category? → GROUP BY.
4. Choose the summary — count, total, average, extreme? → an aggregate.
5. Order and limit for “top/bottom N”, then interpret the result in the words of the original
question.
Example — "Which three countries generated the most revenue in 2025?". Walk the steps:
the facts are in orders, joined to customers for the country; restrict to 2025 (WHERE); the answer is
one number per country (GROUP BY
country); the summary is total revenue (SUM); we want the top three (ORDER BY … DESC LIMIT 3).
SELECT c.country, SUM(o.amount) AS revenue
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
WHERE o.order_date >= '2025-01-01'
GROUP BY c.country
ORDER BY revenue DESC
LIMIT 3;
┌─────────┬─────────┐
│ country │ revenue │
├─────────┼─────────┤
│ France │ 1950 │
│ Brazil │ 1510 │
│ Spain │ 90 │
└─────────┴─────────┘
Interpreting the result: the three rows are the firm’s largest markets by revenue in 2025 — where,
in plain terms, the money came from that year. France led with 1950, Brazil followed with 1510,
and Spain trailed far behind at 90. A query is only finished once you can say what its rows mean
to the business, not merely that they appeared.
Pitfall. A query that runs is not the same as a query that is correct. The dangerous failures
are silent: an INNER JOIN that dropped unmatched rows, a NULL that skewed an AVG, a missing
WHERE that counted every year instead of one. Sanity-check every answer — does the row count
35

Version of 15 September 2026 Module page
look plausible? Does the total roughly match a quick estimate you can make in your head? An
answer you cannot defend in business terms is not an answer yet.
Exercises
9.1. Translate “who is our single highest-spending customer, and how much have they spent?”
into SQL using the five-step procedure, execute it, and write one sentence interpreting the result.
9.2. Translate a business question of your own into SQL, execute it, and write two sentences
interpreting the result in business terms — including one sanity check you ran on the answer.
Answers. (1) SELECT c.name, SUM(o.amount) AS spend FROM orders o JOIN customers c ON
o.customer_id = c.id GROUP BY c.id ORDER BY spend DESC LIMIT 1; returns Farah, 1120 — our most valuable
customer by total spend. (2) Answers vary; a good one names the tables and join, states the filter/grouping/aggregate,
and reports a check such as “the per-country totals sum to 4020, matching SUM(amount) over all orders.”
36
