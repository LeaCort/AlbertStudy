# 9. Data processing: from CSV to CSV

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 27-29*

Version of 13 September 2026 Module page
9. Data processing: from CSV to CSV
We now assemble everything into the program the whole course points at: read a data file, process it,
write a new one (Figure 3). The standard format for tabular data is CSV — comma-separated values,
a plain-text table in which each line is a row and commas separate the columns.
read CSV process write CSV
Figure 3: The shape of every data-processing program, and the destination of this course: read a file,
transform what it holds, write a new file.


## 9.1. The shape of a CSV file


Suppose students.csv contains:
name,score
Ada,90
Bo,72
Cy,55
The first line is a header naming the columns. Python’s built-in csv module reads such a file, and
csv.DictReader hands each row back as a dictionary keyed by the header — exactly the labelled data
a dict is made for:
import csv
with open("students.csv", "r", newline="") as f:
reader = csv.DictReader(f)
for row in reader:
print(row)
Run it (from the folder that holds students.csv) and it prints one dictionary per row:
{'name': 'Ada', 'score': '90'}
{'name': 'Bo', 'score': '72'}
{'name': 'Cy', 'score': '55'}
Pitfall. Look closely: row["score"] is the string '90', not the number 90 — everything
read from a CSV arrives as text. If you want to compute with it, you must convert first:
int(row["score"]). Forgetting this gives the baffling result "90" + "72" = "9072" instead of
162, because + on strings joins them.
27

Version of 13 September 2026 Module page


## 9.2. A complete processing program


Here is the destination, in full: read the students, keep only those who passed, and write them to a
new file with an added column. It uses data types, a loop, a conditional, type conversion, file input
and output, and error handling together:
import csv
PASS_MARK = 60
def load_students(path: str) -> list:
"""Read a CSV of students into a list of dicts, scores as ints."""
students = []
with open(path, "r", newline="") as f:
for row in csv.DictReader(f):
try:
row["score"] = int(row["score"])
except ValueError:
print(f"Skipping bad row: {row!r}")
continue # skip this row, go to the next one
students.append(row)
return students
def write_passers(students: list, path: str) -> None:
"""Write students who passed, with a 'result' column, to a new CSV."""
with open(path, "w", newline="") as f:
writer = csv.DictWriter(f, fieldnames=["name", "score", "result"])
writer.writeheader()
for s in students:
if s["score"] >= PASS_MARK:
s["result"] = "PASS"
writer.writerow(s)
students = load_students("students.csv")
write_passers(students, "passers.csv")
print(f"Processed {len(students)} students.")
Run it, and it prints its one-line summary:
Processed 3 students.
and a new file passers.csv appears next to students.csv, holding Ada and Bo with a result column
added, and Cy — below the pass mark — dropped:
name,score,result
Ada,90,PASS
Bo,72,PASS
Notice how the work split naturally into two small, named functions — one to read, one to write —
each of which you can test on its own. That structure is not decoration; it is what makes a program
you can debug and trust.
28

Version of 13 September 2026 Module page
Remark. The newline="" is not optional clutter, and it belongs on both the read and the write.
The csv module manages line endings itself: on writing, leaving newline="" out gives an extra
blank line between every row on Windows; on reading, it is what lets the module correctly handle
a newline that appears inside a quoted field. The simple rule: pass newline="" whenever you
hand a file to the csv module, reading or writing.
Exercises
9.1. Create the file students.csv shown above. Write a program that reads it with
csv.DictReader and prints, for each student, Name scored Score using an f-string (remember
the score arrives as a string).
9.2. Extend your program to compute and print the average score across all students. Convert
each score to an int first.
9.3. Write a program that reads students.csv and writes a new file honours.csv containing only
the students who scored at least 85, keeping the same two columns.
9.4. Add a deliberately broken row to students.csv (for example Dot,abc) and confirm the
complete program above skips it without crashing. Explain which line makes that happen.
9.5. Modify write_passers to also add a "result" of "FAIL" (instead of dropping the student)
for those below the pass mark, so every student appears in the output.
Answers. (1) loop over csv.DictReader(f) and, for each row, print(f"{row['name']} scored {row['score']}"); it
prints Ada scored 90, Bo scored 72, Cy scored 55 (the score stays a string, which is fine here). (2) sum the converted
scores and divide by the count; the average of 90, 72, 55 is 72.33.... (3) read with csv.DictReader, and with a
csv.DictWriter(f, fieldnames=["name", "score"]) write the header and only the rows where int(row["score"])
>= 85; honours.csv then holds just Ada. (4) The try / except ValueError around int(row["score"]) catches the bad
conversion and continue skips the row. (5) remove the if guard around the write, and set s["result"] to "PASS" or
"FAIL" based on the score before writing every row.
29
