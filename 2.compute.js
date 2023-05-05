const obj = {
  name: '엘리',
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  // return obj.key; 이렇게는 안불러와짐
  return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  // delete obj.key; 얜 동작하지 않음
  delete obj[key];
}

deleteKey(obj, 'name');
console.log(obj);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects
