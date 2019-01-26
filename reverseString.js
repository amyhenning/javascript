function reverseString(str) {
  let strArr = str.split('');
  let reverseArr = []
  for (let i = 0; i < strArr.length; i++) {
    reverseArr.unshift(strArr[i]);
  }
  return reverseArr.join('');
}

console.log(reverseString("hello"));
console.log(reverseString("This is a string"));
console.log(reverseString("My dog's name is Ernie"));