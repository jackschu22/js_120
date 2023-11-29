class Runner {
	run() {
		console.log('running');
	}

	compete() {
		this.run();
	}
}

class Swimmer {
	swim() {
		console.log('swim');
	}

	compete() {
		this.swim();
	}
}

class Skiier {
	ski() {
		console.log('ski');
	}

	compete() {
		this.ski();
	}
}

let athletes = [new Runner(), new Swimmer(), new Skiier()];

athletes.forEach(athlete => athlete.compete());
// running
// swim
// ski