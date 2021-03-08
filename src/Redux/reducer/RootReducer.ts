import {scrollFetchingReducer} from "./scrollFetchingReducer";
//import {Some} from "./RatingReducer";
import {applyMiddleware, createStore,combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {SagaFetchMovies } from "../Fetcher";
import {addToWishListReducer} from "./addToWishListReducer";

const SagaMiddleware=createSagaMiddleware()



let rootReducer=combineReducers({scrollFetchingReducer,addToWishListReducer})

export type reduerObjectType=ReturnType <typeof rootReducer>

export const store=createStore(rootReducer,applyMiddleware(SagaMiddleware))
SagaMiddleware.run(SagaFetchMovies)

