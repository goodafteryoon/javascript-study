const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]); // 배열의 인덱스로 접근
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0)); // 함수로 접근, 결과는 똑같다
console.log(text.charAt(1));
console.log(text.charAt(2));

// 해당하는 문자가 어디에 위치해있는지 알려주는 함수
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l')); // 뒤에서부터 순서 세기

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '       space               ';
console.log(space.trim());

const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2));
console.log(longText.split(','));
