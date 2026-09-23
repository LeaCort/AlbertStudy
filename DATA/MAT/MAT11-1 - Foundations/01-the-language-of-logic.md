# 1. The Language of Logic

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 6-9*

Version of 13 September 2026 Module page
1. The Language of Logic


## 1.1. Reading a statement and its converse


Consider the claim: “if a whole number 𝑛 is divisible by 6, then it is divisible by 3.” You believe
it. Now consider its converse: “if 𝑛 is divisible by 3, then it is divisible by 6.” That is false (𝑛 =
9). Same two properties, the arrow reversed, and truth flips to falsehood. Many reasoning errors in
mathematics are exactly this: confusing a statement with one of its rearrangements. This chapter
builds the machinery that makes such confusions impossible.


## 1.2. Propositions and connectives


Definition 1 (Proposition). A proposition is a statement that is either true or false, but
not both. “5 > 3” is a proposition (true). “𝑥 > 3” is not a proposition until we know 𝑥 — it is a
predicate, a statement with a free variable, which becomes a proposition once the variable is
fixed or quantified.
From propositions 𝑃 and 𝑄 we build compound propositions using connectives. Each is defined by
a truth table, which lists the truth value of the compound for every combination of inputs.
Definition 2 (The basic connectives).
• Negation ¬𝑃 (“not 𝑃”) is true exactly when 𝑃 is false.
• Conjunction 𝑃∧𝑄 (“𝑃 and 𝑄”) is true exactly when both are true.
• Disjunction 𝑃∨𝑄 (“𝑃 or 𝑄”) is true when at least one is true. This is the inclusive or: it is
true when both hold.
• Implication 𝑃 ⟹ 𝑄 (“𝑃 implies 𝑄”, “if 𝑃 then 𝑄”) is false only in the single case 𝑃 true and
𝑄 false.
• Equivalence 𝑃 ⟺ 𝑄 (“𝑃 if and only if 𝑄”) is true exactly when 𝑃 and 𝑄 have the same
truth value.
𝑃 𝑄 ¬𝑃 𝑃∧𝑄 𝑃∨𝑄 𝑃 ⟹ 𝑄 𝑃 ⟺ 𝑄
T T F T T T T
T F F F T F F
F T T F T T F
F F T F F T T
Table 1: The truth tables of the five connectives on one grid. Read each row as one possible situation;
each column tells you whether the compound is true in that situation.
Definition 3 (Truth table, logical equivalence). The truth table of a compound proposition
lists its truth value for every combination of truth values of the atomic propositions it is built
from — 2𝑘 rows for 𝑘 atoms. Two propositions are logically equivalent, written 𝑃 ≡ 𝑄, when
they have the same truth table: the same truth value in every row.
6

Version of 13 September 2026 Module page
The implication row is worth examining closely. Why is 𝑃 ⟹ 𝑄 true whenever 𝑃 is false? Think of a
promise: “if it rains, I will bring an umbrella.” You have broken that promise only on a day when
it rains and you have no umbrella. On a dry day you have broken nothing — whatever you carry.
An implication with a false hypothesis is vacuously true; it makes no claim. And because a false
hypothesis makes every implication true, from a contradiction 𝑃∧¬𝑃 one could infer any propo-
sition at all — the principle of explosion, which is exactly what makes reaching a contradiction
fatal to an assumption (Chapter 4).
Pitfall. 𝑃 ⟹ 𝑄 does not mean that 𝑃 causes 𝑄, nor that 𝑃 and 𝑄 are both true. “If 2+2 = 5,
then 7 is even” is a true implication, because its hypothesis is false — even though its conclusion
is false too. Implication is about the pattern of truth values, not about meaning or cause.
An implication is also the standard way to phrase a condition.
Definition 4 (Necessary and sufficient conditions). For the implication 𝑃 ⟹ 𝑄:
• 𝑃 is a sufficient condition for 𝑄 — the truth of 𝑃 suffices to guarantee 𝑄;
• 𝑄 is a necessary condition for 𝑃 — 𝑄 must hold whenever 𝑃 does.
An implication thus delivers a sufficient condition for its conclusion, and equivalently a
necessary condition for its hypothesis. An equivalence 𝑃 ⟺ 𝑄 makes each of 𝑃 and 𝑄 both
necessary and sufficient for the other.
To analyse a compound proposition built from several connectives, extend the table one column at
a time, working from the innermost pieces outward. Each new column is computed from columns
already filled, using the row-by-row rules above.
Example — An implication rewritten without the arrow. Is 𝑃 ⟹ 𝑄 the same as (¬𝑃)∨𝑄?
Build both, one column at a time. There are two variables, so 22 = 4 rows. Add a column for ¬𝑃,
combine it with 𝑄 using the “or” rule, then compare with the implication column.
𝑃 𝑄 ¬𝑃 (¬𝑃)∨𝑄 𝑃 ⟹ 𝑄
T T F T T
T F F F F
F T T T T
F F T T T
The last two columns are identical, so 𝑃 ⟹ 𝑄 ≡ (¬𝑃)∨𝑄: an implication is “not the hypothesis,
or the conclusion”. In plain words, the promise “if it rains, I bring an umbrella” says exactly “it is
not raining, or I bring an umbrella” — the two describe the very same set of days.
Three further laws govern negation itself.
Proposition 1 (Excluded middle, non-contradiction, involution). For every proposition 𝑃,
the proposition 𝑃∨¬𝑃 is always true (the law of the excluded middle), and 𝑃∧¬𝑃 is always
false (non-contradiction); and negating twice changes nothing (involution of negation):
7

