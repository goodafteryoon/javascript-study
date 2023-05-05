// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

const printNumber = (a) => console.log(a);
const doubleNumber = (a) => console.log(a * 2);

// 고차 함수 iterate
function iterate(max, acticn) {
  for (i = 0; i <= max; i++) {
    acticn(i);
  }
}

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));
iterate(3, printNumber);
iterate(3, doubleNumber);

// setTimeout이라는 고차 함수에 의해서 time이 끝났을 때, setTimeout 함수가 이 콜백함수가 호출된다.
setTimeout(() => {
  console.log('3초 뒤 이 함수가 실행됩니다.');
}, 3000);
