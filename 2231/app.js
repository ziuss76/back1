const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

const ans = []

function d(n){
    const N = n.toString().split('')
    return n + N.reduce((a, c) => a += Number(c), 0)
}

for (let i = 1; i <= +input; i++){
    if (d(i) === +input){
        ans.push(i)
    }
}

if (ans.length){
    console.log(Math.min(...ans));
} else {
    console.log(0);
}

