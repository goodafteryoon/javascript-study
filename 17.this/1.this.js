'use strict';
/**
 * 글로벌 컨텍스트의 this
 * - 브라우저 : Window
 * - 노드 : 모듈
 */
const x = 0;
module.exports.x = x; // module.exports에 등록(연결)
console.log(this); // 노드에서는 기본적으로 CommonJS 라는 내부적으로 내장되어있는 module exports 시스템을 사용
// 물론 최신 노드에서는(ES6에서는) 모듈 import와 export를 사용할 수 있다.

console.log(globalThis); // 노드에서 사용할 수 있는 전역 객체가 출력됨
// globalThis.setTimeout();
// setTimeout(); // 글로벌 객체에 있는 함수라면 globalThis를 생략할 수 있음 (globalThis라면 생략이 가능하다.)
console.clear();
console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined (함수 내부에서 this란 없으니까 undefined가 나옴)
 * 느슨한 모드에서는 globalThis(= 노드에선 전역 객체, 브라우저에선 윈도우)
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name); // 후에 생성될 인스턴스 그 자체를 가리킴 ex) cat1, cat2
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야아아옹');
cat1.printName();
cat2.printName();

/**
 * 전역에서 this란, 전역 객체 가리킴
 * class에서 this란, 앞으로 만들어질 인스턴스 자체를 가리킴
 * 함수에서 this란, 엄격모드가 아닌 경우에는 그냥 global 가리키지만 엄격모드에는 함수 내부 scope
 */
