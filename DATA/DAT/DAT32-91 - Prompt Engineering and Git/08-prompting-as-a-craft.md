# 8. Prompting as a Craft

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 26-28*

Version of 13 September 2026 Module page
8. Prompting as a Craft
A prompt is the instruction you give a model, and small changes to it change the output more than
beginners expect. Prompting is a craft precisely because it is empirical: you write a prompt, test it
against examples, see where it fails, and revise — the same loop you use for code. This chapter covers
the three core techniques and, just as important, how to tell whether a prompt is actually working.


## 8.1. Zero-shot, few-shot, chain-of-thought


The three foundational techniques differ in how much you show the model before asking.
Framework 5 (Three prompting techniques).
• Zero-shot — you give only the instruction and the input, no examples. “Classify the sentiment
of this review as positive or negative: …” Use it when the task is common and the instruction
is clear.
• Few-shot — you include a handful of worked examples before the real input, showing the
model the exact pattern you want. Use it when the task is unusual, or when zero-shot gets the
format or the edge cases wrong.
• Chain-of-thought — you ask the model to reason step by step before giving its answer.
Use it for tasks that need multi-step reasoning (arithmetic, logic, multi-part questions), where
jumping straight to an answer is error-prone.
Example — The same task, three ways. Zero-shot: “Is 47 a prime number? Answer yes or no.”
— fast, but the model may guess.
Few-shot: precede it with two solved examples — “Is 9 prime? No, 9 = 3 × 3. Is 13 prime? Yes.” —
teaching both the format and the reasoning by example.
Chain-of-thought: “Is 47 prime? Think step by step: check whether any number from 2 up to its square
root divides it, then answer.” — the model works through the check before committing, which
catches mistakes a snap judgement would make.
Remark. These techniques combine. A common, strong pattern is few-shot examples that
themselves show step-by-step reasoning — you demonstrate not just the answer but the
thinking, and the model imitates both. Reach for the simplest technique that works, and add
examples or reasoning only when a plain instruction falls short.


## 8.2. Evaluating output against a rubric, not by gut feel


The beginner’s failure is to eyeball one output, decide it “looks good”, and ship. That is not evaluation.
To know whether a prompt works you need a rubric — an explicit list of checkable criteria — and
you apply it to several outputs, not one. Judging by gut feel gives you no way to compare two prompts,
no way to catch a regression, and no way to defend the choice.
26

Version of 13 September 2026 Module page
Definition 6 (Rubric evaluation). A rubric is a set of specific, independently checkable
criteria that a good output must satisfy. You evaluate a prompt by running it on a set of test
inputs and scoring each output against the rubric, then comparing prompts by their scores —
not by impression.
For Ada, a good answer to “When did the Louvre open, and where is it?” about the document “The
Louvre opened in 1793 and is located in Paris.” must do three checkable things: state the year, name
the city, and add nothing the document does not say. That last criterion guards against the model
inventing facts (Chapter 11). A tiny scorer applies the rubric to three candidate answers:
Question: When did the Louvre open, and where is it?
Answer A: 'It opened in 1793 in Paris.'
[x] states the year 1793
[x] names the city Paris
[x] adds nothing not in the document
score: 3/3
Answer B: 'The Louvre opened in 1793.'
[x] states the year 1793
[ ] names the city Paris
[x] adds nothing not in the document
score: 2/3
Answer C: "It opened in 1793 in Paris, the world's largest museum."
[x] states the year 1793
[x] names the city Paris
[ ] adds nothing not in the document
score: 2/3
The scores separate the candidates cleanly. Answer A satisfies all three. Answer B is correct but
incomplete — it omits the city, so it scores 2/3. Answer C states both facts but adds “the world’s largest
museum”, which the document never claims — an invented detail that costs it the third point. A gut-
feel reviewer might have waved C through as “detailed and confident”; the rubric catches exactly the
failure that matters. The criteria did the judging; you designed them.
Principle 6 (Evaluate to improve). You cannot improve what you cannot measure. Write the
rubric before you tune the prompt, run every candidate prompt against the same test inputs, and
compare scores. A prompt change is an improvement only if it raises the score on your rubric
— “it feels better” is not evidence.
Pitfall. A rubric with one criterion, or with vague criteria (“is it good?”), is barely better than
gut feel. Make each criterion specific enough that two people scoring the same output would
agree. “Names the city” is checkable; “is informative” is not.
Exercises
27

Version of 13 September 2026 Module page
8.1. Write a zero-shot, a few-shot, and a chain-of-thought prompt for the same task: deciding
whether a short customer message is a complaint, a question, or praise. For the few-shot version,
include three labelled examples; for the chain-of-thought version, ask for a one-line reason
before the label.
8.2. Design a rubric of three specific, independently checkable criteria for a good summary of a
news article. Explain why each is checkable rather than a matter of taste.
8.3. Implement a scorer in Python that applies your rubric from the previous exercise to
three candidate summaries and prints a score out of 3 for each, in the style of this chapter’s
rubric_demo. Use it to decide which of two prompts is better on the same three inputs.
8.4. Take a task where zero-shot gives inconsistent output formats. Convert it to few-shot by
adding two examples that fix the format, and show — with your rubric — that the score
improves. Explain what the examples taught the model that the instruction alone did not.
Answers. (2) For example: “names the article’s main event in the first sentence” (checkable — either it does or it does
not); “is at most three sentences” (checkable — count them); “introduces no name or number absent from the article”
(checkable against the source). Each can be judged the same way by two people; “captures the essence” cannot.
28
