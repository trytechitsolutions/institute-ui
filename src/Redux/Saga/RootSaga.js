import { all } from 'redux-saga/effects';
import { LoginSaga } from './LoginSaga/LoginSaga';


// Combine all your sagas here
function* RootSaga() {
  yield all([
   LoginSaga(),
  ]);
}

export default RootSaga;
