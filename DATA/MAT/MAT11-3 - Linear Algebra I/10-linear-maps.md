# 10. Linear maps

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 36-40*

Version of 13 September 2026 Module page
10. Linear maps
We promoted the rules of ℝ𝑛 to the abstract notion of a vector space. Now we do the same for the
maps between them. The map 𝑋 ⟼ 𝐴𝑋 of Chapter 4 respected linear combinations; we take that
property as the definition of the maps worth studying.


## 10.1. Definition, kernel, image


Definition 15. A map 𝑓 : 𝐸 ⟶ 𝐹 between vector spaces is linear if for all 𝑢,𝑣 ∈ 𝐸 and 𝜆 ∈ ℝ,
𝑓(𝑢+𝑣) = 𝑓(𝑢)+𝑓(𝑣), 𝑓(𝜆𝑢) = 𝜆𝑓(𝑢).
Equivalently, 𝑓 commutes with all linear combinations: 𝑓(𝜆𝑢+𝜇𝑣) = 𝜆𝑓(𝑢)+𝜇𝑓(𝑣).
Example — linear and non-linear. The map 𝑓 : ℝ2 ⟶ ℝ2, (𝑥,𝑦) ⟼ (2𝑥−𝑦,𝑥+3𝑦), is linear
2 −1
— each output coordinate is a linear combination of the inputs, so 𝑓(𝑋) = 𝐴𝑋 with 𝐴 = ( ).
1 3
The map 𝑔 : ℝ2 ⟶ ℝ2, (𝑥,𝑦) ⟼ (𝑥+1,𝑦), is not linear: it sends 0 to (1,0) ≠ 0, and a linear map
must fix the zero vector (take 𝜆 = 0). Differentiation 𝑝 ⟼ 𝑝′ and integration 𝑓 ⟼ ∫1 𝑓 are linear
0
too — but on those spaces linearity must be checked from the axioms, not read off a matrix; we
do so next.
Pitfall. A linear map must send 0 to 0: setting 𝜆 = 0 gives 𝑓(0) = 0. So any map with a non-
zero constant term — an “affine” map like 𝑥 ⟼ 𝑎𝑥+𝑏 with 𝑏 ≠ 0 — is not linear, despite the
school usage of “linear” for straight lines. Checking 𝑓(0) = 0 is the fastest disqualifier.
When a map is given by an explicit formula in coordinates, reading off the matrix 𝐴 settles linearity
at a glance. But when the map acts on polynomials or functions, no matrix is in sight, and linearity
must be verified directly from the two axioms — exactly the from-scratch discipline used for the
vector-space axioms in Chapter 6.
Example — verifying linearity from the axioms. Take differentiation 𝐷 : ℝ [𝑋] ⟶ ℝ [𝑋],
𝑛 𝑛
𝑝 ⟼ 𝑝′. To prove it linear we check the two axioms using only the differentiation rules from
Foundations. For all polynomials 𝑝,𝑞 and all 𝜆 ∈ ℝ,
𝐷(𝑝+𝑞) = (𝑝+𝑞) ′ = 𝑝′+𝑞′ = 𝐷(𝑝)+𝐷(𝑞),
since the derivative of a sum is the sum of the derivatives, and
𝐷(𝜆𝑝) = (𝜆𝑝) ′ = 𝜆𝑝′ = 𝜆𝐷(𝑝),
since a constant factor pulls out of a derivative. Both axioms hold, so 𝐷 is linear. Integration 𝑇 :
𝒞︀([0,1],ℝ) ⟶ ℝ, 𝑓 ⟼
∫1
𝑓, is linear by the very same move: 𝑇(𝑓+𝑔) =
∫1
(𝑓+𝑔) =
∫1
𝑓+
0 0 0
∫1
𝑔 = 𝑇(𝑓)+𝑇(𝑔) and 𝑇(𝜆𝑓) = 𝜆𝑇(𝑓) are the linearity of the integral. On these spaces the axioms
0
are the only tool — and they are enough.
36

