# 2. Norm, Cauchy–Schwarz, and angle

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 8-12*

Version of 13 September 2026 Module page
2. Norm, Cauchy–Schwarz, and angle
With a scalar product in hand we can finally measure. The squared length of a vector is ⟨𝑢,𝑢⟩; taking
a square root gives its length, or norm. The deeper miracle is that the scalar product also encodes
angle — and the bridge between the two is a single inequality, the most important in the course.


## 2.1. The norm


In the plane the length of (3,4) is √32+42 = 5, which is exactly √⟨(3,4),(3,4)⟩ under the standard
product. Taking the square root of the scalar product of a vector with itself is what turns a squared
length into a length, and the same recipe works in any inner product space.
Definition 3. In an inner product space, the norm (or length) of a vector 𝑢 is
‖𝑢‖ = √⟨𝑢,𝑢⟩.
A vector with ‖𝑢‖ = 1 is a unit vector. For any 𝑢 ≠ 0, the vector 𝑢/‖𝑢‖ is a unit vector in the
same direction; replacing 𝑢 by it is called normalizing.
The square root is well-defined precisely because positive definiteness makes ⟨𝑢,𝑢⟩ ≥ 0. In the stan-
dard product on ℝ𝑛 this is ‖𝑢‖ = √𝑢2
1
+…+𝑢2
𝑛
, the ordinary Euclidean length. In the polynomial
space it is ‖𝑃‖ = ∫1 𝑃(𝑥) 2𝑑𝑥, a perfectly good “length” of a polynomial.
√
0
Proposition 1 (Basic properties of the norm). For all 𝑢 and scalars 𝜆:
• ‖𝑢‖ ≥ 0, with ‖𝑢‖ = 0 if and only if 𝑢 = 0;
• ‖𝜆𝑢‖ = |𝜆|‖𝑢‖ (absolute homogeneity).


## 2.2. The Cauchy–Schwarz inequality


This is the central inequality of the course. It bounds the scalar product of two vectors by the product
of their lengths — and it is what allows angle to be defined.
Try it on 𝑢 = (1,2,2) and 𝑣 = (2,2,1) in ℝ3: here ⟨𝑢,𝑣⟩ = 2+4+2 = 8, while ‖𝑢‖ = ‖𝑣‖ = √9 = 3,
so ‖𝑢‖‖𝑣‖ = 9. The scalar product 8 stays under the product of lengths 9 — and only just, the ratio
8/9 ≈ 0.89 being close to 1 because 𝑢 and 𝑣 point in nearly the same direction. The theorem says
this is no accident: the scalar product can never exceed the product of the lengths, in any inner
product space.
Theorem 1 (Cauchy–Schwarz inequality). For all vectors 𝑢,𝑣 in an inner product space,
|⟨𝑢,𝑣⟩| ≤ ‖𝑢‖‖𝑣‖,
with equality if and only if 𝑢 and 𝑣 are collinear (one is a scalar multiple of the other).
Proof. For every real 𝑡, build the number
8

Version of 13 September 2026 Module page
𝑃(𝑡) = ‖𝑢+𝑡𝑣‖2,
which is ≥ 0 by positive definiteness. Expanding it by bilinearity and symmetry,
𝑃(𝑡) = ⟨𝑢+𝑡𝑣,𝑢+𝑡𝑣⟩ = ‖𝑢‖2+2𝑡⟨𝑢,𝑣⟩+𝑡2‖𝑣‖2.
Dispose of the degenerate case first: if 𝑣 = 0 then both sides of the claimed inequality are 0 and there
is nothing to prove, so assume 𝑣 ≠ 0. Then ‖𝑣‖2 > 0, so 𝑃 is a genuine quadratic in 𝑡 with positive
leading coefficient that is never negative; its discriminant is therefore ≤ 0:
(2⟨𝑢,𝑣⟩) 2−4‖𝑣‖2‖𝑢‖2 ≤ 0, that is ⟨𝑢,𝑣⟩ 2 ≤ ‖𝑢‖2‖𝑣‖2.
Taking square roots gives |⟨𝑢,𝑣⟩| ≤ ‖𝑢‖‖𝑣‖.
For the equality case, suppose |⟨𝑢,𝑣⟩| = ‖𝑢‖‖𝑣‖ with 𝑣 ≠ 0. Then the discriminant is exactly 0, so the
quadratic 𝑃 has a real double root 𝑡 , at which 𝑃(𝑡 ) = ‖𝑢+𝑡 𝑣‖2 = 0; positive definiteness forces 𝑢+
0 0 0
𝑡 𝑣 = 0, so 𝑢 = −𝑡 𝑣 and 𝑢,𝑣 are collinear. Conversely, if 𝑢 = 𝜆𝑣 then |⟨𝑢,𝑣⟩| = |𝜆|‖𝑣‖2 = ‖𝑢‖‖𝑣‖, so
0 0
collinearity gives equality. (When 𝑣 = 0 the vectors are trivially collinear and both sides are 0.) □
A first consequence of Cauchy–Schwarz is that norms add the way lengths should.
Proposition 2 (Triangle inequality). ‖𝑢+𝑣‖ ≤ ‖𝑢‖+‖𝑣‖ for all 𝑢,𝑣.
Proof. Expanding and applying Cauchy–Schwarz,
‖𝑢+𝑣‖2 = ‖𝑢‖2+2⟨𝑢,𝑣⟩+‖𝑣‖2 ≤ ‖𝑢‖2+2‖𝑢‖‖𝑣‖+‖𝑣‖2 = (‖𝑢‖+‖𝑣‖) 2.
Take square roots. □


