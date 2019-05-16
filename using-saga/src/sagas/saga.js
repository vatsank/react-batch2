import {takeEvery,put,takeLatest,take,delay} from 'redux-saga/effects'; 


function* addItemAsync(value){

    yield delay(2000); 
	yield put({type:'ADD_ITEM_ASYNC',value:value})

}

function* subItemAsync(){

	yield put({type:'SUB_ITEM_ASYNC',value:1})

}
function* watchItems(){

   // yield takeLatest('ADD_ITEM',addItemAsync);

   const frmView = yield take('ADD_ITEM');

         let  value =   frmView.value;

         yield takeLatest('ADD_ITEM',()=> addItemAsync(value));

     yield takeEvery('SUB_ITEM',subItemAsync);

}

export default watchItems