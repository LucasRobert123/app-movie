import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@/reducers";
import movieSagas from "@/sagas/movieSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(movieSagas);

export default store;
