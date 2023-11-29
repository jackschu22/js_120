let objA = {
  name: 'objA',

  func() {
    let arrowFunc = () => console.log(this.name);
    return arrowFunc;
  },
};

objA.func()(); // logs:


let objB = {
  name: 'objB',

  func: objA.func(),
};

objB.func(); // logs:


let objC = {
  name: 'objC',

  func: objA.func,
};

objC.func()(); // logs: