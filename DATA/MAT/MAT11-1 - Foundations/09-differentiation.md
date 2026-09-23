# 9. Differentiation

*Source: MAT11-1 - Foundations - Textbook.pdf, pages 35-41*

Version of 13 September 2026 Module page
9. Differentiation


## 9.1. Working near a point


Differentiation and continuity both describe a function’s behaviour close to a point, so we fix that
phrase first.
Definition 29 (Near a point). A property holds near a point 𝑎 (equivalently, for 𝑥 near
𝑎) when it holds for every 𝑥 in some open interval (𝑎−𝛿,𝑎+𝛿) around 𝑎, for some 𝛿 > 0. A
function is defined near 𝑎 when such an interval lies in its domain.


## 9.2. Limits and continuity


Definition 30 (Limit of a function). Let 𝑓 be defined near 𝑎 (except possibly at 𝑎). We say
𝑓(𝑥) tends to ℓ ∈ ℝ as 𝑥 tends to 𝑎, written lim 𝑓(𝑥) = ℓ, when
𝑥→𝑎
∀𝜀 > 0, ∃𝛿 > 0, ∀𝑥, 0 < |𝑥−𝑎| < 𝛿 ⟹ |𝑓(𝑥)−ℓ| < 𝜀.
At the bounds of the domain the variants read the same way. Tending to +∞: replace “0 <
|𝑥−𝑎| < 𝛿” by “𝑥 > 𝐴” for a threshold 𝐴. Growing without bound: replace “|𝑓(𝑥)−ℓ| < 𝜀” by
“𝑓(𝑥) > 𝐵” for a threshold 𝐵. Thus lim 1/𝑥 = 0 and lim 1/𝑥 = +∞.
𝑥→+∞ 𝑥→0+
Definition 31 (Continuity at a point). Let 𝑓 be defined near 𝑎, with 𝑎 in its domain. Then 𝑓
is continuous at 𝑎 when
lim𝑓(𝑥) = 𝑓(𝑎).
𝑥→𝑎
It is continuous on an interval 𝐼 when it is continuous at every point of 𝐼. Intuitively, the graph
makes no jump at 𝑎: near inputs give near outputs.
Continuity has an equivalent phrasing through sequences, which is often the easiest to use — and
which links this chapter to Chapter 8.
Theorem 14 (Sequential characterisation of continuity). Let 𝑓 be defined near 𝑎. Then 𝑓
is continuous at 𝑎 if and only if, for every sequence (𝑥 ) of points of the domain with 𝑥 → 𝑎,
𝑛 𝑛
one has 𝑓(𝑥 ) → 𝑓(𝑎).
𝑛
Proof. Assume 𝑓 continuous at 𝑎 and take 𝑥 → 𝑎. Let 𝜀 > 0. Continuity gives a 𝛿 > 0 with |𝑓(𝑥)−
𝑛
𝑓(𝑎)| < 𝜀 whenever |𝑥−𝑎| < 𝛿; and 𝑥 → 𝑎 gives a rank 𝑁 beyond which |𝑥 −𝑎| < 𝛿. For 𝑛 ≥ 𝑁
𝑛 𝑛
we get |𝑓(𝑥 )−𝑓(𝑎)| < 𝜀, so 𝑓(𝑥 ) → 𝑓(𝑎).
𝑛 𝑛
Conversely, we prove the contrapositive: if 𝑓 is not continuous at 𝑎, some 𝜀 > 0 resists every 𝛿, so
for each 𝑛 the choice 𝛿 = 1/(𝑛+1) yields a point 𝑥 with |𝑥 −𝑎| < 1/(𝑛+1) yet |𝑓(𝑥 )−𝑓(𝑎)| ≥
𝑛 𝑛 𝑛
35

