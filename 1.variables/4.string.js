// 문자열 타입
let string = '안녕하세요';
console.log(string);

string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕!'"; // 쌍따옴표 출력하고 싶으면 작은따옴표로 감싸고, 작따 출력하고 싶으면 큰따로 감싸기 (반대되는 것으로 감싸기)
console.log(string);

// 이스케이프 표현 일반 문자에서 탈출해서 백슬래쉬(\)를 이용해 특수문자 표현하는 법
string = '안녕!\n앨리야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '앨리';
let greetings = "'안녕!, " + id + "🤚\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}🤚
즐거운 하루 보내요!!'
`;
console.log(greetings);
