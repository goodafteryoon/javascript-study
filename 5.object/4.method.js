// 서로 연관있는 속성과 행동을 묶어 둔 것이 객체
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name} : 🍎`); // 객체 안에서 자기 자신의 속성을 접근할 때는 this를 붙여줘야함
  },
  display: () => {
    console.log(`${this.name} : 🍎`);
  }, // 화살표 함수의 this는 함수가 선언될 때 정적으로 결정되기 때문에 undefined로 출력된다.
};

apple.display();
