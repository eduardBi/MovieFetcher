import {fetchDataAction ,rateMovie,WISH_LIST_TYPE_ACTION} from "./actionTypes";

export  function rateMovieFunction(id:number,howMuch:number):rateMovie{
    return{
        howMuch:howMuch,
        id:id,
        type:'RATE_MOVIE'
    }
}

export  function AddToWishList(id:number):WISH_LIST_TYPE_ACTION{
    return{
        type:'ADD_TO_WISHLIST',
        id:id
    }
}
export  function DeleteFromWishList(id:number):WISH_LIST_TYPE_ACTION{
    return{
        type:'REMOVE_FROM_WISHLIST',
        id:id
    }
}

export  function requestMovie(page:number):fetchDataAction{
    return {
        type:"REQUEST_MOVIES",
        payload:[],
        page:page,
    }
}