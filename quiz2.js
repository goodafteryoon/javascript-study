// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, teamName, hoursPerMonth, payRate) {
    this.name = name;
    this.teamName = teamName;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  // 한달 임금에 접근할 때
  salary() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTime extends Employee {
  // PAY_RATE static 멤버 필드는 클래스 내부에서만 사용한다.
  // 외부에서 참조할 필요도 없고, 다른 값으로 변경하면 안되므로
  // static private 으로 설정해서 외부에서 값을 보지도, 수정도 못하게 캡슐화 해준다.
  static #PAY_RATE = 10000;
  constructor(name, teamName, hoursPerMonth) {
    super(name, teamName, hoursPerMonth, FullTime.#PAY_RATE);
  }
}

class PartTime extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, teamName, hoursPerMonth) {
    super(name, teamName, hoursPerMonth, PartTime.#PAY_RATE);
  }
}

const yun = new FullTime('윤', '마케팅', 30);
console.log(yun.salary());
const na = new PartTime('나', 'sw', 10);
console.log(na.salary());
