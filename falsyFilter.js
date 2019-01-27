// Remove all falsy values from an array.

function falsyFilter(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(falsyFilter([7, "ate", "", false, 9])); // should return 
console.log(falsyFilter(["a", "b", "c"])); // should return ["a", "b", "c"]
console.log(falsyFilter([false, null, 0, NaN, undefined, ""])); // should return []