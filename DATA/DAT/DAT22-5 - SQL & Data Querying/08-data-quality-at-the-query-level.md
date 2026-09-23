# 8. Data quality at the query level

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 31-34*

Version of 15 September 2026 Module page
8. Data quality at the query level


## 8.1. Clean the data where it lives


In pandas, you learned to clean a DataFrame after loading it. Often it is better to catch problems in
the query itself, at the source. Three issues recur: duplicates, NULLs, and inconsistent strings. To see
them, build one more table — a deliberately messy leads table — the same way you built shop.db:
CREATE TABLE leads (
id INTEGER PRIMARY KEY,
name TEXT,
email TEXT,
country TEXT
);
INSERT INTO leads (id, name, email, country) VALUES
(1, 'Alice', 'alice@example.com', 'France'),
(2, 'Bob', 'bob@example.com', 'Spain '),
(3, 'Alice', 'alice@example.com', 'france'),
(4, 'Cara', 'cara@example.com', NULL),
(5, 'Dan', 'dan@example.com', ' FRANCE'),
(6, 'Bob', 'bob@example.com', 'Spain');
Its six rows:
┌────┬───────┬───────────────────┬─────────┐
│ id │ name │ email │ country │
├────┼───────┼───────────────────┼─────────┤
│ 1 │ Alice │ alice@example.com │ France │
│ 2 │ Bob │ bob@example.com │ Spain │
│ 3 │ Alice │ alice@example.com │ france │
│ 4 │ Cara │ cara@example.com │ │
│ 5 │ Dan │ dan@example.com │ FRANCE │
│ 6 │ Bob │ bob@example.com │ Spain │
└────┴───────┴───────────────────┴─────────┘
Two things are already wrong and invisible: rows 1, 3, and 5 are the same country typed three ways,
and row 2′s country is 'Spain ' with a trailing space you cannot see but the database can.


## 8.2. Duplicates


Duplicate rows inflate counts and totals. Find them by grouping on the columns that should be
unique and counting:
SELECT email, COUNT(*) AS n
FROM leads
GROUP BY email
HAVING COUNT(*) > 1;
31

Version of 15 September 2026 Module page
┌───────────────────┬───┐
│ email │ n │
├───────────────────┼───┤
│ alice@example.com │ 2 │
│ bob@example.com │ 2 │
└───────────────────┴───┘
Both alice@example.com and bob@example.com appear twice. To return a deduplicated result instead,
SELECT DISTINCT drops exact-duplicate rows:
SELECT DISTINCT name, email
FROM leads
ORDER BY name;
┌───────┬───────────────────┐
│ name │ email │
├───────┼───────────────────┤
│ Alice │ alice@example.com │
│ Bob │ bob@example.com │
│ Cara │ cara@example.com │
│ Dan │ dan@example.com │
└───────┴───────────────────┘


## 8.3. NULL handling


COUNT already reveals a NULL: counting rows versus counting the country column disagree, because
one lead has no country recorded.
SELECT COUNT(*) AS n_rows,
COUNT(country) AS n_with_country
FROM leads;
┌────────┬────────────────┐
│ n_rows │ n_with_country │
├────────┼────────────────┤
│ 6 │ 5 │
└────────┴────────────────┘
Definition 10 (What NULL means). NULL is not zero and not an empty string — it
means unknown / missing. Any arithmetic or comparison with NULL yields NULL (effectively
“unknown”), so NULL = NULL is not true. You therefore test for it with IS NULL and IS NOT NULL,
never = NULL, and substitute a value with COALESCE(col, replacement), which returns the first
non-NULL argument.
32

Version of 15 September 2026 Module page
SELECT name, COALESCE(country, 'Unknown') AS country
FROM leads
WHERE country IS NULL;
┌──────┬─────────┐
│ name │ country │
├──────┼─────────┤
│ Cara │ Unknown │
└──────┴─────────┘
Pitfall. The deepest NULL trap is that WHERE country <> 'France' excludes the rows where
country is NULL — because NULL <> 'France' is NULL, not true. Cara, whose country is unknown,
silently drops out. This query loses her:
SELECT name, country
FROM leads
WHERE country <> 'France';
┌───────┬─────────┐
│ name │ country │
├───────┼─────────┤
│ Bob │ Spain │
│ Alice │ france │
│ Dan │ FRANCE │
│ Bob │ Spain │
└───────┴─────────┘
If you want non-French leads including those with no country recorded, you must say so
explicitly with OR country IS NULL, and Cara reappears:
SELECT name, country
FROM leads
WHERE country <> 'France' OR country IS NULL;
┌───────┬─────────┐
│ name │ country │
├───────┼─────────┤
│ Bob │ Spain │
│ Alice │ france │
│ Cara │ │
│ Dan │ FRANCE │
│ Bob │ Spain │
└───────┴─────────┘
33

Version of 15 September 2026 Module page


## 8.4. Inconsistent string formats


The same value typed three ways — 'France', 'france', ' FRANCE' — counts as three distinct groups,
scattering your aggregates. Normalise with string functions inside the GROUP BY:
SELECT LOWER(TRIM(country)) AS country, COUNT(*) AS n
FROM leads
GROUP BY LOWER(TRIM(country))
ORDER BY n DESC;
┌─────────┬───┐
│ country │ n │
├─────────┼───┤
│ france │ 3 │
│ spain │ 2 │
│ │ 1 │
└─────────┴───┘
TRIM strips leading/trailing whitespace (rescuing 'Spain ' and ' FRANCE'), and LOWER/UPPER unify
case, so the three France variants collapse into one group of three and the two Spain variants into
one of two. The third row — blank, with n of 1 — is Cara: TRIM and LOWER applied to a NULL are still
NULL (LOWER(TRIM(NULL)) = NULL), so, exactly as with the NULL grouping seen above, her unknown
country forms its own group and prints blank rather than folding into any country.
Exercises
8.1. On the leads table, write one query that finds duplicate emails and one that returns a
duplicate-free list of (name, email) pairs.
8.2. Show a <> filter that silently drops the NULL-country lead, then fix it so the row reappears.
8.3. Write a query that reports how many leads belong to each country after normalising case
and whitespace, and explain why grouping on the raw column gives the wrong answer.
Answers. (1) Duplicates: SELECT email, COUNT(*) FROM leads GROUP BY email HAVING
COUNT(*) > 1;. Distinct pairs: SELECT DISTINCT name, email FROM leads;. (2) Bug: … WHERE country <> 'France'
(drops Cara); fix: … WHERE country <>
'France' OR country IS NULL. (3) SELECT LOWER(TRIM(country)), COUNT(*) FROM
leads GROUP BY LOWER(TRIM(country)); gives france 3, spain 2, and a blank group of 1 for Cara’s NULL country
(which TRIM/LOWER leave NULL). Grouping on the raw column instead splits France into three one-row groups because
'France', 'france', and ' FRANCE' are three different strings.
34
