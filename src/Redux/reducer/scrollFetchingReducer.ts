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
                data:[...state.data],
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
            console.log(modifiedArray)
            return {data:[...state.data].concat(modifiedArray),error:false,isloading:false}
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
                let inWishListArray:MoviePosterData[]=[];
                state.data.map(item=>{
                    if(item.id===action.id){
                        inWishListArray.push({...item,inWishList:true})
                     }else{
                        inWishListArray.push({...item})
                    }
                         //добавляю поле в листе для желаний 
                     })
                     console.log(inWishListArray)
                return {...state,data:inWishListArray}
            break;     
            case 'REMOVE_FROM_WISHLIST':
                let removeFromWishList:MoviePosterData[]=[];
                state.data.map(item=>{
                    if(item.id===action.id){
                        removeFromWishList.push({...item,inWishList:!item.inWishList})
                     }else{
                        removeFromWishList.push({...item})
                    }
                         //добавляю поле в листе для желаний 
                })  
                return {...state,data:removeFromWishList}
                break;
        default:
            return state
    }
}






