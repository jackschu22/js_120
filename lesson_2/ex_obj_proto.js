// Practice Problems: Object Prototypes

// Problem 1:
// What will the following code log to the console? Explain why it logs that value. 
// Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

// This code will log 2. The `Object.create()` method will return a new object, using
// the object referenced by `qux` as a prototype for the new object, whose reference is
// assigned to `baz`. The object referenced by `baz` doesn't have its own `foo` property,
// but JavaScript searches the prototype chain for a `foo` property and finds the property
// in `qux`.

// ------------------------------------------------------------------------------------

// Problem 2:
// What will the following code log to the console? Explain why it logs that value. 
// Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

// This code will log 3. When a new object is created and assigned to `baz`, with `qux`
// as the prototype, it does not initially have its own `foo` property. The `foo`
// property of `baz` is then assigned a value of 2, which does not affect the value
// of the `foo` property in `baz`'s protoype `qux`.

// ------------------------------------------------------------------------------------

// Problem 3:
// What will the following code log to the console? Explain why it logs that value. 
// Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

// This code will log 4. As in Problem 1, `baz` does not have its own `foo` property,
// but JavaScript searches the prototype chain for a `foo` property and finds the
// updated value of `foo` in the `baz` object's prototype, `qux`.

// ------------------------------------------------------------------------------------

// Problem 4:
// As we saw in problem 2, the following code creates a new property in the baz object 
// instead of assigning the property in the prototype object.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

// Write a function that searches the prototype chain of an object for a given property 
// and assigns it a new value. If the property does not exist in any of the prototype 
// objects, the function should do nothing. The following code should work as shown:

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// Algorithm:
// while object exists
	// if obj has own property, reassign value and break
	// reassign obj to prototype of obj

function assignProperty(obj, property, value) {
	while (obj !== null) {
		if (obj.hasOwnProperty(property)) {
			obj[property] = value;
			break;
		}

		obj = Object.getPrototypeOf(obj);
	}
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

// ------------------------------------------------------------------------------------

// Problem 5:
// Consider the following two loops:

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

// If foo is an arbitrary object, will these loops always log the same results to the 
// console? Explain why they do or do not. If they don't always log the same information, 
// show an example of when the results differ.

// No, using a `for...in` loop to access the properties of `foo` will access ALL of the
// object's enumerable properties, including those in its prototype chain, while the
// second loop only iterates over the object's "own" properties.

// ------------------------------------------------------------------------------------

// Problem 6:
// How do you create an object that doesn't have a prototype? How can you determine 
// whether an object has a prototype?

// You can create an object without a prototype by using Object.create with a null 
// argument:

let bareObject = Object.create(null);

// If you need to check whether an object has a prototype, you can test the value 
// produced by Object.getPrototypeOf:

if (Object.getPrototypeOf(obj)) {
  // obj has a prototype
} else {
  // obj does not have a prototype
}

// ------------------------------------------------------------------------------------
