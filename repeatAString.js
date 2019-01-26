// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let newStr = []
  if (num < 0) {
    return '';
  } else {
    for (let i = 1; i <= num; i++) {
      newStr.push(str);
    }
  }
  return newStr.join('');
}

console.log(repeatStringNumTimes("abc", 3)); // should return 'abcabc'
console.log(repeatStringNumTimes("abc", 4)); // should return "abcabcabcabc"
console.log(repeatStringNumTimes("abc", -2)); // should return ""
console.log(repeatStringNumTimes("*", 3)); // should return "***"