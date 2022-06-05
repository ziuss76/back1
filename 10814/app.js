const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();

input.sort((a,b) => a.split(' ')[0] - b.split(' ')[0])

console.log(input.join('\n'));