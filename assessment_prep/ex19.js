let func = function() {
	return 5;
}

let arrowFunc = () => 5;

console.log(typeof func, typeof arrowFunc);

console.log(func.prototype);
console.log(func.__proto__ === Function.prototype);

console.log(arrowFunc.prototype);
console.log(arrowFunc.__proto__ === Function.prototype);

// most functions have a `prototype` property, but regular functions'
// `prototype` property will point to an empty object

// arrow functions do not have a prototype `property`