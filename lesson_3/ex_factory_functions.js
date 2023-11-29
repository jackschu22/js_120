// Practice Problems: Factory Functions

// Problem 1:
// What are two disadvantages of working with factory functions?

// (1) Using factory functions to create objects can lead to needless duplication of
// properties and methods that may not necessarily apply to every object.
// (2) After creating an object with a factory function, there is no way to tell which
// factory function was used to create the object.
	// Why can't you just add a property to objects that stores the name of the factory
	// function that was used to create them?

// ------------------------------------------------------------------------------------

// Problem 2:
// Rewrite the following code to use object-literal syntax to generate the returned 
// object:

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
// 	return {
// 		propA: 10,
// 		propB: 20,
// 	}
// }

// ------------------------------------------------------------------------------------

// Problem 3:
// In this problem and the remaining problems, we'll build a simple invoice processing 
// program. To get you started, here's the code to process a single invoice:

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// To process multiple invoices, we need a factory method that we can use to create 
// invoices. The requirements for the factory function are as follows:

// It returns an invoice object, with phone and internet properties, and a total method.
// The default value for the phone service is 3000, and the internet service is 5500 
// (in cents, of course!).
// The function takes an object argument whose attributes override the default values.

// Your function should work with the following code:

// function createInvoice(services = {}) {
//   let phoneCharge = services.phone;
//   if (phoneCharge === undefined) {
//     phoneCharge = 3000;
//   }

//   let internetCharge = services.internet;
//   if (internetCharge === undefined) {
//     internetCharge = 5500;
//   }

//   return {
//     phone: phoneCharge,
//     internet: internetCharge,

//     total: function() {
//       return this.phone + this.internet;
//     }
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];

// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// ------------------------------------------------------------------------------------

// Problem 4:
// Now we can build a factory function to create payments. The function can take an 
// object argument in one of 3 forms:
  // Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
  // Payment for both services, e.g., { internet: 2000, phone: 1000 }.
  // Payment with just an amount property, e.g., { amount: 2000 }.

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  }

  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// ------------------------------------------------------------------------------------

// Problem 5:
// Update the createInvoice function so that it can add payment(s) to invoices. Use the 
// following code as a guideline:

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0



