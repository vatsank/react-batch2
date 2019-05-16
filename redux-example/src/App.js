import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Greeter from './Greeter/Greeter.react';
import ShowTrainers from './ShowTrainers/ShowTrainers.react';
import AddTrainer from './AddTrainer/AddTrainer.react';
import axios from 'axios'
const postToServer = (values)=>{
 console.log(values);

 axios.post('http://localhost:4000/trainers',values).then(res =>console.log('one trainer Added'));
}
function App() {
  return (
    <div className="App">
   <h1>React- Redux Example</h1>
   
  <Greeter></Greeter> 
   <ShowTrainers></ShowTrainers>
   <AddTrainer onSubmit={postToServer}></AddTrainer>
    </div>
  );
}

export default App;
