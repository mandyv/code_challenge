function stringy(num) {
	var result = [];
	var numOfTens = num / 2;

	for (i=0; i<numOfTens; i++) {
		result.push("10");
	}
	if(num % 2 == 0) {
	return result.join("");
    }
	
};

console.log(stringy(6) == "101010");
console.log(stringy(4) == "1010");
console.log(stringy(12) == "101010101010");

