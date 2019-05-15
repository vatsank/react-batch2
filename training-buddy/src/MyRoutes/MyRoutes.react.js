import React from 'react';
import {Route,Switch} from 'react-router-dom';
import TrainingDashBoard from '../TrainingDashBoard/TrainingDashBoard.react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard.react';

const MyRoutes = () => {

    return (
        <div >
     
         <Switch>
          <Route exact path='/' component={AdminDashBoard}/>
          <Route path='/admin' component={TrainingDashBoard}/>
          
         </Switch>
       
        </div>
    );

}

export default MyRoutes;