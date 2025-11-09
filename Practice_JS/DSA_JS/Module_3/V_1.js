//?> StateLess
// const counter = (amount) => {
//   count = 0;
//   count += amount;

//   return count;
// };

// console.log(counter(5));
// console.log(counter(8));

//?> StateLess
const counter = {
  count: 0,

  add(amount) {
    this.count = this.count + amount;
  },

  printOut() {
    console.log(this.count);
  },
};

counter.add(5);
counter.add(15);

counter.printOut();
