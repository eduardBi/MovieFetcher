import React from 'react';
import MoviePoster from "./MoviePoster";
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {reduerObjectTYpe} from "../Redux/reducer/RootReducer";
import { IMovieEssantial } from '../Redux/reducer/scrollFetchingReducer';

const SingleMovie = () => {
    const location=useLocation<string>();
    let currentMovieId:number=parseInt(location.pathname.substring(8))
    console.log(currentMovieId)
    let Movies =useSelector<reduerObjectTYpe,IMovieEssantial[]>(e=>e.scrollFetchingReducer)
    let MovieITem:IMovieEssantial[]=Movies.filter(e=>e.id===currentMovieId);
    //ищу текущий фильм по айди из поисковой строки 
    let showingMovie:IMovieEssantial=MovieITem[0];
    return (
        <div className="movie-list-wrapper" style={{display:'block',width:'33%',margin:'0 auto'}}>
            <MoviePoster {...showingMovie}></MoviePoster>
            </div>
    );
}

export default SingleMovie;
