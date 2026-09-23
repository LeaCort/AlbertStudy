# 4. Methods of Proof

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 16-19*

Version of 13 September 2026 Module page
4. Methods of Proof


## 4.1. Templates worth memorising


Up to now we have proved things as the need arose. This chapter isolates the standard proof
templates the course relies on. Each has a fixed shape you can reproduce: recognise which template
a claim invites, and half the work is done. The direct/contrapositive pair and contradiction
dispose of a single implication; exhaustion splits a claim into finitely many cases; induction proves
a statement for every whole number; and analysis–synthesis settles existence and uniqueness.


## 4.2. Direct proof and proof by contrapositive


A direct proof of 𝑃 ⟹ 𝑄 assumes 𝑃 and reasons forward to 𝑄. When that is awkward, Chapter 1
offers a free alternative: since an implication equals its contrapositive, proving ¬𝑄 ⟹ ¬𝑃 proves
𝑃 ⟹ 𝑄.
Method 1 (Proof by contrapositive). To prove 𝑃 ⟹ 𝑄: assume ¬𝑄, reason forward, and
derive ¬𝑃. Concluding ¬𝑄 ⟹ ¬𝑃 establishes the equivalent original 𝑃 ⟹ 𝑄.
Example — A contrapositive proof, written to template. Claim. If 𝑛2 is even, then 𝑛 is even.
Proof (contrapositive). Assume the negated conclusion: 𝑛 is odd. Then 𝑛 = 2𝑘+1 for some
integer 𝑘, so
𝑛2 = (2𝑘+1) 2
= 4𝑘2+4𝑘+1
= 2(2𝑘2+2𝑘)+1,
which is odd — the negated hypothesis. Thus “𝑛 odd” implies “𝑛2 odd”, and contraposition
discharges the proof of “𝑛2 even ⟹ 𝑛 even”. □


## 4.3. Proof by exhaustion


Some statements split naturally into a handful of separate cases that together cover every possibility.
Proof by exhaustion (also called proof by cases) settles each case on its own; once the cases are
exhausted, the statement holds in general.
Method 2 (Proof by exhaustion). To prove a statement 𝑆: split all possibilities into finitely
many cases that are exhaustive (together they cover every possibility), prove 𝑆 separately in
each case, and conclude that 𝑆 holds in all cases.
Example — A proof by cases on parity. Claim. For every integer 𝑛, the number 𝑛2+𝑛 is even.
Proof (exhaustion on the parity of 𝑛). Every integer is even or odd — two exhaustive cases.
16

Version of 13 September 2026 Module page
• If 𝑛 = 2𝑘 is even, then 𝑛2+𝑛 = 4𝑘2+2𝑘 = 2(2𝑘2+𝑘) is even.
• If 𝑛 = 2𝑘+1 is odd, then 𝑛2+𝑛 = (2𝑘+1)(2𝑘+2) = 2(2𝑘+1)(𝑘+1) is even.
Both cases yield an even number and no third case exists, so 𝑛2+𝑛 is even for every integer 𝑛. □
Pitfall. The cases must be exhaustive: miss one possibility and the proof is incomplete.
Splitting an integer into “even” and “odd” covers every case; splitting into “𝑛 > 0” and “𝑛 < 0”
silently forgets 𝑛 = 0.


## 4.4. Proof by contradiction


Method 3 (Proof by contradiction). To prove a statement 𝑆: assume ¬𝑆, derive a contradic-
tion (a proposition that is both true and false, such as 𝑟 ≠ 𝑟), and conclude that ¬𝑆 is impossible,
so 𝑆 holds.
Example — The irrationality of √2. Claim. √2 is irrational.
Proof (contradiction). Suppose, for contradiction, that √2 = 𝑝/𝑞 is rational, written in lowest
terms (so 𝑝 and 𝑞 share no common factor). Then 𝑝2 = 2𝑞2, so 𝑝2 is even, hence 𝑝 is even (by the
example above), say 𝑝 = 2𝑚. Substituting, 4𝑚2 = 2𝑞2, so 𝑞2 = 2𝑚2 is even, hence 𝑞 is even. But
then 𝑝 and 𝑞 share the factor 2, contradicting “lowest terms”. The assumption is impossible, so √2
is irrational. □
Pitfall. A proof by contradiction must reach a genuine contradiction — a proposition and its
negation both forced true. Deriving something merely surprising, or re-deriving the assumption,
proves nothing. State clearly which two facts collide.


## 4.5. Proof by induction


Induction proves a statement 𝑃(𝑛) for every whole number 𝑛 at once. Picture an infinite line of
dominoes: knock the first over (the base case), and guarantee that each falling domino topples the
next (the inductive step); then all fall.
Method 4 (Proof by induction). To prove “𝑃(𝑛) holds for all 𝑛 ≥ 𝑛 ”:
0
• Base case: prove 𝑃(𝑛 ) directly.
0
• Inductive step: fix an arbitrary 𝑛 ≥ 𝑛 , assume 𝑃(𝑛) (the inductive hypothesis), and prove
0
𝑃(𝑛+1).
These two together license the conclusion “𝑃(𝑛) for all 𝑛 ≥ 𝑛 ”.
0
The inductive step does not assume what it is proving: it assumes 𝑃(𝑛) for a single generic 𝑛 and
deduces the next case 𝑃(𝑛+1). That single implication, holding for every 𝑛, is what propagates the
base case along the whole line.
17

