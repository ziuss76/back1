const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n')

const num = Number(input[0]);
let repeat = 0;

for (let i = 1; i <= num; i++){
  const word = input[i];
  const firstFound = []; //처음 발견된 알파벳
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++){
    if (firstFound.indexOf(word[j]) === -1) { // 처음 발견했으면 push
      firstFound.push(word[j])
    } else {
      if (firstFound.indexOf(word[j]) !== firstFound.length -1){ //여기 설명 아래
        isGroupWord = false;
      }
    }
  }
  if (isGroupWord){
    repeat += 1;
  }
}
console.log(repeat);


// 지금 알파벳이 이미 나왔고, 그 나온 인덱스는 길이-1 보다 더 이전에 나왔으면 이어지지 않고 다시 나온것.