// Solution to FreeCodeCamp DNA Pairing algorithm
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

function pairElement(str) {
  var pairs = [];
  var singletons = str.split('');
  console.log(singletons);
  for (var i = 0; i < singletons.length; i++) {
    if (singletons[i] === "A") {
      pairs.push([singletons[i], "T"]);
    } else if (singletons[i] === "T") {
      pairs.push([singletons[i], "A"]);
    } else if (singletons[i] === "C") {
      pairs.push([singletons[i], "G"]);
    } else if (singletons[i] === "G") {
      pairs.push([singletons[i], "C"]);
    }
  }
  return pairs;
}

pairElement("GCG");
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].