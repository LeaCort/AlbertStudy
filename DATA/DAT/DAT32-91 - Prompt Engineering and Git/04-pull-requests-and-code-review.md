# 4. Pull Requests and Code Review

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 16-17*

Version of 13 September 2026 Module page
4. Pull Requests and Code Review
Merging on your own machine is fine for solo work. On a team, a change should be seen by someone
else before it enters main. The tool for that is the pull request (PR): you push your branch to
GitHub and open a request to merge it, and a teammate reviews the change — commenting, asking
questions, approving — before it is merged. Review is where quality and shared understanding are
built, and it is a daily part of professional data and AI work.


## 4.1. The pull-request cycle


The whole cycle is: branch, push, open a PR, review, address feedback, merge. You already know the
first steps; the PR adds the review in the middle.
Method 4 (Open a pull request).
1. Do your work on a branch and commit it (Chapter 3).
2. git push -u origin <branch> — push the branch to GitHub.
3. Open a PR: on GitHub, press Compare & pull request, or from the terminal run gh pr
create (the same gh you authenticated in Chapter 2). Give it a clear title and a description
saying what changed and why.
4. A teammate reviews it, leaves comments, and approves or requests changes.
5. You address the feedback with new commits pushed to the same branch — the PR updates
automatically.
6. Once approved, merge the PR (on GitHub, Merge pull request, or gh pr merge). GitHub
folds the branch into main.
The PR description does for the change as a whole what a commit message does for one commit:
it tells the reviewer what to look at and why. A good description states the goal, summarises the
change, and points to anything the reviewer should check with care.


## 4.2. Leaving a structured review comment


A review comment is not “looks good” or “I don’t like this”. A useful comment is specific,
actionable, and kind — it points at an exact line, says plainly what the concern is, and proposes a
concrete change. Reviewers separate the blocking concerns (this must change before merge) from
suggestions (worth considering) so the author knows what is required.
Framework 2 (A structured review comment). Anchor it to a specific line, then give three
parts:
• Observation — what you see, factually. “This reads the whole file into memory before answer­
ing.”
• Concern or reason — why it matters. “On a large document that will exhaust memory and
fail.”
• Suggestion — a concrete next step, marked blocking or optional. “Blocking: stream the file or
read it in chunks.”
16

Version of 13 September 2026 Module page
Example — A weak comment and a strong one. Weak: “this is bad, fix it.” It gives the author
nothing to act on and invites defensiveness.
Strong, anchored to the line that builds the prompt: “Observation: the document is concatenated
straight into the prompt string. Concern: untrusted document text can then override our instructions
(see Chapter 11). Blocking: put the document in its own clearly­delimited block and label it as data,
not instructions.” It names the line, the risk, and the fix.


## 4.3. Addressing feedback and merging


When a reviewer requests a change, you do not start over or argue in the abstract: you make the
change as a new commit on the same branch, push it, and reply to the comment saying what you did
(or, if you disagree, explain why and discuss). The PR keeps the whole conversation and the commits
together, so the history records not just what changed but what the team agreed to. Once the
reviewer approves, you merge — and only then does the change reach main.
Principle 3 (Why review is worth the wait). Review catches mistakes before they reach
main, spreads knowledge of the codebase across the team, and keeps a written record of why
changes were made. The small delay it adds is repaid many times over in bugs not shipped and
context not lost. Treat a request for changes as help, not criticism.
Pitfall. Do not merge your own PR without review when working on a team, and do not approve
a PR you have not actually read. Both defeat the entire purpose. The review is the point; the
merge is just the button you press after it.
Exercises
4.1. Push a feature branch to a GitHub repository and open a pull request for it, with a title and
a description that states the goal, summarises the change, and names one thing the reviewer
should check carefully.
4.2. On a classmate’s pull request (or a second account of your own), leave one structured review
comment anchored to a specific line, using the observation–concern–suggestion form, and mark
it blocking or optional.
4.3. On your own PR, respond to a requested change by making a new commit on the same
branch and pushing it. Confirm the PR updates, then merge it after approval. In two sentences,
explain why the fix went on the same branch rather than a new one.
Answers. (3) The fix belongs on the same branch because the PR is that branch: pushing a new commit to it updates
the same pull request, keeping the change and the review conversation together. A new branch would open a separate
PR and split the history of one change across two places.
17
