const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(n){
  let count = 0;
  for (let i = 1; i <= n; i++){
    let str = String(i);
    if ( i < 100) {
      count++;
    }
    let A = Number(str[0]) - Number(str[1])
    let B = Number(str[1]) - Number(str[2])
    if (A === B){
      count++;
    }
  }
  console.log(count);
}