Version of 13 September 2026 Module page
Definition 16. For a linear map 𝑓 : 𝐸 ⟶ 𝐹:
• the kernel is ker𝑓 = {𝑢 ∈ 𝐸 : 𝑓(𝑢) = 0} ⊆ 𝐸;
• the image is Im𝑓 = {𝑓(𝑢) : 𝑢 ∈ 𝐸} ⊆ 𝐹;
• the rank is rank𝑓 = dim(Im𝑓).
Both of these sets are subspaces — a fact used on almost every page that follows, so we prove it once,
straight from the three-criterion test of Chapter 7.
Proposition 12 (the kernel and image are subspaces). For a linear map 𝑓 : 𝐸 ⟶ 𝐹, the
kernel ker𝑓 is a subspace of 𝐸 and the image Im𝑓 is a subspace of 𝐹.
Proof. Kernel. A linear map fixes zero, 𝑓(0) = 0, so 0 ∈ ker𝑓. If 𝑢,𝑣 ∈ ker𝑓 then 𝑓(𝑢+𝑣) = 𝑓(𝑢)+
𝑓(𝑣) = 0+0 = 0, so 𝑢+𝑣 ∈ ker𝑓; and for 𝜆 ∈ ℝ, 𝑓(𝜆𝑢) = 𝜆𝑓(𝑢) = 𝜆⋅0 = 0, so 𝜆𝑢 ∈ ker𝑓. The
three criteria hold, so ker𝑓 is a subspace of 𝐸.
Image. Since 0 = 𝑓(0), we have 0 ∈ Im𝑓. If 𝑦 = 𝑓(𝑢) and 𝑦′ = 𝑓(𝑣) lie in Im𝑓, then 𝑦+𝑦′ = 𝑓(𝑢)+
𝑓(𝑣) = 𝑓(𝑢+𝑣) is again an output, so 𝑦+𝑦′ ∈ Im𝑓; and 𝜆𝑦 = 𝜆𝑓(𝑢) = 𝑓(𝜆𝑢) ∈ Im𝑓. The three
criteria hold, so Im𝑓 is a subspace of 𝐹. □
These generalize the null space and column space of a matrix verbatim: for 𝑓(𝑋) = 𝐴𝑋, ker𝑓 = ker𝐴
and Im𝑓 = Im𝐴. Everything you learned to compute by row reduction transfers directly.


## 10.2. The rank theorem


The single most important theorem about a linear map says its domain splits cleanly into “what gets
crushed to zero” and “what survives as the image”.
Theorem 8 (Rank theorem (rank–nullity)). For a linear map 𝑓 : 𝐸 ⟶ 𝐹 with 𝐸 finite-
dimensional,
dim𝐸 = dim(ker𝑓)+rank𝑓.
domain 𝐸, dim𝐸=5 image
bijective
ker𝑓 complement Im𝑓
dim=2 dim=3 rank𝑓=3
0
Figure 8: The rank theorem as a budget. The domain 𝐸 (here dim𝐸 = 5) splits into the part crushed
to zero — ker𝑓, of dimension 2 — and a complement that maps bijectively onto the image, of
dimension rank𝑓 = 3. The dimensions must add up: 5 = 2+3. Enlarging the kernel necessarily
shrinks the rank, and vice versa.
The theorem is a conservation law: the dim𝐸 “degrees of freedom” in the domain are spent either
on directions that vanish (the kernel) or on directions that survive into the image (the rank), with
none lost. For a matrix 𝐴 ∈ ℳ︀ (ℝ) it reads 𝑛 = dim(ker𝐴)+rank𝐴, which is just the pivot/free-
𝑚,𝑛
variable split of Chapter 3: rank = number of pivots, nullity = number of free variables, and together
they account for all 𝑛 columns.
37

