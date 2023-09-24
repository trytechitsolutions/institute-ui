// src/sagas/saga1.js
import { takeEvery, put, call } from 'redux-saga/effects';
import { LoginRequest } from '../../Constants/LoginConstants';
import apiRequest from '../../../Service/CommonService';
import loginFail from '../../Actions/LoginAction';
import loginSuccess from '../../Actions/LoginAction';
import getLoginData from '../../../Components/ReusableComponents/CoomonFunctions/CommonFunctions';
import getErrorMsg from '../../../Components/ReusableComponents/CoomonFunctions/CommonFunctions';
import { setToken } from '../../../Components/SecureStorage/SecureStorage';

function* lginCall(action) {
  try {
    const response = yield call(apiRequest, action.req);
    setToken('token', response.data.token);
    yield put(loginSuccess(getLoginData()));
  } catch (error) {
    yield put(loginFail(getErrorMsg(error)));
  }
}

export function* LoginSaga() {
  yield takeEvery(LoginRequest, lginCall);
}
