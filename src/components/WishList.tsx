import React from 'react';
import { useSelector } from 'react-redux';
import { IMovieEssantial } from '../Redux/reducer/scrollFetchingReducer';
import {reduerObjectTYpe} from "../Redux/reducer/RootReducer";
import MoviePoster from "./MoviePoster";

const WishList = () => {
    let WishList=useSelector<reduerObjectTYpe,IMovieEssantial[]>(e=>e.addToWishListReducer);
    
    return (
        <div> 
            {WishList.map(e=><MoviePoster {...e}></MoviePoster>)}
        </div>
    );
}

export default WishList;
