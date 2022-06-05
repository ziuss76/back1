const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = input.shift();

let num = input.map(x => x.split(' ').map(val => +val))

let result = '';
num.sort((a,b)=>{
    if(a[1] !== b[1]){
        return a[1] - b[1]
    }
    return a[0] - b[0]
})
.forEach(a => {
    result += `${a[0]} ${a[1]}\n`
})

console.log(result);

