const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y };
console.log(coordinate);

// name 이라는 key에 전달받은 Name을 넣고, age라는 key에 전달 받은 age를 넣는다면
function makeObj(name, age) {
  return {
    name,
    age,
    // name: name,
    // age: age,
  };
}

/**
 * 객체 프로퍼티(key : value)들의 집합
 * 프로퍼티 키에 사용 가능한 값 => 문자열, symbol
 * 프로퍼티 값에 사용 가능한 값 => 모든 값(원시, 참조 모두 가능)
 */
