# 5. Merging and Concatenating

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 20-23*

Version of 13 September 2026 Module page
5. Merging and Concatenating
Data rarely arrives in one file. Shops sit in one table, the manager of each region in another; this year’s
sales sit beside last year’s. Combining tables comes in two kinds, and confusing them is a classic
error, so let us name the difference up front. Concatenation stacks tables that have the same shape.
Merging joins tables that share a key.


## 5.1. Concatenation: stacking like with like


Concatenation glues whole tables together. It goes in one of two directions: stack rows (set one table’s
rows under another’s) or stack columns (set one table’s columns beside another’s).
pd.concat([df1, df2]) # stack rows: more observations, same columns
pd.concat([df1, df2], axis=1) # stack columns: more variables, same rows
Use concat when the pieces are the same kind of thing, such as January’s shops under February’s
shops, all with identical columns.
Example — Stacking two months of shops. Suppose January’s shops and February’s shops
arrived in two separate tables with the same columns:
jan = pd.DataFrame({"shop": ["Aster", "Birch"], "revenue": [1200, 900]})
feb = pd.DataFrame({"shop": ["Cedar", "Dahlia"], "revenue": [1500, 600]})
pd.concat([jan, feb])
concat sets the second table directly under the first, lining the columns up by name:
shop revenue
0 Aster 1200
1 Birch 900
0 Cedar 1500
1 Dahlia 600
Four rows and the same two columns — but look at the index down the left edge: 0,
1, 0, 1. Each table kept its own row labels, so they now repeat. That is exactly the trap the next
box is about.
Pitfall. When you stack rows, concat keeps each piece’s original index, so the result can carry
repeated labels (0, 1, 0, 1 in the example above). Repeated labels break a later loc lookup,
which no longer points to a single row. Pass ignore_index=True to throw the old labels away and
number the combined rows fresh from 0:
pd.concat([jan, feb], ignore_index=True) # the index becomes 0, 1, 2, 3
20

Version of 13 September 2026 Module page
Stacking columns with axis=1 sets one table’s columns beside another’s, but it lines the rows up by
index label, not by position. That surprises people, so see it once.
Example — Stacking columns lines up on the index. Two frames whose row labels do not
fully match:
a = pd.DataFrame({"shop": ["Aster", "Birch"]}, index=[0, 1])
b = pd.DataFrame({"manager": ["Ada", "Ben"]}, index=[1, 2])
pd.concat([a, b], axis=1)
shop manager
0 Aster NaN
1 Birch Ada
2 NaN Ben
Only label 1 is present in both frames, so only that row lines up (Birch with Ada). Labels 0 and 2
exist on one side alone, and pandas fills the other side with NaN. To set rows beside each other by
position — the thing people usually mean — make sure both frames carry the same index first,
for example by calling reset_index(drop=True) on each.


## 5.2. Merging: joining on a key


Example — Attaching a region's manager to each shop. A second table lists the manager of
each region:
regions = pd.DataFrame({
"region": ["North", "South", "East", "Central"],
"manager": ["Ada", "Ben", "Cira", "Dan"],
})
To put the right manager beside each shop, merge the two tables on their shared key, region:
pd.merge(df, regions, on="region", how="left")
Pandas looks up each shop’s region in the regions table and copies the matching manager across.
One key value can match many rows: every North shop receives the manager “Ada”.
The how argument decides which rows survive when a key is missing on one side. This is the
single most important and most misunderstood choice in this chapter.
Definition 9 (The four join types). Merging a left table and a right table on a key:
• inner — keep only keys present in both tables. No unmatched rows survive.
• left — keep every key of left; where right has no match, fill its columns with NaN.
• right — keep every key of right; the mirror image of left.
• outer — keep every key of either table; fill both sides’ gaps with NaN.
21

