// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// key1, key2는 원시타입이기 때문에 값이 똑같아서 동일한 키라고 간주할 수 있음
// const key1 = 'key';
// const key2 = 'key';
// 이름은 같지만 서로 다른 값이 생성된다 (이름은 똑같아도 서로다른 유일한 키를 만들때 심볼을 사용할 수 있다)
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2); // 검증 방법

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// 해당 심볼의 문자열을 알고 싶다면 Symbol.keyFor
console.log(Symbol.keyFor(k1));
// keyFor는 전역 레지스트리에 보관된 심볼에 한해서만 이름을 가져올 수 있음
// 일반 심볼은 문자열에 대한 정보가 숨겨져 있고, 레지스트리를 통해서 만든 심볼에 한해서만 문자열에 대한 정보를 가져올 수 있음
console.log(Symbol.keyFor(key1));

/**
 * 심볼을 어떻게 유용하게 사용?
 * Map에서 key를 이용할 때 문자열을 사용하면, 동일한 문자열이라면 값을 접근할 수 있는데
 * 한번 만든 심볼에 한해서만, 클래스 내부에서 혹은 내 모듈 내부에서 생성된 심볼에 이용해서만
 * map에 있는 값을 읽어와야할 때 보안을 조금 높여서 Symbol을 사용할 수 있다.
 * 문자열 보다는 조금 더 유일한 키를 만들어야 할 때 Symbol을 이용하면 유니크함 더 보장 가능.
 */

// k1은 위에서 만든 거 가져온 거, Symbol을 통해서라면 외부에서 접근 못함
const obj = { [k1]: 'hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(Symbol['key']); // undefined 왜? 위의 Symbol('key')와 다른 값이기 때문(접근 불가)
