// 매개변수의 기본 값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 속성 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters를 지정 가능하다 a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}

add();
console.clear();
/**
 * Rest 매개 변수
 * 얼마나 많은 개수의 인자가 전달될 건지 모를 때
 * 모든 것들을 배열로 받고 싶을 때
 */
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
// 몇 개의 인자를 받아올 지 모를 때 쓸 수 있음
// a와 b를 넣고 나머지를 ...numbers 배열에 넣음
sum(1, 2, 3, 4, 5, 6, 7, 8);
