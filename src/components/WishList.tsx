import React from 'react';
import { useSelector } from 'react-redux';
import {reduerObjectType} from "../Redux/reducer/reducersReturnTypes";
import {MoviePosterData} from "../Redux/reducer/reducersReturnTypes";
import MoviePoster from "./MoviePoster";


const WishList = () => {
    let WishList=useSelector<reduerObjectType,MoviePosterData[]>(e=>e.addToWishListReducer);
    
    return (
        <div className="movie-list-wrapper"> 
            { WishList.map(e=><MoviePoster {...e}></MoviePoster>)}
        </div>
    );
}

export default WishList;
