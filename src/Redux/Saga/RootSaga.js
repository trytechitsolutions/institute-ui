import { all } from 'redux-saga/effects';
import { LoginSaga } from './LoginSaga/LoginSaga';
import { ClassSagga } from './LoginSaga/ClassSaga';


// Combine all your sagas here
function* RootSaga() {
  yield all([
   LoginSaga(),
   ClassSagga(),
  ]);
}

export default RootSaga;