Version of 13 September 2026 Module page
L R L R L R L R
inner left right outer
Figure 4: The four joins differ only in which keys they keep. Blue marks the rows a join keeps; grey
marks the rows it drops. Inner keeps only the matched overlap; left keeps all of L (overlap included);
right keeps all of R; outer keeps everything.
Example — How the join type changes the answer. The regions table lists North, South, East,
and Central. The shops table has North, South, East, and West, and one shop with no region at all.
The four join types keep four different sets of rows, and the row count alone already shows it:
len(pd.merge(df, regions, on="region", how="inner")) # 10
len(pd.merge(df, regions, on="region", how="left")) # 14
len(pd.merge(df, regions, on="region", how="right")) # 11
len(pd.merge(df, regions, on="region", how="outer")) # 15
• inner keeps only the 10 shops whose region (North, South, or East) is also in regions. The 3
West shops and the 1 shop with a missing region are dropped, because “West” and a missing
value match nothing.
• left keeps all 14 shops and fills manager with NaN for those same 4.
• right keeps every region in regions, so it adds “Central” — which has a manager but no shops
— as one row whose shop columns are NaN. That is 11 rows: the 10 matched shops plus Central.
• outer keeps everything — all 14 shops and Central — for 15 rows.
The outer join is the one to read closely, because it is the only one that fills NaN on both sides
at once:
pd.merge(df, regions, on="region", how="outer")[["shop", "region", "manager"]]
shop region manager
0 NaN Central Dan
1 Elm East Cira
2 Fern East Cira
3 Larch East Cira
4 Aster North Ada
5 Birch North Ada
6 Iris North Ada
7 Pine North Ada
8 Cedar South Ben
9 Dahlia South Ben
10 Juniper South Ben
11 Gorse West NaN
12 Holly West NaN
13 Olive West NaN
14 Maple NaN NaN
22

Version of 13 September 2026 Module page
Read the two kinds of NaN. Central (row 0) is a key in regions with no shop, so its shop columns
are empty — that is what a right join keeps and a left join drops. The West shops and the region-
less Maple (rows 11–14) are keys in the shops table with no manager, so their manager column is
empty — that is what a left join keeps and a right join drops. An inner join would have dropped all
five of these rows; the outer join keeps them all. If your question is “total revenue by manager”, the
inner join silently ignores 4 real shops, and only a right or outer join ever shows you that Central
has no shops at all. The join type decides which rows your analysis is even aware of.
Pitfall. After a merge, always check the row count. An inner join that quietly halves your rows
means most keys did not match, which usually points to a dirty key ("FR" against "fr ", or a
number stored as text against a real number) rather than genuinely absent data. A merge that
grows the row count beyond either input means the key was not unique on one side, so rows
were multiplied. Compare len(result) against what you expected, every time.
Exercises
5.1. Merge df with the regions table from this chapter with each of the four join types (inner,
left, right, outer). Report the row count of each, and explain, in terms of unmatched keys, why
they differ. Then, in the outer result, point to one row whose manager is NaN and one whose shop
is NaN, and say what each of those two NaNs means.
5.2. Build two small DataFrames with the same columns (two shops each, say), stack them with
concat, and show that the row labels repeat. Then stack them again with ignore_index=True
and confirm the labels now run 0, 1, 2, 3.
5.3. Build two one-column DataFrames whose indices only partly overlap (for instance labels
[0, 1] and [1, 2]), stack them side by side with pd.concat([...], axis=1), and explain where
each NaN in the result comes from.
Answers. (1) inner gives 10 rows, left 14, right 11, outer 15. The inner join drops the 3 West shops and the 1 shop with a
missing region, because “West” and a missing value have no matching key in regions. The left join keeps all 14 shops
and fills manager with NaN for those 4. The right join keeps every key of regions, adding “Central” (a manager with
no shops) as one row with a NaN shop: 10 matched shops + Central =
11. The outer join keeps every key of either side: all 14 shops + Central = 15. In
the outer result, Central’s row has manager “Dan” but NaN shop (a region with no shop), while each West shop and
Maple has a shop but NaN manager (a shop whose region is not in regions).
(2) With jan and feb as in the chapter example, pd.concat([jan, feb]) has the index 0, 1, 0, 1 (each piece’s own
labels, repeated), while pd.concat([jan, feb], ignore_index=True) has the index 0, 1, 2, 3. The repeated labels
would break a later loc lookup; ignore_index=True prevents that.
(3) With a indexed [0, 1] and b indexed [1, 2], pd.concat([a, b], axis=1) has three rows, 0, 1, 2. Only label 1
is in both, so only that row is filled on both sides; row 0 is NaN in b’s column and row 2 is NaN in a’s column, because
axis=1 aligns on the index label, not on position.
23
