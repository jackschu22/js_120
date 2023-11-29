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
console.log( new A() ); 
console.log( new B() ); 
console.log( new C() ); 
console.log( new D() ); 
console.log( new E() ); 
console.log( new F() ); 
console.log( new G() ); 
console.log( new H() );

// A {}
// B {}
// C {}
// D {}
// Object { foo: 'bar'}
// ['foo', 'bar']
// A {}
// Number {}