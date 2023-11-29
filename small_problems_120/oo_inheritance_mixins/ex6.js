// JS120 Small Problems: OO Basics -- Inheritance and Mixins Problem 6:

/*
Correct the following program so it will work properly. Just make the smallest 
possible change to ensure that objects of Maltese and Fish class have access to 
the swim method.
*/

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
	constructor(name) {
		super(name);
	}
}

Object.assign(Fish.prototype, swimMixin);
Object.assign(Maltese.prototype, swimMixin);

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());		// Buddy is swimming.
console.log(fish1.swim());		// Nemo is swimming.
