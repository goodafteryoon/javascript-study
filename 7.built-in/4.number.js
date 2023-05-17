const num1 = 123;
const num2 = new Number(123);

console.log(typeof num1);
console.log(typeof num2);

// Number 클래스의 Static Property : 객체를 일일히 만들지 않아도 클래스 만으로 접근이 가능한 속성이 있다
console.log(Number.MAX_VALUE); // 정수에서 사용할 수 있는 가장 큰 숫자 (여기서 e+308은 10^308이라는 뜻)
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 사용 예시
if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 소수점 아래 반올림

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 그 나라 지역 언어에 맞게 숫자를 변환

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될 때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // ? (우리가 자바스크립트에서 실수끼리 계산할 때 우리가 예상하지 못한 정말 작은 미묘한 차이가 발생할 수 있다)
console.log(num); // 0.1 이 아닌 0.10000000000000003 출력
// 왜? => 우리는 10진수로 계산을 하지만, 자바스크립트에서 내부적으로 계산할 때는 2진수로 각각을 변환하여 계산을 한 뒤 다시 10진수로 반환한다
// 이런 과정에서 정확하게 부동 소수점까지 계산되지 않는다. 그래서 00000003이라는 작은 오차가 발생할 수 있다
// 이런 작은 오차를 나타내는 것이 EPSILON

function isEqual(original, expected) {
  // return original === expected;
  return Math.abs(original - expected) < Number.EPSILON; // 둘의 차이가 EPSILON 보다 작은지 확인하기
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
