// 자바처럼 this를 정적으로 결정시켜서 조금 더 예상 가능한 this를 간직하고 싶다면?
// 1. bind 함수 api 사용하기 2. arrow 함수를 사용해서 함수 선언하기
function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용 : arrow 함수는 렉시컬 환경에서의 this를 기억하기 때문
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
  };
  // 1.bind 함수를 이용해서 수동적으로 바인딩 해주기
  // bint 함수에 this를 전달하면 새롭게 바운드한 꽁꽁 묶어진 새로운 함수가 반환됨
  // printName을 어디에 전달하든지, 누가 호출하냐와 상관없이 계속 cat 인스턴스와 바인딩되어 출력될 것
  // this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍 : ${this.name}`);
  };
}

const cat = new Cat('냥냥'); // 객체가 만들어지는 시점
const dog = new Dog('멍멍'); // 객체가 만들어지는 시점 => bind나 arrow 함수를 이용하면 이 시점에 객체와 함수가 영원히 바인딩 될 수 있음
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonior(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName();
}

printOnMonior(cat.printName);
