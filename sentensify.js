// Solution to FreeCodeCamp "Combine an array into a string using the join method"
// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. 

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

sentensify("May-the-force-be-with-you"); // should return "May the force be with you"
sentensify("The.force.is.strong.with.this.one"); // should return "The force is strong with this one"
sentensify("There,has,been,an,awakening"); // should return "There has been an awakening"