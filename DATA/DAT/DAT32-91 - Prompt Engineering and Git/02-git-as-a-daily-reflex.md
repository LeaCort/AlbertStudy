# 2. Git as a Daily Reflex

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 7-11*

Version of 13 September 2026 Module page
2. Git as a Daily Reflex
The point of this chapter is not only that you can commit, but that you commit often — after every
change small enough to describe in one line. We build the habit on Ada, one command at a time.


## 2.1. Starting a repository


You turn a plain folder into a repository once, with git init. Then you tell Git who you are, so it can
label your commits (do this once per machine):
git init -b main # start a repository, default branch named "main"
git config --global user.name "Mara"
git config --global user.email "mara@example.com"
Ada begins with a single file, README.md, describing what it is. The first thing to learn is that creating
a file does not put it under Git’s care. Ask Git what it sees:
$ git status
On branch main
No commits yet
Untracked files:
(use "git add <file>..." to include in what will be committed)
README.md
nothing added to commit but untracked files present (use "git add" to track)
git status is the command you will run more than any other; it always tells you where you stand.
Here it reports README.md as untracked — Git can see the file but is not yet recording its history.


## 2.2. The staging area, staging, and committing


Git does not commit every change you have made. It commits exactly what you have staged — placed
in a waiting area called the staging area (or index). You stage with git add, and only then does git
commit record it. This two-step design lets you commit a coherent slice of your work while leaving
other edits for a later commit.
Definition 2 (The three places a change can be).
• Working directory — your files as they are on disk right now.
• Staging area — the changes you have marked, with git add, to go into the next commit.
• Repository — the committed history: snapshots that are recorded for good.
git add moves a change from the working directory to the staging area; git commit moves
everything staged into the repository as one commit.
Stage the README and look again:
7

Version of 13 September 2026 Module page
$ git status
On branch main
No commits yet
Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file: README.md
Now the file is a change to be committed. Record it:
$ git commit -m "Add project README"
[main (root-commit) 6574970] Add project README
1 file changed, 3 insertions(+)
create mode 100644 README.md
Read that output. main is the branch you are on (Chapter 3). root-commit means this is the very
first commit, with no parent. 6574970 is the start of the commit’s hash — a unique fingerprint Git
computes from the commit’s contents; every commit has one, and it is how you refer to a commit later.
Method 1 (Stage and commit).
1. git status — see what has changed.
2. git add <files> — stage the changes you want in this commit (git add -A stages everything).
3. git commit -m "<message>" — record the staged changes as one commit, with a message
saying what changed.


## 2.3. Writing a message a teammate can read


The commit message is not paperwork; it is how the history explains itself. Write it in the imperative
mood — “Add project README”, not “Added” or “Adding” — as if completing the sentence “This
commit will…”. Say what changed and, when it is not obvious, why. A good message lets a
teammate (or you, in three months) understand a change without reading its code.
Pitfall. Messages like update, fix, stuff, or wip make a history useless: six months on, a screen
of fix tells you nothing. The message is the one part of a commit written for humans — spend
the ten seconds it takes to make it specific. Make the fallback answer explicit earns its place
in the log; fix prompt does not.


## 2.4. Committing as a reflex


The habit this course builds is to commit after every meaningful change — each time you have
done one describable thing — not once at the end of the day. Small commits are the whole point:
each is easy to describe, easy to review, and easy to undo without losing the changes around it. A
day’s work should be a readable sequence of small steps, not one giant “did stuff” commit.
8

Version of 13 September 2026 Module page
After Ada’s second commit — adding the source, prompt, and output folders — the log reads as that
kind of sequence. git log --oneline shows one line per commit, newest first:
$ git log --oneline
a58bf2f Add source, prompt, and output folders
6574970 Add project README
Each line is a hash and a message. That is a history you can navigate. The full form of one commit
shows what every commit carries — its hash, author, date, and message:
$ git log -1
commit a58bf2f246132d2ec953b169b7750e672d8e6c37
Author: Mara <mara@example.com>
Date: Mon Jan 1 02:00:00 2024 +0000
Add source, prompt, and output folders
Principle 2 (What to commit, and when). Commit when you have completed one thing
you can name in a sentence: a feature added, a bug fixed, a prompt tightened. If your commit
message needs the word “and”, you have probably bundled two commits into one.


