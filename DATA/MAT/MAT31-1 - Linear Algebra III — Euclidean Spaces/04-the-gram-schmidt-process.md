# 4. The Gram–Schmidt process

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 15-17*

Version of 13 September 2026 Module page
4. The Gram–Schmidt process
Orthonormal bases are wonderful, but a basis handed to you is rarely orthonormal. The Gram–
Schmidt process is the algorithm that repairs this: it takes any basis and manufactures an
orthonormal one occupying exactly the same space, one vector at a time.


## 4.1. The idea: subtract off what overlaps


The core move is to take a new vector and remove its component along the directions already
handled, leaving a remainder orthogonal to all of them. The component of 𝑣 along a unit vector 𝑒
is ⟨𝑣,𝑒⟩𝑒; subtracting it leaves 𝑣−⟨𝑣,𝑒⟩𝑒, which is orthogonal to 𝑒 by construction.
𝑣
2
𝑤
2
⟨𝑣 ,𝑒 ⟩𝑒 𝑒
2 1 1 1
Figure 3: One Gram–Schmidt step. From 𝑣 subtract its component along the already-fixed direction
2
𝑒 ; the remainder 𝑤 = 𝑣 −⟨𝑣 ,𝑒 ⟩𝑒 is orthogonal to 𝑒 (right angle marked). Normalizing 𝑤 gives
1 2 2 2 1 1 1 2
𝑒 . Each new vector is purged of every direction already in the basis.
2


## 4.2. The algorithm


Theorem 3 (Gram–Schmidt process). Let (𝑣 ,…,𝑣 ) be a linearly independent family in an
1 𝑘
inner product space. Define recursively
𝑗−1 ⟨𝑣 ,𝑤 ⟩
𝑗 𝑖
𝑤 = 𝑣 , 𝑤 = 𝑣 − ∑ 𝑤 (𝑗 = 2,…,𝑘),
1 1 𝑗 𝑗 ⟨𝑤 ,𝑤 ⟩ 𝑖
𝑖=1 𝑖 𝑖
‖ ‖
and set 𝑒 = 𝑤 / 𝑤 . Then (𝑒 ,…,𝑒 ) is orthonormal and, for every 𝑗,
𝑗 𝑗 ‖ 𝑗‖ 1 𝑘
Span(𝑒 ,…,𝑒 ) = Span(𝑣 ,…,𝑣 ).
1 𝑗 1 𝑗
The displayed span-preservation property is as important as the orthonormality: Gram–Schmidt
does not merely produce some orthonormal family, it produces one that fills the same nested
subspaces as the original. The first 𝑗 outputs span exactly what the first 𝑗 inputs did.
Proof. By induction each 𝑤 is, by construction, the part of 𝑣 orthogonal to all earlier 𝑤 : taking ⟨⋅
𝑗 𝑗 𝑖
,𝑤 ⟩ for 𝑚 < 𝑗 and using that the earlier 𝑤 are already mutually orthogonal, every term cancels
𝑚 𝑖
except the one that subtracts off the overlap, giving ⟨𝑤 ,𝑤 ⟩ = 0. Since each 𝑤 differs from 𝑣 only
𝑗 𝑚 𝑗 𝑗
by a combination of earlier vectors, the spans coincide at each stage. Normalizing rescales without
changing direction or span. Independence of the 𝑣 guarantees no 𝑤 is zero, so the division is
𝑖 𝑗
legitimate. □
15

