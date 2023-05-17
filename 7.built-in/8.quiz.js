// 퀴즈 !
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// H
// e
// l
// l
// ..
// !
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1', 'user2', 'user3', 'user4']
const idArray = ids.split(', ');

// 3. 1초에 한 번씩 시계를 (날짜 포함) 출력해보자

function clock() {
  const now = new Date();
  const fullDate = {
    year: now.getFullYear(),
    month: now.getMonth(),
    date: now.getDate(),
    hour: now.getHours(),
    day: now.getDay(),
    min: now.getMinutes(),
    sec: now.getSeconds(),
  };

  return console.log(
    `${fullDate.year}년 ${fullDate.month}월 ${fullDate.date}일 ${fullDate.hour}시 ${fullDate.min}분 ${fullDate.sec}초`
  );
}

clock();
setInterval(clock, 1000);

// 또는 앨리 정답
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);