## 2.3. Angle and cosine similarity


Because Cauchy–Schwarz guarantees that the ratio ⟨𝑢,𝑣⟩/(‖𝑢‖‖𝑣‖) always lies in [−1,1], it is exactly
the cosine of an angle.
Definition 4. The angle 𝜃 ∈ [0,𝜋] between two non-zero vectors 𝑢,𝑣 is defined by
⟨𝑢,𝑣⟩
cos𝜃 = .
‖𝑢‖‖𝑣‖
In data science this quantity is called the cosine similarity of 𝑢 and 𝑣.
The definition is legitimate only because Cauchy–Schwarz keeps the right-hand side within [−1,1],
the range of cosine. This is the payoff of the inequality: it is what makes “angle” meaningful in
spaces — polynomials, matrices, documents-as-word-count-vectors — where no protractor could
ever reach.
9

Version of 13 September 2026 Module page
𝑣
𝜃 𝑢
Figure 1: The angle 𝜃 between 𝑢 and 𝑣 is recovered from the scalar product alone: cos𝜃 =
⟨𝑢,𝑣⟩/(‖𝑢‖‖𝑣‖). Cauchy–Schwarz guarantees this ratio lies in [−1,1], so the angle always exists.
Parallel vectors give cos𝜃 = ±1; perpendicular ones give cos𝜃 = 0.
Pitfall. Cosine similarity measures direction, not magnitude. The vectors (1,1) and
(1000,1000) have cosine similarity 1 — they are perfectly “similar” though hugely different in
length. This is exactly why it suits comparing documents of very different sizes, but it also means
a near-1 cosine says nothing about how large the vectors are.


## 2.4. A wider world of norms


Everything so far measured length with the induced norm ‖𝑢‖ = √⟨𝑢,𝑢⟩, born from a scalar product.
But “length” is a more general idea: any function assigning a sensible size to vectors deserves the
name, whether or not a scalar product stands behind it. Isolating the three properties that make the
induced norm work gives the general definition.
Definition 5. A norm on a real vector space 𝐸 is a map 𝑁 : 𝐸 ⟶ ℝ, written 𝑁(𝑢) = ‖𝑢‖, such
that for all 𝑢,𝑣 and scalars 𝜆:
1. positive definiteness: ‖𝑢‖ ≥ 0, with ‖𝑢‖ = 0 only for 𝑢 = 0;
2. homogeneity: ‖𝜆𝑢‖ = |𝜆|‖𝑢‖;
3. triangle inequality: ‖𝑢+𝑣‖ ≤ ‖𝑢‖+‖𝑣‖.
The induced norm satisfies all three — the first two are the norm’s basic properties recorded earlier,
the third is the triangle inequality proved above from Cauchy–Schwarz. But on ℝ𝑛 there are useful
norms of a different origin, not induced by any scalar product.
Example — three norms on the same space. For 𝑥 = (𝑥 ,…,𝑥 ) ∈ ℝ𝑛, three standard norms
1 𝑛
are
𝑛 (cid:102) 𝑛
(cid:101)
‖𝑥‖ = ∑|𝑥 |, ‖𝑥‖ = ∑𝑥2, ‖𝑥‖ = max|𝑥 |.
1 𝑖 2 𝑖 ∞ 𝑖
𝑖=1 √𝑖=1 𝑖
The middle one, ‖𝑥‖ , is the familiar Euclidean (induced) norm. The taxicab norm ‖𝑥‖ adds the
2 1
coordinate distances — total travel on a grid of streets. The maximum norm ‖𝑥‖ reports the
∞
single largest coordinate. Each obeys the three axioms, so each is a legitimate way to measure
length; on 𝑥 = (3,−4) they read 7, 5, and 4 respectively.
A norm is pictured by its unit ball
10

