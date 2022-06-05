const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, X] = input[0].split(' ').map(Number)
let A = input[1].split(' ').map(Number)
let ans = []

for(let i = 0; i < N; i++){
  if(A[i] < X){
    ans.push(A[i])
  }
}
console.log(ans.join(' '));