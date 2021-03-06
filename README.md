# Project Euler solutions

Solutions for problems 1 to ~100.
Using Typescript, Golang and Python.

---

[![Typescript](https://img.shields.io/badge/-Typescript-blue?style=flat-square&logo=Typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/-Python3-yellow?style=flat-square&logo=Python&logoColor=white)](https://www.python.org/)
[![Golang](https://img.shields.io/badge/-Golang-darkblue?style=flat-square&logo=Go&logoColor=white)](https://golang.org/)

---

## Usage

- Typescript:
  * Clone this repo;
  * `$ yarn install` to install dependencies;
  * `$ npm t` on `typescript` folder to run automated tests (Mocha + Chai)

---

## Further reading

- Problem 10 - About [primes](https://byjus.com/maths/prime-numbers/). Also on how to [optimize](https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr)
- Problem 14 (Collatz Problem) - [The Collatz Conjecture](https://medium.com/cantors-paradise/the-collatz-conjecture-some-shocking-results-from-180-000-iterations-7fea130d0377)
- Problem 15 - Try different approaches such as [Pascal Triangle](https://researchideas.ca/wmt/c6b3.html)
  + Or try [different approaches](https://betterexplained.com/articles/navigate-a-grid-using-combinations-and-permutations/)
- Problem 18/67 - It uses Dynamic Programming (breaking problem into subproblems)
  + See [these approaches](https://www.mathblog.dk/project-euler-18/), also see [optimal substructures](https://en.wikipedia.org/wiki/Optimal_substructure), graph theory and greedy algorithms.
- Problem 21 - [Amicable numbers](https://primes.utm.edu/glossary/page.php?sort=AmicableNumber)
- Problem 22 - Using [Base36](https://en.wikipedia.org/wiki/Base36) to find the numeric position of each char.

**Prime numbers**
  + [Polinomial expressions that generate primes](https://www.ime.unicamp.br/~ftorres/ENSINO/MONOGRAFIAS/Antonio_TN17M1.pdf)
  + [A005846 on OEIS](https://oeis.org/A005846) (See problem 27).

---

## Glossary
- **Proper Divisor** - Positive divisor of a number N, excluding N itself ([source](https://mathworld.wolfram.com/ProperDivisor.html))
  ```plaintext
  Positive divisors of 3 = [1]
  Positive divisors of 8 = [1, 2, 4]
  ```
- **Identity** - An identity is a mathematical relationship equating one quantity to another (which may initially appear to be different). ([source](https://mathworld.wolfram.com/Identity.html))
  
---

## Notes

- Some exercises used typescript/ts-node, hence the packages.json
- Some JS/TS files use IIFEs (Immediately Invoked Function Expression) to avoid function and variable collision
- **Problem 23**
  - There are 6965 abundant numbers <= 28123, of which only 62 are uneven

---

## Benchmarking
Just benchmarking data for possible optimization of algorithms.

- Problem 7
  - First solution takes ~11 seconds to execute
  - Refactored code takes ~10 miliseconds (~1000 times faster)

- Problem 23
  - Only 62 uneven numbers out of 6965 abundant numbers <= 28123
  - There were no significant performance changes using indexOf or includes() to iterate a large array
  - Took ~4 min to return 26667 abundant number sums from 48.511.255 possible combinations (6965 x 6965)

- Problem 25 (with typescript):
  - Calculating the first Fibonacci Number to have N digits.
  ```bash
  - `$ Number Fib(4782) has 1000 digits or more default: 112.99ms`
  - `$ Number Fib(9567) has 2000 digits or more default: 826.671ms`
  - `$ Number Fib(14352) has 3000 digits or more default: 2.301s`
  - `$ Number Fib(19137) has 4000 digits or more default: 5.464s`
  - `$ Number Fib(23922) has 5000 digits or more default: 11.048s`
  - `$ Number Fib(28707)) has 6000 digits or more default: 17.485s`
  - `$ Number Fib(33492) has 7000 digits or more default: 29.132s`
  - `$ Number Fib(38277) has 8000 digits or more default: 44.357s`
  - `$ Number Fib(43062) has 9000 digits or more default: 59.722s`
  - `$ Number Fib(47847) has 10000 digits or more default: 1:24.364 (m:ss.mmm)`
  ```