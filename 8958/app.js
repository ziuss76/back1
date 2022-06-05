const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

const N = input.shift()
const A = input

for(let i = 0; i < N; i++){
  let OXlist = A[i]
  let score = 0;
  let Ocnt = 0;
  for (k = 0; k < OXlist.length; k++){
    if(OXlist[k] === 'O'){
      Ocnt++;
      score += Ocnt;
    } else {
      Ocnt = 0;
    }
  }
  console.log(score);
}
