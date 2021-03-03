import { Action } from "redux";

export interface IMovieEssantial{
    vote_count:number;
    vote_average:number;
    title:string;
    poster_path:string;
    id:number;
    ratedByUser:boolean;
    howMuch:number
}   
type acion={
    type:string,
    payload:IMovieEssantial[];
    id:number;
    howMuch:number
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
            let ratingModifyArray:IMovieEssantial[]=[]
            state.map(item=>{
               if(item.id===action.id){
                    ratingModifyArray.push({...item,howMuch:action.howMuch,ratedByUser:true})
                }else{
                    ratingModifyArray.push({...item})
                    }
                 })
                
            return ratingModifyArray
        default:
            return state
    }
}






