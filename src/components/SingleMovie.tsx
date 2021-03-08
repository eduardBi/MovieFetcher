import React from 'react';
import MoviePoster from "./MoviePoster";
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {reduerObjectType} from "../Redux/reducer/reducersReturnTypes";
import {MoviePosterData} from "../Redux/reducer/reducersReturnTypes";


const SingleMovie = () => {
    const location=useLocation<string>();
    let currentMovieId:number=parseInt(location.pathname.substring(8))
    console.log(currentMovieId)
    let Movies =useSelector<reduerObjectType,MoviePosterData[]>(e=>e.scrollFetchingReducer.data)
    let MovieITem:MoviePosterData[]=Movies.filter(e=>e.id===currentMovieId);
    //ищу текущий фильм по айди из поисковой строки 
    let showingMovie:MoviePosterData=MovieITem[0];
    return (
        <div className="movie-list-wrapper" style={{display:'block',width:'33%',margin:'0 auto'}}>
            <MoviePoster {...showingMovie}></MoviePoster>
            </div>
    );
}

export default SingleMovie;
