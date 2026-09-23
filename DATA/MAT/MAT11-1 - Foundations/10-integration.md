# 10. Integration

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 42-45*

Version of 13 September 2026 Module page
10. Integration


## 10.1. Signed area and antiderivatives


Differentiation measures rate; integration measures accumulation — total distance from a speed,
total area under a curve. The definite integral
∫𝑏
𝑓(𝑥)d𝑥 is the signed area between the graph of 𝑓
𝑎
and the horizontal axis from 𝑎 to 𝑏: area above the axis counts positive, area below counts negative.
The climax of elementary calculus is that this accumulation is undone by differentiation.
+
𝑎 𝑏
−
Figure 5: The definite integral as signed area. Where the graph is above the axis (blue-shaded) the
area counts positively; where it dips below (red-shaded) it counts negatively.
∫𝑏
𝑓 is the positive area
𝑎
minus the negative area.
Remark. The variable under the integral sign is a dummy, exactly like the index of a sum: it
is bound by the integral and invisible from outside. Thus
𝑏 𝑏 𝑏
∫ 𝑓(𝑡)d𝑡 = ∫ 𝑓(𝑥)d𝑥 = ∫ 𝑓(𝑢)d𝑢,
𝑎 𝑎 𝑎
all one and the same number. The letter is a private name for the running point, free to be
renamed.
Definition 38 (Antiderivative and indefinite integral). An antiderivative of 𝑓 on an
interval is a function 𝐹 with 𝐹′ = 𝑓. Any two antiderivatives of 𝑓 differ by a constant, so we write
the indefinite integral
∫𝑓(𝑥)d𝑥 = 𝐹(𝑥)+𝐶,
the whole family of antiderivatives, with 𝐶 an arbitrary constant.


## 10.2. Recognising usual forms


Reading the differentiation library backwards gives a short list of antiderivatives to recognise on
sight; the full tables close the book.
42

Version of 13 September 2026 Module page
Framework 1 (A short table of antiderivatives). Up to an added constant 𝐶:
𝑥𝑛+1 1
∫𝑥𝑛d𝑥 = (𝑛 ≠ −1), ∫ d𝑥 = ln|𝑥|,
𝑛+1 𝑥
∫𝑒𝑥d𝑥 = 𝑒𝑥, ∫cos𝑥d𝑥 = sin𝑥, ∫sin𝑥d𝑥 = −cos𝑥.
Example — Recognising a form.
∫(3𝑥2−4𝑥+5)d𝑥 = 𝑥3−2𝑥2+5𝑥+𝐶,
term by term via the power rule. Differentiating the answer returns the integrand — the surest
check.


## 10.3. The Fundamental Theorem of Calculus


Theorem 18 (Fundamental Theorem of Calculus). Let 𝑓 be continuous on [𝑎,𝑏].
1. The accumulation function 𝐺(𝑥) = ∫𝑥 𝑓(𝑡)d𝑡 is an antiderivative of 𝑓: 𝐺′(𝑥) = 𝑓(𝑥).
𝑎
2. (Evaluation) If 𝐹 is any antiderivative of 𝑓, then
𝑏
∫ 𝑓(𝑥)d𝑥 = 𝐹(𝑏)−𝐹(𝑎) ≕ [𝐹(𝑥)] 𝑏.
𝑎
𝑎
Part 1 says differentiation and integration are inverse processes; Part 2 turns the signed area — a
limit of thin rectangles — into simple arithmetic: find an antiderivative and subtract its values at the
endpoints.
Example — Area under a parabola. For ∫1 𝑥2d𝑥, an antiderivative of 𝑥2 is 𝑥3/3, so the area is
0
[𝑥3/3] 1 = 1/3−0 = 1/3. No rectangles required — the theorem did the work.
0
Pitfall. Part 2 requires 𝑓 to be continuous on the whole segment [𝑎,𝑏]. Applying it across a
point where 𝑓 is unbounded — as in ∫1 (1/𝑥2)d𝑥, where 1/𝑥2 → +∞ as 𝑥 → 0 — produces a
−1
meaningless answer: the hypothesis fails, so the conclusion does not hold. Check continuity on
the entire segment before evaluating.


## 10.4. Linearity, Chasles, and the bounds


