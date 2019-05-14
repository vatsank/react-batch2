import React from 'react';

let value =50;
const over = (event) =>{

   const ele = event.target;
   ele.style.fontSize = '1.2em';

    value+=50;
   console.log(value);
}

const out = (event) =>{

    const ele = event.target;
    ele.style.fontSize = '';
    value-=10;
 }
const DataTable = (props) => {

    const [first] = props.data;

   if(!first){
    
       return ( <tr><td>Loading</td></tr>)   
   }

    return(
            
            props.data.map( (eachValue,idx)=>{

                return (
                <tr key={eachValue.id} onMouseOver={over} onMouseOut={out}>
                 <td>{eachValue.courseName}</td>
                 <td>{eachValue.duration}</td>
                 <td>{eachValue.startDate}</td>
                </tr>

                )
            })
        
    )
      

}

export default DataTable;