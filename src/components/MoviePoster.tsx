import React, { useState } from 'react';
import Stars from "./Stars";

export interface MoviePosterData{
    poster_path:string;
    title:string;
    vote_average:number;
    id:number
}

export type starsByUser={userVoted:boolean,howMuch:number}

const MoviePoster:React.FC<MoviePosterData>=({poster_path,vote_average,title,id}) => {


    const MarkAsVouted=(id:number,value:number):void=>{
        console.log(id,value)
    }

    return (
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt=""
            />
            <h3>{title}</h3>
            <Stars
                id={id}
              setUserVouted={MarkAsVouted}    
            ></Stars>
        </div>
    );
}

export default MoviePoster;
