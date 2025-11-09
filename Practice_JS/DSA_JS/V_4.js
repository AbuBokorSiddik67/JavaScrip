class Queue {
  constructor() {
    this.items = [];
  }

  enQueue1(value) {
    this.items.push(value);
  }

  deQueue1() {
    if (this.imEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  peek() {
    if (this.imEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  imEmpty() {
    return this.items.length === 0;
  }

  print() {
    return console.log("Start -> ", this.items.join(" -> "), " -> End");
  }
}

const Queue1 = new Queue();

Queue1.enQueue1(10);
Queue1.enQueue1(20);
Queue1.enQueue1(30);
Queue1.enQueue1(40);
Queue1.enQueue1(50);

Queue1.print();
console.log(Queue1.deQueue1());
Queue1.print();
