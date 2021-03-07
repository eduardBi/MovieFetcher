import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Stars from "./Stars";
import {Link  } from "react-router-dom";


export interface MoviePosterData{
    poster_path:string;
    title:string;
    vote_average:number;
    id:number;
    ratedByUser:boolean;
    howMuch:number
}

export type starsByUser={userVoted:boolean,howMuch:number}

const MoviePoster:React.FC<MoviePosterData>=(data:MoviePosterData) => {
    let {poster_path,title,vote_average,id,ratedByUser,howMuch}=data

    

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
    
    const addToWishList=(data:MoviePosterData)=>{
        console.log(data)
        dis({type:'ADD_TO_WISHLIST', payload:data})
    }


    return (
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt=""
            />
            <h3><Link to={`/Movies/${id}`} >{title}</Link></h3>
            <Stars
                starsArray={arrayOFstarsPRerenderd}
            ></Stars>
            <button onClick={()=>addToWishList(data)}>add to wishList</button>
        </div>
    );
}

export default MoviePoster;
