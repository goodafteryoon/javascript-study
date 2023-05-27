// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// => 이런 모든 API를 이용해서 배열을 어딘가에 전달하고 복사할 때는 새로운 object가 만들어지는 것이 아니라 얕은 복사가 이루어진다.
const pizza = { name: '🍕', price: 2, owner: { name: 'Ellie' } };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1 : ', store1);
console.log('store2 : ', store2);

store2.push(sushi);
console.log('store1 : ', store1);
console.log('store2 : ', store2);
