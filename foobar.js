var readlineSync = require('readline-sync');

var input = readlineSync.question("How many digits of Foobar shall I produce? ");

for (var iteration = 1; iteration <= Number(input); iteration++) {
	if (iteration % 3 === 0 && iteration % 5 === 0) {
		console.log("FooBar");
	}
	else if (iteration % 3 === 0 ) {
		console.log("Foo");
	}
	else if (iteration % 5 === 0) {
		console.log("Bar");
	}
	else {
		console.log(iteration);
	}
}

