# 6. Database types: relational, warehouse, flat file

*Source: DAT22-5 - SQL & Data Querying - Textbook.pdf, pages 27-28*

Version of 15 September 2026 Module page
6. Database types: relational, warehouse,
flat file


## 6.1. Different jobs, different stores


A relational database is not the only place to keep data, nor always the right one. This chapter is about
telling three kinds apart and saying when each fits. The deciding factor is the workload: many small
reads and writes, or large read-mostly analytical scans, or simple portable storage. Three everyday
scenarios show the split:
Example — Matching store to scenario.
• A web shop recording each order the instant a customer checks out → relational database
(frequent single-row writes, integrity constraints).
• The analytics team computing five years of sales trends every morning → data warehouse
(massive aggregation, read-mostly).
• A 200-row lookup table you send to a colleague → flat file (CSV; no engine needed).
Each scenario points at a different kind of store. Named precisely:
Definition 8 (Three kinds of data store).
• A relational database (OLTP — online transaction processing) stores data in related tables
and is tuned for many fast reads and writes of individual rows: an app recording orders as
they happen. Examples: PostgreSQL, MySQL, SQLite.
• A data warehouse (OLAP — online analytical processing) stores large volumes of historical
data tuned for queries that scan and aggregate across millions of rows: “total revenue per
region per quarter for five years”. Examples: BigQuery, Snowflake, Redshift.
• A flat file store keeps data in plain files (CSV, JSON, Parquet) with no query engine of its
own. Simple, portable, and ideal for small datasets, exchange between tools, or one-off storage.
Relational DB Data warehouse Flat file
• many small read/writes • huge analytical scans • no query engine
• rows, transactions • aggregate across history • simple & portable
• operational app data • reporting & BI • small data, exchange
• e.g. PostgreSQL, SQLite • e.g. BigQuery, Snowflake • e.g. CSV, JSON, Parquet
Figure 5: Choosing a store by workload: a relational database for live transactional row-level read/
writes, a data warehouse for large-scale analytical aggregation over history, a flat file for small,
portable, or one-off data.
Remark. The lines blur in practice — SQLite is a relational database that lives in a single file,
and modern warehouses speak SQL just like relational databases do. The point is not rigid tax-
onomy but matching the tool to the workload: row-level transactions, large-scale analytics,
or simple portable storage.
27

Version of 15 September 2026 Module page
Exercises
6.1. For three scenarios of your own, state whether a relational database, a data warehouse, or a
flat file store is the right choice, and justify each by the workload it implies.
6.2. The shop’s live checkout runs on a relational database, yet the finance team copies its data
nightly into a warehouse to run reports. Explain, in workload terms, why one store is not made
to do both jobs.
Answers. (1) Any defensible mapping, e.g.: a banking app’s transactions → relational (many small integrity-critical
writes); a decade of sensor readings analysed monthly → warehouse (huge read-mostly scans); a config table shared
over email → flat file (tiny, portable). (2) The checkout does many tiny row-level writes that a relational database is
tuned for; the reports scan and aggregate millions of historical rows, which would bog down the live system — so the
analytical workload is moved to a warehouse built for it.
28
