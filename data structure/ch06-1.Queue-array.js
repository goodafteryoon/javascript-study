/**
 * Array로 구현하는 큐
 */

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  /**
   * 큐에 새로운 요소를 추가한다.
   * @param {*} value enqueue할 value를 매개변수로 전달
   */
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  /**
   * 큐에서 요소를 삭제하고, 삭제된 요소를 반환한다.
   * @returns {*} dequeued 된 value가 반환된다.
   */
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  /**
   * front 인덱스에 해당하는 값을 반환
   * @returns {*}
   */
  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.queue); // [ <1 empty item>, 2, 4, 8 ]
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4
