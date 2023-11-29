// Practice Problems: Implicit and Explicit Execution Context

// Problem 1:
// What will the following code output? Try to determine the results without running 
// the code.

function func() {
  return this;
}

let context = func();

console.log(context);  // => global object

// `func` is invoked as a function, so the implicit context for `func` is the global
// object, a reference to which is returned and assigned to `context`.

// ------------------------------------------------------------------------------------

// Problem 2:
// What will the following code output? Explain the difference, if any, between this 
// output and that of problem 1.

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);  // => obj

// `func` is invoked as a method, so the implicit context for `func` is the calling
// object `obj`, a reference to which is returned and assigned to `context`.

// ------------------------------------------------------------------------------------

// Problem 3:
// What will the following code output?

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();  // => 'Hello from the global scope!'

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();  // => 'Hello from the function scope!'

// When `deliverMessage` is invoked as a function, `this` references the global object,
// which has `message` as a global property/variable. When `deliverMessage` is instead
// invoked as a method of `foo`, the execution context changes to reference the calling
// object `foo`.


// ------------------------------------------------------------------------------------

// Problem 4:
// What built-in methods have we learned about that we can use to specify a function's 
// execution context explicitly?

// The `call` and `apply` methods allow us to specify a function's execution context
// explicitly.

// ------------------------------------------------------------------------------------

// Problem 5:
// Take a look at the following code snippet. Use call to invoke the add method but 
// with foo as execution context. What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo)); // => 1 + 2 => 3

// Using `foo` as execution context when invoking the `add` method of `bar` binds
// `this` to `foo`. Thus, the `add` method uses `foo.a` and `foo.b` to compute
// the return value, not `bar.a` and `bar.b`.