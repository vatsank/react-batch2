import React from 'react';



const Poll = (props) => {

    return (
        <div >
   
        <button onClick={props.action}>{props.text}</button>
       

        </div>
    );

}

export default Poll;