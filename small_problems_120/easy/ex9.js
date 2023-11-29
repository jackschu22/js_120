// JS120 Small Problems: Easy Problem 9:

// Modify the code so that the test cases pass. You are only allowed to write 
// one new method to do this.

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

const walkMixIn = {
	walk() {
		return this.name + ' ' + this.gait() + ' forward';
	}
}

Object.assign(Person.prototype, walkMixIn);
Object.assign(Cat.prototype, walkMixIn);
Object.assign(Cheetah.prototype, walkMixIn);

// TEST CASES
let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

