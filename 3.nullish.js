// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // 0은 falsy한 값이라 -1 출력
console.log(num ?? '-1'); // null과 undefined가 아니기 떄문에 0 출력
