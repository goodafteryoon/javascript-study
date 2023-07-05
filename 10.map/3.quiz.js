// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

// const differentFruits = new Set(fruits);
// console.log(differentFruits); // 오답 사유 : Set 만든 거지 배열이 아님
// 답 1)
console.log([...new Set(fruits)]);
// 답 2)
function removeDuplication(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// const set3 = new Set();
// set1.forEach((item) => {
//   if (set2.has(item)) {
//     return set3.add(item);
//   }
// });

function findIntersection(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}

console.log(findIntersection(set1, set2));
