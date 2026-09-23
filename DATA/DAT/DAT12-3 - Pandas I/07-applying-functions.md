# 7. Applying Functions

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 26-27*

Version of 13 September 2026 Module page
7. Applying Functions
Pandas’ built-in operations cover most needs, but sometimes you must run your own logic on every
value, column, or row. apply is the general tool for that. It pairs naturally with a lambda: a small
function with no name, written on one line, of the form lambda x: <expression using x>.
Example — A custom calculation, value by value. Suppose you want each shop’s revenue in
cents rather than in whole currency units. There is no built-in “to cents”, so you apply a function
of your own:
df["cents"] = df["revenue"].apply(lambda x: round(x * 100))
Pandas calls the little function once per value of revenue, with x set to that value, and collects the
results into a new column. The lambda is just a one-line function: lambda x: round(x * 100)
means “given x, return round(x * 100)”.


## 7.1. Series apply and DataFrame apply


Two different objects can call apply, and they behave differently. Keeping them apart is the whole of
this section.
A Series calls apply element by element. The function receives one value at a time; there is
nothing to configure, and Series.apply takes no axis argument at all. That is the call from the
example above:
df["orders"].apply(lambda x: x + 1) # one value at a time; no axis here
A DataFrame calls apply on a whole Series at a time, and the axis argument chooses which
Series. It does not switch between “one value” and “one row”; it switches between whole columns
and whole rows:
• axis=0, the default, hands the function each column (a Series);
• axis=1 hands the function each row (a Series).
Either way the function is handed an entire Series, never a single value — the part beginners most
often get wrong.
Example — The default axis runs down the columns. With the default axis=0, apply calls the
function once per column, passing the whole column. Here the function returns each column’s
range, its maximum minus its minimum:
df[["revenue", "orders"]].apply(lambda col: col.max() - col.min())
revenue 2050
orders 220
dtype: int64
26

Version of 13 September 2026 Module page
The function ran twice, once per column: revenue gives 2000−(−50) = 2050 and orders gives
300−80 = 220. It was never called on a single value.
Pass axis=1 and the same method hands over a whole row instead, so the function can combine
several columns of one shop:
df.apply(lambda row: row["revenue"] / row["orders"], axis=1) # a whole row at a time
Each row arrives as a Series; the function divides that shop’s revenue by its orders to give its revenue
per order.
Pitfall. Do not expect df.apply(f) to call f on every individual value. With the default axis=0
it calls f once per column, handing over the entire column, so df.apply(lambda x: x + 1)
passes whole columns to x, not numbers. To run a function on each value of one column, call
it on that column, df["orders"].apply(f), where apply is element-wise and no axis exists. To
run it across each row, pass axis=1.
Pitfall. apply is flexible but slow: it runs your Python function once per row, which on a million
rows means a million function calls. Whenever a built-in vectorised operation exists, prefer it.
df["revenue"] / df["orders"] is both shorter and much faster than df.apply(lambda row:
row["revenue"] / row["orders"], axis=1), and gives the same result. Reach for apply only
for logic that pandas’ own operations cannot express.
Remark. A lambda is convenient but has no name. If the logic grows beyond one
line, or you want to reuse it, write a named def function and pass it by name, as in
df["revenue"].apply(to_cents). apply accepts any function, whether a lambda or not.
Exercises
7.1. Add a revenue_per_order column, first with apply and a lambda, then as a vectorised
operation. Explain why the vectorised version is preferable.
Answers. (1) df["revenue_per_order"] = df.apply(lambda r: r["revenue"] / r["orders"], axis=1) and
df["revenue_per_order"] = df["revenue"] / df["orders"] give the same column. The vectorised version is shorter
and much faster, because it does not call a Python function once per row.
27
