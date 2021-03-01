import React, { useState ,useEffect, MouseEvent} from 'react';
import { Dispatch } from "redux";
import Stars from "./Stars";
import MoviePoster from "./MoviePoster";
import {MoviePosterData } from "./MoviePoster";


interface MovieListProps{
    dis:Dispatch
    movies:MoviePosterData[]
}

const  MovieList:React.FC<MovieListProps>=({dis,movies})=>{
  let [uploadMoviePages,setUploadMoviePages]=useState<number>(6)

  useEffect(()=>{
    for(let i=1;i<uploadMoviePages;i++){
      dis({type:"REQUEST_MOVIES",page:i})
    }
    //добавляю первые 5 страниц с сервера при первой загрузке
  },[])
  
  const uploadOnMouseScroll=():void => {
    let fullHeight=document.body.scrollHeight;
    let currentHeightPosition=window.pageYOffset 
    let heightOfWindow=document.documentElement.clientHeight
    if(fullHeight-300<currentHeightPosition+heightOfWindow){
     handleUploadOnScroll()
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", uploadOnMouseScroll);
    return () => {
      window.removeEventListener("scroll", uploadOnMouseScroll);
    };
  });

  const handleUploadOnScroll=()=>{
    setUploadMoviePages(uploadMoviePages+1)
    dis({type:"REQUEST_MOVIES",page:uploadMoviePages})
  }

  return (
          <div style={{display:'flex',flexWrap:'wrap'}}>
            {movies.map(e=><MoviePoster  poster_path={e.poster_path} ></MoviePoster>)}
          </div>
     );
}

export default MovieList;