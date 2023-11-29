let a = {
  foo: 1,
  bar: 2,
};

let b = {};
Object.setPrototypeOf(b, a);

console.log(b.foo);                           // => 1
console.log(b);                               // => {}
console.log(Object.getPrototypeOf(b));        // => { foo: 1, bar: 2 }
console.log(a.isPrototypeOf(b));              // => true
console.log(b.isPrototypeOf(a));              // => false
console.log(Object.getOwnPropertyNames(a));   // => [ 'foo', 'bar' ]
console.log(Object.getOwnPropertyNames(b));   // => []