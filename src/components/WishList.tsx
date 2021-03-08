import React from 'react';
import { useSelector } from 'react-redux';
import {reduerObjectType} from "../Redux/reducer/reducersReturnTypes";
import {MoviePosterData} from "../Redux/reducer/reducersReturnTypes";
import MoviePoster from "./MoviePoster";


const WishList = () => {
    let WishList=useSelector<reduerObjectType,MoviePosterData[]>(e=>e.scrollFetchingReducer.data);
    
    return (
        <div className="movie-list-wrapper"> 
            { WishList.map(e=>{
                if(e.inWishList){
                return  <MoviePoster {...e}></MoviePoster>
            }
                return ''
            }
        )}
        </div>
    );
}

export default WishList;
