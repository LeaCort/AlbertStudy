# 4. Cost of equity via CAPM

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 13-15*

Version of 13 September 2026 Module page
4. Cost of equity via CAPM
The discount rate that NPV and IRR both needed is the cost of capital — and to build it we must
first price each source of finance separately. We begin with equity. Shareholders are paid last and
bear the firm’s risk, so they require a return for it. But which risk?
Example — the risk that gets paid for. A shareholder who holds only Lumio bears all of Lumio’s
ups and downs. But a shareholder holding a diversified portfolio of hundreds of stocks barely
feels a Lumio-specific shock — a factory fire, a product recall — because other holdings offset
it. That firm­specific (diversifiable) risk can be diversified away for free, so the market does not
reward bearing it. What cannot be diversified away is the risk Lumio shares with the whole market
— recessions, rate shocks. Only this systematic risk is priced. This is the insight the CAPM
formalises.
Definition 4 (CAPM — the cost of equity). The Capital Asset Pricing Model gives the
required return on a firm’s equity as
𝑟 = 𝑟 +𝛽(𝑟 −𝑟 ),
𝑒 𝑓 𝑚 𝑓
where
• 𝑟 is the risk­free rate;
𝑓
• 𝛽 (beta) is the stock’s sensitivity to market movements — its systematic risk;
• 𝑟 −𝑟 is the equity risk premium (ERP): the extra return investors demand for holding the
𝑚 𝑓
market portfolio over the risk-free asset.
The product 𝛽(𝑟 −𝑟 ) is the stock’s own risk premium.
𝑚 𝑓
Beta is the bridge to your statistics toolkit: it is the covariance of the stock’s return with the market’s,
divided by the variance of the market’s return, 𝛽 = Cov(𝑟 ,𝑟 )/Var(𝑟 ) — a standardised measure
𝑖 𝑚 𝑚
of how strongly the stock moves with the market. 𝛽 = 1 means it moves one-for-one with the
market; 𝛽 > 1 amplifies market moves (cyclical firms); 𝛽 < 1 dampens them (defensive firms such
as utilities).
Example — Lumio's cost of equity. Take 𝑟 = 3% (a long government bond yield), 𝛽 = 1.2
𝑓
(lighting is mildly cyclical), and an equity risk premium of 𝑟 −𝑟 = 6%. Then
𝑚 𝑓
𝑟 = 3%+1.2×6% = 3%+7.2% = 10.2%.
𝑒
Lumio’s shareholders require about 10.2% a year. Notice this sits just below its 10.5% ROIC: equity
alone — the most expensive source — nearly demands everything Lumio’s operations earn. Only
once we blend in cheaper after-tax debt (Chapter 6) does a clear value-creation spread open up —
a first hint that Lumio’s value creation is real but modest.
13

Version of 13 September 2026 Module page
required return
Security Market Line
market: 𝑟
𝑚
Lumio: 𝑟 =10.2%
𝑒
𝑟
𝑓
1.0 1.2 beta 𝛽
Figure 4: The Security Market Line. Required return rises linearly with systematic risk 𝛽: it starts at
the risk-free rate (𝛽 = 0), passes through the market return at 𝛽 = 1, and places Lumio slightly above
the market because its 𝛽 = 1.2.
Each input demands judgment — CAPM is a disciplined framework, not a number that falls out of
a database:
• Risk­free rate. Proxied by a government bond yield, with maturity matched to the horizon of the
cash flows being discounted (a long bond for long-lived projects).
• Beta. Estimated by regressing the stock’s returns on market returns, or sourced from a data
provider. It shifts with the estimation window, the return frequency (daily vs monthly), and the
index chosen, and is often adjusted toward 1 because betas tend to revert. For an unlisted firm
or division, take a comparable firm’s beta and re-lever it to the target structure.
• Equity risk premium. Estimated either from long-run historical average excess returns or
implied from current market prices; the two can differ by several points, so the choice must be
argued, not assumed.
The re-levering the beta bullet calls for, for an unlisted firm or division, has a standard form. A
comparable’s beta reflects both its business risk and the financial risk its own leverage adds, so it
must be stripped of that leverage and re-dressed in the target’s before use.
Method 2 (Re­levering a comparable's beta). With tax rate 𝜏:
1. Unlever the comparable’s equity beta 𝛽 to its asset beta, removing the comparable’s leverage
𝑒
𝐷/𝐸:
𝛽
𝛽 = 𝑒 .
𝑢 𝐷
1+(1−𝜏)
𝐸
2. Re­lever the asset beta to the target’s own leverage (𝐷/𝐸) target:
𝐷 target
𝛽target = 𝛽 (1+(1−𝜏)( ) ).
𝑒 𝑢 𝐸
Example — beta for an unlisted division. An unlisted lighting division has no traded shares. A
listed pure-play comparable has an equity beta of 1.4 at 𝐷/𝐸 = 0.8, and the tax rate is 25%. Unlever
it to the business’s asset beta,
1.4 1.4
𝛽 = = = 0.875,
𝑢 1+0.75×0.8 1.6
then re-lever to the division’s target 𝐷/𝐸 = 0.5:
14

Version of 13 September 2026 Module page
𝛽 = 0.875×(1+0.75×0.5) ≈ 1.20.
𝑒
This 1.20 — carrying the comparable’s business risk but the division’s own financial risk — is the
beta to feed into CAPM.
Pitfall. CAPM prices systematic risk only. Do not inflate 𝑟 for risks that diversification
𝑒
removes — a single-product firm’s product risk, say — those belong in the cash­flow forecast
(lower or probability-weighted flows), not in the discount rate. And never use a single firm-
wide 𝑟 to discount a project of very different risk: a stable utility evaluating a speculative tech
𝑒
venture must use the venture’s higher beta, or it will accept value-destroying projects that a single
blended rate would wrongly approve.
Exercises
4.1. Estimate a firm’s cost of equity with a risk-free rate of 3.5%, a beta of 0.9 and an equity risk
premium of 5.5%.
4.2. Recompute the cost of equity if beta is instead 1.3, holding the other inputs. How many
percentage points does the estimate move?
4.3. A single-product firm faces a real risk that its one product fails. Should this be handled by
raising beta (and so 𝑟 ), or somewhere else? Justify in one or two sentences.
𝑒
Answers. (1) 𝑟 =3.5%+0.9×5.5%=8.45%.
𝑒
(2) 𝑟 =3.5%+1.3×5.5%=10.65% — up 2.2 points. Beta and the ERP are both judgment calls; here beta drove the
𝑒
change, and its estimate (window, frequency, index, adjustment toward 1) is what to defend.
(3) Not in beta. CAPM prices only systematic risk; a diversifiable product-specific risk belongs in the cash­flow
forecast (lower or probability-weighted flows), not the discount rate.
15
