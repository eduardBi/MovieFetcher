import {scrollFetchingReducer} from "./scrollFetchingReducer";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {SagaFetchMovies } from "../Fetcher";
const SagaMiddleware=createSagaMiddleware()

export const store=createStore(scrollFetchingReducer,applyMiddleware(SagaMiddleware))
SagaMiddleware.run(SagaFetchMovies)

