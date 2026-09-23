# 1. Time value of money

*Source: BUS33-3 - Corporate Finance - Textbook.pdf, pages 5-7*

Version of 13 September 2026 Module page
1. Time value of money
Example — why €1,000 next year is not €1,000 today. A supplier offers Lumio a choice: €1,000
now, or €1,000 in one year. The answer is obvious — take it now — but why? Because €1,000
today can be placed at, say, 5% and become €1,050 in a year, so €1,000 in a year is worth less than
€1,000 today. Exactly how much less? Whatever sum, placed at 5% today, grows to €1,000 in a year:
€1,000/1.05 ≈ €952. That €952 is what next year’s €1,000 is worth now. Every valuation in this
book is a longer version of this one division.
A sum of money available today is not equal to the same nominal sum available later: money today
can be invested to earn a return, so it is worth more. The time value of money is the machinery that
makes cash flows at different dates comparable — and comparison is the first step of every decision
that follows.
Definition 1 (Future and present value). At a periodic rate 𝑟, a sum 𝐶 invested for 𝑛 periods
grows by compound interest — interest earning interest — to its future value
FV = 𝐶(1+𝑟) 𝑛.
Conversely, the present value of a sum 𝐶 received 𝑛 periods from now is found by discount­
𝑛
ing:
𝐶
PV = 𝑛 .
(1+𝑟) 𝑛
The factor 1/(1+𝑟) 𝑛 is the discount factor; the rate 𝑟 used to discount is the discount rate.
Example — compounding forward, discounting back. Place €2,000 at 6% for three years. It
grows to FV = 2000×1.063 ≈ €2,382. Now reverse the question: a payment of €2,382 due in three
years, discounted at 6%, is worth 2382/1.063 ≈ €2,000 today. Compounding and discounting are
the same operation run in opposite directions — one multiplies a sum forward, the other
divides it back.
The further away a cash flow, and the higher the rate, the more discounting shrinks it — which is
why distant, risky cash flows contribute so little to value today.
present value of a fixed €1,000 received in year 𝑡 (at 𝑟=8%)
1000
926
857
794
735
681
year 0 year 1 year 2 year 3 year 4 year 5
Figure 1: Discounting at work. A flat €1,000 promised in each future year is worth progressively less
today: €1,000 now, but only €681 if it arrives in five years. The discount factor 1/(1+𝑟) 𝑡 erodes value
geometrically with distance and with the rate.
5

Version of 13 September 2026 Module page
For a stream of cash flows 𝐶 ,𝐶 ,…,𝐶 at the end of periods 1 through 𝑛, present values simply add
1 2 𝑛
— each is carried back to today on its own and then summed:
𝑛
𝐶
PV = ∑ 𝑡 .
(1+𝑟) 𝑡
𝑡=1
The same stream valued at a future date — say the end of period 𝑛 — is found by carrying each flow
forward instead of back, then adding:
𝑛
FV = ∑𝐶 (1+𝑟) 𝑛−𝑡.
𝑛 𝑡
𝑡=1
Example — future value of a stream: what regular deposits grow to. Lumio sets aside
€10,000 at the end of each of the next three years, earning 5%. By the end of year 3 the first deposit
has compounded for two years, the second for one, the third not at all:
FV = 10000×1.052+10000×1.05+10000 = €31,525.
3
Present value carries a stream back to today; future value carries it forward to a common later date
— the same machinery pointed either way.
Some streams run so long that summing term by term is hopeless — a maintenance contract paying
every year for a decade, or a stable cash flow assumed to continue forever. Three such streams recur
often enough to have closed forms that collapse the whole sum into one division.
Proposition 1 (Perpetuities and annuities).
• A perpetuity paying 𝐶 at the end of every period forever is worth
𝐶
PV = .
𝑟
• A growing perpetuity whose payment grows at rate 𝑔 < 𝑟 each period (first payment 𝐶)
is worth
𝐶
PV = .
𝑟−𝑔
The plain perpetuity is the special case 𝑔 = 0.
• An annuity paying 𝐶 for 𝑛 periods is worth
𝐶 1
PV = (1− ).
𝑟 (1+𝑟) 𝑛
Example — an annuity: a fixed stream with an end date. A maintenance contract pays Lumio
€50,000 at the end of each year for 8 years. At a 6% discount rate its value today is
50000 1
PV = (1− ) ≈ 50000×6.21 ≈ €310,000.
0.06 1.068
6

Version of 13 September 2026 Module page
Summing eight discounted terms by hand would give the same figure; the annuity formula does it
in one line.
Example — the growing perpetuity is the engine of valuation. Suppose Lumio’s free cash
flow next year is €30 m and is expected to grow at 𝑔 = 2% forever, discounted at 𝑟 = 8%. Its value
today is
30 30
PV = = = €500m.
0.08−0.02 0.06
This single formula — the Gordon growth model — is the terminal-value engine behind almost
every company valuation. Notice how sensitive it is: raise 𝑔 to 3% and the value jumps to €600 m.
Small assumptions about the far future drive large fractions of value, a fragility we return to in
Chapter 10.
Pitfall. The discount rate must match the cash flows in three ways, or the arithmetic is
meaningless:
• Periodicity. A monthly cash flow is discounted at a monthly rate. An annual rate of 12% is
not 1% per month compounded — (1.01) 12 ≈ 12.7%, not 12%.
• Inflation basis. Discount nominal cash flows (which include expected inflation) at a
nominal rate, and real cash flows at a real rate. Mixing the two is a classic and large error.
• Risk. The rate must reflect the risk of these particular cash flows — the subject of Chapter 4,
Chapter 5 and Chapter 6. Risk-free cash flows are discounted at the risk-free rate; risky ones
demand more.
Everything that follows — NPV, the cost of capital, the whole of valuation — is an application of
this single principle: a cash flow is worth its discounted value, and values at the same date may be
compared and added.
Exercises
1.1. At 4% a year, how much is €5,000 worth after 3 years?
1.2. You deposit €2,000 at the end of each year for 4 years into an account paying 4%. How much
is in the account just after the fourth deposit?
1.3. A payment of €10,000 arrives in 5 years. At a 6% discount rate, what is it worth today?
1.4. A project pays €1,000, €2,000 and €1,500 at the end of years 1, 2 and
3. At 7%, what is the present value of the stream?
1.5. What is the present value of €4,000 received at the end of each year for 10 years, discounted
at 5%?
1.6. An asset is expected to pay €500 next year, growing 3% a year forever. At an 8% discount rate,
what is it worth today? What if growth were 4% instead?
Answers. (1) 5000×1.043≈ €5,624.32.
(2) 2000(1.043+1.042+1.04+1)≈ €8,492.93 (the future value of a four-payment stream).
(3) 10000/1.065≈ €7,472.58.
(4) 1000/1.07+2000/1.072+1500/1.073≈ €3,905.90.
(5) 4000×(1−1.05−10)/0.05≈ €30,886.94.
(6) 500/(0.08−0.03)= €10,000 at 𝑔=4%, 500/0.04= €12,500 — a one-point change in growth lifts value by 25%.
7
