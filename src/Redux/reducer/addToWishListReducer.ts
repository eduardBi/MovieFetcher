import { Action } from "redux";
import { IMovieEssantial } from "./scrollFetchingReducer";

type acion={
    type:string,
    payload:IMovieEssantial
}

export const addToWishListReducer=(state:IMovieEssantial[]=[],action:acion):IMovieEssantial[]=>{
    
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
    
            if(state.filter(i=>i.id === action.payload.id).length == 0){
                 return [...state,action.payload];
            }
            return state
            break;
        default: return state;
        
    }
}