Version of 13 September 2026 Module page
Proof. Let 𝑘 = dim(ker𝑓) and choose a basis 𝑒 ,…,𝑒 of ker𝑓. By the incomplete-basis theorem,
1 𝑘
extend it to a basis 𝑒 ,…,𝑒 ,𝑒 ,…,𝑒 of 𝐸, where 𝑛 = dim𝐸. We show the 𝑛−𝑘 vectors
1 𝑘 𝑘+1 𝑛
𝑓(𝑒 ),…,𝑓(𝑒 ) form a basis of Im𝑓; then rank𝑓 = 𝑛−𝑘, which is the claim.
𝑘+1 𝑛
𝑛
They generate Im𝑓: any output is 𝑓(𝑢) for some 𝑢 = ∑ 𝑥 𝑒 , and since 𝑓(𝑒 ) = 0 for 𝑖 ≤ 𝑘,
𝑖=1 𝑖 𝑖 𝑖
𝑛
𝑓(𝑢) = ∑ 𝑥 𝑓(𝑒 ).
𝑖 𝑖
𝑖=𝑘+1
𝑛 𝑛 𝑛
They are independent: if ∑ 𝑐 𝑓(𝑒 ) = 0, then by linearity 𝑓(∑ 𝑐 𝑒 ) = 0, so ∑ 𝑐 𝑒 ∈
𝑖=𝑘+1 𝑖 𝑖 𝑖=𝑘+1 𝑖 𝑖 𝑖=𝑘+1 𝑖 𝑖
ker𝑓, a combination of 𝑒 ,…,𝑒 . This is a linear relation among the basis 𝑒 ,…,𝑒 , so all its coeffi-
1 𝑘 1 𝑛
cients vanish — in particular every 𝑐 = 0. Hence 𝑓(𝑒 ),…,𝑓(𝑒 ) is a basis of Im𝑓 and rank𝑓 =
𝑖 𝑘+1 𝑛
𝑛−𝑘 = dim𝐸−dim(ker𝑓). □


## 10.3. Injectivity, surjectivity, bijectivity


Linearity turns the function-theoretic notions of Foundations into dimension counts — this is
where the abstraction pays its way.
Proposition 13. Let 𝑓 : 𝐸 ⟶ 𝐹 be linear with 𝐸,𝐹 finite-dimensional.
• 𝑓 is injective ⟺ ker𝑓 = {0} ⟺ rank𝑓 = dim𝐸.
• 𝑓 is surjective ⟺ Im𝑓 = 𝐹 ⟺ rank𝑓 = dim𝐹.
• 𝑓 is bijective ⟺ both hold; this forces dim𝐸 = dim𝐹.
The injectivity criterion is the workhorse: instead of checking “𝑓(𝑢) = 𝑓(𝑣) ⟹ 𝑢 = 𝑣” for all pairs,
you check the single equation 𝑓(𝑢) = 0 ⟹ 𝑢 = 0. The reason is linearity — 𝑓(𝑢) = 𝑓(𝑣) rearranges
to 𝑓(𝑢−𝑣) = 0, so distinct inputs collide exactly when the kernel is non-trivial.
Proof (injective ⟺ trivial kernel). If 𝑓 is injective then 𝑓(𝑢) = 0 = 𝑓(0) forces 𝑢 = 0, so ker𝑓 = {0}.
Conversely, suppose ker𝑓 = {0} and 𝑓(𝑢) = 𝑓(𝑣). By linearity 𝑓(𝑢−𝑣) = 𝑓(𝑢)−𝑓(𝑣) = 0, so 𝑢−
𝑣 ∈ ker𝑓 = {0}, giving 𝑢 = 𝑣. Hence 𝑓 is injective. □
Corollary 1. For a linear map 𝑓 : 𝐸 ⟶ 𝐹 between spaces of equal finite dimension (dim𝐸 =
dim𝐹), injectivity, surjectivity and bijectivity are equivalent.
Proof. By the rank theorem dim(ker𝑓) = dim𝐸−rank𝑓. Injectivity means dim(ker𝑓) = 0, i.e.
rank𝑓 = dim𝐸 = dim𝐹, which is exactly surjectivity. So each implies the other, and either one
implies bijectivity. □
Pitfall. That equivalence holds only when the dimensions are equal (in particular for a
square matrix). In general a tall thin map can be injective without being surjective, and a short fat
one surjective without being injective. Always confirm dim𝐸 = dim𝐹 before invoking “injective
⟹ bijective”.
38

