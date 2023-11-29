let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
let c = {};

console.log(Object.getPrototypeOf(c));