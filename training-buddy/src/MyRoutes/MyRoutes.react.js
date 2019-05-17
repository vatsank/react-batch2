import React from 'react';
import {Route,Switch} from 'react-router-dom';
import TrainingDashBoard from '../TrainingDashBoard/TrainingDashBoard.react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard.react';
import Profile from '../Profile/Profile.react';
import profilePicture from '../images/profile.png';
import LoginPage from '../LoginPage/LoginPage.react';
const MyRoutes = () => {

    const user ={
        userName:'Ramesh',
        email:'ram@abc.com'
      }
    return (
        <div >
     
         <Switch>
       
          <Route exact path='/' component={LoginPage}/>
          <Route path='/training' component={TrainingDashBoard}/>
          <Route exact path='/admin' component={AdminDashBoard}/>

          <Route path='/profile' render={()=>{ return <Profile imgRef={profilePicture} 
          points={5} level={3} user={user}></Profile>}}/>
          
          
         </Switch>
       
        </div>
    );

}

export default MyRoutes;