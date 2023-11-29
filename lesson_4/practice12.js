// Complete the `Cat` class, which should have a custom `speak` method that logs
// the output below

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  
}

let cat = new Cat('Mr Whiskers');
console.log(cat.speak())  // 'Mr Whiskers makes a noise, Mr Whiskers goes meow.'