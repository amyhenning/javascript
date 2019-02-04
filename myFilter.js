// Solution to FreeCodeCamp Implement a Filter Method on a Prototype exercises

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  this.forEach(function(item) {
    if (callback(item) === true) {
      newArray.push(item);
    }
  })
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});