# 2. Selection and Filtering

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 11-14*

Version of 13 September 2026 Module page
2. Selection and Filtering
Loading gives you the whole table; analysis almost always needs only a part of it: some columns,
some rows, or the rows that meet a condition. Pandas keeps these three jobs separate, and the most
common beginner confusion comes from mixing up the tools, so we keep them clearly apart.


## 2.1. Selecting columns


A single column comes out as a Series; a list of columns comes out as a smaller DataFrame:
df["revenue"] # one column -> Series
df[["region", "revenue"]] # several columns -> DataFrame
Pitfall. The double brackets are not a typo. df["revenue"] (single brackets) returns a Series;
df[["revenue"]] (a one-element list of names) returns a one-column DataFrame. They print
almost the same but behave differently afterwards, because a Series and a DataFrame support
different methods. When you mean “a table of these columns”, use a list, even if it has only one
element.


## 2.2. Selecting rows: loc and iloc


To pick rows, pandas gives you two tools that look alike but mean opposite things. Getting them
straight now will save you time later.
Definition 5 (loc and iloc).
• df.loc[rows, cols] selects by label: the index labels and the column names.
• df.iloc[rows, cols] selects by integer position: the row and column numbers, counting
from 0, whatever the labels are.
Each takes a row selector and an optional column selector, separated by a comma.
When the index is the default 0, 1, 2, …, the label and the position of a row are the same number,
so loc and iloc seem interchangeable. They stop being interchangeable the moment the labels are
not those positions. You change the labels with set_index:
df2 = df.set_index("shop") # the shop names become the row labels
Example — The same value, reached two ways. In df2, the row labels are now shop names,
and revenue is the third data column (position 2, counting from 0).
df2.loc["Cedar", "revenue"] # by label -> 1500
df2.iloc[2, 2] # by position -> 1500
11

Version of 13 September 2026 Module page
Both give 1500 only because Cedar happens to sit in row position 2. Now sort the table by revenue,
which reorders the rows:
df3 = df2.sort_values("revenue")
df3.loc["Cedar", "revenue"] # still 1500 — loc follows the label
df3.iloc[2, 2] # now 540 — iloc follows the position
loc["Cedar"] still finds Cedar, because Cedar’s label did not change. iloc[2] now finds whichever
shop moved into position 2. Use loc when you know the label, and iloc when you know the
position.
pos 0 pos 1 pos 2 pos 3 pos 4 pos 5
shop region category revenue orders rating
pos 0 0 Aster North Books 1200 150 4.5
pos 1 1 Birch North Toys 900 120 4.1
pos 2 2 Cedar South Books 1500 210 4.7
loc[1, "revenue"] and iloc[1, 3]
both name the shaded cell: 900
Figure 2: loc addresses by label — row label 1 and column name revenue; iloc addresses by 0-based
position — the violet “pos” guides, row 1 and column 3. With the default index the label equals the
position on each axis, so loc[1, "revenue"] and iloc[1, 3] name the very same shaded cell: Birch’s
revenue, 900.
Both loc and iloc take slices, exactly as a Python list does, and a slice is how you pull out a whole
range of rows or columns in one step instead of naming each. Give a slice on each side of the comma:
one for the rows, one for the columns.
Example — Slicing a block of rows and columns. Take the block of rows 2 through 4 and,
within them, the columns from shop to category:
df.loc[2:4, "shop":"category"]
shop region category
2 Cedar South Books
3 Dahlia South Food
4 Elm East Toys
Both selectors are slices. 2:4 picks the rows; "shop":"category" picks every column from shop up
to category. A bare : means “keep all” on that side, so df.loc[2:4, :] is those three rows with
every column, and df.iloc[:, 0:3] is every row with the first three columns. The position form
is the same idea with numbers: df.iloc[2:5, 0:3] reaches the very same block.
Pitfall. With loc, a slice includes its right end: df.loc[0:5] returns the rows labelled 0 through
5, which is six rows. With iloc, as everywhere else in Python, a slice excludes it: df.iloc[0:5]
12

Version of 13 September 2026 Module page
returns positions 0 through 4, which is five rows. This difference of one row is a very common
pandas bug. The rule to remember: labels are inclusive, positions are exclusive.


## 2.3. Filtering with boolean indexing


The most useful kind of selection is by condition: keep the rows where something is true. It works
in two steps, and seeing them one at a time makes it clear.
Example — A condition is itself a column. Write a comparison on a column, and pandas checks
it for every row. The result is a boolean Series: a column of True and False values.
df["rating"] > 4.3
0 True
1 False
2 True
Name: rating, dtype: bool
Hand that boolean Series back to the DataFrame in brackets, and pandas keeps only the rows
marked True:
df[df["rating"] > 4.3] # only the shops rated above 4.3
So filtering is not a special command. It is computing a column of True/False values and using it
as a mask. Once you see it this way, combining conditions is straightforward.
Definition 6 (Combining conditions). Join boolean Series with & (and), | (or), and ~ (not).
Each condition must be wrapped in its own parentheses:
df[(df["rating"] > 4.3) & (df["region"] == "North")]
Pitfall. Two traps hide in that one line. First, you must use & and |, not the Python keywords
and and or. The keywords work on single True/False values, not on whole columns, and raise
an error here. Second, & and | bind more tightly than > and ==, so without the inner parentheses
the expression df["rating"] > 4.3 & df["region"] == "North" is grouped wrongly and fails.
Always put parentheses around each comparison.
Exercises
2.1. Select the revenue column as a Series, and then select revenue as a one-column DataFrame.
Explain the difference between the two results.
13

Version of 13 September 2026 Module page
2.2. Set shop as the index with set_index. Retrieve Cedar’s revenue with loc, and the value in row
position 2, column position 2 with iloc. Then sort the table by revenue and show that iloc[2,
2] now returns a different value while the loc lookup does not.
2.3. Using a single loc call with a slice on each side of the comma, select the block of rows 2
through 5 and the columns from shop to revenue. Say how many rows it returns, and explain
why a slice of row labels behaves differently at its right end from a slice of row positions.
2.4. Select all rows where revenue is above its own mean and region equals "North", using a
single boolean expression with correct parentheses.
Answers. (1) df["revenue"] is a Series (one-dimensional, no column header). df[["revenue"]] is a DataFrame with
one column. They print almost the same, but only the DataFrame supports DataFrame methods; a Series and a
DataFrame are different types.
(2) df2 = df.set_index("shop"); df2.loc["Cedar", "revenue"] is 1500, and df2.iloc[2, 2] is also 1500 because
Cedar is in position 2. After df3 = df2.sort_values("revenue"), df3.iloc[2, 2] is 540 (Maple, now in position 2),
while df3.loc["Cedar", "revenue"] is still 1500. loc follows the label; iloc follows the position.
(3) df.loc[2:5, "shop":"revenue"] returns four rows (labels 2, 3, 4, 5), because a loc label slice includes its right
end. The position equivalent df.iloc[2:6, 0:4] excludes its right end, so it needs 6 (not 5) to reach the same four
rows. Labels are inclusive; positions are exclusive.
(4) df[(df["revenue"] > df["revenue"].mean()) & (df["region"] == "North")]. The mean revenue is about 1031,
so this keeps the two North shops above it, Aster (1200) and Pine (1600), and drops Birch (900) and Iris (480).
14
