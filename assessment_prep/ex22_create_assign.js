// The `Object.create(arg)` static method creates and returns a new object whose internal
// [[Prototype]] property points to `arg`. Thus, the newly created object will have access
// to all methods and properties defined on `arg` and in `arg`'s prototype chain

let prototypeObj = {
	a: 1,
	b: 2,
	c: 3,
}

let newObj = Object.create(prototypeObj);
console.log(Object.getPrototypeOf(newObj) === prototypeObj);
console.log(newObj.c);
console.log(newObj.hasOwnProperty('c'));

// The `Object.assign(arg1, arg2, ...)` static method copies all enumerable own properties
// from one or more source objects (`arg2`, ...) to a target object (`arg1`) and returns
// the modified target object.
// NOTE: methods defined on classes are NOT enumerable

Object.assign(newObj, prototypeObj);
console.log(newObj.hasOwnProperty('c'));

let newPrototypeObj = {
	a: 'x',
	b: 'y',
	c: 'z',
}

let qux = {};
Object.setPrototypeOf(qux, newPrototypeObj);
console.log(qux.c);
console.log(Object.getPrototypeOf(qux));