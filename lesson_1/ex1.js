/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Aunts aren't Gentlemen
  Author: PG Wodehouse

Behavior:
  Get Description
*/

// Problem 1:
// Create three objects that represent the three books shown above. The method for the 
// "Get Description" behavior should return a string like the following:
// => "Me Talk Pretty One Day was written by David Sedaris."

let obj1 = {
	title: 'Mythos',
	author: 'Stephen Fry',

	getDescription: function() {
		return `${this.title} was written by ${this.author}.`;
	}
}

let obj2 = {
	title: 'Me Talk Pretty One Day',
	author: 'David Sedaris',

	getDescription: function() {
		return `${this.title} was written by ${this.author}.`;
	}
}

let obj3 = {
	title: "Aunts aren't Gentlemen",
	author: 'PG Wodehouse',

	getDescription: function() {
		return `${this.title} was written by ${this.author}.`;
	}
}

// -----------------------------------------------------------------------------------

// Problem 2:
// Think about the code you wrote for problem #1. Is there any unnecessary code? Does it 
// have duplication?

// Yes, the objects all have the same properties and behavior (the `getDescription` method)
// and represent the same `type` of thing: a book. Although, the values that correspond
// to the books' `title` and `author` properties vary.

// -----------------------------------------------------------------------------------

// Problem 3:
// Given our observations about the code so far, implement a factory function for our 
// book objects that we can use with the following code:

function createBook(title, author, read = false) {
	return {
		title,     // same as `title: title,`
    	author,    // same as `author: author,`
    	read,

		getDescription: function() {
			return `${this.title} was written by ${this.author}. I ${this.read ? 'have' : "haven't"} read it.`;
		},

		readBook: function() {
			this.read = true;
		}
	};
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

book1.getDescription();  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// -----------------------------------------------------------------------------------

// Problem 4:
// We now want to track which books we have and haven't read. Update the factory 
// function so that it returns a book object that includes a property read that has an 
// initial value of false.

// The `read` property has been initialized to false in the `createBook` function above.

console.log(book1.read, book2.read, book3.read); // false false false (3rd will print true due to changing function in Problem 5)

// -----------------------------------------------------------------------------------

// Problem 5:
// Suppose that we want to add a book that we've already read. Modify the factory 
// function to use an optional read parameter with a default value of false.

// Completed above.

console.log(book1.read, book2.read, book3.read); // false false true

// -----------------------------------------------------------------------------------

// Problem 6:
// Let's add a method, readBook, that marks a book object as read by setting the 
// read property to true:

// Completed above.

book2.readBook();
console.log(book1.read, book2.read, book3.read); // false true true

// -----------------------------------------------------------------------------------

// Problem 7:
// Finally, let's update the getDescription function to reflect the read state directly.

// Completed above.

console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.


















