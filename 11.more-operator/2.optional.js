// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할 때
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: '앨리' } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.ownerName;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName();
