// 접근자 프로퍼티 (Accessor property)
// get, set 접근자 프로퍼티라 불린다. 생긴건 함수처럼 생겼지만
// 접근할 때는 값을 읽어오고, 설정하는 일을 해준다.
// 클래스의 상태처럼 변수처럼 보이긴 한데, 실제로는 함수를 말하는 것
class Student {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
    // this.fullName = `${this.firstName} ${this.lastName}`;
  }
  // 상태 : 호출하는 시점에 데이터를 만들어서 리턴을 한다
  // 이건 속성에 가깝기 때문에 함수를 호출한다는 것은 특정한 일을 수행하기 위해선데,
  // fullName과 같이 데이터를 조합해서 보여주는, 속성과 가깝다고 간주되는 것들을 함수로 만들어야할때
  // get 키워드를 붙여주면 함수를 호출하는 것처럼 호출하지 않고 속성에 접근하듯이 접근할 수 있다.
  // 접근
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // 할당
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
// console.log(student.fullName()); // 함수처럼 호출
student.lastName = '안나';
console.log(student.fullName);
student.fullName = '김철수';
// 함수가 아니라, 접근자 프로퍼티를 사용하는 경우는 무언가 처리하는 행동은 아닌데,
// 프로퍼티의 일부분이긴 한데, 무언가를 조합해서 만들거나 또는 get이나 set을 할 때
// 특정한 일을 조금더 해주고 싶다면
// ex. 특정 숫자를 set할 때 0이하의 숫자가 들어오면 0으로 set하고 싶을 때
// 조금 더 제어하고 싶을 때 접근자 프로퍼티를 사용할 수 있다.
