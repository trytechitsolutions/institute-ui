import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import LoginReducer from './Reducers/LoginReducer/Index';
import RootSaga from './Saga/Index';
import ClassReducer from "./Reducers/ClassReducer/Index";
import ActiveReducer from "./Reducers/ActiveReducer/Index";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    LoginReducer: LoginReducer,
    ClassReducer: ClassReducer,
    ActiveReducer:ActiveReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(RootSaga);

export default store;