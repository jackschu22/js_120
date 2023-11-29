// Practice Problems: Object Orientation

// Problem 1:
// Suppose we want to use code to keep track of products in our hardware store's 
// inventory. A first stab might look something like this:

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// Given what we've learned about object orientation in the previous assignment, how 
// could we use objects to organize these two groups of data?

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// }

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// }

// ------------------------------------------------------------------------------------

// Problem 2:
// Create a function that takes one of our product objects as an argument, and sets 
// the object's price to a non-negative number of our choosing, passed in as a second 
// argument. If the new price is negative, alert the user that the new price is invalid.

// function setPrice(product, price) {
//   if (price < 0) {
//     console.log('Invalid Price');
//   } else {
//     product.price = price;
//   }
// }

// setPrice(scissors, 11);
// console.log(scissors.price);

// ------------------------------------------------------------------------------------

// Problem 3:
// It would also be useful to have the ability to output descriptions of our product 
// objects. Implement such a function following the example below:

// function describeProduct(product) {
//   console.log('Name: ' + product.name);
//   console.log('ID: ' + product.id);
//   console.log('Price: $' + product.price);
//   console.log('Stock: ' + product.id);
// }

// describeProduct(scissors);

// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8

// ------------------------------------------------------------------------------------

// Problem 4:
// Rewrite the code such that the functions describeProduct and setProductPrice become 
// methods describe and setPrice on both our scissors and drill objects.

let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,

  setPrice(newPrice) {
    if (newPrice < 0) {
    console.log('Invalid Price');
    } else {
    this.price = newPrice;
    }
  },

  describe() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },
}

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,

  setPrice(newPrice) {
    if (newPrice < 0) {
    console.log('Invalid Price');
    } else {
    this.price = newPrice;
    }
  },

  describe() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },
}

// ------------------------------------------------------------------------------------

// Problem 5:
// Create a new function createProduct which takes arguments for id, name, stock, and 
// price and also adds setPrice and describe to the new object.

function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Invalid Price');
      } else {
        this.price = newPrice;
      }
    },

    describe() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  }
}

let jeans = createProduct(2, 'Jeans', 12, 20);

// ------------------------------------------------------------------------------------

// Problem 6:
// Finally, remove the scissors and drill object-literal object creations from the code, 
// and recreate these objects using our createProduct factory function, along with two 
// or three more products of your choosing.

let laptop = createProduct(3, 'Laptop', 100, 1000);
laptop.setPrice.call(drill, 5);
drill.describe();












