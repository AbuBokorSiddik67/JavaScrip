// // Addition
// // let a = 1,
// //   b = 2,
// //   c = 3,
// //   d;
// // d = a + b; // 3

// true + 1; // 2
// false + false; // 0

// 1n + 2n; // 3n --this is a bigInt number

// "Hello" + " " + "Worlds"; // Hello World

// let z = 25,
//   x,
//   y;
// x = y = z; //x,y and z all are 25

// const result =/(a+)(b+)(c+)/.exec("aaabbbccc");
// let a = "",
//   b = "",
//   c = "";
// [, a, b, c] = result;
// console.log(a, b, c);

// // Async & Await Data......
// function getDelayedData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data is ready!");
//     }, 2000);
//   });
// }

// async function fetchData() {
//   console.log("Fetching data...");
//   const data = await getDelayedData(); // এখানে 2 সেকেন্ড অপেক্ষা করবে
//   console.log(data); // "Data is ready!"
//   console.log("Done fetching data.");
// }
// fetchData();

// let n1, n2;
// const res = ((n1 = 1), (n2 = 2), n1 + n2);
// console.log(res);

// let hello = 50;
// delete hello;
// console.log(hello);

function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. Start a timer, log after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

// sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// // wait above to finish
// setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// // wait again
// setTimeout(concurrent1, 7000); // same as sequentialWait

// // wait again
// setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"

function num1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am number one ");
    }, 3000);
  });
}

async function call() {
  console.log("calling...")
  const numOne = await num1();
  console.log(numOne);
  console.log("finised")
}
call();

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

// asyncCall();
