"use strict"

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

// will throw error when accessing the property `a` on `undefined` instead of `global`
// due to strict mode