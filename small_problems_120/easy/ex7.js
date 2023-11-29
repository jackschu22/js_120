// JS120 Small Problems: Easy Problem 7:

/*
What will the following code log?
*/

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());		// "ByeBye" (invoking static method on `Something`)
console.log(thing.dupData());			// "HelloHello" (invoking instance method on `thing`)