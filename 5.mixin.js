// 오브젝트는 단 하나의 proptotype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다!
// Mixin!
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

/**
 * 자바스크립트 클래스는 뭐다?
 * 클래스처럼 보이지만 사실 내부적으로는 prototype을 베이스로 하고 있음
 * 자바스크립트는 본질상 프로토타입을 베이스로 한 프로그래밍 언어이기 때문에
 * 클래스를 사용해도 실질적으로는 프로토타입을 사용한다고 볼 수 있다.
 * 그 증거로 Tiger를 Class라고 선언을 했지만
 * Tiger의 prototype에 play, sleep을 섞을 수 있다.
 */
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    // 내부적으론 생성자 함수를 통해 프로토타입으로 만들어짐
    super();
    this.name = name;
  }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();

// Mixin을 사용하면 기존에 하나의 프로토타입만을 상속할 수 있는 단점을 커버할 수 있다.
// 여러개의 객체를 다중 상속해서 사용할 수 있다.
