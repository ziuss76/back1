const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++){
  result[input.charCodeAt(i) - 97] ++; //소문자 a 가 97부터, input 해당 알파벳에 1씩 더하기
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) { // 가장 많이 나온 알파벳이고, 인덱스가 달라야 하나 둘 셀 수 있음
    isSame = true;
    break;
  }
}

console.log(isSame ? '?' : String.fromCharCode(index + 65)); // 65부터 대문자 A
