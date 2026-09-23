# 1. The relational model and your first SELECT

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 5-11*

Version of 15 September 2026 Module page
1. The relational model and your first
SELECT
In your earlier work with pandas you learned to take a table — a DataFrame — and interrogate
it: filter rows with a boolean mask, summarise with groupby, stitch tables together with merge, and
write a paragraph saying what the numbers mean. You already think in terms of tables, conditions,
groups, and joins. That mental model is exactly the one SQL rests on; what changes is the medium.
In pandas the table lived in your computer’s memory, inside a Python process, and you manipulated
it with method calls. Here the table lives in a database — a program built for one job: storing related
tables and answering questions about them, even when there are millions of rows and the data
outlives any single script. You ask those questions in SQL (Structured Query Language), the language
every database understands and the shared language of data work everywhere. A data scientist who
cannot read and write SQL is cut off from where most of the world’s structured data actually lives.
Almost every pandas idea has a SQL twin, and naming the correspondence up front makes the work
feel like translation rather than starting over:
In pandas you wrote… In SQL you write…
df[df["amount"] > 100] WHERE amount > 100
df.sort_values("amount") ORDER BY amount
df.groupby("customer_id").sum() GROUP BY customer_id + SUM(...)
a.merge(b, on="id") a JOIN b ON a.id = b.id
df["amount"].mean() AVG(amount)
A database also gives you what an in-memory DataFrame cannot: persistence (the data stays put),
multiple related tables the database itself keeps consistent, transactional changes (INSERT,
UPDATE, DELETE), and indexes that keep queries fast as the data grows — each a thread this book
picks up in turn.


## 1.1. Why tables, and why more than one


A relational database stores data in tables (also called relations): a grid of rows and columns,
where each row is one record and each column one named, typed attribute. So far this is just a
DataFrame. The leap is that a database holds many tables that refer to each other, and does not
let those references break.
Example — One table is not enough. Imagine recording online orders. You could put everything
in one big table, repeating the customer’s name and country on every single order:
order_id customer_name country amount
1 Amara Brazil 120
2 Amara Brazil 300
3 Bruno France 200
5

Version of 15 September 2026 Module page
Amara’s details are copied onto every order she places. If she moves to Spain you must find and fix
every row, and if you miss one the data now disagrees with itself. The relational answer is to split
this into two tables — one for customers, one for orders — and let each order point at a customer.
Definition 1 (Primary key and foreign key). A primary key is a column (or set of columns)
whose value uniquely identifies each row of a table — no two rows share it, and it is never
NULL. A foreign key is a column in one table that holds the primary key value of a row
in another table, creating a link between them. Foreign keys are how a relational database
represents relationships without copying data.
orders
customers
id customer_id amount
id name
1 1 120
1 Amara
2 1 300
2 Bruno
3 2 200
foreign key → primary key
Figure 1: Two tables linked by a foreign key. orders.customer_id (orange) stores the value of
customers.id (purple). Amara’s name lives in exactly one place; her two orders both point at it.
Change her name once and every order sees the update.
Remark. This is the database version of not repeating yourself, and it is the single idea that
separates “data in a database” from “data in a spreadsheet”. Splitting data into linked tables to
remove redundancy is called normalisation; you do not need its formal theory in this course,
only the instinct: each fact should live in one place, and relationships are expressed by keys, not
by copying.


## 1.2. The course database


Every example in this book runs against one small shop database, built exactly along those lines. It
has three tables: customers and products hold facts (who the buyers are, what the catalogue is), and
orders records events — each order names its customer and product by id, never by copying their
details. You build it yourself in a moment and query it for the rest of the book; a few later chapters
spin up a tiny extra table or a second throwaway database of their own, each with its build script
printed. Either way you can run every query as you read and check your result against the one printed
beside it.
┌────┬───────┬─────────┬─────────────┐
│ id │ name │ country │ signup_date │
├────┼───────┼─────────┼─────────────┤
│ 1 │ Amara │ Brazil │ 2023-02-11 │
│ 2 │ Bruno │ France │ 2023-06-30 │
│ 3 │ Chen │ Japan │ 2024-01-15 │
│ 4 │ Diego │ Spain │ 2024-03-22 │
│ 5 │ Farah │ France │ 2024-07-08 │
6

