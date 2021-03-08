import {scrollFetchingReducer} from "./scrollFetchingReducer";
//import {Some} from "./RatingReducer";
import {applyMiddleware, createStore,combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {SagaFetchMovies } from "../Fetcher";
import {addToWishListReducer} from "./addToWishListReducer";

const SagaMiddleware=createSagaMiddleware()

export let rootReducer=combineReducers({scrollFetchingReducer,addToWishListReducer})

export const store=createStore(rootReducer,applyMiddleware(SagaMiddleware))
SagaMiddleware.run(SagaFetchMovies)

