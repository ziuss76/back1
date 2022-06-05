const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let num = Number(input[0])

let answer = '';

for (let i = 1; i <= num; i++){
  answer += i + '\n';
}
console.log(answer);


// 마찬가지로 빈 문자열에 결과값과 줄바꿈으로 해야 시긴초과 안남.
