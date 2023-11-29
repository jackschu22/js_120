// JS120 Small Problems: Objects Problem 1:

// What is the problem with the code? Why isn't it producing the expected results?
// Instead of producing the expected output, it results in an error.

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');				// Good Morning Victor

// The factory function `createGreeter` is meant to return an object with initialized
// properties, however the body of the `greet` method references variables that are out
// of scope. All references to object properties within the `greet` method must be
// prepended with `this.`.