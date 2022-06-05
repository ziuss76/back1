const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = input.shift();
const nums = input[0].split(' ')

function isPrime (n) {
    if (n == 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
    
}
console.log(nums.filter(n => isPrime(n)).length);

//왜 제곱근 까지만 계산? 
// 49의 제곱근은 7, 즉 7이 가장 큰 소수 판별용 배수가 된다.