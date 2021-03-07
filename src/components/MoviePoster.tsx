import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Stars from "./Stars";
import {Link  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar  as HollowStar  } from '@fortawesome/free-regular-svg-icons'
import {  faStar  as SolidStar } from '@fortawesome/free-solid-svg-icons'

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
        //закрашиваю звёзды в желтый
        dis({type:'RATE_MOVIE',id:id,howMuch:value})
    }

    let arrayOFstarsPRerenderd=[]
    for(let i=0;i<5;i++){
        //создаю массив звёзд
        
        arrayOFstarsPRerenderd.push(Math.round(vote_average/2-1)>=i?
        <span  
            key={i}
            onClick={()=>MarkAsVouted(id,i)}
            style={
                {color: ratedByUser && howMuch+1>i? 'yellow':"black"}
                //закрашиваю в желтый цвет если пользыватель проголосова
        }//вывожу закрашенную звезду для различия между "проголосовал пользыватель (цвет) и среднее число голосов (полная или пустая звезда)"
        >
            <FontAwesomeIcon icon={SolidStar} />
            
        </span>:<span  
            key={i}
            onClick={()=>MarkAsVouted(id,i)}
            style={
                {color: ratedByUser && howMuch+1>i ?'yellow':"black"}
            }//вывожу пустую звезду 
            >
                <FontAwesomeIcon icon={HollowStar}></FontAwesomeIcon>
                
        </span>)
    }
    
    const addToWishList=(data:MoviePosterData)=>{
        //добавляю в лист для желаний 
        dis({type:'ADD_TO_WISHLIST', payload:data})
    }


    return (
        <div className="movie-list-item">
            <img 
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`} 
                alt=""
            />
            <Link 
                    className="movie-list-link"
                    to={`/Movies/${id}`} 
                    >{title}
            </Link>
            <Stars
                starsArray={arrayOFstarsPRerenderd}
            ></Stars>
            <button className='movie-list-button'
                onClick={()=>addToWishList(data)}
            >add to wishList</button>
        </div>
    );
}

export default MoviePoster;
