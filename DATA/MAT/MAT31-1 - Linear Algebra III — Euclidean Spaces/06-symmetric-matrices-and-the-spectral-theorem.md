# 6. Symmetric matrices and the spectral theorem

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 20-24*

Version of 13 September 2026 Module page
6. Symmetric matrices and the spectral
theorem
We now apply the geometry of orthogonality to the eigenvalue theory of Linear Algebra II. The result
is the most important theorem of the course. For a special but very common class of matrices —
the symmetric ones — diagonalization always succeeds, the eigenvalues are always real, and the
eigenvectors can always be chosen mutually orthogonal. None of the difficulties of Linear Algebra
II (complex roots, too few independent eigenvectors) can occur.


## 6.1. Symmetric matrices and self-adjointness


Definition 9. A matrix 𝐴 ∈ ℳ︀ (ℝ) is symmetric if 𝐴⊤ = 𝐴, i.e. 𝑎 = 𝑎 .
𝑛 𝑖𝑗 𝑗𝑖
The reason symmetry interacts so well with the scalar product is the following identity, which says
𝐴 can be moved from one side of an inner product to the other.
Proposition 8 (Self-adjointness). 𝐴 is symmetric if and only if ⟨𝐴𝑢,𝑣⟩ = ⟨𝑢,𝐴𝑣⟩ for all 𝑢,𝑣 ∈
ℝ𝑛.
Proof. ⟨𝐴𝑢,𝑣⟩ = (𝐴𝑢) ⊤𝑣 = 𝑢⊤𝐴⊤𝑣 and ⟨𝑢,𝐴𝑣⟩ = 𝑢⊤𝐴𝑣. These agree for all 𝑢,𝑣 exactly when 𝐴⊤ =
𝐴. □


## 6.2. Two structural facts


Symmetry forces two remarkable properties before we even reach diagonalization.
Remark (a brief word on complex vectors). The proof just below needs to reason about a
possibly complex eigenvalue, so we borrow three facts. For a complex number 𝑧 = 𝑎+𝑏𝑖, its
conjugate is 𝑧 = 𝑎−𝑏𝑖, and 𝑧𝑧 = 𝑎2+𝑏2 = |𝑧|2 ≥ 0 is a real number, zero only when 𝑧 = 0.
Conjugation respects sums and products: 𝑧+𝑤 = 𝑧+𝑤 and 𝑧𝑤 = 𝑧𝑤. For a vector 𝑣 ∈ ℂ𝑛, 𝑣
conjugates each entry, so 𝑣⊤𝑣 = ∑ 𝑣 𝑣 = ∑ |𝑣 |2 ≥ 0 is real and strictly positive unless 𝑣 = 0.
𝑖 𝑖 𝑖 𝑖 𝑖
Finally, a matrix with real entries is its own conjugate, 𝐴 = 𝐴. These few facts are all the proof
uses; no further complex analysis is needed.
Proposition 9 (Real eigenvalues). Every eigenvalue of a real symmetric matrix is real.
Proof. We have to be careful: a real matrix can a priori have complex eigenvalues (its characteristic
polynomial is a real polynomial, whose roots may be complex). So we temporarily allow 𝜆 and the
eigenvector 𝑣 to be complex, and show that in fact 𝜆 must be real. Write 𝑣 for the entrywise complex
conjugate of 𝑣, and consider the single number 𝑣⊤𝐴𝑣.
On one hand, using 𝐴𝑣 = 𝜆𝑣,
20

