import { MoviePosterData } from "../reducer/reducersReturnTypes";

export type ADD_TO_WISHLIST="ADD_TO_WISHLIST"

export type REQUEST_DATA='REQUEST_MOVIES'
export type SUCCESS_DATA='SUCCESS_MOVIES'
export type RATE_MOVIE='RATE_MOVIE'
export type FAIL_DATA='FAIL_MOVIES'
export type REMOVE_FROM_WISHLIST='REMOVE_FROM_WISHLIST'

export type  fetchingTypes=REQUEST_DATA|SUCCESS_DATA|FAIL_DATA|ADD_TO_WISHLIST|REMOVE_FROM_WISHLIST;

export type fetchDataAction={
    type:fetchingTypes,
    payload:MoviePosterData[];
    page:number;
    id?:number;
}

export type rateMovie={
    type:RATE_MOVIE;
    id:number;
    howMuch:number;
}
