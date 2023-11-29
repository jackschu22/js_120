// Providing A Return Value In A JavaScript Constructor:

// Undefined return value. 
function A() { };

// Reference to instance. 
function B() { 
	return this; 
} 
// String return value. 
function C() { 
	return "string"; 
} 
// Number retun value. 
function D() { 
	return 123; 
} 
// New object return value. 
function E() { 
	return {foo: "bar"}; 
} 
// New array return value. 
function F() { 
	return ["foo", "bar"]; 
} 
// New instantiation return value. 
function G() { 
	return new A(); 
} 
// Native "object" return value -- this one would be the same 
// for Number, Boolean, and String. 
function H() { 
	return new Number(123); 
} 

// -------------------------------------------------- // 

// See what reference we have as a result of instantiation. 
console.log( new A() ); 	// A {}
console.log( new B() ); 	// B {}
console.log( new C() ); 	// C {}
console.log( new D() ); 	// D {}
console.log( new E() ); 	// Object { foo: 'bar'}
console.log( new F() ); 	// ['foo', 'bar']
console.log( new G() ); 	// A {}
console.log( new H() );		// Number {}

// The basic rule is that if you return an object, that is 
// used. Otherwise, the constructed object is.

