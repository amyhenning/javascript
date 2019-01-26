// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let startPosition = str.length - target.length;
  if (str.substring(startPosition, str.length) === target) {
    return true;
  } else { return false };
}

console.log(confirmEnding("Bastian", "n")); // should return true
console.log(confirmEnding("Connor", "n")); // should return false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // should return false