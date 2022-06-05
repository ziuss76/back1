
const fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(val => +val)

let [A, B, C] = input;

    console.log((A + B)%C);
    console.log(((A % C) + (B % C))%C);
    console.log((A * B)%C);
    console.log(((A%C) * (B%C))%C);
    



// node.js의 file system 모듈을 불러온다.
// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 읽어들인 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, input = ['2', '3']

//readFileSync('input.txt') 로 테스트하고 
//readFileSync('/dev/stdin') 으로 바꿔서 제출

// options으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환

// cd b1000 폴더 이동
// node app.js 실행
// cd.. 폴더 한단계 뒤로가기