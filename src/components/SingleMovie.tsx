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
    let showingMovie:IMovieEssantial=MovieITem[0];
    return (
            <MoviePoster {...showingMovie}></MoviePoster>
    );
}

export default SingleMovie;
