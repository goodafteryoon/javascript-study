// 오브젝트를 만드는 3가지 방법
// Object literal { key : value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple',
  'hello-bye': '✋',
  0: 1,
  ['hello-bye1 ']: '🤚', // - 와 같은 특수문자는 대괄호 안 또는 문자열에만 가능
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye1 ']); // 대괄호 표기법 bracket notation
apple['name'];

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);
console.clear();
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);
