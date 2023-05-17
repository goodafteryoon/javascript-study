// 브라우저에서의 globalThis와 this는 window 전역객체 출력함
console.log(globalThis);
// 노드에서의 this는 현재 모듈에 있는 정보를 출력한다.
// 현재 모듈에 export 된 게 아무것도 없기 때문에 아무것도 나오지 않음
// 노드에서의 this는 모듈을 가리키긴 하지만, 자바스크립트에서 대체적으로 this란 전역객체를 가리킨다. (브라우저에서 this는 window가 출력됐으므로, window가 전역객체임을 알 수 있다)
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 문자열의 코드를 값으로 평가해서 출력 가능
eval('const num = 2; console.log(num)');

// 숫자가 유한한지 확인하는 기능
console.log(isFinite(1));
console.log(isFinite(Infinity));

// 문자열 안에 들어있는 숫자가 있다면 실수로 변환해준다.
console.log(parseFloat('12.43'));
// 문자열 안에 들어있는 숫자를 정수로 변환해준다.
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier(어떤 리소스를 나타낼 수 있는 단 하나의 고유한 주소나 아이디를 가리킴)의 하위 개념)
// 웹사이트를 나타낼 수 있는 건 URL = 주소
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야 한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
