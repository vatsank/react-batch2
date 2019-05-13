"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Book;
exports.authorList = ['Siva', "Pavan", "Shashi", 'Magesh', "Mahi"];
