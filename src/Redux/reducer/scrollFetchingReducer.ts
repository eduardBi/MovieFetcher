import { Action } from "redux";

interface IMovieEssantial{
    vote_count:number;
    vote_average:number;
    title:string;
    poster_path:string
}   
type acion={
    type:string,
    payload:IMovieEssantial[]
}

export const scrollFetchingReducer=(state:IMovieEssantial[]=[],action:acion):IMovieEssantial[]=>{
    switch (action.type) {
        case 'REQUEST_MOVIES':
            console.log('request')
            return state;
            break;
        case 'SUCCESS_MOVIES':
            console.log(action.payload)
            return [...state,...action.payload]
        break;
        case "FAIL_MOVIES":
            console.log('fail')
            return state
        default:
            return state
    }
}








export {}





