# 1. DataFrames and Series

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 6-10*

Version of 13 September 2026 Module page
1. DataFrames and Series


## 1.1. Two objects, one built from the other


Everything in pandas is built from two objects. Meet the smaller one first.
Definition 1 (Series). A Series is a one-dimensional array of values together with an index:
a sequence of labels, one per value. It is, in effect, a single column whose rows have names.
Definition 2 (DataFrame). A DataFrame is a two-dimensional table: a set of Series that share
one common index (the row labels) and are told apart by column names. Selecting one column
of a DataFrame gives you back a Series.
The link between the two is the key idea, so let us make it concrete. Here are the first three rows
of shops.csv:
shop region revenue
0 Aster North 1200
1 Birch North 900
2 Cedar South 1500
The whole table is a DataFrame. Its leftmost column, 0, 1, 2 in grey, is not data. It is the index, the
shared row labels. The revenue column on its own, carrying that same index, is a Series:
0 1200
1 900
2 1500
Name: revenue, dtype: int64
Read the DataFrame as three Series (shop, region, revenue) standing side by side, all lined up on the
same index. That mental picture explains every operation that follows.
index
shop region revenue
0 Aster North 1200
1 Birch North 900
2 Cedar South 1500
the revenue column, alone, is a Series
Figure 1: A DataFrame is several Series that share one index. The grey index column holds the row
labels; the highlighted revenue column, carried with that index, is itself a Series.
6

Version of 13 September 2026 Module page


## 1.2. Loading data from a file


You rarely type a table by hand; you load it from a file. Pandas gives you one reader per common
format, and each one returns a DataFrame:
df = pd.read_csv("shops.csv")
df = pd.read_excel("shops.xlsx") # needs the openpyxl package
df = pd.read_json("shops.json")
read_csv is the one you will use most, and it has many options. The two you will reach for first handle
the most common surprises:
df = pd.read_csv("shops.csv", sep=";") # some CSVs use ; instead of ,
df = pd.read_csv("shops.csv", encoding="latin-1") # if accented text looks wrong
Excel and JSON files bring one extra question each. An Excel workbook can hold several sheets, so
read_excel reads the first sheet unless you name another with sheet_name="Sales". A JSON file can
be laid out in more than one way; if read_json does not produce the table you expect, the orient
option (for example orient="records") tells pandas how the data is arranged.
Example — The same table, three ways. You already have shops.csv. To watch the Excel and
JSON readers work without hunting down other files, write that same table out to the two other
formats and read each back:
df = pd.read_csv("shops.csv")
df.to_json("shops.json", orient="records") # write a JSON copy
df.to_excel("shops.xlsx", index=False) # write an Excel copy (needs openpyxl)
pd.read_json("shops.json").shape # (14, 6)
pd.read_excel("shops.xlsx").shape # (14, 6)
All three readers return the same (14, 6) DataFrame. One difference is worth noting: read_json
brings the numbers back as numbers (revenue as int64, rating as float64), because JSON keeps
numbers and text apart, whereas a CSV, as the next box explains, is nothing but text.
Pitfall. A CSV file carries no type information; it is just text. Pandas guesses each column’s
type from its contents, and a single unexpected value can spoil the guess. One - or the word
missing typed into a column of numbers makes pandas read the whole column as text, and
every later sum or average on it will fail or give a wrong answer. (Pandas does recognise the
common markers NA, N/A, and null as missing values, so those do not turn the column into text;
other stray values do.) The cure is simple: check the types right after loading, before you compute
anything. The next section shows how.


## 1.3. Inspecting before you touch


The first thing to do with any freshly loaded DataFrame is look at it, not compute with it. Five tools
answer the five questions you should always ask.
7

