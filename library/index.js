"use strict";
class Book {
    constructor(title, author, status = "Available") {
        this.title = title;
        this.author = author;
        this.status = status;
    }
    borrow() {
        if (this.status === "Available") {
            this.status = "Borrowed";
            console.log(`You have borrowed ${this.title} by ${this.author}.`);
        }
        else {
            console.log(`${this.title} is currently not available.`);
        }
    }
    returnBook() {
        if (this.status === "Borrowed") {
            this.status = "Available";
            console.log(`You have returned ${this.title} by ${this.author}.`);
        }
        else {
            console.log(`${this.title} is already available.`);
        }
    }
    toString() {
        return `${this.title} by ${this.author} - ${this.status}`;
    }
}
class Member {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        book.borrow();
        this.borrowedBooks.push(book);
    }
    returnBook(book) {
        book.returnBook();
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
    toString() {
        return this.name;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    listBooks() {
        this.books.forEach((book) => console.log(book.toString()));
    }
    listMembers() {
        this.members.forEach((member) => console.log(member.toString()));
    }
}
// Usage
const library = new Library();
const book1 = new Book("The Enchated Forest", "Emilia Blank");
const book2 = new Book("Ths tails of teh nine Tailed Fox", "Inno Guyotaru");
const member1 = new Member("Library Assistant");
const member2 = new Member("Library Manager");
library.addBook(book1);
library.addBook(book2);
library.addMember(member1);
library.listBooks();
member1.borrowBook(book1);
library.listBooks();
member1.returnBook(book1);
library.listBooks();
