# 6. Weighted Average Cost of Capital

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 19-22*

Version of 13 September 2026 Module page
6. Weighted Average Cost of Capital
A firm financed by both equity and debt must earn enough to satisfy both claimant groups. The
WACC blends the two costs into the single hurdle rate that the invest decision has been waiting for.
Example — Lumio's blended hurdle rate. Lumio is financed by equity worth 𝐸 = €450 m
(market value) and debt worth 𝐷 = €260 m, so 𝑉 = 710 m. Equity costs 𝑟 = 10.2%, debt costs 𝑟 =
𝑒 𝑑
5% pre-tax (3.75% after the 25% tax). The firm’s cost of capital is the weighted average of the two,
by their share of total financing:
450 260
WACC = ×10.2%+ ×3.75% = 6.47%+1.37% ≈ 7.8%.
710 710
This is the roughly­8% hurdle rate the diagnosis stage had to assume. Lumio’s ROIC of
10.5% clears it — the firm creates value — but by a spread of under three points, which the rest of
the book will learn to defend, widen, or doubt.
Definition 7 (WACC). With market values of equity 𝐸 and debt 𝐷, total 𝑉 = 𝐸+𝐷, the
Weighted Average Cost of Capital is
𝐸 𝐷
WACC = 𝑟 + 𝑟 (1−𝜏),
𝑉 𝑒 𝑉 𝑑
where 𝑟 is the cost of equity, 𝑟 the pre-tax cost of debt, and 𝜏 the corporate tax rate. It is the
𝑒 𝑑
minimum return the firm’s assets must earn to satisfy all capital providers — and the discount
rate for a project of the same risk as the firm as a whole.
The weights are market­value (or target) weights, never book weights, because they represent the
cost of raising capital today: book equity is a historical accounting residual, while the cost of equity
is a forward-looking required return that applies to equity’s market value.
How does leverage move WACC? Replacing expensive equity with cheaper after-tax debt lowers
the average — at first. But leverage does not leave the two costs untouched: as debt grows, equity
becomes riskier and its required return 𝑟 rises. To see why — and by how much — start from what
𝑒
leverage does to the return equity actually earns.
Example — leverage amplifies equity returns — both ways. Take a firm with €100 m of
invested capital and an after-tax cost of debt of 4%, and read it in a good year (operating return
ROIC = 10%) and a bad one (ROIC = 2%), under two financings:
Financing ROE, good year ROE, bad year swing
All equity (𝐷/𝐸 = 0) 10% 2% 8 pts
Half debt (𝐷 = 𝐸, 𝐷/𝐸 = 1) 16% 0% 16 pts
With no debt, equity earns exactly what the assets earn. With 𝐷/𝐸 = 1, the good year is lifted to 16%
and the bad year sunk to 0%: the swing doubles. Leverage magnifies the upside and the downside
by the same factor, so levered equity is twice as volatile — and its holders demand a higher return
for it.
19

Version of 13 September 2026 Module page
Proposition 4 (Leverage and the return on equity). With after-tax operating return ROIC =
NOPAT/invested capital and after-tax cost of debt 𝑟 , the return on equity is
𝑑(1−𝜏)
𝐷
ROE = ROIC+(ROIC−𝑟 ) .
𝑑(1−𝜏) 𝐸
Leverage 𝐷/𝐸 multiplies the gap between what the assets earn and what the debt costs: when
ROIC beats the after-tax cost of debt, leverage lifts ROE above it; when ROIC falls short, leverage
drags ROE below — amplifying the downside by exactly the factor it amplifies the upside.
Because levered equity bears this amplified swing, the return its holders require must rise with
leverage too. Modigliani and Miller pinned down by how much.
Proposition 5 (MM Proposition II — the levered cost of equity). Let 𝑟 be the unlevered
𝑢
cost of equity — the return equity would demand if the firm carried no debt (the cost of its
assets). With pre-tax cost of debt 𝑟 and tax rate 𝜏, at leverage 𝐷/𝐸 the cost of equity is
𝑑
𝐷
𝑟 = 𝑟 +(𝑟 −𝑟 )(1−𝜏) .
𝑒 𝑢 𝑢 𝑑 𝐸
It climbs linearly with 𝐷/𝐸 — the required-return counterpart of the ROE amplification above.
So re-computing WACC at a new leverage means re-computing 𝑟 from this formula first, never
𝑒
assuming it.
Example — Lumio's WACC at a more leveraged target. What becomes of Lumio’s WACC if it
moves to a 50/50 target, 𝐷/𝐸 = 1? First recover its unlevered cost of equity from its current struc-
ture (𝐷/𝐸 = 260/450 ≈ 0.58, 𝑟 = 10.2%, 𝑟 = 5%, 𝜏 = 25%) by reading Proposition II backwards:
𝑒 𝑑
10.2% = 𝑟 +(𝑟 −5%)(0.75)(0.58) ⟹ 𝑟 ≈ 8.6%.
𝑢 𝑢 𝑢
Now re-lever to 𝐷/𝐸 = 1 (holding 𝑟 = 5%, still safe at this moderate leverage):
𝑑
𝑟 = 8.6%+(8.6%−5%)(0.75)(1) ≈ 11.3%.
𝑒
Equity now costs 11.3%, up from 10.2% — the price of the added risk, derived, not guessed. Yet
WACC falls:
WACC = 0.5×11.3%+0.5×5%×0.75 ≈ 7.5%,
below the 7.8% at today’s structure. Cheaper after-tax debt still outweighs the dearer equity —
Lumio sits on the downward arm of the WACC curve, consistent with its being mildly under-
leveraged (Chapter 7).
Notice what did not happen: the rise in 𝑟 did not lift WACC. As long as the cost of debt itself holds
𝑒
steady, it never can. Substitute Proposition II into the WACC definition and the rising cost of equity
and equity’s shrinking weight cancel exactly, leaving
𝐷
WACC = 𝑟 (1−𝜏 ),
𝑢 𝑉
20

