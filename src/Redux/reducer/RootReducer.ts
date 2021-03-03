import {scrollFetchingReducer} from "./scrollFetchingReducer";
//import {Some} from "./RatingReducer";
import {applyMiddleware, createStore,combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {SagaFetchMovies } from "../Fetcher";
const SagaMiddleware=createSagaMiddleware()



let rootReducer=combineReducers({scrollFetchingReducer})
export type reduerObjectTYpe=ReturnType <typeof rootReducer>

export const store=createStore(rootReducer,applyMiddleware(SagaMiddleware))
SagaMiddleware.run(SagaFetchMovies)

