# 1. The Spreadsheet Environment

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 5-7*

Version of 13 September 2026 Module page
1. The Spreadsheet Environment


## 1.1. A grid that means something


Open any spreadsheet and you see a grid: columns labelled with letters (A, B, C, …) and rows
numbered (1, 2, 3, …). Each rectangle is a cell, named by its column then its row — B4 is the cell in
column B, row 4. This naming is the whole reason spreadsheets work: every value has an address, so
every formula can point to it.
Two parts of the interface do the naming and are worth finding right now, because the rest of the
course uses them constantly:
Definition 1 (Name Box and formula bar). The Name Box sits at the top-left and shows the
address of the cell you have selected (for example D2). The formula bar, just to its right, shows
what that cell really contains — a typed value, or the formula behind a displayed result. The
cell shows the answer; the formula bar shows how the answer was made.
Name Box formula bar — shows the stored formula
E2 =C2*D2
A B C D E
1 Date Product Units Price Total
2 2026-01-01 Coffee 56 3.50 196.00
3 2026-01-01 Tea 25 2.80 70.00
selected cell E2: shows the value 196.00, while the formula bar shows the formula
Figure 1: The environment. The selected cell E2 displays its computed value (196.00), while the
formula bar reveals that the value comes from the formula =C2*D2 (units times price). The Name Box
confirms which cell is selected. Column letters and row numbers give every cell its address.


## 1.2. Entering and editing data


You put a value into a cell by clicking it and typing. Press Enter to confirm and move down; press Tab
to confirm and move right; press Escape to cancel. To change a cell later, double-click it (or select it
and press F2) to edit in place, or simply retype to replace it.
Method 1 (Enter and format a value correctly).
1. Click the target cell; type the value; press Enter.
2. Type a number as plain digits (1200), with no spaces and no currency symbol inside the cell.
3. Type a date in a form the spreadsheet recognises (2026-01-04); it should align to the right,
showing it was understood as a real date.
4. To change only how a value looks — decimals, a currency symbol, a date style — select the
cell and open the number-format control (in Excel and Calc: the Home / Format → Cells
menu; in Google Sheets: Format → Number). Formatting changes the display, never the
stored value (Figure 2).
5

Version of 13 September 2026 Module page


## 1.3. What the cell really holds: type versus formatting


Click a cell and the spreadsheet must silently decide what kind of thing it holds — and that decision,
not how the cell looks, governs whether later formulas work. Meet the trap first, then name it.
Example — The number that will not add up. You type 1 200 into one cell (with a space, the
way you might write it by hand) and 1200 into another. On screen they look almost the same. But
the space makes the first one text, while 1200 is a number. Ask for their sum and — tested in a
real spreadsheet — you get 1200, not 2400: the text cell is silently treated as absent. Nothing turned
red, nothing warned you. The total is simply wrong, and looks fine.
That invisible decision — the cell’s type — is the single most common beginner bug in spreadsheet
work, so we name it precisely.
Definition 2 (Type versus formatting). A cell’s type is how the spreadsheet interprets its
content: a number, a date, or text. Formatting controls only how that content is displayed
(decimal places, a currency symbol, a date style); it never changes the stored value. Two cells can
look identical on screen and still be of different types.
Number format → what shows
General 3.5
stored value
Number, 2 decimals 3.50
3.5
one value, four display C s urrency ¤3.50
Percent 350%
Figure 2: Formatting changes only what a cell shows, never what it stores. The single stored number
3.5 can display as 3.5, 3.50, ¤3.50, or 350% depending on its number format — and a later SUM still
adds the same 3.5 in every case.
Pitfall. A number stored as text is skipped by SUM and AVERAGE, and a date stored as text will not
sort by time — "10/01" sorts before "9/01" because text is compared character by character, not
as dates. There is a reliable tell: numbers and dates align to the right of a cell by default, plain
text to the left. A column of “numbers” that hugs the left edge is a column of text in disguise.
A B C
1 Product Units Price
2 Coffee 12 3.50
3 Tea 7 2.80
4 Cocoa 9 4.00
left-aligned → stored as text, ignored by SUM
Figure 3: Numbers align right by default. The 9 in the Units column is left-aligned, betraying that it
was stored as text; SUM and AVERAGE will quietly skip it.


## 1.4. Laying the table out so everything else works


Almost every operation in this course assumes one quiet convention.
6

Version of 13 September 2026 Module page
Definition 3 (Tidy tabular layout). Data is laid out as a table in which each column is one
variable (one kind of thing measured), each row is one record (one observation), and the first
row holds column headers naming the variables. One cell holds one value.
Example — Reading a small sales table. A café records its sales. Here are the first rows exactly
as the sheet holds them:
Date Product Units Price (¤) Total (¤)
2026-01-01 Coffee 56 3.50 196.00
2026-01-01 Tea 25 2.80 70.00
2026-01-01 Cocoa 21 4.00 84.00
2026-01-01 Juice 7 1.50 10.50
Each column is one variable (a date, a product, a count, a price, a total); each row is one sale.
Because the layout is regular you can read it before computing: coffee sells more units than tea,
and at a higher price. That reading — done by eye, before any formula — is the reflex this course
is built around.
Exercises
1.1. Enter a small dataset of at least ten rows — say a few days of sales with date, product, units,
and price. Make sure numbers are stored as numbers (right-aligned) and dates as dates. Then
apply formatting so prices show two decimals and a currency symbol, without changing the
stored values.
1.2. Deliberately type one number with a space inside it (like 1 200) so it is stored as text. Find
it using the left/right alignment tell, then correct it so it becomes a real number. Confirm the fix
by checking that the column now sums correctly.
1.3. Select any cell that holds a formula’s result and read the formula bar. Write down, in your
own words, the difference between what the cell shows and what the formula bar shows.
Answers. (1) Correctly entered numbers align right; formatting to two decimals and a currency symbol leaves the
underlying number unchanged — a later SUM still works. (2) The text value aligns left and is skipped by SUM; retyping
it without the space (or using the spreadsheet’s “convert to number” helper) turns it into a real, right-aligned number
and the column total rises by that value. (3) The cell shows the value; the formula bar shows the formula or raw
content that produced it.
7
