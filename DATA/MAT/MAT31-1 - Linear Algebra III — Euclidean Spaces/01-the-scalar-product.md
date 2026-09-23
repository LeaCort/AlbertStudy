# 1. The scalar product

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 5-7*

Version of 13 September 2026 Module page
1. The scalar product
Vectors in ℝ𝑛 can be added and scaled, but so far there has been no way to measure one against
another. The scalar product is the tool that does this: it takes two vectors and returns a single num-
ber, and from that number both length and angle will be reconstructed. We begin with the familiar
case in the plane, extract the properties that make it useful, and then promote those properties to a
definition that works far beyond ℝ𝑛.


## 1.1. A first example: the dot product in the plane


You have already met one scalar product, perhaps without the name. For two vectors 𝑢 = (𝑢 ,𝑢 )
1 2
and 𝑣 = (𝑣 ,𝑣 ) in ℝ2, their dot product is
1 2
𝑢⋅𝑣 = 𝑢 𝑣 +𝑢 𝑣 .
1 1 2 2
Take 𝑢 = (3,0) and 𝑣 = (3,4). Then 𝑢⋅𝑣 = 9. Two facts about this number are worth noticing
immediately. First, 𝑢⋅𝑢 = 9 = 32 is the square of the length of 𝑢. Second, when we compute 𝑣⋅
𝑣 = 9+16 = 25 = 52, we recover the length 5 of 𝑣 — exactly Pythagoras. The dot product secretly
knows the geometry of the plane. Our whole task is to isolate why, and to make the same trick
work in spaces where we have no picture to fall back on.


## 1.2. The axioms


What properties of the dot product are doing the work? Three, and they are all the structure we need.
Definition 1. Let 𝐸 be a real vector space. A scalar product (or inner product) on 𝐸 is a map
⟨⋅,⋅⟩ : 𝐸×𝐸 ⟶ ℝ that is
1. symmetric: ⟨𝑢,𝑣⟩ = ⟨𝑣,𝑢⟩ for all 𝑢,𝑣;
2. bilinear: linear in each argument separately — for all 𝑢,𝑣,𝑤 and scalars 𝑎,𝑏,
⟨𝑎𝑢+𝑏𝑣,𝑤⟩ = 𝑎⟨𝑢,𝑤⟩+𝑏⟨𝑣,𝑤⟩
(and likewise in the second argument, which then follows by symmetry);
3. positive definite: ⟨𝑢,𝑢⟩ ≥ 0 for all 𝑢, with ⟨𝑢,𝑢⟩ = 0 only when 𝑢 = 0.
A real vector space equipped with a scalar product is an inner product space; a finite-dimen-
sional one is a Euclidean space.
The three axioms are not arbitrary. Symmetry says the order does not matter. Bilinearity says the
product interacts with linear combinations exactly the way multiplication should — it is the property
that lets us compute. Positive definiteness is the crucial one: it guarantees that ⟨𝑢,𝑢⟩ is a genuine
“squared length”, never negative, and zero only for the zero vector. Drop it and lengths could be
imaginary or vanish on non-zero vectors.
Pitfall. All three axioms are required, and positive definiteness is stronger than mere posi-
tivity. A form can satisfy ⟨𝑢,𝑢⟩ ≥ 0 for all 𝑢 yet vanish on some non-zero vector — for example
5

Version of 13 September 2026 Module page
⟨𝑢,𝑣⟩ = 𝑢 𝑣 on ℝ2 gives ⟨(0,5),(0,5)⟩ = 0 with (0,5) ≠ 0. Such a form is positive semi-definite
1 1
but not a scalar product: it cannot tell the vector (0,5) apart from 0.
1.3. The standard scalar product on ℝ𝑛
The dot product of the opening example generalizes verbatim to any dimension.
Definition 2. The standard (or canonical) scalar product on ℝ𝑛 is
𝑛
⟨𝑢,𝑣⟩ = 𝑢⊤𝑣 = ∑𝑢 𝑣 = 𝑢 𝑣 +𝑢 𝑣 +…+𝑢 𝑣 .
𝑖 𝑖 1 1 2 2 𝑛 𝑛
𝑖=1
That this satisfies the three axioms is a direct check: symmetry is the commutativity of real multipli-
cation; bilinearity is the distributive law; and ⟨𝑢,𝑢⟩ = ∑𝑢2 is a sum of squares, hence ≥ 0 and zero
𝑖
only when every 𝑢 = 0. This is the scalar product unless another is stated, but — and this is the key
𝑖
new idea of the chapter — it is not the only one.


