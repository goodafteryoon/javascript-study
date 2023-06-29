// function makeIterable(initialValue, maxValue, callback) {
//   return {
//     [Symbol.iterator]() {
//       let num = initialValue;
//       return {
//         next() {
//           return { value: callback(num), done: num > maxValue };
//         },
//       };
//     },
//   };
// }

/**
 * 제너레이터 함수 안의 코드가 수행되는 타이밍을 외부에서 제어할 수 있다 = 비동기가 가능하다
 * 제너레이터 함수 내부의 yield는, 외부에서 사용하는 사람이 next를 호출할 때까지 수행되지 않기 때문이다
 */
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
