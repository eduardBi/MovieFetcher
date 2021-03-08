import { Action } from "redux";
import {MoviePosterData} from "./reducersReturnTypes";
import {scrollFetchingType} from "./reducersReturnTypes";
import { fetchDataAction ,rateMovie   } from "../actions/actionTypes";

const initialState={
    data:[],
    error:false,
    isloading:true,
}

export const scrollFetchingReducer=(state:scrollFetchingType=initialState,action:fetchDataAction|rateMovie):scrollFetchingType=>{
    switch (action.type) {
        case 'REQUEST_MOVIES':
            return { 
                data:[],
                error:false,
                isloading:true
            };
        break;

        case 'SUCCESS_MOVIES':
            let modifiedArray:MoviePosterData[]=[]
            action.payload.map(item=>{
                modifiedArray.push({...item,howMuch:0,ratedByUser:false,inWishList:false})
                    //добавляю поля проголосовал ли пользыватель
            })
            return {data:[...state.data,...modifiedArray],error:false,isloading:false}
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
            
            case 'ADD_TO_WISHLIST':
                if(state.data.filter(i=>i.id === action.id).length == 0){
                    //проверяю нет ли данного фильма б чтобы не создавать копию 
                     return {...state,data:[...action.payload]};
                }
                

                return state
            break;           
        default:
            return state
    }
}






