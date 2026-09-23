# 4. A matrix acting on a vector

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 20*

Version of 13 September 2026 Module page
4. A matrix acting on a vector
We now reinterpret the symbol 𝐴𝑋. So far it was a bookkeeping device for a system; now read it as
a machine that eats a vector and emits a vector. This shift — from “array of numbers” to “transfor-
mation” — is the conceptual hinge of the course.
A matrix 𝐴 ∈ ℳ︀ (ℝ) defines a map
𝑚,𝑛
𝑓 : ℝ𝑛 ⟶ ℝ𝑚
𝐴
𝑋 ⟼ 𝐴𝑋
sending each input column 𝑋 (with 𝑛 entries) to the output 𝐴𝑋 (with 𝑚 entries). The defining feature
of this map is that it respects linear combinations:
𝐴(𝑋 +𝑌) = 𝐴𝑋 +𝐴𝑌, 𝐴(𝜆𝑋) = 𝜆(𝐴𝑋).
A map with this property is called linear — the central notion of Chapter 10. For now, two subspaces
attached to 𝐴 deserve names, because the entire theory to come is built to compute them.
Definition 7. For 𝐴 ∈ ℳ︀ (ℝ):
𝑚,𝑛
• the null space (or kernel) is the set of inputs sent to zero,
ker𝐴 = {𝑋 ∈ ℝ𝑛 : 𝐴𝑋 = 0};
• the column space (or image) is the set of all outputs,
Im𝐴 = {𝐴𝑋 : 𝑋 ∈ ℝ𝑛},
which equals the set of all linear combinations of the columns of 𝐴.
The two are exactly the two sides of solving 𝐴𝑋 = 𝐵. The null space is the solution set of the
homogeneous system 𝐴𝑋 = 0 — the free-variable directions of Chapter 3. The column space is the
set of right-hand sides 𝐵 for which 𝐴𝑋 = 𝐵 is solvable at all: 𝐵 is reachable precisely when it is a
combination of the columns. Reading “𝐴𝑋 = 𝐵 has a solution” as “𝐵 lies in the column space” is a
habit worth forming now.
1 2
Example — reading off the column space. For 𝐴 = ( ), both columns point along (1,2), so
2 4
every output 𝐴𝑋 is a multiple of (1,2): the column space is the line spanned by (1,2), not all of
ℝ2. Hence 𝐴𝑋 = 𝐵 is solvable only for 𝐵 on that line — e.g. solvable for 𝐵 = (3,6), impossible for
𝐵 = (1,0).
20
