# 3. Orthogonality and orthonormal bases

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 13-14*

Version of 13 September 2026 Module page
3. Orthogonality and orthonormal bases
The single most useful angle is the right angle. When cos𝜃 = 0 — that is, when ⟨𝑢,𝑣⟩ = 0 — the
vectors are orthogonal, and orthogonality turns out to be the organizing principle of the entire
course. Families of mutually orthogonal vectors are automatically independent, and bases built from
unit-length orthogonal vectors make every computation effortless.


## 3.1. Orthogonal and orthonormal families


The two standard axes (1,0) and (0,1) of the plane are perpendicular and each of length one: their
scalar product is 0 and each has norm 1. That pair of features — mutual perpendicularity and unit
length — is what the following definition names in general.
Definition 6. Two vectors 𝑢,𝑣 are orthogonal, written 𝑢 ⟂ 𝑣, if ⟨𝑢,𝑣⟩ = 0. A family (𝑒 ,…,𝑒 ) is
1 𝑘
• orthogonal if its vectors are pairwise orthogonal: ⟨𝑒 ,𝑒 ⟩ = 0 whenever 𝑖 ≠ 𝑗;
𝑖 𝑗
1if𝑖=𝑗
• orthonormal if it is orthogonal and every vector is a unit vector: ⟨𝑒 ,𝑒 ⟩ = { .
𝑖 𝑗 0if𝑖≠𝑗
The standard basis (𝑒 ,…,𝑒 ) of ℝ𝑛 is the prototype orthonormal family. Orthonormality is the
1 𝑛
cleanest possible relationship a family can have: it says the vectors are mutually perpendicular and
individually of unit length.
Example — an orthonormal pair. In ℝ2 the vectors 𝑒 = 1 (1,1) and 𝑒 = 1 (1,−1) satisfy
1 2
√2 √2
1
⟨𝑒 ,𝑒 ⟩ = (1−1) = 0 and ‖𝑒 ‖ = ‖𝑒 ‖ = 1. They are the standard axes rotated by 45° — a different
1 2 1 2
2
orthonormal basis of the same plane.


## 3.2. Orthogonality forces independence


Here is the first structural payoff, and it is a strong one.
Proposition 3 (orthogonal families are independent). Any orthogonal family of non-zero
vectors is linearly independent.
Proof. Suppose (𝑒 ,…,𝑒 ) is orthogonal with each 𝑒 ≠ 0, and 𝑎 𝑒 +…+𝑎 𝑒 = 0. Take the scalar
1 𝑘 𝑖 1 1 𝑘 𝑘
product of both sides with a fixed 𝑒 . By bilinearity and orthogonality, every term 𝑎 ⟨𝑒 ,𝑒 ⟩ vanishes
𝑗 𝑖 𝑖 𝑗
except 𝑖 = 𝑗, leaving
𝑎 ⟨𝑒 ,𝑒 ⟩ = 0.
𝑗 𝑗 𝑗
Since 𝑒 ≠ 0, positive definiteness gives ⟨𝑒 ,𝑒 ⟩ > 0, forcing 𝑎 = 0. As 𝑗 was arbitrary, all coefficients
𝑗 𝑗 𝑗 𝑗
are zero. □
Remark. This is genuinely useful: checking independence normally means row-reducing a
matrix, but for an orthogonal family no computation is needed — independence is automatic.
13

Version of 13 September 2026 Module page
In particular, 𝑛 non-zero orthogonal vectors in an 𝑛-dimensional space form a basis with no
further work.
Pitfall. The vectors must be non-zero. The zero vector is orthogonal to everything (including
itself), so a family containing 0 is “orthogonal” in the literal sense yet certainly not independent.
Orthonormal families avoid this automatically, since unit vectors are never zero.


## 3.3. Coordinates in an orthonormal basis are read off directly


The reason orthonormal bases are so valuable is that coordinates, which normally require solving a
linear system, are read off by single scalar products.
Proposition 4 (Fourier coefficients). If (𝑒 ,…,𝑒 ) is an orthonormal basis of 𝐸, then every
1 𝑛
𝑣 ∈ 𝐸 expands as
𝑛
𝑣 = ∑⟨𝑣,𝑒 ⟩𝑒 .
𝑖 𝑖
𝑖=1
The coordinate of 𝑣 along 𝑒 is simply ⟨𝑣,𝑒 ⟩. Moreover (Pythagoras / Parseval) ‖𝑣‖2 =
𝑖 𝑖
∑ 𝑛 ⟨𝑣,𝑒 ⟩ 2.
𝑖=1 𝑖
Proof. Write 𝑣 = ∑ 𝑎 𝑒 in the basis. Take ⟨⋅,𝑒 ⟩: orthonormality kills every term but 𝑗 = 𝑖, giving
𝑗 𝑗 𝑗 𝑖
⟨𝑣,𝑒 ⟩ = 𝑎 . For the norm, expand ⟨𝑣,𝑣⟩ = ∑ 𝑎 𝑎 ⟨𝑒 ,𝑒 ⟩ = ∑ 𝑎2. □
𝑖 𝑖 𝑖,𝑗 𝑖 𝑗 𝑖 𝑗 𝑖 𝑖
1 1
Example — reading off coordinates. With the rotated basis 𝑒 = (1,1), 𝑒 = (1,−1) and
1 2
√2 √2
𝑣 = (3,1):
3+1 4 3−1
⟨𝑣,𝑒 ⟩ = = = 2√2, ⟨𝑣,𝑒 ⟩ = = √2.
1 2
√2 √2 √2
So 𝑣 = 2√2𝑒 +√2𝑒 , and indeed ‖𝑣‖2 = 8+2 = 10 = 32+12. ✓ No linear system had to be
1 2
solved — just two dot products.
This single property is why the rest of the course works so hard to build orthonormal bases. The tool
that builds them is next.
14