Version of 13 September 2026 Module page
Example — Gram–Schmidt in ℝ3. Orthonormalize 𝑣 = (1,1,0), 𝑣 = (1,0,1), 𝑣 = (0,1,1).
1 2 3
1
Step 1. 𝑤 = (1,1,0), ‖𝑤 ‖ = √2, so 𝑒 = (1,1,0).
1 1 1
√2
Step 2. ⟨𝑣 ,𝑤 ⟩ = 1, ⟨𝑤 ,𝑤 ⟩ = 2, so
2 1 1 1
1 1 1
𝑤 = (1,0,1)− (1,1,0) = ( ,− ,1),
2 2 2 2
1 1 3 2 1 1 1
with ‖𝑤 ‖ = + +1 = , giving 𝑒 = ( ,− ,1) = (1,−1,2).
2 √ √ 2 √
4 4 2 3 2 2 √6
1 1
Step 3. ⟨𝑣 ,𝑤 ⟩ = 1 and ⟨𝑣 ,𝑤 ⟩ = − +1 = :
3 1 3 2
2 2
1
1 1 1 1 1 1 1 1
𝑤 = (0,1,1)− (1,1,0)− 2( ,− ,1) = (0,1,1)−( , ,0)−( ,− , ).
3 2 3 2 2 2 2 6 6 3
2
2 2 2 2 1
This is 𝑤 = (− , , ), with ‖𝑤 ‖ = , so 𝑒 = (−1,1,1). The three 𝑒 are orthonormal —
3 3 3 𝑖
3 3 3 √3 √3
1−1+0
check, e.g., ⟨𝑒 ,𝑒 ⟩ = = 0. ✓
1 2
√12
Pitfall. Two slips are common. First, when not normalizing as you go, you must divide by
⟨𝑤 ,𝑤 ⟩ — not by ⟨𝑣 ,𝑣 ⟩ — in the projection coefficients; project onto the already-orthogo-
𝑖 𝑖 𝑖 𝑖
nalized 𝑤 , never the raw 𝑣 . Second, the process needs the input to be independent; if the 𝑣
𝑖 𝑖 𝑗
are dependent, some 𝑤 comes out 0 and the normalization divides by zero — the signal that 𝑣
𝑗 𝑗
was already in the span of its predecessors.


## 4.3. Application to function and polynomial spaces


Because Gram–Schmidt uses only the scalar product, it runs unchanged in spaces of polynomials or
functions, where it produces families of orthogonal polynomials and orthogonal functions.
Example — Legendre polynomials. Apply Gram–Schmidt to 1,𝑥,𝑥2 on ℝ[𝑋] with ⟨𝑃,𝑄⟩ =
≤2
∫1
𝑃𝑄𝑑𝑥. Note the interval here is [−1,1], not the [0,1] used elsewhere in this book: a different
−1
interval is a different scalar product, and the Legendre polynomials are the ones tied to the sym-
metric interval [−1,1]. Start with 𝑤 = 1. Then ⟨𝑥,1⟩ =
∫1
𝑥𝑑𝑥 = 0, so 𝑥 is already orthogonal
1 −1
to 1: 𝑤 = 𝑥. For 𝑥2, ⟨𝑥2,1⟩ = 2 and ⟨1,1⟩ = 2, while ⟨𝑥2,𝑥⟩ = 0, so
2
3
2
1
𝑤 = 𝑥2− 3 ⋅1 = 𝑥2− .
3 2 3
The outputs 1,𝑥,𝑥2− 1 are the first Legendre polynomials (up to scaling) — the orthogonal
3
basis underlying Gaussian quadrature and many approximation schemes.
The next example leaves polynomials behind entirely, orthonormalizing genuine non-polynomial
functions.
Example — the Fourier basis. On the space of continuous functions on [0,2𝜋] with
16

Version of 13 September 2026 Module page
2𝜋
⟨𝑓,𝑔⟩ = ∫ 𝑓(𝑥)𝑔(𝑥)𝑑𝑥,
0
orthonormalize the three functions 1,cos𝑥,sin𝑥 — none of them a polynomial. Their pairwise
scalar products all vanish:
2𝜋
⟨1,cos𝑥⟩ = ∫ cos𝑥𝑑𝑥 = 0, ⟨1,sin𝑥⟩ = 0, ⟨cos𝑥,sin𝑥⟩ = 0,
0
where the last two use the identity cos𝑥sin𝑥 = (sin2𝑥)/2, whose integral over the full period
[0,2𝜋] is 0. So the family is already orthogonal — Gram–Schmidt subtracts nothing and only
normalizes. Since ⟨1,1⟩ = 2𝜋 and, using cos2𝑥 = (1+cos2𝑥)/2 and sin2𝑥 = (1−cos2𝑥)/2 (again
the cos2𝑥 term integrates to 0 over the period), ⟨cos𝑥,cos𝑥⟩ = ⟨sin𝑥,sin𝑥⟩ = 𝜋, the orthonormal
family is
1 cos𝑥 sin𝑥
, , .
√2𝜋 √𝜋 √𝜋
These are the first vectors of the Fourier basis, the function-space analogue of an orthonormal
basis of ℝ𝑛. Reading a function’s coordinates in it by single scalar products ⟨𝑓,𝑒 ⟩ — exactly the
𝑖
orthonormal-basis coordinate rule, now applied to functions — is what computes its Fourier
coefficients. Their mutual orthogonality, checked above, is precisely why that expansion works.
17
