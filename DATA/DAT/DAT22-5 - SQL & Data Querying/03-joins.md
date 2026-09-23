# 3. Joins

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 15-19*

Version of 15 September 2026 Module page
3. Joins


## 3.1. Putting the split-up tables back together


Chapter 1 split data across tables to avoid repetition. A join is how you bring the pieces back together
for a query: it combines rows from two tables by matching values in a related column — almost
always a foreign key in one table meeting the primary key in the other. This is exactly the df.merge
you used in pandas.
Example — Attaching each order to its customer. The orders table stores only a customer_id.
To see the customer’s name beside each order — here, every order placed by a French customer
— join the two tables on that key:
SELECT o.id, c.name, o.amount
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
WHERE c.country = 'France'
ORDER BY o.id;
┌────┬───────┬────────┐
│ id │ name │ amount │
├────┼───────┼────────┤
│ 4 │ Bruno │ 200 │
│ 5 │ Bruno │ 450 │
│ 6 │ Bruno │ 380 │
│ 9 │ Farah │ 600 │
│ 10 │ Farah │ 520 │
└────┴───────┴────────┘
AS o and AS c are table aliases — short nicknames so you can write o.id and c.name. The ON clause
states the matching rule: pair an order with the customer whose id equals the order’s customer_id.
Remark. A bare JOIN, as written above, means INNER JOIN — the two are exactly synonyms,
and you will see the four named join types in the next section. Also, always qualify columns
with the table alias (o.amount, c.name) in a join. If both tables have a column called id and
you write a bare id, the database cannot tell which you mean and raises an “ambiguous column”
error. Qualifying every column also makes the query far easier to read.


## 3.2. The four join types


The tables rarely match perfectly: some customers have no orders, and (in a messy database) some
orders might reference a customer that no longer exists. What should happen to those unmatched
rows? That single decision is what distinguishes the four join types.
Definition 4 (INNER, LEFT, RIGHT, FULL OUTER).
15

Version of 15 September 2026 Module page
• INNER JOIN keeps only rows that have a match in both tables. Unmatched rows on either side
are dropped.
• LEFT JOIN keeps all rows of the left table; where the right table has no match, its columns
come back NULL.
• RIGHT JOIN keeps all rows of the right table; unmatched left columns are NULL.
• FULL OUTER JOIN keeps all rows from both tables; unmatched columns on whichever side
are NULL.
left circle = left-table rows, right circle = right-table rows, overlap = matched
INNER LEFT RIGHT FULL OUTER
Figure 3: The four joins differ only in which unmatched rows they keep. INNER keeps the overlap
(matched rows only); LEFT adds the unmatched left rows; RIGHT adds the unmatched right rows; FULL
OUTER keeps everything. Shaded = returned by the join.
To see all four at once, build a miniature customers/orders pair — small enough to read whole.
Because these two tables reuse the names customers and orders, create them in a separate throw-
away database (say joins.db, made exactly as you made shop.db) so they do not collide with your
shop:
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER);
INSERT INTO customers VALUES (1, 'Amara'), (2, 'Bruno'), (3, 'Chen');
INSERT INTO orders VALUES (10, 1), (11, 2), (12, 99);
Customer Chen has never ordered (an unmatched left row), and order 12 names customer_id 99,
which exists in no customer row — an orphan (an unmatched right row):
┌────┬───────┐ ┌────┬─────────────┐
│ id │ name │ │ id │ customer_id │
├────┼───────┤ ├────┼─────────────┤
│ 1 │ Amara │ │ 10 │ 1 │
│ 2 │ Bruno │ │ 11 │ 2 │
│ 3 │ Chen │ │ 12 │ 99 │
└────┴───────┘ └────┴─────────────┘
The same SELECT, with only the join keyword changed, gives four different results. Here is the LEFT
JOIN form; swap LEFT for INNER, RIGHT, or FULL OUTER to get the others:
SELECT c.name, o.id AS order_id
FROM customers AS c
LEFT JOIN orders AS o ON o.customer_id = c.id
ORDER BY c.name;
Watch Chen and order 12 appear and disappear across the four results:
16

Version of 15 September 2026 Module page
INNER JOIN LEFT JOIN
┌───────┬──────────┐ ┌───────┬──────────┐
│ name │ order_id │ │ name │ order_id │
├───────┼──────────┤ ├───────┼──────────┤
│ Amara │ 10 │ │ Amara │ 10 │
│ Bruno │ 11 │ │ Bruno │ 11 │
└───────┴──────────┘ │ Chen │ │
└───────┴──────────┘
RIGHT JOIN FULL OUTER JOIN
┌───────┬──────────┐ ┌───────┬──────────┐
│ name │ order_id │ │ name │ order_id │
├───────┼──────────┤ ├───────┼──────────┤
│ │ 12 │ │ │ 12 │
│ Amara │ 10 │ │ Amara │ 10 │
│ Bruno │ 11 │ │ Bruno │ 11 │
└───────┴──────────┘ │ Chen │ │
└───────┴──────────┘
INNER returns only Amara and Bruno (the matched pair). LEFT adds Chen with a blank order. RIGHT
adds the orphan order 12 with a blank name. FULL OUTER keeps both extras. A blank cell in these
tables is a NULL — the join’s way of saying “no match on this side”.


