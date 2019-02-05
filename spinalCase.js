// Solution to FreeCodeCamp Spinal Tap Case problem
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var words = str.split(/(?=[A-Z\s\-])/);
  var wordsToJoin = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      delete words[i];
    } else { wordsToJoin.push(words[i].toLowerCase().replace(/[\s\_\-]/, "")) };
  }
  return wordsToJoin.join("-");
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");