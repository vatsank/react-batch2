import React from 'react';



const Poll = (props) => {

    return (
        <div >
        <p>Interested </p><span><h1>{props.interested}</h1></span>

        <button onClick={props.action}>{props.text}</button>
       

        </div>
    );

}

export default Poll;