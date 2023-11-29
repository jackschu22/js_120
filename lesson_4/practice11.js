function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

function Square(size) {
  this.length = size;
  this.width = size;
}

Object.assign(Square.prototype, Rectangle.prototype);

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}

let rec = new Rectangle(5,7);
let sqr = new Square(5);
console.log(rec.getArea());     			  // => 35
console.log(sqr.getArea());                   // => 25
console.log(sqr.toString());                  // => "[Square 5 x 5]"
console.log(sqr.constructor === Square);      // => true
console.log(rec.constructor === Square);      // => true
console.log(rec instanceof Rectangle);		  // => true
console.log(sqr instanceof Square);		      // => true
console.log(Function.prototype.isPrototypeOf(Square));		// => true
console.log(Function.prototype.isPrototypeOf(Rectangle));   // => true
