// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
  #value; // 내부에서만 사용하는 value 라는 프라이빗 필드
  constructor(startValue) {
    // 인스턴스 생성시 외부에서 초기값(startValue)을 전달 받음
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    // 현재 값을 읽기만 할 수 있다
    return this.#value;
  }

  increment = () => {
    // increment만을 이용해서 유일하게 value를 증가시킬 수 있음, 외부에선 value의 값을 변경할 수 없게 해둠
    this.#value++;
  };
}

// 사용자 입장에서 사용할 때 어떻게 사용하지? 부터 생각해서 코드를 짜본다 (유닛테스트)
const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);
