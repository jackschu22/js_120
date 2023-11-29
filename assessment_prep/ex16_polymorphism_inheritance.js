class Grandparent {
	constructor() {
		this.status = 'happy';
	}
	move() {
		console.log('Walking (slowly)')
	}
}

class Parent extends Grandparent {
	move() {
		console.log('Walking!')
	}
}

class Child extends Parent {
	constructor() {
		super();
		delete this.status;
	}
	move() {
		console.log('Running!')
	}
}

let allan = new Child();
allan.move();
console.log(allan.name);

let mark = new Parent();
mark.move();

let gram = new Grandparent();
gram.move()