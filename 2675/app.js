const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input.shift();

for (let i = 0; i < num; i++){
  let answer = '';
  let [num2, str] = input[i].split(' ');

  for (let j = 0; j < str.length; j++){
    answer += str[j].repeat(num2)
  }
  console.log(answer);
}