// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name} : 🍊`);
//   },
// };

// 생성자 함수 : 함수이긴한데, 시작하는 첫글자를 대문자로 만들어줘야함
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략 가능해서 보통 생략함
}
// 이렇게 템플릿을 만들어두면 위처럼 반복적으로 작성할 필요없이 내가 전달할 데이터를 넣어서 생성하기만 하면 된다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
// 비슷한 함수를 작성해야하는 경우라면, 객체 리터럴을 이용해서 매번 반복적으로 작성하지 않고 생성자 함수를 통해서 만들 수 있다.
