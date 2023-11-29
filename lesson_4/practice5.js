// Without running the code, explain what is logged to the console and why

// Part 1
function Person(name) {
	this.name = name;
}

Person.prototype.greet = function() {
	console.log(`Hello, my name is ${this.name}`);
}

let todd = Person('todd');

console.log(todd);
console.log(global.name);

// Part 2
let newTodd = new Person('todd');

console.log(newTodd.hasOwnProperty('name'));
console.log(newTodd.hasOwnProperty('greet'));
console.log(newTodd.constructor)
console.log(Object.getPrototypeOf(newTodd));

// Part 3
function Actor(name, city) {
	Person.call(this, name);
	this.city = city;
}

console.log(Object.getPrototypeOf(Actor.prototype) === Object.prototype);

Actor.prototype = Object.create(Person.prototype);

Actor.prototype.act = function() {
	console.log("I'm acting!");
}

let alice = new Actor('alice', 'NYC');

console.log(alice.constructor);

// Part 4
Actor.prototype.constructor = Actor;

console.log(Object.getOwnPropertyNames(alice).includes('constructor'));
