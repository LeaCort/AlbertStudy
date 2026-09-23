# 9. Documentation and Reproducibility

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 26-27*

Version of 13 September 2026 Module page
9. Documentation and Reproducibility


## 9.1. An analysis no one can repeat is not finished


The last discipline separates a private spreadsheet from professional work: someone else — or you, six
months later — must be able to follow it and reach the same result without asking you anything.
Definition 15 (Reproducible analysis). A spreadsheet analysis is reproducible when an-
other person can follow it, understand each step, and reach the same result without assistance.
This means recording the source of the data, the steps taken in order, the assumptions
and judgements made (especially how data-quality issues were handled), and where each
reported number comes from.
Example — The difference a note makes. Two analysts both report an average sale of ¤69.57.
The first hands over a sheet of formulas. The second adds a short notes tab: “Source: café sales
export, six months, 724 rows. Average computed over E2:E725. No rows excluded.” Only the second
analysis can be trusted, because only the second can be checked. The number is identical; the
work is not.
Method 9 (Write a notes tab that makes an analysis reproducible). On a separate sheet
named Notes, record, in order:
1. Source — where the data came from and when it was obtained.
2. Cleaning — every correction made and the judgement behind it (duplicates removed,
spellings standardised, blanks excluded or filled).
3. Steps — the operations performed, in the order performed.
4. Results — each reported number and the exact cell range it comes from.
Example — A notes tab for the cleaned extract. Documenting the cleaning of Chapter 5′s
dirty extract: “Source: February extract, 12 rows. Removed 1 exact duplicate row so 11 remain.
Standardised the Product column: corrected the typo Cofee, trimmed the trailing space in "Coffee
", and lower-cased coffee to Coffee for consistency (4 Coffee rows in total; case never affected the
count). One Units cell is blank — genuinely unknown, so excluded from unit totals.” Anyone with
the raw extract and these notes reaches the same cleaned numbers we did.
Pitfall. Undocumented cleaning is the quiet destroyer of reproducibility. If you removed dupli-
cates, standardised spellings, or excluded blanks (Chapter 5) without writing it down, your final
numbers cannot be rebuilt from the raw data — and an analysis that cannot be rebuilt cannot
be defended when someone questions it. Document the judgements, not just the formulas.
Exercises
9.1. Write a notes tab for one of your earlier analyses: source, cleaning, steps, and the cell range
behind each reported number.
26

Version of 13 September 2026 Module page
9.2. Hand your raw data and your notes tab — but not your finished sheet — to a classmate, and
confirm they reproduce your headline number without asking you anything. Note any step they
got stuck on and add it to your notes.
9.3. Explain in a few sentences why two analysts reporting the same number can differ in how
much their result can be trusted.
Answers. (1) A complete notes tab lets a stranger rebuild every number; the test is whether each reported figure names
its source range and every cleaning judgement. (2) A step the classmate stumbles on is a gap in the notes — the
exercise’s real output is the improved notes. (3) The same number can rest on documented, checkable steps or on
undocumented ones; only the first can be verified, so only the first can be trusted, as in the two-analyst example.
27
