import React from 'react';

import {connect} from 'react-redux';

export const Greeter = (props) => {

    return (
        <div >
          <h4>{props.txtmsg}</h4>
          <div>
          <button onClick={props.birthday}>BirthDay</button>
          <button onClick={props.weddingday}>WeddingDay</button>
          </div>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        txtmsg: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        birthday: () => {
            dispatch({type:'BIRTHDAY',text:'Happy Birthday'});
            
        },
        weddingday:()=>{
            dispatch({type:'WEDDINGDAY',text:'Happy Anniversary'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Greeter)
