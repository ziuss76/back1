const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

const N = input.shift()
const A = input[0].split(' ')
const M = Math.max.apply(null, A);
let sum = 0;

for (let i = 0; i < N; i++){
  sum += A[i] / M * 100
}
console.log(sum / N);