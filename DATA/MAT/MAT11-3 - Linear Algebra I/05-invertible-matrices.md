# 5. Invertible matrices

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 21-24*

Version of 13 September 2026 Module page
5. Invertible matrices
For an ordinary number 𝑎 ≠ 0 there is a reciprocal 𝑎−1 that undoes multiplication by 𝑎. We now
ask the same of a square matrix: is there a matrix that undoes 𝐴? When there is, solving 𝐴𝑋 = 𝐵
becomes a single multiplication, and — the payoff of this chapter — the same Gaussian elimination
of Chapter 3 both finds the inverse and decides whether one exists.


## 5.1. The inverse of a square matrix


Definition 8. A square matrix 𝐴 ∈ ℳ︀ (ℝ) is invertible if there is a matrix 𝐵 ∈ ℳ︀ (ℝ) with
𝑛 𝑛
𝐴𝐵 = 𝐵𝐴 = 𝐼 .
𝑛
Such a 𝐵 is unique; it is the inverse of 𝐴, written 𝐴−1. A matrix with no inverse is called singular.
Proof (uniqueness of the inverse). If 𝐵 and 𝐶 both satisfy the definition, then, using associativity of
the matrix product,
𝐵 = 𝐵𝐼 = 𝐵(𝐴𝐶) = (𝐵𝐴)𝐶
𝑛
= 𝐼 𝐶 = 𝐶.
𝑛
So the inverse, when it exists, is unique. □
Only square matrices can be invertible: 𝐴𝐵 and 𝐵𝐴 must both be defined and equal to an identity,
which forces 𝐴 and 𝐵 to be square of the same size. Two rules are used constantly.
Proposition 7. If 𝐴,𝐵 ∈ ℳ︀ (ℝ) are invertible, then so are 𝐴−1 and 𝐴𝐵, with
𝑛
(𝐴−1) −1 = 𝐴, (𝐴𝐵) −1 = 𝐵−1𝐴−1.
The reversal in (𝐴𝐵) −1 = 𝐵−1𝐴−1 has a simple logic: to undo “first 𝐵, then 𝐴”, you undo 𝐴 first, then
𝐵. Check it by multiplying: (𝐴𝐵)(𝐵−1𝐴−1) = 𝐴(𝐵𝐵−1)𝐴−1 = 𝐴𝐴−1 = 𝐼 .
𝑛


## 5.2. The 2 × 2 formula


For the smallest square matrices there is a closed formula.
𝑎 𝑏
Proposition 8 (inverse of a 2×2 matrix). Let 𝐴 = ( ). If the number 𝑎𝑑−𝑏𝑐 is non-zero,
𝑐 𝑑
then 𝐴 is invertible and
1 𝑑 −𝑏
𝐴−1 = ( ).
𝑎𝑑−𝑏𝑐 −𝑐 𝑎
If 𝑎𝑑−𝑏𝑐 = 0, then 𝐴 is not invertible.
Proof. Multiply out:
21

Version of 13 September 2026 Module page
𝑎 𝑏 𝑑 −𝑏 𝑎𝑑−𝑏𝑐 0
( )( ) = ( ) = (𝑎𝑑−𝑏𝑐)𝐼 .
𝑐 𝑑 −𝑐 𝑎 0 𝑎𝑑−𝑏𝑐 2
1 𝑑 −𝑏
When 𝑎𝑑−𝑏𝑐 ≠ 0, dividing by it gives 𝐴⋅( ( )) = 𝐼 , and the same computation in the
𝑎𝑑−𝑏𝑐 −𝑐 𝑎 2
other order gives 𝐼 too, so the displayed matrix is 𝐴−1. When 𝑎𝑑−𝑏𝑐 = 0, the two columns of 𝐴 are
2
collinear, so ker𝐴 ≠ {0} (some non-zero 𝑋 has 𝐴𝑋 = 0); by the theorem in Section 5.4 below, such
an 𝐴 cannot be invertible. □
2 1
Example — a 2×2 inverse. For 𝐴 = ( ), 𝑎𝑑−𝑏𝑐 = 2⋅1−1⋅1 = 1, so
1 1
1 1 −1 1 −1
𝐴−1 = ( ) = ( ).
1 −1 2 −1 2
Check: 𝐴𝐴−1 = ( 2−1 −2+2 ) = ( 1 0 ). ✓
1−1 −1+2 0 1
Remark. The number 𝑎𝑑−𝑏𝑐 is the exact gatekeeper of invertibility in the 2×2 case, and it
will return in Linear Algebra II as one instance of a single quantity attached to any square matrix.
Here we neither name it nor develop it further — the 2×2 formula is all we need.


## 5.3. Inverting by Gauss–Jordan elimination


