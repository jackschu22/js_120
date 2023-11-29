// JS120 Small Problems: Function Context Problem 1:

// Read the following code carefully. What do you think is logged on line 12?
// Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// Within the `person` object, the `fullName` property attempts to access the object's
// `firstName` and `lastName` properties with `this`. However, outside of function
// definitions, `this` will reference the global object, which doesn't have defined
// `firstName` and `lastName` properties. Thus, `undefined + undefined` will evaluate
// to `NaN`, which will be logged.