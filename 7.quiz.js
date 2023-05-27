// 퀴즈 1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

// 삼항 연산자 ver
function replace(arr, from, to) {
  return arr.map((item) => (item === from ? to : item));
}

// if문 ver (하지만 고차함수에서 if문 쓰는 건 최대한 미루기)
function replace(arr, from, to) {
  return arr.map((item) => {
    if (item === from) {
      return to;
    } else {
      return item;
    }
  });
}

const arr1 = ['🍌', '🍓', '🍇', '🍓'];
const quiz1 = replace(arr1, '🍓', '🥝');
console.log(quiz1);

// 퀴즈 2:
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트하는 함수 만들기
// input : ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output : 2
function count(array, item) {
  return array.filter((value) => value === item).length;
  // return array.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   } else {
  //     return count;
  //   }
  //}, 0);
}

const arr3 = ['🍌', '🥝', '🍇', '🥝'];
console.log(count(arr3, '🥝'));

// 퀴즈 3: 배열1, 배열2 두개의 배열을 전달 받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

const arr4 = ['🍌', '🥝', '🍇'];
arr4.includes;
const arr5 = ['🍌', '🍓', '🍇', '🍓'];

function commonItem(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const answer2 = commonItem(arr4, arr5);
console.log('d', answer2);

// 퀴즈 4
// 5 이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
let nums2 = [];

const result2 = nums
  .filter((num) => num > 5) // [16, 25, 34, 21]
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log('d', result2);

// 내가 쓴 1차 답
// nums2 = nums.filter((item) => item > 5);

// sum = nums2.reduce((sum, item) => {
//   sum += item;
//   return sum;
// }, 0);
// const result = sum / nums2.length;
// console.log('quiz4 : ', result);
