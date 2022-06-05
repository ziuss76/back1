const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

let n = +input;
let v = 1;

while (true){
	n -= v;
	if (n <= 0){
		n += v;
		break;
	}
	v++;
}

if (v % 2 === 0){
	console.log(`${n}/${v - n + 1}`);
} else {
	console.log(`${v - n + 1}/${n}`);
}
// 1개 뺐더니 양수니 다음 줄, 2개 뺐더니 양수? 다음 줄, 3개 뺐더니 -2? 
    // 다시 3 더해주니 1(번째칸)
        // 그럼 n = 1, v = 3

// 출력 부분은 잘 모르겠으면 n줄 v칸 5줄씩만 해보면 패턴 찾을 수 있음