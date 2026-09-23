# 2. Sets

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 10-12*

Version of 13 September 2026 Module page
2. Sets


## 2.1. Collecting objects precisely


A theorem is only as clear as the objects it speaks of. “The whole numbers between 1 and 10 with no
odd divisor above 1” is a sentence; {2,4,8} is a set you can compute with. A set is the basic container
of mathematics, and every operation on sets, as we will see, is a logical connective from Chapter 1
applied to the statement “𝑥 belongs”.


## 2.2. Membership, inclusion, and description


Definition 7 (Set, membership, inclusion). A set is a collection of distinct objects, its
elements. We write:
• 𝑥 ∈ 𝐴 for “𝑥 is an element of 𝐴”, and 𝑥 ∉ 𝐴 to deny it;
• 𝐴 ⊂ 𝐵 (“𝐴 is a subset of 𝐵”) when every element of 𝐴 is an element of 𝐵, that is, 𝑥 ∈ 𝐴 ⟹
𝑥 ∈ 𝐵;
• 𝐴 = 𝐵 when 𝐴 ⊂ 𝐵 and 𝐵 ⊂ 𝐴 — the two sets have exactly the same elements.
The empty set ∅ has no elements; it is a subset of every set.
A set may be given by extension, listing its elements, {2,4,8}, or by comprehension {𝑥 ∈ 𝐴 : 𝑃(𝑥)},
read “the elements 𝑥 of 𝐴 such that 𝑃(𝑥) holds”. Two facts about listing: order does not matter
and repetition does not count, so {1,2,2} = {2,1}; a one-element set such as {2} is a singleton. The
standard number systems, nested by inclusion, are
ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ,
the naturals (whole numbers 0,1,2,…), integers, rationals, and reals.
Pitfall. Membership and inclusion are different relations. An element belongs (2 ∈
{1,2,3}); a set is included ({2} ⊂ {1,2,3}). Writing 2 ⊂ {1,2,3} or {2} ∈ {1,2,3} confuses the two.
The set {2} — a box containing the number 2 — is not the number 2.
Definition 8 (Cardinality). A set is finite if it has finitely many elements. Its cardinality
Card(𝐴) (also written |𝐴|) is that number of elements. For example Card(∅) = 0 and
Card({2,4,8}) = 3.


## 2.3. Operations on sets


Definition 9 (Union, intersection, difference, complement). For sets 𝐴,𝐵 inside a fixed
universe 𝐸:
• union 𝐴∪𝐵 = {𝑥 : 𝑥 ∈ 𝐴∨𝑥 ∈ 𝐵} — in either;
• intersection 𝐴∩𝐵 = {𝑥 : 𝑥 ∈ 𝐴∧𝑥 ∈ 𝐵} — in both;
10

Version of 13 September 2026 Module page
• difference 𝐴∖𝐵 = {𝑥 : 𝑥 ∈ 𝐴∧𝑥 ∉ 𝐵} — in 𝐴 but not in 𝐵;
• complement 𝐴𝑐 = 𝐸∖𝐴 = {𝑥 ∈ 𝐸 : 𝑥 ∉ 𝐴} — everything in the universe outside 𝐴.
Each operation is a connective applied to “𝑥 belongs”: union is “or”, intersection is “and”, comple-
ment is “not”. This is why the logic of Chapter 1 transfers wholesale to sets. De Morgan’s laws, read
through membership, become the set identities
(𝐴∪𝐵) 𝑐 = 𝐴𝑐∩𝐵𝑐, (𝐴∩𝐵) 𝑐 = 𝐴𝑐∪𝐵𝑐,
and distributivity of ∧ over ∨ becomes 𝐴∩(𝐵∪𝐶) = (𝐴∩𝐵)∪(𝐴∩𝐶). The complement obeys three
further laws, direct from its definition:
(𝐴𝑐) 𝑐 = 𝐴, 𝐴∩𝐴𝑐 = ∅, 𝐴∪𝐴𝑐 = 𝐸.
Example — Computing with a concrete universe. Let 𝐸 = {1,2,…,10}, 𝐴 = {1,2,3,4,5}, 𝐵 =
{4,5,6,7}. Then 𝐴∪𝐵 = {1,2,3,4,5,6,7}, 𝐴∩𝐵 = {4,5}, 𝐴∖𝐵 = {1,2,3}, and 𝐴𝑐 = {6,7,8,9,10}.
Notice Card(𝐴∪𝐵) = 7 = 5+4−2 = Card(𝐴)+Card(𝐵)−Card(𝐴∩𝐵) — the doubly counted
overlap is subtracted once. This is the inclusion– exclusion count for two sets.


## 2.4. Power set


Definition 10 (Power set). The power set 𝒫︀(𝐴) of a set 𝐴 is the set whose elements are all
the subsets of 𝐴, including ∅ and 𝐴 itself.
Example — Listing a power set. For 𝐴 = {1,2,3},
𝒫︀(𝐴) = {∅,{1},{2},{3},{1,2},{1,3},{2,3},{1,2,3}},
which has 8 = 23 elements. That the count is a power of two is no accident; we prove Card(𝒫︀(𝐴)) =
2Card(𝐴) in Chapter 4, once induction is available.
Pitfall. The elements of 𝒫︀(𝐴) are sets, not the elements of 𝐴. So 2 ∉ 𝒫︀({1,2,3}), but {2} ∈
𝒫︀({1,2,3}) and {2} ⊂ {1,2,3}. Belonging to the power set is being a subset.


## 2.5. Cartesian product


Definition 11 (Ordered pair and Cartesian product). An ordered pair (𝑎,𝑏) records two
objects in order: (𝑎,𝑏) = (𝑐,𝑑) exactly when 𝑎 = 𝑐 and 𝑏 = 𝑑. The Cartesian product of 𝐴 and
𝐵 is
𝐴×𝐵 = {(𝑎,𝑏) : 𝑎 ∈ 𝐴and𝑏 ∈ 𝐵},
the set of all such pairs. For finite sets Card(𝐴×𝐵) = Card(𝐴)⋅Card(𝐵).
11

Version of 13 September 2026 Module page
Unlike a set, an ordered pair is sensitive to order: (1,2) ≠ (2,1), whereas {1,2} = {2,1}. The plane
ℝ2 = ℝ×ℝ is the most familiar Cartesian product — a point is an ordered pair of coordinates.
Example — A small product. With 𝐴 = {1,2} and 𝐵 = {𝑥,𝑦,𝑧},
𝐴×𝐵 = {(1,𝑥),(1,𝑦),(1,𝑧),(2,𝑥),(2,𝑦),(2,𝑧)},
which has 2×3 = 6 elements, matching the cardinality rule.
12