Version of 13 September 2026 Module page
Definition 3 (The five inspection tools).
• df.shape — a pair (rows, columns): how big is the table?
• df.head(n) — the first n rows (5 by default): what do the values look like?
• df.dtypes — the stored type of each column: is each column the type I expect?
• df.info() — column names, non-null counts, and types together: where are values missing?
• df.describe() — count, mean, standard deviation, minimum, the three quartiles, and maxi-
mum of each numeric column: how is each number spread out?
Example — Looking at the shops table. Load the file, then look before you compute. Start with
its size and its first rows:
df = pd.read_csv("shops.csv")
df.shape # (14, 6): 14 rows, 6 columns
df.head()
shop region category revenue orders rating
0 Aster North Books 1200 150 4.5
1 Birch North Toys 900 120 4.1
2 Cedar South Books 1500 210 4.7
3 Dahlia South Food 600 300 3.9
4 Elm East Toys 1100 140 NaN
Five rows, six columns, and already something to notice: Elm’s rating shows as NaN, a missing value
(Chapter 3). Now ask the column types:
df.dtypes
shop str
region str
category str
revenue int64
orders int64
rating float64
dtype: object
Two things stand out. The text columns (shop, region, category) have a text type, and the number
columns have a numeric type (int64 for whole numbers, float64 for numbers with a decimal
point). If revenue had shown up as text here, you would know at once that some non-number had
slipped into it.
df.info() adds the missing-value picture:
<class 'pandas.DataFrame'>
RangeIndex: 14 entries, 0 to 13
Data columns (total 6 columns):
# Column Non-Null Count Dtype
--- ------ -------------- -----
8

Version of 13 September 2026 Module page
0 shop 14 non-null str
1 region 13 non-null str
2 category 14 non-null str
3 revenue 14 non-null int64
4 orders 14 non-null int64
5 rating 12 non-null float64
dtypes: float64(1), int64(2), str(3)
memory usage: 804.0 bytes
Every column should have 14 non-null values, one per row. region has only 13 and rating only
12, so one region and two ratings are missing. You have found the gaps before doing any analysis.
Remark. In pandas version 3.0 and later, text columns show the type str, as above. In earlier
versions the same columns show object. Both mean the same thing for us: “this column is not
a number type.”
describe is the richest of the five, but it uses several statistical words. Here is what each one means,
in case they are new to you.
Definition 4 (Reading a describe summary). For each numeric column, describe reports:
• count — how many values are present (missing values are not counted).
• mean — the average: add all the values and divide by the count.
• std (standard deviation) — how spread out the values are. Roughly, it is the typical distance
of a value from the mean. A small std means the values sit close together; a large std means
they are far apart.
• min and max — the smallest and largest values.
• 25%, 50%, 75% (the quartiles) — sort the values from low to high. The 50% value, the median,
is the one in the middle: half the values are below it. A quarter of the values are below the 25%
value, and three quarters are below the 75% value. Together they show where the middle half
of the data sits.
Example — Reading describe out loud. Calling df.describe() on the shops table prints, for
revenue:
revenue orders rating
count 14.000000 14.000000 12.000000
mean 1031.428571 193.214286 4.241667
std 559.915614 68.461307 0.375278
min -50.000000 80.000000 3.600000
25% 637.500000 142.500000 3.975000
50% 1000.000000 207.500000 4.250000
75% 1450.000000 237.500000 4.525000
max 2000.000000 300.000000 4.800000
Read it as sentences, not as figures. “There are 14 revenue values (none missing), but only 12
ratings, so two ratings are gone. A typical shop makes about 1000 in revenue (the median, the 50%
row), and the middle half of shops sit between 638 and 1450. The ratings are tightly grouped: a
9

Version of 13 September 2026 Module page
standard deviation of only 0.38 around a mean of 4.24 means almost every shop is rated close to
4.2. And something is wrong: a minimum revenue of −50 is impossible, so that row holds an
error, not a real figure.” The numbers did the looking; you did the interpreting. That last step is the
real skill.
Pitfall. df.describe() quietly ignores every non-numeric column and every missing value. A
tidy-looking summary can hide the fact that some rows have no value at all: the count row is
what reveals it. Always compare each column’s count against the row total from df.shape; a gap
is missing data you have not dealt with yet.
Remark. head shows the top of the file, which is often its most regular part. Pair it with
df.tail() (the last rows) and, once you know describe, with a glance at the minimum and
maximum. Errors often hide in the places you are not looking.
Exercises
1.1. Load shops.csv into a DataFrame. Report its shape, its dtypes, and the output of describe.
Name one column whose count in describe is below the row total, and say how many of its
values are missing.
1.2. Write the loaded table out to JSON with df.to_json("shops.json", orient="records"),
read it back with read_json, and check that the result has the same shape and the same dtypes
as the original.
Answers. (1) df.shape is (14, 6). describe shows count 12 for rating (2 missing) and 14 for revenue and orders;
region, being text, does not appear in describe, but info shows it has 13 non-null values (1 missing).
(2) back = pd.read_json("shops.json") gives back.shape equal to (14, 6) and back.dtypes equal to the original’s,
including revenue as int64 and rating as float64 — JSON records that these columns hold numbers, so no re-
guessing is needed.
10
