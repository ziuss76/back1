  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let input = fs.readFileSync(filePath).toString().split(" ").map(val => +val)
  
 let [h,m] = input

 m -= 45

 if (m < 0) {
   h -= 1;
   m += 60;
 } if (h < 0) {
   h = 23;
 }
  console.log(h, m);
  
  // cd b1000 폴더 이동
  // node app.js 실행
  // cd.. 폴더 한단계 뒤로가기