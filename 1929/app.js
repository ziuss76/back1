const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

const [a, b] = input.split(' ').map(Number)

let primes = [];

for (let i = a; i <= b; i++){
    primes.push(i);
}

function isPrime (n) {
    if (n < 2)
    return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0){
            return false;
        }
    }
        return true;
}

const answer = primes.filter(n => isPrime(n));
console.log(answer.join('\n'));
