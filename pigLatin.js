// Solution to FreeCodeCamp PigLatin challenge

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  var regex = /[aeiou]/gi;
  var letters = str.split('');
  var pigLatin = '';

  if (str[0].match(regex)) {
  // deal with words that start with a vowel
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
  // deal with words that have no vowels
    pigLatin = str + "ay";
  } else { 
    var firstVowelIndex = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substring(firstVowelIndex) + str.substring(0, firstVowelIndex) + "ay";
  };
  return pigLatin;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("glove");
translatePigLatin("pzza");
translatePigLatin("frzzz");