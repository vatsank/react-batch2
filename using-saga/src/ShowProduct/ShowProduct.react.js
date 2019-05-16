import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

const increment = () => {
    store.dispatch({type:'ADD_ITEM',value:5});
}
  
const ShowProduct = (props) => {

    return (
        <div >
          <p>Quantity {props.count}</p>

          <button onClick={increment}>+</button>
          <button onClick={props.decrement}>-</button>
          
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        count: state.itemCount
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
