function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}

const sum = add; // 이는 add가 가리키고 있는 함수를 sum도 가리킨다는 것이다.
// 왜? sum에는 add가 가리키고 있는 함수의 주소값 (ex. 0x11)이 동일하게 복사되어 들어있기 때문

/**
 * 함수 이름을 어딘가에 할당한다는 것은,
 * 함수를 가리키고 있는 그 메모리 주소를 복사해서 할당하는 것과 동일
 * 그래서 함수 이름 자체는 함수를 가리키고 있는 것임
 */

// console.log(sum(1, 2));
console.log(add(1)); // a: 1, b: undefined 여서 NaN
console.log(add()); // a, b : undefined 여서 NaN
console.log(add(1, null)); // a: 1, b: null인데, null은 0으로 변환되므로 1+0 = 1 출력됨
console.log(add(1, 2));
