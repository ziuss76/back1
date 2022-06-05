const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let str =String(input[1])
let count = 0;
for(let i = 0; i < str.length; i++){
    count += Number(str[i])
}
console.log(count);
