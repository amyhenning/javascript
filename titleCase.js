// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let lowercaseLetters = str.toLowerCase().split('');
  let titleCaseString = [];

  for (var i = 0; i < lowercaseLetters.length; i++) {
    if (i === 0) {
      titleCaseString.push(lowercaseLetters[i].toUpperCase());
      } else if (lowercaseLetters[i - 1] === " ") {
      titleCaseString.push(lowercaseLetters[i].toUpperCase());
    } else { titleCaseString.push(lowercaseLetters[i])}
  };
  return titleCaseString.join('');
}

titleCase("I'm a little tea pot"); // should return I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); // should return Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // should return Here Is My Handle Here Is My Spout.