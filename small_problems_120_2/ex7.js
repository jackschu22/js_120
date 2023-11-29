// Using the following code, create a towMixin mixin that contains a method named 
// tow that returns I can tow a trailer! when invoked. Include the mixin in the 
// Truck class.

class Vehicle {
	constructor(year) {
		this.year = year;
	}
}

class Truck extends Vehicle {
	constructor(year) {
		super(year);
		Object.assign(this.__proto__, towMixin)
	}
}

class Car extends Vehicle {}

const towMixin = {
	tow() {
		return "I can tow a trailer!";
	}
}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);