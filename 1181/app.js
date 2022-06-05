const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = input.shift();

const sorted = input.sort((a,b) => a.length - b.length || a.localeCompare(b))
// a- b 가 음수일 때 오름차순 이듯, a.localeCompare(b) 는 -1 을 뱉으므로 오름차순 정렬
const list = new Set(sorted);
//Set 을 이용해 중복값을 제거해준다. 중복이면 한번만 출력하라고 했으니까
console.log(Array.from(list).join('\n'));
// Array.from 으로 배열로 만든뒤 join으로 합치기