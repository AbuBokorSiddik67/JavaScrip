// Addition
// let a = 1,
//   b = 2,
//   c = 3,
//   d;
// d = a + b; // 3

true + 1; // 2
false + false; // 0

1n + 2n; // 3n --this is a bigInt number

"Hello" + " " + "Worlds"; // Hello World

let z = 25,
  x,
  y;
x = y = z; //x,y and z all are 25

const result =/(a+)(b+)(c+)/.exec("aaabbbccc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c);

// Async & Await Data......
function getDelayedData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data is ready!");
    }, 2000);
  });
}

async function fetchData() {
  console.log("Fetching data...");
  const data = await getDelayedData(); // এখানে 2 সেকেন্ড অপেক্ষা করবে
  console.log(data); // "Data is ready!"
  console.log("Done fetching data.");
}
fetchData();

let n1, n2;
const res = ((n1 = 1), (n2 = 2), n1 + n2);
console.log(res);