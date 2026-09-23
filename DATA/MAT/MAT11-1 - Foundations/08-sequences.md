# 8. Sequences

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 31-34*

Version of 13 September 2026 Module page
8. Sequences


## 8.1. Real sequences


1 1 1
The list 1, , , ,… never reaches 0, yet it settles toward 0 as tightly as we please. A sequence is
2 3 4
such an infinite list of numbers, and the central question is whether it settles toward a single value
— its limit. Making “settles toward” precise is the first genuine 𝜀 argument of the course, and the
template for every limit that follows.
Definition 25 (Real sequence). A real sequence is a function
𝑢 : ℕ ⟶ ℝ
𝑛 ⟼ 𝑢
𝑛
The number 𝑢 is the term of index 𝑛, and the sequence itself is written (𝑢 ) , or simply
𝑛 𝑛 𝑛∈ℕ
(𝑢 ). A sequence may be given explicitly, as 𝑢 = 1/(𝑛+1), or recursively, by a first term 𝑢
𝑛 𝑛 0
and a rule 𝑢 = 𝑔(𝑢 ) producing each term from the one before.
𝑛+1 𝑛


## 8.2. Convergence


Definition 26 (Convergence of a sequence). A sequence (𝑢 ) converges to a real number
𝑛
ℓ when
∀𝜀 > 0, ∃𝑁 ∈ ℕ, ∀𝑛 ≥ 𝑁, |𝑢 −ℓ| < 𝜀.
𝑛
We then call ℓ the limit and write lim 𝑢 = ℓ, or 𝑢 → ℓ. A sequence that converges to
𝑛→∞ 𝑛 𝑛
some real number is convergent; otherwise it diverges.
Read the definition as a challenge and a response. An adversary names a tolerance 𝜀 > 0, however
small; you must supply a rank 𝑁 beyond which every term lies within 𝜀 of ℓ. The smaller the 𝜀, the
larger the 𝑁 you may need — but one must always exist.
ℓ+𝜀
ℓ
ℓ−𝜀
𝑁
Figure 2: Convergence to ℓ. For the tolerance 𝜀 shown, all terms from the rank 𝑁 onward lie inside
the band (ℓ−𝜀,ℓ+𝜀). A smaller 𝜀 narrows the band and pushes 𝑁 to the right.
A limit, once it exists, is unique.
31

Version of 13 September 2026 Module page
Theorem 10 (Uniqueness of the limit). A convergent sequence has exactly one limit.
Proof. Suppose 𝑢 → ℓ and 𝑢 → ℓ′, and let 𝜀 > 0. There is a rank 𝑁 beyond which |𝑢 −ℓ| < 𝜀,
𝑛 𝑛 1 𝑛
and a rank 𝑁 beyond which |𝑢 −ℓ′| < 𝜀. For any 𝑛 ≥ max(𝑁 ,𝑁 ), the triangle inequality gives
2 𝑛 1 2
|ℓ−ℓ′| ≤ |ℓ−𝑢 |+|𝑢 −ℓ′| < 2𝜀.
𝑛 𝑛
Thus |ℓ−ℓ′| is smaller than every positive number 2𝜀, which forces |ℓ−ℓ′| = 0, that is ℓ = ℓ′. □
Theorem 11 (A convergent sequence is bounded). If (𝑢 ) converges, then it is bounded:
𝑛
there is a real 𝑀 with |𝑢 | ≤ 𝑀 for all 𝑛.
𝑛
Proof. Let ℓ = lim 𝑢 . Apply the definition with the particular tolerance 𝜀 = 1: there is a rank
𝑛→∞ 𝑛
𝑁 with |𝑢 −ℓ| < 1 for all 𝑛 ≥ 𝑁, hence |𝑢 | < |ℓ|+1 for those 𝑛. Only the finitely many terms
𝑛 𝑛
𝑢 ,…,𝑢 remain, so
0 𝑁−1
𝑀 = max(|𝑢 |,|𝑢 |,…,|𝑢 |, |ℓ|+1)
0 1 𝑁−1
is a bound satisfied by every term. The decisive step is choosing a single concrete 𝜀, which corrals all
but finitely many terms into one band. □
The converse fails: the bounded sequence 𝑢 = (−1) 𝑛 does not converge; its terms are alternately −1
𝑛
and 1, so they approach no single value.


