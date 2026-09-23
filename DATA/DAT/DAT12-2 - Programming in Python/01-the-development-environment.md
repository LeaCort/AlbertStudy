# 1. The development environment

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 6-8*

Version of 13 September 2026 Module page
1. The development environment
Before writing Python you must be able to run it. A program is just text saved in a file; what turns
that text into behaviour is the Python interpreter, a program already installed (or installable) on
your computer that reads your whole file and then carries out its instructions from top to bottom.


## 1.1. Installing Python and an editor


You need two things: the Python interpreter, and a good editor to write code in.
The interpreter. Download Python from the official site, python.org, and run the installer for your
operating system. On Windows, tick the box labelled Add Python to PATH during installation — this
is what lets you type python in a terminal later. To confirm the install worked, open a terminal (see
below) and type:
python --version
It should print a version number beginning with 3, such as Python 3.12.2.
The editor. You could write Python in any text editor, but a code editor helps because it understands
the language. We use Visual Studio Code (VS Code), a free editor from code.visualstudio.com. It
colours your code so its structure is visible at a glance, underlines mistakes before you run anything,
and includes a built-in terminal so you never leave the window to run your program. After installing
it, install its official Python extension: open the Extensions panel (the icon showing four squares in
the left bar), search for “Python”, and click Install on the one published by Microsoft. That extension
brings the language-aware features to life.


## 1.2. The terminal and your first script


A terminal (also called a command line) is a window where you type commands as text instead
of clicking buttons. In VS Code, open one with the menu Terminal → New Terminal it opens at the
bottom of the window, already pointing at your project folder.
Let us run a program. In VS Code, use File → Open Folder to open a folder for this course, then create
a new file in it called hello.py containing one line:
print("Hello, world!")
The print function displays whatever you put in its parentheses. Now, in the terminal, type:
python hello.py
The terminal prints Hello, world!. That is the whole loop you will repeat thousands of times: edit
a file, run it from the terminal, read the output. The word python names the interpreter; hello.py is
the argument you hand to it — the file to execute.
6

Version of 13 September 2026 Module page
Remark. On some computers the interpreter is called python3 rather than python, because an
older Python 2 still exists under the plain name python. If python reports a version starting with
2, use python3 in every command in this book.


## 1.3. Packages and pip


Real programs use code that other people have written and shared, packaged into units called
packages. You install a package with pip, the tool that comes with Python for exactly this:
pip install requests
This downloads the requests package (which we use in the last chapter) and makes it available to
import in your programs. But where does that package go, and what happens when two projects need
two different versions of it? The answer is a virtual environment, which we set up next and then
return to in depth in Chapter 8.


## 1.4. Virtual environments


If pip installed every package into one shared location, two projects that needed two different
versions of the same package would collide. A virtual environment avoids this: it is a private,
project-local folder holding its own copy of the interpreter and its own packages. You create one per
project, right after you create the project folder:
python -m venv .venv # create an environment in a folder named .venv
source .venv/bin/activate # activate it (macOS / Linux)
.venv\Scripts\activate # activate it (Windows)
Once activated, your terminal prompt usually shows (.venv) at the start of the line, and any pip
install now writes into that folder only. For now, simply learn the habit: every project gets its
own environment. Chapter 8 explains why this matters.
Pitfall. Forgetting to activate the environment is the most common first-week confusion. If
import requests fails with ModuleNotFoundError even though you just installed requests, check
that (.venv) appears in your prompt — you almost certainly installed the package into one
environment and ran your program in another. Activate the environment, then install again.
Exercises
1.1. Install Python and VS Code on your computer. In a terminal, run python --version and
write down the version number it prints.
1.2. Create a folder for this course, open it in VS Code, and create a file greeting.py that prints a
greeting containing your own name. Run it from the terminal and confirm the greeting appears.
1.3. Inside your course folder, create and activate a virtual environment named .venv. Confirm
that (.venv) appears in your prompt, then install the requests package with pip.
7

Version of 13 September 2026 Module page
1.4. With the environment still active, run pip install cowsay, then create a file moo.py
containing the two lines import cowsay and cowsay.cow("Hello"). Run it. Then deactivate the
environment with deactivate, run the file again, and read the error you get. Explain in one
sentence why it now fails.
Answers. (1)–(3) have no single answer; you have succeeded when each command runs without error and prints what
is described. (4) After deactivate, you are no longer in the environment where cowsay was installed, so Python cannot
find the package and raises ModuleNotFoundError.
8
