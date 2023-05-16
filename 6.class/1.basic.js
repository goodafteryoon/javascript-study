// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

// 클래스 class
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    // 생성자에는 우리가 객체를 만들 때 필요한 데이터를 외부로부터 받아올 수 있도록 인자로 지정해준다
    this.name = name; // 링크해 주는 작업 this의 name은 이 name
    this.emoji = emoji;
  }
  // 멤버 함수가 있다면 일반 함수로 작성하지말고 화살표 함수로 작성해야한다.
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
// 사용 방식은 생성자 함수와 동일
// apple은 Fruit 클래스의 인스턴스이다
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스다 (Fruit으로부터 생성된 객체다)
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
Fruit.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
