// Sum all the prime numbers up to and including the provided number. 
// Used a code snippet from StackOverflow for finding the prime numbers and commented it out to check my own understanding of the code. The approach to summing the prime numbers is my own code.

function sumPrimes(num) {
  // set the variables for the algorithm
  var sieve = [], i, j, primes = [];
  // start at 2 (since 0 and 1 aren't prime) and loop till you get to num
  for (i = 2; i <= num; ++i) {
    // if there's nothing at sieve index i...
    if (!sieve[i]) {
      // i has not been marked -- it is prime, so push it to the primes array
      primes.push(i);
      // add the remaining numbers (non-primes) to the sieve array
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  // return the sum of the prime numbers
  return primes.reduce((accum, current) => accum + current);
}

sumPrimes(10); // should return 10
sumPrimes(977) // should return 73156