## 8.3. Operations on limits


Limits combine with arithmetic exactly as one would hope.
Proposition 8 (Operations on limits). If 𝑢 → ℓ and 𝑣 → ℓ′, then as 𝑛 → ∞:
𝑛 𝑛
𝑢 +𝑣 → ℓ+ℓ′, 𝜆𝑢 → 𝜆ℓ (𝜆 ∈ ℝ), 𝑢 𝑣 → ℓℓ′,
𝑛 𝑛 𝑛 𝑛 𝑛
and, provided ℓ′ ≠ 0 and the terms are defined, 𝑢 /𝑣 → ℓ/ℓ′.
𝑛 𝑛
Proof. We prove the sum; the others are similar. Let 𝜀 > 0. Since 𝑢 → ℓ, there is 𝑁 with |𝑢 −ℓ| <
𝑛 1 𝑛
𝜀/2 for 𝑛 ≥ 𝑁 ; since 𝑣 → ℓ′, there is 𝑁 with |𝑣 −ℓ′| < 𝜀/2 for 𝑛 ≥ 𝑁 . For 𝑛 ≥ max(𝑁 ,𝑁 ),
1 𝑛 2 𝑛 2 1 2
𝜀 𝜀
|(𝑢 +𝑣 )−(ℓ+ℓ′)| ≤ |𝑢 −ℓ|+|𝑣 −ℓ′| < + = 𝜀.
𝑛 𝑛 𝑛 𝑛 2 2
Splitting the tolerance in half for each sequence is the standard device. □
These rules cover a limit only when every ingredient converges to a finite value. When a limit involves
∞, four combinations escape the rules and must be studied case by case.
Pitfall. The four indeterminate forms
32

Version of 13 September 2026 Module page
∞ 0
∞−∞, 0×∞, ,
∞ 0
have no automatic value: the answer depends on the specific sequences. For instance √𝑛2+𝑛−
𝑛 is of the form ∞−∞, yet
𝑛 1 1
√𝑛2+𝑛−𝑛 = = → ,
2
√𝑛2+𝑛+𝑛 √1+1/𝑛+1
so it converges to 1/2 — neither 0 nor ∞. Never assign an indeterminate form a value without
resolving it.


## 8.4. The squeeze theorem and monotone convergence


Two theorems let us settle convergence without exhibiting the limit’s value directly.
Theorem 12 (Squeeze theorem). Let (𝑢 ), (𝑎 ), (𝑏 ) be sequences with 𝑎 ≤ 𝑢 ≤ 𝑏 for all
𝑛 𝑛 𝑛 𝑛 𝑛 𝑛
𝑛 large enough. If 𝑎 → ℓ and 𝑏 → ℓ (the same limit), then 𝑢 → ℓ.
𝑛 𝑛 𝑛
Proof. Let 𝜀 > 0. Beyond some rank, |𝑎 −ℓ| < 𝜀 and |𝑏 −ℓ| < 𝜀, so ℓ−𝜀 < 𝑎 and 𝑏 < ℓ+𝜀. With
𝑛 𝑛 𝑛 𝑛
𝑎 ≤ 𝑢 ≤ 𝑏 this gives ℓ−𝜀 < 𝑢 < ℓ+𝜀, that is |𝑢 −ℓ| < 𝜀. Hence 𝑢 → ℓ. □
𝑛 𝑛 𝑛 𝑛 𝑛 𝑛
sin𝑛
Example — Squeezing to a limit. For 𝑢 = , the bound |sin𝑛| ≤ 1 gives −1/𝑛 ≤ 𝑢 ≤ 1/𝑛.
𝑛 𝑛
𝑛
Both −1/𝑛 and 1/𝑛 tend to 0, so by the squeeze theorem 𝑢 → 0, even though sin𝑛 itself has no
𝑛
limit.
Definition 27 (Monotone sequence). A sequence (𝑢 ) is increasing if 𝑢 ≤ 𝑢 for all 𝑛,
𝑛 𝑛 𝑛+1
and decreasing if 𝑢 ≥ 𝑢 for all 𝑛. It is monotone if it is one or the other.
𝑛 𝑛+1
Theorem 13 (Monotone convergence). A monotone bounded sequence converges. More
precisely, an increasing sequence bounded above converges to the least of its upper bounds; a
decreasing sequence bounded below converges to the greatest of its lower bounds. An increasing
sequence that is not bounded above tends to +∞.
The existence of that least upper bound is the deep property of the real line — its completeness —
established in a later analysis course; here we take the theorem as a working tool. It is the standard
way to prove a recursively defined sequence converges, since often one can show it monotone and
bounded without ever computing its terms.


