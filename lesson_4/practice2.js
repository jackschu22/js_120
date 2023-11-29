class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);         // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor);          // [class Rectangle]
console.log(rec.constructor.name);     // Rectangle
console.log(rec.getArea());            // 50
console.log(rec.hasOwnProperty('getArea'));							// false
console.log(rec.__proto__.hasOwnProperty('getArea'));				// true
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);	// true
console.log(Rectangle.prototype.hasOwnProperty('getArea'));			// true