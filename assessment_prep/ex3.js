// Without running the code below, explain what is logged to the console and why.

let dogPrototype = {
  bark() {
    console.log(this.name + " says woof!")
  }
}

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, dogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight; 
}

Dog.prototype.walk = function() {
	console.log("Let's go!");
}

let zeke = new Dog('zeke', 'black lab', 5)

zeke.bark();
zeke.walk();