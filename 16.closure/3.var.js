function loop() {
  const array = [];
  // var과 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func()); // 0 1 2 3 4

// for문 안에 i를 var로 선언하면 5 5 5 5 5 만 출력
// 왜? var는 블록 스코프가 없고 함수 스코프만 존재
// var는 함수 스코프라서 계속 동일하게 하나의 변수로 남아있기 때문
