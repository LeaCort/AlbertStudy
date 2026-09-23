# 9. Best approximation, distance, and least squares

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 30-32*

Version of 13 September 2026 Module page
9. Best approximation, distance, and least
squares
Everything assembled now yields the theorem the course was built for: the orthogonal projection of
𝑣 onto 𝐹 is the closest point of 𝐹 to 𝑣. This is the best-approximation theorem, and its distance
is the residual that least-squares regression minimizes.


## 9.1. The best-approximation theorem


Drop a perpendicular from a point onto a line in the plane: the foot of that perpendicular is the point
of the line closest to the given point, and every other point of the line is strictly farther away. The
theorem below is exactly this picture, raised to any subspace of a Euclidean space.
Theorem 7 (Best approximation). Let 𝐹 be a subspace of a Euclidean space and 𝑣 any vector.
The orthogonal projection 𝑝 is the unique closest point of 𝐹 to 𝑣: for every 𝑓 ∈ 𝐹 with
𝐹(𝑣)
𝑓 ≠ 𝑝 ,
𝐹(𝑣)
‖ ‖
𝑣−𝑝 < ‖𝑣−𝑓‖.
‖ 𝐹(𝑣)‖
Proof. For any 𝑓 ∈ 𝐹, write 𝑣−𝑓 = (𝑣−𝑝 )+(𝑝 −𝑓). The first bracket lies in 𝐹⟂ and the
𝐹(𝑣) 𝐹(𝑣)
second in 𝐹, so they are orthogonal, and Pythagoras gives
‖𝑣−𝑓‖2 = ‖ 𝑣−𝑝 ‖2 + ‖ 𝑝 −𝑓 ‖2 .
‖ 𝐹(𝑣)‖ ‖ 𝐹(𝑣) ‖
‖
The second term is ≥ 0, and is zero only when 𝑓 = 𝑝 . Hence ‖𝑣−𝑓‖ is strictly larger than 𝑣−
𝐹(𝑣) ‖
‖
𝑝 unless 𝑓 = 𝑝 . □
𝐹(𝑣)‖ 𝐹(𝑣)
The proof is the whole idea in one line: the error 𝑣−𝑝 is perpendicular to 𝐹, and a perpen-
𝐹(𝑣)
dicular dropped to a subspace is shorter than any slanted line to it.


## 9.2. Distance to a subspace


Definition 14. The distance from 𝑣 to a subspace 𝐹 is the minimal distance to its points,
achieved at the projection:
‖ ‖
𝑑(𝑣,𝐹) = 𝑣−𝑝 = ‖𝑣 ‖.
‖ 𝐹(𝑣)‖ ⟂
Example — distance from a point to a plane. Find the distance from 𝑣 = (1,1,1) to the plane
𝐹 = Span((1,0,0),(0,1,0)) (the 𝑥𝑦-plane) in ℝ3. The projection drops the third coordinate: 𝑝 =
𝐹(𝑣)
(1,1,0). The remainder is 𝑣−𝑝 = (0,0,1) ∈ 𝐹⟂, so
𝐹(𝑣)
𝑑(𝑣,𝐹) = ‖(0,0,1)‖ = 1.
30

Version of 13 September 2026 Module page
The closest point of the plane is (1,1,0), directly “below” 𝑣.


## 9.3. Why this is least-squares regression


Remark. Least-squares regression fits a model to data by minimizing the sum of squared errors
— and that is exactly a distance minimization in a Euclidean space. To solve an overdetermined
system 𝐴𝑥 ≈ 𝑏 (more equations than unknowns, no exact solution), we seek the 𝑥 making 𝐴𝑥 as
close to 𝑏 as possible. The achievable vectors 𝐴𝑥 form the column space 𝐹 = Im(𝐴), so the best
𝐴𝑥 is the orthogonal projection of 𝑏 onto 𝐹. The error 𝑏−𝐴𝑥 must be perpendicular to 𝐹, i.e.
𝐴⊤(𝑏−𝐴𝑥) = 0, which rearranges to the normal equations
𝐴⊤𝐴𝑥 = 𝐴⊤𝑏.
Least-squares regression is the best-approximation theorem, and the regression line is the
orthogonal projection of the data onto the space of fitted values.
Example — a least-squares line, computed. Fit a line 𝑦 = 𝑎+𝑏𝑥 to the three data points (0,1),
(1,2), (2,2). No line passes through all three, so we solve in the least-squares sense. Writing one
𝑎
row per data point, the model 𝑦 = 𝑎+𝑏𝑥 becomes 𝐴( ) ≈ 𝑏 with
𝑏
1 0 1
𝐴 = (1 1), 𝑏 = (2).
1 2 2
The normal equations 𝐴⊤𝐴( 𝑎 ) = 𝐴⊤𝑏 use
𝑏
3 3 5
𝐴⊤𝐴 = ( ), 𝐴⊤𝑏 = ( ).
3 5 6
Solving 3𝑎+3𝑏 = 5 and 3𝑎+5𝑏 = 6 gives 𝑏 = 1/2 and 𝑎 = 7/6, so the best-fit line is
7 1
𝑦 = + 𝑥.
6 2
Its residuals at the three points are −1/6,+2/6,−1/6, which sum to 0 — the sign that the error
vector is orthogonal to the fitted values, exactly as the best-approximation theorem predicts.
31

Version of 13 September 2026 Module page
fit
minimize sum of squared residuals
Figure 8: Least-squares regression as best approximation. The dashed residuals are the gaps between
data (purple) and the fitted line (blue). Minimizing the sum of their squares is exactly projecting the
data vector 𝑏 orthogonally onto the column space of the design matrix — the closest reachable point,
with error perpendicular to that space.
32
