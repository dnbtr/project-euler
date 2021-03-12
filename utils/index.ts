const factorial = (number: number): number => {
  let result = 0;

  if (number == 1) {
    return 1;
  }

  for (let i = number; i > 1; i--) {
    if (i == number) {
      result += i * (i - 1);
    } else {
      result *= i - 1;
    }
  }
  return result;
};

// See https://betterexplained.com/articles/easy-permutations-and-combinations/
const combinationGeneral = (n: number, k: number): number => {
  return factorial(n) / (factorial(n - k) * factorial(k));
};

const combination = (n: number, k: number): number => {
  return permutation(n, k) / factorial(k);
};

const permutation = (n: number, k: number): number => {
  return factorial(n) / factorial(n - k);
};

const findAllDivisors = (number: number): Array<number> => {
  let divisors: Array<number> = [];

  for (let i = 1; i < number; i++) {
    if (number % i == 0) divisors.push(i);
  }

  return divisors
}

export {
  factorial,
  combinationGeneral,
  combination,
  permutation,
  findAllDivisors
};
