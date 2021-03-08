import { Action } from "redux";
import {MoviePosterData} from "../../components/MoviePoster";

export interface scrollFetchingType{
    data:MoviePosterData[];
    error:boolean;
    isloading:boolean;
}

type acion={
    type:string,
    payload:MoviePosterData[];
    id:number;
    howMuch:number
}
const initialState={
    data:[],
    error:false,
    isloading:true,
}

export const scrollFetchingReducer=(state:scrollFetchingType=initialState,action:acion):scrollFetchingType=>{
    switch (action.type) {
        case 'REQUEST_MOVIES':
            return { 
                data:[],
                error:false,
                isloading:true
            };
            break;
        case 'SUCCESS_MOVIES':
            return {data:[...state.data,...action.payload],error:false,isloading:false}
            //добавляю в уже существующий массив данные из сервера  
            break;

        case "FAIL_MOVIES":
            return {data:[...state.data,...action.payload],error:true,isloading:false}
            break;

        case "RATE_MOVIE":
            let ratingModifyArray:MoviePosterData[]=[]
            state.data.map(item=>{
               if(item.id===action.id){
                    ratingModifyArray.push({...item,howMuch:action.howMuch,ratedByUser:true})
                }else{
                    ratingModifyArray.push({...item})
                    }
                    //добавляю поля проголосовал ли пользыватель
                })
            return {...state,data:ratingModifyArray}
            break;

        default:
            return state
    }
}






