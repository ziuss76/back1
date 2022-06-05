const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

let N = Number(input);

let star = new Array(N).fill(' ');
for (let i = N-1; i >= 0; i--){
  star[i] = '*'
  console.log(star.join(''));
}