Version of 13 September 2026 Module page
Example — A first induction, written to template. Claim. For all 𝑛 ≥ 1, 1+2+⋯+𝑛 =
𝑛(𝑛+1)
.
2
Proof (induction on 𝑛). Base case (𝑛 = 1): the left side is 1 and the right side is (1⋅2)/2 = 1.
They agree.
𝑛(𝑛+1)
Inductive step: fix 𝑛 ≥ 1 and assume 1+⋯+𝑛 = . Adding 𝑛+1 to both sides,
2
𝑛(𝑛+1) 𝑛 (𝑛+1)(𝑛+2)
1+⋯+𝑛+(𝑛+1) = +(𝑛+1) = (𝑛+1)( +1) = ,
2 2 2
which is the formula with 𝑛 replaced by 𝑛+1.
By induction the formula holds for all 𝑛 ≥ 1. □
We now use induction for a result promised in Chapter 2.
Theorem 3 (The size of a power set — milestone proof). For every 𝑛 ∈ ℕ and every set 𝑋
with Card(𝑋) = 𝑛,
Card(𝒫︀(𝑋)) = 2𝑛.
Proof. We argue by induction on 𝑛 = Card(𝑋).
Base case (𝑛 = 0): the only set with no elements is 𝑋 = ∅, whose sole subset is ∅ itself, so 𝒫︀(∅) =
{∅} has 1 = 20 element.
Inductive step: fix 𝑛 ≥ 0 and assume every 𝑛-element set has 2𝑛 subsets. Let 𝑋 have 𝑛+1 elements.
Pick one element 𝑎 ∈ 𝑋 and set 𝑌 = 𝑋 ∖{𝑎}, so Card(𝑌) = 𝑛. Every subset of 𝑋 falls into exactly one
of two cases:
• it does not contain 𝑎 — then it is a subset of 𝑌; there are 2𝑛 of these by the inductive hypothesis;
• it does contain 𝑎 — then removing 𝑎 leaves a subset of 𝑌, and this pairing is a bijection between
the subsets of 𝑋 containing 𝑎 and the subsets of 𝑌; so there are again 2𝑛 of these.
The two cases are disjoint and exhaust 𝒫︀(𝑋), so by the sum rule Card(𝒫︀(𝑋)) = 2𝑛+2𝑛 = 2𝑛+1, which
is the formula at 𝑛+1.
By induction, Card(𝒫︀(𝑋)) = 2𝑛 for all 𝑛. □


## 4.6. Analysis–synthesis


Many problems ask: does a solution exist, and if so, which? A two-phase method handles these.
Method 5 (Analysis–synthesis).
• Analysis: assume a solution exists and derive the conditions it must satisfy. This narrows the
candidates — often to a single one — but proves nothing yet, because the assumption might
describe nothing real.
• Synthesis: take each surviving candidate and verify it actually solves the problem. Only
verified candidates are genuine solutions.
18

Version of 13 September 2026 Module page
Analysis answers “what could a solution be?”; synthesis answers “which of those really are?”.
Skipping synthesis is a real error, not a formality — analysis can produce phantom candidates that
fail on substitution.
Example — Splitting a function into even and odd parts. Claim. Every function 𝑓 : ℝ ⟶ ℝ
can be written uniquely as 𝑓 = 𝑔+ℎ with 𝑔 even (𝑔(−𝑥) = 𝑔(𝑥)) and ℎ odd (ℎ(−𝑥) = −ℎ(𝑥)).
Analysis. Suppose such 𝑔,ℎ exist. Then 𝑓(𝑥) = 𝑔(𝑥)+ℎ(𝑥) and, replacing 𝑥 by −𝑥, 𝑓(−𝑥) =
𝑔(𝑥)−ℎ(𝑥). Adding and subtracting these forces
𝑓(𝑥)+𝑓(−𝑥) 𝑓(𝑥)−𝑓(−𝑥)
𝑔(𝑥) = , ℎ(𝑥) = .
2 2
So if a decomposition exists it must be this one — uniqueness is settled.
𝑓(−𝑥)+𝑓(𝑥)
Synthesis. Define 𝑔,ℎ by those formulas and check: 𝑔(−𝑥) = = 𝑔(𝑥) so 𝑔 is even;
2
𝑓(−𝑥)−𝑓(𝑥)
ℎ(−𝑥) = = −ℎ(𝑥) so ℎ is odd; and 𝑔+ℎ = 𝑓. They work — existence is settled. The two
2
phases together prove existence and uniqueness. □
19
