// Function
function add() {
  let a = 10,
    b = 20;
  var c = a + b;
  console.log(c);
  // block
  if (true) {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  }
}
add();
// Number
let num = 7;
// Bool
let value = true;
// String
let name = "Hello World";
// Object
let obj = { first: "Hello", second: "World" };
// Array
let arr = [num, value, name, obj];
// Date Object
let date = new Date("2022-03-25");
console.log(date);
