const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let End = 665;

while (input > 0) {
    End++;
    if (End.toString().includes('666')){
        input--;
    }
}

console.log(End);