# 10. Indexing and query performance

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 37-38*

Version of 15 September 2026 Module page
10. Indexing and query performance


## 10.1. When the table gets big


On a thousand rows every query is instant. On ten million, a query that filters on an unindexed
column must read every row to find the matches — a full table scan. An index is the database’s
answer, and the trade-offs it carries are the last idea the course needs.
Definition 12 (Index). An index is an auxiliary data structure (typically a balanced tree) that
keeps the values of one or more columns in sorted order, with pointers to the rows that contain
them. It lets the database jump straight to the matching rows instead of scanning the whole
table — turning a search from 𝑂(𝑛) (read every row) into roughly 𝑂(log𝑛) (descend a tree).
Remark (reading the 𝑂(⋅) notation). 𝑂(𝑛) and 𝑂(log𝑛) are a compact shorthand for how
the work grows as the table grows — with 𝑛 the number of rows. 𝑂(𝑛) means the effort grows
in step with 𝑛: double the rows and you double the work, because you read every one. 𝑂(log𝑛)
means it grows like the logarithm of 𝑛 — far slower: each tenfold increase in rows adds only a
handful of extra steps. That gap is the whole case for an index. At ten million rows, an 𝑂(𝑛) scan
touches ten million rows while an 𝑂(log𝑛) descent touches about two dozen.
You can see the difference the engine makes. EXPLAIN QUERY PLAN reports how a query will run.
Before any index, filtering orders on customer_id is a full scan:
EXPLAIN QUERY PLAN
SELECT * FROM orders WHERE customer_id = 2;
QUERY PLAN
`--SCAN orders
Add an index on that column, and ask again:
CREATE INDEX idx_orders_customer ON orders(customer_id);
EXPLAIN QUERY PLAN
SELECT * FROM orders WHERE customer_id = 2;
QUERY PLAN
`--SEARCH orders USING INDEX idx_orders_customer (customer_id=?)
SCAN orders has become SEARCH orders USING INDEX … — the engine now jumps to the matching
rows through the index instead of reading the whole table. On twelve rows the wall-clock difference
is nothing; on ten million it is the difference between instant and unusable.
37

Version of 15 September 2026 Module page
Without index: full scan With index: tree lookup
row 1
row 2 M–Z?
8 row 3
ds
all r
r
o
o
w
w
4
5 A–L M–Z
e a row 6 ← match
r
row 7
→ row 6
row 8
3 steps, not 8
Figure 6: Searching for one value. Without an index the database reads every row (a full scan, 𝑂(𝑛)).
With an index it descends a sorted tree, touching only a few nodes (𝑂(log𝑛)) — a gap that widens
enormously as the table grows.


## 10.2. The trade-off: indexes are not free


An index would seem to make everything faster, so why not index every column? Because an index
is a second copy of the data that the database must keep in sync.
Definition 13 (What an index costs). An index speeds up reads that filter, join, or sort on
the indexed column — but it slows down writes (INSERT, UPDATE, DELETE), because every write
must also update the index, and it consumes extra storage. An index is a bet that the column
will be searched far more often than it is written.
Example — When to create one, when not to. Worth indexing: the customer_id column of
a million-row orders table that you constantly filter and join on — the read speed-up is huge and
well worth the write cost.
Not worth it: an is_active boolean with only two values (an index barely narrows the search), a
tiny 50-row lookup table (a full scan is already instant), or a column you never filter on (you pay
the write and storage cost for no read benefit).
Pitfall. Do not reflexively index everything. On a write-heavy table, redundant indexes can
make the system slower overall — every insert now maintains a stack of indexes nobody
queries. Index the columns that appear in your WHERE and JOIN conditions on large tables,
measure the effect with EXPLAIN QUERY PLAN (as above) to confirm the index is actually used,
and add no more than the queries justify.
Exercises
10.1. Run EXPLAIN QUERY PLAN on a query that filters orders by customer_id, create an index on
that column, and run it again. Describe how the plan changes.
10.2. Name one column in the shop database worth indexing and one not worth it, and justify
each by how often it is filtered versus written.
Answers. (1) The plan changes from SCAN orders to SEARCH orders USING INDEX …, as shown above — the engine
switches from reading every row to jumping through the index. (2) Worth it: orders.customer_id, filtered and joined
constantly. Not worth it: a two-value flag column, or customers.signup_date if you never filter on it — both pay write/
storage cost for little or no read benefit.
38
