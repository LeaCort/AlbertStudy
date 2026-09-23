# 2. Net Present Value and the investment decision

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 8-9*

Version of 13 September 2026 Module page
2. Net Present Value and the investment
decision
We now make the first of the three decisions: invest. An investment project is a set of dated cash
flows — an outflow now (and perhaps later) in exchange for inflows in the future. The question is
whether the future inflows, valued today, exceed what they cost.
Example — should Lumio buy the new production line?. Lumio can install an automated
line for €100 m today, which will generate net cash inflows of €30 m, €35 m, €40 m and €25 m over
the next four years (then be scrapped at nil value). Is it worth it? You cannot simply add the inflows
(30+35+40+25 = €130 m > €100 m) and declare victory — those euros arrive at different dates
and are not comparable. Discount each to today at the firm’s 8% cost of capital, then compare with
the €100 m outlay.
Definition 2 (Net Present Value). The Net Present Value of a project with cash flows
𝐶 ,𝐶 ,…,𝐶 (with 𝐶 usually negative — the initial outlay) discounted at rate 𝑟 is
0 1 𝑛 0
𝑛
𝐶 𝐶 𝐶
NPV = ∑ 𝑡 = 𝐶 + 1 +…+ 𝑛 .
(1+𝑟) 𝑡 0 1+𝑟 (1+𝑟) 𝑛
𝑡=0
NPV measures the value a project creates today, after fully paying investors for the time value of
money and the risk of the cash flows through the discount rate. A positive NPV is value the project
adds to the firm over and above the cost of the capital it ties up.
Example — the production line, valued. At 𝑟 = 8%:
30 35 40 25
NPV = −100+ + + +
1.08 1.082 1.083 1.084
= −100+27.8+30.0+31.8+18.4 = +€8.0m.
Discounted, the inflows are worth €108 m against a €100 m cost: the line creates about €8 m of
value today. Accept it. Note how different this is from the naïve €30 m surplus the undiscounted
sum suggested — discounting ate most of it, and at a high enough rate would have turned the
project negative.
Proposition 2 (The NPV rule).
• For a single project: accept if NPV > 0, reject if NPV < 0.
• Among mutually exclusive projects (you can pick only one): choose the one with the
highest NPV, provided it is positive.
The rule is not arbitrary: a positive-NPV project returns more than the cost of the capital it uses, so
taking it raises the value of the firm by exactly the NPV. Maximising NPV is maximising shareholder
value — the objective the rest of the book serves.
8

Version of 13 September 2026 Module page
Σ discounted inflows = 108 > 100 outlay ⟹ NPV = +8
27.8 30 31.8
18.4
yr 0
yr 1 yr 2 yr 3 yr 4
−100
Figure 2: The production line as discounted cash flows (€m). The €100 m outlay at year 0 is set against
the present values of the four inflows — not their face values. Their sum, €108 m, exceeds the outlay
by the €8 m NPV.
The discount rate used is the cost of capital (Chapter 4, Chapter 5 and Chapter 6), reflecting the
risk of the project’s cash flows — for a project of average firm risk, the firm’s WACC. A riskier project
demands a higher rate, and the same cash flows then create less (or negative) value.
Pitfall. Build NPV on incremental, after­tax cash flows, and watch four traps:
• Sunk costs are irrelevant — money already spent (a feasibility study) does not change with
the decision and must be excluded.
• Opportunity costs are relevant — using land Lumio already owns has the cost of what that
land could otherwise earn.
• Cash, not accounting profit — add back depreciation, subtract capex and working-capital
investment, exactly as in the free-cash-flow build you already know.
• Financing flows belong in the discount rate, not the cash flows — do not subtract
interest from the project’s cash flows and discount at the WACC; that double-counts the cost
of debt.
Exercises
2.1. A project costs €200 m now and returns €80 m at the end of each of the next three years.
Compute its NPV at an 8% cost of capital and give the accept/reject verdict.
2.2. Re-run the same project at a 12% cost of capital. What happens to the verdict, and what does
the change tell you about the project’s sensitivity to the discount rate?
2.3. Lumio must choose one of two mutually exclusive projects at a 10% cost of capital. Project
A: outlay €100 m, single inflow €130 m in year 1. Project B: outlay €60 m, single inflow €80 m in
year 1. Which should it take, and why is the smaller outlay not automatically the better choice?
Answers. (1) NPV=−200+80×(1−1.08−3)/0.08≈+€6.17 m >0 → accept.
(2) NPV=−200+80×(1−1.12−3)/0.12≈−€7.85 m <0 → reject. The verdict flips between 8% and 12%, so the
project’s break-even rate lies between them: a thin cushion that a higher hurdle rate erases.
(3) A: −100+130/1.10≈+€18.18 m. B: −60+80/1.10≈+€12.73 m. Take A: it adds more value. NPV, not outlay
size, ranks mutually exclusive projects.
9
