# 5. File input and output

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 19-21*

Version of 13 September 2026 Module page
5. File input and output
A program that only prints to the screen forgets everything when it ends. To do real work it must
read files and write files — to persist data.


## 5.1. Reading and writing with context managers


Opening a file gives you a connection to it that must eventually be closed, or you risk losing data and
holding resources you no longer need. The clean way is the with statement — a context manager
that closes the file automatically when the block ends, even if something goes wrong inside it:
# Writing
with open("notes.txt", "w") as f: # "w" = write (replaces the file)
f.write("first line\n") # \n is a newline character
f.write("second line\n")
# Reading
with open("notes.txt", "r") as f: # "r" = read (this is the default)
content = f.read() # the whole file as one string
print(content)
The variable f is the open file, valid only inside the with block. To read a file line by line — the usual
case for data — loop over it directly:
with open("notes.txt", "r") as f:
for line in f:
print(line.strip()) # .strip() removes the trailing newline
Pitfall. The mode matters. Opening with "w" erases the file before writing — an easy way to
destroy data you meant to keep. Use "a" (append) to add to the end of an existing file, and "r"
to read without any risk of changing it.


## 5.2. Where open looks for a file


open("notes.txt") names the file but not the folder, so where does Python look? A bare filename is
resolved relative to the current working directory — the folder your terminal is sitting in when
you launch the program, which is not necessarily the folder the .py file lives in. When you run
python script.py from your project folder and the data file sits in that same folder, the two agree
and open finds it. Run the very same program from a different folder and open("notes.txt") now
looks in that folder instead, and fails even though the file is plainly there in your editor. This is why
the VS Code terminal, which opens already pointing at your project folder (Chapter 1), keeps the
common case simple: keep a program and the files it reads together, and run it from their folder. To
place a file in a subfolder, name the path: open("data/notes.txt").
19

Version of 13 September 2026 Module page
Pitfall. When open raises FileNotFoundError but you can see the file right there in the editor,
the file almost always exists — Python simply looked somewhere else. It searches the current
working directory, so a bare name only finds the file when you run the program from the folder
that holds it. Check where your terminal is (run pwd on macOS/Linux, or cd on Windows), then
either run the program from that folder or hand open the full path.


## 5.3. Handling errors with try / except


What if the file is not there? Or a line you expected to be a number turns out to be the word
“unknown”? An exception is Python’s way of signalling that something went wrong; if you do
nothing about it, it stops the program. The try / except block lets you catch the problem and respond
instead of crashing:
try:
with open("data.csv", "r") as f:
content = f.read()
except FileNotFoundError:
print("No data file found; starting empty.")
content = ""
Python tries the first block; if the named exception occurs, it runs the except block instead. You can
handle different problems differently by naming the exception you expect:
try:
value = int(line)
except ValueError:
print(f"Skipping line that is not a number: {line!r}")
The !r in that message earns a word, because we lean on it again when debugging. It asks for the
value’s repr — its programmer-facing form, with the quotation marks kept and normally-invisible
characters made visible. Where {line} prints unknown, {line!r} prints 'unknown\n', exposing the
trailing newline that reading a file leaves on the end of every line. That invisible newline is a classic
source of confusion: "yes\n" == "yes" is False, which is why you .strip() a line before comparing
it. When a value misbehaves and you cannot see why, printing it with !r is the quickest way to see
what it really holds.


## 5.4. Raising an exception yourself


You can also raise an exception on purpose, to signal that something your own code was asked to do
makes no sense. Use the raise keyword with the kind of error and a message:
def withdraw(balance, amount):
if amount > balance:
raise ValueError("insufficient funds")
return balance - amount
20

Version of 13 September 2026 Module page
If someone calls withdraw(100, 150), Python stops and reports a ValueError with your message —
unless the caller wrapped the call in a try / except to handle it. Raising and catching are two halves
of the same idea: one signals a problem, the other responds to it.
Pitfall. Resist the urge to write a bare except: that catches every error. It hides the very bugs
you most need to see — a typo in a variable name also raises an exception, and a blanket except
will quietly bury it. Catch the specific exception you expect, and let the unexpected ones surface.
Exercises
5.1. Write a program that writes the numbers 1 to 5, one per line, into a file numbers.txt, then
reads the file back and prints each line.
5.2. Modify the previous program to open the file a second time in append mode ("a") and add
the numbers 6 and 7. Read and print the file to confirm all seven numbers are there.
5.3. Write a program that tries to open a file missing.txt for reading and, if the file does not
exist, prints File not found instead of crashing.
5.4. Write a function safe_int(text) that returns int(text) if it can, and returns None (without
crashing) if text is not a valid number. Test it on "42" and on "hello".
5.5. Write a function sqrt_or_error(x) that returns the square root of x (use x ** 0.5) but raises
a ValueError with a clear message if x is negative.
Answers. (1) write with a loop, then read it back: open "numbers.txt" in mode "w" and inside the block for n in
range(1, 6): f.write(f"{n}\n"); then reopen in "r" and for line in f: print(line.strip()). It prints 1 to
5, one per line. (2) reopen the same file in mode "a" and write 6 and 7 the same way; reading it back now prints 1
through 7, because "a" adds to the end instead of erasing. (3) Wrap the open in try: ... except FileNotFoundError:
print("File not
found"). (4) try: return int(text) except ValueError: return None. (5) if x < 0: raise ValueError("cannot
take the square root of a negative number"), then return x ** 0.5.
21
