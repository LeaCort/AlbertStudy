# 1. The space Rn

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 6-13*

Version of 13 September 2026 Module page
1. The space ℝ𝑛
Everything in this course happens inside ℝ𝑛, or inside spaces that behave like it. So we begin here,
with the one space you can see: for 𝑛 = 2 and 𝑛 = 3 its vectors are the arrows of school geometry, and
the algebra we build is just those arrows written in coordinates. A row of a dataset — a customer’s
(age,income,spend) — is exactly such a vector; the geometry set up here is what later lets us speak
of the distance between two data points and the angle between two features.


## 1.1. Vectors, addition, scaling


Definition 1. For an integer 𝑛 ≥ 1, the set ℝ𝑛 is the 𝑛-fold Cartesian product ℝ×…×ℝ: its
elements are the ordered 𝑛-tuples
𝑥 = (𝑥 ,…,𝑥 ), 𝑥 ,…,𝑥 ∈ ℝ,
1 𝑛 1 𝑛
called vectors; the number 𝑥 is the 𝑖-th coordinate. Two operations act componentwise: for
𝑖
𝑥,𝑦 ∈ ℝ𝑛 and 𝜆 ∈ ℝ,
𝑥+𝑦 = (𝑥 +𝑦 ,…,𝑥 +𝑦 ), 𝜆𝑥 = (𝜆𝑥 ,…,𝜆𝑥 ).
1 1 𝑛 𝑛 1 𝑛
The zero vector is 0 = (0,…,0), and the opposite of 𝑥 is −𝑥 = (−1)𝑥.
Geometrically, in ℝ2 and ℝ3, a vector is an arrow from the origin to the point with those coordi-
nates. Addition is the parallelogram rule — slide 𝑣 until its tail sits at the tip of 𝑢, and 𝑢+𝑣 is
the arrow to where it lands; scaling by 𝜆 stretches the arrow by the factor 𝜆, reversing its direction
when 𝜆 < 0 (Figure 1). These pictures are the whole reason the componentwise formulas are worth
caring about.
𝑢+𝑣
𝑣
2𝑢
𝑢
𝑢
addition: parallelogram −𝑢
scaling: same line
Figure 1: Vector operations in ℝ2. Left: the sum 𝑢+𝑣 (red) is the diagonal of the parallelogram built
on 𝑢 (blue) and 𝑣 (purple) — equivalently, slide 𝑣 tail-to-tip onto 𝑢. Right: every scalar multiple of
one vector 𝑢 lies on a single line through the origin; 2𝑢 points the same way at twice the length, −𝑢
the opposite way.
Remark. These operations obey exactly the eight vector-space rules of Chapter 6, seen here in
their first and most concrete instance. When we later add polynomials or functions, the pictures
from ℝ2 will still guide the algebra even though the arrows are gone.
6

Version of 13 September 2026 Module page


## 1.2. Dot product, norm, distance


