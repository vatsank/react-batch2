import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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

 
const store = createStore(reducer,composeWithDevTools())

export default store