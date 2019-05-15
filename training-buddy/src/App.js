import React from 'react';
import './App.css';

import AdminDashBoard from './AdminDashBoard/AdminDashBoard.react';
import Profile from './Profile/Profile.react';
import ShowCourse from './ShowCourse/ShowCourse.react';
import TrainingDashBoard from './TrainingDashBoard/TrainingDashBoard.react';
import MyRoutes from './MyRoutes/MyRoutes.react';
import NavBar from './NavBar/NavBar.react';
import Heading from './Heading/Heading.react';
function App() {

  
  return (
    <div className="App">
    <div>
    <Heading majHeading={"Training Buddy"}></Heading>
    </div>
    <MyRoutes></MyRoutes>

    {/* 
      <AdminDashBoard></AdminDashBoard>
     

      <ShowCourse msg={'I am a prop'}></ShowCourse>*/}

     {/*  <TrainingDashBoard></TrainingDashBoard> */}
     
    </div>
  );
}

export default App;