The operations so far only combine vectors. To measure — lengths, distances, angles — we need
one more piece of structure: a product of two vectors that returns a number.
Definition 2. The dot product (or Euclidean inner product) of 𝑥,𝑦 ∈ ℝ𝑛 is the number
𝑛
⟨𝑥,𝑦⟩ = 𝑥 𝑦 +𝑥 𝑦 +…+𝑥 𝑦 = ∑𝑥 𝑦 .
1 1 2 2 𝑛 𝑛 𝑖 𝑖
𝑖=1
The norm (or length) of 𝑥 is
‖𝑥‖ = √⟨𝑥,𝑥⟩ = √𝑥
1
2+…+𝑥
𝑛
2,
and the distance between 𝑥 and 𝑦 is 𝑑(𝑥,𝑦) = ‖𝑥−𝑦‖.
Elementary texts often write this product 𝑥⋅𝑦; throughout this book it is written ⟨𝑥,𝑦⟩, the standard
notation for an inner product and the form the course’s later results are stated in.
Proposition 1 (properties of the dot product). For all 𝑥,𝑦,𝑧 ∈ ℝ𝑛 and 𝜆 ∈ ℝ:
• symmetry: ⟨𝑥,𝑦⟩ = ⟨𝑦,𝑥⟩;
• linearity in each slot: ⟨𝑥+𝑧,𝑦⟩ = ⟨𝑥,𝑦⟩+⟨𝑧,𝑦⟩ and ⟨𝜆𝑥,𝑦⟩ = 𝜆⟨𝑥,𝑦⟩ (and likewise in the
second slot, by symmetry);
• positivity: ⟨𝑥,𝑥⟩ = ‖𝑥‖2 ≥ 0, with ⟨𝑥,𝑥⟩ = 0 if and only if 𝑥 = 0.
Positivity is what makes ‖𝑥‖ a genuine length: it is never negative, and it vanishes only for the zero
vector. Each property is read straight off the coordinate formula — for positivity, ⟨𝑥,𝑥⟩ = ∑𝑥2 is a
𝑖
sum of squares, zero only when every 𝑥 = 0.
𝑖
Example — one pair, every quantity. Take 𝑥 = (1,2,2) and 𝑦 = (3,0,4) in ℝ3. Then
⟨𝑥,𝑦⟩ = 1⋅3+2⋅0+2⋅4 = 11, ‖𝑥‖ = √1+4+4 = 3, ‖𝑦‖ = √9+0+16 = 5,
and the distance is
𝑑(𝑥,𝑦) = ‖𝑥−𝑦‖ = ‖(−2,2,−2)‖ = √4+4+4 = 2√3.
Pitfall. Keep the types straight: ⟨𝑥,𝑦⟩ is a number, 𝜆𝑥 is a vector, and ‖𝑥‖ is a number. In
particular ‖𝑥+𝑦‖ is not ‖𝑥‖+‖𝑦‖ in general — that failed equality is exactly what the triangle
inequality below measures.
The dot product also carries the angle between two vectors. In ℝ2 and ℝ3, elementary trigonometry
gives
⟨𝑥,𝑦⟩ = ‖𝑥‖‖𝑦‖cos𝜃,
7

Version of 13 September 2026 Module page
where 𝜃 is the angle between the arrows 𝑥 and 𝑦 (Figure 2, left). In particular ⟨𝑥,𝑦⟩ = 0 means the
vectors are orthogonal (perpendicular): the dot product is the coordinate test for a right angle. Read-
ing the formula the other way defines the angle in every ℝ𝑛 — provided the ratio (⟨𝑥,𝑦⟩)/(‖𝑥‖‖𝑦‖)
always lands in [−1,1], which is precisely what the next inequality guarantees.
Example — the angle for the running pair. For the same 𝑥 = (1,2,2) and 𝑦 = (3,0,4), the
three quantities above were ⟨𝑥,𝑦⟩ = 11, ‖𝑥‖ = 3 and ‖𝑦‖ = 5. The angle 𝜃 between them therefore
satisfies
⟨𝑥,𝑦⟩ 11 11
cos𝜃 = = , so 𝜃 = arccos( ) ≈ 42.8°.
‖𝑥‖‖𝑦‖ 15 15
The ratio 11/15 ≈ 0.733 lies in [−1,1], as it must.


## 1.3. Cauchy–Schwarz and the triangle inequalities


