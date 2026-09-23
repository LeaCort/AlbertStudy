# 2. Core data types

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 9-13*

Version of 13 September 2026 Module page
2. Core data types
Every value in Python has a type, and the type determines what you can do with the value: you can
divide numbers but not words, you can capitalise words but not numbers. Getting the type right is
the first thing to get right.


## 2.1. Numbers: int and float


There are two kinds of number. An int is a whole number — 0, 42, -7 — with no limit on its size.
A float is a number with a decimal point — 3.14, -0.5, 2.0 — stored in a fixed amount of memory,
which has a consequence we will flag shortly.
apples = 12 # int
price = 2.50 # float
total = apples * price # 30.0 -> a float, because price is a float
The = sign here is assignment: it stores the value on the right in the variable named on the left, so
that the name stands for the value from then on. Notice that mixing an int and a float gives a float.
Division always gives a float, even when it divides evenly:
10 / 2 # 5.0 (float) -- "true" division
10 // 3 # 3 (int) -- "floor" division, drops the remainder
10 % 3 # 1 (int) -- "modulo", the remainder
Pitfall. Floats cannot represent every decimal exactly. Typing 0.1 + 0.2 gives
0.30000000000000004, not 0.3. This is not a Python bug; it is how fractional numbers are stored
in the binary system every computer uses. The practical rule: never test two floats for exact
equality. Instead of if x == 0.3, ask whether they are close enough, for example if abs(x -
0.3) < 1e-9 (where abs is the absolute value and 1e-9 means 10−9, a tiny tolerance).


## 2.2. Text: str


A string is a sequence of characters, written between quotation marks — single or double, your
choice, as long as the opening and closing marks match:
name = "Ada"
greeting = "Hello, " + name + "!" # 'Hello, Ada!' -- "+" joins strings
Because a string is an ordered sequence, you can reach into it by position and take a slice — a run
of consecutive characters — exactly as you will do with lists in the next section:
word = "Python"
word[0] # 'P' -- indexing, counting from 0
word[-1] # 'n' -- and from the end
word[0:3] # 'Pyt' -- a slice: positions 0, 1, 2 (the end is excluded)
9

Version of 13 September 2026 Module page
Strings come with many useful built-in operations, called methods, which you reach with a dot after
the string:
" Ada ".strip() # 'Ada' -- remove surrounding spaces
"ada".upper() # 'ADA'
"a,b,c".split(",") # ['a', 'b', 'c'] -- a list (see below)
The cleanest way to build a string out of values is an f-string: a string written with the letter f just
before the opening quote, where anything inside {} is replaced by its value.
apples = 12
print(f"I have {apples} apples.") # I have 12 apples.
print(f"Each costs {2.5:.2f} euros.") # Each costs 2.50 euros.
The :.2f after the value is a format instruction: it means “show this number as a float with 2 digits
after the decimal point”.


## 2.3. The booleans: bool


A bool is one of exactly two values, True or False. Booleans are the answers to yes/no questions, and
they are what conditionals (next chapter) act on:
12 > 10 # True
"a" == "b" # False
3 == 3.0 # True -- equal in value, even across int and float
Here == (two equals signs) compares two values and gives a bool. Do not confuse it with a single =,
which assigns. This distinction causes many early errors.
Most real questions have more than one part — “is the visitor an adult and does she hold a ticket?”
— so booleans are built to combine. The three logical operators and, or, and not make a compound
answer out of simpler ones:
age = 20
has_ticket = True
age >= 18 and has_ticket # True -- True only when BOTH sides are true
age < 18 or has_ticket # True -- True when AT LEAST ONE side is true
not has_ticket # False -- flips a bool to its opposite
and is True only when both of its sides are true; or is True when at least one side is true; not reverses
the single bool that follows it. Their complete behaviour fits in one small table you can always fall
back on (Table 1).
10

Version of 13 September 2026 Module page
a b a and b a or b not a
True True True True False
True False False True False
False True False True True
False False False False True
Table 1: The truth table of and, or, and not. Each row is one choice of a and b: and needs both true,
or needs at least one true, and not a depends on a alone (it ignores b).
Pitfall. Each side of and/or must be a complete condition. To test whether x equals one of two
values, you cannot write x == 1 or 2: Python reads it as (x == 1) or (2), and since any non-
zero number counts as true, the whole test is always true. Spell both comparisons out in full: x
== 1 or x == 2.


