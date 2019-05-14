import React from 'react';
import './App.css';
import profilePicture from './images/profile.png';
import AdminDashBoard from './AdminDashBoard/AdminDashBoard.react';
import Profile from './Profile/Profile.react';
import ShowCourse from './ShowCourse/ShowCourse.react';
function App() {

  const user ={
    userName:'Ramesh',
    email:'ram@abc.com'
  }
  return (
    <div className="App">
   
      <AdminDashBoard></AdminDashBoard>
      <Profile imgRef={profilePicture} 
      points={5} level={3} user={user}></Profile>

      <ShowCourse></ShowCourse>
    </div>
  );
}

export default App;
