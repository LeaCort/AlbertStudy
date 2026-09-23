# 1. Why Version Control

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 5-6*

Version of 13 September 2026 Module page
1. Why Version Control
Imagine Ada’s prompt is working, and you decide to make it stricter. You edit the file, save, and run
it — and now it answers nothing at all. You want the old version back, but you saved over it an hour
ago. Your only record of what changed is your memory, and your memory is wrong.
This is the problem version control solves. A version control system records the full history of a
project as a sequence of saved states, so that any past state can be recovered exactly, the difference
between any two states can be seen, and several people can change the same project without over-
writing each other. Git is the version control system the software and data world has standardised
on; learning it is not optional for collaborative work.
Definition 1 (Version control). A version control system keeps the complete history of
a project as an ordered series of recorded states. From that history it can, at any time: restore
any past state exactly, show what changed between two states, and reconcile changes made in
parallel by different people.
Naming files report_final.py, report_final_v2.py, report_final_REAL.py is version control done
by hand — and it fails at every one of those three jobs. It cannot tell you what changed between two
files without a line-by-line squint; it keeps no reliable order; and when two teammates each make a
_final copy, nothing merges them. Git does all three, automatically, for a project of any size.
Principle 1 (Why it is non-negotiable). Data and AI work must be reproducible: a result
you cannot regenerate is a result you cannot trust or defend. Version control is what makes a
result reproducible — it ties every output to the exact code and prompt that produced it — and
what lets a team work on one codebase without destroying each other’s work. A project without
it is one accident away from lost work and one teammate away from chaos.
The rest of this chapter is the vocabulary you need before touching the tool. A Git repository (or
repo) is a project folder together with its entire recorded history. A commit is one recorded state of
the whole project — a labelled snapshot you can always return to. The history is a chain of commits,
each pointing back to the one before it, so the project’s past reads like a story: this state, then this
change, then this change.
Remark. A commit is a snapshot of the whole project, not a saved copy of one file. Each
commit records the complete state of every tracked file at that moment. This is why you can
restore any past state exactly: the commit holds all of it, not a patch you would have to replay.
Everything that follows — staging, branching, merging, pull requests — is built on those three words:
repository, commit, history. The next chapter puts them to work.
Exercises
1.1. In your own words, name the three jobs a version control system does that renaming files
by hand cannot. For each, give a one-sentence example from a project you have worked on.
5

Version of 13 September 2026 Module page
1.2. A colleague says “I don’t need Git, I just keep dated backups of my folder.” Give two concrete
situations from data or AI work where dated backups fail but version control does not.
Answers. (1) Recover any past state exactly (dated backups can do this only if you remembered to make the backup);
show what changed between two states (dated backups force a manual file comparison); reconcile parallel changes
(dated backups cannot merge two people’s edits at all).
(2) For example: two teammates editing the same prompt file the same afternoon — backups give you two folders and
no merge; and needing to prove which exact code produced last week’s reported accuracy number — backups rarely
tie an output to the precise code that made it, a commit always does.
6
