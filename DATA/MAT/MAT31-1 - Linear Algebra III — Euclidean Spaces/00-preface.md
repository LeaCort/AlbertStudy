# Preface

*Source: MAT31-1 - Linear Algebra III — Euclidean Spaces - Textbook.pdf, pages 4*

Version of 13 September 2026 Module page
Preface
In Linear Algebra I you learned the structure of vector spaces: subspaces, bases, dimension, linear
maps. In Linear Algebra II you learned to see inside a transformation — the determinant detecting
invertibility, the eigenvalues and eigenvectors revealing the directions a matrix merely scales, and
diagonalization 𝐴 = 𝑃𝐷𝑃−1 exposing a map’s intrinsic content once you choose the right basis. Two
pieces of geometry, however, were missing from both courses: there was no way to speak of the
length of a vector, and no way to speak of the angle between two vectors. A vector space, as you
knew it, was pure algebra without a ruler or a protractor.
This course supplies the missing instrument. Everything flows from adding a single structure — the
scalar product (or inner product) — a way of multiplying two vectors to get a number. From that
one number length and angle both emerge, and with them a cascade of geometry: orthogonality
(vectors at right angles), orthonormal bases (the cleanest coordinate systems there are), and the
Gram–Schmidt process that manufactures them. A vector space equipped with a scalar product is
called an inner product space — a Euclidean space when it is finite-dimensional — and it is the
natural home of geometry done with the tools of linear algebra.
The course then reaches two high points. The first is the spectral theorem: every real symmetric
matrix is not merely diagonalizable but orthogonally diagonalizable, 𝐴 = 𝑃𝐷𝑃⊤ with 𝑃 orthogonal
— its eigenvectors can always be chosen mutually perpendicular. This is the cleanest and most
useful diagonalization theorem in linear algebra: for symmetric matrices, the diagonalization can
never fail, unlike in Linear Algebra II. The second high point is orthogonal projection and the
best-approximation theorem: given a vector and a subspace, there is a unique closest point in
the subspace, and we can compute it. The distance to that point is the geometric idea behind least-
squares regression.
These are not abstract curiosities. The scalar product is cosine similarity, used everywhere in search
and recommendation. The spectral theorem is the basis of principal component analysis. Positive-
definiteness classifies the critical points found by the Hessian in optimization. Best approximation
is least-squares. You are building the mathematical foundation of data science.
What you must bring, and what no chapter here will teach you, is the linear algebra of the two courses
above: vector spaces, bases, dimension and linear maps from the first, and determinants, eigenvalues
and diagonalization from the second. One thing more is borrowed that neither course covered — the
geometry of polynomials and functions rests on the definite integral — so the few facts of integral
calculus these examples use are recalled once, where they are first needed, and nothing else outside
those two courses is assumed.
Keep one idea in view: the scalar product turns algebra into geometry — and the first question
of geometry is always “how close?”
4
