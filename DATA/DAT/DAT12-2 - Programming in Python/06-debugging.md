# 6. Debugging

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 22-23*

Version of 13 September 2026 Module page
6. Debugging
Your programs will not work the first time. Nobody’s do. Debugging — finding and fixing the gap
between what you told the computer and what you meant — is not a sign of failure; it is the main
activity of programming. The good news is that it is a learnable, systematic skill, not a talent you are
born with.


## 6.1. Read the error message


When Python hits an error it prints a traceback: a report that ends with the error type and message,
and points at the line where it happened. Beginners skim past it in a panic; experienced programmers
read it carefully, from the bottom up. The last line is usually the most informative:
Traceback (most recent call last):
File "crash.py", line 7, in <module>
total = total + scores[5]
~~~~~~^^^
IndexError: list index out of range
This tells you what (an IndexError), where (line 7), and why (a list index out of range — you
asked for scores[5] in a list that does not have six items). Three of the four questions are answered
before you have even started to think. Learning the common error types — NameError, TypeError,
ValueError, IndexError, KeyError, FileNotFoundError — turns most tracebacks into an instant
diagnosis (Table 3).
Error type It usually means
NameError you used a variable or function name that does not exist
TypeError an operation was applied to the wrong type of value
ValueError the type was right but the value was not, e.g. int("hi")
IndexError a list index points past the end of the list
KeyError a dict has no such key
FileNotFoundError Python found no file where it looked — often the right name in the wrong
folder
Table 3: The errors a beginner meets most often, and what each one is telling you.


## 6.2. Print and reason about state


When the message alone is not enough, the oldest tool still works: print the values your code depends
on, just before the line that misbehaves, and check whether they are what you assumed. Suppose
lines is a list of lines you read from a file and int(line) keeps failing:
for i, line in enumerate(lines):
print(f"line {i}: {line!r}") # what is REALLY in each line?
value = int(line)
22

Version of 13 September 2026 Module page
Programming is reasoning about program state — the current values of all your variables. A bug
is almost always a place where the real state differs from the state you imagined. Printing makes the
real state visible; the moment you see it, the bug usually explains itself.
Remark. Recall !r from Chapter 5: it prints a value’s repr, so a line read from a file shows
as '42\n', not 42, with its trailing newline and any surrounding spaces laid bare. When a line
refuses to convert or a comparison gives an impossible answer, print(f"{line!r}") is the fastest
way to see the hidden characters behind it.
Remark. VS Code, the editor you set up in Chapter 1, offers a third tool: a built-in debugger.
Click just left of a line number to set a breakpoint, then start the file from the Run and Debug
panel; the program runs until it reaches that line and pauses, letting you inspect the value of
every variable at that exact moment — the same program state a print reveals, but shown
without editing your code. A print stays the quickest first reflex and works anywhere your code
runs; when a bug hides in a tangle of state, the debugger shows more of it at once.
Exercises
6.1. The program print(total) raises a NameError. What does that tell you, and what is the most
likely cause?
6.2. Read this traceback and answer, in your own words, what went wrong and on which line:
Traceback (most recent call last):
File "grades.py", line 3, in <module>
average = total / count
ZeroDivisionError: division by zero
6.3. The code below is meant to print 6 but instead stops with an error. Add a print to inspect
the state, find the bug, and fix it.
numbers = ["1", "2", "3"]
total = 0
for n in numbers:
total = total + n
print(total)
6.4. Match each error to its cause: KeyError, IndexError, TypeError — for the expressions [1,
2][5], {"a": 1}["b"], and "3" + 3.
Answers. (1) A name was used before it was given a value — likely a typo in the variable name or a line that never ran.
(2) On line 3, count was 0, so the division by zero failed. (3) The list holds strings, so total + n tries to add a string
to a number and raises a TypeError; convert with int(n), i.e. total = total + int(n). (4) [1,2][5] → IndexError,
{"a":1}["b"] → KeyError, "3" + 3 → TypeError.
23
