import { all } from 'redux-saga/effects';
import { LoginSaga } from './LoginSaga/Index';
import { ClassSagga } from './ClassSaga/Index';


// Combine all your sagas here
function* RootSaga() {
  yield all([
   LoginSaga(),
   ClassSagga(),
  ]);
}

export default RootSaga;
