# 2. Matrix arithmetic

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 14-16*

Version of 13 September 2026 Module page
2. Matrix arithmetic
We turn to the object you can hold in your hand and compute with directly. A matrix is a rectangular
table of numbers; everything abstract later in the course is, ultimately, a statement about matrices in
disguise.


## 2.1. Definition and notation


A matrix of size 𝑚×𝑛 is a rectangular array of real numbers with 𝑚 rows and 𝑛 columns,
𝑎 𝑎 … 𝑎
(cid:118) 11 12 1𝑛(cid:123)
𝐴 = (cid:117)𝑎 21 𝑎 22 … 𝑎 2𝑛(cid:122) ,
(cid:117) ⋮ ⋮ ⋱ ⋮ (cid:122)
(cid:117) (cid:122)
𝑎 𝑎 … 𝑎
( 𝑚1 𝑚2 𝑚𝑛)
written compactly 𝐴 = (𝑎 ), where 𝑎 is the entry in row 𝑖, column 𝑗. The set of all such matrices
𝑖𝑗 𝑖𝑗
is written ℳ︀ (ℝ), and ℳ︀ (ℝ) when 𝑚 = 𝑛 (the square matrices). A matrix with one column (𝑛 =
𝑚,𝑛 𝑛
1) is a column vector; with one row (𝑚 = 1), a row vector. To save vertical space we write a column
vector as a transposed row, (𝑥 ,…,𝑥 ) ⊤ — throughout this book the superscript ⊤ is only this space-
1 𝑛
saving shorthand, meaning “the column with entries 𝑥 ,…,𝑥 ”.
1 𝑛
Pitfall. The index order is row first, then column — always. The entry 𝑎 lives in row 2,
23
column 3, never the reverse. A matrix of size 𝑚×𝑛 has 𝑚 rows and 𝑛 columns, in that order.
Getting this backwards is the single most common source of confusion in matrix multiplication
below.


## 2.2. The operations


Before the general rules, compute one concrete instance of each.
1 2 4 −1
Example — the operations on small matrices. Let 𝐴 = ( ) and 𝐵 = ( ). Then
0 3 2 5
5 1 3 6
𝐴+𝐵 = ( ), 3𝐴 = ( ).
2 8 0 9
For the product, each entry of 𝐴𝐵 is a row of 𝐴 “dotted” against a column of 𝐵:
1⋅4+2⋅2 1⋅(−1)+2⋅5 8 9
𝐴𝐵 = ( ) = ( ).
0⋅4+3⋅2 0⋅(−1)+3⋅5 6 15
Definition 6. Let 𝐴 = (𝑎 ) and 𝐵 = (𝑏 ) be matrices.
𝑖𝑗 𝑖𝑗
• Addition (defined only when 𝐴 and 𝐵 have the same size): (𝐴+𝐵) = 𝑎 +𝑏 .
𝑖𝑗 𝑖𝑗 𝑖𝑗
• Scalar multiplication: for 𝜆 ∈ ℝ, (𝜆𝐴) = 𝜆𝑎 .
𝑖𝑗 𝑖𝑗
• Matrix multiplication (defined only when 𝐴 is 𝑚×𝑛 and 𝐵 is 𝑛×𝑝, so the inner sizes
match): 𝐴𝐵 is the 𝑚×𝑝 matrix
14

Version of 13 September 2026 Module page
𝑛
(𝐴𝐵) = ∑ 𝑎 𝑏 .
𝑖𝑗 𝑖𝑘 𝑘𝑗
𝑘=1
The product entry (𝐴𝐵) pairs the 𝑖-th row of 𝐴 with the 𝑗-th column of 𝐵, multiplying correspond-
𝑖𝑗
ing entries and summing. For this pairing to make sense the row of 𝐴 and the column of 𝐵 must have
the same length: the number of columns of 𝐴 must equal the number of rows of 𝐵.
Pitfall. Matrix multiplication is the operation students rush. Two traps: (i) the product 𝐴𝐵 is
only defined when the inner dimensions agree — (𝑚×𝑛)(𝑛×𝑝) — and its size is the outer
dimensions 𝑚×𝑝; (ii) you sum across a row of 𝐴 and down a column of 𝐵, not entry by
matching entry. When in doubt, write the dimensions under the matrices and cancel the inner
pair.


## 2.3. Algebraic properties — and the one that fails


Proposition 5. For matrices of compatible sizes and scalars 𝜆,𝜇 ∈ ℝ:
• addition is commutative and associative, with the zero matrix as identity element;
• scalar multiplication distributes: 𝜆(𝐴+𝐵) = 𝜆𝐴+𝜆𝐵 and (𝜆+𝜇)𝐴 = 𝜆𝐴+𝜇𝐴;
• multiplication is associative, (𝐴𝐵)𝐶 = 𝐴(𝐵𝐶), and distributes over addition, 𝐴(𝐵+𝐶) =
𝐴𝐵+𝐴𝐶.
Every one of these matches your arithmetic instincts — except one crucial absence from the list.
Matrix multiplication is not commutative.
Proposition 6. In general 𝐴𝐵 ≠ 𝐵𝐴.
0 1
Proof. By counterexample: one failing instance refutes a universal claim. Take 𝐴 = ( ) and 𝐵 =
0 0
0 0
( ). Then
1 0
1 0 0 0
𝐴𝐵 = ( ), 𝐵𝐴 = ( ),
0 0 0 1
so 𝐴𝐵 ≠ 𝐵𝐴. One pair suffices to refute the universal claim. □
Pitfall. Non-commutativity is not a curiosity — it is a fact you must actively remember in
every manipulation. You may not “swap factors” as with numbers. In particular (𝐴+𝐵) 2 = 𝐴2+
𝐴𝐵+𝐵𝐴+𝐵2, which is not 𝐴2+2𝐴𝐵+𝐵2 unless 𝐴𝐵 = 𝐵𝐴.


## 2.4. The identity matrix


The 𝑛×𝑛 identity matrix 𝐼 has 1 on the main diagonal and 0 everywhere else,
𝑛
15

Version of 13 September 2026 Module page
1 0 0
𝐼 = (0 1 0).
3
0 0 1
It is the neutral element of multiplication: 𝐴𝐼 = 𝐴 and 𝐼 𝐴 = 𝐴 whenever the product is defined. It
𝑛 𝑛
plays the role the number 1 plays for ordinary multiplication, and it will reappear as the matrix of
the “do-nothing” linear map.
16