## 1.4. Other Euclidean spaces: polynomials and matrices


The power of the axiomatic definition is that it applies to vector spaces whose elements are not lists
of numbers at all. Two examples matter most. The first uses a little integral calculus, so we recall the
few facts it needs before building it.
Remark (calculus recalled). The polynomial and function spaces of this course borrow a
small amount of integral calculus, which neither Linear Algebra course assumed. Only these
facts are used, and every integral in the book can be checked from them. The definite integral
∫𝑏
𝑓(𝑥)𝑑𝑥 of a continuous function 𝑓 over an interval [𝑎,𝑏] is a real number, and it is linear:
𝑎
𝑏 𝑏 𝑏
∫ (𝛼𝑓(𝑥)+𝛽𝑔(𝑥))𝑑𝑥 = 𝛼∫ 𝑓(𝑥)𝑑𝑥+𝛽∫ 𝑔(𝑥)𝑑𝑥.
𝑎 𝑎 𝑎
On a power of 𝑥 it is given by the power rule
𝑏 𝑏𝑛+1−𝑎𝑛+1
∫ 𝑥𝑛𝑑𝑥 = (𝑛an integer ≥ 0),
𝑛+1
𝑎
and on the trigonometric functions by
𝑏 𝑏
∫ cos𝑥𝑑𝑥 = sin𝑏−sin𝑎, ∫ sin𝑥𝑑𝑥 = cos𝑎−cos𝑏.
𝑎 𝑎
Finally, a continuous function that is ≥ 0 on [𝑎,𝑏] and whose integral over [𝑎,𝑏] is 0 is identi-
cally zero there: a point where it were positive would, by continuity, contribute a positive area.
This last fact is what makes the integral positive definite below.
6

Version of 13 September 2026 Module page
Example — an inner product on polynomials. On the space ℝ[𝑋] of polynomials of degree
≤𝑛
at most 𝑛, define
1
⟨𝑃,𝑄⟩ = ∫ 𝑃(𝑥)𝑄(𝑥)𝑑𝑥.
0
This is symmetric (multiplication of functions commutes) and bilinear (the integral is linear).
For positive definiteness, ⟨𝑃,𝑃⟩ = ∫1 𝑃(𝑥) 2𝑑𝑥 ≥ 0, and a continuous non-negative function with
0
integral zero must be identically zero — so ⟨𝑃,𝑃⟩ = 0 forces 𝑃 = 0. Thus polynomials acquire
lengths and angles: we can ask whether two polynomials are “orthogonal”, a question with no
meaning until a scalar product is fixed.
Example — an inner product on matrices. On the space ℳ︀ (ℝ) of square matrices, the
𝑛
Frobenius inner product is
⟨𝐴,𝐵⟩ = Tr(𝐴⊤𝐵) = ∑𝑎 𝑏 .
𝑖𝑗 𝑖𝑗
𝑖,𝑗
The last equality shows it is literally the standard scalar product on ℝ𝑛2 — flatten each matrix
into a long list of its entries and take the dot product. So ⟨𝐴,𝐴⟩ = ∑ 𝑎2 is the sum of squared
𝑖,𝑗 𝑖𝑗
entries, manifestly positive definite.
Remark. One vector space can carry many different scalar products. On ℝ2, besides the stan-
dard one, ⟨𝑢,𝑣⟩ = 2𝑢 𝑣 +3𝑢 𝑣 is also a scalar product (a weighted dot product). Each choice
1 1 2 2
bends the geometry: lengths and angles depend on which scalar product is in force. When we
speak of “the angle between two vectors” we always mean relative to a chosen scalar product.
7
