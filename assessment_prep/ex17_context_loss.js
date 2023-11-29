function printHello(func) {
  func();
}

let shirt = {
  a : 'Hello ',
  b : 'World',
  foo : function (){
  	let self = this;
    printHello(function() {
      console.log(self.a + self.b)
      })
  }
}

shirt.foo();