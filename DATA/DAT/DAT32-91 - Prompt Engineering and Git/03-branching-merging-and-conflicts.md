# 3. Branching, Merging, and Conflicts

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 12-15*

Version of 13 September 2026 Module page
3. Branching, Merging, and Conflicts
A branch lets you work on a change in isolation, without disturbing the working version, and then
fold that change back in when it is ready. It is the mechanism that makes collaboration safe: everyone
can develop in parallel, each on their own branch, and merge when done.


## 3.1. What a branch really is


Here is the idea that makes branches stop being mysterious: a branch is just a movable pointer to
a commit. main is a pointer; every commit you make on main moves that pointer forward to the new
commit. Creating a branch creates a second pointer at the same commit; committing on the new
branch moves it forward while main stays put. Figure 1 shows exactly this.
feature
F1
C1 C2
main
Figure 1: A branch is a movable pointer to a commit. main points at commit C2; creating feature and
committing on it adds F1 and moves the feature pointer to it, while main stays at C2. The two lines
of work now exist side by side.
You create a branch and switch onto it in one step with git switch -c:
git switch -c feature/few-shot # create branch "feature/few-shot" and move to it
On Ada, this branch adds a worked example to the prompt. After committing there, the history —
viewed across all branches — shows the new commit sitting on top:
$ git log --oneline --graph --all
* 7be2b2c Add a worked example to the prompt
* 80ac66d Make the fallback answer explicit
* a58bf2f Add source, prompt, and output folders
* 6574970 Add project README


## 3.2. Merging a branch back


When the branch’s work is ready, you bring it into main by merging. Switch to the branch you want
to merge into, then merge the other branch:
git switch main
git merge feature/few-shot
Because main had not moved since the branch left it, Git can simply slide the main pointer forward
to the branch’s commit. This is a fast-forward merge — no new commit is needed, because there is
nothing to reconcile:
12

Version of 13 September 2026 Module page
$ git merge feature/few-shot
Updating 80ac66d..7be2b2c
Fast-forward
prompts/qa.txt | 7 ++++++-
1 file changed, 6 insertions(+), 1 deletion(-)
Method 3 (Isolate a feature and merge it).
1. git switch -c <branch> — create a branch and move onto it.
2. Do the work: edit, git add, git commit — as many small commits as it takes.
3. git switch main — return to the branch you will merge into.
4. git merge <branch> — fold the feature’s commits into main.


## 3.3. When two branches change the same line: a conflict


A fast-forward works only when main did not move. Once two branches change the project — and
especially when they change the same line of the same file — Git cannot know which version
you want. It stops and asks you. This is a merge conflict, and resolving it by hand is a skill every
collaborator needs.
On Ada, two branches each rewrite the same sentence of the README: one promises “short,
grounded answers”, the other promises “answers with a source quote”. Merging the second into the
first produces a conflict:
$ git merge feature/tone
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
Git says the automatic merge failed and leaves it to you. git status confirms the file is “both
modified” and unmerged:
$ git status
On branch main
You have unmerged paths.
(fix conflicts and run "git commit")
(use "git merge --abort" to abort the merge)
Unmerged paths:
(use "git add <file>..." to mark resolution)
both modified: README.md
no changes added to commit (use "git add" and/or "git commit -a")
Git has not thrown your work away. It has written both versions into the file, wrapped in conflict
markers, so you can choose:
13

Version of 13 September 2026 Module page
# Ada — a document Q&A assistant
<<<<<<< HEAD
Ask questions and get answers with a source quote.
=======
Ask questions about a document and get short, grounded answers.
>>>>>>> feature/tone
Read the markers precisely, because you will see them often:
Framework 1 (Reading conflict markers).
• <<<<<<< HEAD begins the version from your current branch (here, main).
• ======= separates the two versions.
• >>>>>>> feature/tone ends the version from the branch you are merging in.
Everything between <<<<<<< and ======= is yours; everything between ======= and >>>>>>>
is theirs.
You resolve a conflict by editing the file into the version you actually want — keeping one side, the
other, or (usually) a sentence that combines both — and deleting all three marker lines. Here, the
honest result keeps both promises: “short, grounded answers with a source quote.” Then you stage
the resolved file and commit; that commit is the merge commit that ties the two lines of history
together:
$ git commit -m "Merge feature/tone: short, grounded, with a quote"
[main 3b37ae1] Merge feature/tone: short, grounded, with a quote
The history now shows the fork and the join — two parallel commits that a merge commit brings
back together:
$ git log --oneline --graph
* 3b37ae1 Merge feature/tone: short, grounded, with a quote
|\
| * 281954f Promise short answers in the README
* | 37b236e Promise a source quote in the README
|/
* 7be2b2c Add a worked example to the prompt
* 80ac66d Make the fallback answer explicit
* a58bf2f Add source, prompt, and output folders
* 6574970 Add project README
Pitfall. The most common conflict mistake is committing the markers by accident. If <<<<<<<,
=======, or >>>>>>> survives into your commit, you have shipped broken text (and, in code, a
syntax error). After resolving, search the file for <<<<<<< before you stage. If a merge goes wrong
and you want to start over, git merge --abort returns you to the state before the merge.
14

Version of 13 September 2026 Module page
Remark. Conflicts are normal, not a sign you did something wrong. They are simply Git
refusing to guess when two changes genuinely disagree. The skill is not avoiding conflicts — it
is reading the markers calmly and choosing the right result.
Exercises
3.1. On a fresh repository with one committed file, create a branch feature/x, change the file on
it, and commit. Switch back to main and merge feature/x. Confirm from the merge output that
it was a fast-forward, and explain why no merge commit was needed.
3.2. Now force a real conflict. From main, create branch-a, change line 1 of a file, and commit.
Switch to main, create branch-b, change the same line differently, and commit. Merge branch-
a into branch-b. Reproduce the conflict, then open the file and identify which text came from
HEAD and which from the incoming branch.
3.3. Resolve the conflict from the previous exercise by writing a line that combines both changes,
delete the three marker lines, stage the file, and commit. Confirm with git log --oneline --
graph that the history shows a fork and a join.
3.4. Cause a conflict, then run git merge --abort instead of resolving it. Run git status and
explain what state the repository is now in and why --abort is a useful escape hatch.
Answers. (2) The text between <<<<<<< HEAD and ======= is from your current branch, branch-b; the text between
======= and >>>>>>> branch-a is from the branch you merged in, branch-a.
(4) --abort throws away the in-progress merge and returns the working directory and index to exactly the state before
git merge was run, as git status (a clean tree on branch-b) confirms. It is useful when a merge turns out to be more
tangled than expected and you would rather rethink your approach than resolve it now.
15
