# 10. Calling an LLM API from Python

*Source: DAT32-91 - Prompt Engineering and Git - Textbook.pdf, pages 31-34*

Version of 13 September 2026 Module page
10. Calling an LLM API from Python
Everything so far treated the model as something you talk to. Now you call it from code. An LLM
API lets your Python program send a prompt and receive the model’s reply as data, so the model
becomes a component of a larger program — exactly the HTTP-request-and-JSON-response pattern
you already know, wrapped in a convenient library.


## 10.1. The basic call


Providers ship a Python package that hides the raw HTTP. Using Anthropic’s as the concrete example,
you install it, create a client, and send a message:
from anthropic import Anthropic
client = Anthropic() # reads your key from the environment
message = client.messages.create(
model="claude-sonnet-5",
max_tokens=1024,
messages=[
{"role": "user", "content": "Summarise this document in one sentence."}
],
)
print(message.content[0].text) # the model's reply, as text
The shape is the same for other providers (OpenAI’s package differs only in names): you build a list
of messages, each with a role ("user" for you, "assistant" for the model) and content, and you get
back an object whose content holds the reply. max_tokens caps the reply’s length. The model string
names which model to use; model names change as providers release new ones, so treat it as a setting
you update, not a constant carved into your code.
Definition 7 (Anatomy of an API call).
• client — an object holding your credentials and connection settings.
• messages — the conversation so far, a list of {"role", "content"} entries. To continue a
conversation you append the model’s reply and the next user message and send the whole list
again — the API is stateless, so you resend the history each time (this is the conversational-
agent loop of Chapter 7, done by hand).
• response — the returned object; the text is read from its content.


## 10.2. Keeping the key out of your code


An API call is authenticated with a secret key. You obtain one by creating an account in the
provider’s console (for Anthropic, console.anthropic.com for OpenAI, platform.openai.com), adding
billing, and generating an API key there — a long secret string the console shows you once, so copy
it immediately. The single most important rule of calling an API is: never write the key in your
code, because code goes into Git, and a key committed to Git — especially a public GitHub repo —
is a key leaked to the world. Instead, read it from an environment variable. The Anthropic client
31

Version of 13 September 2026 Module page
does this for you: it looks for ANTHROPIC_API_KEY in the environment, so you set the variable and pass
nothing to Anthropic().
Typing that variable into every new terminal is easy to forget, so teams usually keep the key in a .env
file at the project root instead. A .env file is inert on its own — it is plain text until something reads
it into the environment; the client will not find a key that only sits in an unread file. The python-
dotenv package does the reading: load_dotenv() loads .env and sets each entry as an environment
variable, which the client then picks up like any other. Call it once, before you create the client:
from dotenv import load_dotenv
from anthropic import Anthropic
load_dotenv() # read .env into the environment
client = Anthropic() # now finds ANTHROPIC_API_KEY there
Method 6 (Version-control the integration cleanly).
1. Keep the key in a .env file at the project root (or a real environment variable), never in a .py
file.
2. Call load_dotenv() at start-up so the .env file’s contents reach the environment — without
this step the file is never read (a real environment variable needs no loading).
3. Add .env to your .gitignore so the file holding the key is never committed.
4. Commit an .env.example with the names of the required variables and no values, so a
teammate knows what to set.
5. The client reads the key from the environment, so your committed code contains no secret.
Pitfall. A leaked key is a real and expensive incident: anyone who finds it can spend your quota
and run up your bill. If you ever commit a key by accident, treat it as compromised — revoke it
immediately in the provider’s console and issue a new one. Deleting the line in a later commit
does not help: the key still sits in the Git history for anyone to read.


## 10.3. Handling the response, and retrying on rate limits


