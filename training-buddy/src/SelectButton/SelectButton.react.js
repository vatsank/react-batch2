import React from 'react';



const SelectButton = (props) => {

    return (
        <fragment>
        <select name={props.items.name} onChange={props.action}>
         {
          props.items.optionsList.map((eachItem,index)=>{
              return(
               <option key={index} value={eachItem.optValue}>{eachItem.dispValue}</option>
              )
          })
        }
        </select>
        </fragment>
    );

}

export default SelectButton;