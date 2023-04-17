// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당 불가능
// 1. 상수
// 2. 상수또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 TypeError 남, Assignment to constant variable

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.name = '오렌지';
console.log(apple); // apple 엔 결국 메모리 주소가 할당돼있기때문에
// const 를 쓰면 다른 메모리 주소를 재할당하는 것은 안된다.
// 하지만 heap 메모리에 저장된 object 변경은 가능하다. => 왜? 메모리주소 자체가 바뀌는 행위는 아니기 때문
