// Without running the code, explain what is logged to the console and why.

function func(phrase, name) {
	this.name = name;

  return class {
    sayHi() {
    	console.log(phrase);
    }
  };
}

class User extends func('Hello', 'Clare') {};

let you = new User();

you.sayHi();
console.log(you.name);