const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

const num = +input;
const lines = []

printStars(num);
console.log(lines.join(''));

function printStars(num){
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            star(i, j, num);
        }
        lines.push('\n')
    }
}

function star (i, j, num){
    if (i % 3 == 1 && j % 3 == 1){ // x, y 좌표가 1, 4, 7  즉 (1,1) (1,4) (1,7), (4,1)...
        lines.push(' ')
    } else {
        if (num == 1){ // '나머지 모든 공간이 * 찍힘!' num 도 3의 배수이기 때문에 어차피 1에서 걸림,
            lines.push('*')
        } else {
           star(parseInt(i/3),parseInt(j/3),parseInt(num/3)) 
           // 3으로 나눈뒤의 몫, 즉 3 x 3 그룹으로 묶어져 위 if문에 의해 가운데가 뻥 뚤림
        }
    }
}





// input = 9 면 x, y 좌표가 3, 4, 5 안의 박스는 공백, 3으로 나눴을 때 몫이 1, 1 % 3 은 당연히 1
// input = 27 이면 x, y 좌표가 9 10 11 / 12 13 14 / 15 16 17 가 공백
// 3으로 나눴을 때, 9~11 의 몫은 3, 12~14 의 몫은 4, 15 ~ 17의 몫은 5
// 이 구간에선 어떻게든 (1,1) 에 걸리게 된다