import React from 'react';

export interface MoviePosterData{
    poster_path:string
}

const MoviePoster:React.FC<MoviePosterData>=({poster_path}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt=""/>
        </div>
    );
}

export default MoviePoster;