Version of 13 September 2026 Module page
𝑣⊤𝐴𝑣 = 𝜆𝑣⊤𝑣.
On the other hand, 𝑣⊤𝐴𝑣 is a 1×1 quantity, so it equals its own transpose; transposing and conju-
gating (and using that 𝐴 has real symmetric entries, 𝐴⊤ = 𝐴) turns it into 𝜆𝑣⊤𝑣. Comparing, (𝜆−
𝜆)𝑣⊤𝑣 = 0. Now 𝑣⊤𝑣 = ∑ 𝑣 𝑣 = ∑ |𝑣 |2 is a strictly positive real number (as 𝑣 ≠ 0), so 𝜆 = 𝜆: the
𝑖 𝑖 𝑖 𝑖 𝑖
eigenvalue is real. □
Proposition 10 (Orthogonal eigenspaces). Eigenvectors of a symmetric matrix for distinct
eigenvalues are orthogonal.
Proof. Let 𝐴𝑢 = 𝜆𝑢 and 𝐴𝑣 = 𝜇𝑣 with 𝜆 ≠ 𝜇. Using self-adjointness,
𝜆⟨𝑢,𝑣⟩ = ⟨𝐴𝑢,𝑣⟩ = ⟨𝑢,𝐴𝑣⟩ = 𝜇⟨𝑢,𝑣⟩,
so (𝜆−𝜇)⟨𝑢,𝑣⟩ = 0. As 𝜆 ≠ 𝜇, we conclude ⟨𝑢,𝑣⟩ = 0. □
These two facts are important, but on their own they do not yet give the spectral theorem, and it
is worth being honest about the gap. Real eigenvalues tell us the characteristic polynomial has all
its roots in ℝ — but a polynomial splitting over ℝ does not by itself make a matrix diagonalizable
1 1
(the matrix ( ) has the single real eigenvalue 1 and is not diagonalizable). And orthogonality of
0 1
eigenvectors from distinct eigenvalues says nothing about a repeated eigenvalue: we still need to
know that a repeated eigenvalue supplies as many independent eigenvectors as its multiplicity —
that there is never a shortfall. That missing guarantee is exactly the content of the spectral theorem,
and it needs its own proof, given below.


## 6.3. The spectral theorem


Theorem 4 (Spectral theorem). Every real symmetric matrix 𝐴 ∈ ℳ︀ (ℝ) is orthogonally
𝑛
diagonalizable: there exist an orthogonal matrix 𝑃 (so 𝑃⊤ = 𝑃−1) and a real diagonal matrix
𝐷 with
𝐴 = 𝑃𝐷𝑃⊤.
The columns of 𝑃 form an orthonormal basis of eigenvectors of 𝐴, and the diagonal of 𝐷 holds the
corresponding (real) eigenvalues. Conversely, any matrix of the form 𝑃𝐷𝑃⊤ with 𝑃 orthogonal
and 𝐷 diagonal is symmetric.
Proof. We prove the main direction by induction on the size 𝑛, building an orthonormal basis of
eigenvectors one vector at a time. The key geometric fact is a small lemma: if 𝑒 is an eigenvector of
a symmetric 𝐴, then the subspace 𝑒⟂ of all vectors orthogonal to 𝑒 is sent into itself by 𝐴. Indeed,
for 𝑤 ⟂ 𝑒, self-adjointness gives
⟨𝐴𝑤,𝑒⟩ = ⟨𝑤,𝐴𝑒⟩ = ⟨𝑤,𝜆𝑒⟩ = 𝜆⟨𝑤,𝑒⟩ = 0,
so 𝐴𝑤 ⟂ 𝑒 as well.
For 𝑛 = 1 every 1×1 matrix is already diagonal. Assume the theorem for size 𝑛−1. Given a real
symmetric 𝐴 of size 𝑛, its characteristic polynomial has a root, which is real by the real-eigenvalue
proposition; pick a corresponding unit eigenvector 𝑒 (so 𝐴𝑒 = 𝜆 𝑒 ). By the lemma, 𝐴 maps the
1 1 1 1
21

