# 11. Matrix representation and change of basis

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 41-44*

Version of 13 September 2026 Module page
11. Matrix representation and change of
basis
We close the circle. We began with matrices, abstracted to linear maps, and now show that every
linear map between finite-dimensional spaces is, once bases are chosen, exactly a matrix. The
abstract and the concrete are two views of one thing — and a single map, read in different bases,
gives a family of similar matrices.


## 11.1. Coordinate vectors


Definition 19. Let ℬ︀ = (𝑒 ,…,𝑒 ) be a basis of 𝐸. Each 𝑢 ∈ 𝐸 writes uniquely as 𝑢 = 𝑥 𝑒 +
1 𝑛 1 1
…+𝑥 𝑒 ; the column
𝑛 𝑛
𝑥
1
[𝑢] = (⋮)
ℬ︀
𝑥
𝑛
is the coordinate vector of 𝑢 in the basis ℬ︀.
The uniqueness in the definition is precisely the basis property; it is what makes coordinates
well-defined. Choosing a basis is choosing a dictionary that translates every abstract vector — a
polynomial, a function — into a concrete column of numbers.
Example — coordinates depend on the basis. In ℝ [𝑋] with basis ℬ︀ = (1,𝑋,𝑋2), the polyno-
2
mial 𝑝 = 3−𝑋 +2𝑋2 has coordinate vector [𝑝] = (3,−1,2) ⊤. In a different basis the same 𝑝
ℬ︀
gets a different column — coordinates are a property of the (vector, basis) pair, never of the vector
alone.


## 11.2. The matrix of a linear map


Definition 20. Let 𝑓 : 𝐸 ⟶ 𝐹 be linear, ℬ︀ = (𝑒 ,…,𝑒 ) a basis of the source 𝐸 and 𝒞︀ a basis of
1 𝑛
the target 𝐹. The matrix of 𝑓 in the bases ℬ︀ and 𝒞︀, written Mat (𝑓) — the target basis first,
𝒞︀,ℬ︀
the source basis second — is the matrix whose 𝑗-th column is the coordinate vector [𝑓(𝑒 )] of
𝑗
𝒞︀
the image of the 𝑗-th source basis vector.
The rule “columns are the images of the basis vectors” is worth committing to memory; it is the
recipe for building the matrix. Its whole purpose is the following compatibility: computing with the
abstract map and computing with its matrix give the same answer.
Proposition 16. With 𝐴 = Mat (𝑓): if [𝑢] = 𝑋 then [𝑓(𝑢)] = 𝐴𝑋. Applying 𝑓 to a vector
𝒞︀,ℬ︀ ℬ︀ 𝒞︀
becomes multiplying its coordinate column by 𝐴.
41

Version of 13 September 2026 Module page
Example — matrix of differentiation. Let 𝑓 = 𝑑 on ℝ [𝑋], basis ℬ︀ = (1,𝑋,𝑋2) for both source
2
𝑑𝑋
and target. The images of the basis vectors are 𝑓(1) = 0, 𝑓(𝑋) = 1, 𝑓(𝑋2) = 2𝑋, with coordinate
columns (0,0,0) ⊤, (1,0,0) ⊤, (0,2,0) ⊤. Stacking them as columns,
0 1 0
Mat (𝑓) = (0 0 2).
ℬ︀
0 0 0
Check: 𝑝 = 3−𝑋 +2𝑋2 has [𝑝] = (3,−1,2) ⊤, and 𝐴(3,−1,2) ⊤ = (−1,4,0) ⊤, the coordinates of
−1+4𝑋 = 𝑝′. ✓


## 11.3. Change of basis


A vector does not change when we re-describe it in a new basis, but its coordinate column does. The
bookkeeping is handled by a single matrix.
Definition 21. Let ℬ︀ (old) and ℬ︀′ (new) be two bases of 𝐸. The change-of-basis matrix from
ℬ︀ to ℬ︀′, written 𝑃 , has, as its columns, the coordinate vectors of the new basis vectors ℬ︀′
ℬ︀→ℬ︀′
expressed in the old basis ℬ︀. When the two bases are clear we write 𝑃 for short.
Proposition 17. If 𝑋 = [𝑢] and 𝑋′ = [𝑢] are the coordinates of the same vector 𝑢 in the old
ℬ︀ ℬ︀′
and new bases, then
𝑋 = 𝑃𝑋′.
Equivalently 𝑋′ = 𝑃−1𝑋, so 𝑃 is invertible.
Pitfall. Read the direction carefully. Although 𝑃 is named “from ℬ︀ to ℬ︀′”, the identity 𝑋 = 𝑃𝑋′
means 𝑃 turns new coordinates 𝑋′ into old coordinates 𝑋 — it transports coordinates ℬ︀′ → ℬ︀,
the opposite way to its name. The name records where the columns come from (the new basis
vectors, written in the old basis); the action on a coordinate column runs the other way. To go
from old to new instead, use 𝑃−1.
𝑢
𝑏′
2
𝑏′
1
Figure 10: One vector 𝑢 (red), two readings. Against the standard grid its coordinates are read off the
horizontal/vertical axes; against the skewed basis (𝑏′,𝑏′) (blue, purple) the same 𝑢 has coordinates
1 2
from the dashed parallelogram — here 𝑢 = 1.5𝑏′ +1𝑏′. The change-of-basis matrix 𝑃 converts one
1 2
column of numbers into the other; the arrow itself never moves.
42

