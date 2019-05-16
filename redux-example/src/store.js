import { createStore,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {reducer as formReducer} from 'redux-form';
import trainers from './restReducer'

import thunk from 'redux-thunk';

const logger = createLogger();
const initialState = {text:'Hello World'}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BIRTHDAY':
            return {...action}
        case 'WEDDINGDAY':
            return {...action}
        default:
            return state
    }
}

 const combined = combineReducers(
     {reducer:reducer,trainers:trainers,form:formReducer}
 );
const store = createStore(combined,composeWithDevTools(applyMiddleware(thunk,logger)))

export default store