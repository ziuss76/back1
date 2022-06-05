const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number)

let N = +input[0];

let Max = Math.max.apply(null, input);
let MaxIndex = input.indexOf(Max)

console.log(Max);
console.log(MaxIndex + 1);


