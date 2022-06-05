const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")

const C = +input[0]

for(let i = 1; i <= C; i++){
  let sum = 0;
  let count = 0;
  let scores = input[i].split(' ').map(Number)
  let N = scores.shift()

  sum += scores.reduce((a, c) => a += c)

  let avg = sum / N;

  for (let k = 0; k <= N; k++){
    if(scores[k] > avg){
      count++;
    }
  }
  console.log((count / N * 100).toFixed(3) + '%');
}