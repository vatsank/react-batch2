import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Greeter from './Greeter/Greeter.react';
import ShowTrainers from './ShowTrainers/ShowTrainers.react';
function App() {
  return (
    <div className="App">
   <h1>React- Redux Example</h1>
 {/*    <Greeter></Greeter> */}
   <ShowTrainers></ShowTrainers>
    </div>
  );
}

export default App;
