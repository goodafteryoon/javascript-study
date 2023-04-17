// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b); // 원시타입은 값이 독립적으로 저장됨

// 객체 타입은 참조값(= 메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // 0x1234
  name: '사과',
};
let orange = apple; // 0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);
// 동일한 object를 가리키고 있으니까, 한 곳에서만 바꿔도 둘 다 바뀌게 되는 것
