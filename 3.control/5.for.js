// 반복문 Loop Statement
// for(변수 선언문; 조건식; 증감식) {}
// 실행순서 :
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 {} 코드 블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때 까지 2번과 3번을 반복함
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한 루프 💩
// for (;;) {
//  }

// 반복문 제어:
// break 반복문을 특정한 조건에 그만두게 하고 싶을 때
// for 루프 안에서 continue를 쓴다면?
// continue 가 나오는 순간 그 밑에 어떤 코드가 있더라도 코드는 무시되고
// 그 다음으로 바로 증감되면서 다음 코드가 실행된다.
// 반복문을 그만해 => break
// 이 조건이 맞으면 그 다음으로 넘어가 => continue
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log('i가 드디어 10이 되었다');
    break;
  } else {
    console.log(i);
  }
}
// MDN for: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for
