import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import LoginReducer from './Reducers/LoginReducer';
import RootSaga from './Saga/RootSaga';
import ClassReducer from "./Reducers/ClassReducer";
import ActiveReducer from "./Reducers/ActiveReducer";


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