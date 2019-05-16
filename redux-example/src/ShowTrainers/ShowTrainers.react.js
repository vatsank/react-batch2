import React from 'react';
import { fetchAllTrainers } from '../restReducer';
import {connect} from 'react-redux';
import { createSelector } from 'reselect';


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

// const mapStateToProps = (state) => {
     
//    
//     return {
//         loadStatus: state.trainers.loaded,
//         dataList:state.trainers.list
//     }
// }

// const mapStateToProps = (state) => {
     
    
//     return {
//         loadStatus: state.trainers.loaded,
//         dataList:selectTopTrainers(state)
//     }
// }

const mapStateToProps = (state) => {
     
    
    return {
        loadStatus: state.trainers.loaded,
        dataList:topRated(state),
        dataList2:lowRated(state)
    }
}

const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get: () => {
            dispatch(fetchAllTrainers())
        }
    }
}

// function selectTopTrainers(state){

//    return state.trainers.list.filter(eachItem => eachItem.rating<=4.1);
// }

const trainerSelector = state => state.trainers.list;

export const topRated = createSelector([trainerSelector], list => {
    return list.filter(eachItem => eachItem.rating>4.1);
  });

  export const lowRated = createSelector([trainerSelector], list => {
    return list.filter(eachItem => eachItem.rating<=4.1);
  });

  

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrainers);
