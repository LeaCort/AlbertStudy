# 4. Functions

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 17-18*

Version of 13 September 2026 Module page
4. Functions
As soon as you find yourself writing the same lines twice, you want a function: a named, reusable
block of code that takes inputs and (usually) returns an output. Functions are how programs are kept
small enough to understand — each one is a box you can reason about without looking inside the
others.


## 4.1. Defining and calling


Suppose we keep converting temperatures from Celsius to Fahrenheit. We write the rule once:
def to_fahrenheit(celsius):
return celsius * 9 / 5 + 32
print(to_fahrenheit(100)) # 212.0
print(to_fahrenheit(0)) # 32.0
def introduces a function; to_fahrenheit is its name; celsius is a parameter, a placeholder filled in
when you call the function. return hands a value back to whoever called it. A function that has no
return hands back the special value None, which stands for “no value”.


## 4.2. Typed parameters and docstrings


Python lets you annotate what types a function expects and returns. These type hints do not change
how the code runs, but they document your intent and let your editor catch mistakes:
def to_fahrenheit(celsius: float) -> float:
"""Convert a temperature from Celsius to Fahrenheit."""
return celsius * 9 / 5 + 32
The : float marks the parameter’s expected type, and -> float marks the type of the returned value.
The triple-quoted string just under the def line is a docstring: a sentence saying what the function
does. It is not only a note to yourself — tools display it as the function’s official help, and running
help(to_fahrenheit) prints it. Write one for every function.


## 4.3. Scope


A variable created inside a function exists only inside it — its scope is local to that one call. This
is a feature, not a limitation: it means a function’s inner workings cannot accidentally overwrite a
variable somewhere else.
def square(x):
result = x * x # 'result' lives only inside square
return result
print(square(5)) # 25
print(result) # NameError: 'result' is not defined out here
17

Version of 13 September 2026 Module page
Pitfall. The opposite direction is a classic trap. A function can read a variable defined outside
it, so a function that forgets to take a value as a parameter may appear to work by silently using an
outside variable — until that outside variable changes and the function’s behaviour changes with
it, mysteriously. Pass everything a function needs as parameters; do not rely on values reaching
in from the surrounding code.
Exercises
4.1. Write a function area_of_rectangle(width, height) that returns the area. Add type hints
and a docstring. Call it with a few values and print the results.
4.2. Write a function is_passing(score) that returns True if the score is at least 60 and False
otherwise. Use it inside a loop over a list of scores to print each score and whether it passed.
4.3. Write a function initials(first, last) that returns a person’s initials as a two-letter string,
for example "AL" for "Ada", "Lovelace".
4.4. Explain, in one sentence, why the program below prints None instead of the discounted price,
and fix it so the function returns that price.
def apply_discount(price):
discounted = price * 0.9
print(apply_discount(100))
Answers. (1) the full definition carries both a type-hinted signature and a docstring:
def area_of_rectangle(width: float, height: float) -> float:
"""Return the area of a rectangle."""
return width * height
(2) return score >= 60. (3) e.g. return first[0].upper() + last[0].upper(). (4) The function has no return, so it
hands back None, which is what print shows. Fix: add return discounted as the function’s last line.
18
