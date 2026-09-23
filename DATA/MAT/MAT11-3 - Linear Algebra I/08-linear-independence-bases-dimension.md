# 8. Linear independence, bases, dimension

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 31-33*

Version of 13 September 2026 Module page
8. Linear independence, bases, dimension
We can now answer the question lurking behind op(“Span”): how many vectors do you really
need to generate a space, and is there redundancy among a given set? The answers — independence,
basis, dimension — are the quantitative heart of linear algebra.


## 8.1. Linear independence


A set of vectors is redundant if one of them is a combination of the others; removing it changes
nothing about the span. Independence is the absence of any such redundancy, captured by a single
clean equation.
Definition 13. Vectors 𝑣 ,…,𝑣 are linearly independent if the only scalars satisfying
1 𝑘
𝜆 𝑣 +…+𝜆 𝑣 = 0
1 1 𝑘 𝑘
are 𝜆 = … = 𝜆 = 0 (the trivial combination). If some non-trivial combination gives 0, they are
1 𝑘
linearly dependent.
Example — testing independence is solving a homogeneous system. Are 𝑣 = (1,1,0),
1
𝑣 = (0,1,1), 𝑣 = (1,0,−1) independent? Set 𝜆 𝑣 +𝜆 𝑣 +𝜆 𝑣 = 0; componentwise this is the
2 3 1 1 2 2 3 3
homogeneous system with these vectors as columns. Row-reducing finds 𝜆 = −𝜆 , 𝜆 = 𝜆 ,
1 3 2 3
with 𝜆 free — a non-trivial solution (take 𝜆 = −1, giving (𝜆 ,𝜆 ,𝜆 ) = (1,−1,−1)). So they are
3 3 1 2 3
dependent; indeed 𝑣 −𝑣 −𝑣 = 0. Independence questions are always homogeneous systems
1 2 3
in disguise.
Pitfall. Independence is a property of the whole family, not of pairs. Three vectors can be
pairwise non-parallel yet still dependent — as above, where no two are multiples of each other
but the three together satisfy 𝑣 −𝑣 −𝑣 = 0. Always test the full combination, never just “are
1 2 3
any two parallel?”.


## 8.2. Bases and dimension


Definition 14. Let 𝐸 be a vector space.
• A family is generating (or spanning) if its span is all of 𝐸.
• A basis of 𝐸 is a family that is both linearly independent and generating.
A basis is the “just right” family: generating means enough vectors to reach everything, independent
means no more than enough. Equivalently — and this is the property to remember — a basis is a
family in which every vector of 𝐸 writes uniquely as a linear combination of the basis vectors.
Why should the count of “just right” be the same for every basis? One lemma settles it, and it is worth
seeing proved — it is the engine behind every dimension count in the course.
31

