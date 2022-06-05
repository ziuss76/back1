const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(val => +val);

let Max = Math.max.apply(null, A)
let Min = Math.min.apply(null, A)

console.log(`${Min} ${Max}`);