import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';


const initialState = {
    loaded:false,
    list:[{}]
}

//fetchTrainer is an action creator what it returns is an action

export const fetchTrainer = (frmThunk,status)=>{
    return {
        type:'FETCH_TRAINERS',
        list:frmThunk,
        loaded:status
    }
}
const url = "http://localhost:4000/trainers"
// create a Function - for thunk

export const fetchAllTrainers =()=>{

    return function(dispatch){

        axios.get(url).then(resp=>dispatch(
             {type:'FETCH_TRAINERS',list:resp.data,loaded:true}));
    }
}

// Reducer
const trainers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRAINERS':
            return action;
         default:
            return state
    }
}

// Store
const reststore = createStore(trainers,composeWithDevTools(applyMiddleware(thunk)));

export default reststore