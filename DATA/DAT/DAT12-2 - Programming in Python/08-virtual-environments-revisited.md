# 8. Virtual environments, revisited

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 25-26*

Version of 13 September 2026 Module page
8. Virtual environments, revisited
We created a virtual environment back in the first chapter; now, with packages to isolate, we can say
why it matters.


## 8.1. What an environment isolates


A virtual environment isolates which packages, at which versions a project sees. Project A can use
version 1 of a library while project B uses version 2, with no conflict, because each has its own .venv
folder (Figure 2). It does not isolate your files or your data — only the installed packages and the
interpreter used to run them.
Project A Project B
.venv .venv
requests 2.28 requests 2.31
Figure 2: Each project keeps its own .venv with its own package versions, so the two never collide
— even when they need different versions of the same library.


## 8.2. Reproducing from requirements.txt


Here is where isolation pays off. Inside an activated environment, freeze the exact versions you are
using into a file:
pip freeze > requirements.txt
The file lists every installed package and its exact version:
certifi==2026.7.22
charset-normalizer==3.5.1
idna==3.19
requests==2.32.5
urllib3==2.7.0
Anyone — a teammate, a grader, or you in six months on a new computer — can now recreate the
same set of packages:
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt # -r = install the packages listed in this file
This is the heart of reproducibility, the property this whole course builds toward. A program
together with its requirements.txt is a reliable recipe: install these packages and you will get the
same result its author did.
25

Version of 13 September 2026 Module page
Remark. One honest limit: requirements.txt records your packages and their versions, but
not the version of Python itself, nor your operating system. Two computers with very different
Python versions can still behave differently. So, next to your requirements file, also write down
the Python version you used (the one python --version prints). Keep your program and its
requirements.txt together — these are what you share and what you back up; you never need
to keep the .venv folder itself, which is large, computer-specific, and can always be rebuilt from
the requirements file.
Exercises
8.1. In an activated environment with requests installed, run pip freeze > requirements.txt
and open the file. How many packages are listed, and why are there more than the one you
installed?
8.2. Create a second folder with its own fresh virtual environment, and use the
requirements.txt from the first to install the same packages with pip install -r
requirements.txt. Confirm import requests works there.
8.3. Explain, in two sentences, why you should keep and share requirements.txt but not
the .venv folder.
8.4. Your colleague sends you a program and its requirements.txt, but it behaves differently on
your computer. Name one thing the requirements file does not capture that could explain the
difference.
Answers. (1) Five in a typical install (requests plus certifi, charset-normalizer, idna, and urllib3): pip installs
requests’s own dependencies automatically, so the file lists more packages than the one you asked for. (2) has no
single answer; you have succeeded when pip install -r
requirements.txt finishes in the fresh environment and a program with only import requests then runs there
without a ModuleNotFoundError. (3) requirements.txt is small and lets anyone rebuild the environment; .venv is
large, specific to your computer, and fully rebuildable, so keeping it wastes space. (4) The Python interpreter version
(or the operating system).
26
