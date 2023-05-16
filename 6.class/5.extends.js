// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }
// // 클래스마다 공통된 행동이나 속성이 있다면, 상속을 사용할 수 있다.
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  // 자식 클래스에서 constructor를 정의하는 순간 Animal에 필요한 것도 받아와야한다
  constructor(color, ownerName) {
    super(color); // super 내가 상속하고 있는 부모를 가리킴 (부모 생성자), 부모의 생성자 함수 호출한 것
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }
  // 오버라이딩 overriding : 자식 클래스에서 부모 클래스에 있는 것을 덮어 씌운다
  eat() {
    super.eat(); // super를 이용하면 부모의 함수를 호출하는 것도 가능하다, super라는 것 자체가 상속하고 있는 부모를 가리키고 있기 때문
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이');
console.log(dog);
dog.sleep();
dog.play();
dog.eat();

// MDN class: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