## 3.3. Which join, and why it matters


The choice is not cosmetic — it changes both the rows you get and the numbers you compute
from them.
Example — Listing every customer, even the inactive ones. “List all customers and their total
spend, including those who have never ordered.”
SELECT c.name, COALESCE(SUM(o.amount), 0) AS total_spend
FROM customers AS c
LEFT JOIN orders AS o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY total_spend DESC;
┌───────┬─────────────┐
│ name │ total_spend │
├───────┼─────────────┤
│ Farah │ 1120 │
│ Bruno │ 1030 │
│ Gita │ 960 │
│ Amara │ 670 │
│ Diego │ 240 │
│ Chen │ 0 │
└───────┴─────────────┘
17

Version of 15 September 2026 Module page
A LEFT JOIN from customers guarantees every customer appears — including Chen, who has
no orders. A customer with no orders gets NULL for the order columns; SUM of nothing is NULL, so
COALESCE(..., 0) turns it into a clean 0. Use an INNER JOIN here and Chen vanishes from the
report entirely — a silent undercount.
Now the key analytical query. Chapter 1 could only group orders by the opaque customer_id; joining
to customers lets you group by a real attribute — revenue per country:
SELECT c.country, SUM(o.amount) AS revenue
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
GROUP BY c.country
ORDER BY revenue DESC;
┌─────────┬─────────┐
│ country │ revenue │
├─────────┼─────────┤
│ France │ 2150 │
│ Brazil │ 1630 │
│ Spain │ 240 │
└─────────┴─────────┘
Japan is absent: Chen is the only Japanese customer and has no orders, so an INNER JOIN drops
the country entirely. If the report must list every country, that is again a job for a LEFT JOIN from
customers.
Pitfall. The most dangerous join bug is silent row loss. An INNER JOIN quietly drops rows
that don’t match — so if a few orders have a customer_id that isn’t in customers (like order 12
above), those orders disappear and your SUM(amount) is too low, with no error to warn you. When
every row of one table must survive the join, reach for a LEFT JOIN from that table. A good habit:
compare COUNT(*) before and after a join to see how many rows the match dropped.


## 3.4. Joining more than two tables


Real questions span several tables. You simply chain JOIN clauses; each adds one more table and one
more ON condition. To show what each customer bought, bring in products too — every Brazilian
customer’s orders with the product name attached:
SELECT c.name, p.name AS product, o.amount
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
JOIN products AS p ON p.id = o.product_id
WHERE c.country = 'Brazil'
ORDER BY o.id;
┌───────┬──────────┬────────┐
│ name │ product │ amount │
18

Version of 15 September 2026 Module page
├───────┼──────────┼────────┤
│ Amara │ Bottle │ 120 │
│ Amara │ Notebook │ 300 │
│ Amara │ Backpack │ 250 │
│ Gita │ Backpack │ 700 │
│ Gita │ Notebook │ 260 │
└───────┴──────────┴────────┘
Remark. SQLite gained RIGHT JOIN and FULL OUTER JOIN only in version 3.39 (2022); the
queries above run on any current SQLite. On an older engine you would not miss them: A RIGHT
JOIN B is just B LEFT JOIN A with the tables swapped, and a FULL OUTER JOIN is a LEFT JOIN
UNION-ed with the unmatched rows of the other side. Master LEFT JOIN and you can always
express the other three.
Remark. The Venn diagram in Figure 3 is a helpful picture, but not the whole truth: it suggests
a join returns a subset of rows, but when one row on the left matches several on the right (a one-
to-many link, the common case), the join repeats the left row once per match and can return
more rows than either input. This is exactly why joining before you aggregate can inflate a SUM
— another reason to check row counts around a join.
Exercises
3.1. Rewrite the per-country revenue query so that every country appears, Japan included with
a revenue of 0. Which join, and which function, do you need?
3.2. On the miniature tables, predict the row count of each of the four joins before running
them, then run them to check.
3.3. Using the orphan order 12, demonstrate the silent-row-loss pitfall: write one INNER JOIN and
one RIGHT JOIN of customers and the miniature orders, and explain why their COUNT(*) differs.
Answers. (1) SELECT c.country, COALESCE(SUM(o.amount), 0) AS revenue FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id GROUP BY c.country ORDER BY revenue
DESC; — a LEFT JOIN from customers keeps Japan, and COALESCE turns its NULL sum into 0. (2) INNER → 2, LEFT
→ 3, RIGHT → 3, FULL OUTER → 4, as printed above. (3) The INNER JOIN drops order 12 (no matching customer),
so it counts 2 rows; the RIGHT JOIN keeps every order including the orphan, so it counts 3. The missing row is the
silent loss.
19
