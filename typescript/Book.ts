class Book{

    private bookNumber:number;
    private bookName:string;
    private author:string;
    private ratePerUnit:number;

    constructor(bookNumber:number,bookName:string,author:string,ratePerUnit:number){

        this.bookNumber = bookNumber;
        this.bookName = bookName;
        this.author = author;
        this.ratePerUnit = ratePerUnit;
    }

    toString():string{

        return `${this.bookName},${this.author}`;
    }
}

let es6 =new Book(101,"Mastering ES6",'ramesh',450.00);

console.log(es6.toString());