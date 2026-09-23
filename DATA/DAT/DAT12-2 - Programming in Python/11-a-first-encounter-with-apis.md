# 11. A first encounter with APIs

*Source: DAT12-2 - Programming in Python - Textbook.pdf, pages 33-34*

Version of 13 September 2026 Module page
11. A first encounter with APIs
The last reach beyond your own computer: getting data from the internet on demand. An API
(Application Programming Interface) is a defined way for one program to ask another for data or
services. Web APIs let your program request data from a server — weather, exchange rates, public
statistics — and receive a structured reply (Figure 5).
GET request (a URL)
your program server
JSON response
Figure 5: An HTTP GET: your program sends a request naming a URL, and the server sends back
data, most often as JSON.


## 11.1. HTTP GET and the requests library


The web runs on HTTP, a protocol of requests and responses. The simplest request is a GET: “please
give me the data at this address (URL).” The requests library makes a GET in one line:
import requests
response = requests.get("https://api.github.com/users/python")
print(response.status_code) # 200 means success
The status code is the server’s verdict: 200 means OK, 404 means not found, 500 means the server
itself failed. Always check it before trusting the reply. As Chapter 10 described, response is an object:
status_code is one of its attributes — data you read, with no parentheses — and .json(), which
we use next, is one of its methods.


## 11.2. Parsing a JSON response


Web APIs almost always answer in JSON — a text format for nested data that maps cleanly onto
Python’s dicts and lists. requests turns it into Python values for you with .json():
import requests
try:
response = requests.get("https://api.github.com/users/python", timeout=10)
if response.status_code == 200:
data = response.json() # a dict, parsed from JSON
print(data["name"]) # 'Python'
print(data["public_repos"]) # an int
else:
print(f"Request failed with status {response.status_code}")
except requests.exceptions.RequestException as e:
print(f"Could not reach the server: {e}")
Once .json() hands you a dict, you are working with an ordinary dict again: reach into it by key
exactly as with the dictionary in Table 2, loop over lists of results, and pull out the fields you need.
33

Version of 13 September 2026 Module page
An API call is, in the end, just one more source of the labelled data you already know how to process
— and a natural partner for the CSV program of Chapter 9: fetch with requests, parse with .json(),
write with csv.
Pitfall. Network requests fail in ways file reads do not — the server may be down, the
connection may drop, the address may be wrong. So wrap a real request in try / except (catching
requests.exceptions.RequestException), pass a timeout so your program cannot hang forever,
and always check status_code. A program that assumes the internet always answers will crash
the first time the connection drops.
Remark. Many public APIs limit how often you may call them without an account. The GitHub
endpoint above, for instance, allows only about 60 unauthenticated requests per hour from
one connection; call it in a tight loop and you will start receiving 403 status codes. When you
experiment, call an API sparingly, and read its documentation for its rate limits before building
anything on top of it.
Exercises
11.1. Run the first GET example above and print the status code. What code do you get, and what
does it mean?
11.2. Fetch https://api.github.com/users/python, parse the JSON, and print the values of the
keys "name" and "public_repos".
11.3. Wrap your request from the previous exercise in a try / except that catches
requests.exceptions.RequestException, and test it by temporarily changing the URL to an
address that does not exist.
11.4. Write a program that fetches the same user, and if the request succeeds, writes a one-row
CSV file user.csv with columns name and public_repos using the csv module — joining the
API and CSV skills into one pipeline.
Answers. (1) You should get 200, meaning the request succeeded. (2) call .json() on the response to get a dict,
then print(data["name"]) and print(data["public_repos"]); name prints Python and public_repos prints the
current repository count, an integer. (3) A bad URL raises a RequestException, which your except block should
catch and report. (4) build a dict from the JSON, open the output with newline="", and use csv.DictWriter with
fieldnames=["name", "public_repos"].
34
