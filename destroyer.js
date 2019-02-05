// Solution to FreeCodeCamp Search and Destroy challenge
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var argArr = new Array(...arguments);
  for (var i = 1; i < argArr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === argArr[i]) {
        delete arr[j];
        console.log(arr);
      }
    }
  };
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);