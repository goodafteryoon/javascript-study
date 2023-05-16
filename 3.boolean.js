// Boolean
// 객체를 사용하면 메모리를 더 차지하기 때문에 굳이 new Boolean 이런 식으로 객체를 생성해서 만들진 않는다.
const isTrue = new Boolean(true);
// const isTrue = true; // 위와 동일하다

/**
 * 조건문(if, while문)을 사용할 때 Falsy와 Truthy에 의해서 버그가 생길 수 있음
 * Falsy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0' 0이 아니라 0이 들어있는 string 이라 true
 * 'false' false가 아니라 false가 들어있는 string 이라 true
 * [] 빈 배열은 true!!
 * {}
 */
