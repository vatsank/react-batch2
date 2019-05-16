import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

const increment = (event) => {
    store.dispatch({type:'ADD_ITEM',value:parseInt(event.target.value,10)});
}
  
const ShowProduct = (props) => {

    return (
        <div >
        <h2>{props.users[0].name}</h2>
          <p>Quantity {props.count}</p>
         <input name='qty' type='text' onBlur={increment}></input>
         
          <button onClick={increment}>+</button>
          <button onClick={props.decrement}>-</button>
          
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        count: state.itemCount,
        users:state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch({type:'ADD_ITEM'});
        },
        decrement: () => {
            dispatch({type:'SUB_ITEM'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct)
