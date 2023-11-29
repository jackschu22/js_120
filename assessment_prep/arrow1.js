let obj = {
	a: 1,

	speak: function() {
		console.log(this.a);
	}
}

let arrowObj = {
	a: 2,

	speak: () => console.log(this.a),
}

obj.speak();
arrowObj.speak();

console.log(obj.speak.__proto__ === Function.prototype);
console.log(obj.speak.prototype);
console.log(arrowObj.speak.__proto__ === Function.prototype);
console.log(arrowObj.speak.prototype);