// Describe how this code snippet executes line-by-line in both strict and sloppy mode:

// "use strict"

function Child(age) {
  this.age = age;
};

Child.prototype.setAge = function(newAge) {
  age = newAge;
}

let leigh = new Child(5);
leigh.setAge(6);
console.log(leigh.age);