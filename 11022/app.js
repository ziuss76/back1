const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let T = Number(input[0]);

for (let i = 1; i <= T; i++){
  let num = input[i].split(' ')
  console.log(
    `Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${Number(num[0]) + Number(num[1])}`);
}
