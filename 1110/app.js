const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input)

function solution(N){
  let count = 0;
  let start = N;

  while (true){
    count++;
    let num = Math.floor(start / 10) + (start % 10); //N 이 아닌 start 대입해야함
    start = (start % 10) * 10 + num % 10; 

    if(start === N && count !== 0){
      break;
    }
  }
  console.log(count);
}