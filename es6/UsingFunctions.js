
var Invoice = require('./Invoice');


 function calculateTotal(
     defa =new Invoice(107,"Rakesh",14500),...invoices){

        if(invoices.length ===0){
        invoices =[defa];
    }

     let total = 0;
     
     invoices.forEach( (eachInvoice)=>{
         
        total += eachInvoice.amount;
     });
    
     return total;
 }

 var ram = new Invoice(101,"Ramesh",4500);
 var shyam = new Invoice(102,"Shyam",5500);
 var siva = new Invoice(103,"Siva",6500);




 let totalOf2 = calculateTotal(undefined,ram,shyam);

 console.log(totalOf2);

 let totalOf3 = calculateTotal(undefined,ram,shyam,siva);

 console.log(totalOf3);

 let total = calculateTotal();

 console.log(total);

 let target =[{desig:'manager'}]; 
 let source2 = {minAge:45};
  let source = {maxAge:65};

 const result = Object.assign(target,source2,source);

 console.log(result);