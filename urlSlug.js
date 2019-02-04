// Solution to FreeCodeCamp Convert Strings to URL Slugs problem
// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.Don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

// the global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s{1,}/g).join("-");
}

console.log(urlSlug(globalTitle)); // Should be "winter-is-coming"
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // should return "a-mind-needs-books-like-a-sword-needs-a-whetstone"
console.log(urlSlug("Hold The Door")); // should return "hold-the-door"