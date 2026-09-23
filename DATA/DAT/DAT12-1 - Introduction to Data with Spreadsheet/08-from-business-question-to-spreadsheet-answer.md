# 8. From Business Question to Spreadsheet Answer

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 24-25*

Version of 13 September 2026 Module page
8. From Business Question to Spreadsheet
Answer


## 8.1. The whole course, in three steps


Everything so far — entry, functions, lookups, sorting, cleaning, pivots, charts — serves one end:
answering a real question that someone actually has. Doing that well is a disciplined three-step move.
Definition 14 (Formulate, select, interpret).
1. Formulate the question precisely enough that you would recognise the answer if you saw it
(“which product should we promote for the summer?”, not “how are products doing?”).
2. Select the operations that answer exactly that — the functions, sorting, filtering, pivot, or
chart the question needs, and no more.
3. Interpret the result back in the question’s own words, stating what it means rather than
reporting a bare number.
Case study — Which product to promote for the summer. Formulate. The café’s revenue
falls from winter to summer. We want the product whose sales hold up or grow into summer —
the one worth promoting when the others fade.
Select. Build a pivot of revenue by product and month (Figure 8). Read across each product’s row
from January to June. Coffee falls from ¤6,062.00 toward summer with the other hot drinks; juice
moves the other way, from ¤304.50 in January to ¤819.00 in June. A line chart of the two rows
makes the crossing obvious.
Interpret. “Coffee earns the most overall, but its sales decline through spring; juice is the only
product that grows into summer. Promote juice for the summer months, when it is rising and the
hot drinks are not.” Notice what we did not do: no scatter plot, no average across all products, no
extra cleverness. The discipline is to use only the operations the question needs, and to end with a
sentence, not a number.
Pitfall. The commonest failure is producing numbers without an answer — a wall of sums and
charts that never returns to the question that was asked. A correct total that does not answer the
question is not a partial answer; it is no answer. Always close the loop back to the words of the
question.
24

Version of 13 September 2026 Module page
Exercises
8.1. Formulate one genuine business question about your dataset, precise enough that you would
recognise the answer. Then list the exact operations you will use to answer it, and nothing more.
8.2. Answer your question using only those operations, and finish with a single interpretive
sentence phrased in the question’s own terms.
8.3. Take a vague question (“how are we doing?”) and rewrite it as a precise, answerable one.
Explain what made the first version impossible to answer.
Answers. (1) A good question names the comparison, the measure, and the scope (product, revenue, summer months),
so the answer is recognisable; the operation list should contain only what that question needs. (2) The interpretive
sentence restates the finding in business terms, as “promote juice for the summer” does for the case study. (3) “How
are we doing?” names no measure, scope, or comparison, so no operation can answer it; a precise version supplies
all three.
25
