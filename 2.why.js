/**
 * 함수가 중첩되어 있을 때 내부 함수가
 * 외부 함수의 렉시컬 환경에 접근할 수 있으니까
 * 외부 환경에 접근이 가능한 것을 클로저라 함
 * (JS에서 클로저는 함수가 만들어질 때마다 생성이 된다)
 */

// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 쓰임
// 캡슐화와 정보 은닉
// 클래스의 private 필드 또는 메소드를 사용하는 효과와 동일
// (예전 버전에선 클래스와 private가 없었기 때문에 클로저 특징을 이용해서 정보 은닉함)

/**
 * 클로져 특징을 이용해서 함수로 내가 은닉하고자 하는 데이터 상태를 감추고
 * 오직 public 함수만을 통해서 내 내부 데이터를 조작할 수 있게 만들어 줄 수 있다.
 */
function makeCounter() {
  let count = 0; // 은닉하고자하는 데이터

  // 내부 데이터를 조작할 수 있게 하는 public 함수
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const fun1 = makeCounter();
fun1();
fun1();
fun1();

/**
 * 최신 JS, TS에선 클래스를 사용해서 클로저를 대신할 수 있다.
 */
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
