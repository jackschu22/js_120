// Practice Problems: Hard Binding Functions with Contexts

// Problem 1:
// What method can we use to bind a function permanently to a particular execution 
// context?

// We can call the `bind` method on a function and pass the execution context as an
// argument, specifing the object that the newly returned function will be permanently
// bound to.

// ------------------------------------------------------------------------------------

// Problem 2:
// What will the following code log to the console?

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);


// If `foo` were to be invoked as `foo()`, `this` would reference the global object.
// However, calling the `bind` method on the `foo` function and passing `obj` as an
// argument returns a new function, identical to `foo` as it was originally declared,
// but permanently bound to `obj`. Thus, the new function is not invoked and nothing is
// logged, although `this` within the new function references `obj`, whose `message` 
// property is assigned to the string 'JavaScript'.

// ------------------------------------------------------------------------------------

// Problem 3:
// What will the following code output?

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());   // => undefined + undefined => NaN
console.log(bar());   // => 5


// When `foo` is invoked, `this` references the global object, which doesn't have
// defined `a` and `b` properties, thus attempting to acces their values will return
// undefined. The variable `bar` references a function that is identical to `foo`, but
// permanently bound to `obj`. When `bar` is invoked, its execution context (`this`)
// is `obj`, which does have defined `a` and `b` properties. Thus, 5 is logged.

// ------------------------------------------------------------------------------------

// Problem 4:
// What will the code below log to the console?

let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();      // =>'JavaScript makes sense!'


// As `foo` is defined on lines 72 - 73, `this` references the global object. On line 76,
// the variable `bar` is initialized to a reference to the function returned by calling
// the `bind` method on `foo` with `positivity` passed as an argument. `bar` references
// a function that is identical to `foo`, but explicity bound to the object referenced
// by `positivity`. As a result, when the function referenced by `bar` is assigned to 
// the `logMessage` method of the `negativity` object and then invoked, `this.message`
// references the `message` property of `positivity`, not the `message` property of
// `negativity` and 'JavaScript makes sense!' is logged.

// ------------------------------------------------------------------------------------

// Problem 5:
// What will the code below output?

let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);     // => 'Amazebulous!'


// Setting execution context with `bind` is permanent. Attempting to use `call`, `apply`,
// or even `bind` again to set a new context will not change the value of `this` 
// within a method after `bind` has been used to set the context. Thus, in this example
// the `a` property of `obj`, not `otherObj` is accessed and logged.

// ------------------------------------------------------------------------------------

