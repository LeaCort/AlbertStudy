# 9. Grassmann's formula

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 34-35*

Version of 13 September 2026 Module page
9. Grassmann’s formula
Sums and intersections of subspaces interact through a single, memorable counting law — the linear-
algebra analogue of inclusion–exclusion for sets. It carries the name of Hermann Grassmann, who
founded the theory of dimension in the 1840s.
Theorem 7 (Grassmann's formula). For finite-dimensional subspaces 𝐹,𝐺 of a vector space,
dim(𝐹 +𝐺) = dim𝐹 +dim𝐺−dim(𝐹 ∩𝐺).
Because it relates the four dimensions dim(𝐹 +𝐺), dim𝐹, dim𝐺, dim(𝐹 ∩𝐺), it is also known as the
four-dimensions formula. The intuition mirrors counting a union of two sets: adding dim𝐹 and
dim𝐺 counts the overlap 𝐹 ∩𝐺 twice, so we subtract it once. It is the tool for finding the dimension
of an intersection that is awkward to describe directly: rearrange to dim(𝐹 ∩𝐺) = dim𝐹 +dim𝐺−
dim(𝐹 +𝐺).
Proof. Start from a basis 𝑢 ,…,𝑢 of 𝐹 ∩𝐺 (so dim(𝐹 ∩𝐺) = 𝑟). Because 𝐹 ∩𝐺 sits inside both 𝐹 and
1 𝑟
𝐺, the incomplete-basis theorem lets us extend it — to a basis 𝑢 ,…,𝑢 ,𝑓,…,𝑓 of 𝐹 (so dim𝐹 =
1 𝑟 1 𝑠
𝑟+𝑠) and to a basis 𝑢 ,…,𝑢 ,𝑔 ,…,𝑔 of 𝐺 (so dim𝐺 = 𝑟+𝑡). We claim the combined family
1 𝑟 1 𝑡
𝑢 ,…,𝑢 ,𝑓,…,𝑓,𝑔 ,…,𝑔 is a basis of 𝐹 +𝐺. It generates 𝐹 +𝐺, since together the two bases reach
1 𝑟 1 𝑠 1 𝑡
all of 𝐹 and all of 𝐺. For independence, suppose
∑𝑎 𝑢 +∑𝑏 𝑓 +∑𝑐 𝑔 = 0.
𝑖 𝑖 𝑗 𝑗 𝑘 𝑘
𝑖 𝑗 𝑘
Then ∑ 𝑐 𝑔 = −(∑ 𝑎 𝑢 +∑ 𝑏 𝑓 ) lies in 𝐹 (right-hand side) and in 𝐺 (left-hand side), hence
𝑘 𝑘 𝑘 𝑖 𝑖 𝑖 𝑗 𝑗 𝑗
in 𝐹 ∩𝐺. Writing this vector in the basis 𝑢 ,…,𝑢 and comparing with ∑ 𝑐 𝑔 inside the basis
1 𝑟 𝑘 𝑘 𝑘
𝑢 ,…,𝑢 ,𝑔 ,…,𝑔 of 𝐺 forces every 𝑐 = 0. What remains, ∑ 𝑎 𝑢 +∑ 𝑏 𝑓 = 0, is a relation in the
1 𝑟 1 𝑡 𝑘 𝑖 𝑖 𝑖 𝑗 𝑗 𝑗
basis of 𝐹, so all 𝑎 and 𝑏 vanish too. The family is independent, thus a basis, and
𝑖 𝑗
dim(𝐹 +𝐺) = 𝑟+𝑠+𝑡
= (𝑟+𝑠)+(𝑟+𝑡)−𝑟
= dim𝐹 +dim𝐺−dim(𝐹 ∩𝐺).
□
Example — two planes in space. Let 𝐹,𝐺 be two distinct planes through the origin in ℝ3,
so dim𝐹 = dim𝐺 = 2. Their sum is all of ℝ3 (two distinct planes together reach everything), so
dim(𝐹 +𝐺) = 3. Then
dim(𝐹 ∩𝐺) = 2+2−3 = 1 :
two distinct planes through the origin meet in a line, exactly as geometry insists.
Proposition 11 (Direct sum, by the numbers). 𝐹 ⊕𝐺 = 𝐸 holds if and only if both 𝐹 ∩𝐺 =
{0} and dim𝐹 +dim𝐺 = dim𝐸.
34

Version of 13 September 2026 Module page
This is the practical test for complementary subspaces: check that the dimensions add up to dim𝐸
and that the intersection is trivial. Indeed, when 𝐹 ∩𝐺 = {0} Grassmann’s formula gives dim(𝐹 +
𝐺) = dim𝐹 +dim𝐺 = dim𝐸, so 𝐹 +𝐺 = 𝐸; together with 𝐹 ∩𝐺 = {0} this is exactly complemen-
tarity by the characterization of a direct sum in Chapter 7.
Pitfall. Both conditions are needed. Two distinct lines in ℝ3 satisfy 𝐹 ∩𝐺 = {0} but only
dim𝐹 +dim𝐺 = 2 ≠ 3, so they do not span ℝ3. Conversely the dimensions can add up while
the intersection is non-trivial. Neither condition alone certifies a direct-sum decomposition.
35
