// Displays polymorphism through duck typing -- the `compete` method is implemented
// differently for each child class of `OlympicAthlete`, but they all respond to the
// same method invocation (`.compete()`)

// the classes in this example are too "subclassable" -> come up with classes that
// are more unrelated

class Swimmer {
	compete() {
		console.log(`Swimming for ${this.country}!`);
	}
}

class Runner {
	compete() {
		console.log(`Running for ${this.country}!`);
	}
}

class LongJumper {
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