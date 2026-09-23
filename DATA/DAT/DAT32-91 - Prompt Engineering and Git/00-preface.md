# Preface

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 4*

Version of 13 September 2026 Module page
Preface
You arrive at this course already able to write Python. You can define a function with typed parame-
ters, raise and catch exceptions, open a file and read or write it, and make an HTTP GET request
whose JSON reply you parse into a dictionary. That is the whole toolbox this book assumes. You have
never used Git, and you have never called a language model from code; by the end you will do both
as a matter of habit.
Two crafts run side by side through these pages. The first is version control with Git: the discipline
of recording your work in small, named, reversible steps that a teammate can read, run, and build
on. The second is prompt engineering: the discipline of writing instructions for a large language
model precisely enough that the same request gives you a useful answer again and again. Neither is
a body of facts to memorise. Both are habits of mind that only become real through use, so a single
project runs through every chapter.
That project is Ada, a small document question-answering assistant: you give it a document and
a question, and it answers using only what the document says. Ada is deliberately modest. What
matters is not its cleverness but the path you walk building it — every change committed, every
prompt tested, every failure named and handled. We build Ada the way professionals build real
systems, and the tools you practise on it are the tools you will reach for on the first day of any data
or AI job.
A note on running the code. The Git chapters need only the git program, which you install once
from git-scm.com. The model-behaviour chapters use small, self-contained Python scripts you can
run with nothing but the standard library and, in two places, numpy; install it into your virtual
environment with pip install numpy exactly as you learned to install any package. The chapter on
calling an API uses the anthropic and python-dotenv packages (pip install anthropic python-
dotenv). Every printed output in this book is the real output of a script under assets/, so you can
reproduce each one yourself.
4
