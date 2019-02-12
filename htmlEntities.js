// Solution to FreeCodeCamp Convert HTML Entities challenge
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  var regex = /[&<>"']/gi;
  var htmlEntities = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '\"' : "&quot;",
    "\'" : "&apos;"
  };

  var letters = str.split("");
  var matches = str.match(regex);
  if (regex.test(str) === true) {
    for (var i = 0; i < matches.length; i++) {
      for (var j = 0; j < letters.length; j++) {
        if (matches[i] === letters[j]) {
          letters.splice(j, 1, htmlEntities[matches[i]]);
        }
      }
    }
    return letters.join("");
  } else { return str };
}

convertHTML("Dolce & Gabbana");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("abc");