Version of 13 September 2026 Module page
10.4. Composition and the space ℒ︀(𝐸,𝐹)
Linear maps combine in two ways, and both stay inside the linear world.
Proposition 14 (composition of linear maps). If 𝑓 : 𝐸 ⟶ 𝐹 and 𝑔 : 𝐹 ⟶ 𝐺 are linear, then
𝑔∘𝑓 : 𝐸 ⟶ 𝐺 is linear. Moreover, if 𝐴 is the matrix of 𝑓 and 𝐵 the matrix of 𝑔 in chosen bases,
then the matrix of 𝑔∘𝑓 is the product 𝐵𝐴.
Proof. For 𝑢,𝑣 ∈ 𝐸 and 𝜆 ∈ ℝ, using linearity of 𝑓 then of 𝑔,
(𝑔∘𝑓)(𝑢+𝑣) = 𝑔(𝑓(𝑢)+𝑓(𝑣)) = 𝑔(𝑓(𝑢))+𝑔(𝑓(𝑣)) = (𝑔∘𝑓)(𝑢)+(𝑔∘𝑓)(𝑣),
and (𝑔∘𝑓)(𝜆𝑢) = 𝑔(𝜆𝑓(𝑢)) = 𝜆(𝑔∘𝑓)(𝑢). So 𝑔∘𝑓 is linear. The matrix claim is exactly why the
product was defined as it was: applying 𝐵𝐴 to a coordinate column applies 𝐴, then 𝐵. □
This is the deep reason matrix multiplication looks the way it does: the product of matrices is the
composition of the maps they represent. The non-commutativity 𝐴𝐵 ≠ 𝐵𝐴 of Chapter 2 is then
no surprise — “do 𝑓, then 𝑔” and “do 𝑔, then 𝑓” are genuinely different operations.
The second way to combine maps adds them pointwise.
Definition 17. The set of all linear maps from 𝐸 to 𝐹 is written ℒ︀(𝐸,𝐹). Equipped with the
pointwise operations
(𝑓+𝑔)(𝑢) = 𝑓(𝑢)+𝑔(𝑢), (𝜆𝑓)(𝑢) = 𝜆𝑓(𝑢),
it is itself a vector space: a sum or scalar multiple of linear maps is again linear, and the eight
axioms are inherited from 𝐹. Its zero vector is the map sending every 𝑢 to 0.
Remark. So the objects of this course fold back on themselves: the maps between two vector
spaces form a vector space in their own right. Once bases are fixed, Chapter 11 shows ℒ︀(𝐸,𝐹)
is nothing but ℳ︀ (ℝ) in disguise — adding maps becomes adding matrices, composing them
𝑚,𝑛
becomes the matrix product.


## 10.5. Projections, and what a map leaves fixed


Three geometric readings run through this whole course: what a transformation collapses, what it
preserves, and what it leaves fixed. The first two now have names — the kernel is what collapses
to 0, and the image (measured by the rank) is what is preserved. The third has an equally simple
home. The fixed vectors of a map 𝑓 : 𝐸 ⟶ 𝐸 are the 𝑢 with 𝑓(𝑢) = 𝑢; since 𝑓(𝑢) = 𝑢 rewrites as
(𝑓−id )(𝑢) = 0, they form a subspace, the kernel of 𝑓−id . The identity leaves everything fixed;
𝐸 𝐸
the sharpest intermediate case is a projection, which displays all three readings on one map.
Definition 18. Let 𝐸 = 𝐹 ⊕𝐺 be a direct-sum decomposition, so every 𝑢 ∈ 𝐸 writes uniquely as
𝑢 = 𝑢 +𝑢 with 𝑢 ∈ 𝐹 and 𝑢 ∈ 𝐺 (Chapter 7). The projection onto 𝐹 along 𝐺 is the map
𝐹 𝐺 𝐹 𝐺
39

