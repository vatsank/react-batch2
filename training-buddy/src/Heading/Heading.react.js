import React from 'react';
import logo from '../images/logo.jpg';


const Heading = (props) => {

    return (
        <div>
        <img src={logo} alt="Logo"/>
          <h1>{props.majHeading}</h1>
          <img src={'images/leftLogo.png'} 
                      alt={"One more logo"}/>

        </div>
    );

}

export default Heading;