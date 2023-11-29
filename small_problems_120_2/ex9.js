// Without running the code, explain what is logged to the console and why.

let str1 = new String('abc');
let str2 = new str1.constructor('xyz');
let str3 = String(123)

console.log(typeof str1);
console.log(str1.hasOwnProperty('constructor'));
console.log(str1 instanceof String);
console.log(str1 instanceof Object);
console.log(str1 instanceof Function);
console.log(typeof str2);
console.log(typeof str3);