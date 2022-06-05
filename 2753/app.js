const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ')

const A = input;

if (A % 4 === 0 && A % 100 !== 0 || A % 400 === 0){
   console.log(1);
} else {
   console.log(0);
}

// cd b1000 폴더 이동
// node app.js 실행
// cd.. 폴더 한단계 뒤로가기