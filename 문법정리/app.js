// JS 내장함수

eval('2+2'); // 문자열을 코드로 인식해서 계산하기.
isNaN(3); // 숫자면 false
Number('3'); //문자열을 숫자로
String(3); //숫자를 문자열로
parseInt(4.9); // 정수로 내림
Math.floor(5.9); // 정수로 내림
Math.round(5.9); // 정수로 반올림
Math.ceil(6.9); // 정수로 올림

let Arr3 = [1,2,3,4,5,6]

Math.max.apply(null, Arr3) // Math.max(...Arr3) 이렇게 할수도 있지 이게 더 편함
Math.min.apply(null, Arr3) 
Math.random(); //0 과 1 사이 아무 소수 


//객체만들기
var abc = {'a':100, 'b':200};

var abc2 = {}
abc2['a'] = 100;
abc2['b'] = 200;

var abc3 = {};
abc3.a = 1;
abc3.b = 2;


var score = 90;
switch (score/10){
    case 10 : console.log('a등급');
    break;
    case 9 : console.log('b등급');
    break;
    case 8 : console.log('c등급');
}

let i = 1;
while (i < 4) {
    console.log(i + '번 반복');
    i++;
}

// 배열 Arr 원본을 수정함

let Arr = ['a', 'b', 'c', 'd', 'e']
let Arr2 = [0, 1, 2, 3, 4]

Arr.length // 길이 = 마지막 인덱스 값 + 1
Arr.concat(Arr2); // Arr와 Arr2 배열 합치기 
Arr2.every(function(a){return a < 4}) // 안의 조건 중 하나라도 아니면 false
Arr.indexOf(3) // 인덱스 찾기, 해당 없으면 -1 반환
Arr.join('') //배열의 원소들을 연결해 하나의 문자열, 숫자열 만들기
Arr.join(' / ') // () 안에 없으면 쉼표 기준, 있으면 사이에 넣어줌

Arr.push() // 맨 끝에 추가
Arr.unshift() // 맨 앞에 추가
Arr.pop() // 맨 끝 제거
Arr.shift() // 맨 앞 제거

Arr.reverse() //배열의 순서 반대로

Arr2.slice(0, 3) // Array2.slice(a, b) a 인덱스 부터 b 인덱스 전까지 / b 없으면 마지막 요소까지
Arr2.slice(-4, -1) // 끝에서부터 -1, 즉 -4 인덱스부터 -1 전까지
//Arr.splice(start, count, value1, value2 ...) //Array에서 가져오고 나서 그 자리에 value들을 남김.
Arr.splice(0,3, 'f', 'g', 'h'); // a b c
//splice 한 이후 // f g h d e

// arr[5][2] (빈 배열 생성)
const arr3 = Array.from(Array(5), () => new Array(2))

// arr[5][2] (0으로 초기화하여 생성)
const arr4 = Array.from(Array(5), () => Array(2).fill(0))

// 문자열 String

let Str = '12345'
let Str2 = 'abcde'
let Str3 = 'abcabc'

Str.length
Str.charAt(3) // 인덱스가 3인 문자, 4를 반환
Str2.indexOf('a') // 'a'의 인덱스 반환
Str3.lastIndexOf('a') // 'a'가 마지막으로 나오는 인덱스 반환

Str.concat('12', '12') // 1212 를 뒤에 이어붙여줌\
Str.startsWith('1') //이걸로 시작하는지, 대소문자 구분함
Str.endsWith('5') // 이걸로 끝나는지, 대소문자 구분함

Str.includes('a') //이걸 포함하는가
Str3.search(/'abc'/) //정규표현식에 맞는 문자 최초 것만 인덱스만 찾아줌
console.log(/abc/.test(Str3)); // 정규식.test(문자열) //포함여부 참거짓

Str.repeat(2) // n번 반복한 걸 반환
Str.replace('123', '321') // 123을 321로 바꿔줌
Str.split('') // ''을 기준으로 나눈 배열로 바꿔줌
Str.substring(1,3) // 여기 index 부터 몇 개만 잘라서 뱉어줌 // 2번째 파라 없으면 끝까지 
