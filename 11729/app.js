const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let N = +input;
let count = 0;
let answer = ''

function Hanoi (num, from, other, to){
    if (num === 0){
        return;
    } else {
        Hanoi(num - 1, from, to, other)
            answer += `${from} ${to}` + `\n`
        Hanoi(num - 1, other, from, to)
            count++;
    }
}
    Hanoi(N, '1', '2', '3')
    console.log(count);
    console.log(answer);

// 1층이 없는 것을 other에 옮김
// 맨 아래 원반은 to 에 옮김, 답에는 from 과 to 적기
// 다시 other를 to로 보낸다.
// 그럼 카운트 + 1