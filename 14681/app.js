const fs = require('fs'); 
const input = fs.readFileSync(0).toString().split('\n').map(val=>+val)
// 이 문제는 /dev/stdin 이 아니라 0 을 넣어줘야 런타임 에러가 안난다.
//readline 은 복잡해서 안쓸거임ㅅㄱ

const [A, B] = input

  let ans = 0;

  if (A > 0 && B > 0) {
    ans = 1;
  }
  if (A < 0 && B > 0) {
    ans = 2;
  }
  if (A < 0 && B < 0) {
    ans = 3;
  }
  if (A > 0 && B < 0) {
    ans = 4;
  }
  console.log(ans);


// cd b1000 폴더 이동
// node app.js 실행
// cd.. 폴더 한단계 뒤로가기

