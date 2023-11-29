// Without running it, explain what happens when the code below executes

let obj = Object.create(null);
obj.a = 'foo';

console.log(obj instanceof Object);
console.log(obj.hasOwnProperty('a'));