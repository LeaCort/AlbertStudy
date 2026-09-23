# 5. Sums and Products

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 20-24*

Version of 13 September 2026 Module page
5. Sums and Products


## 5.1. A compact notation for long sums


Writing 1+2+⋯+100 is clear enough; writing the sum of the first hundred squares that way is
not. Index notation packs any such sum into a single symbol, and — more importantly — into a
form we can manipulate with algebraic rules. This chapter turns those rules into fluency and proves
the standard closed forms.
Definition 16 (Sum and product notation). For numbers 𝑎 ,𝑎 ,…,𝑎 (with 𝑚 ≤ 𝑛),
𝑚 𝑚+1 𝑛
𝑛 𝑛
∑ 𝑎 = 𝑎 +𝑎 +⋯+𝑎 , ∏ 𝑎 = 𝑎 ×𝑎 ×⋯×𝑎 .
𝑘 𝑚 𝑚+1 𝑛 𝑘 𝑚 𝑚+1 𝑛
𝑘=𝑚 𝑘=𝑚
𝑛 𝑛
The letter 𝑘 is the index; it is a dummy, so ∑ 𝑎 and ∑ 𝑎 denote the same number. An
𝑘=1 𝑘 𝑖=1 𝑖
empty sum (upper bound below lower) is 0, and an empty product is 1.
More generally, a sum may be indexed by any finite set 𝐼: the notation ∑ 𝑎 adds the 𝑎 over all 𝑖 ∈
𝑖∈𝐼 𝑖 𝑖
𝐼. When 𝐼 is the disjoint union of two pieces 𝐽 and 𝐾 (so 𝐽 ∩𝐾 = ∅), the sum breaks along the split,
∑ 𝑎 = ∑𝑎 + ∑ 𝑎 ,
𝑖 𝑖 𝑖
𝑖∈𝐽∪𝐾 𝑖∈𝐽 𝑖∈𝐾
𝑛
each term counted in exactly one piece. The bounded form ∑ is the special case 𝐼 = ⟦𝑚,𝑛⟧.
𝑘=𝑚


## 5.2. Three rules for rearranging a sum


Proposition 5 (Linearity, reindexing, telescoping). For numbers 𝑎 ,𝑏 and constants 𝜆,𝜇:
𝑘 𝑘
• Linearity:
𝑛 𝑛 𝑛
∑(𝜆𝑎 +𝜇𝑏 ) = 𝜆 ∑ 𝑎 +𝜇 ∑ 𝑏 .
𝑘 𝑘 𝑘 𝑘
𝑘=𝑚 𝑘=𝑚 𝑘=𝑚
• Reindexing (shift):
𝑛 𝑛+𝑝
∑ 𝑎 = ∑ 𝑎
𝑘 𝑗−𝑝
𝑘=𝑚 𝑗=𝑚+𝑝
for any integer shift 𝑝 — renaming the index changes the bounds, not the sum.
• Telescoping:
𝑛
∑(𝑎 −𝑎 ) = 𝑎 −𝑎 ,
𝑘+1 𝑘 𝑛+1 𝑚
𝑘=𝑚
because every interior term cancels its neighbour.
20

Version of 13 September 2026 Module page
Linearity lets you split a sum and pull out constants; it is the same distributive law as in Chapter 1,
now over many terms. Reindexing is pure renaming — indispensable when two sums must be
matched term by term. Telescoping is the most powerful of the three: it collapses an entire sum to
two boundary terms.
𝑛 1
Example — Telescoping in action. Compute ∑ . The trick is partial fractions:
𝑘=1 𝑘(𝑘+1)
1 1 1
= − . With 𝑎 = 1/𝑘 this is −(𝑎 −𝑎 ), so
𝑘 𝑘+1 𝑘
𝑘(𝑘+1) 𝑘 𝑘+1
𝑛
1 1
∑( − ) = −(𝑎 −𝑎 )
𝑘 𝑘+1 𝑛+1 1
𝑘=1
1
= 1−
𝑛+1
𝑛
= .
𝑛+1
A sum with 𝑛 terms collapses to a single fraction.


## 5.3. The same three moves for products


