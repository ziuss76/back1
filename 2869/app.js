const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const A = input[0]
const B = input[1]
const V = input[2]

console.log(Math.ceil((V - B) / (A - B)));

// V - B 낮에 어차피 다다르면 끝이기 때문에 밤에 내려가는 걸 미리 빼준다.
// A - B 하루에 올라갈 수 있는 거리
// 만약 안 나눠떨어진다면 하루가 더 필요하다는 것. 왜? Math.ceil 한번 뺴봐