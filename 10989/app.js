const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(val => +val)

let N = input.shift();
let max = Math.max.apply(null, input)
let arrange = new Array(max).fill(0);
let answer = ''

for (let i = 0; i < N; i++){
    arrange[input[i] - 1]++; // -1 을 해줘야 input[0]부터 제자리 찾아감. 인덱스니까 
}
for(let i = 0; i < arrange.length; i++){
    if(arrange[i] !== 0){
        for(let j = 0; j < arrange[i]; j++){
            answer += (i+1) + '\n' // 1이 나온 만큼 인덱스 1에 더하기, 2,3..마찬가지
        }
    }
}
console.log(answer);