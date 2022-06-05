const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let X = [];
let Y = [];
let x, y;

for (let i = 0; i < 3; i++){
    X.push(Number(input[i].split(' ')[0]));
    Y.push(Number(input[i].split(' ')[1]));
}
X = X.sort();
Y = Y.sort();

x = X[1] === X[0] ? X[2] : X[0];
y = Y[1] === Y[0] ? Y[2] : Y[0];

console.log(`${x} ${y}`);
    

