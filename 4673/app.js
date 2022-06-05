let ans = [];
let arr = [];

for (let i = 1; i <= 10000; i++){
  let sum = 0;
  let strNum = String(i);
  for (let k = 0; k < strNum.length; k++){
    sum += +strNum[k];
  }
  let newNum = i + sum;
  arr.push(newNum)
}

for (let i = 1; i <= 10000; i++){
  if (arr.indexOf(i) === -1){
    ans += i + '\n'
  }
}

console.log(ans);

// 셀프 넘버는 1부터 10000 까지 모든 d(n) 을 제외하고 남는 수들.