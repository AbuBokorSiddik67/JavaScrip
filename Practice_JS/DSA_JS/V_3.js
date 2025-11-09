class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.imEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    if (this.imEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  imEmpty() {
    return this.items.length === 0;
  }

  print() {
    return console.log(this.items.slice().reverse().join(" <-- "));
  }
}

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);

stack1.print();

console.log(stack1.peek());

console.log(stack1.pop());

console.log(stack1.peek());

stack1.print();
