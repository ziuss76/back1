const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

let phone = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
}
let result = 0;

for (let i = 0; i < input.length; i++){
    for(let j = 2; j <=9; j++){
        if (phone[j].includes(input[i])){
            result += j + 1 // 1이 1 초 그다음 숫자는 1초 더
        }
    }
}

console.log(result);