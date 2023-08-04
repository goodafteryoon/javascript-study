// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi); // RfError : Cannot access 'hi' before initialization
let hi = 'hi';
let func1 = function () {}; // 함수도 표현식으로 선언할 경우엔 접근 안된다

// const cat = new Cat(); // Cannot access 'Cat' before initializtion
class Cat {}

let x = 1;
{
  console.log(x); // quiz
  let x = 2;
}
