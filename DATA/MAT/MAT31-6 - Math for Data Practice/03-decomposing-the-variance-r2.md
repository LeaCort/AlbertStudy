# 3. Decomposing the variance: R2

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 15-18*

Version of 13 September 2026 Module page
3. Decomposing the variance: 𝑅2
A line has been fitted. How good is it? The natural yardstick asks how much of the variation in sales
the line accounts for. Answering it splits the total variation of 𝑦 into a part the line explains and a
part it leaves behind — a split that yields the single most-quoted number in applied statistics, 𝑅2.


## 3.1. Three sums of squares


Measure variation, as always, by summed squared deviations. There are three to track: the spread
of the observed 𝑦 about their mean, the spread of the fitted values about that same mean, and the
spread of the residuals.
Definition 9 (Total, explained and residual sums of squares). For the least-squares line,
with fitted values 𝑦̂ = 𝑎𝑥̂ +𝑏 ̂and residuals 𝑒 = 𝑦 −𝑦̂, the three sums of squares are
𝑖 𝑖 𝑖 𝑖 𝑖
𝑛 𝑛 𝑛
TSS = ∑(𝑦 −𝑦) 2 , ESS = ∑(𝑦̂ −𝑦) 2 , RSS = ∑(𝑦 −𝑦̂) 2.
𝑖 𝑖 𝑖 𝑖
𝑖=1 𝑖=1 𝑖=1
Here TSS is the total sum of squares, all the variation to be explained; ESS is the explained sum
of squares, the variation the fitted values reproduce; and RSS is the residual sum of squares, the
variation left in the residuals. The total sum of squares is the 𝑆 of Chapter 1: TSS = 𝑆 .
𝑦𝑦 𝑦𝑦
Pitfall. These three-letter names are not used consistently across textbooks: some write “SSE”
for the residual (error) sum of squares — the opposite of the meaning of ESS here. In this book
ESS is explained and RSS is residual. Read any other source’s own definitions before trusting its
letters. What never changes is the plain-language split: total equals explained plus left over.
3.2. The decomposition and 𝑅2
The three sums are not independent: the explained and residual parts add back exactly to the total.
Theorem 2 (Variance decomposition). For the least-squares line,
TSS = ESS+RSS.
Proof. We work in two steps.
Step 1 — split each deviation and square. Write each centred observation as its explained part plus
its residual,
𝑦 −𝑦 = (𝑦̂ −𝑦)+(𝑦 −𝑦̂) = (𝑦̂ −𝑦)+𝑒 ,
𝑖 𝑖 𝑖 𝑖 𝑖 𝑖
then square and sum over 𝑖:
15

Version of 13 September 2026 Module page
𝑛 𝑛 𝑛 𝑛
TSS = ∑(𝑦̂ −𝑦) 2 +∑𝑒2+2∑(𝑦̂ −𝑦)𝑒 = ESS+RSS+2∑(𝑦̂ −𝑦)𝑒 .
𝑖 𝑖 𝑖 𝑖 𝑖 𝑖
𝑖=1 𝑖=1 𝑖=1 𝑖=1
Step 2 — kill the cross term. Since 𝑦̂ = 𝑎𝑥̂ +𝑏 ̂ and 𝑦 = 𝑎𝑥̂ +𝑏,̂ subtracting gives 𝑦̂ −𝑦 = 𝑎(̂ 𝑥 −
𝑖 𝑖 𝑖 𝑖
𝑥). Hence
𝑛 𝑛 𝑛 𝑛
∑(𝑦̂ −𝑦)𝑒 = 𝑎̂∑(𝑥 −𝑥)𝑒 = 𝑎(̂ ∑𝑥 𝑒 −𝑥∑𝑒 ) = 0,
𝑖 𝑖 𝑖 𝑖 𝑖 𝑖 𝑖
𝑖=1 𝑖=1 𝑖=1 𝑖=1
because both residual identities of Chapter 2 make the two inner sums zero. The cross term vanishes,
leaving TSS = ESS+RSS. □
The decomposition turns the quality of the fit into a single ratio.
Definition 10 (Coefficient of determination 𝑅2). For the least-squares line, the coefficient
of determination is the share of the total variation that the line explains,
ESS RSS
𝑅2 = = 1− .
TSS TSS
Proposition 4 (𝑅2 lies in [0,1], and 𝑅2 = 𝑟2). For the least-squares line, 0 ≤ 𝑅2 ≤ 1, and
moreover 𝑅2 = 𝑟2: the share of variation explained is exactly the square of the correlation.
Proof. We work in three steps.
Step 1 — divide the decomposition by the total. Since TSS > 0, dividing TSS = ESS+RSS by TSS gives
ESS RSS
1 = + .
TSS TSS
Both ESS and RSS are sums of squares, so both are ≥ 0; each ratio therefore lies in [0,1], and in
particular 𝑅2 = ESS/TSS ∈ [0,1].
Step 2 — an explicit formula for the explained sum of squares. Using 𝑦̂ −𝑦 = 𝑎(̂ 𝑥 −𝑥) again,
𝑖 𝑖
𝑛 𝑆2
ESS = ∑𝑎2̂ (𝑥 −𝑥) 2 = 𝑎2̂ 𝑆 = (𝑆 /𝑆 ) 2 𝑆 = 𝑥𝑦 .
𝑖 𝑥𝑥 𝑥𝑦 𝑥𝑥 𝑥𝑥 𝑆
𝑖=1 𝑥𝑥
Step 3 — conclude. With TSS = 𝑆 ,
𝑦𝑦
ESS 𝑆2 2
𝑅2 = = 𝑥𝑦 = (𝑆 / 𝑆 𝑆 ) = 𝑟2.
TSS 𝑆 𝑆 𝑥𝑦 √ 𝑥𝑥 𝑦𝑦
𝑥𝑥 𝑦𝑦
□
The identity 𝑅2 = 𝑟2 is worth pausing on. An 𝑟 of 0.93 is an 𝑅2 of about 0.87: the line accounts for
roughly 87% of the variation in sales.
Example — reading 𝑅2 off a small fit. For the five-market line of Chapter 2, 𝑦 = 4 and the fitted
values are (1.2,2.6,4,5.4,6.8). Then ESS = ∑ (𝑦̂ −4) 2 = 7.84+1.96+0+1.96+7.84 = 19.6 and
𝑖 𝑖
16

