# 6. Pivot Tables

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 19-20*

Version of 13 September 2026 Module page
6. Pivot Tables


## 6.1. Grouping, made interactive


Summarising one group by hand is fine once. But business questions multiply — revenue by month,
then by month and product, then the average rather than the total — and redoing the summary each
time is slow and error-prone. A pivot table is a machine for grouping that you steer by dragging
fields.
Definition 12 (Pivot table). A pivot table summarises a source table by grouping rows
according to one or more fields and computing an aggregate (count, sum, average, …) of another
field for each group. The chosen row field and column field become the edges of the result;
each body cell holds the aggregate for that combination.
Method 7 (Build a pivot table).
1. Click any cell in the source table. Open Insert → PivotTable (Excel), Insert → Pivot table
(Sheets), or Insert → Pivot Table (Calc).
2. A layout panel appears (Figure 7) with four areas — Rows, Columns, Values, and Filters
— and a list of your field names.
3. Drag a field into Rows (here Product), another into Columns (here the month), and the
field to summarise into Values (here Revenue).
4. In the Values area, set the aggregate to Sum (click the field to change it to Average, Count,
and so on).
Field list
Date Filters Columns
Month
Product
drag
Month Rows Values
Units Product Sum of Revenue
Price
Revenue
Figure 7: The pivot layout panel: a list of the source table’s fields on the left, and four drop areas on
the right. You drag a field into an area — Product into Rows, Month into Columns, Revenue into
Values (set to Sum) — and the pivot in Figure 8 is the result.
column field: month
Σ Revenue (¤) Jan Feb Mar Apr May Jun
Coffee 6,062 4,984 4,928 3,899 3,273 2,363
Tea 2,699 2,246 2,022 1,669 1,509 1,019
row field:
product Cocoa 2,552 1,996 1,944 1,552 1,308 1,004
Juice 305 362 527 617 711 819
Figure 8: A pivot table with product as the row field, month as the column field, and summed revenue
in the body. Each body cell answers “how much revenue, for this product, in this month?” — one
grouping, read many ways. The highlighted cell is January coffee.
19

Version of 13 September 2026 Module page
Example — From pivot cell to business sentence. The pivot in Figure 8 shows Coffee in
January at ¤6,062.00. Building the table is mechanical; the value is in the reading. “Coffee earned
¤6,062.00 in January, more than twice tea’s ¤2,699.20 (2.25 times as much) — coffee carries our
winter revenue” is a sentence a manager can act on. Reading across a coffee’s row shows its months
falling from ¤6,062.00 toward summer, the seasonal decline of a hot drink. A pivot table that is
built but not interpreted is just a smaller spreadsheet.
Pitfall. A pivot table inherits every flaw of its source. If Coffee and coffee (with a trailing
space) both appear, the pivot lists them as two products and splits the revenue between them
— a wrong answer produced by a correct machine. Clean the data (Chapter 5) before you trust
a pivot.
Exercises
6.1. Build a pivot table from your data with one row field, one column field, and summed
revenue. Write one business sentence interpreting the single most striking cell.
6.2. Change the aggregate from sum to average and explain how the business reading of the same
table changes — what question does each version answer?
6.3. Introduce one inconsistently-spelled category value into your source (for example a trailing
space), rebuild the pivot, and describe exactly how the result becomes wrong and how you would
spot it.
Answers. (1) Each body cell is the total for one row-by-column combination; the most striking cell is usually the largest
or an unexpected one — as coffee in January (¤6,062.00) dominates our table. (2) Sum answers “how much in total?”;
average answers “how much per sale?” — a group can have a large total from many small sales yet a low average,
so the two rankings can differ. (3) A trailing-space value becomes a separate group, splitting one product’s revenue
across two rows; you spot it because a familiar total is suddenly split or lower than expected.
20
