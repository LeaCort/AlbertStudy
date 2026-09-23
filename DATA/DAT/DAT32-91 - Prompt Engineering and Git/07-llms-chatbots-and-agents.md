# 7. LLMs, Chatbots, and Agents

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 24-25*

Version of 13 September 2026 Module page
7. LLMs, Chatbots, and Agents
The generation loop of Chapter 6 is one call: text in, text out, no memory of anything before it. Real
products wrap that call in more machinery, and three architectures — an LLM, a conversational
agent, and an agentic system — name three levels of that wrapping. Telling them apart is how you
choose the right design for a task, and how you avoid building far more than the job needs.
Definition 5 (Three architectures).
• A large language model (LLM) is the raw next-token engine: a single call that takes text
and returns text. It is stateless — it remembers nothing between calls.
• A conversational agent (a chatbot) wraps the LLM in a loop that keeps the conversation
history and feeds it back on every turn, so the system appears to remember what was said. It
is an LLM plus memory of the dialogue.
• An agentic system wraps the LLM in a loop that lets it take actions — call tools, search, run
code, read files — and use the results to decide what to do next, working toward a goal over
several steps. It is an LLM plus tools plus a decision loop.
Figure 3 draws the three. The key differences are state and action: an LLM has neither; a conversa-
tional agent adds state (it remembers the dialogue); an agentic system adds action (it can reach out
to the world and react to what comes back).
LLM conversational agent agentic system
text in
model model model
keep act result
text out history
tools
Figure 3: Three architectures. The LLM is a single stateless call. The conversational agent adds a
memory of the dialogue that is fed back each turn. The agentic system adds tools the model can call
and react to, looping toward a goal.
Example — Ada at three levels. As a bare LLM, Ada is one call: you paste the document and
question into the prompt and read the answer. Ask a follow-up and it knows nothing of the first
exchange.
As a conversational agent, Ada remembers the conversation: you can ask “and who wrote it?”
and it still has the document and the previous questions in context, because the loop feeds the
history back.
As an agentic system, Ada is given a tool — say, a document search — and a goal: “answer
this question about our files.” It decides to search, reads the results, decides whether that was
enough, searches again if not, and only then answers. The model is now choosing actions, not just
producing text.
Method 5 (Choosing the architecture for a task).
1. Does the task need memory of the conversation? If no, a single LLM call is enough — do
not build more.
24

Version of 13 September 2026 Module page
2. If it needs the system to hold a dialogue over several turns but no outside action, use a
conversational agent.
3. If the task requires reaching outside the model — searching, calling APIs, running code,
acting on the world and reacting to results — use an agentic system.
Pitfall. The frequent mistake is reaching for an agentic system when a single LLM call would
do. Agents are harder to build, slower, more expensive, and far harder to make reliable, because
every extra step is another place to go wrong. Match the architecture to the task: use the simplest
design that meets the need, and add memory or tools only when the task genuinely demands
them.
Exercises
7.1. For each task, say which of the three architectures fits best and why: (a) classify each of
10,000 support emails as urgent or not; (b) a help desk chatbot that answers follow-up questions
in one session; (c) a research assistant that must look up current prices on the web before
answering.
7.2. Explain, in terms of state, why a bare LLM call cannot answer “and who wrote it?” as a
follow-up, but a conversational agent can. What, concretely, does the conversational agent do
that the bare call does not?
7.3. Give one task for which building an agentic system would be over-engineering, and rewrite it
as the simplest architecture that suffices. Name the specific cost or risk the simpler design avoids.
Answers. (1) (a) A single LLM call per email — the task is independent classification with no dialogue and no outside
action. (b) A conversational agent — it needs the session’s history to handle follow-ups, but no external tools. (c)
An agentic system — it must act outside the model (search the web) and use the results before answering.
25