Two inequalities govern norms and distances. The first bounds a dot product by the product of the
lengths; the second says a straight path is the shortest.
Theorem 1 (Cauchy–Schwarz inequality). For all 𝑥,𝑦 ∈ ℝ𝑛,
|⟨𝑥,𝑦⟩| ≤ ‖𝑥‖‖𝑦‖,
with equality if and only if 𝑥 and 𝑦 are collinear (one is a scalar multiple of the other).
Proof. The inequality. If 𝑦 = 0 both sides are 0 and it holds. Otherwise consider the real function
𝜑(𝑡) = ‖𝑥+𝑡𝑦‖2 = ⟨𝑥+𝑡𝑦,𝑥+𝑡𝑦⟩ = ‖𝑦‖2𝑡2+2⟨𝑥,𝑦⟩𝑡+‖𝑥‖2,
expanded using the linearity and symmetry of the dot product. This is a quadratic in 𝑡 with positive
leading coefficient ‖𝑦‖2 > 0, and by positivity 𝜑(𝑡) ≥ 0 for every 𝑡. A quadratic that is never negative
has discriminant ≤ 0:
(2⟨𝑥,𝑦⟩) 2 −4‖𝑦‖2‖𝑥‖2 ≤ 0 ⟹ (⟨𝑥,𝑦⟩) 2 ≤ ‖𝑥‖2‖𝑦‖2.
Taking square roots gives |⟨𝑥,𝑦⟩| ≤ ‖𝑥‖‖𝑦‖.
The equality case, both directions. Suppose first that equality holds. If 𝑦 = 0 the vectors are
already collinear; if 𝑦 ≠ 0, equality makes the discriminant vanish, so 𝜑 has a (double) root 𝑡
0
with ‖𝑥+𝑡 𝑦‖2 = 𝜑(𝑡 ) = 0, hence 𝑥+𝑡 𝑦 = 0, i.e. 𝑥 = −𝑡 𝑦: the vectors are collinear. Conversely,
0 0 0 0
suppose 𝑥 and 𝑦 are collinear. Then either 𝑦 = 0, where both sides equal 0, or 𝑥 = 𝜆𝑦 for some 𝜆 ∈
ℝ, and then
|⟨𝑥,𝑦⟩| = |𝜆|‖𝑦‖2 = (|𝜆|‖𝑦‖)‖𝑦‖ = ‖𝑥‖‖𝑦‖,
using ‖𝑥‖ = |𝜆|‖𝑦‖. So equality holds exactly when 𝑥 and 𝑦 are collinear. □
Theorem 2 (triangle inequalities). For all 𝑥,𝑦 ∈ ℝ𝑛,
8

Version of 13 September 2026 Module page
‖𝑥+𝑦‖ ≤ ‖𝑥‖+‖𝑦‖ (triangle inequality),
and consequently
|‖𝑥‖−‖𝑦‖| ≤ ‖𝑥−𝑦‖ (reverse triangle inequality).
Proof. Expanding and bounding the middle term with Cauchy–Schwarz,
‖𝑥+𝑦‖2 = ‖𝑥‖2+2⟨𝑥,𝑦⟩+‖𝑦‖2 ≤ ‖𝑥‖2+2‖𝑥‖‖𝑦‖+‖𝑦‖2 = (‖𝑥‖+‖𝑦‖) 2.
Both sides are ≥ 0, so taking square roots gives the triangle inequality. For the reverse form, apply
it to 𝑥 = (𝑥−𝑦)+𝑦: this gives ‖𝑥‖ ≤ ‖𝑥−𝑦‖+‖𝑦‖, hence ‖𝑥‖−‖𝑦‖ ≤ ‖𝑥−𝑦‖; swapping 𝑥 and 𝑦
gives ‖𝑦‖−‖𝑥‖ ≤ ‖𝑥−𝑦‖, and the two together are |‖𝑥‖−‖𝑦‖| ≤ ‖𝑥−𝑦‖. □
𝑦
𝑥+𝑦
𝑦
𝜃 𝑥
𝑥
⟨𝑥,𝑦⟩=‖𝑥‖‖𝑦‖cos𝜃 ‖𝑥+𝑦‖≤‖𝑥‖+‖𝑦‖
Figure 2: Left: the dot product encodes the angle, ⟨𝑥,𝑦⟩ = ‖𝑥‖‖𝑦‖cos𝜃; the two vectors are orthog-
onal exactly when ⟨𝑥,𝑦⟩ = 0. Right: the triangle inequality says the straight arrow 𝑥+𝑦 (red) is no
longer than the bent path along 𝑥 then 𝑦 — a straight line is the shortest route between two points.
Remark. Both quantities are read straight off feature vectors in data science. The distance
𝑑(𝑥,𝑦) measures how far apart two data points are; the cosine similarity (⟨𝑥,𝑦⟩)/(‖𝑥‖‖𝑦‖) —
the cosine of the angle, pinned to [−1,1] by Cauchy–Schwarz — measures how aligned two
directions are, and is the standard score for comparing documents or users regardless of their
magnitude.


