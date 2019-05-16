import { createStore ,applyMiddleware} from 'redux'
import sagaMiddleWare from 'redux-saga';
import watchItems from './sagas/saga';
import {createLogger} from 'redux-logger';

const logger  = createLogger();

const nameInitialState = {
    itemCount:1,
    users:[{name:'Ramesh'}]
}
const reducer = (state = nameInitialState, action) => {

    let newState ={...state}
    switch (action.type) {
        case 'ADD_ITEM_ASYNC':
           newState.itemCount+=action.value;
           break;
        case "SUB_ITEM_ASYNC":
                newState.itemCount-=action.value;
                break;
         case "FETCH_USER_ASYNC":
                console.log(action.list);
                newState.users =action.list
                break;
                default:
                 newState =state;
             }
            
           return newState
}

const sagmiddle = sagaMiddleWare();

const store = createStore(reducer,applyMiddleware(sagmiddle,logger));


sagmiddle.run(watchItems)

export default store