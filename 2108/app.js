const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(x => +x);

const N = input.shift()
const num = input.sort((a,b) => (a - b))
const numMap = {}

for (let n of num ){ //numMap 객체에 있으면 value 1씩 추가, 없으면 1
    if(numMap[n]){
        numMap[n] = numMap[n] + 1;
    } else {
        numMap[n] = 1;
    }
}

let mode = Math.max.apply(null, Object.values(numMap)) //객체의 value만 가져오고 그것의 최댓값
let modeArr = [];
let modeResult = 0; // 3.최빈값
for(let numkey in numMap){
    if(numMap[numkey] === mode){
        modeArr.push(numkey); //최댓값 배열에 넣어줌
    }
}
if (modeArr.length > 1){
    modeArr.sort((a,b) => (a - b))
    modeResult = modeArr[1] //2개 이상이면 두번째로 작은 값
} else {
    modeResult = modeArr[0]
}

let avg = Math.round(input.reduce((a,c) => (a += c), 0) / N); // 1.산술평균
if (avg === -0){avg = 0;} //예제 4번에 -0 이아닌 0으로 출력하라고 함

const center = input[Math.floor(input.length / 2)] // 2.중앙값
const range = num[N - 1] - num[0] // 4.범위

console.log(avg);
console.log(center);
console.log(+modeResult);
console.log(range);
