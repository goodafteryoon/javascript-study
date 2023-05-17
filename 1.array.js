// 배열 생성 방법
let array = new Array(3); // 배열 크기 지정 (배열의 클래스 생성자 이용)
console.log(array);

array = new Array(1, 2, 3); // 배열에 들어갈 아이템 지정
console.log(array);

array = Array.of(1, 2, 3, 4, 5); // static 함수 이용해서 만듦
console.log(array);

const anotherArray = [1, 2, 3, 4]; // 배열 리터럴을 이용해서 만듦
console.log(anotherArray);

// 기존의 배열을 전달받아 새로운 배열을 만들 때 from을 사용
// 이때 from은 iterable로 만들어져있는데, 이는 순회가 가능한 이라는 의미다.
// 여기서 순회가 가능한 것은 배열 말고도 문자열도 가능하다.
// ex) array = Array.from('text');
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Type Collection)
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
