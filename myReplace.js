// Solution to FreeCodeCamp Search + Replace algorithm
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  var upperRegex = /[A-Z]/;
  var afterCap = after;
  if (before[0].match(upperRegex)) {
    console.log("you need to capitalize the after var");
    afterCap = after[0].toUpperCase() + after.substring(1);
  }
  return str.replace(before, afterCap);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("Let us get back to more Coding", "Coding", "algorithms");