Three structural properties let us cut and reassemble integrals.
Proposition 13 (Linearity, Chasles' relation, exchange of bounds). For 𝑓,𝑔 continuous
and constants 𝜆,𝜇:
• Linearity:
43

Version of 13 September 2026 Module page
𝑏 𝑏 𝑏
∫ (𝜆𝑓+𝜇𝑔) = 𝜆∫ 𝑓+𝜇∫ 𝑔.
𝑎 𝑎 𝑎
• Chasles’ relation: for any 𝑐,
𝑏 𝑐 𝑐
∫ 𝑓+∫ 𝑓 = ∫ 𝑓.
𝑎 𝑏 𝑎
• Exchange of bounds:
𝑎 𝑏 𝑎
and in
∫ 𝑓 = −∫ 𝑓, ∫ 𝑓 = 0.
particular
𝑏 𝑎 𝑎
The exchange rule keeps Chasles’ relation consistent for every arrangement of 𝑎,𝑏,𝑐 on the line,
whether or not 𝑏 lies between 𝑎 and 𝑐.
Example — Splitting at a corner with Chasles. Compute
∫2|𝑥−1|d𝑥.
The integrand changes
0
formula at 𝑥 = 1: it is 1−𝑥 on [0,1] and 𝑥−1 on [1,2]. Chasles’ relation splits the integral there:
2 1 2 𝑥2 1 𝑥2 2 1 1
∫ |𝑥−1|d𝑥 = ∫ (1−𝑥)d𝑥+∫ (𝑥−1)d𝑥 = [𝑥− ] +[ −𝑥] = + = 1.
2 2 2 2
0 0 1 0 1
Example — Reversing the bounds. Reversing the limits negates the integral: since
∫2
𝑥d𝑥 =
0
[𝑥2/2] 2 = 2, the exchange rule gives ∫0 𝑥d𝑥 = −2, and ∫2 𝑥d𝑥 = 0.
0 2 2


## 10.5. Integration by parts


Reversing the product rule gives one of the two central techniques.
Theorem 19 (Integration by parts — milestone proof). Let 𝐼 be an interval, 𝑢,𝑣 : 𝐼 ⟶ ℝ
of class 𝐶1, and 𝑎,𝑏 ∈ 𝐼. Then
𝑏 𝑏
∫ 𝑢′(𝑡)𝑣(𝑡)d𝑡 = [𝑢(𝑡)𝑣(𝑡)] 𝑏 −∫ 𝑢(𝑡)𝑣′(𝑡)d𝑡.
𝑎
𝑎 𝑎
Proof. By the product rule, (𝑢𝑣) ′ = 𝑢′𝑣+𝑢𝑣′ on 𝐼. Since 𝑢,𝑣 are of class 𝐶1, both 𝑢′𝑣 and 𝑢𝑣′ are
continuous, so 𝑢𝑣 is an antiderivative of the continuous function 𝑢′𝑣+𝑢𝑣′. By the Fundamental
Theorem (Part 2),
𝑏
∫ (𝑢′(𝑡)𝑣(𝑡)+𝑢(𝑡)𝑣′(𝑡))d𝑡 = [𝑢(𝑡)𝑣(𝑡)] 𝑏.
𝑎
𝑎
Splitting the left side by linearity and moving ∫𝑏 𝑢𝑣′ to the right gives the stated identity. □
𝑎
The art is choosing which factor plays 𝑣 (to be differentiated) and which plays 𝑢′ (to be integrated):
pick 𝑣 so that 𝑣′ is simpler.
44

Version of 13 September 2026 Module page
Example — Integrating 𝑥𝑒𝑥. Take 𝑣 = 𝑥 (so 𝑣′ = 1, simpler) and 𝑢′ = 𝑒𝑥 (so 𝑢 = 𝑒𝑥). Then
∫𝑥𝑒𝑥d𝑥 = 𝑥𝑒𝑥−∫1⋅𝑒𝑥d𝑥 = 𝑥𝑒𝑥−𝑒𝑥+𝐶 = (𝑥−1)𝑒𝑥+𝐶.
A standard trick uses the hidden factor 1: for ∫ln𝑥d𝑥, take 𝑣 = ln𝑥, 𝑢′ = 1, giving 𝑥ln𝑥−∫𝑥⋅
(1/𝑥)d𝑥 = 𝑥ln𝑥−𝑥+𝐶.


## 10.6. Substitution


Reversing the chain rule gives substitution (the change of variable).
Theorem 20 (Integration by substitution). If 𝑢 = 𝜑(𝑥) with 𝜑 of class 𝐶1, then d𝑢 = 𝜑′(𝑥)d𝑥
and
∫𝑓(𝜑(𝑥))𝜑′(𝑥)d𝑥 = ∫𝑓(𝑢)d𝑢.
For a definite integral, change the bounds too: 𝑥 from 𝑎 to 𝑏 becomes 𝑢 from 𝜑(𝑎) to 𝜑(𝑏).
Example — Spotting the inner function. For ∫2𝑥cos(𝑥2)d𝑥, put 𝑢 = 𝑥2, so d𝑢 = 2𝑥d𝑥, which
is exactly present. The integral becomes ∫cos𝑢d𝑢 = sin𝑢+𝐶 = sin(𝑥2)+𝐶. Substitution works
because the integrand already contains the derivative of the inner function.
Example — Changing the bounds. For ∫2 2𝑥𝑒𝑥2d𝑥, put 𝑢 = 𝑥2, so d𝑢 = 2𝑥d𝑥 and the bounds
1
move with the variable: 𝑥 = 1 gives 𝑢 = 1, and 𝑥 = 2 gives 𝑢 = 4. Hence
2 4
∫ 2𝑥𝑒𝑥2d𝑥 = ∫ 𝑒𝑢d𝑢 = [𝑒𝑢] 4 = 𝑒4−𝑒.
1
1 1
Pitfall. In a definite integral, either convert the bounds to the new variable (cleanest) or
return to 𝑥 before substituting the original bounds — but never feed the old 𝑥-bounds into a 𝑢-
expression. Mixing the two is a frequent and costly error.
45
