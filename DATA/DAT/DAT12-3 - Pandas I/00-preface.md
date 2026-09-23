# Preface

*Source: DAT12-3 - Pandas I - Textbook.pdf, pages 4-5*

Version of 13 September 2026 Module page
Preface
In your Python course you learned to read a CSV file the hard way. You opened it with a context
manager, looped over its lines, split each line on a comma, and built up lists or dictionaries by hand.
That works, and it taught you what a table really is: rows, columns, and the constant effort of keeping
them lined up. But it does not scale. As soon as you want the average of a column, the rows where
one value is above another, or a summary broken down by category, the hand-written loops pile up.
Each loop is a new place for a mistake that no one will notice.
This course gives you the standard professional tool for that work: pandas. Pandas does not give you
a new kind of data. A table is still a table, the same one you built by hand before. What it gives you
is a vocabulary for working on whole tables at once: select these rows, group by that column, join
this table to that one, change a wide table into a long one. Where you once wrote a ten-line loop, you
now write one line that says what you want, and pandas runs the loop for you, correctly, on a million
rows as easily as on ten.
The skill this course builds is not memorising method names. It is learning to read a data question
as a sequence of table operations, and then to read the answer back as a sentence a person can
act on. By the end you will take a raw CSV file, inspect it, clean it, summarise it, and write a short
paragraph that says what it means. That whole path, from a messy file to a result you can defend, is
the goal of the course, and every chapter is one step along it.
A note on running the code. Pandas is a third-party library. Install it into your virtual environment
with pip install pandas (add openpyxl if you read Excel files, and matplotlib and seaborn for the
charts in Chapter 9), exactly as you learned to install any package. Then, by universal convention,
import it under the short name pd:
import pandas as pd
Every code example below assumes this line has already run.
One dataset runs through the whole book. It is a small table of shops in a retail chain, one row per
shop. Save the following text as a file called shops.csv so you can run every example and exercise
yourself:
shop,region,category,revenue,orders,rating
Aster,North,Books,1200,150,4.5
Birch,North,Toys,900,120,4.1
Cedar,South,Books,1500,210,4.7
Dahlia,South,Food,600,300,3.9
Elm,East,Toys,1100,140,
Fern,East,Food,-50,80,4.0
Gorse,West,Books,2000,260,4.8
Holly,West,Toys,750,95,3.6
Iris,North,Food,480,220,4.2
Juniper,South,Toys,1300,175,
Larch,East,Books,1700,230,4.6
Maple,,Food,540,240,3.8
Olive,West,Food,820,280,4.3
Pine,North,Books,1600,205,4.4
4

Version of 13 September 2026 Module page
Each row records a shop’s region, product category, monthly revenue (in a single shared currency),
number of orders, and average customer rating on a scale from 1 to 5. The table is deliberately
imperfect: a few values are missing, and one is impossible. Learning to notice and handle such flaws
is a large part of this course.
5