Version of 13 September 2026 Module page
𝑝 : 𝐸 ⟶ 𝐸
.
𝑢 ⟼ 𝑢
𝐹
Proposition 15 (anatomy of a projection). The projection 𝑝 onto 𝐹 along 𝐺 is linear, and
Im𝑝 = 𝐹, ker𝑝 = 𝐺, 𝑝∘𝑝 = 𝑝.
Moreover 𝑝 fixes 𝐹 pointwise: 𝑝(𝑢) = 𝑢 if and only if 𝑢 ∈ 𝐹. So the subspace 𝑝 leaves fixed is
exactly its image.
Proof. Linearity is the uniqueness of the decomposition: if 𝑢 = 𝑢 +𝑢 and 𝑣 = 𝑣 +𝑣 , then 𝑢+
𝐹 𝐺 𝐹 𝐺
𝑣 = (𝑢 +𝑣 )+(𝑢 +𝑣 ) is the decomposition of 𝑢+𝑣, so 𝑝(𝑢+𝑣) = 𝑢 +𝑣 = 𝑝(𝑢)+𝑝(𝑣), and
𝐹 𝐹 𝐺 𝐺 𝐹 𝐹
likewise 𝑝(𝜆𝑢) = 𝜆𝑢 = 𝜆𝑝(𝑢). Every output 𝑝(𝑢) = 𝑢 lies in 𝐹, and every 𝑤 ∈ 𝐹 decomposes as
𝐹 𝐹
𝑤+0, so 𝑝(𝑤) = 𝑤; hence Im𝑝 = 𝐹 and 𝑝 fixes each vector of 𝐹. Next 𝑝(𝑢) = 0 means 𝑢 = 0, i.e.
𝐹
𝑢 = 𝑢 ∈ 𝐺, so ker𝑝 = 𝐺. Finally 𝑝(𝑢) = 𝑢 ∈ 𝐹, which 𝑝 fixes, so 𝑝(𝑝(𝑢)) = 𝑝(𝑢): projecting again
𝐺 𝐹
changes nothing. And if 𝑝(𝑢) = 𝑢 then 𝑢 = 𝑝(𝑢) ∈ Im𝑝 = 𝐹, so the fixed set is exactly 𝐹. □
Example — a projection in the plane. Take ℝ2 = 𝐹 ⊕𝐺 with 𝐹 = Span((1,0)) (the 𝑥-axis)
and 𝐺 = Span((1,1)) (Figure 9). Writing (𝑥,𝑦) = 𝑠(1,0)+𝑡(1,1) gives 𝑡 = 𝑦 and 𝑠 = 𝑥−𝑦, so the
projection onto 𝐹 along 𝐺 is
1 −1
𝑝(𝑥,𝑦) = (𝑥−𝑦,0), with matrix( ).
0 0
It collapses 𝐺 — 𝑝(1,1) = (0,0) — has image the line 𝐹, and leaves 𝐹 fixed — 𝑝(1,0) = (1,0).
2
1 −1 1 −1
And 𝑝∘𝑝 = 𝑝: the matrix satisfies ( ) = ( ).
0 0 0 0
𝐺
𝑢
𝑝(𝑢)=𝑢 𝐹
𝐹
Figure 9: The projection onto 𝐹 (the 𝑥-axis) along 𝐺 (the line 𝑦 = 𝑥). The vector 𝑢 (red) slides down
a line parallel to 𝐺 until it lands on 𝐹. The map collapses 𝐺 to 0 (its kernel), has image 𝐹 (what
it preserves), and leaves every vector of 𝐹 fixed — the course’s three geometric readings on a
single map.
40
