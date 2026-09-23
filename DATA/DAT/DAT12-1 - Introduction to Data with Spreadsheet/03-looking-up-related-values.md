# 3. Looking Up Related Values

*Source: DAT12-1 - Introduction to Data with Spreadsheet - Textbook.pdf, pages 12-14*

Version of 13 September 2026 Module page
3. Looking Up Related Values


## 3.1. When the value you need lives in another table


Often the value you need is in a different table. A sales sheet lists a product code; the price for each
code sits in a separate price list. A lookup fetches the matching value across the two tables, so you
never copy prices by hand.
Our café keeps this price list:
Code Product Price (¤)
C01 Coffee 3.50
T01 Tea 2.80
K01 Cocoa 4.00
J01 Juice 1.50


## 3.2. VLOOKUP


Definition 8 (VLOOKUP). VLOOKUP(key, table, column, FALSE) searches for key in the first
column of table and returns the value from the numbered column of the matching row. The final
FALSE demands an exact match — nearly always what you want.
Method 4 (Look up a price with VLOOKUP).
1. In the sales sheet, beside a row whose code is in A2, type =VLOOKUP(A2, pricelist, 3, FALSE),
where pricelist is the whole three-column price-list range.
2. A2 is the code to find; pricelist is the table to search; 3 is the column of the value you want
(the price is the price list’s third column); FALSE forces an exact match.
3. Press Enter, then fill the formula down so every sales row gets its price.
Price list
1: code 2: product 3: price
C01 Coffee 3.50 A sale has code T01.
T01 Tea 2.80 Find its price:
K01 Cocoa 4.00 VLOOKUP("T01", pricelist, 3, FALSE)
J01 Juice 1.50
returns 2.80.
Figure 5: A lookup matches the key T01 in the first column of the price list and returns the value
from the chosen column (here column 3, the price) of that row. VLOOKUP requires the key in the first
column and can only read columns to its right.
Pitfall. VLOOKUP fails silently in two classic ways. First, the final FALSE is not optional decoration.
With it, a lookup for a code that is not in the list returns #N/A, honestly reporting “not found”.
Omit it and VLOOKUP quietly switches to approximate matching, a mode that only works when
12

Version of 13 September 2026 Module page
the first column is sorted in ascending order — and our price list, like most, is not. On an
unsorted column the result is undefined: approximate matching returns whatever its internal
search happens to land on, and where it lands depends on the spreadsheet you use, so different
programs — even different versions of one — can disagree. It can misprice even a code that
is present. In the spreadsheet this book was checked with, =VLOOKUP("K01", pricelist, 3)
without the FALSE — a lookup of Cocoa (¤4.00) — comes back as ¤3.50, Coffee’s price; another
program might return a different wrong price, or an error. That unpredictability is the danger.
Always end VLOOKUP with FALSE. Second, VLOOKUP can only read columns to the right of the key;
if the value you need sits to its left, VLOOKUP cannot reach it.


## 3.3. INDEX and MATCH


VLOOKUP is quick but boxed in: the key must be the first column, and the answer must sit to its right.
A two-function pair removes both limits. It looks harder at first, so we build it up one piece at a time.
Definition 9 (INDEX and MATCH). MATCH(key, range, 0) returns the position of key
within a single row or column — 1 for the first cell, 2 for the second, and so on (the 0 demands
an exact match). INDEX(range, n) returns the nth value of a range. Feed one into the other and
you have a lookup: INDEX fetches the value at the position MATCH found.
Example — Building an INDEX/MATCH lookup step by step. We want the price for code T01
from the price list. Unlike VLOOKUP, this pair points at single columns: codes is the code column
and prices the price column (not the whole pricelist table).
1. MATCH("T01", codes, 0) looks down the code column and finds T01 in position 2.
2. INDEX(prices, 2) returns the second price, ¤2.80.
3. Nest them so the position feeds the fetch: =INDEX(prices, MATCH("T01", codes, 0)). Tested
in a real spreadsheet this returns 2.8 — the same answer as VLOOKUP, but the key column may
sit anywhere.
The pair’s real advantage is reading leftwards. If the product name sits in a column to the left of
the code, =INDEX(names, MATCH("T01", codes, 0)) returns “Tea” — something VLOOKUP simply
cannot do.
Exercises
3.1. Give each product in your dataset a short code and put codes and prices in a separate two-
column price list. In the sales sheet, use VLOOKUP(..., FALSE) to fetch each row’s price from its
code, then fill it down.
3.2. Look up a code that does not appear in the price list, once with FALSE and once without it.
Record both results and explain which is safer for real work and why.
3.3. Rebuild the same price lookup with INDEX/MATCH. Then rearrange the price list so the value
you want sits to the left of the code, and show that INDEX/MATCH still works where VLOOKUP cannot.
Answers. (1) =VLOOKUP(A2, pricelist, 2, FALSE) (with the price in the two-column price list’s second column)
returns each row’s price; filling down prices the whole sheet. (2) With FALSE, a missing code returns #N/A — an honest
“not found”. Without it, VLOOKUP switches to approximate matching, which is only defined on a first column sorted
in ascending order; on an ordinary unsorted price list its result is unreliable — a wrong price, or an error, with no
warning either way — so FALSE is the safe choice. (3) =INDEX(prices, MATCH(A2, codes, 0)), pointing MATCH at the
13

Version of 13 September 2026 Module page
code column codes and INDEX at the price column prices, returns the same prices; because MATCH locates the row and
INDEX fetches from any column, it also reads a value sitting left of the key.
14
