# 7. Third-party libraries

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 24*

Version of 13 September 2026 Module page
7. Third-party libraries
Python’s real power is its ecosystem: hundreds of thousands of packages written by others, each
one a problem already solved. Learning to find, install, and use them is as important as the language
itself.


## 7.1. Installing and importing


We met pip in the first chapter. Inside an activated virtual environment, install a package once:
pip install requests
Then import it in your program to make its contents available. There are three common forms of
import:
import requests # then use it as requests.get(...)
from datetime import date # bring one name out of a package
import statistics as stats # import under a shorter alias: stats.mean(...)
The first form imports the whole package under its own name. The second brings a single name out
of a package so you can use it directly. The third imports a package under a shorter alias, handy for
names you will type often. (datetime and statistics are part of Python itself, so they need no pip
install; requests is third-party, so it does.)


## 7.2. Reading documentation


You cannot — and need not — memorise a library. The real skill is reading its documentation: the
official description of what each function expects and returns. When you meet a new library, find
its documentation, look at the first example, copy it, run it, then adapt it to your need. Every library
worth using has a “Quickstart” page written for exactly this moment. Learning to read documenta-
tion well is the single habit that most separates a self-sufficient programmer from a stuck one.
Exercises
7.1. The statistics module is part of Python. Import it and use it to print the mean and the
median of the list [4, 8, 15, 16, 23, 42]. (Find the function names by searching for “python
statistics module”.)
7.2. Using from datetime import date, print today’s date. Search the documentation for how
to get the current date.
7.3. Install the requests package in your virtual environment (if you have not already). Confirm
the install by running a program that only contains import requests — it should run without
error.
7.4. Open the documentation for the statistics module and find a function that returns the
most common value in a list. Use it on [1, 2, 2, 3, 3, 3, 4].
Answers. (1) statistics.mean(...) gives 18, statistics.median(...) gives 15.5. (2) print(date.today()). (3) has
no single answer; you have succeeded when the program containing only import requests runs and prints nothing,
with no ModuleNotFoundError. (4) statistics.mode(...) gives 3.
24
