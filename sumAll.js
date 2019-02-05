// Solution to FreeCodeCamp Sum All Numbers in a Range challenge
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  arr.sort(function(a, b) { return a - b });
  var range = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  const reducer = (x, y) => x + y;
  return range.reduce(reducer);
}

sumAll([1, 4]); // should return 10
sumAll([4, 1]); // should return 10
sumAll([5, 10]); // should return 45
sumAll([10, 5]); // should return 45