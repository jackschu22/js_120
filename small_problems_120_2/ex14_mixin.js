class Person {
	breathe() {
		console.log('Breathing');
	}
}

class Runner extends Person {
	run() {
		console.log('Running');
	}
}

class Swimmer extends Person {
	swim() {
		console.log('Swimming');
	}
}

class Dancer extends Person {
	dance() {
		console.log('Dancing');
	}
}

const holdBreathMixin = {
	holdBreath() {
		console.log('...')
	}
}

Object.assign(Swimmer.prototype, holdBreathMixin);

let me = new Swimmer();
me.breathe();
me.swim();
me.holdBreath();