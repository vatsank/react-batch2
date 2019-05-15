import React from 'react'

export interface Greet{

    greeter:string;greeting:string; 
}
const ShowMessage = (props:Greet) => {
    return (
        <div>
            <h4>{props.greeting}</h4>
            <p>from : {props.greeter}</p>
        </div>
    )
}

export default ShowMessage