## 1.4. Orthogonality and orthonormal families


The equation ⟨𝑥,𝑦⟩ = 0 says the two arrows meet at a right angle. Made systematic, this single
equation organises whole families of vectors and gives ℝ𝑛 the rigid, grid-like structure the rest of the
course exploits.
Definition 3. Two vectors 𝑥,𝑦 ∈ ℝ𝑛 are orthogonal, written 𝑥 ⟂ 𝑦, when ⟨𝑥,𝑦⟩ = 0. A family
(𝑢 ,…,𝑢 ) of vectors of ℝ𝑛 is orthogonal when its vectors are non-zero and pairwise orthogonal,
1 𝑘
⟨𝑢 ,𝑢 ⟩ = 0 for all𝑖 ≠ 𝑗,
𝑖 𝑗
and orthonormal when moreover each vector has norm 1, i.e. ‖𝑢 ‖ = 1 for every 𝑖.
𝑖
The zero vector is orthogonal to every vector, itself included, so it is excluded from an orthogonal
family on purpose. Orthonormality is only a rescaling: dividing each 𝑢 of an orthogonal family by
𝑖
its norm ‖𝑢 ‖ produces an orthonormal family pointing the same ways.
𝑖
9

Version of 13 September 2026 Module page
Example — the standard basis is orthonormal. In ℝ𝑛 the vectors 𝑒 ,…,𝑒 , where 𝑒 carries
1 𝑛 𝑖
a 1 in position 𝑖 and 0 elsewhere, satisfy ⟨𝑒 ,𝑒 ⟩ = 0 for 𝑖 ≠ 𝑗 and ⟨𝑒 ,𝑒 ⟩ = 1; so (𝑒 ,…,𝑒 ) is ortho-
𝑖 𝑗 𝑖 𝑖 1 𝑛
normal. In ℝ2 the pair ((1,1),(1,−1)) is orthogonal — its dot product is 1−1 = 0 — and dividing
each vector by its norm √2 makes it orthonormal.
Orthogonality earns its own name because it forces a rigidity ordinary families lack: within an
orthogonal family, no vector is a linear combination of the others.
Proposition 2 (an orthogonal family has no redundancy). Let (𝑢 ,…,𝑢 ) be an orthogonal
1 𝑘
family in ℝ𝑛. If
𝜆 𝑢 +…+𝜆 𝑢 = 0
1 1 𝑘 𝑘
for some scalars 𝜆 ,…,𝜆 ∈ ℝ, then 𝜆 = … = 𝜆 = 0.
1 𝑘 1 𝑘
Proof. Fix an index 𝑗 ∈ ⟦1,𝑘⟧ and take the dot product of the relation with 𝑢 . By the linearity of the
𝑗
dot product in its first slot,
𝑘 𝑘
‖ ‖2
0 = ⟨∑𝜆 𝑢 ,𝑢 ⟩ = ∑𝜆 ⟨𝑢 ,𝑢 ⟩ = 𝜆 ⟨𝑢 ,𝑢 ⟩ = 𝜆 𝑢 ,
𝑖 𝑖 𝑗 𝑖 𝑖 𝑗 𝑗 𝑗 𝑗 𝑗‖ 𝑗‖
𝑖=1 𝑖=1
‖ ‖
because ⟨𝑢 ,𝑢 ⟩ = 0 for every 𝑖 ≠ 𝑗. Since 𝑢 ≠ 0, its norm 𝑢 is non-zero, so 𝜆 = 0. The index 𝑗
𝑖 𝑗 𝑗 ‖ 𝑗‖ 𝑗
was arbitrary, so every coefficient vanishes. □
This is exactly the property named linear independence in Chapter 8: an orthogonal family is the
easiest kind to certify independent. The right angle also restores the Pythagorean theorem, now in
every dimension.
Proposition 3 (Pythagorean theorem). If 𝑥,𝑦 ∈ ℝ𝑛 are orthogonal, then ‖𝑥+𝑦‖2 = ‖𝑥‖2+
‖𝑦‖2.
Proof. By the linearity and symmetry of the dot product,
‖𝑥+𝑦‖2 = ⟨𝑥+𝑦,𝑥+𝑦⟩ = ‖𝑥‖2+2⟨𝑥,𝑦⟩+‖𝑦‖2.
Orthogonality gives ⟨𝑥,𝑦⟩ = 0, leaving ‖𝑥+𝑦‖2 = ‖𝑥‖2+‖𝑦‖2. □


