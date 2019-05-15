import React from 'react';

const over = (event) =>{

   const ele = event.target;
   ele.style.fontSize = '1.2em';

}

const out = (event) =>{

    const ele = event.target;
    ele.style.fontSize = '';
 }
const DataTable = (props) => {

    const [first] = props.data;


    console.log(props.onemore);

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
                 <td><button onClick={e =>props.action(eachValue)} className='btn btn-danger'>Delete</button></td>
                 <td><button onClick={e =>props.onemore(eachValue)} className='btn btn-info'>Edit</button></td>
                 
                </tr>

                )
            })
        
    )
      

}

export default DataTable;