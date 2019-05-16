import {takeEvery,put,takeLatest,delay} from 'redux-saga/effects'; 


function* addItemAsync(){

    yield delay(2000); 
	yield put({type:'ADD_ITEM_ASYNC',value:1})

}
function* watchItems(){

    yield takeLatest('ADD_ITEM',addItemAsync);

}

export default watchItems