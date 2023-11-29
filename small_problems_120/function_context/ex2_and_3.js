// JS120 Small Problems: Function Context Problems 2 & 3:

// The method franchise.allMovies is supposed to return the following array:

	// [
	//   'How to Train Your Dragon 1',
	//   'How to Train Your Dragon 2',
	//   'How to Train Your Dragon 3'
	// ]

// Explain why this method will not return the desired object. Try fixing this 
// problem by taking advantage of JavaScript lexical scoping rules.

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

// When a function is passed to another function as an argument, as is the case of the
// callback function passed to the `map` method on line 17, the function is stripped
// of its execution context. Thus, attempting to access the `name` property of `this`
// on line 18 will actually access the `name` property of the global object, which is
// `undefined`.

// We can preserve the intended execution context in four ways:

	// (1) Store the execution context in a new variable within the method, but outside 
	// of the callback function's body, so that the outer context can then be accessed 
	// within the body of the callback function via the new variable. This approach
	// employs JavaScript's lexical scoping rules.

	let franchise1 = {
  	name: 'How to Train Your Dragon',
 		allMovies: function() {
 			let self = this;
  		return [1, 2, 3].map(function(number) {
      	return self.name + ' ' + number;
   		});
  	},
	};

	console.log(franchise1.allMovies());

	// (2) Call the `bind` method on the callback function passed to `map` (outside of
	// the curly braces) and set the execution context to `this`.

	let franchise2 = {
  	name: 'How to Train Your Dragon',
 		allMovies: function() {
  		return [1, 2, 3].map(function(number) {
      	return this.name + ' ' + number;
   		}.bind(this));
  	},
	};

	console.log(franchise2.allMovies());

	// (3) Use an arrow function to define the callback function passed to `map`. Using
	// arrow function syntax will set the execution context within the callback function's 
	// body to that of the surrounding object.

	let franchise3 = {
		name: 'How to Train Your Dragon',
		allMovies: function() {
			return [1, 2, 3].map(number => {
	    	return this.name + ' ' + number;
	 		});
		},
	};

	console.log(franchise3.allMovies());

	// (4) Pass `this` as the optional `thisArg` parameter to the `map` method, effectively
	// binding the function's context to `this` (in this case, `franchise4`).

	let franchise4 = {
		name: 'How to Train Your Dragon',
		allMovies: function() {
			return [1, 2, 3].map(function(number) {
	    	return this.name + ' ' + number;
	 		}, this);
		},
	};

	console.log(franchise4.allMovies());