The product ∏ obeys the multiplicative echo of each rule above: replace each sum by a product, and
adding a constant by multiplying by one.
Proposition 6 (Multiplicativity, reindexing, telescoping for products). For numbers
𝑎 ,𝑏 (nonzero wherever one sits under a division) and a constant 𝑐, taken over 𝑘 from 𝑚 to 𝑛
𝑘 𝑘
— so there are 𝑁 = 𝑛−𝑚+1 factors:
• Multiplicativity:
𝑛 𝑛 𝑛 𝑛 𝑛
∏(𝑎 𝑏 ) = (∏ 𝑎 )(∏ 𝑏 ), ∏(𝑐𝑎 ) = 𝑐𝑁 ∏ 𝑎 .
𝑘 𝑘 𝑘 𝑘 𝑘 𝑘
𝑘=𝑚 𝑘=𝑚 𝑘=𝑚 𝑘=𝑚 𝑘=𝑚
• Reindexing (shift):
𝑛 𝑛+𝑝
∏ 𝑎 = ∏ 𝑎
𝑘 𝑗−𝑝
𝑘=𝑚 𝑗=𝑚+𝑝
for any integer shift 𝑝 — renaming the index changes the bounds, not the product.
• Telescoping:
𝑛
𝑎 𝑎
∏ 𝑘+1 = 𝑛+1,
𝑎 𝑎
𝑘=𝑚 𝑘 𝑚
because every interior factor cancels its neighbour.
A pulled-out constant comes out raised to the number of factors 𝑁, not as a plain multiple: that
exponent is the product-world counterpart of the coefficient in linearity. Taking a logarithm makes
𝑛 𝑛
the parallel exact — since ln∏ 𝑎 = ∑ ln𝑎 , every product identity is a sum identity read
𝑘=𝑚 𝑘 𝑘=𝑚 𝑘
through ln.
21

Version of 13 September 2026 Module page
𝑛 𝑘+1
Example — A telescoping product. Compute ∏ . With 𝑎 = 𝑘, each factor is 𝑎 /𝑎 , so
𝑘=1 𝑘 𝑘 𝑘+1 𝑘
the product telescopes to the two boundary terms:
𝑛
𝑘+1 2 3 4 𝑛+1 𝑛+1
∏ = ⋅ ⋅ ⋯ = = 𝑛+1,
𝑘 1 2 3 𝑛 1
𝑘=1
each numerator cancelling the next factor’s denominator — the multiplicative twin of the tele-
scoping sum above.


## 5.4. The standard sums


Telescoping also derives the closed forms for ∑𝑘, ∑𝑘2, ∑𝑘3, without guessing. The idea: sum a
telescoping identity whose interior produces the power you want.
Proposition 7 (The three standard sums). For all 𝑛 ≥ 1,
𝑛 𝑛(𝑛+1) 𝑛 𝑛(𝑛+1)(2𝑛+1) 𝑛 𝑛(𝑛+1) 2
∑ 𝑘 = , ∑ 𝑘2 = , ∑ 𝑘3 = ( ) .
2 6 2
𝑘=1 𝑘=1 𝑘=1
Proof. For the first, expand (𝑘+1) 2−𝑘2 = 2𝑘+1 and sum from 𝑘 = 1 to 𝑛. The left side telescopes
to (𝑛+1) 2−1 = 𝑛2+2𝑛; the right side, by linearity, is 2∑𝑘+𝑛. Equating, 2∑𝑘+𝑛 = 𝑛2+2𝑛, so
∑𝑘 = (𝑛2+𝑛)/2 = 𝑛(𝑛+1)/2.
For the second, do the same with (𝑘+1) 3−𝑘3 = 3𝑘2+3𝑘+1. The left side telescopes to (𝑛+1) 3−
1; the right side is 3∑𝑘2+3∑𝑘+𝑛. Substituting the known ∑𝑘 and solving for ∑𝑘2 gives 𝑛(𝑛+
1)(2𝑛+1)/6. The third is obtained identically from (𝑘+1) 4−𝑘4. □
Remark. Notice ∑𝑘3 = (∑𝑘) 2 : the sum of the first 𝑛 cubes is the square of the 𝑛-th triangular
number. It is a genuine identity, not a coincidence of small cases — the closed forms above prove
it for every 𝑛.


## 5.5. The geometric sum


