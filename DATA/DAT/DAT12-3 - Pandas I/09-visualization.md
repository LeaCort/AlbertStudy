# 9. Visualization

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 30-35*

Version of 13 September 2026 Module page
9. Visualization
A summary table answers a question in numbers; a chart answers it in a shape the eye reads at
a glance. A column of fourteen revenues is hard to compare in your head, but as bars of different
heights the largest and smallest jump out at once. This chapter covers the four charts that carry most
of everyday analysis, and — just as important — which chart answers which kind of question.
Two libraries do the drawing. matplotlib is the foundation: it can draw anything, one instruction at a
time. seaborn is a thin, friendlier layer built on top of it that turns a DataFrame straight into a good-
looking chart in one call. We use seaborn for the chart itself and matplotlib’s plt for the finishing
touches — the title, the axis labels, and showing or saving the figure. Import both, once, at the top
of your script:
import matplotlib.pyplot as plt
import seaborn as sns
sns.set_theme(style="whitegrid") # a clean default look for every chart
Two matplotlib calls end every chart. plt.show() opens it in a window; plt.savefig("chart.png")
writes it to a file to put in a report. Throughout this chapter, df is the cleaned shops table from
Chapter 8 (the missing region filled with "Unknown", the impossible negative revenue dropped).


## 9.1. Choosing the right chart


The chart is chosen by the question, not by taste. Four questions cover most of what a first analysis
asks, and each has a natural chart.
Framework 1 (Question to chart).
• Compare one value across categories (“which region earns most?”) → a bar chart: one
bar per category, height for the value.
• See how one numeric variable is distributed (“are most shops small or large?”) → a
histogram: values bucketed into ranges, bar height for how many fall in each.
• Follow a value along an ordered axis, usually time (“how did revenue move month by
month?”) → a line chart: points joined in order.
• See whether two numeric variables are related (“do busier shops earn more?”) → a
scatter plot: one dot per row, placed by its two values.


## 9.2. Bar chart: comparing across categories


A bar chart puts one bar per category side by side, so their heights can be compared directly. Feed
seaborn a small table with one row per category — here, total revenue per region from a groupby —
and name the category column and the value column:
by_region = df.groupby("region")["revenue"].sum().reset_index()
plt.figure(figsize=(6, 3.5))
sns.barplot(data=by_region, x="region", y="revenue")
30

Version of 13 September 2026 Module page
plt.title("Total revenue by region")
plt.ylabel("total revenue")
plt.show()
Figure 6: A bar chart compares one value across categories. North’s total revenue is the tallest bar;
the single "Unknown"-region shop is the shortest. Heights are read off the shared vertical axis.
Figure 6 answers “which region earns most in total?” instantly: North leads, the "Unknown" bar is
tiny because it is a single shop. The eye compares heights far faster than it compares a column of
numbers.


## 9.3. Histogram: the shape of one variable


A histogram is not a bar chart, though both draw bars. A bar chart compares given categories; a
histogram takes one numeric column, chops its range into equal buckets (bins), and draws how
many values fall in each — showing the variable’s distribution. There is one input column, not two:
plt.figure(figsize=(6, 3.5))
sns.histplot(data=df, x="orders", bins=6)
plt.title("Distribution of orders")
plt.show()
31

Version of 13 September 2026 Module page
Figure 7: A histogram shows how one numeric variable is distributed. Each bar counts the shops
whose orders fall in that range; the tallest band, around 200–230 orders, holds four shops.
Figure 7 answers “how busy is a typical shop?” Orders run from under 100 to 300, and the fullest
band sits around 200–230, where four shops fall. The bins argument sets how many buckets to use:
too few hides the shape, too many makes it jagged, so try a couple of values.
Pitfall. A bar chart and a histogram look alike but ask different questions. A bar chart’s x-axis
lists categories you chose (regions, products), one bar each; a histogram’s x-axis is a numeric
range cut into bins, and its bars must touch, because they cover a continuous scale. If your x-
axis is a number line, you want a histogram; if it is a list of names, you want a bar chart.


## 9.4. Line chart: a value along an ordered axis


