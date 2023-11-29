// Arrow Functions/Bind

let contextObj = {
	foo: 1,
	bar: 2,
	qux: 3,

	regMethod: function() {
		console.log(this.foo + this.bar + this.qux);
	},

	arrowMethod: () => {
		console.log(this.foo + this.bar + this.qux);
	},

	nestedArrowMethod: function() {
		let arrowFunc = () => {
			console.log(this.foo + this.bar + this.qux);
		}
		arrowFunc();
	}
}

let func = function() {
	console.log(this.foo + this.bar + this.qux);
}

let arrowFunc = () => {
	console.log(this.foo + this.bar + this.qux);
}

contextObj.regMethod();
contextObj.arrowMethod();
contextObj.nestedArrowMethod();
console.log('');

func();
arrowFunc();
console.log('');

let boundFunc = func.bind(contextObj);
let boundArrowFunc = arrowFunc.bind(contextObj);
let boundArrowFunc2 = contextObj.nestedArrowMethod.bind(this);
boundFunc();
boundArrowFunc();
boundArrowFunc2();

// can't change arrow function context
// arrow function context depends on WHERE/HOW it was defined
