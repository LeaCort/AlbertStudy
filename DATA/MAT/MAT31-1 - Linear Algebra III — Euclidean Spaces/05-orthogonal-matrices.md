# 5. Orthogonal matrices

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 18-19*

Version of 13 September 2026 Module page
5. Orthogonal matrices
Gram–Schmidt produces orthonormal bases; we now study the matrices that map one orthonor-
mal basis to another. These are the orthogonal matrices — the matrices that preserve all lengths
and angles — the rotations and the orientation-reversing rigid motions of space that fix the origin.


## 5.1. Definition and the column criterion


cos𝜃 −sin𝜃
Look at the plane rotation ( ): its two columns each have length one and are perpendicular
sin𝜃 cos𝜃
to each other. Matrices whose columns behave this way are exactly those that preserve every length
and angle, and they earn their own name.
Definition 7. A matrix 𝑃 ∈ ℳ︀ (ℝ) is orthogonal if
𝑛
𝑃⊤𝑃 = 𝐼, equivalently 𝑃⊤ = 𝑃−1.
The condition has a vivid reading in terms of columns. The (𝑖,𝑗) entry of 𝑃⊤𝑃 is the dot product of
column 𝑖 with column 𝑗 of 𝑃; demanding 𝑃⊤𝑃 = 𝐼 says those dot products are 1 on the diagonal and
0 off it.
Proposition 5 (Orthogonal = orthonormal columns). 𝑃 is orthogonal if and only if its
columns form an orthonormal basis of ℝ𝑛. (Equivalently, since 𝑃𝑃⊤ = 𝐼 too, its rows do as
well.)
Example — a rotation matrix. The rotation by angle 𝜃,
cos𝜃 −sin𝜃
𝑅 = ( ),
sin𝜃 cos𝜃
has columns (cos𝜃,sin𝜃) and (−sin𝜃,cos𝜃): each has norm √cos2+sin2 = 1, and their dot
product is −cos𝜃sin𝜃+sin𝜃cos𝜃 = 0. So 𝑅 is orthogonal for every 𝜃.


## 5.2. Orthogonal maps preserve the geometry


The defining property is exactly preservation of the scalar product, hence of all lengths and angles.
Proposition 6 (Isometry). If 𝑃 is orthogonal then for all 𝑢,𝑣,
⟨𝑃𝑢,𝑃𝑣⟩ = ⟨𝑢,𝑣⟩, and in particular ‖𝑃𝑢‖ = ‖𝑢‖.
Proof. ⟨𝑃𝑢,𝑃𝑣⟩ = (𝑃𝑢) ⊤ (𝑃𝑣) = 𝑢⊤𝑃⊤𝑃𝑣 = 𝑢⊤𝐼𝑣 = ⟨𝑢,𝑣⟩. Setting 𝑣 = 𝑢 gives the norm statement. □
So an orthogonal matrix is a rigid motion fixing the origin: it can turn space or flip it, but it never
stretches, shrinks, or shears. This is why orthonormal bases are interchangeable — the change-of-
basis matrix between any two of them is orthogonal.
18

Version of 13 September 2026 Module page


## 5.3. Rotations versus reflections: the determinant criterion


Taking determinants of 𝑃⊤𝑃 = 𝐼 pins down a sharp dichotomy.
Proposition 7. If 𝑃 is orthogonal then det𝑃 = ±1.
Proof. det(𝑃⊤𝑃) = det(𝑃⊤)det(𝑃) = (det𝑃) 2, and this equals det𝐼 = 1, so det𝑃 = ±1. □
Definition 8. An orthogonal matrix 𝑃 with det𝑃 = +1 is a rotation: it preserves orientation.
One with det𝑃 = −1 is orientation-reversing: it reverses orientation.
Example — classifying in the plane. The matrix ( 1 0 ) is orthogonal (𝑃⊤𝑃 = 𝐼) with det𝑃 =
0 −1
−1, so it is orientation-reversing; concretely it sends (𝑥,𝑦) to (𝑥,−𝑦), the reflection across the 𝑥-
cos𝜃 −sin𝜃
axis. The rotation ( ) has det = +1 and turns the plane through the angle 𝜃.
sin𝜃 cos𝜃
In the plane every orientation-reversing orthogonal matrix is a genuine reflection across a line
through the origin — the mirror picture is exact there, and this is the case drawn below. From
dimension three on, orientation-reversing maps are more varied: some are true reflections, fixing a
whole hyperplane and flipping only the perpendicular direction, while others — the rotoreflections
— turn space and flip it, fixing no direction at all. What the determinant alone certifies is the orien-
tation-reversing character; the name reflection is kept for the maps that really do fix a hyperplane.
det=+1 det=−1
rotation reflection
Figure 4: The two kinds of orthogonal map in the plane, both preserving lengths and angles. A
rotation (det = +1, left) keeps orientation: the ordered pair (blue, purple) stays counter-clockwise.
In the plane an orientation-reversing map (det = −1, right) is a reflection, flipping every vector
across a mirror line (dashed). In higher dimensions det = −1 still means orientation-reversing but
no longer means a plain mirror.
Pitfall. det𝑃 = −1 does not by itself make 𝑃 orthogonal — orthogonality is the condition
𝑃⊤𝑃 = 𝐼, and the determinant test only classifies a matrix already known to be orthogonal.
Check 𝑃⊤𝑃 = 𝐼 first; then the sign of the determinant tells you rotation versus orientation-
reversing.
Remark. Orthogonal matrices form a group: products and inverses of orthogonal matrices
are orthogonal (if 𝑃⊤𝑃 = 𝐼 and 𝑄⊤𝑄 = 𝐼 then (𝑃𝑄) ⊤ (𝑃𝑄) = 𝑄⊤𝑃⊤𝑃𝑄 = 𝐼). The determinant
is multiplicative, so composing two orientation-preserving maps, or two orientation-reversing
ones, yields an orientation-preserving map (a rotation), while composing one of each reverses
orientation: the signs simply multiply, (+1)(+1) = (−1)(−1) = +1 and (+1)(−1) = −1.
19
