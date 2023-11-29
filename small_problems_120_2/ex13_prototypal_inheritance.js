// Prototypal inheritance is the process by which objects in JavaScript are able to
// "inherit" or access properties they don't explicitly "own". Every object in 
// JavaScript has an internal `[[Prototype]]` property that points to its 
// prototype object. It has access to any methods or properties defined on this
// prototype object, which also has its own hidden `[[Prototype]]` property that
// points to its own prototype object, and so on. This chain ends when an object's
// `[[Prototype]]` property points to `Object.prototype`, whose own `[[Prototype]]`
// points to `null` and ends the chain of prototypal inheritance.

// Pseudo-Classical inheritance pattern has types (e.g., classes) that inherit from 
// other types. This way, all objects of a given type can share behaviors from the 
// same source.

// LS Answer:

// Both pseudo-classical and prototypal inheritance use prototypal delegation under 
// the hood.
// The simpler form of inheritance is prototypal inheritance or prototypal 
// delegation. We sometimes call this form of inheritance object inheritance since 
// it works with one object at a time. An object's internal [[Prototype]] property 
// points to another object, and the object can delegate method calls to that other 
// object. We've seen plenty of examples of prototypal inheritance in earlier 
// assignments. For instance:

let humanPrototype = {
  myName() { return this.name; },
  myAge() { return this.age; },
};

let personPrototype = Object.create(humanPrototype);
personPrototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.

// This pattern forms the basis of pseudo-classical inheritance, also called 
// constructor inheritance. When people talk about inheritance in the context of 
// JavaScript, they often mean this kind of inheritance. In pseudo-classical 
// inheritance, a constructor's prototype object (the object referenced by its 
// prototype property) inherits from another constructor's prototype. That is, a 
// sub-type inherits from a super-type.

// For instance, we can rewrite the prototypal inheritance example to use pseudo-
// classical inheritance:

function Human() {}
Human.prototype.myName = function() { return this.name; };
Human.prototype.myAge = function() { return this.age; };

function Person() {}
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;
Person.prototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = new Person();
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.

// Note that using class and the extends keyword is an alternative form of 
// pseudo-classical inheritance.

