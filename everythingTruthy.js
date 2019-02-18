// Solution to FreeCodeCamp "Everything Be True" algorithm
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); // should return true
truthCheck([{"single": ""}, {"single": "double"}], "single"); // should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single"); // should return false