"use strict";
class Book {
    constructor(bookNumber, bookName, author, ratePerUnit) {
        this.bookNumber = bookNumber;
        this.bookName = bookName;
        this.author = author;
        this.ratePerUnit = ratePerUnit;
    }
    toString() {
        return `${this.bookName},${this.author}`;
    }
}
let es6 = new Book(101, "Mastering ES6", 'ramesh', 450.00);
console.log(es6.toString());
