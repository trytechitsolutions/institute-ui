import { takeEvery, put, call } from 'redux-saga/effects';
import { apiRequest } from '../../../Service/CommonService';
import { classGetFail, classGetRequest, classGetSuccess, classSaveFail, classSaveSuccess, } from '../../Reducers/ClassReducer';
import { getErrorMsg, } from '../../../Components/ReusableComponents/CoomonFunctions/CommonFunctions';

function* classSave(action) {
    try {
        const response = yield call(apiRequest, action.payload);
        yield put(classSaveSuccess(response));
    } catch (error) {
        yield put(classSaveFail(getErrorMsg(error)));
    }
}

function* classGet(action) {
    try {
        const response = yield call(apiRequest, action.payload);
        console.log(response)
        yield put(classGetSuccess(response));
    } catch (error) {
        yield put(classGetFail(getErrorMsg(error)));
    }
}

export function* ClassSagga() {
    yield takeEvery(classGetRequest.type, classSave);
    yield takeEvery(classGetRequest.type, classGet);
}
