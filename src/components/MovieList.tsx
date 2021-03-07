import React, { useState ,useEffect, MouseEvent} from 'react';
import { Dispatch } from "redux";
import Stars from "./Stars";
import MoviePoster from "./MoviePoster";
import {MoviePosterData } from "./MoviePoster";
import {useSelector,useDispatch} from "react-redux";
import {reduerObjectTYpe} from "../Redux/reducer/RootReducer";
import { IMovieEssantial } from '../Redux/reducer/scrollFetchingReducer';

const  MovieList:React.FC=()=>{

  let moviesList=useSelector<reduerObjectTYpe,IMovieEssantial[]>(e=>{return e.scrollFetchingReducer});
   //получаю список фильмов из саги 
  let [uploadMoviePages,setUploadMoviePages]=useState<number>(3)
    //количество загружаемых страниц 

  let dis=useDispatch()  

  useEffect(()=>{
    for(let i=1;i<uploadMoviePages;i++){
      dis({type:"REQUEST_MOVIES",page:i})
    }
    //добавляю первые 5 страниц с сервера при первой загрузке
  },[])
  
  const uploadOnMouseScroll=():void => {
    // если пользыватель доходит до конца страницы увеличиваю значение страницы и диспатчу 
    let fullHeight:number=document.body.scrollHeight;
    let currentHeightPosition:number=window.pageYOffset 
    let heightOfWindow:number=document.documentElement.clientHeight
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

  const handleUploadOnScroll=():void=>{
    setUploadMoviePages(uploadMoviePages+1)
    dis({type:"REQUEST_MOVIES",page:uploadMoviePages})
  }

  return (
          <div className="movie-list-wrapper">
                {moviesList.map(e=><MoviePoster 
                  key={e.id}
                  {...e}
                ></MoviePoster>)}
          </div>
     );
}

export default MovieList;