## 1.5. The orthogonal complement of a family


Given some vectors, the vectors orthogonal to all of them form a set worth naming and computing.
Definition 4. The orthogonal complement of a family (𝑎 ,…,𝑎 ) of vectors of ℝ𝑛 is the set
1 𝑘
of vectors orthogonal to every one of them,
{𝑎 ,…,𝑎 } ⟂ = {𝑥 ∈ ℝ𝑛 : ⟨𝑥,𝑎 ⟩ = 0for all𝑖 ∈ ⟦1,𝑘⟧}.
1 𝑘 𝑖
10

Version of 13 September 2026 Module page
Each condition ⟨𝑥,𝑎 ⟩ = 0 is one linear equation in the coordinates 𝑥 ,…,𝑥 of 𝑥, so the orthogonal
𝑖 1 𝑛
complement is the common solution set of 𝑘 homogeneous equations — a linear system, solved by
the elimination of Chapter 3.
Example — orthogonal complement of two vectors in space. Take 𝑎 = (1,2,2) and 𝑏 =
(2,1,0) in ℝ3. A vector 𝑥 = (𝑥 ,𝑥 ,𝑥 ) lies in {𝑎,𝑏} ⟂ exactly when
1 2 3
⟨𝑥,𝑎⟩ = 𝑥 +2𝑥 +2𝑥 = 0 and ⟨𝑥,𝑏⟩ = 2𝑥 +𝑥 = 0.
1 2 3 1 2
The second equation gives 𝑥 = −2𝑥 ; substituting into the first, 𝑥 −4𝑥 +2𝑥 = 0, hence 𝑥 =
2 1 1 1 3 3
3
𝑥 . So
1
2
3
𝑥 = 𝑥 (1,−2, ) ∈ Span((2,−4,3)),
1 2
and {𝑎,𝑏} ⟂ is the line spanned by (2,−4,3). One checks ⟨(2,−4,3),𝑎⟩ = 2−8+6 = 0 and
⟨(2,−4,3),𝑏⟩ = 4−4 = 0.
Remark. The orthogonal complement of a family is always a subspace of ℝ𝑛 (Chapter 7):
stacking the 𝑎 as the rows of a matrix 𝐴, the condition “⟨𝑥,𝑎 ⟩ = 0 for all 𝑖” reads 𝐴𝑥 = 0, so
𝑖 𝑖
{𝑎 ,…,𝑎 } ⟂ is the kernel of 𝐴 — and every kernel is a subspace. Determining it is one homoge-
1 𝑘
neous system away.


## 1.6. Orthogonal projection and the Gram–Schmidt process


