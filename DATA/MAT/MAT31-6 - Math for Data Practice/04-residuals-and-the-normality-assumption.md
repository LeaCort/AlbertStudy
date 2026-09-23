# 4. Residuals and the normality assumption

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 19-22*

Version of 13 September 2026 Module page
4. Residuals and the normality assumption
𝑅2 says how much the line explains; it does not say whether the line is trustworthy. Trust rests on
assumptions about the errors, and the residuals 𝑒 are our only window onto them. This chapter
𝑖
states the assumptions, then reads the diagnostic plots that check them.


## 4.1. The inferential model


So far the line has been pure description. To test it — the business of the next chapter — we must say
what the scatter around the line is like. The standard assumption promotes the fitted line to a model
with a genuine random error.
Definition 11 (Simple linear regression model). The simple linear regression model
states that the observations are generated as
𝑦 = 𝑎𝑥 +𝑏+𝜀 , with 𝜀 ,…,𝜀 independent and each𝜀 ∼ 𝒩︀(0,𝜎2).
𝑖 𝑖 𝑖 1 𝑛 𝑖
Here 𝑎 and 𝑏 are the unknown true slope and intercept, and 𝜀 is the error of market 𝑖. The
𝑖
errors are centred (𝔼(𝜀 ) = 0, so the line is right on average), have a common variance 𝜎2, are
𝑖
independent, and are normally distributed.
Two objects must not be confused. The error 𝜀 belongs to the model: it is the true, unobservable
𝑖
deviation of market 𝑖 from the true line 𝑎𝑥+𝑏. The residual 𝑒 = 𝑦 −𝑦̂ of Chapter 2 belongs to the
𝑖 𝑖 𝑖
data: it is the observable gap from the fitted line 𝑎𝑥̂ +𝑏.̂ We never see the errors; the residuals are our
best proxy for them, and every diagnostic in this chapter reads the errors’ behaviour off the residuals.
The same distinction applies to the slope. The true slope 𝑎 is a fixed, unknown number in the model;
the estimate 𝑎̂= 𝑆 /𝑆 is a number computed from the sample. A different thirty markets would
𝑥𝑦 𝑥𝑥
give a different 𝑎,̂ but the same 𝑎. Keeping the two apart is what makes the next chapter’s test
meaningful.
Why assume the errors are normal? Each error is the combined effect of many small, unrelated influ-
ences the line leaves out — local weather, a competitor’s promotion, a data-entry slip — and, by the
Central Limit Theorem you met earlier, the sum of many small independent effects is approximately
normal. Normality is not sacred, but it is the assumption under which the slope’s 𝑡-test of the next
chapter is exactly valid; when it fails badly, that test becomes an approximation at best.


## 4.2. Reading the residuals


Checking the assumptions is a visual skill. Three plots answer three questions, and all three are read
on the residuals of our thirty-market fit.
Are the errors normal? A histogram of the residuals should look roughly like a symmetric mound
centred at zero. Figure 4 shows the thirty residuals: centred near zero, with no long tail on either side,
but distinctly lumpy — two separate peaks straddling zero rather than one clean central mound. That
lumpiness is the point to absorb here. Thirty points make a histogram coarse: a sample drawn from
a genuinely normal error is routinely uneven, even mildly two-humped, from sampling variation
alone. A histogram this small can therefore neither confirm normality nor rule it out — only a gross
19

