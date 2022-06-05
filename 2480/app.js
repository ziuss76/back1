const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number).sort((a,b) => b - a)

solution(input[0], input[1], input[2])

function solution(a, b, c){
 let answer = 0;

 if (a === b && b === c) {
  answer += (10000 + a*1000)  
 } else if (a === b || a === c || b === c) {
   answer += (1000 + b*100)
 } else {
   answer += (a * 100)
 }
  console.log(answer);
}

// cd b1000 폴더 이동
// node app.js 실행
// cd.. 폴더 한단계 뒤로가기