Two things go wrong often enough that you must handle them from the start. First, the reply is non-
deterministic (Chapter 6): the same call can return different text, so write code that reads the reply
as data, never code that assumes an exact string. Second, providers rate-limit you — if you send
requests too fast, the API rejects them with a “rate limit” error (HTTP 429) rather than answering.
The right response to a rate-limit error is not to give up but to wait and retry, backing off a little
longer each time.
This is exponential backoff: on each failure, wait, then retry; double the wait after each failure so
you stop hammering an API that is asking you to slow down. The pattern, catching the provider’s
rate-limit error and retrying with a doubling delay:
import time
from anthropic import RateLimitError
32

Version of 13 September 2026 Module page
def call_with_retry(client, prompt, max_retries=5, base_delay=1.0):
for attempt in range(max_retries):
try:
return client.messages.create(
model="claude-sonnet-5",
max_tokens=1024,
messages=[{"role": "user", "content": prompt}],
)
except RateLimitError:
if attempt == max_retries - 1:
raise # out of retries: give up now
delay = base_delay * (2 ** attempt) # 1s, 2s, 4s, 8s, …
print(f"attempt {attempt + 1}: rate-limited, "
f"waiting {delay:.0f}s before retry")
time.sleep(delay)
Read the loop carefully, because one detail is where beginners go wrong. Each time the call is rate-
limited, the function computes the next delay, prints a line so you can watch the backoff (in a real
system this would be a log call), and sleeps. But on the last attempt it does neither: if attempt ==
max_retries - 1 catches the case where the retries are spent, and raise gives up at once. There is
no point sleeping after the final try — no further call will follow the wait — so the function surfaces
the failure immediately rather than making the caller sit through a last, pointless backoff.
Run against a stand-in client that fails twice with a rate-limit error before succeeding, the retry logic
waits 1s, then 2s, and gets its answer on the third attempt:
attempt 1: rate-limited, waiting 1s before retry
attempt 2: rate-limited, waiting 2s before retry
success on call 3: (model reply to: 'Summarise the contract.')
The delays double exactly as designed, and the call succeeds once the limit clears. This is the shape of
robust API code: assume transient failures will happen, and recover from them automatically instead
of crashing.
Pitfall. A retry loop that sleeps on every failed attempt, including the last one, makes the caller
wait the full final backoff — with these defaults, a needless 16s — before it is even told the call
failed. Back off only when another attempt will follow: skip the wait on the last try, or, as here,
give up the moment the retries are spent.
Remark. Good provider libraries retry rate-limit and server errors for you — the Anthropic
client, for instance, retries automatically a couple of times. You still need to understand the
mechanism, both to tune it (how many retries, how long) and for the cases the library does not
cover. Knowing exponential backoff is knowing what your tools are doing on your behalf.
33

Version of 13 September 2026 Module page
Pitfall. Do not retry every error. A rate-limit (429) or a temporary server error (500-range) is
worth retrying — it may clear. A bad-request error (400) or an authentication error (401) will
fail identically every time; retrying it just wastes time and quota. Catch the specific errors that
are worth retrying, and let the rest fail fast so you see them.
Exercises
10.1. Set your provider’s API key as an environment variable, write a script that creates a client,
sends one prompt, and prints the reply’s text. Confirm your .py file contains no key, and that .env
(if you use one) is listed in .gitignore.
10.2. Extend the script to continue a conversation: send a first message, append the model’s reply
and a follow-up question to the messages list, and send again. Explain why you must resend the
whole history rather than just the new question.
10.3. Write a call_with_retry function with exponential backoff that retries only on rate-limit
errors. Test it against a fake client that raises a rate-limit error a fixed number of times before
returning, and print the delay before each retry, as in this chapter’s retry_demo.
10.4. Explain, in two sentences, why deleting a committed API key in a later commit does not
make the key safe, and what you must do instead.
Answers. (2) The API is stateless: it keeps no memory of past calls, so the only way the model knows what was said
before is if you include it. You resend the full messages list — earlier user messages and the model’s replies — so the
follow-up has its context; sending only the new question would strip that context away.
(4) The key remains in the repository’s history — every past commit still contains it, and anyone with the repo can
read it there. You must revoke the key in the provider’s console and issue a new one; editing it out of the current files
does not remove it from history.
34
