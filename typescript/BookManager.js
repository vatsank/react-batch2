"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
const Book_2 = require("./Book");
function printPublisher(publisher) {
    console.log(publisher.phoneNumber);
    console.log(publisher.publisherName);
}
function spreadArray(a, b, c, d, e) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}
function spreadLiteral(book, authorList) {
    const { bookNumber, bookName, author } = book;
    // const bookNumber = book.bookNumber;
    console.log(bookNumber);
    console.log(bookName);
    console.log(author);
    const [bestAuthor, ...others] = authorList;
    console.log(bestAuthor);
    console.log(others);
    const [, , third, ...restAll] = authorList;
    console.log(third);
    console.log(restAll);
    // const bestAuthor = authorList[0];
}
let es6 = new Book_1.default(101, "Mastering ES6", 'ramesh', 450.00);
// console.log(es6.toString());
// console.log(authorList);
// spreadLiteral(es6,authorList);
spreadArray(...Book_2.authorList);
printPublisher({ publisherName: 'Samba', phoneNumber: 9494949 });
