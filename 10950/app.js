const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input.shift();

for(let i = 0; i < N; i++){
  let num = input[i].split(' ')
  console.log(+num[0] + +num[1]);
}