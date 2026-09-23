# 5. Cost of debt

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 16-18*

Version of 13 September 2026 Module page
5. Cost of debt
The second source of finance is debt — and it is cheaper than equity for two reasons: lenders are
paid before shareholders and bear less risk, and interest is tax­deductible. Both effects must be
quantified.
Example — what Lumio's debt really costs. Lumio’s bonds trade at a yield of 5%: that is the
return lenders require today, the pre­tax cost of debt — not the historical coupon printed on old
bonds, which is irrelevant to a decision made now. But 5% overstates the true cost. Because the €1
of interest Lumio pays is deductible, at a 25% tax rate it cuts the tax bill by €0.25. The net cost of
that interest is only €0.75 — an after­tax rate of 5%×(1−0.25) = 3.75%. Debt is cheap, and the
tax system makes it cheaper.
Definition 5 (Pre­tax cost of debt). The pre­tax cost of debt 𝑟 is the return a lender requires
𝑑
today to hold the firm’s debt — the rate at which the firm could borrow now, not the coupon on
bonds it issued in the past.
There are two routes to 𝑟 , and a well-run estimate cross-checks one against the other. The first reads
𝑑
it straight off traded bonds; the second builds it from the risk-free rate and a credit spread, for the
many firms whose debt is not publicly priced.
Route 1 — yield to maturity. When the firm has traded bonds, its 𝑟 is their yield to maturity
𝑑
(YTM): the single discount rate that sets a bond’s price equal to the present value of its promised
coupons and principal. The YTM is itself a time-value-of-money construction — it is the bond’s IRR
(Chapter 3).
Example — the YTM route: where Lumio's 5% comes from. Lumio has a bond outstanding:
face value €1,000, an annual coupon of €40 (a 4% coupon rate), and three years left to maturity. It
trades today at €973 — below par, because its 4% coupon undershoots the return the market now
demands. Its YTM is the single rate 𝑦 that discounts the coupons and principal back to that price:
40 40 1040
+ + = 973.
1+𝑦 (1+𝑦) 2 (1+𝑦) 3
This is exactly the bond’s IRR, so solve it by the interpolation of Chapter 3. At 𝑦 = 4% the right-
hand side is par, €1,000 (so €27 above the price); at 𝑦 = 6% it is €946.5 (€26.5 below). The root lies
between, and
27
𝑦 ≈ 4%+2%× ≈ 5.0%.
27+26.5
So the pre-tax cost of debt is about 5% — the figure the running example uses — and, after the 25%
tax, an after-tax cost of 5%×0.75 = 3.75%. A bond priced below par always yields more than its
coupon; one above par, less.
Route 2 — risk­free rate plus a credit spread. A firm without traded bonds still has a cost of
debt: 𝑟 = 𝑟 +spread, where the credit spread compensates lenders for default risk and widens as
𝑑 𝑓
16

Version of 13 September 2026 Module page
credit quality falls. You can anchor the spread with a ratio you already compute — interest coverage
(EBIT / interest) — through a synthetic-rating table.
Interest coverage Indicative rating Spread
≥ 8× AA or better ≈ 0.7%
6–8× A ≈ 1.1%
4–6× BBB ≈ 1.7%
2.5–4× BB ≈ 2.8%
1.5–2.5× B ≈ 4.5%
< 1.5× CCC or below ≈ 8% +
Table 2: A synthetic-rating table turns interest coverage into a credit spread. The figures are illus­
trative and drift with the credit cycle; the durable point is the shape — spreads widen sharply as
coverage thins.
Example — the spread route, cross­checked on Lumio. Suppose Lumio had no traded bond
to price. Its interest coverage is EBIT/interest = 80/20 = 4.0×, which Table 2 places at the foot
of the BBB band — a spread of roughly 1.5–2%. With a 3% risk-free rate,
𝑟 = 𝑟 +spread ≈ 3%+2% = 5%,
𝑑 𝑓
in the same neighbourhood as the 5% its traded bond actually yields — a reassuring cross-check
between the two routes.
Definition 6 (After­tax cost of debt and the tax shield). Because interest is tax-deductible,
the cost of debt relevant to the firm is the after­tax cost:
𝑟 (1−𝜏),
𝑑
where 𝜏 is the marginal corporate tax rate. The tax saved because interest is deductible is the
debt tax shield: on interest expense 𝐼, the saving is
𝜏×𝐼 per period.
5.0% 𝑟 𝑑 (1−𝜏) tax shield
=𝜏𝑟 =1.25%
shield 𝑑
3.75%
pre-tax 𝑟 𝑑 after-tax
Figure 5: The tax shield on Lumio’s debt. A 5% pre-tax cost becomes a 3.75% after-tax cost because
the deduction returns 𝜏𝑟 = 0.25×5% = 1.25% to the firm. The shield is the wedge between the two
𝑑
bars and the mechanism by which leverage can add value (Chapter 7).
17

Version of 13 September 2026 Module page
The tax shield matters twice over. As a cost, it makes debt cheaper than its stated rate — the after-
tax rate is what enters WACC next. As a source of value, it is the channel through which capital
structure can change firm value at all, the hinge of the Modigliani–Miller analysis in Chapter 7.
Pitfall. Use the current, forward­looking, after­tax cost of debt for decisions — the rate the
firm would pay to borrow today. Do not use the average coupon on legacy debt issued years ago
at different rates; it is a historical accident, not the cost of new capital. And the shield is only
worth 𝜏𝑟 if the firm is actually paying tax: a loss-making firm with no taxable profit gets no
𝑑
shield this year, so its after-tax cost of debt is simply its pre-tax cost.
Exercises
5.1. A firm’s bonds yield 6%. At a 30% tax rate, what is its after-tax cost of debt?
5.2. A firm has no traded bonds. The risk-free rate is 3% and its credit spread is 2.5%. Estimate
its pre-tax cost of debt, then its after-tax cost at a 25% tax rate.
5.3. A firm with no traded bonds covers its interest 3×; the risk-free rate is 3%. Use the synthetic-
rating table (Table 2) to estimate its pre-tax cost of debt, then its after-tax cost at a 25% tax rate.
5.4. A bond has face value €1,000, pays an annual coupon of €50, and has two years left to
maturity. It trades at €1,009. Estimate its yield to maturity — the pre-tax cost of debt — by
interpolating between 4% and 5%, then give the after-tax cost at a 25% tax rate.
5.5. A firm pays €12 m of interest a year at a 25% tax rate. What is the annual tax shield? What
happens to the shield in a year the firm makes a loss and pays no tax?
Answers. (1) 6%×(1−0.30)=4.2%.
(2) Pre-tax 𝑟 =3%+2.5%=5.5%; after-tax 5.5%×0.75=4.125%.
𝑑
(3) Coverage of 3× sits in the BB band, a spread of about 2.8%, so pre-tax 𝑟 ≈3%+2.8%=5.8% and after-tax 5.8%×
𝑑
0.75≈4.35% (the table is illustrative, so read this as a neighbourhood, not a point).
(4) Discounting 50,50+1000 gives €1,018.9 at 4% (€9.9 above the price) and €1,000.0 at 5% (€9.0 below), so YTM≈
4%+1%×9.9/(9.9+9.0)≈4.5%; after-tax 4.5%×0.75≈3.4%. Above par, the yield sits below the 5% coupon.
(5) Shield =0.25×€12=€3 m. In a loss year with no taxable profit there is no tax to save, so the shield is zero and
the after-tax cost of debt equals the pre-tax cost.
18
