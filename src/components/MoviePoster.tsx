import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Stars from "./Stars";


export interface MoviePosterData{
    poster_path:string;
    title:string;
    vote_average:number;
    id:number;
    ratedByUser:boolean;
    howMuch:number
}

export type starsByUser={userVoted:boolean,howMuch:number}

const MoviePoster:React.FC<MoviePosterData>=({poster_path,vote_average,title,id,ratedByUser,howMuch}) => {

    let dis=useDispatch()

    const MarkAsVouted=(id:number,value:number):void=>{
        dis({type:'RATE_MOVIE',id:id,howMuch:value})
    }

    let arrayOFstarsPRerenderd=[]
    for(let i=0;i<5;i++){
        arrayOFstarsPRerenderd.push(Math.round(vote_average/2-1)>=i?
        <span  
        onClick={()=>MarkAsVouted(id,i)}
        style={
                {color: ratedByUser && howMuch+1>i? 'yellow':"black"}
            }>
                заполненая
        </span>:<span  
        onClick={()=>MarkAsVouted(id,i)}
        style={
                {color: ratedByUser && howMuch+1>i ?'yellow':"black"}
            }>
                пустая
        </span>)
    }
    


    return (
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt=""
            />
            <h3>{title}</h3>
            <Stars
                starsArray={arrayOFstarsPRerenderd}
            ></Stars>
        </div>
    );
}

export default MoviePoster;
