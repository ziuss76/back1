const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift()
let arr = []
let answer = ''


for (let i = 0; i < N; i++) {
    arr.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < N; i++){
    let count = 1;
    for (let j = 0; j < N; j++){
        if (arr[i][0] < arr[j][0] &&
            arr[i][1] < arr[j][1]){
                count++;
            }
    }
    answer += count + ' ';
}
console.log(answer);
