import React from 'react';
import './App.css';
import ShowMessage from './ShowMessage';
import Message, {Product,Item} from './HandleMessage';
const App: React.FC = () => {

  const prod:Product ={
    productCode:101,
    productName:'TV'

  }
  return (
    <div className="App">
   <h1>React With Typescript</h1>
   <ShowMessage greeter={"Ramesh"} greeting={'Happy Birthday'}/>
   <Message product={prod}></Message>
   </div>
  );
}

export default App;
