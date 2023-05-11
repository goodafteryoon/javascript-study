// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

// 클래스 class
class Fruit {
  // 클래스 레벨의 프로퍼티
  static MAX_FRUIT = 4;

  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    // 생성자에는 우리가 객체를 만들 때 필요한 데이터를 외부로부터 받아올 수 있도록 인자로 지정해준다
    this.name = name; // 링크해 주는 작업 this의 name은 이 name
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 (만드는 방식 : 함수 앞에 static 붙이기)
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    // 이유 : 클래스 자체로는 아무 것도 채워지지 않은 템플릿 상태이기 때문
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);

// 인스턴스 레벨의 프로퍼티와 메서드는 클래스를 통해서 호출할 수 없다.
// 이유 : 클래스 자체는 데이터가 채워져있지 않은 템플릿이기 때문에 이 자체만으로 호출 불가능
console.log(Fruit.name);
Fruit.display();
Fruit.makeRandomFruit();

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

// 추후에 빌트인오브젝트를 배우는 내용
// Math : 수학에 관련된 함수들, api를 제공하는 클래스, 여기에도 static 함수가 있다.
Math.pow(); // Math 클래스를 이용해 오브젝트를 만들지 않아도 유틸리티 함수를 호출할 수 있다.
Number.isFinite(1);
// static을 이용하면 우리가 별도의 object를 만들지 않고도 비슷한 내용의 함수들을 묶어서 관리할 수 있다는 장점이 있다.
