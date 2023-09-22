import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import LoginReducer from './Reducers/LoginReducer';
import RootSaga from './Saga/RootSaga';


const rooReducer = {
    LoginReducer: LoginReducer,
};
const reducer = combineReducers(rooReducer);
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga);
export default store;