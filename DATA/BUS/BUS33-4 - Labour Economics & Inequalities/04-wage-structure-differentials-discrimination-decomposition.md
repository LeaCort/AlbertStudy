# 4. Wage structure: differentials, discrimination, decomposition

*Source: BUS33-4 - Labour Economics & Inequalities - Textbook.pdf, pages 17-19*

Version of 13 September 2026 Module page
4. Wage structure: differentials,
discrimination, decomposition
Two workers with the same schooling and experience are often paid differently. Before reaching
for “discrimination,” an economist must rule out two competing explanations — and then learn to
measure what is left.


## 4.1. Compensating differentials (Rosen)


Example — why the night shift pays more. Two warehouse workers, identical on paper. One
works days at €18/hour; the other works nights, in the cold, at €22/hour. The €4 gap is not unequal
treatment — it is the price the firm must pay to staff an unpleasant shift. Strip it out and the jobs
pay the same.
Definition 10. Compensating differentials are wage differences that offset non-wage job
characteristics. Unpleasant, dangerous, or insecure jobs must pay more to attract workers;
desirable attributes are “paid for” through lower wages. Part of any observed wage gap may
therefore reflect differences in job attributes, not in treatment of workers. Read this way, a
wage is a bundle of prices — a base rate plus an implicit price for each job characteristic;
recovering those implicit prices from wage data is the hedonic reading of wage differences.


## 4.2. Two kinds of discrimination


Economics distinguishes two mechanisms behind a group wage gap, and they call for different
evidence and different remedies.
Definition 11. Taste-based discrimination (Becker) is a preference against a group: an
employer, co-worker, or customer is willing to forgo money to avoid hiring or working with its
members. It is prejudice in the literal sense — a distaste entered directly into the payoff. Under
competition it is costly to the discriminator and can be eroded by firms that do not share the taste.
Definition 12. Statistical discrimination arises when employers cannot observe an
individual’s productivity and use group averages as a proxy. Members of a group are then paid
according to the group mean rather than their own productivity. The result is a persistent group
wage gap without any prejudice — the employer is minimising an information problem, not
indulging a taste — and it can be self-confirming, since the disadvantaged group may then under-
invest in skills the employer cannot see.
17

Version of 13 September 2026 Module page


## 4.3. The Oaxaca–Blinder decomposition


Example — splitting a wage gap. Men in a firm earn, on average, a log-wage of ln𝑤 = 3.00;
𝐴
women, ln𝑤 = 2.75. The raw gap is 0.25 log points (about 28%). How much of it is explained
𝐵
by men having more measured experience, and how much remains unexplained? The Oaxaca–
Blinder decomposition answers exactly this — and below we run it to numbers.
Definition 13. The Oaxaca–Blinder decomposition splits a mean wage gap into an
explained part (groups differ in characteristics) and an unexplained part (groups face different
returns to the same characteristics). Estimate ln𝑤 = 𝛽 +𝛽 𝑋 +𝜀 separately in groups 𝐴 and 𝐵,
0 1
with mean characteristic 𝑋 ,𝑋 . Since ln𝑤 = 𝛽̂ +𝛽̂ 𝑋 ,
𝐴 𝐵 𝑔 0,𝑔 1,𝑔 𝑔
l⏟n(cid:59)𝑤(cid:59)𝐴(cid:59)(cid:60)−(cid:59)l(cid:59)n(cid:59)𝑤(cid:61)𝐵 = (
⏟
𝑋
(cid:59)𝐴(cid:59)
−
(cid:59)(cid:60)
𝑋
(cid:59)𝐵(cid:59)
)𝛽
(cid:59)1
̂
(cid:61),𝐵
+(
⏟
𝛽
(cid:59)0
̂
,(cid:59)𝐴(cid:59)
−
(cid:59)(cid:59)
𝛽
(cid:59)0
̂
,(cid:59)𝐵(cid:59)
)
(cid:59)
+
(cid:60)
𝑋
(cid:59)𝐴(cid:59)
(
(cid:59)
𝛽
(cid:59)1
̂
,(cid:59)𝐴(cid:59)
−
(cid:59)(cid:59)
𝛽
(cid:59)1
̂
,(cid:61)𝐵
).
raw gap explained (endowments) unexplained (returns + constant)
Example — the same gap, decomposed to numbers. Take experience as the one measured
characteristic and estimate the wage equation in each group:
men (A): ln𝑤 = 2.40+0.030⋅exp, exp = 20;
𝐴
women (B): ln𝑤 = 2.35+0.025⋅exp, exp = 16.
𝐵
Check the means: ln𝑤 = 2.40+0.030×20 = 3.00 and ln𝑤 = 2.35+0.025×16 = 2.75, so the
𝐴 𝐵
raw gap is 0.25. Now decompose, valuing the endowment gap at women’s returns 𝛽̂ = 0.025:
1,𝐵
explained = (exp −exp )𝛽̂ = (20−16)×0.025 = 0.10,
𝐴 𝐵 1,𝐵
unexplained = (2.40−2.35)+20×(0.030−0.025) = 0.05+0.10 = 0.15.
So 0.10 of the 0.25 gap (40%) is explained by men’s greater experience; 0.15 (60%) is unexplained
— men are paid more even at equal experience, through both a higher intercept and a steeper
return to each extra year. That 0.15 is what the debate is about.
Pitfall. The unexplained component is not a clean measure of discrimination. It also absorbs
any productivity difference you failed to measure and any compensating differential you omitted,
and it moves when you add or drop a control. A statistical-discrimination reading attributes
it to group-based inference; a taste-based reading attributes it to prejudice; a compensating-
differentials reading attributes part of it to unmeasured job attributes. The decomposition
frames the debate; it does not settle it. (And the split is not unique: value the endowment gap
at men’s returns instead and the two components shift — the “index-number problem.”)
Exercises
4.1. Two groups have wage equations ln𝑤 = 2.50+0.028⋅exp (mean experience 22) and
𝐴
ln𝑤 = 2.44+0.024⋅exp (mean experience 18). (a) Compute each group’s mean log wage and
𝐵
the raw gap. (b) Apply the Oaxaca–Blinder decomposition, valuing the endowment gap at group
𝐵’s returns, to split the gap into explained and unexplained components. (c) Explain why the
18

Version of 13 September 2026 Module page
unexplained component cannot be read directly as discrimination, distinguishing taste-based,
statistical-discrimination, and compensating-differentials interpretations.
Answers. (1) Means: ln𝑤 =2.50+0.028(22)=3.116, ln𝑤 =2.44+0.024(18)=2.872, raw gap 0.244. Explained
𝐴 𝐵
=(22−18)(0.024)=0.096; unexplained =(2.50−2.44)+22(0.028−0.024)=0.06+0.088=0.148 (and 0.096+
0.148=0.244, checking). The 0.148 also holds unmeasured productivity, omitted compensating differentials, and
moves with the controls, so it is not “discrimination” as such: a taste-based reading attributes it to prejudice, a
statistical-discrimination reading to group-based inference, a compensating-differentials reading to unmeasured job
attributes.
19
