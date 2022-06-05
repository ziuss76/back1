const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++){
  count = 0;
  for (let k = 0; k <= num.length; k++){
    if (num[k] == i){
      count++;
    }
  }
  console.log(count);
}


