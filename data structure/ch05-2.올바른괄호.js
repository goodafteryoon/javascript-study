function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.pop(1);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
