var readlineSync = require('readline-sync');

var degreesFah = readlineSync.question('Enter degrees in Fahrenheit: ');
var degreesNum = Number(degreesFah);
var degreesCelsius = (degreesNum - 32) * 5/9
console.log('It is ' + degreesCelsius + ' degrees Celsius');