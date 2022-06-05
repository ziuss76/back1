const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

const radius = Number(input);
const euclid = radius ** 2 * Math.PI;
const texi = ((radius * 2) * radius * 0.5) * 2;

console.log(euclid.toFixed(6));
console.log(texi.toFixed(6));


    