## 2.5. Seeing your changes before you commit


Before staging, look at exactly what you changed with git diff. It shows the difference between
your working directory and the last commit, line by line: lines removed are marked -, lines added +.
$ git diff
diff --git a/prompts/qa.txt b/prompts/qa.txt
index 03c8f4a..ae5c06c 100644
--- a/prompts/qa.txt
+++ b/prompts/qa.txt
@@ -1,5 +1,5 @@
You answer questions using ONLY the document below.
-If the answer is not in the document, say "I don't know".
+If the answer is not in the document, say "I don't know" and stop.
Document:
{document}
Reading a diff is a core skill: it is how you check that a change is what you intended before you record
it, and how a teammate reviews your work later (Chapter 4). Here, one line of the prompt gained and
stop. — exactly the change intended, nothing else.


## 2.6. Pushing to GitHub


So far your history lives only on your machine. To back it up and to share it with a team, you push
it to a remote — a copy of the repository hosted elsewhere, most commonly on GitHub.
9

Version of 13 September 2026 Module page
Before your first push, GitHub has to be able to confirm the push is really coming from you. Since
2021 it no longer accepts your account password for this; you authenticate once per machine, and
every push afterwards is silent. The simplest way — and the one that also unlocks pull requests in
Chapter 4 — is GitHub’s official command-line tool, gh.
Method 2 (Authenticate to GitHub, once per machine).
1. Create a free account at github.com.
2. Install the gh command-line tool from cli.github.com.
3. Run gh auth login. Choose GitHub.com, the HTTPS protocol, and Login with a web
browser; gh opens a page where you confirm the login.
4. When it asks to authenticate Git with your GitHub credentials, say yes. This stores a
credential that git push itself reuses, so pushing never stops to ask who you are.
With that done once, create an empty repository on GitHub, then connect your local repository to it
and push:
git remote add origin https://github.com/mara/ada.git
git push -u origin main
git remote add origin <url> names the remote origin (the conventional name for your main
remote). git push -u origin main uploads your main branch and, thanks to -u, remembers the
pairing so that future pushes are just git push. From now on, the reflex extends by one step: commit
often, and push when you want your teammates — or your future self on another machine — to
have your latest work.
Pitfall. Pushing is not committing, and committing is not pushing. git commit records a
snapshot locally; git push sends committed snapshots to the remote. If you commit all day and
never push, your teammates see nothing and your work is not backed up. Make pushing part of
the reflex, not an afterthought.
Exercises
2.1. Create a new folder, run git init -b main, add a file hello.txt containing one line, and
make your first commit. Paste the output of git status at each stage (before add, after add, after
commit) and say in one sentence what changed between them.
2.2. Make three separate edits to hello.txt, committing after each with a clear, imperative
message. Then run git log --oneline and confirm you see three commits, newest first.
2.3. Change one line of hello.txt but do not stage it. Run git diff and identify, in the output,
the removed line and the added line.
2.4. Rewrite each of these commit messages to be specific and imperative: update, fixed the
thing, changes to prompt and readme. For the last, explain why it should probably be two
commits.
2.5. If you have not already, create a GitHub account and run gh auth login to authenticate this
machine. Then create a repository on GitHub, connect it as origin, and push your main branch.
Make one more local commit and push again with a bare git push. Explain what -u did on the
first push that made the second push shorter.
10

Version of 13 September 2026 Module page
Answers. (1) Before add: the file is untracked. After add: it is a change to be committed (staged). After commit: git
status reports a clean tree — the change is now recorded in the repository.
(4) update → e.g. Add greeting to hello.txt; fixed the thing → e.g. Correct off-by-one in line counter;
changes to prompt and readme → two commits, e.g. Tighten the fallback rule in the prompt and Document
the fallback rule in the README, because a message needing “and” bundles two describable changes that
should be recorded and reviewed separately.
11
