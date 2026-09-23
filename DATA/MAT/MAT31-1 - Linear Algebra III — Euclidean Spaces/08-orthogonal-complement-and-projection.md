# 8. Orthogonal complement and projection

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 27-29*

Version of 13 September 2026 Module page
8. Orthogonal complement and projection
We turn to the second great theme: approximation. Given a subspace 𝐹 and a vector 𝑣 that may
not lie in it, what is the point of 𝐹 closest to 𝑣? The answer rests on splitting any vector into a part
inside 𝐹 and a part exactly perpendicular to 𝐹 — the orthogonal complement and the orthogonal
projection.


## 8.1. The orthogonal complement


Fix a line through the origin in ℝ3: the vectors at right angles to it fill the perpendicular plane. Fix
a plane instead, and the vectors perpendicular to it fill a line. Collecting everything orthogonal to a
given subspace always produces another subspace — the one the definition names.
Definition 12. Let 𝐹 be a subspace of a Euclidean space 𝐸. Its orthogonal complement is
𝐹⟂ = {𝑣 ∈ 𝐸 : ⟨𝑣,𝑓⟩ = 0for all𝑓 ∈ 𝐹},
the set of vectors orthogonal to everything in 𝐹. It is itself a subspace.
In practice 𝐹 is given by a spanning set, and a vector lies in 𝐹⟂ exactly when it is orthogonal to each
spanning vector — a system of linear equations.
Example — computing an orthogonal complement. In ℝ3 let 𝐹 = Span((1,1,0)). A vector
(𝑥,𝑦,𝑧) ∈ 𝐹⟂ iff ⟨(𝑥,𝑦,𝑧),(1,1,0)⟩ = 𝑥+𝑦 = 0. So 𝐹⟂ = {(𝑥,−𝑥,𝑧)} = Span((1,−1,0),(0,0,1)), a
plane — the plane of all vectors perpendicular to the line 𝐹.


## 8.2. The direct sum decomposition


The central structural fact is that 𝐹 and 𝐹⟂ together fill all of 𝐸, with no overlap.
Theorem 6 (Orthogonal decomposition). For any subspace 𝐹 of a Euclidean space 𝐸,
𝐸 = 𝐹 ⊕𝐹⟂, hence dim𝐹 +dim𝐹⟂ = dim𝐸.
Every 𝑣 ∈ 𝐸 has a unique decomposition 𝑣 = 𝑣 +𝑣 with 𝑣 ∈ 𝐹 and 𝑣 ∈ 𝐹⟂.
𝐹 ⟂ 𝐹 ⟂
Proof. No overlap: if 𝑤 ∈ 𝐹 ∩𝐹⟂ then 𝑤 is orthogonal to itself, ⟨𝑤,𝑤⟩ = 0, so 𝑤 = 0 by positive
definiteness. Spanning: take an orthonormal basis (𝑒 ,…,𝑒 ) of 𝐹 (Gram–Schmidt guarantees one),
1 𝑘
and for any 𝑣 set 𝑣 = ∑ ⟨𝑣,𝑒 ⟩𝑒 ∈ 𝐹. Then 𝑣−𝑣 is orthogonal to every 𝑒 , hence to all of 𝐹, so
𝐹 𝑖 𝑖 𝑖 𝐹 𝑖
it lies in 𝐹⟂. Thus 𝑣 = 𝑣 +(𝑣−𝑣 ) is the required decomposition; the dimension formula follows
𝐹 𝐹
from the direct sum. □
Pitfall. The dimension formula dim𝐹 +dim𝐹⟂ = dim𝐸 is the tool to find dim𝐹⟂ without
computing it directly: a plane in ℝ3 (dim𝐹 = 2) has a line as complement (dim𝐹⟂ = 1), and vice
27

Version of 13 September 2026 Module page
versa. But it depends on the ambient 𝐸: the complement of a line is a 4-dimensional space inside
ℝ5, not the same as in ℝ3. The complement is always taken inside a stated ambient space.


## 8.3. Orthogonal projection


The “𝐹-part” 𝑣 of the decomposition is the orthogonal projection.
𝐹
Definition 13. The orthogonal projection of 𝑣 onto 𝐹 is the unique 𝑝 (𝑣) = 𝑣 ∈ 𝐹 from the
𝐹 𝐹
decomposition above. If (𝑒 ,…,𝑒 ) is an orthonormal basis of 𝐹, then
1 𝑘
𝑘
𝑝 (𝑣) = ∑⟨𝑣,𝑒 ⟩𝑒 .
𝐹 𝑖 𝑖
𝑖=1
Pitfall. The formula 𝑝 = ∑⟨𝑣,𝑒 ⟩𝑒 requires the basis to be orthonormal. With a merely
𝐹(𝑣) 𝑖 𝑖
orthogonal basis, divide each term by ⟨𝑒 ,𝑒 ⟩; with a general (non-orthogonal) basis the formula
𝑖 𝑖
is simply wrong — orthonormalize first via Gram–Schmidt, or use the projection matrix below.
𝑣
𝑣−𝑝 ∈𝐹⟂
𝐹(𝑣)
𝑝 𝐹(𝑣) 𝐹
Figure 7: Orthogonal projection onto a subspace 𝐹. The vector 𝑣 splits into 𝑝 ∈ 𝐹 (its shadow on
𝐹(𝑣)
𝐹) and the perpendicular remainder 𝑣−𝑝 ∈ 𝐹⟂ (the right angle is marked). This is the unique
𝐹(𝑣)
way to write 𝑣 as “something in 𝐹 plus something perpendicular to 𝐹”.


