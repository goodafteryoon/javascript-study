// Array로 구현하는 Stack
const stack = [];

// push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

// pop
stack.pop();
console.log(stack);

// Get Top
console.log(stack[stack.length - 1]);

// Linked List로 구현하는 Stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stack2.pop());
stack2.push(4);
console.log(stack2.pop());
console.log(stack2.pop());
