# 7. Comparing Infinities

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 29-30*

Version of 13 September 2026 Module page
7. Comparing Infinities


## 7.1. Comparing sizes by pairing


Two finite sets have “the same number of elements” when their elements can be paired off, one
to one, with none left over — that is, when a bijection runs between them. This pairing test needs
no counting, so it keeps its meaning for infinite sets. Following it faithfully leads to a startling
conclusion: some infinite sets are strictly larger than others.


## 7.2. Equipotence and countable sets


Definition 23 (Equipotence). Two sets 𝐴 and 𝐵 are equipotent when there exists a bijection
𝑓 : 𝐴 ⟶ 𝐵. We then say they have the same cardinality and write 𝐴 ∼ 𝐵.
For finite sets, equipotence is just “the same number of elements”. The surprises begin with infinite
sets, where a set can be equipotent to a proper subset of itself.
Example — The integers are equipotent to the naturals. Interleave the non-negative and
negative integers. The map
𝑓 : ℕ ⟶ ℤ
𝑛/2 if𝑛is even
𝑛 ⟼ {
−(𝑛+1)/2if𝑛is odd
sends 0,1,2,3,4,… ⟼ 0,−1,1,−2,2,…, listing every integer exactly once. It is a bijection, so ℤ ∼
ℕ — there are “as many” integers as naturals, though ℕ sits strictly inside ℤ.
Definition 24 (Countable set). A set is countable when it is finite or equipotent to ℕ. A set
equipotent to ℕ is countably infinite; concretely, its elements can be arranged in a single list
𝑥 ,𝑥 ,𝑥 ,… indexed by ℕ, each element appearing exactly once.
0 1 2
The rationals, which look far denser than the naturals, are still countable: one can arrange the
fractions in a grid and sweep it along successive diagonals, skipping repetitions, producing a single
list of all of ℚ. So ℚ ∼ ℕ as well.
7.3. Cantor’s theorem
Is every set countable? No. No set — however large — can be paired with its own power set.
Theorem 8 (Cantor's theorem). For every set 𝑋, there is no surjection from 𝑋 onto its power
set 𝒫︀(𝑋). In particular 𝑋 and 𝒫︀(𝑋) are not equipotent: 𝒫︀(𝑋) is strictly larger.
Proof. Let 𝑓 : 𝑋 ⟶ 𝒫︀(𝑋) be any function; we show 𝑓 is not surjective by exhibiting a subset that is
not a value of 𝑓. Consider the diagonal set
29

Version of 13 September 2026 Module page
𝐷 = {𝑥 ∈ 𝑋 : 𝑥 ∉ 𝑓(𝑥)} ∈ 𝒫︀(𝑋).
Suppose, for contradiction, that 𝐷 is a value of 𝑓, say 𝐷 = 𝑓(𝑎) for some 𝑎 ∈ 𝑋. Ask whether 𝑎 ∈ 𝐷.
By the definition of 𝐷,
𝑎 ∈ 𝐷 ⟺ 𝑎 ∉ 𝑓(𝑎) = 𝐷,
so 𝑎 ∈ 𝐷 holds exactly when 𝑎 ∈ 𝐷 fails — a proposition equivalent to its own negation, which is
impossible. Hence 𝐷 is a value of no 𝑓(𝑎): the function 𝑓 is not surjective. As 𝑓 was arbitrary, no
surjection 𝑋 ⟶ 𝒫︀(𝑋) exists, and in particular no bijection. □
Applied to 𝑋 = ℕ, Cantor’s theorem says 𝒫︀(ℕ) is not countable. Since the real numbers can be shown
equipotent to 𝒫︀(ℕ), the set ℝ is uncountable: its elements cannot be listed as 𝑥 ,𝑥 ,𝑥 ,…. There is,
0 1 2
then, strictly more than one size of infinity — the countable infinity of ℕ,ℤ,ℚ, and the larger infinity
of ℝ.


## 7.4. The Cantor–Bernstein theorem


Building an explicit bijection between two sets can be delicate. The following theorem replaces one
hard bijection with two easier injections.
Theorem 9 (Cantor–Bernstein). Let 𝐴 and 𝐵 be sets. If there exist an injection 𝐴 ⟶ 𝐵 and
an injection 𝐵 ⟶ 𝐴, then 𝐴 and 𝐵 are equipotent.
Its proof partitions 𝐴 and 𝐵 by tracing each element back and forth along the two injections and
reassembling the pieces into a bijection; we admit it here and put it to use. The point is practical: to
prove 𝐴 ∼ 𝐵 it suffices to embed each set into the other.
Example — An interval as large as the whole line. The open interval (0,1) is equipotent to ℝ.
The inclusion (0,1) ⟶ ℝ, 𝑥 ⟼ 𝑥, is an injection one way. For the other,
1 1
𝑔 : ℝ ⟶ (0,1), 𝑥 ⟼ + arctan(𝑥),
2 𝜋
is injective (it is even strictly increasing). By Cantor–Bernstein, (0,1) ∼ ℝ: a bounded interval holds
“as many” points as the entire real line.
30
