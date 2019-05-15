const state ={
   
    shoppingCart: {
      itemIds:[101,102,104,105]
    },
    products: {
      itemsById:[{id:"101","id":"105"}]
      }
  }

//   const result  =state.shoppingCart.itemIds.map(id => 
//     state.products.itemsById[id]);

const result  =state.shoppingCart.itemIds.map(id => 
      console.log(id));

      console.log(result);

      console.log(state.products.itemsById);