import React from 'react';
import { fetchAllTrainers } from '../restStore';
import {connect} from 'react-redux';


const ShowTrainers = (props) => {

    if(!props.loadStatus){

        return(
            <div >
             <button onClick={props.get}>Show Trainers</button>
        </div>
        )
    } else {
    return (
        props.dataList.map((value)=>{

            return(
            
            <div key={value.id} className="card col-md-4">
              <div className='card-header'>{value.trainerName}</div>
              <div className='card-body'>
              <div className='card-title'>{value.skillSet}</div>
              </div>
              <div className='card-footer'>{value.rating}</div>
              
            </div>
            )
          
        })
       
    )
    }

}

const mapStateToProps = (state) => {
    console.log(state.loaded);
    console.log(state);
    return {
        loadStatus: state.loaded,
        dataList:state.list
    }
}
const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get: () => {
            dispatch(fetchAllTrainers())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowTrainers);
