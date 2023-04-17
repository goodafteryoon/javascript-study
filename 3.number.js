let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123);
console.log(123 / 0);
console.log(123 / -0);
console.log(123 / "text");

let bigInt = 1234566789091233123874365856843953475693456n; // n을 붙여야 전체 숫자가 출력됨. bigInt값을 출력할 수 있는 방법
console.log(bigInt); // 어차피 이 타입을 쓸 일은 정말 거의 없을 것.
