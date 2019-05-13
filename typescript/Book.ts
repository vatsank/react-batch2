export default class Book{

    public bookNumber:number;
    public bookName:string;
    public author:string;
    public ratePerUnit:number;

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

export const authorList = ['Siva',"Pavan","Shashi",'Magesh',"Mahi"];