Version of 13 September 2026 Module page
𝜀. Then 𝑥 → 𝑎 while 𝑓(𝑥 ) does not tend to 𝑓(𝑎), breaking the sequential condition. Contraposition
𝑛 𝑛
discharges the proof. □
Because limits pass through sums, products, and quotients (Chapter 8), continuity does too.
Proposition 10 (Operations preserving continuity). If 𝑓 and 𝑔 are continuous at 𝑎, then so
are 𝑓+𝑔, 𝜆𝑓 (for 𝜆 ∈ ℝ), and 𝑓𝑔; and 𝑓/𝑔 is continuous at 𝑎 when 𝑔(𝑎) ≠ 0. If 𝑓 is continuous
at 𝑎 and 𝑔 is continuous at 𝑓(𝑎), then 𝑔∘𝑓 is continuous at 𝑎. Consequently every polynomial is
continuous on ℝ, and every rational function is continuous wherever its denominator does not
vanish.


## 9.3. The derivative


How fast is 𝑓 changing at 𝑥 = 𝑎? Average the change over a small step ℎ and shrink the step. The
𝑓(𝑎+ℎ)−𝑓(𝑎)
average rate is the slope of the secant line through two nearby points on the graph; as
ℎ
ℎ → 0 the secant pivots into the tangent, and its slope is the derivative.
Definition 32 (Difference quotient and derivative). For 𝑓 defined near 𝑎, the difference
quotient at 𝑎 is
𝑓(𝑎+ℎ)−𝑓(𝑎)
, ℎ ≠ 0.
ℎ
If it tends to a finite limit as ℎ → 0, then 𝑓 is differentiable at 𝑎 and that limit is the derivative
𝑓(𝑎+ℎ)−𝑓(𝑎)
𝑓′(𝑎) = lim ,
ℎ→0 ℎ
the slope of the tangent line to the graph at (𝑎,𝑓(𝑎)).
The tangent line is 𝑦 = 𝑓(𝑎)+𝑓′(𝑎)(𝑥−𝑎): the line through (𝑎,𝑓(𝑎)) with slope 𝑓′(𝑎). What is it
for? Rearranged, it says
𝑓(𝑎+ℎ) ≈ 𝑓(𝑎)+𝑓′(𝑎)ℎ for smallℎ,
so the tangent is the linear approximation of 𝑓 near 𝑎 — the straight line that best matches the
curve there, and the basis of every “small change” estimate. Later in this chapter we shall see a second
use: when 𝑓 is convex, its graph never dips below any tangent, which turns the tangent into a supply
of inequalities.
36

Version of 13 September 2026 Module page
𝑎+ℎ
secant
𝑎
tangent
Figure 3: As ℎ → 0 the secant (red) through (𝑎,𝑓(𝑎)) and (𝑎+ℎ,𝑓(𝑎+ℎ)) rotates toward the tangent
(green). The derivative 𝑓′(𝑎) is the tangent’s slope.


## 9.4. Differentiability and continuity


Theorem 15 (Differentiable implies continuous). If 𝑓 is differentiable at 𝑎, then 𝑓 is
continuous at 𝑎. The converse fails.
Proof. As ℎ → 0,
𝑓(𝑎+ℎ)−𝑓(𝑎)
𝑓(𝑎+ℎ)−𝑓(𝑎) = ⋅ℎ → 𝑓′(𝑎)⋅0 = 0,
ℎ
so 𝑓(𝑎+ℎ) → 𝑓(𝑎), which is continuity at 𝑎. □
Continuity is strictly weaker: a continuous graph may still fail to have a tangent, in three recognisable
ways.
Pitfall. Continuity does not imply differentiability. Three standard failures at a point where 𝑓
is nonetheless continuous:
• an angular point (corner): the map 𝑥 ⟼ |𝑥| fails at 0, where the difference quotient equals
−1 for ℎ < 0 and +1 for ℎ > 0, so it has no single limit;
• a vertical tangent: the map 𝑥 ⟼ √3 𝑥 fails at 0, where the quotient ℎ1/3/ℎ = ℎ−2/3 → +∞,
so no finite slope exists;
• an oscillating quotient: the map 𝑥 ⟼ 𝑥sin(1/𝑥), extended by the value 0 at 0, fails at 0,
where the quotient is sin(1/ℎ), which oscillates in [−1,1] without settling.
37

