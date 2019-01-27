// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr.length === 0) {
    return 0;
  };
  for (var i = 0; i < sortedArr.length; i++) {
    if ((sortedArr[i] < num && num < sortedArr[i + 1]) || (sortedArr.length - 1 === i && sortedArr[i] < num))  {
      return i + 1;
    } else if (sortedArr[i] === num) {
      return i;
    }
  }
}

getIndexToIns([5, 3, 20, 3], 5); // should return 2
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2
getIndexToIns([], 1); // should return 0
getIndexToIns([2, 5, 10], 15); // should return 3