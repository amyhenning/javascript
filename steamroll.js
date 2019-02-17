// Solution to FreeCodeCamp Steamroller algorithm. Uses code from MDN docs
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}

steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);