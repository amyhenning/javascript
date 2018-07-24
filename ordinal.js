var readlineSync = require('readline-sync');

var ordinal = function(digit) {
	var digitNum = Number(digit);
	var lastDigit = digitNum % 10;
	var lastTwoDigits = digitNum % 100;
	if (lastTwoDigits > 10 % lastTwoDigits < 20) {
		return digit + "th";
	}
	else if (lastDigit === 1) {
		return digit + "st";
	}
	else if (lastDigit === 2) {
		return digit + "nd";
	}
	else if (lastDigit === 3) {
		return digit + "rd";
	}
	else {
		return digit + "th";
	}
	return lastDigit;
}

var input = readlineSync.question('Enter a digit: ');

var value = ordinal(input);
console.log(value);