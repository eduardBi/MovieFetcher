import {fetchDataAction ,rateMovie  } from "./actionTypes";

export  function rateMovieFunction(id:number,howMuch:number):rateMovie{
    return{
        howMuch:howMuch,
        id:id,
        type:'RATE_MOVIE'
    }
}



export  function requestMovie(page:number):fetchDataAction{
    return {
        type:"REQUEST_MOVIES",
        payload:[],
        page:page,
    }
}