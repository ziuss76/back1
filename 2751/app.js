const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(val => +val)

let N = input.shift();
input.sort((a,b)=>(a-b));

console.log(input.join('\n'))