Version of 13 September 2026 Module page
Example — building 𝑃 and converting coordinates. In ℝ2 take the old basis ℬ︀ = (𝑒 ,𝑒 ) (the
1 2
standard basis) and the new basis ℬ︀′ = (𝑏′,𝑏′) with 𝑏′ = (2,1) and 𝑏′ = (1,1). Each new basis
1 2 1 2
vector is already written in the old basis, so its coordinates are its own entries, and those columns
are the change-of-basis matrix:
2 1 1 −1
𝑃 = ( ), 𝑃−1 = ( )
ℬ︀→ℬ︀′ 1 1 ℬ︀→ℬ︀′ −1 2
(the 2×2 formula, with 𝑎𝑑−𝑏𝑐 = 2⋅1−1⋅1 = 1). Now take a vector 𝑢 whose coordinates in the
new basis are 𝑋′ = (1,2) ⊤. Its coordinates in the old basis are
2 1 1 4
𝑋 = 𝑃𝑋′ = ( )( ) = ( ),
1 1 2 3
matching the direct reading 𝑢 = 1⋅𝑏′ +2⋅𝑏′ = (4,3) in the standard basis. Conversely, a vector
1 2
with old coordinates 𝑋 = (4,3) ⊤ has new coordinates
1 −1 4 1
𝑋′ = 𝑃−1𝑋 = ( )( ) = ( ),
−1 2 3 2
recovering 𝑋′: multiplying by 𝑃 and by 𝑃−1 are the two directions of the same conversion.


## 11.4. Similar matrices


Fix a single linear map 𝑓 : 𝐸 ⟶ 𝐸 of a space to itself (an endomorphism). Its matrix depends on
the basis chosen; how do the two matrices — in ℬ︀ and in ℬ︀′ — relate? The change-of-basis matrix
answers it in one line.
Proposition 18 (change of basis for an endomorphism). Let 𝑓 : 𝐸 ⟶ 𝐸 be linear, with
matrices 𝐴 = Mat (𝑓) and 𝐴′ = Mat (𝑓) in two bases, and let 𝑃 be the change-of-basis matrix
ℬ︀ ℬ︀′
from ℬ︀ to ℬ︀′. Then
𝐴′ = 𝑃−1𝐴𝑃.
Proof. For every 𝑢 the compatibility [𝑓(𝑢)] = (Mat)[𝑢] holds in each basis, and 𝑋 = 𝑃𝑋′ relates the
two coordinate columns. So [𝑓(𝑢)] = 𝐴[𝑢] becomes 𝑃[𝑓(𝑢)] = 𝐴𝑃[𝑢] , whence [𝑓(𝑢)] =
ℬ︀ ℬ︀ ℬ︀′ ℬ︀′ ℬ︀′
𝑃−1𝐴𝑃[𝑢] for all 𝑢. That identifies the matrix of 𝑓 in ℬ︀′ as 𝐴′ = 𝑃−1𝐴𝑃. □
ℬ︀′
Definition 22. Two matrices 𝐴,𝐴′ ∈ ℳ︀ (ℝ) are similar if 𝐴′ = 𝑃−1𝐴𝑃 for some invertible 𝑃 ∈
𝑛
ℳ︀ (ℝ).
𝑛
Similarity is precisely “the same map, seen in two bases”. Similar matrices share everything
belonging to the map rather than to the accidental choice of basis — in particular the same rank
and the same kernel dimension. Recognising a pair as similar means recognising two coordinate
descriptions of one geometric transformation.
43

Version of 13 September 2026 Module page
Example — one map, two matrices. Take 𝑓 : ℝ2 ⟶ ℝ2, (𝑥,𝑦) ⟼ (2𝑥+𝑦,𝑥−𝑦); in the
standard basis ℬ︀ its matrix is 𝐴 = ( 2 1 ). Move to ℬ︀′ = ((1,1),(1,−1)). The change-of-basis matrix
1 −1
and its inverse are
1 1 1 1 1
𝑃 = ( ), 𝑃−1 = ( ).
1 −1 2 1 −1
Then
3 3
𝐴′ = 𝑃−1𝐴𝑃 = (2 2 ),
3 1
−
2 2
which is exactly the matrix obtained by expressing 𝑓(1,1) = (3,0) and 𝑓(1,−1) = (1,2) in the basis
ℬ︀′. So 𝐴 and 𝐴′ are similar: one map, two bases.
Which basis makes 𝐴′ simplest — ideally diagonal — is the central question of Linear Algebra II;
the machinery of similar matrices built here is what that diagonalization theory runs on.
44
