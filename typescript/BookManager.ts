import Book from './Book';
import {authorList} from './Book';

function spreadArray(a:Book,b:Book,c:Book,d:Book,e:Book):void{

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    
}
function spreadLiteral(book:Book,authorList:string[]):void{
 
    const {bookNumber,bookName,author}=book;
// const bookNumber = book.bookNumber;

    console.log(bookNumber);
    console.log(bookName);
    console.log(author);

    const [bestAuthor,...others] = authorList;
    console.log(bestAuthor);
    console.log(others);

    const [,,third,...restAll] = authorList

    console.log(third);
    console.log(restAll)



    // const bestAuthor = authorList[0];

}

let es6 = new Book(101, "Mastering ES6", 'ramesh', 450.00);
// console.log(es6.toString());
// console.log(authorList);

// spreadLiteral(es6,authorList);

spreadArray(...authorList);