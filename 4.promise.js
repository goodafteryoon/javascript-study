// 프로미스 사용시 콜백을 전달하지 않아도 됨
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

// try catch 문을 쓰지 않고도 에러처리와 finally를 쓸 수 있다
runInDelay(2)
  .then(() => console.log('타이머 완료'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));

/**
 * 프로미스를 이용한다면?
 * 함수형 프로그래밍처럼 체이닝을 통해서
 * 비동기 코드를 깔끔한 절차적인 형식으로 코드 작성이 가능하다
 */
