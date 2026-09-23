# 5. Unemployment: frictions, matching, and the natural rate

*Source: BUS33-4 - Labour Economics & Inequalities - Textbook.pdf, pages 20-22*

Version of 13 September 2026 Module page
5. Unemployment: frictions, matching,
and the natural rate
The supply-and-demand diagram has a glaring silence: at the market-clearing wage everyone who
wants a job has one, so equilibrium unemployment is zero. Reality never is. The resolution is
that hiring is not instantaneous — workers and jobs must find each other, and that takes time and
resources.


## 5.1. Three kinds of unemployment


Definition 14.
• Frictional: short-term joblessness from the time it takes to match workers to jobs (search,
mobility, labour-market entry). Present even in a booming economy.
• Structural: a mismatch between the skills or locations of available workers and of available
vacancies. Persistent.
• Cyclical: a shortfall of jobs caused by deficient aggregate demand over the business cycle (the
output gap from your macroeconomics course).


## 5.2. The Mortensen–Pissarides matching model


Example — hiring as a meeting process. A city has 100 000 unemployed workers and 80 000
open vacancies — yet nobody is hired instantly. Each day a certain number of workers and firms
meet and pair up: more jobseekers and more vacancies both mean more matches, but search
frictions mean the pool never clears at once. Modelling that meeting process — not a wage that
equates two schedules — is the Mortensen–Pissarides contribution.
Definition 15. Search frictions are captured by a matching function giving the flow of new
hires from the stocks of unemployment 𝑈 and vacancies 𝑉:
𝑀 = 𝑚(𝑈,𝑉),
increasing in both and usually constant-returns-to-scale. Writing everything per unit of labour
force (rates 𝑢 = 𝑈/𝐿, 𝑣 = 𝑉/𝐿), define labour-market tightness 𝜃 = 𝑣/𝑢 = 𝑉/𝑈. Constant
returns let us write the job-finding rate — the rate at which an unemployed worker finds work
— as
𝑀
𝑓(𝜃) = = 𝑚(1,𝜃),
𝑈
increasing in 𝜃: a tighter market (more vacancies per jobseeker) fills the unemployed faster.
Now develop the model to its two payoffs: the equilibrium unemployment rate, and the Beveridge
curve.
20

Version of 13 September 2026 Module page
Proposition 2 (steady-state unemployment). Let jobs be destroyed at rate 𝛿 (separations per
period). In steady state the flow into unemployment equals the flow out:
𝛿⏟((cid:59)1(cid:60)−(cid:59)(cid:61)𝑢) = ⏟𝑓((cid:59)𝜃(cid:60))(cid:59)⋅(cid:61)𝑢 .
inflow: separations outflow: matches
Solving for 𝑢,
𝛿
𝑢 = .
𝛿+𝑓(𝜃)
Unemployment is high when jobs break up fast (large 𝛿) and when finding a new one is slow
(small 𝑓(𝜃), i.e. a slack market).
Example — an unemployment rate from two flow rates. Suppose each month 2% of jobs end
(𝛿 = 0.02) and an unemployed worker has a 30% chance of finding work (𝑓(𝜃) = 0.30). Then
0.02 0.02
𝑢 = = = 6.25%.
0.02+0.30 0.32
Now let a recession halve the job-finding rate to 𝑓 = 0.15: 𝑢 jumps to 0.02/0.17 = 11.8%. Unem-
ployment nearly doubles with no change in how fast jobs are destroyed — the outflow side alone
produced the change. This is why economists watch the job-finding rate, not just layoffs.


## 5.3. Reading the Beveridge curve


The steady-state condition also pins down the shape economists actually observe. As 𝜃 = 𝑣/𝑢 rises,
𝑓(𝜃) rises, so 𝑢 = 𝛿/(𝛿+𝑓(𝜃)) falls: higher vacancies go with lower unemployment. That downward-
sloping locus in (𝑢,𝑣) space is the Beveridge curve.
vacancy rate 𝑣
boom
BC′
recession BC
unemployment rate 𝑢
Figure 4: The Beveridge curve relates the vacancy rate to the unemployment rate. Movements along
it trace the cycle: booms sit upper-left (many vacancies, low 𝑢), recessions lower-right. An outward
shift to BC′ — more unemployment at every vacancy rate — signals worse matching efficiency (a
fall in 𝑓 for given 𝜃), i.e. a rise in structural unemployment. This is exactly what many economies
observed after 2009 and again in 2021–22.
21

Version of 13 September 2026 Module page
Pitfall. Read the position, not just the direction. High vacancies together with high
unemployment is the diagnostic of a matching/structural problem — jobs exist but the
unemployed cannot fill them (an outward-shifted curve). Low vacancies with high unem-
ployment points to deficient demand (cyclical) — a slide down and to the right along the
curve. Confusing the two leads to the wrong policy: retraining for a structural problem, demand
stimulus for a cyclical one.


## 5.4. The NAIRU


Example — why pushing unemployment ever lower backfires. Suppose policy pushes
unemployment down to 3% and tries to hold it there. At first vacancies are plentiful and wages
climb. But with so few jobseekers per vacancy, firms bid ever harder for workers; wages and prices
chase each other, and inflation does not merely rise — it keeps accelerating. There is a rate of
unemployment below which this happens and above which inflation is stable. That threshold is
what the next definition names.
Definition 16. The NAIRU (non-accelerating-inflation rate of unemployment) is the equilib-
rium unemployment rate consistent with stable inflation — the labour-market counterpart of
the vertical long-run Phillips curve from your macroeconomics course. Frictional and structural
unemployment persist at the NAIRU; cyclical unemployment is the deviation from it. Driving
𝑢 below the NAIRU buys accelerating inflation, not a permanent jobs gain.
Remark. Orders of magnitude. The NAIRU is estimated, not observed, and it drifts. US
estimates (e.g. the Congressional Budget Office) put the long-run natural rate around 4.5% in
the 2010s–2020s, down from 6%-plus in the 1980s; euro-area estimates are higher and more
dispersed, commonly 7–9%, reflecting the matching and institutional differences of the next
chapter.
Exercises
5.1. In a labour market jobs end at rate 𝛿 = 0.025 per month and the job-finding rate is 𝑓(𝜃) =
0.20. (a) Compute steady-state unemployment. (b) A recession halves the job-finding rate;
recompute. (c) State the Beveridge curve and read three scenarios — high vacancies with high
unemployment, low vacancies with high unemployment, and an outward shift of the whole
curve — classifying each as frictional, cyclical, or structural.
Answers. (1) 𝑢=0.025/(0.025+0.20)=0.025/0.225=11.1%; with 𝑓=0.10, 𝑢=0.025/0.125=20.0% — unemploy-
ment nearly doubles though 𝛿 is unchanged, the outflow side alone producing the change. Beveridge curve (Figure 4):
high 𝑣 + high 𝑢→ structural (mismatch); low 𝑣 + high 𝑢→ cyclical (deficient demand); an outward shift → worse
matching, i.e. higher structural unemployment.
22