Version of 13 September 2026 Module page
Lemma 1 (Exchange lemma). If 𝑢 ,…,𝑢 are linearly independent in 𝐸 and 𝑤 ,…,𝑤
1 𝑝 1 𝑞
generate 𝐸, then 𝑝 ≤ 𝑞: an independent family is never larger than a generating one.
Proof. We feed the independent vectors into the generating family one at a time, each time discarding
a 𝑤 and keeping the family generating. Since 𝑤 ,…,𝑤 generate 𝐸, write 𝑢 = ∑ 𝑎 𝑤 ; the coeffi-
1 𝑞 1 𝑖 𝑖 𝑖
cients are not all zero (otherwise 𝑢 = 0, impossible in an independent family), say 𝑎 ≠ 0. Solving
1 1
for 𝑤 shows 𝑤 is a combination of 𝑢 ,𝑤 ,…,𝑤 , so this new family still generates 𝐸. Suppose
1 1 1 2 𝑞
after 𝑘 steps the family 𝑢 ,…,𝑢 ,𝑤 ,…,𝑤 still generates. Then 𝑢 is a combination of it; the
1 𝑘 𝑘+1 𝑞 𝑘+1
coefficients of the remaining 𝑤’s cannot all vanish — else 𝑢 would be a combination of 𝑢 ,…,𝑢 ,
𝑘+1 1 𝑘
contradicting independence — so we discard one such 𝑤 and insert 𝑢 . If 𝑝 > 𝑞 we would run
𝑘+1
out of 𝑤’s after 𝑞 steps, leaving 𝑢 ,…,𝑢 generating 𝐸; then 𝑢 would be a combination of them,
1 𝑞 𝑞+1
contradicting independence. Hence 𝑝 ≤ 𝑞. □
Theorem 6 (Dimension is well-defined). In a finitely generated vector space, all bases have
the same number of vectors. This common number is the dimension of 𝐸, written dim𝐸.
Proof. Let ℬ︀ and ℬ︀′ be two bases, of sizes 𝑝 and 𝑞. Since ℬ︀ is independent and ℬ︀′ generates, the
lemma gives 𝑝 ≤ 𝑞. Swapping their roles — ℬ︀′ independent, ℬ︀ generating — gives 𝑞 ≤ 𝑝. Hence
𝑝 = 𝑞. □
Proposition 9 (Incomplete-basis theorem). In a finite-dimensional space 𝐸: every linearly
independent family can be extended to a basis, and every generating family contains a basis.
Proof. To extend an independent family, keep adjoining any vector lying outside its current span;
each addition preserves independence and enlarges the span, so the process must halt — and it can
only halt when the span is all of 𝐸, i.e. at a basis. To thin a generating family, discard any vector
that is already a combination of the others; the family keeps generating, and when no such vector
remains it is independent — a basis. □
Example — standard dimensions. The standard basis of ℝ𝑛 is 𝑒 ,…,𝑒 with 𝑒 having a 1 in
1 𝑛 𝑖
position 𝑖 and 0 elsewhere; thus dimℝ𝑛 = 𝑛. Likewise dimℝ [𝑋] = 𝑛+1 (basis 1,𝑋,…,𝑋𝑛) and
𝑛
dimℳ︀ (ℝ) = 𝑚𝑛.
𝑚,𝑛


## 8.3. Reading dimension off the pivots


The connection to Chapter 3 is the practical payoff of the whole course. Form the matrix whose
columns are your vectors and row-reduce:
Row reduction reads independence, basis, and dimension.
• the vectors are independent iff every column is a pivot column (no free variables);
• the pivot columns of the original matrix form a basis of their span;
• the rank of the matrix — the number of pivots — equals the dimension of that span.
32

Version of 13 September 2026 Module page
So “extract a basis from a generating family” is just “keep the pivot columns”, and “compute the
dimension of a span” is just “count the pivots”. The abstract notions of basis and dimension are
computed by elimination.
The same pivots run the reverse task — the completion direction of the incomplete-basis theorem,
turning an independent family into a basis by adding vectors to it.
Example — completing an independent family to a basis. Extend the independent family
(1,1,0) to a basis of ℝ3. Place it first, adjoin the whole standard basis 𝑒 ,𝑒 ,𝑒 behind it, and reduce
1 2 3
the matrix whose columns are (1,1,0),𝑒 ,𝑒 ,𝑒 :
1 2 3
1 1 0 0 1 1 0 0
(1 0 1 0) ∼ (0 −1 1 0).
0 0 0 1 0 0 0 1
Pivots fall in columns 1, 2 and 4; column 3 has none. Keeping the original pivot columns and
dropping the redundant 𝑒 leaves
2
(1,1,0), 𝑒 = (1,0,0), 𝑒 = (0,0,1),
1 3
three independent vectors — a basis of ℝ3 that contains the vector we started from. Putting
the starting family first guarantees its columns become pivots, so they survive; the adjoined 𝑒 only
𝑖
fill the gaps. This is completion made concrete: adjoin a spanning set, keep the pivot columns.
Proposition 10 (Counting in a space of known dimension). In a space 𝐸 with dim𝐸 = 𝑛:
• any linearly independent family has at most 𝑛 vectors;
• any generating family has at least 𝑛 vectors;
• any family of exactly 𝑛 vectors that is independent or generating is automatically a basis.
The last point saves enormous work: once you know dim𝐸 = 𝑛, a candidate basis of 𝑛 vectors needs
only one of the two properties checked, not both.
33
