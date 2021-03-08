import { Action } from "redux";
import {MoviePosterData} from "./reducersReturnTypes";

type acion={
    type:string,
    payload:MoviePosterData
}

export const addToWishListReducer=(state:MoviePosterData[]=[],action:acion):MoviePosterData[]=>{
    
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
    
            if(state.filter(i=>i.id === action.payload.id).length == 0){
                //проверяю нет ли данного фильма б чтобы не создавать копию 
                 return [...state,action.payload];
            }
            return state
            break;
        default: return state;
        
    }
}