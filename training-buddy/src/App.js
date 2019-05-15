import React from 'react';
import './App.css';
import profilePicture from './images/profile.png';
import AdminDashBoard from './AdminDashBoard/AdminDashBoard.react';
import Profile from './Profile/Profile.react';
import ShowCourse from './ShowCourse/ShowCourse.react';
import TrainingDashBoard from './TrainingDashBoard/TrainingDashBoard.react';
import MyRoutes from './MyRoutes/MyRoutes.react';
import NavBar from './NavBar/NavBar.react';
function App() {

  const user ={
    userName:'Ramesh',
    email:'ram@abc.com'
  }
  return (
    <div className="App">
   
    <MyRoutes></MyRoutes>

    {/* 
      <AdminDashBoard></AdminDashBoard>
      <Profile imgRef={profilePicture} 
      points={5} level={3} user={user}></Profile>

      <ShowCourse msg={'I am a prop'}></ShowCourse>*/}

     {/*  <TrainingDashBoard></TrainingDashBoard> */}
     
    </div>
  );
}

export default App;
