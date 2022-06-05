const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let N = +input[0];
let i = 2;
let primes = []
while(N !== 1){
    if (N % i == 0){
        N = N / i;
        primes.push(i)
    } else {
        i++
    }
}
console.log(primes.join('\n'));