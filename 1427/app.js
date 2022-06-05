const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('').map(x => +x);

input.sort((a,b) => (b - a))
console.log(input.join(''));
