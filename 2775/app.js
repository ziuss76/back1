const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++){
    const k = +input.shift();
    const n = +input.shift();

    //k+1 개의 배열 안에 n+1 개의 배열 선언, 2차원 배열, 초기값은 0
    //house[k][n] 꼴
    const house = Array.from(Array(k+1), () => Array(n+1).fill(0))

    for (let i = 1; i <= n; i++){ // 0층
        house[0][i] = i;
    }
    // 1층 1호는 1 + 0 = 1
    for(let i = 1; i <= k; i++){
        for(let j = 1; j <= n; j++){
            house[i][j] = house[i-1][j] + house[i][j-1];
        }
    }
    console.log(house[k][n]);
}
// 이항정리란 (a + b)n제곱 꼴의 식을 전개하는 것, 전개한 각 항의 계수를 이항계수라고 함.
// 파스칼의 삼각형에서 이항계수 만들기

// 0층 아래 가상의 -1 층으로 모든 호수에 1을 넣어준다
// 그 다음 가상의 -1 층의 1호를 맨 위 꼭짓점으로 하는 삼각형은 파스칼의 삼각형
// 2층의 3호 = 2층의 (3-1)호 + (2-1)층의 3호
// k층의 n호 = k층의 (n-1)호 + (k-1)층의 n호