Version of 15 September 2026 Module page
│ 6 │ Gita │ Brazil │ 2025-01-05 │
└────┴───────┴─────────┴─────────────┘
┌────┬─────────────┬────────────┬────────────┬────────┐
│ id │ customer_id │ product_id │ order_date │ amount │
├────┼─────────────┼────────────┼────────────┼────────┤
│ 1 │ 1 │ 3 │ 2024-05-02 │ 120 │
│ 2 │ 1 │ 1 │ 2025-03-14 │ 300 │
│ 3 │ 1 │ 2 │ 2025-08-22 │ 250 │
│ 4 │ 2 │ 4 │ 2024-11-20 │ 200 │
│ 5 │ 2 │ 2 │ 2025-02-09 │ 450 │
│ 6 │ 2 │ 1 │ 2025-07-04 │ 380 │
│ 7 │ 4 │ 3 │ 2024-09-12 │ 150 │
│ 8 │ 4 │ 5 │ 2025-06-01 │ 90 │
│ 9 │ 5 │ 2 │ 2025-04-18 │ 600 │
│ 10 │ 5 │ 4 │ 2025-09-01 │ 520 │
│ 11 │ 6 │ 2 │ 2025-05-30 │ 700 │
│ 12 │ 6 │ 1 │ 2025-10-11 │ 260 │
└────┴─────────────┴────────────┴────────────┴────────┘
Notice how orders stores only a customer_id and a product_id: an order knows which customer
and product by their keys, and nothing else about them. customers.id is the primary key of the
customers table; orders.customer_id is a foreign key pointing back at it.
Remark (Build it yourself). Create the database once and keep the file; you will query it
throughout the book. Save the script below as setup.sql, then run these three lines of Python
(the sqlite3 module is built in — no install):
import sqlite3
conn = sqlite3.connect("shop.db")
conn.executescript(open("setup.sql").read())
conn.close()
CREATE TABLE customers (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
country TEXT,
signup_date TEXT
);
CREATE TABLE products (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
category TEXT
);
CREATE TABLE orders (
id INTEGER PRIMARY KEY,
customer_id INTEGER NOT NULL REFERENCES customers(id),
product_id INTEGER NOT NULL REFERENCES products(id),
7

Version of 15 September 2026 Module page
order_date TEXT NOT NULL,
amount INTEGER NOT NULL
);
INSERT INTO customers (id, name, country, signup_date) VALUES
(1, 'Amara', 'Brazil', '2023-02-11'),
(2, 'Bruno', 'France', '2023-06-30'),
(3, 'Chen', 'Japan', '2024-01-15'),
(4, 'Diego', 'Spain', '2024-03-22'),
(5, 'Farah', 'France', '2024-07-08'),
(6, 'Gita', 'Brazil', '2025-01-05');
INSERT INTO products (id, name, category) VALUES
(1, 'Notebook', 'Stationery'),
(2, 'Backpack', 'Bags'),
(3, 'Bottle', 'Accessories'),
(4, 'Desk lamp', 'Home'),
(5, 'Pen set', 'Stationery');
INSERT INTO orders (id, customer_id, product_id, order_date, amount) VALUES
( 1, 1, 3, '2024-05-02', 120),
( 2, 1, 1, '2025-03-14', 300),
( 3, 1, 2, '2025-08-22', 250),
( 4, 2, 4, '2024-11-20', 200),
( 5, 2, 2, '2025-02-09', 450),
( 6, 2, 1, '2025-07-04', 380),
( 7, 4, 3, '2024-09-12', 150),
( 8, 4, 5, '2025-06-01', 90),
( 9, 5, 2, '2025-04-18', 600),
(10, 5, 4, '2025-09-01', 520),
(11, 6, 2, '2025-05-30', 700),
(12, 6, 1, '2025-10-11', 260);


## 1.3. The anatomy of a SELECT


A SELECT query reads rows from one or more tables. Nearly everything you do in this course is a
SELECT. Its clauses always appear in this written order:
SELECT columns -- which columns to return
FROM table -- which table to read
WHERE condition -- keep only rows matching this
GROUP BY columns -- collapse rows into groups
HAVING group_condition -- keep only groups matching this
ORDER BY columns -- sort the result
LIMIT n; -- return at most n rows
A crucial subtlety, and the source of many beginner errors: SQL is written in the order above, but
the database evaluates the clauses in a different order. It starts from the table, filters rows, forms
groups, filters groups, and only then works out which columns to show and how to sort them.
8

Version of 15 September 2026 Module page
FROM WHERE GROUP BY HAVING SELECT ORDER BY
pick the table filter rows form groups filter groups choose columns sort result
execution order — not the order you write the clauses in
Figure 2: The logical order in which a database evaluates a query. WHERE filters individual rows before
groups exist; HAVING filters groups after they are formed; SELECT runs late, which is why a column
alias defined in SELECT cannot usually be reused back in WHERE.


## 1.4. WHERE: filtering rows


WHERE keeps only the rows for which its condition is true. It runs before any grouping, so it sees
individual rows. Ask the orders table for every order worth more than 300:
SELECT id, customer_id, amount
FROM orders
WHERE amount > 300;
┌────┬─────────────┬────────┐
│ id │ customer_id │ amount │
├────┼─────────────┼────────┤
│ 5 │ 2 │ 450 │
│ 6 │ 2 │ 380 │
│ 9 │ 5 │ 600 │
│ 10 │ 5 │ 520 │
│ 11 │ 6 │ 700 │
└────┴─────────────┴────────┘
Conditions combine with AND, OR, and NOT, and use the comparison operators you already know plus
a few SQL-specific ones:
Operator Meaning
= <> < > <= >= equal, not-equal, and the orderings
BETWEEN a AND b within a range, inclusive
IN (v1, v2, …) equals any value in the list
LIKE 'A%' pattern match (% = any run of characters, _ = one)
IS NULL / IS NOT NULL test for missing values
Pitfall. SQL text strings are wrapped in single quotes: 'France'. Double quotes mean some-
thing different (an identifier, like a column name) in standard SQL. And equality uses a single =,
not the == of Python. WHERE country == 'France' is a Python habit that many databases reject.


