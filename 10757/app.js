const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let answer = BigInt(input[0]) + BigInt(input[1]);
console.log(answer.toString());