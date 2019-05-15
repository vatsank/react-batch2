import React from 'react';
import logo from '../images/logo.jpg';
import {Fragment} from 'react'
import NavBar from '../NavBar/NavBar.react';

const Heading = (props) => {

    return (
        <>
        <div className='col-md-2'>
            <img src={logo} alt="Logo" className='logo'/>
        </div>
        <div className='col-md-8'>
        <h1>{props.majHeading}</h1>
           </div>
        <div className='col-md-2'>
        <img src={'images/leftLogo.png'} 
        alt={"One more logo"} className='logo'/>

        </div>
        <div className='row'>
        <NavBar></NavBar>
        </div>
        </>
    );

}

export default Heading;