const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할 때
// forEach의 콜백함수는 배열의 요소마다 한번씩 호출된다.
// 그리고 콜백함수의 인자는 총 3개가 있는데, 배열의 요소(value), 배열의 인덱스(index), 배열 전체(array)를 전달해준다.
// 배열마다 빙글빙글 돌면서 특정한 일을 수행하고 싶다면 for문 사용없이 고차함수 forEach를 사용하면 된다.
fruits.forEach(function (value, index, array) {
  console.log('-------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

// 사용하지 않을 인자에 대해선 생략이 가능하다
fruits.forEach(function (value) {
  console.log('value : ', value);
});

// 보통은 arrow function을 사용한다
fruits.forEach((value) => console.log('arrow function value : ', value));

// forEach 만들기
function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
// 배열의 find 고차함수
// find에 콜백함수를 전달하면, 배열에 있는 아이템이 인자로 전달되서 총 4번 호출 된다.
// true로 리턴이 되면, 즉 우리가 찾고자 하는 조건이 맞으면 해당하는 아이템을 바로 반환해주는 함수다
let result = products.find((value) => {
  return value.name === '🍪';
});
const found = products.find((value) => value.name === '🍪'); // 코드 블럭에서 값을 바로 리턴하는 경우에는 {}와 return 생략가능
console.log(found);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍪');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪');
console.log(result);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// flatmap : 중첩된 배열을 쫘악 펴줌
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

// 숫자일 때 유의, 숫자가 문자열로 변환되어 그 상태로 정렬이 되기 때문에
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// 기준점을 콜백 함수로 전달해줘야 한다.
// a-b 음수를 리턴하면 첫번째 argument가 두번째보다 작다는 것이고, 0을 리턴하면 동일, 양수를 리턴하면 크다는 것이다
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
// 두번째 인자는 sum의 초기값이다.
// 콜백함수에서 value는 배열 각각의 값, sum은 계속 합쳐진 값이다.
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
