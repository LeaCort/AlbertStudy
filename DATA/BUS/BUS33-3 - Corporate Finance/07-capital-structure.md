# 7. Capital structure

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 23-25*

Version of 13 September 2026 Module page
7. Capital structure
WACC’s U-shape already told us that the financing mix can matter. Capital structure theory explains
why, and starts — paradoxically — by proving that in an idealised world it does not matter at all.
That benchmark is what makes the real-world frictions legible.
Example — why the pie does not grow by slicing it. Imagine Lumio’s operations throw off
a fixed stream of cash. Financing it 100% with equity, the shareholders receive the whole stream.
Financing it half with debt, lenders take a fixed slice and shareholders take the volatile remainder
— but the two slices still sum to the same stream. In a world with no taxes and no bankruptcy,
an investor could even copy any leverage themselves by borrowing in their own account (“home-
made leverage”), so they will not pay a premium for the firm to do it. Value comes from the assets,
not the financing.
That example is the whole of Modigliani and Miller’s first proposition.
Proposition 6 (Modigliani–Miller Proposition I — irrelevance). In a frictionless market
— no taxes, no bankruptcy costs, no information asymmetry, no transaction costs — the total
value of a firm is independent of how it is financed. Slicing the same operating cash flows into
debt and equity claims does not change the size of the pie:
𝑉 = 𝑉 .
levered unlevered
Proposition I concerns the firm’s total value; its companion, Proposition II (Chapter 6), concerns the
cost of equity. Together they say leverage only reshuffles risk and return between claimholders —
raising the cost of equity in exact step with the risk it loads onto it — without, in this frictionless
world, changing the total. MM is a benchmark, not a description of reality: its job is to tell us that if
capital structure matters, it matters only through the frictions it assumes away.
Relaxing the assumptions one at a time reveals the forces that make structure matter:
• Taxes (push toward more debt). Interest deductibility creates the tax shield of Chapter 5. Each
euro of permanent debt adds roughly 𝜏× that debt in present-value shield, raising firm value as
leverage rises.
• Distress costs (push toward less debt). Higher leverage raises the probability of financial
distress and bankruptcy, which carry direct costs (legal and administrative fees) and, larger,
indirect costs (lost customers and key staff, fire-sale asset disposals, managers absorbed in crisis
management instead of investing).
• Agency costs (cut both ways). Debt can discipline managers by committing free cash flow to
interest, curbing wasteful expansion — managers growing the firm beyond its profitable size (a
benefit). But heavy debt also breeds conflicts between shareholders and creditors — risk-shifting,
under-investment — that destroy value (a cost).
Principle 1 (The trade­off theory). Firm value as a function of leverage is the unlevered
value plus the present value of the tax shield minus the present value of expected distress and
agency costs:
23

Version of 13 September 2026 Module page
𝑉 = 𝑉 +PV(tax shield)−PV(distress costs).
levered unlevered
The shield grows roughly linearly with debt; distress costs accelerate as debt rises. Their net
defines an interior optimal capital structure — the leverage that maximises value (equiva-
lently, minimises WACC).
firm value
𝑉𝑈+ shield
PV(distress)
𝑉
𝐿
𝑉𝑈
optimal 𝐷/𝑉 leverage 𝐷/𝑉
Figure 7: The trade-off theory. The tax shield (dotted) would raise value without limit, but expected
distress costs bend the actual value curve (solid) back down — so 𝑉 lies below the 𝑉 + shield
𝐿 𝑈
line everywhere, the vertical gap being the present value of expected distress costs. Value peaks at an
interior optimum: too little debt forgoes the shield, too much invites distress.
Definition 8 (Over­ and under­leverage). Relative to its optimal range, a firm is over­
leveraged when distress and agency costs dominate — thin interest coverage, constrained
investment, fragile to shocks — and under­leveraged when it leaves an unused tax shield on
the table and forgoes debt’s disciplining effect, often holding more idle cash than it needs.
Diagnosing which means locating the firm against its target using the leverage and coverage ratios
you already compute — debt-to-equity, net-debt-to-EBITDA, interest coverage — read alongside its
business risk.
Example — is Lumio over­ or under­leveraged?. Lumio’s interest coverage is 80/20 = 4.0×
and, with EBITDA of €120 m (EBIT €80 m plus €40 m depreciation and amortisation), its net-debt-
to-EBITDA is 220/120 ≈ 1.8× — comfortable for a stable manufacturer. It is, if anything, mildly
under­leveraged: a manufacturer with steady cash flows could likely carry more debt, capture
more tax shield, and lower its WACC below 7.8% without serious distress risk. A volatile tech firm
with the same ratios, however, might be at its limit — the safe debt level depends on business
risk, not the ratios alone.
Pitfall. The optimum is a range, not a knife-edge, and it is industry­ and risk­specific. A
stable utility safely carries leverage that would bankrupt a cyclical, asset-light software firm.
Never benchmark a company’s leverage against the whole market — only against peers of similar
business risk and asset tangibility (asset-heavy firms borrow more because their assets back the
debt). And remember the shield is worthless to a firm that pays no tax: do not prescribe debt to
a chronic loss-maker.
Exercises
24

Version of 13 September 2026 Module page
7.1. State two assumptions of the Modigliani–Miller irrelevance proposition, and for each name
the real-world friction that its removal introduces.
7.2. A stable manufacturer has interest coverage of 6× and net-debt-to-EBITDA of 1.2×, against
a sector norm of 2.5×. Is it more likely over- or under-leveraged, and what single piece of
information would most change your answer?
7.3. Explain why prescribing “more debt to capture the tax shield” can be wrong for a firm that
has been loss-making for several years.
Answers. (1) e.g. no taxes (removing it introduces the debt tax shield, favouring leverage) and no bankruptcy
costs (removing it introduces distress costs, discouraging leverage). Also acceptable: no agency costs, no information
asymmetry.
(2) Under­leveraged: strong coverage and leverage below the sector norm leave unused tax shield. Its business risk
(cash-flow volatility) would most change the answer — the same ratios are safe for a stable firm and dangerous for a
volatile one.
(3) The shield is worth 𝜏× interest only if there is taxable profit to shelter; a chronic loss-maker has none, so extra
debt adds distress risk without the offsetting shield.
25