A line chart joins points in the order of the x-axis, so it fits a value measured along something ordered
— most often time. Joining the dots draws the eye along the trend. This one uses a small monthly
table and plain matplotlib:
months = pd.DataFrame({
"month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
"revenue": [10200, 10800, 9900, 11500, 12100, 12800],
})
plt.figure(figsize=(6, 3.5))
plt.plot(months["month"], months["revenue"], marker="o")
plt.title("Total revenue by month")
plt.xlabel("month")
plt.ylabel("total revenue")
plt.show()
32

Version of 13 September 2026 Module page
Figure 8: A line chart follows a value along an ordered axis. Revenue climbs from January to June,
apart from a dip in March; the joined line makes the trend and the one interruption easy to see.
Figure 8 answers “which way is revenue heading?”: upward overall, with a single dip in March.
The line is only honest when the x-axis has a real order — months, days, years. Joining unordered
categories with a line would draw a trend that does not exist, which is the next pitfall.
Pitfall. Use a line chart only when the x-axis is ordered. Joining categories that have no natural
order — regions, product names — with a line invents a slope between them that means nothing:
the picture would change if you listed the categories in another order. For unordered categories,
use a bar chart.


## 9.5. Scatter plot: relating two variables


A scatter plot places one dot per row, using two numeric columns as the two coordinates. It answers
whether the two move together. Give seaborn the two columns:
plt.figure(figsize=(6, 3.5))
sns.scatterplot(data=df, x="orders", y="revenue")
plt.title("Revenue against orders")
plt.show()
33

Version of 13 September 2026 Module page
Figure 9: A scatter plot shows the relationship between two numeric variables. Each dot is one shop,
placed by its orders and its revenue. More orders tends to go with more revenue, but loosely: several
busy shops still earn little.
Figure 9 answers “do busier shops earn more?” The cloud drifts upward — more orders tends to
mean more revenue — but the link is loose: a few shops take many orders yet earn little, so orders
alone do not fix revenue. A scatter plot shows both that a relationship exists and how tight it is.
Pitfall. A rising scatter shows the two variables move together; it does not show that one
causes the other. Busier shops might earn more for many reasons, or a third factor (shop size,
say) might drive both. Reading a cause into a scatter is the same over-claim the reporting chapter
(Chapter 10) warns against — the plot describes, it does not explain.
Exercises
9.1. On the cleaned shops table, draw a bar chart of mean rating per category. Which category
is rated highest? State the question the chart answers in one sentence.
9.2. Draw a histogram of the revenue column with bins=5, then again with bins=10. Describe
how the picture changes, and say what a histogram tells you that a bar chart of the same column
could not.
9.3. Using the small monthly table from this chapter, draw a line chart of revenue by month.
Explain why a line chart suits this data but would be wrong for a chart of revenue by region.
9.4. Draw a scatter plot of rating (x) against revenue (y). Say whether the two appear related,
and write one sentence that stops short of claiming a cause.
9.5. For each question below, name the single most appropriate chart and say why: (a) “Which
product category has the most shops?” (b) “Are ratings mostly high, or spread out?” (c) “Does
a shop’s number of orders track its revenue?” (d) “How did total revenue change over the last
six months?”
Answers. (1) cat = df.groupby("category")["rating"].mean().reset_index(), then sns.barplot(data=cat,
x="category", y="rating"). A bar chart suits a value compared across chosen categories; it answers “which category
is rated highest on average?”
34

Version of 13 September 2026 Module page
(2) sns.histplot(data=df, x="revenue", bins=5) and again with bins=10. More bins show finer detail but a rougher,
more jagged shape; fewer bins are smoother but hide structure. A histogram shows the distribution of one column
— where values cluster and how spread they are — which a bar chart, comparing separate categories, cannot.
(3) plt.plot(months["month"], months["revenue"], marker="o"). Months have a natural order, so joining them
traces a real trend over time. Regions have no order, so a line between them would imply a slope that changes with
the listing order and means nothing; revenue by region belongs in a bar chart.
(4) sns.scatterplot(data=df, x="rating", y="revenue"). The dots show little or no clear trend, so rating and
revenue appear at most weakly related. A safe sentence: “Higher-rated shops do not clearly earn more in this data.”
No cause is claimed.
(5) (a) bar chart — a count compared across chosen categories. (b) histogram — the distribution of one numeric
column. (c) scatter plot — the relationship between two numeric columns. (d) line chart — a value along an ordered
time axis.
35
