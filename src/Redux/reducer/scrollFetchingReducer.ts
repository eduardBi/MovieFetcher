import { Action } from "redux";

export interface IMovieEssantial{
    vote_count:number;
    vote_average:number;
    title:string;
    poster_path:string;
    id:number
}   
type acion={
    type:string,
    payload:IMovieEssantial[]
}

export const scrollFetchingReducer=(state:IMovieEssantial[]=[],action:acion):IMovieEssantial[]=>{
    switch (action.type) {
        case 'REQUEST_MOVIES':
            return state;
            break;
        case 'SUCCESS_MOVIES':
            console.log(action.payload)
            return [...state,...action.payload]
            break;
        case "FAIL_MOVIES":
            console.log('fail')
            return state
        case "RATE_MOVIE":
            
            return state
        default:
            return state
    }
}






