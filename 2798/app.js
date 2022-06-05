const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

input[0] = input[0].split(' ');
const cards = input[1].split(' ').map(Number);

let answer = 0;

const N = input[0][0];
const M = input[0][1];

for (let i = 0; i < N; i++){
    for (let j = i + 1; j < N; j++){
        for (let k = j + 1; k < N; k++){
            let sum = cards[i] + cards[j] + cards[k];
            if (answer <= sum && sum <= M){
                answer = sum;
            }
        }
    }
}
console.log(answer);

// i 가 가장 작은 수, j는 그 다음, k 가 가장 큰 수라서 + 1씩 증가
// answer (이전에 찾은 최댓값) 보다 큰 sum 을 찾아야 최댓값을 찾을 수 있지