// Solution to "Map the Debris" challenge from FreeCodeCamp
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var period = Math.round(2 * Math.PI * (Math.sqrt(Math.pow((earthRadius + arr[i].avgAlt), 3)/GM)));
    var newObj = { name: arr[i].name, orbitalPeriod: period};
    newArr.push(newObj);
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);