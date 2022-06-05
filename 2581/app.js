const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

const [a, b] = input.split('\n').map(Number)

let primeNums = [];

for (let i = a; i <= b; i++){
    primeNums.push(i);
}

function isPrime (n) {
    if (n < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
const P = primeNums.filter(n => isPrime(n))
if (P.length === 0){
    console.log(-1);
} else {
    console.log(P.reduce((a,c) => a + c));
    console.log(Math.min(...P));
}
