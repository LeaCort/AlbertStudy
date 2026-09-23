# Preface

*Source: MAT31-6 - Math for Data Practice - Textbook.pdf, pages 4*

Version of 13 September 2026 Module page
Preface
By the end of this course you will be able to do six things you cannot do yet. You will measure how
strongly two quantities move together, and know exactly what that measurement does and does not
capture. You will fit the least-squares line and read its slope as a business quantity. You will say how
much of the variation in the data the line accounts for, through the number 𝑅2. You will check, from
the residuals, whether the assumptions the line rests on actually hold. You will test whether the slope
could be an accident of noise. And you will recognise when a hidden third variable has reversed the
story completely. Together these are one skill: fitting a straight line to a cloud of points, and then
deciding how much to trust it. Any cloud of points admits a line; the task is to tell a line that means
something from a line that means nothing.
No chapter teaches the tools you arrive with, and you need every one of them. From your earlier
statistics you can summarise one variable by its mean and its variance, and you have met two ways to
relate a second variable to it: the covariance and Pearson’s correlation, read alongside a scatter plot.
From multivariable calculus you can find the lowest point of a function of two variables by setting
its two partial derivatives to zero. From probability and inference you know random variables, their
expectation and variance, the idea of an estimator, the normal distribution, the Student 𝑡 distribution,
and how a hypothesis test turns a test statistic into a 𝑝-value.
We work throughout with one small dataset — thirty regional markets of an online retailer, each
with a week’s advertising spend and the sales that followed — and we compute everything from the
ground up in Python with NumPy, calling no regression library. Where a statistics package would
print a summary table in one line, we form the slope, its standard error, and the test statistic ourselves,
so that every number is one you could have produced by hand. Every code block on these pages has
been run, and the output printed beneath it is its real output.
4