Version of 13 September 2026 Module page
(𝑛−1)-dimensional subspace 𝐹 = 𝑒⟂ into itself, and the restriction of 𝐴 to 𝐹 is again self-adjoint.
1
Expressed in an orthonormal basis of 𝐹, this restriction is a symmetric (𝑛−1)×(𝑛−1) matrix, so
by the induction hypothesis it has an orthonormal basis of eigenvectors 𝑒 ,…,𝑒 of 𝐹 — which
2 𝑛
are also eigenvectors of 𝐴. Together with 𝑒 they form an orthonormal basis of ℝ𝑛 made entirely of
1
eigenvectors of 𝐴. Placing them as the columns of 𝑃 makes 𝑃 orthogonal and 𝐴 = 𝑃𝐷𝑃⊤, with the
eigenvalues on the diagonal of 𝐷. □
Notice that this argument never mentions multiplicities: the induction hands us exactly 𝑛 ortho-
normal eigenvectors automatically, so the “shortfall” that can wreck an ordinary diagonalization
simply cannot arise. This is the guarantee the previous section said was missing.
⊤
The converse is the easy half and worth seeing: if 𝐴 = 𝑃𝐷𝑃⊤ then 𝐴⊤ = (𝑃𝐷𝑃⊤) = 𝑃𝐷⊤𝑃⊤ =
𝑃𝐷𝑃⊤ = 𝐴, since 𝐷 is diagonal. So orthogonal diagonalizability and symmetry are the same
property — symmetric matrices are exactly those a rotation/reflection turns into pure scalings.
Pitfall. Note the 𝑃⊤ in place of the 𝑃−1 of ordinary diagonalization. Because 𝑃 is orthogonal the
two coincide, so 𝐴 = 𝑃𝐷𝑃⊤ — but the point is that for a symmetric matrix you may choose 𝑃
orthogonal, which is a far stronger and cleaner statement than mere diagonalizability. Inverting
𝑃 is then free: just transpose.


## 6.4. Geometric interpretation: stretching along the eigen-axes


The decomposition 𝐴 = 𝑃𝐷𝑃⊤ is more than an algebraic factorization: it says exactly what a
symmetric matrix does to space. Applying 𝐴 to a vector is three moves performed in order, read
right to left in 𝑃𝐷𝑃⊤:
𝐴𝑥 = ⏟𝑃 ⏟𝐷 ⏟𝑃⊤ 𝑥.
rotate backstretch axis𝑖by𝜆 align eigen-axes
𝑖
Because 𝑃 is orthogonal, 𝑃⊤ is a rigid rotation/reflection that turns the orthonormal eigenvectors into
the coordinate axes; 𝐷 then stretches the 𝑖-th axis by the factor 𝜆 (reflecting it when 𝜆 < 0, collapsing
𝑖 𝑖
it when 𝜆 = 0); and 𝑃 rotates everything back. So a symmetric matrix is, geometrically, a pure
𝑖
stretching along 𝑛 mutually orthogonal directions — its eigenvectors — with the eigenvalues
as the stretch factors. It never shears. A generic (non-symmetric) matrix has no such orthogonal set
of stretch axes; symmetry is exactly what buys the perpendicular ones.
22

Version of 13 September 2026 Module page
𝜆 𝑒
unit circle 1 1
𝜆 𝑒
2 2
Figure 5: A symmetric matrix with eigenvalues 𝜆 > 𝜆 > 0 acting on the plane. The dashed unit
1 2
circle is stretched into an ellipse (purple) whose axes lie along the orthonormal eigenvectors 𝑒 ,𝑒 ;
1 2
the semi-axis lengths are exactly the eigenvalues 𝜆 and 𝜆 . The matrix stretches space by 𝜆 along
1 2 𝑖
direction 𝑒 and does nothing else — no shear. A negative eigenvalue would flip its axis; a zero one
𝑖
would flatten the ellipse onto a line.


## 6.5. The recipe, with a worked case


