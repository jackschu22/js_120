class OlympicAthlete {
	constructor(country) {
		this.country = country;
	}

	compete() {
		console.log(`Let's go ${this.country}!`);
	}
}

class Swimmer extends OlympicAthlete {
	compete() {
		console.log(`Swimming for ${this.country}!`);
	}
}

class Runner extends OlympicAthlete {
	compete() {
		console.log(`Running for ${this.country}!`);
	}
}

class LongJumper extends OlympicAthlete {
	compete() {
		console.log(`Jumping for ${this.country}!`);
	}
}

let phelps = new Swimmer('USA');
phelps.compete();

let bolt = new Runner('Jamaica');
bolt.compete();

let jumpy = new LongJumper('Iceland');
jumpy.compete();

let someone = new OlympicAthlete('somewhere');
someone.compete();