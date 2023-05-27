// 퀴즈 1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']
function replace(arr, from, to) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === from) {
      arr[i] = to;
    }
  }
  return arr;
}

const arr1 = ['🍌', '🍓', '🍇', '🍓'];
const arr2 = replace(arr1, '🍓', '🥝');
console.log(arr2);

// 퀴즈 2:
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트하는 함수 만들기
// input : ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output : 2
const arr3 = ['🍌', '🥝', '🍇', '🥝'];

function count(arr, item) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      sum++;
    }
  }
  return sum;
}

const answer = count(arr3, '🥝');
console.log(answer);

// 퀴즈 3: 배열1, 배열2 두개의 배열을 전달 받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

const arr4 = ['🍌', '🥝', '🍇'];
arr4.includes;
const arr5 = ['🍌', '🍓', '🍇', '🍓'];

function commonItem(arr1, arr2) {
  const commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonArr.push(arr1[i]);
    }
  }
  return commonArr;
}

const answer2 = commonItem(arr4, arr5);
console.log(answer2);
