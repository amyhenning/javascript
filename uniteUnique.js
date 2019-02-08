// Solution to Sorted Uniion problem on FreeCodeCamp
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  console.log(arguments.length);
  var finalArr = [];
  var placeholder = [];
  for (let arg in arguments) {
    console.log(arguments[arg]);
    for (var i = 0; i < arguments[arg].length; i++) {
      if (!finalArr.includes(arguments[arg][i])) {
        finalArr.push(arguments[arg][i]);
      }
    }
  }
  console.log(finalArr);
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);