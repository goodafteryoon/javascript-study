// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123;
// .을 찍어서 유틸리티함수를 사용하는 순간 number 원시 타입을 감싸고 있는 Number 객체로 감싸짐
// .을 찍는 순간 자바스크립트 내장 객체로 문자열 또는 숫자(원시 타입)을 감싸준다
console.log(number.toString());
console.log(number); // number 원시 타입

const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim();
