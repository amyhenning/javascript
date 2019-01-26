function findLongestWordLength(str) {
  let words = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  console.log(longestWord.length);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // should return 6
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") // should return 8