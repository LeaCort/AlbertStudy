# 3. Human capital

*Source: BUS33-4 - Labour Economics & Inequalities - Textbook.pdf, pages 13-16*

Version of 13 September 2026 Module page
3. Human capital
Workers are not interchangeable units of “labour”; they carry skills, and skills are produced by costly
investment. Becker’s insight was to treat schooling and training with the same present-value logic a
firm uses for a machine.
3.1. Becker’s model and the rate of return to education
Example — is the degree worth it?. A student weighs a three-year degree. It costs €15 000 a
year in fees and forgone wages — €45 000 in total. In return she expects to earn €6 000 more per
year for a 40-year career. Is it worth it? Not by comparing €45 000 with 40×€6000 = €240000 —
euros arrive at different dates and must be discounted. The decision turns on the rate of return
that equates the two present values. Let us actually compute it.
Before the rate of return, one idea your earlier courses did not cover: discounting. A euro promised
a year from now is worth less than a euro in hand today — not because of inflation, but because a
euro today could be lent out at the going interest rate and become more than a euro in a year. Run
that logic backwards and a euro arriving later is worth today only the smaller sum that, invested now,
would grow into it.
Definition 5. The present value of an amount 𝑥 to be received 𝑡 years from now, at discount
rate 𝑟, is
𝑥
PV = .
(1+𝑟) 𝑡
Dividing by (1+𝑟) 𝑡 undoes 𝑡 years of compound growth at rate 𝑟: it is the sum you would need
today to reproduce 𝑥 at date 𝑡. The present value of a whole stream of future amounts is the sum
of the present values of its parts. A higher discount rate 𝑟, or a later date 𝑡, makes a future euro
worth less today.
Definition 6. Becker treats education as investment: incur costs 𝐶 now (direct costs plus
forgone earnings) for a stream of extra earnings Δ𝑤 later. Set the cost against the present value
𝑡
of that stream. The internal rate of return 𝑟∗ is the discount rate at which the two exactly
balance — the investment breaks even:
𝑁
Δ𝑤
𝐶 = ∑ 𝑡 .
(1+𝑟∗) 𝑡
𝑡=1
Education is worth undertaking when 𝑟∗ exceeds the worker’s cost of funds — the same rule a
firm uses to judge any investment project.
Method 1 (solving for the internal rate of return). When the extra earnings are a constant
Δ𝑤 for 𝑁 years, the sum is an annuity, and
13

Version of 13 September 2026 Module page
1−(1+𝑟) −𝑁
𝐶 = Δ𝑤⋅𝑎(𝑟∗,𝑁), where 𝑎(𝑟,𝑁) =
𝑟
is the annuity factor. So 𝑎(𝑟∗,𝑁) = 𝐶/Δ𝑤; find the 𝑟∗ that hits that factor, by trying values (the
factor falls as 𝑟 rises).
Example — is the degree worth it? — the number. With 𝐶 = €45000, Δ𝑤 = €6000 and 𝑁 =
40, the break-even annuity factor is 𝑎(𝑟∗,40) = 45000/6000 = 7.5. Try a few rates:
𝑎(10%,40) = 9.78, 𝑎(13%,40) = 7.63, 𝑎(14%,40) = 7.11.
The factor 7.5 sits just above 13%, so 𝑟∗ ≈ 13%. Because 13% comfortably exceeds any realistic
cost of funds (a student loan at, say, 5%), the degree is worth it — and the crude €240 000 figure
overstated the case by ignoring both discounting and the timing of the €45 000 outlay. Note how
the answer depends on the horizon: shorten the career to 𝑁 = 10 years and 𝑎(𝑟∗,10) = 7.5 requires
𝑟∗ ≈ 5.6% — barely above the cost of funds. The young invest in schooling precisely because they
have more years to amortise it.


## 3.2. Estimating the return on real data: the Mincer equation


Real-data returns are read off a regression — an object this chapter and several later ones lean on.
Your prerequisite courses did not cover it, and this course never asks you to run one; but you must
be able to read one, so here is the whole of what that takes.
Definition 7. A regression summarises how one variable moves with others by fitting the best
straight line through a cloud of data points. In ln𝑤 = 𝛽 +𝛽 𝑋 +𝜀, the characteristic 𝑋 (say
0 1
years of schooling) is the input; the slope 𝛽 is the average change in the outcome for a one-unit
1
rise in 𝑋 — the return to that characteristic; the intercept 𝛽 is the fitted outcome when 𝑋 = 0;
0
and the residual 𝜀 collects everything about an individual the line does not capture. To estimate
the equation is to choose 𝛽 and 𝛽 from data so that the residuals are collectively as small as
0 1
possible. The estimation mechanics belong to the Data courses; here every coefficient is given,
and all that is ever required of you is to read what a slope, an intercept, and a residual mean.
Definition 8. On real earnings data the return is estimated from the Mincer equation, a log-
linear regression of earnings on years of schooling 𝑠 and experience:
ln𝑤 = 𝛽 +𝜌𝑠+𝛽 exp+𝛽 exp2+𝜀.
0 1 2
Note the letters: schooling carries its own coefficient 𝜌 here, not the generic slope 𝛽 of the box
1
above; 𝜌 is the object of interest and reads as the average proportional earnings gain per extra
year of schooling. The experience terms 𝛽 exp+𝛽 exp2 (with 𝛽 < 0) trace the familiar concave
1 2 2
career profile — earnings rise with experience, then flatten; they are controls here, and their
coefficients 𝛽 ,𝛽 are not the return to schooling.
1 2
14

