// Without running the code below, identify the bug and explain what is logged to the console.

function Blu(foo, bar) {
  this.foo = foo;
  this.bar = bar;

  someMethod = function() {
    console.log('wow');
  }
}

function Gab(foo, bar) {
  Blu.call(this, foo, bar);
}

Gab.prototype = Object.create(Blu.prototype);
Gab.prototype.constructor = Gab;

Gab.prototype.anotherMethod = function() {
  console.log('hum');
}

let ark = new Gab('hello', ' world!');

console.log(ark.foo + ark.bar);   // ???
ark.anotherMethod();              // ???
ark.someMethod();                 // ???