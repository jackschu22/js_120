// Using the following code, create a mixin named walkMixin that contains a 
// method named walk. This method should return Let's go for a walk! when 
// invoked. Include walkMixin in Cat and invoke walk on kitty.

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

const walkMixin = {
	walk: function() {
		return "Let's go for a walk!"
	}
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());		// Hello! My name is Sophie!
console.log(kitty.walk());		// Let's go for a walk!