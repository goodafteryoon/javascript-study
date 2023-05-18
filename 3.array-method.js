// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 (point)
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));

// 추가 - 제일 뒤 (길이를 반환해줌)
let length = fruits.push('🍑'); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞 (길이를 반환해줌)
length = fruits.unshift('🍓'); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);
fruits.splice(1, 1, '🍎', '🍓');
console.log(fruits); // 배열 자체를 수정(업데이트)
