const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

const changeNeed = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let element of changeNeed) {
    input = input.split(element).join('*')
  }
  console.log(input.length);

  //이게 맞왜틀 그냥 이문제는 넘어가자