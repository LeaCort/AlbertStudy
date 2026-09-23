# 5. Creating and manipulating tables

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 24-26*

Version of 15 September 2026 Module page
5. Creating and manipulating tables


## 5.1. Defining where the data lives


So far you have only read data. To build a database you must also create tables and change their
contents. These four statements — CREATE, INSERT, UPDATE, DELETE — are the write side of SQL.
Because UPDATE and DELETE change data for good, it is wise to practise them on a throwaway table
rather than on data you care about. So build one more table in your shop database — a small contacts
table, kept separate from the customers, orders, and products you have been querying — and do all
the writing in this chapter there:
Example — Defining a table.
CREATE TABLE contacts (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
email TEXT UNIQUE,
country TEXT
);
Each line declares a column, its type, and optional constraints: id is the primary key (unique,
not null, identifies the row); name may not be NULL; email must be unique across all rows; country
is free to be anything, including missing.
Definition 7 (Column types and constraints). A type declares what kind of value a column
is meant to hold — INTEGER, REAL (decimal), TEXT, and in SQLite the catch-all BLOB. A constraint
is a rule the database enforces on every write:
• PRIMARY KEY — unique row identifier;
• NOT NULL — a value is required;
• UNIQUE — no two rows may share this value;
• DEFAULT v — value to use when none is given;
• FOREIGN KEY (col) REFERENCES other(id) — col must match a row in other.
Constraints are the database protecting your data’s integrity for you — a guarantee an in-
memory DataFrame cannot give.
Pitfall. In most databases a column’s type is strictly enforced. In SQLite — the engine this
course uses — a declared type is only an affinity: SQLite will happily store the text 'hello' in a
column you declared INTEGER. Rely on your NOT NULL/UNIQUE constraints for integrity, and do
not assume the type alone will reject bad data. (Foreign-key checks, likewise, are off unless you
run PRAGMA foreign_keys = ON.)
24

Version of 15 September 2026 Module page


## 5.2. Inserting, updating, deleting


Start from the empty contacts table just created, add two rows, then change and remove them —
watching the table after each statement.
INSERT adds rows:
INSERT INTO contacts (id, name, email, country) VALUES
(1, 'Alice', 'alice@example.com', 'France'),
(2, 'Bob', 'bob@example.com', 'Spain');
┌────┬───────┬───────────────────┬─────────┐
│ id │ name │ email │ country │
├────┼───────┼───────────────────┼─────────┤
│ 1 │ Alice │ alice@example.com │ France │
│ 2 │ Bob │ bob@example.com │ Spain │
└────┴───────┴───────────────────┴─────────┘
UPDATE changes existing rows in place:
UPDATE contacts
SET country = 'Germany'
WHERE id = 1;
┌────┬───────┬───────────────────┬─────────┐
│ id │ name │ email │ country │
├────┼───────┼───────────────────┼─────────┤
│ 1 │ Alice │ alice@example.com │ Germany │
│ 2 │ Bob │ bob@example.com │ Spain │
└────┴───────┴───────────────────┴─────────┘
DELETE removes rows:
DELETE FROM contacts
WHERE id = 2;
┌────┬───────┬───────────────────┬─────────┐
│ id │ name │ email │ country │
├────┼───────┼───────────────────┼─────────┤
│ 1 │ Alice │ alice@example.com │ Germany │
└────┴───────┴───────────────────┴─────────┘
Pitfall. An UPDATE or DELETE without a WHERE clause hits every row in the table. DELETE
FROM contacts; empties the table; UPDATE contacts SET country =
'France'; makes everyone French. This is the single most destructive beginner mistake. Before
running an UPDATE/DELETE, write the WHERE first, and ideally run the same WHERE inside a SELECT
to see exactly which rows you are about to change before you change them.
25

Version of 15 September 2026 Module page
Remark. Statements that change data are wrapped in transactions. A transaction groups
several changes so they either all succeed or all fail together, leaving the database consistent.
When you work from Python (next chapter), changes are not permanent until you commit —
until then you can rollback and undo them. This safety net is another thing a database gives
you that editing a CSV by hand does not.
Exercises
5.1. CREATE a table with a primary key, a NOT NULL column, and a UNIQUE column. INSERT several
rows, UPDATE one, and DELETE another, checking the table after each.
5.2. Attempt to INSERT two rows sharing the same value in the UNIQUE column. What does the
database do, and why is that the point of the constraint?
5.3. Describe exactly what would happen if you ran your UPDATE or DELETE from the first exercise
without its WHERE clause.
Answers. (1) See the INSERT/UPDATE/DELETE sequence above; run each and SELECT * between them. (2) The second
INSERT is rejected with a uniqueness error and no row is added — the constraint stops duplicate values from ever
entering the table. (3) A WHERE-less UPDATE rewrites the chosen column in every row; a WHERE-less DELETE empties
the table.
26
