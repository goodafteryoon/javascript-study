// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼 정의를 가진 객체나(위의 것), 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread
const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

// 프로토콜을 따라가지 않는 일반 객체는 for.. of를 사용할 수 없다
// 대신에 for in 은 사용 가능
const obj = { 0: 1, 1: 2 };
// for... in : key를 출력
for (const item in obj) {
  console.log(item);
}
