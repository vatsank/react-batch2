import { createStore,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import trainers from './restReducer'

import thunk from 'redux-thunk';

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
     {reducer:reducer,trainers:trainers}
 );
const store = createStore(combined,composeWithDevTools(applyMiddleware(thunk)))

export default store