// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let checkThis = arr[0].toLowerCase().split('');
  let checkFor = arr[1].toLowerCase().split('');
  for (let letter in checkFor) {
    if (checkThis.indexOf(checkFor[letter]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); // should return false
mutation(["Mary", "Army"]); // should return true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should retun true