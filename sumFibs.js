// Solution to FreeCodeCamp Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var a = 0;
  var b = 1;
  var sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b
    }
    b += a;
    a = b - a;
  }
  return sum;
}

sumFibs(4); // should return 1
sumFibs(1); // should return a number
sumFibs(4000000); // should return 4613732
sumFibs(10); // should return 10