Version of 13 September 2026 Module page
¬(¬𝑃) ≡ 𝑃.


## 1.3. Contrapositive, converse, and the mistakes they cause


Given 𝑃 ⟹ 𝑄, three related implications can be formed.
Definition 5 (Converse, inverse, contrapositive). For the implication 𝑃 ⟹ 𝑄:
• its converse is 𝑄 ⟹ 𝑃;
• its inverse is ¬𝑃 ⟹ ¬𝑄;
• its contrapositive is ¬𝑄 ⟹ ¬𝑃.
The single most useful fact in this chapter:
Theorem 1 (An implication equals its contrapositive). 𝑃 ⟹ 𝑄 and ¬𝑄 ⟹ ¬𝑃 are logi-
cally equivalent — they have identical truth tables. By contrast, the converse and inverse are
not equivalent to the original, though they are equivalent to each other.
Proof. Compare columns. 𝑃 ⟹ 𝑄 is false only when 𝑃 is T and 𝑄 is F. Now ¬𝑄 ⟹ ¬𝑃 is false only
when ¬𝑄 is T and ¬𝑃 is F, that is, 𝑄 is F and 𝑃 is T — the very same situation. Two propositions false
in exactly the same rows are true in exactly the same rows, hence equivalent. □
Pitfall. Affirming the converse is a classic error. From “if it rained, the ground is wet” and
“the ground is wet”, you may not conclude “it rained” — someone may have used a hose. The
truth of 𝑃 ⟹ 𝑄 tells you nothing about 𝑄 ⟹ 𝑃.
1.4. De Morgan’s laws and distributivity
To disprove a claim, or to run a proof by contradiction, you must negate it correctly. The rules are
mechanical once learned.
Proposition 2 (De Morgan's laws and the negation of an implication).
¬(𝑃∧𝑄) ≡ (¬𝑃)∨(¬𝑄),
¬(𝑃∨𝑄) ≡ (¬𝑃)∧(¬𝑄),
¬(𝑃 ⟹ 𝑄) ≡ 𝑃∧(¬𝑄).
The last one is the most often mishandled. The negation of “if 𝑃 then 𝑄” is not another implication
— it is the assertion that 𝑃 holds and yet 𝑄 fails. To deny the promise “if it rains I bring an umbrella”
is to describe one rainy, umbrella-less day.
The connectives ∧ and ∨ also distribute over one another, exactly as × distributes over + in
arithmetic.
8

Version of 13 September 2026 Module page
Proposition 3 (Distributivity of conjunction and disjunction).
𝑃∧(𝑄∨𝑅) ≡ (𝑃∧𝑄)∨(𝑃∧𝑅),
𝑃∨(𝑄∧𝑅) ≡ (𝑃∨𝑄)∧(𝑃∨𝑅).
Both are verified by an eight-row truth table, one row per truth assignment to 𝑃,𝑄,𝑅. Distributivity
is the logical backbone of the set identities in Chapter 2: union distributes over intersection precisely
because “or” distributes over “and”.


## 1.5. Quantifiers


So far a predicate such as “𝑥 > 3” became a proposition only once 𝑥 was fixed. Quantifiers turn a
predicate into a proposition in a second way: by stating for how many values of the variable it holds.
Definition 6 (Universal and existential quantifiers). For a predicate 𝑃(𝑥) ranging over a
set of values:
• ∀𝑥, 𝑃(𝑥): “for all 𝑥, 𝑃(𝑥) holds”;
• ∃𝑥, 𝑃(𝑥): “there exists an 𝑥 with 𝑃(𝑥)”;
• ∃!𝑥, 𝑃(𝑥): “there exists a unique such 𝑥”.
Pitfall. The order of quantifiers changes the meaning. Over the whole numbers, “∀𝑥,∃𝑦 :
𝑦 > 𝑥” (every number has a larger one — true) is utterly different from “∃𝑦,∀𝑥 : 𝑦 > 𝑥” (one
number is larger than all — false). When you swap ∀ and ∃ you have written a new statement,
usually with a new truth value.
Of the two orders, the one with ∃ before ∀ is the stronger: a single 𝑦 that works for every 𝑥 is
a more demanding requirement. Indeed “∃𝑦,∀𝑥 : 𝑃(𝑥,𝑦)” implies “∀𝑥,∃𝑦 : 𝑃(𝑥,𝑦)” — the same 𝑦
serves each 𝑥 — while the converse fails, as the example above shows.
To negate a quantified statement, push the negation inward, flipping each quantifier as it passes:
¬(∀𝑥, 𝑃(𝑥)) ≡ ∃𝑥, ¬𝑃(𝑥),
¬(∃𝑥, 𝑃(𝑥)) ≡ ∀𝑥, ¬𝑃(𝑥).
“Not everyone passed” means “someone did not pass” — not “everyone failed”. A chain of quantifiers
is negated left to right: every ∀ becomes ∃, every ∃ becomes ∀, and the predicate at the end is negated.
Example — Negating a two-quantifier statement. Negate “∀𝜀 > 0,∃𝑛 : 1/𝑛 < 𝜀”. Flip each
quantifier and negate the inside:
∃𝜀 > 0, ∀𝑛 : 1/𝑛 ≥ 𝜀.
The original says “1/𝑛 can be made as small as we like”; its negation claims a positive 𝜀 that 1/𝑛
never drops below. The original is true, so its negation is false — but negating correctly is a separate
skill from deciding truth.
9
