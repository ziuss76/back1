const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

let star = '';

  for(let i=1; i <= Number(input); i++){
    star += '*'
    console.log(star);
  }
