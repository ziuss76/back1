const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift()

for (let i = 0; i < T; i++){
    const HWN = input[i].split(' ')
    const H = HWN.shift();
    HWN.shift();
    const N = HWN.shift()

    const floor = N % H === 0 ? H : N % H;
    const room = Number.isInteger(N / H) ? N / H : Math.ceil(N / H)

    if(room < 10){
        console.log(`${floor}0${room}`);
    } else {
        console.log(`${floor}${room}`);
    }
}