Version of 13 September 2026 Module page


## 9.5. The differentiation rules


The derivatives of the basic functions are known from high school; the rules below combine them,
so that any function assembled from the basics can be differentiated mechanically.
Proposition 11 (Rules of differentiation). For differentiable 𝑓,𝑔 and a constant 𝑐:
(𝑓+𝑔) ′ = 𝑓′+𝑔′, (𝑐𝑓) ′ = 𝑐𝑓′,
(𝑓𝑔) ′ = 𝑓′𝑔+𝑓𝑔′ (product rule),
𝑓 ′ 𝑓′𝑔−𝑓𝑔′
( ) = (quotient rule, 𝑔 ≠ 0),
𝑔 𝑔2
(𝑔∘𝑓) ′ = (𝑔′∘𝑓)⋅𝑓′ (chain rule).
The basic library: (𝑥𝑛) ′ = 𝑛𝑥𝑛−1, (𝑒𝑥) ′ = 𝑒𝑥, (ln𝑥) ′ = 1/𝑥, (sin𝑥) ′ = cos𝑥, (cos𝑥) ′ = −sin𝑥.
Pitfall. The product rule is not 𝑓′𝑔′, and the quotient rule’s numerator order matters — it is
𝑓′𝑔−𝑓𝑔′, not 𝑓𝑔′−𝑓′𝑔. A sign error here spreads through an entire problem. The chain rule’s
commonest slip is forgetting the inner factor 𝑓′: the derivative of sin(2𝑥) is 2cos(2𝑥), not cos(2𝑥).
𝑥
Example — Differentiating a quotient. Differentiate 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼ . Take numerator
𝑥2+1
𝑢 = 𝑥 (so 𝑢′ = 1) and denominator 𝑣 = 𝑥2+1 (so 𝑣′ = 2𝑥); the quotient rule gives
𝑢′𝑣−𝑢𝑣′ 1⋅(𝑥2+1)−𝑥⋅2𝑥 1−𝑥2
𝑓′(𝑥) = = = .
𝑣2 (𝑥2+1) 2 (𝑥2+1) 2
Since (𝑥2+1) 2 > 0, the sign of 𝑓′ is the sign of 1−𝑥2: positive on (−1,1), negative outside it.
Example — The chain rule on a composition. To differentiate 𝑥 ⟼ (𝑥2+1) 5 : outer 𝑔(𝑢) =
𝑢5, inner 𝑓(𝑥) = 𝑥2+1, giving 5(𝑥2+1) 4 ⋅2𝑥 = 10𝑥(𝑥2+1) 4 . For 𝑥 ⟼ 𝑒3𝑥, the inner is 3𝑥 with
derivative 3, so the derivative is 3𝑒3𝑥.
When a derivative is itself continuous, the function earns a name we shall need for integration.
Definition 33 (Class 𝐶1). A function 𝑓 : 𝐼 ⟶ ℝ is of class 𝐶1 on the interval 𝐼 when 𝑓 is
differentiable on 𝐼 and its derivative 𝑓′ is continuous on 𝐼. One also says 𝑓 is continuously
differentiable.


## 9.6. Monotonicity from the sign of the derivative


The derivative reveals where a function rises and falls.
Theorem 16 (Sign of the derivative and monotonicity). Let 𝑓 be differentiable on an
interval 𝐼.
• If 𝑓′ ≥ 0 throughout 𝐼, then 𝑓 is increasing on 𝐼; if 𝑓′ > 0 throughout, 𝑓 is strictly increasing.
38

