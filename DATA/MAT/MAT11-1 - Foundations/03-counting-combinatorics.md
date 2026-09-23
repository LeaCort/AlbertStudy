# 3. Counting: Combinatorics

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 13-15*

Version of 13 September 2026 Module page
3. Counting: Combinatorics


## 3.1. Why counting needs a method


How many ways can eight runners finish a race? How many five-card hands are there? Listing is
hopeless once the numbers grow, so we need rules that build large counts from small ones. Two
rules generate everything in this chapter. The product rule: if a first choice can be made in 𝑚 ways
and, for each, a second in 𝑛 ways, the pair can be made in 𝑚𝑛 ways. The sum rule: if two cases are
mutually exclusive, the number of outcomes across both is the sum of the two counts.


## 3.2. Factorial and permutations


Definition 12 (Factorial). For a whole number 𝑛, the factorial is
𝑛! = 𝑛×(𝑛−1)×⋯×2×1,
the product of the integers from 1 to 𝑛, with the convention 0! = 1 (the empty product). Thus
1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120.
Definition 13 (Permutation). A permutation of a finite set is an ordering of all its elements
in a row.
Proposition 4 (Number of permutations). A set of 𝑛 distinct elements has exactly 𝑛! permu-
tations.
Proof. Fill 𝑛 positions left to right. The first position can be any of the 𝑛 elements; the second, any
of the remaining 𝑛−1; and so on down to 1 choice for the last. By the product rule the number of
orderings is 𝑛×(𝑛−1)×⋯×1 = 𝑛!. □
Example — Ordering runners. Eight runners can finish in 8! = 40320 different orders. If we
only record the first three places, we are counting arrangements, the next idea.


## 3.3. Arrangements and combinations


From eight runners, how many gold–silver–bronze podiums are possible, and how many three-
runner committees? Both select three runners from eight, but the podium distinguishes the order of
the three while the committee does not. Ordered selections are arrangements; unordered ones are
combinations.
Definition 14 (Arrangement). An arrangement of 𝑘 elements from a set of 𝑛 (a 𝑘-permu-
tation) is an ordered selection of 𝑘 distinct elements. Their number is
13

Version of 13 September 2026 Module page
𝑛!
𝐴𝑘 = 𝑛×(𝑛−1)×⋯×(𝑛−𝑘+1) = .
𝑛 (𝑛−𝑘)!
The formula is the product rule again: 𝑛 choices for the first slot, 𝑛−1 for the second, down to 𝑛−
𝑘+1 for the 𝑘-th — a product of 𝑘 descending factors.
Definition 15 (Combination and binomial coefficient). A combination of 𝑘 elements
from a set of 𝑛 is an unordered selection of 𝑘 distinct elements — that is, a 𝑘-element subset.
Their number is the binomial coefficient
𝑛 𝑛! 𝐴𝑘
( ) = = 𝑛, for0 ≤ 𝑘 ≤ 𝑛,
𝑘 𝑘!(𝑛−𝑘)! 𝑘!
and (𝑛) = 0 when 𝑘 > 𝑛 or 𝑘 < 0.
𝑘
The division by 𝑘! is the crux: each unordered subset of size 𝑘 can be ordered in 𝑘! ways, so arrange-
ments overcount combinations by exactly the factor 𝑘!. Dividing removes the order.
Pitfall. Order in, order out. Use 𝐴𝑘 when the order of the selection matters (a podium: gold,
𝑛
silver, bronze are distinct roles); use (𝑛) when it does not (a committee of three: no roles).
𝑘
Choosing the wrong one is the most common counting error. A quick check: 𝐴𝑘 = 𝑘!(𝑛), so
𝑛 𝑘
arrangements always exceed combinations by the factor 𝑘!.
Example — Podium versus committee. From 8 runners, the number of possible gold–silver–
bronze podiums is 𝐴3 = 8×7×6 = 336, whereas the number of three-runner committees is (8) =
8 3
336/3! = 336/6 = 56. Same eight people, same three chosen — but the podium distinguishes the
order and the committee does not.
3.4. Pascal’s rule and Pascal’s triangle
Binomial coefficients satisfy one recurrence that generates them all without a single factorial.
Theorem 2 (Pascal’s rule — milestone proof). For all integers 𝑛 ≥ 1 and 𝑘 ∈ ⟦1,𝑛⟧,
𝑛 𝑛−1 𝑛−1
( ) = ( )+( ).
𝑘 𝑘 𝑘−1
Proof. We count the 𝑘-element subsets of {1,2,…,𝑛} in two ways. On one hand there are (𝑛) of them,
𝑘
by definition.
On the other hand, split these subsets according to whether they contain the element 𝑛 — two
mutually exclusive, exhaustive cases.
• Subsets not containing 𝑛 are exactly the 𝑘-element subsets of {1,…,𝑛−1}: there are (𝑛−1) of them.
𝑘
• Subsets containing 𝑛 are formed by adjoining 𝑛 to a (𝑘−1)-element subset of {1,…,𝑛−1}; that
smaller subset can be chosen in (𝑛−1) ways, and each choice gives a distinct subset containing 𝑛.
𝑘−1
14

Version of 13 September 2026 Module page
By the sum rule the total is (𝑛−1)+(𝑛−1). Counting the same collection two ways, the two totals are
𝑘 𝑘−1
equal. □
This recurrence, together with the border values (𝑛) = (𝑛) = 1, lets us build Pascal’s triangle: each
0 𝑛
entry is the sum of the two entries above it.
𝑛 = 0 1
𝑛 = 1 1 1
𝑛 = 2 1 2 1
𝑛 = 3 1 3 3 1
𝑛 = 4 1 4 6 4 1
𝑛 = 5 1 5 10 10 5 1
𝑛 = 6 1 6 15 20 15 6 1
Table 2: Pascal’s triangle: row 𝑛 lists (𝑛),…,(𝑛). Each inner entry is the sum of the two just above it
0 𝑛
(for instance 15 = 5+10), which is exactly Pascal’s rule. Each row is symmetric, since (𝑛) = ( 𝑛 ).
𝑘 𝑛−𝑘
The symmetry (𝑛) = ( 𝑛 ) visible in every row has a one-line reason: choosing the 𝑘 elements to
𝑘 𝑛−𝑘
include is the same as choosing the 𝑛−𝑘 elements to leave out.
15
