# 7. Connecting to SQLite from Python

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 29-30*

Version of 15 September 2026 Module page
7. Connecting to SQLite from Python


## 7.1. SQL where you already work


A query is only useful if you can run it from your analysis code and feed the result into pandas, a
model, or a report. SQLite is a complete relational database that lives in a single file and needs no
server, and Python’s built-in sqlite3 module talks to it directly — no installation required. This is
the bridge between this course and every Python-based course around it.
Example — A full round-trip.
import sqlite3
conn = sqlite3.connect("shop.db") # open the database file
cursor = conn.cursor()
cursor.execute(
"SELECT name, country FROM customers WHERE country = ?",
("France",), # values fill the ? placeholders
)
for name, country in cursor.fetchall(): # pull the rows back into Python
print(name, country)
conn.close()
execute sends the query; fetchall pulls the rows back into Python. Running it against shop.db
prints the two French customers:
Bruno France
Farah France
The code turns on two objects — a connection and a cursor. Named precisely:
Definition 9 (Connection and cursor). A connection (sqlite3.connect("file.db")) is
your session with the database. A cursor (conn.cursor()) is the object you use to execute
statements and fetch their results: execute(sql) runs a statement; fetchone() returns the next
result row, fetchall() returns all remaining rows as a list of tuples.
Pitfall. Never build SQL by string-formatting user input. Writing f"… WHERE name =
'{name}'" is the classic SQL injection hole. Feed it a name of x' OR '1'='1, and the query
becomes … WHERE name = 'x' OR '1'='1' — a condition true for every row, so the filter is
bypassed and the whole table leaks. Always pass values as parameters with ? placeholders and a
tuple — execute("… WHERE country = ?", (country,)) — so the database treats them strictly
as data, never as code. (Note the one-element tuple (country,) needs the comma.)
29

Version of 15 September 2026 Module page
You may have seen the notorious '; DROP TABLE customers; -- payload. It does not work
through sqlite3 here: cursor.execute runs a single statement and refuses a second, so the
injected DROP is rejected outright. But injection needs no second statement — the one-line OR
'1'='1' above already does the damage — so parameterise regardless of the driver.
Remark. In data work the most common shortcut is to skip the cursor entirely and let
pandas do the round-trip: pd.read_sql_query("SELECT …", conn) returns the result straight as
a DataFrame, and df.to_sql("table", conn) writes one back. Under the hood it is the same
sqlite3 connection:
import pandas as pd, sqlite3
conn = sqlite3.connect("shop.db")
df = pd.read_sql_query(
"SELECT c.country, SUM(o.amount) AS revenue "
"FROM orders o JOIN customers c ON o.customer_id = c.id "
"GROUP BY c.country ORDER BY revenue DESC",
conn,
)
conn.close()
print(df)
country revenue
0 France 2150
1 Brazil 1630
2 Spain 240
Exercises
7.1. From Python, connect to shop.db with sqlite3, run a parameterised query with a ?
placeholder that lists orders above a chosen amount, and print the rows.
7.2. Explain, with the injection example above, why the parameterised form is safer than building
the SQL string with an f-string.
7.3. Load the per-country revenue query into a DataFrame with pd.read_sql_query, and confirm
the numbers match the pure-SQL result from Chapter 3.
Answers. (1) cur.execute("SELECT id, amount FROM orders WHERE amount > ?", (400,)) then
print(cur.fetchall()). (2) A parameter is passed to the database as data: the string x' OR '1'='1 is matched literally
against name — no customer is called that, so nothing extra returns. An f-string instead splices it into the query text,
where the OR '1'='1' becomes part of the condition and matches every row. (3) The DataFrame shows France 2150,
Brazil 1630, Spain 240 — identical to the pure-SQL per-country revenue result in Chapter 3.
30
