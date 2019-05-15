import React from 'react';
import './App.css';


import MyRoutes from './MyRoutes/MyRoutes.react';
import Heading from './Heading/Heading.react';
function App() {

  
  return (
    <div className="App">
    <div>
    <Heading majHeading={"Training Buddy"}></Heading>
    </div>
    <MyRoutes> </MyRoutes>
 
    </div>
  );
}

export default App;
