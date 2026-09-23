# 6. Functions

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 25-28*

Version of 13 September 2026 Module page
6. Functions


## 6.1. A machine, then a definition


Think of a function as a machine: drop in an input, exactly one output comes out. The squaring
machine sends 3 ⟼ 9 and −3 ⟼ 9; it never sends 3 to two different numbers. That “exactly one
output” is the whole idea.
Definition 17 (Function, domain, codomain, graph). A function is given by three data: a
domain 𝐴, a codomain 𝐵, and a rule assigning to each 𝑥 ∈ 𝐴 exactly one element 𝑓(𝑥) ∈ 𝐵. We
display it as
𝑓 : 𝐴 ⟶ 𝐵
𝑥 ⟼ 𝑓(𝑥)
The range (the image of the whole domain) is {𝑓(𝑥) : 𝑥 ∈ 𝐴} ⊂ 𝐵, the outputs actually attained.
The graph of 𝑓 is the subset of 𝐴×𝐵
Γ = {(𝑥,𝑓(𝑥)) : 𝑥 ∈ 𝐴};
𝑓
for 𝑓 : ℝ ⟶ ℝ this is the familiar curve in the plane.
Pitfall. Range and codomain are different. The function 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼ 𝑥2, has
codomain ℝ but range [0,+∞) — negative numbers are never outputs. Many “is this surjective?”
questions really ask whether the range fills the codomain.


## 6.2. Composition


To put on socks and then shoes is to perform one operation and feed its result to the next. Composing
two functions chains them in exactly this way: the output of the first becomes the input of the second.
Definition 18 (Composition). Given 𝑓 : 𝐴 ⟶ 𝐵 and 𝑔 : 𝐵 ⟶ 𝐶, the composite 𝑔∘𝑓 :
𝐴 ⟶ 𝐶 is defined by
(𝑔∘𝑓)(𝑥) = 𝑔(𝑓(𝑥))
— do 𝑓 first, then 𝑔. The order matters: 𝑔∘𝑓 and 𝑓∘𝑔 usually differ.
Example — Order matters. With 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼ 𝑥+1, and 𝑔 : ℝ ⟶ ℝ, 𝑥 ⟼ 𝑥2: (𝑔∘
𝑓)(𝑥) = (𝑥+1) 2 but (𝑓∘𝑔)(𝑥) = 𝑥2+1. Squaring-after-shifting is not shifting-after-squaring.
One composition never changes anything: composing with the function that returns its input
untouched.
25

Version of 13 September 2026 Module page
Definition 19 (Identity function). The identity function on a set 𝐴 is
id : 𝐴 ⟶ 𝐴
𝐴
𝑥 ⟼ 𝑥
It leaves every element where it is. Composing with it has no effect: 𝑓∘id = 𝑓 and id ∘𝑓 = 𝑓
𝐴 𝐵
for every 𝑓 : 𝐴 ⟶ 𝐵.


## 6.3. Image and preimage of a set


Definition 20 (Image and preimage). For 𝑓 : 𝐴 ⟶ 𝐵, a subset 𝑆 ⊂ 𝐴, and a subset 𝑇 ⊂ 𝐵:
• the image 𝑓(𝑆) = {𝑓(𝑥) : 𝑥 ∈ 𝑆} — where 𝑆 lands;
• the preimage 𝑓−1(𝑇) = {𝑥 ∈ 𝐴 : 𝑓(𝑥) ∈ 𝑇} — everything that lands in 𝑇.
The preimage notation 𝑓−1 here needs no inverse function to exist; it is defined for any 𝑓.
Example — Image and preimage of squaring. For 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼ 𝑥2: the image 𝑓([1,2]) =
[1,4]. The preimage 𝑓−1([1,4]) = [−2,−1]∪[1,2] — note it is larger than [1,2], because negatives
also square into [1,4]. Preimage and image are not inverse operations in general.


## 6.4. Injective, surjective, bijective


These three words classify functions by how many inputs hit each output.
Definition 21 (Injective, surjective, bijective). A function 𝑓 : 𝐴 ⟶ 𝐵 is
• injective (one-to-one) if different inputs give different outputs: 𝑓(𝑥 ) = 𝑓(𝑥 ) ⟹ 𝑥 = 𝑥 ;
1 2 1 2
• surjective (onto) if every 𝑏 ∈ 𝐵 equals some 𝑓(𝑥) (the range is all of 𝐵);
• bijective if it is both — a perfect pairing of 𝐴 with 𝐵.
A B A B A B
injective, surjective,
bijective
not surjective not injective
Figure 1: The three notions as arrow diagrams. Injective: no two arrows share a head. Surjective:
every right-hand dot is hit. Bijective: a perfect matching, every dot on each side used exactly once.
Remark. Surjectivity depends on the codomain you declare. The map 𝑥 ⟼ 𝑥2 is not surjec-
tive as ℝ ⟶ ℝ, but is surjective as ℝ ⟶ [0,+∞). Shrinking the codomain to the range always
makes a function surjective; restricting the domain can make it injective.
26

