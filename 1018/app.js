const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let NM = input.shift().split(' ')
let N = Number(NM[0]);
let M = Number(NM[1]);
const arr = []

let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

function wFirst(x, y){
    let count = 0;

    for(let i = y; i < y + 8; i++){
        for(let j = x; j < x + 8; j++){
            if (input[i][j] !== white[i - y][j - x]) { 
                // 아래 보면 i는 0 부터 2까지, i + 7 < 10 까지니까. 
                //따라서 끝(10)에 닿을 때까지 8개씩 검사, 
                //반복문이 다 돌면 8 * 8 한 판당 count를 매긴다. 
                count++;
            }
        }
    }
    return count;
}

function bFirst(x, y){
    let count = 0;

    for(let i = y; i< y + 8; i++){
        for (let j = x; j < x + 8; j++){
            if(input[i][j] !== black[i - y][j - x]) {
                count++
            }
        }
    }
    return count;
}

for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++){
        arr.push(wFirst(j, i)); // w가 먼저 나올 때 경우의 수 18개, 10-7 * 13-7 = 18
        arr.push(bFirst(j, i)); // 마찬가지, arr 한번 콘솔 띄워보셈
    }
}
console.log(Math.min(...arr));