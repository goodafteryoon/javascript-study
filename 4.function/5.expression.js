// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Fuction(); // 뒤 객체편에서 다룸

// IIFE (Immedicately-Invoked Function Expressions)
// 많이 사용되는 표현식은 아님, 가끔 프론트엔드에서 화면 로딩할 때 함수 호출 시켜 확인할 때 사용할 때도 있음
(function run() {
  console.log('🥳');
})();
