// Practice Problems: Dealing with Context Loss

// Problem 1:
// The code below should output "Christopher Turk is a Surgeon". Without running the 
// code, what will it output? If there is a difference between the actual and desired 
// output, explain the difference.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);		// => 'undefined undefined is a undefined.'

// On line 23, the function `logReturnVal` is invoked with the `turk` object's
// `getDescription` method passed as a standalone argument, stripped of its context.
// Within the body of `logReturnVal`, the return value of the `getDescription` method
// is saved to a new variable `returnVal` and logged. When `func` is invoked, `this`
// refers to the global object, whose `firstName`, `lastName`, and `occupation`
// properties are all undefined.

// ------------------------------------------------------------------------------------

// Problem 2:
// Modify the program from the previous problem so that logReturnVal accepts an 
// additional context argument. If you then run the program with turk as the context 
// argument, it should produce the desired output.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// ------------------------------------------------------------------------------------

// Problem 3:
// Suppose that we want to extract getDescription from turk, but we always want it to 
// execute with turk as its execution context. How would you modify your code to do that?

// let turkGetDescription = turk.getDescription.bind(turk);

// To extract `getDescription` from `turk` and permanently set its execution context
// (`this`) to `turk`, we can call the `bind` method on the function with `turk` 
// passed as an argument.

// ------------------------------------------------------------------------------------

// Problem 4:
// Consider the following code:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// Will this code produce the following output? Why or why not?
	// 	The Elder Scrolls: Arena
	// 	The Elder Scrolls: Daggerfall
	// 	The Elder Scrolls: Morrowind
	// 	The Elder Scrolls: Oblivion
	// 	The Elder Scrolls: Skyrim

// No, when a function is passed to another function as an argument, the function
// argument is invoked with the context set to the global object. `this.seriesTitle`
// is undefined.


// ------------------------------------------------------------------------------------

// Problem 5:
// Use let self = this; to ensure that TESgames.listGames uses TESGames as its context 
// and logs the proper output.

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//   	let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// ------------------------------------------------------------------------------------

// Problem 6:
// The forEach method provides an alternative way to supply the execution context for 
// the callback function. Modify the program from the previous problem to use that 
// technique to produce the proper output:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// The `forEach` method accepts an additional optional argument `thisArg` that allows
// you to explicity set the context for the callback function it executes for each
// element in its calling array.



// ------------------------------------------------------------------------------------

// Problem 7:
// Use an arrow function to achieve the same result:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// ------------------------------------------------------------------------------------

// Problem 8:
// Consider the following code:

// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// What will the value of foo.a be after this code runs?

// The value of `foo.a` will be 0.


// ------------------------------------------------------------------------------------

// Problem 9:
// Use one of the methods we learned in this lesson to invoke increment with an explicit 
// context such that foo.a gets incremented with each invocation of incrementA.

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);

