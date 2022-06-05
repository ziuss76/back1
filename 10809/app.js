const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

const result = [];

for (let i = 97; i <= 122; i++){
  let alph = String.fromCharCode(i)
  let answer = input.indexOf(alph) 
  result.push(answer);
}
console.log(result.join(' '));

//String.fromCharCode(i) 아스키 코드를 i에 넣으면 알파벳을 퉤
// alph 하나하나가 input 중 어디에 있나, 없으면 -1