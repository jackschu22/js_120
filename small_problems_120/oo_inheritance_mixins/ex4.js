// JS120 Small Problems: OO Basics -- Inheritance and Mixins Problem 4:

/*
Given the following code, modify the Truck class so that the code shown below 
displays the indicated output. Your code should make use of the startEngine method 
in the Vehicle class.
*/

class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle{
  startEngine(speed) {
  	this.speed = speed;
  	return super.startEngine() + ` Drive ${this.speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));	// 	Ready to go! Drive fast, please!

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));	// 	Ready to go! Drive slow, please!
