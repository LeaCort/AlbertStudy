# 8. The End-to-End Pipeline

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 28-29*

Version of 13 September 2026 Module page
8. The End-to-End Pipeline
Every technique so far is a single move; real work chains them together, from a raw file to a clean,
summarised result. This chapter puts the whole path in one script.
Definition 12 (The four stages).
1. Load the raw file into a DataFrame.
2. Inspect it — shape, types, missing values — to learn what you are dealing with.
3. Clean it — handle missing values and clear errors, recording each decision.
4. Summarise it — group and aggregate into the table that answers the question.
Example — Raw shops file to per-region summary.
import pandas as pd
# 1. Load
df = pd.read_csv("shops.csv")
# 2. Inspect
print(df.shape) # how big?
print(df.info()) # types, and where values are missing
print(df.describe()) # spread; check min and max for errors
# 3. Clean
df["region"] = df["region"].fillna("Unknown") # keep the shop, flag the gap
df = df[df["revenue"] >= 0] # drop the impossible negative
revenue
# 4. Summarise
summary = (
df.groupby("region")["revenue"]
.agg(["sum", "mean", "count"])
.reset_index()
.sort_values("sum", ascending=False)
)
print(summary)
The result:
region sum mean count
1 North 4180 1045.000000 4
4 West 3570 1190.000000 3
2 South 3400 1133.333333 3
0 East 2800 1400.000000 2
3 Unknown 540 540.000000 1
Read the cleaning block as a set of decisions you can defend, not as mechanical steps: the shop
with no region is kept but flagged as "Unknown", so it still counts toward the total; the row with
negative revenue is removed because a negative revenue is impossible. (Notice that removing it
changed the East group from 3 shops to 2, and raised its total to 2800.) Each line is a judgement
28

Version of 13 September 2026 Module page
you could explain to someone who doubts it, which is exactly the standard the reporting chapter
(Chapter 10) holds you to.
Remark. Notice the parentheses around the summary block. Wrapping a chain of calls in ( … )
lets you put each step (.groupby, .agg, .reset_index, .sort_values) on its own line. The chain
then reads top to bottom like a recipe, and you can comment out any single step. This is easier
to read than one long line or a pile of intermediate variables.
Pitfall. Order matters in a pipeline. If you groupby("region") before filling the missing
region, that shop vanishes from the totals (recall that groupby drops NaN keys); if you compute a
mean before removing the impossible value, the −50 pulls it down. Inspect first, clean second,
summarise last, and within cleaning, fix the errors that would distort a later step before you take
that step.
Exercises
8.1. Write a complete pipeline on shops.csv: load the file, inspect it (shape, types, missing
values), clean it (recording each decision as a comment), and summarise revenue by region with
a grouped aggregation. Keep the load → inspect → clean → summarise order.
Answers. (1) The pipeline in this chapter is a model answer: load with read_csv; inspect with shape, info, and
describe; clean by filling the missing region with "Unknown" and dropping the row whose revenue is negative; then
groupby("region")["revenue"].agg(["sum", "mean", "count"]). Order matters: filling the region before grouping
keeps that shop in the totals, and dropping the −50 row before averaging keeps it out of the East mean.
29
