# 3. Control flow

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 14-16*

Version of 13 September 2026 Module page
3. Control flow
So far our programs run straight down, from top to bottom. Control flow lets a program choose what
to do and repeat work — the difference between a fixed list of instructions and an actual algorithm.


## 3.1. Conditionals: if / elif / else


A conditional runs a block of code only when a condition is True. Consider turning a numeric score
into a letter grade:
score = 78
if score >= 90:
grade = "A"
elif score >= 80:
grade = "B"
elif score >= 70:
grade = "C"
else:
grade = "F"
print(grade) # C
Python checks each condition in order and runs the first block whose condition is true, skipping the
rest. elif (short for “else if”) chains further alternatives; the final else catches everything that no
condition matched.
Pitfall. Indentation is not decoration in Python — it is the syntax. The indented lines are
the ones that “belong to” the if; if you get the indentation wrong, the meaning changes or the
program refuses to run. Use four spaces per level and be consistent.
Pitfall. Do not confuse = with ==: a single = assigns a value, while == compares two values.
Writing if score = 90 is an error; you mean if score == 90. This is one of the most common
early mistakes.
A condition can test several things at once with the logical operators from Section 2.3. Suppose only
an adult holding a ticket may enter:
if age >= 18 and has_ticket:
print("Welcome")
else:
print("Entry refused")
Reach for and and or rather than nesting one if inside another: the compound condition says the
same thing in a single readable line.
14

Version of 13 September 2026 Module page


## 3.2. Loops: for and while


A for loop repeats once for each item in a collection. This is the loop you will use most often, because
most work is “do the same thing to every item”:
scores = [90, 85, 72]
total = 0
for s in scores:
total = total + s
print(total) # 247
To repeat a fixed number of times, loop over range(n), which produces the numbers 0, 1, ..., n-1:
for i in range(3):
print(i) # prints 0, then 1, then 2
A while loop repeats as long as a condition stays true. Use it when you do not know in advance how
many repetitions you will need:
balance = 100
years = 0
while balance < 200:
balance = balance * 1.05 # 5% growth per year
years = years + 1
print(years) # 15
Pitfall. A while loop whose condition never becomes false runs forever — an infinite loop.
Make sure something inside the loop changes a value that the condition depends on. If a program
seems stuck, press Ctrl+C in the terminal to stop it, then look at the variable your condition tests
and check that the loop body really moves it toward stopping.


## 3.3. Skipping and stopping: continue and break


Two keywords give a loop finer control. continue skips the rest of the current turn and moves straight
to the next item; break stops the loop entirely.
for n in [4, -1, 9, -3, 16]:
if n < 0:
continue # ignore negatives, go to the next number
print(n) # prints 4, 9, 16
for n in [4, 8, 15, 16, 23]:
if n > 10:
break # stop at the first number over 10
print(n) # prints 4, 8
15

Version of 13 September 2026 Module page


## 3.4. Getting the position with enumerate


Sometimes you need both each item and its position. enumerate gives you both as a pair, which you
unpack (as you did with tuples) into two variables:
names = ["Ada", "Bo", "Cy"]
for i, name in enumerate(names):
print(f"{i}: {name}") # 0: Ada, then 1: Bo, then 2: Cy


## 3.5. Iterating over a dictionary


Dictionaries can be looped over too. Looping over a dict directly gives its keys; its .items() method
gives each key and value together as a pair, which you unpack — a pattern you will use constantly
when processing data:
prices = {"apple": 2.5, "pear": 3.0}
for fruit, price in prices.items():
print(f"{fruit} costs {price} euros")
Exercises
3.1. Write a program that, for every number from 1 to 20, prints "even" or "odd" next to the
number. (Hint: use range and the % operator.)
3.2. Given scores = [55, 90, 40, 70, 88], use a for loop to count how many scores are at
least 60, and print the count.
3.3. Given ages = [15, 18, 21, 17, 40], loop over the list and print only the ages that are at
least 18 and at most 30, using an and condition.
3.4. Using a while loop, find the smallest number of whole years it takes an investment of 1000
to exceed 2000 while growing 7% each year. Print that number.
3.5. Loop over words = ["ok", "", "hi", "", "go"] and print only the non-empty words, using
continue to skip the empty ones.
3.6. Given the dict ages = {"Ada": 19, "Bo": 22, "Cy": 20}, print one line per person in the
form Name is Age years old, then print the average age.
Answers. (1) Use for n in range(1, 21): and test if n % 2 == 0:. (2) count is 3 (the scores 90, 70, 88). (3) test if
age >= 18 and age <= 30:; it prints 18 and 21. (4) 11 years. (5) prints ok, hi, go. (6) average is 20.33...; compute it
by summing the values and dividing by len(ages).
16