Version of 13 September 2026 Module page
RSS = ∑ 𝑒2 = 0.04+0.16+0+0.16+0.04 = 0.4, so TSS = 20 and 𝑅2 = 19.6/20 = 0.98. The line
𝑖 𝑖
explains 98% of the variation — and indeed 𝑟 = 0.99, so 𝑟2 = 0.98.
On the thirty markets the three sums, and their ratio, come out as follows.
import numpy as np
# Split the total variation of y into the part the line reproduces and the part
# left in the residuals: TSS = ESS + RSS, and R-squared is the explained share.
a, b = np.polyfit(x, y, 1)
y_hat = a * x + b
TSS = np.sum((y - np.mean(y)) ** 2) # total : spread of y about its mean
ESS = np.sum((y_hat - np.mean(y)) ** 2) # explained: spread of the fitted values
RSS = np.sum((y - y_hat) ** 2) # residual : spread left in the residuals
print("TSS (total) :", round(TSS, 1))
print("ESS (explained):", round(ESS, 1))
print("RSS (residual) :", round(RSS, 1))
print("ESS + RSS :", round(ESS + RSS, 1))
print("R2 = ESS / TSS :", round(ESS / TSS, 4))
print("r squared :", round(np.corrcoef(x, y)[0, 1] ** 2, 4))
TSS (total) : 2933.3
ESS (explained): 2559.7
RSS (residual) : 373.6
ESS + RSS : 2933.3
R2 = ESS / TSS : 0.8726
r squared : 0.8726
The printout confirms all three facts at once: ESS+RSS = TSS to the decimal, 𝑅2 = 0.8726, and
𝑟2 = 0.8726. Laid out as a table, the same three sums form the variance-decomposition table that
regression software prints, with 𝑅2 read straight off the “share of total” column.
Source of variation Sum of squares Share of total
Explained by the line (ESS) 2559.7 0.873
Residual, left over (RSS) 373.6 0.127
Total (TSS) 2933.3 1.000
Table 1: The variance-decomposition table for the thirty markets. The total variation splits into the
part the line explains and the part left in the residuals; 𝑅2 = ESS/TSS = 0.8726 is the explained row’s
share of the total — the number quoted as “the model explains 87% of the variation”.
Figure 3 shows where the decomposition comes from, one observation at a time.
17

Version of 13 September 2026 Module page
(𝑥,𝑦)
𝑖 𝑖
𝑦̂
resid. 𝑒
𝑖
total 𝑦 −𝑦
𝑖
expl. 𝑦̂ −𝑦
𝑖
𝑦
Figure 3: The decomposition, one point at a time. The gap from a point to the mean line 𝑦 (total)
splits into the gap from the fit to the mean (explained) plus the gap from the point to the fit (residual).
Squared and summed over all points — with the cross terms cancelling by the residual identities —
this is TSS = ESS+RSS, and 𝑅2 is the explained share.
Pitfall. 𝑅2 measures linear fit only, and it says nothing about whether the model is appropriate.
The four famous Anscombe datasets share 𝑅2 = 0.67 while looking utterly different — one a
clean line, one a parabola, one ruined by a single outlier. A high 𝑅2 earns a look at the residuals,
not the end of the analysis. That look is the next chapter.
18
