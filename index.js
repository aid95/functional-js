// ES6 이전의 순회
const arr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 이터러블/이터레이터 프로토콜 정의
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return {
          value: i++,
          done: 10 < i,
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iter = obj[Symbol.iterator]();
console.log(iter == iter[Symbol.iterator]());

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

console.log("--------");

// for ...of, 전개 연산자, 구조 분해, 나머지 연산자
for (const v of iter) {
  console.log(v);
}
const iter2 = obj[Symbol.iterator]();
console.log([...iter2]);
