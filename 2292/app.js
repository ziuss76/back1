const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

let range = 1, block = 1;

while (block < input) {
	// block 이 2 ~ 7(6개) 일 때 range 1 증가, 8 ~ 19 (12개) 일 때 range1 증가
	block += 6 * range; //block 에 6 더하고 range에 1 더하고, 12 더하고 2 더하고...
	range++;
}
console.log(range);