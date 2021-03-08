import {rootReducer} from "./RootReducer";


export interface MoviePosterData{
    //информация об одном объекте массива
    poster_path:string;
    title:string;
    vote_average:number;
    id:number;
    ratedByUser:boolean;
    howMuch:number;
    inWishList:boolean;
}

export interface scrollFetchingType{
    //ответ сервера на запрос
    data:MoviePosterData[];
    error:boolean;
    isloading:boolean;
}

export type reduerObjectType=ReturnType <typeof rootReducer>