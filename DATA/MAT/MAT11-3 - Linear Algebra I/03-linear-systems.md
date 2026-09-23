# 3. Linear systems

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 17-19*

Version of 13 September 2026 Module page
3. Linear systems
The oldest use of matrices is to solve simultaneous linear equations. This chapter turns the
schoolbook task of solving such a system into a systematic algorithm whose by-products — pivots,
free variables — become the backbone of the whole course.


## 3.1. Matrix form


A system of 𝑚 linear equations in 𝑛 unknowns 𝑥 ,…,𝑥 ,
1 𝑛
𝑎 𝑥 +…+𝑎 𝑥 = 𝑏
11 1 1𝑛 𝑛 1
{ ⋮ ,
𝑎 𝑥 +…+𝑎 𝑥 = 𝑏
𝑚1 1 𝑚𝑛 𝑛 𝑚
collapses into a single matrix equation
𝐴𝑋 = 𝐵,
where 𝐴 = (𝑎 ) ∈ ℳ︀ (ℝ) is the coefficient matrix, 𝑋 = (𝑥 ,…,𝑥 ) ⊤ the column of unknowns,
𝑖𝑗 𝑚,𝑛 1 𝑛
and 𝐵 = (𝑏 ,…,𝑏 ) ⊤ the column of right-hand sides. The product 𝐴𝑋, read with the rule of
1 𝑚
Chapter 2, reproduces the left-hand sides exactly — which is the whole reason matrix multiplication
is defined the way it is.


## 3.2. Gaussian elimination


The method is the one you already use by hand — eliminate a variable, repeat — made systematic. We
work on the augmented matrix (𝐴|𝐵), the coefficient matrix with the right-hand side appended as
an extra column, and we are allowed three elementary row operations, each of which transforms
the system into an equivalent one (same solution set):
1. swap two rows;
2. scale a row by a non-zero constant;
3. add a multiple of one row to another.
The goal is row echelon form: in every non-zero row the first non-zero entry — the pivot — sits
strictly to the right of the pivot in the row above, and any all-zero rows are pushed to the bottom. The
pivots then trace a descending “staircase”.
*︎
*︎
*︎
pivots descend left-to-right
Figure 4: Row echelon form: each pivot (purple, marked *︎) lies strictly to the right of the one above
it, so the pivots descend in a staircase (red). Columns with a pivot correspond to pivot variables;
columns without one — here the 3rd and 5th — correspond to free variables.
Example — elimination to echelon form. Solve
17

Version of 13 September 2026 Module page
𝑥+2𝑦+𝑧 = 4
{2𝑥+5𝑦−𝑧 = 3 .
𝑥+3𝑦−2𝑧 = −1
The augmented matrix, then 𝑅 ← 𝑅 −2𝑅 and 𝑅 ← 𝑅 −𝑅 :
2 2 1 3 3 1
1 2 1 4 1 2 1 4
(2 5 −1 3 ) ∼ (0 1 −3 −5 ).
1 3 −2 −1 0 1 −3 −5
Now 𝑅 ← 𝑅 −𝑅 wipes out the third row entirely:
3 3 2
1 2 1 4
∼ (0 1 −3 −5 ).
0 0 0 0
Pivots sit in columns 1 and 2; column 3 has none, so 𝑧 is free. Back-substituting, 𝑦 = −5+3𝑧 and
𝑥 = 4−2𝑦−𝑧 = 14−7𝑧. The solution set is a line, treated next.


## 3.3. Pivot analysis and solution classification


After reduction, the pivot pattern decides everything. A column holding a pivot is a pivot variable;
a column without one is a free variable. Then:
• if any row reads 0 = 𝑐 with 𝑐 ≠ 0 (a pivot in the augmented column), the system is inconsistent
— no solution;
• otherwise, if every variable is a pivot variable, the solution is unique;
• otherwise there are free variables, and the system has infinitely many solutions, one for each
assignment of the free variables.
Pitfall. Count pivots in the coefficient part, but always check the augmented column sepa-
rately. A pivot in the right-hand column alone signals the contradiction 0 = 𝑐 and means no
solution — even if the coefficient part looked fine. Many “I found infinitely many solutions”
errors are really an overlooked inconsistency.
The worked system above landed on the infinitely-many case; the other two outcomes are just as
short to reduce.
Example — a unique solution, and no solution. Unique solution. For
𝑥+𝑦 = 3 1 1 3 1 1 3
{ , ( ) ∼ ( )
2𝑥+𝑦 = 4 2 1 4 0 −1 −2
(using 𝑅 ← 𝑅 −2𝑅 ). Both columns of the coefficient part carry a pivot, so there is no free
2 2 1
variable. Back-substituting, the last row gives −𝑦 = −2, hence 𝑦 = 2, and then 𝑥 = 3−𝑦 = 1. The
system has the unique solution (𝑥,𝑦) = (1,2).
No solution. For
18

Version of 13 September 2026 Module page
𝑥+𝑦 = 1 1 1 1 1 1 1
{ , ( ) ∼ ( )
2𝑥+2𝑦 = 3 2 2 3 0 0 1
(again 𝑅 ← 𝑅 −2𝑅 ). The last row reads 0 = 1: a pivot stands alone in the augmented column, so
2 2 1
the system is inconsistent and has no solution — exactly the case the pitfall above warns about,
now produced by a reduction.


## 3.4. Parametric form


When free variables exist, name them as parameters and express each pivot variable in terms of
them. The solution set then reads as a particular solution plus a span of directions:
𝑋 = 𝑋 +𝑡 𝑉 +…+𝑡 𝑉 , 𝑡 ,…,𝑡 ∈ ℝ,
0 1 1 𝑘 𝑘 1 𝑘
where 𝑋 is one solution and 𝑉 ,…,𝑉 are the directions traced by the free variables.
0 1 𝑘
Example — the previous system in parametric form. With 𝑧 = 𝑡 free, 𝑥 = 14−7𝑡 and 𝑦 =
−5+3𝑡, so
𝑥 14 −7
𝑋 = (𝑦) = (−5)+𝑡( 3 ), 𝑡 ∈ ℝ.
𝑧 0 1
This is a line in ℝ3 through the point (14,−5,0) in direction (−7,3,1). The vector (−7,3,1) is exactly
the free-variable direction; notice it is what you get by setting 𝑡 = 1 and dropping the constant —
this reappears as a basis of the null space in Section 7.3.
19