Version of 13 September 2026 Module page
𝐷
which slides straight down as leverage rises, reaching its lowest at all-debt financing. The extra
𝑉
return levered equity demands is offset euro-for-euro by equity funding a smaller share of the firm,
so on its own it can never turn WACC up. (Check: with Lumio’s 𝑟 ≈ 8.6% and 𝜏 = 25% this gives
𝑢
7.8% at today’s 𝐷/𝑉 ≈ 0.37 and 7.5% at 𝐷/𝐸 = 1 — the two figures we just found the long way.)
What does turn WACC back up is the one thing that formula holds fixed: the cost of debt. Push
leverage far enough and mounting distress risk widens the credit spread, so 𝑟 climbs — and a
𝑑
higher 𝑟 feeds back through Proposition II to push 𝑟 up further still. Once debt stops being cheap,
𝑑 𝑒
both costs rise together and overwhelm the shrinking-weight effect. The result is a U­shaped WACC
curve — but its upward arm is the work of a rising cost of debt, not of levering equity.
rate
𝑟
𝑒
𝑟
𝑑(1−𝜏)
WACC
optimal leverage 𝐷/𝑉
Figure 6: WACC against leverage. While the cost of debt holds steady, replacing equity with cheaper
after-tax debt pulls the average down — the rising cost of equity is exactly offset by equity’s shrinking
weight. Only once mounting distress risk widens the cost of debt (which then drags equity’s up
further) does WACC turn back up, giving the curve its U-shape and an interior optimum — the same
optimum the trade-off identifies in Chapter 7.
Pitfall. Three WACC errors that quietly corrupt every downstream valuation:
• Book weights. Using book equity instead of market equity — especially for a firm whose
market value far exceeds book — badly misweights the average.
• Wrong­risk discounting. WACC is the right rate only for projects of firm­average risk.
Discounting a safe cost-saving project and a risky new-market launch at the same WACC over-
rewards the risky one and starves the safe one.
• Double­counting the shield. The tax benefit of debt is already in WACC via 𝑟 . Do not
𝑑(1−𝜏)
also add interest tax shields back into the project’s cash flows — pick one method (WACC or
adjusted present value), never both.
Exercises
6.1. A firm has €600 m of equity and €400 m of debt (market values), a cost of equity of 12%, a
pre-tax cost of debt of 6% and a 25% tax rate. Compute its WACC.
6.2. The same firm re-levers to €400 m equity and €600 m debt, its pre-tax cost of debt unchanged
at 6%. Using MM Proposition II, first back out its unlevered cost of equity 𝑟 , then derive the
𝑢
new cost of equity, then recompute WACC. Did WACC rise or fall, and would it keep falling if
leverage rose without limit?
6.3. A firm’s book equity is €200 m but its market equity is €800 m. Which figure belongs in the
WACC weights, and why?
Answers. (1) WACC=0.6×12%+0.4×6%×0.75=7.2%+1.8%=9.0%.
(2) Backing out 𝑟 at the original 𝐷/𝐸=400/600=0.667: 12%=𝑟 +(𝑟 −6%)(0.75)(0.667), so 𝑟 =10%. At the
𝑢 𝑢 𝑢 𝑢
21

Version of 13 September 2026 Module page
new 𝐷/𝐸=600/400=1.5, 𝑟 =10%+(10%−6%)(0.75)(1.5)=14.5%, and WACC=0.4×14.5%+0.6×6%×0.75=
𝑒
5.8%+2.7%=8.5%. It fell (9.0% → 8.5%). And with 𝑟 held fixed it would keep falling: WACC=𝑟 is strictly
𝑑 𝑢(1−𝜏𝐷)
𝑉
decreasing in leverage, bottoming at all-debt financing. What halts the fall in reality is a rising 𝑟 — past some
𝑑
leverage, distress risk widens the credit spread, lifting 𝑟 (and, through Proposition II, 𝑟) enough to turn WACC up:
𝑑 𝑒
the U-shape.
(3) Market equity (€800 m): WACC is the cost of raising capital today, and the cost of equity is a forward-looking
return on equity’s market value, not its historical book residual.
22