Beyond 2×2 there is no formula worth memorising; instead we compute the inverse by the elimi-
nation we already know. The recipe:
Method 2 (Gauss–Jordan inversion). To invert 𝐴 ∈ ℳ︀ (ℝ), form the augmented 𝑛×2𝑛
𝑛
matrix (𝐴|𝐼 ) and apply elementary row operations until the left block is 𝐼 . The right block is
𝑛 𝑛
then 𝐴−1:
(𝐴|𝐼 ) ∼ … ∼ (𝐼 |𝐴−1).
𝑛 𝑛
If at any stage the left block acquires a zero row, it can never become 𝐼 : then 𝐴 is not invertible,
𝑛
and the process stops.
Why it works: every row operation is achieved by left-multiplying by some invertible matrix. The
sequence of operations that turns 𝐴 into 𝐼 therefore left-multiplies 𝐴 by 𝐴−1 — so applying that
𝑛
same sequence to 𝐼 turns it into 𝐴−1𝐼 = 𝐴−1. Carrying 𝐼 alongside simply records the product.
𝑛 𝑛 𝑛
1 2 3
Example — a 3×3 inverse by Gauss–Jordan. Invert 𝐴 = (0 1 4). Reduce (𝐴|𝐼 3 ); first clear
5 6 0
column 1 with 𝑅 ← 𝑅 −5𝑅 , then column 2 below the pivot with 𝑅 ← 𝑅 +4𝑅 :
3 3 1 3 3 2
1 2 3 1 0 0 1 2 3 1 0 0
(0 1 4 0 1 0) ∼ (0 1 4 0 1 0).
5 6 0 0 0 1 0 0 1 −5 4 1
The left block is now upper-triangular with pivots 1,1,1; clear upward with 𝑅 ← 𝑅 −4𝑅 , 𝑅 ←
2 2 3 1
𝑅 −3𝑅 , then 𝑅 ← 𝑅 −2𝑅 :
1 3 1 1 2
22

Version of 13 September 2026 Module page
1 2 0 16 −12 −3 1 0 0 −24 18 5
∼ (0 1 0 20 −15 −4) ∼ (0 1 0 20 −15 −4).
0 0 1 −5 4 1 0 0 1 −5 4 1
The left block is 𝐼 , so
3
−24 18 5
𝐴−1 = ( 20 −15 −4).
−5 4 1
Check the top-left entry of 𝐴𝐴−1 — row 1 of 𝐴 against column 1 of 𝐴−1: (1,2,3)⋅(−24,20,−5) =
−24+40−15 = 1, and the other entries fall out the same way to give 𝐼 . ✓
3


## 5.4. Kernel and invertibility


Whether the Gauss–Jordan process succeeds is decided entirely by the kernel of 𝐴 — this is the
promised link between solving 𝐴𝑋 = 0 and inverting 𝐴.
Theorem 3 (invertibility criteria). For a square matrix 𝐴 ∈ ℳ︀ (ℝ), the following are equiv-
𝑛
alent:
1. 𝐴 is invertible;
2. ker𝐴 = {0} (the homogeneous system 𝐴𝑋 = 0 has only the solution 𝑋 = 0);
3. 𝐴 has a pivot in every one of its 𝑛 columns after row reduction;
4. for every 𝐵, the system 𝐴𝑋 = 𝐵 has a unique solution.
Proof. (1 ⟹ 2) If 𝐴 is invertible and 𝐴𝑋 = 0, then 𝑋 = 𝐴−1𝐴𝑋 = 𝐴−10 = 0, so ker𝐴 = {0}. (2 ⟺
3) A column without a pivot is a free variable, giving a non-zero solution of 𝐴𝑋 = 0; so ker𝐴 = {0}
exactly when every column has a pivot. (3 ⟹ 4) With 𝑛 pivots in 𝑛 columns and 𝑛 rows, back-
substitution solves 𝐴𝑋 = 𝐵 for every 𝐵, uniquely (no free variables). (4 ⟹ 1) First, condition 4 with
𝐵 = 0 says 𝐴𝑋 = 0 has a unique solution; since 𝑋 = 0 is a solution, it is the only one, so ker𝐴 =
{0}. Now solve 𝐴𝑋 = 𝑒 for each standard basis vector 𝑒 — condition 4 provides a solution 𝐶 —
𝑗 𝑗 𝑗
and let 𝐶 be the matrix with columns 𝐶 ,…,𝐶 , so that 𝐴𝐶 = 𝐼 . It remains to check 𝐶𝐴 = 𝐼 : from
1 𝑛 𝑛 𝑛
𝐴𝐶 = 𝐼 ,
𝑛
𝐴(𝐶𝐴−𝐼 ) = (𝐴𝐶)𝐴−𝐴 = 𝐴−𝐴 = 0,
𝑛
so every column of 𝐶𝐴−𝐼 lies in ker𝐴 = {0} and hence vanishes, giving 𝐶𝐴 = 𝐼 . Thus 𝐴 is
𝑛 𝑛
invertible with 𝐴−1 = 𝐶 — which is exactly what Gauss–Jordan computes. □
Remark. Read geometrically (the thread of this whole course), 𝐴 is invertible when the trans-
formation 𝑋 ⟼ 𝐴𝑋 collapses no direction: its kernel is trivial, so distinct inputs stay distinct
and every target is hit exactly once — the map is a bijection of ℝ𝑛, undone by 𝐴−1. A singular
matrix crushes some non-zero vector to 0, losing the information needed to reverse it.
Pitfall. Invertibility is a property of square matrices only. A 2×3 or 3×2 matrix is never
invertible — there is no single matrix undoing it on both sides. And for a square 𝐴, 𝑎𝑑−𝑏𝑐 =
23

Version of 13 September 2026 Module page
0 (in the 2×2 case) or a zero row appearing in Gauss–Jordan (in general) is the signal of
singularity, not a computational mistake to fix.
24
