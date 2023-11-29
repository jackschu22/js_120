let makeChild = function(name, age) {
	this.name = name;
	this.age = age;
}

let makeChildArrow = (name, age) => {
	this.name = name;
	this.age = age;
}

let Child = makeChildArrow;

let kid = new Child('tim', 18);
console.log(kid.name);