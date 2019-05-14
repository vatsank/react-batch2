import React from 'react';
import logo from '../images/logo.jpg';


const Heading = (props) => {

    return (
        <div className='row'>
        <div className='col-md-2'>
            <img src={logo} alt="Logo" className='logo'/>
        </div>
        <div className='col-md-8'>
        <h1>{props.majHeading}</h1>
           </div>
        <div className='col-md-2'>
        <img src={'images/leftLogo.png'} 
        alt={"One more logo"} className='logo's/>

        </div>
        
        </div>
    );

}

export default Heading;