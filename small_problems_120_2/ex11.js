// Without running the code, explain what is logged to the console.

let obj = {
  0: 1, 
  1: 2, 
  2: 3,
}

console.log(Array.from(Object.assign(obj, {length: 3})));
console.log(Array.from(Object.assign(obj, {length: 2})));
console.log(Array.from(Object.assign(obj, {length: 5})));