Version of 13 September 2026 Module page
• If 𝑓′ ≤ 0 throughout 𝐼, then 𝑓 is decreasing; if 𝑓′ < 0 throughout, strictly decreasing.
• If 𝑓′ = 0 throughout, then 𝑓 is constant.
Geometrically this is immediate: a positive slope everywhere means the graph only climbs. The
rigorous derivation uses the Mean Value Theorem, a result of the next analysis course; here we state
the link and put it to work. Combined with the bijection theorem of Chapter 6, “𝑓′ > 0 on an interval”
certifies that 𝑓 is a bijection onto its image — this is how exp : ℝ ⟶ (0,+∞), with derivative 𝑒𝑥 >
0 everywhere, is seen to be a bijection with inverse the natural logarithm.
All of a function’s rise-and-fall behaviour fits on one grid called a variation table. Its top row marks
the ends of the interval and the points where 𝑓′ vanishes, in increasing order; its middle row gives
the sign of 𝑓′ on each subinterval; its bottom row turns each sign into an arrow — ↗︎ where 𝑓′ > 0
so 𝑓 rises, ↘︎ where 𝑓′ < 0 so 𝑓 falls — and writes the value of 𝑓 at each marked point.
𝑥 −∞ −1 1 +∞
𝑓′(𝑥) + 0 − 0 +
𝑓 −∞ ↗︎ 2 ↘︎ −2 ↗︎ +∞
Table 3: The variation table of 𝑥 ⟼ 𝑥3−3𝑥. Top row: the marked points. Middle row: the sign of
𝑓′(𝑥) = 3(𝑥−1)(𝑥+1) on each subinterval. Bottom row: the resulting motion of 𝑓, with its value at
each mark.
Example — Reading a variation table. The table above is built for 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼ 𝑥3−3𝑥,
whose derivative 𝑓′(𝑥) = 3𝑥2−3 = 3(𝑥−1)(𝑥+1) is positive on (−∞,−1), negative on (−1,1),
and positive on (1,+∞), vanishing at 𝑥 = ±1. Reading the bottom row: 𝑓 climbs to 𝑓(−1) = 2, falls
to 𝑓(1) = −2, then climbs again — a crest at 𝑥 = −1 and a trough at 𝑥 = 1.
9.7. Local extrema and Fermat’s condition
Definition 34 (Local extremum). A function 𝑓 has a local maximum at 𝑐 if 𝑓(𝑥) ≤ 𝑓(𝑐) for
all 𝑥 near 𝑐, and a local minimum if 𝑓(𝑥) ≥ 𝑓(𝑐) for all 𝑥 near 𝑐. A local extremum is either.
At a crest or trough in the interior of the domain, the tangent is horizontal. This is Fermat’s condition
— a necessary condition that locates the candidates for an extremum.
Theorem 17 (Fermat’s condition — milestone proof). Let 𝐼 be an interval of ℝ, 𝑓 : 𝐼 ⟶
ℝ, and 𝑎 ∈ 𝐼 interior to 𝐼 (not an endpoint). If 𝑓 is differentiable at 𝑎 and has a local extremum
at 𝑎, then 𝑓′(𝑎) = 0.
Proof. Suppose 𝑓 has a local maximum at 𝑎 (the minimum case is identical with inequalities
reversed). Then 𝑓(𝑎+ℎ)−𝑓(𝑎) ≤ 0 for all ℎ small enough, and since 𝑎 is interior, both signs of ℎ
are allowed.
• For small ℎ > 0:
39

