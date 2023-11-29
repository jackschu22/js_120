// Part 1:
// Implement a class called `Library` with properties `name` and `books`. Include 
// methods `addBook(book)`, `removeBook(book)`, and `listBooks()`.

class Book {
	constructor(title, author, year, content) {
		this.title = title;
		this.author = author;
		this.year = year;
		this.content = content;
	}

	info() {
		return `${this.title} by ${this.author} (${this.year})`
	}

	readBook() {
		return `${this.info()}:\n${this.content}`;
	}
}

let book1 = new Book('The Hunger Games', 'Suzanne Collins', 2010, 'text1');
let book2 = new Book('Catching Fire', 'Suzanne Collins', 2012, 'text2');
let book3 = new Book('Mockingjay', 'Suzanne Collins', 2013, 'text3');

class Library {
	constructor(name) {
		this.name = name;
		this.books = {};
	}

	addBook(book) {
		this.books[book.title] = book;
	}

	removeBook(book) {
		delete this.books[book.title];
	}

	listBooks() {
		console.log('Baldwin Public library has the following titles available:\n')
		for (let title in this.books) {
			let book = this.books[title];
			console.log(`- ${book.info()}`);
		}
	}

	readBook(title) {
		return `${this.books[title].info()}:\n${this.books[title].content}`;
	}
}

let baldwin = new Library('Baldwin');
baldwin.addBook(book1);
baldwin.addBook(book2);
baldwin.addBook(book3);
baldwin.listBooks();

book1.sayHi();
baldwin.sayHi();
console.log(baldwin.readBook(book2.title));
console.log(book2.readBook());
// Part 2:
// Implement a class `Book` and show how objects can be collaborators

