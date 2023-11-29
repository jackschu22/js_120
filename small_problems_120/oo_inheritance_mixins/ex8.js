// JS120 Small Problems: OO Basics -- Inheritance and Mixins Problem 8:

/*
Using the following code, create a class named Vehicle that, upon instantiation, 
assigns the passed in argument to year property. Both Truck and Car should inherit 
from Vehicle.
*/

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
	constructor(year) {
		this.year = year;
	}
}

class Truck extends Vehicle {
  constructor(year) {
  	super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {
	constructor(year) {
		super(year);
	}
}

let truck = new Truck(2002);
console.log(truck.year);		// 2002
console.log(truck.tow());		// 'I can tow a trailer!'

let car = new Car(2015);
console.log(car.year);			// 2015