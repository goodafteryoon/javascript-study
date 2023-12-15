// 자바스크립트의 함수는 만능임
// 함수처럼 사용, 생성자 함수로도 사용(클래스)
// 하지만 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
  name: 'Dog',
  // 함수 표현식으로 적으면 생성자 함수처럼 만들어짐 => 뚱뚱한 무거운 프로토타입이 만들어짐, 함수의 this 바인딩이 동적으로 됨 💩
  play() {
    // 함수를 일반 생성자 함수처럼 사용할 수 있기 때문에 함수 내부에 자체적으로 더 무거운 프로토타입을 가지고 있음
    // 때문에 객체 안에서 함수 표현식을 사용해서 선언하는 것은 좋지 않음
    // 💩
    console.log('논다멍');
  },
};
dog.play();

// 함수는 생성자 함수처럼도 사용 가능함
const obj = new dog.play(); // 💩
console.log(obj);

// ES6 => 메서드, 화살표 함수가 추가됨
const cat = {
  name: 'cat',
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play();
const obj1 = new cat.play(); // TypeError: cat.play is not a contstructor (생성자 함수로 사용 ❌)

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments (무거운 arguments 만들지 ❌)(인자에 대해 모든 정보를 가지고 있는 arguments 객체를 일반 함수에선 참조 가능함)
 * 4. this에 대한 바인딩이 정적으로 결정됨 (=> 함수가 만들어질 때, arrow function를 감싸고 있는 곳에서의 this가 영원히 정적으로 바인딩 됨)
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

// 일반 함수에선 arguments라는 객체가 있어서, 전달된 인자에 대한 정보를 가지고 있음
function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

// 화살표 함수에서의 arguments란, 화살표 함수가 만든 새로운 별도의 arguments 객체가 아니라 함수 외부의 arguments를 참조만 함
const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2); // 전역에서 함수를 선언해서 전역 객체의 arguments가 출력됨, 현재는 노드에서 사용하고 있는 노드를 실행할 때 전달받은 인자의 정보가 출력됨

const printArrow = () => {
  console.log(this); // 화살표 함수 안에서의 this는, 이 화살표 함수를 감싸고 있는, 함수가 정의된 곳에서의 한단계 감싸고 있는 scope의 this 정보를 간직
};
printArrow(); // node에서 글로벌 this인 모듈의 정보를 출력해서 {}
cat.printArrow = printArrow;
cat.printArrow(); // this가 여전히 정적으로 결정된 노드 모듈에서의 globalThis를 출력함
