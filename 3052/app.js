const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number)
let arr = [];

for(let i = 0; i < 10; i++){
  let num = input[i] % 42;

  if (arr.indexOf(num) == -1){
    arr.push(num)
  }
}
console.log(arr.length);