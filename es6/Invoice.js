class Invoice{

    constructor(invoiceNumber,customerName,amount){

       this.invoiceNumber = invoiceNumber;
       this.customerName = customerName;
       this.amount = amount;
    }

    toString(){

        // template literal ``-Backtick symbol
        // Observe the calculation
        return `${this.invoiceNumber},${this.customerName},
                    ${this.amount}, 
                discount=${this.amount *.10}`;
    }
}

module.exports = Invoice;