const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input.shift();

let prime = [];

for (let i = 2; i <= 10000; i++){
    prime.push(i);
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

let primeNums = prime.filter(n => isPrime(n))

 //2 ~ 10000 소수 찾기

for (let i = 0; i < input.length; i++){
    const num = +input[i];
    const answer = []

    for(let j = 0; primeNums[j] < num / 2 + 1; j++){ 
        const half = primeNums.indexOf(num - primeNums[j])
        if (half !== -1){ 
            answer.push([primeNums[j], primeNums[half]])
        }
    }
    if (answer.length !== 0){
        const last = answer.pop();
        console.log(last[0], last[1]);
    }
}
// input 절반보다 작은 소수 탐색
// input - 찾은 소수 = 소수?
// 소수이면 저장

//골드바흐 파티션이 존재했다면
//가장 마지막 파티션을 가져오기 = 두 소수의 차가 가장 작음
 // 왜냐하면 j는 1씩 증가해서 가장 마지막이 크고, 절반도 가장 큼, 따라서 가장 차가 적다.


