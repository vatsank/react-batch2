import React from 'react';
import {connect} from 'react-redux';

const ShowProduct = (props) => {

    return (
        <div >
          <p>Quantity {props.count}</p>

          <button onClick={props.increment}>+</button>
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
            dispatch({type:'ADD_ITEM',value:1});
        },
        decrement: () => {
            dispatch({type:'SUB_ITEM',value:1});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct)
