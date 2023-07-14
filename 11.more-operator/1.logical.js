// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 : short-circuit evaluation (조건문 밖에선 단축평가)
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 || obj2) {
  console.log('둘 다 true!');
}

// 앞의 obj1이 true니까 obj2가 할당 (단축평가 특징)
let result = obj1 && obj2;
console.log(result);

// 앞에 있는 obj1이 true니까 뒤에 obj2는 보지도 않고 앞에것이 할당됨(||는 하나만 true여도 되니까) (단축평가 특징)
result = obj1 || obj2; // result = false || obj2 => 뒤에 것이 할당됨
console.log(result);

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falsy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐 주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item; // = {price:1};
const price = item && item.price; // item이 있다면 item.price를 할당
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 모든 경우 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
  // 기본값 설정 : message가 없다면 Hello
  const text = message || 'Hello';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