## 8.4. The projection matrix


When 𝐹 is a subspace of ℝ𝑛, the projection is a linear map, hence a matrix.
Proposition 11 (Projection matrix). If the columns of 𝑄 form an orthonormal basis of 𝐹 ⊂
ℝ𝑛, the orthogonal projection onto 𝐹 is left-multiplication by
𝑃 = 𝑄𝑄⊤.
𝐹
More generally, if the columns of 𝑀 are any basis of 𝐹 (not necessarily orthonormal), then
−1
𝑃 = 𝑀(𝑀⊤𝑀) 𝑀⊤.
𝐹
In both cases 𝑃 is symmetric and idempotent (𝑃2 = 𝑃 ): projecting twice is the same as
𝐹 𝐹 𝐹
projecting once.
28

Version of 13 September 2026 Module page
Proof. Orthonormal case. Writing the columns of 𝑄 as the orthonormal basis (𝑒 ,…,𝑒 ), the
1 𝑘
orthonormal-basis formula for 𝑝 gives, for the column vector 𝑣,
𝐹
𝑘 𝑘 𝑘
𝑝 (𝑣) = ∑⟨𝑣,𝑒 ⟩𝑒 = ∑𝑒 (𝑒⊤𝑣) = (∑𝑒 𝑒⊤)𝑣 = 𝑄𝑄⊤𝑣,
𝐹 𝑖 𝑖 𝑖 𝑖 𝑖 𝑖
𝑖=1 𝑖=1 𝑖=1
since ∑ 𝑒 𝑒⊤ is exactly the product 𝑄𝑄⊤. So the projection is left-multiplication by 𝑃 = 𝑄𝑄⊤.
𝑖 𝑖 𝑖 𝐹
General case. Now let the columns of 𝑀 be any basis of 𝐹. The projection 𝑝 (𝑣) lies in 𝐹, so 𝑝 (𝑣) =
𝐹 𝐹
𝑀𝑥 for some coefficient vector 𝑥, and the defining property is that the residual 𝑣−𝑀𝑥 lies in 𝐹⟂ —
that is, it is orthogonal to every column of 𝑀, which says 𝑀⊤(𝑣−𝑀𝑥) = 0. Hence
𝑀⊤𝑀𝑥 = 𝑀⊤𝑣.
The matrix 𝑀⊤𝑀 is invertible: its columns being a basis makes them linearly independent, and if
𝑀⊤𝑀𝑥 = 0 then ‖𝑀𝑥‖2 = 𝑥⊤𝑀⊤𝑀𝑥 = 0, so 𝑀𝑥 = 0 and therefore 𝑥 = 0. Thus 𝑥 = (𝑀⊤𝑀) −1 𝑀⊤𝑣
and
−1
𝑝 (𝑣) = 𝑀𝑥 = 𝑀(𝑀⊤𝑀) 𝑀⊤𝑣,
𝐹
−1
giving 𝑃 = 𝑀(𝑀⊤𝑀) 𝑀⊤. (When the basis is orthonormal, 𝑀 = 𝑄 with 𝑀⊤𝑀 = 𝐼, and this
𝐹
−1 ⊤ −1
collapses back to 𝑄𝑄⊤.) Finally 𝑃 is symmetric — (𝑀(𝑀⊤𝑀) 𝑀⊤) = 𝑀(𝑀⊤𝑀) 𝑀⊤, using that
𝐹
𝑀⊤𝑀 is symmetric — and idempotent, since applying it to a vector already in 𝐹 returns that vector
unchanged, so 𝑃2 = 𝑃 . □
𝐹 𝐹
Example — projecting onto a line. Project 𝑣 = (3,4) onto the line 𝐹 = Span((1,0)) in ℝ2. The
unit vector is 𝑒 = (1,0), so 𝑝 = ⟨𝑣,𝑒⟩𝑒 = 3(1,0) = (3,0) — drop the second coordinate. The
𝐹(𝑣)
projection matrix is 𝑃 = 𝑒𝑒⊤ = ( 1 0 ), and indeed 𝑃 (3,4) ⊤ = (3,0) ⊤. The remainder (0,4) ∈ 𝐹⟂.
𝐹 0 0 𝐹
29
