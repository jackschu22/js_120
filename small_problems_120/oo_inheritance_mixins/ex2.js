// JS120 Small Problems: OO Inheritance & Mixins: Problem 2

// Change the following code so that creating a new Truck automatically invokes 
// startEngine.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
  	super(year);
  	this.startEngine();
  }
  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);		// Ready to go!
console.log(truck.year); 			// 2003