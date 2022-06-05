const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [A, B] = input;

const stringB = String(B);
const one = +stringB[2];
const ten = +stringB[1];
const hun = +stringB[0];
console.log(A * one);
console.log(A * ten);
console.log(A * hun);
console.log(A * B);
