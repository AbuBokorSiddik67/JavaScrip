function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const first = outer(10);
console.log(first(2));

// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => x = val;
console.log(getX());
console.log(setX(6));