## 8.5. Arithmetico-geometric sequences


One recursive family is fully solvable in closed form.
33

Version of 13 September 2026 Module page
Definition 28 (Arithmetico-geometric sequence). An arithmetico-geometric sequence
is one defined by 𝑢 ∈ ℝ and the recurrence 𝑢 = 𝑎𝑢 +𝑏, with 𝑎,𝑏 ∈ ℝ. When 𝑎 = 1 it is
0 𝑛+1 𝑛
arithmetic; when 𝑏 = 0 it is geometric.
Assume 𝑎 ≠ 1. The method has three steps: find the fixed point, subtract it to expose a geometric
sequence, then read off the limit.
Proposition 9 (Closed form and convergence). Let 𝑢 = 𝑎𝑢 +𝑏 with 𝑎 ≠ 1, and let ℓ =
𝑛+1 𝑛
𝑏/(1−𝑎) be the unique solution of ℓ = 𝑎ℓ+𝑏 (the fixed point). Then
𝑢 = 𝑎𝑛(𝑢 −ℓ)+ℓ for all𝑛 ∈ ℕ,
𝑛 0
and (𝑢 ) converges if and only if |𝑎| < 1 or 𝑢 = ℓ; when |𝑎| < 1 the limit is ℓ.
𝑛 0
Proof. Set 𝑣 = 𝑢 −ℓ. Using ℓ = 𝑎ℓ+𝑏,
𝑛 𝑛
𝑣 = 𝑢 −ℓ = 𝑎𝑢 +𝑏−(𝑎ℓ+𝑏) = 𝑎(𝑢 −ℓ) = 𝑎𝑣 ,
𝑛+1 𝑛+1 𝑛 𝑛 𝑛
so (𝑣 ) is geometric with ratio 𝑎, giving 𝑣 = 𝑎𝑛𝑣 . Therefore 𝑢 = ℓ+𝑎𝑛(𝑢 −ℓ). If |𝑎| < 1 then
𝑛 𝑛 0 𝑛 0
𝑎𝑛 → 0, so 𝑢 → ℓ; if 𝑢 = ℓ the sequence is constant equal to ℓ. Otherwise |𝑎| ≥ 1 and 𝑢 ≠ ℓ, so
𝑛 0 0
𝑎𝑛(𝑢 −ℓ) does not tend to a finite limit, and (𝑢 ) diverges. □
0 𝑛
1
Example — Solving a recurrence. Let 𝑢 = 0 and 𝑢 = 𝑢 +3. The fixed point solves
0 𝑛+1 𝑛
ℓ = 1 ℓ+3, so ℓ = 6. Then 𝑢 = 6+(1/2) 𝑛 (0−6) = 6(1−2−𝑛) 2 . Since |1/2| < 1, the sequence
𝑛
2
converges to 6; and indeed 𝑢 = 3, 𝑢 = 4.5, 𝑢 = 5.25 climb toward 6.
1 2 3
34
