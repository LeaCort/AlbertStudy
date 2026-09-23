# 10. Descriptive Reporting

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 36-37*

Version of 13 September 2026 Module page
10. Descriptive Reporting
A summary table is not the finish line. A manager does not want a DataFrame; they want to know
what it means. The final, and often undervalued, skill of this course is turning a table of numbers
into a short paragraph a person can act on — usually beside a chart (Chapter 9) that makes the same
point at a glance.
Definition 13 (A descriptive report). A descriptive report states, in plain language, what the
summary shows: which groups are largest and smallest, where the values concentrate, and any
notable gaps or outliers. It describes what the data says and does not claim why. Causes lie
beyond what a descriptive summary can support.
Example — From table to paragraph. Given the per-region summary from the previous chapter
(North: sum 4180, mean 1045, 4 shops; West: 3570, 1190, 3; South: 3400, 1133, 3; East: 2800, 1400,
2; Unknown: 540, 540, 1), a good report reads:
“North has the highest total revenue (4180), mainly because it has the most shops (4) rather
than the highest average. West and South follow with similar totals (3570 and 3400). East’s
average revenue per shop is the highest of all (1400), but this rests on only two shops, so it is a
weak basis for a conclusion. One shop has no region recorded and appears as ‘Unknown’; it is
a single shop, but a missing region should be investigated in case it points to a data-collection
problem.”
Every sentence points back to a number in the table, compares groups, and stops short of inventing
a cause. That is the genre.
Pitfall. The main error in reporting is sliding from description to unfounded cause: “North
earns more because its customers are wealthier” is not in the data — you measured revenue, not
wealth. State what the numbers show, and flag what would need more data to explain. Confident
over-claiming from a descriptive table is how an analysis loses its credibility.
Pitfall. The opposite error is burying the finding under every number. A report is not the table
read aloud; it is the two or three things that matter — the biggest group, the surprising
contrast, the worrying gap — stated plainly. If your paragraph mentions every cell, it has inter-
preted none of them.
Remark. Everything in this course was practised on one small, tidy table so that you could
check every result by eye. A real dataset is larger and messier — many more columns, dirtier
types, gaps that are harder to judge — but the path does not change: load, inspect, clean with
stated reasons, summarise, visualise, and report what the numbers show. What grows is the care
each step needs, not the number of steps. The last exercise below asks you to walk that path once
on a dataset of your own.
36

Version of 13 September 2026 Module page
Exercises
10.1. Take the per-region summary produced by the pipeline in the previous chapter and write a
short paragraph interpreting it: name the leading region by total and by average, flag any group
whose figure rests on very few shops, and note the "Unknown" region as a data-quality point.
Claim no cause.
10.2. Find a real dataset of at least a few hundred rows and several columns — many govern-
ments and organisations publish free CSV files on open-data portals — and run the full pipeline
on it: load, inspect, clean (justifying each decision), and summarise along one grouping column.
Draw at least one chart that fits the question (Chapter 9), and finish with a short paragraph
interpreting the summary and its chart, in the same descriptive genre, without claiming a cause.
Answers. (1) A good paragraph resembles the one in this chapter’s example: North leads on total revenue (4180),
mainly through having the most shops; East has the highest average (1400) but on only two shops, so that figure is a
weak basis for a conclusion; the single "Unknown" region is one shop but should be investigated. Every sentence points
to a number, and none claims why.
(2) No single answer, but a good one loads the file, reports its shape and dtypes, checks info and describe for
missing values and impossible figures, cleans them with a stated justification, and ends with a two- or three-sentence
paragraph naming the largest and smallest groups and any striking gap — describing what the numbers show, not
why. The method is exactly the one practised on shops.csv; only the size and messiness of the data change.
Remark (Source). The split–apply–combine strategy that groupby carries out (Chapter 4)
was named and set out by Hadley Wickham in “The Split-Apply-Combine Strategy for Data
Analysis”, Journal of Statistical Software 40(1), 2011.
37
