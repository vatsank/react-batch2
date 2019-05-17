import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Greeter from './Greeter/Greeter.react';
import ShowTrainers from './ShowTrainers/ShowTrainers.react';
import AddTrainer from './AddTrainer/AddTrainer.react';
import  {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import axios from 'axios'




function App() {

  const postToServer = (values)=>{
    console.log(values);
   
    axios.post('http://localhost:4000/trainers',values).then(
      res =>setInfo('one Trainer Added'));
   }

  const [info, setInfo] = useState('Add Values in The Form');

  return (
    <div className="App">
   <h1>React- Redux Example</h1>
   
   <BrowserRouter>
   <ul>
   <li> <Link to='/home'>Greeting Example</Link>
   </li>
   <li> <Link to='/add'>Add Trainer</Link>
   </li>
   <li>
   <Link to='/show'>Show Trainers</Link>
   
   </li>
   
    </ul>
    <Switch>
    <Route path='/home' component={Greeter}/>
    <Route path='/show' component={ShowTrainers}/>
    <Route path='/add'
      render={ () =><AddTrainer onSubmit={postToServer} info={info}></AddTrainer>}/>

    </Switch>
   </BrowserRouter>

   { /* <AddTrainer onSubmit={postToServer}></AddTrainer>*/}

    </div>
  );
}

export default App;
