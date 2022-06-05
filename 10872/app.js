const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

function facto (n) {
    if (n == 0) {
        return 1;
    }
    return n * facto(n - 1)
}
console.log(facto(+input));


// 깨알상식: 0! 은  1이다