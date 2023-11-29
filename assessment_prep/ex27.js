let obj = {};

console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

let func = function() {};

console.log(Object.getPrototypeOf(func) === Function.prototype); // true

console.log(obj.hasOwnProperty('hasOwnProperty')); // false
console.log(obj.hasOwnProperty); // [Function: hasOwnProperty]

// let obj = {
//   a: "a"
// }

let objB = Object.create(obj);

function NewObj() {
  this.a = "a";
};

let funcObj = new NewObj();

console.log(NewObj);