## 1.5. ORDER BY and LIMIT: sorting and trimming


ORDER BY sorts the rows the query returns. ASC (ascending) is the default; DESC reverses it. You can
sort by several columns — ties on the first are broken by the second. Pair ORDER BY with LIMIT to
answer “top N” questions directly: sort, then take the first few rows. The three largest orders:
9

Version of 15 September 2026 Module page
SELECT id, customer_id, amount
FROM orders
ORDER BY amount DESC
LIMIT 3;
┌────┬─────────────┬────────┐
│ id │ customer_id │ amount │
├────┼─────────────┼────────┤
│ 11 │ 6 │ 700 │
│ 9 │ 5 │ 600 │
│ 10 │ 5 │ 520 │
└────┴─────────────┴────────┘


## 1.6. GROUP BY and HAVING: from rows to groups


GROUP BY is the heart of analytical SQL, and it is exactly the df.groupby you already know. It collapses
all rows sharing the same value in the listed column(s) into a single group, so that an aggregate
function (Chapter 2) can compute one summary number per group. Total revenue per customer:
SELECT customer_id, SUM(amount) AS revenue
FROM orders
GROUP BY customer_id
ORDER BY revenue DESC;
┌─────────────┬─────────┐
│ customer_id │ revenue │
├─────────────┼─────────┤
│ 5 │ 1120 │
│ 2 │ 1030 │
│ 6 │ 960 │
│ 1 │ 670 │
│ 4 │ 240 │
└─────────────┴─────────┘
Every order with customer_id = 5 is folded into one group; SUM(amount) then totals their amounts.
The result has one row per group — one per customer_id that appears in orders — not one per
order. (The groups are still labelled by the opaque customer_id; in Chapter 3 a join will replace those
ids with names.)
HAVING then filters those groups, using a condition on the aggregate. This is the clause beginners most
often miss, because it looks like it duplicates WHERE. The distinction is sharp and worth memorising:
Definition 2 (WHERE vs HAVING). WHERE filters rows, before grouping. It cannot men-
tion an aggregate, because groups do not exist yet. HAVING filters groups, after grouping. It is
the only place an aggregate condition such as SUM(amount) > 800 may go.
10

Version of 15 September 2026 Module page
Example — The two filters working together. “Among orders placed in 2025, which customers
spent more than 800 in total?” Dates stored in ISO form (2025-03-14) compare correctly as text, so
order_date >= '2025-01-01' keeps exactly the 2025 rows.
SELECT customer_id, SUM(amount) AS revenue
FROM orders
WHERE order_date >= '2025-01-01' -- row filter: keep only 2025 orders
GROUP BY customer_id
HAVING SUM(amount) > 800 -- group filter: keep big spenders
ORDER BY revenue DESC;
┌─────────────┬─────────┐
│ customer_id │ revenue │
├─────────────┼─────────┤
│ 5 │ 1120 │
│ 6 │ 960 │
│ 2 │ 830 │
└─────────────┴─────────┘
WHERE throws away non-2025 rows before totals are computed; HAVING inspects each customer’s
total after. Swapping them is impossible: a WHERE on SUM(amount) is an error, and a HAVING on
order_date would filter far too late.
Pitfall. Every non-aggregated column in the SELECT list of a grouped query must appear in
GROUP BY. Writing SELECT customer_id, product_id, SUM(amount) … GROUP BY
customer_id is ambiguous — each customer group contains many different product_ids, so
which one should the database show? Standard SQL rejects this; SQLite returns an arbitrary
one, which is worse, because it looks like it worked. Group by every plain column you select, or
aggregate it.
Exercises
1.1. On the orders table, write one SELECT that uses WHERE, GROUP
BY, HAVING, and ORDER BY together. State, for each clause, whether it acts on rows or on groups,
and why it must run where it does.
1.2. Write a query returning the three smallest orders. Then change one clause so it returns the
three largest instead.
1.3. Explain why SELECT customer_id, amount FROM orders GROUP BY
customer_id is a badly-formed query, and give two different well-formed queries that fix it.
Answers. (1) e.g. SELECT customer_id, SUM(amount) AS revenue FROM orders WHERE amount >
100 GROUP BY customer_id HAVING SUM(amount) > 500 ORDER BY revenue DESC;. WHERE acts on individual rows
before groups exist; GROUP BY forms the groups; HAVING acts on the finished groups (it is the only place SUM(amount)
may be tested); ORDER BY sorts the surviving group rows last. (2) … ORDER BY amount ASC LIMIT 3 for the smallest;
switch ASC to DESC for the largest. (3) amount is neither grouped nor aggregated, so each customer_id group holds
many amounts and the database cannot pick one. Fix by aggregating — SELECT customer_id, SUM(amount) … GROUP
BY customer_id — or by grouping on it too — GROUP BY customer_id, amount.
11
