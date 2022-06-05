const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input.pop();

for(let line of input){
    let val = line.split(' ').map(Number);

    val.sort((a, b) => a - b)

    if (val[0] ** 2 + val[1] ** 2 === val[2] ** 2) {
        console.log('right');
    } else {
        console.log('wrong');
    }
}


    

