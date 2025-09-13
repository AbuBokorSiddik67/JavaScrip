// const obj = {
//   name: "Khondoker",
//   old: 14,
// };
// function hello() {
//   return console.log(`${this.name} \n ${this.old}`);
// };
// const result = hello.bind(obj);
// result()

// const obj={
//     name: "echo", old: 14
// }
// function world(a){
//     return console.log(`This is ${this.name} and ${this.old} and ${a}`)
// }
// world.call((obj), 5);

const obj={
    name: "echo", old: 14
}
function world(a){
    return console.log(`This is ${this.name} and ${this.old} and ${a}`)
}
world.apply((obj), [56]);