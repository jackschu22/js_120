// JS120 Small Problems: Object Creation Patterns -- Problem 1:

// Implement an ancestors method that returns the prototype chain (ancestors) of 
// a calling object as an array of object names. Here's an example output:

Object.prototype.ancestors = function ancestors() {
	let chain = [];
	let ancestor = Object.getPrototypeOf(this);

	while (true)

	return chain;
}

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']