import { reducerName } from './reducer'
import { createStore ,applyMiddleware} from 'redux'
import sagaMiddleWare from 'redux-saga';
import {watchItem} from '../sagas/saga';


const nameInitialState = {
    itemCount:1
}
const reducer = (state = nameInitialState, action) => {

    const newState ={...state}
    switch (action.type) {
        case 'ADD_ITEM_ASYNC':
           newState =newState.itemCount+=action.value;
           break;
        case "SUB_ITEM_ASYNC":
                newState =newState.itemCount-=action.value;
                break;
                default:
                 newState =state;
             }
           return newState
}

const sagmiddle = sagaMiddleWare();

const store = createStore(reducer,applyMiddleware(sagmiddle));


sagmiddle.run(watchItem)

export default store