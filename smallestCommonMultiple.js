// Solution to FreeCodeCamp Smallest Common Mulitple challenge
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// Commented out code that was confusing!

function smallestCommons(arr) {
  // sort the original array from smallest to largest
  arr.sort((a, b) => a - b);

  // This video was super helpful in understanding the GCD and LCM functions below: https://www.youtube.com/watch?v=6vWx5trbj6c
  // greatest common denominator function
  function greatestCommonDenominator(a, b) {
    return b ? greatestCommonDenominator(b, a % b) : Math.abs(a);
  };

  // least common multiple function
  function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDenominator(a, b);
  }

  // least common multiple of a range
  var result = 1;
  // loop will go from the first number to the last and use each number in between
  for (var i = arr[0]; i <= arr[1]; i++) {
    // example case: [1, 5] is the input array
    // FIRST LOOP: i = 1, result = 1
    // result = leastCommonMultiple(1, 1) = 1
    // SECOND LOOP: i = 2, result = 1
    // result = leastCommonMultiple(1, 2) = 2
    // THIRD LOOP: i = 3, result = 2 (set in last loop)
    // result = leastCommonMultiple(2, 3) = 6
    // FOURTH LOOP: i = 4; result = 6 (set in last loop)
    // result = leastCommonMultiple(6, 4) = 12
    // FIFTH AND FINAL LOOP: i = 5; result = 12 (set in last loop)
    // result = leastCommonMultiple(5, 12) = 60
    // returns 60 for input array of [1, 5] or [5, 1]
    result = leastCommonMultiple(result, i);
  };
  return result;
}

smallestCommons([1,5]); // should return 60
smallestCommons([5, 1]); // should also return 60
smallestCommons([23, 18]); // should return 6056820