# 5. Data Quality at the Spreadsheet Level

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 17-18*

Version of 13 September 2026 Module page
5. Data Quality at the Spreadsheet Level


## 5.1. The errors you can see if you look


Here the course’s tagline pays off. Most data problems that wreck an analysis are visible at the
spreadsheet level — if you inspect the data before computing. Three kinds account for the great
majority.
Definition 11 (Three common data-quality issues).
• Duplicates: rows that repeat the same record, inflating every count and sum.
• Inconsistent formats: the same value entered as genuinely different text — a typo (Cofee for
Coffee) or a stray trailing space (Coffee vs Coffee ) — so that equal things are not recognised
as equal. (Pure letter case is the exception: Coffee and coffee are treated as equal, as the pitfall
below shows.)
• Missing values: cells left blank where a value was expected, which downstream functions
may treat as zero, skip, or reject.
Example — One dirty extract, three problems. A 12-row extract of the café’s February sales
(Figure 6) hides all three. The Product column should hold just the four drink names, yet it holds
4 spellings of coffee alone — "Coffee", "coffee", "Cofee", "Coffee " — so the till’s coffee sales
are split 4 ways. A naive =COUNTIF(B2:B13, "Coffee") counts 2 of the 4 rows that are really coffee:
it catches Coffee and coffee — COUNTIF ignores letter case — but misses the typo Cofee and the
trailing-space "Coffee ", which are genuinely different text. Case is not what splits the count; the
typo and the stray space are. Meanwhile 2 rows are exact duplicates of each other, and one Units
cell was left blank.
A B C D
1 Date Product Units Price (¤)
2 2026-02-01 Coffee 12 3.50
3 2026-02-01 coffee 9 3.50 ← lower-case
4 2026-02-02 Cofee 7 3.50 ← typo
5 2026-02-02 Coffee 5 3.50 ← trailing space
6 2026-02-03 Tea 8 2.80
7 2026-02-03 Tea 6 2.80
8 2026-02-04 Cocoa 11 4.00
9 2026-02-04 Juice 1.50 ← blank
10 2026-02-05 Juice 7 1.50
11 2026-02-05 Cocoa 9 4.00
12 2026-02-06 Tea 10 2.80
exact duplicate
13 2026-02-06 Tea 10 2.80
Figure 6: The dirty February extract, with every defect marked. Four Product cells that all mean
coffee are spelled four ways — one only in letter case (which COUNTIF forgives), one a typo, one with
a trailing space (which it does not). One Units cell is blank, and rows 12–13 are an exact duplicate
pair. Every flaw here is visible on the screen once you look.
17

Version of 13 September 2026 Module page
Pitfall (Letter case is not an inconsistency COUNTIF sees). A tempting reflex is to treat
Coffee vs coffee as a defect that hides rows from COUNTIF. It does not: COUNTIF and pivot group-
ing compare text case-insensitively, so Coffee and coffee are already counted and grouped as
one. What they cannot forgive is text that genuinely differs — a typo (Cofee) or a stray space:
Coffee is not Coffee, and =COUNTIF(range, "Coffee") skips it. Tidy the case for presentation if
you like, but know it moves no count; fixing Cofee and stray spaces is what changes the numbers.
Method 6 (Find and correct the three issues).
1. Duplicates: sort the table so identical rows sit together, or use Data → Remove duplicates
(Excel, Sheets) / Data → More filters → Standard filter, “no duplications” (Calc).
Confirm the row count drops by the number you expected.
2. Inconsistent formats: sort the column so variants cluster, decide on one spelling, and
replace the others (Find & Replace handles bulk fixes). Now a COUNTIF counts them all.
3. Missing values: filter the column to blanks. For each, decide: is the value genuinely
unknown (leave it blank and exclude that row from the relevant total), or clearly recoverable
from another column (fill it)? Record the decision.
Pitfall. Never silently delete a row or overwrite a value while cleaning. Each correction changes
the result and must be recorded (Chapter 9), because someone repeating your work needs to
know not just the final numbers but every judgement that produced them. Cleaning without a
record is how an analysis becomes impossible to repeat — and impossible to defend.
Remark. Notice that cleaning needs no new tools. Sorting brings duplicates and variants
together, filtering isolates blanks, and COUNTIF measures how widespread a problem is before
you start fixing it. Data quality is not a separate skill; it is the earlier operations turned on the
data itself.
Exercises
5.1. Take a deliberately dirty dataset (some duplicate rows, one category spelled several ways, a
few blanks). Count the rows, remove the exact duplicates, and confirm the count dropped by the
right amount.
5.2. Use COUNTIF to count one category before standardising its spellings, then standardise the
variants and count again. Report both numbers and explain the gap.
5.3. For each blank in a column, decide whether to exclude or fill it, and write one line justifying
each decision. Explain how an AVERAGE over the column would differ if the blanks had instead
been recorded as 0.
Answers. (1) Removing the exact duplicates drops the row count by the number of extra copies (in the extract of this
chapter, from 12 to 11). (2) Before standardising, COUNTIF(., "Coffee") already sees 2 — it counts Coffee and coffee
alike, since case is ignored; merging the genuinely different Cofee and "Coffee " into Coffee raises it to 4. The gap is
the typo and the stray space, not the case difference. (3) Blanks are skipped by AVERAGE; had they been 0, they would
have been counted and dragged the average down, so the two choices give different results (as in Chapter 2).
18
