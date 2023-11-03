// 스택보다 메모리 적게 사용해서 풀 수 있음
function solution(s) {
  let count = 0;

  for (const e of s) {
    if (e === '(') {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }

  return count === 0;
}