Version of 13 September 2026 Module page
{𝑥 : ‖𝑥‖ ≤ 1}
— the set of vectors of length at most 1. Its shape is the signature of the norm.
‖⋅‖
∞
‖⋅‖
2
‖⋅‖
1
1
Figure 2: The unit balls of the three norms on ℝ2, nested by the inequalities ‖𝑥‖ ≤ ‖𝑥‖ ≤ ‖𝑥‖ :
∞ 2 1
a larger ball means an easier length to satisfy. The taxicab norm ‖⋅‖ gives a diamond (purple),
1
the Euclidean ‖⋅‖ the round disc (blue), the maximum ‖⋅‖ a square (green). Only the round one
2 ∞
comes from a scalar product — a corner is a place no inner product can produce.
Remark (which norms come from a scalar product). Not every norm is induced by a scalar
product. A norm that is must obey the parallelogram law ‖𝑢+𝑣‖2+‖𝑢−𝑣‖2 = 2‖𝑢‖2+2‖𝑣‖2,
which follows by expanding both norms with the scalar product. Test ‖⋅‖ on 𝑢 = (1,0), 𝑣 = (0,1):
1
the left side is 22+22 = 8 (since ‖𝑢±𝑣‖ = 2), the right side 2+2 = 4. The law fails, so ‖⋅‖
1 1
comes from no inner product — and likewise ‖⋅‖ . Their unit balls have corners; the induced
∞
norm’s is always a smooth ellipsoid.
Different norms rank vectors differently, yet on a finite-dimensional space they never disagree
wildly. This is the last basic fact about norms.
Theorem 2 (Equivalence of norms in finite dimension). On a finite-dimensional real
vector space, any two norms 𝑁 and 𝑁′ are equivalent: there are constants 𝑐,𝐶 > 0 with
𝑐𝑁(𝑥) ≤ 𝑁′(𝑥) ≤ 𝐶𝑁(𝑥) for all𝑥.
Concretely, on ℝ𝑛,
‖𝑥‖ ≤ ‖𝑥‖ ≤ ‖𝑥‖ ≤ √𝑛‖𝑥‖ ≤ 𝑛‖𝑥‖ .
∞ 2 1 2 ∞
Proof. The chain of concrete inequalities is elementary. Since each |𝑥 | ≤ ‖𝑥‖ , the largest square is
𝑖 ∞
at most the sum of squares: ‖𝑥‖ ≤ ‖𝑥‖ . Squaring ‖𝑥‖ expands to ∑ 𝑥2 plus non-negative cross
∞ 2 1 𝑖 𝑖
terms 2∑ |𝑥 || |𝑥 | |, so ‖𝑥‖ ≤ ‖𝑥‖ . Cauchy–Schwarz applied to the vectors (|𝑥 |) and (1,…,1) gives
𝑖<𝑗 𝑖 𝑗 2 1 𝑖 𝑖
‖𝑥‖ = ∑ |𝑥 |⋅1 ≤ ‖𝑥‖ √𝑛. Finally ‖𝑥‖ ≤ √𝑛‖𝑥‖ because each of the 𝑛 squares is at most ‖𝑥‖2 .
1 𝑖 𝑖 2 2 ∞ ∞
The general statement — that every pair of norms is related this way in finite dimension — rests on
the compactness of the unit sphere and is left to a later analysis course. □
Remark. Equivalence has a sharp consequence: all norms on a finite-dimensional space induce
the same notion of “close”. A sequence converging in one norm converges in every other, to the
same limit, since being small in 𝑁′ forces being small in 𝑁 and back. The geometry (which
vectors are longer) depends on the norm; the topology (which vectors are near) does not. This
11

Version of 13 September 2026 Module page
is special to finite dimension — in infinite-dimensional spaces of functions, different norms can
genuinely disagree about convergence.
12