Theorem 4 (The geometric sum — milestone proof). For every 𝑛 ∈ ℕ and every real 𝑞 ≠ 1,
𝑛 1−𝑞𝑛+1
∑ 𝑞𝑘 = .
1−𝑞
𝑘=0
Proof. Let 𝑆 = ∑ 𝑛 𝑞𝑘 = 1+𝑞+𝑞2+⋯+𝑞𝑛. Multiply by 𝑞 and reindex:
𝑘=0
𝑛+1
𝑞𝑆 = 𝑞+𝑞2+⋯+𝑞𝑛+1 = ∑ 𝑞𝑘.
𝑘=1
Subtract: in 𝑆−𝑞𝑆 every power from 𝑞1 to 𝑞𝑛 appears once with each sign and cancels, leaving only
the two boundary terms
22

Version of 13 September 2026 Module page
𝑆−𝑞𝑆 = 𝑞0−𝑞𝑛+1 = 1−𝑞𝑛+1.
Since 𝑞 ≠ 1 we may divide by 1−𝑞:
1−𝑞𝑛+1
𝑆 = .
1−𝑞
□
Pitfall. The formula needs 𝑞 ≠ 1; the division by 1−𝑞 is illegal at 𝑞 = 1. When 𝑞 = 1 every term
is 1, so the sum is simply 𝑛+1. Always check the ratio before dividing.


## 5.6. The binomial theorem


The binomial coefficients of Chapter 3 earn their name here: they are precisely the coefficients in
the expansion of a power of a sum.
Theorem 5 (The binomial theorem — milestone proof). For every 𝑛 ∈ ℕ and all real 𝑎,𝑏,
𝑛 𝑛
(𝑎+𝑏) 𝑛 = ∑( )𝑎𝑘𝑏𝑛−𝑘.
𝑘
𝑘=0
Proof. We argue by induction on 𝑛, using Pascal’s rule.
Base case (𝑛 = 0): the left side is (𝑎+𝑏) 0 = 1, and the right side is (0)𝑎0𝑏0 = 1.
0
Inductive step: fix 𝑛 ≥ 0 and assume the formula for 𝑛. Then
𝑛 𝑛 𝑛 𝑛 𝑛 𝑛
(𝑎+𝑏) 𝑛+1 = (𝑎+𝑏) ∑( )𝑎𝑘𝑏𝑛−𝑘 = ∑( )𝑎𝑘+1𝑏𝑛−𝑘+ ∑( )𝑎𝑘𝑏𝑛+1−𝑘.
𝑘 𝑘 𝑘
𝑘=0 𝑘=0 𝑘=0
Reindex the first sum with 𝑗 = 𝑘+1 (so 𝑘 = 𝑗−1, and 𝑗 runs from 1 to 𝑛+1):
𝑛+1 𝑛 𝑛 𝑛
∑( )𝑎𝑗𝑏𝑛+1−𝑗 + ∑( )𝑎𝑗𝑏𝑛+1−𝑗.
𝑗−1 𝑗
𝑗=1 𝑗=0
The term 𝑗 = 𝑛+1 (from the first sum) contributes (𝑛)𝑎𝑛+1 = 𝑎𝑛+1; the term 𝑗 = 0 (from the
𝑛
second) contributes (𝑛)𝑏𝑛+1 = 𝑏𝑛+1; and for 𝑗 ∈ ⟦1,𝑛⟧ both sums contribute, giving the coefficient
0
( 𝑛 )+(𝑛) = (𝑛+1) by Pascal’s rule. Collecting,
𝑗−1 𝑗 𝑗
𝑛+1 𝑛+1
(𝑎+𝑏) 𝑛+1 = ∑( )𝑎𝑗𝑏𝑛+1−𝑗,
𝑗
𝑗=0
which is the formula for 𝑛+1.
By induction it holds for all 𝑛 ∈ ℕ. □
Example — Reading off an expansion. Row 4 of Pascal’s triangle is 1,4,6,4,1, so
23

Version of 13 September 2026 Module page
(𝑎+𝑏) 4 = 𝑎4+4𝑎3𝑏+6𝑎2𝑏2+4𝑎𝑏3+𝑏4.
Setting 𝑎 = 𝑏 = 1 gives ∑ 4 (4) = 24 = 16 — the total number of subsets of a 4-element set,
𝑘=0 𝑘
recovering the power-set count of Chapter 4 as a special case.
24
