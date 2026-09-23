# 7. Visualization

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 21-23*

Version of 13 September 2026 Module page
7. Visualization


## 7.1. The right chart answers the question; the wrong one misleads


A chart turns numbers into a picture, and choosing the chart type is choosing which question you
answer. Three types cover most early data work, each matched to a different shape of question.
Definition 13 (Three chart types, three questions).
• A bar chart compares a quantity across categories (revenue by product).
• A line chart shows how a quantity changes along an ordered axis, usually time (revenue
by month).
• A scatter plot shows the relationship between two numeric variables, one on each axis
(ad spend vs sales).
Figure 9: The café’s real data in each chart type. Bar: coffee dwarfs the other products. Line: total
revenue falls steadily from January to June, the seasonal decline of a hot-drink shop. Scatter: across
24 weeks, the weeks with higher ad spend tend to have higher sales — each dot is one week. Each
chart fits a different question; using one where another belongs misstates the question.
Method 8 (Construct a chart).
1. Select the columns to plot. For a bar or line chart, select the label column — the category,
or the time — and the value column. For a scatter plot, select the two numeric columns
instead, one for each axis (Ad spend and Sales), with no label column at all (Figure 10). Hold
Ctrl/Cmd to add a column that does not sit next to the first.
2. Open Insert → Chart. The spreadsheet proposes a type; change it to bar, line, or scatter to
match your question.
3. Label the axes, and for a bar chart make sure the value axis starts at zero (see the pitfall
below).
21

Version of 13 September 2026 Module page
A B C
1 Week Ad spend Sales
2 1 445 2689
3 2 373 2164 Insert → Chart
→ scatter plot:
4 3 198 1249 ad spend on x, sales on y
5 4 472 2131
Figure 10: Selecting the columns for a scatter plot: the two numeric columns (Ad spend and Sales),
one per axis, and no label column. A bar or line chart would instead take one label column plus one
value column.
Example — Matching chart to question.
• “Which product sells most?” — a comparison across categories → bar chart, and Figure 9 shows
coffee far ahead.
• “Are sales rising or falling?” — change over an ordered time axis → line chart, and the café’s
line falls month by month.
• “Does spending more on ads bring more sales?” — a relationship between two numbers →
scatter plot.
Put months on a bar chart and you lose the sense of a trend; put unordered products on a line
chart and the connecting line implies a progression that does not exist. The chart type is part of
the claim, not decoration.
Pitfall. A misleading chart is as dangerous as a wrong calculation. The classic deception is a
bar chart whose value axis starts not at zero but at, say, 95: a rise from 96 to 100 then looks like
a huge jump. The data is honest; the axis misleads. When you read a chart, check the axes first;
when you make a bar chart, start the value axis at zero unless you have a stated reason not to.
Figure 11: The same three values (96, 98, 100) drawn with the value axis starting at 95 (left) and at 0
(right). The numbers are identical; only the left chart exaggerates the change.
Exercises
7.1. From your data, construct a bar chart, a line chart, and a scatter plot. For each, state the
question it answers and explain why the other two chart types would answer it less well.
22

Version of 13 September 2026 Module page
7.2. Take any near-flat series and draw it twice: once with the value axis starting at zero, once
starting just below the lowest value. Describe how the visual impression changes though the
data does not.
7.3. Find or invent a chart that misleads, name exactly how (truncated axis, a line joining
unordered categories, or similar), and redraw it honestly.
Answers. (1) A bar chart compares categories, a line chart shows change over ordered time, a scatter plot shows a
relationship; each other type would blur or invent structure the question does not ask about. (2) The truncated axis
stretches small differences into apparently large ones; the zero-based axis shows the change at its true, small size —
same numbers, opposite impression. (3) The honest redraw restores a zero-based axis or replaces a line over categories
with bars, so the picture matches the data.
23
