# 5. Structuring an AI Project Repository

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 18-19*

Version of 13 September 2026 Module page
5. Structuring an AI Project Repository
A repository is not just a bag of files; its layout is part of how a project communicates. A newcomer
should be able to open Ada’s folder and know where the code lives, where the prompts live, where
results are written, and how to run the whole thing from scratch. A conventional structure makes
that possible.


## 5.1. The standard layout


Across data and AI projects a small set of top-level directories recurs. Using the conventional names
means any collaborator knows where to look without being told.
Definition 3 (Standard AI-project directories).
• src/ — the source code: the Python modules that do the work.
• prompts/ — the prompt templates, kept as their own files, separate from code, so they can be
edited and reviewed on their own.
• outputs/ — where the program writes its results. Generated, not hand-written.
• notebooks/ — exploratory Jupyter notebooks: experiments and analysis, kept apart from the
production code in src/.
Built this way, Ada’s tracked files form a layout a stranger can read at a glance:
ada/
├── README.md
├── notebooks/
│ └── .gitkeep
├── outputs/
│ └── .gitkeep
├── prompts/
│ └── qa.txt
└── src/
└── qa.py
Remark. outputs/ holds files your program generates, so its contents usually should not be
committed — they can always be regenerated, and committing them bloats the history. You still
want the empty folder to exist, so a common trick is to commit a placeholder file named .gitkeep
(Git does not track empty folders, only files). To keep generated results out of the history, list
them in a .gitignore file, which tells Git which paths to ignore.
Separating prompts from code deserves its own note, because it is specific to AI projects. A prompt
is content you will revise constantly and want to review on its own, like any other text; burying it
inside a Python string mixes two concerns and makes both harder to change. Keeping prompts in
prompts/ as plain files, loaded by the code at run time, lets you edit a prompt, see its diff, and review
it in a PR without touching the code around it.
18

Version of 13 September 2026 Module page


## 5.2. A README that lets a stranger run it


The single most important file for a newcomer is the README.md. Its job is concrete: a person who has
never seen the project should be able to follow it and run the project from scratch. That means it
must cover, in order, everything between cloning the repository and seeing a result.
Framework 3 (What a runnable README contains).
1. What it is — one or two sentences on what the project does.
2. Prerequisites — what must already be installed (e.g. Python 3.11, Git).
3. Setup — the exact commands to create the environment and install dependencies (e.g. create
a virtual environment, pip install -r
requirements.txt).
4. Configuration — any secrets or settings needed, such as an API key, and how to provide
them (see Chapter 10) — never the secret itself.
5. How to run it — the exact command that produces a result, and what result to expect.
Principle 4 (The stranger test). A README passes when a competent stranger, given only
your repository and the README, can go from nothing to a working result without asking you
a single question. If any step lives only in your head, the README is not done.
Pitfall. The commonest README failure is the missing step you never notice because your
machine already has it — an installed package, an environment variable, a data file you down-
loaded weeks ago. The only reliable test is to run your own instructions in a clean environment
(a fresh virtual environment, or a freshly cloned copy) and fix every step that fails.
Exercises
5.1. Build the standard layout for a small AI project: create src/, prompts/, outputs/, and
notebooks/, put a placeholder in the folders that would otherwise be empty, and commit. Add
a .gitignore that ignores the generated contents of outputs/ (but keeps the folder). Show git
status is clean after generating a file into outputs/.
5.2. Take a prompt currently written as a Python string inside a script and move it into a file
under prompts/, loading it from the file at run time. Explain, in two sentences, what this makes
easier for a reviewer.
5.3. Write a README for a project that reads a document and a question and prints an answer,
covering all five parts of the runnable-README framework. Then hand it to a classmate who
has not seen the project and have them try to run it from your README alone; list every step
they got stuck on.
Answers. (2) Moving the prompt into prompts/ lets a reviewer see a prompt change as its own diff, isolated from
the surrounding code, and edit or comment on the wording without reading Python. It separates two concerns —
instructions to the model and program logic — that change for different reasons.
19
