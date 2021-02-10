console.log(
  '-----\nBy listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\nWhat is the 10 001st prime number?\n-----\n'
);

const findIfNumberIsPrime = (number) => {
  for (i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      return false;
    }
  }
  // console.log(`Number ${number} is prime`);
  return number;
};

/*
  To test the function

for (j = 1; j <= 10000; j++) {
  findIfNumberIsPrime(j);
}
*/

const arrayWithTenthousAndAndOnePrimes = [];
const desiredPrime = 10001;

// Beginning at 2 since 1 isn't a prime number
let iterator = 2;

while (arrayWithTenthousAndAndOnePrimes.length < desiredPrime + 1) {
  let prime = findIfNumberIsPrime(iterator);
  iterator++;

  if (prime !== false) {
    // console.log(prime);
    arrayWithTenthousAndAndOnePrimes.push(prime);
  }
}

console.log(
  `The ${desiredPrime} prime number is ${
    arrayWithTenthousAndAndOnePrimes[desiredPrime - 1]
  }`
);
