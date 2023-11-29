// JS120 Small Problems: OO Classes: Problem 8

// Using the following code, add an instance method named rename that renames 
// kitty when invoked.

class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(newName) {
  	this.name = newName;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe