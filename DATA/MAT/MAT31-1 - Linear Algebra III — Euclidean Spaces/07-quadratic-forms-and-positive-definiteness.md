# 7. Quadratic forms and positive definiteness

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 25-26*

Version of 13 September 2026 Module page
7. Quadratic forms and positive
definiteness
The spectral theorem has an immediate, high-value application: classifying quadratic forms. A
symmetric matrix defines a function 𝑞(𝑥) = 𝑥⊤𝐴𝑥, and the signs of its eigenvalues decide whether
that function is a bowl, a dome, or a saddle. This is exactly the test used in optimization to classify
critical points via the Hessian.


## 7.1. Quadratic forms


The map 𝑞(𝑥,𝑦) = 𝑥2+𝑦2 is the squared length in the plane; a mixed expression such as 𝑞(𝑥,𝑦) =
2𝑥2+6𝑥𝑦+5𝑦2 is of the same kind. Each is homogeneous of degree two, and each is carried by a
symmetric matrix — the object the definition records.
Definition 10. The quadratic form associated with a symmetric matrix 𝐴 ∈ ℳ︀ (ℝ) is the
𝑛
function
𝑞 : ℝ𝑛 ⟶ ℝ
𝑥 ⟼ 𝑥⊤𝐴𝑥 = ∑ 𝑎 𝑥 𝑥
𝑖,𝑗 𝑖𝑗 𝑖 𝑗
Example — reading a form off its matrix. 𝑞(𝑥,𝑦) = 2𝑥2+6𝑥𝑦+5𝑦2 corresponds to 𝐴 = ( 2 3 ):
3 5
the diagonal entries are the coefficients of 𝑥2,𝑦2, and each off-diagonal entry is half the coefficient
of the cross term 𝑥𝑦 (split symmetrically as 3+3 = 6). Always halve the cross terms when building
𝐴 — this is the single most common error.


## 7.2. Classification by eigenvalue signs


Diagonalizing 𝐴 = 𝑃𝐷𝑃⊤ and substituting 𝑦 = 𝑃⊤𝑥 turns the form into a pure sum of squares 𝑞 =
∑𝜆 𝑦2 with no cross terms — the principal axes. The sign of each 𝜆 then determines everything.
𝑖 𝑖 𝑖
Definition 11. A symmetric matrix 𝐴 (and its quadratic form) is
• positive definite if 𝑥⊤𝐴𝑥 > 0 for all 𝑥 ≠ 0;
• positive semi-definite if 𝑥⊤𝐴𝑥 ≥ 0 for all 𝑥;
• negative definite / negative semi-definite: the reverse inequalities;
• indefinite if 𝑥⊤𝐴𝑥 takes both positive and negative values.
Theorem 5 (Eigenvalue classification). Let 𝐴 be symmetric with eigenvalues 𝜆 ,…,𝜆 . Then
1 𝑛
𝐴 is
• positive definite ⟺ all 𝜆 > 0;
𝑖
• positive semi-definite ⟺ all 𝜆 ≥ 0;
𝑖
• negative definite ⟺ all 𝜆 < 0;
𝑖
• negative semi-definite ⟺ all 𝜆 ≤ 0;
𝑖
25

Version of 13 September 2026 Module page
• indefinite ⟺ there are eigenvalues of both signs.
Proof. Write 𝑞(𝑥) = 𝑥⊤𝐴𝑥 = (𝑃⊤𝑥) ⊤ 𝐷(𝑃⊤𝑥) = ∑ 𝜆 𝑦2 where 𝑦 = 𝑃⊤𝑥. As 𝑥 ranges over all non-zero
𝑖 𝑖 𝑖
vectors, so does 𝑦 (since 𝑃 is invertible). The sign behaviour of ∑𝜆 𝑦2 is then dictated entirely by
𝑖 𝑖
the signs of the 𝜆 : all 𝜆 > 0 makes it strictly positive, and all 𝜆 < 0 strictly negative; eigenvalues
𝑖 𝑖 𝑖
of both signs let it take both signs (choose 𝑦 along the relevant axis), the indefinite case; and a zero
eigenvalue lets 𝑞 = 0 hold on a non-zero vector, which is what separates the semi-definite cases (all
𝜆 ≥ 0, or all 𝜆 ≤ 0) from the definite ones. □
𝑖 𝑖
pos. definite neg. definite indefinite pos. semidef.
𝜆 𝑖 >0: bowl 𝜆 𝑖 <0: dome mixed: saddle some 𝜆 𝑖 =0: trough
Figure 6: Level sets of a 2-variable quadratic form. Positive-definite (all 𝜆 > 0): nested ellipses around
𝑖
a minimum — a bowl. Negative-definite (all 𝜆 < 0): the same elliptical level sets, but around a
𝑖
maximum — a dome (the sign of the height, not the shape of the level curves, tells the two apart).
Indefinite (mixed signs): hyperbolas — a saddle, going up one way and down another. Positive semi-
definite (a zero eigenvalue): a flat trough with a direction of no curvature; negative semi-definite is
its mirror image, an inverted trough.


## 7.3. The connection to the Hessian


Remark. In multivariable calculus, the second-order behaviour of a function 𝑓 at a critical
point is captured by its Hessian matrix 𝐻 of second partial derivatives, which is symmetric.
The classification above is exactly the second-derivative test: a positive-definite 𝐻 gives a local
minimum (the bowl), a negative-definite 𝐻 a local maximum (the dome), and an indefinite 𝐻
a saddle point (neither). The eigenvalue signs of the Hessian are how optimization algorithms
tell minima from saddles.
1 3
Pitfall. Reading definiteness off the diagonal entries alone is wrong. The matrix ( ) has
3 1
positive diagonal yet eigenvalues 4 and −2 — it is indefinite. Positive diagonal entries are
necessary but nowhere near sufficient; you must check the eigenvalues (or use a determinant-
based criterion).
26
