const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];

for(let i = 1; i <= num; i++){
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(val => +val)

    const p1 = {x: x1, y: y1}
    const p2 = {x: x2, y: y2}

    // 반지름과 점 거리 모두 제곱해서 비교해도 됨. 굳이 제곱근 써서 소수점 나오게?

    const sqrDistance = getSqrDistance(p1, p2)
    console.log(findPointsCount(sqrDistance, r1, r2));
}
    function getSqrDistance(p1, p2) {
        return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2)
    }

    function findPointsCount(d, r1, r2) {
        const sqrSumR = (r1 + r2) ** 2
        const sqrDiffR = (r1 - r2) ** 2

        if (d == 0) {
        // 원점이 같을 때 
        if (r1 == r2) return -1 // 반지름이 같으면 원이 아예 중첩
        return 0 // 반지름이 같지 않으면 만나지 않음
        } else {
           if (d > sqrSumR || d < sqrDiffR) { //원이 만나지 않음
               return 0
           } else if (d == sqrDiffR || d == sqrSumR) { //원이 내접 또는 외접할 때
               return 1
           } else if (d < sqrSumR) { //원이 두 점에서 만날 때
               return 2
           }
        }
    }

