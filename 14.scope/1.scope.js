// 코드 블럭: { }, if() { }, for() { }, function() { }
// 스코프란 변수를 참조할 수 있는(=접근할 수 있는) 유효한 범위, 식별자(변수, 함수, 클래스 이름)가 유효한 범위
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
}
console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