Dropping a perpendicular from a point onto a line is the oldest construction in geometry; in ℝ𝑛 it is
one formula.
Definition 5. Let 𝑎 ∈ ℝ𝑛 be non-zero. The orthogonal projection of 𝑥 ∈ ℝ𝑛 onto the line
ℝ𝑎 = {𝑡𝑎 : 𝑡 ∈ ℝ} is the vector
⟨𝑥,𝑎⟩
𝑝 (𝑥) = 𝑎.
𝑎 ⟨𝑎,𝑎⟩
The coefficient (⟨𝑥,𝑎⟩)/(⟨𝑎,𝑎⟩) is chosen for exactly one reason: it makes the remainder 𝑥−𝑝 (𝑥)
𝑎
orthogonal to 𝑎.
Proposition 4 (a projection splits off an orthogonal remainder). For non-zero 𝑎 ∈ ℝ𝑛 and
any 𝑥 ∈ ℝ𝑛, the remainder 𝑥−𝑝 (𝑥) is orthogonal to 𝑎. Hence 𝑥 splits as
𝑎
𝑥 = ⏟𝑝
𝑎
(𝑥) +(⏟𝑥(cid:106)−(cid:106)(cid:107)𝑝 𝑎(cid:106)((cid:106)𝑥(cid:108))),
along𝑎 ⟂𝑎
a multiple of 𝑎 plus a vector orthogonal to 𝑎.
Proof. Take the dot product of the remainder with 𝑎, using linearity:
11

Version of 13 September 2026 Module page
⟨𝑥,𝑎⟩
⟨𝑥−𝑝 (𝑥),𝑎⟩ = ⟨𝑥,𝑎⟩− (⟨𝑎,𝑎⟩) = ⟨𝑥,𝑎⟩−⟨𝑥,𝑎⟩ = 0.
𝑎 ⟨𝑎,𝑎⟩
So 𝑥−𝑝 (𝑥) is orthogonal to 𝑎; adding and subtracting 𝑝 (𝑥) gives the displayed splitting. □
𝑎 𝑎
𝑥
line ℝ𝑎
𝑥−𝑝 (𝑥)
𝑎
𝑎
𝑝 (𝑥)
𝑎
Figure 3: Orthogonal projection of 𝑥 (red) onto the line ℝ𝑎 (blue). The foot 𝑝 (𝑥) (purple) is the point
𝑎
of the line closest to 𝑥, and the dashed remainder 𝑥−𝑝 (𝑥) meets the line at a right angle. This single
𝑎
“keep the perpendicular part” step is the atom of the Gram–Schmidt process below.
Iterating this move — split off the part along a direction, keep the perpendicular remainder — turns
any family of vectors into an orthogonal one. This is the Gram–Schmidt process.
Method 1 (Gram–Schmidt process). From vectors 𝑎 ,…,𝑎 ∈ ℝ𝑛, define 𝑢 ,…,𝑢 in turn:
1 𝑘 1 𝑘
𝑗−1⟨𝑎 ,𝑢 ⟩
𝑗 𝑖
𝑢 = 𝑎 , 𝑢 = 𝑎 − ∑ 𝑢 (2 ≤ 𝑗 ≤ 𝑘).
1 1 𝑗 𝑗 ⟨𝑢 ,𝑢 ⟩ 𝑖
𝑖=1 𝑖 𝑖
The subtracted sum is the projection of 𝑎 onto the earlier directions, so 𝑢 is the part of 𝑎
𝑗 𝑗 𝑗
perpendicular to all of 𝑢 ,…,𝑢 . If no 𝑎 is a linear combination of 𝑎 ,…,𝑎 , then every
1 𝑗−1 𝑗 1 𝑗−1
𝑢 is non-zero and (𝑢 ,…,𝑢 ) is an orthogonal family with the same linear combinations as
𝑗 1 𝑘
‖ ‖
(𝑎 ,…,𝑎 ). Dividing each 𝑢 by 𝑢 makes the family orthonormal.
1 𝑘 𝑗 ‖ 𝑗‖
Proof (the output family is orthogonal). We prove by induction on 𝑚 that (𝑢 ,…,𝑢 ) is orthogonal.
1 𝑚
For 𝑚 = 1 there is nothing to check. Assume (𝑢 ,…,𝑢 ) is orthogonal and fix 𝑙 < 𝑚. Taking the
1 𝑚−1
dot product of the defining formula for 𝑢 with 𝑢 ,
𝑚 𝑙
𝑚−1
⟨𝑎 ,𝑢 ⟩
⟨𝑢 ,𝑢 ⟩ = ⟨𝑎 ,𝑢 ⟩− ∑ 𝑚 𝑖 ⟨𝑢 ,𝑢 ⟩.
𝑚 𝑙 𝑚 𝑙 ⟨𝑢 ,𝑢 ⟩ 𝑖 𝑙
𝑖=1 𝑖 𝑖
By the induction hypothesis ⟨𝑢 ,𝑢 ⟩ = 0 for every 𝑖 ≠ 𝑙, so only the 𝑖 = 𝑙 term survives, and
𝑖 𝑙
⟨𝑎 ,𝑢 ⟩
⟨𝑢 ,𝑢 ⟩ = ⟨𝑎 ,𝑢 ⟩− 𝑚 𝑙 ⟨𝑢 ,𝑢 ⟩ = 0.
𝑚 𝑙 𝑚 𝑙 ⟨𝑢 ,𝑢 ⟩ 𝑙 𝑙
𝑙 𝑙
Thus 𝑢 is orthogonal to every earlier 𝑢 , so (𝑢 ,…,𝑢 ) is orthogonal. By induction the whole family
𝑚 𝑙 1 𝑚
(𝑢 ,…,𝑢 ) is orthogonal. □
1 𝑘
That (𝑢 ,…,𝑢 ) produces the same linear combinations as (𝑎 ,…,𝑎 ) is read off the formula both
1 𝑘 1 𝑘
ways: each 𝑢 is 𝑎 minus a combination of earlier 𝑢 , and each 𝑎 is 𝑢 plus a combination of earlier
𝑗 𝑗 𝑖 𝑗 𝑗
𝑢 . Neither rewriting reaches outside the vectors already built.
𝑖
12