Version of 13 September 2026 Module page
Remark. What the data say. Estimated Mincer returns cluster around 𝜌 ≈ 0.07 to 0.10 —
roughly a 7–10% earnings gain per extra year of schooling — in the United States and much
of Europe (Card’s 1999 survey of dozens of studies), with somewhat lower returns in a few
high-schooling continental countries and higher returns in some developing economies where
schooling is scarce. Because the equation is in logs, coefficients add in log points and only
then convert to a percentage through 𝑒𝑥−1 — not one-for-one. A 𝜌 of 0.08 over a completed
three-year degree adds 3×0.08 = 0.24 log points, an earnings gain of 𝑒0.24−1 ≈ 27% (the linear
shortcut “3×8% = 24%” understates it — the gap grows with the premium) — in the same range
as the €6 000-on-a-mid-career-wage figure of the worked example.
Pitfall. Reading 𝜌 as the causal return to schooling is the most common mistake here. People
who get more schooling differ in unobserved ways (ability, family, motivation) that also raise
earnings — ability bias — so the raw correlation overstates the causal return. Untangling the
two is the original problem that drove labour economists toward instrumental variables (Chap-
ter 9): using something that shifts schooling but not earnings directly — compulsory-schooling
laws, distance to college, quarter of birth — to recover the causal effect.


## 3.3. Human capital versus signalling


The Mincer premium is a fact about earnings. It does not, by itself, tell you why the schooled are
paid more — and two theories give opposite answers, with opposite policy conclusions.
Example — does the degree build the skill, or reveal it?. Two graduates command the
earnings premium of the last section. In the first story the degree raised their productivity: they
learned things employers value, and the premium is the market price of that added skill. In the
second, the degree taught them nothing usable on the job — it merely revealed that they were
already able, because only able people could get through it. The wage data look identical under
both stories. The welfare conclusions could not differ more.
Definition 9. The human-capital view (Becker) holds that schooling raises productivity, so
the earnings premium reflects real skill the education added. The signalling view (Spence)
holds that schooling can raise earnings even if it adds no productivity, by serving as a credible
signal of pre-existing ability. Signalling works only if the schooling is cheaper to acquire for
high-ability workers (in effort, not just fees): that cost gap is what lets a degree separate the
able from the rest, so that employers who cannot observe ability directly read the diploma as a
proxy for it. Both views predict a positive schooling–earnings correlation; they disagree on what
produces it.
Remark. Why the distinction is not academic. If schooling builds human capital, widening
access to it raises productivity and is a social investment. If schooling is largely a signal, subsi-
dising more of it for everyone is partly wasteful — it raises the credential bar without adding
skill (a race for ever-higher credentials), and the private return to a degree exceeds its social
return. The reality is some of each. The evidence usually cited for a signalling component is the
15

Version of 13 September 2026 Module page
sheepskin effect: the earnings jump at the completion of a degree, over and above the same
years of study without the diploma — hard to explain if only the learning mattered, natural if
the certificate is what the market reads.
Remark. The macro test: does schooling cause growth? If schooling mainly builds pro-
ductive human capital, countries that added years of schooling should have grown measurably
faster. Bils and Klenow (2000) put this to the data and found the cross-country link is weak
and, if anything, runs the other way: faster growth seems to induce more schooling more
than schooling drives the growth. The finding does not overturn the micro Mincer premium —
individuals who study more do earn more — but it warns that the aggregate productivity pay-
off of mass schooling is smaller and harder to find than the private return, which is exactly
the gap a signalling component would open: a credential can raise one worker’s wage by sorting
them ahead of others without adding to what the whole economy produces.
Pitfall. A positive Mincer coefficient is consistent with both readings; wage data alone cannot
tell you which mechanism is at work. Telling them apart needs evidence of a different kind — a
sheepskin effect, or a policy that changes credentials without changing learning — not a larger
or more carefully estimated regression.
Exercises
3.1. A two-year professional degree costs €36 000 (fees plus forgone earnings) and yields €4 500
of extra earnings per year for 30 years. Use the annuity factors 𝑎(11%,30) = 8.69, 𝑎(12%,30) =
8.06, and 𝑎(13%,30) = 7.50. (a) Write the internal-rate-of-return equation and find the break-
even annuity factor. (b) Bracket 𝑟∗ with the factors given. (c) State the rule for deciding whether
to invest, and say whether this degree passes it against a 6% cost of funds.
3.2. (a) Explain why the Mincer-equation coefficient on schooling overstates the causal return
(ability bias) and how an instrumental variable such as quarter of birth addresses it. (b) The same
degree premium fits both the human-capital and the signalling reading; state each reading and
name one piece of evidence that would point toward signalling. (c) In one sentence, say what
Bils and Klenow’s cross-country finding adds to that debate.
Answers. (1) 36000=4500⋅𝑎(𝑟∗,30), so the break-even factor is 𝑎(𝑟∗,30)=36000/4500=8. Since 𝑎(12%,30)=8.06
and 𝑎(13%,30)=7.50, the factor 8 sits just below 12%, so 𝑟∗≈12%. Invest when 𝑟∗ exceeds the cost of funds; 12%>
6%, so the degree passes comfortably.
(2) Ability bias: the schooled differ in unobserved ability that also raises earnings, so the OLS coefficient overstates
the causal return; an instrument (quarter of birth, which shifts schooling through compulsory-schooling laws but has
no direct path to earnings) recovers the causal effect. Human capital: schooling raised productivity, so the premium
is added skill. Signalling: schooling reveals pre-existing ability without adding skill, working because a degree is
cheaper for high-ability workers to complete; a sheepskin effect — an earnings jump at degree completion, beyond
the same years of study without the diploma — points toward signalling. Bils and Klenow found schooling’s aggregate
growth pay-off weak, consistent with a signalling component alongside genuine human capital.
16
