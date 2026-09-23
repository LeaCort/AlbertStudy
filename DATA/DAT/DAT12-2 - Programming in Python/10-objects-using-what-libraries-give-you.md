# 10. Objects: using what libraries give you

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 30-32*

Version of 13 September 2026 Module page
10. Objects: using what libraries give you
You have been using objects since the first chapter, without the name. When you wrote
"ada".upper() or scores.append(64), the value to the left of the dot was an object, and the name to
the right was something that object provides. An object is a value that bundles data together with
behaviour: the data are its attributes, the behaviour its methods. Almost every value a library hands
back is an object, so using a library well is, in large part, knowing how to read the objects it returns.
You will not define your own objects in this course — that comes in a later one — but you will use
them constantly, and this short chapter is the lens for doing so.


## 10.1. Attributes and methods


Two kinds of thing hang off an object, both reached with a dot, and the whole difference between
them is whether you add parentheses.
An attribute is a piece of data stored on the object. You read it with a dot and no parentheses —
you are just looking at a value that is already there:
word = "Python"
# an attribute is data you read; a method is an action you run (below)
A method is a function that belongs to the object — a piece of behaviour. You call it with a dot
and parentheses, because calling it does some work and usually hands back a result:
"ada".upper() # 'ADA' -- a method: () because it does something
[3, 1, 2].sort() # sorts the list in place
"a,b,c".split(",") # ['a', 'b', 'c'] -- a method that returns a new value
The parentheses are the whole signal (Figure 4): reach for an attribute and you get the stored value;
call a method and you get the result of running it.
response.status_code 200
no () → an attribute (data you read)
response.json() a dict
with () → a method (behaviour you run)
Figure 4: The dot reaches two kinds of thing, and the parentheses tell them apart:
response.status_code reads an attribute — the stored number 200 — while response.json() calls
a method, which runs and returns a dict.
Pitfall. Confusing the two fails loudly, which is a mercy. Add parentheses to an attribute and
Python tries to call a value that is not a function: response.status_code() raises TypeError:
'int' object is not callable. Forget the parentheses on a method and you get the method
itself instead of its result — printing response.json shows something like <bound method
Response.json ...>, not your data. So when a value prints as <bound method ...>, you left off
a pair of parentheses.
30

Version of 13 September 2026 Module page


## 10.2. Finding out what an object offers


You do not memorise an object’s attributes and methods; you look them up. Three tools answer the
questions “what is this?” and “what can it do?”:
• type(x) names the object’s kind. Later you will see type(response) report <class
'requests.models.Response'> — a Response object, defined by the requests library.
• The library’s documentation lists what that kind offers and is the real source of truth; you
practised reading it in Chapter 7.
• dir(x) lists the names available on an object — a quick reminder when the documentation is not
in front of you.
Between them, type tells you what you are holding and the documentation tells you what you
may do with it.


## 10.3. The object you are about to meet


You have already used objects returned by libraries without dwelling on it: in the last chapter,
csv.DictReader(f) handed you an object you looped over, and csv.DictWriter(...) handed you
one whose .writeheader() and .writerow() methods did the writing. The next chapter makes the
pattern explicit. It sends a request over the internet with the requests library, and what comes back
is a single object — a Response — carrying everything about the server’s reply. You read part of its
answer as attributes and run part as methods (Table 4):
On a response Kind What it gives you
response.status_code attribute the reply’s status number, e.g. 200
response.ok attribute True when the status means success
response.url attribute the address that was actually fetched
response.json() method parses the reply’s JSON into a dict or list
Table 4: A few of the members of a requests Response object. The attributes are data already
computed for you; the method runs work when you call it. The next chapter puts them to use.
The pattern is the whole lesson: a library hands you an object, you read its attributes for data and call
its methods for behaviour, and its documentation tells you which name is which. Every library you
meet afterwards works this way.
Exercises
10.1. For each expression, say whether the name after the dot is an attribute or a method, and how
you can tell without running it: text.upper(), response.status_code, scores.append(5),
response.url.
10.2. A response object has a status_code attribute holding 200. Explain what
response.status_code() does and why, then write the correct expression to read the status.
10.3. You are handed an object r from a library you have never used, and you want to know
what it is and what it offers. Name the one function that reports its kind, and the one place that
authoritatively lists its methods.
10.4. A classmate writes data = response.json and is puzzled that data prints as <bound method
Response.json ...> instead of the parsed data. What did they forget, and what is the fix?
31

Version of 13 September 2026 Module page
Answers. (1) text.upper() and scores.append(5) are methods — they carry parentheses and perform an action;
response.status_code and response.url are attributes — no parentheses, just stored data. (2) It tries to call the
integer 200 as if it were a function and raises TypeError: 'int' object is not callable; drop the parentheses and
read response.status_code. (3) type(r) reports its kind; the library’s documentation authoritatively lists its methods
(dir(r) gives a quick reminder). (4) They forgot the parentheses that call the method; writing response.json() runs
it and returns the parsed data.
32