## 2.4. Collections: list, tuple, dict


Three types hold many values at once, and choosing between them is one of the recurring judgement
calls of Python.
A list is an ordered, changeable sequence, written with square brackets. You reach an element by its
index, counting from zero. You may also count from the end using negative indices, where -1 is the
last element (Figure 1):
scores = [90, 85, 72]
scores[0] # 90 -- first element
scores[-1] # 72 -- last element
scores.append(64) # scores is now [90, 85, 72, 64]
scores[1] = 88 # change in place -> [90, 88, 72, 64]
scores[1:3] # [88, 72] -- a slice, just like a string
len(scores) # 4 -- how many elements
index 0 1 2 3
90 88 72 64
from end −4 −3 −2 −1
Figure 1: Indexing the list [90, 88, 72, 64]. The top number is the usual index, counting from 0;
the bottom number is the negative index, counting back from the end. So scores[1] and scores[-3]
name the same element, 88.
A tuple is an ordered sequence that cannot change once created, written with parentheses. Use it
for a fixed group of values that belong together — a coordinate, a colour written as three numbers
— where changing one without the others would be a mistake:
point = (3, 4)
point[0] # 3
point[0] = 9 # TypeError: a tuple cannot be changed
11

Version of 13 September 2026 Module page
A tuple can be unpacked into several variables at once, one per element — a small convenience you
will use constantly:
point = (3, 4)
x, y = point # x is now 3, y is now 4
A dict (dictionary) stores key → value pairs and looks things up by key rather than by position. It
is the right type whenever your data is “labelled”:
student = {"name": "Ada", "age": 19}
student["name"] # 'Ada' -- look up by key
student["age"] = 20 # change a value
student["city"] = "Paris" # add a new pair
Type Ordered? Changeable? Use it for
list yes yes a sequence you grow or edit
tuple yes no a fixed group that belongs together
dict yes (insertion order) yes data looked up by a label
str yes no text
Table 2: Choosing a collection type. “Changeable” is the word programmers shorten to mutable
“unchangeable” is immutable.
Remark. You can ask any value its type with type(x), and convert between types with the
type’s name: int("42") turns the string "42" into the number 42, and str(42) does the reverse.
Reading a number from a file always gives you a string first — converting it is a step beginners
routinely forget.
Exercises
2.1. Predict the value and type of each of 7 / 2, 7 // 2, and 7 % 2. Then check your predictions
by printing them.
2.2. Create a variable name holding your first name and a variable age holding your age as an int.
Use an f-string to print exactly: My name is <name> and next year I will be <age+1>.
2.3. Given temperatures = [18, 21, 19, 23, 20], write expressions that give (a) the first
temperature, (b) the last temperature using a negative index, and (c) the number of temperatures.
Then append 22 to the list and change the second element to 25.
2.4. A dict book = {"title": "Python", "pages": 300} describes a book. Add a key "author"
with your name as its value, change "pages" to 320, and print the title using an f-string.
2.5. You read the two strings "90" and "72" from a file. Explain why "90" + "72" gives "9072",
and write the expression that instead gives the number 162.
2.6. For each item below, name the most fitting core type and say in one short phrase why it
beats the others: (a) the three numbers of an RGB colour, which must always travel together; (b)
a phone book that maps each name to a number; (c) a to-do list you keep adding items to; (d)
whether a user is currently logged in.
2.7. Let a = True and b = False. Predict the value of a and b, a or b, not a, and a and not b,
then check your predictions by printing them.
12

Version of 13 September 2026 Module page
Answers. (1) 3.5 float, 3 int, 1 int. (2) e.g. print(f"My name is {name} and next year I will be {age + 1}.").
(3) temperatures[0], temperatures[-1], len(temperatures), then temperatures.append(22) and temperatures[1]
= 25. (4) book["author"] = "...", book["pages"] = 320, print(f"{book['title']}"). (5) + on two strings joins
them, so it makes the text "9072"; convert first: int("90") + int("72"). (6) (a) a tuple — a fixed group that belongs
together and should not change; (b) a dict — data looked up by a label (the name) rather than by position; (c) a list
— an ordered sequence you grow; (d) a bool — a single yes/no value. (7) a and b is False (both must be true), a or
b is True (one is enough), not a is False, and a and not b is True (both a and not b are true).
13
