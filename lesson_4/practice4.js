// What is logged to the console?

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let todd = new Person('todd');

console.log(todd.hasOwnProperty('greet'));
console.log(Person.hasOwnProperty('greet'));
console.log(Object.getPrototypeOf(Person) === Function.prototype);

class Actor extends Person {
	act() {
		console.log("I'm acting!");
	}
}

let alice = new Actor('alice');

console.log(alice.hasOwnProperty('name'));
console.log(alice.hasOwnProperty('act'));
console.log(alice.hasOwnProperty('greet'));
console.log(alice.constructor.name);


