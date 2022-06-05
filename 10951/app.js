const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for(let i = 0; i < input.length; i++){
  let num = input[i].split(' ').map(val => +val);
  console.log(num[0] + num[1]);
}


//왜 여기선 trim() 을 꼭 넣어야 할까
// 일부 입력값의 마지막에 개행문자가 포함된 경우가 있어서 그렇다