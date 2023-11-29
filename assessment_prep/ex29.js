function func() {};

class Dog {
	bark() {
		console.log('bark')
	}
}

let puppy = new Dog();

console.log(puppy.hasOwnProperty('bark')); // false
puppy.bark(); // 'bark'
console.log(Dog.prototype.hasOwnProperty('bark')); // true
console.log(Object.getPrototypeOf(puppy) === Dog.prototype); // true