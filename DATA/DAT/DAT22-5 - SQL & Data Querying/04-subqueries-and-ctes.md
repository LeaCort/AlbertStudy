# 4. Subqueries and CTEs

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 20-23*

Version of 15 September 2026 Module page
4. Subqueries and CTEs


## 4.1. When one query is not enough


Some questions need a query whose answer feeds another query. “Which orders are above
average?” first needs the average, then the rows beating it. SQL gives two tools for this: the subquery
(a query nested inside another) and the CTE (a named query you define up front). They can express
the same things; CTEs are usually far more readable.


## 4.2. Subqueries


The quickest way to understand a subquery is to meet one where you cannot avoid it. “Which orders
are above the overall average amount?” needs the average before it can keep the rows beating it:
Example — Orders above the overall average.
SELECT id, customer_id, amount
FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
┌────┬─────────────┬────────┐
│ id │ customer_id │ amount │
├────┼─────────────┼────────┤
│ 5 │ 2 │ 450 │
│ 6 │ 2 │ 380 │
│ 9 │ 5 │ 600 │
│ 10 │ 5 │ 520 │
│ 11 │ 6 │ 700 │
└────┴─────────────┴────────┘
The inner SELECT AVG(amount) FROM orders runs first and returns one number (335); the outer
query then keeps every order beating it. You could not do this with a plain WHERE amount >
AVG(amount) — an aggregate is not allowed directly in WHERE — so the subquery is what lets you
compare a row against a summary of the whole table.
That subquery sat in WHERE, but it is not the only place one can go.
Definition 5 (Subquery). A subquery is a SELECT written inside another query. It can appear:
• in WHERE, to compare against a computed value or a set of values;
• in FROM, as a temporary table the outer query reads from;
• in the SELECT list, to compute a value per row.
A subquery that returns a list pairs with IN — here, the customers who have placed at least one large
order:
20

Version of 15 September 2026 Module page
SELECT name
FROM customers
WHERE id IN (SELECT customer_id FROM orders WHERE amount > 500);
┌───────┐
│ name │
├───────┤
│ Farah │
│ Gita │
└───────┘
The two queries above put the subquery in WHERE, but the definition promised two more positions.
A subquery in FROM stands in for a table — a derived table the outer query reads from — which is
what you reach for when you must aggregate, then aggregate again. AVG(amount) averages the raw
orders; to instead average each customer’s total, total the customers first (the derived table), then
average those totals:
SELECT ROUND(AVG(total), 2) AS avg_customer_total
FROM (
SELECT customer_id, SUM(amount) AS total
FROM orders
GROUP BY customer_id
) AS per_customer;
┌────────────────────┐
│ avg_customer_total │
├────────────────────┤
│ 804.0 │
└────────────────────┘
The inner query produces one row per customer who has placed an order — five rows here, since
Chen has never ordered, exactly the silent omission Chapter 3 warned of. The outer query treats that
result as a table called per_customer and averages its total column. The answer (804) is the average
of those per-customer totals, and it sits well above the per-order AVG(amount) of 335 — a reminder
from Chapter 2 that averaging totals and averaging rows are different questions. (Were you to LEFT
JOIN from customers so Chen counts as a 0, the average over all six customers would instead be 670.)
Finally, a subquery in the SELECT list computes one value per row. Here each of the largest orders
is shown beside the whole table’s average and its distance from it:
SELECT id, amount,
amount - (SELECT AVG(amount) FROM orders) AS vs_avg
FROM orders
ORDER BY amount DESC
LIMIT 4;
┌────┬────────┬────────┐
│ id │ amount │ vs_avg │
21

Version of 15 September 2026 Module page
├────┼────────┼────────┤
│ 11 │ 700 │ 365.0 │
│ 9 │ 600 │ 265.0 │
│ 10 │ 520 │ 185.0 │
│ 5 │ 450 │ 115.0 │
└────┴────────┴────────┘
The (SELECT AVG(amount) FROM orders) runs once and its single value is attached to every row, so
vs_avg reads as “how far this order sits above the typical order”.


## 4.3. Common Table Expressions (CTEs)


As questions grow, nesting subqueries inside subqueries becomes unreadable — you have to read
from the inside out. A CTE fixes this by letting you name a query and then refer to it by name, top
to bottom, like defining a variable before using it.
Definition 6 (Common Table Expression (WITH)). A CTE is a named, temporary result
set defined with a WITH clause at the start of a query and referenced by name in what follows.
It exists only for the duration of that one query. Several CTEs are separated by commas, and
each may build on the ones before it — letting you decompose a complex query into readable,
named steps.
Example — The same question, as a readable pipeline. “Which countries have above-average
total revenue?” — solved in two named steps:
WITH country_totals AS (
SELECT c.country, SUM(o.amount) AS revenue
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
GROUP BY c.country
)
SELECT country, revenue
FROM country_totals
WHERE revenue > (SELECT AVG(revenue) FROM country_totals)
ORDER BY revenue DESC;
┌─────────┬─────────┐
│ country │ revenue │
├─────────┼─────────┤
│ France │ 2150 │
│ Brazil │ 1630 │
└─────────┴─────────┘
country_totals is computed once and named; the main query reads from it twice (once to list,
once to average) as if it were a real table. France and Brazil clear the average of the three country
totals; Spain does not.
22

Version of 15 September 2026 Module page
join + GROUP BY filter
orders + customers country_totals (CTE) final result
Figure 4: A CTE names an intermediate result so the query reads as a left-to-right pipeline — raw
rows → grouped totals → filtered final answer — instead of an inside-out nest of subqueries.
Remark. Reach for a subquery for a quick, one-off nested value (often in WHERE). Reach for a
CTE when the query has several steps, when an intermediate result is used more than once (as
country_totals is above), or simply when a name would make the logic clearer. Readable SQL
is maintainable SQL, and CTEs are the main tool for keeping complex queries readable.
Exercises
4.1. Write “which orders are above the overall average amount?” first as a subquery, then rewrite
it as a CTE that names the average. Explain when you would prefer each form.
4.2. Using a subquery with IN, list the names of customers who have never placed an order over
500. (Hint: NOT IN, or IN on the complement.)
4.3. Using a subquery in FROM (a derived table), compute the average number of orders per
customer: count each customer’s orders in the inner query, then average those counts in the
outer one. Explain why a plain COUNT(*) on orders cannot answer this.
Answers. (1) Subquery: SELECT id, amount FROM orders WHERE amount > (SELECT AVG(amount)
FROM orders);. CTE: WITH stats AS (SELECT AVG(amount) AS a FROM orders) SELECT
id, amount FROM orders, stats WHERE amount > stats.a;. Prefer the subquery for a single throwaway value;
prefer the CTE when the value is reused or the query grows several steps. (2) SELECT name FROM customers WHERE id
NOT IN (SELECT
customer_id FROM orders WHERE amount > 500); returns Amara, Bruno, Chen, Diego. (3) SELECT ROUND(AVG(n),
2) FROM (SELECT customer_id, COUNT(*) AS n FROM orders
GROUP BY customer_id) AS per_customer; returns 2.4 — averaged over the five customers who have actually
ordered (Chen, with none, is again absent). A plain COUNT(*) counts rows (orders), giving 12; the per-customer average
needs the counts formed first, in the derived table, before they can be averaged.
23
