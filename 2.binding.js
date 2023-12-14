/**
 * this 바인딩
 * 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
 * this는 항상 자신의 인스턴스 자체를 가리킴!
 * 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
 */

// 하지만 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉 this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍 : ${this.name}`);
  };
}

const cat = new Cat('냥냥');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName; // cat의 printName을 dog.printName에 할당해줌
dog.printName(); // cat의 printName 함수가 호출되는데 다만, this.name은 호출한 caller가 dog이므로 dog의 this로 변환됨
cat.printName();

/**
 * 당연히 dog의 메소드로 출력되었으니 dog의 this.name이 나오는게 당연한거 아닌가? 했는데
 * 자바라면 저렇게 dog.printName = cat.prinName으로 할당을 해도 cat의 함수를 할당한 것이기 때문에
 * cat의 이름이 나온다. 정적으로 this가 정해져 있으니까
 * 근데 JavaScript에선 동적으로 누가 호출하냐에 따라서 this가 동적으로 변경된다.
 */

// 동적으로 바인딩되는게 왜 문제일까?

/**
 * 동적 바인딩의 문제를 볼 수 있는 함수 예시
 */
function printOnMonior(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName(); // 함수를 호출하는 사람이 여기선 없음 (printName을 호출하는 객체가 없음)
}

printOnMonior(cat.printName); // 출력 결과 : 모니터를 준비하고! 전달된 콜백 실행 /n 고양이의 이름을 출력한다옹 : undefined

// undefined가 나온 이유 : object.printName()이 아니기 때문, caller가 없기 때문
// C#이나 자바였으면 this가 한 번 결정이 되면, 가령 고양이로 영원히 바인딩 되지만, JS에선 바인딩이 정적으로 이뤄지지 않고
// 누가 호출하냐에 따라서 this가 동적으로 변화된다.
