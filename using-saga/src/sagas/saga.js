import {takeEvery,put,takeLatest,take,delay} from 'redux-saga/effects'; 
import { getMaxListeners } from 'cluster';


function* addItemAsync(value){

   // yield delay(2000); 
    yield put({type:'ADD_ITEM_ASYNC',value:value})
    
   const users = yield fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json());

    
   yield put({type:'FETCH_USER_ASYNC',list:users})

   
// vatsank@gmail.com

}

function* subItemAsync(){

	yield put({type:'SUB_ITEM_ASYNC',value:1})
}
function* watchItems(){

   // yield takeLatest('ADD_ITEM',addItemAsync);

   function* one(){

    const frmView = yield take('ADD_ITEM');

         let  value =   frmView.value;

         yield takeLatest('ADD_ITEM',()=> addItemAsync(value));

   }

   function* two(){
       yield takeEvery('SUB_ITEM',subItemAsync);

   }
       yield one();
       yield two();
}
export default watchItems