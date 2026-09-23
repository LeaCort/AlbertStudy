# 6. Reshaping: Wide and Long

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 24-25*

Version of 13 September 2026 Module page
6. Reshaping: Wide and Long
The same data can be laid out in two ways, and many tasks are easy in one layout and awkward in
the other. Being able to switch between them is a quietly powerful skill.
Definition 10 (Wide and long format). In wide format, each variable has its own column
and each entity is one row (a spreadsheet-style table). In long format, there is one row per
observation, with one column naming the variable and another holding its value. The same
facts, arranged differently.
Example — The same revenue, two shapes. Wide — one column per quarter, easy for a person
to read across:
region Q1 Q2
North 1200 1300
South 1500 1400
Long — one row per (region, quarter) observation, easy for a computer to group and plot:
region quarter revenue
North Q1 1200
South Q1 1500
North Q2 1300
South Q2 1400
Both hold the same information. The wide form is better for reading and for a report; the long form
is what groupby, merging, and most plotting libraries expect. You will move between them often.
Definition 11 (pivot and melt).
• pivot turns long into wide: it spreads the values of one column out into new columns.
• melt turns wide into long: it gathers a set of columns into two, one naming the old column
and one holding its value.
Example — Reshaping the table, and back again. Build the wide table in code, then reshape it.
melt gathers the two quarter columns into a single quarter column paired with a revenue column:
wide = pd.DataFrame({
"region": ["North", "South"],
"Q1": [1200, 1500],
"Q2": [1300, 1400],
})
long = wide.melt(id_vars="region", var_name="quarter", value_name="revenue")
24

Version of 13 September 2026 Module page
region quarter revenue
0 North Q1 1200
1 South Q1 1500
2 North Q2 1300
3 South Q2 1400
id_vars="region" names the column to keep as an identifier; every other column (Q1, Q2) is
gathered. var_name and value_name name the two columns created: one holding the old column
name, one holding its value.
pivot is the inverse. It spreads the quarter values back out into columns:
back = long.pivot(index="region", columns="quarter", values="revenue").reset_index()
quarter region Q1 Q2
0 North 1200 1300
1 South 1500 1400
back is the original wide table again — pivot and melt undo each other. pivot makes the index
column (region) the row index, so reset_index turns it back into an ordinary column.
wide long
region Q1 Q2 region quarter revenue
melt
North 1200 1300 North Q1 1200
South 1500 1400 South Q1 1500
pivot
North Q2 1300
South Q2 1400
Figure 5: melt gathers the wide quarter columns into a single quarter column with a paired revenue
value; pivot spreads them back out. The information is unchanged; only its shape is.
Pitfall. pivot fails if a single (index, columns) pair appears more than once, because it does not
know which value to keep, and it raises an error. When duplicates are expected (several sales on
the same quarter in the same region), use pivot_table instead, which aggregates the collisions
(for example, sums them). Reach for pivot only when each combination is unique.
Exercises
6.1. Build the small wide table of revenue by region and quarter shown in this chapter. Reshape
it to long with melt, then back to wide with pivot, and confirm you recover the original. State
one task that is easier in each layout.
Answers. (1) long = wide.melt(id_vars="region", var_name="quarter", value_name="revenue"); back =
long.pivot(index="region", columns="quarter", values="revenue").reset_index(). back matches the original
wide table. Reading one region’s two quarters side by side is easier in wide format; grouping or plotting revenue by
quarter is easier in long format.
25