Version of 13 September 2026 Module page
departure, such as a long one-sided tail, would show through the noise. For a sharper read we turn
to the QQ-plot.
count
0
residual (k€)
Figure 4: Histogram of the thirty residuals. It is roughly symmetric and centred at zero (dashed),
with no heavy tail, but lumpy — its two peaks straddling zero are the kind of unevenness sampling
variation alone produces at thirty points. A histogram this small can neither confirm nor rule out
normality; only a gross departure, such as a long one-sided tail, would show through the noise.
Are the errors normal — the sharper test? A quantile–quantile plot, or QQ-plot, reads more from
the same thirty numbers than a histogram can. It sorts the residuals, divides them by their standard
deviation so that they share the scale of a standard normal, and plots these standardised residuals
against the values a standard normal sample of the same size would give. If the residuals are normal,
the points fall along the line 𝑦 = 𝑥, the 45-degree line, because each standardised residual then
matches its normal quantile. Figure 5 shows ours close to that line, with only the mild wandering
in the tails that thirty points always show. A QQ-plot is a picture to read by eye, not a computation
to run.
ordered standardised residual
2
1
0
−1
−2
−2 −1 0 1 2
theoretical normal quantile
Figure 5: Normal QQ-plot of the residuals. A point on the grey 45-degree line means the residual
matches its normal quantile. These track the line closely, bending only slightly in the tails, so the
normal assumption is reasonable here.
Is the variance constant? Plot the residuals against the fitted values. Under the model the band of
residuals should have constant width — the same scatter everywhere, with no pattern. The two words
for this are worth fixing.
Definition 12 (Homoscedasticity and heteroscedasticity). The errors are homoscedastic
when they share one common variance 𝜎2, so the scatter of the points about the line is the same
20

Version of 13 September 2026 Module page
at every value of 𝑥. They are heteroscedastic when that variance changes with 𝑥, so the scatter
widens or narrows across the range.
On a plot of residuals against fitted values, homoscedasticity shows as a band of even width and
heteroscedasticity as a widening or narrowing one.
Figure 6 puts our fit’s residuals (left) beside a second, constructed market (right) whose errors grow
with spend — the characteristic widening, or funnel, of heteroscedasticity.
the thirty markets — even band a funnel — growing variance
5 5
0 0
−5 −5
10 20 30 40 10 20 30 40
fitted 𝑦̂ fitted 𝑦̂
Figure 6: Residuals against fitted values. Left: the thirty markets’ own residuals, an even band with no
clear widening — the equal-variance assumption is reasonable. Right: a constructed market whose
scatter fans out as the fitted value grows, an unmistakable funnel. Under a funnel the fitted line stays
right on average, but it is no longer the most precise line, and an error bar built on a single common
𝜎2 understates the uncertainty where the data are noisy.
Reading the width of the band by eye is the intended skill, but we can put one number on it. We
recompute the residuals of our fit and — since the markets are listed in order of increasing spend,
and so of increasing fitted value — compare the residual standard deviation in the first ten markets,
the lowest-fitted third, with the last ten, the highest.
import numpy as np
# Residuals of the thirty-market fit, and how their spread changes across the
# fitted range. The markets are listed in increasing order of spend, and the
# slope is positive, so the fitted values increase down the list: the first ten
# markets are the lowest-fitted third and the last ten the highest. Compare the
# residual standard deviation in each -- a roughly constant spread is what one
# common variance looks like on the residual plot.
a, b = np.polyfit(x, y, 1)
y_hat = a * x + b
e = y - y_hat
print("residual sd, low-fitted third :", round(np.std(e[:10], ddof=1), 2), "k€")
print("residual sd, high-fitted third:", round(np.std(e[-10:], ddof=1), 2), "k€")
residual sd, low-fitted third : 2.91 k€
residual sd, high-fitted third: 4.3 k€
21

Version of 13 September 2026 Module page
The residual standard deviation across the fitted range rises only mildly, from about 2.91k€ in the
lowest-fitted third to about 4.3k€ in the highest. For groups of ten that difference is well within what
sampling alone produces, so we read the left panel as an even band and judge the equal-variance
assumption reasonable here.
Remark. The usual remedies: for a funnel, transform the response (a logarithm often steadies
a widening spread) or give the noisy points less weight; for a curved residual pattern — residuals
positive at both ends and negative in the middle — the straight line is the wrong shape, and the
fix is to enrich the model, for instance by adding a squared term so that it bends while staying
linear in its coefficients.
22
