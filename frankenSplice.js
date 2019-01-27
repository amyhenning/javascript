// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0, arr2.length);
  for (var i = 0; i < arr1.length; i++) {
    newArr.splice(n + i, 0, arr1[i]);
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // should return [4, 1, 2, 3, 5, 6]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
