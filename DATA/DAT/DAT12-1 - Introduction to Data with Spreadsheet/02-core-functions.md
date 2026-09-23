# 2. Core Functions

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 8-11*

Version of 13 September 2026 Module page
2. Core Functions


## 2.1. A formula is a question asked of the data


A formula begins with = and computes a result from values or, more usefully, from cell references.
Typing =C2*D2 beside our sales table multiplies units (column C) by price (column D) to give a line
total. Because it refers to cells rather than to the numbers themselves, correcting a value in C2 updates
the total on its own — this is exactly the formula shown in the formula bar of Figure 1.
Method 2 (Type a formula).
1. Click the cell where the answer should appear.
2. Type =, then the expression — you may click a cell instead of typing its address, and the
spreadsheet inserts it for you (=C2*D2).
3. Press Enter. The cell shows the result; the formula bar keeps the formula.
This chapter is not about memorising functions. It is about knowing which function a given question
calls for. We meet five, each the right tool for a different shape of question.


## 2.2. Copying a formula: relative and absolute references


You rarely write a formula once. Having computed a total for one row, you want it for every row. You
do not retype it — you copy it down.
Method 3 (Fill a formula down a column).
1. Select the cell holding the formula.
2. Grab the small square at its bottom-right corner — the fill handle — and drag it down over
the rows you want; or copy the cell (Ctrl/Cmd + C) and paste into the range below.
E
2 =C2*D2
fill handle
3 =C3*D3
drag down:
4 =C4*D4
references shift
5 =C5*D5
Figure 4: The fill handle — the small square at the selected cell’s bottom-right corner. Dragging it
down copies =C2*D2 into the rows beneath, and each copy’s relative references shift with it: =C3*D3,
=C4*D4, and so on.
When a formula is filled down, its cell references move with it (Figure 4). In row 2, =C2*D2; filled
into row 3 it becomes =C3*D3, and so on. This automatic shifting is called a relative reference, and
it is usually exactly what you want. But sometimes a formula must always point to one fixed cell —
a single tax rate, a currency conversion, a target. For that you must stop the reference from moving.
8

Version of 13 September 2026 Module page
Definition 4 (Relative and absolute references). A relative reference like B2 shifts when
the formula is copied, so each copy points to its own row or column. An absolute reference
freezes an address with the $ sign: $B$2 never moves, B$2 freezes only the row, $B2 freezes only
the column. Freeze exactly the part that must stay fixed as the formula is copied.
Example — One rate, applied to every row. A tax rate sits in cell G1. In a new column, F2, you
write =E2*$G$1 to tax the first line total (the totals are in column E). Fill it down: E2 becomes E3,
E4, … (each row’s own total), while $G$1 stays put, so every row is taxed by the one rate in G1. Had
you written =E2*G1, filling down would slide the rate reference to G2, G3, … — empty cells — and
every total below the first would silently read zero. The $ is what keeps the fixed cell fixed.
Pitfall. The commonest fill-down bug is forgetting the $ on a value that should stay fixed. The
first row looks right, so the error hides; the rows below quietly use the wrong (or empty) cell.
After filling a formula down, click a cell far down the column and read its formula: check that
the references that should have moved did, and the one that should not have moved did not.


## 2.3. Summarising a column: SUM and AVERAGE


Some questions are about a whole column at once — the café’s 724 line totals in column E, taken
together. Two of the commonest each have a one-word function.
Example — Total and typical revenue. With line totals in column E, =SUM(E2:E725) answers
“how much did we take in altogether?” and =AVERAGE(E2:E725) answers “what was a typical sale
worth?”. Over the café’s six months of sales that is a total of ¤50,366.60 across 724 rows, an average
of ¤69.57 per row. The two questions differ, and so do the functions: reporting the sum when
someone asked for the average — or the reverse — is a wrong answer even though every number
in it is correct.
The two functions, in general:
Definition 5 (SUM and AVERAGE). SUM(range) adds the numbers in a range of cells.
AVERAGE(range) returns their arithmetic mean — the sum divided by how many numbers there
are. A range like E2:E100 names every cell from E2 down to E100.
Pitfall. AVERAGE ignores genuinely empty cells but treats a cell containing 0 as a real value.
Given the numbers 10, 0, blank, 20, a real spreadsheet returns AVERAGE = 10 (the 0 is counted,
the blank is not). Had that 0 truly meant “no data” and been left blank, the average would have
been 15 instead. So which blanks were recorded as 0 is not a detail — it changes the answer.
This is the first place the data-quality habits of Chapter 5 reach back and move a result.
9

Version of 13 September 2026 Module page


## 2.4. Branching on a condition: IF


Sometimes a column should record a decision rather than a calculation — a label that depends on
the value beside it.
Example — Flagging sales that need attention. A manager wants every sale whose revenue
(column E) tops ¤120.00 marked for review. In a new column, =IF(E2>120, "review", "") writes
“review” beside the big sales and leaves the rest blank. Filled down the whole sheet, it flags 112 of
the 724 rows. The condition encodes the business rule; the two outcomes encode what to do about
it. IF is how a human decision becomes a column.
The general form:
Definition 6 (IF). IF(condition, value-if-true, value-if-false) checks a condition and
returns the first value when it holds, the second when it does not. For example =IF(E2>100,
"large", "small") labels each sale.


## 2.5. Counting what matches: COUNTIF


A last question shifts from “how much” to “how many” — how many rows are coffee, how many
sales beat a threshold.
Example — How many, not how much. =COUNTIF(B2:B725, "Coffee") counts how many
rows are coffee sales — here 181 of them — while =COUNTIF(E2:E725, ">120") counts how many
rows exceed ¤120.00: 112. Note the difference from SUM: COUNTIF answers “how many rows?”, SUM
answers “how much in total?”. Confusing a count with a sum is a classic error — “we had 112 big
days” is a very different statement from “big days were worth 112.”
In general:
Definition 7 (COUNTIF). COUNTIF(range, criterion) counts how many cells in a range meet
a criterion. The criterion can be a value ("Coffee") or a comparison written in quotes (">100").
Pitfall (Function syntax depends on your region). This book separates a function’s argu-
ments with commas: SUM(E2:E725), IF(E2>100, "review", ""). In many countries’ spreadsheet
settings the separator is a semicolon instead — IF(E2>100; "review"; "") — and the decimal
mark may be a comma. If a formula copied from this book gives an error, swap the commas
between arguments for semicolons. The function names and logic are the same everywhere; only
the punctuation follows your regional settings.
Exercises
2.1. Add a “Total” column to your dataset with =units*price in the first row, then fill it down.
Click a cell near the bottom and confirm from the formula bar that both references moved with
the row.
10

Version of 13 September 2026 Module page
2.2. Put a single tax rate in one cell. In a new column, compute the taxed total for every row using
an absolute reference to that rate cell. Then remove the $ signs, fill down again, and describe
exactly what goes wrong and why.
2.3. Using SUM, AVERAGE, IF, and COUNTIF, answer four questions about your dataset: a total, a
typical value, a per-row flag, and a count of rows meeting a condition. For each, write one
sentence explaining why that function — and not a similar one — is the right choice.
Answers. (1) Filled down, =C2*D2 becomes =C3*D3, =C4*D4, …; each row multiplies its own units and price. (2) With
=E2*$G$1 every row uses the one rate; drop the $ and filling turns it into E3*G2, E4*G3, … — the rate reference slides
onto empty cells, so every row after the first reads zero. (3) SUM gives a total, AVERAGE a typical value, IF a per-row label,
COUNTIF a count; a count and a total are different questions and swapping them gives a correct-looking but wrong
answer.
11
