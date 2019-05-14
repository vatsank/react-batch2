import React from 'react';



const Footer = (props) => {

    return (
        <div >
         <p>{props.designer}</p>
         <p>Copy Right - {props.copyRight}</p>
        </div>
    );

}

export default Footer;