import React from 'react';
import { useSelector } from 'react-redux';
import {reduerObjectType} from "../Redux/reducer/RootReducer";
import MoviePoster from "./MoviePoster";
import {MoviePosterData} from "./MoviePoster";

const WishList = () => {
    let WishList=useSelector<reduerObjectType,MoviePosterData[]>(e=>e.addToWishListReducer);
    
    return (
        <div className="movie-list-wrapper"> 
            { WishList.map(e=><MoviePoster {...e}></MoviePoster>)}
        </div>
    );
}

export default WishList;
