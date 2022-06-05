const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

let N = input[0]
let ans = ''

for (let i = 1; i <= N; i++){
    let num = input[i].split(' ');
    ans += +num[0] + +num[1] +'\n'
}
console.log(ans);


// 빈 문자열에 결과 값과 줄바꿈을 해야 시간초과가 안남.
// 그리고 num 만들고 Number 써서 더하는 거 기억하셈
