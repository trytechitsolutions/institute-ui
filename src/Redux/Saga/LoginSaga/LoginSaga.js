import { takeEvery, put, call } from 'redux-saga/effects';
import { apiRequest } from '../../../Service/CommonService';
import { loginFail, loginRequest, loginSuccess } from '../../Reducers/LoginReducer';
import { getLoginData, getErrorMsg, } from '../../../Components/ReusableComponents/CoomonFunctions/CommonFunctions';
import { setToken } from '../../../Components/SecureStorage/SecureStorage';

function* lginCall(action) {
  try {
    const response = yield call(apiRequest, action.payload);
      setToken('token', response.data.token);
    yield put(loginSuccess(getLoginData()));
  } catch (error) {
    yield put(loginFail(getErrorMsg(error)));
  }
}

export function* LoginSaga() {
  yield takeEvery(loginRequest.type, lginCall);
}
