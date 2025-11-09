//* Using class for making counter..

class createCounter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }

  print() {
    console.log(this.count);
  }
}

const counter1 = new createCounter(0);
const counter2 = new createCounter(5);

counter1.add(5);
counter2.add(10);

counter1.print();
counter2.print();