Version of 13 September 2026 Module page


## 6.5. Inverse functions


Doubling a number and then halving the result returns the original number: halving undoes
doubling. When a function pairs its two sets perfectly, there is always a companion function that runs
it backwards this way — its inverse.
Definition 22 (Inverse function). If 𝑓 : 𝐴 ⟶ 𝐵 is bijective, its inverse 𝑓−1 : 𝐵 ⟶ 𝐴 is the
function that undoes it: 𝑓−1(𝑦) = 𝑥 exactly when 𝑓(𝑥) = 𝑦. It satisfies 𝑓−1(𝑓(𝑥)) = 𝑥 for all 𝑥 ∈
𝐴 and 𝑓(𝑓−1(𝑦)) = 𝑦 for all 𝑦 ∈ 𝐵.
Bijections also compose: if 𝑓 : 𝐴 ⟶ 𝐵 and 𝑔 : 𝐵 ⟶ 𝐶 are both bijective, then so is 𝑔∘𝑓, and its
inverse undoes the two steps in reverse order,
(𝑔∘𝑓) −1 = 𝑓−1∘𝑔−1.
The working criterion is worth stating on its own:
Theorem 6 (Characterisation of invertible functions). A function 𝑓 : 𝐴 ⟶ 𝐵 is bijective
if and only if there is a function 𝑔 : 𝐵 ⟶ 𝐴 with 𝑔∘𝑓 = id and 𝑓∘𝑔 = id . When it exists, 𝑔
𝐴 𝐵
is unique and equals 𝑓−1.
Graphically, for 𝑓 : ℝ ⟶ ℝ the curve 𝑦 = 𝑓−1(𝑥) is the reflection of 𝑦 = 𝑓(𝑥) across the line 𝑦 = 𝑥
— input and output swap roles. To compute an inverse in practice, write 𝑦 = 𝑓(𝑥), solve for 𝑥 in
terms of 𝑦, and read off 𝑓−1(𝑦).
2𝑥+1
Example — Computing an inverse by solving. Let 𝑓 : ℝ∖{3} ⟶ ℝ∖{2}, 𝑥 ⟼ . To invert
𝑥−3
2𝑥+1
it, fix a target value 𝑦 and solve 𝑦 = for 𝑥. Because 𝑥 ≠ 3, each step is an equivalence:
𝑥−3
2𝑥+1
𝑦 = ⟺ 𝑦(𝑥−3) = 2𝑥+1
𝑥−3
⟺ 𝑦𝑥−3𝑦 = 2𝑥+1
⟺ 𝑥(𝑦−2) = 3𝑦+1
3𝑦+1
⟺ 𝑥 = .
𝑦−2
The last step divides by 𝑦−2, valid exactly when 𝑦 ≠ 2; and 𝑦 = 2 is attained by no 𝑥, since it would
force 0 = 7. So the range of 𝑓 is ℝ∖{2} — which is why that set, not ℝ, is declared as the codomain:
only then does the range fill the codomain, as a bijection requires (recall the pitfall above). Every
𝑦 ≠ 2 has the unique preimage just found, so the inverse is
𝑓−1 : ℝ∖{2} ⟶ ℝ∖{3}
.
3𝑦+1
𝑦 ⟼
𝑦−2
Check one value: 𝑓(4) = 9/1 = 9, and indeed 𝑓−1(9) = 28/7 = 4.
27

Version of 13 September 2026 Module page


## 6.6. The bijection theorem


For functions of a real variable there is a ready-made way to guarantee bijectivity — and hence an
inverse — without solving any equation.
Theorem 7 (Bijection theorem). Let 𝐼 be an interval of ℝ and 𝑓 : 𝐼 ⟶ ℝ be continuous and
strictly monotonic (strictly increasing throughout, or strictly decreasing throughout). Then 𝑓
is a bijection from 𝐼 onto the interval 𝐽 = 𝑓(𝐼), and its inverse 𝑓−1 : 𝐽 ⟶ 𝐼 is continuous and
strictly monotonic in the same direction.
Two words carry the hypotheses. Continuous means the graph has no jumps — you can draw it
without lifting the pen; the notion is made precise in Section 9.2. Strictly monotonic means the
graph only rises, or only falls. Under these two conditions injectivity is immediate — a strictly
monotonic function never repeats a value — and continuity fills the range 𝐽 with no gaps, so 𝑓 maps
𝐼 onto 𝐽. The complete justification of “no gaps” rests on a property of the real line taken up in a
later analysis course; here we take the theorem as a working tool.
Pitfall. Both hypotheses are needed. Drop continuity and a monotonic function can skip
values (a step function is strictly increasing on each piece yet hits nothing in the gaps). Drop
strict monotonicity and injectivity fails: the map 𝑥 ⟼ 𝑥2 on ℝ takes the value 1 twice. Check
both before invoking the theorem.
28
