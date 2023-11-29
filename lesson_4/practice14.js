// "use strict"

let customPrototype = { 
	a: "abc",
	b: 'is',
	c: 'not a number',
	
	describe: function() {
		console.log(this.a + ' ' + this.b + ' ' + this.c + '!');
	}
};

function PseudoTriangle(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

PseudoTriangle.prototype = customPrototype;

let newTri = new PseudoTriangle(1, 2, 3);
console.log(newTri.a);
newTri.describe();

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "triangle";
  }

  describe() {
  	console.log(`I have three sides of length: ${this.a}, ${this.b}, ${this.c}!`)
  }
}

Triangle.prototype = customPrototype;

let tri = new Triangle(1, 2, 3);
console.log(tri.a);
tri.describe();
