// function* hello(value){
//     let num=2;
//     while(true){
//         if((num)==4){
//             yield num;
//             break;
//         }
//         num++;
//     }
// }
// const val=hello();
// console.log(val.next().value)
// console.log(val.next().value)
// console.log(val.next().value)

// function* hello() {
//   let num = 2;
//   while (true) {
//     if (num === 4) {
//       yield num;
//       break; // যখন 4 পাওয়া যাবে, তখন লুপটি বন্ধ হয়ে যাবে
//     }
//     num++;
//   }
// }
// const generator = hello();
// console.log(generator.next().value); // আউটপুট হবে: 4
// console.log(generator.next().value);

// let day= "monday";
// switch (day){
//   case "sunday":
//     console.log("This is sunday");
//     break;
//   case "monday":
//     console.log("Monday");
//     break;
//   case "friday":
//     console.log("friday");
//     break;
//   case "hello":
//     console.log("Hello");
//     break;
//   default:
//     console.log("amr soner bangla ami tomai valo basi")
// }

// const num = 1;

const num = 1;
function ami() {
  const num = 10;
  if (num == 10) {
    num = 20;
  }
  console.log(num);
}
// ami(); //show type error;

function tmi() {
  let num = 10;
  if (num == 10) {
    num = 20;
  }
  console.log(num);
}
tmi();
console.log(num)