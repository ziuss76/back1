const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

let hour = input[0].split(' ')[0]
let min = input[0].split(' ')[1]
let cookmin = input[1]

solution(+hour, +min, +cookmin)

function solution(H, M, C){
  M += C;
  while (M >= 60){
    H += 1;
    M -= 60;
  } if (H >= 24){
    H -= 24;
  }
  console.log(H, M);
}


// cd b1000 폴더 이동
// node app.js 실행
// cd.. 폴더 한단계 뒤로가기