Version of 13 September 2026 Module page
Example — Gram–Schmidt on two vectors. Orthogonalise 𝑎 = (1,1,0) and 𝑎 = (1,0,1) in
1 2
ℝ3. First 𝑢 = 𝑎 = (1,1,0). Then strip from 𝑎 its projection onto 𝑢 , using ⟨𝑎 ,𝑢 ⟩ = 1 and
1 1 2 1 2 1
⟨𝑢 ,𝑢 ⟩ = 2:
1 1
⟨𝑎 ,𝑢 ⟩ 1 1 1
𝑢 = 𝑎 − 2 1 𝑢 = (1,0,1)− (1,1,0) = ( ,− ,1).
2 2 ⟨𝑢 ,𝑢 ⟩ 1 2 2 2
1 1
1 1
A check confirms the right angle: ⟨𝑢 ,𝑢 ⟩ = − +0 = 0. Normalising with ‖𝑢 ‖ = √2 and
1 2 1
2 2
‖𝑢 ‖ = √3/2,
2
1,1,0 1,−1,2
( , )
√2 √6
is an orthonormal family with the same linear combinations as (𝑎 ,𝑎 ).
1 2
Pitfall. In the Gram–Schmidt sum, always project onto the already-orthogonalised vectors 𝑢 ,
𝑖
never onto the raw inputs 𝑎 . Subtracting projections onto the 𝑎 leaves the remainders correlated
𝑖 𝑖
and breaks orthogonality. The process is sequential for exactly this reason: 𝑢 depends on every
𝑗
𝑢 built before it.
𝑖
13