Version of 13 September 2026 Module page
𝑓(𝑎+ℎ)−𝑓(𝑎)
≤ 0,
ℎ
so letting ℎ → 0+ gives 𝑓′(𝑎) ≤ 0.
• For small ℎ < 0: dividing the same numerator ≤ 0 by the negative ℎ reverses the inequality,
𝑓(𝑎+ℎ)−𝑓(𝑎)
≥ 0,
ℎ
so letting ℎ → 0− gives 𝑓′(𝑎) ≥ 0.
Since 𝑓 is differentiable at 𝑎, both one-sided limits equal the single number 𝑓′(𝑎). From 𝑓′(𝑎) ≤ 0
and 𝑓′(𝑎) ≥ 0 we conclude 𝑓′(𝑎) = 0. □
Pitfall. Fermat’s condition is necessary, not sufficient: 𝑓′(𝑐) = 0 does not force an extremum.
For 𝑥 ⟼ 𝑥3, the derivative at 0 is zero, yet 0 is neither a maximum nor a minimum — the curve
merely flattens and continues rising. And the condition concerns interior points: an extremum
can also sit at an endpoint of the domain, where 𝑓′ need not vanish. To find extrema, examine
the points where 𝑓′ = 0 and the endpoints.
Example — Locating and confirming extrema. Find the local extrema of 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼
𝑥3−3𝑥. By Fermat, they can only occur where 𝑓′(𝑥) = 3(𝑥−1)(𝑥+1) = 0, i.e. at 𝑥 = −1 and 𝑥 =
1. The sign of 𝑓′ (read from Table 3) changes from + to − at 𝑥 = −1: a local maximum, value
𝑓(−1) = 2. It changes from − to + at 𝑥 = 1: a local minimum, value 𝑓(1) = −2. The sign change
confirms each candidate is a genuine extremum.


## 9.8. The second derivative: convexity and concavity


Differentiating 𝑓′ in turn measures how the slope itself changes.
Definition 35 (Second derivative). If 𝑓′ is itself differentiable on 𝐼, its derivative (𝑓′) ′ is the
second derivative of 𝑓, written 𝑓″.
Convexity is about the shape of the graph — whether it bends upward like a bowl — and is defined
through chords, not through any derivative.
Definition 36 (Convex and concave function). A function 𝑓 : 𝐼 ⟶ ℝ is convex on the
interval 𝐼 when, for all 𝑥,𝑦 ∈ 𝐼 and all 𝑡 ∈ [0,1],
𝑓(𝑡𝑥+(1−𝑡)𝑦) ≤ 𝑡𝑓(𝑥)+(1−𝑡)𝑓(𝑦) :
every chord of the graph lies on or above the graph. It is concave when the reverse inequality
holds, so that every chord lies on or below the graph.
For a twice-differentiable function the second derivative decides convexity, and the tangent gives a
matching family of inequalities.
40

Version of 13 September 2026 Module page
Proposition 12 (Convexity through the second derivative). Let 𝑓 be twice differentiable
on an interval 𝐼.
• 𝑓 is convex on 𝐼 if and only if 𝑓″ ≥ 0 throughout 𝐼; it is concave if and only if 𝑓″ ≤ 0 throughout
𝐼.
• If 𝑓 is convex on 𝐼, then for every 𝑎 ∈ 𝐼 its graph lies on or above the tangent at 𝑎:
𝑓(𝑥) ≥ 𝑓(𝑎)+𝑓′(𝑎)(𝑥−𝑎) for all𝑥 ∈ 𝐼.
We take these from the Mean Value Theorem of the next analysis course; the second statement is
the convexity inequality announced earlier — a convex graph never dips below a tangent, so each
tangent yields a lower bound for 𝑓.
chord
tangent
𝑎
Figure 4: A convex function. Every chord (red) lies above the graph; every tangent (green) lies below
it. The gap between graph and tangent is what the convexity inequality bounds.
Definition 37 (Inflection point). A point 𝑎 interior to 𝐼 is an inflection point of 𝑓 when the
convexity of 𝑓 changes there — from convex to concave, or the reverse. For a twice-differentiable
𝑓, this is where 𝑓″ changes sign.
Example — Convexity of a cubic. For 𝑓 : ℝ ⟶ ℝ, 𝑥 ⟼ 𝑥3−3𝑥, one has 𝑓″(𝑥) = 6𝑥. So 𝑓″ <
0 on (−∞,0) — concave — and 𝑓″ > 0 on (0,+∞) — convex — with an inflection point at 𝑥 = 0,
where the graph crosses from bending down to bending up.
41
