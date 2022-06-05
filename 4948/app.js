const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input.pop();

let input1 = input.map(val => +val + 1)
let input2 = input.map(val => +val * 2)

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

for (k = 0; k < input1.length; k++){
    let primeNums = [];
    for (let i = input1[k]; i <= input2[k]; i++){
        primeNums.push(i);
    }
    const answer = primeNums.filter(n => isPrime(n))
    console.log(answer.length);
}

//구글링 했는데 애들 이상하게 풀길래 그냥 내가 품. 이게 제일 나은듯

