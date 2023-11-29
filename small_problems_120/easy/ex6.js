// JS120 Small Problems: Easy Problem 6:

/*
Refactor these classes so they all use a common superclass, and inherit behavior as needed.
*/

class Vehicle {
	constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}

let taco = new Truck('Toyota', 'Tacoma', 'a lot');

console.log(taco.getWheels());
console.log(taco.info());




