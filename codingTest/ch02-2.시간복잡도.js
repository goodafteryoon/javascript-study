/**
 * 빅오표기법
 * Big-O notation
 * 시간복잡도를 나타내기 위한 방법 중 하나
 * ( 팩토리얼 시간 등을 넣지 않은 이유는 특정한 상황을 제외하고선 가급적 사용하면 ❌기 때문 )
 * ( n^3 이상 갈 일 거의 없음 )
 */

// O(n) 선형 시간 : 입력받은 크기 만큼 루프를 도는 것
for (let i = 0; i < 1024; i += 1) {
  // ...
}

// O(log n) 로그 시간 : 입력받은 n에 log를 씌운 만큼만 루프를 돌게 됨
for (let i = 1; i <= 1024; i *= 2) {
  // ...
  console.log(i);
}

/** EX) n = 1024인 경우엔, 선형시간은 1024번 루프를 돌지만,
 *  로그 시간은 단 10번만 루프를 돌면 됨
 */

// O(n log n) 선형 지수 시간 : 선형 시간에 지수 시간을 곱한 시간
for (let i = 0; i <= n; i += 1) {
  for (let j = 1; j <= n; j *= 2) {
    // ...
  }
}

// O(n^2) 이차 시간 : n의 제곱만큼만 루프를 돈다
for (let i = 0; i <= n; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    // ...
  }
}

// 빅오표기법의 4가지 법칙

/**
 * 계수 법칙
 * 상수 k가 0보다 클 때 f(n) = O(g(n))이면 kf(n) = O(g(n))이다.
 * n이 무한에 가까울 수룩 k의 크기는 의미가 없기 때문이다.
 */

// 두 루프는 같은 O(n)으로 표기된다.
for (let i = 0; i < n; i += 1) {
  // ...
}
for (let i = 0; i < n * 5; i += 1) {
  // ...
}

/**
 * 합의 법칙
 * f(n) = O(h(n))이고 g(n) = O(p(n))이면 f(n) + g(n) = O(h(n)) + O(p(n))이다.
 * 빅오는 더해질 수 있다.
 */

// 두 루프를 함쳐 O(n + m)으로 표기할 수 있다.
// 계수 법칙에 의해 5는 사라진다.
for (let i = 0; i < n; i += 1) {
  // ...
}
for (let i = 0; i < m * 5; i += 1) {
  // ...
}

/**
 * 곱의 법칙
 * f(n) = O(h(n))이고 g(n) = O(p(n))이면 f(n) * g(n) = O(h(n)) * O(p(n))이다.
 * 빅오는 곱해질 수 있다.
 * 이차 시간, 선형 로그 시간은 곱의 법칙을 통해 나온 것
 */

// 두 루프를 곱해 O(n^2)으로 표기할 수 있다.
// 계수 법칙에 의해 5는 사라진다.
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n * 5; j += 1) {
    // ...
  }
}

/**
 * 다항 법칙
 * f(n)이 k차 다항식이면 f(n)은 O(n^k)이다.
 */

// 다음 루프는 O(n^3)으로 표기할 수 있다.
for (let i = 0; i < n * n * n; i += 1) {
  // ...
}

/**
 * 2가지만 기억하기
 * 1. 상수항은 무시
 * 2. 가장 큰 항 외엔 무시
 */

// 1. 상수항은 무시
// 계수 법칙에 의해 계수는 무시된다.
// 그리하여 O(n + m)으로 표기된다.
for (let i = 0; i < n * 6; i += 1) {
  // ...
}
for (let i = 0; i < m * 3; i += 1) {
  // ...
}

// 2. 가장 큰 항 외엔 무시
// O(n^2 + n)이지만 작은 항은 무시하여
// O(n^2)으로만 표기해도 된다.
for (let i = 0; i < n; i += 1) {
  // ...
}
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    // ...
  }
}

// 성능 측정 방법
const start = new Date().getTime();
// ...
const end = new Date().getTime();
console.log(end - start);
