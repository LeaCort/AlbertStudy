# 4. Sorting and Filtering

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 15-16*

Version of 13 September 2026 Module page
4. Sorting and Filtering


## 4.1. Making a pattern visible


A thousand rows hide their patterns from the eye. Two operations — sorting and filtering —
rearrange or hide rows until the pattern, or the anomaly, stands out. Neither computes anything new;
they only change what you see, which is exactly the point of looking before touching.
Definition 10 (Sorting and filtering). Sorting reorders the rows by the values in one or
more columns (smallest to largest, A to Z, oldest to newest, or the reverse). Filtering hides the
rows that fail a stated condition, leaving the rest in view; the hidden rows are not deleted, only
concealed, and clearing the filter brings them back.
Method 5 (Sort and filter a table).
1. Click any cell inside the table.
2. Sort: open Data → Sort (Excel, Calc) or Data → Sort range (Sheets), choose the column
and the direction. Always let it sort the whole table, so each row stays together.
3. Filter: turn on the filter control — Data → Filter (Excel, Calc) or Data → Create a filter
(Sheets). A small arrow appears on each header; click it to keep only the values or the range
you want. Click it again to clear.
Example — The same table, two questions. Take the café’s six months of sales.
• Sort by total revenue, largest first: the biggest sales jump to the top, and an impossible value —
a typo like 99999 — would surface at the very top where you cannot miss it.
• Filter to Product = Tea: only tea sales remain, isolating “how is tea doing?” from the noise of
everything else.
Each operation answered a different question without changing a single value.
Pitfall. When you sort, sort the whole table, never a single column on its own. Sorting one
column while its neighbours stay put scrambles every row — prices end up beside the wrong
products — and, like the text-number trap, it leaves a sheet that looks tidy while being silently
corrupted. If your spreadsheet warns that it found data “next to” your selection and offers to
expand the selection, accept. If in doubt, check that one familiar row still holds together after
the sort.
Remark (What about grouping?). A third question — “what is the total for each product, or
each month?” — asks you to group rows that share a value and summarise each group. A plain
spreadsheet has no one-click “group and total” button beside Sort and Filter. For a single group
you can filter to it and read a SUM or AVERAGE of what is left; for grouping by every value of one or
two columns at once, the right tool is the pivot table, which the next chapter is entirely about.
15

Version of 13 September 2026 Module page
Exercises
4.1. Sort your dataset by a numeric column, largest first, and describe the single most interesting
row at the top. Then deliberately insert one impossible value and confirm that sorting brings it
to where you cannot miss it.
4.2. Turn on the filter control and filter to one category. State the question your filtered view
answers, then clear the filter and confirm every hidden row returns.
4.3. Sort a single column without expanding to the whole table (make a copy of your data first).
Describe precisely how the rows are now corrupted, and how the alignment or a familiar row
reveals it.
Answers. (1) The largest-first sort puts the extreme rows on top; an inserted 99999 rises to the very top, which is exactly
why sorting is a fast anomaly check. (2) A filter to one product answers “how is this product doing?”; clearing it
restores all rows because filtering only hides, never deletes. (3) Sorting one column alone leaves the other columns in
their old order, so each row now pairs the wrong values — a familiar record no longer holds together, which is the tell.
16
