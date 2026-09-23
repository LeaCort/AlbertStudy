# 6. Vector spaces

*Source: MAT11-3 - Linear Algebra I - Textbook.pdf, pages 25-26*

Version of 13 September 2026 Module page
6. Vector spaces
Here is the leap promised in the preface. We have been adding and scaling several different kinds of
objects — numerical tuples, polynomials, matrices, functions. We now extract the rules they all obey
and take those rules as a definition. Anything satisfying them is a vector space, and any theorem
we prove from the rules alone holds for all of them simultaneously.


## 6.1. From a familiar example to the axioms


In ℝ𝑛 you add componentwise and scale componentwise, and these operations satisfy a short list
of identities — addition commutes and associates, there is a zero, every vector has a negative, and
scalar multiplication distributes. We promote that list to a definition.
Definition 9. A vector space over ℝ is a set 𝐸 equipped with an addition 𝐸×𝐸 ⟶ 𝐸 and a
scalar multiplication ℝ×𝐸 ⟶ 𝐸 such that, for all 𝑢,𝑣,𝑤 ∈ 𝐸 and all 𝜆,𝜇 ∈ ℝ:
1. addition is associative: (𝑢+𝑣)+𝑤 = 𝑢+(𝑣+𝑤);
2. addition is commutative: 𝑢+𝑣 = 𝑣+𝑢;
3. there is a zero vector 0 with 𝑢+0 = 𝑢;
4. every 𝑢 has an opposite −𝑢 with 𝑢+(−𝑢) = 0;
5. 𝜆(𝑢+𝑣) = 𝜆𝑢+𝜆𝑣;
6. (𝜆+𝜇)𝑢 = 𝜆𝑢+𝜇𝑢;
7. (𝜆𝜇)𝑢 = 𝜆(𝜇𝑢);
8. 1⋅𝑢 = 𝑢.
The elements of 𝐸 are called vectors.
Remark. The axioms are a recognition checklist, not something to memorize for its own
sake. The intended reading is: “ℝ𝑛, with the operations you have used since school, satisfies these
— so let us agree to call anything else that satisfies them a vector space too, and reuse all our
results there.”


## 6.2. The standard examples


Example — the spaces this course lives in. Each of the following is a vector space over ℝ;
in each, addition and scaling are the obvious componentwise/pointwise operations, and the zero
vector is named.
• ℝ𝑛 — numerical vectors; zero is (0,…,0).
• ℝ[𝑋] — all polynomials, and ℝ [𝑋] — polynomials of degree ≤ 𝑛; zero is the zero polynomial.
𝑛
• ℱ︀(ℝ,ℝ) — all functions ℝ ⟶ ℝ, with (𝑓+𝑔)(𝑥) = 𝑓(𝑥)+𝑔(𝑥) and (𝜆𝑓)(𝑥) = 𝜆𝑓(𝑥); zero is
the constant function 0.
• ℳ︀ (ℝ) — matrices of a fixed size; zero is the zero matrix.
𝑚,𝑛
25

Version of 13 September 2026 Module page
Pitfall. Watch the degree example. The polynomials of degree exactly 𝑛 do not form a vector
space: their sum can have lower degree (e.g. (𝑋2+𝑋)+(−𝑋2) = 𝑋), and they contain no zero
polynomial. It is ℝ [𝑋], degree at most 𝑛, that is a space. “At most” is closed under addition;
𝑛
“exactly” is not.
In the examples above the operations were the familiar ones, so the axioms held “obviously”. To
verify the axioms is a skill in its own right — and it earns its keep exactly when the operations are
unfamiliar, because then nothing can be taken for granted. Here is such a case, checked from scratch.
Example — a from-scratch verification: same rules, new operations. Let 𝐸 = ℝ be the
>0
positive reals, with an addition and a scaling that are not the usual ones:
𝑢⊞𝑣 = 𝑢𝑣 (ordinary product), 𝜆⊡𝑢 = 𝑢𝜆.
Nothing is inherited from ℝ, so we check the eight axioms directly. Addition ⊞ is associative and
commutative because multiplication of reals is. The zero vector is the number 1, since 𝑢⊞1 =
𝑢⋅1 = 𝑢; the opposite of 𝑢 is 1/𝑢, since 𝑢⊞(1/𝑢) = 1, the zero vector. For the four scaling axioms,
𝜆⊡(𝑢⊞𝑣) = (𝑢𝑣) 𝜆 = 𝑢𝜆𝑣𝜆 = (𝜆⊡𝑢)⊞(𝜆⊡𝑣),
(𝜆+𝜇)⊡𝑢 = 𝑢𝜆+𝜇 = 𝑢𝜆𝑢𝜇 = (𝜆⊡𝑢)⊞(𝜇⊡𝑢),
(𝜆𝜇)⊡𝑢 = 𝑢𝜆𝜇 = (𝑢𝜇) 𝜆 = 𝜆⊡(𝜇⊡𝑢), 1⊡𝑢 = 𝑢1 = 𝑢.
All eight hold, so (ℝ ,⊞,⊡) is a vector space — one whose zero vector is 1 and where “adding”
>0
means multiplying. When the operations are unfamiliar there is no shortcut: each axiom is settled
by unwinding the definitions, exactly as here.
26
