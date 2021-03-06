import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Stars from "./Stars";
import {Link  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar  as HollowStar  } from '@fortawesome/free-regular-svg-icons'
import {  faStar  as SolidStar } from '@fortawesome/free-solid-svg-icons'
import {MoviePosterData} from "../Redux/reducer/reducersReturnTypes";
import {rateMovieFunction} from "../Redux/actions/actions";
import {AddToWishList, DeleteFromWishList} from "../Redux/actions/actions";

export type starsByUser={userVoted:boolean,howMuch:number}

const MoviePoster:React.FC<MoviePosterData>=(data:MoviePosterData) => {
    let {poster_path,inWishList,title,vote_average,id,ratedByUser,howMuch}=data

    

    let dis=useDispatch()

    const MarkAsVouted=(id:number,value:number):void=>{
        //закрашиваю звёзды в желтый
        dis(rateMovieFunction(id,value))
    }

    let arrayOFstarsPRerenderd=[]
    for(let i=0;i<5;i++){
        //создаю массив звёзд
        
        arrayOFstarsPRerenderd.push(Math.round(vote_average/2-1)>=i?
        <span  
            key={i}
            onClick={()=>MarkAsVouted(id,i)}
            className={ratedByUser && howMuch+1>i? 'dark-blue-start':'purple-star' }
                //закрашиваю в желтый цвет если пользыватель проголосова
                //вывожу закрашенную звезду для различия между "проголосовал пользыватель (цвет) и среднее число голосов (полная или пустая звезда)"
        >
            <FontAwesomeIcon icon={SolidStar} />
            
        </span>:<span  
            key={i}
            onClick={()=>MarkAsVouted(id,i)}
            className={ratedByUser && howMuch+1>i? 'dark-blue-start':'purple-star' }
            //вывожу пустую звезду 
            >
                <FontAwesomeIcon icon={HollowStar}></FontAwesomeIcon>
                
        </span>)
    }
    
    const addToWishList=(id:number)=>{
        //добавляю в лист для желаний 
            dis(AddToWishList(id))
        
    } 
    const removeFromWishList=(id:number)=>{
        //удаляю  из  лист для желаний 
            dis(DeleteFromWishList(id))
        
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
            {!inWishList ?
            <button
                className={`movie-list-button in-wish-list`}
                onClick={()=>addToWishList(id)}
            >add to wishList</button>:<button
                className='movie-list-button non-wish-list'
                onClick={()=>removeFromWishList(id)}
            >remove to wishList</button>
            }
        </div>
    );
}

export default MoviePoster;
