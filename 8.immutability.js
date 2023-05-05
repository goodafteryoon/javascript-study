// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  num = 5; // ❌
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

// 전달된 인자의 값을 함수 내부에서 바꿔선 안됨.
// 원시값은 값에 의한 복사라서 큰 상관 없지만, 객체의 경우 원본이 복사되기 때문에
// 함수 내부에서 변경할 경우 외부의 있는 원본 객체에도 변경이 일어남
function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

// 이름부터 변경하는 느낌을 주도록!
function changeName(obj) {
  return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트 만들기!
}
