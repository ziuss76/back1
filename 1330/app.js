const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let [A, B] = [+input[0], +input[1]]

   if (A > B) {
      console.log('>');
   } else if (A < B) {
      console.log('<'); 
   }
   else {
      console.log('==');
   }


// cd b1000 폴더 이동
// node app.js 실행
// cd.. 폴더 한단계 뒤로가기