To orthogonally diagonalize a symmetric 𝐴:
1. Find the eigenvalues via 𝜒 = det(𝐴−𝜆𝐼) = 0 (all real).
𝐴(𝜆)
2. For each eigenvalue, find a basis of its eigenspace. Eigenvectors from distinct eigenvalues
are already orthogonal; within a repeated eigenvalue’s eigenspace, run Gram–Schmidt to
orthonormalize.
3. Normalize all eigenvectors and place them as the columns of 𝑃; place the matching eigen-
values on the diagonal of 𝐷. Then 𝐴 = 𝑃𝐷𝑃⊤.
2 1
Example — a full orthogonal diagonalization. Let 𝐴 = ( ) (symmetric). Its characteristic
1 2
polynomial is
det(𝐴−𝜆𝐼) = (2−𝜆) 2−1 = 𝜆2−4𝜆+3 = (𝜆−3)(𝜆−1),
so the eigenvalues are 3 and 1. Solving (𝐴−3𝐼)𝑣 = 0 gives eigenvector (1,1), and (𝐴−𝐼)𝑣 = 0 gives
(1,−1). These are orthogonal, as the theory promised for distinct eigenvalues. Normalizing each
to unit length:
1 1 1 3 0
𝑃 = ( ), 𝐷 = ( ).
1 −1 0 1
√2
Here 𝑃 is orthogonal (𝑃⊤𝑃 = 𝐼), and one checks 𝐴 = 𝑃𝐷𝑃⊤. Because 𝑃 is orthogonal, the inverse
it would need in ordinary diagonalization is just its transpose — no matrix inversion is required.
2 1 1
Example — a repeated eigenvalue needing Gram–Schmidt. Let 𝐴 = (1 2 1), symmetric.
1 1 2
Its characteristic polynomial factors as 𝜒 (𝜆) = −(𝜆−4)(𝜆−1) 2, so the eigenvalues are 𝜆 = 4
𝐴
(simple) and 𝜆 = 1 (repeated, multiplicity 2).
The simple eigenvalue. Solving (𝐴−4𝐼)𝑣 = 0 gives the eigenvector (1,1,1), which we normalize
1
to 𝑒 = (1,1,1).
1
√3
23

Version of 13 September 2026 Module page
The repeated eigenvalue. Solving (𝐴−𝐼)𝑣 = 0 amounts to the single equation 𝑣 +𝑣 +𝑣 = 0,
1 2 3
whose solution space 𝐸 is a plane. A natural basis read straight off that equation is
1
𝑣 = (1,−1,0), 𝑣 = (1,0,−1),
1 2
but these are not orthogonal: ⟨𝑣 ,𝑣 ⟩ = 1 ≠ 0. This is the case the recipe warned about — we must
1 2
run Gram–Schmidt inside 𝐸 .
1
Take 𝑤 = 𝑣 = (1,−1,0), with ⟨𝑤 ,𝑤 ⟩ = 2. Then
1 1 1 1
⟨𝑣 ,𝑤 ⟩ 1 1 1
𝑤 = 𝑣 − 2 1 𝑤 = (1,0,−1)− (1,−1,0) = ( , ,−1).
2 2 ⟨𝑤 ,𝑤 ⟩ 1 2 2 2
1 1
1 1
Now ⟨𝑤 ,𝑤 ⟩ = − +0 = 0 ✓. Normalizing,
1 2
2 2
1 𝑤 1
𝑒 = (1,−1,0), 𝑒 = 2 = (1,1,−2),
2 3 ‖𝑤 ‖
√2 2 √6
1 1 3
using ‖𝑤 ‖ = + +1 = .
2 √ √
4 4 2
Assemble. The three eigenvectors 𝑒 ,𝑒 ,𝑒 are orthonormal — 𝑒 is automatically orthogonal to
1 2 3 1
the other two because it comes from a distinct eigenvalue, and 𝑒 ⟂ 𝑒 by the Gram–Schmidt
2 3
step. So
1 1 1
(cid:173) (cid:176)
(cid:172) √3 √2 √6 (cid:175) 4 0 0
1 1 1
𝑃 = (cid:172) − (cid:175), 𝐷 = (0 1 0),
(cid:172)√3 √2 √6 (cid:175)
0 0 1
(cid:172) 1 0 − 2 (cid:175)
(√3 √6)
with 𝑃 orthogonal and 𝐴 = 𝑃𝐷𝑃⊤. Without the Gram–Schmidt step the columns for 𝜆 = 1 would
not have been orthogonal, and 𝑃 would have failed 𝑃⊤𝑃 = 𝐼 — the one place in the whole recipe
where orthogonalization is not automatic.
24
