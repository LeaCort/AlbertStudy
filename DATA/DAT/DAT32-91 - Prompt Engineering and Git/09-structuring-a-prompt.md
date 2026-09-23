# 9. Structuring a Prompt

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 29-30*

Version of 13 September 2026 Module page
9. Structuring a Prompt
Beyond what you ask, how you organise the prompt changes the result. Four structuring tech-
niques — persona assignment, output-format specification, constraint injection, and role separation
— give you reliable control over tone, shape, boundaries, and safety. Each buys you something, and
each has a cost, so this chapter pairs every technique with its tradeoff.


## 9.1. The four techniques


Framework 6 (Four ways to structure a prompt).
• Persona assignment — tell the model who to be. “You are a careful financial analyst.” It sets
tone and the kind of knowledge the model draws on.
• Output-format specification — state the exact shape of the answer: JSON with named
fields, a markdown table, a numbered list. It makes the output machine-readable and consis-
tent.
• Constraint injection — add explicit rules and limits. “Answer in at most two sentences. Use
only the document. If unsure, say ‘I don’t know’.” It bounds what the model may do.
• Role separation — put the model’s instructions, the user’s request, and any external data
in clearly separated channels rather than one blob, so the model knows which text is a
command and which is data to be processed.
Example — Output format you can parse. Instead of “extract the year and city”, ask for a shape
your code can read:
Return only JSON of the form:
{"year": <integer>, "city": <string>}
Now the model’s answer can be handed straight to json.loads and used, rather than parsed out of
free prose. Specifying the format is what turns a model from a chat partner into a component you
can build on.
Role separation is the most important of the four for anything handling outside text, so it earns a
closer look. The safe pattern keeps three things apart: the system instructions (who the model is
and its rules), the user’s request, and any external data (a document, a search result), with the data
placed in its own labelled, delimited block and explicitly marked as data, not instructions. Mixing
them into one string is how prompt injection gets in (Chapter 11): if a document is concatenated
straight into the instruction text, a sentence inside the document can pose as a command.
9.2. Each technique’s tradeoff
Techniques are not free. Choosing well means knowing what each costs.
Framework 7 (The tradeoffs).
29

Version of 13 September 2026 Module page
• Persona buys tone and focus, but a strong persona can crowd out instructions or make the
model over-confident in a role it is only playing. Keep it light and specific.
• Output format buys machine-readability, but a rigid format can suppress useful nuance and,
if over-specified, the model may fight the format instead of answering. Constrain the shape,
not every word.
• Constraints buy safety and predictability, but pile on too many and they conflict, confuse the
model, or leave it refusing borderline-fine requests. Add the few that matter; drop the rest.
• Role separation buys safety against injection and clarity about what is data, at the cost of
a more elaborate prompt structure to build and maintain. For anything touching untrusted
input, it is worth the cost every time.
Principle 7 (Structure for the job, not for its own sake). Each technique solves a specific
problem: persona for tone, format for machine-readability, constraints for boundaries, role
separation for safety. Apply the ones your task needs and no more — every added instruction is
another thing that can conflict, confuse, or be fought. The best prompt is the simplest one that
reliably passes your rubric (Chapter 8).
Pitfall. Stacking every technique at maximum — a heavy persona, a rigid schema, a dozen
constraints — often makes outputs worse, not better: the instructions compete, and the model
satisfies some by breaking others. When a heavily-structured prompt misbehaves, the fix is
usually to remove instructions, not add more.
Exercises
9.1. Rewrite a plain instruction (“summarise this document”) four times, each adding exactly
one technique: a persona, an output format, a constraint, and role separation. For each, state in
one sentence what it buys and what it costs.
9.2. Write a prompt that returns strictly parseable JSON with two named fields, then write the
Python that calls json.loads on the result and reads the fields. What should your code do if the
model returns text that is not valid JSON?
9.3. Take a prompt that concatenates a user-supplied document directly into the instruction text,
and rewrite it using role separation: a system instruction block, and a separate, clearly-delimited
data block for the document. Explain which prompt-injection risk (Chapter 11) the rewrite
reduces.
9.4. Deliberately over-structure a prompt: give it a heavy persona, a rigid format, and six
constraints. Run it, note one way the output gets worse, and then remove instructions until it
improves. Report which instruction was causing the trouble.
Answers. (2) Wrap json.loads in try/except json.JSONDecodeError; if it fails, do not trust the output — retry, ask
the model to return valid JSON, or fall back to a safe default. Because the model’s output is not guaranteed to be valid
JSON, code that calls json.loads on it without handling the error will crash on the first malformed reply.
30
